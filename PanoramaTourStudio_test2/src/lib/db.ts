import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface PanoramaDB extends DBSchema {
  projects: {
    key: string;
    value: Project;
  };
  blobs: {
    key: string;
    value: { id: string; blob: Blob };
  };
}

export type HotspotType = 'info' | 'quiz' | 'jump' | 'freeform' | 'text' | 'image' | 'video' | 'link';

export interface Hotspot {
  id: string;
  yaw: number;
  pitch: number;
  title?: string;
  content?: string;
  type: HotspotType;
  quiz?: {
    question: string;
    options: string[];
    answerIndex: number;
  };
  targetSceneId?: string;
  customIconBlobId?: string;
  youtubeUrl?: string;
  linkUrl?: string;
  linkNewTab?: boolean;
  customText?: string;
  isDraft?: boolean;
  isHidden?: boolean;
  imageScale?: number;
  imageRotation?: number;
  imageFlipX?: boolean;
  imageFlipY?: boolean;
  voiceEnabled?: boolean;
}

export interface SceneExtension {
  id: string;
  type: string;
  config?: any;
}

export interface DrawingStroke {
  id: string;
  points: { yaw: number; pitch: number }[];
  color: string;
  width: number;
  type: 'freehand' | 'line';
}

export interface Scene {
  id: string;
  name: string;
  description?: string;
  imageBlobId: string;
  hotspots: Hotspot[];
  extensions?: SceneExtension[];
  initialView: { yaw: number; pitch: number; fov: number };
  fovLimits?: { min: number; max: number };
  fovMode?: 'standard' | 'little-planet';
  isHidden?: boolean;
  autoRotate?: {
    enabled: boolean;
    direction: 'right' | 'left';
    speed: number;
    idleTime: number;
  };
  autoCarousel?: {
    enabled: boolean;
    idleTime: number;
  };
  drawings?: DrawingStroke[];
  bottomLogo?: {
    enabled: boolean;
    size?: number; // legacy size
    opacity?: number;
    type?: 'color' | 'image' | 'ai';
    
    color?: string; // used for type='color'
    colorSize?: number;

    imageBlobId?: string; // used for type='image'
    imageSize?: number;
    imageRotation?: number;
    imageFlipH?: boolean;
    imageFlipV?: boolean;

    aiBlobId?: string; // used for type='ai'
    aiSize?: number;
    aiPrompt?: string; // used for type='ai'
  };
}

export interface Project {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  scenes: Scene[];
  initialSceneId: string | null;
  extensions?: SceneExtension[];
}

let dbPromise: Promise<IDBPDatabase<PanoramaDB>>;

if (typeof window !== 'undefined') {
  dbPromise = openDB<PanoramaDB>('PanoramaTourDB', 1, {
    upgrade(db) {
      db.createObjectStore('projects', { keyPath: 'id' });
      db.createObjectStore('blobs', { keyPath: 'id' });
    },
  });
}

export const dbInit = async () => dbPromise;

export const saveProject = async (project: Project) => {
  const db = await dbPromise;
  await db.put('projects', project);
};

export const getProject = async (id: string) => {
  const db = await dbPromise;
  return db.get('projects', id);
};

export const getAllProjects = async () => {
  const db = await dbPromise;
  return db.getAll('projects');
};

export const deleteProject = async (id: string) => {
  const db = await dbPromise;
  
  // First, find all blob IDs used by the project's scenes
  const project = await db.get('projects', id);
  if (project) {
    const blobIds = [
      ...project.scenes.map(s => s.imageBlobId),
      ...project.scenes.flatMap(s => s.hotspots.map(h => h.customIconBlobId))
    ].filter(Boolean);
    
    // Delete all associated blobs from IDB
    if (blobIds.length > 0) {
      const tx = db.transaction('blobs', 'readwrite');
      await Promise.all(blobIds.map(blobId => tx.store.delete(blobId!)));
      await tx.done;
    }
  }
  
  await db.delete('projects', id);
};

export const saveBlob = async (id: string, blob: Blob) => {
  const db = await dbPromise;
  await db.put('blobs', { id, blob });
};

export const getBlob = async (id: string) => {
  const db = await dbPromise;
  const result = await db.get('blobs', id);
  return result?.blob;
};

export const deleteBlob = async (id: string) => {
  const db = await dbPromise;
  await db.delete('blobs', id);
};
