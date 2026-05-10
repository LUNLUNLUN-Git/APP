import { useEffect, useState } from 'react';
import { useStore } from './store/useStore';
import { getAllProjects, saveProject, saveBlob, Project } from './lib/db';
import Dashboard from './components/Dashboard';
import Editor from './components/Editor/Editor';
import ViewerModeWrapper from './components/Viewer/ViewerModeWrapper';
import FloorplanEditor from './components/Editor/FloorplanEditor';
import ConfirmModal from './components/ui/ConfirmModal';
import { v4 as uuidv4 } from 'uuid';

const generatePlaceholderPanorama = async (): Promise<Blob> => {
  const canvas = document.createElement('canvas');
  canvas.width = 4096;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d')!;
  
  const grad = ctx.createLinearGradient(0, 0, 0, 2048);
  grad.addColorStop(0, '#2d7aa3');
  grad.addColorStop(0.48, '#7ba1b8');
  grad.addColorStop(0.5, '#eec89f');
  grad.addColorStop(1, '#815631');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 4096, 2048);
  
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 2;
  for (let x = 0; x <= 4096; x += 128) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 2048); ctx.stroke();
  }
  for (let y = 0; y <= 2048; y += 128) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(4096, y); ctx.stroke();
  }
  
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = 'bold 80px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('北 N', 2048, 1024);
  ctx.fillText('東 E', 3072, 1024);
  ctx.fillText('南 S', 0, 1024);
  ctx.fillText('南 S', 4096, 1024);
  ctx.fillText('西 W', 1024, 1024);

  return new Promise(resolve => canvas.toBlob(b => resolve(b!), 'image/jpeg', 0.8));
};

export default function App() {
  const { mode, setProjects, setCurrentProject, setMode, showFloorplanEditor, blobUrls } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    // Prevent dragstart for images
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  useEffect(() => {
    // Expose load exported images logic to the store or component
    if ((window as any).__EXPORTED_PROJECT_DATA__) {
      const data = (window as any).__EXPORTED_PROJECT_DATA__;
      const images = (window as any).__EXPORTED_IMAGES__ || {};
      
      // Load all export images directly into the store's blob urls
      const state = useStore.getState();
      Object.keys(images).forEach(blobId => {
        // Use functional update to ensure state consistency
        state.blobUrls[blobId] = images[blobId];
      });

      setProjects([data]);
      setCurrentProject(data);
      setMode('preview');
      setLoading(false);
      return;
    }

    const init = async () => {
      try {
        let projects = await getAllProjects();
        
        if (projects.length === 0) {
          const blob = await generatePlaceholderPanorama();
          const blobId = uuidv4();
          
          try {
            await saveBlob(blobId, blob);
          } catch (e) {
            console.warn("IndexedDB save failed, using memory only for demo image.");
          }
          
          // Generate an initial URL so it shows up even without DB reload
          const blobUrl = URL.createObjectURL(blob);
          useStore.getState().blobUrls[blobId] = blobUrl;
          
          const sceneId = uuidv4();
          const demoProject: Project = {
            id: uuidv4(),
            name: '範例專案',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            initialSceneId: sceneId,
            scenes: [
              {
                id: sceneId,
                name: '主展廳',
                description: '這是一個預設的範例場景。',
                imageBlobId: blobId,
                initialView: { yaw: 0, pitch: 0, fov: 75 },
                hotspots: [
                  { id: uuidv4(), type: 'info', yaw: 0, pitch: 5, title: '北方展區', content: '這是北方的測試資訊點' },
                  { id: uuidv4(), type: 'text', yaw: 92, pitch: 20, title: '東方入口', customText: '入口方向' },
                  { id: uuidv4(), type: 'freeform', yaw: 47, pitch: 87, title: '上方藻井' },
                  { id: uuidv4(), type: 'image', yaw: -90, pitch: 0, title: '圖片 4' }
                ]
              }
            ]
          };
          
          try {
            await saveProject(demoProject);
          } catch (e) {
            console.warn("IndexedDB project save failed.");
          }
          projects = [demoProject];
        }
        
        setProjects(projects);
      } catch (err) {
        console.error("Initialization failed:", err);
        // Fallback to empty projects if DB is totally broken (e.g. file:// mode in some browsers)
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [setProjects, setCurrentProject, setMode]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#141210] text-[#eba96a] font-sans">載入中...</div>;
  }

  return (
    <div className="min-h-screen bg-[#141210] text-[#e0e0e0] font-sans flex flex-col overflow-hidden select-none">
      {mode === 'dashboard' && <Dashboard />}
      {mode === 'editor' && <Editor />}
      {mode === 'preview' && <ViewerModeWrapper />}
      {showFloorplanEditor && <FloorplanEditor />}
      <ConfirmModal />
      
      {/* Orientation Warning */}
      <div id="orientation-warning" className="fixed inset-0 z-[100000] bg-[#141210] hidden flex-col items-center justify-center p-8 text-center text-white">
        <RotateCcw className="w-12 h-12 text-[#eba96a] mb-4 animate-spin-slow" />
        <h2 className="text-xl font-black mb-2 tracking-tighter">請旋轉您的裝置</h2>
        <p className="text-sm text-[#888]">本應用程式僅支援直向模式以獲得最佳體驗</p>
      </div>
    </div>
  );
}

import { RotateCcw } from 'lucide-react';
