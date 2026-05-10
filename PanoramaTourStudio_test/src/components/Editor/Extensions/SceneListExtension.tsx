import React, { useState, useEffect, useMemo } from 'react';
import { useStore } from '../../../store/useStore';
import { cn } from '../../../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Thumbnail } from '../../common/Thumbnail';

const DEFAULT_CONFIG = { enabled: true, enableTabs: false, tabs: [] };

export function SceneListExtension({ isHidden: isHiddenExternal }: { isHidden?: boolean }) {
  const currentProject = useStore(state => state.currentProject);
  const currentSceneId = useStore(state => state.currentSceneId);
  const setCurrentSceneId = useStore(state => state.setCurrentSceneId);
  const currentScene = useStore(state => state.currentProject?.scenes.find(s => s.id === state.currentSceneId));
  const extension = currentScene?.extensions?.find(e => e.type === 'utilities-list');
  
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  const config = extension?.config || DEFAULT_CONFIG;
  const scenes = useMemo(() => currentProject?.scenes.filter(s => !s.isHidden) || [], [currentProject?.scenes]);
  const mode = useStore(state => state.mode);
  const activeTool = useStore(state => state.activeTool);
  const isAnyModalOpen = useStore(state => state.isAnyModalOpen);
  
  const tabs = useMemo(() => 
    (config.enableTabs ? config.tabs : []).filter((tab: any) => tab.sceneIds && tab.sceneIds.length > 0),
    [config.enableTabs, config.tabs]
  );
  
  // Set default tab if needed
  useEffect(() => {
    if (config.enableTabs && !activeTabId && tabs.length > 0) {
      setActiveTabId(tabs[0].id);
    }
  }, [config.enableTabs, tabs, activeTabId]);

  if (!extension || config.enabled === false) return null;

  // Hide when drawing or adding hotspots or modal is open
  const isHidden = (mode === 'editor' && activeTool !== 'select') || isAnyModalOpen || isHiddenExternal;

  // If tabs enabled, filter scenes by active tab
  const filteredScenes = config.enableTabs && activeTabId 
    ? scenes.filter(s => {
        const tab = tabs.find((t: any) => t.id === activeTabId);
        return tab?.sceneIds?.includes(s.id);
      })
    : scenes;

  return (
    <div className={cn(
      "absolute inset-x-0 z-40 px-[6px] py-0 pointer-events-none",
      isHidden ? "opacity-0 invisible" : "opacity-100 visible",
      mode === 'preview' ? "bottom-2 md:bottom-3" : "bottom-14 md:bottom-24"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex flex-col gap-1 items-center justify-end transition-all",
        isHidden ? "pointer-events-none" : "pointer-events-auto"
      )}>
        {config.enableTabs && tabs.length > 0 && (
          <div className="flex items-center justify-center gap-1">
            <div className="flex bg-black/60 backdrop-blur-xl border border-white/10 p-1 rounded-xl shadow-2xl scale-90 md:scale-100">
              {tabs.map((tab: any) => (
                <button
                   key={tab.id}
                   type="button"
                   onClick={(e) => {
                     e.stopPropagation();
                     setActiveTabId(tab.id);
                   }}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap",
                    activeTabId === tab.id 
                      ? "bg-[#eba96a] text-black shadow-lg" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="relative group w-full px-[10px] py-0">
          <div 
            className="overflow-x-auto no-scrollbar scroll-smooth pt-3 cursor-grab active:cursor-grabbing hover:scroll-auto touch-pan-x"
            onPointerDown={(e) => {
              const el = e.currentTarget;
              el.dataset.isDown = 'true';
              el.dataset.startX = e.pageX.toString();
              el.dataset.scrollLeft = el.scrollLeft.toString();
              el.dataset.hasMoved = 'false';
              el.style.scrollBehavior = 'auto'; 
            }}
            onPointerUp={(e) => {
              const el = e.currentTarget;
              el.dataset.isDown = 'false';
              el.style.scrollBehavior = 'smooth';
              setTimeout(() => {
                if (el) el.dataset.hasMoved = 'false';
              }, 100);
            }}
            onPointerCancel={(e) => {
               const el = e.currentTarget;
               el.dataset.isDown = 'false';
               el.style.scrollBehavior = 'smooth';
            }}
            onPointerMove={(e) => {
              const el = e.currentTarget;
              if (el.dataset.isDown !== 'true') return;
              
              const startX = parseFloat(el.dataset.startX || '0');
              const walk = (e.pageX - startX);
              
              if (Math.abs(walk) > 10) {
                el.dataset.hasMoved = 'true';
                const scrollLeft = parseFloat(el.dataset.scrollLeft || '0');
                el.scrollLeft = scrollLeft - walk * 1.5;
              }
            }}
            onWheel={(e) => {
              const el = e.currentTarget;
              if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                el.scrollLeft += e.deltaY;
              }
            }}
          >
            <div className="flex items-center justify-start gap-3 px-4 pb-1 w-fit mx-auto">
              {filteredScenes.map(s => (
                <button
                  key={s.id}
                  type="button"
                  onClick={(e) => {
                    // Only switch scene if we didn't drag
                    const container = e.currentTarget.closest('.overflow-x-auto');
                    if (container instanceof HTMLElement && container.dataset.hasMoved === 'true') {
                      return;
                    }
                    setCurrentSceneId(s.id);
                  }}
                  className={cn(
                    "flex-shrink-0 relative w-36 aspect-[1.8/1] rounded-lg overflow-hidden border-2 transition-all group/item",
                    s.id === currentSceneId 
                      ? "border-[#eba96a] scale-105 shadow-[0_0_20px_rgba(235,169,106,0.3)] z-10" 
                      : "border-white/10 hover:border-[#eba96a]/50 scale-100"
                  )}
                >
                <div className="absolute inset-0">
                  <Thumbnail key={s.imageBlobId} blobId={s.imageBlobId} />
                </div>
                <div className={cn(
                  "absolute inset-0 transition-opacity",
                  s.id === currentSceneId ? "bg-[#eba96a]/10" : "bg-black/20 group-item-hover:bg-black/0"
                )} />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className={cn(
                    "text-xs font-bold truncate transition-colors",
                    s.id === currentSceneId ? "text-[#eba96a]" : "text-white"
                  )}>
                    {s.name}
                  </p>
                </div>
                {s.id === currentSceneId && (
                  <div className="absolute top-2 right-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#eba96a] animate-pulse shadow-[0_0_10px_#eba96a]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
