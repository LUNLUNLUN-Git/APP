import { useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';

export function BackgroundMusicExtension() {
  const { currentProject, blobUrls, loadBlobUrl, mode } = useStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSceneId = useStore(state => state.currentSceneId);
  const currentScene = currentProject?.scenes.find(s => s.id === currentSceneId);
  const musicExt = currentScene?.extensions?.find((e: any) => e.type === 'utilities-music');
  const config = musicExt?.config;
  const isEnabled = config?.enabled !== false;

  useEffect(() => {
    let active = true;

    // Only play in preview mode or if project is loaded
    if (!config?.audioBlobId || !isEnabled) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      return;
    }

    const initAudio = async () => {
      if (!active) return;
      const url = await loadBlobUrl(config.audioBlobId);
      if (!active) return;

      if (!audioRef.current) {
        audioRef.current = new Audio(url);
        audioRef.current.loop = true;
      } else {
        if (audioRef.current.src !== url) {
          audioRef.current.src = url;
        }
      }
      
      audioRef.current.volume = config.volume ?? 0.5;
      
      // Auto-play requirement: Enter formal preview
      if (mode === 'preview' && isEnabled) {
        audioRef.current.play().catch(err => {
          console.warn('Auto-play blocked by browser. User interaction required.', err);
          
          if (!active) return;
          // Add a one-time click listener to start audio
          const startAudio = () => {
             if (active) audioRef.current?.play();
             window.removeEventListener('click', startAudio);
          };
          window.addEventListener('click', startAudio);
        });
      } else {
        audioRef.current.pause();
      }
    };

    initAudio();

    return () => {
      active = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      // Speech cancel as well just in case
      window.speechSynthesis.cancel();
    };
  }, [config?.audioBlobId, config?.volume, mode, loadBlobUrl, isEnabled]);

  return null;
}
