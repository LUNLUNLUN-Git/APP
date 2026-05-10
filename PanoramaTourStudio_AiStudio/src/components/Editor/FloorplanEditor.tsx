import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { cn } from '../../lib/utils';
import { X, MousePointer2, CircleDot, Type, ChevronRight, Star, Map, ChevronDown, Trash2, Pencil } from 'lucide-react';
import { Thumbnail } from '../common/Thumbnail';
import { v4 as uuidv4 } from 'uuid';

export default function FloorplanEditor() {
  const { currentProject, updateCurrentProject, setShowFloorplanEditor } = useStore();
  const [activeTool, setActiveTool] = useState<'select' | 'hotspot' | 'text'>('select');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [draggedHotspotId, setDraggedHotspotId] = useState<string | null>(null);
  const [dragPos, setDragPos] = useState<{x: number, y: number} | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedHotspotIds, setSelectedHotspotIds] = useState<string[]>([]);

  const currentSceneId = useStore(state => state.currentSceneId);
  const currentScene = currentProject?.scenes.find(s => s.id === currentSceneId);
  const extension = currentScene?.extensions?.find(e => e.type === 'utilities-floorplan');
  const floorplanBlobId = extension?.config?.floorplanBlobId;
  const hotspots = extension?.config?.hotspots || [];

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY;
    const zoomSpeed = 0.001;
    const newZoom = Math.max(0.5, Math.min(5, zoom + delta * zoomSpeed));
    setZoom(newZoom);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (activeTool !== 'select' && e.button === 0) return;
    
    // Only allow panning if clicking on the floorplan image itself
    const target = e.target as HTMLElement;
    const isFloorplanImage = target.closest('.floorplan-image');
    
    if (isFloorplanImage) {
        setIsPanning(true);
        target.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isPanning) {
      setOffset(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
      return;
    }

    if (draggedHotspotId && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      
      setDragPos({ x, y });
      return;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (draggedHotspotId && dragPos) {
      updateHotspot(draggedHotspotId, { x: dragPos.x, y: dragPos.y });
    }
    
    setIsPanning(false);
    setDraggedHotspotId(null);
    setDragPos(null);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const toggleSection = (id: string, force?: boolean) => {
    setOpenSections(prev => {
        // Accordion behavior: only one open at a time
        const isOpen = force !== undefined ? force : !prev[id];
        if (isOpen) {
            return { [id]: true };
        }
        return {};
    });
  };

  const updateFloorplanConfig = (updater: (config: any) => void) => {
    updateCurrentProject(p => {
      p.scenes.forEach(scene => {
        const ext = scene.extensions?.find(ex => ex.type === 'utilities-floorplan');
        if (ext) {
          if (!ext.config) ext.config = {};
          updater(ext.config);
        }
      });
      return p;
    });
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (activeTool === 'select') return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newHotspot = {
      id: uuidv4(),
      x,
      y,
      title: activeTool === 'hotspot' ? '轉跳點' : '新文字',
      type: activeTool,
      targetSceneId: undefined
    };

    updateFloorplanConfig(config => {
      if (!config.hotspots) config.hotspots = [];
      config.hotspots.push(newHotspot);
    });

    if (!e.shiftKey) {
      setActiveTool('select');
    }
    
    // Ensure accordion behavior: close others
    setOpenSections({ [newHotspot.id]: true });
    setSelectedHotspotIds([newHotspot.id]);
  };

  const deleteHotspots = (ids: string[]) => {
    if (ids.length === 0) return;
    const { showConfirm, dontShowConfirmAgainSession } = useStore.getState();
    
    const doDelete = () => {
      updateFloorplanConfig(config => {
        if (config.hotspots) {
          config.hotspots = config.hotspots.filter((h: any) => !ids.includes(h.id));
        }
      });
      setSelectedHotspotIds([]);
    };

    if (ids.length === 1 || dontShowConfirmAgainSession) {
      doDelete();
    } else {
      showConfirm({
        title: '多選刪除',
        message: `確定要刪除選中的 ${ids.length} 個資訊點嗎？`,
        confirmText: '確認刪除',
        type: 'danger',
        onConfirm: doDelete
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        // Prevent if typing in an input
        if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
        if (selectedHotspotIds.length > 0) {
          deleteHotspots(selectedHotspotIds);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedHotspotIds]);

  const updateHotspot = (id: string, updates: any) => {
    updateFloorplanConfig(config => {
      if (config.hotspots) {
        const hotspot = config.hotspots.find((h: any) => h.id === id);
        if (hotspot) Object.assign(hotspot, updates);
      }
    });
  };

  return (
    <div className="fixed inset-0 z-[5000] bg-[#141210] flex flex-col md:flex-row animate-in fade-in duration-300 pt-16">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#1a1816] border-b border-[#2a2623] flex items-center justify-between px-4 md:px-6 z-30 shadow-xl">
        <div className="flex items-center gap-3">
          <Map className="w-6 h-6 text-[#eba96a]" />
          <h2 className="text-lg font-bold text-white">平面圖設置</h2>
        </div>
        <button 
          onClick={() => setShowFloorplanEditor(false)}
          className="p-2 hover:bg-white/5 rounded-full transition-colors text-[#888] hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main View Area */}
      <div 
        className="flex-1 md:flex-[2] relative flex items-center justify-center bg-[#111] overflow-hidden canvas-background"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div 
          ref={containerRef}
          className={cn(
            "relative shadow-2xl rounded-lg overflow-hidden border border-[#2a2623] bg-[#000] origin-center transition-transform duration-75 floorplan-image",
            activeTool !== 'select' ? "cursor-crosshair" : (isPanning ? "cursor-grabbing" : "cursor-grab")
          )}
          onClick={handleCanvasClick}
          style={{ 
            aspectRatio: '4/3', 
            width: 'min(80vw, 80vh)', 
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` 
          }}
        >
          {floorplanBlobId ? (
            <Thumbnail blobId={floorplanBlobId} className="w-full h-full object-contain pointer-events-none" />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-[#555]">
              <Map className="w-16 h-16 mb-4 opacity-20" />
              <p>請先在場景設置中上傳平面圖圖片</p>
            </div>
          )}

          {/* Hotspots on Map */}
          {hotspots.map((h: any) => {
            const isDragging = draggedHotspotId === h.id && dragPos;
            const displayX = isDragging ? dragPos.x : h.x;
            const displayY = isDragging ? dragPos.y : h.y;
            
            return (
              <div 
                key={h.id}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all",
                  (openSections[h.id] || selectedHotspotIds.includes(h.id)) ? "z-20 scale-110" : "z-10 hover:scale-110",
                  isDragging && "scale-125 opacity-80 duration-0"
                )}
                style={{ left: `${displayX}%`, top: `${displayY}%` }}
                onPointerDown={(e) => {
                  if (activeTool === 'select') {
                    e.stopPropagation();
                    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
                    
                    setDraggedHotspotId(h.id);
                    toggleSection(h.id, true);
                    
                    if (!selectedHotspotIds.includes(h.id)) {
                      if (e.shiftKey) {
                        setSelectedHotspotIds(prev => [...prev, h.id]);
                      } else {
                        setSelectedHotspotIds([h.id]);
                      }
                    }
                  }
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {h.type === 'text' ? (
                  <div 
                    className={cn(
                      "text-white font-bold whitespace-nowrap transition-all drop-shadow-md",
                      selectedHotspotIds.includes(h.id) ? "scale-110 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]" : ""
                    )}
                    style={{ 
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                      fontSize: `${h.fontSize || 12}px`
                    }}
                  >
                    {h.title}
                  </div>
                ) : (
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 transition-all relative",
                    selectedHotspotIds.includes(h.id) 
                      ? "bg-[#eba96a] border-white scale-110 ring-4 ring-[#eba96a]/30" 
                      : "bg-[#eba96a] border-white/20 ring-4 ring-[#eba96a]/10"
                  )}>
                    <CircleDot className="w-4 h-4 text-[#141210]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Toolbar */}
        <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 bg-[#1a1816]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20">
          <button 
            onClick={() => setActiveTool('select')}
            className={cn(
              "flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all gap-1",
              activeTool === 'select' ? "bg-[#eba96a] text-[#141210]" : "text-[#888] hover:bg-white/5 hover:text-white"
            )}
          >
            <MousePointer2 className="w-5 h-5" />
            <span className="text-[10px] font-bold">選取</span>
          </button>
          <div className="w-px h-8 bg-white/10 mx-1" />
          <button 
            onClick={() => setActiveTool('hotspot')}
            className={cn(
              "flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all gap-1",
              activeTool === 'hotspot' ? "bg-[#eba96a] text-[#141210]" : "text-[#888] hover:bg-white/5 hover:text-white"
            )}
          >
            <CircleDot className="w-5 h-5" />
            <span className="text-[10px] font-bold">轉跳點</span>
          </button>
          <button 
            onClick={() => setActiveTool('text')}
            className={cn(
              "flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all gap-1",
              activeTool === 'text' ? "bg-[#eba96a] text-[#141210]" : "text-[#888] hover:bg-white/5 hover:text-white"
            )}
          >
            <Type className="w-5 h-5" />
            <span className="text-[10px] font-bold">文字</span>
          </button>
        </div>
      </div>

      {/* Sidebar - Property Editor */}
      <div className="w-full md:w-[400px] h-1/2 md:h-auto bg-[#1a1816] border-t md:border-t-0 md:border-l border-[#2a2623] flex flex-col">
        <div className="p-4 md:p-6 border-b border-[#2a2623]">
          <h3 className="text-sm font-black text-[#555] uppercase tracking-widest">平面圖轉跳點 ({hotspots.length})</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
          {hotspots.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-[#333]">
              <Star className="w-10 h-10 mb-2 opacity-10" />
              <p className="text-xs font-bold">尚無建立轉跳點</p>
              <p className="text-[10px] opacity-40">使用下方工具在平面圖上建立轉跳點</p>
            </div>
          ) : (
            hotspots.map((h: any) => (
              <div 
                key={h.id}
                className={cn(
                  "bg-[#141210] rounded-2xl border transition-all overflow-hidden",
                  openSections[h.id] ? "border-[#eba96a] shadow-xl ring-1 ring-[#eba96a]/20" : "border-[#2a2623] hover:border-[#eba96a]/30"
                )}
              >
                <div 
                  onClick={(e) => {
                    const isShift = e.shiftKey;
                    if (isShift) {
                      setSelectedHotspotIds(prev => prev.includes(h.id) ? prev.filter(i => i !== h.id) : [...prev, h.id]);
                    } else {
                      toggleSection(h.id);
                      setSelectedHotspotIds([h.id]);
                    }
                  }}
                  className={cn(
                    "w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer",
                    selectedHotspotIds.includes(h.id) && "bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center border transition-colors",
                      selectedHotspotIds.includes(h.id) ? "bg-[#eba96a] border-white text-[#141210]" : "bg-[#eba96a]/10 border-[#eba96a]/20 text-[#eba96a]"
                    )}>
                      {h.type === 'text' ? <Type className="w-4 h-4" /> : <CircleDot className="w-4 h-4" />}
                    </div>
                    <span className={cn(
                      "text-sm font-bold transition-colors",
                      selectedHotspotIds.includes(h.id) ? "text-[#eba96a]" : "text-white"
                    )}>{h.title}</span>
                  </div>
                    <div className="flex items-center gap-2">
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           setSelectedHotspotIds([h.id]);
                           toggleSection(h.id);
                         }}
                         className="p-1.5 rounded-lg text-[#555] hover:text-[#eba96a] transition-all"
                       >
                         {openSections[h.id] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                       </button>
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           deleteHotspots([h.id]);
                         }}
                         className="p-1.5 rounded-lg text-red-500/50 hover:text-red-500 hover:bg-red-500/10 transition-all"
                       >
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                </div>

                {openSections[h.id] && (
                  <div className="p-5 border-t border-[#2a2623] space-y-6 bg-[#1a1816]/30 animate-in slide-in-from-top-2 duration-300">
                    {/* Title Input */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#555] uppercase tracking-wider">{h.type === 'text' ? '文字內容' : '標記名稱'}</label>
                        <div className="flex items-center gap-2 bg-[#1a1816] rounded-xl border border-[#2a2623] p-1.5 focus-within:border-[#eba96a] transition-all">
                          <Pencil className="w-4 h-4 text-[#555] ml-2" />
                          <input 
                            className="flex-1 bg-transparent border-none text-sm text-white focus:ring-0 p-2 font-bold"
                            placeholder="輸入名稱..."
                            value={h.title}
                            onChange={(e) => updateHotspot(h.id, { title: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 p-4 bg-[#141210] rounded-xl border border-[#2a2623]">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] font-bold text-[#555] uppercase tracking-wider">文字大小</label>
                          <span className="text-[10px] font-mono text-[#eba96a]">{h.fontSize || 12}px</span>
                        </div>
                        <input 
                          type="range" min="8" max="48" step="1" 
                          className="w-full accent-[#eba96a] h-1 bg-[#2a2623] rounded-lg appearance-none cursor-pointer"
                          value={h.fontSize || 12}
                          onChange={(e) => updateHotspot(h.id, { fontSize: parseInt(e.target.value) })}
                        />
                        <div className="flex justify-between text-[8px] text-[#444] font-bold uppercase tracking-widest pt-1">
                           <span>小</span>
                           <span>大</span>
                        </div>
                      </div>
                    </div>

                    {/* Target Scene Selector */}
                    <div className="space-y-3">
                      <label className="text-[12px] font-bold text-[#555] uppercase tracking-wider flex items-center gap-2">
                        <Map className="w-3 h-3" /> 轉跳場景設定
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {currentProject?.scenes.map(s => (
                          <button
                            key={s.id}
                            onClick={() => updateHotspot(h.id, { targetSceneId: h.targetSceneId === s.id ? undefined : s.id })}
                            className={cn(
                              "relative group aspect-video rounded-xl overflow-hidden border-2 transition-all",
                              h.targetSceneId === s.id ? "border-[#eba96a] ring-2 ring-[#eba96a]/10" : "border-[#2a2623] grayscale hover:grayscale-0"
                            )}
                          >
                            <Thumbnail blobId={s.imageBlobId} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                              <span className="text-[12px] font-bold text-white truncate w-full">{s.name}</span>
                            </div>
                            {h.targetSceneId === s.id && (
                              <div className="absolute top-1 right-1 bg-[#eba96a] text-[#141210] p-0.5 rounded shadow-lg">
                                <Star className="w-2.5 h-2.5 fill-current" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        <div className="p-6 bg-[#141210] border-t border-[#2a2623]">
          <button 
            onClick={() => setShowFloorplanEditor(false)}
            className="w-full py-4 bg-[#eba96a] text-[#141210] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#f3c192] transition-colors shadow-xl active:scale-[0.98]"
          >
            完成並儲存
          </button>
        </div>
      </div>
    </div>
  );
}
