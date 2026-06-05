import * as THREE from 'https://unpkg.com/three@0.166.1/build/three.module.js';

const FOV_DEGREES = 52;             // 角色出現在畫面中的水平視角範圍
const TARGET_MIN_OFFSET = 45;       // 隨機角色時，避免太靠近目前正前方
const FOUND_THRESHOLD = 8;          // 角度差小於此數值時視為找到
const YAW_SMOOTHING = 0.16;         // 0~1，越大越靈敏，越小越穩

const els = {
  video: document.querySelector('#camera'),
  canvas: document.querySelector('#threeCanvas'),
  startPanel: document.querySelector('#startPanel'),
  startBtn: document.querySelector('#startBtn'),
  rerollBtn: document.querySelector('#rerollBtn'),
  hint: document.querySelector('#offscreenHint'),
  arrow: document.querySelector('#edgeArrow'),
  edgeText: document.querySelector('#edgeText'),
  message: document.querySelector('#message'),
  targetBearingText: document.querySelector('#targetBearingText'),
  deltaText: document.querySelector('#deltaText'),
};

const state = {
  started: false,
  rawYaw: null,
  yaw: null,
  targetBearing: null,
  foundOnce: false,
  lastOrientationAt: 0,
};

let renderer;
let scene;
let camera;
let character;
let clock;

initThree();
resizeRenderer();
window.addEventListener('resize', resizeRenderer);
window.addEventListener('orientationchange', () => setTimeout(resizeRenderer, 250));

els.startBtn.addEventListener('click', startGame);
els.rerollBtn.addEventListener('click', () => randomizeTarget(true));

async function startGame() {
  try {
    await requestOrientationPermissionIfNeeded();
    await startCamera();
    window.addEventListener('deviceorientation', handleOrientation, true);

    state.started = true;
    els.startPanel.classList.add('hidden');
    showMessage('請拿穩手機，原地水平轉動，尋找 3D 角色。', 2600);
    randomizeTarget(false);
  } catch (err) {
    console.error(err);
    showMessage(`啟動失敗：${getFriendlyError(err)}`, 6000);
  }
}

async function requestOrientationPermissionIfNeeded() {
  // iOS Safari 需要在使用者點擊後呼叫 requestPermission。
  if (typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function') {
    const response = await DeviceOrientationEvent.requestPermission();
    if (response !== 'granted') {
      throw new Error('尚未允許動作與方向感測器權限');
    }
  }
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('此瀏覽器或目前網址不支援相機存取，請使用 HTTPS 或 localhost');
  }

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: { ideal: 'environment' },
      width: { ideal: 1280 },
      height: { ideal: 720 },
    },
    audio: false,
  });

  els.video.srcObject = stream;
  await els.video.play();
}

function handleOrientation(event) {
  const nextYaw = getYawFromDeviceOrientation(event);
  if (nextYaw == null || Number.isNaN(nextYaw)) return;

  state.rawYaw = nextYaw;
  state.lastOrientationAt = performance.now();

  if (state.yaw == null) {
    state.yaw = nextYaw;
    if (state.targetBearing == null) randomizeTarget(false);
  } else {
    state.yaw = smoothAngle(state.yaw, nextYaw, YAW_SMOOTHING);
  }
}

function getYawFromDeviceOrientation(event) {
  // webkitCompassHeading 在 iOS 上通常較接近真實指南針角度。
  if (typeof event.webkitCompassHeading === 'number') {
    return normalizeDegrees(event.webkitCompassHeading);
  }

  // Android Chrome 多數情況可用 alpha；這裡轉成與 compass 類似的順時針方位。
  if (typeof event.alpha === 'number') {
    return normalizeDegrees(360 - event.alpha);
  }

  return null;
}

function randomizeTarget(force = false) {
  if (!state.started && force) return;

  const baseYaw = state.yaw ?? state.rawYaw ?? 0;
  const randomOffset = TARGET_MIN_OFFSET + Math.random() * (360 - TARGET_MIN_OFFSET * 2);
  state.targetBearing = normalizeDegrees(baseYaw + randomOffset);
  state.foundOnce = false;
  els.targetBearingText.textContent = `${Math.round(state.targetBearing)}°`;

  if (force) showMessage('已重新隨機放置角色，開始尋找！', 1800);
}

function initThree() {
  renderer = new THREE.WebGLRenderer({
    canvas: els.canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1.3, 7.2);
  camera.lookAt(0, 1.1, 0);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x24304c, 1.8);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 2.5);
  key.position.set(4, 6, 5);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x78ffd6, 1.2);
  rim.position.set(-4, 2, -2);
  scene.add(rim);

  character = buildCharacter();
  scene.add(character);
  character.visible = false;

  clock = new THREE.Clock();
  animate();
}

function buildCharacter() {
  const group = new THREE.Group();

  const gold = new THREE.MeshStandardMaterial({ color: 0xf9b84f, roughness: 0.38, metalness: 0.08 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xfff0ca, roughness: 0.45, metalness: 0.02 });
  const teal = new THREE.MeshStandardMaterial({ color: 0x62f3d0, roughness: 0.3, metalness: 0.15 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1c2233, roughness: 0.6, metalness: 0.02 });
  const pink = new THREE.MeshStandardMaterial({ color: 0xff8db7, roughness: 0.4, metalness: 0.02 });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.72, 32, 32), gold);
  body.scale.set(0.92, 1.12, 0.76);
  body.position.y = 0.25;
  group.add(body);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 32), cream);
  belly.scale.set(1.0, 1.12, 0.22);
  belly.position.set(0, 0.12, 0.56);
  group.add(belly);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.58, 32, 32), gold);
  head.position.y = 1.08;
  head.scale.set(1.05, 0.92, 0.92);
  group.add(head);

  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.28, 24, 24), cream);
  snout.position.set(0, 0.98, 0.48);
  snout.scale.set(1.25, 0.8, 0.75);
  group.add(snout);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 16), dark);
  nose.position.set(0, 1.03, 0.72);
  nose.scale.set(1.2, 0.75, 0.65);
  group.add(nose);

  const eyeGeo = new THREE.SphereGeometry(0.075, 16, 16);
  const leftEye = new THREE.Mesh(eyeGeo, dark);
  const rightEye = new THREE.Mesh(eyeGeo, dark);
  leftEye.position.set(-0.19, 1.18, 0.51);
  rightEye.position.set(0.19, 1.18, 0.51);
  group.add(leftEye, rightEye);

  const earGeo = new THREE.ConeGeometry(0.18, 0.42, 4);
  const leftEar = new THREE.Mesh(earGeo, gold);
  const rightEar = new THREE.Mesh(earGeo, gold);
  leftEar.position.set(-0.38, 1.57, 0.02);
  rightEar.position.set(0.38, 1.57, 0.02);
  leftEar.rotation.z = -0.5;
  rightEar.rotation.z = 0.5;
  group.add(leftEar, rightEar);

  const armGeo = new THREE.CapsuleGeometry(0.1, 0.48, 8, 18);
  const leftArm = new THREE.Mesh(armGeo, gold);
  const rightArm = new THREE.Mesh(armGeo, gold);
  leftArm.position.set(-0.76, 0.45, 0.04);
  rightArm.position.set(0.76, 0.45, 0.04);
  leftArm.rotation.z = 0.8;
  rightArm.rotation.z = -0.8;
  group.add(leftArm, rightArm);

  const footGeo = new THREE.SphereGeometry(0.18, 18, 18);
  const leftFoot = new THREE.Mesh(footGeo, cream);
  const rightFoot = new THREE.Mesh(footGeo, cream);
  leftFoot.position.set(-0.28, -0.58, 0.14);
  rightFoot.position.set(0.28, -0.58, 0.14);
  leftFoot.scale.set(1.35, 0.62, 1.0);
  rightFoot.scale.set(1.35, 0.62, 1.0);
  group.add(leftFoot, rightFoot);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.025, 12, 72), teal);
  ring.position.set(0, 0.02, 0.64);
  ring.rotation.x = Math.PI / 2;
  group.add(ring);

  const heart = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), pink);
  heart.position.set(0, 0.02, 0.68);
  heart.scale.set(1.25, 1.0, 0.35);
  group.add(heart);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.82, 40),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.72;
  group.add(shadow);

  group.scale.setScalar(1.05);
  group.position.set(0, 0.25, 0);
  return group;
}

function animate() {
  requestAnimationFrame(animate);

  const t = clock.getElapsedTime();
  updateGameState(t);

  if (character) {
    character.rotation.y = Math.sin(t * 1.1) * 0.18;
    character.position.y = 0.22 + Math.sin(t * 2.1) * 0.05;
    const ring = character.children.find((mesh) => mesh.geometry?.type === 'TorusGeometry');
    if (ring) ring.rotation.z += 0.012;
  }

  renderer.render(scene, camera);
}

function updateGameState(t) {
  if (!state.started || state.yaw == null || state.targetBearing == null) return;

  const delta = signedAngleDelta(state.yaw, state.targetBearing);
  const absDelta = Math.abs(delta);
  const isVisible = absDelta <= FOV_DEGREES / 2;

  els.deltaText.textContent = `${Math.round(delta)}°`;
  character.visible = isVisible;

  if (isVisible) {
    const normalized = delta / (FOV_DEGREES / 2); // -1 ~ 1
    character.position.x = normalized * 2.3;
    character.position.z = -Math.abs(normalized) * 0.25;
    character.scale.setScalar(1.02 + (1 - Math.abs(normalized)) * 0.18);
    els.hint.classList.add('hidden');

    if (absDelta < FOUND_THRESHOLD && !state.foundOnce) {
      state.foundOnce = true;
      showMessage('找到了！角色已出現在你的視野中。按「重新隨機」可再玩一次。', 3000);
    }
  } else {
    updateOffscreenArrow(delta, t);
  }

  if (performance.now() - state.lastOrientationAt > 3500) {
    showMessage('目前沒有收到陀螺儀資料。請確認瀏覽器已允許動作與方向感測器。', 3200);
  }
}

function updateOffscreenArrow(delta, t) {
  const goRight = delta > 0;
  els.hint.classList.remove('hidden');
  els.hint.style.left = goRight ? 'auto' : '10px';
  els.hint.style.right = goRight ? '10px' : 'auto';
  els.hint.style.flexDirection = goRight ? 'row' : 'row-reverse';
  els.arrow.style.transform = `rotate(${goRight ? 0 : 180}deg) translateX(${Math.sin(t * 5) * 3}px)`;
  els.edgeText.textContent = goRight ? '往右轉找角色' : '往左轉找角色';
}

function resizeRenderer() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function showMessage(text, duration = 2400) {
  els.message.textContent = text;
  els.message.classList.remove('hidden');
  window.clearTimeout(showMessage.timer);
  showMessage.timer = window.setTimeout(() => {
    els.message.classList.add('hidden');
  }, duration);
}

function getFriendlyError(err) {
  const message = err?.message || String(err);
  if (message.includes('Permission') || message.includes('denied') || message.includes('權限')) {
    return '權限被拒絕，請允許相機與動作感測器後重新整理頁面。';
  }
  if (message.includes('getUserMedia') || message.includes('HTTPS')) {
    return '相機需要 HTTPS / localhost 安全環境，請上傳到 GitHub Pages、Netlify、Vercel 或用手機 localhost 測試。';
  }
  return message;
}

function normalizeDegrees(deg) {
  return ((deg % 360) + 360) % 360;
}

function signedAngleDelta(fromDeg, toDeg) {
  return ((toDeg - fromDeg + 540) % 360) - 180;
}

function smoothAngle(current, target, factor) {
  const diff = signedAngleDelta(current, target);
  return normalizeDegrees(current + diff * factor);
}
