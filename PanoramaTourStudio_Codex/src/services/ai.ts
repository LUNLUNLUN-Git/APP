import { GoogleGenAI, Type, Modality } from '@google/genai';
import { v4 as uuidv4 } from 'uuid';
import { Hotspot } from '../lib/db';

const apiKey = process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const analyzePanorama = async (base64Image: string, customPrompt?: string): Promise<Hotspot[]> => {
  if (!ai) throw new Error('GEMINI_API_KEY is not configured.');

  const prompt = customPrompt || DEFAULT_PANORAMA_PROMPT;

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-pro-preview', // Pro model for complex spatial and text reasoning
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: base64Image.split(',')[1] || base64Image, // handle data uris
          },
        },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            xPercent: { type: Type.NUMBER, description: 'X coordinate percentage (0-100)' },
            yPercent: { type: Type.NUMBER, description: 'Y coordinate percentage (0-100)' },
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            question: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            answerIndex: { type: Type.NUMBER }
          },
          required: ['xPercent', 'yPercent', 'title', 'description', 'question', 'options', 'answerIndex']
        }
      }
    }
  });

  const text = response.text?.trim();
  if (!text) throw new Error('No response from AI');

  const data = JSON.parse(text);

  return data.map((item: any) => {
    // Convert 2D (X%, Y%) to spherical (Yaw, Pitch) based on the user's formula
    // Yaw = (X% * 360) - 180 (Wait, X is 0 to 100, so X/100)
    // Actually the prompt asked for 0-100. So we divide by 100.
    const x = item.xPercent / 100;
    const y = item.yPercent / 100;
    
    // Convert UV mapped to inverted inside sphere:
    // yaw = (x - 0.5) * 360 ensures left side of image is negative yaw and right side is positive yaw
    let yaw = (x - 0.5) * 360;
    while (yaw > 180) yaw -= 360;
    while (yaw <= -180) yaw += 360;
    
    // v=0 is pitch=90, v=0.5 is pitch=0, v=1 is pitch=-90
    const pitch = 90 - (y * 180);

    const hotspot: Hotspot = {
      id: uuidv4(),
      yaw,
      pitch,
      type: 'quiz',
      title: item.title,
      content: item.description,
      voiceEnabled: true,
      quiz: {
        question: item.question,
        options: item.options,
        answerIndex: item.answerIndex
      }
    };
    return hotspot;
  });
};

export const DEFAULT_INPAINT_PROMPT = `移除圖片中的腳架、雜物或是人物、並且修補畫面中缺漏的區域，將畫面完整還原。請務必確保修補後的影像邊緣特徵與原始影像完全一致，不要更動邊緣部分，使其能與周遭環境完美融合無接縫。`;

export const editImageWithAI = async (base64Image: string, prompt: string): Promise<string> => {
  if (!ai) throw new Error('GEMINI_API_KEY is not configured.');

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: 'image/png', // Needs to be png or jpeg
            data: base64Image.split(',')[1] || base64Image,
          },
        },
        { text: prompt },
      ],
    },
  });

  for (const part of (response.candidates?.[0]?.content?.parts || [])) {
    if (part.inlineData) {
      return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
    }
  }
  throw new Error('No image returned from AI');
};

export const DEFAULT_PANORAMA_PROMPT = `請分析這張 2D 等距柱狀全景圖（Equirectangular Panorama）。
識別 3 到 5 個有趣且關鍵的物體或區域。
對於每個點，請提供：
1. X 和 Y 座標百分比 (0 到 100)。X=0 是左邊緣，X=100 是右邊緣。Y=0 是頂部邊緣，Y=100 是底部邊緣。確保座標計算精準對應到該物體的中心點位置。
2. 該物體的簡短標題。
3. 詳細但簡短的描述（用於導覽導覽文字）。
4. 關於該物體的 3 選 1 多選題。提供問題、包含 3 個選項字串的陣列，以及正確答案的索引（從 0 開始）。

產出的文字請務必使用「繁體中文」。
僅回傳 JSON 數據。`;
