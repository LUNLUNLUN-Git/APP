import{J as R,g as T,F as C,u as j}from"./index-D6igGmXy.js";const D=a=>new Promise((m,p)=>{const n=new FileReader;n.onloadend=()=>m(n.result),n.onerror=p,n.readAsDataURL(a)}),L=async a=>{var m,p,n,u,E;try{let o="";const g=t=>{try{return new URL(t,window.location.href).href}catch{return`./${t}`}};try{const t=await fetch(g("api/export-bundle"));if(t.ok)o=await t.text();else throw new Error("API Unavailable")}catch{console.log("API fallback, trying static asset from:",g("export-bundle.html"));try{const e=await fetch(g("export-bundle.html"));if(e.ok)o=await e.text();else throw new Error(`Static asset not found at ${g("export-bundle.html")}`)}catch(e){throw console.warn("Could not fetch server bundle or static asset:",e),new Error("無法取得匯出版樣板。如果您是使用 GitHub Pages，請確認 'export-bundle.html' 是否與 'index.html' 放在同一個資料夾內。")}}const i=new R,r=i.folder("config"),_=i.folder("assets/images");let w="";const y="<\/script>",S=`
// 專案設定與互動邏輯
window.__EXPORTED_PROJECT_DATA__ = ${JSON.stringify(a)};
window.__EXPORTED_IMAGES__ = {};
window.__IS_STANDALONE__ = true;
`;r==null||r.file("project-data.js",S),w+=`<script src="./config/project-data.js">${y}
`;const x=new Set,c=async(t,e)=>{if(t&&!x.has(t)){x.add(t);const s=await T(t);if(s){const l=await D(s),f=e.replace(/[^a-z0-9]/gi,"_").toLowerCase(),d=s.type==="image/png"?"png":"jpg",I=`${f}_${t.substring(0,4)}.${d}`;_==null||_.file(I,s);const $=`img_${f}_${t.substring(0,4)}.js`,B=`
// Image data: ${e}
window.__EXPORTED_IMAGES__['${t}'] = "${l}";
`;r==null||r.file($,B),w+=`<script src="./config/${$}">${y}
`}}};for(const t of a.scenes){await c(t.imageBlobId,`panorama_${t.name||"scene"}`),((m=t.bottomLogo)==null?void 0:m.type)==="image"&&await c(t.bottomLogo.imageBlobId,`logo_${t.name||"scene"}`);for(const e of t.hotspots||[])e.type==="image"&&e.customIconBlobId&&await c(e.customIconBlobId,`infopoint_${e.title||"image"}`)}for(const t of a.scenes){const e=(p=t.extensions)==null?void 0:p.find(d=>d.type==="utilities-floorplan"),s=(n=e==null?void 0:e.config)==null?void 0:n.floorplanBlobId;s&&await c(s,"floorplan");const l=(u=t.extensions)==null?void 0:u.find(d=>d.type==="utilities-avatar"),f=(E=l==null?void 0:l.config)==null?void 0:E.modelBlobId;f&&await c(f,"model_3d")}const h=o.lastIndexOf("</body>");let b=o;h!==-1?b=o.substring(0,h)+w+o.substring(h):b=o+w,i.file("index.html",b),i.file("README.txt",`如何檢視匯出的全景專案：

1. 解壓縮整個資料夾
2. 直接點擊「index.html」檔案來開啟專案。

※ 此版本為單機免伺服器版，內含高保真度的 React 應用程式與所有專案設定。
※ 「config」資料夾內包含所有互動邏輯與資訊點設定。
※ 「assets/images」資料夾內包含所有的環景圖影像資料。`);const A=await i.generateAsync({type:"blob"});C.saveAs(A,`${a.name||"project"}_export.zip`)}catch(o){console.error("Export error:",o),j.getState().showConfirm({title:"匯出失敗",message:`匯出失敗，請確認伺服器有正常運行或網路連線正常。
錯誤：`+o.message,type:"alert"})}};export{L as exportProjectToHtml};
