import { create } from 'zustand';
import { Project, Scene, Hotspot, saveProject, getBlob, saveBlob } from '../lib/db';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_PANORAMA_PROMPT } from '../services/ai';

export type AppMode = 'dashboard' | 'editor' | 'preview';
export type ToolType = 'select' | 'freeform' | 'text' | 'image' | 'video' | 'info' | 'quiz' | 'jump' | 'brush' | 'eraser' | 'avatar';

interface AppState {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  
  activeTool: ToolType;
  setActiveTool: (tool: ToolType) => void;

  brushSettings: {
    color: string;
    width: number;
    type: 'freehand' | 'line';
  };
  setBrushSettings: (settings: Partial<AppState['brushSettings']>) => void;
  
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
  updateCurrentProject: (updater: (draft: Project) => Project) => void;
  
  currentSceneId: string | null;
  setCurrentSceneId: (id: string | null) => void;
  selectedSceneIds: string[];
  setSelectedSceneIds: (ids: string[]) => void;
  toggleSceneSelection: (id: string) => void;
  
  showFloorplanEditor: boolean;
  setShowFloorplanEditor: (show: boolean) => void;
  
  selectedHotspotIds: string[];
  setSelectedHotspotIds: (ids: string[]) => void;
  toggleHotspotSelection: (id: string) => void;
  
  dragHotspotId: string | null;
  setDragHotspotId: (id: string | null) => void;
  
  currentView: { yaw: number; pitch: number; fov: number };
  setCurrentView: (view: { yaw: number; pitch: number; fov: number }) => void;
  
  // History for undo/redo
  history: string[]; // Serialized projects
  future: string[];
  undo: () => void;
  redo: () => void;
  pushHistory: () => void;

  // Object URLs cached for blobs to show in the UI, mapping blobId -> string
  blobUrls: Record<string, string>;
  loadBlobUrl: (blobId: string) => Promise<string>;
  
  // Helpers
  addSceneToProject: (files: File | File[]) => Promise<void>;

  aiPrompt: string;
  setAiPrompt: (prompt: string) => void;

  dontShowConfirmAgainSession: boolean;
  setDontShowConfirmAgainSession: (value: boolean) => void;

  updateExtensionConfig: (extType: string, config: any, overwrite?: boolean) => void;

  confirmState: { 
    isOpen: boolean; 
    title: string; 
    message: string; 
    onConfirm: () => void; 
    confirmText?: string;
    type?: 'danger' | 'info' | 'alert';
    hideDontShowAgain?: boolean;
  } | null;
  showConfirm: (options: { 
    title: string; 
    message: string; 
    onConfirm?: () => void; 
    confirmText?: string;
    type?: 'danger' | 'info' | 'alert';
    hideDontShowAgain?: boolean;
  }) => void;
  closeConfirm: () => void;

  isAnyModalOpen: boolean;
  setIsAnyModalOpen: (isOpen: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
  mode: 'dashboard',
  setMode: (mode) => set({ mode }),
  
  activeTool: 'select',
  setActiveTool: (activeTool) => set({ activeTool }),

  brushSettings: {
    color: '#eba96a',
    width: 5,
    type: 'freehand'
  },
  setBrushSettings: (settings) => set((state) => ({ 
    brushSettings: { ...state.brushSettings, ...settings } 
  })),
  
  projects: [],
  setProjects: (projects) => set({ projects }),
  
  currentProject: null,
  setCurrentProject: (project) => {
    const sceneId = project?.initialSceneId || (project?.scenes.length ? project.scenes[0].id : null);
    set({ 
      currentProject: project, 
      currentSceneId: sceneId,
      selectedSceneIds: sceneId ? [sceneId] : []
    });
  },
  
  updateCurrentProject: (updater) => {
    set((state) => {
      if (!state.currentProject) return state;
      const clonedProject = JSON.parse(JSON.stringify(state.currentProject));
      updater(clonedProject);
      clonedProject.updatedAt = Date.now();
      saveProject(clonedProject);
      const isNew = !state.projects.some(p => p.id === clonedProject.id);
      return { 
        currentProject: clonedProject, 
        projects: isNew 
          ? [clonedProject, ...state.projects] 
          : state.projects.map(p => p.id === clonedProject.id ? clonedProject : p) 
      };
    });
  },
  
  currentSceneId: null,
  setCurrentSceneId: (id) => set({ currentSceneId: id, selectedSceneIds: id ? [id] : [], selectedHotspotIds: [] }),
  selectedSceneIds: [],
  setSelectedSceneIds: (ids) => set({ selectedSceneIds: ids }),
  toggleSceneSelection: (id) => set((state) => {
    const isSelected = state.selectedSceneIds.includes(id);
    return {
      selectedSceneIds: isSelected 
        ? state.selectedSceneIds.filter(i => i !== id)
        : [...state.selectedSceneIds, id]
    };
  }),
  
  showFloorplanEditor: false,
  setShowFloorplanEditor: (show) => set({ showFloorplanEditor: show }),
  
  selectedHotspotIds: [],
  setSelectedHotspotIds: (ids: string[]) => set({ selectedHotspotIds: ids }),
  toggleHotspotSelection: (id: string) => set((state) => {
    const isSelected = state.selectedHotspotIds.includes(id);
    return {
      selectedHotspotIds: isSelected 
        ? state.selectedHotspotIds.filter(i => i !== id)
        : [...state.selectedHotspotIds, id]
    };
  }),
  
  dragHotspotId: null,
  setDragHotspotId: (id) => set({ dragHotspotId: id }),
  
  currentView: { yaw: 0, pitch: 0, fov: 75 },
  setCurrentView: (view) => set({ currentView: view }),
  
  aiPrompt: DEFAULT_PANORAMA_PROMPT,
  setAiPrompt: (prompt) => set({ aiPrompt: prompt }),

  dontShowConfirmAgainSession: false,
  setDontShowConfirmAgainSession: (value) => set({ dontShowConfirmAgainSession: value }),

  updateExtensionConfig: (extType, config, overwrite = false) => {
    const { currentSceneId } = get();
    if (!currentSceneId) return;

    get().updateCurrentProject(draft => {
      const scene = draft.scenes.find(s => s.id === currentSceneId);
      if (!scene) return draft;

      if (!scene.extensions) scene.extensions = [];
      let ext = scene.extensions.find(e => e.type === extType);
      if (!ext) {
        ext = { id: uuidv4(), type: extType, config: {} };
        scene.extensions.push(ext);
      }
      ext.config = overwrite ? { ...config } : { ...ext.config, ...config };
      return draft;
    });
  },

  confirmState: null,
  showConfirm: (options) => set({ 
    confirmState: { 
      onConfirm: () => {}, 
      ...options, 
      isOpen: true 
    } 
  }),
  closeConfirm: () => set({ confirmState: null }),

  isAnyModalOpen: false,
  setIsAnyModalOpen: (isOpen) => set({ isAnyModalOpen: isOpen }),

  history: [],
  future: [],

  pushHistory: () => {
    const { currentProject } = get();
    if (!currentProject) return;
    const projectStr = JSON.stringify(currentProject);
    set(state => {
      // Don't push if same as last history
      if (state.history.length > 0 && state.history[state.history.length - 1] === projectStr) return state;
      return {
        history: [...state.history, projectStr].slice(-50), // Limit history
        future: []
      };
    });
  },

  undo: () => {
    const { history, currentProject } = get();
    if (history.length === 0 || !currentProject) return;
    
    const prevStr = history[history.length - 1];
    const newHistory = history.slice(0, -1);
    const prevProject = JSON.parse(prevStr);
    
    set({
      currentProject: prevProject,
      history: newHistory,
      future: [JSON.stringify(currentProject), ...get().future].slice(0, 50)
    });
    saveProject(prevProject);
  },

  redo: () => {
    const { future, currentProject } = get();
    if (future.length === 0 || !currentProject) return;
    
    const nextStr = future[0];
    const newFuture = future.slice(1);
    const nextProject = JSON.parse(nextStr);
    
    set({
      currentProject: nextProject,
      future: newFuture,
      history: [...get().history, JSON.stringify(currentProject)].slice(-50)
    });
    saveProject(nextProject);
  },

  blobUrls: {},
  loadBlobUrl: async (blobId: string) => {
    const { blobUrls } = get();
    if (blobUrls[blobId]) return blobUrls[blobId];
    
    const blob = await getBlob(blobId);
    if (blob) {
      const url = URL.createObjectURL(blob);
      set((state) => ({ blobUrls: { ...state.blobUrls, [blobId]: url } }));
      return url;
    }
    return '';
  },
  
  addSceneToProject: async (files: File | File[]) => {
    const { currentProject } = get();
    if (!currentProject) return;
    
    const fileList = 'length' in files && !(files instanceof File) ? Array.from(files) : [files as File];
    const newScenes: Scene[] = [];
    
    for (const file of fileList) {
      const imageBlobId = uuidv4();
      await saveBlob(imageBlobId, file);
      
      const newScene: Scene = {
        id: uuidv4(),
        name: file.name.split('.')[0] || '未命名場景',
        imageBlobId,
        hotspots: [],
        initialView: { yaw: 0, pitch: 0, fov: 75 }
      };
      newScenes.push(newScene);
    }
    
    get().updateCurrentProject((draft) => {
      draft.scenes.push(...newScenes);
      if (!draft.initialSceneId && draft.scenes.length > 0) {
        draft.initialSceneId = draft.scenes[0].id;
      }
      return draft;
    });
    
    if (newScenes.length > 0) {
      set({ currentSceneId: newScenes[newScenes.length - 1].id });
    }
  }
}));
