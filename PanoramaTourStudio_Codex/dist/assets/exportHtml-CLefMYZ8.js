import{J as T,g as R,F as j,u as C}from"./index-DoJi9kCk.js";const D=n=>new Promise((m,g)=>{const o=new FileReader;o.onloadend=()=>m(o.result),o.onerror=g,o.readAsDataURL(n)}),L=async n=>{var m,g,o,$,h;try{const a=await fetch("/api/export-bundle");if(!a.ok)throw new Error(`Failed to fetch app bundle: ${a.statusText}`);const r=await a.text(),c=new T,i=c.folder("config"),w=c.folder("assets/images");let _="";const u="<\/script>",x=`
// 專案設定與互動邏輯
window.__EXPORTED_PROJECT_DATA__ = ${JSON.stringify(n)};
window.__EXPORTED_IMAGES__ = {};
window.__IS_STANDALONE__ = true;
`;i==null||i.file("project-data.js",x),_+=`<script src="./config/project-data.js">${u}
`;const y=new Set,l=async(t,e)=>{if(t&&!y.has(t)){y.add(t);const s=await R(t);if(s){const f=await D(s),p=e.replace(/[^a-z0-9]/gi,"_").toLowerCase(),d=s.type==="image/png"?"png":"jpg",A=`${p}_${t.substring(0,4)}.${d}`;w==null||w.file(A,s);const S=`img_${p}_${t.substring(0,4)}.js`,I=`
// Image data: ${e}
window.__EXPORTED_IMAGES__['${t}'] = "${f}";
`;i==null||i.file(S,I),_+=`<script src="./config/${S}">${u}
`}}};for(const t of n.scenes){await l(t.imageBlobId,`panorama_${t.name||"scene"}`),((m=t.bottomLogo)==null?void 0:m.type)==="image"&&await l(t.bottomLogo.imageBlobId,`logo_${t.name||"scene"}`);for(const e of t.hotspots||[])e.type==="image"&&e.customIconBlobId&&await l(e.customIconBlobId,`infopoint_${e.title||"image"}`)}for(const t of n.scenes){const e=(g=t.extensions)==null?void 0:g.find(d=>d.type==="utilities-floorplan"),s=(o=e==null?void 0:e.config)==null?void 0:o.floorplanBlobId;s&&await l(s,"floorplan");const f=($=t.extensions)==null?void 0:$.find(d=>d.type==="utilities-avatar"),p=(h=f==null?void 0:f.config)==null?void 0:h.modelBlobId;p&&await l(p,"model_3d")}const b=r.lastIndexOf("</body>");let E=r;b!==-1?E=r.substring(0,b)+_+r.substring(b):E=r+_,c.file("index.html",E),c.file("README.txt",`如何檢視匯出的全景專案：

1. 解壓縮整個資料夾
2. 直接點擊「index.html」檔案來開啟專案。

※ 此版本為單機免伺服器版，內含高保真度的 React 應用程式與所有專案設定。
※ 「config」資料夾內包含所有互動邏輯與資訊點設定。
※ 「assets/images」資料夾內包含所有的環景圖影像資料。`);const B=await c.generateAsync({type:"blob"});j.saveAs(B,`${n.name||"project"}_export.zip`)}catch(a){console.error("Export error:",a),C.getState().showConfirm({title:"匯出失敗",message:`匯出失敗，請確認伺服器有正常運行或網路連線正常。
錯誤：`+a.message,type:"alert"})}};export{L as exportProjectToHtml};
