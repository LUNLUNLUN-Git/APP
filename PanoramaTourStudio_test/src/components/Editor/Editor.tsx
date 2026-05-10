import { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { ChevronLeft, Play, MoreVertical, Sparkles, X, RotateCcw, LayoutGrid, Image as ImageIcon, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';
import PanoramaViewer from './PanoramaViewer';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import SceneManagerModal from './SceneManagerModal';
import { SceneListExtension } from './Extensions/SceneListExtension';
import { getBlob } from '../../lib/db';
import { analyzePanorama, DEFAULT_PANORAMA_PROMPT } from '../../services/ai';

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export default function Editor() {
  const { currentProject, setMode, currentSceneId, updateCurrentProject, aiPrompt, setAiPrompt, showConfirm, selectedHotspotIds } = useStore();
  const [analyzing, setAnalyzing] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [tempPrompt, setTempPrompt] = useState(aiPrompt);
  const isAnyModalOpen = useStore(state => state.isAnyModalOpen);
  const [isSceneManagerOpen, setIsSceneManagerOpen] = useState(false);
  
  useEffect(() => {
    if (showPromptModal) {
      setTempPrompt(aiPrompt);
    }
  }, [showPromptModal, aiPrompt]);

  useEffect(() => {
    if (currentProject) {
      const { loadBlobUrl } = useStore.getState();
      currentProject.scenes.forEach(scene => {
        if (scene.imageBlobId) {
          loadBlobUrl(scene.imageBlobId);
        }
      });
    }
  }, [currentProject?.id]);

  
  const [mobileTab, setMobileTab] = useState<'scenes' | 'panorama' | 'settings'>('scenes');
  const activeTool = useStore(state => state.activeTool);
  
  const hideHUD = analyzing || showPromptModal || isAnyModalOpen || isSceneManagerOpen || (mobileTab === 'settings' && window.innerWidth < 640);

  // 6. 手機版點在設定頁面擊繪圖按鈕時，自動轉跳回環景頁面繪圖。
  useEffect(() => {
    if ((activeTool === 'brush' || activeTool === 'eraser' || activeTool !== 'select') && mobileTab === 'settings') {
      setMobileTab('panorama');
    }
  }, [activeTool, mobileTab]);



  if (!currentProject) {
    return <div>未選擇專案</div>;
  }

  const handleSmartAnalysis = async () => {
    if (analyzing || !currentSceneId) return;
    const currentScene = currentProject.scenes.find(s => s.id === currentSceneId);
    if (!currentScene) return;
    
    try {
      setAnalyzing(true);
      const blob = await getBlob(currentScene.imageBlobId);
      if (!blob) throw new Error('Cannot find image');
      const base64 = await blobToBase64(blob);
      const newHotspots = await analyzePanorama(base64, aiPrompt);
      
      updateCurrentProject(draft => {
        const scene = draft.scenes.find(s => s.id === currentSceneId);
        if (scene) scene.hotspots.push(...newHotspots);
        return draft;
      });
      showConfirm({
        title: '分析完成',
        message: 'AI 分析完成，已新增資訊點！',
        confirmText: '太棒了',
        type: 'alert'
      });
    } catch (e: any) {
      showConfirm({
        title: '分析失敗',
        message: '分析失敗: ' + e.message,
        type: 'alert'
      });
      console.error(e);
    } finally {
      setAnalyzing(false);
    }
  };

  const handleSavePrompt = () => {
    setAiPrompt(tempPrompt);
    setShowPromptModal(false);
  };

  const handleResetPrompt = () => {
    setTempPrompt(DEFAULT_PANORAMA_PROMPT);
  };

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden relative">
      {/* Editor Body */}
      <div className="flex flex-1 overflow-hidden relative">
        <div className={cn("absolute sm:relative z-10 w-full sm:w-auto sm:h-full sm:block shrink-0 top-0 left-0 right-0 bottom-[48px] sm:bottom-auto", mobileTab === 'scenes' ? "block" : "hidden")}>
          <SidebarLeft onOpenSceneManager={() => setIsSceneManagerOpen(true)} onSceneSelect={() => {
            if (window.innerWidth < 640) setMobileTab('panorama');
          }} />
        </div>
        
        <main className={cn("flex-1 relative flex flex-col bg-[#050505] pb-[48px] sm:pb-0", mobileTab === 'panorama' ? "flex" : "hidden sm:flex")}>
          {/* Main Panorama Area */}
          <div className="flex-1 relative">
            <PanoramaViewer mode="edit" hideHUD={hideHUD} />
            <SceneListExtension isHidden={hideHUD} />
          </div>
        </main>
        
        <div className={cn(
          "absolute sm:relative z-10 w-full sm:w-auto sm:h-full shrink-0 bg-[#131210]", 
          // Mobile visibility logic
          mobileTab === 'settings' 
            ? "block top-0 left-0 right-0 bottom-0 z-[12000]" 
            : (selectedHotspotIds.length > 0) 
              ? "block left-0 right-0 top-auto bottom-[48px] h-auto !z-[5000] shadow-[0_-15px_40px_rgba(0,0,0,0.6)] border-t border-[#2a2623]" 
              : "hidden",
          // PC visibility logic (always block, clear mobile positioning)
          "sm:block sm:top-auto sm:bottom-auto sm:left-auto sm:right-auto sm:shadow-none sm:border-x sm:border-[#2a2623] sm:!z-10"
        )}>
          <SidebarRight 
            onSmartAnalysis={handleSmartAnalysis}
            analyzing={analyzing}
            onShowPrompt={() => setShowPromptModal(true)}
            isMobilePopup={window.innerWidth < 640 && mobileTab !== 'settings' && selectedHotspotIds.length > 0}
          />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0 h-[48px] bg-[#1a1816] border-t border-[#2a2623] flex items-center justify-around z-[15000] pb-safe">
        <button 
          onClick={() => setMobileTab('scenes')}
          className={cn("flex flex-row items-center justify-center w-full h-full gap-1.5", mobileTab === 'scenes' ? "text-[#eba96a]" : "text-[#888]")}
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="text-xs font-bold">場景</span>
        </button>
        <button 
          onClick={() => setMobileTab('panorama')}
          className={cn("flex flex-row items-center justify-center w-full h-full gap-1.5 border-x border-[#2a2623]", mobileTab === 'panorama' ? "text-[#eba96a]" : "text-[#888]")}
        >
          <ImageIcon className="w-4 h-4" />
          <span className="text-xs font-bold">環景</span>
        </button>
        <button 
          onClick={() => {
            setMobileTab('settings');
            useStore.getState().setSelectedHotspotIds([]);
          }}
          className={cn("flex flex-row items-center justify-center w-full h-full gap-1.5", mobileTab === 'settings' ? "text-[#eba96a]" : "text-[#888]")}
        >
          <Settings className="w-4 h-4" />
          <span className="text-xs font-bold">設定</span>
        </button>
      </div>

      <SceneManagerModal 
        isOpen={isSceneManagerOpen} 
        onClose={() => setIsSceneManagerOpen(false)} 
      />

      {showPromptModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowPromptModal(false)}>
          <div className="bg-[#1a1816] border border-[#2a2623] rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-[#2a2623] flex items-center justify-between bg-[#131210]">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#eba96a]" /> AI 分析提示語 (Prompt)
              </h2>
              <button onClick={() => setShowPromptModal(false)} className="p-1 text-[#888] hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-xs text-[#888] font-medium leading-relaxed">
                  這是在分析全景圖時提供給 AI 的指令內容。您可以根據需求微調分析的深度與產出的標題風格。
                </p>
                <textarea 
                  value={tempPrompt}
                  onChange={(e) => setTempPrompt(e.target.value)}
                  className="w-full bg-[#131210] border border-[#2a2623] rounded-lg p-5 text-xs text-[#e0e0e0] font-mono whitespace-pre-wrap leading-relaxed h-[300px] focus:ring-1 focus:ring-[#eba96a]/30 outline-none"
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button 
                  onClick={handleResetPrompt}
                  disabled={tempPrompt === DEFAULT_PANORAMA_PROMPT}
                  className="px-4 py-2 text-[#888] hover:text-[#eba96a] disabled:opacity-30 disabled:hover:text-[#888] text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>重置為預設值</span>
                </button>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowPromptModal(false)}
                    className="px-6 py-2 bg-[#1a1816] border border-[#2a2623] hover:bg-[#221f1c] text-[#888] text-sm font-bold rounded-md transition-colors cursor-pointer"
                  >
                    取消
                  </button>
                  <button 
                    onClick={handleSavePrompt}
                    className="px-8 py-2 bg-[#eba96a] hover:bg-[#d99a5e] text-[#141210] text-sm font-bold rounded-md transition-shadow cursor-pointer"
                  >
                    儲存設定
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
