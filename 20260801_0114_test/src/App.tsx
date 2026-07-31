import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Maximize, Minimize, ChevronDown, ChevronUp, Info, RefreshCw, QrCode, Bug, Box, Smartphone, X, Sliders, RotateCcw } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import './types'; // 引入自定義型別

export default function App() {
  const defaultModel = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  
  const [modelSrc, setModelSrc] = useState<string>(defaultModel);
  const [fileName, setFileName] = useState<string>('Astronaut.glb');
  const [fileSize, setFileSize] = useState<string>('2.5 MB');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [envLightIntensity, setEnvLightIntensity] = useState<number>(1.2);
  const [modelScale, setModelScale] = useState<number>(1);
  const [interactionMode, setInteractionMode] = useState<'interactive' | 'raytracing'>('interactive');
  const [isParamsOpen, setIsParamsOpen] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showInfoCard, setShowInfoCard] = useState<boolean>(false);
  
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [showQR, setShowQR] = useState<boolean>(false);
  const [showDebug, setShowDebug] = useState<boolean>(false);
  
  const [hasWebXR, setHasWebXR] = useState<boolean | null>(null);
  
  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setHasWebXR(supported);
      }).catch(() => setHasWebXR(false));
    } else {
      setHasWebXR(false);
    }
  }, []);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const arButtonRef = useRef<HTMLButtonElement>(null);
  const modelViewerRef = useRef<HTMLElement>(null);

  const triggerAR = () => {
    if (arButtonRef.current) {
      arButtonRef.current.click();
    } else if (modelViewerRef.current) {
      (modelViewerRef.current as any).activateAR?.();
    }
  };

  const handleFile = async (file: File) => {
    if (!file) return;
    
    const validExtensions = ['.glb', '.gltf', '.usdz'];
    const isSupported = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
    
    if (!isSupported) {
      alert('請上傳 .glb, .gltf 或 .usdz 格式的 3D 模型檔案');
      return;
    }

    setIsUploading(true);
    try {
      // Release old object URL if it was one
      if (modelSrc.startsWith('blob:')) {
        URL.revokeObjectURL(modelSrc);
      }

      const objectUrl = URL.createObjectURL(file);
      setModelSrc(objectUrl);
      setFileName(file.name);
      setFileSize((file.size / (1024 * 1024)).toFixed(1) + ' MB');
    } catch (error) {
      console.error(error);
      alert('模型載入失敗，請重試。');
    } finally {
      setIsUploading(false);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const resetToDefault = () => {
    setModelSrc(defaultModel);
    setFileName('Astronaut.glb');
    setFileSize('2.5 MB');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#050505] text-[#e5e5e5] font-sans overflow-hidden m-0 p-0">
      {/* 導覽列 */}
      <header className="h-14 lg:h-16 border-b border-[#1a1a1a] flex items-center justify-between px-4 lg:px-6 shrink-0">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-lg flex items-center justify-center font-bold text-white text-sm lg:text-base shadow-[0_2px_10px_rgba(99,102,241,0.3)]">
            W
          </div>
          <span className="text-[16px] lg:text-[18px] font-semibold tracking-tight text-white">
            WebAR測試空間 <span className="font-light opacity-50 text-xs lg:text-sm ml-1">v2.5.0</span>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <button 
            onClick={() => setShowQR(true)}
            className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333] hover:bg-[#222] hover:border-[#444] transition-colors flex items-center justify-center text-[#999] hover:text-white"
            title="掃描 QR Code 快速測試"
          >
            <QrCode className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setShowDebug(!showDebug)}
            className={`w-8 h-8 rounded-full border transition-colors flex items-center justify-center ${showDebug ? 'bg-[#6366f1]/20 border-[#6366f1] text-[#6366f1]' : 'bg-[#1a1a1a] border-[#333] text-[#999] hover:bg-[#222] hover:border-[#444] hover:text-white'}`}
            title="畫面除錯面板"
          >
            <Bug className="w-4 h-4" />
          </button>
          <div className="px-3 py-1.5 bg-[#111] border border-[#222] rounded-md text-xs items-center gap-2 hidden sm:flex ml-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            核心系統已就緒
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col-reverse lg:flex-row overflow-hidden min-h-0">
        {/* 控制面板 (Mobile: 底部, Desktop: 左側) */}
        <aside className={`w-full lg:w-[280px] border-t lg:border-t-0 lg:border-r border-[#1a1a1a] flex flex-col bg-[#080808] shrink-0 min-h-0 ${isFullscreen ? 'hidden lg:flex' : 'flex-1'}`}>
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col">
            <div className="p-4 lg:p-5 border-b border-[#1a1a1a]">
              <div className="text-[11px] uppercase tracking-[0.1em] text-[#666] mb-2 lg:mb-3 font-semibold">當前資產</div>
              <div className="p-2 lg:p-3 bg-[#121212] border border-[#222] rounded-lg flex items-center gap-3">
                <div className="hidden lg:flex w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded flex items-center justify-center shrink-0">
                  <Box className="w-5 h-5 text-[#555]" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[14px] font-medium text-white truncate" title={fileName}>{fileName}</div>
                  <div className="text-[11px] text-[#666] mt-0.5">{fileSize} • PBR Textures</div>
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-5 flex flex-col gap-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[#666] mb-3 lg:mb-4 font-semibold flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  裝置支援度檢測
                </div>
                <div className="flex flex-col gap-2.5 bg-[#121212] p-3 rounded-lg border border-[#1a1a1a]">
                  <div className="text-xs flex items-center gap-2">
                    {hasWebXR === true ? (
                      <><span className="text-green-500 font-bold">✓</span> <span className="text-green-400">WebXR Immersive AR (支援)</span></>
                    ) : hasWebXR === false ? (
                      <><span className="text-red-500 font-bold">✗</span> <span className="text-red-400/80">WebXR Immersive AR (不支援)</span></>
                    ) : (
                      <><span className="text-yellow-500 font-bold">⋯</span> <span className="text-yellow-400/80">檢測中...</span></>
                    )}
                  </div>
                  <div className="text-xs text-green-500/90 flex items-center gap-2">
                    <span className="font-bold">✓</span> iOS Quick Look (USDZ)
                  </div>
                  <div className="text-xs text-green-500/90 flex items-center gap-2">
                    <span className="font-bold">✓</span> Android Scene Viewer (GLB)
                  </div>
                </div>
              </div>

              <div>
                <div 
                  className="text-[11px] uppercase tracking-[0.1em] text-[#666] mb-3 lg:mb-4 font-semibold flex justify-between items-center cursor-pointer lg:cursor-default"
                  onClick={() => setIsParamsOpen(!isParamsOpen)}
                >
                  <div className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    顯示參數
                  </div>
                  <span className="lg:hidden">
                    {isParamsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </div>
                <div className={`${isParamsOpen ? 'flex' : 'hidden'} lg:flex flex-col gap-5 bg-[#121212] p-3 lg:p-4 rounded-lg border border-[#1a1a1a]`}>
                  <div className="flex justify-between items-center">
                  <span className="text-[12px] text-[#999]">自動旋轉</span>
                  <div 
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors z-10 ${autoRotate ? 'bg-[#6366f1]' : 'bg-[#333]'}`}
                  >
                    <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all pointer-events-none ${autoRotate ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] text-[#999]">環境光強度</span>
                      <button onClick={() => setEnvLightIntensity(1.2)} className="text-[#666] hover:text-[#999] active:scale-95 transition-all">
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-[11px] text-[#6366f1] font-mono bg-[#6366f1]/10 px-1.5 py-0.5 rounded">{envLightIntensity.toFixed(1)}x</span>
                  </div>
                  <div className="relative flex items-center h-4">
                    <div className="absolute inset-x-0 h-1 bg-[#1a1a1a] rounded-full overflow-hidden pointer-events-none">
                      <div className="h-full bg-[#6366f1]" style={{ width: `${(envLightIntensity / 3) * 100}%` }}></div>
                    </div>
                    <input 
                      type="range" min="0" max="3" step="0.1" 
                      value={envLightIntensity}
                      onChange={(e) => setEnvLightIntensity(parseFloat(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] text-[#999]">尺寸與比例覆寫</span>
                      <button onClick={() => setModelScale(1.0)} className="text-[#666] hover:text-[#999] active:scale-95 transition-all">
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-[11px] text-[#6366f1] font-mono bg-[#6366f1]/10 px-1.5 py-0.5 rounded">{modelScale.toFixed(2)}x</span>
                  </div>
                  <div className="relative flex items-center h-4">
                    <div className="absolute inset-x-0 h-1 bg-[#1a1a1a] rounded-full overflow-hidden pointer-events-none">
                      <div className="h-full bg-[#6366f1]" style={{ width: `${(modelScale / 3) * 100}%` }}></div>
                    </div>
                    <input 
                      type="range" min="0.1" max="3" step="0.1" 
                      value={modelScale}
                      onChange={(e) => setModelScale(parseFloat(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-5 border-t border-[#1a1a1a] flex flex-col gap-2.5 shrink-0 bg-[#080808] pb-6 lg:pb-5">
            <button 
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className={`w-full py-3 bg-white text-black border-none rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200 active:scale-[0.98]'}`}
            >
              <UploadCloud className="w-4 h-4" />
              <span>{isUploading ? '上傳中...' : '重新上傳模型'}</span>
            </button>
            {modelSrc !== defaultModel && (
              <button 
                onClick={resetToDefault}
                className="w-full py-3 bg-transparent text-[#999] border border-[#333] rounded-lg font-semibold text-sm cursor-pointer hover:text-white hover:border-[#666] transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>還原預設模型</span>
              </button>
            )}
            <button 
              onClick={triggerAR}
              className="w-full py-3 bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white border-none rounded-lg font-semibold text-sm cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(99,102,241,0.25)] mt-1"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8m-4-4v8"/></svg>
              在空間中查看 (AR)
            </button>
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept=".glb,.gltf,.usdz"
              onChange={onFileInputChange}
            />
          </div>
        </aside>

        {/* 右側：3D 預覽區 */}
        <section 
          className={`${isFullscreen ? 'fixed inset-0 z-50' : 'h-[35vh] lg:h-auto lg:flex-1 relative'} flex items-center justify-center bg-[radial-gradient(circle_at_center,#151515_0%,#050505_100%)] overflow-hidden shrink-0 lg:shrink`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging && (
            <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm border-2 border-dashed border-[#6366f1] m-4 rounded-2xl flex items-center justify-center flex-col pointer-events-none">
              <UploadCloud className="w-16 h-16 text-[#6366f1] mb-4" />
              <p className="text-white font-medium text-lg">放開以上傳模型</p>
            </div>
          )}

          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 hover:text-white transition-colors lg:hidden"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>

          <div className="absolute top-4 lg:top-6 left-4 lg:left-6 flex flex-col gap-2 z-50 max-w-[200px] sm:max-w-[230px]">
            {/* 模型數據圓形切換 ICON 按鈕 */}
            <button 
              onClick={() => setShowInfoCard(!showInfoCard)}
              className={`w-8 h-8 sm:w-9 sm:h-9 backdrop-blur-md border rounded-full flex items-center justify-center cursor-pointer transition-all shadow-lg active:scale-95 ${
                showInfoCard ? 'bg-[#6366f1] border-[#6366f1] text-white' : 'bg-black/60 border-white/10 text-white hover:bg-black/80 hover:border-[#6366f1]/50'
              }`}
              title={showInfoCard ? "隱藏模型數據" : "查看模型數據"}
            >
              <Info className="w-4 h-4" />
            </button>

            {/* 模型數據懸浮資訊卡 */}
            {showInfoCard && (
              <div className="p-2.5 sm:p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl text-xs text-white/90 shadow-xl flex flex-col gap-1.5 transition-all">
                <div className="pb-1.5 border-b border-white/10">
                  <span className="font-semibold text-white/90 flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <Info className="w-3.5 h-3.5 text-[#6366f1]" />
                    模型基礎數據
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] sm:text-[11px] text-white/70">
                  <span>多邊形面數:</span>
                  <span className="text-right text-white font-mono">{fileName === 'Astronaut.glb' ? '12.4k' : '自訂網格'}</span>
                  <span>材質數量:</span>
                  <span className="text-right text-white font-mono">{fileName === 'Astronaut.glb' ? '3 個 PBR' : '標準材質'}</span>
                  <span>貼圖格式:</span>
                  <span className="text-right text-white font-mono">PBR 2K</span>
                  <span>檔案大小:</span>
                  <span className="text-right text-white font-mono">{fileSize}</span>
                </div>
              </div>
            )}
          </div>

          <div className="w-full h-full relative group flex items-center justify-center">
            {/* @ts-ignore: React 18 / custom elements types */}
            <model-viewer
              ref={modelViewerRef}
              src={modelSrc}
              ar
              ar-modes="scene-viewer quick-look webxr"
              camera-controls
              autoplay
              exposure={envLightIntensity}
              scale={`${modelScale} ${modelScale} ${modelScale}`}
              shadow-intensity="1"
              {...(autoRotate ? { 'auto-rotate': true } : {})}
              environment-image="neutral"
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
            >
              {/* Slotted AR Button trigger */}
              <button 
                ref={arButtonRef}
                slot="ar-button" 
                className="hidden"
              />
            </model-viewer>
            
            <div className="absolute bottom-2 lg:bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-[12px] text-[#666] whitespace-nowrap pointer-events-none text-center px-4 hidden lg:block">
              點擊後將啟動系統 AR 模式
            </div>

            {/* Debug Overlay */}
            {showDebug && (
              <div className="absolute bottom-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-[#333] rounded-xl text-xs text-green-400 font-mono shadow-2xl z-50 min-w-[250px] max-w-[300px]">
                <div className="flex justify-between items-center mb-2 border-b border-[#333] pb-2">
                  <span className="font-bold flex items-center gap-2 text-white"><Bug className="w-3.5 h-3.5" /> 系統狀態</span>
                  <button onClick={() => setShowDebug(false)} className="text-[#666] hover:text-white"><X className="w-3.5 h-3.5" /></button>
                </div>
                <div className="flex flex-col gap-1.5 opacity-90 mt-2">
                  <div className="flex justify-between"><span className="text-[#666]">算繪引擎:</span> <span className="text-[#e5e5e5]">Google model-viewer</span></div>
                  <div className="flex justify-between"><span className="text-[#666]">AR 支援度:</span> <span className="text-[#e5e5e5]">{hasWebXR ? 'WebXR' : 'Fallback'}</span></div>
                  <div className="flex flex-col"><span className="text-[#666]">當前檔案:</span> <span className="text-[#e5e5e5] truncate mt-0.5">{fileName}</span></div>
                  <div className="flex justify-between"><span className="text-[#666]">模型縮放比例:</span> <span className="text-[#e5e5e5]">{modelScale.toFixed(2)}x</span></div>
                  <div className="flex justify-between"><span className="text-[#666]">自動旋轉:</span> <span className="text-[#e5e5e5]">{autoRotate ? '開啟' : '關閉'}</span></div>
                  <div className="flex justify-between"><span className="text-[#666]">算繪模式:</span> <span className="text-[#e5e5e5]">{interactionMode === 'interactive' ? '互動模式' : '光線追蹤'}</span></div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowQR(false)}>
          <div className="bg-[#111] border border-[#222] p-8 rounded-2xl flex flex-col items-center gap-6 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center w-full">
              <div className="font-semibold text-lg flex items-center gap-2 text-white"><QrCode className="w-5 h-5 text-[#6366f1]" /> 行動裝置測試</div>
              <button onClick={() => setShowQR(false)} className="p-1.5 bg-[#222] hover:bg-[#333] rounded-full transition-colors text-[#999] hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <QRCodeCanvas 
                value={typeof window !== 'undefined' ? window.location.href : 'https://example.com'}
                size={220}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"H"}
              />
            </div>
            <p className="text-sm text-center text-[#888] leading-relaxed">
              請使用支援 AR 功能的手機掃描此 QR Code，以在真實環境中測試 3D 模型。
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="hidden lg:flex h-10 bg-black border-t border-[#1a1a1a] items-center justify-center text-[10px] sm:text-[11px] text-[#444] tracking-widest shrink-0 uppercase px-4 text-center font-mono">
        CROSS-PLATFORM SPATIAL ENGINE • SUPPORTING IOS 12+ & ANDROID ARCORE
      </footer>
    </div>
  );
}
