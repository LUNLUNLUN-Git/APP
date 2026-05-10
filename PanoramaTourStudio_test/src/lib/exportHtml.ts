import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { getBlob, Project } from './db';
import { useStore } from '../store/useStore';

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const exportProjectToHtml = async (project: Project) => {
  try {
    // 1. Fetch the single-file bundled app
    let htmlContent = '';
    try {
      // Try API first (for development or if backend is present)
      const res = await fetch('/api/export-bundle');
      if (res.ok) {
        htmlContent = await res.text();
      } else {
        throw new Error('API Unavailable');
      }
    } catch (e) {
      console.log("API fallback, trying static asset...");
      try {
        // Try static asset (for GitHub Pages or static host)
        const staticRes = await fetch('/export-bundle.html');
        if (staticRes.ok) {
          htmlContent = await staticRes.text();
        } else {
          throw new Error('Static asset unavailable');
        }
      } catch (staticErr) {
        console.warn("Could not fetch server bundle or static asset:", staticErr);
        throw new Error("無法取得匯出版樣板。如果您是在本地執行，請確認是否已啟動伺服器 (npm run dev)；如果是靜態部署，請確認 /export-bundle.html 是否存在。");
      }
    }

    const zip = new JSZip();

    // Create folder structure
    const configFolder = zip.folder('config');
    const imagesFolder = zip.folder('assets/images');

    let scriptInjections = ``;

    const scriptEnd = String.fromCharCode(60, 47, 115, 99, 114, 105, 112, 116, 62); // </script>

    // 2. Prepare Project Data (Interaction Logic, Configurations, Information Points)
    const projectDataScript = `
// 專案設定與互動邏輯
window.__EXPORTED_PROJECT_DATA__ = ${JSON.stringify(project)};
window.__EXPORTED_IMAGES__ = {};
window.__IS_STANDALONE__ = true;
`;
    configFolder?.file('project-data.js', projectDataScript);
    scriptInjections += `<script src="./config/project-data.js">${scriptEnd}\n`;

    // 3. Prepare Images (Panoramas and Floorplan)
    // Track fetched blobs to avoid duplication
    const fetchedBlobs = new Set<string>();

    const safeAddBlob = async (blobId: string | undefined, namePrefix: string) => {
      if (blobId && !fetchedBlobs.has(blobId)) {
        fetchedBlobs.add(blobId);
        const blob = await getBlob(blobId);
        if (blob) {
          const base64 = await blobToBase64(blob);
          const safeName = namePrefix.replace(/[^a-z0-9]/gi, '_').toLowerCase();
          
          // Download actual raw files for users to view/use
          const extName = blob.type === 'image/png' ? 'png' : 'jpg';
          const fileRawName = `${safeName}_${blobId.substring(0, 4)}.${extName}`;
          imagesFolder?.file(fileRawName, blob);

          // Save base64 data for offline seamless app loading
          const jsFileName = `img_${safeName}_${blobId.substring(0, 4)}.js`;
          const imageScript = `
// Image data: ${namePrefix}
window.__EXPORTED_IMAGES__['${blobId}'] = "${base64}";
`;
          configFolder?.file(jsFileName, imageScript);
          scriptInjections += `<script src="./config/${jsFileName}">${scriptEnd}\n`;
        }
      }
    };

    for (const scene of project.scenes) {
      // Scene Panorama
      await safeAddBlob(scene.imageBlobId, `panorama_${scene.name || 'scene'}`);
      
      // Bottom Logo
      if (scene.bottomLogo?.type === 'image') {
        await safeAddBlob(scene.bottomLogo.imageBlobId, `logo_${scene.name || 'scene'}`);
      }
      
      // Information point images
      for (const hotspot of scene.hotspots || []) {
        if (hotspot.type === 'image' && hotspot.customIconBlobId) {
          await safeAddBlob(hotspot.customIconBlobId, `infopoint_${hotspot.title || 'image'}`);
        }
      }
    }

    for (const scene of project.scenes) {
      // Export floorplans from scenes
      const ext = scene.extensions?.find((e: any) => e.type === 'utilities-floorplan');
      const floorplanBlobId = ext?.config?.floorplanBlobId;
      if (floorplanBlobId) {
        await safeAddBlob(floorplanBlobId, 'floorplan');
      }
      
      // Export 3D Models
      const avatarExt = scene.extensions?.find((e: any) => e.type === 'utilities-avatar');
      const modelBlobId = avatarExt?.config?.modelBlobId;
      if (modelBlobId) {
        await safeAddBlob(modelBlobId, 'model_3d');
      }
    }

    // 4. Inject all scripts into HTML BEFORE </body>
    const bodyEndTag = String.fromCharCode(60, 47, 98, 111, 100, 121, 62); // </body>
    const bodyIndex = htmlContent.lastIndexOf(bodyEndTag);
    let htmlWithScripts = htmlContent;
    if (bodyIndex !== -1) {
      htmlWithScripts = htmlContent.substring(0, bodyIndex) + scriptInjections + htmlContent.substring(bodyIndex);
    } else {
      htmlWithScripts = htmlContent + scriptInjections;
    }

    // 5. Build final zip structure
    zip.file('index.html', htmlWithScripts);
    zip.file('README.txt', '如何檢視匯出的全景專案：\n\n1. 解壓縮整個資料夾\n2. 直接點擊「index.html」檔案來開啟專案。\n\n※ 此版本為單機免伺服器版，內含高保真度的 React 應用程式與所有專案設定。\n※ 「config」資料夾內包含所有互動邏輯與資訊點設定。\n※ 「assets/images」資料夾內包含所有的環景圖影像資料。');

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${project.name || 'project'}_export.zip`);

  } catch (error) {
    console.error("Export error:", error);
    useStore.getState().showConfirm({
      title: '匯出失敗',
      message: '匯出失敗，請確認伺服器有正常運行或網路連線正常。\n錯誤：' + (error as Error).message,
      type: 'alert'
    });
  }
};
