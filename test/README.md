# 手機陀螺儀尋找 3D 角色 Demo

這是一個純前端 Web Demo：

- 開啟手機後鏡頭作為背景。
- 讀取手機方向感測器 / 陀螺儀資料。
- 在水平 360° 方位中隨機固定一個 3D 角色。
- 使用者需要原地轉動手機尋找角色。
- 角色不在畫面中時，畫面左側或右側會顯示箭頭提示方向。
- 找到角色後可按「重新隨機」再次放置。

## 檔案

- `index.html`：主頁面。
- `style.css`：UI 與提示箭頭樣式。
- `app.js`：相機、陀螺儀、3D 角色與遊戲邏輯。

## 測試方式

手機相機 `getUserMedia()` 通常需要 HTTPS 或 localhost 安全環境。建議以下任一方式：

1. 上傳到 GitHub Pages / Netlify / Vercel 等 HTTPS 網站。
2. 用手機端的本機伺服器 App 開啟 localhost。
3. 如果只是在電腦預覽 UI，可以開本機伺服器，但陀螺儀與後鏡頭仍需手機測試。

> iPhone / iPad 需要使用者點擊按鈕後，才可以請求 DeviceOrientationEvent 權限。

## 可調參數

在 `app.js` 頂部可調整：

```js
const FOV_DEGREES = 52;       // 角色出現在畫面中的水平視角範圍
const TARGET_MIN_OFFSET = 45; // 隨機角色時，避免太靠近目前正前方
const FOUND_THRESHOLD = 8;    // 角度差小於此數值時視為找到
const YAW_SMOOTHING = 0.16;   // 陀螺儀平滑程度
```

## 換成自己的 GLB 角色

目前 Demo 使用 Three.js 幾何體組合出一個簡單 3D 角色，方便不用準備模型就能跑。
如果要換成 GLB，可在 `app.js` 引入 `GLTFLoader`，並把 `buildCharacter()` 替換成載入模型的程式。

範例方向：

```js
import { GLTFLoader } from 'https://unpkg.com/three@0.166.1/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('./character.glb', (gltf) => {
  character = gltf.scene;
  character.scale.setScalar(1.2);
  scene.add(character);
});
```

## 注意

這是一個「方位尋找」Demo，不是完整 ARKit / ARCore SLAM 定位。角色固定於水平角度方位，不會真正貼合地面或做空間深度遮擋。若要升級成真正 AR，可改用 WebXR / ARCore / Unity AR Foundation。
