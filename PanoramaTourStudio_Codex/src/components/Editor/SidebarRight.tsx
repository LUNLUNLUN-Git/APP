import { useStore } from '../../store/useStore';
import { Loader2, ChevronLeft, Type, Image as ImageIcon, Video, CircleDot, Eye, EyeOff, Check, X, RotateCcw, FlipHorizontal, FlipVertical, Maximize2, RotateCw, ArrowUpRight, HelpCircle, Volume2, Play, MoreVertical, Sparkles, Plus, ListOrdered, Clock, Map, Music, User, ScanFace, PenTool, Sun, MousePointer2, Eraser, Palette, Star, Pencil, Trash2, LayoutGrid, GripVertical, ExternalLink, Box, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import { v4 as uuidv4 } from 'uuid';
import { saveBlob } from '../../lib/db';
import { DEFAULT_INPAINT_PROMPT } from '../../services/ai';
import { Thumbnail } from '../common/Thumbnail';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const UTILITIES_EXTENSIONS = [
  { id: 'utilities-list', name: '清單', icon: ListOrdered },
  { id: 'utilities-stroke', name: '繪圖工具', icon: PenTool },
  { id: 'utilities-floorplan', name: '平面圖', icon: Map },
  { id: 'utilities-music', name: '音樂', icon: Music },
  { id: 'utilities-avatar', name: '3D模型', icon: Box, status: 'coming_soon' },
  { id: 'utilities-embed', name: '嵌入網頁', icon: Globe, status: 'coming_soon' },
  { id: 'utilities-timeline', name: '時間軸', icon: Clock, status: 'coming_soon' },
  { id: 'utilities-facetrack', name: '人臉追蹤', icon: ScanFace, status: 'coming_soon' },
];

const EFFECTS_EXTENSIONS = [
  { id: 'effects-color', name: '調色', icon: Palette },
  { id: 'effects-sun', name: '太陽效果', icon: Sun, status: 'coming_soon' },
  { id: 'effects-mouselight', name: '滑鼠光源', icon: MousePointer2, status: 'coming_soon' },
  { id: 'effects-mouseerase', name: '滑鼠擦除', icon: Eraser, status: 'coming_soon' },
];

function DraggableNumberInput({ 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  precision = 0,
  className,
  label
}: { 
  value: number; 
  onChange: (val: number) => void; 
  min?: number; 
  max?: number; 
  step?: number; 
  precision?: number;
  className?: string;
  label?: string;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startVal = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasMoved = useRef(false);
  const [tempValue, setTempValue] = useState<string | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || e.ctrlKey || e.shiftKey) return;
    if (document.activeElement === inputRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    hasMoved.current = false;
    startX.current = e.clientX;
    startVal.current = value;
    document.body.style.cursor = 'ew-resize';
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.abs(e.clientX - startX.current);
      if (distance > 3) hasMoved.current = true;
      
      if (hasMoved.current) {
        const delta = (e.clientX - startX.current) * step;
        let newVal = startVal.current + delta;
        if (min !== undefined) newVal = Math.max(min, newVal);
        if (max !== undefined) newVal = Math.min(max, newVal);
        onChange(Number(newVal.toFixed(precision)));
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      setIsDragging(false);
      document.body.style.cursor = '';
      
      // If it's a simple click (no movement), focus the input
      if (!hasMoved.current && inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onChange, min, max, step, precision]);

  return (
    <div 
      className={cn("flex items-center justify-between bg-[#1a1816] px-3 py-2 rounded-md border border-[#2a2623] cursor-ew-resize group transition-colors hover:border-[#eba96a]/30", className)}
      onMouseDown={handleMouseDown}
    >
      {label && <div className="text-[11px] font-bold text-[#888] select-none uppercase tracking-wider">{label}</div>}
      <input 
        ref={inputRef}
        type="number"
        className={cn(
          "w-14 bg-transparent text-right outline-none text-[12px] text-[#eba96a] font-mono tracking-tighter [appearance:none] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:text-white transition-all pointer-events-auto",
          isDragging ? "cursor-ew-resize" : "cursor-ew-resize focus:cursor-text"
        )}
        value={tempValue !== null ? tempValue : value}
        step={step}
        onChange={e => setTempValue(e.target.value)}
        onBlur={e => {
          const val = parseFloat(e.target.value);
          setTempValue(null);
          if (!isNaN(val)) {
            let v = val;
            if (min !== undefined) v = Math.max(min, v);
            if (max !== undefined) v = Math.min(max, v);
            onChange(Number(v.toFixed(precision)));
          }
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') inputRef.current?.blur();
        }}
      />
    </div>
  );
}

function SidebarThumbnail({ blobId }: { blobId: string }) {
  return (
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center p-2 pointer-events-none transition-colors">
      <Thumbnail blobId={blobId} className="w-full h-full object-contain" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="text-[12px] font-bold text-white bg-black/50 px-2 py-1 rounded">點擊更換圖片</span>
      </div>
    </div>
  );
}

function SidebarThumbnailWrapper({ blobId, onClick }: { blobId: string, onClick: () => void }) {
  return (
    <div 
      className="relative aspect-square w-24 bg-[#1a1816] rounded border border-[#2a2623] cursor-pointer overflow-hidden group hover:border-[#eba96a]/50 transition-colors"
      onClick={onClick}
    >
      <Thumbnail blobId={blobId} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-opacity">
        <span className="text-[12px] font-bold text-white bg-black/50 px-2 py-1 rounded">點擊更換圖片</span>
      </div>
    </div>
  );
}

function CollapsibleSection({ id, title, isOpen, onToggle, children, extraHeader, disabled, titlePrefix }: { id?: string, title: string, isOpen?: boolean, onToggle?: (id: string, e: React.MouseEvent) => void, children: React.ReactNode, extraHeader?: React.ReactNode, disabled?: boolean, titlePrefix?: React.ReactNode }) {
  const [localIsOpen, setLocalIsOpen] = useState(true);
  const open = isOpen !== undefined ? isOpen : localIsOpen;
  
  const handleToggle = (e: React.MouseEvent) => {
    if (disabled) return;
    if (onToggle && id) onToggle(id, e);
    else setLocalIsOpen(!localIsOpen);
  };
  
  return (
    <div className="border-b border-[#2a2623] last:border-0 border-t-0 first:mt-0">
      <div 
        className={cn(
          "flex items-center justify-between pl-[18px] pr-4 py-4 transition-colors",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer group hover:bg-[#1a1816]/50"
        )}
        onClick={handleToggle}
      >
        <div className="flex items-center gap-2 flex-1 overflow-hidden">
          <ChevronLeft className={cn("w-3.5 h-3.5 text-[#888] transition-transform shrink-0", !disabled && "group-hover:text-[#e0e0e0]", (open && !disabled) ? "-rotate-90" : "rotate-180")} />
          <div className="flex items-center gap-1.5 overflow-hidden">
            {titlePrefix}
            <h3 className={cn("text-xs font-bold text-[#f0f0f0] transition-colors truncate", !disabled && "group-hover:text-[#eba96a]")}>{title}</h3>
          </div>
        </div>
        {extraHeader && <div onClick={e => e.stopPropagation()}>{extraHeader}</div>}
      </div>
      {(open && !disabled) && <div className="pl-[18px] pr-4 pb-4 space-y-4">{children}</div>}
    </div>
  );
}

function SortableHotspotItem({ 
  h, 
  isSelected, 
  editingHotspotId, 
  editingHotspotName,
  editHotspotInputRef,
  setEditingHotspotName,
  saveHotspotName,
  startEditingHotspot,
  setEditingHotspotId,
  setSelectedHotspotIds,
  updateHotspot,
  deleteHotspot,
  selectedHotspotIds,
  updateCurrentProject,
  currentSceneId,
  allHotspots,
}: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: h.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : undefined,
    opacity: isDragging ? 0.5 : 1
  };

  let Icon = CircleDot;
  if (h.type === 'text') Icon = Type;
  if (h.type === 'image') Icon = ImageIcon;
  if (h.type === 'video') Icon = Video;
  if (h.type === 'jump') Icon = ArrowUpRight;
  if (h.type === 'link') Icon = ExternalLink;
  if (h.type === 'quiz') Icon = HelpCircle;

  return (
    <div 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "border-b border-[#2a2623] transition-colors cursor-pointer group/row relative", 
        isSelected ? "bg-[#eba96a]/10" : "bg-transparent hover:bg-[#1a1816]/50"
      )}
      onClick={(e) => {
        // Prevent click if dragging
        if (isDragging) return;
        
        const isShift = e.shiftKey;
        if (isShift && selectedHotspotIds.length > 0) {
          const allIds = (allHotspots || []).map((hs: any) => hs.id);
          const firstSelectedId = selectedHotspotIds[0];
          const startIdx = allIds.indexOf(firstSelectedId);
          const endIdx = allIds.indexOf(h.id);
          
          if (startIdx !== -1 && endIdx !== -1) {
            const min = Math.min(startIdx, endIdx);
            const max = Math.max(startIdx, endIdx);
            const range = allIds.slice(min, max + 1);
            setSelectedHotspotIds(range);
            return;
          }
        }

        const expanding = !isSelected || selectedHotspotIds.length > 1;
        setSelectedHotspotIds(expanding ? [h.id] : []);
        if (expanding) {
          window.dispatchEvent(new CustomEvent('focus-hotspot', { detail: { id: h.id } }));
        }
      }}
    >
      <div className="flex items-center justify-between p-2 pl-3 h-[48px]">
        <div className="flex items-center gap-0 overflow-hidden flex-1 h-full">
          <div className="relative flex items-center justify-center w-[36px] shrink-0 h-full">
            <Icon className={cn(
              "w-4 h-4 shrink-0",
              (isSelected || h.isHidden) ? "hidden" : "text-[#888] flex group-hover/row:hidden"
            )} />
            <button 
              onClick={(e) => {
                e.stopPropagation();
                updateCurrentProject(draft => {
                  const scene = draft.scenes.find(s => s.id === currentSceneId);
                  const hs = scene?.hotspots.find(hot => hot.id === h.id);
                  if (hs) hs.isHidden = !hs.isHidden;
                  return draft;
                });
              }}
              className={cn(
                "absolute inset-0 items-center justify-center text-[#eba96a]",
                (isSelected || h.isHidden) ? "flex" : "hidden group-hover/row:flex"
              )}
            >
              {h.isHidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
          
          <div className="flex-1 min-w-0" onDoubleClick={(e) => { e.stopPropagation(); startEditingHotspot(h); }}>
              {editingHotspotId === h.id ? (
                <input
                  ref={editHotspotInputRef}
                  className="w-full bg-[#111] text-[12px] font-bold text-white px-1 py-0.5 rounded border border-[#eba96a] outline-none"
                  value={editingHotspotName}
                  onChange={(e) => setEditingHotspotName(e.target.value)}
                  onBlur={saveHotspotName}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') saveHotspotName();
                    if (e.key === 'Escape') setEditingHotspotId(null);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                />
              ) : (
                  <span className={cn("text-[12px] font-bold truncate block", 
                    h.isHidden ? "text-[#555] line-through" : "text-[#e0e0e0]", 
                    isSelected && "text-[#eba96a]"
                  )}>
                    {h.title || '未命名資訊點'}
                  </span>
              )}
          </div>
        </div>
        <button 
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            deleteHotspot(h.id, e);
          }}
          className="p-1.5 rounded-md transition-colors text-[#555] opacity-0 group-hover/row:opacity-100 hover:text-red-400 hover:bg-white/5"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function SidebarRight({ onSmartAnalysis, analyzing, onShowPrompt, isMobilePopup }: { onSmartAnalysis: () => void, analyzing: boolean, onShowPrompt: () => void, isMobilePopup?: boolean }) {
  const { 
    currentProject, 
    currentSceneId, 
    selectedHotspotIds, 
    setSelectedHotspotIds, 
    updateCurrentProject, 
    setMode, 
    currentView, 
    setCurrentView, 
    setShowFloorplanEditor,
    activeTool,
    setActiveTool,
    mode,
    brushSettings,
    setBrushSettings,
    updateExtensionConfig
  } = useStore();
  const [tab, setTab] = useState<'scene' | 'hotspots'>('scene');
  const currentScene = currentSceneId ? currentProject?.scenes.find(s => s.id === currentSceneId) : null;
  const hasImage = !!currentScene?.imageBlobId;
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isMobilePopup) {
      setTab('hotspots');
    }
  }, [isMobilePopup]);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    info: false,
    initialView: false,
    autoRotateAndCarousel: false,
    bottomLogo: false
  });

  const [showScenePicker, setShowScenePicker] = useState(false);
  const [showExtensionPicker, setShowExtensionPicker] = useState(false);
  const [showTabScenePicker, setShowTabScenePicker] = useState<{ tabId: string, extId: string } | null>(null);
  const setIsAnyModalOpen = useStore(state => state.setIsAnyModalOpen);

  useEffect(() => {
    setIsAnyModalOpen(showScenePicker || showExtensionPicker || !!showTabScenePicker);
  }, [showScenePicker, showExtensionPicker, showTabScenePicker, setIsAnyModalOpen]);
  const [extensionTab, setExtensionTab] = useState<'utilities' | 'effects'>('utilities');
  const [selectedExtension, setSelectedExtension] = useState<string | null>(null);
  const [detailPanelHeight, setDetailPanelHeight] = useState(window.innerHeight * 0.33);
  const [isResizing, setIsResizing] = useState(false);
  const logoImageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const handlePlay = () => setIsAudioPlaying(true);
    const handlePause = () => setIsAudioPlaying(false);

    audioEl.addEventListener('play', handlePlay);
    audioEl.addEventListener('pause', handlePause);
    audioEl.addEventListener('ended', handlePause);

    return () => {
      audioEl.removeEventListener('play', handlePlay);
      audioEl.removeEventListener('pause', handlePause);
      audioEl.removeEventListener('ended', handlePause);
    };
  }, [openSections, currentProject?.extensions, currentScene?.extensions]);

  const toggleSection = (id: string, e: React.MouseEvent) => {
    const isShift = e.shiftKey;
    if (isShift) {
      const extensionIds = (currentProject?.extensions || []).map(ext => `project-ext-${ext.id}`);
      const allSections = ['info', 'initialView', 'autoRotateAndCarousel', 'bottomLogo', 'hotspots', ...extensionIds];
      
      const isAnyOpen = allSections.some(sId => openSections[sId] !== false);
      const newState = !isAnyOpen;
      
      const nextOpenSections: Record<string, boolean> = {};
      allSections.forEach(sId => {
        nextOpenSections[sId] = newState;
      });
      setOpenSections(nextOpenSections);
    } else {
      setOpenSections(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  useEffect(() => {
    if (selectedHotspotIds.length > 0) setTab('hotspots');
  }, [selectedHotspotIds]);

  const [editingHotspotId, setEditingHotspotId] = useState<string | null>(null);
  const [editingHotspotName, setEditingHotspotName] = useState("");
  const editHotspotInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingHotspotId && editHotspotInputRef.current) {
      editHotspotInputRef.current.focus();
      editHotspotInputRef.current.select();
    }
  }, [editingHotspotId]);

  const startEditingHotspot = (h: any) => {
    setEditingHotspotId(h.id);
    setEditingHotspotName(h.title || "");
  };

  const saveHotspotName = () => {
    if (editingHotspotId && editingHotspotName.trim()) {
      updateHotspot(hot => hot.title = editingHotspotName.trim());
    }
    setEditingHotspotId(null);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Sorting drag constraints
  const modifiers = [restrictToVerticalAxis, restrictToWindowEdges];

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      updateScene(scene => {
        const oldIndex = scene.hotspots.findIndex((h: any) => h.id === active.id);
        const newIndex = scene.hotspots.findIndex((h: any) => h.id === over.id);
        scene.hotspots = arrayMove(scene.hotspots, oldIndex, newIndex);
      });
    }
  };

  useEffect(() => {
    // When mode changes, if we are leaving preview, stop any active music
    if (mode === 'editor' || mode === 'dashboard') {
      const previewAudio = document.getElementById('preview-audio') as HTMLAudioElement;
      if (previewAudio) {
        previewAudio.pause();
        previewAudio.currentTime = 0;
      }
      
      const sidebarAudio = document.getElementById('preview-audio-player') as HTMLAudioElement;
      if (sidebarAudio) {
        sidebarAudio.pause();
        sidebarAudio.currentTime = 0;
        setIsAudioPlaying(false);
      }
      
      window.speechSynthesis.cancel();
    }
  }, [mode]);

  if (!currentProject) return null;

  const updateProject = (updater: (project: any) => void) => {
    useStore.getState().pushHistory();
    updateCurrentProject(draft => {
      updater(draft);
      return draft;
    });
  };

  const updateScene = (updater: (scene: any) => void, syncAll: boolean = false) => {
    useStore.getState().pushHistory();
    updateCurrentProject(draft => {
      const scene = draft.scenes.find(s => s.id === currentSceneId);
      if (scene) {
        if (syncAll) {
          updater(scene);
          draft.scenes.forEach(s => {
            if (s.id !== currentSceneId) {
              s.autoRotate = scene.autoRotate ? JSON.parse(JSON.stringify(scene.autoRotate)) : undefined;
              s.autoCarousel = scene.autoCarousel ? JSON.parse(JSON.stringify(scene.autoCarousel)) : undefined;
              
              // Sync floorplan extension if it exists
              const srcExt = scene.extensions?.find((e: any) => e.type === 'utilities-floorplan');
              if (srcExt) {
                if (!s.extensions) s.extensions = [];
                let destExt = s.extensions.find((e: any) => e.type === 'utilities-floorplan');
                if (!destExt) {
                  destExt = { id: uuidv4(), type: 'utilities-floorplan', config: {} };
                  s.extensions.push(destExt);
                }
                destExt.config = JSON.parse(JSON.stringify(srcExt.config));
              }
            }
          });
        } else {
          updater(scene);
        }
      }
      return draft;
    });
  };

  const startResizing = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isResizing) return;
      const newHeight = window.innerHeight - e.clientY - (window.innerWidth < 640 ? 48 : 0);
      setDetailPanelHeight(Math.max(150, Math.min(newHeight, window.innerHeight * 0.8)));
    };

    const handlePointerUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isResizing]);

  const selectedHotspotId = selectedHotspotIds.length > 0 ? selectedHotspotIds[selectedHotspotIds.length - 1] : null;
  const currentHotspot = currentScene?.hotspots.find(h => h.id === selectedHotspotId);

  const updateHotspot = (updater: (hotspot: any) => void) => {
    if (selectedHotspotIds.length === 0) return;
    useStore.getState().pushHistory();
    updateCurrentProject(draft => {
      const scene = draft.scenes.find(s => s.id === currentSceneId);
      if (scene) {
        selectedHotspotIds.forEach(id => {
          const hs = scene.hotspots.find((h: any) => h.id === id);
          if (hs) updater(hs);
        });
      }
      return draft;
    });
  };

  const deleteHotspot = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    const targets = selectedHotspotIds.includes(id) ? selectedHotspotIds : [id];
    const { showConfirm, dontShowConfirmAgainSession, pushHistory } = useStore.getState();

    const doDelete = () => {
      pushHistory();
      updateScene(scene => {
        scene.hotspots = scene.hotspots.filter((h: any) => !targets.includes(h.id));
      });
      setSelectedHotspotIds(selectedHotspotIds.filter(i => !targets.includes(i)));
    };

    if (targets.length === 1 || dontShowConfirmAgainSession) {
      doDelete();
    } else {
      showConfirm({
        title: '多選刪除',
        message: `確定要刪除選中的 ${targets.length} 個資訊點嗎？`,
        confirmText: '立刻刪除',
        type: 'danger',
        onConfirm: doDelete
      });
    }
  };

  return (
    <>
    <aside className={cn(
      "w-full sm:w-[310px] sm:h-full border-l border-[#2a2623] bg-[#131210] flex flex-col shrink-0 transition-all overflow-hidden",
      (showScenePicker || showTabScenePicker || showExtensionPicker) ? "z-[3000]" : "z-[300]",
      isMobilePopup ? "h-auto" : "h-full"
    )}>
      <div className={cn("h-[60px] pl-[18px] pr-4 flex items-center border-b border-[#2a2623] bg-[#131210]", isMobilePopup ? "hidden sm:flex" : "flex")}>
            <div className="flex gap-2 items-stretch h-[40px] w-full">
          <div className="flex-1 flex items-stretch bg-[#1a1816]/50 border border-[#2a2623] rounded-md overflow-hidden shadow-sm">
            <button 
              onClick={onSmartAnalysis}
              disabled={analyzing || !currentScene}
              className={cn(
                "flex-1 h-full text-white text-[14px] font-bold transition-all flex items-center justify-center gap-1.5 border-r border-[#272323]",
                (analyzing || !currentScene) ? "opacity-50 cursor-default" : "hover:bg-[#1a1816] cursor-pointer"
              )}
            >
              {analyzing ? <Loader2 className="w-3.5 h-3.5 animate-spin text-[#eba96a]" /> : <Sparkles className={cn("w-3.5 h-3.5", hasImage ? "text-[#eba96a]" : "text-white")} />}
              <span>{analyzing ? '分析中' : 'AI 分析'}</span>
            </button>
            <button 
              onClick={onShowPrompt}
              disabled={!currentScene}
              className="px-2 h-full text-[#888] hover:text-[#e0e0e0] hover:bg-[#221f1c] transition-colors border-none outline-none disabled:opacity-50 disabled:hover:text-[#888] disabled:hover:bg-transparent"
              title="查看分析 Prompt"
            >
              <MoreVertical className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <button 
            onClick={() => {
              if (currentScene?.isHidden) {
                const visibleScene = currentProject.scenes.find((s: any) => !s.isHidden);
                if (visibleScene) {
                  useStore.getState().setCurrentSceneId(visibleScene.id);
                } else {
                  alert('沒有可顯示的環景圖，請先開放至少一個場景。');
                  return;
                }
              }
              setMode('preview');
              setActiveTool('select');
            }}
            disabled={!currentScene}
            className={cn(
              "flex-1 h-full text-[#141210] text-[14px] font-bold rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm",
              !currentScene ? "bg-[#2a2623] text-[#888] opacity-50 cursor-default" : "bg-[#eba96a] hover:bg-[#d99a5e] cursor-pointer"
            )}
          >
            <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            <span>正式預覽</span>
          </button>
        </div>
      </div>

      <div className={cn("flex border-b border-[#2a2623]", isMobilePopup ? "hidden sm:flex" : "flex")}>
        <button 
          className={cn(
            "flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2", 
            tab === 'scene' 
              ? (hasImage ? "text-[#eba96a] border-[#eba96a]" : "text-[#888] border-transparent") 
              : "text-[#888] border-transparent hover:text-[#e0e0e0]",
            !currentScene ? "opacity-50 cursor-default" : ""
          )}
          onClick={() => { if(currentScene) { setTab('scene'); setSelectedHotspotIds([]); } }}
          disabled={!currentScene}
        >
          場景設定
        </button>
        <button 
          className={cn(
            "flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2", 
            tab === 'hotspots' ? "text-[#eba96a] border-[#eba96a]" : "text-[#888] border-transparent hover:text-[#e0e0e0]",
            !currentScene ? "opacity-50 cursor-default" : ""
          )}
          onClick={() => currentScene && setTab('hotspots')}
          disabled={!currentScene}
        >
          資訊點 {currentScene ? `(${currentScene.hotspots.length})` : ''}
        </button>
      </div>

      <div className={cn("overflow-y-auto min-h-0 relative", !hasImage && "pointer-events-none", isMobilePopup ? "hidden" : "flex flex-col flex-1")}>
        <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar">
          {!currentScene ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-[#555] text-xs">
               <div className="w-10 h-10 rounded-full border-[2px] border-[#333] flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#333]"></div>
               </div>
               <p className="font-bold text-[#555]">請先選擇或建立一個場景</p>
            </div>
          ) : tab === 'scene' ? (
            <div className="pb-4">
            <CollapsibleSection 
              id="info"
              title="場景資訊"
              isOpen={openSections.info}
              onToggle={toggleSection}
            >
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#888]">場景標題</label>
                <input
                  type="text"
                  className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-xs text-[#e0e0e0] focus:ring-1 focus:ring-[#eba96a] outline-none transition-shadow"
                  value={currentScene.name}
                  onChange={e => updateScene(s => s.name = e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#888]">備註</label>
                <textarea
                  rows={2}
                  className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-xs text-[#e0e0e0] h-14 resize-none focus:ring-1 focus:ring-[#eba96a] outline-none transition-shadow leading-relaxed"
                  value={currentScene.description || ''}
                  onChange={e => updateScene(s => s.description = e.target.value)}
                  placeholder="輸入場景介紹..."
                />
              </div>
            </CollapsibleSection>

            <CollapsibleSection 
              id="initialView"
              title="視角"
              isOpen={openSections.initialView}
              onToggle={toggleSection}
              extraHeader={
                <div className="flex items-center gap-2">
                  {(() => {
                    const isInitial = 
                      Math.abs(currentView.yaw - (currentScene.initialView?.yaw ?? 0)) < 0.1 &&
                      Math.abs(currentView.pitch - (currentScene.initialView?.pitch ?? 0)) < 0.1 &&
                      Math.abs(currentView.fov - (currentScene.initialView?.fov ?? 75)) < 0.1;
                    
                    return (
                      <>
                        <button 
                          onClick={() => {
                            window.dispatchEvent(new Event('reset-panorama-view'));
                          }}
                          disabled={isInitial}
                          className="text-xs p-1.5 bg-[#1a1816] border border-[#2a2623] rounded text-[#eba96a] hover:bg-[#221f1c] transition-colors disabled:opacity-20 disabled:grayscale disabled:cursor-default"
                          title="重置回初始視角"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => {
                            window.dispatchEvent(new Event('set-panorama-initial'));
                          }}
                          disabled={isInitial}
                          className="text-xs px-2 py-1.5 bg-[#1a1816] border border-[#2a2623] rounded text-[#eba96a] hover:bg-[#221f1c] transition-colors font-bold disabled:opacity-20 disabled:grayscale disabled:cursor-default"
                        >
                          設為初始視角
                        </button>
                      </>
                    );
                  })()}
                </div>
              }
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 font-mono">
                  <DraggableNumberInput 
                    label="偏航"
                    value={Number(currentView.yaw.toFixed(1))}
                    step={0.5}
                    precision={1}
                    onChange={val => setCurrentView({ ...currentView, yaw: val })}
                  />
                  <DraggableNumberInput 
                    label="俯仰"
                    value={Number(currentView.pitch.toFixed(1))}
                    min={-90}
                    max={90}
                    step={0.5}
                    precision={1}
                    onChange={val => setCurrentView({ ...currentView, pitch: val })}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[12px] font-bold text-[#888] uppercase">視野範圍 (FOV)</label>
                    <span className="text-[12px] font-mono text-[#eba96a]">{currentView.fov.toFixed(0)}°</span>
                  </div>
                  
                  <div className="space-y-4 px-1">
                    {/* FOV Slider moved to top */}
                    <div className="relative h-6 group mb-2">
                      {/* Range Track */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 bg-[#2a2623] rounded-full" />
                      
                      {/* Active Range Highlight */}
                      {(() => {
                        const min = currentScene.fovLimits?.min ?? 20;
                        const max = currentScene.fovLimits?.max ?? 110;
                        const left = ((min - 10) / (180 - 10)) * 100;
                        const width = ((max - min) / (180 - 10)) * 100;
                        return (
                          <div 
                            className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-[#eba96a] rounded-full transition-all"
                            style={{ left: `${left}%`, width: `${width}%` }}
                          />
                        );
                      })()}

                      {/* Min Limit Thumb */}
                      <input 
                        type="range" min="10" max="180" 
                        className="absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#eba96a] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20 shadow-lg"
                        value={currentScene.fovLimits?.min ?? 20}
                        onChange={e => {
                          const v = parseInt(e.target.value);
                          updateScene(s => {
                            if (!s.fovLimits) s.fovLimits = { min: 20, max: 110 };
                            s.fovLimits.min = Math.min(v, s.fovLimits.max);
                          }, true);
                        }}
                      />

                      {/* Max Limit Thumb */}
                      <input 
                        type="range" min="10" max="180" 
                        className="absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#eba96a] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-10 shadow-lg"
                        value={currentScene.fovLimits?.max ?? 110}
                        onChange={e => {
                          const v = parseInt(e.target.value);
                          updateScene(s => {
                            if (!s.fovLimits) s.fovLimits = { min: 20, max: 110 };
                            s.fovLimits.max = Math.max(v, s.fovLimits.min);
                          }, true);
                        }}
                      />

                      {/* Default FOV Thumb - Controls initialView.fov */}
                      <input 
                        type="range" 
                        min="10" 
                        max="180" 
                        className="absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#eba96a] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing z-30 shadow-xl"
                        value={currentScene.initialView?.fov ?? 75}
                        onChange={e => {
                          const v = parseFloat(e.target.value);
                          const minLimit = currentScene.fovLimits?.min ?? 20;
                          const maxLimit = currentScene.fovLimits?.max ?? 110;
                          const clamped = Math.max(minLimit, Math.min(v, maxLimit));
                          
                          updateScene(s => {
                            if (!s.initialView) s.initialView = { yaw: 0, pitch: 0, fov: 75 };
                            s.initialView.fov = clamped;
                          }, true);
                          // 同步預覽畫面
                          setCurrentView({ ...currentView, fov: clamped });
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <DraggableNumberInput 
                          label="最小"
                          value={currentScene.fovLimits?.min ?? 20}
                          min={10}
                          max={currentScene.fovLimits?.max ?? 180}
                          onChange={val => {
                            const limitMax = currentScene.fovLimits?.max ?? 180;
                            const clamped = Math.max(10, Math.min(val, limitMax));
                            updateScene(s => { 
                              if(!s.fovLimits) s.fovLimits = {min: 20, max: 110}; 
                              s.fovLimits.min = clamped;
                            }, true);
                          }}
                        />
                        <DraggableNumberInput 
                          label="預設"
                          value={currentScene.initialView?.fov ?? 75}
                          min={currentScene.fovLimits?.min ?? 10}
                          max={currentScene.fovLimits?.max ?? 180}
                          onChange={val => {
                            const min = currentScene.fovLimits?.min ?? 10;
                            const max = currentScene.fovLimits?.max ?? 180;
                            const clamped = Math.max(min, Math.min(val, max));
                            updateScene(s => { 
                              if(!s.initialView) s.initialView = {yaw:0, pitch:0, fov:75}; 
                              s.initialView.fov = clamped;
                            }, true);
                            setCurrentView({ ...currentView, fov: clamped });
                          }}
                        />
                        <DraggableNumberInput 
                          label="最大"
                          value={currentScene.fovLimits?.max ?? 110}
                          min={currentScene.fovLimits?.min ?? 10}
                          max={180}
                          onChange={val => {
                            const limitMin = currentScene.fovLimits?.min ?? 10;
                            const clamped = Math.max(limitMin, Math.min(val, 180));
                            updateScene(s => { 
                              if(!s.fovLimits) s.fovLimits = {min: 20, max: 110}; 
                              s.fovLimits.max = clamped;
                            }, true);
                          }}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>
            
            <CollapsibleSection 
              id="autoRotateAndCarousel"
              title="自動旋轉&輪播"
              isOpen={openSections.autoRotateAndCarousel}
              onToggle={toggleSection}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#e0e0e0]">自動旋轉</h4>
                    <button 
                      onClick={() => updateScene(s => {
                        if (!s.autoRotate) {
                          s.autoRotate = { enabled: true, direction: 'right', speed: 0.5, idleTime: 5 };
                        } else {
                          s.autoRotate.enabled = !s.autoRotate.enabled;
                        }
                      }, true)}
                      className={cn(
                        "relative w-10 h-5 rounded-full transition-colors",
                        currentScene.autoRotate?.enabled ? "bg-[#eba96a]" : "bg-[#2a2623]"
                      )}
                    >
                      <div className={cn(
                        "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                        currentScene.autoRotate?.enabled ? "left-6" : "left-1"
                      )} />
                    </button>
                  </div>
                  {currentScene.autoRotate?.enabled && (
                    <div className="space-y-4 pl-2 border-l border-[#2a2623]">
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-bold text-[#888] uppercase">旋轉方向</label>
                        <div className="flex bg-[#1a1816] rounded-md border border-[#2a2623] p-1">
                          <button 
                            onClick={() => updateScene(s => { if(s.autoRotate) s.autoRotate.direction = 'right'; }, true)}
                            className={cn("flex-1 py-1 text-[12px] font-bold rounded transition-colors", currentScene.autoRotate.direction === 'right' ? "bg-[#eba96a] text-[#141210]" : "text-[#888] hover:text-[#e0e0e0]")}
                          >
                            向左
                          </button>
                          <button 
                            onClick={() => updateScene(s => { if(s.autoRotate) s.autoRotate.direction = 'left'; }, true)}
                            className={cn("flex-1 py-1 text-[12px] font-bold rounded transition-colors", currentScene.autoRotate.direction === 'left' ? "bg-[#eba96a] text-[#141210]" : "text-[#888] hover:text-[#e0e0e0]")}
                          >
                            向右
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-[12px] font-bold text-[#888] uppercase">旋轉速度</label>
                          <span className="text-[12px] font-mono text-[#eba96a]">{currentScene.autoRotate.speed.toFixed(1)}</span>
                        </div>
                        <input 
                          type="range" min="0.1" max="2" step="0.1" 
                          className="w-full accent-[#eba96a]"
                          value={currentScene.autoRotate.speed}
                          onChange={e => updateScene(s => { if(s.autoRotate) s.autoRotate.speed = parseFloat(e.target.value); }, true)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-[12px] font-bold text-[#888] uppercase">靜止啟動 (秒)</label>
                        </div>
                        <input 
                          type="number" min="0" max="100" 
                          className="w-full bg-[#1a1816] border border-[#2a2623] rounded px-3 py-1.5 text-xs text-[#e0e0e0] outline-none focus:ring-1 focus:ring-[#eba96a]"
                          value={currentScene.autoRotate.idleTime ?? 5}
                          onChange={e => updateScene(s => { if(s.autoRotate) s.autoRotate.idleTime = parseInt(e.target.value) || 0; }, true)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-[#2a2d33]/50">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#e0e0e0]">自動輪播</h4>
                    <button 
                      onClick={() => updateScene(s => {
                        if (!s.autoCarousel) {
                          s.autoCarousel = { enabled: true, idleTime: 5 };
                        } else {
                          s.autoCarousel.enabled = !s.autoCarousel.enabled;
                        }
                      }, true)}
                      className={cn(
                        "relative w-10 h-5 rounded-full transition-colors",
                        currentScene.autoCarousel?.enabled ? "bg-[#eba96a]" : "bg-[#2a2623]"
                      )}
                    >
                      <div className={cn(
                        "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                        currentScene.autoCarousel?.enabled ? "left-6" : "left-1"
                      )} />
                    </button>
                  </div>
                  {currentScene.autoCarousel?.enabled && (
                    <div className="space-y-3 pl-2 border-l border-[#2a2623]">
                      {!currentScene.autoRotate?.enabled ? (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <label className="text-[12px] font-bold text-[#888] uppercase">靜止啟動 (秒)</label>
                          </div>
                          <input 
                            type="number" min="1" max="1000" 
                            className="w-full bg-[#1a1816] border border-[#2a2623] rounded px-3 py-1.5 text-xs text-[#e0e0e0] outline-none focus:ring-1 focus:ring-[#eba96a]"
                            value={currentScene.autoCarousel.idleTime ?? 5}
                            onChange={e => updateScene(s => s.autoCarousel.idleTime = parseInt(e.target.value) || 1, true)}
                          />
                        </div>
                      ) : (
                        <div className="p-2.5 bg-[#eba96a]/10 border border-[#eba96a]/20 rounded-md">
                          <p className="text-[12px] text-[#eba96a] leading-relaxed">
                            已啟用自動旋轉：場景將在旋轉一圈 (360°) 後自動切換。
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection 
              id="bottomLogo"
              title="底部圖示"
              isOpen={openSections.bottomLogo}
              onToggle={toggleSection}
              disabled={!currentScene.bottomLogo?.enabled}
              extraHeader={
                <button 
                  onClick={() => updateScene(s => {
                    if (!s.bottomLogo) {
                      s.bottomLogo = { enabled: true, size: 50 };
                    } else {
                      s.bottomLogo.enabled = !s.bottomLogo.enabled;
                    }
                  })}
                  className={cn(
                    "relative w-10 h-5 rounded-full transition-colors",
                    currentScene.bottomLogo?.enabled ? "bg-[#eba96a]" : "bg-[#2a2623]"
                  )}
                >
                  <div className={cn(
                    "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                    currentScene.bottomLogo?.enabled ? "left-6" : "left-1"
                  )} />
                </button>
              }
            >
              {currentScene.bottomLogo?.enabled && (
                <div className="space-y-4">
                  <div className="flex bg-[#1a1816] rounded-md p-1 border border-[#2a2623] gap-1">
                    {(['color', 'image'] as const).map(type => (
                      <button
                        key={type}
                        onClick={() => updateScene(s => { if(s.bottomLogo) s.bottomLogo.type = type; })}
                        className={cn(
                          "flex-1 text-xs py-1.5 rounded-sm transition-colors",
                          (currentScene.bottomLogo?.type || 'color') === type
                            ? "bg-[#2a2623] text-[#f0f0f0]"
                            : "text-[#888] hover:text-[#e0e0e0] hover:bg-[#2a2623]/50"
                        )}
                      >
                        {type === 'color' ? '純色' : '圖片'}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[12px] font-bold text-[#888] uppercase">尺寸</label>
                      <span className="text-[12px] font-mono text-[#eba96a]">
                        {(currentScene.bottomLogo?.type === 'color' || !currentScene.bottomLogo?.type) 
                          ? (currentScene.bottomLogo?.colorSize ?? currentScene.bottomLogo?.size ?? 45) : 
                        (currentScene.bottomLogo?.imageSize ?? currentScene.bottomLogo?.size ?? 45)}
                      </span>
                    </div>
                  <input 
                    type="range" min="10" max="80" step="1" 
                    className="w-full accent-[#eba96a]"
                    value={
                      (currentScene.bottomLogo?.type === 'color' || !currentScene.bottomLogo?.type) 
                        ? (currentScene.bottomLogo?.colorSize ?? currentScene.bottomLogo?.size ?? 45) : 
                      (currentScene.bottomLogo?.imageSize ?? currentScene.bottomLogo?.size ?? 45)
                    }
                    onChange={e => updateScene(s => {
                      if (!s.bottomLogo) return;
                      const val = parseInt(e.target.value);
                      if (!s.bottomLogo.type || s.bottomLogo.type === 'color') s.bottomLogo.colorSize = val;
                      else s.bottomLogo.imageSize = val;
                    })}
                  />
                </div>

                {(!currentScene.bottomLogo.type || currentScene.bottomLogo.type === 'color') && (
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-[#888] uppercase">顏色</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={currentScene.bottomLogo.color || "#000000"}
                          onChange={e => updateScene(s => { if(s.bottomLogo) s.bottomLogo.color = e.target.value; })}
                          className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0"
                        />
                        <input
                          type="text"
                          maxLength={7}
                          value={currentScene.bottomLogo.color || "#000000"}
                          onChange={e => {
                            let val = e.target.value;
                            if (val.length > 0 && !val.startsWith('#')) val = '#' + val;
                            // Allow only HEX characters
                            if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                              updateScene(s => { if(s.bottomLogo) s.bottomLogo.color = val; });
                            }
                          }}
                          className="bg-transparent border-none text-xs text-white uppercase font-mono w-20 outline-none focus:text-[#eba96a]"
                        />
                      </div>
                    </div>
                  )}

                  {currentScene.bottomLogo.type === 'image' && (
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-[#888] uppercase">選擇圖片</label>
                          <input 
                            type="file" 
                            ref={logoImageInputRef} 
                            className="hidden" 
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              const imageBlobId = uuidv4();
                              await saveBlob(imageBlobId, file);
                              updateScene(s => { 
                                if(s.bottomLogo) {
                                  s.bottomLogo.imageBlobId = imageBlobId;
                                  s.bottomLogo.imageRotation = 0;
                                }
                              });
                            }}
                          />
                        {currentScene.bottomLogo.imageBlobId ? (
                          <SidebarThumbnailWrapper 
                            blobId={currentScene.bottomLogo.imageBlobId} 
                            onClick={() => logoImageInputRef.current?.click()} 
                          />
                        ) : (
                          <button
                            onClick={() => logoImageInputRef.current?.click()}
                            className="w-full flex items-center justify-center py-6 border-2 border-dashed border-[#2a2623] hover:border-[#eba96a]/50 rounded-md bg-[#1a1816] text-[#888] hover:text-[#eba96a] transition-all"
                          >
                            <ImageIcon className="w-5 h-5 mb-1" />
                            <span className="text-xs">上傳圖片</span>
                          </button>
                        )}
                      </div>
                      
                      {currentScene.bottomLogo.imageBlobId && (
                        <div className="pt-4 border-t border-[#2a2623] space-y-4">
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between">
                                <label className="text-[12px] font-bold text-[#888] uppercase">圖片旋轉</label>
                                <span className="text-[12px] font-mono text-[#eba96a]">{currentScene.bottomLogo.imageRotation || 0}°</span>
                              </div>
                            <input 
                              type="range" min="-180" max="180" step="1" 
                              className="w-full accent-[#eba96a]"
                              value={currentScene.bottomLogo.imageRotation || 0}
                              onChange={e => updateScene(s => {
                                if (s.bottomLogo) s.bottomLogo.imageRotation = parseInt(e.target.value);
                              })}
                            />
                          </div>
                          
                          <div className="flex gap-2">
                            <button 
                              onClick={() => updateScene(s => { if(s.bottomLogo) s.bottomLogo.imageFlipH = !s.bottomLogo.imageFlipH; })}
                              className={cn(
                                "flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs rounded transition-colors border", 
                                currentScene.bottomLogo.imageFlipH ? 'bg-[#eba96a]/20 border-[#eba96a]/50 text-[#eba96a]' : 'bg-[#1a1816] border-[#2a2623] hover:bg-[#2a2623] text-[#e0e0e0]'
                              )}
                            >
                              <FlipHorizontal className="w-3.5 h-3.5" /> 水平翻轉
                            </button>
                            <button 
                              onClick={() => updateScene(s => { if(s.bottomLogo) s.bottomLogo.imageFlipV = !s.bottomLogo.imageFlipV; })}
                              className={cn(
                                "flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs rounded transition-colors border", 
                                currentScene.bottomLogo.imageFlipV ? 'bg-[#eba96a]/20 border-[#eba96a]/50 text-[#eba96a]' : 'bg-[#1a1816] border-[#2a2623] hover:bg-[#2a2623] text-[#e0e0e0]'
                              )}
                            >
                              <FlipVertical className="w-3.5 h-3.5" /> 垂直翻轉
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CollapsibleSection>

            {/* Added extensions list */}
            {(currentScene?.extensions || []).map(ext => {
              const ALL_EXTENSIONS = [...UTILITIES_EXTENSIONS, ...EFFECTS_EXTENSIONS];
              const extDef = ALL_EXTENSIONS.find(e => e.id === ext.type);
              if (!extDef) return null;
              
              return (
                <CollapsibleSection
                  key={ext.id}
                  id={`scene-ext-${ext.id}`}
                  title={extDef.name}
                  isOpen={openSections[`scene-ext-${ext.id}`] ?? false}
                  onToggle={toggleSection}
                  titlePrefix={<Star className="w-3.5 h-3.5 text-[#eba96a] fill-[#eba96a] shrink-0" />}
                  extraHeader={
                    <div className="flex items-center gap-2">
                       {ext.type === 'effects-color' && (
                         <button 
                           onClick={(e) => {
                             e.stopPropagation();
                             const isEnabled = ext.config?.enabled !== false;
                             updateExtensionConfig('effects-color', { enabled: isEnabled }, true);
                           }}
                           disabled={!ext.config || Object.keys(ext.config).length <= 1} // Only enabled field
                           className={cn(
                             "p-1.5 rounded-md transition-all",
                             (!ext.config || Object.keys(ext.config).length === 0) ? "text-[#333] cursor-not-allowed" : "text-[#eba96a] hover:bg-[#eba96a]/10"
                           )}
                           title="重設為預設值"
                         >
                           <RotateCcw className="w-3.5 h-3.5" />
                         </button>
                       )}
                      <button 
                        onClick={(e) => {
                           e.stopPropagation();
                           if (ext.type === 'utilities-list') {
                             updateProject(draft => {
                               draft.scenes.forEach(s => {
                                 const foundExt = s.extensions?.find((ex: any) => ex.type === 'utilities-list');
                                 if (foundExt) {
                                   if (!foundExt.config) foundExt.config = { enabled: true };
                                   foundExt.config.enabled = ext.config?.enabled === false ? true : false;
                                 }
                               });
                             });
                           } else {
                             updateScene(s => {
                               const foundExt = s.extensions?.find((ex: any) => ex.id === ext.id);
                               if (foundExt) {
                                 if (!foundExt.config) foundExt.config = { enabled: true };
                                 foundExt.config.enabled = foundExt.config.enabled === false ? true : false;
                               }
                             });
                           }
                        }}
                        className={cn(
                          "relative w-7 h-4 rounded-full transition-colors",
                          ext.config?.enabled !== false ? "bg-[#eba96a]" : "bg-[#333]"
                        )}
                      >
                        <div className={cn(
                          "absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all",
                          ext.config?.enabled !== false ? "left-3.5" : "left-0.5"
                        )} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (ext.type === 'utilities-list') {
                            updateProject(draft => {
                              draft.scenes.forEach(s => {
                                s.extensions = s.extensions?.filter((e: any) => e.type !== 'utilities-list');
                              });
                            });
                          } else {
                            updateScene(s => {
                              s.extensions = s.extensions?.filter((e: any) => e.id !== ext.id);
                              if (ext.type === 'utilities-stroke') {
                                s.drawings = []; // Clear all drawings when removing drawing tool
                              }
                            });
                          }
                        }}
                        className="p-1 rounded-md transition-colors text-[#555] hover:text-red-400 hover:bg-white/5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  }
                >
                  <div className={cn(
                    "p-4 bg-[#141210] rounded-lg border border-[#2a2623] mt-2 shadow-inner transition-all",
                    ext.config?.enabled === false && "opacity-50 grayscale pointer-events-none"
                  )}>
                    {ext.type === 'utilities-list' ? (
                      <div className="space-y-5">
                        <div className="flex items-center justify-between p-3.5 bg-[#1a1816] rounded-xl border border-[#2a2623] shadow-md">
                          <span className="text-[12px] font-bold text-[#e0e0e0]">分頁切換模式</span>
                          <button 
                            onClick={() => {
                              updateProject(draft => {
                                draft.scenes.forEach(s => {
                                  const e = s.extensions?.find((ex: any) => ex.type === 'utilities-list');
                                  if (e) {
                                    if (!e.config) e.config = { enabled: true, enableTabs: false, tabs: [] };
                                    e.config.enableTabs = !ext.config?.enableTabs;
                                  }
                                });
                              });
                            }}
                            className={cn(
                              "relative w-12 h-6 rounded-full transition-colors",
                              ext.config?.enableTabs ? "bg-[#eba96a]" : "bg-[#333]"
                            )}
                          >
                            <div className={cn(
                              "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                              ext.config?.enableTabs ? "left-7" : "left-1"
                            )} />
                          </button>
                        </div>

                        {ext.config?.enableTabs && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between px-1">
                              <h4 className="text-[12px] uppercase tracking-wider font-black text-[#555]">分頁標籤清單</h4>
                              <button 
                                onClick={() => {
                                  updateProject(draft => {
                                    draft.scenes.forEach(s => {
                                      const e = s.extensions?.find((ex: any) => ex.type === 'utilities-list');
                                      if (e) {
                                        if (!e.config) e.config = { enabled: true, enableTabs: false, tabs: [] };
                                        if (!e.config.tabs) e.config.tabs = [];
                                        
                                        // Find what tabs are in the original project to avoid adding multiple
                                        // Wait, easier to just push to the first one, then sync the array
                                      }
                                    });
                                    // Actually, just find the original array from the current scene, add one, then sync all scenes
                                    const currentExt = draft.scenes.find(sc => sc.id === currentSceneId)?.extensions?.find(ex => ex.type === 'utilities-list');
                                    if (currentExt) {
                                      if (!currentExt.config.tabs) currentExt.config.tabs = [];
                                      const clonedTabs = [...currentExt.config.tabs, { id: uuidv4(), name: '新分頁', sceneIds: [] }];
                                      draft.scenes.forEach(sc => {
                                        const e = sc.extensions?.find(ex => ex.type === 'utilities-list');
                                        if (e) {
                                          e.config.tabs = JSON.parse(JSON.stringify(clonedTabs));
                                        }
                                      });
                                    }
                                  });
                                }}
                                className="text-[12px] font-black text-[#eba96a] hover:text-[#f3c192] transition-colors flex items-center gap-1"
                              >
                                <Plus className="w-3 h-3" /> 新增分頁
                              </button>
                            </div>
                            <div className="space-y-4">
                              {(ext.config?.tabs || []).map((tab: any, idx: number) => (
                                <div key={tab.id} className="p-4 bg-[#1a1816] rounded-2xl border border-[#2a2623] space-y-4 shadow-xl group/tab-item">
                                  <div className="flex items-center gap-3">
                                    <div className="relative flex-1 group/input">
                                      <input 
                                        className="w-full bg-transparent border-none text-sm text-white p-0 pr-8 focus:ring-0 font-bold placeholder:text-[#333]"
                                        placeholder="分頁名稱..."
                                        value={tab.name}
                                        onChange={(e) => {
                                          updateProject(draft => {
                                            const currentExt = draft.scenes.find(sc => sc.id === currentSceneId)?.extensions?.find((x: any) => x.id === ext.id);
                                            if (currentExt && currentExt.config.tabs[idx]) {
                                              currentExt.config.tabs[idx].name = e.target.value;
                                              const clonedTabs = JSON.parse(JSON.stringify(currentExt.config.tabs));
                                              draft.scenes.forEach(sc => {
                                                const ex = sc.extensions?.find((x: any) => x.type === 'utilities-list');
                                                if (ex) {
                                                  ex.config.tabs = JSON.parse(JSON.stringify(clonedTabs));
                                                }
                                              });
                                            }
                                          });
                                        }}
                                      />
                                      <Pencil className="w-3.5 h-3.5 text-[#555] absolute right-0 top-1/2 -translate-y-1/2 opacity-40 group-hover/input:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                    <button 
                                      onClick={() => {
                                        updateProject(draft => {
                                          const currentExt = draft.scenes.find(sc => sc.id === currentSceneId)?.extensions?.find((x: any) => x.id === ext.id);
                                          if (currentExt) {
                                            currentExt.config.tabs = currentExt.config.tabs.filter((t: any) => t.id !== tab.id);
                                            const clonedTabs = JSON.parse(JSON.stringify(currentExt.config.tabs));
                                            draft.scenes.forEach(sc => {
                                              const ex = sc.extensions?.find((x: any) => x.type === 'utilities-list');
                                              if (ex) {
                                                ex.config.tabs = JSON.parse(JSON.stringify(clonedTabs));
                                              }
                                            });
                                          }
                                        });
                                      }}
                                      className="p-1.5 rounded-lg text-[#555] hover:text-red-500 hover:bg-red-500/10 transition-all opacity-0 group-hover/tab-item:opacity-100"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                  <button 
                                    onClick={() => setShowTabScenePicker({ tabId: tab.id, extId: ext.id })}
                                    className="w-full py-3.5 bg-[#eba96a]/5 hover:bg-[#eba96a]/10 rounded-xl border border-[#eba96a]/20 hover:border-[#eba96a] text-[12px] font-black text-[#eba96a] flex items-center justify-center gap-2.5 transition-all shadow-lg active:scale-[0.98]"
                                  >
                                    <Map className="w-5 h-5" /> 設定分頁場景 ({tab.sceneIds?.length || 0})
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : ext.type === 'utilities-floorplan' ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-[#888] uppercase">平面圖圖片</label>
                          <input 
                            type="file" 
                            id={`floorplan-upload-${ext.id}`}
                            className="hidden" 
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              const imageBlobId = uuidv4();
                              await saveBlob(imageBlobId, file);
                              updateScene(s => {
                                const ex = s.extensions?.find((ex_item: any) => ex_item.id === ext.id);
                                if (ex) {
                                  if (!ex.config) ex.config = { enabled: true };
                                  ex.config.floorplanBlobId = imageBlobId;
                                }
                              }, true);
                            }}
                          />
                          {ext.config?.floorplanBlobId ? (
                            <div className="relative aspect-[4/3] w-full bg-[#1a1816] rounded-xl border border-[#2a2623] cursor-pointer overflow-hidden group shadow-lg">
                              <div className="absolute inset-0" onClick={() => document.getElementById(`floorplan-upload-${ext.id}`)?.click()}>
                                <Thumbnail blobId={ext.config?.floorplanBlobId} />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-opacity">
                                  <span className="text-[12px] font-bold text-white bg-black/50 px-2 py-1 rounded">點擊更換圖片</span>
                                </div>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateScene(s => {
                                    const ex = s.extensions?.find((ex_item: any) => ex_item.id === ext.id);
                                    if (ex) ex.config.floorplanBlobId = undefined;
                                  }, true);
                                }}
                                className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-red-500 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all shadow-md backdrop-blur-sm"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => document.getElementById(`floorplan-upload-${ext.id}`)?.click()}
                              className="w-full flex flex-col items-center justify-center py-10 border-2 border-dashed border-[#2a2623] hover:border-[#eba96a]/50 rounded-xl bg-[#1a1816] text-[#888] hover:text-[#eba96a] transition-all group"
                            >
                              <div className="w-12 h-12 rounded-full bg-[#131210] flex items-center justify-center mb-3 border border-[#2a2623] group-hover:scale-110 transition-transform">
                                <Plus className="w-6 h-6" />
                              </div>
                              <span className="text-xs font-bold">上傳平面圖圖片</span>
                            </button>
                          )}
                        </div>
                        {ext.config?.floorplanBlobId && (
                          <button 
                            onClick={() => setShowFloorplanEditor(true)}
                            className="w-full py-3 bg-[#1a1816] hover:bg-[#221f1c] rounded-xl border border-[#2a2623] text-xs font-bold text-[#e0e0e0] flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                          >
                            <LayoutGrid className="w-4 h-4 text-[#eba96a]" />
                            設置平面圖
                          </button>
                        )}
                      </div>
                    ) : ext.type === 'utilities-music' ? (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-[#888] uppercase">背景音樂檔案</label>
                          <input 
                            type="file" 
                            id={`music-upload-${ext.id}`}
                            className="hidden" 
                            accept="audio/*"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              const audioBlobId = uuidv4();
                              await saveBlob(audioBlobId, file);
                              updateScene(s => {
                                const ex = s.extensions?.find((ex_item: any) => ex_item.id === ext.id);
                                if (ex) {
                                  if (!ex.config) ex.config = { enabled: true };
                                  ex.config.audioBlobId = audioBlobId;
                                  ex.config.audioName = file.name;
                                  ex.config.volume = ex.config.volume ?? 0.5;
                                }
                              });
                            }}
                          />
                          {ext.config?.audioBlobId ? (
                            <div className="p-4 bg-[#1a1816] rounded-xl border border-[#eba96a]/30 space-y-3 shadow-lg">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <Music className="w-4 h-4 text-[#eba96a] shrink-0" />
                                  <span className="text-xs text-white font-bold truncate">{ext.config?.audioName || '音檔'}</span>
                                </div>
                                <button 
                                  onClick={() => updateScene(s => {
                                    const ex = s.extensions?.find((ex_item: any) => ex_item.id === ext.id);
                                    if (ex) {
                                      ex.config.audioBlobId = undefined;
                                      ex.config.audioName = undefined;
                                    }
                                  })}
                                  className="text-[#555] hover:text-red-400 p-1"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label className="text-[10px] font-bold text-[#555] uppercase tracking-wider">音量大小</label>
                                  <span className="text-[10px] font-mono text-[#eba96a]">{Math.round((ext.config?.volume ?? 0.5) * 100)}%</span>
                                </div>
                                <input 
                                  type="range" min="0" max="1" step="0.01" 
                                  className="w-full accent-[#eba96a] h-1"
                                  value={ext.config?.volume ?? 0.5}
                                  onChange={e => updateScene(s => {
                                    const ex = s.extensions?.find((ex_item: any) => ex_item.id === ext.id);
                                    if (ex) {
                                      if (!ex.config) ex.config = {};
                                      ex.config.volume = parseFloat(e.target.value);
                                    }
                                  })}
                                />
                              </div>

                              <button 
                                onClick={() => {
                                  const audioEl = audioRef.current;
                                  if (audioEl) {
                                    if (audioEl.paused) {
                                      const { loadBlobUrl } = useStore.getState();
                                      const blobId = ext.config?.audioBlobId;
                                      if (blobId) {
                                        loadBlobUrl(blobId).then(url => {
                                          audioEl.src = url;
                                          audioEl.volume = ext.config?.volume ?? 0.5;
                                          audioEl.play().catch(console.error);
                                        });
                                      }
                                    } else {
                                      audioEl.pause();
                                    }
                                  }
                                }}
                                className={cn(
                                  "w-full py-2.5 border text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-2",
                                  isAudioPlaying 
                                    ? "bg-red-600 border-red-500 text-white hover:bg-red-700 shadow-[0_0_15px_rgba(239,68,68,0.3)]" 
                                    : "bg-[#eba96a]/10 hover:bg-[#eba96a]/20 border-[#eba96a]/30 text-[#eba96a]"
                                )}
                              >
                                {isAudioPlaying ? <X className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                                {isAudioPlaying ? "停止播放" : "試聽音檔"}
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => document.getElementById(`music-upload-${ext.id}`)?.click()}
                              className="w-full flex flex-col items-center justify-center py-8 border-2 border-dashed border-[#2a2623] hover:border-[#eba96a]/40 rounded-xl bg-[#1a1816] text-[#888] hover:text-[#eba96a] transition-all"
                            >
                              <Plus className="w-8 h-8 mb-2 opacity-20" />
                              <span className="text-xs font-bold">上傳背景音檔 (支援 MP3, WAV 等)</span>
                            </button>
                          )}
                        </div>
                        <audio ref={audioRef} id="preview-audio-player" className="hidden" />
                      </div>
                    ) : ext.type === 'utilities-stroke' ? (
                      <div className="space-y-4">
                        <div className="p-3 bg-[#eba96a]/10 border border-[#eba96a]/20 rounded-xl space-y-4">
                           <p className="text-[11px] text-[#eba96a] leading-relaxed font-bold">
                             開啟畫筆模式後可在畫面上進行標註與繪圖。
                           </p>
                           <div className="flex gap-2">
                             {(() => {
                               const hasDrawings = (currentScene?.drawings?.length || 0) > 0;
                               return (
                                 <>
                                   <button 
                                     onClick={() => setActiveTool(activeTool === 'brush' ? 'select' : 'brush')}
                                     className={cn(
                                       "flex-[1.5] py-2.5 px-[10px] rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2",
                                       activeTool === 'brush' ? "bg-[#eba96a] text-[#141210]" : "bg-[#1a1816] text-white hover:bg-[#221f1c] border border-[#2a2623]"
                                     )}
                                   >
                                     <Pencil className="w-4 h-4" />
                                     {activeTool === 'brush' ? '繪圖中...' : '繪圖'}
                                   </button>
                                   <button 
                                     onClick={() => {
                                       if (!hasDrawings) return;
                                       setActiveTool(activeTool === 'eraser' ? 'select' : 'eraser');
                                     }}
                                     disabled={!hasDrawings}
                                     className={cn(
                                       "flex-1 py-2.5 px-[10px] rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2",
                                       activeTool === 'eraser' ? "bg-red-500 text-white" : "bg-[#1a1816] text-white hover:bg-[#221f1c] border border-[#2a2623]",
                                       !hasDrawings && "opacity-50 grayscale cursor-not-allowed"
                                     )}
                                     title="橡皮擦"
                                   >
                                     <Eraser className="w-4 h-4" />
                                   </button>
                                   <button 
                                     onClick={() => {
                                       if (!hasDrawings) return;
                                       const { showConfirm } = useStore.getState();
                                       showConfirm({
                                         title: '重置繪圖',
                                         message: '確定要清除目前場景的所有繪圖嗎？',
                                         confirmText: '確定清除',
                                         type: 'danger',
                                         onConfirm: () => {
                                           updateScene(s => {
                                             s.drawings = [];
                                             if (activeTool === 'eraser') setActiveTool('select');
                                           });
                                         }
                                       });
                                     }}
                                     disabled={!hasDrawings}
                                     className={cn(
                                       "p-2.5 rounded-lg transition-all border",
                                       hasDrawings 
                                         ? "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border-red-500/30" 
                                         : "bg-white/5 text-[#555] border-transparent cursor-not-allowed opacity-30"
                                     )}
                                     title="清除所有繪圖"
                                   >
                                     <Trash2 className="w-4 h-4" />
                                   </button>
                                 </>
                               );
                             })()}
                           </div>
                        </div>

                        {activeTool === 'brush' && (
                          <div className="space-y-4 p-3 bg-white/5 rounded-xl border border-white/5 animate-in fade-in duration-300">
                             <div className="grid grid-cols-2 gap-3">
                               <div className="space-y-2">
                                 <label className="text-[10px] text-[#555] font-black uppercase tracking-wider">畫筆顏色</label>
                                 <input 
                                   type="color" 
                                   className="w-full h-8 bg-black border border-[#2a2623] rounded p-1 cursor-pointer"
                                   value={brushSettings.color}
                                   onChange={e => setBrushSettings({ color: e.target.value })}
                                 />
                               </div>
                               <div className="space-y-2">
                                 <label className="text-[10px] text-[#555] font-black uppercase tracking-wider">粗細 ({brushSettings.width}px)</label>
                                 <input 
                                   type="range" min="1" max="50" 
                                   className="w-full accent-[#eba96a]"
                                   value={brushSettings.width}
                                   onChange={e => setBrushSettings({ width: parseInt(e.target.value) })}
                                 />
                               </div>
                             </div>
                             <div className="flex bg-[#131210] p-1 rounded-lg border border-[#2a2623]">
                                <button 
                                  onClick={() => setBrushSettings({ type: 'freehand' })}
                                  className={cn("flex-1 py-1.5 text-[10px] font-black rounded transition-all", brushSettings.type === 'freehand' ? "bg-[#eba96a] text-black" : "text-[#555] hover:text-white")}
                                >手繪</button>
                                <button 
                                  onClick={() => setBrushSettings({ type: 'line' })}
                                  className={cn("flex-1 py-1.5 text-[10px] font-black rounded transition-all", brushSettings.type === 'line' ? "bg-[#eba96a] text-black" : "text-[#555] hover:text-white")}
                                >直線</button>
                             </div>
                          </div>
                        )}
                      </div>
                    ) : ext.type === 'effects-color' ? (
                      <div className="space-y-5">
                       {[
                         { id: 'brightness', name: '亮度', icon: Sun, min: 0, max: 2, step: 0.01, default: 1 },
                         { id: 'contrast', name: '對比', icon: Type, min: 0, max: 2, step: 0.01, default: 1 },
                         { id: 'saturate', name: '飽和度', icon: Sparkles, min: 0, max: 3, step: 0.01, default: 1 },
                         { id: 'hueRotate', name: '色相 (度)', icon: Palette, min: 0, max: 360, step: 1, default: 0 },
                         { id: 'blur', name: '模糊', icon: EyeOff, min: 0, max: 10, step: 0.1, default: 0 }
                       ].map(param => (
                         <div key={param.id} className="space-y-2">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-2">
                               <param.icon className="w-3.5 h-3.5 text-[#555]" />
                               <label className="text-[11px] font-bold text-[#888] uppercase">{param.name}</label>
                             </div>
                             <div className="flex items-center gap-2">
                               <span className="text-[11px] font-mono text-[#eba96a]">{ext.config?.[param.id] ?? param.default}</span>
                               {(ext.config?.[param.id] !== undefined && ext.config?.[param.id] !== param.default) && (
                                 <button 
                                   onClick={() => updateExtensionConfig('effects-color', { [param.id]: param.default })}
                                   className="text-[#555] hover:text-[#eba96a] transition-colors"
                                 >
                                   <RotateCcw className="w-3 h-3" />
                                 </button>
                               )}
                             </div>
                           </div>
                           <input 
                              type="range" min={param.min} max={param.max} step={param.step} 
                              className="w-full accent-[#eba96a] h-1"
                              value={ext.config?.[param.id] ?? param.default}
                              onChange={e => updateExtensionConfig('effects-color', { [param.id]: parseFloat(e.target.value) })}
                           />
                         </div>
                       ))}
                      </div>
                    ) : ext.type === 'utilities-embed' ? (
                      <div className="flex flex-col items-center justify-center py-12 text-[#555] space-y-4">
                        <Globe className="w-12 h-12 opacity-20" />
                        <div className="text-sm font-bold bg-[#333] text-[#888] px-3 py-1 rounded-md border border-white/5 uppercase tracking-widest text-[10px]">未開放</div>
                      </div>
                    ) : ext.type === 'utilities-avatar' ? (
                      <div className="flex flex-col items-center justify-center py-12 text-[#555] space-y-4">
                        <Box className="w-12 h-12 opacity-20" />
                        <div className="text-sm font-bold bg-[#333] text-[#888] px-3 py-1 rounded-md border border-white/5 uppercase tracking-widest text-[10px]">未開放</div>
                      </div>
                    ) : (
                       <div className="p-4 text-xs text-[#888] bg-[#1a1816] rounded-md border border-[#2a2623]">
                         這是一個擴充功能模組 ({extDef.name})。目前尚無設定項目。
                       </div>
                    )}
                  </div>
                </CollapsibleSection>
              );
            })}
          </div>
        ) : tab === 'hotspots' ? (
          <div className={cn("flex-1 flex flex-col min-h-0 bg-[#131210]", isMobilePopup && "hidden sm:flex")}>
            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
              <DndContext 
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
              >
                <SortableContext 
                  items={(currentScene?.hotspots || []).map(h => h.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {(currentScene?.hotspots || []).map(h => (
                    <SortableHotspotItem 
                      key={h.id}
                      h={h}
                      isSelected={selectedHotspotIds.includes(h.id)}
                      editingHotspotId={editingHotspotId}
                      editingHotspotName={editingHotspotName}
                      editHotspotInputRef={editHotspotInputRef}
                      setEditingHotspotName={setEditingHotspotName}
                      setEditingHotspotId={setEditingHotspotId}
                      saveHotspotName={saveHotspotName}
                      startEditingHotspot={startEditingHotspot}
                      setSelectedHotspotIds={setSelectedHotspotIds}
                      updateHotspot={updateHotspot}
                      deleteHotspot={deleteHotspot}
                      selectedHotspotIds={selectedHotspotIds}
                      updateCurrentProject={updateCurrentProject}
                      currentSceneId={currentSceneId}
                      allHotspots={currentScene.hotspots}
                    />
                  ))}
                </SortableContext>
              </DndContext>
              {(currentScene?.hotspots || []).length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-[#555] text-[12px]">
                  <CircleDot className="w-8 h-8 mb-3 opacity-20" />
                  <p className="font-bold">尚未建立任何資訊點</p>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>

      {/* Hotspot detail fixed panel at bottom */}
      {(tab === 'hotspots' || isMobilePopup) && currentHotspot && (
        <div 
          className="border-t border-[#2a2623] bg-[#141210] flex flex-col shrink-0 relative"
          style={{ height: detailPanelHeight }}
        >
          {/* Resize handle */}
          <div 
            className="absolute top-0 left-0 right-0 h-[32px] -mt-[16px] cursor-ns-resize z-[200] flex items-center justify-center group touch-none"
            onPointerDown={startResizing}
          >
            <div className="w-12 h-[4px] bg-[#2a2623] rounded-full group-hover:bg-[#eba96a] transition-colors mt-[16px]" />
          </div>

          <div className="flex items-center justify-between p-4 pt-5 pb-2 shrink-0 bg-[#141210] z-10">
            <h4 className="text-xs font-bold text-[#eba96a] tracking-wider">資訊點詳情</h4>
            <button 
              onClick={() => setSelectedHotspotIds([])}
              className="p-1 text-[#555] hover:text-[#e0e0e0] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-[calc(48px+env(safe-area-inset-bottom)+16px)] sm:pb-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#555] uppercase block mb-1">資訊點類型</label>
                <select
                  className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-xs text-[#e0e0e0] focus:ring-1 focus:ring-[#eba96a] outline-none"
                  value={currentHotspot.type}
                  onChange={e => updateHotspot(hot => {
                    hot.type = e.target.value;
                    if (hot.type === 'text' && !hot.customText) {
                      hot.customText = hot.title || '輸入自訂文字';
                    }
                  })}
                >
                  <option value="info">資訊</option>
                  <option value="quiz">問答</option>
                  <option value="jump">轉跳</option>
                  <option value="link">超連結</option>
                  <option value="text">文字</option>
                  <option value="image">圖片</option>
                  <option value="video">影片</option>
                </select>
              </div>

              {(currentHotspot.type === 'info' || currentHotspot.type === 'quiz') && (
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#555] uppercase">內容文案</label>
                  <textarea
                    rows={3}
                    className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-xs text-[#e0e0e0] focus:ring-1 focus:ring-[#eba96a] outline-none resize-none"
                    value={currentHotspot.content || ''}
                    onChange={e => updateHotspot(hot => hot.content = e.target.value)}
                    placeholder="點擊資訊點後顯示的描述..."
                  />
                </div>
              )}

              {currentHotspot.type === 'text' && (
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#eba96a] uppercase">自訂文字內容</label>
                  <textarea
                    rows={2}
                    className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-xs text-[#e0e0e0] focus:ring-1 focus:ring-[#eba96a] outline-none resize-none"
                    value={currentHotspot.customText || ''}
                    onChange={e => updateHotspot(hot => hot.customText = e.target.value)}
                    placeholder="將顯示於全景圖中..."
                  />
                </div>
              )}

              {currentHotspot.type === 'video' && (
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#eba96a] uppercase">YouTube 連結</label>
                  <input
                    type="text"
                    className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-xs text-[#e0e0e0] focus:ring-1 focus:ring-[#eba96a] outline-none"
                    value={currentHotspot.youtubeUrl || ''}
                    onChange={e => updateHotspot(hot => hot.youtubeUrl = e.target.value)}
                    placeholder="https://youtu.be/..."
                  />
                </div>
              )}

              {currentHotspot.type === 'link' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#eba96a] uppercase">超連結網址</label>
                    <input
                      type="text"
                      className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-xs text-[#e0e0e0] focus:ring-1 focus:ring-[#eba96a] outline-none"
                      value={currentHotspot.linkUrl || ''}
                      onChange={e => updateHotspot(hot => hot.linkUrl = e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>
                  <button 
                    onClick={() => updateHotspot(hot => hot.linkNewTab = !hot.linkNewTab)}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-md border transition-all",
                      currentHotspot.linkNewTab ? "bg-[#eba96a]/10 border-[#eba96a]/30" : "bg-[#1a1816] border-[#2a2623]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <ExternalLink className={cn("w-4 h-4", currentHotspot.linkNewTab ? "text-[#eba96a]" : "text-[#555]")} />
                      <span className={cn("text-xs font-bold", currentHotspot.linkNewTab ? "text-[#eba96a]" : "text-[#888]")}>另開分頁開啟</span>
                    </div>
                    <div className={cn("relative w-8 h-4 rounded-full transition-colors", currentHotspot.linkNewTab ? "bg-[#eba96a]" : "bg-[#333]")}>
                      <div className={cn("absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all", currentHotspot.linkNewTab ? "left-4.5" : "left-0.5")} />
                    </div>
                  </button>
                </div>
              )}

              {currentHotspot.type === 'image' && (
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#eba96a] uppercase">上傳自訂圖片</label>
                  <label className="p-4 border border-[#2a2623] border-dashed rounded-md bg-[#1a1816] text-center cursor-pointer hover:bg-[#221f1c] transition-colors block relative overflow-hidden h-24 group">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const { v4: uuidv4 } = await import('uuid');
                          const { saveBlob } = await import('../../lib/db');
                          const blobId = uuidv4();
                          await saveBlob(blobId, file);
                          updateHotspot(hot => {
                            hot.customIconBlobId = blobId;
                            hot.imageScale = 1;
                            hot.imageRotation = 0;
                          });
                        }
                      }}
                    />
                    <span className="relative z-10 text-xs text-[#888] flex items-center justify-center h-full group-hover:opacity-0 transition-opacity">
                      {currentHotspot.customIconBlobId ? '已上傳' : '點擊上傳圖片'}
                    </span>
                    {currentHotspot.customIconBlobId && <SidebarThumbnail blobId={currentHotspot.customIconBlobId} />}
                  </label>
                </div>
              )}

              {(currentHotspot.type === 'text' || currentHotspot.type === 'image' || currentHotspot.type === 'video') && (
                <div className="space-y-4 pt-4 border-t border-[#2a2623]">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[12px] font-bold text-[#555] uppercase flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3" /> 大小
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-mono text-[#eba96a]">{((currentHotspot.imageScale ?? 1) * 100).toFixed(0)}%</span>
                        <button 
                          disabled={(currentHotspot.imageScale ?? 1) === 1}
                          onClick={() => updateHotspot(hot => hot.imageScale = 1)}
                          className="text-[#888] hover:text-[#eba96a] transition-colors disabled:opacity-20 flex items-center"
                        >
                          <RotateCcw className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <input 
                      type="range" min="0.1" max="3" step="0.1" 
                      className="w-full accent-[#eba96a]"
                      value={currentHotspot.imageScale ?? 1}
                      onChange={e => updateHotspot(hot => hot.imageScale = parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[12px] font-bold text-[#555] uppercase flex items-center gap-1.5">
                        <RotateCw className="w-3 h-3" /> 旋轉
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-mono text-[#eba96a]">{currentHotspot.imageRotation ?? 0}°</span>
                        <button 
                          disabled={(currentHotspot.imageRotation ?? 0) === 0}
                          onClick={() => updateHotspot(hot => hot.imageRotation = 0)}
                          className="text-[#888] hover:text-[#eba96a] transition-colors disabled:opacity-20 flex items-center"
                        >
                          <RotateCcw className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <input 
                      type="range" min="-180" max="180" step="1" 
                      className="w-full accent-[#eba96a]"
                      value={currentHotspot.imageRotation ?? 0}
                      onChange={e => updateHotspot(hot => hot.imageRotation = parseInt(e.target.value))}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateHotspot(hot => hot.imageFlipX = !hot.imageFlipX)}
                      className={cn("flex-1 py-1.5 rounded bg-[#1a1816] border border-[#2a2623] text-[12px] font-bold flex items-center justify-center gap-2", currentHotspot.imageFlipX ? "text-[#eba96a] border-[#eba96a]" : "text-[#888] hover:text-[#e0e0e0]")}
                    >
                      <FlipHorizontal className="w-3 h-3" /> 水平反轉
                    </button>
                    <button 
                      onClick={() => updateHotspot(hot => hot.imageFlipY = !hot.imageFlipY)}
                      className={cn("flex-1 py-1.5 rounded bg-[#1a1816] border border-[#2a2623] text-[12px] font-bold flex items-center justify-center gap-2", currentHotspot.imageFlipY ? "text-[#eba96a] border-[#eba96a]" : "text-[#888] hover:text-[#e0e0e0]")}
                    >
                      <FlipVertical className="w-3 h-3" /> 垂直反轉
                    </button>
                  </div>
                </div>
              )}

              {currentHotspot.type === 'quiz' && (
                <div className="p-3 border border-[#eba96a]/20 rounded-lg space-y-3 mt-4 bg-[#eba96a]/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-[#eba96a] uppercase">問答設定</span>
                  </div>
                  <input
                    type="text"
                    className="w-full bg-[#1a1816] border border-[#2a2623] rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-[#eba96a] outline-none mb-2"
                    value={currentHotspot.quiz?.question || ''}
                    onChange={e => updateHotspot(hot => {
                      if (!hot.quiz) hot.quiz = { question: '', options: ['', '', ''], answerIndex: 0 };
                      hot.quiz.question = e.target.value;
                    })}
                    placeholder="問題內容..."
                  />
                  <div className="space-y-1.5">
                    {[0, 1, 2].map(idx => (
                      <div key={idx} className={`flex items-center gap-2 p-1.5 rounded-md border ${currentHotspot.quiz?.answerIndex === idx ? 'bg-[#eba96a]/20 border-[#eba96a]/50' : 'bg-[#1a1816] border-[#2a2623]'}`}>
                        <input 
                          type="radio" 
                          checked={currentHotspot.quiz?.answerIndex === idx}
                          onChange={() => updateHotspot(hot => hot.quiz.answerIndex = idx)}
                          className="accent-[#eba96a]"
                        />
                        <input
                          type="text"
                          className="flex-1 bg-transparent border-none focus:outline-none text-xs text-[#e0e0e0]"
                          value={currentHotspot.quiz?.options?.[idx] || ''}
                          onChange={e => updateHotspot(hot => {
                            if (!hot.quiz) hot.quiz = { question: '', options: ['', '', ''], answerIndex: 0 };
                            hot.quiz.options[idx] = e.target.value;
                          })}
                          placeholder={`選項 ${idx + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(!['jump', 'image', 'video', 'text', 'link'].includes(currentHotspot.type)) && (
                <button 
                  onClick={() => updateHotspot(hot => hot.voiceEnabled = !hot.voiceEnabled)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-md border transition-all mt-2",
                    currentHotspot.voiceEnabled ? "bg-[#eba96a]/10 border-[#eba96a]/30" : "bg-[#1a1816] border-[#2a2623]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Volume2 className={cn("w-4 h-4", currentHotspot.voiceEnabled ? "text-[#eba96a]" : "text-[#555]")} />
                    <span className={cn("text-xs font-bold", currentHotspot.voiceEnabled ? "text-[#eba96a]" : "text-[#888]")}>AI 語音朗讀</span>
                  </div>
                  <div className={cn("relative w-8 h-4 rounded-full", currentHotspot.voiceEnabled ? "bg-[#eba96a]" : "bg-[#333]")}>
                    <div className={cn("absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all", currentHotspot.voiceEnabled ? "left-4.5" : "left-0.5")} />
                  </div>
                </button>
              )}

              {currentHotspot.type === 'jump' && (
                <div className="space-y-3 pt-4 border-t border-[#2a2623]">
                   <label className="text-[12px] font-bold text-[#555] uppercase">轉跳場景設定</label>
                   {currentHotspot.targetSceneId ? (() => {
                     const targetScene = currentProject.scenes.find(s => s.id === currentHotspot.targetSceneId);
                     return (
                       <div className="relative aspect-video rounded-lg overflow-hidden border border-[#2a2623] bg-[#000] cursor-pointer group" onClick={() => setShowScenePicker(true)}>
                         <Thumbnail blobId={targetScene?.imageBlobId} />
                         <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm">
                           <p className="text-[12px] text-white font-medium truncate">{targetScene?.name || '未知場景'}</p>
                         </div>
                       </div>
                     );
                   })() : (
                     <button onClick={() => setShowScenePicker(true)} className="w-full py-6 border border-[#2a2623] border-dashed rounded-lg bg-[#111] hover:bg-[#1a1816] text-[#888] flex flex-col items-center justify-center gap-2">
                       <ArrowUpRight className="w-5 h-5" />
                       <span className="text-xs font-medium">選取目標場景</span>
                     </button>
                   )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Right Sidebar Footer - Hide when in hotspots tab */}
      {(tab !== 'hotspots' && !isMobilePopup) && (
        <div className="p-4 border-t border-[#2a2623] bg-[#131210] shrink-0 pb-[calc(72px+env(safe-area-inset-bottom))] sm:pb-4">
          <button 
            onClick={() => {
              setSelectedExtension(null);
              setShowExtensionPicker(true);
            }}
            disabled={!currentScene}
            className={cn(
              "w-full py-3.5 bg-[#eba96a] hover:bg-[#d99a5e] text-[#141210] rounded-lg font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 outline-none",
              !currentScene && "opacity-50 grayscale cursor-not-allowed"
            )}
          >
            <Plus className="w-5 h-5" />
            <span>新增擴充功能</span>
          </button>
        </div>
      )}
    </aside>

    {/* Tab Scene Picker Modal */}
    {showTabScenePicker && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setShowTabScenePicker(null)}>
          <div 
            className="bg-[#1a1816] border border-[#2a2623] rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#2a2623] flex items-center justify-between bg-[#1a1816]">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  設定分頁場景
                </h2>
                <p className="text-sm text-[#888] mt-1">選取此分頁中要顯示的場景</p>
              </div>
              <button onClick={() => setShowTabScenePicker(null)} className="p-2 text-[#888] hover:text-white hover:bg-[#2a2623] rounded-full transition-all flex items-center justify-center">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 bg-[#131210]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {(currentProject?.scenes || []).map(s => {
                  const ext = currentProject?.extensions?.find((e: any) => e.id === showTabScenePicker.extId) || currentScene?.extensions?.find((e: any) => e.id === showTabScenePicker.extId);
                  const tab = ext?.config?.tabs?.find((t: any) => t.id === showTabScenePicker.tabId);
                  const isSelected = tab?.sceneIds?.includes(s.id);
                  
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        updateProject(draft => {
                          const currentExt = draft.scenes.find(sc => sc.id === currentSceneId)?.extensions?.find((x: any) => x.id === showTabScenePicker.extId);
                          let newSceneIds: string[] = [];
                          if (currentExt) {
                            const t = currentExt.config?.tabs?.find((tab: any) => tab.id === showTabScenePicker.tabId);
                            if (t) {
                               if (!t.sceneIds) t.sceneIds = [];
                               if (t.sceneIds.includes(s.id)) {
                                 t.sceneIds = t.sceneIds.filter((id: string) => id !== s.id);
                               } else {
                                 t.sceneIds.push(s.id);
                               }
                               newSceneIds = [...t.sceneIds];
                            }
                            
                            draft.scenes.forEach(sc => {
                              const ex = sc.extensions?.find((x: any) => x.type === 'utilities-list');
                              if (ex) {
                                const tab = ex.config?.tabs?.find((t: any) => t.id === showTabScenePicker.tabId);
                                if (tab) {
                                  tab.sceneIds = [...newSceneIds];
                                }
                              }
                            });
                          }
                        });
                      }}
                      className={cn(
                        "relative aspect-[2/1] rounded-xl overflow-hidden border transition-all group p-0 text-left bg-[#1a1816]",
                        isSelected ? "border-[#eba96a] ring-2 ring-[#eba96a]/50" : "border-[#2a2623] hover:border-[#eba96a]/50"
                      )}
                    >
                      <div className="absolute top-0 left-0 w-full h-full">
                        <Thumbnail blobId={s.imageBlobId} />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-sm text-white font-bold truncate">{s.name}</p>
                      </div>
                      {isSelected && (
                        <div className="absolute inset-x-0 top-0 p-2 flex justify-end">
                          <div className="bg-[#eba96a] text-black rounded-full p-1 shadow-lg">
                            <Check className="w-4 h-4" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="p-4 border-t border-[#2a2623] bg-[#1a1816] flex justify-end shrink-0">
              <button 
                onClick={() => setShowTabScenePicker(null)}
                className="px-8 py-3 rounded-md font-bold text-sm bg-[#eba96a] text-[#141210] hover:bg-[#d99a5e] transition-colors"
              >
                完成
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Single Scene Picker Modal (for jump hotspots) */}
      {showScenePicker && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setShowScenePicker(false)}>
          <div 
            className="bg-[#1a1816] border border-[#eba96a]/20 rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#2a2623] flex items-center justify-between bg-[#1a1816]/50">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <Map className="w-6 h-6 text-[#eba96a]" />
                  選取目標場景
                </h2>
                <p className="text-sm text-[#888] mt-1">選擇點擊資訊點後要跳轉到的場景</p>
              </div>
              <button onClick={() => setShowScenePicker(false)} className="p-2 text-[#888] hover:text-white hover:bg-white/5 rounded-full transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 bg-[#131210] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 no-scrollbar">
              {(currentProject?.scenes || []).map(s => {
                const isSelected = currentHotspot?.targetSceneId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      updateHotspot(hot => hot.targetSceneId = s.id);
                      setShowScenePicker(false);
                    }}
                    className={cn(
                      "relative aspect-[3/2] rounded-xl overflow-hidden border transition-all group p-0 text-left bg-[#1a1816] shadow-lg",
                      isSelected ? "border-[#eba96a] ring-4 ring-[#eba96a]/30 scale-[0.98]" : "border-[#2a2623] hover:border-[#eba96a]/50 hover:scale-[1.02]"
                    )}
                  >
                    <Thumbnail blobId={s.imageBlobId} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <p className="text-sm text-white font-bold truncate drop-shadow-md">{s.name}</p>
                    </div>
                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-[#eba96a] text-black rounded-full p-1 shadow-lg ring-4 ring-[#eba96a]/20">
                        <Check className="w-5 h-5 font-black" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            <div className="p-5 border-t border-[#2a2623] bg-[#1a1816]/50 flex justify-end shrink-0 gap-4">
              <button 
                onClick={() => setShowScenePicker(false)}
                className="px-10 py-3 rounded-xl font-bold text-sm bg-[#eba96a] text-[#141210] hover:bg-[#f3c192] transition-colors shadow-xl active:scale-[0.95]"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Extension Picker Modal */}
      {showExtensionPicker && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md" onClick={() => setShowExtensionPicker(false)}>
          <div 
            className="relative bg-[#1a1816] border border-[#2a2623] rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#2a2623] flex flex-col items-center bg-[#1a1816] relative">
              <button onClick={() => setShowExtensionPicker(false)} className="absolute right-6 top-6 p-2 text-[#888] hover:text-white hover:bg-[#2a2623] rounded-full transition-all">
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                擴充功能
              </h2>
              <div className="flex p-1 bg-[#131210] rounded-xl border border-[#2a2623] mt-4 w-[600px] max-w-[90vw]">
                {(['utilities', 'effects'] as const).map((tabId) => (
                  <button
                    key={tabId}
                    onClick={() => setExtensionTab(tabId)}
                    className={cn(
                      "flex-1 text-sm font-bold py-3 rounded-lg transition-all",
                      extensionTab === tabId ? "bg-[#eba96a] text-[#141210] shadow-lg" : "text-[#888] hover:text-[#e0e0e0] hover:bg-white/5"
                    )}
                  >
                    {tabId === 'utilities' ? '實用工具' : '特效'}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 bg-[#131210]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {(extensionTab === 'utilities' ? UTILITIES_EXTENSIONS : EFFECTS_EXTENSIONS).map(ext => {
                  const ExtIcon = ext.icon;
                  const isSelected = selectedExtension === ext.id;
                  const isComingSoon = (ext as any).status === 'coming_soon';
                  // Check if this scene already has this extension
                  const hasExtension = currentScene?.extensions?.some((e: any) => e.type === ext.id);
                  
                  return (
                    <button
                      key={ext.id}
                      disabled={hasExtension || isComingSoon}
                      onClick={() => setSelectedExtension(ext.id)}
                      className={cn(
                        "relative aspect-square rounded-xl border flex flex-col items-center justify-center gap-4 transition-all group overflow-hidden",
                        isSelected 
                          ? "border-[#eba96a] bg-[#eba96a]/10 ring-2 ring-[#eba96a]/50" 
                          : "border-[#2a2623] bg-[#1a1816] hover:border-[#eba96a]/50",
                        (hasExtension || isComingSoon) ? "opacity-30 grayscale cursor-not-allowed" : ""
                      )}
                    >
                      <ExtIcon className={cn(
                        "w-10 h-10 transition-colors",
                        isSelected ? "text-[#eba96a]" : "text-[#888] group-hover:text-[#e0e0e0]"
                      )} />
                      <span className={cn(
                        "text-sm font-bold text-center px-4 transition-colors",
                        isSelected ? "text-[#eba96a]" : "text-[#e0e0e0]"
                      )}>{ext.name}</span>
                      {hasExtension && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="bg-[#eba96a] text-black px-2 py-1 rounded text-[10px] font-black uppercase">已套用</div>
                        </div>
                      )}
                      {isComingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="bg-[#333] text-[#888] px-2 py-1 rounded text-[10px] font-black uppercase border border-white/10">未開放</div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="p-4 border-t border-[#2a2623] bg-[#1a1816] flex justify-end gap-3 shrink-0">
              <button 
                onClick={() => setShowExtensionPicker(false)}
                className="px-6 py-2.5 rounded-md font-bold text-sm text-[#888] hover:text-[#e0e0e0] hover:bg-[#2a2623] transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" /> 取消
              </button>
              <button 
                disabled={!selectedExtension}
                onClick={() => {
                  if (selectedExtension) {
                    if (selectedExtension === 'utilities-list' || selectedExtension === 'utilities-floorplan') {
                       updateProject(draft => {
                         const newExtId = uuidv4();
                         draft.scenes.forEach(sc => {
                           if (!sc.extensions) sc.extensions = [];
                           if (!sc.extensions.some((e: any) => e.type === selectedExtension)) {
                             sc.extensions.push({
                               id: newExtId,
                               type: selectedExtension,
                               config: selectedExtension === 'utilities-floorplan' 
                                 ? { enabled: true, floorplanBlobId: undefined }
                                 : { enabled: true, enableTabs: false, tabs: [] }
                             });
                           }
                         });
                       });
                    } else {
                       updateScene(s => {
                         if (!s.extensions) s.extensions = [];
                         if (!s.extensions.some((e: any) => e.type === selectedExtension)) {
                           const newExt: any = { id: uuidv4(), type: selectedExtension };
                           if (selectedExtension === 'utilities-floorplan') {
                             newExt.config = { enabled: true, floorplanBlobId: undefined };
                           }
                           s.extensions.push(newExt);
                         }
                       });
                    }
                    setShowExtensionPicker(false);
                    setSelectedExtension(null);
                  }
                }}
                className="px-6 py-2.5 rounded-md font-bold text-sm bg-[#eba96a] text-[#141210] hover:bg-[#d99a5e] transition-colors disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> 新增
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
