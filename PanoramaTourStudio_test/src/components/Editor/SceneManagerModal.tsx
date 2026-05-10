import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../../store/useStore';
import { X, Map, GripVertical, Trash2, ZoomIn, ZoomOut, Move } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Scene } from '../../lib/db';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SceneManagementPreviewProps {
  url: string;
  onClose: () => void;
}

function PanoramaPreview({ url, onClose }: SceneManagementPreviewProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.min(Math.max(prev * delta, 0.5), 10));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[11000] bg-black/95 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
    >
      <div 
        className="transition-transform duration-75 select-none"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
      >
        <img 
          src={url} 
          alt="Preview" 
          className="max-w-none h-auto pointer-events-none" 
          style={{ maxHeight: '90vh' }}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute top-6 right-6 flex gap-3">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 text-white/70 text-xs font-mono">
          <button onClick={() => setScale(s => Math.max(s * 0.9, 0.5))} className="hover:text-white transition-colors"><ZoomOut className="w-4 h-4" /></button>
          <span>{Math.round(scale * 100)}%</span>
          <button onClick={() => setScale(s => Math.min(s * 1.1, 10))} className="hover:text-white transition-colors"><ZoomIn className="w-4 h-4" /></button>
          <div className="w-px h-3 bg-white/10 mx-1" />
          <button onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }); }} className="hover:text-white transition-colors"><Move className="w-4 h-4" /></button>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center bg-black/60 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white/50 text-[10px] uppercase tracking-widest pointer-events-none">
        滾輪縮放 · 拖曳位移
      </div>
    </motion.div>
  );
}

interface SceneManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SortableSceneCard = ({ scene, onDelete, onPreview }: { scene: Scene, onDelete: (e: React.MouseEvent) => void, onPreview: (url: string) => void }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: scene.id });
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

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style as any}
      {...attributes}
      {...listeners}
      className={cn(
        "group relative bg-[#1a1816] border border-[#2a2623] rounded-xl overflow-hidden transition-all hover:border-[#eba96a]/50 flex flex-col cursor-grab active:cursor-grabbing",
        isDragging && "opacity-50 shadow-2xl scale-105"
      )}
    >
      <div 
        className="aspect-[2/1] w-full bg-[#131210] relative overflow-hidden"
        onClick={() => url && onPreview(url)}
      >
        {url ? (
          <img 
            src={url} 
            alt={scene.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-[#555]">
            <Map className="w-8 h-8 mb-2" />
            <span className="text-[10px]">無預覽圖</span>
          </div>
        )}
        
        <div className="absolute top-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="p-1.5 bg-black/60 rounded-md text-white">
             <GripVertical className="w-4 h-4" />
           </div>
        </div>

        <button 
          onClick={onDelete}
          className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-md text-[#888] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        {url && (
          <div 
            className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="text-[10px] text-white font-bold">點擊預覽全景圖</span>
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="text-sm font-bold text-[#e0e0e0] truncate" title={scene.name}>{scene.name}</div>
        <div className="text-[10px] text-[#888] mt-1">{scene.hotspots.length} 個資訊點</div>
      </div>
    </div>
  );
};

export default function SceneManagerModal({ isOpen, onClose }: SceneManagerModalProps) {
  const { currentProject, updateCurrentProject, setCurrentSceneId, currentSceneId } = useStore();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (!isOpen || !currentProject) return null;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      updateCurrentProject(draft => {
        const oldIndex = draft.scenes.findIndex((s) => s.id === active.id);
        const newIndex = draft.scenes.findIndex((s) => s.id === over?.id);
        draft.scenes = arrayMove(draft.scenes, oldIndex, newIndex);
        return draft;
      });
    }
  };

  const handleDeleteClick = (sceneId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const { showConfirm, dontShowConfirmAgainSession } = useStore.getState();
    const scene = currentProject.scenes.find(s => s.id === sceneId);
    
    const doDelete = () => {
      const updatedScenes = currentProject.scenes.filter(s => s.id !== sceneId);
      updateCurrentProject((p) => {
        p.scenes = updatedScenes;
        if (p.initialSceneId === sceneId) {
          p.initialSceneId = updatedScenes.length > 0 ? updatedScenes[0].id : null;
        }
        return p;
      });

      if (currentSceneId === sceneId) {
        setCurrentSceneId(updatedScenes.length > 0 ? updatedScenes[0].id : null);
      }
    };

    if (dontShowConfirmAgainSession) {
      doDelete();
    } else {
      showConfirm({
        title: '刪除場景',
        message: `確定要從專案中移除場景「${scene?.name}」嗎？\n此動作無法復原。`,
        confirmText: '確認刪除',
        type: 'danger',
        onConfirm: doDelete
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#1a1816] border border-[#2a2623] rounded-2xl w-full max-w-6xl h-[80vh] flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-[#2a2623] flex items-center justify-between bg-[#1a1816]">
                <div>
                  <h2 className="text-xl font-bold text-white">場景管理</h2>
                  <p className="text-sm text-[#888] mt-1">管理與排序專案中的所有環景圖</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-[#888] hover:text-white hover:bg-[#2a2623] rounded-full transition-all cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-[#131210]">
                {currentProject.scenes.length === 0 ? (
                  <div className="h-64 flex flex-col items-center justify-center text-[#555]">
                    <Map className="w-12 h-12 mb-4 opacity-20" />
                    <p>尚未新增任何場景</p>
                  </div>
                ) : (
                  <DndContext 
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext 
                      items={currentProject.scenes.map(s => s.id)}
                      strategy={rectSortingStrategy}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentProject.scenes.map((scene) => (
                          <SortableSceneCard 
                            key={scene.id} 
                            scene={scene} 
                            onDelete={(e) => handleDeleteClick(scene.id, e)}
                            onPreview={setPreviewUrl}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>
                )}
              </div>
              
              <div className="p-4 border-t border-[#2a2623] bg-[#1a1816] flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#eba96a] text-[#141210] font-bold rounded-lg hover:bg-[#d99a5e] transition-all cursor-pointer shadow-lg"
                >
                  完成
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {previewUrl && (
          <PanoramaPreview 
            url={previewUrl} 
            onClose={() => setPreviewUrl(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

