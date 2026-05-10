import { useRef, useEffect, useState, useMemo, useImperativeHandle, forwardRef, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, useTexture, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useStore, ToolType } from '../../store/useStore';
import { Hotspot, Scene } from '../../lib/db';
import { v4 as uuidv4 } from 'uuid';
import { Type, Image as ImageIcon, Video, MousePointer2, FileText, HelpCircle, RotateCcw, CircleDot, ArrowUpRight, Pencil, Eraser, ExternalLink, X } from 'lucide-react';
import { Line } from '@react-three/drei';
import { cn } from '../../lib/utils';
import { Thumbnail } from '../common/Thumbnail';

function PlacedAvatar({ blobId, yaw, pitch, allowDrag, scale = 1, rotation = 0 }: { blobId: string, yaw: number, pitch: number, allowDrag?: boolean, scale?: number, rotation?: number }) {
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  
  useEffect(() => {
    let active = true;
    useStore.getState().loadBlobUrl(blobId).then(url => {
      if (active) setModelUrl(url);
    });
    return () => { active = false; };
  }, [blobId]);

  if (!modelUrl) return null;

  return <PlacedAvatarInner url={modelUrl} yaw={yaw} pitch={pitch} allowDrag={allowDrag} modelScale={scale} modelRotation={rotation} />;
}

function PlacedAvatarInner({ url, yaw, pitch, allowDrag, modelScale = 1, modelRotation = 0 }: { url: string, yaw: number, pitch: number, allowDrag?: boolean, modelScale?: number, modelRotation?: number }) {
  const { scene } = useGLTF(url);
  
  // Compute bounding box to automatically scale and center the model
  const modelObject = useMemo(() => {
    const clone = scene.clone();
    
    clone.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });

    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    
    // Scale so max dimension is sensible natively (e.g. 50 in world space)
    const maxDim = Math.max(size.x, size.y, size.z, 0.01);
    const baseScale = 50 / maxDim;
    const finalScale = baseScale * modelScale;
    clone.scale.set(finalScale, finalScale, finalScale);
    
    // Center it on X and Z, but put feet at Y=0
    clone.position.sub(new THREE.Vector3(center.x, box.min.y, center.z).multiplyScalar(finalScale));
    
    // Apply initial rotation into the model group to avoid conflict with UI rotation
    // Though UI rotation is on the group, keep model itself clean
    return clone;
  }, [scene, modelScale]); // Only depend on these for the base geometry/scale

  const groupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);
  const activeTool = useStore(state => state.activeTool);
  const updateCurrentProject = useStore(state => state.updateCurrentProject);
  const currentSceneId = useStore(state => state.currentSceneId);
  const cameraRef = useRef<THREE.Camera | null>(null);
  
  const position = useMemo(() => sphericalToCartesian(yaw, pitch, 450), [yaw, pitch]);

  useEffect(() => {
    if (groupRef.current) {
       groupRef.current.position.copy(position);
       
       // Face the camera which is at origin
       // Using -yaw directly sets the correct rotation around Y axis to face the origin
       groupRef.current.rotation.set(0, THREE.MathUtils.degToRad(-yaw), 0);
    }
  }, [position, yaw]);

  
  const isDragging = useRef(false);
  const previousPos = useRef<{x: number, y: number} | null>(null);

  const startDrag = (e: any) => {
    e.stopPropagation();
    try { e.target.setPointerCapture(e.pointerId); } catch(err) {}
    isDragging.current = true;
    previousPos.current = { x: e.clientX, y: e.clientY };
  };

  const moveDrag = (e: any) => {
    if (!isDragging.current) return;
    
    if (activeTool === 'avatar') {
      e.stopPropagation();
      // Raycast perfectly to the sphere
      if (e.ray) {
        const sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 450);
        const intersectPoint = new THREE.Vector3();
        if (e.ray.intersectSphere(sphere, intersectPoint)) {
          // calculateYawPitchFromPoint needs to be accessible, or we can just duplicate logic temporarily
          // or use the global calculateYawPitchFromPoint if it's hoisted. But calculateYawPitchFromPoint is outside!
          // Actually calculateYawPitchFromPoint is NOT exported, but we can compute it here.
          const radius = intersectPoint.length();
          const phi = Math.acos(intersectPoint.y / radius);
          let theta = Math.atan2(intersectPoint.x, -intersectPoint.z);
          let newYaw = THREE.MathUtils.radToDeg(theta);
          const newPitch = 90 - THREE.MathUtils.radToDeg(phi);
          
          while (newYaw <= -180) newYaw += 360;
          while (newYaw > 180) newYaw -= 360;

          updateCurrentProject((draft) => {
            const s = draft.scenes.find((sc) => sc.id === currentSceneId);
            if (s) {
              const avatarExt = s.extensions?.find(ex => ex.type === 'utilities-avatar');
              if (avatarExt && avatarExt.config?.position) {
                avatarExt.config.position.yaw = newYaw;
                avatarExt.config.position.pitch = newPitch;
              }
            }
            return draft;
          });
        }
      }
    } else if (allowDrag && innerGroupRef.current && previousPos.current) {
      e.stopPropagation();
      const dx = e.clientX - previousPos.current.x;
      const dy = e.clientY - previousPos.current.y;
      previousPos.current = { x: e.clientX, y: e.clientY };
      
      innerGroupRef.current.rotation.y += dx * 0.01;
      innerGroupRef.current.rotation.x += dy * 0.01;
    }
  };

  const stopDrag = (e: any) => {
    if (isDragging.current || activeTool === 'avatar') {
      if (e.stopPropagation) e.stopPropagation();
    }
    isDragging.current = false;
    previousPos.current = null;
    try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
  };

  const rotationRad = useMemo(() => THREE.MathUtils.degToRad(modelRotation), [modelRotation]);

  return (
    <group ref={groupRef} position={position}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow={false} />
      <group 
        ref={innerGroupRef}
        rotation={[0, rotationRad, 0]} // user configured Y rotation
        onPointerDown={activeTool === 'avatar' || allowDrag ? startDrag : undefined}
        onPointerMove={activeTool === 'avatar' || allowDrag ? moveDrag : undefined}
        onPointerUp={activeTool === 'avatar' || allowDrag ? stopDrag : undefined}
        onPointerCancel={activeTool === 'avatar' || allowDrag ? stopDrag : undefined}
        onPointerOut={(e) => {
          if (!isDragging.current && (activeTool === 'avatar' || allowDrag)) stopDrag(e);
        }}
        onClick={(e) => {
          // Prevent placing a new model when clicking on an existing model in avatar mode
          if (activeTool === 'avatar') {
            e.stopPropagation();
          }
        }}
      >
        <primitive object={modelObject} />
      </group>
    </group>
  );
}

interface PanoramaProps {
  scene: Scene;
  mode: 'edit' | 'preview';
  imageUrl: string;
}

// Convert Spherical to Cartesian relative to a sphere
const sphericalToCartesian = (yaw: number, pitch: number, radius = 500) => {
  const phi = THREE.MathUtils.degToRad(90 - pitch);
  const theta = THREE.MathUtils.degToRad(yaw); 
  
  const x = radius * Math.sin(phi) * Math.sin(theta);
  const z = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

// Extracted logic to find Yaw/Pitch from a ray intersection on the sphere
const calculateYawPitchFromPoint = (point: THREE.Vector3) => {
  const radius = point.length();
  
  const phi = Math.acos(point.y / radius);
  let theta = Math.atan2(point.x, -point.z);
  
  let pitch = 90 - THREE.MathUtils.radToDeg(phi);
  let yaw = THREE.MathUtils.radToDeg(theta); 
  
  // Normalize yaw to standard -180 to 180
  while (yaw <= -180) yaw += 360;
  while (yaw > 180) yaw -= 360;
  
  return { yaw, pitch };
};

interface PanoramaSphereProps extends PanoramaProps {
  onHotspotClick?: (hotspot: Hotspot) => void;
}

function BottomLogo({ logo }: { logo: NonNullable<Scene['bottomLogo']> }) {
  const { loadBlobUrl } = useStore();
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    let active = true;
    const blobId = logo.type === 'image' ? logo.imageBlobId : undefined;
    
    if (logo.type === 'image' && blobId) {
      loadBlobUrl(blobId).then(url => {
        new THREE.TextureLoader().load(url, t => {
          if (!active) return;
          t.colorSpace = THREE.SRGBColorSpace;
          setAspectRatio(t.image.width / t.image.height);
          setTexture(t);
        });
      });
    } else {
      setTexture(null);
    }
    return () => { active = false; };
  }, [logo.type, logo.imageBlobId, loadBlobUrl]);

  if (logo.type === 'image') {
    const size = (logo.imageSize ?? logo.size ?? 45) * 5;
    const width = size * 2;
    const height = width / aspectRatio; // Keep proportion
    const rotZ = THREE.MathUtils.degToRad(logo.imageRotation || 0);
    const scaleX = logo.imageFlipH ? -1 : 1;
    const scaleY = logo.imageFlipV ? -1 : 1;

    if (texture) {
      return (
        <mesh 
          position={sphericalToCartesian(180, -90, 490)} 
          rotation={[-Math.PI/2, 0, rotZ]} 
          scale={[scaleX, scaleY, 1]}
          renderOrder={99}
        >
          <planeGeometry args={[width, height]} />
          <meshBasicMaterial map={texture} transparent opacity={logo.opacity ?? 1} depthTest={false} side={THREE.DoubleSide} />
        </mesh>
      );
    }
    return null;
  }

  // Use a simple circle for color logo
  const size = (logo.colorSize ?? logo.size ?? 45) * 5;
  return (
    <mesh position={sphericalToCartesian(180, -90, 495)} rotation={[-Math.PI/2, 0, 0]} renderOrder={99}>
      <circleGeometry args={[size, 64]} />
      <meshBasicMaterial color={logo.color || "#000000"} transparent opacity={logo.opacity ?? 1} side={THREE.DoubleSide} depthTest={false} />
    </mesh>
  );
}

function PanoramaSphere({ scene, mode, imageUrl, onHotspotClick }: PanoramaSphereProps) {
  const texture = useTexture(imageUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  
  const updateCurrentProject = useStore(state => state.updateCurrentProject);
  const selectedHotspotIds = useStore(state => state.selectedHotspotIds);
  const setSelectedHotspotIds = useStore(state => state.setSelectedHotspotIds);
  const toggleHotspotSelection = useStore(state => state.toggleHotspotSelection);
  const activeTool = useStore(state => state.activeTool);
  const brushSettings = useStore(state => state.brushSettings);
  const setActiveTool = useStore(state => state.setActiveTool);
  const dragHotspotId = useStore(state => state.dragHotspotId);
  const setDragHotspotId = useStore(state => state.setDragHotspotId);
  const sphereRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();
  const dragOffset = useRef<{ yaw: number; pitch: number } | null>(null);
  const pointerDownPos = useRef<{ x: number; y: number } | null>(null);
  const currentStroke = useRef<any>(null);
  const [localDrawings, setLocalDrawings] = useState<any[]>([]);

  const currentProject = useStore(state => state.currentProject);

  useEffect(() => {
    setLocalDrawings(scene.drawings || []);
  }, [scene.drawings, scene.id]);

  // Disable orbit controls when drawing
  useEffect(() => {
    // We can't direct disable OrbitControls here easily without a ref, 
    // but CameraController handles it if we pass a prop or use state.
  }, [activeTool]);

  // Clear dragging state on scene change
  useEffect(() => {
    setDragHotspotId(null);
  }, [scene.id, setDragHotspotId]);

  const handlePointerDown = (e: any) => {
    if (mode === 'preview') return;
    pointerDownPos.current = { x: e.clientX, y: e.clientY };

    if (activeTool === 'brush' || activeTool === 'eraser') {
      const point = e.point;
      if (!point) return;
      const { yaw, pitch } = calculateYawPitchFromPoint(point);

      if (activeTool === 'brush') {
        currentStroke.current = {
          id: uuidv4(),
          points: [{ yaw, pitch }],
          color: brushSettings.color,
          width: brushSettings.width,
          type: brushSettings.type
        };
        setLocalDrawings(prev => [...prev, currentStroke.current]);
      } else if (activeTool === 'eraser') {
        updateCurrentProject(draft => {
          const s = draft.scenes.find(sc => sc.id === scene.id);
          if (s && s.drawings) {
            s.drawings = s.drawings.filter(d => {
              return !d.points.some(p => {
                const dist = Math.sqrt(Math.pow(p.yaw - yaw, 2) + Math.pow(p.pitch - pitch, 2));
                return dist < 2;
              });
            });
          }
          return draft;
        });
      }
    }
  };

  const handlePointerMove = (e: any) => {
    if (mode === 'preview') return;

    if ((activeTool === 'brush' || activeTool === 'eraser') && e.buttons === 1) {
      const point = e.point;
      if (!point) return;
      const { yaw, pitch } = calculateYawPitchFromPoint(point);

      if (activeTool === 'brush' && currentStroke.current) {
        if (brushSettings.type === 'freehand') {
          currentStroke.current.points.push({ yaw, pitch });
          setLocalDrawings(prev => {
            const others = prev.filter(d => d.id !== currentStroke.current?.id);
            return [...others, { ...currentStroke.current }];
          });
        } else if (brushSettings.type === 'line') {
          currentStroke.current.points = [currentStroke.current.points[0], { yaw, pitch }];
          setLocalDrawings(prev => {
            const others = prev.filter(d => d.id !== currentStroke.current?.id);
            return [...others, { ...currentStroke.current }];
          });
        }
      } else if (activeTool === 'eraser') {
        updateCurrentProject(draft => {
          const s = draft.scenes.find(sc => sc.id === scene.id);
          if (s && s.drawings) {
            s.drawings = s.drawings.filter(d => {
              return !d.points.some(p => {
                const dist = Math.sqrt(Math.pow(p.yaw - yaw, 2) + Math.pow(p.pitch - pitch, 2));
                return dist < 2;
              });
            });
          }
          return draft;
        });
      }
    }
  };

  const handleHotspotPointerMove = (e: React.PointerEvent, hotspotId: string) => {
    if (dragHotspotId === hotspotId && mode === 'edit') {
      e.stopPropagation();
      const reactCanvas = document.querySelector('canvas');
      if (!reactCanvas) return;
      const rect = reactCanvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      
      const point = new THREE.Vector3(dir.x * 500, dir.y * 500, dir.z * 500);
      const { yaw: currentYaw, pitch: currentPitch } = calculateYawPitchFromPoint(point);
      
      updateCurrentProject(draft => {
        const h = draft.scenes.find(s => s.id === scene.id)?.hotspots.find(h => h.id === hotspotId);
        if (h) {
          h.yaw = currentYaw;
          h.pitch = currentPitch;
        }
        return draft;
      });
    }
  };

  const handlePointerUp = (e: any) => {
    if (mode === 'preview') return;
    
    if (activeTool === 'brush' && currentStroke.current) {
      const stroke = currentStroke.current;
      updateCurrentProject(draft => {
        const s = draft.scenes.find(sc => sc.id === scene.id);
        if (s) {
          if (!s.drawings) s.drawings = [];
          s.drawings.push(stroke);
        }
        return draft;
      });
      currentStroke.current = null;
    }

    // Check drag distance
    const moveDist = pointerDownPos.current 
      ? Math.sqrt(Math.pow(e.clientX - pointerDownPos.current.x, 2) + Math.pow(e.clientY - pointerDownPos.current.y, 2))
      : 0;
    
    if (moveDist > 5 || e.delta > 5) return;
    if (e.object !== sphereRef.current) return;
    
    const point = e.point;
    const { yaw, pitch } = calculateYawPitchFromPoint(point);
    
    if (activeTool === 'select') {
      if (!e.shiftKey) {
        setSelectedHotspotIds([]);
      }
    } else if (activeTool === 'brush' || activeTool === 'eraser') {
      // Do nothing, drawing handled in handlePointerMove
    } else if (activeTool === 'avatar') {
      useStore.getState().pushHistory();
      updateCurrentProject(draft => {
        const s = draft.scenes.find(sc => sc.id === scene.id);
        if (s) {
          const avatarExt = s.extensions?.find(ex => ex.type === 'utilities-avatar');
          if (avatarExt && avatarExt.config) {
            avatarExt.config.position = { yaw, pitch };
          }
        }
        return draft;
      });
      if (!e.shiftKey && window.innerWidth >= 640) {
        useStore.getState().setActiveTool('select');
      }
    } else {
      useStore.getState().pushHistory();
      const typeMap: Record<string, any> = {
        'info': 'info',
        'quiz': 'quiz',
        'jump': 'jump',
        'freeform': 'freeform',
        'text': 'text',
        'image': 'image',
        'video': 'video'
      };
      
      const newHotspot: Hotspot = {
        id: uuidv4(),
        yaw,
        pitch,
        type: typeMap[activeTool] || 'info', 
        title: activeTool === 'text' ? '文字標籤' : (activeTool === 'image' ? '圖片資訊點' : '資訊點'),
        content: '',
        isDraft: false
      };
      
      if (newHotspot.type === 'text') {
        newHotspot.customText = '輸入自訂文字';
      }
      
      updateCurrentProject(draft => {
        const s = draft.scenes.find(sc => sc.id === scene.id);
        if (s) s.hotspots.push(newHotspot);
        return draft;
      });
      setSelectedHotspotIds([newHotspot.id]);

      // If shift is not held, default back to select mode (on desktop)
      if (!e.shiftKey && window.innerWidth >= 640) {
        setActiveTool('select');
      }
    }
  };

  return (
    <>
      <mesh 
        ref={sphereRef} 
        onPointerUp={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 1, 1]}
      >
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      
      {scene.bottomLogo?.enabled && <BottomLogo logo={scene.bottomLogo} />}

      {/* Avatar extension rendering disabled */}
      {/* 
      {(() => {
        const avatarExt = scene?.extensions?.find(e => e.type === 'utilities-avatar');
        if (avatarExt?.config?.enabled === false) return null;
        
        if (avatarExt?.config?.modelBlobId !== undefined && avatarExt?.config?.position) {
          return <PlacedAvatar 
            blobId={avatarExt.config.modelBlobId} 
            yaw={avatarExt.config.position.yaw} 
            pitch={avatarExt.config.position.pitch}
            allowDrag={avatarExt.config.allowDrag}
            scale={avatarExt.config.scale}
            rotation={avatarExt.config.rotation}
          />;
        }
        return null;
      })()}
      */}

      {localDrawings.map((drawing) => {
        const strokeExt = scene?.extensions?.find(e => e.type === 'utilities-stroke');
        if (strokeExt?.config?.enabled === false) return null;
        const points = (drawing.points || []).map((p: any) => sphericalToCartesian(p.yaw, p.pitch, 495));
        if (points.length < 2) return null;
        return (
          <Line 
            key={drawing.id}
            points={points}
            color={drawing.color}
            lineWidth={drawing.width}
            transparent
            depthTest={true}
          />
        );
      })}

      {activeTool !== 'brush' && activeTool !== 'eraser' && (scene.hotspots || []).map((hotspot, index) => {
        if (hotspot.isHidden && mode === 'preview') return null;
        if (hotspot.type === 'text' && !hotspot.customText && mode === 'preview') return null;
        
        const position = sphericalToCartesian(hotspot.yaw, hotspot.pitch, 490);
        const isSelected = selectedHotspotIds.includes(hotspot.id) && mode === 'edit';
        
        // Items earlier in the array should be on top (higher z-index)
        // Keep z-index low to avoid covering sidebar/modals
        const zIndex = isSelected ? 50 : (scene.hotspots.length - index);

        return (
          <Html 
            key={hotspot.id} 
            position={position} 
            center 
            zIndexRange={[zIndex, 0]}
          >
            <div 
              onWheel={(e) => {
                // Forward wheel event to the canvas for zooming
                const canvas = document.querySelector('canvas');
                if (canvas) {
                  canvas.dispatchEvent(new WheelEvent('wheel', {
                    deltaY: e.deltaY,
                    deltaX: e.deltaX,
                    deltaMode: e.deltaMode,
                    bubbles: true,
                    cancelable: true
                  }));
                }
              }}
              className={cn(
                "relative group flex flex-col items-center justify-center cursor-pointer transition-transform transform",
                isSelected ? "scale-105 z-50" : "scale-100 hover:scale-105",
                hotspot.isHidden ? "opacity-30 grayscale" : "",
                hotspot.type === 'video' || hotspot.type === 'image' || hotspot.type === 'text' ? "" : "w-10 h-10", // Do not restrict size for media
                activeTool !== 'select' ? "pointer-events-none" : (mode === 'preview' && hotspot.type === 'text') ? "pointer-events-none" : ""
              )}
              onClick={(e) => {
                e.stopPropagation();
                if (mode === 'edit') {
                  if (e.shiftKey) {
                    toggleHotspotSelection(hotspot.id);
                  } else {
                    setSelectedHotspotIds([hotspot.id]);
                  }
                } else if (onHotspotClick) {
                  // Check if hotspot has content
                  const hasContent = 
                    (hotspot.type === 'jump' && !!hotspot.targetSceneId) ||
                    (hotspot.type === 'link' && !!hotspot.linkUrl) ||
                    (hotspot.type === 'info' && (!!hotspot.title || !!hotspot.content)) ||
                    (hotspot.type === 'text' && !!hotspot.customText) ||
                    (hotspot.type === 'image' && !!hotspot.customIconBlobId) ||
                    (hotspot.type === 'video' && !!hotspot.youtubeUrl) ||
                    (hotspot.type === 'quiz' && !!hotspot.quiz?.question);
                    
                  if (hasContent) {
                    onHotspotClick(hotspot);
                  }
                }
              }}
              onPointerDown={(e) => {
                if (mode === 'edit') {
                  e.stopPropagation();
                  if (e.shiftKey) {
                     // Multi-select on pointer down might be annoying if dragging
                  } else if (!selectedHotspotIds.includes(hotspot.id)) {
                    setSelectedHotspotIds([hotspot.id]);
                  }
                  
                  if (window.innerWidth < 640 && activeTool !== 'select') {
                    setActiveTool('select');
                  }
                  
                  // Allow dragging even if other tools are active if we specifically click a hotspot
                  setDragHotspotId(hotspot.id);
                  (e.target as HTMLElement).setPointerCapture(e.pointerId);
                }
              }}
              onPointerMove={(e) => {
                if (dragHotspotId === hotspot.id && mode === 'edit') {
                  handleHotspotPointerMove(e, hotspot.id);
                }
              }}
              onPointerUp={(e) => {
                if (dragHotspotId === hotspot.id && mode === 'edit') {
                  e.stopPropagation();
                  setDragHotspotId(null);
                  dragOffset.current = null;
                  (e.target as HTMLElement).releasePointerCapture(e.pointerId);
                }
              }}
            >
              {hotspot.type === 'video' ? (
                <div 
                  className={cn("w-[280px] sm:w-[360px] aspect-video bg-[#1a1816] rounded-lg shadow-2xl overflow-hidden cursor-pointer border border-[#2a2623]", mode === 'edit' ? 'pointer-events-none' : 'pointer-events-auto')}
                  style={{
                    transform: `scale(${hotspot.imageScale ?? 1}) rotate(${hotspot.imageRotation ?? 0}deg) scaleX(${hotspot.imageFlipX ? -1 : 1}) scaleY(${hotspot.imageFlipY ? -1 : 1})`,
                  }}
                >
                   {hotspot.youtubeUrl ? (
                     <iframe 
                       width="100%" 
                       height="100%" 
                       src={`https://www.youtube.com/embed/${hotspot.youtubeUrl.split('v=')[1]?.split('&')[0] || hotspot.youtubeUrl.split('/').pop()}`}
                       frameBorder="0" 
                       allowFullScreen
                     ></iframe>
                   ) : (
                     <div className="w-full h-full flex items-center justify-center bg-black/50 text-white/50 border border-white/10 rounded-lg backdrop-blur-sm shadow-inner group-hover:bg-black/40 transition-colors">
                       <Video className="w-10 h-10" />
                     </div>
                   )}
                </div>
              ) : hotspot.type === 'text' && hotspot.customText ? (
                 <div 
                   className="text-white text-2xl font-bold drop-shadow-lg text-center cursor-pointer" 
                   style={{ 
                     textShadow: '2px 2px 4px rgba(0,0,0,0.8)', 
                     whiteSpace: 'pre-wrap', 
                     wordBreak: 'break-word', 
                     writingMode: 'horizontal-tb', 
                     minWidth: 'max-content',
                     transform: `scale(${hotspot.imageScale ?? 1}) rotate(${hotspot.imageRotation ?? 0}deg) scaleX(${hotspot.imageFlipX ? -1 : 1}) scaleY(${hotspot.imageFlipY ? -1 : 1})`
                   }}
                 >
                    {hotspot.customText}
                 </div>
              ) : hotspot.type === 'image' ? (
                 <div 
                   className="flex items-center justify-center pointer-events-none transition-transform"
                   style={{
                     transform: `scale(${hotspot.imageScale ?? 1}) rotate(${hotspot.imageRotation ?? 0}deg) scaleX(${hotspot.imageFlipX ? -1 : 1}) scaleY(${hotspot.imageFlipY ? -1 : 1})`,
                   }}
                 >
                    {hotspot.customIconBlobId ? <HotspotImage hotspot={hotspot} /> : <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm border border-white/20 pointer-events-auto"><ImageIcon className="w-10 h-10 text-white/50" /></div>}
                 </div>
              ) : (
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xl backdrop-blur-sm",
                  isSelected ? "bg-[#eba96a]/30 border border-[#eba96a] animate-pulse" :
                  hotspot.type === 'jump' ? "bg-emerald-500/80 border border-emerald-400" :
                  hotspot.type === 'link' ? "bg-blue-500/80 border border-blue-400" :
                  hotspot.type === 'quiz' ? "bg-amber-500/80 border border-amber-400" : 
                  "bg-black/80 border border-white/30 hover:bg-[#eba96a]/20"
                )}>
                  {hotspot.type === 'jump' ? <ArrowUpRight className="w-6 h-6 text-emerald-100" /> :
                   hotspot.type === 'link' ? <ExternalLink className="w-5 h-5 text-blue-100" /> :
                   hotspot.type === 'quiz' ? <HelpCircle className="w-5 h-5 text-amber-100" /> :
                   hotspot.type === 'info' ? <CircleDot className="w-5 h-5 text-white" /> :
                   <FileText className="w-5 h-5 text-white" />}
                </div>
              )}
              
              {/* Always show label if it has one */}
              {(hotspot.title && hotspot.type !== 'video' && hotspot.type !== 'image' && hotspot.type !== 'text') && (
                <div className="absolute top-12 whitespace-nowrap bg-[#1a1816] border border-[#2a2623] px-2 py-1 rounded shadow-xl pointer-events-none">
                  <span className="text-[10px] font-bold text-[#eba96a] uppercase tracking-widest">{hotspot.title}</span>
                </div>
              )}
            </div>
          </Html>
        );
      })}
    </>
  );
}

// Separate component for Controls to sync with Initial View logging
const CameraController = forwardRef(({ scene, mode, onCameraChange }: { scene: Scene; mode: 'edit' | 'preview', onCameraChange: (yaw: number, pitch: number, fov: number) => void }, ref) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<any>(null);
  const dragHotspotId = useStore(state => state.dragHotspotId);
  const activeTool = useStore(state => state.activeTool);
  
  const [isDragging, setIsDragging] = useState(false);
  const lastInteractionTime = useRef(Date.now());
  const initialRotationYaw = useRef<number | null>(null);
  const totalRotation = useRef(0);
  const lastYaw = useRef<number | null>(null);
  const keys = useRef({ ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false });
  
  const currentProject = useStore(state => state.currentProject);
  const setCurrentSceneId = useStore(state => state.setCurrentSceneId);
  const currentSceneId = useStore(state => state.currentSceneId);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (mode === 'edit' && document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
      if (keys.current.hasOwnProperty(e.key)) {
        keys.current[e.key as keyof typeof keys.current] = true;
        e.preventDefault();
      }
    };
    const up = (e: KeyboardEvent) => {
      if (mode === 'edit' && document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
      if (keys.current.hasOwnProperty(e.key)) {
        keys.current[e.key as keyof typeof keys.current] = false;
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', down, { passive: false });
    window.addEventListener('keyup', up, { passive: false });
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, [mode]);

  useFrame((state, delta) => {
    const isPaused = document.querySelector('.hotspot-popup-active') !== null;

    // Ensure damping works even when not manually interacting
    if (controlsRef.current) {
      controlsRef.current.update();
    }

    if (keys.current.ArrowLeft || keys.current.ArrowRight || keys.current.ArrowUp || keys.current.ArrowDown) {
      if (!isPaused && controlsRef.current) {
        lastInteractionTime.current = Date.now();
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        let { yaw, pitch } = calculateYawPitchFromPoint(forward);
        
        const speed = 100 * delta * ((camera as THREE.PerspectiveCamera).fov / 75);
        if (keys.current.ArrowLeft) yaw += speed;
        if (keys.current.ArrowRight) yaw -= speed;
        if (keys.current.ArrowUp) pitch += speed;
        if (keys.current.ArrowDown) pitch -= speed;
        
        pitch = Math.max(-89.9, Math.min(89.9, pitch));
        while (yaw <= -180) yaw += 360;
        while (yaw > 180) yaw -= 360;
        
        const pos = sphericalToCartesian(yaw, pitch, -0.1);
        camera.position.copy(pos);
        controlsRef.current.update();
        onCameraChange(yaw, pitch, (camera as THREE.PerspectiveCamera).fov);
      }
    }

    if (isDragging) {
      lastInteractionTime.current = Date.now();
    }

    if (mode === 'preview' && !isDragging && !isPaused && controlsRef.current) {
      const now = Date.now();
      const autoRotate = scene.autoRotate;
      const autoCarousel = scene.autoCarousel;
      
      // Auto-rotation logic
      if (autoRotate?.enabled && now - lastInteractionTime.current > (autoRotate.idleTime || 5) * 1000) {
        const speed = (autoRotate.speed || 0.5) * 2;
        const direction = autoRotate.direction === 'left' ? -1 : 1;
        
        controlsRef.current.autoRotate = true;
        controlsRef.current.autoRotateSpeed = speed * direction * 2; 

        // Continuous rotation even if carousel happens
        controlsRef.current.update();
        
        // Center Pitch
        const currentPolar = controlsRef.current.getPolarAngle();
        const targetPolar = Math.PI / 2;
        if (Math.abs(currentPolar - targetPolar) > 0.001) {
           const newPolar = THREE.MathUtils.lerp(currentPolar, targetPolar, 0.05);
           controlsRef.current.minPolarAngle = newPolar;
           controlsRef.current.maxPolarAngle = newPolar;
        } else {
           controlsRef.current.minPolarAngle = targetPolar;
           controlsRef.current.maxPolarAngle = targetPolar;
        }
        
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        const { yaw } = calculateYawPitchFromPoint(forward);
        
        if (lastYaw.current !== null) {
          let diff = yaw - lastYaw.current;
          if (diff > 180) diff -= 360;
          if (diff < -180) diff += 360;
          totalRotation.current += Math.abs(diff);
        }
        lastYaw.current = yaw;

        if (autoCarousel?.enabled && totalRotation.current >= 355) {
          totalRotation.current = 0;
          const visibleScenes = currentProject.scenes.filter(s => !s.isHidden);
          const currentIndex = visibleScenes.findIndex(s => s.id === scene.id);
          if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % visibleScenes.length;
            setCurrentSceneId(visibleScenes[nextIndex].id);
          }
        }
      } else {
        if (controlsRef.current) {
          controlsRef.current.autoRotate = false;
          controlsRef.current.minPolarAngle = 0;
          controlsRef.current.maxPolarAngle = Math.PI;
        }
        
        if (autoCarousel?.enabled && !autoRotate?.enabled && now - lastInteractionTime.current > (autoCarousel.idleTime || 5) * 1000) {
          lastInteractionTime.current = now; 
          const visibleScenes = currentProject.scenes.filter(s => !s.isHidden);
          const currentIndex = visibleScenes.findIndex(s => s.id === scene.id);
          if (currentIndex !== -1) {
             const nextIndex = (currentIndex + 1) % visibleScenes.length;
             setCurrentSceneId(visibleScenes[nextIndex].id);
          }
        }
      }
    }
  });

  // Custom FOV zoom logic for Google Street View-like feel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (camera instanceof THREE.PerspectiveCamera) {
         e.preventDefault();
         // Smooth scaling FOV, limit based on scene limits
         const fovLimits = scene.fovLimits || { min: 20, max: 110 };
         const zoomDelta = e.deltaY * 0.05;
         camera.fov = Math.max(fovLimits.min || 10, Math.min(fovLimits.max || 180, camera.fov + zoomDelta));
         camera.updateProjectionMatrix();
         
         const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
         const { yaw, pitch } = calculateYawPitchFromPoint(forward);
         onCameraChange(yaw, pitch, camera.fov);
      }
    };
    
    const domElement = gl.domElement;
    domElement.addEventListener('wheel', handleWheel, { passive: false });
    return () => domElement.removeEventListener('wheel', handleWheel);
  }, [camera, gl, onCameraChange]);

  useImperativeHandle(ref, () => ({
    stopInertia: () => {
      if (controlsRef.current) {
        controlsRef.current.dispatchEvent({ type: 'end' });
        controlsRef.current.enableDamping = false;
        controlsRef.current.update();
        controlsRef.current.enableDamping = true;
      }
    },
    resetView: () => {
      if (controlsRef.current) {
        controlsRef.current.enableDamping = false;
        controlsRef.current.update();
      }
      
      const yaw = scene.initialView?.yaw ?? 0;
      const pitch = scene.initialView?.pitch ?? 0;
      const fov = scene.initialView?.fov ?? 75;
      
      const pos = sphericalToCartesian(yaw, pitch, -0.1);
      camera.position.copy(pos);
      
      if (camera instanceof THREE.PerspectiveCamera) {
          camera.fov = fov;
          camera.updateProjectionMatrix();
      }
      if (controlsRef.current) {
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
        controlsRef.current.enableDamping = true;
      }
    },
    lookAt: (yaw: number, pitch: number) => {
      const pos = sphericalToCartesian(yaw, pitch, -0.1);
      camera.position.copy(pos);
      if (controlsRef.current) {
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
      }
    },
    getCurrentView: () => {
      if (!camera) return { yaw: 0, pitch: 0, fov: 75 };
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      const { yaw, pitch } = calculateYawPitchFromPoint(forward);
      let fov = 75;
      if (camera instanceof THREE.PerspectiveCamera) {
          fov = camera.fov;
      }
      return { yaw, pitch, fov };
    }
  }));
  
  useEffect(() => {
    const yaw = scene.initialView?.yaw ?? 0;
    const pitch = scene.initialView?.pitch ?? 0;
    const fov = scene.initialView?.fov ?? 75;
    
    const pos = sphericalToCartesian(yaw, pitch, -0.1);
    camera.position.copy(pos);
    
    if (camera instanceof THREE.PerspectiveCamera) {
       camera.fov = fov;
       camera.updateProjectionMatrix();
    }
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
    
    // Force a re-render/update of the controls next frame
    requestAnimationFrame(() => {
      if (controlsRef.current) controlsRef.current.update();
    });
  }, [scene.id, camera]); 

  // Notify initially
  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      onCameraChange(scene.initialView?.yaw ?? 0, scene.initialView?.pitch ?? 0, camera.fov);
    }
    // Also force update here
    if (controlsRef.current) controlsRef.current.update();
  }, [scene.id]);

  // Sync camera FOV when initialView.fov changes from sidebar (Edit mode only)
  useEffect(() => {
    if (mode === 'edit' && camera instanceof THREE.PerspectiveCamera && scene.initialView?.fov !== undefined) {
      if (scene.fovMode !== 'little-planet') {
        camera.fov = scene.initialView.fov;
        camera.updateProjectionMatrix();
        if (controlsRef.current) controlsRef.current.update();
      }
    }
  }, [scene.initialView?.fov, camera, mode]);

  // Handle FOV Mode (Little Planet)
  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      if (scene.fovMode === 'little-planet') {
        camera.fov = 155;
        camera.updateProjectionMatrix();
        const pos = sphericalToCartesian(0, 90, -0.1); // Look from top center
        camera.position.copy(pos);
        if (controlsRef.current) {
          controlsRef.current.target.set(0, 0, 0);
          controlsRef.current.update();
        }
      } else {
        // Just reset FOV when switching back to standard
        camera.fov = scene.initialView?.fov ?? 75;
        camera.updateProjectionMatrix();
        // Restore standard view position
        const yaw = scene.initialView?.yaw ?? 0;
        const pitch = scene.initialView?.pitch ?? 0;
        const pos = sphericalToCartesian(yaw, pitch, -0.1);
        camera.position.copy(pos);
        if (controlsRef.current) {
          controlsRef.current.target.set(0, 0, 0);
          controlsRef.current.update();
        }
      }
    }
  }, [scene.fovMode, camera]);

  const lastUpdateRef = useRef(0);
  const handleChange = () => {
    if (!controlsRef.current) return;
    const now = Date.now();
    if (now - lastUpdateRef.current < 16) return; // 提高流暢度至接近 60fps (16ms)
    lastUpdateRef.current = now;
    
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    const { yaw, pitch } = calculateYawPitchFromPoint(forward);
    if (camera instanceof THREE.PerspectiveCamera) {
      onCameraChange(yaw, pitch, camera.fov);
    }
  };

  return (
    <OrbitControls 
      ref={controlsRef}
      enabled={!dragHotspotId}
      enableZoom={false} 
      enablePan={false}
      rotateSpeed={-0.42 * ((camera as THREE.PerspectiveCamera).fov || 75) / 75}
      enableDamping={true}
      dampingFactor={0.08}
      mouseButtons={{
        LEFT: activeTool === 'select' ? THREE.MOUSE.ROTATE : null,
        MIDDLE: null,
        RIGHT: THREE.MOUSE.ROTATE
      }}
      onChange={handleChange}
      onStart={() => {
        setIsDragging(true);
        lastInteractionTime.current = Date.now();
        totalRotation.current = 0;
        lastYaw.current = null;
      }}
      onEnd={() => setIsDragging(false)}
    />
  );
});

function HotspotImage({ hotspot }: { hotspot: Hotspot }) {
  const blobId = hotspot.customIconBlobId;
  const [url, setUrl] = useState('');
  const { loadBlobUrl } = useStore();
  
  useEffect(() => {
    if (blobId) {
      loadBlobUrl(blobId).then(setUrl);
    }
  }, [blobId, loadBlobUrl]);
  
  if (!url) return <ImageIcon className="w-10 h-10 text-white/50" />;
  
  return (
    <img 
      src={url} 
      alt="Hotspot" 
      className="max-w-[120px] max-h-[120px] sm:max-w-[200px] sm:max-h-[200px] object-contain pointer-events-auto select-none drop-shadow-2xl" 
      draggable={false} 
    />
  );
}

const ToolButton = ({ type, icon, label }: { type: ToolType, icon: any, label: string }) => {
  const activeTool = useStore(state => state.activeTool);
  const setActiveTool = useStore(state => state.setActiveTool);
  const isActive = activeTool === type;
  
  return (
    <button 
      onClick={() => setActiveTool(type)}
      className={cn(
        "flex flex-row items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2 text-[11px] sm:text-xs font-bold transition-all rounded-lg min-w-[64px] sm:min-w-[80px] shrink-0",
        isActive ? "bg-[#eba96a] text-[#141210] shadow-lg scale-105" : "text-[#888] hover:text-[#e0e0e0] hover:bg-[#2a2623]"
      )}
      title={label}
    >
      <div className={cn("w-4 h-4 sm:w-4 sm:h-4 flex items-center justify-center", isActive ? "text-[#141210]" : "text-[#eba96a]")}>
        {icon}
      </div>
      <span className="leading-none whitespace-nowrap">{label}</span>
    </button>
  );
};

export default function PanoramaViewer({ mode, onHotspotClick, hideHUD }: { mode: 'edit' | 'preview', onHotspotClick?: (h: Hotspot) => void, hideHUD?: boolean }) {
  const currentProject = useStore(state => state.currentProject);
  const currentSceneId = useStore(state => state.currentSceneId);
  const loadBlobUrl = useStore(state => state.loadBlobUrl);
  const updateCurrentProject = useStore(state => state.updateCurrentProject);
  const currentView = useStore(state => state.currentView);
  const selectedHotspotIds = useStore(state => state.selectedHotspotIds);
  const setCurrentView = useStore(state => state.setCurrentView);
  const activeTool = useStore(state => state.activeTool);
  const setCurrentSceneId = useStore(state => state.setCurrentSceneId);
  
  const [imageUrl, setImageUrl] = useState<string>('');
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controllerRef = useRef<any>(null);
  
  const scene = currentProject?.scenes.find(s => s.id === currentSceneId);
  const floorplanExt = scene?.extensions?.find(e => e.type === 'utilities-floorplan');
  const floorplanBlobId = floorplanExt?.config?.floorplanBlobId;

  const isInitialView = scene ? (
    Math.abs(currentView.yaw - (scene.initialView?.yaw ?? 0)) < 0.1 &&
    Math.abs(currentView.pitch - (scene.initialView?.pitch ?? 0)) < 0.1 &&
    Math.abs(currentView.fov - (scene.initialView?.fov ?? 75)) < 0.1
  ) : false;

  // Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode !== 'edit' || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      const { selectedHotspotIds, updateCurrentProject, currentSceneId, undo, redo, pushHistory } = useStore.getState();
      
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedHotspotIds.length > 0) {
          pushHistory();
          updateCurrentProject(draft => {
            const s = draft.scenes.find(s => s.id === currentSceneId);
            if (s) {
              s.hotspots = s.hotspots.filter(h => !selectedHotspotIds.includes(h.id));
            }
            return draft;
          });
          useStore.getState().setSelectedHotspotIds([]);
        }
      }
      
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key === 'z') {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode]);

  // Handle custom events
  useEffect(() => {
    const handleReset = () => {
      if (controllerRef.current) controllerRef.current.resetView();
    };
    const handleSetInitial = () => {
      handleLockView();
    };
    const handleFocusHotspot = (e: any) => {
      if (!scene || !controllerRef.current) return;
      const hId = e.detail?.id;
      const h = scene.hotspots.find(hot => hot.id === hId);
      if (h) {
        controllerRef.current.stopInertia();
        controllerRef.current.lookAt(h.yaw, h.pitch);
      }
    };
    
    window.addEventListener('reset-panorama-view', handleReset);
    window.addEventListener('set-panorama-initial', handleSetInitial);
    window.addEventListener('focus-hotspot', handleFocusHotspot);
    return () => {
      window.removeEventListener('reset-panorama-view', handleReset);
      window.removeEventListener('set-panorama-initial', handleSetInitial);
      window.removeEventListener('focus-hotspot', handleFocusHotspot);
    };
  }, [scene?.id, scene?.hotspots]);

  const handleCameraChange = useCallback((yaw: number, pitch: number, fov: number) => {
    setCurrentView({ yaw, pitch, fov });
  }, [setCurrentView]);

  useEffect(() => {
    if (scene) {
      loadBlobUrl(scene.imageBlobId).then(setImageUrl);
    }
  }, [scene?.imageBlobId]);

  const handleLockView = () => {
    if (!scene) return;
    
    // Stop the inertia first
    let latestView = { ...currentView };
    if (controllerRef.current) {
      controllerRef.current.stopInertia();
      latestView = controllerRef.current.getCurrentView();
      // Immediately set the store so UI disables the button instantly
      setCurrentView(latestView);
    }
    
    updateCurrentProject(draft => {
      const s = draft.scenes.find(s => s.id === scene.id);
      if (s) {
        s.initialView = latestView;
      }
      return draft;
    });
  };

  const colorConfig = useMemo(() => {
    const ext = scene?.extensions?.find((e: any) => e.type === 'effects-color');
    return ext?.config || {};
  }, [scene?.extensions]);

  const filterStyle = useMemo(() => {
    const filters = [];
    if (colorConfig.brightness !== undefined) filters.push(`brightness(${colorConfig.brightness})`);
    if (colorConfig.contrast !== undefined) filters.push(`contrast(${colorConfig.contrast})`);
    if (colorConfig.saturate !== undefined) filters.push(`saturate(${colorConfig.saturate})`);
    if (colorConfig.hueRotate !== undefined) filters.push(`hue-rotate(${colorConfig.hueRotate}deg)`);
    if (colorConfig.blur !== undefined) filters.push(`blur(${colorConfig.blur}px)`);
    // Simple sharpness simulation using contrast if sharpness is provided
    if (colorConfig.sharpness > 0) {
      filters.push(`contrast(${1 + (colorConfig.sharpness / 10)})`);
    }
    return filters.join(' ');
  }, [colorConfig]);

  if (!scene || !imageUrl) {
    if (mode === 'edit' && (!currentProject || currentProject.scenes.length === 0)) {
      return (
        <div className="absolute inset-0 bg-[#0f0e0d] flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 rounded-full border border-[#2a2623] border-dashed flex items-center justify-center mb-6">
               <div className="w-10 h-10 rounded-full border-[3px] border-[#555] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#555]"></div>
               </div>
            </div>
            <p className="text-[#888] font-bold text-sm mb-2">尚未建立場景</p>
            <p className="text-[#555] text-xs">從左側面板上傳全景圖 (Equirectangular 格式)</p>
        </div>
      );
    }
    return <div className="absolute inset-0 bg-[#0f0e0d] flex items-center justify-center text-[#555] text-sm font-bold">請選擇場景或等待圖片載入...</div>;
  }




  return (
    <div className={cn(
      "absolute inset-0 bg-black",
      mode === 'edit' && activeTool !== 'select' ? "cursor-crosshair" : "cursor-grab active:cursor-grabbing"
    )}>
      {/* Floorplan Preview Overlay */}
      {!hideHUD && floorplanBlobId && floorplanExt?.config?.enabled !== false && (
        <div 
          className={cn(
            "absolute top-20 right-6 z-[60] bg-black/60 rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md group select-none",
            mode === 'preview' && "bg-transparent border-none shadow-none"
          )}
          style={{ width: `${floorplanExt.config.previewWidth || 180}px` }}
        >
          <div className="relative w-full overflow-hidden">
            <Thumbnail blobId={floorplanBlobId} className="w-full h-full object-contain" />
            
            {mode === 'edit' && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 pointer-events-none">
                  <div className="w-1.5 h-1.5 bg-[#eba96a] rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-tighter">平面圖預覽</span>
                </div>
              </>
            )}
            
            {/* Hotspots Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {(floorplanExt.config.hotspots || []).map((h: any) => {
                const isActive = h.targetSceneId === currentSceneId;
                if (h.type === 'text') {
                  const scale = (floorplanExt.config.previewWidth || 180) / 400;
                  return (
                    <div 
                      key={h.id}
                      className={cn(
                        "absolute -translate-x-1/2 -translate-y-1/2 font-bold whitespace-nowrap text-white drop-shadow-md pointer-events-auto cursor-pointer transition-all",
                        isActive ? "text-[#eba96a] drop-shadow-[0_0_8px_rgba(235,169,106,0.5)] scale-110" : ""
                      )}
                      style={{ 
                        left: `${h.x}%`, 
                        top: `${h.y}%`, 
                        fontSize: `${(h.fontSize || 12) * scale}px`,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (h.targetSceneId) {
                          const targetHidden = currentProject.scenes.find(s => s.id === h.targetSceneId)?.isHidden;
                          if (mode === 'edit' || !targetHidden) setCurrentSceneId(h.targetSceneId);
                        }
                      }}
                    >
                      {h.title}
                    </div>
                  );
                }
                return (
                  <div 
                    key={h.id}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl pointer-events-auto transition-all cursor-pointer border-2",
                      isActive 
                        ? "w-4 h-4 bg-[#eba96a] border-white ring-4 ring-[#eba96a]/40 z-20 scale-110 shadow-[0_0_15px_rgba(235,169,106,0.6)]" 
                        : "w-3 h-3 bg-white/80 border-white hover:bg-white hover:scale-125 z-10"
                    )}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (h.targetSceneId) {
                        const targetHidden = currentProject.scenes.find(s => s.id === h.targetSceneId)?.isHidden;
                        if (mode === 'edit' || !targetHidden) setCurrentSceneId(h.targetSceneId);
                      }
                    }}
                  />
                );
              })}
            </div>

            {/* Resize Handle (Bottom-Left) */}
            {mode === 'edit' && (
              <div 
                className="absolute bottom-0 left-0 w-8 h-8 cursor-sw-resize flex items-center justify-center group/resize z-50 pointer-events-auto"
                onPointerDown={(e) => {
                  e.stopPropagation();
                  (e.target as HTMLElement).setPointerCapture(e.pointerId);
                  const startX = e.clientX;
                  const startWidth = floorplanExt.config.previewWidth || 180;
                  
                  const handlePointerMove = (moveEvent: PointerEvent) => {
                    const deltaX = startX - moveEvent.clientX; 
                    const newWidth = Math.max(100, Math.min(500, startWidth + deltaX));
                    updateCurrentProject(p => {
                      const scene = p.scenes.find(s => s.id === currentSceneId);
                      if (scene) {
                        if (!scene.extensions) scene.extensions = [];
                        let ext = scene.extensions.find(ex => ex.type === 'utilities-floorplan');
                        if (ext) {
                          ext.config.previewWidth = newWidth;
                          
                          // Sync to all scenes as requested ("每場景同步共通")
                          p.scenes.forEach(s => {
                            if (s.id !== scene.id) {
                              if (!s.extensions) s.extensions = [];
                              let otherExt = s.extensions.find(ex => ex.type === 'utilities-floorplan');
                              if (otherExt) {
                                otherExt.config.previewWidth = newWidth;
                              }
                            }
                          });
                        }
                      }
                      return p;
                    });
                  };
                  
                  const handlePointerUp = () => {
                    window.removeEventListener('pointermove', handlePointerMove);
                    window.removeEventListener('pointerup', handlePointerUp);
                    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
                  };
                  
                  window.addEventListener('pointermove', handlePointerMove);
                  window.addEventListener('pointerup', handlePointerUp);
                }}
              >
                <div className="w-3 h-3 border-l-2 border-b-2 border-white/50 group-hover/resize:border-[#eba96a] transition-colors shadow-sm" />
              </div>
            )}
          </div>
          {mode === 'edit' && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          )}
        </div>
      )}

      <div className="w-full h-full" style={{ filter: filterStyle }}>
        <Canvas 
          camera={{ position: [0, 0, 0], fov: 75 }}
          onCreated={({ camera }) => { cameraRef.current = camera as THREE.PerspectiveCamera; }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <PanoramaSphere scene={scene} mode={mode} imageUrl={imageUrl} onHotspotClick={onHotspotClick} />
          <CameraController ref={controllerRef} scene={scene} mode={mode} onCameraChange={handleCameraChange} />
        </Canvas>
      </div>

      {/* Embed extension rendering disabled */}
      {/* 
      {(() => {
        const embedExt = scene?.extensions?.find(e => e.type === 'utilities-embed');
        if (embedExt?.config?.htmlStr) {
          return (
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-[150] shadow-2xl rounded-xl overflow-hidden bg-[#1a1816]/90 backdrop-blur-md border border-[#2a2623]"
              dangerouslySetInnerHTML={{ __html: embedExt.config.htmlStr }}
            />
          );
        }
        return null;
      })()}
      */}
      
      {/* On-canvas Tools for Edit Mode */}
      {mode === 'edit' && (
        <>
      {/* HUD Info */}
      {!hideHUD && (
        <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none z-[50] scale-[0.7] origin-top-left">
          <div className="bg-[#131210]/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/5 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-[#888] uppercase tracking-wider">偏航</span>
              <span className="text-sm font-mono text-[#eba96a] tabular-nums">{currentView.yaw.toFixed(1)}°</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-[#888] uppercase tracking-wider">俯仰</span>
              <span className="text-sm font-mono text-[#eba96a] tabular-nums">{currentView.pitch.toFixed(1)}°</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-[#888] uppercase tracking-wider">視野</span>
              <span className="text-sm font-mono text-[#e0e0e0] tabular-nums">{Math.round(currentView.fov)}°</span>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-[72px] sm:bottom-[24px] left-1/2 -translate-x-1/2 z-[200] pointer-events-none flex flex-col items-center">
        {activeTool !== 'select' && (
          <div className="bg-[#eba96a] text-[#141210] px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-tighter shadow-xl flex items-center gap-2 pointer-events-auto">
             <div className="w-1.5 h-1.5 bg-[#141210] rounded-full shrink-0" />
             <span className="flex-1">{activeTool === 'brush' ? '繪圖中...' : activeTool === 'eraser' ? '擦除中...' : '點擊畫面新增資訊點...'}</span>
                 <button 
                   onClick={(e) => { e.stopPropagation(); useStore.getState().setActiveTool('select'); useStore.getState().setSelectedHotspotIds([]); }}
                  className="ml-1 p-0.5 hover:bg-black/10 rounded cursor-pointer"
                  title="取消"
                >
                  <X className="w-3.5 h-3.5 text-[#141210]" />
                </button>
          </div>
        )}
      </div>

      <div className={cn("absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 items-center bg-[#1a1816]/95 border border-[#2a2623] rounded-xl shadow-2xl z-[200] p-1 backdrop-blur-md w-max max-w-[calc(100vw-24px)] overflow-x-auto no-scrollbar", (selectedHotspotIds.length > 0 || hideHUD) ? "hidden sm:flex" : "flex")}>
        {!hideHUD && (
          <>
            <ToolButton type="select" icon={<MousePointer2 className="w-full h-full" />} label="選取" />
            <ToolButton type="info" icon={<CircleDot className="w-full h-full" />} label="資訊點" />
            <ToolButton type="text" icon={<Type className="w-full h-full" />} label="文字" />
            <ToolButton type="image" icon={<ImageIcon className="w-full h-full" />} label="圖片" />
            <ToolButton type="video" icon={<Video className="w-full h-full" />} label="影片" />
          </>
        )}
      </div>

          <div className="absolute bottom-4 right-4 z-[200] flex items-center gap-2 pointer-events-none">
          </div>
        </>
      )}
    </div>
  );
}
