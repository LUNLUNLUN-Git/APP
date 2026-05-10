import { useRef, useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import { ImagePlus, Map, X, Plus, ChevronLeft, Eye, EyeOff, LayoutGrid } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Scene } from '../../lib/db';
import { motion, Reorder } from 'framer-motion';
import SceneManagerModal from './SceneManagerModal';


const SceneThumbnail = ({ scene, onToggleVisibility }: { scene: Scene, onToggleVisibility: (e: React.MouseEvent) => void }) => {
  const { blobUrls, loadBlobUrl } = useStore();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (scene.imageBlobId) {
      if (blobUrls[scene.imageBlobId]) {
        setUrl(blobUrls[scene.imageBlobId]);
      } else {
        loadBlobUrl(scene.imageBlobId).then(u => {
          if (active) setUrl(u);
        });
      }
    }
    return () => { active = false; };
  }, [scene.imageBlobId, blobUrls, loadBlobUrl]);

  return (url || !scene.imageBlobId) ? (
    <div className="relative group/thumb shrink-0">
      <div 
        className={cn("w-10 h-10 rounded bg-cover bg-center shrink-0 border border-[#2a2623]", scene.isHidden && "opacity-40")} 
        style={url ? { backgroundImage: `url(${url})` } : {}}
      >
        {!url && <Map className="w-4 h-4 text-gray-500 m-auto mt-2.5" />}
      </div>
      <button 
        onClick={(e) => onToggleVisibility(e)}
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity rounded",
          scene.isHidden && "opacity-100"
        )}
      >
        {scene.isHidden ? <EyeOff className="w-4 h-4 text-white" /> : <Eye className="w-4 h-4 text-[#eba96a]" />}
      </button>
    </div>
  ) : (
    <div className={cn("w-10 h-10 rounded bg-[#1c1f26] flex items-center justify-center shrink-0 border border-[#2a2623] text-gray-500", scene.isHidden && "opacity-50")}>
      <Map className="w-4 h-4" />
    </div>
  );
};

export default function SidebarLeft({ onOpenSceneManager, onSceneSelect }: { onOpenSceneManager: () => void, onSceneSelect?: () => void }) {
  const { currentProject, currentSceneId, setCurrentSceneId, addSceneToProject, updateCurrentProject, setMode, selectedSceneIds, setSelectedSceneIds, toggleSceneSelection } = useStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDirectDeleteScene = (sceneId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    const targets = selectedSceneIds.includes(sceneId) ? selectedSceneIds : [sceneId];
    const { showConfirm, dontShowConfirmAgainSession } = useStore.getState();

    const doDelete = () => {
      const updatedScenes = currentProject.scenes.filter(s => !targets.includes(s.id));
      updateCurrentProject((p) => {
        p.scenes = updatedScenes;
        if (targets.includes(p.initialSceneId as string)) {
          p.initialSceneId = updatedScenes.length > 0 ? updatedScenes[0].id : null;
        }
        return p;
      });

      if (targets.includes(currentSceneId as string)) {
        setCurrentSceneId(updatedScenes.length > 0 ? updatedScenes[0].id : null);
      }
      setSelectedSceneIds(selectedSceneIds.filter(id => !targets.includes(id)));
    };

    if (targets.length === 1 || dontShowConfirmAgainSession) {
      doDelete();
    } else {
      showConfirm({
        title: '多選刪除場景',
        message: `確定要刪除選中的 ${targets.length} 個場景嗎？`,
        confirmText: '立刻刪除',
        type: 'danger',
        onConfirm: doDelete
      });
    }
  };

  const [editingSceneId, setEditingSceneId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingSceneId && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingSceneId]);

  const startEditing = (scene: Scene) => {
    setEditingSceneId(scene.id);
    setEditingName(scene.name);
  };

  const saveName = () => {
    if (editingSceneId && editingName.trim()) {
      updateCurrentProject(draft => {
        const s = draft.scenes.find(scene => scene.id === editingSceneId);
        if (s) s.name = editingName.trim();
        return draft;
      });
    }
    setEditingSceneId(null);
  };

  if (!currentProject) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await addSceneToProject(Array.from(files));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleVisibility = (sceneId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    updateCurrentProject(draft => {
      const s = draft.scenes.find(scene => scene.id === sceneId);
      if (s) s.isHidden = !s.isHidden;
      return draft;
    });
  };

  return (
    <aside className="w-full sm:w-[310px] h-full border-r border-[#2a2623] flex flex-col bg-[#131210] shrink-0 z-[300]">
      <div className="p-4 border-b border-[#2a2623] flex flex-col gap-4 bg-[#131210]">
                 <div className="flex items-center gap-3">
          <button 
            onClick={() => setMode('dashboard')}
            className="w-8 h-8 shrink-0 bg-transparent border border-[#2a2623] rounded-md flex items-center justify-center hover:bg-[#1a1816] transition-colors cursor-pointer text-[#e0e0e0]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
                      <div className="flex flex-col truncate min-w-0">
            <span className="text-sm font-bold text-[#e0e0e0] truncate" title={currentProject.name}>{currentProject.name}</span>
          </div>
        </div>
      </div>

      <div className="h-[60px] px-5 border-b border-[#2a2623] flex items-center justify-between shrink-0">
        <h2 className="text-xs font-bold text-[#888] tracking-widest uppercase">場景列表 · {currentProject.scenes.length}</h2>
        <button 
          onClick={onOpenSceneManager}
          disabled={currentProject.scenes.length === 0}
          className={cn(
            "p-1.5 transition-all text-[#888] hover:text-[#eba96a] hover:bg-[#1a1816] rounded-md transition-all cursor-pointer",
            currentProject.scenes.length === 0 && "opacity-20 cursor-default grayscale hover:text-[#888] hover:bg-transparent"
          )}
          title="管理場景"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar pb-4">
        {currentProject.scenes.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-[#555] text-xs space-y-4">
             <div className="w-12 h-12 rounded-full border border-[#2a2623] flex items-center justify-center mb-2 bg-[#1a1816]/50">
                <Plus className="w-6 h-6 text-[#555]" />
             </div>
             <div>
               <p className="text-[#888] font-bold mb-1">尚未新增任何場景</p>
               <p>點擊下方按鈕上傳全景圖</p>
             </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {currentProject.scenes.map((scene) => {
              const isActive = currentSceneId === scene.id;
              const isSelected = selectedSceneIds.includes(scene.id);
              return (
                <div
                  key={scene.id}
                  className={cn(
                    "group relative overflow-hidden cursor-pointer flex flex-col border-b border-[#2a2623] transition-colors",
                    isSelected ? "bg-[#eba96a]/10" : "bg-transparent hover:bg-[#1a1816]/50"
                  )}
                  onClick={(e) => {
                    const isShift = e.shiftKey;
                    const isCtrl = e.ctrlKey || e.metaKey;
                    
                    if (isShift && selectedSceneIds.length > 0) {
                      const allIds = currentProject.scenes.map(s => s.id);
                      const firstSelectedId = selectedSceneIds[0];
                      const startIdx = allIds.indexOf(firstSelectedId);
                      const endIdx = allIds.indexOf(scene.id);
                      if (startIdx !== -1 && endIdx !== -1) {
                        const min = Math.min(startIdx, endIdx);
                        const max = Math.max(startIdx, endIdx);
                        const range = allIds.slice(min, max + 1);
                        setSelectedSceneIds(range);
                        return;
                      }
                    } else if (isCtrl) {
                      toggleSceneSelection(scene.id);
                      return;
                    }
                    
                    setCurrentSceneId(scene.id);
                    if (onSceneSelect) onSceneSelect();
                  }}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#eba96a] z-10" />
                  )}
                  <div className="p-2.5 pl-[18px] flex items-center gap-2 h-14">
                     <SceneThumbnail scene={scene} onToggleVisibility={(e) => toggleVisibility(scene.id, e)} />
                     <div className="truncate flex-1 py-1 ml-1 overflow-hidden" onDoubleClick={() => startEditing(scene)}>
                        {editingSceneId === scene.id ? (
                          <input
                            ref={editInputRef}
                            className="w-full bg-[#111] text-sm font-bold text-white px-1 py-0.5 rounded border border-[#eba96a] outline-none"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            onBlur={saveName}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') saveName();
                              if (e.key === 'Escape') setEditingSceneId(null);
                            }}
                            onClick={(e) => e.stopPropagation()}
                          />
                        ) : (
                          <div className={cn("text-sm font-bold truncate", 
                            isSelected ? "text-[#eba96a]" : (scene.isHidden ? "text-[#555]" : "text-[#e0e0e0]")
                          )}>
                            {scene.name}
                          </div>
                        )}
                     </div>
                     
                     <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => handleDirectDeleteScene(scene.id, e)}
                          className="p-1.5 rounded-md transition-colors text-[#555] opacity-0 group-hover:opacity-100 hover:text-red-400 hover:bg-white/5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="p-4 bg-[#131210] border-t border-[#2a2623]">
        <button 
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "w-full p-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-[14px] font-bold",
            (currentProject.scenes.length === 0 || (currentSceneId && !currentProject.scenes.find(s => s.id === currentSceneId)?.imageBlobId))
              ? "bg-[#eba96a] text-[#141210] hover:bg-[#d99a5e] border-none"
              : "border border-[#2a2623] border-dashed text-[#888] hover:text-[#e0e0e0] hover:bg-[#1a1816]/50"
          )}
        >
          <Plus className="w-3.5 h-3.5" /> 上傳全景圖
        </button>
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          multiple
          ref={fileInputRef} 
          onChange={handleFileUpload}
        />
      </div>
    </aside>
  );
}
