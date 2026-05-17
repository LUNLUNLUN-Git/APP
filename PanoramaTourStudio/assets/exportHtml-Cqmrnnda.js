import{J as C,g as j,F as N,u as L}from"./index-DXfF9_bJ.js";const U=a=>new Promise((m,g)=>{const i=new FileReader;i.onloadend=()=>m(i.result),i.onerror=g,i.readAsDataURL(a)}),k=async a=>{var m,g,i,h,y,E,$,x;try{let s="";const p=t=>{try{return new URL(t,window.location.href).href}catch{return`./${t}`}};try{const t=await fetch(p("api/export-bundle"));if(t.ok)s=await t.text();else throw new Error("API Unavailable")}catch{console.log("API fallback, trying static asset from:",p("export-bundle.html"));try{const e=await fetch(p("export-bundle.html"));if(e.ok)s=await e.text();else throw new Error(`Static asset not found at ${p("export-bundle.html")}`)}catch(e){throw console.warn("Could not fetch server bundle or static asset:",e),new Error("無法取得匯出版樣板。如果您是使用 GitHub Pages，請確認 'export-bundle.html' 是否與 'index.html' 放在同一個資料夾內。")}}const c=new C,l=c.folder("config"),S=c.folder("assets/images");let _="";const A="<\/script>",R=`
// 專案設定與互動邏輯
window.__EXPORTED_PROJECT_DATA__ = ${JSON.stringify(a)};
window.__EXPORTED_IMAGES__ = {};
window.__EXPORTED_AUDIO__ = {};
window.__IS_STANDALONE__ = true;
`;l==null||l.file("project-data.js",R),_+=`<script src="./config/project-data.js">${A}
`;const I=new Set,r=async(t,e)=>{if(t&&!I.has(t)){I.add(t);const o=await j(t);if(o){const d=await U(o),f=e.replace(/[^a-z0-9]/gi,"_").toLowerCase(),n=o.type.startsWith("audio/"),b=n?c.folder("assets/audio"):S,T=n?o.type==="audio/mpeg"?"mp3":"wav":o.type==="image/png"?"png":"jpg",O=`${f}_${t.substring(0,4)}.${T}`;b==null||b.file(O,o);const B=`${n?"audio":"img"}_${f}_${t.substring(0,4)}.js`,P=`
// Asset data: ${e}
${n?"window.__EXPORTED_AUDIO__":"window.__EXPORTED_IMAGES__"}['${t}'] = "${d}";
`;l==null||l.file(B,P),_+=`<script src="./config/${B}">${A}
`}}};for(const t of a.extensions||[])t.type==="utilities-music"&&((m=t.config)!=null&&m.audioBlobId)&&await r(t.config.audioBlobId,`project_music_${t.config.audioName||"bgm"}`);for(const t of a.scenes){await r(t.imageBlobId,`panorama_${t.name||"scene"}`);const e=(g=t.extensions)==null?void 0:g.find(o=>o.type==="utilities-music");(i=e==null?void 0:e.config)!=null&&i.audioBlobId&&await r(e.config.audioBlobId,`scene_music_${t.name||"bgm"}`),((h=t.bottomLogo)==null?void 0:h.type)==="image"&&await r(t.bottomLogo.imageBlobId,`logo_${t.name||"scene"}`);for(const o of t.hotspots||[])o.type==="image"&&o.customIconBlobId&&await r(o.customIconBlobId,`infopoint_${o.title||"image"}`)}for(const t of a.scenes){const e=(y=t.extensions)==null?void 0:y.find(n=>n.type==="utilities-floorplan"),o=(E=e==null?void 0:e.config)==null?void 0:E.floorplanBlobId;o&&await r(o,"floorplan");const d=($=t.extensions)==null?void 0:$.find(n=>n.type==="utilities-avatar"),f=(x=d==null?void 0:d.config)==null?void 0:x.modelBlobId;f&&await r(f,"model_3d")}const w=s.lastIndexOf("</body>");let u=s;w!==-1?u=s.substring(0,w)+_+s.substring(w):u=s+_,c.file("index.html",u),c.file("README.txt",`如何檢視匯出的全景專案：

1. 解壓縮整個資料夾
2. 直接點擊「index.html」檔案來開啟專案。

※ 此版本為單機免伺服器版，內含高保真度的 React 應用程式與所有專案設定。
※ 「config」資料夾內包含所有互動邏輯與資訊點設定。
※ 「assets/images」資料夾內包含所有的環景圖影像資料。`);const D=await c.generateAsync({type:"blob"});N.saveAs(D,`${a.name||"project"}_export.zip`)}catch(s){console.error("Export error:",s),L.getState().showConfirm({title:"匯出失敗",message:`匯出失敗，請確認伺服器有正常運行或網路連線正常。
錯誤：`+s.message,type:"alert"})}};export{k as exportProjectToHtml};
