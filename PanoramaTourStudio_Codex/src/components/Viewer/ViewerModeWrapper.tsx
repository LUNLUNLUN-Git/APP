import { useState, useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';
import PanoramaViewer from '../Editor/PanoramaViewer';
import { SceneListExtension } from '../Editor/Extensions/SceneListExtension';
import { BackgroundMusicExtension } from '../common/BackgroundMusicExtension';
import { ChevronLeft, X, Volume2, Loader2, Play, Maximize2 } from 'lucide-react';
import { Hotspot } from '../../lib/db';
import { cn, toggleFullScreen } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function ViewerModeWrapper() {
  const { currentProject, setMode, currentSceneId, setCurrentSceneId } = useStore();
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [quizState, setQuizState] = useState<{answered: boolean, correct: boolean}>({ answered: false, correct: false });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionSceneId, setTransitionSceneId] = useState(currentSceneId);
  
  useEffect(() => {
    if (currentSceneId !== transitionSceneId) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setTransitionSceneId(currentSceneId);
        setIsTransitioning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentSceneId, transitionSceneId]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  if (!currentProject) {
    return <div>未載入專案</div>;
  }

  const handleExitHotspot = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setActiveHotspot(null);
  };

  const handlePlayVoice = () => {
    if (!activeHotspot) return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    let textToRead = "";
    
    if (activeHotspot.title) textToRead += `${activeHotspot.title}。`;
    if (activeHotspot.content || activeHotspot.customText) {
      textToRead += `${activeHotspot.content || activeHotspot.customText}。`;
    }
    
    if (activeHotspot.type === 'quiz' && activeHotspot.quiz) {
      textToRead += `${activeHotspot.quiz.question}。`;
      activeHotspot.quiz.options.forEach((opt, i) => {
        textToRead += `選項${['A', 'B', 'C'][i]}：${opt}。`;
      });
    }
      
    if (textToRead) {
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'zh-TW';
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    if (hotspot.type === 'jump' && hotspot.targetSceneId) {
      const targetScene = currentProject.scenes.find(s => s.id === hotspot.targetSceneId);
      if (targetScene && !targetScene.isHidden) {
        setCurrentSceneId(hotspot.targetSceneId);
        setActiveHotspot(null);
      } else if (targetScene?.isHidden) {
        // Do nothing if the target scene is hidden, as requested.
        console.warn('Target scene is hidden from preview.');
      }
    } else if (hotspot.type === 'link' && hotspot.linkUrl) {
      if (hotspot.linkNewTab) {
        window.open(hotspot.linkUrl, '_blank');
      } else {
        window.location.href = hotspot.linkUrl;
      }
    } else {
      setActiveHotspot(hotspot);
      setQuizState({ answered: false, correct: false });
    }
  };

  const visibleScenes = currentProject.scenes.filter(s => !s.isHidden);
  const currentScene = currentProject.scenes.find(s => s.id === currentSceneId);

  return (
    <div className="flex h-screen bg-[#050505] flex-col relative overflow-hidden">
      {/* Viewer Header */}
      <header className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-20 pointer-events-none">
         <div className="flex items-center space-x-4 pointer-events-auto">
          <div className="flex items-center text-sm font-medium tracking-wide">
            <span className="text-[#e0e0e0] font-bold">{currentProject.name}</span>
          </div>
        </div>
        
        <div className="absolute right-6 top-4 pointer-events-auto flex gap-2 sm:gap-4">
          {!window.location.search.includes('standalone=true') && !(window as any).__IS_STANDALONE__ && (
            <button 
              onClick={() => setMode('editor')}
              className="w-10 h-10 sm:w-auto px-0 sm:px-5 py-2.5 bg-[#eba96a] hover:bg-[#d99a5e] text-[#141210] transition flex items-center justify-center gap-2 text-sm font-bold shadow-lg cursor-pointer rounded-lg"
              title="退出預覽"
            >
              <ChevronLeft className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">退出預覽</span>
            </button>
          )}
        </div>
      </header>
      
      {/* Main View */}
      <div className="flex-1 relative bg-black overflow-hidden">
        <PanoramaViewer mode="preview" onHotspotClick={handleHotspotClick} />
        <SceneListExtension />
        <BackgroundMusicExtension />
      </div>

      {/* Hotspot Popup */}
      {activeHotspot && (
        <div className="absolute inset-0 z-[200] flex items-center justify-center p-4 bg-[#050505]/60 backdrop-blur-sm pointer-events-auto hotspot-popup-active" onClick={(e) => {
          if (e.target === e.currentTarget) handleExitHotspot();
        }}>
        <div className="bg-[#131210] border border-[#2a2623] rounded-lg p-6 w-full max-w-md shadow-2xl relative shadow-black/80">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {activeHotspot.voiceEnabled && (
              <button 
                onClick={(e) => { e.stopPropagation(); handlePlayVoice(); }}
                className={cn(
                  "p-2 rounded-full transition-all shrink-0",
                  isSpeaking ? "bg-[#eba96a] text-[#141210] animate-pulse" : "bg-[#1a1816] text-[#888] hover:text-[#eba96a] hover:bg-[#221f1c] border border-[#2a2623]"
                )}
              >
                <Volume2 className={cn("w-4 h-4", isSpeaking && "fill-current")} />
              </button>
            )}
            <button 
              className="text-gray-500 hover:text-white transition p-1.5"
              onClick={handleExitHotspot}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {(activeHotspot.title || activeHotspot.content || activeHotspot.customText) && (
            <div className="mb-6 pr-12">
              <div className="flex items-start justify-between gap-4 mb-2">
                {activeHotspot.title && <h3 className="text-base font-bold text-[#e0e0e0] tracking-wide">{activeHotspot.title}</h3>}
              </div>
              {(activeHotspot.content || activeHotspot.customText) && <p className="text-[#888] text-sm leading-relaxed whitespace-pre-wrap">{activeHotspot.content || activeHotspot.customText}</p>}
            </div>
          )}
            
            {activeHotspot.type === 'video' && activeHotspot.youtubeUrl && (
              <div className="mb-4 aspect-video bg-black rounded-lg overflow-hidden border border-[#2a2623]">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${activeHotspot.youtubeUrl.split('v=')[1]?.split('&')[0] || activeHotspot.youtubeUrl.split('/').pop()}`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            {activeHotspot.type === 'quiz' && activeHotspot.quiz && (
              <div className="bg-[#1c1f26] p-4 rounded border border-[#2a2623]">
                <h4 className="text-[#e0e0e0] text-sm font-semibold mb-4">{activeHotspot.quiz.question}</h4>
                <div className="space-y-2">
                  {activeHotspot.quiz.options.map((option, idx) => {
                    const isCorrect = idx === activeHotspot.quiz?.answerIndex;
                    let btnClass = "w-full text-left px-4 py-3 rounded text-xs transition border ";
                    
                    if (!quizState.answered) {
                      btnClass += "bg-[#0f1116] border-[#2a2623] hover:border-[#eba96a] text-gray-300";
                    } else {
                      if (isCorrect) {
                        btnClass += "bg-emerald-900/30 border-emerald-500/50 text-emerald-400";
                      } else {
                        btnClass += "bg-[#0f1116] border-[#2a2623] text-gray-600 opacity-50";
                      }
                    }
                    
                    return (
                      <button 
                        key={idx}
                        disabled={quizState.answered}
                        onClick={() => {
                          setQuizState({ answered: true, correct: isCorrect });
                        }}
                        className={btnClass}
                      >
                         <span className="inline-block w-5 text-center font-mono opacity-50 mr-2">{['A','B','C'][idx]}</span>
                         {option}
                      </button>
                    )
                  })}
                </div>
                {quizState.answered && (
                  <div className={"mt-4 p-3 rounded text-xs text-center font-bold tracking-wider " + (quizState.correct ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400")}>
                    {quizState.correct ? '答對了！' : '答錯了，請再試一次。'}
                  </div>
                )}
              </div>
            )}
            
          </div>
        </div>
      )}

    </div>
  );
}
