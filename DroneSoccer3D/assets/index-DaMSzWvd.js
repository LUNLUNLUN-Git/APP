(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Yd(){const i=new Map;let e=()=>{},t,n;function s(a){if(i.has(a)||a.multiple)return;const l=document.createElement("span");l.className="sci-select";const c=document.createElement("button");c.type="button",c.className="sci-select-trigger",c.setAttribute("role","combobox"),c.setAttribute("aria-haspopup","listbox"),c.setAttribute("aria-expanded","false");const h=document.createElement("span");h.className="sci-options",h.setAttribute("role","listbox"),h.id="options-"+(a.id||i.size),h.hidden=!0,c.setAttribute("aria-controls",h.id),a.insertAdjacentElement("afterend",l),l.append(c,h),a.classList.add("select-data"),a.tabIndex=-1,a.setAttribute("aria-hidden","true");const u=a.getAttribute("aria-label")||a.labels?.[0]?.childNodes[0]?.textContent?.trim()||"選擇";c.setAttribute("aria-label",u);const f=()=>{h.hidden=!0,c.setAttribute("aria-expanded","false"),t===l&&(t=void 0,n=void 0),h.parentElement!==l&&l.append(h)},d=()=>{const g=(a.selectedOptions[0]?.textContent||"請選擇")+" ⌄";c.textContent!==g&&(c.textContent=g),c.disabled!==a.disabled&&(c.disabled=a.disabled);const m=a.hidden||a.style.display==="none";l.hidden!==m&&(l.hidden=m)},v=()=>{e(),d(),h.replaceChildren();for(const x of Array.from(a.options)){const y=document.createElement("button");y.type="button",y.setAttribute("role","option"),y.setAttribute("aria-selected",String(x.selected)),y.textContent=x.text,y.disabled=x.disabled,y.onclick=_=>{_.preventDefault(),_.stopPropagation(),a.value=x.value,a.dispatchEvent(new Event("change",{bubbles:!0})),d(),f(),c.focus()},h.append(y)}(a.closest("dialog")||document.body).append(h),h.classList.toggle("light-options",!!a.closest(".setup-panel,.settings-panel,.analysis-panel,.review-panel-slot")),h.hidden=!1,c.setAttribute("aria-expanded","true"),e=f,t=l,n=h;const g=c.getBoundingClientRect();h.style.position="fixed";const m=Math.min(innerWidth-16,Math.max(g.width,180));h.style.width=m+"px",h.style.left=Math.max(8,Math.min(g.left,innerWidth-m-8))+"px",h.style.maxHeight=Math.min(280,innerHeight-24)+"px";const p=Math.min(280,h.scrollHeight);h.style.top=(innerHeight-g.bottom-8>=p?g.bottom+5:Math.max(8,g.top-p-5))+"px",h.querySelector('[aria-selected="true"]')?.focus()};c.onclick=g=>{g.preventDefault(),h.hidden?v():f()},l.onkeydown=g=>{if(["Escape","ArrowDown","ArrowUp","Home","End","Tab"," "].includes(g.key)&&g.stopPropagation(),g.key==="Escape")g.preventDefault(),f(),c.focus();else if(g.key==="Tab")f();else if(["ArrowDown","ArrowUp","Home","End"].includes(g.key)){if(g.preventDefault(),h.hidden){v();return}const m=Array.from(h.querySelectorAll("button:not(:disabled)"));let p=m.indexOf(document.activeElement);p=g.key==="Home"?0:g.key==="End"?m.length-1:(p+(g.key==="ArrowDown"?1:-1)+m.length)%m.length,m[p]?.focus()}},h.onkeydown=l.onkeydown,a.addEventListener("change",d),i.set(a,{host:l,button:c,sync:d}),d()}let r=!1;const o=()=>{r=!1,document.querySelectorAll("select").forEach(s);for(const[a,l]of i)a.isConnected?l.sync():(l.host.remove(),i.delete(a))};new MutationObserver(()=>{r||(r=!0,queueMicrotask(o))}).observe(document.body,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden","disabled","style"]}),document.addEventListener("pointerdown",a=>{t&&!t.contains(a.target)&&!n?.contains(a.target)&&(e(),a.stopPropagation())},!0),window.addEventListener("resize",()=>e()),document.addEventListener("scroll",a=>{a.target?.closest?.(".sci-options")||e()},!0),setInterval(()=>{for(const a of i.values())a.sync()},250),o()}const Ti={name:"UASART／以樂尼西 MIT 競賽款無刷馬達足球無人機",source:"https://uasart.com.tw/wurenjizuqiu-2/",video:"https://www.youtube.com/watch?v=YogDfonTDxI",checked:"2026-09-08",dimensions:{diameter:.22,height:.2,motorDiagonal:.106},specs:[["尺寸","直徑 220 mm × 高度 200 mm"],["軸距","106 mm"],["馬達","無刷 1507 · 4000KV"],["含電池重量","≤ 280 g（±5，原廠標示）"],["電池","4S 850／1100 mAh · 120C"],["續航","少於 6 分鐘"]]};function jd(){return`<section class="drone-spec"><h3>${Ti.name}</h3><p>原廠已確認 · 尺寸與性能資料</p><dl>${Ti.specs.map(([i,e])=>`<div><dt>${i}</dt><dd>${e}</dd></div>`).join("")}</dl><p><a href="${Ti.source}" target="_blank" rel="noopener noreferrer">原廠規格與外觀照片 ↗</a> · <a href="${Ti.video}" target="_blank" rel="noopener noreferrer">原廠頁面所列影片 ↗</a></p><p>結構推定：機架厚度、電池外形、飛控、固定件及配線依公開外觀合理重建，非原廠 CAD；純藍／純紅為模擬隊色。查核：${Ti.checked}，實品依出貨版本為準。</p></section>`}const oc={resolution:1.5,shadows:!0,reflection:.18,bloom:.18,dof:!1,people:!0,sensitivity:1,zoom:1,inertia:.12,cutaway:!0,cutawayRadius:.18};function Qo(i){return{...oc,resolution:i==="low"?1:i==="high"?2:1.5,shadows:i!=="low",reflection:i==="low"?0:.18,bloom:i==="low"?0:.18,dof:i==="high"}}function $d(i){const e={...oc};if(!i||typeof i!="object")return e;const t={resolution:[.75,2],reflection:[0,.35],bloom:[0,.5],sensitivity:[.3,2],zoom:[.3,2],inertia:[0,.3],cutawayRadius:[.12,.42]};for(const n of Object.keys(e)){const s=i[n];if(typeof e[n]=="boolean")typeof s=="boolean"&&(e[n]=s);else if(typeof s=="number"&&Number.isFinite(s)){const[r,o]=t[n];e[n]=Math.max(r,Math.min(o,s))}}return e}const Kc={stop:"M5 5h14v14H5Z",home:"M3 10 12 3l9 7M5 9v12h5v-7h4v7h5V9",book:"M12 5v16M12 5C8 2 3 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-1-1-6-2-10 1Z",duel:"m4 3 17 17M3 7l4-4M3 20l5-5m-1 6-4-4M20 3 3 20m14-17 4 4m-6 8 6 6",network:"M12 8v5m-6 3 6-3 6 3M9 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM3 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm12 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z",chip:"M5 5h14v14H5ZM9 9h6v6H9ZM8 2v3m8-3v3M8 19v3m8-3v3M2 8h3m-3 8h3m14-8h3m-3 8h3",drone:"M8 8l8 8m0-8-8 8M2 6a4 3 0 1 0 8 0 4 3 0 0 0-8 0Zm12 0a4 3 0 1 0 8 0 4 3 0 0 0-8 0ZM2 18a4 3 0 1 0 8 0 4 3 0 0 0-8 0Zm12 0a4 3 0 1 0 8 0 4 3 0 0 0-8 0Z",settings:"M4 7h16M4 17h16M8 4v6m8 4v6",play:"m8 4 12 8-12 8Z",pause:"M8 4v16m8-16v16",replay:"M4 9a8 8 0 1 1 1 9M4 3v6h6",arrow:"M4 12h16m-6-6 6 6-6 6",back:"M20 12H4m6-6-6 6 6 6",external:"M14 3h7v7m0-7L10 14M10 3H3v18h18v-7",close:"m5 5 14 14M19 5 5 19",target:"M3 12h18M12 3v18M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z",check:"m4 12 5 5L20 6",download:"M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",upload:"M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5"};function Zi(i){return'<svg class="ui-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+(Kc[i]??Kc.target)+'"/></svg>'}const Kd={"▶":"play","Ⅱ":"pause","↺":"replay","←":"back","→":"arrow","↗":"external","⚙":"settings","✣":"drone","✓":"check","×":"close","⏪":"back","⏩":"arrow","■":"stop"};function Zd(i=document){for(const e of i.querySelectorAll("button,a,.brand-icon,.loading-mark"))for(const t of Array.from(e.childNodes)){if(t.nodeType!==Node.TEXT_NODE)continue;const n=t.textContent??"";if(!/[▶Ⅱ↺←→↗⚙✣✓×⏪⏩■]/.test(n))continue;const s=document.createElement("span");s.innerHTML=n.replace(/[&<>]/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[r]).replace(/[▶Ⅱ↺←→↗⚙✣✓×⏪⏩■]/g,r=>Zi(Kd[r])),t.replaceWith(s)}}const pa=new WeakMap;let Ho;const Te=(i,e=document)=>e.querySelector(i),Er=(i,e=document)=>Array.from(e.querySelectorAll(i)),pi=()=>window.wingArena??{},ui=()=>location.hash.slice(1)||"home",il=()=>!!(pi().view?.reduced||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches),sl=[{key:"overview",label:"賽制總覽",title:"三人協作的立體競技",body:"每隊三架球形無人機，一架指定前鋒負責得分，另外兩架依戰術擔任助攻與守門。每局三分鐘、三局兩勝；本頁把正式規則拆成可觀察的空間與時間節點。",badge:"官方規格",visual:"arena",source:"教育部 115 年公開簡章",url:"https://b002.hwu.edu.tw/TKFile?FileId=19C0A7A1-14DD-4439-929F-1BB6722AD8C5"},{key:"field",label:"場地與尺寸",title:"6 × 3 × 3 公尺的安全場域",body:"場地以中線分成兩個半場，兩端各設球門、起飛區、防護網與操作員區。點選右側熱點可拉近到物件特寫，輪廓線會標出目前說明的對象。",badge:"官方規格",visual:"arena",target:"場地",source:"教育部 115 年公開簡章",url:"https://b002.hwu.edu.tw/TKFile?FileId=19C0A7A1-14DD-4439-929F-1BB6722AD8C5"},{key:"score",label:"得分與判例",title:"完整穿越，才算一次得分",body:"只有指定前鋒由己方半場朝對方球門正向完整穿越才得分。擦環、反向穿越與非前鋒穿越均不計分；得分後全隊回到己方半場，才可再次進攻。",badge:"官方規格＋判例示範",visual:"arena",target:"球門",source:"教育部 115 年公開簡章",url:"https://b002.hwu.edu.tw/TKFile?FileId=19C0A7A1-14DD-4439-929F-1BB6722AD8C5"},{key:"drone",label:"球機結構",title:"看懂球籠內的飛控與動力",body:"球機由有色防護球籠、四旋翼、機架、電池、飛控與識別燈組成。切換至球機拆解後才會顯示自動旋轉、拆解滑桿、直徑展示與模型匯出控制。",badge:"球機結構說明",visual:"model",source:"",url:""},{key:"flow",label:"流程與局間",title:"從準備、開賽到回場",body:"賽前確認席位與角色，倒數後進入三分鐘局。得分或局末會進入回場、局間或判罰流程；第三局後勝局數相同，依規則進入點球與黃金進球處理。",badge:"流程規則＋教學補充",visual:"arena",target:"中線",source:"教育部 115 年公開簡章",url:"https://b002.hwu.edu.tw/TKFile?FileId=19C0A7A1-14DD-4439-929F-1BB6722AD8C5"},{key:"safety",label:"安全與教學",title:"先理解，再把技巧帶進練習",body:"防護網與操作員區維持在場外，教學練習以球機卡位呈現防守，不把操作員放入競技場。亂流、碰撞與回復是教學模擬，並不宣稱實機校準精度。",badge:"教學設定",visual:"arena",target:"防護網",source:"翼競場教學補充設定",url:""}],Jd={overview:["每隊三架球機：指定前鋒負責得分，助攻與守門依戰術分工。","每局三分鐘，採三局兩勝；場次平手再依規則進入決勝流程。","得分後全隊回到己方半場，才重新取得進攻資格。"],field:["標準飛行空間為長 6 m、寬 3 m、高 3 m，中央中線分隔兩個半場。","兩端設球門與起飛區，四周防護網將球機、操作員與觀眾分開。","場景比例依教育部公開簡章製作，未公開細節以教學設定標示。"],score:["只有指定前鋒由己方半場朝對方球門正向完整穿越，才算有效得分。","擦環、反向穿越與非前鋒穿越都不計分，判定依完整球體越過開口。","進球後三架球機都要回到己方半場，途中再次穿門不會重複得分。"],drone:["球籠外徑 220 mm、高約 200 mm，模型維持 1:1 公尺比例，不以放大模型改變對戰物理。","球籠、四旋翼、機架、電池、飛控與識別燈是可分別編輯的部件。","公開資料未提供完整 CAD；內部安裝與桿件細節標為建模估計。"],flow:["賽前確認隊伍、角色與準備狀態，倒數後進入三分鐘局。","局末或得分後依回場狀態進入局間、判罰或下一局，角色在賽前與局間調整。","三局後勝局數相同，依版本規則進入點球與黃金進球處理。"],safety:["操作員與觀眾留在防護網外，場內只保留球機飛行與判定。","定點、亂流、碰撞與恢復是教學模擬，用來理解控制與風險。","模擬數據不宣稱實機校準精度，課堂使用仍應配合現場安全規範。"]},Qd={場地:"整個 6 × 3 × 3 m 飛行空間與中線分區。",球門:"內徑 40 cm、外徑約 70 cm；內緣底部離地 2 m。",中線:"得分後全隊回到己方半場，才可再次進攻。",起飛區:"底線中央的起飛準備位置，讓進場與回場更容易辨識。",防護網:"隔開球機、操作員和觀眾的安全包覆結構。",操作員區:"每端三位操作員在場外操控，不進入競技空間。"},Xe={view:null,lastPage:"",previewKind:"",practiceThumbCleanups:[]};function ef(){const i=Te("#review-layout"),e=Te("#stage");i&&e&&document.body.append(e),i&&i.remove(),document.body.classList.remove("review-active"),e?.classList.remove("review-stage"),Xe.reviewPoll&&window.clearInterval(Xe.reviewPoll),Xe.reviewPoll=void 0,Xe.reviewPanel=void 0}function Xs(){clearTimeout(Ho),Ho=void 0,Xe.previewKick&&window.clearInterval(Xe.previewKick),Xe.previewDirector&&window.clearInterval(Xe.previewDirector),Xe.previewKick=void 0,Xe.previewDirector=void 0,pi().view?.disableDroneHover?.(),pi().view?.setRuleOverviewSweep?.(!1),Xe.practiceThumbCleanups.splice(0).forEach(i=>i()),Xe.previewKind&&Te("#stage")?.classList.contains("preview")&&pi().terminateWorker?.(),Xe.previewKind=""}function wu(i){if(Xe.previewKind===i&&Xe.previewKick)return;Xe.previewKind&&Xe.previewKind!==i&&Xs(),Xe.previewKind=i;let e=0;const t=()=>{const n=pi().post;n&&(n("play"),e+=1),e>12&&Xe.previewKick&&(window.clearInterval(Xe.previewKick),Xe.previewKick=void 0)};t(),Xe.previewKick=window.setInterval(t,450)}function ac(){const i=Te("#stage"),e=Te("#stage-ui");i&&(i.classList.add("preview"),i.classList.remove("fullscreen"),i.dataset.preview="true"),e&&(e.style.display="none")}function tf(i,e,t){Xe.previewDirector&&window.clearInterval(Xe.previewDirector);let n=0;const s=ui(),r=()=>{if(!e.isConnected||ui()!==s||!e.contains(Te("#stage"))||!Te("#stage")?.classList.contains("preview")||Te("#loading-screen")||Te("#analysis-panel")){Xe.previewDirector&&clearInterval(Xe.previewDirector),Xe.previewDirector=void 0;return}if(i.automaticCameraAllowed===!1||il()||document.hidden||Te("dialog[open]"))return;const o=t[n++%t.length];i.setCameraPreset?.(o[0],o[1]),e.dataset.previewShot=o[0]+(o[1]===void 0?"":":"+o[1])};r(),Xe.previewDirector=il()?void 0:window.setInterval(r,6e3)}function nf(i){const e=Te("#hero-scene");if(e){if(e.dataset.uiPolished!=="1"&&(e.dataset.uiPolished="1",i.resetVisualState?.("arena","handoff"),i.setCameraPreset?.("front"),ac(),tf(i,e,[["front"],["orbit"],["follow",0],["follow",3],["follow",1],["overview"]])),Te("#stage")?.classList.contains("fullscreen")){Xs();return}wu("home")}}function sf(i){if(Te("#analysis-panel")||Te("#stage")?.classList.contains("review-stage"))return;const e=Te("#setup-scene");if(!e)return;const t=ui()==="ai";if(e.dataset.uiPolished!==ui()&&(e.dataset.uiPolished=ui(),i.resetVisualState?.(t?"tactical":"arena","handoff"),i.setCameraPreset?.(t?"tactical":"follow",0,!0),ac()),Te("#stage")?.classList.contains("fullscreen")){Xs(),t&&Eu(i);return}wu("setup-"+ui())}function rl(i){const e=Te("#lesson"),t=Qd[i];!e||!t||(e.hidden=!1,e.innerHTML='<span class="rule-hotspot-kicker">3D 對照</span><strong>'+i+"</strong><p>"+t+"</p>")}function Zc(i,e){const t=sl[i]??sl[0],n=Te("#rule-module-copy"),s=Te("#learn-scene");if(!n)return;const r=t.visual==="model",o=t.key+":"+t.visual,a=n.dataset.moduleId!==o,l=s?.closest(".split-view");s&&(s.dataset.ruleVisual=r?"model":"arena",s.classList.toggle("rule-model-view",r),s.classList.toggle("rule-arena-view",!r)),l&&(l.dataset.ruleLayout=r?"model":"arena"),Er("[data-rule-module]").forEach((d,v)=>{const g=v===i;d.classList.toggle("selected",g),d.setAttribute("aria-selected",String(g))});const c=Jd[t.key]??[];if(a&&(n.innerHTML='<span class="rule-badge">'+t.badge+'</span><small class="section-kicker">'+t.label+"</small><h2>"+t.title+'</h2><p class="rule-lede">'+t.body+'</p><ul class="rule-point-list">'+c.map(d=>"<li>"+d+"</li>").join("")+"</ul>"+(t.url?'<a class="source" href="'+t.url+'" target="_blank" rel="noopener">來源：'+t.source+" ↗</a>":""),n.dataset.moduleId=o,n.setAttribute("aria-live","polite")),[Te("#rotate"),Te("#model-export"),Te("#explode")?.parentElement,Te("#diameter")?.parentElement].forEach(d=>{d&&(d.classList.add("model-control"),d.toggleAttribute("hidden",!r))}),Te(".rule-model-controls")?.toggleAttribute("hidden",!r),s?.parentElement){let d=Te(".model-scale-note",s.parentElement);d||(d=document.createElement("p"),d.className="model-scale-note",s.parentElement.append(d)),d.textContent="實體比例 1:1 · Ø 220 mm · 高 200 mm · 軸距 106 mm",d.hidden=!r}const u=Te("#hotspot-buttons");u&&(u.hidden=r);const f=Te("#lesson");if(f&&(f.classList.add("rule-hotspot-note"),f.hidden=r||!t.target,!r&&t.target&&rl(t.target)),r&&!Te("#model-team")){const d=document.createElement("label");d.className="model-control",d.innerHTML='機身配色 <select id="model-team" aria-label="機身配色"><option value="0">藍隊</option><option value="1">紅隊</option><option value="2">中立展示</option></select>',Te("#rotate")?.parentElement?.append(d),Te("#model-team")?.addEventListener("change",v=>e.setModelTeam?.(Number(v.target.value)))}if(Te("#model-team")?.parentElement?.toggleAttribute("hidden",!r),r&&!Te("#model-parts")){const d=document.createElement("div");d.id="model-parts",d.className="button-row",d.setAttribute("aria-label","選取球機零件");for(const v of["球籠","四旋翼","機架","電池","飛控","識別燈"]){const g=document.createElement("button");g.className="quiet",g.textContent=v,g.onclick=()=>e.onPick?.(v),d.append(g)}Te(".rule-model-controls")?.after(d)}Te("#model-parts")?.toggleAttribute("hidden",!r),a&&(window.dispatchEvent(new Event("wing-scene-change")),r?(e.setModel?.(!0),e.setCameraPreset?.("model",void 0,!0)):(e.setModel?.(!1),t.key==="overview"?(e.setCameraPreset?.("ruleOverview",void 0,!0),e.setRuleOverviewSweep?.(!0)):t.key==="field"?(e.setRuleOverviewSweep?.(!1),e.setCameraPreset?.("ruleField",void 0,!0)):(e.setRuleOverviewSweep?.(!1),t.target&&t.target!=="場地"?e.focusHotspot?.(t.target):e.setCameraPreset?.("front",void 0,!0))))}function rf(i){const e=Te("#learn-scene");if(!e)return;const t=e.closest(".split-view"),n=e.parentElement,s=t?.querySelector("aside");if(!(!n||!s||!t)){if(n.dataset.uiPolished!=="1"){n.dataset.uiPolished="1",i.resetVisualState?.("arena","handoff"),i.setCameraPreset?.("front",void 0,!0),ac();const r=document.createElement("div");r.className="rule-modules",r.setAttribute("role","tablist"),r.innerHTML=sl.map((l,c)=>'<button type="button" role="tab" data-rule-module="'+c+'" aria-selected="'+(c===0?"true":"false")+'"><span>0'+(c+1)+"</span>"+l.label+"</button>").join(""),t.insertBefore(r,t.firstElementChild);const o=document.createElement("div");o.id="rule-module-copy",o.className="rule-module-copy",s.insertBefore(o,s.firstChild),r.querySelectorAll("[data-rule-module]").forEach((l,c)=>l.addEventListener("click",()=>{n.dataset.ruleIndex=String(c),Zc(c,i),l.scrollIntoView({behavior:il()?"auto":"smooth",inline:"center",block:"nearest"})})),Te("#hotspot-buttons")?.addEventListener("click",l=>{const c=l.target.closest("[data-hot]");if(!c)return;const h=c.dataset.hot??"";rl(h),i.focusHotspot?.(h),i.setHotspotOutline?.(h)}),!pa.has(i)&&i.onPick&&pa.set(i,i.onPick),i.onPick=l=>{if(ui()==="learn")if(pa.get(i)?.(l),i.showModel){i.highlight?.(l);const c=Te("#lesson");c&&(c.hidden=!1)}else rl(l),i.focusHotspot?.(l)},Er("[data-demo]").forEach(l=>{l.dataset.uiDemo!=="1"&&(l.dataset.uiDemo="1",l.addEventListener("click",()=>{i.setCameraPreset?.("front",void 0,!0),i.setHotspotOutline?.("球門"),i.setHoveredDrone?.(Number(l.dataset.demo)===2?1:0),clearTimeout(Ho),Ho=window.setTimeout(()=>{ui()==="learn"&&!i.showModel&&(i.setHotspotOutline?.(),i.setHoveredDrone?.())},6500)}))})}n.dataset.ruleIndex||(n.dataset.ruleIndex="0"),Zc(Number(n.dataset.ruleIndex),i)}}function of(i){const e=Te(".course-grid");e&&Er(".course",e).forEach(t=>{if(t.dataset.uiPolished==="1")return;const s=Te("[data-course]",t)?.dataset.course??"hover";t.dataset.uiPolished="1";const r=document.createElement("div");r.className="course-preview";const o=document.createElement("canvas");o.className="course-preview-canvas",o.setAttribute("aria-hidden","true"),o.tabIndex=-1,r.append(o),t.insertBefore(r,t.firstChild),window.requestAnimationFrame(()=>{const a=i.renderPracticeThumbnail?.(o,s);a&&Xe.practiceThumbCleanups.push(a)})})}function Eu(i){const e=Te("#tactical-drawer");if(!(!e||!e.querySelector(".drawer-title"))){if(!e.querySelector("[data-label-toggle]")){const t=document.createElement("label");t.dataset.labelToggle="1",t.className="drone-label-toggle",t.innerHTML='<input id="show-drone-labels" type="checkbox" checked> 顯示球機名稱',e.querySelector(".drawer-title")?.insertAdjacentElement("afterend",t),Te("#show-drone-labels",e)?.addEventListener("change",n=>i.setDroneLabels?.(n.target.checked))}i.setDroneLabels?.(!0),i.enableDroneHover?.(),Te("#stage")?.classList.contains("fullscreen")&&(Te("#play")?.toggleAttribute("hidden",!0),Te("#step")?.toggleAttribute("hidden",!0),Tu("tactical-playback"))}}function Tu(i=""){const e=Te(".review-stage .transport")??Te("#stage .transport");if(!e||e.querySelector(".review-playback"))return;const t=document.createElement("div");t.className="review-playback"+(i?" "+i:""),t.innerHTML='<span class="review-control-label">重播控制</span><div class="review-playback-row"><button type="button" data-review-action="replay" class="primary" aria-label="重播" title="重播">↺</button><button type="button" data-review-action="stop" aria-label="停止" title="停止">■</button><button type="button" id="review-toggle-play" data-review-action="toggle" data-playing="false" aria-label="播放" title="播放">▶</button><button type="button" data-review-action="back" aria-label="後退五秒" title="後退五秒">⏪</button><button type="button" data-review-action="forward" aria-label="前進五秒" title="前進五秒">⏩</button></div>';const n=e.querySelector(".timeline");n?.before(t),n||e.prepend(t),t.querySelectorAll("[data-review-action]").forEach(s=>s.addEventListener("click",()=>{const r=pi().post,o=Te("#timeline"),a=Number(o?.max??1),l=Number(o?.value??0),c=s.dataset.reviewAction;if(r)if(c==="replay")r("seek",{index:0}),r("play");else if(c==="stop")r("seek",{index:0}),r("pause");else if(c==="toggle"){const h=s.dataset.playing!=="true";s.dataset.playing=String(h),s.textContent=h?"Ⅱ":"▶",s.setAttribute("aria-label",h?"暫停":"播放"),s.title=h?"暫停":"播放",r(h?"play":"pause")}else c==="forward"?r("seek",{index:Math.min(a,l+300)}):c==="back"&&r("seek",{index:Math.max(0,l-300)})}))}function af(i){const e=Te("#analysis-panel"),t=Te("#stage");if(!e||!t)return;if(Te("#close-results")?.remove(),Te("#auto-camera")?.closest("label")?.remove(),e.classList.remove("collapsed"),Te(".drawer-title",e),!Te("#review-layout")){const a=document.createElement("div");a.id="review-layout",a.className="review-layout",a.innerHTML='<div class="review-stage-slot"></div><aside class="review-panel-slot"></aside>',document.body.append(a)}const s=Te("#review-layout"),r=Te(".review-stage-slot",s),o=Te(".review-panel-slot",s);if(!(!s||!r||!o)){if(t.parentElement!==r&&r.append(t),e.parentElement!==o&&o.append(e),document.body.classList.add("review-active"),t.classList.remove("fullscreen","preview"),t.classList.add("review-stage"),t.style.display="block",Te("#stage-ui")?.style.setProperty("display",""),Er("#stage-ui .game-top, #stage-ui .game-message, #stage-ui .minimap-wrap, #stage-ui .flight-readout, #stage-ui #practice-hud, #stage-ui .camera-bar, #stage-ui .drawer").forEach(a=>a.classList.add("review-hide")),Er("#play, #step, #finish").forEach(a=>{a.hidden=!0}),t.classList.contains("free-match")&&(Te("#play")?.removeAttribute("hidden"),Te("#finish")?.removeAttribute("hidden"),Te("#step")?.setAttribute("hidden","")),Te("#speed")?.removeAttribute("hidden"),Te("#replay-start")?.remove(),Tu(),e.dataset.reviewEnhanced!=="1"){e.dataset.reviewEnhanced="1";const a=Te("#path-to");a&&(e.dataset.userPathEnd=a.value),a?.addEventListener("input",()=>{e.dataset.userPathEnd=a.value}),Xe.reviewPanel=e,Xe.reviewPoll&&window.clearInterval(Xe.reviewPoll),Xe.reviewPoll=window.setInterval(()=>{if(!document.body.contains(e)){Xe.reviewPoll&&window.clearInterval(Xe.reviewPoll),Xe.reviewPoll=void 0;return}const l=Te("#timeline"),c=Te("#path-to");if(!l||!c)return;const h=Number(l.value)/60,u=Number(e.dataset.userPathEnd??c.value),f=Math.max(0,Math.min(Number.isFinite(u)?u:h,h));Math.abs(Number(c.value)-f)>.01&&(c.value=f.toFixed(1),c.dispatchEvent(new Event("change",{bubbles:!0})))},120)}e.dataset.cameraInitialized!=="1"&&(e.dataset.cameraInitialized="1",i.setCameraPreset?.("reviewFront",void 0,!0))}}function lf(){const i=Te("#loading-screen");if(!i)return;const e=Te("h1",i),t=!!(e&&/即將起飛|起飛！/.test(e.textContent??""));i.classList.toggle("countdown-only",t)}function lc(){Zd();const i=Xe.view??pi().view;if(!i)return;const e=ui(),t=Te("#stage");Xe.lastPage&&Xe.lastPage!==e&&Xs(),Xe.lastPage=e,lf(),Te("#analysis-panel")&&af(i),e==="home"?nf(i):e==="learn"?rf(i):e==="practice"?of(i):e==="solo"||e==="ai"?sf(i):t?.classList.contains("fullscreen")&&Eu(i)}function Au(){Xe.enhanceTimer||(Xe.enhanceTimer=window.setTimeout(()=>{Xe.enhanceTimer=void 0,lc()},30))}window.addEventListener("wing-scene-change",Xs);window.addEventListener("wing-view-ready",i=>{Xe.view=i.detail??pi().view,Au()});window.addEventListener("hashchange",()=>{pi().terminateWorker?.(),ef(),Xs(),Xe.lastPage="",window.setTimeout(lc,20)});document.body&&new MutationObserver(e=>{e.some(n=>{const s=n.target;return(s instanceof Element?s:s?.parentElement)?.closest?.("#loading-screen")||s?.id==="content"||s?.id==="analysis-panel"||s?.id==="tactical-drawer"||s?.id==="rule-demos"||s?.id==="hotspot-buttons"||Array.from(n.addedNodes).some(o=>o.id==="loading-screen"||o.id==="analysis-panel")})&&Au()}).observe(document.body,{childList:!0,subtree:!0,characterData:!0});window.setTimeout(lc,0);const ea="180",Ds={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cf=0,Jc=1,hf=2,Cu=1,Ru=2,li=3,Qn=0,ln=1,zt=2,In=0,Ls=1,Tr=2,Qc=3,eh=4,uf=5,Xi=100,df=101,ff=102,pf=103,mf=104,gf=200,vf=201,_f=202,xf=203,ol=204,al=205,yf=206,Mf=207,bf=208,Sf=209,wf=210,Ef=211,Tf=212,Af=213,Cf=214,ll=0,cl=1,hl=2,Us=3,ul=4,dl=5,fl=6,pl=7,cc=0,Rf=1,Pf=2,Pi=0,Pu=1,Du=2,Lu=3,hc=4,Iu=5,Uu=6,Nu=7,Fu=300,Ns=301,Fs=302,ml=303,gl=304,ta=306,Ar=1e3,Ai=1001,Vo=1002,en=1003,Ou=1004,hr=1005,bn=1006,Ro=1007,Ci=1008,ei=1009,Bu=1010,zu=1011,Cr=1012,uc=1013,Ji=1014,Kn=1015,Wt=1016,dc=1017,fc=1018,Rr=1020,ku=35902,Hu=35899,Vu=1021,Gu=1022,Sn=1023,Pr=1026,Dr=1027,pc=1028,mc=1029,Wu=1030,gc=1031,vc=1033,Po=33776,Do=33777,Lo=33778,Io=33779,vl=35840,_l=35841,xl=35842,yl=35843,Ml=36196,bl=37492,Sl=37496,wl=37808,El=37809,Tl=37810,Al=37811,Cl=37812,Rl=37813,Pl=37814,Dl=37815,Ll=37816,Il=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,Bl=36492,zl=36494,kl=36495,Hl=36283,Vl=36284,Gl=36285,Wl=36286,Df=2300,Lf=2301,If=3200,_c=3201,xc=0,Uf=1,hi="",Ft="srgb",Os="srgb-linear",Go="linear",mt="srgb",rs=7680,th=519,Nf=512,Ff=513,Of=514,Xu=515,Bf=516,zf=517,kf=518,Hf=519,Xl=35044,Vf=35048,nh="300 es",Zn=2e3,Wo=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const gr=Math.PI/180,Bs=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function yc(i,e){return(i%e+e)%e}function Gf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wf(i,e,t){return i!==e?(t-i)/(e-i):0}function vr(i,e,t){return(1-t)*i+t*e}function Xf(i,e,t,n){return vr(i,e,1-Math.exp(-t*n))}function qf(i,e=1){return e-Math.abs(yc(i,e*2)-e)}function Yf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $f(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kf(i,e){return i+Math.random()*(e-i)}function Zf(i){return i*(.5-Math.random())}function Jf(i){i!==void 0&&(ih=i);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qf(i){return i*gr}function ep(i){return i*Bs}function tp(i){return(i&i-1)===0&&i!==0}function np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xo={DEG2RAD:gr,RAD2DEG:Bs,generateUUID:Jn,clamp:et,euclideanModulo:yc,mapLinear:Gf,inverseLerp:Wf,lerp:vr,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:jf,randInt:$f,randFloat:Kf,randFloatSpread:Zf,seededRandom:Jf,degToRad:Qf,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:gt,denormalize:Vn};class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=g;return}if(u!==g||l!==f||c!==d||h!==v){let m=1-a;const p=l*f+c*d+h*v+u*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),A=Math.atan2(E,p*x);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const _=a*x;if(l=l*m+f*_,c=c*m+d*_,h=h*m+v*_,u=u*m+g*_,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],v=r[o+3];return e[t]=a*v+h*u+l*d-c*f,e[t+1]=l*v+h*f+c*u-a*d,e[t+2]=c*v+h*d+a*f-l*u,e[t+3]=h*v-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"YZX":this._x=f*h*u+c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u-f*d*v;break;case"XZY":this._x=f*h*u-c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,n=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new S,sh=new Xn;class Qe{constructor(e,t,n,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],v=n[8],g=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],E=s[2],A=s[5],T=s[8];return r[0]=o*g+a*x+l*E,r[3]=o*m+a*y+l*A,r[6]=o*p+a*_+l*T,r[1]=c*g+h*x+u*E,r[4]=c*m+h*y+u*A,r[7]=c*p+h*_+u*T,r[2]=f*g+d*x+v*E,r[5]=f*m+d*y+v*A,r[8]=f*p+d*_+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,v=t*u+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=f*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Qe;function qu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rp(){const i=qo("canvas");return i.style.display="block",i}const rh={};function Lr(i){i in rh||(rh[i]=!0,console.warn(i))}function op(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const oh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ap(){const i={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Os]:{primaries:e,whitePoint:n,transfer:Go,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const ht=ap();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let os;class Yu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=qo("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class na{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;const _a=new S;class qt extends is{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Ai,s=Ai,r=bn,o=Ci,a=Sn,l=ei,c=qt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Jn(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Fu;qt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(d+1)/2,E=(p+1)/2,A=(h+f)/4,T=(u+g)/4,R=(v+m)/4;return y>_&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=T/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=R/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(u-g)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new qt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new na(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lt extends hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ju extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),jr.subVectors(this.max,$s),as.subVectors(e.a,$s),ls.subVectors(e.b,$s),cs.subVectors(e.c,$s),yi.subVectors(ls,as),Mi.subVectors(cs,ls),Oi.subVectors(as,cs);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Oi.z,Oi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Oi.z,0,-Oi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Oi.y,Oi.x,0];return!xa(t,as,ls,cs,jr)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,as,ls,cs,jr))?!1:($r.crossVectors(yi,Mi),t=[$r.x,$r.y,$r.z],xa(t,as,ls,cs,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new S,new S,new S,new S,new S,new S,new S,new S],Fn=new S,Yr=new xi,as=new S,ls=new S,cs=new S,yi=new S,Mi=new S,Oi=new S,$s=new S,jr=new S,$r=new S,Bi=new S;function xa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const dp=new xi,Ks=new S,ya=new S;class qs{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(ya)),this.expandByPoint(Ks.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new S,Ma=new S,Kr=new S,bi=new S,ba=new S,Zr=new S,Sa=new S;class kr{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ma.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=bi.dot(this.direction),l=-bi.dot(Kr),c=bi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,v;if(h>0)if(u=o*l-a,f=o*a-l,v=r*h,u>=0)if(f>=-v)if(f<=v){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ma).addScaledVector(Kr,f),d}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){ba.subVectors(t,e),Zr.subVectors(n,e),Sa.crossVectors(ba,Zr);let o=this.direction.dot(Sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Zr.crossVectors(bi,Zr));if(l<0)return null;const c=a*this.direction.dot(ba.cross(bi));if(c<0||l+c>o)return null;const h=-a*bi.dot(Sa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,v,g,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,v,g,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,v=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,v=c*h,g=c*u;t[0]=f+g*a,t[4]=v*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-v,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,v=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,v=a*h,g=a*u;t[0]=l*h,t[4]=v*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=v*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+v,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,d=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-v,t[2]=v*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Si.crossVectors(n,vn),Si.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Si.crossVectors(n,vn)),Si.normalize(),Jr.crossVectors(vn,Si),s[0]=Si.x,s[4]=Jr.x,s[8]=vn.x,s[1]=Si.y,s[5]=Jr.y,s[9]=vn.y,s[2]=Si.z,s[6]=Jr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],v=n[2],g=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],E=n[15],A=s[0],T=s[4],R=s[8],w=s[12],M=s[1],D=s[5],I=s[9],O=s[13],z=s[2],H=s[6],G=s[10],Z=s[14],X=s[3],re=s[7],pe=s[11],be=s[15];return r[0]=o*A+a*M+l*z+c*X,r[4]=o*T+a*D+l*H+c*re,r[8]=o*R+a*I+l*G+c*pe,r[12]=o*w+a*O+l*Z+c*be,r[1]=h*A+u*M+f*z+d*X,r[5]=h*T+u*D+f*H+d*re,r[9]=h*R+u*I+f*G+d*pe,r[13]=h*w+u*O+f*Z+d*be,r[2]=v*A+g*M+m*z+p*X,r[6]=v*T+g*D+m*H+p*re,r[10]=v*R+g*I+m*G+p*pe,r[14]=v*w+g*O+m*Z+p*be,r[3]=x*A+y*M+_*z+E*X,r[7]=x*T+y*D+_*H+E*re,r[11]=x*R+y*I+_*G+E*pe,r[15]=x*w+y*O+_*Z+E*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],v=e[12],g=e[13],m=e[14],p=e[15],x=u*m*c-g*f*c+g*l*d-a*m*d-u*l*p+a*f*p,y=v*f*c-h*m*c-v*l*d+o*m*d+h*l*p-o*f*p,_=h*g*c-v*u*c+v*a*d-o*g*d-h*a*p+o*u*p,E=v*u*l-h*g*l-v*a*f+o*g*f+h*a*m-o*u*m,A=t*x+n*y+s*_+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(g*f*r-u*m*r-g*s*d+n*m*d+u*s*p-n*f*p)*T,e[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*p+n*l*p)*T,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*T,e[4]=y*T,e[5]=(h*m*r-v*f*r+v*s*d-t*m*d-h*s*p+t*f*p)*T,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*p-t*l*p)*T,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*T,e[8]=_*T,e[9]=(v*u*r-h*g*r-v*n*d+t*g*d+h*n*p-t*u*p)*T,e[10]=(o*g*r-v*a*r+v*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*T,e[12]=E*T,e[13]=(h*g*s-v*u*s+v*n*f-t*g*f-h*n*m+t*u*m)*T,e[14]=(v*a*s-o*g*s-v*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,v=r*u,g=o*h,m=o*u,p=a*u,x=l*c,y=l*h,_=l*u,E=n.x,A=n.y,T=n.z;return s[0]=(1-(g+p))*E,s[1]=(d+_)*E,s[2]=(v-y)*E,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(f+p))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(v+y)*T,s[9]=(m-x)*T,s[10]=(1-(f+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);const c=1/r,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Zn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let v,g;if(l)v=r/(o-r),g=o*r/(o-r);else if(a===Zn)v=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wo)v=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let v,g;if(l)v=1/(o-r),g=o/(o-r);else if(a===Zn)v=-2/(o-r),g=-(o+r)/(o-r);else if(a===Wo)v=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new S,On=new ot,fp=new S(0,0,0),pp=new S(1,1,1),Si=new S,Jr=new S,vn=new S,lh=new ot,ch=new Xn;class qn{constructor(e=0,t=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const hh=new S,us=new Xn,ri=new ot,Qr=new S,Zs=new S,gp=new S,vp=new Xn,uh=new S(1,0,0),dh=new S(0,1,0),fh=new S(0,0,1),ph={type:"added"},_p={type:"removed"},ds={type:"childadded",child:null},wa={type:"childremoved",child:null};class Et extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new S,t=new qn,n=new Xn,s=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Qe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(dh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return hh.copy(e).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(dh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Zs,Qr,this.up):ri.lookAt(Qr,Zs,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ri),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new S(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new S,oi=new S,Ea=new S,ai=new S,fs=new S,ps=new S,mh=new S,Ta=new S,Aa=new S,Ca=new S,Ra=new pt,Pa=new pt,Da=new pt;class Ln{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),oi.subVectors(n,t),Ea.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(oi),l=Bn.dot(Ea),c=oi.dot(oi),h=oi.dot(Ea),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ra.setScalar(0),Pa.setScalar(0),Da.setScalar(0),Ra.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),oi.subVectors(e,t),Bn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,n),ps.subVectors(r,n),Ta.subVectors(e,n);const l=fs.dot(Ta),c=ps.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,s);const h=fs.dot(Aa),u=ps.dot(Aa);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(fs,o);Ca.subVectors(e,r);const d=fs.dot(Ca),v=ps.dot(Ca);if(v>=0&&d<=v)return t.copy(r);const g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(ps,a);const m=h*v-d*u;if(m<=0&&u-h>=0&&d-v>=0)return mh.subVectors(r,s),a=(u-h)/(u-h+(d-v)),t.copy(s).addScaledVector(mh,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=yc(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=La(o,r,e+1/3),this.g=La(o,r,e),this.b=La(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=$u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ht.workingToColorSpace(Zt.copy(this),e),Math.round(et(Zt.r*255,0,255))*65536+Math.round(et(Zt.g*255,0,255))*256+Math.round(et(Zt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ft){ht.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(eo);const n=vr(wi.h,eo.h,t),s=vr(wi.s,eo.s,t),r=vr(wi.l,eo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ie;Ie.NAMES=$u;let xp=0;class Li extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Ls,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fn extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new S,to=new $;let yp=0;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),e}}class Ku extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zu extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mp=0;const Rn=new ot,Ia=new Et,ms=new S,_n=new xi,Js=new xi,Vt=new S;class wt extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?Zu:Ku)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(_n.min,Js.min),_n.expandByPoint(Vt),Vt.addVectors(_n.max,Js.max),_n.expandByPoint(Vt)):(_n.expandByPoint(Js.min),_n.expandByPoint(Js.max))}_n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Vt.add(ms)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new S,l[R]=new S;const c=new S,h=new S,u=new S,f=new $,d=new $,v=new $,g=new S,m=new S;function p(R,w,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,w),v.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),v.sub(f);const D=1/(d.x*v.y-v.x*d.y);isFinite(D)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(D),a[R].add(g),a[w].add(g),a[M].add(g),l[R].add(m),l[w].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,w=x.length;R<w;++R){const M=x[R],D=M.start,I=M.count;for(let O=D,z=D+I;O<z;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new S,_=new S,E=new S,A=new S;function T(R){E.fromBufferAttribute(s,R),A.copy(E);const w=a[R];y.copy(w),y.sub(E.multiplyScalar(E.dot(w))).normalize(),_.crossVectors(A,w);const D=_.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,D)}for(let R=0,w=x.length;R<w;++R){const M=x[R],D=M.start,I=M.count;for(let O=D,z=D+I;O<z;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)f[v++]=c[d++]}return new Rt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new ot,zi=new kr,no=new qs,vh=new S,io=new S,so=new S,ro=new S,Ua=new S,oo=new S,_h=new S,ao=new S;class _e extends Et{constructor(e=new wt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ua.fromBufferAttribute(u,e),o?oo.addScaledVector(Ua,h):oo.addScaledVector(Ua.sub(t),h))}t.add(oo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(no.containsPoint(zi.origin)===!1&&(zi.intersectSphere(no,vh)===null||zi.origin.distanceToSquared(vh)>(e.far-e.near)**2))&&(gh.copy(r).invert(),zi.copy(e.ray).applyMatrix4(gh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,E=y;_<E;_+=3){const A=a.getX(_),T=a.getX(_+1),R=a.getX(_+2);s=lo(this,p,e,n,c,h,u,A,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=lo(this,o,e,n,c,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,E=y;_<E;_+=3){const A=_,T=_+1,R=_+2;s=lo(this,p,e,n,c,h,u,A,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const x=m,y=m+1,_=m+2;s=lo(this,o,e,n,c,h,u,x,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bp(i,e,t,n,s,r,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Qn,a),l===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:i}}function lo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,io),i.getVertexPosition(l,so),i.getVertexPosition(c,ro);const h=bp(i,e,t,n,io,so,ro,_h);if(h){const u=new S;Ln.getBarycoord(_h,io,so,ro,u),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,l,c,u,new $)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,l,c,u,new $)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new S,materialIndex:0};Ln.getNormal(io,so,ro,f.normal),h.face=f,h.barycoord=u}return h}class Nn extends wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function v(g,m,p,x,y,_,E,A,T,R,w){const M=_/T,D=E/R,I=_/2,O=E/2,z=A/2,H=T+1,G=R+1;let Z=0,X=0;const re=new S;for(let pe=0;pe<G;pe++){const be=pe*D-O;for(let Oe=0;Oe<H;Oe++){const $e=Oe*M-I;re[g]=$e*x,re[m]=be*y,re[p]=z,c.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[p]=A>0?1:-1,h.push(re.x,re.y,re.z),u.push(Oe/T),u.push(1-pe/R),Z+=1}}for(let pe=0;pe<R;pe++)for(let be=0;be<T;be++){const Oe=f+be+H*pe,$e=f+be+H*(pe+1),at=f+(be+1)+H*(pe+1),lt=f+(be+1)+H*pe;l.push(Oe,$e,lt),l.push($e,at,lt),X+=6}a.addGroup(d,X,w),d+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=zs(i[t]);for(const s in n)e[s]=n[s]}return e}function Sp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const gi={clone:zs,merge:sn};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qu extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new S,xh=new $,yh=new $;class Qt extends Qu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,xh,yh),t.subVectors(yh,xh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,vs=1;class Tp extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(gs,vs,e,t);s.layers=this.layers,this.add(s);const r=new Qt(gs,vs,e,t);r.layers=this.layers,this.add(r);const o=new Qt(gs,vs,e,t);o.layers=this.layers,this.add(o);const a=new Qt(gs,vs,e,t);a.layers=this.layers,this.add(a);const l=new Qt(gs,vs,e,t);l.layers=this.layers,this.add(l);const c=new Qt(gs,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ed extends qt{constructor(e=[],t=Ns,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ap extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ed(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:In});r.uniforms.tEquirect.value=t;const o=new _e(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=bn),new Tp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class nt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cp={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new bc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ir extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new S;class Yo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class td extends Li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const Qs=new S,xs=new S,ys=new S,Ms=new $,er=new $,nd=new ot,co=new S,tr=new S,ho=new S,Mh=new $,Fa=new $,bh=new $;class Pp extends Et{constructor(e=new td){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rp(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Yo(n,3,0,!1)),_s.setAttribute("uv",new Yo(n,2,3,!1))}this.geometry=_s,this.material=e,this.center=new $(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;uo(co.set(-.5,-.5,0),ys,o,xs,s,r),uo(tr.set(.5,-.5,0),ys,o,xs,s,r),uo(ho.set(.5,.5,0),ys,o,xs,s,r),Mh.set(0,0),Fa.set(1,0),bh.set(1,1);let a=e.ray.intersectTriangle(co,tr,ho,!1,Qs);if(a===null&&(uo(tr.set(-.5,.5,0),ys,o,xs,s,r),Fa.set(0,1),a=e.ray.intersectTriangle(co,ho,tr,!1,Qs),a===null))return;const l=e.ray.origin.distanceTo(Qs);l<e.near||l>e.far||t.push({distance:l,point:Qs.clone(),uv:Ln.getInterpolation(Qs,co,tr,ho,Mh,Fa,bh,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function uo(i,e,t,n,s,r){Ms.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(er.x=r*Ms.x-s*Ms.y,er.y=s*Ms.x+r*Ms.y):er.copy(Ms),i.copy(e),i.x+=er.x,i.y+=er.y,i.applyMatrix4(nd)}class Dp extends qt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,h=en,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new ot,Sh=new ot,fo=[],wh=new xi,Lp=new ot,nr=new _e,ir=new qs;class $i extends _e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),wh.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),ir.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),Sh.multiplyMatrices(n,bs),nr.matrixWorld=Sh,nr.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dp(new Float32Array(s*this.count),s,this.count,pc,Kn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oa=new S,Ip=new S,Up=new Qe;class ci{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Oa.subVectors(n,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Up.getNormalMatrix(e),s=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new qs,Np=new $(.5,.5),po=new S;class Sc{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],v=r[8],g=r[9],m=r[10],p=r[11],x=r[12],y=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,p-v,E-x).normalize(),s[1].setComponents(c+o,d+h,p+v,E+x).normalize(),s[2].setComponents(c+a,d+u,p+g,E+y).normalize(),s[3].setComponents(c-a,d-u,p-g,E-y).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,d-f,p-m,E-_).normalize();else if(s[4].setComponents(c-l,d-f,p-m,E-_).normalize(),t===Zn)s[5].setComponents(c+l,d+f,p+m,E+_).normalize();else if(t===Wo)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Np.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ur extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jo=new S,$o=new S,Eh=new ot,sr=new kr,mo=new qs,Ba=new S,Th=new S;class Nr extends Et{constructor(e=new wt,t=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)jo.fromBufferAttribute(t,s-1),$o.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=jo.distanceTo($o);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Eh.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=d,m=v-1;g<m;g+=c){const p=h.getX(g),x=h.getX(g+1),y=go(this,e,sr,l,p,x,g);y&&t.push(y)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(d),p=go(this,e,sr,l,g,m,v-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=d,m=v-1;g<m;g+=c){const p=go(this,e,sr,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=go(this,e,sr,l,v-1,d,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function go(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(jo.fromBufferAttribute(a,s),$o.fromBufferAttribute(a,r),t.distanceSqToSegment(jo,$o,Ba,Th)>n)return;Ba.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ba);if(!(c<e.near||c>e.far))return{distance:c,point:Th.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class za extends qt{constructor(e,t,n,s,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Qi extends qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class id extends qt{constructor(e,t,n=Ji,s,r,o,a=en,l=en,c,h=Pr,u=1){if(h!==Pr&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sd extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ia extends wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,v=n*2+r,g=s+1,m=new S,p=new S;for(let x=0;x<=v;x++){let y=0,_=0,E=0,A=0;if(x<=n){const w=x/n,M=w*Math.PI/2;_=-h-e*Math.cos(M),E=e*Math.sin(M),A=-e*Math.cos(M),y=w*u}else if(x<=n+r){const w=(x-n)/r;_=-h+w*t,E=e,A=0,y=u+w*f}else{const w=(x-n-r)/n,M=w*Math.PI/2;_=h+e*Math.sin(M),E=e*Math.cos(M),A=e*Math.sin(M),y=u+f+w*u}const T=Math.max(0,Math.min(1,y/d));let R=0;x===0?R=.5/s:x===v&&(R=-.5/s);for(let w=0;w<=s;w++){const M=w/s,D=M*Math.PI*2,I=Math.sin(D),O=Math.cos(D);p.x=-E*O,p.y=_,p.z=E*I,a.push(p.x,p.y,p.z),m.set(-E*O,A,E*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+R,T)}if(x>0){const w=(x-1)*g;for(let M=0;M<s;M++){const D=w+M,I=w+M+1,O=x*g+M,z=x*g+M+1;o.push(D,I,O),o.push(I,z,O)}}}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class cn extends wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let v=0;const g=[],m=n/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function x(){const _=new S,E=new S;let A=0;const T=(t-e)/n;for(let R=0;R<=r;R++){const w=[],M=R/r,D=M*(t-e)+e;for(let I=0;I<=s;I++){const O=I/s,z=O*l+a,H=Math.sin(z),G=Math.cos(z);E.x=D*H,E.y=-M*n+m,E.z=D*G,u.push(E.x,E.y,E.z),_.set(H,T,G).normalize(),f.push(_.x,_.y,_.z),d.push(O,1-M),w.push(v++)}g.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){const M=g[w][R],D=g[w+1][R],I=g[w+1][R+1],O=g[w][R+1];(e>0||w!==0)&&(h.push(M,D,O),A+=3),(t>0||w!==r-1)&&(h.push(D,I,O),A+=3)}c.addGroup(p,A,0),p+=A}function y(_){const E=v,A=new $,T=new S;let R=0;const w=_===!0?e:t,M=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),v++;const D=v;for(let I=0;I<=s;I++){const z=I/s*l+a,H=Math.cos(z),G=Math.sin(z);T.x=w*G,T.y=m*M,T.z=w*H,u.push(T.x,T.y,T.z),f.push(0,M,0),A.x=H*.5+.5,A.y=G*.5*M+.5,d.push(A.x,A.y),v++}for(let I=0;I<s;I++){const O=E+I,z=D+I;_===!0?h.push(z,z+1,O):h.push(z+1,z,O),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wc extends cn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ec extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new S,_=new S,E=new S;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],_),d(t[A+2],E),l(y,_,E,x)}function l(x,y,_,E){const A=E+1,T=[];for(let R=0;R<=A;R++){T[R]=[];const w=x.clone().lerp(_,R/A),M=y.clone().lerp(_,R/A),D=A-R;for(let I=0;I<=D;I++)I===0&&R===A?T[R][I]=w:T[R][I]=w.clone().lerp(M,I/D)}for(let R=0;R<A;R++)for(let w=0;w<2*(A-R)-1;w++){const M=Math.floor(w/2);w%2===0?(f(T[R][M+1]),f(T[R+1][M]),f(T[R][M])):(f(T[R][M+1]),f(T[R+1][M+1]),f(T[R+1][M]))}}function c(x){const y=new S;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const x=new S;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const _=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;o.push(_,1-E)}v(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],_=o[x+2],E=o[x+4],A=Math.max(y,_,E),T=Math.min(y,_,E);A>.9&&T<.1&&(y<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,y){const _=x*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function v(){const x=new S,y=new S,_=new S,E=new S,A=new $,T=new $,R=new $;for(let w=0,M=0;w<r.length;w+=9,M+=6){x.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),E.copy(x).add(y).add(_).divideScalar(3);const D=m(E);g(A,M+0,x,D),g(T,M+2,y,D),g(R,M+4,_,D)}}function g(x,y,_,E){E<0&&x.x===1&&(o[y]=x.x-1),_.x===0&&_.z===0&&(o[y]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.vertices,e.indices,e.radius,e.details)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new $:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new S,s=[],r=[],o=[],a=new S,l=new ot;for(let d=0;d<=e;d++){const v=d/e;s[d]=this.getTangentAt(v,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,v))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tc extends ti{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fp extends Tc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ac(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const vo=new S,ka=new Ac,Ha=new Ac,Va=new Ac;class Yl extends ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new S){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),c=vo);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),ka.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,g,m),Ha.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,g,m),Va.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,g,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ha.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Va.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ka.calc(l),Ha.calc(l),Va.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ah(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Op(i,e){const t=1-i;return t*t*e}function Bp(i,e){return 2*(1-i)*i*e}function zp(i,e){return i*i*e}function _r(i,e,t,n){return Op(i,e)+Bp(i,t)+zp(i,n)}function kp(i,e){const t=1-i;return t*t*t*e}function Hp(i,e){const t=1-i;return 3*t*t*i*e}function Vp(i,e){return 3*(1-i)*i*i*e}function Gp(i,e){return i*i*i*e}function xr(i,e,t,n,s){return kp(i,e)+Hp(i,t)+Vp(i,n)+Gp(i,s)}class rd extends ti{constructor(e=new $,t=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new $){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wp extends ti{constructor(e=new S,t=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new S){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y),xr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class od extends ti{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xp extends ti{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ad extends ti{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends ti{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y),_r(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ah(a,l.x,c.x,h.x,u.x),Ah(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new $().fromArray(s))}return this}}var Ko=Object.freeze({__proto__:null,ArcCurve:Fp,CatmullRomCurve3:Yl,CubicBezierCurve:rd,CubicBezierCurve3:Wp,EllipseCurve:Tc,LineCurve:od,LineCurve3:Xp,QuadraticBezierCurve:ad,QuadraticBezierCurve3:ld,SplineCurve:cd});class qp extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}}class Ch extends qp{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new od(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ad(this.currentPoint.clone(),new $(e,t),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new rd(this.currentPoint.clone(),new $(e,t),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new cd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Tc(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hd extends Ch{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ch().fromJSON(s))}return this}}function Yp(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=ud(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Jp(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=i[f],v=i[f+1];d<a&&(a=d),v<l&&(l=v),d>h&&(h=d),v>u&&(u=v)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Fr(r,o,t,a,l,c,0),o}function ud(i,e,t,n,s){let r;if(s===cm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Rh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Rh(o/n|0,i[o],i[o+1],r);return r&&ks(r,r.next)&&(Br(r),r=r.next),r}function es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ks(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&im(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?$p(i,n,s,r):jp(i)){e.push(l.i,i.i,c.i),Br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Kp(es(i),e),Fr(i,e,t,n,s,r,2)):o===2&&Zp(i,e,t,n,s,r):Fr(es(i),e,t,n,s,r,1);break}}}function jp(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=d&&ur(s,a,r,l,o,c,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function $p(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),v=Math.min(h,u,f),g=Math.max(a,l,c),m=Math.max(h,u,f),p=jl(d,v,e,t,n),x=jl(g,m,e,t,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==o&&ur(a,h,l,u,c,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=v&&_.y<=m&&_!==s&&_!==o&&ur(a,h,l,u,c,f,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==o&&ur(a,h,l,u,c,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=g&&_.y>=v&&_.y<=m&&_!==s&&_!==o&&ur(a,h,l,u,c,f,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Kp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ks(n,s)&&fd(n,t,t.next,s)&&Or(n,s)&&Or(s,n)&&(e.push(n.i,t.i,s.i),Br(t),Br(t.next),t=i=s),t=t.next}while(t!==i);return es(t)}function Zp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&om(o,a)){let l=pd(o,a);o=es(o,o.next),l=es(l,l.next),Fr(o,e,t,n,s,r,0),Fr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Jp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ud(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(rm(c))}s.sort(Qp);for(let r=0;r<s.length;r++)t=em(s[r],t);return t}function Qp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function em(i,e){const t=tm(i,e);if(!t)return e;const n=pd(t,i);return es(n,n.next),es(t,t.next)}function tm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(ks(i,t))return t;do{if(ks(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&dd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Or(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&nm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function nm(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function im(i,e,t,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sm(s)}function sm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function jl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function dd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ur(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&dd(i,e,t,n,s,r,o,a)}function om(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!am(i,e)&&(Or(i,e)&&Or(e,i)&&lm(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||ks(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ks(i,e){return i.x===e.x&&i.y===e.y}function fd(i,e,t,n){const s=xo(Ct(i,e,t)),r=xo(Ct(i,e,n)),o=xo(Ct(t,n,i)),a=xo(Ct(t,n,e));return!!(s!==r&&o!==a||s===0&&_o(i,t,e)||r===0&&_o(i,n,e)||o===0&&_o(t,i,n)||a===0&&_o(t,e,n))}function _o(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xo(i){return i>0?1:i<0?-1:0}function am(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function lm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pd(i,e){const t=$l(i.i,i.x,i.y),n=$l(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rh(i,e,t,n){const s=$l(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class hm{static triangulate(e,t,n=2){return Yp(e,t,n)}}class As{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return As.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ph(e),Dh(n,e);let o=e.length;t.forEach(Ph);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Dh(n,t[l]);const a=hm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ph(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Dh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Cc extends wt{constructor(e=new hd([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:um;let y,_=!1,E,A,T,R;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,E=p.computeFrenetFrames(h,!1),A=new S,T=new S,R=new S),f||(m=0,d=0,v=0,g=0);const w=a.extractPoints(c);let M=w.shape;const D=w.holes;if(!As.isClockWise(M)){M=M.reverse();for(let ne=0,J=D.length;ne<J;ne++){const te=D[ne];As.isClockWise(te)&&(D[ne]=te.reverse())}}function O(ne){const te=10000000000000001e-36;let ee=ne[0];for(let me=1;me<=ne.length;me++){const oe=me%ne.length,ge=ne[oe],Ye=ge.x-ee.x,We=ge.y-ee.y,P=Ye*Ye+We*We,b=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(ee.x),Math.abs(ee.y)),k=te*b*b;if(P<=k){ne.splice(oe,1),me--;continue}ee=ge}}O(M),D.forEach(O);const z=D.length,H=M;for(let ne=0;ne<z;ne++){const J=D[ne];M=M.concat(J)}function G(ne,J,te){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(J,te)}const Z=M.length;function X(ne,J,te){let ee,me,oe;const ge=ne.x-J.x,Ye=ne.y-J.y,We=te.x-ne.x,P=te.y-ne.y,b=ge*ge+Ye*Ye,k=ge*P-Ye*We;if(Math.abs(k)>Number.EPSILON){const Y=Math.sqrt(b),se=Math.sqrt(We*We+P*P),j=J.x-Ye/Y,Ue=J.y+ge/Y,fe=te.x-P/se,Pe=te.y+We/se,De=((fe-j)*P-(Pe-Ue)*We)/(ge*P-Ye*We);ee=j+ge*De-ne.x,me=Ue+Ye*De-ne.y;const ae=ee*ee+me*me;if(ae<=2)return new $(ee,me);oe=Math.sqrt(ae/2)}else{let Y=!1;ge>Number.EPSILON?We>Number.EPSILON&&(Y=!0):ge<-Number.EPSILON?We<-Number.EPSILON&&(Y=!0):Math.sign(Ye)===Math.sign(P)&&(Y=!0),Y?(ee=-Ye,me=ge,oe=Math.sqrt(b)):(ee=ge,me=Ye,oe=Math.sqrt(b/2))}return new $(ee/oe,me/oe)}const re=[];for(let ne=0,J=H.length,te=J-1,ee=ne+1;ne<J;ne++,te++,ee++)te===J&&(te=0),ee===J&&(ee=0),re[ne]=X(H[ne],H[te],H[ee]);const pe=[];let be,Oe=re.concat();for(let ne=0,J=z;ne<J;ne++){const te=D[ne];be=[];for(let ee=0,me=te.length,oe=me-1,ge=ee+1;ee<me;ee++,oe++,ge++)oe===me&&(oe=0),ge===me&&(ge=0),be[ee]=X(te[ee],te[oe],te[ge]);pe.push(be),Oe=Oe.concat(be)}let $e;if(m===0)$e=As.triangulateShape(H,D);else{const ne=[],J=[];for(let te=0;te<m;te++){const ee=te/m,me=d*Math.cos(ee*Math.PI/2),oe=v*Math.sin(ee*Math.PI/2)+g;for(let ge=0,Ye=H.length;ge<Ye;ge++){const We=G(H[ge],re[ge],oe);de(We.x,We.y,-me),ee===0&&ne.push(We)}for(let ge=0,Ye=z;ge<Ye;ge++){const We=D[ge];be=pe[ge];const P=[];for(let b=0,k=We.length;b<k;b++){const Y=G(We[b],be[b],oe);de(Y.x,Y.y,-me),ee===0&&P.push(Y)}ee===0&&J.push(P)}}$e=As.triangulateShape(ne,J)}const at=$e.length,lt=v+g;for(let ne=0;ne<Z;ne++){const J=f?G(M[ne],Oe[ne],lt):M[ne];_?(T.copy(E.normals[0]).multiplyScalar(J.x),A.copy(E.binormals[0]).multiplyScalar(J.y),R.copy(y[0]).add(T).add(A),de(R.x,R.y,R.z)):de(J.x,J.y,0)}for(let ne=1;ne<=h;ne++)for(let J=0;J<Z;J++){const te=f?G(M[J],Oe[J],lt):M[J];_?(T.copy(E.normals[ne]).multiplyScalar(te.x),A.copy(E.binormals[ne]).multiplyScalar(te.y),R.copy(y[ne]).add(T).add(A),de(R.x,R.y,R.z)):de(te.x,te.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){const J=ne/m,te=d*Math.cos(J*Math.PI/2),ee=v*Math.sin(J*Math.PI/2)+g;for(let me=0,oe=H.length;me<oe;me++){const ge=G(H[me],re[me],ee);de(ge.x,ge.y,u+te)}for(let me=0,oe=D.length;me<oe;me++){const ge=D[me];be=pe[me];for(let Ye=0,We=ge.length;Ye<We;Ye++){const P=G(ge[Ye],be[Ye],ee);_?de(P.x,P.y+y[h-1].y,y[h-1].x+te):de(P.x,P.y,u+te)}}}K(),V();function K(){const ne=s.length/3;if(f){let J=0,te=Z*J;for(let ee=0;ee<at;ee++){const me=$e[ee];xe(me[2]+te,me[1]+te,me[0]+te)}J=h+m*2,te=Z*J;for(let ee=0;ee<at;ee++){const me=$e[ee];xe(me[0]+te,me[1]+te,me[2]+te)}}else{for(let J=0;J<at;J++){const te=$e[J];xe(te[2],te[1],te[0])}for(let J=0;J<at;J++){const te=$e[J];xe(te[0]+Z*h,te[1]+Z*h,te[2]+Z*h)}}n.addGroup(ne,s.length/3-ne,0)}function V(){const ne=s.length/3;let J=0;Q(H,J),J+=H.length;for(let te=0,ee=D.length;te<ee;te++){const me=D[te];Q(me,J),J+=me.length}n.addGroup(ne,s.length/3-ne,1)}function Q(ne,J){let te=ne.length;for(;--te>=0;){const ee=te;let me=te-1;me<0&&(me=ne.length-1);for(let oe=0,ge=h+m*2;oe<ge;oe++){const Ye=Z*oe,We=Z*(oe+1),P=J+ee+Ye,b=J+me+Ye,k=J+me+We,Y=J+ee+We;Fe(P,b,k,Y)}}}function de(ne,J,te){l.push(ne),l.push(J),l.push(te)}function xe(ne,J,te){Ke(ne),Ke(J),Ke(te);const ee=s.length/3,me=x.generateTopUV(n,s,ee-3,ee-2,ee-1);L(me[0]),L(me[1]),L(me[2])}function Fe(ne,J,te,ee){Ke(ne),Ke(J),Ke(ee),Ke(J),Ke(te),Ke(ee);const me=s.length/3,oe=x.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);L(oe[0]),L(oe[1]),L(oe[3]),L(oe[1]),L(oe[2]),L(oe[3])}function Ke(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function L(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return dm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ko[s.type]().fromJSON(s)),new Cc(n,e.options)}}const um={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new $(r,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],v=e[s*3+2],g=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-u),new $(f,1-v),new $(g,1-p)]:[new $(a,1-l),new $(h,1-u),new $(d,1-v),new $(m,1-p)]}};function dm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rc extends Ec{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rc(e.radius,e.detail)}}class Pc extends wt{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new S,f=new $,d=new S,v=new S,g=new S;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(v)}for(let x=0;x<=t;x++){const y=n+x*h*s,_=Math.sin(y),E=Math.cos(y);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*_,u.y=e[A].y,u.z=e[A].x*E,o.push(u.x,u.y,u.z),f.x=x/t,f.y=A/(e.length-1),a.push(f.x,f.y);const T=l[3*A+0]*_,R=l[3*A+1],w=l[3*A+0]*E;c.push(T,R,w)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const _=y+x*e.length,E=_,A=_+e.length,T=_+e.length+1,R=_+1;r.push(E,A,R),r.push(T,R,A)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.points,e.segments,e.phiStart,e.phiLength)}}class Ot extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*f-o;for(let y=0;y<c;y++){const _=y*u-r;v.push(_,-x,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),E=x+1+c*(p+1),A=x+1+c*p;d.push(y,_,A),d.push(_,E,A)}this.setIndex(d),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hr extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,d=new S,v=new $;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/t+1)/2,v.y=(d.y/t+1)/2,h.push(v.x,v.y)}u+=f}for(let g=0;g<s;g++){const m=g*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,_=x+n+1,E=x+n+2,A=x+1;a.push(y,_,A),a.push(_,E,A)}}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gn extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new S,f=new S,d=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),v.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(A+_,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=h[p][x+1],_=h[p][x],E=h[p+1][x],A=h[p+1][x+1];(p!==0||o>0)&&d.push(y,_,A),(p!==n-1||l<Math.PI)&&d.push(_,E,A)}this.setIndex(d),this.setAttribute("position",new it(v,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wn extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new S,u=new S,f=new S;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const g=v/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const g=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,x=(s+1)*d+v;o.push(g,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zo extends wt{constructor(e=new ld(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new $;let h=new S;const u=[],f=[],d=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function g(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),x(),p()}function m(y){h=e.getPointAt(y/t,h);const _=o.normals[y],E=o.binormals[y];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,R=Math.sin(T),w=-Math.cos(T);l.x=w*_.x+R*E.x,l.y=w*_.y+R*E.y,l.z=w*_.z+R*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){const E=(s+1)*(y-1)+(_-1),A=(s+1)*y+(_-1),T=(s+1)*y+_,R=(s+1)*(y-1)+_;v.push(E,A,R),v.push(A,T,R)}}function x(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zo(new Ko[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fm extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Un extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pm extends Li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dc extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mm extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sa extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class md extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new ot,Lh=new S,Ih=new S;class Lc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lh),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gm extends Lc{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vm extends sa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uh=new ot,rr=new S,Wa=new S;class _m extends Lc{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,n.coordinateSystem,n.reversedDepth)}}class xm extends sa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _m}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ic extends Qu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ym extends Lc{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yr extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new ym}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mm extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Uc="\\[\\]\\.:\\/",bm=new RegExp("["+Uc+"]","g"),Nc="[^"+Uc+"]",Sm="[^"+Uc.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Em=/(WCOD+)?/.source.replace("WCOD",Sm),Tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Cm=new RegExp("^"+wm+Em+Tm+Am+"$"),Rm=["material","materials","bones","map"];class Pm{constructor(e,t,n){const s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(e){const t=Cm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Pm;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Nh=new ot;class Dm{constructor(e,t,n=0,s=1/0){this.ray=new kr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nh),this}intersectObject(e,t=!0,n=[]){return Kl(e,this,n,t),n.sort(Fh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kl(e[s],this,n,t);return n.sort(Fh),n}}function Fh(i,e){return i.distance-e.distance}function Kl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Kl(r[o],e,t,!0)}}class Oh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bh=new S;let yo,Xa;class Lm extends Et{constructor(e=new S(0,0,1),t=new S(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",yo===void 0&&(yo=new wt,yo.setAttribute("position",new it([0,0,0,0,1,0],3)),Xa=new wc(.5,1,5,1),Xa.translate(0,-.5,0)),this.position.copy(t),this.line=new Nr(yo,new Ur({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _e(Xa,new fn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Bh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Bh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Im extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function zh(i,e,t,n){const s=Um(n);switch(t){case Vu:return i*e;case pc:return i*e/s.components*s.byteLength;case mc:return i*e/s.components*s.byteLength;case Wu:return i*e*2/s.components*s.byteLength;case gc:return i*e*2/s.components*s.byteLength;case Gu:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case vc:return i*e*4/s.components*s.byteLength;case Po:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:case yl:return Math.max(i,16)*Math.max(e,8)/4;case vl:case xl:return Math.max(i,8)*Math.max(e,8)/2;case Ml:case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bl:case zl:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(i){switch(i){case ei:case Bu:return{byteLength:1,components:1};case Cr:case zu:case Wt:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case Ji:case uc:case Kn:return{byteLength:4,components:1};case ku:case Hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);function vd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nm(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],g=u[d];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Fm,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Hm,aomap_fragment:Vm,aomap_pars_fragment:Gm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:jm,iridescence_fragment:$m,bumpmap_pars_fragment:Km,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:C0,envmap_vertex:_0,fog_vertex:x0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:b0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:w0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:P0,lights_phong_fragment:D0,lights_phong_pars_fragment:L0,lights_physical_fragment:I0,lights_physical_pars_fragment:U0,lights_fragment_begin:N0,lights_fragment_maps:F0,lights_fragment_end:O0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:H0,map_fragment:V0,map_pars_fragment:G0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:j0,morphcolor_vertex:$0,morphnormal_vertex:K0,morphtarget_pars_vertex:Z0,morphtarget_vertex:J0,normal_fragment_begin:Q0,normal_fragment_maps:eg,normal_pars_fragment:tg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:dg,dithering_fragment:fg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:_g,shadowmap_vertex:xg,shadowmask_pars_fragment:yg,skinbase_vertex:Mg,skinning_pars_vertex:bg,skinning_vertex:Sg,skinnormal_vertex:wg,specularmap_fragment:Eg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Cg,transmission_fragment:Rg,transmission_pars_fragment:Pg,uv_pars_fragment:Dg,uv_pars_vertex:Lg,uv_vertex:Ig,worldpos_vertex:Ug,background_vert:Ng,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:kg,depth_vert:Hg,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:jg,meshbasic_vert:$g,meshbasic_frag:Kg,meshlambert_vert:Zg,meshlambert_frag:Jg,meshmatcap_vert:Qg,meshmatcap_frag:ev,meshnormal_vert:tv,meshnormal_frag:nv,meshphong_vert:iv,meshphong_frag:sv,meshphysical_vert:rv,meshphysical_frag:ov,meshtoon_vert:av,meshtoon_frag:lv,points_vert:cv,points_frag:hv,shadow_vert:uv,shadow_frag:dv,sprite_vert:fv,sprite_frag:pv},ye={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},jn={basic:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:sn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:sn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:sn([ye.points,ye.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:sn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:sn([ye.common,ye.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:sn([ye.sprite,ye.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:sn([ye.common,ye.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:sn([ye.lights,ye.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};jn.physical={uniforms:sn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Mo={r:0,b:0,g:0},Hi=new qn,mv=new ot;function gv(i,e,t,n,s,r,o){const a=new Ie(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function v(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function g(y){let _=!1;const E=v(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){const E=v(_);E&&(E.isCubeTexture||E.mapping===ta)?(h===void 0&&(h=new _e(new Nn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:zs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(_.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Hi)),h.material.toneMapped=ht.getTransfer(E.colorSpace)!==mt,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new _e(new Ot(2,2),new bt({name:"BackgroundMaterial",uniforms:zs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ht.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Mo,Ju(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,_,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:g,addToRenderList:m,dispose:x}}function vv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,D,I,O,z){let H=!1;const G=u(O,I,D);r!==G&&(r=G,c(r.object)),H=d(M,O,I,z),H&&v(M,O,I,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(M,D,I,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,I){const O=I.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let H=z[D.id];H===void 0&&(H={},z[D.id]=H);let G=H[O];return G===void 0&&(G=f(l()),H[O]=G),G}function f(M){const D=[],I=[],O=[];for(let z=0;z<t;z++)D[z]=0,I[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,D,I,O){const z=r.attributes,H=D.attributes;let G=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){const pe=z[X];let be=H[X];if(be===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),pe===void 0||pe.attribute!==be||be&&pe.data!==be.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function v(M,D,I,O){const z={},H=D.attributes;let G=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){let pe=H[X];pe===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const be={};be.attribute=pe,pe&&pe.data&&(be.data=pe.data),z[X]=be,G++}r.attributes=z,r.attributesNum=G,r.index=O}function g(){const M=r.newAttributes;for(let D=0,I=M.length;D<I;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const I=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;I[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),z[M]!==D&&(i.vertexAttribDivisor(M,D),z[M]=D)}function x(){const M=r.newAttributes,D=r.enabledAttributes;for(let I=0,O=D.length;I<O;I++)D[I]!==M[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function y(M,D,I,O,z,H,G){G===!0?i.vertexAttribIPointer(M,D,I,z,H):i.vertexAttribPointer(M,D,I,O,z,H)}function _(M,D,I,O){g();const z=O.attributes,H=I.getAttributes(),G=D.defaultAttributeValues;for(const Z in H){const X=H[Z];if(X.location>=0){let re=z[Z];if(re===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const pe=re.normalized,be=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;const $e=Oe.buffer,at=Oe.type,lt=Oe.bytesPerElement,K=at===i.INT||at===i.UNSIGNED_INT||re.gpuType===uc;if(re.isInterleavedBufferAttribute){const V=re.data,Q=V.stride,de=re.offset;if(V.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,V.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let xe=0;xe<X.locationSize;xe++)y(X.location+xe,be/X.locationSize,at,pe,Q*lt,(de+be/X.locationSize*xe)*lt,K)}else{if(re.isInstancedBufferAttribute){for(let V=0;V<X.locationSize;V++)p(X.location+V,re.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let V=0;V<X.locationSize;V++)m(X.location+V);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let V=0;V<X.locationSize;V++)y(X.location+V,be/X.locationSize,at,pe,be*lt,be/X.locationSize*V*lt,K)}}else if(G!==void 0){const pe=G[Z];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(X.location,pe);break;case 3:i.vertexAttrib3fv(X.location,pe);break;case 4:i.vertexAttrib4fv(X.location,pe);break;default:i.vertexAttrib1fv(X.location,pe)}}}}x()}function E(){R();for(const M in n){const D=n[M];for(const I in D){const O=D[I];for(const z in O)h(O[z].object),delete O[z];delete D[I]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const I in D){const O=D[I];for(const z in O)h(O[z].object),delete O[z];delete D[I]}delete n[M.id]}function T(M){for(const D in n){const I=n[D];if(I[M.id]===void 0)continue;const O=I[M.id];for(const z in O)h(O[z].object),delete O[z];delete I[M.id]}}function R(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function _v(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let v=0;v<u;v++)d+=h[v];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*f[g];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function yv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ci,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;l.value=_,_=h(v,f,y,d);for(let E=0;E!==y;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==g;++y,_+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Mv(i){let e=new WeakMap;function t(o,a){return a===ml?o.mapping=Ns:a===gl&&(o.mapping=Fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ml||a===gl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ap(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Cs=4,kh=[.125,.215,.35,.446,.526,.582],qi=20,qa=new Ic,Hh=new Ie;let Ya=null,ja=0,$a=0,Ka=!1;const Wi=(1+Math.sqrt(5))/2,Ss=1/Wi,Vh=[new S(-Wi,Ss,0),new S(Wi,Ss,0),new S(-Ss,0,Wi),new S(Ss,0,Wi),new S(0,Wi,-Ss),new S(0,Wi,Ss),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],bv=new S;class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=bv}=r;Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,ja,$a),this._renderer.xr.enabled=Ka,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Wt,format:Sn,colorSpace:Os,depthBuffer:!1},s=Gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=wv(r,e,t)}return s}_compileMaterial(e){const t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,s,r){const l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Hh),u.toneMapping=Pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const g=new fn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new _e(new Nn,g);let p=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(Hh),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const E=this._cubeSize;bo(s,_*E,y>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ns||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vh[(s-r-1)%Vh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _e(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let x=0;for(let T=0;T<qi;++T){const R=T/g,w=Math.exp(-R*R/2);p.push(w),T===0?x+=w:T<m&&(x+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const _=this._sizeLods[s],E=3*_*(s>y-Cs?s-y+Cs:0),A=4*(this._cubeSize-_);bo(t,E,A,3*_,2*_),l.setRenderTarget(t),l.render(u,qa)}}function Sv(i){const e=[],t=[],n=[];let s=i;const r=i-Cs+1+kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Cs?l=kh[o-i+Cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,v=6,g=3,m=2,p=1,x=new Float32Array(g*v*d),y=new Float32Array(m*v*d),_=new Float32Array(p*v*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,R=A>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(w,g*v*A),y.set(f,m*v*A);const M=[A,A,A,A,A,A];_.set(M,p*v*A)}const E=new wt;E.setAttribute("position",new Rt(x,g)),E.setAttribute("uv",new Rt(y,m)),E.setAttribute("faceIndex",new Rt(_,p)),e.push(E),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gh(i,e,t){const n=new Lt(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wv(i,e,t){const n=new Float32Array(qi),s=new S(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Wh(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Xh(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ev(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ml||l===gl,h=l===Ns||l===Fs;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Zl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Zl(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Av(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,v=u.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let y=0,_=x.length;y<_;y+=3){const E=x[y+0],A=x[y+1],T=x[y+2];f.push(E,A,A,T,T,E)}}else if(v!==void 0){const x=v.array;g=v.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const E=y+0,A=y+1,T=y+2;f.push(E,A,A,T,T,E)}}else return;const m=new(qu(f)?Zu:Ku)(f,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*o,v),t.update(d,n,v))}function h(f,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];t.update(m,n,1)}function u(f,d,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,v);let p=0;for(let x=0;x<v;x++)p+=d[x]*g[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pv(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let _=a.attributes.position.count*y,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*E*4*u),T=new ju(A,_,E,u);T.type=Kn,T.needsUpdate=!0;const R=y*4;for(let M=0;M<u;M++){const D=m[M],I=p[M],O=x[M],z=_*E*4*M;for(let H=0;H<D.count;H++){const G=H*R;d===!0&&(s.fromBufferAttribute(D,H),A[z+G+0]=s.x,A[z+G+1]=s.y,A[z+G+2]=s.z,A[z+G+3]=0),v===!0&&(s.fromBufferAttribute(I,H),A[z+G+4]=s.x,A[z+G+5]=s.y,A[z+G+6]=s.z,A[z+G+7]=0),g===!0&&(s.fromBufferAttribute(O,H),A[z+G+8]=s.x,A[z+G+9]=s.y,A[z+G+10]=s.z,A[z+G+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new $(_,E)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const v=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Dv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const _d=new qt,qh=new id(1,1),xd=new ju,yd=new up,Md=new ed,Yh=[],jh=[],$h=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function Ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Fv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),Ht(t,n)}}function Ov(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),Ht(t,n)}}function Bv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),Ht(t,n)}}function zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Yv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qh.compareFunction=Xu,r=qh):r=_d,t.setTexture2D(e||r,s)}function jv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yd,s)}function $v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Md,s)}function Kv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xd,s)}function Zv(i){switch(i){case 5126:return Lv;case 35664:return Iv;case 35665:return Uv;case 35666:return Nv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Kv}}function Jv(i,e){i.uniform1fv(this.addr,e)}function Qv(i,e){const t=Ys(e,this.size,2);i.uniform2fv(this.addr,t)}function e_(i,e){const t=Ys(e,this.size,3);i.uniform3fv(this.addr,t)}function t_(i,e){const t=Ys(e,this.size,4);i.uniform4fv(this.addr,t)}function n_(i,e){const t=Ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i_(i,e){const t=Ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s_(i,e){const t=Ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r_(i,e){i.uniform1iv(this.addr,e)}function o_(i,e){i.uniform2iv(this.addr,e)}function a_(i,e){i.uniform3iv(this.addr,e)}function l_(i,e){i.uniform4iv(this.addr,e)}function c_(i,e){i.uniform1uiv(this.addr,e)}function h_(i,e){i.uniform2uiv(this.addr,e)}function u_(i,e){i.uniform3uiv(this.addr,e)}function d_(i,e){i.uniform4uiv(this.addr,e)}function f_(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_d,r[o])}function p_(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yd,r[o])}function m_(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Md,r[o])}function g_(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xd,r[o])}function v_(i){switch(i){case 5126:return Jv;case 35664:return Qv;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zv(t.type)}}class x_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}}class y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function M_(i,e,t){const n=i.name,s=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),o=Za.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jh(t,c===void 0?new __(a,i,e):new x_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new y_(a),Jh(t,u)),t=u}}}class Uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);M_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Qh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const b_=37297;let S_=0;function w_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const eu=new Qe;function E_(i){ht._getMatrix(eu,ht.workingColorSpace,i);const e=`mat3( ${eu.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Go:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+w_(i.getShaderSource(e),a)}else return r}function T_(i,e){const t=E_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A_(i,e){let t;switch(e){case Pu:t="Linear";break;case Du:t="Reinhard";break;case Lu:t="Cineon";break;case hc:t="ACESFilmic";break;case Uu:t="AgX";break;case Nu:t="Neutral";break;case Iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const So=new S;function C_(){ht.getLuminanceCoefficients(So);const i=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function P_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function dr(i){return i!==""}function nu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(L_,U_)}const I_=new Map;function U_(i,e){let t=tt[e];if(t===void 0){const n=I_.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}const N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(N_,F_)}function F_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ru(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function B_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Fs:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fs&&(e="ENVMAP_MODE_REFRACTION"),e}function k_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case Pf:e="ENVMAP_BLENDING_ADD";break}return e}function H_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=O_(t),c=B_(t),h=z_(t),u=k_(t),f=H_(t),d=R_(t),v=P_(r),g=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Jl(o),o=nu(o,t),o=iu(o,t),a=Jl(a),a=nu(a,t),a=iu(a,t),o=su(o),a=su(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,_=x+p+a,E=Qh(s,s.VERTEX_SHADER,y),A=Qh(s,s.FRAGMENT_SHADER,_);s.attachShader(g,E),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(D){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(E)||"",z=s.getShaderInfoLog(A)||"",H=I.trim(),G=O.trim(),Z=z.trim();let X=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,A);else{const pe=tu(s,E,"vertex"),be=tu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+pe+`
`+be)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||Z==="")&&(re=!1);re&&(D.diagnostics={runnable:X,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(E),s.deleteShader(A),R=new Uo(s,g),w=D_(s,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,b_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let G_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X_(e),t.set(e,n)),n}}class X_{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}}function q_(i,e,t,n,s,r,o){const a=new Mc,l=new W_,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,D,I,O){const z=I.fog,H=O.geometry,G=w.isMeshStandardMaterial?I.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),X=Z&&Z.mapping===ta?Z.image.height:null,re=v[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,be=pe!==void 0?pe.length:0;let Oe=0;H.morphAttributes.position!==void 0&&(Oe=1),H.morphAttributes.normal!==void 0&&(Oe=2),H.morphAttributes.color!==void 0&&(Oe=3);let $e,at,lt,K;if(re){const ft=jn[re];$e=ft.vertexShader,at=ft.fragmentShader}else $e=w.vertexShader,at=w.fragmentShader,l.update(w),lt=l.getVertexShaderID(w),K=l.getFragmentShaderID(w);const V=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),de=O.isInstancedMesh===!0,xe=O.isBatchedMesh===!0,Fe=!!w.map,Ke=!!w.matcap,L=!!Z,ne=!!w.aoMap,J=!!w.lightMap,te=!!w.bumpMap,ee=!!w.normalMap,me=!!w.displacementMap,oe=!!w.emissiveMap,ge=!!w.metalnessMap,Ye=!!w.roughnessMap,We=w.anisotropy>0,P=w.clearcoat>0,b=w.dispersion>0,k=w.iridescence>0,Y=w.sheen>0,se=w.transmission>0,j=We&&!!w.anisotropyMap,Ue=P&&!!w.clearcoatMap,fe=P&&!!w.clearcoatNormalMap,Pe=P&&!!w.clearcoatRoughnessMap,De=k&&!!w.iridescenceMap,ae=k&&!!w.iridescenceThicknessMap,we=Y&&!!w.sheenColorMap,Ve=Y&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Me=!!w.specularColorMap,Ze=!!w.specularIntensityMap,N=se&&!!w.transmissionMap,he=se&&!!w.thicknessMap,ve=!!w.gradientMap,Ce=!!w.alphaMap,le=w.alphaTest>0,ie=!!w.alphaHash,Le=!!w.extensions;let je=Pi;w.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(je=i.toneMapping);const Mt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:$e,fragmentShader:at,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:xe,batchingColor:xe&&O._colorsTexture!==null,instancing:de,instancingColor:de&&O.instanceColor!==null,instancingMorph:de&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Os,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:Ke,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:X,aoMap:ne,lightMap:J,bumpMap:te,normalMap:ee,displacementMap:f&&me,emissiveMap:oe,normalMapObjectSpace:ee&&w.normalMapType===Uf,normalMapTangentSpace:ee&&w.normalMapType===xc,metalnessMap:ge,roughnessMap:Ye,anisotropy:We,anisotropyMap:j,clearcoat:P,clearcoatMap:Ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:b,iridescence:k,iridescenceMap:De,iridescenceThicknessMap:ae,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:Ne,specularColorMap:Me,specularIntensityMap:Ze,transmission:se,transmissionMap:N,thicknessMap:he,gradientMap:ve,opaque:w.transparent===!1&&w.blending===Ls&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:le,alphaHash:ie,combine:w.combine,mapUv:Fe&&g(w.map.channel),aoMapUv:ne&&g(w.aoMap.channel),lightMapUv:J&&g(w.lightMap.channel),bumpMapUv:te&&g(w.bumpMap.channel),normalMapUv:ee&&g(w.normalMap.channel),displacementMapUv:me&&g(w.displacementMap.channel),emissiveMapUv:oe&&g(w.emissiveMap.channel),metalnessMapUv:ge&&g(w.metalnessMap.channel),roughnessMapUv:Ye&&g(w.roughnessMap.channel),anisotropyMapUv:j&&g(w.anisotropyMap.channel),clearcoatMapUv:Ue&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(w.sheenRoughnessMap.channel),specularMapUv:Ne&&g(w.specularMap.channel),specularColorMapUv:Me&&g(w.specularColorMap.channel),specularIntensityMapUv:Ze&&g(w.specularIntensityMap.channel),transmissionMapUv:N&&g(w.transmissionMap.channel),thicknessMapUv:he&&g(w.thicknessMap.channel),alphaMapUv:Ce&&g(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ee||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Fe||Ce),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&ht.getTransfer(w.map.colorSpace)===mt,decodeVideoTextureEmissive:oe&&w.emissiveMap.isVideoTexture===!0&&ht.getTransfer(w.emissiveMap.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zt,flipSided:w.side===ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(x(M,w),y(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const M=v[w.type];let D;if(M){const I=jn[M];D=gi.clone(I.uniforms)}else D=w.uniforms;return D}function E(w,M){let D;for(let I=0,O=h.length;I<O;I++){const z=h[I];if(z.cacheKey===M){D=z,++D.usedTimes;break}}return D===void 0&&(D=new V_(i,M,w,r),h.push(D)),D}function A(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:R}}function Y_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function j_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function au(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,v,g,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,f,d,v,g,m){const p=o(u,f,d,v,g,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,v,g,m){const p=o(u,f,d,v,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||j_),n.length>1&&n.sort(f||ou),s.length>1&&s.sort(f||ou)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function $_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new au,i.set(n,[o])):s>=r.length?(o=new au,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function K_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ie};break;case"SpotLight":t={position:new S,direction:new S,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new S,halfWidth:new S,halfHeight:new S};break}return i[e.id]=t,t}}}function Z_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let J_=0;function Q_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ex(i){const e=new K_,t=Z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const s=new S,r=new ot,o=new ot;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,v=0,g=0,m=0,p=0,x=0,y=0,_=0,E=0,A=0,T=0;c.sort(Q_);for(let w=0,M=c.length;w<M;w++){const D=c[w],I=D.color,O=D.intensity,z=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*O,u+=I.g*O,f+=I.b*O;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],O);T++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,X=t.get(D);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=D.shadow.matrix,x++}n.directional[d]=G,d++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(I).multiplyScalar(O),G.distance=z,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[g]=G;const Z=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,Z.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[g]=Z.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=H,_++}g++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(I).multiplyScalar(O),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Z=D.shadow,X=t.get(D);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[v]=X,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=D.shadow.matrix,y++}n.point[v]=G,v++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(O),G.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==E||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=d,R.pointLength=v,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=E,R.numLightProbes=T,n.version=J_++)}function l(c,h){let u=0,f=0,d=0,v=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function lu(i){const e=new ex(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new lu(i),e.set(s,[a])):r>=o.length?(a=new lu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sx(i,e,t){let n=new Sc;const s=new $,r=new $,o=new pt,a=new Dc({depthPacking:_c}),l=new mm,c={},h=t.maxTextureSize,u={[Qn]:ln,[ln]:Qn,[zt]:zt},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:nx,fragmentShader:ix}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new wt;v.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _e(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(In),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==li&&this.type===li,z=p===li&&this.type!==li;for(let H=0,G=A.length;H<G;H++){const Z=A[H],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const re=X.getFrameExtents();if(s.multiply(re),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,X.mapSize.y=r.y)),X.map===null||O===!0||z===!0){const be=this.type!==li?{minFilter:en,magFilter:en}:{};X.map!==null&&X.map.dispose(),X.map=new Lt(s.x,s.y,be),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const pe=X.getViewportCount();for(let be=0;be<pe;be++){const Oe=X.getViewport(be);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),I.viewport(o),X.updateMatrices(Z,be),n=X.getFrustum(),_(T,R,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===li&&x(X,R),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,D)};function x(A,T){const R=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Lt(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,R,d,g,null)}function y(A,T,R,w){let M=null;const D=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=M.uuid,O=T.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let H=z[O];H===void 0&&(H=M.clone(),z[O]=H,T.addEventListener("dispose",E)),M=H}if(M.visible=T.visible,M.wireframe=T.wireframe,w===li?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=R}return M}function _(A,T,R,w,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===li)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=e.update(A),z=A.material;if(Array.isArray(z)){const H=O.groups;for(let G=0,Z=H.length;G<Z;G++){const X=H[G],re=z[X.materialIndex];if(re&&re.visible){const pe=y(A,re,w,M);A.onBeforeShadow(i,A,T,R,O,pe,X),i.renderBufferDirect(R,null,O,pe,A,X),A.onAfterShadow(i,A,T,R,O,pe,X)}}}else if(z.visible){const H=y(A,z,w,M);A.onBeforeShadow(i,A,T,R,O,H,null),i.renderBufferDirect(R,null,O,H,A,null),A.onAfterShadow(i,A,T,R,O,H,null)}}const I=A.children;for(let O=0,z=I.length;O<z;O++)_(I[O],T,R,w,M)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const w=c[R],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const rx={[ll]:cl,[hl]:fl,[ul]:pl,[Us]:dl,[cl]:ll,[fl]:hl,[pl]:ul,[dl]:Us};function ox(i,e){function t(){let N=!1;const he=new pt;let ve=null;const Ce=new pt(0,0,0,0);return{setMask:function(le){ve!==le&&!N&&(i.colorMask(le,le,le,le),ve=le)},setLocked:function(le){N=le},setClear:function(le,ie,Le,je,Mt){Mt===!0&&(le*=je,ie*=je,Le*=je),he.set(le,ie,Le,je),Ce.equals(he)===!1&&(i.clearColor(le,ie,Le,je),Ce.copy(he))},reset:function(){N=!1,ve=null,Ce.set(-1,0,0,0)}}}function n(){let N=!1,he=!1,ve=null,Ce=null,le=null;return{setReversed:function(ie){if(he!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),he=ie;const je=le;le=null,this.setClear(je)}},getReversed:function(){return he},setTest:function(ie){ie?V(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(ie){ve!==ie&&!N&&(i.depthMask(ie),ve=ie)},setFunc:function(ie){if(he&&(ie=rx[ie]),Ce!==ie){switch(ie){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=ie}},setLocked:function(ie){N=ie},setClear:function(ie){le!==ie&&(he&&(ie=1-ie),i.clearDepth(ie),le=ie)},reset:function(){N=!1,ve=null,Ce=null,le=null,he=!1}}}function s(){let N=!1,he=null,ve=null,Ce=null,le=null,ie=null,Le=null,je=null,Mt=null;return{setTest:function(ft){N||(ft?V(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ft){he!==ft&&!N&&(i.stencilMask(ft),he=ft)},setFunc:function(ft,ni,Yn){(ve!==ft||Ce!==ni||le!==Yn)&&(i.stencilFunc(ft,ni,Yn),ve=ft,Ce=ni,le=Yn)},setOp:function(ft,ni,Yn){(ie!==ft||Le!==ni||je!==Yn)&&(i.stencilOp(ft,ni,Yn),ie=ft,Le=ni,je=Yn)},setLocked:function(ft){N=ft},setClear:function(ft){Mt!==ft&&(i.clearStencil(ft),Mt=ft)},reset:function(){N=!1,he=null,ve=null,Ce=null,le=null,ie=null,Le=null,je=null,Mt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,x=null,y=null,_=null,E=null,A=null,T=new Ie(0,0,0),R=0,w=!1,M=null,D=null,I=null,O=null,z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=Z>=2);let re=null,pe={};const be=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),$e=new pt().fromArray(be),at=new pt().fromArray(Oe);function lt(N,he,ve,Ce){const le=new Uint8Array(4),ie=i.createTexture();i.bindTexture(N,ie),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ve;Le++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(he+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ie}const K={};K[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(i.DEPTH_TEST),o.setFunc(Us),te(!1),ee(Jc),V(i.CULL_FACE),ne(In);function V(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Q(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function de(N,he){return u[N]!==he?(i.bindFramebuffer(N,he),u[N]=he,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(N,he){let ve=d,Ce=!1;if(N){ve=f.get(he),ve===void 0&&(ve=[],f.set(he,ve));const le=N.textures;if(ve.length!==le.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Le=le.length;ie<Le;ie++)ve[ie]=i.COLOR_ATTACHMENT0+ie;ve.length=le.length,Ce=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(ve)}function Fe(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const Ke={[Xi]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};Ke[pf]=i.MIN,Ke[mf]=i.MAX;const L={[gf]:i.ZERO,[vf]:i.ONE,[_f]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[Mf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Cf]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(N,he,ve,Ce,le,ie,Le,je,Mt,ft){if(N===In){g===!0&&(Q(i.BLEND),g=!1);return}if(g===!1&&(V(i.BLEND),g=!0),N!==uf){if(N!==m||ft!==w){if((p!==Xi||_!==Xi)&&(i.blendEquation(i.FUNC_ADD),p=Xi,_=Xi),ft)switch(N){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tr:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,y=null,E=null,A=null,T.set(0,0,0),R=0,m=N,w=ft}return}le=le||he,ie=ie||ve,Le=Le||Ce,(he!==p||le!==_)&&(i.blendEquationSeparate(Ke[he],Ke[le]),p=he,_=le),(ve!==x||Ce!==y||ie!==E||Le!==A)&&(i.blendFuncSeparate(L[ve],L[Ce],L[ie],L[Le]),x=ve,y=Ce,E=ie,A=Le),(je.equals(T)===!1||Mt!==R)&&(i.blendColor(je.r,je.g,je.b,Mt),T.copy(je),R=Mt),m=N,w=!1}function J(N,he){N.side===zt?Q(i.CULL_FACE):V(i.CULL_FACE);let ve=N.side===ln;he&&(ve=!ve),te(ve),N.blending===Ls&&N.transparent===!1?ne(In):ne(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Ce=N.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function ee(N){N!==cf?(V(i.CULL_FACE),N!==D&&(N===Jc?i.cullFace(i.BACK):N===hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),D=N}function me(N){N!==I&&(G&&i.lineWidth(N),I=N)}function oe(N,he,ve){N?(V(i.POLYGON_OFFSET_FILL),(O!==he||z!==ve)&&(i.polygonOffset(he,ve),O=he,z=ve)):Q(i.POLYGON_OFFSET_FILL)}function ge(N){N?V(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function Ye(N){N===void 0&&(N=i.TEXTURE0+H-1),re!==N&&(i.activeTexture(N),re=N)}function We(N,he,ve){ve===void 0&&(re===null?ve=i.TEXTURE0+H-1:ve=re);let Ce=pe[ve];Ce===void 0&&(Ce={type:void 0,texture:void 0},pe[ve]=Ce),(Ce.type!==N||Ce.texture!==he)&&(re!==ve&&(i.activeTexture(ve),re=ve),i.bindTexture(N,he||K[N]),Ce.type=N,Ce.texture=he)}function P(){const N=pe[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){$e.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function Ve(N){at.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),at.copy(N))}function Ne(N,he){let ve=c.get(he);ve===void 0&&(ve=new WeakMap,c.set(he,ve));let Ce=ve.get(N);Ce===void 0&&(Ce=i.getUniformBlockIndex(he,N.name),ve.set(N,Ce))}function Me(N,he){const Ce=c.get(he).get(N);l.get(he)!==Ce&&(i.uniformBlockBinding(he,Ce,N.__bindingPointIndex),l.set(he,Ce))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,pe={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,x=null,y=null,_=null,E=null,A=null,T=new Ie(0,0,0),R=0,w=!1,M=null,D=null,I=null,O=null,z=null,$e.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:Q,bindFramebuffer:de,drawBuffers:xe,useProgram:Fe,setBlending:ne,setMaterial:J,setFlipSided:te,setCullFace:ee,setLineWidth:me,setPolygonOffset:oe,setScissorTest:ge,activeTexture:Ye,bindTexture:We,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:De,texImage3D:ae,updateUBOMapping:Ne,uniformBlockBinding:Me,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:Y,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:Ue,scissor:we,viewport:Ve,reset:Ze}}function ax(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,b){return d?new OffscreenCanvas(P,b):qo("canvas")}function g(P,b,k){let Y=1;const se=We(P);if((se.width>k||se.height>k)&&(Y=k/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(Y*se.width),Ue=Math.floor(Y*se.height);u===void 0&&(u=v(j,Ue));const fe=b?v(j,Ue):u;return fe.width=j,fe.height=Ue,fe.getContext("2d").drawImage(P,0,0,j,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+Ue+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,b,k,Y,se=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=b;if(b===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),b===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),b===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),b===i.RGBA){const Ue=se?Go:ht.getTransfer(Y);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Ue===mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(P,b){let k;return P?b===null||b===Ji||b===Rr?k=i.DEPTH24_STENCIL8:b===Kn?k=i.DEPTH32F_STENCIL8:b===Cr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===Rr?k=i.DEPTH_COMPONENT24:b===Kn?k=i.DEPTH_COMPONENT32F:b===Cr&&(k=i.DEPTH_COMPONENT16),k}function E(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==bn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){const b=P.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&h.delete(b)}function T(P){const b=P.target;b.removeEventListener("dispose",T),M(b)}function R(P){const b=n.get(P);if(b.__webglInit===void 0)return;const k=P.source,Y=f.get(k);if(Y){const se=Y[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(P),Object.keys(Y).length===0&&f.delete(k)}n.remove(P)}function w(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const k=P.source,Y=f.get(k);delete Y[b.__cacheKey],o.memory.textures--}function M(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let se=0;se<b.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(b.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=P.textures;for(let Y=0,se=k.length;Y<se;Y++){const j=n.get(k[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(P)}let D=0;function I(){D=0}function O(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function H(P,b){const k=n.get(P);if(P.isVideoTexture&&ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,P,b);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function G(P,b){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function Z(P,b){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,b);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function X(P,b){const k=n.get(P);if(P.version>0&&k.__version!==P.version){V(k,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}const re={[Ar]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},pe={[en]:i.NEAREST,[Ou]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},be={[Nf]:i.NEVER,[Hf]:i.ALWAYS,[Ff]:i.LESS,[Xu]:i.LEQUAL,[Of]:i.EQUAL,[kf]:i.GEQUAL,[Bf]:i.GREATER,[zf]:i.NOTEQUAL};function Oe(P,b){if(b.type===Kn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===bn||b.magFilter===Ro||b.magFilter===hr||b.magFilter===Ci||b.minFilter===bn||b.minFilter===Ro||b.minFilter===hr||b.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,re[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,re[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,re[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,pe[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,pe[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==hr&&b.minFilter!==Ci||b.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function $e(P,b){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));const Y=b.source;let se=f.get(Y);se===void 0&&(se={},f.set(Y,se));const j=z(b);if(j!==P.__cacheKey){se[j]===void 0&&(se[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),se[j].usedTimes++;const Ue=se[P.__cacheKey];Ue!==void 0&&(se[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&w(b)),P.__cacheKey=j,P.__webglTexture=se[j].texture}return k}function at(P,b,k){return Math.floor(Math.floor(P/k)/b)}function lt(P,b,k,Y){const j=P.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,k,Y,b.data);else{j.sort((ae,we)=>ae.start-we.start);let Ue=0;for(let ae=1;ae<j.length;ae++){const we=j[Ue],Ve=j[ae],Ne=we.start+we.count,Me=at(Ve.start,b.width,4),Ze=at(we.start,b.width,4);Ve.start<=Ne+1&&Me===Ze&&at(Ve.start+Ve.count-1,b.width,4)===Me?we.count=Math.max(we.count,Ve.start+Ve.count-we.start):(++Ue,j[Ue]=Ve)}j.length=Ue+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ae=0,we=j.length;ae<we;ae++){const Ve=j[ae],Ne=Math.floor(Ve.start/4),Me=Math.ceil(Ve.count/4),Ze=Ne%b.width,N=Math.floor(Ne/b.width),he=Me,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ze,N,he,ve,k,Y,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function K(P,b,k){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const se=$e(P,b),j=b.source;t.bindTexture(Y,P.__webglTexture,i.TEXTURE0+k);const Ue=n.get(j);if(j.version!==Ue.__version||se===!0){t.activeTexture(i.TEXTURE0+k);const fe=ht.getPrimaries(ht.workingColorSpace),Pe=b.colorSpace===hi?null:ht.getPrimaries(b.colorSpace),De=b.colorSpace===hi||fe===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ae=g(b.image,!1,s.maxTextureSize);ae=Ye(b,ae);const we=r.convert(b.format,b.colorSpace),Ve=r.convert(b.type);let Ne=y(b.internalFormat,we,Ve,b.colorSpace,b.isVideoTexture);Oe(Y,b);let Me;const Ze=b.mipmaps,N=b.isVideoTexture!==!0,he=Ue.__version===void 0||se===!0,ve=j.dataReady,Ce=E(b,ae);if(b.isDepthTexture)Ne=_(b.format===Dr,b.type),he&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ne,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ae.width,ae.height,0,we,Ve,null));else if(b.isDataTexture)if(Ze.length>0){N&&he&&t.texStorage2D(i.TEXTURE_2D,Ce,Ne,Ze[0].width,Ze[0].height);for(let le=0,ie=Ze.length;le<ie;le++)Me=Ze[le],N?ve&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Me.width,Me.height,we,Ve,Me.data):t.texImage2D(i.TEXTURE_2D,le,Ne,Me.width,Me.height,0,we,Ve,Me.data);b.generateMipmaps=!1}else N?(he&&t.texStorage2D(i.TEXTURE_2D,Ce,Ne,ae.width,ae.height),ve&&lt(b,ae,we,Ve)):t.texImage2D(i.TEXTURE_2D,0,Ne,ae.width,ae.height,0,we,Ve,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Ne,Ze[0].width,Ze[0].height,ae.depth);for(let le=0,ie=Ze.length;le<ie;le++)if(Me=Ze[le],b.format!==Sn)if(we!==null)if(N){if(ve)if(b.layerUpdates.size>0){const Le=zh(Me.width,Me.height,b.format,b.type);for(const je of b.layerUpdates){const Mt=Me.data.subarray(je*Le/Me.data.BYTES_PER_ELEMENT,(je+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,je,Me.width,Me.height,1,we,Mt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ae.depth,we,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ne,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ae.depth,we,Ve,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ne,Me.width,Me.height,ae.depth,0,we,Ve,Me.data)}else{N&&he&&t.texStorage2D(i.TEXTURE_2D,Ce,Ne,Ze[0].width,Ze[0].height);for(let le=0,ie=Ze.length;le<ie;le++)Me=Ze[le],b.format!==Sn?we!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Me.width,Me.height,we,Ve,Me.data):t.texImage2D(i.TEXTURE_2D,le,Ne,Me.width,Me.height,0,we,Ve,Me.data)}else if(b.isDataArrayTexture)if(N){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Ne,ae.width,ae.height,ae.depth),ve)if(b.layerUpdates.size>0){const le=zh(ae.width,ae.height,b.format,b.type);for(const ie of b.layerUpdates){const Le=ae.data.subarray(ie*le/ae.data.BYTES_PER_ELEMENT,(ie+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,we,Ve,Le)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,we,Ve,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ae.width,ae.height,ae.depth,0,we,Ve,ae.data);else if(b.isData3DTexture)N?(he&&t.texStorage3D(i.TEXTURE_3D,Ce,Ne,ae.width,ae.height,ae.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,we,Ve,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ae.width,ae.height,ae.depth,0,we,Ve,ae.data);else if(b.isFramebufferTexture){if(he)if(N)t.texStorage2D(i.TEXTURE_2D,Ce,Ne,ae.width,ae.height);else{let le=ae.width,ie=ae.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ne,le,ie,0,we,Ve,null),le>>=1,ie>>=1}}else if(Ze.length>0){if(N&&he){const le=We(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Ne,le.width,le.height)}for(let le=0,ie=Ze.length;le<ie;le++)Me=Ze[le],N?ve&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,we,Ve,Me):t.texImage2D(i.TEXTURE_2D,le,Ne,we,Ve,Me);b.generateMipmaps=!1}else if(N){if(he){const le=We(ae);t.texStorage2D(i.TEXTURE_2D,Ce,Ne,le.width,le.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ve,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ne,we,Ve,ae);m(b)&&p(Y),Ue.__version=j.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function V(P,b,k){if(b.image.length!==6)return;const Y=$e(P,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);const j=n.get(se);if(se.version!==j.__version||Y===!0){t.activeTexture(i.TEXTURE0+k);const Ue=ht.getPrimaries(ht.workingColorSpace),fe=b.colorSpace===hi?null:ht.getPrimaries(b.colorSpace),Pe=b.colorSpace===hi||Ue===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,we=[];for(let ie=0;ie<6;ie++)!De&&!ae?we[ie]=g(b.image[ie],!0,s.maxCubemapSize):we[ie]=ae?b.image[ie].image:b.image[ie],we[ie]=Ye(b,we[ie]);const Ve=we[0],Ne=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),Ze=y(b.internalFormat,Ne,Me,b.colorSpace),N=b.isVideoTexture!==!0,he=j.__version===void 0||Y===!0,ve=se.dataReady;let Ce=E(b,Ve);Oe(i.TEXTURE_CUBE_MAP,b);let le;if(De){N&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ze,Ve.width,Ve.height);for(let ie=0;ie<6;ie++){le=we[ie].mipmaps;for(let Le=0;Le<le.length;Le++){const je=le[Le];b.format!==Sn?Ne!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,je.width,je.height,Ne,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ze,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,je.width,je.height,Ne,Me,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ze,je.width,je.height,0,Ne,Me,je.data)}}}else{if(le=b.mipmaps,N&&he){le.length>0&&Ce++;const ie=We(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we[ie].width,we[ie].height,Ne,Me,we[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,we[ie].width,we[ie].height,0,Ne,Me,we[ie].data);for(let Le=0;Le<le.length;Le++){const Mt=le[Le].image[ie].image;N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Mt.width,Mt.height,Ne,Me,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ze,Mt.width,Mt.height,0,Ne,Me,Mt.data)}}else{N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne,Me,we[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,Ne,Me,we[ie]);for(let Le=0;Le<le.length;Le++){const je=le[Le];N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Ne,Me,je.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ze,Ne,Me,je.image[ie])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),j.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Q(P,b,k,Y,se,j){const Ue=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),Pe=y(k.internalFormat,Ue,fe,k.colorSpace),De=n.get(b),ae=n.get(k);if(ae.__renderTarget=b,!De.__hasExternalTextures){const we=Math.max(1,b.width>>j),Ve=Math.max(1,b.height>>j);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,j,Pe,we,Ve,b.depth,0,Ue,fe,null):t.texImage2D(se,j,Pe,we,Ve,0,Ue,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,ae.__webglTexture,0,me(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,ae.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(P,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const Y=b.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,j=_(b.stencilBuffer,se),Ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=me(b);oe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,j,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,P)}else{const Y=b.textures;for(let se=0;se<Y.length;se++){const j=Y[se],Ue=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),Pe=y(j.internalFormat,Ue,fe,j.colorSpace),De=me(b);k&&oe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Pe,b.width,b.height):oe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,Pe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const se=Y.__webglTexture,j=me(b);if(b.depthTexture.format===Pr)oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(b.depthTexture.format===Dr)oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const b=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=Y}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Y=P.texture.mipmaps;Y&&Y.length>0?xe(b.__webglFramebuffer[0],P):xe(b.__webglFramebuffer,P)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),de(b.__webglDepthbuffer[Y],P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,j)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),de(b.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(P,b,k){const Y=n.get(P);b!==void 0&&Q(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Fe(P)}function L(P){const b=P.texture,k=n.get(P),Y=n.get(b);P.addEventListener("dispose",T);const se=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ue=se.length>1;if(Ue||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)k.__webglFramebuffer[fe][Pe]=i.createFramebuffer()}else k.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)k.__webglFramebuffer[fe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let fe=0,Pe=se.length;fe<Pe;fe++){const De=n.get(se[fe]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&oe(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Pe=se[fe];k.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const De=r.convert(Pe.format,Pe.colorSpace),ae=r.convert(Pe.type),we=y(Pe.internalFormat,De,ae,Pe.colorSpace,P.isXRRenderTarget===!0),Ve=me(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,we,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),de(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)Q(k.__webglFramebuffer[fe][Pe],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else Q(k.__webglFramebuffer[fe],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let fe=0,Pe=se.length;fe<Pe;fe++){const De=se[fe],ae=n.get(De);let we=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ae.__webglTexture),Oe(we,De),Q(k.__webglFramebuffer,P,De,i.COLOR_ATTACHMENT0+fe,we,0),m(De)&&p(we)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),Oe(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)Q(k.__webglFramebuffer[Pe],P,b,i.COLOR_ATTACHMENT0,fe,Pe);else Q(k.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,fe,0);m(b)&&p(fe),t.unbindTexture()}P.depthBuffer&&Fe(P)}function ne(P){const b=P.textures;for(let k=0,Y=b.length;k<Y;k++){const se=b[k];if(m(se)){const j=x(P),Ue=n.get(se).__webglTexture;t.bindTexture(j,Ue),p(j),t.unbindTexture()}}}const J=[],te=[];function ee(P){if(P.samples>0){if(oe(P)===!1){const b=P.textures,k=P.width,Y=P.height;let se=i.COLOR_BUFFER_BIT;const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(P),fe=b.length>1;if(fe)for(let De=0;De<b.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<b.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const ae=n.get(b[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,se,i.NEAREST),l===!0&&(J.length=0,te.length=0,J.push(i.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push(j),te.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let De=0;De<b.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const ae=n.get(b[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function me(P){return Math.min(s.maxSamples,P.samples)}function oe(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Ye(P,b){const k=P.colorSpace,Y=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Os&&k!==hi&&(ht.getTransfer(k)===mt?(Y!==Sn||se!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=Ke,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=oe}function lx(i,e){function t(n,s=hi){let r;const o=ht.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bu)return i.BYTE;if(n===zu)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===Vu)return i.ALPHA;if(n===Gu)return i.RGB;if(n===Sn)return i.RGBA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===Dr)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Wu)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===Po||n===Do||n===Lo||n===Io)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===_l||n===xl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===bl)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl||n===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===zl||n===kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ux{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:cx,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _e(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dx extends is{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,v=null;const g=typeof XRWebGLBinding<"u",m=new ux,p={},x=t.getContextAttributes();let y=null,_=null;const E=[],A=[],T=new $;let R=null;const w=new Qt;w.viewport=new pt;const M=new Qt;M.viewport=new pt;const D=[w,M],I=new Mm;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let V=E[K];return V===void 0&&(V=new Na,E[K]=V),V.getTargetRaySpace()},this.getControllerGrip=function(K){let V=E[K];return V===void 0&&(V=new Na,E[K]=V),V.getGripSpace()},this.getHand=function(K){let V=E[K];return V===void 0&&(V=new Na,E[K]=V),V.getHandSpace()};function H(K){const V=A.indexOf(K.inputSource);if(V===-1)return;const Q=E[V];Q!==void 0&&(Q.update(K.inputSource,K.frame,c||o),Q.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<E.length;K++){const V=A[K];V!==null&&(A[K]=null,E[K].disconnect(V))}O=null,z=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,de=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=x.stencil?Dr:Pr,de=x.stencil?Rr:Ji);const Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Lt(f.textureWidth,f.textureHeight,{format:Sn,type:ei,depthTexture:new id(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Lt(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let V=0;V<K.removed.length;V++){const Q=K.removed[V],de=A.indexOf(Q);de>=0&&(A[de]=null,E[de].disconnect(Q))}for(let V=0;V<K.added.length;V++){const Q=K.added[V];let de=A.indexOf(Q);if(de===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=A.length){A.push(Q),de=Fe;break}else if(A[Fe]===null){A[Fe]=Q,de=Fe;break}if(de===-1)break}const xe=E[de];xe&&xe.connect(Q)}}const X=new S,re=new S;function pe(K,V,Q){X.setFromMatrixPosition(V.matrixWorld),re.setFromMatrixPosition(Q.matrixWorld);const de=X.distanceTo(re),xe=V.projectionMatrix.elements,Fe=Q.projectionMatrix.elements,Ke=xe[14]/(xe[10]-1),L=xe[14]/(xe[10]+1),ne=(xe[9]+1)/xe[5],J=(xe[9]-1)/xe[5],te=(xe[8]-1)/xe[0],ee=(Fe[8]+1)/Fe[0],me=Ke*te,oe=Ke*ee,ge=de/(-te+ee),Ye=ge*-te;if(V.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ye),K.translateZ(ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(V.projectionMatrix),K.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const We=Ke+ge,P=L+ge,b=me-Ye,k=oe+(de-Ye),Y=ne*L/P*We,se=J*L/P*We;K.projectionMatrix.makePerspective(b,k,Y,se,We,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function be(K,V){V===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(V.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let V=K.near,Q=K.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),I.near=M.near=w.near=V,I.far=M.far=w.far=Q,(O!==I.near||z!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,z=I.far),I.layers.mask=K.layers.mask|6,w.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const de=K.parent,xe=I.cameras;be(I,de);for(let Fe=0;Fe<xe.length;Fe++)be(xe[Fe],de);xe.length===2?pe(I,w,M):I.projectionMatrix.copy(w.projectionMatrix),Oe(K,I,de)};function Oe(K,V,Q){Q===null?K.matrix.copy(V.matrixWorld):(K.matrix.copy(Q.matrixWorld),K.matrix.invert(),K.matrix.multiply(V.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(V.projectionMatrix),K.projectionMatrixInverse.copy(V.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Bs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let $e=null;function at(K,V){if(h=V.getViewerPose(c||o),v=V,h!==null){const Q=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let de=!1;Q.length!==I.cameras.length&&(I.cameras.length=0,de=!0);for(let L=0;L<Q.length;L++){const ne=Q[L];let J=null;if(d!==null)J=d.getViewport(ne);else{const ee=u.getViewSubImage(f,ne);J=ee.viewport,L===0&&(e.setRenderTargetTextures(_,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(_))}let te=D[L];te===void 0&&(te=new Qt,te.layers.enable(L),te.viewport=new pt,D[L]=te),te.matrix.fromArray(ne.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ne.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(J.x,J.y,J.width,J.height),L===0&&(I.matrix.copy(te.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),de===!0&&I.cameras.push(te)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const L=u.getDepthInformation(Q[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(xe&&xe.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Q.length;L++){const ne=Q[L].camera;if(ne){let J=p[ne];J||(J=new sd,p[ne]=J);const te=u.getCameraImage(ne);J.sourceTexture=te}}}}for(let Q=0;Q<E.length;Q++){const de=A[Q],xe=E[Q];de!==null&&xe!==void 0&&xe.update(de,V,c||o)}$e&&$e(K,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),v=null}const lt=new vd;lt.setAnimationLoop(at),this.setAnimationLoop=function(K){$e=K},this.dispose=function(){}}}const Vi=new qn,fx=new ot;function px(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ju(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,Vi.copy(_),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=s[x.id];_===void 0&&(v(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(x,E);const A=e.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function h(x){const y=u();x.__bindingPointIndex=y;const _=i.createBuffer(),E=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=s[x.id],_=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,T=_.length;A<T;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,M=R.length;w<M;w++){const D=R[w];if(d(D,A,w,E)===!0){const I=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let H=0;H<O.length;H++){const G=O[H],Z=g(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+z,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,_,E){const A=x.value,T=y+"_"+_;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{const R=E[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(x){const y=x.uniforms;let _=0;const E=16;for(let T=0,R=y.length;T<R;T++){const w=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,D=w.length;M<D;M++){const I=w[M],O=Array.isArray(I.value)?I.value:[I.value];for(let z=0,H=O.length;z<H;z++){const G=O[z],Z=g(G),X=_%E,re=X%Z.boundary,pe=X+re;_+=re,pe!==0&&E-pe<Z.storage&&(_+=E-pe),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=Z.storage}}}const A=_%E;return A>0&&(_+=E-A),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class cu{constructor(e={}){const{canvas:t=rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let E=!1;this._outputColorSpace=Ft;let A=0,T=0,R=null,w=-1,M=null;const D=new pt,I=new pt;let O=null;const z=new Ie(0);let H=0,G=t.width,Z=t.height,X=1,re=null,pe=null;const be=new pt(0,0,G,Z),Oe=new pt(0,0,G,Z);let $e=!1;const at=new Sc;let lt=!1,K=!1;const V=new ot,Q=new S,de=new pt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ke(){return R===null?X:1}let L=n;function ne(C,F){return t.getContext(C,F)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){const F="webgl2";if(L=ne(F,C),L===null)throw ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let J,te,ee,me,oe,ge,Ye,We,P,b,k,Y,se,j,Ue,fe,Pe,De,ae,we,Ve,Ne,Me,Ze;function N(){J=new Tv(L),J.init(),Ne=new lx(L,J),te=new xv(L,J,e,Ne),ee=new ox(L,J),te.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),me=new Rv(L),oe=new Y_,ge=new ax(L,J,ee,oe,te,Ne,me),Ye=new Mv(_),We=new Ev(_),P=new Nm(L),Me=new vv(L,P),b=new Av(L,P,me,Me),k=new Dv(L,b,P,me),ae=new Pv(L,te,ge),fe=new yv(oe),Y=new q_(_,Ye,We,J,te,Me,fe),se=new px(_,oe),j=new $_,Ue=new tx(J),De=new gv(_,Ye,We,ee,k,d,l),Pe=new sx(_,k,te),Ze=new mx(L,me,te,ee),we=new _v(L,J,me),Ve=new Cv(L,J,me),me.programs=Y.programs,_.capabilities=te,_.extensions=J,_.properties=oe,_.renderLists=j,_.shadowMap=Pe,_.state=ee,_.info=me}N();const he=new dx(_,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=J.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=J.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(G,Z,!1))},this.getSize=function(C){return C.set(G,Z)},this.setSize=function(C,F,W=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,Z=F,t.width=Math.floor(C*X),t.height=Math.floor(F*X),W===!0&&(t.style.width=C+"px",t.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(G*X,Z*X).floor()},this.setDrawingBufferSize=function(C,F,W){G=C,Z=F,X=W,t.width=Math.floor(C*W),t.height=Math.floor(F*W),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,F,W,q){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,F,W,q),ee.viewport(D.copy(be).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,F,W,q){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,F,W,q),ee.scissor(I.copy(Oe).multiplyScalar(X).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(C){ee.setScissorTest($e=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){pe=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,F=!0,W=!0){let q=0;if(C){let B=!1;if(R!==null){const ce=R.texture.format;B=ce===vc||ce===gc||ce===mc}if(B){const ce=R.texture.type,Se=ce===ei||ce===Ji||ce===Cr||ce===Rr||ce===dc||ce===fc,Re=De.getClearColor(),Ae=De.getClearAlpha(),He=Re.r,Ge=Re.g,Be=Re.b;Se?(v[0]=He,v[1]=Ge,v[2]=Be,v[3]=Ae,L.clearBufferuiv(L.COLOR,0,v)):(g[0]=He,g[1]=Ge,g[2]=Be,g[3]=Ae,L.clearBufferiv(L.COLOR,0,g))}else q|=L.COLOR_BUFFER_BIT}F&&(q|=L.DEPTH_BUFFER_BIT),W&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),De.dispose(),j.dispose(),Ue.dispose(),oe.dispose(),Ye.dispose(),We.dispose(),k.dispose(),Me.dispose(),Ze.dispose(),Y.dispose(),he.dispose(),he.removeEventListener("sessionstart",Yn),he.removeEventListener("sessionend",Wc),Ni.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=me.autoReset,F=Pe.enabled,W=Pe.autoUpdate,q=Pe.needsUpdate,B=Pe.type;N(),me.autoReset=C,Pe.enabled=F,Pe.autoUpdate=W,Pe.needsUpdate=q,Pe.type=B}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const F=C.target;F.removeEventListener("dispose",ie),Le(F)}function Le(C){je(C),oe.remove(C)}function je(C){const F=oe.get(C).programs;F!==void 0&&(F.forEach(function(W){Y.releaseProgram(W)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,W,q,B,ce){F===null&&(F=xe);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Re=Hd(C,F,W,q,B);ee.setMaterial(q,Se);let Ae=W.index,He=1;if(q.wireframe===!0){if(Ae=b.getWireframeAttribute(W),Ae===void 0)return;He=2}const Ge=W.drawRange,Be=W.attributes.position;let ct=Ge.start*He,vt=(Ge.start+Ge.count)*He;ce!==null&&(ct=Math.max(ct,ce.start*He),vt=Math.min(vt,(ce.start+ce.count)*He)),Ae!==null?(ct=Math.max(ct,0),vt=Math.min(vt,Ae.count)):Be!=null&&(ct=Math.max(ct,0),vt=Math.min(vt,Be.count));const Pt=vt-ct;if(Pt<0||Pt===1/0)return;Me.setup(B,q,Re,W,Ae);let St,xt=we;if(Ae!==null&&(St=P.get(Ae),xt=Ve,xt.setIndex(St)),B.isMesh)q.wireframe===!0?(ee.setLineWidth(q.wireframeLinewidth*Ke()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(B.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),ee.setLineWidth(ke*Ke()),B.isLineSegments?xt.setMode(L.LINES):B.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else B.isPoints?xt.setMode(L.POINTS):B.isSprite&&xt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ke=B._multiDrawStarts,Tt=B._multiDrawCounts,ut=B._multiDrawCount,mn=Ae?P.get(Ae).bytesPerElement:1,ss=oe.get(q).currentProgram.getUniforms();for(let gn=0;gn<ut;gn++)ss.setValue(L,"_gl_DrawID",gn),xt.render(ke[gn]/mn,Tt[gn])}else if(B.isInstancedMesh)xt.renderInstances(ct,Pt,B.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,ke);xt.renderInstances(ct,Pt,Tt)}else xt.render(ct,Pt)};function Mt(C,F,W){C.transparent===!0&&C.side===zt&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,qr(C,F,W),C.side=Qn,C.needsUpdate=!0,qr(C,F,W),C.side=zt):qr(C,F,W)}this.compile=function(C,F,W=null){W===null&&(W=C),p=Ue.get(W),p.init(F),y.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),C!==W&&C.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){const Re=ce[Se];Mt(Re,W,B),q.add(Re)}else Mt(ce,W,B),q.add(ce)}),p=y.pop(),q},this.compileAsync=function(C,F,W=null){const q=this.compile(C,F,W);return new Promise(B=>{function ce(){if(q.forEach(function(Se){oe.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){B(C);return}setTimeout(ce,10)}J.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ft=null;function ni(C){ft&&ft(C)}function Yn(){Ni.stop()}function Wc(){Ni.start()}const Ni=new vd;Ni.setAnimationLoop(ni),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){ft=C,he.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},he.addEventListener("sessionstart",Yn),he.addEventListener("sessionend",Wc),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(F),F=he.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,F,R),p=Ue.get(C,y.length),p.init(F),y.push(p),V.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),at.setFromProjectionMatrix(V,Zn,F.reversedDepth),K=this.localClippingEnabled,lt=fe.init(this.clippingPlanes,K),m=j.get(C,x.length),m.init(),x.push(m),he.enabled===!0&&he.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&da(ce,F,-1/0,_.sortObjects)}da(C,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(re,pe),Fe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Fe&&De.addToRenderList(m,C),this.info.render.frame++,lt===!0&&fe.beginShadows();const W=p.state.shadowsArray;Pe.render(W,C,F),lt===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ce=F.cameras;if(B.length>0)for(let Se=0,Re=ce.length;Se<Re;Se++){const Ae=ce[Se];qc(q,B,C,Ae)}Fe&&De.render(C);for(let Se=0,Re=ce.length;Se<Re;Se++){const Ae=ce[Se];Xc(m,C,Ae,Ae.viewport)}}else B.length>0&&qc(q,B,C,F),Fe&&De.render(C),Xc(m,C,F);R!==null&&T===0&&(ge.updateMultisampleRenderTarget(R),ge.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(_,C,F),Me.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],lt===!0&&fe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function da(C,F,W,q){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||at.intersectsSprite(C)){q&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(V);const Se=k.update(C),Re=C.material;Re.visible&&m.push(C,Se,Re,W,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||at.intersectsObject(C))){const Se=k.update(C),Re=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),de.copy(Se.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(V)),Array.isArray(Re)){const Ae=Se.groups;for(let He=0,Ge=Ae.length;He<Ge;He++){const Be=Ae[He],ct=Re[Be.materialIndex];ct&&ct.visible&&m.push(C,Se,ct,W,de.z,Be)}}else Re.visible&&m.push(C,Se,Re,W,de.z,null)}}const ce=C.children;for(let Se=0,Re=ce.length;Se<Re;Se++)da(ce[Se],F,W,q)}function Xc(C,F,W,q){const B=C.opaque,ce=C.transmissive,Se=C.transparent;p.setupLightsView(W),lt===!0&&fe.setGlobalState(_.clippingPlanes,W),q&&ee.viewport(D.copy(q)),B.length>0&&Xr(B,F,W),ce.length>0&&Xr(ce,F,W),Se.length>0&&Xr(Se,F,W),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function qc(C,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Lt(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Wt:ei,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ce=p.state.transmissionRenderTarget[q.id],Se=q.viewport||D;ce.setSize(Se.z*_.transmissionResolutionScale,Se.w*_.transmissionResolutionScale);const Re=_.getRenderTarget(),Ae=_.getActiveCubeFace(),He=_.getActiveMipmapLevel();_.setRenderTarget(ce),_.getClearColor(z),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Fe&&De.render(W);const Ge=_.toneMapping;_.toneMapping=Pi;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),lt===!0&&fe.setGlobalState(_.clippingPlanes,q),Xr(C,W,q),ge.updateMultisampleRenderTarget(ce),ge.updateRenderTargetMipmap(ce),J.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let vt=0,Pt=F.length;vt<Pt;vt++){const St=F[vt],xt=St.object,ke=St.geometry,Tt=St.material,ut=St.group;if(Tt.side===zt&&xt.layers.test(q.layers)){const mn=Tt.side;Tt.side=ln,Tt.needsUpdate=!0,Yc(xt,W,q,ke,Tt,ut),Tt.side=mn,Tt.needsUpdate=!0,ct=!0}}ct===!0&&(ge.updateMultisampleRenderTarget(ce),ge.updateRenderTargetMipmap(ce))}_.setRenderTarget(Re,Ae,He),_.setClearColor(z,H),Be!==void 0&&(q.viewport=Be),_.toneMapping=Ge}function Xr(C,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ce=C.length;B<ce;B++){const Se=C[B],Re=Se.object,Ae=Se.geometry,He=Se.group;let Ge=Se.material;Ge.allowOverride===!0&&q!==null&&(Ge=q),Re.layers.test(W.layers)&&Yc(Re,F,W,Ae,Ge,He)}}function Yc(C,F,W,q,B,ce){C.onBeforeRender(_,F,W,q,B,ce),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(_,F,W,q,C,ce),B.transparent===!0&&B.side===zt&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,_.renderBufferDirect(W,F,q,B,C,ce),B.side=Qn,B.needsUpdate=!0,_.renderBufferDirect(W,F,q,B,C,ce),B.side=zt):_.renderBufferDirect(W,F,q,B,C,ce),C.onAfterRender(_,F,W,q,B,ce)}function qr(C,F,W){F.isScene!==!0&&(F=xe);const q=oe.get(C),B=p.state.lights,ce=p.state.shadowsArray,Se=B.state.version,Re=Y.getParameters(C,B.state,ce,F,W),Ae=Y.getProgramCacheKey(Re);let He=q.programs;q.environment=C.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(C.isMeshStandardMaterial?We:Ye).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",ie),He=new Map,q.programs=He);let Ge=He.get(Ae);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===Se)return $c(C,Re),Ge}else Re.uniforms=Y.getUniforms(C),C.onBeforeCompile(Re,_),Ge=Y.acquireProgram(Re,Ae),He.set(Ae,Ge),q.uniforms=Re.uniforms;const Be=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=fe.uniform),$c(C,Re),q.needsLights=Gd(C),q.lightsStateVersion=Se,q.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function jc(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=Uo.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function $c(C,F){const W=oe.get(C);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Hd(C,F,W,q,B){F.isScene!==!0&&(F=xe),ge.resetTextureUnits();const ce=F.fog,Se=q.isMeshStandardMaterial?F.environment:null,Re=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Os,Ae=(q.isMeshStandardMaterial?We:Ye).get(q.envMap||Se),He=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color;let Pt=Pi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xt=St!==void 0?St.length:0,ke=oe.get(q),Tt=p.state.lights;if(lt===!0&&(K===!0||C!==M)){const tn=C===M&&q.id===w;fe.setState(q,C,tn)}let ut=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Tt.state.version||ke.outputColorSpace!==Re||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isBatchedMesh&&ke.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ke.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==Ae||q.fog===!0&&ke.fog!==ce||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Ge||ke.morphTargets!==Be||ke.morphNormals!==ct||ke.morphColors!==vt||ke.toneMapping!==Pt||ke.morphTargetsCount!==xt)&&(ut=!0):(ut=!0,ke.__version=q.version);let mn=ke.currentProgram;ut===!0&&(mn=qr(q,F,B));let ss=!1,gn=!1,js=!1;const At=mn.getUniforms(),An=ke.uniforms;if(ee.useProgram(mn.program)&&(ss=!0,gn=!0,js=!0),q.id!==w&&(w=q.id,gn=!0),ss||M!==C){ee.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(L,"projectionMatrix",C.projectionMatrix),At.setValue(L,"viewMatrix",C.matrixWorldInverse);const un=At.map.cameraPosition;un!==void 0&&un.setValue(L,Q.setFromMatrixPosition(C.matrixWorld)),te.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&At.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,gn=!0,js=!0)}if(B.isSkinnedMesh){At.setOptional(L,B,"bindMatrix"),At.setOptional(L,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),At.setValue(L,"boneTexture",tn.boneTexture,ge))}B.isBatchedMesh&&(At.setOptional(L,B,"batchingTexture"),At.setValue(L,"batchingTexture",B._matricesTexture,ge),At.setOptional(L,B,"batchingIdTexture"),At.setValue(L,"batchingIdTexture",B._indirectTexture,ge),At.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",B._colorsTexture,ge));const Cn=W.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ae.update(B,W,mn),(gn||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,At.setValue(L,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(An.envMap.value=Ae,An.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(An.envMapIntensity.value=F.environmentIntensity),gn&&(At.setValue(L,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Vd(An,js),ce&&q.fog===!0&&se.refreshFogUniforms(An,ce),se.refreshMaterialUniforms(An,q,X,Z,p.state.transmissionRenderTarget[C.id]),Uo.upload(L,jc(ke),An,ge)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Uo.upload(L,jc(ke),An,ge),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&At.setValue(L,"center",B.center),At.setValue(L,"modelViewMatrix",B.modelViewMatrix),At.setValue(L,"normalMatrix",B.normalMatrix),At.setValue(L,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let un=0,fa=tn.length;un<fa;un++){const Fi=tn[un];Ze.update(Fi,mn),Ze.bind(Fi,mn)}}return mn}function Vd(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function Gd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,F,W){const q=oe.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),oe.get(C.texture).__webglTexture=F,oe.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,F){const W=oe.get(C);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Wd=L.createFramebuffer();this.setRenderTarget=function(C,F=0,W=0){R=C,A=F,T=W;let q=!0,B=null,ce=!1,Se=!1;if(C){const Ae=oe.get(C);if(Ae.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)ge.setupRenderTarget(C);else if(Ae.__hasExternalTextures)ge.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Be=C.depthTexture;if(Ae.__boundDepthTexture!==Be){if(Be!==null&&oe.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const Ge=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?B=Ge[F][W]:B=Ge[F],ce=!0):C.samples>0&&ge.useMultisampledRTT(C)===!1?B=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[W]:B=Ge,D.copy(C.viewport),I.copy(C.scissor),O=C.scissorTest}else D.copy(be).multiplyScalar(X).floor(),I.copy(Oe).multiplyScalar(X).floor(),O=$e;if(W!==0&&(B=Wd),ee.bindFramebuffer(L.FRAMEBUFFER,B)&&q&&ee.drawBuffers(C,B),ee.viewport(D),ee.scissor(I),ee.setScissorTest(O),ce){const Ae=oe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,W)}else if(Se){const Ae=F;for(let He=0;He<C.textures.length;He++){const Ge=oe.get(C.textures[He]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+He,Ge.__webglTexture,W,Ae)}}else if(C!==null&&W!==0){const Ae=oe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ae.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(C,F,W,q,B,ce,Se,Re=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){ee.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const He=C.textures[Re],Ge=He.format,Be=He.type;if(!te.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-q&&W>=0&&W<=C.height-B&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(F,W,q,B,Ne.convert(Ge),Ne.convert(Be),ce))}finally{const He=R!==null?oe.get(R).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(C,F,W,q,B,ce,Se,Re=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(F>=0&&F<=C.width-q&&W>=0&&W<=C.height-B){ee.bindFramebuffer(L.FRAMEBUFFER,Ae);const He=C.textures[Re],Ge=He.format,Be=He.type;if(!te.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(F,W,q,B,Ne.convert(Ge),Ne.convert(Be),0);const vt=R!==null?oe.get(R).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,vt);const Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await op(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer(ct),L.deleteSync(Pt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,F=null,W=0){const q=Math.pow(2,-W),B=Math.floor(C.image.width*q),ce=Math.floor(C.image.height*q),Se=F!==null?F.x:0,Re=F!==null?F.y:0;ge.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Se,Re,B,ce),ee.unbindTexture()};const Xd=L.createFramebuffer(),qd=L.createFramebuffer();this.copyTextureToTexture=function(C,F,W=null,q=null,B=0,ce=null){ce===null&&(B!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let Se,Re,Ae,He,Ge,Be,ct,vt,Pt;const St=C.isCompressedTexture?C.mipmaps[ce]:C.image;if(W!==null)Se=W.max.x-W.min.x,Re=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,He=W.min.x,Ge=W.min.y,Be=W.isBox3?W.min.z:0;else{const Cn=Math.pow(2,-B);Se=Math.floor(St.width*Cn),Re=Math.floor(St.height*Cn),C.isDataArrayTexture?Ae=St.depth:C.isData3DTexture?Ae=Math.floor(St.depth*Cn):Ae=1,He=0,Ge=0,Be=0}q!==null?(ct=q.x,vt=q.y,Pt=q.z):(ct=0,vt=0,Pt=0);const xt=Ne.convert(F.format),ke=Ne.convert(F.type);let Tt;F.isData3DTexture?(ge.setTexture3D(F,0),Tt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ge.setTexture2DArray(F,0),Tt=L.TEXTURE_2D_ARRAY):(ge.setTexture2D(F,0),Tt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ss=L.getParameter(L.UNPACK_SKIP_PIXELS),gn=L.getParameter(L.UNPACK_SKIP_ROWS),js=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const At=C.isDataArrayTexture||C.isData3DTexture,An=F.isDataArrayTexture||F.isData3DTexture;if(C.isDepthTexture){const Cn=oe.get(C),tn=oe.get(F),un=oe.get(Cn.__renderTarget),fa=oe.get(tn.__renderTarget);ee.bindFramebuffer(L.READ_FRAMEBUFFER,un.__webglFramebuffer),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,fa.__webglFramebuffer);for(let Fi=0;Fi<Ae;Fi++)At&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(C).__webglTexture,B,Be+Fi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,ce,Pt+Fi)),L.blitFramebuffer(He,Ge,Se,Re,ct,vt,Se,Re,L.DEPTH_BUFFER_BIT,L.NEAREST);ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||C.isRenderTargetTexture||oe.has(C)){const Cn=oe.get(C),tn=oe.get(F);ee.bindFramebuffer(L.READ_FRAMEBUFFER,Xd),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,qd);for(let un=0;un<Ae;un++)At?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cn.__webglTexture,B,Be+un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cn.__webglTexture,B),An?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,ce,Pt+un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,ce),B!==0?L.blitFramebuffer(He,Ge,Se,Re,ct,vt,Se,Re,L.COLOR_BUFFER_BIT,L.NEAREST):An?L.copyTexSubImage3D(Tt,ce,ct,vt,Pt+un,He,Ge,Se,Re):L.copyTexSubImage2D(Tt,ce,ct,vt,He,Ge,Se,Re);ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Tt,ce,ct,vt,Pt,Se,Re,Ae,xt,ke,St.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,ce,ct,vt,Pt,Se,Re,Ae,xt,St.data):L.texSubImage3D(Tt,ce,ct,vt,Pt,Se,Re,Ae,xt,ke,St):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ce,ct,vt,Se,Re,xt,ke,St.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ce,ct,vt,St.width,St.height,xt,St.data):L.texSubImage2D(L.TEXTURE_2D,ce,ct,vt,Se,Re,xt,ke,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ss),L.pixelStorei(L.UNPACK_SKIP_ROWS,gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,js),ce===0&&F.generateMipmaps&&L.generateMipmap(Tt),ee.unbindTexture()},this.initRenderTarget=function(C){oe.get(C).__webglFramebuffer===void 0&&ge.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ge.setTextureCube(C,0):C.isData3DTexture?ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ge.setTexture2DArray(C,0):ge.setTexture2D(C,0),ee.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,ee.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const zn={length:6,width:3,height:3,goalInnerRadius:.2,goalOuterRadius:.35,goalInnerBottom:2},gx=2,ze={width:zn.length,depth:zn.width,height:zn.height,frame:{x:zn.length/2+.18,z:zn.width/2+.18,thickness:.36},goal:{x:gx,y:zn.goalInnerBottom+zn.goalInnerRadius,radius:(zn.goalOuterRadius+zn.goalInnerRadius)/2,shellTube:(zn.goalOuterRadius-zn.goalInnerRadius)/2},scoreboard:{z:-3.25,centerY:4.94}},yt={fov:42,near:.02,far:140,presets:{front:{position:[0,3.5,12.2],target:[0,2.3,0]},overview:{position:[5.6,4.45,10.2],target:[0,1.58,0]},tactical:{position:[0,3.9,8.8],target:[0,1.95,0]},ruleOverview:{position:[0,4.15,12.6],target:[0,1.8,0]},ruleField:{position:[0,2.7,9.2],target:[0,2.7,0],fov:50},reviewFront:{position:[0,3,12.4],target:[0,3,0],fov:50},orbit:{position:[4.7,3.65,8.45],target:[0,1.58,0]},frontLeft45:{position:[-5.1,4.8,7.2],target:[0,2.4,0],fov:56},frontRight45:{position:[5.1,4.8,7.2],target:[0,2.4,0],fov:56},rearLeft45:{position:[-5.3,2.85,-5.3],target:[0,1.4,0],fov:58},rearRight45:{position:[5.3,2.85,-5.3],target:[0,1.4,0],fov:58},top:{position:[0,10.5,.01],target:[0,0,0],fov:46},lowAngle:{position:[0,2.3,10.5],target:[0,2.3,0],fov:46},model:{position:[.3,1.1,.3],target:[0,1,0],fov:42}}},or={ruleOverviewYaw:.28,ruleOverviewPeriodMs:8e3,followReturnMs:450,handoffMs:220,followCutawayRadius:.18},ar=new S;function Pn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ar.copy(e),ar[n]=0,ar.normalize();const c=.5*o/(o+a),h=1-ar.angleTo(i)/l;return Math.sign(ar[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Oc extends Nn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new S,c=new S,h=new S(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,v=u.length/6,g=new S,m=.5/o;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/v)){case 0:g.set(1,0,0),d[x+0]=Pn(g,c,"z","y",r,n),d[x+1]=1-Pn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[x+0]=1-Pn(g,c,"z","y",r,n),d[x+1]=1-Pn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[x+0]=1-Pn(g,c,"x","z",r,e),d[x+1]=Pn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[x+0]=1-Pn(g,c,"x","z",r,e),d[x+1]=1-Pn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[x+0]=1-Pn(g,c,"x","y",r,e),d[x+1]=1-Pn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[x+0]=Pn(g,c,"x","y",r,e),d[x+1]=1-Pn(g,c,"y","x",r,t);break}}static fromJSON(e){return new Oc(e.width,e.height,e.depth,e.segments,e.radius)}}const $n=[420064,13966137],qe=(i,e=.55,t=.12)=>new Un({color:i,roughness:e,metalness:t}),Yt=i=>new Un({color:i,emissive:i,emissiveIntensity:3.1,roughness:.3});function Ee(i,e,t,n,s=0,r=0,o=0){const a=new _e(new Oc(i,e,t,2,Math.min(.045,i*.2,e*.2,t*.2)),n);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,a}function Dt(i,e,t,n,s=7){const r=e.clone().sub(i),o=new _e(new cn(t,t,r.length(),s),n);return o.position.copy(i).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new S(0,1,0),r.normalize()),o.castShadow=!0,o}function hu(i,e=512,t=220,n=["#fff"],s="#102339"){const r=document.createElement("canvas");r.width=e,r.height=t;const o=r.getContext("2d");o.fillStyle=s,o.fillRect(0,0,e,t),o.textAlign="center",o.textBaseline="middle";const a=t/(i.length+1);i.forEach((c,h)=>{o.fillStyle=n[h%n.length],o.font=`${h===0?"700":"600"} ${Math.round(t*(h===0?.27:.16))}px "Microsoft JhengHei",sans-serif`,o.fillText(c,e/2,a*(h+1),e-24)});const l=new Qi(r);return l.colorSpace=Ft,new fn({map:l,side:zt})}function vx(i){const e=new nt;e.name="球門";const t=qe(15857151,.25,.24),n=qe(2439243,.4,.6),s=Yt(i<0?556031:16717880);s.emissiveIntensity=.85;const r=new _e(new Wn(ze.goal.radius,ze.goal.shellTube,12,64),t);r.scale.z=.64,r.rotation.y=Math.PI/2,e.add(r);for(const l of[-1,1])for(let c=0;c<16;c++){const h=c*Math.PI/8,u=new _e(new Hr(.23,.32,6,1,h+.014,Math.PI/8-.028),c%4===0?t:s);u.rotation.y=l*Math.PI/2,u.position.x=l*.05,e.add(u)}for(const l of[-.15,.15])e.add(Dt(new S(0,.31,l),new S(0,ze.height-ze.goal.y,l),.01,n)),e.add(Ee(.14,.055,.07,t,0,ze.height-ze.goal.y,l));const o=Yt(i<0?1674239:16721478);o.emissiveIntensity=.12;const a=Ee(.13,.145,.26,o,0,.345,0);if(a.name="球門頂部計分框",e.add(a),e.userData.scoringTeam=i<0?1:0,e.userData.flashMaterial=o,e.userData.flash=0,typeof document<"u"){const l=document.createElement("canvas");l.width=256,l.height=128;const c=new Qi(l);c.colorSpace=Ft;const h=new fn({map:c,toneMapped:!1});for(const u of[-1,1]){const f=new _e(new Ot(.225,.108),h);f.rotation.y=u*Math.PI/2,f.position.set(u*.071,.345,0),f.name="球門計分顯示",e.add(f)}e.userData.display={canvas:l,texture:c},bd(e,0)}return e.position.set(i*ze.goal.x,ze.goal.y,0),e}function bd(i,e){const t=i.userData.display;if(!t||t.score===e)return;t.score=e;const n=t.canvas.getContext("2d");n.fillStyle="#030a12",n.fillRect(0,0,256,128),n.strokeStyle="#486274",n.lineWidth=5,n.strokeRect(3,3,250,122),n.fillStyle="#ff574f",n.font="bold 92px monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(String(Math.max(0,e)).padStart(2,"0"),128,66,234),t.texture.needsUpdate=!0}class _x{uniforms={cutDepth:{value:0},cutEnabled:{value:0}};units=[];ray=new kr;point=new S;direction=new S;viewPoint=new S;last=performance.now();checked=-1/0;register(e){e.updateWorldMatrix(!0,!0);const t=[],n=new ot;e.traverse(s=>{if(s instanceof _e&&(s.geometry.computeBoundingBox(),!!s.geometry.boundingBox))if(s instanceof $i)for(let r=0;r<s.count;r++)s.getMatrixAt(r,n),n.premultiply(s.matrixWorld),t.push(s.geometry.boundingBox.clone().applyMatrix4(n));else t.push(s.geometry.boundingBox.clone().applyMatrix4(s.matrixWorld))}),this.units.push({root:e,bounds:t,fade:{value:0},wanted:!1,materials:[]})}install(){for(const e of this.units){const t=new Map;e.root.traverse(n=>{if(!(n instanceof _e))return;const s=(Array.isArray(n.material)?n.material:[n.material]).map(r=>{const o=t.get(r);if(o)return o;const a=r.clone();t.set(r,a);const l=r.onBeforeCompile.bind(r),c=r.customProgramCacheKey();return e.materials.push({m:a,depthWrite:r.depthWrite}),a.transparent=r.transparent,a.onBeforeCompile=(h,u)=>{l(h,u),Object.assign(h.uniforms,this.uniforms,{occluderFade:e.fade});const f=h.vertexShader.lastIndexOf("}");h.vertexShader=`varying float occluderViewDepth;
`+h.vertexShader.slice(0,f)+`occluderViewDepth=gl_Position.w;
`+h.vertexShader.slice(f),h.fragmentShader=`varying float occluderViewDepth;uniform float cutDepth;uniform float cutEnabled;uniform float occluderFade;
`+h.fragmentShader;const d=h.fragmentShader.lastIndexOf("}");h.fragmentShader=h.fragmentShader.slice(0,d)+`float cutForeground=1.-smoothstep(cutDepth-.45,cutDepth-.15,occluderViewDepth);float cutFade=occluderFade*cutEnabled*cutForeground;float cutNoise=fract(52.9829189*fract(dot(floor(gl_FragCoord.xy),vec2(.06711056,.00583715))));if(cutFade>cutNoise)discard;
`+h.fragmentShader.slice(d)},a.customProgramCacheKey=()=>c+"-component-fade-v3-depth-safe",a});n.material=Array.isArray(n.material)?s:s[0]})}}update(e,t,n,s,r){const o=performance.now(),a=Math.min(.05,(o-this.last)/1e3);if(this.last=o,this.viewPoint.copy(t).applyMatrix4(e.matrixWorldInverse),this.uniforms.cutDepth.value=-this.viewPoint.z,this.uniforms.cutEnabled.value=s?1:0,o-this.checked>80){this.checked=o;const l=e.position.distanceTo(t);this.ray.origin.copy(e.position);for(const c of this.units)if(c.wanted=!1,!!s){for(const h of[[0,0],[r*.65,0],[-r*.65,0],[0,r*.65],[0,-r*.65]])if(this.direction.copy(t),this.direction.x+=h[0],this.direction.y+=h[1],this.ray.direction.copy(this.direction).sub(e.position).normalize(),c.bounds.some(u=>this.ray.intersectBox(u,this.point)!==null&&this.point.distanceTo(e.position)<l-.15)){c.wanted=!0;break}}}for(const l of this.units){l.fade.value+=((s&&l.wanted?1:0)-l.fade.value)*(1-Math.exp(-a/(l.wanted?.16:.32)));for(const{m:c,depthWrite:h}of l.materials)c.depthWrite=h}}}function Dn(i,e,t,n,s){const r=new hd,o=i/2,a=e/2;r.moveTo(-o+n,-a),r.lineTo(o-n,-a),r.lineTo(o,-a+n),r.lineTo(o,a-n),r.lineTo(o-n,a),r.lineTo(-o+n,a),r.lineTo(-o,a-n),r.lineTo(-o,-a+n),r.closePath();const l=new Cc(r,{depth:t,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.012,bevelThickness:.012,curveSegments:1});l.translate(0,0,-t/2);const c=new _e(l,s);return c.castShadow=!0,c.receiveShadow=!0,c}function Bc(i,e,t,n,s="#ccf8ff"){i.save(),i.translate(e,t),i.strokeStyle=s,i.fillStyle=s,i.lineWidth=n*.035;for(const r of[-1,1])for(const o of[-1,1])i.beginPath(),i.moveTo(r*n*.13,o*n*.13),i.lineTo(r*n*.34,o*n*.34),i.stroke(),i.beginPath(),i.ellipse(r*n*.34,o*n*.34,n*.2,n*.12,-r*o*.7,0,Math.PI*2),i.stroke();i.beginPath(),i.arc(0,0,n*.19,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(0,0,n*.085,0,Math.PI*2),i.fill(),i.restore()}function Vr(i){const e=new Qi(i);return e.colorSpace=Ft,e.anisotropy=4,new fn({map:e,side:zt})}function xx(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new wt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=uu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let g=0;g<o[h].length;++g)d.push(o[h][g][f]);const v=uu(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function uu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Rt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let v=0;v<t;v++){const g=h.getComponent(f,v);a.setComponent(f+u,v,g)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function di(i,e=[]){const t=new Map;i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=r=>e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1});i.traverse(r=>{if(!(r instanceof _e)||r instanceof $i||s(r)||r.name==="槳葉")return;const o=r.material;if(!(o instanceof Un)||o.map||o.transparent)return;const a=[o.color.getHex(),o.emissive.getHex(),o.emissiveIntensity,o.roughness,o.metalness,o.side,r.castShadow,r.receiveShadow].join(":"),l=t.get(a)??[];l.push(r),t.set(a,l)});for(const r of t.values()){if(r.length<2)continue;const o=r.map(c=>{const h=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();return h.applyMatrix4(n.clone().multiply(c.matrixWorld)),h.deleteAttribute("uv"),h}),a=xx(o);if(o.forEach(c=>c.dispose()),!a)continue;const l=new _e(a,r[0].material);l.name="靜態合批",l.castShadow=r[0].castShadow,l.receiveShadow=r[0].receiveShadow,i.add(l);for(const c of r)c.removeFromParent()}}function yx(i){const e=new nt,t=qe(15053198,.73),n=qe($n[i],.77,.02),s=qe(15134199,.72,.03),r=qe(1186859,.86,.02),o=qe(1579299,.83),a=qe(14739699,.7),l=qe(1581362,.4,.22),c=(T,R,w,M,D,I,O)=>{const z=new _e(new Gn(1,12,9),M);return z.scale.set(T,R,w),z.position.set(D,I,O),z.castShadow=!0,e.add(z),z},h=[[0,.89],[.115,.89],[.145,.94],[.14,1.11],[.183,1.29],[.14,1.35],[.07,1.36]].map(([T,R])=>new $(T,R)),u=new _e(new Pc(h,16),n);u.scale.z=.68,u.castShadow=!0,e.add(u),e.add(Ee(.265,.15,.17,s,0,.97,.012),Ee(.012,.35,.012,s,0,1.15,.114)),c(.07,.058,.064,t,0,1.375,0);const f=new _e(new Wn(.086,.035,6,16),n);f.rotation.x=Math.PI/2.6,f.position.set(0,1.34,-.02),e.add(f);for(const T of[-1,1]){e.add(Dt(new S(T*.045,1.33,.098),new S(T*.052,1.18,.12),.005,s)),e.add(Ee(.039,.25,.014,s,T*.135,1.08,.058));const R=new S(T*.078,.9,0),w=new S(T*.09,.51,.012),M=new S(T*.095,.13,-.008);e.add(Dt(R,w,.059,r,10),Dt(w,M,.048,r,10)),e.add(Dt(new S(T*.125,.84,.014),new S(T*.139,.16,.011),.006,s)),c(.07,.05,.125,a,T*.095,.055,.039),c(.065,.058,.112,s,T*.095,.086,.03),e.add(Ee(.094,.02,.04,n,T*.095,.099,.122),Ee(.038,.044,.034,n,T*.095,.13,-.044));for(let O=0;O<3;O++)e.add(Ee(.051,.006,.009,a,T*.095,.139-O*.004,.026+O*.023));const D=new nt;D.name="手臂",D.position.set(T*.176,1.29,0),D.add(Dt(new S,new S(T*.035,-.23,.035),.058,n,10)),D.add(Dt(new S(T*.035,-.23,.035),new S(-T*.074,-.22,.228),.044,s,10));const I=new _e(new Gn(.038,10,8),t);I.scale.set(.78,.65,1.15),I.position.set(-T*.079,-.216,.229),D.add(I),e.add(D)}c(.104,.132,.101,t,0,1.52,.007);for(const T of[-1,1]){c(.019,.028,.014,t,T*.105,1.514,.001);const R=c(.021,.025,.008,s,T*.04,1.534,.098);R.name="眼睛";const w=c(.012,.018,.007,o,T*.038,1.534,.105);w.name="眼睛";const M=c(.004,.005,.002,s,T*.037,1.542,.112);M.name="眼睛";const D=Ee(.041,.009,.009,o,T*.041,1.568,.099);D.rotation.z=T*-.08,e.add(D)}c(.012,.019,.016,t,0,1.514,.108),e.add(Ee(.027,.004,.004,qe(9854036,.9),0,1.473,.1));const d=new _e(new Gn(.109,14,9,0,Math.PI*2,0,1.62),o);d.scale.set(1,1.03,1),d.position.set(0,1.556,-.009),e.add(d);for(let T=0;T<5;T++){const R=c(.031,.055,.035,o,(T-2)*.035,1.623-Math.abs(T-2)*.012,.058);R.rotation.z=-.4}const v=Ee(.23,.052,.125,s,0,1.066,.256);e.add(v),e.add(Ee(.12,.024,.065,l,0,1.097,.255));for(const T of[-1,1]){const R=new _e(new cn(.028,.028,.008,12),l);R.position.set(T*.074,1.096,.269),e.add(R),e.add(Dt(new S(T*.074,1.096,.269),new S(T*.074,1.117,.269),.007,l)),e.add(Dt(new S(T*.081,1.079,.203),new S(T*.09,1.216,.18),.007,l))}const g=document.createElement("canvas");g.width=256,g.height=256;const m=g.getContext("2d");m.fillStyle=i?"#d51b39":"#0668e0",m.fillRect(0,0,256,256),Bc(m,128,128,165,"#ffffff");const p=Vr(g),x=new _e(new Ot(.19,.19),p);x.rotation.y=Math.PI,x.position.set(0,1.204,-.108),e.add(x);const y=new _e(new Ot(.057,.057),p);y.position.set(.077,1.256,.112),e.add(y);const _=new nt;_.name="上半身",_.position.y=.9;const E=new nt;E.name="頭部",E.position.y=.49;const A=new nt;A.name="眼瞼",A.position.y=.144,e.updateMatrixWorld(!0);for(const T of[...e.children]){const R=new xi().setFromObject(T);(R.min.y>.88||T===u)&&(e.remove(T),T.position.y-=.9,_.add(T),R.min.y>1.37&&(_.remove(T),T.position.y-=.49,E.add(T),T.name==="眼睛"&&(E.remove(T),T.position.y-=.144,A.add(T))))}return E.add(A),_.add(E),e.add(_),di(e,[_]),di(_,[E,..._.children.filter(T=>T.name==="手臂")]),di(E,[A]),di(A),e.userData.rig={upper:_,head:E,eyes:A},e}class Mx{group=new nt;items=[];constructor(){this.group.name="DroneTrails";for(let e=0;e<6;e++){const t=new Float32Array(48),n=new wt;n.setAttribute("position",new Rt(t,3).setUsage(Vf)),n.setAttribute("age",new Rt(Float32Array.from({length:16},(o,a)=>a/15),1));const s=new bt({transparent:!0,depthWrite:!1,uniforms:{color:{value:new Ie($n[e<3?0:1])},opacity:{value:0}},vertexShader:"attribute float age;varying float a;void main(){a=age;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 color;uniform float opacity;varying float a;void main(){gl_FragColor=vec4(color,opacity*a*a);}"}),r=new Nr(n,s);r.frustumCulled=!1,this.group.add(r),this.items.push({points:t,geometry:n,material:s,last:new S(100,100,100)})}}update(e,t,n){if(this.group.visible=n,!n){this.clear();return}this.items.forEach((s,r)=>{const o=e[r].position,a=o.distanceTo(s.last);if(a>.5){for(let l=0;l<16;l++)o.toArray(s.points,l*3);s.material.uniforms.opacity.value=0}else a>.002?(s.points.copyWithin(0,3),o.toArray(s.points,45),s.material.uniforms.opacity.value=.23):s.material.uniforms.opacity.value*=Math.exp(-t*8);s.geometry.attributes.position.needsUpdate=!0,s.last.copy(o)})}clear(){for(const e of this.items)e.material.uniforms.opacity.value=0,e.last.set(100,100,100)}}function bx(i){const e={value:0},t={value:1};return i.traverse(n=>{if(!(n instanceof _e))return;const s=n.name==="隊旗布面",r=!!n.userData.crowdMotion;if(!s&&!r)return;const o=n.material,a=o.onBeforeCompile.bind(o),l=o.customProgramCacheKey();o.onBeforeCompile=(c,h)=>{a(c,h),c.uniforms.ambientTime=e,c.uniforms.motionAmount=t,c.vertexShader="uniform float ambientTime;uniform float motionAmount;"+(r?"attribute float personSeed;":"")+`
`+c.vertexShader,s?c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z+=sin(ambientTime*.8+position.x*3.)*.012*clamp(1.-position.y,0.,1.)*motionAmount;`):c.vertexShader=c.vertexShader.replace("#include <project_vertex>",`vec4 mvPosition=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 mvPosition=instanceMatrix*mvPosition;
 mvPosition.x+=sin(ambientTime*(.55+.08*sin(personSeed))+personSeed)*.008*motionAmount;
 mvPosition.y+=sin(ambientTime*1.4+personSeed)*.003*motionAmount;
 #endif
 mvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;`)},o.customProgramCacheKey=()=>l+(s?"breeze2":"crowd2"),o.needsUpdate=!0}),(n,s)=>{e.value=n,t.value=s?0:1}}class Sx extends Ir{constructor(){super();const e=new Nn;e.deleteAttribute("uv");const t=new Un({side:ln}),n=new Un,s=new xm(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new _e(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new $i(e,n,6),a=new Et;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new _e(e,ws(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new _e(e,ws(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new _e(e,ws(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new _e(e,ws(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new _e(e,ws(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new _e(e,ws(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ws(i){return new pm({color:0,emissive:16777215,emissiveIntensity:i})}function wx(i,e){i.add(new md(14478079,2897997,1.75));const t=new yr(16774631,2.3);t.position.set(4,10,7),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.normalBias=.025,t.shadow.radius=3,i.add(t);for(const l of[-3.5,3.5])for(const c of[-2.5,2.5]){const h=new vm(15792127,20,12,Math.PI/5,.6,2);h.position.set(l,6,c),h.target.position.set(l*.4,0,0),i.add(h,h.target)}const n=new yr(2923775,.72);n.position.set(-6,4,4),i.add(n);const s=new yr(16727896,.56);s.position.set(6,4,1),i.add(s);const r=new Zl(e),o=new Sx,a=r.fromScene(o,.04);return i.environment=a.texture,i.environmentIntensity=.65,r.dispose(),o.dispose(),()=>a.dispose()}const du={type:"change"},zc={type:"start"},Sd={type:"end"},wo=new kr,fu=new ci,Ex=Math.cos(70*Xo.DEG2RAD),Bt=new S,dn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ja=1e-6;class Tx extends Im{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new Xn,this._lastTargetPosition=new S,this._quat=new Xn().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oh,this._sphericalDelta=new Oh,this._scale=1,this._panOffset=new S,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new S,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cx.bind(this),this._onPointerDown=Ax.bind(this),this._onPointerUp=Rx.bind(this),this._onContextMenu=Fx.bind(this),this._onMouseWheel=Lx.bind(this),this._onKeyDown=Ix.bind(this),this._onTouchStart=Ux.bind(this),this._onTouchMove=Nx.bind(this),this._onMouseDown=Px.bind(this),this._onMouseMove=Dx.bind(this),this._interceptControlDown=Ox.bind(this),this._interceptControlUp=Bx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=dn:n>Math.PI&&(n-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new S(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new S(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wo.origin.copy(this.object.position),wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wo.direction))<Ex?this.object.lookAt(this.target):(fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),wo.intersectPlane(fu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ja||this._lastTargetPosition.distanceToSquared(this.target)>Ja?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ax(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Cx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Rx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Px(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_t.DOLLY;break;case Ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}break;case Ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(zc)}function Dx(i){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lx(i){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(i.preventDefault(),this.dispatchEvent(zc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sd))}function Ix(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ux(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_t.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_t.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(zc)}function Nx(i){switch(this._trackPointer(i),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_t.NONE}}function Fx(i){this.enabled!==!1&&i.preventDefault()}function Ox(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zx(){const i=document.createElement("canvas");i.width=1536,i.height=640;const e=Vr(i);return{canvas:i,texture:e.map,material:e}}function Eo(i,e,t,n,s,r=22){i.beginPath(),i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.lineTo(e+n,t+r),i.lineTo(e+n,t+s-r),i.lineTo(e+n-r,t+s),i.lineTo(e+r,t+s),i.lineTo(e,t+s-r),i.lineTo(e,t+r),i.closePath(),i.fill(),i.stroke()}function wd(i,e=[0,0],t=180,n=1){const s=i.canvas.getContext("2d"),r=i.canvas.width,o=i.canvas.height;s.clearRect(0,0,r,o);const a=s.createLinearGradient(0,0,r,o);a.addColorStop(0,"#031832"),a.addColorStop(.5,"#102440"),a.addColorStop(1,"#240e29"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="#11385c",s.lineWidth=1;for(let l=0;l<r;l+=48)s.beginPath(),s.moveTo(l,0),s.lineTo(l+200,o),s.stroke();s.textAlign="center",s.textBaseline="middle",s.shadowColor="#229fff",s.shadowBlur=15,s.fillStyle="#edfbff",s.font='900 86px "Microsoft JhengHei",sans-serif',s.fillText("無人機足球聯賽",r/2,91),s.shadowBlur=0,s.fillStyle="#51d7ff",s.strokeStyle="#99e8ff",s.lineWidth=3,Eo(s,514,159,508,59,27),s.fillStyle="#051b38",s.font='800 32px "Microsoft JhengHei",sans-serif',s.fillText("即時賽況",r/2,190);for(let l=0;l<2;l++){const c=l===0?74:1030,h=c+216,u=s.createLinearGradient(c,250,c+432,558);u.addColorStop(0,l?"#ba1238":"#045aef"),u.addColorStop(1,l?"#50162c":"#073477"),s.fillStyle=u,s.strokeStyle=l?"#ff4562":"#168dff",s.lineWidth=4,Eo(s,c,248,432,320),s.fillStyle="#ffffff",s.font='800 48px "Microsoft JhengHei",sans-serif',s.fillText(l?"紅隊":"藍隊",h,297),s.beginPath(),s.moveTo(c+22,340),s.lineTo(c+410,340),s.stroke(),s.shadowColor=l?"#ff6880":"#55caff",s.shadowBlur=22,s.font="800 194px ui-monospace,monospace",s.fillText(String(e[l]),h,450),s.shadowBlur=0}s.fillStyle="#071b34",s.strokeStyle="#236493",s.lineWidth=2,Eo(s,551,274,434,182),s.fillStyle="#e2f7ff",s.font='700 37px "Microsoft JhengHei",sans-serif',s.fillText("比分",768,317),s.font="800 80px monospace",s.fillText(":",768,390),s.fillStyle="#07366b",s.strokeStyle="#339bff",Eo(s,551,477,434,91,16),t=Math.max(0,t),s.fillStyle="#ffffff",s.font="800 62px ui-monospace,monospace",s.fillText(`${Math.floor(t/60).toString().padStart(2,"0")}:${Math.floor(t%60).toString().padStart(2,"0")}`,768,526),s.fillStyle="#87c2e0",s.font='600 20px "Microsoft JhengHei",sans-serif',s.fillText(`第 ${n} 局    /    DRONE SOCCER LEAGUE    /    飛向更高的未來`,768,611),i.texture.needsUpdate=!0}function kx(i){const e=new nt;e.name="Scoreboard";const t=qe(1517112,.35,.65),n=qe(6387080,.32,.7),s=Yt(2210559);e.add(Dn(6.13,2.73,.34,.3,t));const r=Dn(5.99,2.58,.08,.24,n);r.position.z=.19,e.add(r);const o=Dn(5.78,2.4,.085,.19,t);o.position.z=.25,e.add(o);const a=new _e(new Ot(5.48,2.28),i.material);a.position.z=.33,a.name="動態比分板",e.add(a);for(const f of[-1,1]){for(const d of[-1,1])e.add(Dt(new S(f*2.95,d*.82,.3),new S(f*2.65,d*1.21,.3),.014,s)),e.add(Ee(.65,.027,.035,s,f*2.22,d*1.25,.3));e.add(Ee(.027,1.12,.034,Yt(f<0?2280191:16729706),f*2.98,0,.25)),e.add(Ee(.19,.055,.04,Yt(16755787),f*2.69,1.26,.26)),e.add(Dt(new S(f*2,-1.45,-.1),new S(f*2,-2.05,-.4),.052,n))}const l=document.createElement("canvas");l.width=384,l.height=230;const c=l.getContext("2d");c.fillStyle="#071d37",c.fillRect(0,0,384,230),c.shadowColor="#009fff",c.shadowBlur=14,Bc(c,192,112,186);const h=Dn(1.03,.57,.16,.18,t);h.position.set(0,1.49,.04),e.add(h);const u=new _e(new Ot(.93,.55),Vr(l));return u.position.set(0,1.49,.14),e.add(u),e.position.set(0,ze.scoreboard.centerY,ze.scoreboard.z),e}function To(i=0,e=!0){const t=new nt;t.name="DroneBall";const n=[22015,16711722][i]??13358559;t.userData.modelId="uasart-mit-competition",t.userData.source=Ti.source,t.userData.dimensions=Ti.dimensions,t.userData.checked=Ti.checked,t.userData.evidence="原廠外形尺寸；內部結構推定";const s=qe(1516075,.68,.28),r=qe(15199728,.3,.22),o=qe(7505297,.32,.8),a=qe(n,.36,.3),l=Yt(n);l.emissiveIntensity=.65,a.userData.teamAccent=!0,a.userData.cageAccent=!0,l.userData.teamAccent=!0;const c=new nt;c.name="球籠";const h=new Rc(1,0),u=h.getAttribute("position"),f=[],d=[],v=V=>{let Q=f.findIndex(de=>de.distanceToSquared(V)<1e-8);return Q<0&&(Q=f.length,f.push(V)),Q};for(let V=0;V<u.count;V+=3)d.push([0,1,2].map(Q=>v(new S().fromBufferAttribute(u,V+Q))));const g=new Map,m=(V,Q)=>f[V].clone().multiplyScalar(2/3).addScaledVector(f[Q],1/3).normalize().multiplyScalar(.1082);for(const[V,Q,de]of d){const xe=[m(V,Q),m(Q,V),m(Q,de),m(de,Q),m(de,V),m(V,de)];for(let Fe=0;Fe<6;Fe++){const Ke=xe[Fe],L=xe[(Fe+1)%6],ne=[Ke.toArray().map(J=>J.toFixed(6)).join(","),L.toArray().map(J=>J.toFixed(6)).join(",")].sort().join("|");g.set(ne,[Ke,L])}}const p=new ot,x=new Xn;new S(0,1,0);const y=new $i(new Nn(.0045,1,.0024),a,g.size),_=new $i(new Nn(.0015,.48,.003),l,Math.ceil(g.size/5));_.name="球籠嵌入燈條";let E=0;const A=new S;for(const V of g.values())for(const Q of V)A.x=Math.max(A.x,Math.abs(Q.x)),A.y=Math.max(A.y,Math.abs(Q.y)),A.z=Math.max(A.z,Math.abs(Q.z));for(const V of g.values()){const[Q,de]=V.map(ne=>new S(ne.x/A.x*.1065,Math.max(-.0865,ne.y/A.y*.1065),ne.z/A.z*.1065)),xe=de.clone().sub(Q),Fe=xe.clone().normalize(),Ke=Q.clone().add(de).normalize(),L=new S().crossVectors(Fe,Ke).normalize();Ke.crossVectors(L,Fe).normalize(),x.setFromRotationMatrix(new ot().makeBasis(L,Fe,Ke)),p.compose(Q.clone().add(de).multiplyScalar(.5),x,new S(1,xe.length(),1)),E%5===0&&_.setMatrixAt(E/5,p),y.setMatrixAt(E++,p)}y.name="球籠",y.castShadow=!0,c.add(y);const T=new Map;for(const V of g.values())for(const Q of V){const de=new S(Q.x/A.x*.1065,Math.max(-.0865,Q.y/A.y*.1065),Q.z/A.z*.1065);T.set(de.toArray().join(","),de)}const R=new $i(new Gn(.0035,e?10:6,6),a,T.size);let w=0;for(const V of T.values())p.makeTranslation(V.x,V.y,V.z),R.setMatrixAt(w++,p);R.name="球籠連接節點",c.add(R),t.add(c),h.dispose();const M=new nt;M.name="機架";const D=.106/Math.sqrt(8);for(const V of[-D,D])M.add(Dt(new S(-D,0,V),new S(D,0,-V),.0034,s));M.add(Ee(.043,.004,.035,s,0,-.006,0)),t.add(M);const I=new nt;I.name="核心機身",I.add(Ee(.048,.005,.035,s,0,.004,0));const O=new _e(new Gn(1,e?20:10,e?12:6,0,Math.PI*2,0,Math.PI/2),qe(1477760,.4,.15));O.scale.set(.023,.014,.017),O.position.set(0,.006,0),O.name="中央保護罩（依照片推定）",I.add(O);const z=new _e(new cn(.005,.005,.004,14),qe(596002,.12,.5));z.rotation.z=Math.PI/2,z.position.set(.026,.008,0),z.geometry.dispose(),z.material.dispose(),t.add(I);const H=new nt;H.name="防撞外殼";for(const V of[-D,D])for(const Q of[-D,D]){const de=new S(Math.sign(V)*.075,-.05,Math.sign(Q)*.075),xe=[...T.values()].sort((Ke,L)=>Ke.distanceToSquared(de)-L.distanceToSquared(de))[0],Fe=Dt(new S(V,-.008,Q),xe,.0015,s,6);Fe.name="球籠固定支架（推定）",H.add(Fe)}t.add(H);const G=new nt;G.name="四旋翼";const Z=new ia(.0038,.052,3,e?10:6);Z.rotateZ(Math.PI/2),Z.scale(1,.23,1);for(const V of[-D,D])for(const Q of[-D,D]){const de=new _e(new cn(.0075,.0075,.015,14),o);if(de.position.set(V,.002,Q),de.name="1507 馬達",G.add(de),e){const Ke=new _e(new cn(.009,.009,.007,16),s);Ke.position.set(V,.008,Q),Ke.name="馬達鐘罩",G.add(Ke);for(let L=0;L<6;L++){const ne=L*Math.PI/3,J=Ee(.002,.004,.002,o,V+Math.cos(ne)*.008,.008,Q+Math.sin(ne)*.008);G.add(J)}}const xe=new _e(Z,s);xe.position.set(V,.012,Q),xe.name="槳葉",G.add(xe);const Fe=new _e(new Gn(.003,8,6),r);Fe.position.set(V,.014,Q),G.add(Fe)}t.add(G);const X=new nt;X.name="電池",X.add(Ee(.052,.027,.028,qe(3226694,.7),-.003,-.025,0)),X.add(Ee(.009,.029,.03,s,-.003,-.025,0)),t.add(X);const re=new nt;re.name="飛控",re.add(Ee(.024,.003,.024,qe(1467995,.72),0,.024,0)),re.add(Ee(.009,.002,.009,s,0,.026,0));for(const V of[-.009,.009])for(const Q of[-.009,.009])re.add(Ee(.0025,.007,.0025,o,V,.023,Q));if(e){for(let Q=0;Q<8;Q++)re.add(Ee(.002,.0015,.004,o,-.01+Q*.003,.026,.008));for(const Q of[-D,D])for(const de of[-D,D]){const xe=new Yl([new S(Q,.001,de),new S(Q*.6,.007,de*.6),new S(Q*.2,.021,de*.2)]),Fe=new _e(new Zo(xe,8,7e-4,4,!1),qe(3156518,.8));Fe.name="馬達配線（推定）",M.add(Fe)}const V=new Yl([new S(-.021,-.02,0),new S(-.031,-.016,.016),new S(-.021,.022,.011)]);X.add(new _e(new Zo(V,12,.0012,5,!1),qe(12986669,.7))),X.add(Ee(.008,.006,.005,qe(14918443,.6),-.021,.021,.011))}t.add(re);const pe=new nt;pe.name="識別燈";const be=.1025,Oe=new _e(new Wn(be,.0032,8,e?96:48),a);Oe.rotation.x=Math.PI/2,Oe.name="中央LED承載環",pe.add(Oe);const $e=Yt(n);$e.emissiveIntensity=1.35,$e.userData.teamAccent=!0;const at=new _e(new Wn(be+.001,.0015,6,e?96:48),$e);at.rotation.x=Math.PI/2,at.name="中央連續LED燈帶",pe.add(at);for(let V=0;V<8;V++){const Q=V*Math.PI/4,de=new S(Math.cos(Q)*be,0,Math.sin(Q)*be),xe=[...T.values()].sort((Fe,Ke)=>Fe.distanceToSquared(de)-Ke.distanceToSquared(de))[0];pe.add(Dt(de,xe,.0013,a,6))}_.geometry.dispose();const lt=Ee(.016,.003,.012,Yt(16767107),-.09,-.013,0);lt.name="前鋒識別",pe.add(lt),t.add(pe);for(const V of t.children)V instanceof nt&&V!==G&&di(V,V.children.filter(Q=>Q.name==="前鋒識別"));const K={球籠:[0,.22,0],機架:[0,0,0],核心機身:[.16,.08,0],防撞外殼:[0,-.13,0],四旋翼:[0,.1,0],電池:[0,-.24,0],飛控:[0,.16,0],識別燈:[-.18,0,0]};for(const V of t.children)V.userData.assembledPosition=V.position.toArray(),V.userData.explodeOffset=K[V.name]??[0,0,0],V.userData.evidence="尺寸依原廠；零件厚度及裝配細節推定";return t}function Hx(){const i=new nt;i.name="StadiumShell";const e=new nt;e.name="StadiumRoof",i.add(e);const t=qe(9149870,.42,.65),n=qe(5400444,.77,.16),s=qe(1320765,.56,.4),r=new Un({color:10407398,emissive:7518447,emissiveIntensity:.65,roughness:.28,metalness:.1}),o=Yt(14019071),a=Yt(16769453);i.add(Ee(21,8.2,.23,n,0,3.8,-8.7),Ee(21,8.2,.23,n,0,3.8,13.4)),e.add(Ee(21,.18,22,s,0,8,2));const l=new _e(new Ot(7.6,1.65),hu(["無人機足球聯賽","飛向更高的未來"],1536,360,["#edfaff","#8adfff"],"#073365"));l.rotation.y=Math.PI,l.position.set(0,4.9,13.25),i.add(l);for(let c=-8;c<=8;c+=2)i.add(Ee(.2,7.4,.23,t,c,3.7,13.18),Ee(1.65,1.3,.04,r,c+.9,6.9,13.21)),i.add(Ee(.04,1.4,.06,Yt(5427199),c,4.8,13.02));for(const c of[-1,1]){i.add(Ee(.2,8.2,22,n,c*9.8,3.8,2));for(let f=-7;f<7.5;f+=2.4){i.add(Ee(.3,7.5,.26,t,c*9.55,3.7,f));for(const d of[5.75,6.5,7.25])i.add(Ee(.06,.61,1.94,r,c*9.65,d,f+1.2));i.add(Ee(.07,1.2,.055,Yt(4837375),c*9.36,5.9,f))}i.add(Ee(2.8,.25,14.7,t,c*7.8,3.13,-.4));const h=Dn(12.7,.76,.14,.17,qe(c<0?477867:9639468,.38,.36));h.rotation.y=-c*Math.PI/2,h.position.set(c*6.29,2.92,0),i.add(h);const u=hu([c<0?"空中對戰":"賽事直播",c<0?"飛越極限":"全場聚焦"],1024,220,["#ffffff","#d7ebff"],c<0?"#064394":"#95182e");for(const f of[-3.5,2.3]){const d=new _e(new Ot(4.65,.73),u);d.rotation.y=-c*Math.PI/2,d.position.set(c*6.19,2.95,f),i.add(d)}for(let f=-6.5;f<6.5;f+=1.4)i.add(Ee(.035,.042,.68,a,c*6.19,2.47,f)),i.add(Ee(.4,2.65,.32,t,c*8.4,1.32,f))}for(let c=-8.4;c<=8.5;c+=2.1){i.add(Ee(.2,7.4,.25,t,c,3.7,-8.51));for(const h of[5.8,6.55,7.3])i.add(Ee(1.78,.6,.035,r,c+1.05,h,-8.54))}for(const c of[-5.6,-1.8,2,5.8]){for(const h of[7.32,7.78])e.add(Dt(new S(-9.4,h,c),new S(9.4,h,c),.04,t));for(let h=-9.4;h<9;h+=.9)e.add(Dt(new S(h,7.32,c),new S(h+.9,7.78,c),.022,t))}for(const c of[-7,-3.5,0,3.5,7]){e.add(Dt(new S(c,7.5,-8.5),new S(c,7.5,8),.038,t));for(const h of[-4,0,4]){e.add(Ee(1.05,.11,.58,s,c,7.14,h),Ee(.9,.019,.43,o,c,7.07,h));const u=new _e(new cn(.16,.22,.28,12),s);u.position.set(c+.7,7.03,h),e.add(u);const f=new _e(new cn(.14,.14,.018,16),o);f.position.set(c+.7,6.88,h),e.add(f)}}for(const c of[-4.8,0,4.8])for(const h of[-3.7,1])e.add(Ee(3.8,.025,3.25,r,c,7.89,h));for(const c of[-1,1])for(let h=0;h<3;h++)i.add(Ee(.38,.28,.35,s,c*3.65,6.3-h*.3,-4.1));return i}function Vx(){const i=new nt;i.name="防護網";const e={vertexShader:"varying vec3 world;void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:"varying vec3 world;uniform vec3 color;uniform float opacity;void main(){vec3 n=abs(normalize(cross(dFdx(world),dFdy(world))));vec2 p=n.y>.5?world.xz:n.x>.5?world.zy:world.xy;vec2 cell=p/.085;vec2 fw=max(fwidth(cell),vec2(.001));vec2 d=abs(fract(cell-.5)-.5)/fw;float line=1.-smoothstep(.35,1.05,min(d.x,d.y));float fade=1.-smoothstep(.65,1.6,max(fw.x,fw.y));float a=line*.48*fade*opacity;if(a<.015)discard;gl_FragColor=vec4(color,a);}"},t=(r=zt,o=1)=>new bt({transparent:!0,depthWrite:!1,side:r,uniforms:{color:{value:new Ie(1649460)},opacity:{value:o}},...e}),n=t();for(const r of[-3/2,ze.depth/2]){const o=new _e(new Ot(ze.width,ze.height),n);o.position.set(0,ze.height/2,r),o.name=r>0?"正面完整網面":"後面網面",i.add(o)}for(const r of[-6/2,ze.width/2]){const o=new _e(new Ot(ze.depth,ze.height),n);o.rotation.y=Math.PI/2,o.position.set(r,ze.height/2,0),i.add(o)}const s=new _e(new Ot(ze.width,ze.depth),t(Qn,.12));return s.rotation.x=Math.PI/2,s.position.y=ze.height,s.name="防護網天花板",i.add(s),i}function Gx(){const i=new nt;i.name="CageFrame";const e=qe(15331573,.29,.22),t=qe(1583414,.38,.65),n=qe(10268345,.3,.8),s=Yt(16754219),r=Yt(5695231),o=$n.map(l=>qe(l,.25,.42)),a=new cn(.018,.018,.009,6);a.rotateX(Math.PI/2);for(const l of[-1,1])for(const c of[-1,1]){const h=l*ze.frame.x,u=c*ze.frame.z,f=Dn(ze.frame.thickness-.024,ze.height-.2,ze.frame.thickness-.024,.07,e);f.name="籠體立柱",f.position.set(h,ze.height/2,u),i.add(f);for(const g of[.12,ze.height-.12]){const m=Dn(.53,.48,.43,.15,e);m.position.set(h+l*.11,g,u+c*.04),i.add(m);const p=Ee(.032,.37,.03,s,h+l*.2,g,u+c*.279);p.rotation.z=-l*(g<1?-1:1)*.68,i.add(p);for(const x of[-.1,.1]){const y=new _e(a,n);y.position.set(h+l*.11+x,g,u+c*.273),i.add(y)}}const d=Dn(.21,.73,.035,.055,t);d.position.set(h,ze.height/2,u+c*.206),i.add(d);const v=Dn(.255,.79,.025,.065,s);v.position.set(h,ze.height/2,u+c*.18),i.add(v);for(const g of[.72,ze.height-.72])i.add(Ee(.055,.62,.024,t,h,g,u+c*.202),Ee(.019,.53,.027,r,h,g,u+c*.22));for(const g of[-.073,.073])i.add(Ee(.013,.49,.027,r,h+g,ze.height/2,u+c*.23));i.add(Ee(.65,.12,.61,t,h,-.16,u),Ee(.2,.06,.28,n,h+l*.23,-.19,u))}for(const l of[-.16,ze.height+.16]){for(const c of[-1,1])for(const h of[-1,1]){const u=c*ze.frame.z,f=o[h<0?0:1];i.add(Dt(new S(h*.035,l,u),new S(h*(ze.frame.x-.3),l,u),.145,f,16));const d=Dn(.71,.3,.32,.1,e);d.position.set(h*2.66,l,u),i.add(d),i.add(Ee(.37,.019,.027,r,h*2.65,l,u+c*.178));for(const v of[.58,1.18,1.8,2.24]){const g=new _e(new Wn(.147,.008,5,20),f);g.rotation.y=Math.PI/2,g.position.set(h*v,l,u),i.add(g)}}for(const c of[-1,1]){const h=Dn(.18,.29,.32,.045,e);h.position.set(0,l,c*ze.frame.z),i.add(h)}for(const c of[-1,1])i.add(Dt(new S(c*ze.frame.x,l,-1.68+.14),new S(c*ze.frame.x,l,ze.frame.z-.14),.145,o[c<0?0:1],16))}for(const l of[-1,1])for(const c of[-1,1])for(const h of[-.16,ze.height+.16]){const u=Ee(.56,.57,.56,e,l*(ze.frame.x+.1),h+(h<0?.075:-.075),c*(ze.frame.z+.1));u.name="轉角連接座",i.add(u)}for(const l of[-3/2,ze.depth/2])for(let c=-2.85;c<=2.86;c+=.19)for(const h of[.055,ze.height-.055])i.add(Ee(.027,.11,.048,t,c,h,l+Math.sign(l)*.027));return i}function Wx(){const i=new nt;i.name="TurfField";const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d");let n=173;const s=()=>(n=1664525*n+1013904223>>>0,n/4294967296);t.fillStyle="#397d25",t.fillRect(0,0,1024,512);for(let h=0;h<12;h++)t.fillStyle=h%2?"#398527":"#438e2e",t.fillRect(h*1024/12,0,1024/12,512);for(let h=0;h<155e3;h++){const u=s()*1024,f=s()*512;t.strokeStyle=s()>.5?"rgba(180,220,75,.28)":"rgba(9,48,15,.3)",t.beginPath(),t.moveTo(u,f),t.lineTo(u+s()*1.5,f+1+s()*3),t.stroke()}const r=new Qi(e);r.colorSpace=Ft,r.anisotropy=8;const o=Ee(ze.width,.08,ze.depth,new Un({map:r,bumpMap:r,bumpScale:.008,roughness:.93}),0,-.04,0);o.name="場地",i.add(o);const a=qe(15857119,.8,0),l=Ee(.025,.005,ze.depth-.12,a,0,.005,0);l.name="中線",i.add(l);for(const h of[-1.44,1.44])i.add(Ee(5.88,.005,.024,a,0,.005,h));for(const h of[-2.94,2.94])i.add(Ee(.024,.005,2.88,a,h,.005,0));const c=new _e(new Hr(.48,.505,64),a);c.rotation.x=-Math.PI/2,c.position.y=.007,i.add(c);for(const h of[-1,1]){for(const f of[-.67,.67])i.add(Ee(.65,.005,.024,a,h*2.615,.006,f));i.add(Ee(.024,.005,1.35,a,h*2.3,.006,0));const u=Ee(.94,.006,.88,qe($n[h<0?0:1],.76),h*(ze.goal.x+.47),.008,0);u.name="起飛區",i.add(u)}return i}class zr extends _e{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Qt;const n=this,s=t.color!==void 0?new Ie(t.color):new Ie(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||zr.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new ci,u=new S,f=new S,d=new S,v=new ot,g=new S(0,0,-1),m=new pt,p=new S,x=new S,y=new pt,_=new ot,E=this.camera,A=new Lt(r,o,{samples:c,type:Wt}),T=new bt({name:l.name!==void 0?l.name:"unspecified",uniforms:gi.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=A.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=_,this.material=T,this.onBeforeRender=function(R,w,M){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(M.matrixWorld),v.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(v),p.subVectors(f,d),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),v.extractRotation(M.matrixWorld),g.set(0,0,-1),g.applyMatrix4(v),g.add(d),x.subVectors(f,g),x.reflect(u).negate(),x.add(f),E.position.copy(p),E.up.set(0,1,0),E.up.applyMatrix4(v),E.up.reflect(u),E.lookAt(x),E.far=M.far,E.updateMatrixWorld(),E.projectionMatrix.copy(M.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(E.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const I=E.projectionMatrix;y.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],y.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],y.z=-1,y.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(y)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-a,I.elements[14]=m.w,n.visible=!1;const O=R.getRenderTarget(),z=R.xr.enabled,H=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(A),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(w,E),R.xr.enabled=z,R.shadowMap.autoUpdate=H,R.setRenderTarget(O);const G=M.viewport;G!==void 0&&R.state.viewport(G),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}}zr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Xx(){const i=new nt;i.name="ArenaPlatform";const e=qe(2505036,.31,.65),t=qe(660772,.5,.3),n=Yt(1689855),s=document.createElement("canvas");s.width=256,s.height=256;const r=s.getContext("2d");r.fillStyle="#425367",r.fillRect(0,0,256,256),r.fillStyle="#39495c",r.fillRect(0,0,128,128),r.fillRect(128,128,128,128),r.strokeStyle="#1c2b3b",r.lineWidth=2,r.strokeRect(1,1,254,254),r.beginPath(),r.moveTo(128,0),r.lineTo(128,256),r.moveTo(0,128),r.lineTo(256,128),r.stroke();const o=new Qi(s);o.colorSpace=Ft,o.wrapS=o.wrapT=Ar,o.repeat.set(24/1.8,23/1.8),o.anisotropy=4,i.add(Ee(24,.18,23,new Un({map:o,roughness:.4,metalness:.4}),0,-.53,0));const a=zr.ReflectorShader,l={...a,uniforms:{...gi.clone(a.uniforms),reflectionStrength:{value:.18}},vertexShader:a.vertexShader.replace("varying vec4 vUv;","varying vec4 vUv; varying vec2 floorUv;").replace("vUv = textureMatrix","floorUv = position.xy; vUv = textureMatrix"),fragmentShader:a.fragmentShader.replace("varying vec4 vUv;","uniform float reflectionStrength; varying vec4 vUv; varying vec2 floorUv;").replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );",`
            vec2 cell = abs(fract(floorUv / .9 - .5) - .5);
            float seam = 1. - smoothstep(.002, .008, min(cell.x,cell.y));
            float tile = mod(floor(floorUv.x/.9)+floor(floorUv.y/.9),2.);
            vec3 surface = mix(vec3(.095,.135,.19),vec3(.14,.19,.245),tile);
            gl_FragColor = vec4(mix(surface + base.rgb * reflectionStrength, vec3(.024,.04,.063), seam*.85),1.);
        `)},c=new zr(new Ot(24,23),{textureWidth:640,textureHeight:384,clipBias:.003,multisample:0,shader:l});c.name="地板即時反射",c.rotation.x=-Math.PI/2,c.position.y=-.435,i.add(c);const h=Dn(7.12,4.17,.23,.3,t);h.rotation.x=-Math.PI/2,h.position.y=-.31,i.add(h),i.add(Ee(6.28,.15,3.3,e,0,-.18,0));for(const v of[-1,1]){i.add(Ee(1.15,.09,3.22,e,v*4.03,-.06,0));for(const g of[-1.25,0,1.25]){const m=new _e(new Hr(.25,.268,40),Yt(v<0?1813247:16724820));m.rotation.x=-Math.PI/2,m.position.set(v*4.03,-.006,g),i.add(m)}for(const g of[-2.15,2.15])for(let m=0;m<4;m++)i.add(Ee(.75,.022,.035,n,v*(.5+m*.83),-.31,g));for(const g of[-3.12,3.12])i.add(Dt(new S(v*3.3,-.42,g),new S(v*4.85,-.42,g-Math.sign(g)*.8),.018,n));i.add(Ee(.033,.025,4.6,n,v*4.86,-.42,0))}const u=document.createElement("canvas");u.width=1536,u.height=200;const f=u.getContext("2d");f.fillStyle="#071a33",f.fillRect(0,0,1536,200),f.strokeStyle="#67caff",f.lineWidth=4,f.strokeRect(14,14,1508,172),f.textAlign="center",f.textBaseline="middle",f.shadowColor="#0f98ff",f.shadowBlur=12,f.fillStyle="#ffffff",f.font='800 61px "Microsoft JhengHei",sans-serif',f.fillText("無人機足球聯賽 — 飛向更高的未來 —",768,100);const d=new _e(new Ot(6.7,.87),Vr(u));return d.rotation.x=-Math.PI/2,d.position.set(0,-.413,2.89),i.add(d),{group:i,reflection:c}}function qx(i){const e=new nt;e.name=i?"紅隊旗幟":"藍隊旗幟";const t=document.createElement("canvas");t.width=512,t.height=1024;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,512,900);s.addColorStop(0,i?"#83152f":"#034593"),s.addColorStop(1,i?"#dc2745":"#076cff"),n.fillStyle=s,n.fillRect(0,0,512,1024),n.strokeStyle=i?"#ffabb9":"#a2dfff",n.lineWidth=10,n.beginPath(),n.moveTo(32,0),n.lineTo(32,845),n.lineTo(256,972),n.lineTo(480,845),n.lineTo(480,0),n.stroke(),Bc(n,256,250,255,"#eefcff"),n.textAlign="center",n.fillStyle="#ffffff",n.font='900 114px "Microsoft JhengHei",sans-serif',n.fillText(i?"紅隊":"藍隊",256,517),n.font='700 43px "Microsoft JhengHei",sans-serif',n.fillText(i?"熱血飛行":"團結飛行",256,670),n.fillText(i?"超越自我":"創造無限",256,734),n.font="500 18px sans-serif",n.fillText("D R O N E   S O C C E R",256,819);const r=new Ot(1.17,2.72,14,28),o=r.getAttribute("position");for(let c=0;c<o.count;c++){const h=o.getX(c),u=o.getY(c);u<-.99&&o.setY(c,u+Math.abs(h)*.57*((-u-.99)/.37)),o.setZ(c,Math.sin(h*11)*.027*(1.36-u)/2.72)}r.computeVertexNormals();const a=new _e(r,Vr(t));a.name="隊旗布面",e.add(a);const l=qe(10399677,.3,.7);e.add(Ee(1.36,.04,.05,l,0,1.38,0));for(const c of[-.49,.49])e.add(Dt(new S(c,1.38,0),new S(c,2.4,0),.009,l));return e.position.set(i?4.42:-4.42,4.71,-2.15),e}function Yx(){const i=new nt;i.name="AudienceStand";const e=qe(3951456,.8,.12),t=qe(10398389,.3,.7),n=qe(1517625,.6,.15),s=396,r=(p,x,y=s)=>new $i(p,x,y),o=r(new ia(.108,.19,2,7),qe(16777215,.87)),a=r(new Gn(.086,8,6),qe(16777215,.75)),l=r(new Gn(.09,8,5,0,Math.PI*2,0,1.48),n),c=r(new cn(.031,.035,1,6),qe(16777215,.84),s*2),h=r(new Nn(.35,.24,.35),qe(2178654,.65)),u=r(new cn(.041,.037,.38,6),n,s*2),f=r(new Nn(.082,.06,.15),qe(13884645,.8),s*2),d=r(new cn(.012,.012,.34,6),new fn({color:16777215}),s),v=new Et;let g=0;const m=(p,x,y,_,E,A=1,T=1,R=1,w=0)=>{v.position.set(y,_,E),v.scale.set(A,T,R),v.rotation.set(0,w,0),v.updateMatrix(),p.setMatrixAt(x,v.matrix)};for(const p of[-1,1,2])for(let x=0;x<2;x++){const y=x===0?.05:3.4,_=x===0?5.6:6.4;for(let T=0;T<3;T++){const R=_+T*.54,w=y+T*.32,M=Ee(12.7,.32,.56,e,0,w-.18,-R);p!==2&&(M.rotation.y=Math.PI/2,M.position.set(p*R,w-.18,0)),i.add(M);for(let D=0;D<22;D++){const I=(D-10.5)*.56,O=p===2?I:p*R,z=p===2?-R:I,H=(D*13+T*7+x*3)%9,G=.92+H*.018,Z=p===2?0:-p*Math.PI/2,X=new Ie([1198216,2387361,1588322,8658744,15459799,5402226,2436160,2577524,10964049][H]);m(o,g,O,w+.64,z,1,G,.84,Z),o.setColorAt(g,X),m(a,g,O,w+.91*G,z),a.setColorAt(g,new Ie([14858393,12421221,10185037,15780526][H%4])),m(l,g,O,w+.93*G,z,1,1,1,Z),m(h,g,O,w+.24,z,1,1,1,Z);for(const re of[-1,1]){const pe=new S(re*.072,0,.085).applyAxisAngle(new S(0,1,0),Z);m(u,g*2+(re>0?1:0),O+pe.x,w+.28,z+pe.z,1,1,1,Z),m(f,g*2+(re>0?1:0),O+pe.x,w+.071,z+pe.z,1,1,1,Z);const be=new S(re*.12,.74,0),Oe=new S(re*(.17+H%3*.025),H%3===0?1.12:.48,.055);be.applyAxisAngle(new S(0,1,0),Z).add(new S(O,w,z)),Oe.applyAxisAngle(new S(0,1,0),Z).add(new S(O,w,z));const $e=Oe.clone().sub(be);v.position.copy(be).add(Oe).multiplyScalar(.5),v.scale.set(1,$e.length(),1),v.quaternion.setFromUnitVectors(new S(0,1,0),$e.normalize()),v.updateMatrix();const at=g*2+(re>0?1:0);c.setMatrixAt(at,v.matrix),c.setColorAt(at,X),re>0&&(m(d,g,Oe.x,Oe.y+.13,Oe.z,1,H%3===0?1:.001,1),d.setColorAt(g,new Ie(p===1?16725853:3587327).multiplyScalar(3)))}g++}}const E=new nt,A=-_+.38;E.add(Ee(12.8,.18,.12,n,0,y+.12,A),Ee(12.8,.038,.038,t,0,y+.77,A));for(let T=-6.2;T<=6.2;T+=.8)E.add(Dt(new S(T,y+.14,A),new S(T,y+.77,A),.016,t));for(let T=-5.7;T<6;T+=1.2)E.add(Ee(.72,.029,.034,Yt(p===1?16728939:3389183),T,y+.18,A+.065));p!==2&&(E.rotation.y=p<0?Math.PI/2:-Math.PI/2),i.add(E)}for(const p of[o,a,l,c,h,d,u,f])p.castShadow=!1,p.receiveShadow=!1,p.computeBoundingSphere(),i.add(p);for(const p of[o,a,l,c,d]){p.material=p.material.clone();const x=new Float32Array(p.count);for(let y=0;y<p.count;y++)x[y]=(p===c?Math.floor(y/2):y)*2.399;p.geometry.setAttribute("personSeed",new ql(x,1)),p.userData.crowdMotion=!0}return i.userData.audienceCount=s,i}function jx(){const i=new nt;i.name="ArenaAtmosphere";const e=new cn(.055,.65,3.3,24,1,!0),t=new bt({transparent:!0,depthWrite:!1,side:zt,blending:Tr,uniforms:{tint:{value:new Ie(9750783)}},vertexShader:"varying vec2 vUv; varying vec3 vNormal; varying vec3 vEye; void main(){vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vEye=normalize(-p.xyz);vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform vec3 tint;varying vec2 vUv;varying vec3 vNormal;varying vec3 vEye;void main(){float edge=pow(abs(dot(normalize(vNormal),normalize(vEye))),1.5);float fade=smoothstep(0.,.5,vUv.y)*(1.-smoothstep(.94,1.,vUv.y));gl_FragColor=vec4(tint,edge*fade*.055);}"});for(const n of[-3.5,3.5])for(const s of[-2.6,2.6]){const r=new _e(e,t);r.position.set(n*.9,5.48,s),r.rotation.z=Math.sign(n)*-.2,r.renderOrder=2,i.add(r)}return i}function $x(i){const e=i.arena;e.name="ArenaScene";const t=Xx();e.add(t.group),i.floorReflection=t.reflection,di(t.group);const n=Wx();e.add(n);for(const f of["場地","中線","起飛區"])for(const d of n.getObjectsByProperty("name",f))i.hotspots.push(d);const s=Vx();e.add(Gx(),s),i.hotspots.push(s);for(const f of[-1,1]){const d=vx(f);di(d),e.add(d),i.hotspots.push(d),e.add(qx(f<0?0:1));for(let v=0;v<3;v++){const g=i.person(f<0?0:1);g.position.set(f*4.03,0,(v-1)*1.05),g.rotation.y=f<0?Math.PI/2:-Math.PI/2,g.name="操作員區",i.operators.push(g),e.add(g),v===1&&i.hotspots.push(g)}}i.boardSurface=zx(),wd(i.boardSurface),e.add(kx(i.boardSurface)),e.add(Yx(),Hx(),jx());const r=e.getObjectByName("StadiumRoof"),o=[t.group,n,...i.hotspots.filter(f=>f.name==="球門")],a=e.children.filter(f=>!o.includes(f));for(const f of a)i.cutaway.register(f);di(r);for(const f of a)f instanceof nt&&!i.operators.includes(f)&&di(f,[r,...i.hotspots]);i.cutaway.install();const l=t.reflection.onBeforeRender.bind(t.reflection);let c=-1/0;const h=new S(1/0,0,0),u=new Xn;t.reflection.onBeforeRender=(...f)=>{if(f[1].overrideMaterial)return;const d=performance.now(),v=f[2];if(d-c<33&&v.position.distanceToSquared(h)<1e-8&&v.quaternion.angleTo(u)<1e-5)return;c=d,h.copy(v.position),u.copy(v.quaternion);const g=i.cutaway.uniforms.cutEnabled.value,m=i.renderer.shadowMap.autoUpdate;i.cutaway.uniforms.cutEnabled.value=0,i.renderer.shadowMap.autoUpdate=!1;try{l(...f)}finally{i.cutaway.uniforms.cutEnabled.value=g,i.renderer.shadowMap.autoUpdate=m}},e.traverse(f=>{f instanceof _e&&!i.operators.some(d=>{let v=f;for(;v;){if(v===d)return!0;v=v.parent}return!1})&&(f.updateMatrix(),f.matrixAutoUpdate=!1)})}const pu={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Jo{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new oy(e)}),this.register(function(e){return new ay(e)}),this.register(function(e){return new uy(e)}),this.register(function(e){return new dy(e)}),this.register(function(e){return new fy(e)}),this.register(function(e){return new py(e)}),this.register(function(e){return new ly(e)}),this.register(function(e){return new cy(e)}),this.register(function(e){return new hy(e)}),this.register(function(e){return new my(e)}),this.register(function(e){return new gy(e)}),this.register(function(e){return new vy(e)}),this.register(function(e){return new _y(e)}),this.register(function(e){return new xy(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){const r=new ry,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}}const rt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Qa="KHR_mesh_quantization",wn={};wn[en]=rt.NEAREST;wn[Ou]=rt.NEAREST_MIPMAP_NEAREST;wn[hr]=rt.NEAREST_MIPMAP_LINEAR;wn[bn]=rt.LINEAR;wn[Ro]=rt.LINEAR_MIPMAP_NEAREST;wn[Ci]=rt.LINEAR_MIPMAP_LINEAR;wn[Ai]=rt.CLAMP_TO_EDGE;wn[Ar]=rt.REPEAT;wn[Vo]=rt.MIRRORED_REPEAT;const mu={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Kx=new Ie,gu=12,Zx=1179937895,Jx=2,vu=8,Qx=1313821514,ey=5130562;function fr(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function ty(i){return new TextEncoder().encode(i).buffer}function ny(i){return fr(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function iy(i,e,t){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=Xo.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Ed(i){return Math.ceil(i/4)*4}function el(i,e=0){const t=Ed(i.byteLength);if(t!==i.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function _u(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function sy(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}class ry{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+ea}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const s=this,r=s.buffers,o=s.json;n=s.options;const a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){const d=el(f.result),v=new DataView(new ArrayBuffer(vu));v.setUint32(0,d.byteLength,!0),v.setUint32(4,ey,!0);const g=el(ty(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(vu));m.setUint32(0,g.byteLength,!0),m.setUint32(4,Qx,!0);const p=new ArrayBuffer(gu),x=new DataView(p);x.setUint32(0,Zx,!0),x.setUint32(4,Jx,!0);const y=gu+m.byteLength+g.byteLength+v.byteLength+d.byteLength;x.setUint32(8,y,!0);const _=new Blob([p,m,g,v,d],{type:"application/octet-stream"}),E=new FileReader;E.readAsArrayBuffer(_),E.onloadend=function(){t(E.result)}}}else if(o.buffers&&o.buffers.length>0){const f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){const d=f.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new S;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),s=new S;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(d){return d.colorSpace===Ft?function(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}:function(g){return g}}e instanceof za&&(e=await this.decompressTextureAsync(e)),t instanceof za&&(t=await this.decompressTextureAsync(t));const s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=_u();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const h=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);const d=n(e),v=c.getImageData(0,0,o,a).data;for(let g=2;g<v.length;g+=4)h.data[g]=d(v[g]/256)*256}if(r){c.drawImage(r,0,0,o,a);const d=n(t),v=c.getImageData(0,0,o,a).data;for(let g=1;g<v.length;g+=4)h.data[g]=d(v[g]/256)*256}c.putImageData(h,0,0);const f=(e||t).clone();return f.source=new na(l),f.colorSpace=hi,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case rt.BYTE:case rt.UNSIGNED_BYTE:a=1;break;case rt.SHORT:case rt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===rt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Ed(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let v=n;v<n+s;v++){for(let g=0;g<e.itemSize;g++){let m;e.itemSize>4?m=e.array[v*e.itemSize+g]:(g===0?m=e.getX(v):g===1?m=e.getY(v):g===2?m=e.getZ(v):g===3&&(m=e.getW(v)),e.normalized===!0&&(m=Xo.normalize(m,e.array))),t===rt.FLOAT?h.setFloat32(u,m,!0):t===rt.INT?h.setInt32(u,m,!0):t===rt.UNSIGNED_INT?h.setUint32(u,m,!0):t===rt.SHORT?h.setInt16(u,m,!0):t===rt.UNSIGNED_SHORT?h.setUint16(u,m,!0):t===rt.BYTE?h.setInt8(u,m):t===rt.UNSIGNED_BYTE&&h.setUint8(u,m),u+=a}u%l!==0&&(u+=l-u%l)}const f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===rt.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=el(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=rt.FLOAT;else if(e.array.constructor===Int32Array)a=rt.INT;else if(e.array.constructor===Uint32Array)a=rt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=rt.SHORT;else if(e.array.constructor===Uint16Array)a=rt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=rt.BYTE;else if(e.array.constructor===Uint8Array)a=rt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const l=iy(e,n,s);let c;t!==void 0&&(c=e===t.index?rt.ELEMENT_ARRAY_BUFFER:rt.ARRAY_BUFFER);const h=this.processBufferView(e,a,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});const h=o.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);const f={mimeType:s},d=_u();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);const v=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(v.translate(0,d.height),v.scale(1,-1)),e.data!==void 0){t!==Sn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];v.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)v.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(sy(d,s).then(m=>r.processBufferViewImage(m)).then(m=>{f.bufferView=m})):f.uri=Yu.getDataURL(d,s);const g=a.images.push(f)-1;return h[u]=g,g}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:wn[e.magFilter],minFilter:wn[e.minFilter],wrapS:wn[e.wrapS],wrapT:wn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof za&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});const l=r.textures.push(a)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(fr(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===zt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});const o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,E=e.material.length;_<E;_++)s.push(e.material[_].uuid);else s.push(e.material.uuid);const r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=rt.LINES:e.isLineLoop?a=rt.LINE_LOOP:e.isLine?a=rt.LINE_STRIP:e.isPoints?a=rt.POINTS:a=e.material.wireframe?rt.LINES:rt.TRIANGLES;const l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let v=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;const E=o.attributes[_];if(_=f[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),t.attributes.has(this.getUID(E))){c[_]=t.attributes.get(this.getUID(E));continue}v=null;const T=E.array;_==="JOINTS_0"&&!(T instanceof Uint16Array)&&!(T instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),v=new Rt(new Uint16Array(T),E.itemSize,E.normalized)):(T instanceof Uint32Array||T instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),v=Jo.Utils.toFloat32BufferAttribute(E));const R=this.processAccessor(v||E,o);R!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,E),c[_]=R,t.attributes.set(this.getUID(E),R))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const _=[],E=[],A={};if(e.morphTargetDictionary!==void 0)for(const T in e.morphTargetDictionary)A[e.morphTargetDictionary[T]]=T;for(let T=0;T<e.morphTargetInfluences.length;++T){const R={};let w=!1;for(const M in o.morphAttributes){if(M!=="position"&&M!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}const D=o.morphAttributes[M][T],I=M.toUpperCase(),O=o.attributes[M];if(t.attributes.has(this.getUID(D,!0))){R[I]=t.attributes.get(this.getUID(D,!0));continue}const z=D.clone();if(!o.morphTargetsRelative)for(let H=0,G=D.count;H<G;H++)for(let Z=0;Z<D.itemSize;Z++)Z===0&&z.setX(H,D.getX(H)-O.getX(H)),Z===1&&z.setY(H,D.getY(H)-O.getY(H)),Z===2&&z.setZ(H,D.getZ(H)-O.getZ(H)),Z===3&&z.setW(H,D.getW(H)-O.getW(H));R[I]=this.processAccessor(z,o),t.attributes.set(this.getUID(O,!0),R[I])}u.push(R),_.push(e.morphTargetInfluences[T]),e.morphTargetDictionary!==void 0&&E.push(A[T])}l.weights=_,E.length>0&&(l.extras={},l.extras.targetNames=E)}const g=Array.isArray(e.material);if(g&&o.groups.length===0)return null;let m=!1;if(g&&o.index===null){const _=[];for(let E=0,A=o.attributes.position.count;E<A;E++)_[E]=E;o.setIndex(_),m=!0}const p=g?e.material:[e.material],x=g?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,E=x.length;_<E;_++){const A={mode:a,attributes:c};if(this.serializeUserData(o,A),u.length>0&&(A.targets=u),o.index!==null){let R=this.getUID(o.index);(x[_].start!==void 0||x[_].count!==void 0)&&(R+=":"+x[_].start+":"+x[_].count),t.attributes.has(R)?A.indices=t.attributes.get(R):(A.indices=this.processAccessor(o.index,o,x[_].start,x[_].count),t.attributes.set(R,A.indices)),A.indices===null&&delete A.indices}const T=await this.processMaterialAsync(p[x[_].materialIndex]);T!==null&&(A.material=T),h.push(A)}m===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(e,l)});const y=n.meshes.push(l)-1;return t.meshes.set(r,y),y}detectMeshQuantization(e,t){if(this.extensionsUsed[Qa])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const s=e.split("_",1)[0];pu[s]&&pu[s].includes(n)&&(this.extensionsUsed[Qa]=!0,this.extensionsRequired[Qa]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:Xo.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=Jo.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){const h=r[c],u=dt.parseTrackName(h.name);let f=dt.findNode(t,u.nodeName);const d=mu[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const v=1;let g=h.values.length/h.times.length;d===mu.morphTargetInfluences&&(g/=f.morphTargetInfluences.length);let m;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",g/=3):h.getInterpolation()===Df?m="STEP":m="LINEAR",a.push({input:this.processAccessor(new Rt(h.times,v)),output:this.processAccessor(new Rt(h.values,g)),interpolation:m}),o.push({sampler:a.length-1,target:{node:s.get(f),path:d}})}const l={name:e.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new ot;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Rt(l,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();fr(a,[0,0,0,1])||(r.rotation=a),fr(l,[0,0,0])||(r.translation=l),fr(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),ny(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);const o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const r=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){const t=new Ir;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});const n=[];for(let s=0;s<e.length;s++)e[s]instanceof Ir?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class oy{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);const a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class ay{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class ly{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class cy{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class hy{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class uy{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class dy{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class fy{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class py{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Kx)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class my{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class gy{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class vy{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class _y{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class xy{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new ot,c=new S,h=new Xn,u=new S;for(let d=0;d<s.count;d++)s.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);const f={TRANSLATION:n.processAccessor(new Rt(r,3)),ROTATION:n.processAccessor(new Rt(o,4)),SCALE:n.processAccessor(new Rt(a,3))};s.instanceColor&&(f._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Jo.Utils={insertKeyframe:function(i,e){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n));let a;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){const t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r];const a=dt.parseTrackName(o.name),l=dt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Lf)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();const d=new u.ValueBufferType(c*u.times.length);for(let v=0;v<u.times.length;v++)d[v*c+h]=u.values[v];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,n[l.uuid]=u,t.push(u);continue}const f=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){const v=this.insertKeyframe(u,o.times[d]);u.values[v*c+h]=o.values[d]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){const e=new Rt(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};const Mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ii{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yy=new Ic(-1,1,1,-1,0,1);class My extends wt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const by=new My;class Gr{constructor(e){this._mesh=new _e(by,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Td extends Ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xu extends Ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Sy extends Ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Td(Mr),this.copyPass.material.blending=In,this.clock=new gd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xu!==void 0&&(o instanceof xu?n=!0:o instanceof Sy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ey extends Ii{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}class Ri extends Ii{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Ie(1,1,1),this.hiddenEdgeColor=new Ie(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Lt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Dc,this.depthMaterial.side=zt,this.depthMaterial.depthPacking=_c,this.depthMaterial.blending=In,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=zt,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Lt(this.resolution.x,this.resolution.y,{type:Wt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Lt(r,o,{type:Wt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Lt(r,o,{type:Wt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Lt(Math.round(r/2),Math.round(o/2),{type:Wt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Lt(r,o,{type:Wt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Lt(Math.round(r/2),Math.round(o/2),{type:Wt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=Mr;this.copyUniforms=gi.clone(c.uniforms),this.materialCopy=new bt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:In,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this._fsQuad=new Gr(null),this.tempPulseColor1=new Ie,this.tempPulseColor2=new Ie,this.textureMatrix=new ot;function h(u,f){const d=f.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}render(e,t,n,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ri.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ri.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ri.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ri.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function s(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!n.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new bt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new $(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new bt({uniforms:{maskTexture:{value:null},texSize:{value:new $(.5,.5)},visibleEdgeColor:{value:new S(1,1,1)},hiddenEdgeColor:{value:new S(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new bt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new bt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Tr,depthTest:!1,depthWrite:!1,transparent:!0})}}Ri.BlurDirectionX=new $(1,0);Ri.BlurDirectionY=new $(0,1);const Ty={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Hs extends Ii{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(r,o,{type:Wt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Lt(r,o,{type:Wt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Lt(r,o,{type:Wt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Ty;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(Mr.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader,blending:Tr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new fn,this._fsQuad=new Gr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Hs.BlurDirectionX=new $(1,0);Hs.BlurDirectionY=new $(0,1);const Ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ay extends Ii{constructor(){super(),this.uniforms=gi.clone(Ao.uniforms),this.material=new fm({name:Ao.name,uniforms:this.uniforms,vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader}),this._fsQuad=new Gr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Du?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Iu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Co={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class Cy extends Ii{constructor(e,t,n){super(),this.scene=e,this.camera=t;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Lt(1,1,{minFilter:en,magFilter:en,type:Wt}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Dc,this._materialDepth.depthPacking=_c,this._materialDepth.blending=In;const a=gi.clone(Co.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=t.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=t.near,a.farClip.value=t.far,this.materialBokeh=new bt({defines:Object.assign({},Co.defines),uniforms:a,vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader}),this.uniforms=a,this._fsQuad=new Gr(this.materialBokeh),this._oldClearColor=new Ie}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}class Ry{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.composer=new wy(e,new Lt(1,1,{samples:4,type:Wt})),this.analysisMask=new Lt(1,1,{minFilter:bn,magFilter:bn,format:Sn}),this.composer.addPass(new Ey(t,n)),this.outline=new Ri(new $(1,1),t,n),this.outline.edgeStrength=3,this.outline.edgeThickness=1.4,this.outline.edgeGlow=0,this.outline.pulsePeriod=0,this.outline.visibleEdgeColor.set(6872575),this.outline.hiddenEdgeColor.set(2109755),this.composer.addPass(this.outline),this.bloom=new Hs(new $(1,1),.24,.35,1.2),this.composer.addPass(this.bloom),this.dof=new Cy(t,n,{focus:8,aperture:15e-6,maxblur:.003}),this.dof.enabled=!1,this.composer.addPass(this.dof),this.analysisDim=new Td({uniforms:{tProtected:{value:this.analysisMask.texture},enabled:{value:0},amount:{value:.42}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform sampler2D tProtected;uniform float enabled;uniform float amount;varying vec2 vUv;void main(){vec4 base=texture2D(tDiffuse,vUv);vec4 mask=texture2D(tProtected,vUv);float keep=smoothstep(.008,.045,max(max(mask.r,mask.g),max(mask.b,mask.a)));float dim=mix(1.,1.-amount,(1.-keep)*enabled);base.rgb*=dim;gl_FragColor=base;}"}),this.analysisDim.enabled=!1,this.composer.addPass(this.analysisDim),this.composer.addPass(new Ay)}renderer;scene;camera;bloom;bloomEnabled=!0;bloomStrength=.18;cutawayActive=!1;dofEnabled=!1;focusDistance=8;dof;composer;outline;analysisDim;analysisMask;analysisRoots=[];analysisEnabled=!1;analysisLayer=7;sets=new Map;set(e,t,n){this.sets.set(e,t),n!==void 0&&this.outline.visibleEdgeColor.set(n),this.outline.selectedObjects=[...this.sets.values()].flat()}clear(){this.sets.clear(),this.outline.selectedObjects=[]}resize(e,t){const n=Math.max(1,e),s=Math.max(1,t);this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(n,s),this.analysisMask.setSize(Math.max(1,Math.floor(n*this.renderer.getPixelRatio())),Math.max(1,Math.floor(s*this.renderer.getPixelRatio())))}setAnalysisDim(e,t=[]){this.analysisEnabled=e,this.analysisRoots=t,this.analysisDim.enabled=e,this.analysisDim.uniforms.enabled.value=e?1:0,this.markAnalysisObjects()}markAnalysisObjects(){for(const e of this.analysisRoots)e.traverse(t=>t.layers.enable(this.analysisLayer))}render(){if(this.outline.enabled=this.outline.selectedObjects.length>0&&!this.cutawayActive,this.bloom.enabled=this.bloomEnabled,this.bloom.strength=this.bloomStrength,this.dof.enabled=this.dofEnabled,this.dof.uniforms.focus.value=this.focusDistance,this.analysisEnabled){this.markAnalysisObjects();const e=this.camera.layers.mask,t=this.scene.background,n=this.scene.fog,s=this.renderer.getRenderTarget(),r=this.renderer.getClearColor(new Ie).clone(),o=this.renderer.getClearAlpha();this.camera.layers.set(this.analysisLayer),this.scene.background=null,this.scene.fog=null,this.renderer.setRenderTarget(this.analysisMask),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(s),this.renderer.setClearColor(r,o),this.scene.background=t,this.scene.fog=n,this.camera.layers.mask=e}this.composer.render()}dispose(){for(const e of this.composer.passes)e.dispose();this.analysisMask.dispose(),this.composer.dispose()}}class Py{constructor(e,t){this.dom=e,this.interrupt=t;const n={signal:this.abort.signal};e.addEventListener("pointerdown",r=>{this.pointers.add(r.pointerId),this.x=r.clientX,this.y=r.clientY,this.moved=!1,this.touch()},n),e.addEventListener("pointermove",r=>{this.pointers.has(r.pointerId)&&(Math.hypot(r.clientX-this.x,r.clientY-this.y)>5&&(this.moved=!0),this.touch())},n);const s=r=>{this.pointers.delete(r.pointerId)&&this.touch()};window.addEventListener("pointerup",s,n),window.addEventListener("pointercancel",s,n),e.addEventListener("lostpointercapture",s,n),e.addEventListener("wheel",()=>this.touch(),{...n,passive:!0}),window.addEventListener("blur",()=>{this.pointers.clear(),this.touch()},n)}dom;interrupt;pointers=new Set;last=-1/0;x=0;y=0;moved=!1;abort=new AbortController;get idle(){return!this.pointers.size&&performance.now()-this.last>12e3}touch(){this.last=performance.now(),this.interrupt()}reset(){this.pointers.clear(),this.moved=!1,this.last=-1/0,this.interrupt()}dispose(){this.abort.abort()}}class kc{constructor(e){this.host=e,this.renderer=new cu({antialias:!0,alpha:!1}),this.renderer.info.autoReset=!1,this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ru,this.renderer.outputColorSpace=Ft,this.renderer.toneMapping=hc,this.renderer.toneMappingExposure=1.05,e.append(this.renderer.domElement),this.scene.background=new Ie(729137),this.scene.fog=new bc(729137,18,58),this.camera.position.set(...yt.presets.front.position),this.controls=new Tx(this.camera,this.renderer.domElement),this.controls.target.set(...yt.presets.front.target),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.enablePan=!1,this.controls.minDistance=.35,this.controls.maxDistance=14,this.controls.maxPolarAngle=Math.PI/2,this.selection=new Ry(this.renderer,this.scene,this.camera),this.interaction=new Py(this.renderer.domElement,()=>{delete this._cameraTween,this.currentPreset="",this.ruleOverviewSweep=!1}),this.disposeEnvironment=wx(this.scene,this.renderer),this.scene.add(this.arena,this.paths,this.heat,this.ghosts,this.arrows,this.goalFx),this.buildEnhancedArena(),this.updateAmbient=bx(this.arena),this.scene.add(this.trails.group);const t=[To(0,!1),To(1,!1)];for(let r=0;r<6;r++){const o=t[r<3?0:1].clone(!0);this.droneGroups.push(o),this.scene.add(o)}this.model.visible=!1,this.model.position.y=1,this.scene.add(this.model),this.resize=new ResizeObserver(()=>{const r=e.clientWidth,o=e.clientHeight;this.camera.aspect=r/Math.max(o,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(r,o,!1),this.selection.resize(r,o),this.currentPreset==="front"&&this.automaticCameraAllowed&&this.setCameraPreset("front",void 0,!0)}),this.resize.observe(e),this.listener=r=>{if(r.button!==0||!this.onPick||this.interaction.moved)return;const o=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new $((r.clientX-o.left)/o.width*2-1,-(r.clientY-o.top)/o.height*2+1),this.camera);const a=this.ray.intersectObjects(this.showModel?this.model.children:this.hotspots,!0);if(a.length){let l=a[0].object;for(;l.parent&&(this.showModel?l.parent!==this.model:!this.hotspots.includes(l));)l=l.parent;(this.showModel||this.hotspots.includes(l))&&this.onPick(l.name)}};const n=this.renderer.domElement;n.addEventListener("pointerdown",r=>{this.mode!=="follow"||this.showModel||r.button!==0||(this.followDragging=!0,this.followLastX=r.clientX,this.followLastY=r.clientY,n.setPointerCapture?.(r.pointerId))}),n.addEventListener("pointermove",r=>{if(!this.followDragging||this.mode!=="follow")return;const o=r.clientX-this.followLastX,a=r.clientY-this.followLastY;this.followLastX=r.clientX,this.followLastY=r.clientY,this.followYawOffset=Math.max(-.9,Math.min(.9,this.followYawOffset+o*.006*this.settings.sensitivity)),this.followPitchOffset=Math.max(-.32,Math.min(.32,this.followPitchOffset+a*.004*this.settings.sensitivity))});const s=()=>{this.followDragging=!1};n.addEventListener("wheel",r=>{if(!this.controls.enabled&&this.mode!=="follow")return;r.preventDefault(),r.stopImmediatePropagation(),this.interaction.touch();const o=r.deltaY*(r.deltaMode===1?16:r.deltaMode===2?this.host.clientHeight:1);this.zoomVelocity+=Math.max(-.5,Math.min(.5,o*.001*this.settings.zoom))},{capture:!0,passive:!1,signal:this.inputAbort.signal}),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("lostpointercapture",s),this.renderer.domElement.addEventListener("pointerup",this.listener),this.animate()}host;settings={...oc};cutaway=new _x;cameraMin=new S(-9,.18,-7.9);cameraMax=new S(9,13.5,12.7);trails=new Mx;updateAmbient=(e,t)=>{};disposeEnvironment=()=>{};selection;interaction;get automaticCameraAllowed(){return this.interaction?.idle??!0}renderer;floorReflection;scene=new Ir;camera=new Qt(yt.fov,1,yt.near,yt.far);controls;arena=new nt;droneGroups=[];operators=[];model=To();paths=new nt;heat=new nt;ghosts=new nt;keys=new Set;mode="orbit";follow=0;zoomVelocity=0;inputAbort=new AbortController;followDistance=.85;followYawOffset=0;followPitchOffset=0;followDragging=!1;followLastX=0;followLastY=0;showModel=!1;explode=0;autoRotate=!1;quality="auto";reduced=!1;last;received=0;impact=0;arrows=new nt;goalFx=new nt;goalFxParticles=[];goalFxRing;boardSurface;lastGoalTick=-1;ray=new Dm;hotspots=[];hoverEnabled=!1;onPick;clock=new gd;fps=60;currentPreset="front";ruleOverviewSweep=!1;handoffFirstFrame=!1;autoDegraded=!1;slowFrames=0;shadowsActive=!0;shadowTime=-1/0;frameCount=0;fpsTime=0;resize;raf=0;listener;buildEnhancedArena(){$x(this),this.setCeilingView(!1)}setCeilingView(e){const t=this.arena.getObjectByName("防護網天花板");if(!t)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const s of n)!(s instanceof bt)||!s.uniforms.opacity||(s.uniforms.opacity.value=e?.12:1,s.side=e?Qn:zt,s.needsUpdate=!0)}configureShadows(e){this.shadowsActive=e,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=e,this.scene.traverse(t=>{t instanceof yr&&t.castShadow&&(t.shadow.intensity=e?1:0)})}person(e){return yx(e)}setModelTeam(e){this.model.traverse(t=>{if(t instanceof _e){const n=Array.isArray(t.material)?t.material:[t.material];for(const s of n)s instanceof Un&&s.userData.teamAccent&&(s.color.setHex((s.userData.cageAccent?[22015,16711722]:$n)[e]??13358559),s.emissiveIntensity>0&&s.emissive.copy(s.color))}})}setFrame(e){const t=!this.last||e.time<this.last.time||e.time-this.last.time>.2,n=this.handoffFirstFrame;this.handoffFirstFrame=!1,this.last=e,this.updateBoard(e);const s=e.events?.find(r=>r.type==="goal"&&r.tick!==this.lastGoalTick);s&&(this.lastGoalTick=s.tick,this.triggerGoalFx(Number(s.team??((s.droneId??0)<3?0:1)))),this.received=performance.now();for(const r of e.drones){const o=this.droneGroups[r.id];o.userData.target=new S(...r.pos),o.userData.rotation=new Xn(...r.rot);const a=new S(...r.vel),l=o.userData.velocity;l?t||e.events?.some(u=>u.type==="collision"&&u.droneId===r.id)?l.copy(a):l.lerp(a,.35):o.userData.velocity=a,t&&!n&&(o.position.copy(o.userData.target),o.quaternion.copy(o.userData.rotation)),o.visible=!this.showModel;const c=o.getObjectByName("前鋒識別");c&&(c.visible=r.role==="striker");const h=o.userData.label;h&&(h.visible=!!this._droneLabels||r.id===this._hoveredDrone)}e.events?.some(r=>r.type==="collision")&&(this.impact=.014)}updateBoard(e){for(const n of this.hotspots.filter(s=>s.name==="球門"))bd(n,e?.score?.[n.userData.scoringTeam]??0);if(!this.boardSurface)return;const t=JSON.stringify([e?.score,Math.floor(e?.remaining??180),e?.set]);this._boardKey!==t&&(this._boardKey=t,wd(this.boardSurface,e?.score??[0,0],Number(e?.remaining??180),Number(e?.set??1)))}setMode(e,t=0){this.setCeilingView(!1);const n=this.arena.getObjectByName("StadiumRoof");n&&(n.visible=!0),delete this._cameraTween,this.interaction.touch(),this.mode=e,this.follow=t,this.controls.enabled=e!=="free"&&e!=="follow",e==="follow"&&(this.followYawOffset=0,this.followPitchOffset=0,this.followDragging=!1),e==="orbit"&&(this.camera.position.set(...yt.presets.orbit.position),this.controls.target.set(...yt.presets.orbit.target),this.camera.lookAt(this.controls.target)),e==="free"&&(this.controls.enabled=!1)}setModel(e){this.selection.clear(),delete this._cameraTween,this.showModel=e,this.arena.visible=!e,this.paths.visible=!e,this.heat.visible=!e,this.model.visible=e,this.droneGroups.forEach(t=>t.visible=!e),this.goalFx.visible=!e,e?(this.camera.position.set(...yt.presets.model.position),this.controls.target.set(...yt.presets.model.target),this.controls.minDistance=.2,this.controls.maxDistance=2,this.controls.maxPolarAngle=Math.PI*.95):(this.controls.minDistance=.35,this.controls.maxDistance=14,this.controls.maxPolarAngle=Math.PI/2,this.setMode("orbit"))}setExplode(e){this.explode=Math.max(0,Math.min(1,e)),this.interaction.touch();const t=this.camera.position.clone().sub(this.controls.target).normalize();this.controls.target.set(0,1+this.explode*.035,0),this.camera.position.copy(this.controls.target).addScaledVector(t,.57+this.explode*.6),this.camera.lookAt(this.controls.target)}highlight(e){this.selection.set("model",this.model.children.filter(t=>t.name===e))}setQuality(e){if(this.quality=e,e!=="custom"){const t=Qo(e);this.settings={...this.settings,resolution:t.resolution,shadows:t.shadows,reflection:t.reflection,bloom:t.bloom,dof:t.dof}}this.applySettings(this.settings)}applySettings(e){this.autoDegraded=!1,this.slowFrames=0,this.settings={...e},this.controls.rotateSpeed=e.sensitivity,this.controls.zoomSpeed=e.zoom,this.controls.enableDamping=e.inertia>0,this.renderer.setPixelRatio(Math.min(devicePixelRatio,e.resolution)),this.configureShadows(e.shadows),this.selection.bloomEnabled=e.bloom>0,this.selection.bloomStrength=e.bloom,this.floorReflection&&(this.floorReflection.visible=e.reflection>0,this.floorReflection.material.uniforms.reflectionStrength.value=e.reflection),this.selection.resize(this.host.clientWidth,this.host.clientHeight)}clearGroup(e){for(const t of[...e.children])e.remove(t),t.traverse(n=>{const s=n;if(s.geometry&&s.geometry.dispose(),s.material)for(const r of Array.isArray(s.material)?s.material:[s.material])r.dispose()})}trajectories(e,t,n,s,r="team",o=!1){const a=o?this.ghosts:this.paths;this.clearGroup(a);for(const l of t){const c=[],h=[],u=e.filter(v=>v.time>=n&&v.time<=s),f=Math.max(1,Math.floor(u.length/3e3));for(let v=0;v<u.length;v+=f){const g=u[v].drones[l];if(!g)continue;c.push(...g.pos);const m=new Ie($n[l<3?0:1]);r==="height"&&m.setHSL(.65-g.pos[1]/3*.65,.85,.5),r==="speed"&&m.setHSL(.65-Math.min(1,Math.hypot(...g.vel)/3)*.65,.85,.5),h.push(m.r,m.g,m.b)}if(c.length<6)continue;const d=new wt;d.setAttribute("position",new it(c,3)),d.setAttribute("color",new it(h,3)),a.add(new Nr(d,new Ur({vertexColors:!0,transparent:!0,opacity:o?.28:.85})))}}heatmap(e,t,n,s,r=0,o=3){this.clearGroup(this.heat);const a=new Float32Array(1800);for(let v=1;v<e.length;v++){const g=e[v];if(g.time<n||g.time>s)continue;const m=Math.max(0,Math.min(.2,g.time-e[v-1].time));for(const p of t){const x=g.drones[p]?.pos;if(!x||x[1]<r||x[1]>o)continue;const y=Math.max(0,Math.min(59,Math.floor((x[0]+3)*10))),_=Math.max(0,Math.min(29,Math.floor((x[2]+1.5)*10)));a[_*60+y]+=m}}const l=Math.max(.001,...a),c=document.createElement("canvas");c.width=60,c.height=30;const h=c.getContext("2d"),u=h.createImageData(60,30);for(let v=0;v<a.length;v++){const g=a[v]/l;u.data.set([255,Math.round(220*(1-g)),55,Math.round(Math.sqrt(g)*210)],v*4)}h.putImageData(u,0,0);const f=new Qi(c),d=new _e(new Ot(6,3),new fn({map:f,transparent:!0,depthWrite:!1,side:zt}));d.rotation.x=-Math.PI/2,d.position.y=.022,this.heat.add(d)}exportModel(){const e=this.model.clone(!0);e.position.set(0,0,0),e.rotation.set(0,0,0),e.scale.setScalar(1);for(const t of e.children)t.position.fromArray(t.userData.assembledPosition??[0,0,0]);new Jo().parse(e,t=>{const n=new Blob([t instanceof ArrayBuffer?t:JSON.stringify(t)],{type:"application/octet-stream"}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download="可編輯無人機.glb",s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)},console.error,{binary:!0})}animate=()=>{this.raf=requestAnimationFrame(this.animate);const e=Math.min(.05,this.clock.getDelta()),t=this.clock.elapsedTime;if(!this.host.isConnected||this.host.clientWidth===0){this.frameCount=0,this.fpsTime=t;return}if(this.frameCount++,t-this.fpsTime>1&&(this.fps=this.frameCount/(t-this.fpsTime),this.frameCount=0,this.fpsTime=t,this.slowFrames=this.fps<58?this.slowFrames+1:0,this.quality==="auto"&&this.slowFrames>=2&&t>4&&!this.autoDegraded&&(this.autoDegraded=!0,this.renderer.setPixelRatio(1),this.configureShadows(!1),this.selection.bloomEnabled=!1,this.floorReflection&&(this.floorReflection.visible=!1))),this.showModel&&(this.autoRotate&&!this.reduced&&this.automaticCameraAllowed&&(this.model.rotation.y+=e*.3),this.model.children.forEach(a=>{const l=a.userData.assembledPosition??[0,0,0],c=a.userData.explodeOffset??[0,0,0],h=1-Math.exp(-e*8);a.position.x+=(l[0]+c[0]*this.explode-a.position.x)*h,a.position.y+=(l[1]+c[1]*this.explode-a.position.y)*h,a.position.z+=(l[2]+c[2]*this.explode-a.position.z)*h})),Math.abs(this.zoomVelocity)>1e-5){const a=this.zoomVelocity*(this.settings.inertia===0?1:1-Math.exp(-e/.1));if(this.zoomVelocity-=a,this.mode==="follow"&&!this.showModel)this.followDistance=Math.max(.45,Math.min(2.5,this.followDistance*Math.exp(a)));else{const l=this.camera.position.clone().sub(this.controls.target),c=Math.max(this.controls.minDistance,Math.min(this.controls.maxDistance,l.length()*Math.exp(a)));this.camera.position.copy(this.controls.target).add(l.setLength(c))}}const n=this._cameraTween;let s=!1;if(this.ruleOverviewSweep&&!this.reduced&&this.mode==="orbit"&&!this.showModel){const a=yt.presets.ruleOverview,l=new S(...a.target),c=new S(...a.position).sub(l),h=Math.sin(performance.now()/or.ruleOverviewPeriodMs*Math.PI*2)*or.ruleOverviewYaw,u=c.applyAxisAngle(new S(0,1,0),h).add(l),f=1-Math.exp(-e*5);this.camera.position.lerp(u,f),this.controls.target.lerp(l,f),this.camera.lookAt(this.controls.target),s=!0}else if(n){s=!0;const a=Math.min(1,(performance.now()-n.started)/n.duration),l=1-Math.pow(1-a,3);this.camera.position.lerpVectors(n.fromPos,n.toPos,l),this.controls.target.lerpVectors(n.fromTarget,n.toTarget,l),this.mode==="follow"&&this.camera.lookAt(this.controls.target),a>=1&&(delete this._cameraTween,s=!1)}else if(this.mode==="follow"&&!this.showModel){const a=this.last?.drones[this.follow],l=this.droneGroups[this.follow];if(a&&l){const c=l.position.clone(),h=new S(1,0,0).applyQuaternion(l.quaternion),u=Math.atan2(h.z,h.x);if(!this.followDragging){const m=Math.pow(.001,e/(or.followReturnMs/1e3));this.followYawOffset*=m,this.followPitchOffset*=m}const f=u+this.followYawOffset,d=c.clone().add(new S(-Math.cos(f)*this.followDistance,.34+this.followPitchOffset,-Math.sin(f)*this.followDistance)),v=c.clone().add(new S(Math.cos(u)*.28,0,Math.sin(u)*.28)),g=this.settings.inertia===0?1:1-Math.exp(-e/this.settings.inertia);this.camera.position.lerp(d,g),this.controls.target.lerp(v,g),this.camera.lookAt(this.controls.target)}}if(this.mode==="free"){const a=new S;this.camera.getWorldDirection(a);const l=a.clone().cross(this.camera.up).normalize();for(const c of this.keys)c==="KeyW"&&this.camera.position.addScaledVector(a,e*3),c==="KeyS"&&this.camera.position.addScaledVector(a,-e*3),c==="KeyA"&&this.camera.position.addScaledVector(l,-e*3),c==="KeyD"&&this.camera.position.addScaledVector(l,e*3),c==="Space"&&(this.camera.position.y+=e*3),(c==="ShiftLeft"||c==="ShiftRight")&&(this.camera.position.y-=e*3);this.controls.target.copy(this.camera.position).add(a)}else!s&&this.mode!=="follow"&&(this.controls.dampingFactor=this.settings.inertia===0?1:1-Math.exp(-e/this.settings.inertia),this.controls.update(e));if(!this.reduced)for(const a of this.showModel?[this.model]:this.droneGroups)a.traverse(l=>{l.name==="槳葉"&&(l.rotation.y+=e*70)});this.operators.forEach((a,l)=>{const c=a.userData.rig;if(!c)return;const h=!this.reduced&&this.settings.people,u=l*2.399,f=h?Math.sin(t*(1.35+l*.07)+u):0;c.upper.scale.y=1+f*.003,c.upper.rotation.y=h?Math.sin(t*.24+u)*.065:0,c.head.rotation.y=h?Math.sin(t*.37+u)*.095:0;const d=3.1+l*1.37%2.3,v=(t+u)%d;c.eyes.scale.y=h?1-.96*Math.max(0,1-Math.abs(v-.12)/.12):1;const g=this.last?.phase==="finished"&&l<3==this.last.wins[0]>this.last.wins[1];c.upper.rotation.z=h&&g?Math.sin(t*2.2)*.035:0});for(const a of this.droneGroups)if(a.userData.target){const l=Math.min(.05,(performance.now()-this.received)/1e3),c=a.userData.target.clone().addScaledVector(a.userData.velocity,l),h=1-Math.exp(-e*(5/(or.handoffMs/1e3)));a.position.lerp(c,h),a.quaternion.slerp(a.userData.rotation,h)}for(const a of this.hotspots.filter(l=>l.name==="球門"))a.userData.flash*=Math.exp(-e*3),a.userData.flashMaterial&&(a.userData.flashMaterial.emissiveIntensity=.12+a.userData.flash*2.4);if(this.goalFxParticles.length){for(const l of this.goalFxParticles)l.life-=e,l.velocity.y-=e*.75,l.mesh.position.addScaledVector(l.velocity,e),l.mesh.rotation.x+=e*5,l.mesh.rotation.z+=e*4,l.mesh.material.opacity=Math.max(0,l.life/1.8);const a=1.8-(this.goalFxParticles[0]?.life??0);this.goalFxRing&&(this.goalFxRing.scale.setScalar(1+a*.45),this.goalFxRing.material.opacity=Math.max(0,1-a/1.8)),this.goalFxParticles.every(l=>l.life<=0)&&this.clearGoalFx()}const r=this.reduced||this.mode!=="free"||!this.host.closest("#stage.fullscreen")?0:this.impact*Math.sin(t*95);this.camera.position.x+=r,this.showModel||(this.camera.position.clamp(this.cameraMin,this.cameraMax),this.camera.lookAt(this.controls.target)),this.camera.updateMatrixWorld();const o=this.mode==="follow"?Math.min(or.followCutawayRadius,this.settings.cutawayRadius):this.settings.cutawayRadius;this.cutaway.update(this.camera,this.mode==="follow"?this.droneGroups[this.follow].position:this.controls.target,this.renderer,!this.showModel&&this.settings.cutaway,o),this.selection.cutawayActive=!this.showModel&&this.settings.cutaway,this.selection.dofEnabled=this.settings.dof&&this.quality!=="low"&&!this.host.closest("#stage.fullscreen"),this.selection.focusDistance=this.camera.position.distanceTo(this.controls.target),this.updateAmbient(t,this.reduced||!this.settings.people),this.trails.update(this.droneGroups,e,!this.showModel&&!this.reduced),this.shadowsActive&&t-this.shadowTime>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowTime=t),this.renderer.info.reset(),this.selection.render(),this.camera.position.x-=r,this.impact*=Math.exp(-e*15)};motionOverlay(e,t,n,s=!1){this.clearGroup(this.arrows);for(const r of n){const o=e.filter(l=>l.time>=t-1&&l.time<=t);for(let l=0;l<o.length;l+=Math.max(1,Math.floor(o.length/8))){const c=o[l].drones[r],h=new _e(new Gn(.11,8,6),new fn({color:$n[c.team],transparent:!0,opacity:.07+l/o.length*.12,depthWrite:!1,wireframe:!0}));h.position.fromArray(c.pos),this.arrows.add(h)}const a=o.at(-1)?.drones[r];if(s&&a){const l=new S(Math.cos(a.yaw),0,Math.sin(a.yaw));this.arrows.add(new Lm(l,new S(...a.pos),.4,$n[a.team],.1,.07))}}}setRuleOverviewSweep(e){if(!e||this.reduced){this.ruleOverviewSweep=!1;return}this.setCameraPreset("ruleOverview",void 0,!0),this.ruleOverviewSweep=!0}setAnalysisDim(e){this.selection.setAnalysisDim(e,[...this.droneGroups,this.paths,this.heat,this.ghosts,this.arrows,this.goalFx,...this.hotspots.filter(t=>t.name==="球門")])}resetVisualState(e="arena",t="hard"){this.trails.clear(),delete this._cameraTween,this.interaction.reset(),this.ruleOverviewSweep=!1,this.handoffFirstFrame=t==="handoff",this.autoRotate=!1,this.explode=0,this.model.rotation.set(0,0,0);for(const n of this.model.children)n.userData.baseY!==void 0&&(n.position.y=n.userData.baseY);this.keys.clear(),this.hoverEnabled=!1,this.followYawOffset=0,this.followPitchOffset=0,this.followDragging=!1,this.clearGroup(this.paths),this.clearGroup(this.heat),this.clearGroup(this.ghosts),this.clearGroup(this.arrows),this.clearGoalFx(),this.setAnalysisDim(!1),this.lastGoalTick=-1,this.last=void 0,this.received=0,this.impact=0,this.updateBoard?.({score:[0,0],remaining:180,set:1}),this.setHotspotOutline(void 0),this.setHoveredDrone(void 0);for(let n=0;n<this.droneGroups.length;n++){const s=this.droneGroups[n];t!=="handoff"&&(s.position.set(n<3?-1.55:1.55,1.35,(n%3-1)*.58),s.rotation.set(0,0,0)),delete s.userData.target,delete s.userData.rotation,delete s.userData.velocity,s.visible=!0}this.setModel(e==="model"),this.setCameraPreset(e==="model"?"model":e==="tactical"?"tactical":"front",void 0,!0)}setCameraPreset(e,t,n=!1){this.zoomVelocity=0,this.currentPreset=e;const s=this.arena.getObjectByName("StadiumRoof");s&&(s.visible=e!=="top"),this.setCeilingView(e==="top");const r=yt.presets[e];this.camera.fov=r&&"fov"in r?r.fov:yt.fov,this.camera.updateProjectionMatrix();let o=new S(...yt.presets.front.position),a=new S(...yt.presets.front.target),l="orbit",c=typeof t=="number"?t:0;const h=typeof t=="number"?this.last?.drones?.[t]:void 0;if(e in yt.presets&&!["front","overview","tactical","orbit","model"].includes(e)){const d=yt.presets[e];o.fromArray(d.position),a.fromArray(d.target)}else if(e==="overview")o.set(...yt.presets.overview.position),a.set(...yt.presets.overview.target);else if(e==="front")this.camera.fov=yt.fov,this.camera.aspect<1.35?(o.set(0,3.5,12.2),this.camera.fov=Math.min(90,Math.max(42,2*Math.atan(5.2/(12.2*this.camera.aspect))*180/Math.PI)),this.camera.updateProjectionMatrix(),a.set(0,2.3,0)):(o.set(...yt.presets.front.position),a.set(...yt.presets.front.target));else if(e==="tactical")o.set(...yt.presets.tactical.position),a.set(...yt.presets.tactical.target);else if(e==="orbit")o.set(...yt.presets.orbit.position),a.set(...yt.presets.orbit.target);else if(e==="model")o.set(...yt.presets.model.position),a.set(...yt.presets.model.target);else if(e==="follow"){l="follow";const d=c<3?-1.55:1.55,v=(c%3-1)*.58,g=c<3?0:Math.PI;if(h){const m=h.yaw??g;o.set(h.pos[0]-Math.cos(m)*.85,h.pos[1]+.34,h.pos[2]-Math.sin(m)*.85),a.set(h.pos[0]+Math.cos(m)*.28,h.pos[1],h.pos[2]+Math.sin(m)*.28)}else o.set(d-Math.cos(g)*.85,1.69,v-Math.sin(g)*.85),a.set(d+Math.cos(g)*.28,1.35,v+Math.sin(g)*.28)}else if(e==="close"){const d=typeof t=="string"?t:"",v=this.hotspots.find(g=>g.name===d);if(v){const g=new xi().setFromObject(v);a.copy(g.getCenter(new S));const m=d==="防護網"?new S(0,.35,3.2):d==="操作員區"?new S(1.35,.5,1.9):new S(.9,.5,1.4);o.copy(a).add(m)}}this.follow=c,this.controls.enabled=l!=="free"&&l!=="follow",l==="follow"&&(this.followYawOffset=0,this.followPitchOffset=0,this.followDragging=!1);const u=this.camera.position.clone(),f=this.controls.target.clone();n||this.reduced?(this.camera.position.copy(o),this.controls.target.copy(a),this.camera.lookAt(this.controls.target),delete this._cameraTween,this.mode=l):(this._cameraTween={fromPos:u,toPos:o,fromTarget:f,toTarget:a,started:performance.now(),duration:520},this.mode=l)}focusHotspot(e){this.interaction.touch(),this.setHotspotOutline(e),this.setCameraPreset("close",e)}setHotspotOutline(e){const t=this.hotspots.find(n=>n.name===e);this.selection.set("hotspot",t?[t]:[])}setDroneLabels(e){this._droneLabels=e;for(const[t,n]of this.droneGroups.entries()){let s=n.userData.label;if(!s){const r=["藍 01 · 前鋒","藍 02 · 助攻","藍 03 · 守門","紅 01 · 前鋒","紅 02 · 助攻","紅 03 · 守門"][t],o=document.createElement("canvas"),a=o.getContext("2d");a.font='700 168px "Microsoft JhengHei",sans-serif';const l=Math.ceil(a.measureText(r).width+56),c=206;o.width=l,o.height=c;const h=o.getContext("2d");h.fillStyle="#071827e8",h.strokeStyle=t<3?"#41b9ff":"#ff687c",h.lineWidth=10,h.roundRect(5,5,l-10,c-10,28),h.fill(),h.stroke(),h.fillStyle="#fff",h.font='700 168px "Microsoft JhengHei",sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillText(r,l/2,c/2+4);const u=new Qi(o);u.colorSpace=Ft,s=new Pp(new td({map:u,transparent:!0,depthTest:!1})),s.scale.set(.72*l/840,.124*c/144,1),s.position.set(0,.5,0),n.add(s),n.userData.label=s}s.visible=e||t===this._hoveredDrone}}setHoveredDrone(e){this._hoveredDrone!==e&&(this._hoveredDrone=e,this.selection.set("hover",[],e===void 0?6872575:$n[e<3?0:1]),this.selection.set("hover",e===void 0?[]:[this.droneGroups[e]]),this.setDroneLabels(!!this._droneLabels),this.onHover?.(e))}enableDroneHover(){if(this.hoverEnabled=!0,this._hoverBound)return;const e=this.renderer.domElement,t=n=>{if(!this.hoverEnabled||this.showModel||!this.host.isConnected){this.setHoveredDrone(void 0);return}const s=e.getBoundingClientRect();if(!s.width||!s.height)return;this.ray.setFromCamera(new $((n.clientX-s.left)/s.width*2-1,-(n.clientY-s.top)/s.height*2+1),this.camera);let o=this.ray.intersectObjects(this.droneGroups,!0)[0]?.object;for(;o&&o.parent&&!this.droneGroups.includes(o);)o=o.parent;this.setHoveredDrone(o?this.droneGroups.indexOf(o):void 0)};e.addEventListener("pointermove",t),e.addEventListener("pointerleave",()=>this.setHoveredDrone(void 0)),this._hoverBound=!0}renderPracticeThumbnail(e,t){try{const n=Math.max(300,e.clientWidth||600),s=Math.max(140,e.clientHeight||180);e.width=n,e.height=s;const r=kc;r._thumbRenderer??=new cu({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});const o=r._thumbRenderer;o.setPixelRatio(1),o.setSize(n,s,!1),o.setClearColor(794157,1);const a=new Ir;a.background=new Ie(794157),a.add(new md(13627135,2111052,2));const l=new yr(16777215,2.5);l.position.set(2,5,4),a.add(l);const c=new _e(new Ot(8,4.2),new Un({color:2056261,roughness:.9}));c.rotation.x=-Math.PI/2,a.add(c);const h=To(t==="guard"?1:0);h.scale.setScalar(4.2),h.position.set(-.9,1.15,0),a.add(h);const u=[];let f;if(t==="eight")for(let p=0;p<=96;p++){const x=p/96*Math.PI*2;u.push(new S(1.15*Math.sin(x),.025,.68*Math.sin(2*x)))}else t==="recover"?u.push(new S(-1.5,.025,-.9),new S(-.4,.025,.55),new S(.55,.025,-.62),new S(1.5,.025,.75)):t==="shoot"?(u.push(new S(-1.8,.025,0),new S(.8,.025,0)),f=new _e(new Wn(.3,.07,8,32),new Un({color:15199730})),f.rotation.y=Math.PI/2,f.position.set(1.45,1.65,0),a.add(f)):t==="support"?u.push(new S(-1.2,.025,-.65),new S(-.15,.025,0),new S(1.1,.025,.45)):t==="guard"?u.push(new S(1.7,.025,.85),new S(.55,.025,0),new S(1.7,.025,-.85)):(u.push(new S(-1,.025,0),new S(1,.025,0)),f=new _e(new Wn(.24,.012,8,32),new fn({color:3466707})),f.rotation.x=-Math.PI/2,f.position.set(0,1.5,0),a.add(f));u.length>1&&a.add(new Nr(new wt().setFromPoints(u),new Ur({color:4380909})));const d=new Qt(32,n/s,.01,40);d.position.set(0,3.4,6.8),d.lookAt(0,1,0),r._thumbEntries??=new Set;const v=r._thumbEntries,g={canvas:e,scene:a,camera:d,drone:h,courseId:t,points:u,ring:f,w:n,h:s};v.add(g);const m=()=>{v.delete(g)&&(a.traverse(p=>{const x=p;if(x.geometry&&x.geometry.dispose(),x.material)for(const y of Array.isArray(x.material)?x.material:[x.material])y.dispose()}),v.size===0&&r._thumbRaf&&(cancelAnimationFrame(r._thumbRaf),r._thumbRaf=0))};if(!r._thumbRaf){let p=performance.now();const x=y=>{const _=Math.min(.05,(y-p)/1e3);p=y;for(const E of v){const A=y/1e3,T=A%4/4,R=E.drone;if(E.courseId==="hover")R.position.set(0,1.12+Math.sin(A*2)*.16,0);else if(E.courseId==="eight"){const M=T*Math.PI*2;R.position.set(1.15*Math.sin(M),1.18,.68*Math.sin(2*M)),R.rotation.y=Math.atan2(1.36*Math.cos(2*M),1.15*Math.cos(M))}else if(E.courseId==="recover"){const M=E.points.length-1,D=T*M,I=Math.min(M-1,Math.floor(D)),O=D-I,z=E.points[I],H=E.points[I+1];R.position.set(z.x+(H.x-z.x)*O,1.18,z.z+(H.z-z.z)*O),R.rotation.y=Math.atan2(H.z-z.z,H.x-z.x)}else if(E.courseId==="shoot"){const M=-1.8+(Math.sin(A*1.15)+1)/2*2.6;R.position.set(M,1.18,0),R.rotation.y=0}else if(E.courseId==="support"){const M=(Math.sin(A*1.1)+1)/2;R.position.set(-1.2+2.3*M,1.18,-.65+1.1*M),R.rotation.y=.45}else E.courseId==="guard"?(R.position.set(.7,1.18,Math.sin(A*1.4)*.82),R.rotation.y=Math.PI/2):R.position.set(-1+(Math.sin(A)+1)/2*2,1.18,0);R.rotation.y+=_*.35,R.traverse(M=>{M.name==="槳葉"&&(M.rotation.y+=_*70)}),E.ring&&E.ring.scale.setScalar(1+Math.sin(A*3)*.08),o.setSize(E.w,E.h,!1),o.render(E.scene,E.camera);const w=E.canvas.getContext("2d");w&&(w.clearRect(0,0,E.w,E.h),w.drawImage(o.domElement,0,0,E.w,E.h))}v.size?r._thumbRaf=requestAnimationFrame(x):r._thumbRaf=0};r._thumbRaf=requestAnimationFrame(x)}return m}catch(n){console.warn("practice thumbnail unavailable",n);return}}clearGoalFx(){for(const e of[...this.goalFx.children])this.goalFx.remove(e),e.traverse(t=>{const n=t;n.geometry&&n.geometry.dispose();const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])r.dispose()});this.goalFxParticles=[],this.goalFxRing=void 0}triggerGoalFx(e){this.clearGoalFx();const t=$n[e===0?0:1],n=e===0?ze.goal.x:-2;for(const r of this.hotspots.filter(o=>o.name==="球門"&&o.userData.scoringTeam===e))r.userData.flash=1;const s=new _e(new Wn(ze.goal.radius*.78,.026,10,56),new fn({color:t,transparent:!0,opacity:.95}));s.rotation.y=Math.PI/2,s.position.set(n,ze.goal.y,0),this.goalFx.add(s),this.goalFxRing=s;for(let r=0;r<36;r++){const o=new _e(new Ot(.045,.14),new fn({color:t,transparent:!0,side:zt,depthWrite:!1}));o.position.set(n,ze.goal.y,0),o.rotation.set(Math.random()*2,Math.random()*2,Math.random()*2);const a=r/36*Math.PI*2,l=.35+Math.random()*.7;this.goalFx.add(o),this.goalFxParticles.push({mesh:o,velocity:new S(Math.cos(a)*l,.55+Math.random()*.65,Math.sin(a)*l),life:1.8})}this.impact=.028}disableDroneHover(){this.hoverEnabled=!1,this.setHoveredDrone(void 0)}dispose(){this.inputAbort.abort(),cancelAnimationFrame(this.raf),this.floorReflection?.dispose(),this.interaction.dispose(),this.selection.dispose(),this.disposeEnvironment();const e=new Set,t=new Set,n=new Set;this.scene.traverse(s=>{const r=s;if(r.geometry&&e.add(r.geometry),r.material)for(const o of Array.isArray(r.material)?r.material:[r.material]){t.add(o);for(const a of Object.values(o))a instanceof qt&&n.add(a)}}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),this.clearGoalFx(),this.resize.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Dy=[["教育部115年競賽簡章","https://b002.hwu.edu.tw/TKFile?FileId=19C0A7A1-14DD-4439-929F-1BB6722AD8C5","官方規格"]],Ly={球門:{title:"穿過圓環，才是一次得分",text:"內徑40公分，外徑約70公分。圓環內緣底部離地2公尺，因此中心高度是2.2公尺。",detail:"只有指定前鋒由場內正向完整穿越對手球門才計分。球門距底線1公尺、厚度10公分是本版教學補充。"},中線:{title:"回到己方半場，重新組織進攻",text:"得分後，進球隊的三架球機都必須退回己方半場，才能發動下一次進攻。",detail:"在全隊完成回場前再次穿門不算有效得分，依採用規則判給對方點球。"},起飛區:{title:"每次出發，都從安全的位置開始",text:"兩端底線中央設起飛區，寬度不超過1公尺。",detail:"場地長6公尺、寬3公尺、高3公尺。場內僅球機飛行，人員全程位於防護網外。"},防護網:{title:"一個完整包覆的飛行空間",text:"四周與上方防護網將飛行區和操作員、觀眾分開。",detail:"真實活動中不可將手伸入場內，也不可在場外啟動球機。模擬碰撞採球形剛體與簡化彈性。"},操作員區:{title:"三位操作員，一支隊伍",text:"每端三位上場操作員站在短邊防護網外，使用遙控器操縱。",detail:"一名指定前鋒能得分，其餘兩名可彈性分配守門與助攻。教學模式的鍵鼠操作與實機遙控器不同。"},球籠:{title:"球籠：可碰撞的保護結構",text:"以直徑220mm競賽款比例製作，所有部件位於球形保護框內。",detail:"球籠以可編輯桿件建立。公開資料無完整CAD；桿件厚度、內部安裝及孔洞配置屬建模估計。修正後不強制五角／六角交錯。"},四旋翼:{title:"四旋翼：用轉速控制姿態",text:"四個馬達帶動螺旋槳，透過推力差改變俯仰、橫滾與偏航。",detail:"教學模型展示槳葉轉動，飛行核心使用簡化剛體推力與自穩，不代表經實機校準的飛行器。"},機架:{title:"機架：連接所有飛行部件",text:"以原廠公開106mm軸距為比例參考，保留獨立機臂與馬達座。",detail:"外殼、機架、馬達、電池、飛控與燈組都有獨立名稱，可匯出GLB編輯。"},電池:{title:"電池：重量與續航的平衡",text:"參考款使用4S電池；教育部簡章的起飛總重上限為300公克。",detail:"本版不模擬電池劣化或隨機失能，避免以未校準資料影響戰術比較。"},飛控:{title:"飛控：感測與穩定",text:"飞控根據操作輸入與姿態感測，調整馬達輸出。",detail:"入門模式協助穩定姿態與高度；進階模式讓鍵盤控制俯仰、橫滾及油門。"},識別燈:{title:"辨識隊伍，也辨識前鋒",text:"紅藍燈區分兩隊，前鋒以額外標記識別，尾燈可協助辨認方向。",detail:"比賽HUD與小地圖同步呈現前鋒星形標記及機頭朝向。"}},Ql=[{id:"hover",name:"定點滯空",sub:"穩住，是一切的開始",text:"在指定位置保持高度與方向。逐步加入擾動，觀察偏差如何回復。",metric:"平均位置誤差",goal:"維持在場地中央、高度1.5公尺",icon:"◎"},{id:"eight",name:"8字與繞圈",sub:"看懂機頭，掌握方向",text:"依照場內的引導線飛行，練習轉向後仍能準確操控。",metric:"路徑平均偏差",goal:"沿青色8字引導線繞行",icon:"∞"},{id:"recover",name:"避障與恢復",sub:"碰撞之後，立即歸位",text:"使用擾動挑戰，盡快恢復高度與低速飛行。",metric:"穩定恢復時間",goal:"按下碰撞挑戰後，恢復穩定飛行",icon:"↗"},{id:"shoot",name:"精準射門",sub:"一條路線，一次穿環",text:"從不同角度接近對方球門，讓整顆球機正向穿過圓環。",metric:"有效射門率",goal:"使用前鋒正向穿越紅方球門",icon:"◉"},{id:"support",name:"助攻開路",sub:"把空間留給隊友",text:"操作助攻球機，配合AI前鋒，讓對方守門者離開進球路徑。",metric:"隊伍有效得分",goal:"操作藍方2號，協助AI前鋒進球",icon:"⇢"},{id:"guard",name:"守門卡位",sub:"讀懂進攻，提前站位",text:"在球門前預判對方前鋒路徑，以球籠接觸阻擋穿越。",metric:"對手失分",goal:"操作藍方3號，阻擋紅方前鋒",icon:"◇"}],tl=[{q:"哪一架球機穿過對手球門可以得分？",a:["任何隊員","只有指定前鋒","只有守門員"],correct:1,why:"每隊只有一架指定前鋒，其他球機穿門不計分。"},{q:"前鋒進球後，需要做什麼？",a:["直接繼續射門","只有前鋒退回","全隊返回己方半場"],correct:2,why:"全隊完成回場，才恢復下一次進攻資格。"},{q:"球門的2公尺高度，是從地面量到哪裡？",a:["圓環中心","內緣底部","外緣頂部"],correct:1,why:"從地面量到內緣底部2公尺，中心為2.2公尺。"}],U=i=>document.querySelector(i),Di=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),No=i=>!Number.isFinite(i)||i>99999?"∞":`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`,Ui=["藍 01 · 前鋒","藍 02 · 助攻","藍 03 · 守門","紅 01 · 前鋒","紅 02 · 助攻","紅 03 · 守門"],Iy=["home","book","duel","chip","drone"].map(Zi),Hc=["home","learn","solo","ai","practice"],Uy=["首頁","規則教室","自由對戰","AI 戰術室","飛行訓練"];let rn="home",Tn=!1,vi="ai",jt=0,Je,fi,ue,xn=!1,En=!1,yn=[],ec=[],Rs=0,Yi=1,Fo=0,lr=0,It=Ql[0],tc=!1,br=!1,Vc=!1,Sr=!1,Ad=.65,Vs=!1,an="auto",Ki=!1,Gs=!1,ts=new Set,pn={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",yawLeft:"KeyQ",yawRight:"KeyE",up:"Space",down:"ShiftLeft"},Jt={sum:0,n:0,stable:0},Mn=null,Ut=null,_i={id:"",token:""},Gt=!1,Oo=0,on,yu="",ji="#ai";try{const i=JSON.parse(localStorage.getItem("wing-settings")??"{}");an=i.quality??an,Ki=i.reduced??matchMedia("(prefers-reduced-motion: reduce)").matches,Gs=i.muted??!1,pn={...pn,...i.keymap},(pn.down==="ControlLeft"||pn.down==="ControlRight")&&(pn.down="ShiftLeft")}catch{}let kn=Qo(an);try{const i=JSON.parse(localStorage.getItem("wing-settings")??"{}");kn=$d(i.view??Qo(an))}catch{}let Ws,Hn,Cd=null,nc=!1;U("#app").innerHTML=`<aside class="sidebar"><a class="brand" href="#home"><span class="brand-icon">${Zi("drone")}</span><span>翼競場<small>DRONE SOCCER</small></span></a><nav>${Hc.map((i,e)=>`<a href="#${i}" data-nav="${i}"><span>${Iy[e]}</span>${Uy[e]}</a>`).join("")}</nav><div class="side-footer"><span class="status-dot"></span> 為每一次起飛做好準備<small>教育部115年賽制 · 教學模擬</small></div></aside><main class="workspace"><header class="topbar"><div><h1 id="page-title"></h1><p id="page-sub"></p></div><button class="quiet" id="settings">${Zi("settings")} 設定</button></header><div id="content"></div></main><div id="stage"><div id="canvas"></div><div id="stage-ui"><div class="game-top"><button id="exit-game" class="glass">← 返回</button><div class="scoreboard"><span class="team blue">藍隊 <b id="blue-score">0</b></span><div class="clock"><small id="set-label">第1局</small><strong id="clock">03:00</strong></div><span class="team red"><b id="red-score">0</b> 紅隊</span></div><div class="game-actions"><button id="toggle-ui" class="glass">H 介面</button><button id="toggle-drawer" class="glass">T 戰術</button><button id="menu" class="glass">暫停選單</button></div></div><div id="game-message" class="game-message">準備起飛</div><div class="minimap-wrap"><canvas id="minimap" width="260" height="140"></canvas><small>全場動向 · ▲ 機頭方向</small></div><div class="flight-readout" id="readout"></div><div id="practice-hud"></div><div id="tactical-drawer" class="drawer"></div><div class="transport"><button id="play" class="primary">▶ 開始</button><button id="step" class="quiet">逐步</button><label class="timeline"><span id="elapsed">00:00</span><input id="timeline" type="range" min="0" max="1" value="0" aria-label="重播時間軸"><span id="recorded">00:00</span></label><select id="speed" aria-label="播放速度"><option value=".25">0.25×</option><option value=".5">0.5×</option><option value="1" selected>1×</option><option value="2">2×</option><option value="4">4×</option></select><button id="finish" class="danger">結束</button></div><div class="camera-bar"><select id="camera" aria-label="鏡頭"><option value="orbit">全場環繞</option><option value="front">正面主鏡頭</option><option value="overview">全場鳥瞰</option><option value="frontLeft45">前左 45°</option><option value="frontRight45">前右 45°</option><option value="rearLeft45">後左 45°</option><option value="rearRight45">後右 45°</option><option value="top">垂直俯視</option><option value="lowAngle">低角度</option><option value="free">自由鏡頭</option>${Ui.map((i,e)=>`<option value="${e}">跟隨 ${i}</option>`).join("")}</select><span id="key-hint">拖曳旋轉 · 滾輪縮放 · T 戰術 · H 沉浸</span></div></div><button id="restore-ui" class="glass">H 顯示介面</button><div id="webgl-fallback" hidden>此裝置無法啟用 WebGL2。仍可閱讀規則與課程說明；3D 模式需支援 WebGL2 的瀏覽器。</div></div><aside id="settings-panel" class="settings-panel" hidden aria-hidden="true"></aside><div id="toast" role="status"></div><dialog id="dialog"><div id="dialog-body"></div><button id="close-dialog" class="quiet">關閉</button></dialog>`;const Xt=U("#stage"),Mu=U("#camera");for(const[i,e]of[["tactical","戰術近景"],["ruleOverview","規則總覽"],["ruleField","場地正面"],["reviewFront","結算正面"]])Mu.querySelector(`option[value="${i}"]`)||Mu.insertAdjacentHTML("beforeend",`<option value="${i}">${e}</option>`);const wr=U("#settings-panel");try{ue=new kc(U("#canvas")),ue.setQuality(an),ue.applySettings(kn),ue.reduced=Ki,ue.onPick=i=>{rn==="learn"&&sc(i)}}catch(i){U("#webgl-fallback").hidden=!1,console.error(i)}ue&&(window.wingArena={...window.wingArena,view:ue},window.dispatchEvent(new CustomEvent("wing-view-ready",{detail:ue})));function hn(i){U("#toast").textContent=i,U("#toast").classList.add("visible"),setTimeout(()=>U("#toast").classList.remove("visible"),4200)}function Ny(){Hn?.abort(),Hn=void 0,wr.hidden=!0,wr.setAttribute("aria-hidden","true"),document.body.classList.remove("settings-open");const i=nc;nc=!1,i&&ha()}function Rd(i){if(i.includes("畫面與操作設定")){wr.hidden=!1,wr.setAttribute("aria-hidden","false"),wr.innerHTML=`<div class="settings-head"><div><small>WING ARENA / SETTINGS</small><strong>系統設定</strong></div><button type="button" id="settings-close" class="settings-close" aria-label="關閉設定">×</button></div><div class="settings-body">${i}</div>`,document.body.classList.add("settings-open"),U("#settings-close").onclick=Ny;return}Hn?.abort(),Ws=void 0,Cd=document.activeElement,ts.clear(),ue?.keys.clear(),ue?.interaction.touch(),st("input",{inputs:{}}),Gt&&$t("input",{input:{}}),U("#dialog-body").innerHTML=i,U("#dialog").setAttribute("aria-label","系統視窗"),U("#dialog").showModal()}function oa(){Hn?.abort();const i=Ws;Ws=void 0,U("#dialog").close(),Cd?.focus(),i?.()}U("#close-dialog").onclick=oa;U("#dialog").addEventListener("cancel",i=>{i.preventDefault(),oa()});let ic=!1;U("#dialog").addEventListener("pointerdown",i=>{const e=U("#dialog").getBoundingClientRect();ic=i.target===U("#dialog")&&(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)});U("#dialog").addEventListener("pointerup",i=>{const e=U("#dialog").getBoundingClientRect();ic&&(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&oa(),ic=!1});Yd();function st(i,e={}){fi?.postMessage({type:i,...e})}window.wingArena={...window.wingArena,post:st,terminateWorker:()=>{fi?.terminate(),fi=void 0}};ue&&(window.wingArena={...window.wingArena,view:ue});function Fy(i){if(Gs)return;on??=new AudioContext,on.resume();const e=on.currentTime;(i==="goal"?[660,880,1180]:i==="win"?[520,700,920]:i==="loss"?[240,170,110]:i==="collision"?[95,70]:i==="shot_miss"?[180,130]:[130]).forEach((n,s)=>{const r=on.createOscillator(),o=on.createGain(),a=e+s*.07;r.type=i==="collision"?"triangle":"sine",r.connect(o),o.connect(on.destination),r.frequency.setValueAtTime(n,a),r.frequency.exponentialRampToValueAtTime(n*.8,a+.16),o.gain.setValueAtTime(i==="goal"?.075:.05,a),o.gain.exponentialRampToValueAtTime(.001,a+.18),r.start(a),r.stop(a+.2)})}function Bo(i={},e=!1){fi?.terminate(),fi=new Worker(new URL(""+new URL("worker-DrLJbc_n.js",import.meta.url).href,import.meta.url),{type:"module"}),tc=!1,br=e,En=!1,xn=!1,yn=[],Jt={sum:0,n:0,stable:0},fi.onmessage=({data:t})=>{if(t.type==="ready"&&(tc=!0,br&&(br=!1,kd())),t.type==="frame"){Je=t.frame,Rs=t.cursor,Yi=t.total;const n=Fo;Fo=t.branch,n!==Fo&&Tn&&vi==="ai"&&setTimeout(la,0),xn=t.playing,t.branches&&(ec=t.branches,Ld()),Dd()}t.type==="finished"&&!En&&(En=!0,st("analysis"),setTimeout(Ud,200)),t.type==="analysis"&&(yn=t.frames,vi==="practice"&&En&&Hy(),ec=t.branches,U("#analysis-controls")&&zo()),t.type==="archive"&&Gy(t.archive),t.type==="notice"&&hn(t.text),t.type==="error"&&hn(t.message)},fi.postMessage({type:"init",options:i})}function Pd(){return Tn&&(vi==="solo"||vi==="practice"||Gt)}function Dd(){if(!Je||!U("#clock"))return;ue?.setFrame(Je),U("#blue-score").textContent=String(Je.score[0]),U("#red-score").textContent=String(Je.score[1]),U("#clock").textContent=No(Je.remaining);const i={running:"進行中",intermission:"局間休息",penalty:"判罰點球",shootout:"決勝點球",golden:"黃金進球",finished:"已結束"};U("#set-label").textContent=`第${Je.set}局 · ${i[Je.phase]}`,U("#game-message").textContent=(Je.message==="球體發生碰撞"?"":Je.message)+(Je.returning?.some(Boolean)?` · ${Je.returning[0]?"藍隊":""}${Je.returning[1]?"紅隊":""}回場中`:""),U("#elapsed").textContent=No(Je.time),U("#recorded").textContent=No((Yi-1)/60),U("#timeline").max=String(Math.max(1,Yi-1)),U("#timeline").value=String(Rs),U("#play").innerHTML=Zi(xn?"pause":En&&Rs>=Yi-1?"replay":"play")+(xn?" 暫停":En&&Rs>=Yi-1?" 重播":" 播放");const e=U("#review-toggle-play");e&&(e.dataset.playing=String(xn),e.innerHTML=Zi(xn?"pause":"play"),e.setAttribute("aria-label",xn?"暫停":"播放"),e.title=xn?"暫停":"播放");const t=Je.drones[jt];if(U("#readout").innerHTML=t?`<b>${Ui[jt]}</b><span>高度 ${t.pos[1].toFixed(2)} m</span><span>速度 ${Math.hypot(...t.vel).toFixed(2)} m/s</span><span>${Vs?`進階 · 油門 ${Math.round((Oo+1)*50)}%`:"輔助穩定"}</span><span>${Math.round(ue?.fps??0)} FPS</span>`:"",Oy(),!Ki&&yn.length&&U("#ghost-trail")?.checked?ue?.motionOverlay(yn,Je.time,Nd(),!0):ue&&ue.clearGroup(ue.arrows),Tn){for(const n of Je.events??[])if(["goal","collision","shot_miss","match_win","match_loss","return_complete","finished"].includes(n.type)&&n.tick===Je.tick){const s=n.type+":"+n.tick;s!==yu&&(yu=s,Fy(n.type==="goal"?"goal":n.type==="match_win"||n.type==="finished"&&Je.winner===0?"win":n.type==="match_loss"?"loss":n.type))}}if(vi==="practice"&&xn&&Rs===Yi-1){const n=t.pos;let s=Math.hypot(n[0],n[1]-1.5,n[2]);if(It.id==="eight"){s=1/0;for(let a=0;a<64;a++){const l=a/64*Math.PI*2;s=Math.min(s,Math.hypot(n[0]-1.4*Math.sin(l),n[1]-1.5,n[2]-.8*Math.sin(2*l)))}}Jt.sum+=s,Jt.n++,Math.hypot(...t.vel)<.2&&(Jt.stable+=.05);const r=Je.stats[jt],o=It.id==="shoot"?"有效射門 "+r.goals+"/"+r.attempts:It.id==="recover"?"累計恢復 "+r.recoveryTime.toFixed(1)+" s":It.id==="support"?"協助得分 "+Je.score[0]:It.id==="guard"?"對手得分 "+Je.score[1]:"平均偏差 "+(Jt.sum/Jt.n).toFixed(2)+" m · 穩定 "+Jt.stable.toFixed(1)+" s";U("#practice-hud").innerHTML="<b>"+It.name+"</b><p>"+It.goal+"</p><span>"+o+"</span>"}}function Oy(){const i=U("#minimap").getContext("2d");i.clearRect(0,0,260,140),i.fillStyle="#102639dd",i.fillRect(0,0,260,140),i.strokeStyle="#839bb066",i.strokeRect(10,10,240,120),i.beginPath(),i.moveTo(130,10),i.lineTo(130,130),i.stroke();for(const e of Je?.drones??[]){const t=130+e.pos[0]*40,n=70+e.pos[2]*40;i.save(),i.translate(t,n),i.rotate(e.yaw),i.fillStyle=e.team?"#ff737b":"#48c3ff",i.beginPath(),i.moveTo(8,0),i.lineTo(-5,-4),i.lineTo(-3,0),i.lineTo(-5,4),i.closePath(),i.fill(),i.restore(),e.role==="striker"&&(i.strokeStyle="#fff",i.beginPath(),i.arc(t,n,9,0,7),i.stroke())}}function Ps(i,e=!1){window.dispatchEvent(new Event("wing-scene-change")),ts.clear(),ue?.keys.clear(),i.append(Xt),Xt.style.display="block",Xt.classList.toggle("fullscreen",e),Tn=e,document.body.classList.toggle("in-game",e),document.documentElement.classList.toggle("in-game",e),Xt.classList.toggle("preview",!e),e&&(ue?.setModel(!1),aa(!1)),ue?.setQuality(an),ue?.applySettings(kn)}function aa(i){Vc=i,Xt.classList.toggle("hide-ui",i)}function Ld(){const i=U("#branches");i&&(i.innerHTML=ec.map(e=>`<option value="${e.id}" ${e.id===Fo?"selected":""}>${Di(e.name)}</option>`).join(""))}function la(){const i=Je?.drones[lr]?.config??{};U("#tactical-drawer").innerHTML=`<div class="drawer-title"><div><small>TACTICS LAB</small><h2>戰術設定</h2></div><button id="close-tactics" class="quiet">×</button></div><div class="drone-select">${Ui.map((e,t)=>`<button data-drone="${t}" class="${t===lr?"selected":""} ${t<3?"blue":"red"}">${e}</button>`).join("")}</div><label>推演分支<select id="branches"></select></label><label>戰術預設<select id="tactic"><option value="balanced">平衡協作</option><option value="attack">積極進攻</option><option value="defend">保守防守</option></select></label>${[["targetHeight","目標高度",.3,2.7,i.targetHeight??2.2],["aggression","進攻傾向",0,1,i.aggression??.6],["guardRange","守門範圍",.1,1.2,i.guardRange??.6],["supportDistance","支援距離",.2,2,i.supportDistance??.8],["avoidance","避碰傾向",0,1,i.avoidance??.5]].map(([e,t,n,s,r])=>`<label>${t}<output>${Number(r).toFixed(2)}</output><input data-ai="${e}" type="range" min="${n}" max="${s}" step=".05" value="${r}"></label>`).join("")}<p class="muted">倒帶後調整參數會建立新分支，原推演完整保留。</p><button id="open-analysis" class="quiet wide">軌跡與賽局分析 ↗</button><button id="export-replay" class="quiet wide">匯出重播</button>`,U("#tactic").value=i.tactic??"balanced",U("#tactic").onchange=e=>st("ai",{id:lr,patch:{tactic:e.target.value}}),U("#tactical-drawer").querySelectorAll("[data-ai]").forEach(e=>{e.oninput=t=>{const n=t.target;n.previousElementSibling.textContent=Number(n.value).toFixed(2),st("ai",{id:lr,patch:{[n.dataset.ai]:Number(n.value)}})}}),U("#tactical-drawer").querySelectorAll("[data-drone]").forEach(e=>e.onclick=()=>{lr=Number(e.dataset.drone),la()}),U("#close-tactics").onclick=ca,U("#branches").onchange=e=>st("branch",{id:Number(e.target.value)}),U("#export-replay").onclick=()=>st("export"),U("#open-analysis").onclick=()=>{st("pause"),st("analysis"),Ud()},Ld()}function ca(){Sr=!Sr,U("#tactical-drawer").classList.toggle("open",Sr)}function By(){const i=history.state;if(i?.wingArenaMatch){ji=i.origin??ji;return}const e=location.hash||"#ai";Hc.includes(e.slice(1))&&e!=="#game"&&(ji=e),history.pushState({...i,wingArenaMatch:!0,origin:ji},"",`${location.pathname}${location.search}#game`)}function ns(i,e={}){By(),vi=i,Yy(i),Gt=i==="online",jt=e.playerId??0,Vs=e.advanced??!1,Ps(document.body,!0),ue?.resetVisualState?.("arena","hard"),Xt.classList.remove("analysis-mode"),U("#analysis-panel")?.remove(),U("#stage-ui").style.display="",U("#tactical-drawer").classList.remove("open"),Sr=!1,U("#toggle-drawer").hidden=i!=="ai",U("#toggle-drawer").textContent="T 戰術",U("#step").hidden=i!=="ai",U("#timeline").parentElement.hidden=i!=="ai",U("#speed").hidden=i!=="ai",U("#practice-hud").hidden=i!=="practice",U("#readout").hidden=i==="ai",U("#key-hint").textContent=i==="ai"?"拖曳旋轉 · T 戰術 · H 沉浸":"WASD 移動 · Q/E 偏航 · Space/Shift 升降 · Esc 選單",i!=="online"?Bo({mode:i,seed:12345,difficulty:Ad,playerId:jt,...e},!0):(st("pause"),fi?.terminate()),Xt.classList.toggle("free-match",i==="solo"),Xt.classList.toggle("ai-stage",i==="ai"),i==="ai"?(la(),ue?.setCameraPreset?.("tactical",void 0,!0),ue?.setDroneLabels?.(!0),U("#camera").value="tactical"):(ue?.setCameraPreset?.("follow",jt,!0),U("#camera").value=String(jt)),U("#play").hidden=Gt,U("#finish").hidden=Gt&&Ut?.host!==_i.id,ue?.clearGroup(ue.paths),ue?.clearGroup(ue.heat),i==="practice"&&zy(),ue||(br=!1,U("#load-stage").textContent="此裝置無法初始化3D，請使用返回或支援WebGL2的瀏覽器。")}function zy(){if(ue){if(ue.clearGroup(ue.paths),It.id==="recover")for(const i of[[-.8,.9,.55],[.8,.9,-.55]]){const e=new _e(new Nn(.26,1.8,.26),new Un({color:16037710}));e.position.fromArray(i),ue.paths.add(e)}if(It.id==="eight"){const i=[];for(let e=0;e<=128;e++){const t=e/128*Math.PI*2;i.push(new S(Math.sin(t)*1.4,1.5,Math.sin(2*t)*.8))}ue.paths.add(new Nr(new wt().setFromPoints(i),new Ur({color:3794652})))}else if(It.id==="hover"||It.id==="recover"){const i=new _e(new Wn(.24,.01,8,48),new fn({color:3401421}));i.rotation.x=-Math.PI/2,i.position.set(0,1.5,0),ue.paths.add(i)}U("#tactical-drawer").innerHTML=`<h2>${It.name}</h2><p>${It.text}</p><label>亂流強度<input id="wind" type="range" min="0" max="3" step=".1" value="0"></label><button id="disturb" class="primary wide">碰撞恢復挑戰</button><button id="retry" class="quiet wide">重新練習</button>`,U("#toggle-drawer").hidden=!1,U("#toggle-drawer").textContent="T 練習",U("#wind").oninput=i=>st("wind",{value:Number(i.target.value)}),U("#disturb").onclick=()=>st("disturb"),U("#retry").onclick=()=>ns("practice",{practice:It.id,playerId:jt,advanced:Vs})}}function ky(){return Dy.map(([i,e,t])=>`<a class="source" href="${e}" target="_blank" rel="noopener">${t} <strong>${i}</strong> ↗</a>`).join("")}function Wr(){Xt.classList.remove("free-match","ai-stage"),window.dispatchEvent(new Event("wing-scene-change")),ua(),Tn&&Ps(U("#content")),Gt=!1,Xt.classList.remove("analysis-mode"),U("#analysis-panel")?.remove(),U("#stage-ui").style.display="none",rn=location.hash.slice(1)||"home",Hc.includes(rn)||(rn="home"),document.querySelectorAll("[data-nav]").forEach(e=>e.classList.toggle("active",e.dataset.nav===rn)),U("#page-title").textContent={home:"飛向團隊的下一種可能",learn:"規則教室",solo:"自由對戰",online:"連線房間",ai:"AI 戰術室",practice:"飛行訓練"}[rn],U("#page-sub").textContent={home:"從第一次起飛，到一起贏得比賽。",learn:"看懂場地，認識球機，讓每一次進攻都有依據。",solo:"選擇你的角色，與隊友一起突破防線。",online:"同一個網址，同一個房號，一起進場。",ai:"觀察、調整，找到你的致勝路線。",practice:"把每個小動作，練成直覺。"}[rn],st("pause"),En=!1;const i=U("#content");if(i.innerHTML="",rn==="home"&&(i.innerHTML=`<section class="home-hero"><div class="hero-copy"><h2>不只飛行，<br>更是一場<span>團隊的競技。</span></h2><p>操控球形無人機，在立體空間中突破防線。從操作入門、三人協作，到可回溯的AI戰術實驗，探索無人機足球的每一種可能。</p><div class="button-row"><button class="primary" id="home-start">開始對戰 →</button><a class="quiet" href="#learn">先認識規則</a></div><div class="hero-facts"><span><b>3 v 3</b>立體團隊對抗</span><span><b>6 × 3 × 3 m</b>賽事規格場地</span><span><b>20 cm 級</b>球形無人機</span></div></div><div id="hero-scene" class="hero-scene"></div></section><div class="section-heading"><h2>你的起飛路線</h2><span>從理解，到實踐。</span></div><div class="learning-path">${[["learn","01","認識規則","場地、球機與得分判定"],["practice","02","練習操作","六個循序漸進的飛行課程"],["solo","03","開始對戰","單機挑戰與多人協作"],["ai","04","分析戰術","完整軌跡與可倒帶推演"]].map(([e,t,n,s])=>`<a href="#${e}"><small>${t}</small><h3>${n} <span>↗</span></h3><p>${s}</p></a>`).join("")}</div><footer>依教育部115年公開規則製作的教學模擬 · 未公開細節採明示補充設定</footer>`,Ps(U("#hero-scene")),ue?.setModel(!1),ue?.setMode("orbit"),Bo({mode:"ai"},!1),U("#home-start").onclick=()=>location.hash="solo"),rn==="learn"&&(i.innerHTML=`<div class="split-view rule-classroom-layout"><section class="rule-visual-column"><div id="learn-scene" class="learn-scene"></div><div class="button-row rule-model-controls"><button id="rotate" class="quiet">自動旋轉</button><label>拆解<input id="explode" type="range" min="0" max="1" step=".02" value="0"></label><label>展示直徑 <output id="diameter-value">220 mm</output><input id="diameter" type="range" min="200" max="220" step="1" value="220"></label><button id="model-export" class="quiet">匯出可編輯模型</button></div></section><aside class="paper rule-content-column"><div id="lesson" class="rule-hotspot-note" hidden></div><div id="hotspot-buttons"></div><h3 class="rule-demo-heading">動態規則示範</h3><div id="rule-demos" class="stack"></div><p id="demo-caption" class="muted"></p></aside></div><div class="rule-bottom"><section class="paper"><h2>用一個小測驗，確認你的理解</h2><div id="quiz"></div></section><section class="paper"><h2>規則依據與教學補充</h2><p>三局兩勝、每局3分鐘、局休3分鐘。單局可和局；場次平手以點球及黃金進球決勝。距底線1公尺、門厚10公分、點球10秒各三次為教學補充。</p>${ky()}</section></div>`,Ps(U("#learn-scene")),ue?.setModel(!1),ue?.setCameraPreset?.("front",void 0,!0),Bo({mode:"ai"}),sc("球門"),(t=>{U("#hotspot-buttons").innerHTML=["球門","中線","起飛區","防護網","操作員區"].map(n=>`<button data-hot="${n}" class="quiet">${n}</button>`).join(""),U("#hotspot-buttons").querySelectorAll("button").forEach(n=>n.onclick=()=>{sc(n.dataset.hot),ue?.highlight(n.dataset.hot)})})(),U("#rotate").onclick=()=>{ue&&(ue.autoRotate=!ue.autoRotate)},U("#explode").oninput=t=>{ue&&(ue.showModel||ue.setModel(!0),ue.setExplode(Number(t.target.value)))},U("#diameter").oninput=t=>{const n=Number(t.target.value);U("#diameter-value").textContent=n+" mm",ue.setModel(!0),ue.model.scale.setScalar(n/220)},U("#model-export").onclick=()=>ue?.exportModel(),Id(0),jy()),rn==="solo"||rn==="ai"){const e=rn==="ai";i.innerHTML=`<section class="setup-layout"><div id="setup-scene" class="setup-scene"></div><aside class="paper setup-panel"><h2>${e?"每一個決策，都能再看一次":"準備好，進場。"}</h2><p>${e?"六架AI同場對抗。調整戰術、倒帶推演，再從完整軌跡中觀察差異。":"你將與兩名AI隊友合作，挑戰三名電腦對手。"}</p>${e?"":`<label>操控角色<select id="role">${Ui.slice(0,3).map((t,n)=>`<option value="${n}">${t}</option>`).join("")}</select></label><label>操作模式<select id="control"><option value="assisted">入門輔助 · 自動穩定</option><option value="advanced">進階 · 姿態與油門</option></select></label>`}<label>AI 強度<select id="difficulty"><option value=".25">入門</option><option value=".65" selected>標準</option><option value="1">進階</option></select></label><div class="info-note">進場後採獨立全畫面。${e?"T 開關戰術面板，H 隱藏介面。":"Esc 暫停選單，C 回正鏡頭。"}</div><button id="start-session" class="primary wide">${e?"進入戰術實驗室":"進入對戰"} →</button>${e?'<label class="file-button">匯入重播<input id="import-replay" type="file" accept=".wing,.json,.gz"></label>':""}</aside></section><section class="paper"><h2>${e?"讓戰術有跡可循":"操作，從這裡開始"}</h2><p>${e?"完整3D路徑 · 時間軸事件 · 高度熱圖 · 分支對比 · 逐步重播":"W/S 前後 · A/D 平移 · Q/E 轉向 · Space/Shift 升降 · 滑鼠旋轉鏡頭"}</p></section>`,Ps(U("#setup-scene")),ue?.setModel(!1),ue?.setMode("orbit"),Bo({mode:"ai"}),U("#start-session").onclick=()=>{Ad=Number(U("#difficulty").value),ns(e?"ai":"solo",{playerId:e?0:Number(U("#role").value),advanced:!e&&U("#control").value==="advanced"})},e&&(U("#import-replay").onchange=t=>Wy(t.target.files?.[0]))}rn==="practice"&&(i.innerHTML=`<section class="course-intro"><h2>先穩定，再精準，最後默契。</h2><p>每項課程都能反覆練習。依照自己的節奏，建立方向感與空間感。</p></section><div class="course-grid">${Ql.map((e,t)=>`<article class="course"><span class="course-no">0${t+1} / ${e.icon}</span><h2>${e.name}</h2><h3>${e.sub}</h3><p>${e.text}</p><small>${Vy(e.id)}</small><button data-course="${e.id}" class="quiet wide">進入練習 →</button></article>`).join("")}</div>`,document.body.append(Xt),Xt.style.display="none",i.querySelectorAll("[data-course]").forEach(e=>e.onclick=()=>{It=Ql.find(t=>t.id===e.dataset.course),ns("practice",{practice:It.id,playerId:It.id==="support"?1:It.id==="guard"?2:0})})),rn==="online"&&Od()}function sc(i){const e=Ly[i];!e||!U("#lesson")||(U("#lesson").innerHTML=`<small class="section-kicker">${i}</small><h2>${e.title}</h2><p>${e.text}</p><p class="muted">${e.detail}</p>`)}function Id(i){const e=tl[i];U("#quiz").innerHTML=`<p>${i+1} / ${tl.length}　${e.q}</p><div class="button-row">${e.a.map((t,n)=>`<button data-answer="${n}" class="quiet">${t}</button>`).join("")}</div><p id="quiz-answer" role="status"></p><button id="next-quiz" class="quiet">下一題 →</button>`,U("#quiz").querySelectorAll("[data-answer]").forEach(t=>t.onclick=()=>{U("#quiz-answer").textContent=(Number(t.dataset.answer)===e.correct?"答對了。":"再想一想。")+e.why}),U("#next-quiz").onclick=()=>Id((i+1)%tl.length)}function Hy(){if(yn.length){Jt={sum:0,n:0,stable:0};for(const i of yn){const e=i.drones[jt];let t=Math.hypot(e.pos[0],e.pos[1]-1.5,e.pos[2]);if(It.id==="eight"){t=1/0;for(let n=0;n<64;n++){const s=n/64*Math.PI*2;t=Math.min(t,Math.hypot(e.pos[0]-Math.sin(s)*1.4,e.pos[1]-1.5,e.pos[2]-Math.sin(s*2)*.8))}}Jt.sum+=t,Jt.n++,Math.hypot(...e.vel)<.2&&(Jt.stable+=1/60)}}try{const i=JSON.parse(localStorage.getItem("wing-practice-"+It.id)??"null"),e=Math.min(i?.best??1/0,Jt.sum/Math.max(1,Jt.n));localStorage.setItem("wing-practice-"+It.id,JSON.stringify({best:e,date:new Date().toLocaleDateString("zh-TW"),error:Jt.sum/Math.max(1,Jt.n),stable:Jt.stable,seconds:Je.time}))}catch{hn("本機儲存空間不足，本次成績未保存。")}}function Vy(i){try{const e=JSON.parse(localStorage.getItem("wing-practice-"+i)??"null");return e?`上次 ${e.date} · 最佳偏差 ${Number(e.best??e.error).toFixed(2)}m`:"尚未開始 · 隨時都能起飛"}catch{return"尚未開始"}}function Ud(){if(!Je)return;st("pause"),Ps(document.body,!0),Xt.classList.add("analysis-mode"),U("#tactical-drawer").classList.remove("open"),U("#analysis-panel")?.remove();const i=document.createElement("section");i.id="analysis-panel",i.className="analysis-panel",i.innerHTML=`<div class="drawer-title"><div><small>MATCH REVIEW</small><h2>${vi==="practice"?"練習回顧":"賽局分析"}</h2></div></div><p>${Je.message==="手動結束比賽"?"未完成賽局 · 手動結束":Je.phase==="finished"?"賽局已完成":"即時回顧 · 已暫停"}</p><div class="result-score"><span class="blue">藍隊 ${Je.score[0]}</span><span>${Je.wins[0]} : ${Je.wins[1]} 局</span><span class="red">紅隊 ${Je.score[1]}</span></div><div id="analysis-controls"><div class="analysis-filters"><label>球機<select id="path-filter"><option value="all">全部六架</option><option value="blue">藍隊</option><option value="red">紅隊</option>${Ui.map((e,t)=>`<option value="${t}">${e}</option>`).join("")}</select></label><label>軌跡著色<select id="path-color"><option value="team">隊伍</option><option value="speed">速度</option><option value="height">高度</option></select></label><label>局別<select id="set-filter"><option value="all">全部</option><option value="1">第1局</option><option value="2">第2局</option><option value="3">第3局</option></select></label><label>高度層<select id="height-filter"><option value="all">全部高度</option><option value="0">0–1m</option><option value="1">1–2m</option><option value="2">2–3m</option></select></label></div><div class="time-filter"><label>起點 秒<input id="path-from" type="number" min="0" value="0"></label><label>終點 秒<input id="path-to" type="number" min="0" value="${Je.time.toFixed(1)}"></label></div><div class="button-row"><label><input type="checkbox" id="show-paths" checked> 完整軌跡</label><label><input type="checkbox" id="show-heat" checked> 停留熱圖</label><label><input type="checkbox" id="ghost-trail" checked> 殘影與方向</label></div><div id="analysis-metrics" class="analysis-metrics"></div><div id="stat-table"></div><label class="file-button">匯入統計CSV作對照<input id="import-csv" type="file" accept=".csv"></label><div id="csv-comparison"></div><canvas id="height-chart" width="600" height="150" aria-label="飛行高度曲線"></canvas><div id="events" class="events"></div><div class="button-row review-export-row"><button id="save-replay" class="quiet">匯出重播</button><button id="save-csv" class="quiet">匯出CSV</button></div><div id="review-actions" class="review-actions"><button id="review-again" class="primary">↻ 再來一局</button><button id="review-home" class="quiet">↩ 離開對戰</button></div><p class="muted">熱圖＝停留秒數。碰撞以接觸開始計次。重播倍速不改變統計。</p></div>`,Xt.append(i);for(const e of["path-filter","path-color","set-filter","height-filter","path-from","path-to","show-paths","show-heat"])U("#"+e).onchange=zo;U("#ghost-trail").onchange=()=>{U("#ghost-trail").checked||ue.clearGroup(ue.arrows),zo()},U("#save-replay").onclick=()=>st("export"),U("#save-csv").onclick=Xy,U("#review-again").onclick=()=>{document.body.classList.remove("review-active"),document.querySelector("#review-layout")?.remove(),Xt.classList.remove("review-stage","analysis-mode"),Xt.style.display="block",U("#analysis-panel")?.remove(),ns(vi,{playerId:jt,advanced:Vs})},U("#review-home").onclick=()=>{fi?.terminate(),history.state?.wingArenaMatch?history.back():ji&&ji!=="#game"?location.hash=ji:history.back()},U("#import-csv").onchange=e=>$y(e.target.files?.[0]),zo(),st("analysis"),ue?.setCameraPreset?.("reviewFront",void 0,!0),U("#timeline").parentElement.hidden=!1,U("#speed").hidden=!1,U("#step").hidden=!1,U("#play").hidden=!1}function Nd(){const i=U("#path-filter")?.value??"all";return i==="all"?[0,1,2,3,4,5]:i==="blue"?[0,1,2]:i==="red"?[3,4,5]:[Number(i)]}function zo(){if(!U("#analysis-controls")||!yn.length)return;const i=Nd(),e=Number(U("#path-from").value),t=Number(U("#path-to").value),n=U("#set-filter").value,s=yn.filter(p=>n==="all"||p.set===Number(n)),r=U("#path-color").value,o=U("#show-paths").checked;ue?.trajectories(s,o?i:[],e,t,r),ue?.setAnalysisDim?.(o);const a=U("#height-filter").value;U("#show-heat").checked?ue?.heatmap(s,i,e,t,a==="all"?0:Number(a),a==="all"?3:Number(a)+1):ue?.clearGroup(ue.heat),ue?.trajectories([],[],e,t,r,!0);const l=yn.at(-1),c=i.map(p=>l.stats[p]),h=p=>c.reduce((x,y)=>x+Number(y[p]??0),0),u=h("attempts"),f=h("goals"),d=yn.filter(p=>p.phase!=="intermission").length/60;let v=0;for(let p=1;p<s.length;p++){const x=s[p],y=Math.max(0,Math.min(.1,x.time-s[p-1].time));if(!(x.time<e||x.time>t||x.phase==="intermission"))for(const _ of i){const E=x.drones[_].pos;Math.abs(E[0])>1.5&&Math.abs(E[2])<.6&&E[1]>1.6&&(v+=y)}}U("#analysis-metrics").innerHTML=[["有效射門",u?Math.round(f/u*100)+"%":"—"],["平均速度",(h("distance")/Math.max(.01,d*i.length)).toFixed(2)+" m/s"],["進攻半場",Math.round(h("attackingSeconds")/Math.max(.01,d*i.length)*100)+"%"],["球門區停留",v.toFixed(1)+" s"],["碰撞恢復",h("recoveryTime").toFixed(1)+" s"],["回場耗時",h("returnSeconds").toFixed(1)+" 機秒"]].map(([p,x])=>"<div><small>"+p+"</small><b>"+x+"</b></div>").join(""),U("#stat-table").innerHTML=`<table><thead><tr><th>球機</th><th>得分／射門</th><th>距離</th><th>碰撞</th></tr></thead><tbody>${i.map(p=>{const x=l.stats[p];return`<tr><td>${Ui[p]}</td><td>${x.goals}/${x.attempts}</td><td>${x.distance.toFixed(1)}m</td><td>${x.collisions}</td></tr>`}).join("")}</tbody></table>`;const g=U("#height-chart").getContext("2d");g.clearRect(0,0,600,150),g.fillStyle="#8193a4",g.font="12px sans-serif",g.fillText("高度 m · 0—3",8,14);for(const p of i){g.strokeStyle=p<3?"#198ce9":"#ee5c69",g.globalAlpha=.7,g.beginPath();let x=!1;for(let y=0;y<s.length;y+=Math.max(1,Math.floor(s.length/500))){const _=s[y];if(_.time<e||_.time>t)continue;const E=10+(_.time-e)/Math.max(1,t-e)*580,A=140-_.drones[p].pos[1]*38;x?g.lineTo(E,A):(g.moveTo(E,A),x=!0)}g.stroke()}g.globalAlpha=1;const m=yn.flatMap(p=>p.events).filter(p=>p.type!=="collision").slice(-70);U("#events").innerHTML=`<h3>關鍵事件</h3>${m.map(p=>`<button data-tick="${p.tick}" class="event"><time>${No(p.tick/60)}</time><span>${Di(p.text)}</span> ↗</button>`).join("")||'<p class="muted">尚無關鍵事件</p>'}`,U("#events").querySelectorAll("[data-tick]").forEach(p=>p.onclick=()=>{if(st("seek",{index:Math.max(0,Number(p.dataset.tick)-120)}),U("#auto-camera")?.checked){const x=Number(p.dataset.tick),y=yn.flatMap(_=>_.events).find(_=>_.tick===x);ue?.setMode("follow",y?.droneId??0)}st("speed",{value:.5}),U("#speed").value=".5",st("play")})}async function Gy(i){try{const e=new Blob([JSON.stringify(i)]).stream().pipeThrough(new CompressionStream("gzip"));Fd(await new Response(e).blob(),"翼競場重播.wing")}catch(e){hn("匯出失敗："+String(e))}}function Fd(i,e){const t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3)}async function Wy(i){if(i){if(i.size>150*1024*1024){hn("重播檔超過150MB限制。");return}try{const e=i.name.endsWith(".json")?await i.text():await new Response(i.stream().pipeThrough(new DecompressionStream("gzip"))).text();if(e.length>500*1024*1024)throw Error("解壓後資料過大");const t=JSON.parse(e);ns("ai");const n=setInterval(()=>{tc&&(clearInterval(n),st("pause"),st("import",{archive:t}))},50)}catch(e){hn("無法讀取重播："+String(e))}}}function Xy(){const i=yn.at(-1)??Je;if(!i)return;const e=["球機,得分,射門次數,有效射門率,飛行距離m,碰撞次數,進攻半場秒數,碰撞恢復秒數,回場秒數",...i.stats.map(t=>[Ui[t.id],t.goals,t.attempts,t.attempts?(t.goals/t.attempts).toFixed(3):0,t.distance.toFixed(2),t.collisions,t.attackingSeconds.toFixed(2),t.recoveryTime.toFixed(2),(t.returnSeconds??0).toFixed(2)].join(","))];Fd(new Blob(["\uFEFF"+e.join(`\r
`)],{type:"text/csv;charset=utf-8"}),"賽局統計.csv")}function Od(){document.body.append(Xt),Xt.style.display="none",U("#content").innerHTML='<div class="lobby-layout"><section class="paper"><h2>和隊友在這裡集合</h2><p>區網玩家先開啟主機顯示的區網網址，再輸入房號。跨網路使用者需開啟同一公開伺服器網址。</p><label>你的暱稱<input id="nickname" maxlength="20" value="飛行玩家"></label><div class="button-row"><button id="create-room" class="primary">建立房間</button><input id="room-code" maxlength="6" placeholder="六碼房號" aria-label="六碼房號"><button id="join-room" class="quiet">加入</button></div><div id="connection" class="muted">連線尚未建立</div></section><section id="room-view" class="paper"><h2>等待組隊</h2><p>建立房間或輸入朋友提供的六碼房號。</p></section></div>',U("#create-room").onclick=()=>bu("create"),U("#join-room").onclick=()=>bu("join"),Ut&&zd()}function $t(i,e={}){Mn?.readyState===1?Mn.send(JSON.stringify({type:i,...e})):hn("尚未連接伺服器。")}function Bd(i){const e=JSON.parse(i.data);e.type==="welcome"&&(_i={id:e.id,token:e.token}),e.type==="room"&&(Ut=e.room,Tn||zd(),Su()),e.type==="loading"&&(jt=e.playerId,Ut=e.room,En=!1,ns("online",{playerId:jt}),requestAnimationFrame(()=>requestAnimationFrame(()=>{$t("loaded"),Su()}))),e.type==="countdown"&&kd(e.seconds,!0),e.type==="started"&&(jt=e.playerId,En=!1,Tn||ns("online",{playerId:jt}),ua(),xn=!0),e.type==="frame"&&(Je=e.frame,xn=!Je.paused,Dd(),Je.phase==="finished"&&!En&&(En=!0,hn("比賽結束，可返回房間。"))),(e.type==="error"||e.type==="notice")&&hn(e.message)}function bu(i){Mn?.close(),Mn=new WebSocket(`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/ws`),Mn.onopen=()=>{$t(i,{name:U("#nickname").value,code:U("#room-code").value.toUpperCase()}),U("#connection").textContent="已連接伺服器"},Mn.onmessage=Bd,Mn.onclose=()=>{U("#connection")&&(U("#connection").textContent="連線中止"),Ut&&(hn("連線中止；正在嘗試重連。"),setTimeout(qy,1500))},Mn.onerror=()=>hn("無法連線。請確認服務已啟動，且使用正確網址。")}function qy(){Ut&&(Mn=new WebSocket(`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/ws`),Mn.onopen=()=>$t("rejoin",{code:Ut.code,id:_i.id,token:_i.token}),Mn.onmessage=Bd,Mn.onclose=()=>hn("重連失敗，請返回房間重新加入。"))}function zd(){if(!U("#room-view"))return;const i=Ut.host===_i.id;U("#room-view").innerHTML=`<div class="section-heading"><h2>房間 ${Di(Ut.code)}</h2><span>${i?"你是房主":"已加入"}</span></div><div class="slots">${Ut.slots.map((e,t)=>`<div class="slot ${t<3?"blue":"red"}"><b>${Ui[t]}</b><span>${Di(e.name??"AI 電腦")}</span><small>${e.id?Di(e.id):"AI"} · ${e.ready?"已準備":e.id?"準備中":"就緒"}</small>${i?`<button data-seat="${t}" class="quiet">${e.id?"改為AI":"移到此席"}</button>`:""}</div>`).join("")}</div><div class="button-row"><button id="ready-room" class="primary">切換準備</button>${i?'<button id="start-room" class="primary">確認並開始</button>':""}<button id="leave-room" class="quiet">離開房間</button></div>`,U("#ready-room").onclick=()=>$t("ready"),i&&(U("#start-room").onclick=()=>$t("start")),U("#leave-room").onclick=()=>{$t("leave"),Ut=null,Mn?.close(),Od()},U("#room-view").querySelectorAll("[data-seat]").forEach(e=>e.onclick=()=>$t("seat",{index:Number(e.dataset.seat)}))}U("#settings").onclick=()=>Gc();function Gc(i=!1){nc=i;const e=(n,s,r,o,a)=>`<label>${s}<output data-output="${n}">${Number(kn[n]).toFixed(2)}</output><input type="range" data-view="${n}" aria-label="${s}" min="${r}" max="${o}" step="${a}" value="${kn[n]}"></label>`,t=(n,s)=>`<label>${s}<input type="checkbox" data-view="${n}" ${kn[n]?"checked":""}></label>`;Rd(`<h2>畫面與操作設定</h2><div class="settings-tabs" role="tablist" aria-label="設定分類"><button role="tab" aria-selected="true" id="graphics-tab" aria-controls="graphics-settings">畫質詳細參數</button><button role="tab" aria-selected="false" id="controls-tab" aria-controls="controls-settings">操作控制</button></div><section id="graphics-settings" class="settings-page" role="tabpanel" aria-labelledby="graphics-tab"><label>畫質預設<select id="quality">${[["auto","自動"],["low","低 · 效能優先"],["medium","中 · 平衡"],["high","高 · 畫面優先"],["custom","自訂"]].map(([n,s])=>`<option value="${n}" ${an===n?"selected":""}>${s}</option>`).join("")}</select></label>${e("resolution","解析度倍率",.75,2,.25)}${t("shadows","即時陰影")}${e("reflection","地面反射",0,.35,.01)}${e("bloom","輝光強度",0,.5,.01)}${t("dof","展示鏡頭輕微景深")}${t("people","人物微動態")}<label>減少動態效果<input id="reduced" type="checkbox" ${Ki?"checked":""}></label><p>景深僅用於展示鏡頭，對戰保持清晰。低畫質關閉陰影、反射與景深。</p></section><section id="controls-settings" class="settings-page" role="tabpanel" aria-labelledby="controls-tab" hidden>${e("sensitivity","旋轉靈敏度",.3,2,.1)}${e("zoom","縮放速度",.3,2,.1)}${e("inertia","鏡頭慣性",0,.3,.01)}${t("cutaway","前景遮擋淡出")}${e("cutawayRadius","遮擋偵測範圍",.12,.42,.01)}<h3>飛行按鍵</h3><div class="key-grid">${Object.entries(pn).map(([n,s])=>`<label>${{forward:"前進",back:"後退",left:"左移",right:"右移",yawLeft:"左轉",yawRight:"右轉",up:"上升",down:"下降"}[n]}<button data-key="${n}" class="quiet">${s}</button></label>`).join("")}</div><p>T／H／C／Esc 保留為系統快捷鍵。</p></section><div class="settings-common"><label><input id="muted" type="checkbox" ${Gs?"checked":""}>靜音</label><p>調整即時生效並儲存在此裝置。</p></div>`),Ws=i?()=>ha():void 0;for(const n of["graphics","controls"])U("#"+n+"-tab").onclick=()=>{Hn?.abort();for(const s of["graphics","controls"])U("#"+s+"-settings").hidden=s!==n,U("#"+s+"-tab").setAttribute("aria-selected",String(s===n))};U("#quality").onchange=n=>{if(an=n.target.value,an!=="custom"){const s=Qo(an);for(const r of["resolution","shadows","reflection","bloom","dof"])kn[r]=s[r]}ue?.setQuality(an),ue?.applySettings(kn),cr(),Gc(i)},document.querySelectorAll("[data-view]").forEach(n=>n.oninput=()=>{const s=n.dataset.view;kn[s]=n.type==="checkbox"?n.checked:Number(n.value);const r=document.querySelector(`[data-output="${s}"]`);r&&(r.textContent=Number(n.value).toFixed(2)),["resolution","shadows","reflection","bloom","dof"].includes(s)&&(an="custom",U("#quality").value=an,ue&&(ue.quality=an)),ue?.applySettings(kn),cr()}),U("#reduced").onchange=n=>{Ki=n.target.checked,ue&&(ue.reduced=Ki),cr()},U("#muted").onchange=n=>{Gs=n.target.checked,cr()},document.querySelectorAll("[data-key]").forEach(n=>n.onclick=()=>{Hn?.abort(),Hn=new AbortController,n.textContent="請按鍵";const s=n.dataset.key;Hn.signal.addEventListener("abort",()=>{n.isConnected&&(n.textContent=pn[s])},{once:!0}),window.addEventListener("keydown",r=>{if(r.preventDefault(),r.stopPropagation(),r.code==="Escape"){Hn?.abort();return}["KeyT","KeyH","KeyC"].includes(r.code)||Object.entries(pn).some(([o,a])=>o!==s&&a===r.code)?hn("此按鍵已使用或保留。"):(pn[s]=r.code,cr()),Hn?.abort()},{capture:!0,signal:Hn.signal})})}function cr(){try{localStorage.setItem("wing-settings",JSON.stringify({version:2,quality:an,reduced:Ki,muted:Gs,keymap:pn,view:kn}))}catch{hn("設定無法寫入本機儲存。")}}function ha(){Tn&&(Gt||st("pause"),Rd(`<h2>${Gt?"比賽選單":"已暫停"}</h2><p>${Gt?"個人選單不會暫停其他玩家的比賽。":"準備好了，就繼續起飛。"}</p><div class="stack"><button id="resume" class="primary">繼續</button><button id="game-settings" class="quiet">畫面與操作設定</button>${Gt?`<button id="pause-room" class="quiet">${Ut?.host===_i.id?"暫停／繼續全局":"請求暫停"}</button>`:""}<button id="end-menu" class="danger">結束並離開</button></div>`),Ws=()=>{!Gt&&!En&&st("play")},U("#resume").onclick=oa,U("#game-settings").onclick=()=>{Ws=void 0,U("#dialog").close(),Gc(!0)},U("#end-menu").onclick=()=>{U("#dialog").close(),Gt?($t("leave"),Ut=null,Wr()):st("end")},Gt&&(U("#pause-room").onclick=()=>$t(Ut?.host===_i.id?"pause":"requestPause")))}U("#menu").onclick=ha;U("#exit-game").onclick=()=>{Gt&&($t("leave"),Ut=null),st("pause"),U("#analysis-panel")?.remove(),history.state?.wingArenaMatch?history.back():Wr()};U("#toggle-ui").onclick=()=>aa(!Vc);U("#restore-ui").onclick=()=>aa(!1);U("#toggle-drawer").onclick=()=>{vi==="ai"&&!U("#branches")&&la(),ca()};U("#play").onclick=()=>{En&&Rs>=Yi-1?(st("seek",{index:0}),st("play")):st(xn?"pause":"play")};U("#step").onclick=()=>{st("pause"),st("step")};U("#finish").onclick=()=>Gt?$t("end"):st("end");U("#timeline").oninput=i=>st("seek",{index:Number(i.target.value)});U("#speed").onchange=i=>st("speed",{value:Number(i.target.value)});U("#camera").onchange=i=>{ue?.interaction.touch();const e=i.target.value;e==="orbit"||e==="free"?ue?.setMode(e):/^\d+$/.test(e)?ue?.setCameraPreset?.("follow",Number(e),!0):ue?.setCameraPreset?.(e,void 0,!0)};window.addEventListener("keydown",i=>{if(!(i.target.matches("input,select,textarea")||i.target.closest(".sci-select,.sci-options")||U("#dialog").open)&&Tn){if(i.code==="Escape"){i.preventDefault(),i.stopPropagation(),ha();return}if(i.code==="KeyT"){ca();return}if(i.code==="KeyH"){aa(!Vc);return}if(i.code==="KeyC"){ue?.setMode(Pd()?"follow":"orbit",jt);return}(Object.values(pn).includes(i.code)||i.code==="ShiftRight"&&pn.down==="ShiftLeft")&&(ts.add(i.code),ue?.keys.add(i.code),i.preventDefault())}});window.addEventListener("keyup",i=>{ts.delete(i.code),ue?.keys.delete(i.code)});window.addEventListener("blur",()=>{ts.clear(),ue?.keys.clear(),st("input",{inputs:{}}),Gt&&$t("input",{input:{}})});U("#canvas").addEventListener("pointermove",i=>{ue?.mode==="free"&&i.buttons===1&&(ue.camera.rotation.order="YXZ",ue.camera.rotation.y-=i.movementX*.004,ue.camera.rotation.x=Math.max(-1.4,Math.min(1.4,ue.camera.rotation.x+i.movementY*.004)))});setInterval(()=>{if(!Tn||!Pd()||ue?.mode==="free")return;const i=n=>ts.has(pn[n])||n==="down"&&pn.down==="ShiftLeft"&&ts.has("ShiftRight"),e=(n,s)=>(i(n)?1:0)-(i(s)?1:0);Vs&&(Oo=Math.max(-1,Math.min(1,Oo+e("up","down")*.025)));const t={forward:e("forward","back"),strafe:e("right","left"),climb:e("up","down"),yaw:e("yawRight","yawLeft"),advanced:Vs,pitch:e("forward","back"),roll:e("right","left"),throttle:Oo};Gt?$t("input",{input:t}):st("input",{inputs:{[jt]:t}})},33);let ko={},rc=0,pr;function Yy(i){U("#loading-screen")?.remove(),rc=performance.now(),ko={};const e=document.createElement("div");e.id="loading-screen",e.innerHTML=`<div class="loading-art"><div class="loading-orbit"></div><div class="loading-mark">${Zi("drone")}</div></div><section class="loading-content"><small>翼競場 / MATCH PREPARATION</small><h1>${i==="practice"?"讓每一次起飛，更穩一點。":i==="ai"?"每條路徑，都是一種可能。":"準備好，與隊友一起起飛。"}</h1><p>正在準備場地、球機與模擬核心</p><div class="load-track"><span id="load-progress"></span></div><div class="load-info"><span id="load-stage">建立3D場景</span><span id="load-elapsed">0.0 s</span></div><div id="load-players"></div><p class="loading-tip">飛行提示：進球後，全隊返回己方半場，才能再次發動進攻。</p><button id="cancel-loading" class="glass">取消進場</button></section>`,document.body.append(e),U("#cancel-loading").onclick=()=>{clearInterval(pr),br=!1,ua(),st("pause"),Gt&&($t("leave"),Ut=null),Wr()},clearInterval(pr),pr=setInterval(()=>{if(!U("#loading-screen")){clearInterval(pr);return}U("#load-elapsed").textContent=((performance.now()-rc)/1e3).toFixed(1)+" s"},100),requestAnimationFrame(()=>{U("#load-progress")&&(U("#load-progress").style.width="45%"),U("#load-stage")&&(U("#load-stage").textContent=i==="online"?"等待玩家完成載入":"初始化物理與飛行控制")})}function Su(){if(!(!U("#load-players")||!Ut)){for(const i of Ut.slots)i.id&&i.loaded&&ko[i.id]===void 0&&(ko[i.id]=(performance.now()-rc)/1e3);U("#load-players").innerHTML=Ut.slots.map((i,e)=>`<div class="load-player"><span class="${e<3?"blue":"red"}">${Di(i.name??"AI 電腦")}</span><b>${i.id?i.loaded?"✓ 已就緒 · "+(ko[i.id]??0).toFixed(1)+" s":"載入中…":"AI 已就緒"}</b></div>`).join("")+(Ut.host===_i.id?`<div class="button-row"><button id="retry-loading" class="glass">重試未就緒玩家</button>${Ut.slots.map((i,e)=>i.id&&!i.loaded&&i.id!==_i.id?`<button data-load-ai="${e}" class="glass">${Di(i.name)} 改AI</button>`:"").join("")}</div>`:""),U("#retry-loading")&&(U("#retry-loading").onclick=()=>$t("retryLoad")),document.querySelectorAll("[data-load-ai]").forEach(i=>i.onclick=()=>$t("seat",{index:Number(i.dataset.loadAi)}))}}function kd(i=3,e=!1){if(!U("#loading-screen"))return;U("#loading-screen").classList.add("countdown-only"),U("#load-progress").style.width="100%",U("#load-stage").textContent="場景與核心就緒";let t=i;const n=U("#loading-screen h1"),s=()=>{n.innerHTML=t>0?"<strong>"+t+"</strong><span>即將起飛</span>":"<strong>起飛！</strong>"};s();const r=setInterval(()=>{if(!U("#loading-screen")){clearInterval(r);return}t--,s(),t<=0&&(clearInterval(r),e||(ua(),st("play")))},1e3)}function ua(){clearInterval(pr),U("#loading-screen")?.remove(),Tn&&(U("#canvas").tabIndex=0,U("#canvas").focus({preventScroll:!0}))}window.addEventListener("hashchange",Wr);Wr();let mr;window.addEventListener("wing-scene-change",()=>clearInterval(mr));function jy(){const i=["前鋒正向穿環","反向穿環不計分","非前鋒穿環","得分後全隊回場"];U("#rule-demos").innerHTML=i.map((e,t)=>`<button data-demo="${t}" class="quiet">▶ ${e}</button>`).join(""),document.querySelectorAll("[data-demo]").forEach(e=>e.onclick=()=>{if(!Je)return;clearInterval(mr),st("pause"),ue.setModel(!1),ue.setMode("orbit");const t=Number(e.dataset.demo),n=structuredClone(Je);n.drones.forEach((r,o)=>{r.pos=[o<3?-1.5:1.5,1.2,(o%3-1)*.6]});let s=0;mr=setInterval(()=>{if(rn!=="learn"||Tn){clearInterval(mr);return}s+=.04;const r=Math.min(1,s/3),o=n.drones[t===2?1:0];if(o.pos=[t===1?2.7-r*2.3:.4+r*2.3,2.2,0],o.yaw=t===1?Math.PI:0,t===3&&s>3){const a=Math.min(1,(s-3)/2);n.drones.slice(0,3).forEach((l,c)=>l.pos=[2.6-a*4,1.6,(c-1)*.6])}ue.setFrame(n),U("#demo-caption").textContent=s<3?"教學示範：觀察完整球體穿越的方向。":t===0?"有效得分：指定前鋒正向完整穿環，+1分。":t===1?"無效：由球門後方向場內穿越，不計分。":t===2?"無效：這是助攻球機，沒有得分資格。":s<5?"回場中：全隊都必須返回己方半場。":"全隊回場完成，現在可以再次進攻。",s>6&&clearInterval(mr)},40)})}let Es,Gi;setInterval(()=>{if(Gs||!xn||!Tn){Gi&&on&&Gi.gain.setTargetAtTime(0,on.currentTime,.08);return}on??=new AudioContext,on.resume(),Es||(Es=on.createOscillator(),Es.type="sawtooth",Gi=on.createGain(),Gi.gain.value=0,Es.connect(Gi),Gi.connect(on.destination),Es.start());const i=Je?Math.hypot(...Je.drones[jt].vel):0;Es.frequency.setTargetAtTime(95+i*42,on.currentTime,.12),Gi.gain.setTargetAtTime(.006,on.currentTime,.1)},150);async function $y(i){if(i)try{if(i.size>1e5)throw Error("CSV檔過大");const e=(await i.text()).replace(/^\uFEFF/,"").trim().split(/\r?\n/).map(t=>t.split(","));if(e.length!==7||e[0][0]!=="球機"||e[0][1]!=="得分"||e.some(t=>t.length!==9))throw Error("請使用翼競場匯出的六機統計格式");if(e.slice(1).some(t=>t.slice(1).some(n=>!Number.isFinite(Number(n))||Number(n)<0)))throw Error("統計數值無效");U("#csv-comparison").innerHTML="<h3>匯入統計對照</h3><table>"+e.map((t,n)=>"<tr>"+[t[0],t[1],t[4],t[5]].map(s=>"<"+(n?"td":"th")+">"+Di(s)+"</"+(n?"td":"th")+">").join("")+"</tr>").join("")+'</table><p class="muted">CSV僅含統計，不含空間軌跡；觀看完整路徑請匯入重播。</p>'}catch(e){hn("無法匯入CSV："+String(e))}}let nl=!1;new MutationObserver(()=>{nl||(nl=!0,queueMicrotask(()=>{nl=!1;const i=document.querySelector(".setup-panel")||document.querySelector(".rule-content-column");if(i&&!i.querySelector(".drone-info-toggle")){const e=document.createElement("details");e.className="drone-info-toggle",e.innerHTML="<summary>球機型號與資料來源</summary>"+jd(),i.append(e)}}))}).observe(document.querySelector("#content"),{childList:!0,subtree:!0});document.addEventListener("pointerdown",i=>{const e=i.target;Sr&&!e.closest("#tactical-drawer,#toggle-drawer,.sci-select,.sci-options,#dialog")&&ca(),document.querySelectorAll(".drone-info-toggle[open]").forEach(t=>{t.contains(e)||(t.open=!1)})});
