import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { getProject, getBlob, saveProject, saveBlob, Project } from './db';
import { v4 as uuidv4 } from 'uuid';

export const exportProjectToZip = async (project: Project) => {
  const zip = new JSZip();
  
  // Clone project so we don't modify the state object
  const projectData = JSON.parse(JSON.stringify(project));

  zip.file('project.json', JSON.stringify(projectData, null, 2));

  // Collect all blobs related to this project
  const imagesFolder = zip.folder('images');
  if (imagesFolder) {
    for (const scene of projectData.scenes) {
      if (scene.imageBlobId) {
        const blob = await getBlob(scene.imageBlobId);
        if (blob) {
          imagesFolder.file(`${scene.imageBlobId}.img`, blob);
        }
      }
    }
  }

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, `${project.name || 'project'}_backup.zip`);
};

export const importProjectFromZip = async (file: File): Promise<Project> => {
  const zip = await JSZip.loadAsync(file);
  
  const projectJsonStr = await zip.file('project.json')?.async('string');
  if (!projectJsonStr) throw new Error('ZIP 檔案內找不到 project.json');
  
  const projectData: Project = JSON.parse(projectJsonStr);
  
  // Regenerate project ID to avoid conflict if importing multiple times
  const newProjectId = uuidv4();
  projectData.id = newProjectId;
  projectData.createdAt = Date.now();
  projectData.updatedAt = Date.now();

  const blobsMap = new Map<string, string>(); // oldId -> newId

  if (zip.folder('images')) {
    const images = Object.keys(zip.files).filter(k => k.startsWith('images/') && !zip.files[k].dir);
    for (const imagePath of images) {
      const oldBlobId = imagePath.replace('images/', '').replace('.img', '');
      const blob = await zip.file(imagePath)?.async('blob');
      if (blob) {
        const newBlobId = uuidv4();
        await saveBlob(newBlobId, blob);
        blobsMap.set(oldBlobId, newBlobId);
      }
    }
  }

  // Update scene imageBlobIds
  for (const scene of projectData.scenes) {
    if (scene.imageBlobId && blobsMap.has(scene.imageBlobId)) {
      scene.imageBlobId = blobsMap.get(scene.imageBlobId)!;
    }
    // Also update targetSceneId for jump hotspots? They reference the same IDs relative to the project, so it's fine since we keep scene IDs.
    // However, if we want full isolation, we'd remap Scene IDs too. But since a Project forms a silo, we can leave Scene IDs as is, they are unlikely to collide across projects in a way that breaks IndexedDB (they are inside the project doc).
  }

  await saveProject(projectData);
  return projectData;
};
