import { useState, useRef, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { v4 as uuidv4 } from 'uuid';
import { Project, saveProject, deleteProject } from '../lib/db';
import { exportProjectToZip, importProjectFromZip } from '../lib/exportImport';
import { Plus, Download, Upload, Loader2, Image as ImageIcon, Pencil, Trash2, X, Maximize2 } from 'lucide-react';
import { cn, toggleFullScreen } from '../lib/utils';

// Helper to render Thumbnail
const ProjectThumbnail = ({ project }: { project: Project }) => {
  const { blobUrls, loadBlobUrl } = useStore();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const fetchBlob = async () => {
      const scene = project.scenes[0];
      if (scene && scene.imageBlobId) {
        if (blobUrls[scene.imageBlobId]) {
          if (active) setUrl(blobUrls[scene.imageBlobId]);
        } else {
          const loadedUrl = await loadBlobUrl(scene.imageBlobId);
          if (active) setUrl(loadedUrl);
        }
      }
    };
    fetchBlob();
    return () => { active = false; };
  }, [project, blobUrls, loadBlobUrl]);

  return url ? (
    <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${url})` }} />
  ) : (
    <div className="h-40 w-full bg-[#1e1c1a] flex items-center justify-center border-b border-[#2a2623]">
      <ImageIcon className="w-8 h-8 text-[#333] opacity-50" />
      <span className="absolute text-[#333] text-xs font-bold tracking-[0.2em] uppercase">PANORAMA · 尚無圖像</span>
    </div>
  );
};

export default function Dashboard() {
  const { projects, setProjects, setCurrentProject, setMode } = useStore();
  const [importing, setImporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [projectToRename, setProjectToRename] = useState<Project | null>(null);
  const [renameInput, setRenameInput] = useState("");

  const [exportingHtmlId, setExportingHtmlId] = useState<string | null>(null);

  const handleCreateProject = () => {
    const newProj: Project = {
      id: uuidv4(),
      name: '未命名專案',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      scenes: [],
      initialSceneId: null,
    };
    
    setCurrentProject(newProj);
    setMode('editor');
  };

  const handleOpenProject = (project: Project) => {
    setCurrentProject(project);
    setMode('editor');
  };

  const handleDeleteProject = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    const { showConfirm, dontShowConfirmAgainSession } = useStore.getState();
    const doDelete = async () => {
      try {
        await deleteProject(project.id);
        setProjects(projects.filter(p => p.id !== project.id));
      } catch (err: any) {
        useStore.getState().showConfirm({
          title: '錯誤',
          message: '刪除失敗: ' + err.message,
          type: 'alert'
        });
      }
    };

    if (dontShowConfirmAgainSession) {
      doDelete();
    } else {
      showConfirm({
        title: '刪除專案',
        message: `確定要刪除專案「${project.name}」嗎？\n此動作無法還原。`,
        confirmText: '確認刪除',
        type: 'danger',
        onConfirm: doDelete
      });
    }
  };

  const handleConfirmDeleteAll = () => {
    const { showConfirm } = useStore.getState();
    showConfirm({
      title: '刪除全部專案',
      message: '確定要刪除全部專案嗎？\n這將清空您的所有工作進度，且此動作無法還原。',
      confirmText: '確認刪除所有專案',
      type: 'danger',
      hideDontShowAgain: true,
      onConfirm: async () => {
        try {
          await Promise.all(projects.map(p => deleteProject(p.id)));
          setProjects([]);
        } catch (err: any) {
          useStore.getState().showConfirm({
            title: '錯誤',
            message: '刪除失敗: ' + err.message,
            type: 'alert'
          });
        }
      }
    });
  };

  const confirmRename = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!projectToRename || !renameInput.trim()) return;
    const updated = { ...projectToRename, name: renameInput.trim(), updatedAt: Date.now() };
    try {
      await saveProject(updated);
      setProjects(projects.map(p => p.id === projectToRename.id ? updated : p));
    } catch (err: any) {
      useStore.getState().showConfirm({
        title: '錯誤',
        message: '重新命名失敗: ' + err.message,
        type: 'alert'
      });
    } finally {
      setProjectToRename(null);
    }
  };

  const handleExport = async (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await exportProjectToZip(project);
    } catch (err: any) {
      useStore.getState().showConfirm({
        title: '錯誤',
        message: '匯出失敗: ' + err.message,
        type: 'alert'
      });
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setImporting(true);
      const newProj = await importProjectFromZip(file);
      setProjects([newProj, ...projects]);
    } catch (err: any) {
      useStore.getState().showConfirm({
        title: '錯誤',
        message: '匯入失敗: ' + err.message,
        type: 'alert'
      });
    } finally {
      setImporting(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };


  return (
    <div className="max-w-6xl mx-auto p-8 pt-12 w-full">
      <header className="mb-12 flex justify-between items-center pb-8 border-b border-[#2a2623]">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex w-10 h-10 bg-[#eba96a] text-black font-bold items-center justify-center rounded-lg text-lg shrink-0">
            PT
          </div>
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-xl font-bold tracking-wide text-[#f0f0f0] truncate">智慧全景導覽系統</h1>
            <span className="text-[#888] text-xs font-medium tracking-wide truncate hidden sm:block">Panorama Tour Studio · 在瀏覽器中建立你的全景互動導覽</span>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4">
           <input type="file" accept=".zip" className="hidden" ref={fileInputRef} onChange={handleImport} />
           <button 
             onClick={toggleFullScreen}
             className="w-10 h-10 px-0 bg-[#1a1816] hover:bg-[#221f1c] text-white text-sm font-medium rounded-lg border border-[#2a2623] transition-colors flex items-center justify-center shadow-sm cursor-pointer"
             title="全螢幕"
           >
             <Maximize2 className="w-4 h-4" />
           </button>
           <button 
             onClick={() => fileInputRef.current?.click()}
             disabled={importing}
             className="w-10 h-10 sm:w-auto px-0 sm:px-5 py-2.5 bg-[#1a1816] hover:bg-[#221f1c] text-white text-sm font-medium rounded-lg border border-[#2a2623] transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
             title="匯入專案"
           >
             {importing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
             <span className="hidden sm:inline">{importing ? '匯入中...' : '匯入專案'}</span>
           </button>
           <button 
             onClick={handleCreateProject}
             className="w-10 h-10 sm:w-auto px-0 sm:px-5 py-2.5 bg-[#eba96a] hover:bg-[#d99a5e] text-[#141210] text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
             title="新增專案"
           >
             <Plus className="w-4 h-4" />
             <span className="hidden sm:inline">新增專案</span>
           </button>
        </div>
      </header>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-baseline gap-4">
          <h2 className="text-[#888] text-sm font-bold tracking-widest">我的專案</h2>
          <span className="text-[#555] text-sm font-bold">{projects.length} 個</span>
        </div>
        {projects.length > 0 && (
          <button 
            onClick={handleConfirmDeleteAll}
            className="p-2 text-[#555] hover:text-red-400 hover:bg-red-500/5 transition-all rounded-md flex items-center gap-2 cursor-pointer group"
            title="刪除全部"
          >
            <span className="text-[10px] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">刪除全部</span>
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div 
          className="bg-transparent border border-[#2a2623] border-dashed rounded-xl p-6 flex flex-col justify-center items-center h-[150px] md:h-[300px] hover:bg-[#1a1816] transition flex-shrink-0 cursor-pointer group"
          onClick={() => {
            handleCreateProject();
          }}
        >
           <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a1816] border border-[#2a2623] flex items-center justify-center mb-4 md:mb-6 group-hover:border-[#eba96a]/50 transition-colors">
              <Plus className="w-6 h-6 md:w-8 md:h-8 text-[#555] group-hover:text-[#eba96a] transition-colors" />
           </div>
           <p className="text-[#888] font-bold group-hover:text-[#e0e0e0] transition-colors text-sm md:text-base">建立新專案</p>
           <p className="text-[#555] text-xs hidden md:block">從零開始打造導覽</p>
        </div>

        {[...projects].sort((a, b) => b.createdAt - a.createdAt).map((proj) => (
          <div 
            key={proj.id} 
            className="group relative rounded-xl overflow-hidden cursor-pointer border border-[#2a2623] bg-[#1a1816] hover:border-[#eba96a]/50 h-[300px] flex flex-col transition"
            onClick={() => {
              handleOpenProject(proj);
            }}
          >
            <ProjectThumbnail project={proj} />
            
            <div className="flex-1 p-5 flex flex-col relative w-full h-[140px]">
              <div className="flex items-center gap-2 mb-2 group/title">
                <h3 className="text-lg font-bold text-[#f0f0f0] truncate" title={proj.name}>{proj.name}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setProjectToRename(proj);
                    setRenameInput(proj.name);
                  }}
                  className="opacity-0 group-hover/title:opacity-100 p-1 text-[#888] hover:text-[#eba96a] transition-opacity cursor-pointer"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#888]">
                <span>{proj.scenes.length} 場景</span>
                <span>·</span>
                <span>{new Date(proj.createdAt).toLocaleDateString()}</span>
              </div>
              
              <div className="mt-auto flex items-center gap-4 text-sm font-medium text-[#888] pt-4">
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    const cloned = JSON.parse(JSON.stringify(proj));
                    cloned.id = crypto.randomUUID();
                    cloned.name = cloned.name + ' - 複製';
                    cloned.createdAt = Date.now();
                    cloned.updatedAt = Date.now();
                    import('../lib/db').then(({ saveProject }) => {
                       saveProject(cloned).then(() => {
                         setProjects([cloned, ...projects]);
                       });
                    });
                  }}
                  className="hover:text-white cursor-pointer"
                >複製</button>
                <button 
                  onClick={(e) => handleExport(proj, e)}
                  className="hover:text-white cursor-pointer"
                >匯出專案</button>
                <button 
                  onClick={async (e) => {
                    e.stopPropagation();
                    if (exportingHtmlId) return;
                    setExportingHtmlId(proj.id);
                    try {
                      const { exportProjectToHtml } = await import('../lib/exportHtml');
                      await exportProjectToHtml(proj);
                    } catch (err: any) {
                      useStore.getState().showConfirm({
                        title: '錯誤',
                        message: '匯出 HTML 失敗: ' + err.message,
                        type: 'alert'
                      });
                    } finally {
                      setExportingHtmlId(null);
                    }
                  }}
                  disabled={exportingHtmlId === proj.id}
                  className="hover:text-white cursor-pointer flex items-center gap-1 disabled:opacity-50"
                >
                  匯出網頁 {exportingHtmlId === proj.id && <Loader2 className="w-3 h-3 animate-spin" />}
                </button>
                
                <button 
                  onClick={(e) => handleDeleteProject(proj, e)}
                  className="ml-auto text-[#888] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1"
                  title="刪除專案"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rename Modal */}
      {projectToRename && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setProjectToRename(null)}>
          <div className="bg-[#1a1816] border border-[#2a2623] rounded-xl p-6 w-full max-w-md shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-white mb-4">重新命名專案</h3>
            <form onSubmit={confirmRename} className="flex flex-col gap-6">
              <input 
                type="text" 
                value={renameInput} 
                onChange={(e) => setRenameInput(e.target.value)} 
                className="w-full bg-[#0f1116] border border-[#2a2623] rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-[#eba96a]"
                autoFocus
              />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setProjectToRename(null)} className="px-4 py-2 text-sm font-medium text-[#888] hover:text-white transition-colors bg-transparent border border-[#2a2623] rounded-lg cursor-pointer">取消</button>
                <button type="submit" disabled={!renameInput.trim()} className="px-4 py-2 text-sm font-bold text-[#141210] bg-[#eba96a] hover:bg-[#d99a5e] disabled:opacity-50 transition-colors rounded-lg cursor-pointer">儲存</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Error Prompt handled by global ConfirmModal */}
    </div>
  );
}
