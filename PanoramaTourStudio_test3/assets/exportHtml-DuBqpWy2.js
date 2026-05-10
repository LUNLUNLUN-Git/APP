import{J as B,g as R,F as T,u as C}from"./index-CLYHjLXx.js";const j=a=>new Promise((m,p)=>{const s=new FileReader;s.onloadend=()=>m(s.result),s.onerror=p,s.readAsDataURL(a)}),O=async a=>{var m,p,s,b,u;try{let o="";try{const t=await fetch("./api/export-bundle");if(t.ok)o=await t.text();else throw new Error("API Unavailable")}catch{console.log("API fallback, trying static asset...");try{const e=await fetch("./export-bundle.html");if(e.ok)o=await e.text();else throw new Error("Static asset unavailable")}catch(e){throw console.warn("Could not fetch server bundle or static asset:",e),new Error("無法取得匯出版樣板。如果您是在本地執行，請確認是否已啟動伺服器 (npm run dev)；如果是靜態部署，請確認 /export-bundle.html 是否存在。")}}const r=new B,i=r.folder("config"),w=r.folder("assets/images");let g="";const E="<\/script>",$=`
// 專案設定與互動邏輯
window.__EXPORTED_PROJECT_DATA__ = ${JSON.stringify(a)};
window.__EXPORTED_IMAGES__ = {};
window.__IS_STANDALONE__ = true;
`;i==null||i.file("project-data.js",$),g+=`<script src="./config/project-data.js">${E}
`;const y=new Set,c=async(t,e)=>{if(t&&!y.has(t)){y.add(t);const n=await R(t);if(n){const l=await j(n),f=e.replace(/[^a-z0-9]/gi,"_").toLowerCase(),d=n.type==="image/png"?"png":"jpg",A=`${f}_${t.substring(0,4)}.${d}`;w==null||w.file(A,n);const S=`img_${f}_${t.substring(0,4)}.js`,I=`
// Image data: ${e}
window.__EXPORTED_IMAGES__['${t}'] = "${l}";
`;i==null||i.file(S,I),g+=`<script src="./config/${S}">${E}
`}}};for(const t of a.scenes){await c(t.imageBlobId,`panorama_${t.name||"scene"}`),((m=t.bottomLogo)==null?void 0:m.type)==="image"&&await c(t.bottomLogo.imageBlobId,`logo_${t.name||"scene"}`);for(const e of t.hotspots||[])e.type==="image"&&e.customIconBlobId&&await c(e.customIconBlobId,`infopoint_${e.title||"image"}`)}for(const t of a.scenes){const e=(p=t.extensions)==null?void 0:p.find(d=>d.type==="utilities-floorplan"),n=(s=e==null?void 0:e.config)==null?void 0:s.floorplanBlobId;n&&await c(n,"floorplan");const l=(b=t.extensions)==null?void 0:b.find(d=>d.type==="utilities-avatar"),f=(u=l==null?void 0:l.config)==null?void 0:u.modelBlobId;f&&await c(f,"model_3d")}const _=o.lastIndexOf("</body>");let h=o;_!==-1?h=o.substring(0,_)+g+o.substring(_):h=o+g,r.file("index.html",h),r.file("README.txt",`如何檢視匯出的全景專案：

1. 解壓縮整個資料夾
2. 直接點擊「index.html」檔案來開啟專案。

※ 此版本為單機免伺服器版，內含高保真度的 React 應用程式與所有專案設定。
※ 「config」資料夾內包含所有互動邏輯與資訊點設定。
※ 「assets/images」資料夾內包含所有的環景圖影像資料。`);const x=await r.generateAsync({type:"blob"});T.saveAs(x,`${a.name||"project"}_export.zip`)}catch(o){console.error("Export error:",o),C.getState().showConfirm({title:"匯出失敗",message:`匯出失敗，請確認伺服器有正常運行或網路連線正常。
錯誤：`+o.message,type:"alert"})}};export{O as exportProjectToHtml};
