(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const nc="183",ws={ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dd=0,Fc=1,Ld=2,Es=1,Id=2,ar=3,Ci=0,hn=1,un=2,Vt=0,Ts=1,el=2,Bc=3,zc=4,Sh=5,ei=100,Nd=101,Ud=102,Od=103,Fd=104,tl=200,Bd=201,zd=202,kd=203,nl=204,il=205,bh=206,Vd=207,wh=208,Gd=209,Hd=210,Wd=211,Xd=212,qd=213,Yd=214,sl=0,rl=1,ol=2,Rs=3,al=4,ll=5,cl=6,ul=7,ic=0,jd=1,Zd=2,Wn=0,sc=1,rc=2,oc=3,Go=4,ac=5,lc=6,cc=7,Eh=300,Wi=301,Ds=302,aa=303,la=304,Ho=306,_r=1e3,ni=1001,hl=1002,Pt=1003,Kd=1004,Fr=1005,jt=1006,ca=1007,Gi=1008,xn=1009,Th=1010,Ah=1011,Mr=1012,uc=1013,Xn=1014,Sn=1015,Ut=1016,hc=1017,dc=1018,Ls=1020,Ch=35902,Ph=35899,Rh=1021,Dh=1022,Nn=1023,ai=1026,Si=1027,Wo=1028,fc=1029,Is=1030,pc=1031,mc=1033,So=33776,bo=33777,wo=33778,Eo=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,xl=37492,vl=37496,_l=37488,Ml=37489,yl=37490,Sl=37491,bl=37808,wl=37809,El=37810,Tl=37811,Al=37812,Cl=37813,Pl=37814,Rl=37815,Dl=37816,Ll=37817,Il=37818,Nl=37819,Ul=37820,Ol=37821,Fl=36492,Bl=36494,zl=36495,kl=36283,Vl=36284,Gl=36285,Hl=36286,Jd=3200,Lh=3201,Xo=0,Qd=1,Mi="",Mn="srgb",Ns="srgb-linear",Po="linear",yt="srgb",is=7680,kc=519,$d=512,ef=513,tf=514,gc=515,nf=516,sf=517,xc=518,rf=519,Vc=35044,Gc="300 es",Hn=2e3,yr=2001;function of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){const n=Ro("canvas");return n.style.display="block",n}const Hc={};function Wc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ih(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=Ih(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=Ih(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Do(...n){const e=n.join(" ");e in Hc||(Hc[e]=!0,st(...n))}function lf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const cf={[sl]:rl,[ol]:cl,[al]:ul,[Rs]:ll,[rl]:sl,[cl]:ol,[ul]:al,[ll]:Rs};class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xc=1234567;const dr=Math.PI/180,Sr=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function vc(n,e){return(n%e+e)%e}function uf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hf(n,e,t){return n!==e?(t-n)/(e-n):0}function fr(n,e,t){return(1-t)*n+t*e}function df(n,e,t,i){return fr(n,e,1-Math.exp(-t*i))}function ff(n,e=1){return e-Math.abs(vc(n,e*2)-e)}function pf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function mf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xf(n,e){return n+Math.random()*(e-n)}function vf(n){return n*(.5-Math.random())}function _f(n){n!==void 0&&(Xc=n);let e=Xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(n){return n*dr}function yf(n){return n*Sr}function Sf(n){return(n&n-1)===0&&n!==0}function bf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ef(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*u,a*c);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:dr,RAD2DEG:Sr,generateUUID:Zi,clamp:dt,euclideanModulo:vc,mapLinear:uf,inverseLerp:hf,lerp:fr,damp:df,pingpong:ff,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:xf,randFloatSpread:vf,seededRandom:_f,degToRad:Mf,radToDeg:yf,isPowerOfTwo:Sf,ceilPowerOfTwo:bf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Ef,normalize:en,denormalize:Ss};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==f||u!==m){let p=l*h+c*f+u*m+d*y;p<0&&(h=-h,f=-f,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);g=Math.sin(g*v)/S,a=Math.sin(a*v)/S,l=l*g+h*a,c=c*g+f*a,u=u*g+m*a,d=d*g+y*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+m*a,d=d*g+y*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new O,qc=new Pi;class lt{constructor(e,t,i,s,r,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],y=s[0],p=s[3],g=s[6],v=s[1],S=s[4],M=s[7],C=s[2],D=s[5],I=s[8];return r[0]=o*y+a*v+l*C,r[3]=o*p+a*S+l*D,r[6]=o*g+a*M+l*I,r[1]=c*y+u*v+d*C,r[4]=c*p+u*S+d*D,r[7]=c*g+u*M+d*I,r[2]=h*y+f*v+m*C,r[5]=h*p+f*S+m*D,r[8]=h*g+f*M+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,m=t*d+i*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new lt,Yc=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tf(){const n={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Do("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Do("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ns]:{primaries:e,whitePoint:i,transfer:Po,toXYZ:Yc,fromXYZ:jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Yc,fromXYZ:jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}const gt=Tf();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class Af{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Ro("canvas")),ss.width=e.width,ss.height=e.height;const s=ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class _c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Af.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Pf=0;const fa=new O;class Zt extends ji{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=ni,s=ni,r=jt,o=Gi,a=Nn,l=xn,c=Zt.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Zi(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Eh;Zt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,s=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,C=(g+1)/2,D=(u+h)/4,I=(d+y)/4,_=(m+p)/4;return S>M&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=D/i,r=I/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=D/s,r=_/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=I/r,s=_/r),this.set(i,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-y)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rf extends ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Zt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new _c(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class At extends Rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nh extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _t{constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,m,y,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,m,y,p)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,m,y,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,m=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,m=c*u,y=c*d;t[0]=h+y*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,m=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,m=a*u,y=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lf,e,If)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),hi.crossVectors(i,fn),hi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),hi.crossVectors(i,fn)),hi.normalize(),Br.crossVectors(fn,hi),s[0]=hi.x,s[4]=Br.x,s[8]=fn.x,s[1]=hi.y,s[5]=Br.y,s[9]=fn.y,s[2]=hi.z,s[6]=Br.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],y=i[6],p=i[10],g=i[14],v=i[3],S=i[7],M=i[11],C=i[15],D=s[0],I=s[4],_=s[8],x=s[12],N=s[1],R=s[5],B=s[9],V=s[13],Y=s[2],H=s[6],X=s[10],W=s[14],de=s[3],te=s[7],Se=s[11],ye=s[15];return r[0]=o*D+a*N+l*Y+c*de,r[4]=o*I+a*R+l*H+c*te,r[8]=o*_+a*B+l*X+c*Se,r[12]=o*x+a*V+l*W+c*ye,r[1]=u*D+d*N+h*Y+f*de,r[5]=u*I+d*R+h*H+f*te,r[9]=u*_+d*B+h*X+f*Se,r[13]=u*x+d*V+h*W+f*ye,r[2]=m*D+y*N+p*Y+g*de,r[6]=m*I+y*R+p*H+g*te,r[10]=m*_+y*B+p*X+g*Se,r[14]=m*x+y*V+p*W+g*ye,r[3]=v*D+S*N+M*Y+C*de,r[7]=v*I+S*R+M*H+C*te,r[11]=v*_+S*B+M*X+C*Se,r[15]=v*x+S*V+M*W+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],y=e[7],p=e[11],g=e[15],v=l*f-c*h,S=a*f-c*d,M=a*h-l*d,C=o*f-c*u,D=o*h-l*u,I=o*d-a*u;return t*(y*v-p*S+g*M)-i*(m*v-p*C+g*D)+s*(m*S-y*C+g*I)-r*(m*M-y*D+p*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],y=e[13],p=e[14],g=e[15],v=t*a-i*o,S=t*l-s*o,M=t*c-r*o,C=i*l-s*a,D=i*c-r*a,I=s*c-r*l,_=u*y-d*m,x=u*p-h*m,N=u*g-f*m,R=d*p-h*y,B=d*g-f*y,V=h*g-f*p,Y=v*V-S*B+M*R+C*N-D*x+I*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/Y;return e[0]=(a*V-l*B+c*R)*H,e[1]=(s*B-i*V-r*R)*H,e[2]=(y*I-p*D+g*C)*H,e[3]=(h*D-d*I-f*C)*H,e[4]=(l*N-o*V-c*x)*H,e[5]=(t*V-s*N+r*x)*H,e[6]=(p*M-m*I-g*S)*H,e[7]=(u*I-h*M+f*S)*H,e[8]=(o*B-a*N+c*_)*H,e[9]=(i*N-t*B-r*_)*H,e[10]=(m*D-y*M+g*v)*H,e[11]=(d*M-u*D-f*v)*H,e[12]=(a*x-o*R-l*_)*H,e[13]=(t*R-i*x+s*_)*H,e[14]=(y*S-m*C-p*v)*H,e[15]=(u*C-d*S+h*v)*H,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,m=r*d,y=o*u,p=o*d,g=a*d,v=l*c,S=l*u,M=l*d,C=i.x,D=i.y,I=i.z;return s[0]=(1-(y+g))*C,s[1]=(f+M)*C,s[2]=(m-S)*C,s[3]=0,s[4]=(f-M)*D,s[5]=(1-(h+g))*D,s[6]=(p+v)*D,s[7]=0,s[8]=(m+S)*I,s[9]=(p-v)*I,s[10]=(1-(h+y))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=rs.set(s[0],s[1],s[2]).length();const a=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);const c=1/o,u=1/a,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Hn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===Hn)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===yr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Hn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===Hn)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===yr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new O,Rn=new _t,Lf=new O(0,0,0),If=new O(1,1,1),hi=new O,Br=new O,fn=new O,Zc=new _t,Kc=new Pi;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nf=0;const Jc=new O,os=new Pi,Yn=new _t,zr=new O,Zs=new O,Uf=new O,Of=new Pi,Qc=new O(1,0,0),$c=new O(0,1,0),eu=new O(0,0,1),tu={type:"added"},Ff={type:"removed"},as={type:"childadded",child:null},pa={type:"childremoved",child:null};class Ot extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new O,t=new On,i=new Pi,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new lt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Qc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Jc.copy(e).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Zs,zr,this.up):Yn.lookAt(zr,Zs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Yn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),as.child=e,this.dispatchEvent(as),as.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new O(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ga(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=vc(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ga(o,r,e+1/3),this.g=ga(o,r,e),this.b=ga(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=Uh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return gt.workingToColorSpace(Qt.copy(this),e),Math.round(dt(Qt.r*255,0,255))*65536+Math.round(dt(Qt.g*255,0,255))*256+Math.round(dt(Qt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Mn){gt.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(kr);const i=fr(di.h,kr.h,t),s=fr(di.s,kr.s,t),r=fr(di.l,kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new $e;$e.NAMES=Uh;class Pr{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new Pr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zf extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Dn=new O,jn=new O,xa=new O,Zn=new O,ls=new O,cs=new O,nu=new O,va=new O,_a=new O,Ma=new O,ya=new Dt,Sa=new Dt,ba=new Dt;class In{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),jn.subVectors(i,t),xa.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(jn),l=Dn.dot(xa),c=jn.dot(jn),u=jn.dot(xa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ya.setScalar(0),Sa.setScalar(0),ba.setScalar(0),ya.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),ba.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),jn.subVectors(e,t),Dn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Dn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,i),cs.subVectors(r,i),va.subVectors(e,i);const l=ls.dot(va),c=cs.dot(va);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,s);const u=ls.dot(_a),d=cs.dot(_a);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);Ma.subVectors(e,r);const f=ls.dot(Ma),m=cs.dot(Ma);if(m>=0&&f<=m)return t.copy(r);const y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(cs,a);const p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return nu.subVectors(r,s),a=(d-u)/(d-u+(f-m)),t.copy(s).addScaledVector(nu,a);const g=1/(p+y+h);return o=y*g,a=h*g,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class En{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Gr.subVectors(this.max,Ks),us.subVectors(e.a,Ks),hs.subVectors(e.b,Ks),ds.subVectors(e.c,Ks),fi.subVectors(hs,us),pi.subVectors(ds,hs),Ii.subVectors(us,ds);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!wa(t,us,hs,ds,Gr)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,us,hs,ds,Gr))?!1:(Hr.crossVectors(fi,pi),t=[Hr.x,Hr.y,Hr.z],wa(t,us,hs,ds,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,Vr=new En,us=new O,hs=new O,ds=new O,fi=new O,pi=new O,Ii=new O,Ks=new O,Gr=new O,Hr=new O,Ni=new O;function wa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ft=new O,Wr=new re;let kf=0;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class Oh extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fh extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rt extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Vf=new En,Js=new O,Ea=new O;class Rr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ea)),this.expandByPoint(Js.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gf=0;const vn=new _t,Ta=new Ot,fs=new O,pn=new En,Qs=new En,Xt=new O;class St extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?Fh:Oh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(pn.min,Qs.min),pn.expandByPoint(Xt),Xt.addVectors(pn.max,Qs.max),pn.expandByPoint(Xt)):(pn.expandByPoint(Qs.min),pn.expandByPoint(Qs.max))}pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Xt.add(fs)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new O,l[_]=new O;const c=new O,u=new O,d=new O,h=new re,f=new re,m=new re,y=new O,p=new O;function g(_,x,N){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,x),d.fromBufferAttribute(i,N),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,x),m.fromBufferAttribute(r,N),u.sub(c),d.sub(c),f.sub(h),m.sub(h);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(R),a[_].add(y),a[x].add(y),a[N].add(y),l[_].add(p),l[x].add(p),l[N].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,x=v.length;_<x;++_){const N=v[_],R=N.start,B=N.count;for(let V=R,Y=R+B;V<Y;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const S=new O,M=new O,C=new O,D=new O;function I(_){C.fromBufferAttribute(s,_),D.copy(C);const x=a[_];S.copy(x),S.sub(C.multiplyScalar(C.dot(x))).normalize(),M.crossVectors(D,x);const R=M.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,x=v.length;_<x;++_){const N=v[_],R=N.start,B=N.count;for(let V=R,Y=R+B;V<Y;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new wn(h,u,d)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Hf=0;class Ki extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Ts,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xr=new O,iu=new O;class Lo extends Ot{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,s=t.length;i<s;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const s=t.splice(i,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,s;for(i=1,s=t.length;i<s;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Xr.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Xr);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Xr.setFromMatrixPosition(e.matrixWorld),iu.setFromMatrixPosition(this.matrixWorld);const i=Xr.distanceTo(iu)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),i>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let s=0,r=i.length;s<r;s++){const o=i[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Jn=new O,Aa=new O,qr=new O,mi=new O,Ca=new O,Yr=new O,Pa=new O;class yc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Aa.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=mi.dot(this.direction),l=-mi.dot(qr),c=mi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=r*u,d>=0)if(h>=-m)if(h<=m){const y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Aa).addScaledVector(qr,h),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){Ca.subVectors(t,e),Yr.subVectors(i,e),Pa.crossVectors(Ca,Yr);let o=this.direction.dot(Pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Yr.crossVectors(mi,Yr));if(l<0)return null;const c=a*this.direction.dot(Ca.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(Pa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hi extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const su=new _t,Ui=new yc,jr=new Rr,ru=new O,Zr=new O,Kr=new O,Jr=new O,Ra=new O,Qr=new O,ou=new O,$r=new O;class ft extends Ot{constructor(e=new St,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ra.fromBufferAttribute(d,e),o?Qr.addScaledVector(Ra,u):Qr.addScaledVector(Ra.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(jr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(jr,ru)===null||Ui.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(su),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){const p=h[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=S;M<C;M+=3){const D=a.getX(M),I=a.getX(M+1),_=a.getX(M+2);s=eo(this,g,e,i,c,u,d,D,I,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){const v=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);s=eo(this,o,e,i,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){const p=h[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=S;M<C;M+=3){const D=M,I=M+1,_=M+2;s=eo(this,g,e,i,c,u,d,D,I,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){const v=p,S=p+1,M=p+2;s=eo(this,o,e,i,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Wf(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;$r.copy(a),$r.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:n}}function eo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Zr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,Jr);const u=Wf(n,e,t,i,Zr,Kr,Jr,ou);if(u){const d=new O;In.getBarycoord(ou,Zr,Kr,Jr,d),s&&(u.uv=In.getInterpolatedAttribute(s,a,l,c,d,new re)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,l,c,d,new re)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};In.getNormal(Zr,Kr,Jr,h.normal),u.face=h,u.barycoord=d}return u}class Sc extends Zt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Pt,u=Pt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au extends wn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new _t,lu=new _t,to=[],cu=new En,Xf=new _t,$s=new ft,er=new Rr;class ri extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new au(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),cu.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(cu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),er.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(i),e.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),lu.multiplyMatrices(i,ps),$s.matrixWorld=lu,$s.raycast(e,to);for(let o=0,a=to.length;o<a;o++){const l=to[o];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new au(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sc(new Float32Array(s*this.count),s,this.count,Wo,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Da=new O,qf=new O,Yf=new lt;class vi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Da.subVectors(i,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yf.getNormalMatrix(e),s=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Rr,jf=new re(.5,.5),no=new O;class bc{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],y=r[9],p=r[10],g=r[11],v=r[12],S=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,f-u,g-m,C-v).normalize(),s[1].setComponents(c+o,f+u,g+m,C+v).normalize(),s[2].setComponents(c+a,f+d,g+y,C+S).normalize(),s[3].setComponents(c-a,f-d,g-y,C-S).normalize(),i)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,f-h,g-p,C-M).normalize();else if(s[4].setComponents(c-l,f-h,g-p,C-M).normalize(),t===Hn)s[5].setComponents(c+l,f+h,g+p,C+M).normalize();else if(t===yr)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){Oi.center.set(0,0,0);const t=jf.distanceTo(e.center);return Oi.radius=.7071067811865476+t,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends Zt{constructor(e=[],t=Wi,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Us extends Zt{constructor(e,t,i=Xn,s,r,o,a=Pt,l=Pt,c,u=ai,d=1){if(u!==ai&&u!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zf extends Us{constructor(e,t=Xn,i=Wi,s,r,o=Pt,a=Pt,l,c=ai){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zh extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ks extends St{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(d,2));function m(y,p,g,v,S,M,C,D,I,_,x){const N=M/I,R=C/_,B=M/2,V=C/2,Y=D/2,H=I+1,X=_+1;let W=0,de=0;const te=new O;for(let Se=0;Se<X;Se++){const ye=Se*R-V;for(let Te=0;Te<H;Te++){const Ge=Te*N-B;te[y]=Ge*v,te[p]=ye*S,te[g]=Y,c.push(te.x,te.y,te.z),te[y]=0,te[p]=0,te[g]=D>0?1:-1,u.push(te.x,te.y,te.z),d.push(Te/I),d.push(1-Se/_),W+=1}}for(let Se=0;Se<_;Se++)for(let ye=0;ye<I;ye++){const Te=h+ye+H*Se,Ge=h+ye+H*(Se+1),Ke=h+(ye+1)+H*(Se+1),ot=h+(ye+1)+H*Se;l.push(Te,Ge,ot),l.push(Ge,Ke,ot),de+=6}a.addGroup(f,de,x),f+=de,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bi extends St{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let m=0;const y=[],p=i/2;let g=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2));function v(){const M=new O,C=new O;let D=0;const I=(t-e)/i;for(let _=0;_<=r;_++){const x=[],N=_/r,R=N*(t-e)+e;for(let B=0;B<=s;B++){const V=B/s,Y=V*l+a,H=Math.sin(Y),X=Math.cos(Y);C.x=R*H,C.y=-N*i+p,C.z=R*X,d.push(C.x,C.y,C.z),M.set(H,I,X).normalize(),h.push(M.x,M.y,M.z),f.push(V,1-N),x.push(m++)}y.push(x)}for(let _=0;_<s;_++)for(let x=0;x<r;x++){const N=y[x][_],R=y[x+1][_],B=y[x+1][_+1],V=y[x][_+1];(e>0||x!==0)&&(u.push(N,R,V),D+=3),(t>0||x!==r-1)&&(u.push(R,B,V),D+=3)}c.addGroup(g,D,0),g+=D}function S(M){const C=m,D=new re,I=new O;let _=0;const x=M===!0?e:t,N=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*N,0),h.push(0,N,0),f.push(.5,.5),m++;const R=m;for(let B=0;B<=s;B++){const Y=B/s*l+a,H=Math.cos(Y),X=Math.sin(Y);I.x=x*X,I.y=p*N,I.z=x*H,d.push(I.x,I.y,I.z),h.push(0,N,0),D.x=H*.5+.5,D.y=X*.5*N+.5,f.push(D.x,D.y),m++}for(let B=0;B<s;B++){const V=C+B,Y=R+B;M===!0?u.push(Y,Y+1,V):u.push(Y+1,Y,V),_+=3}c.addGroup(g,_,M===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qo extends bi{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new qo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yo extends St{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new O,M=new O,C=new O;for(let D=0;D<t.length;D+=3)f(t[D+0],S),f(t[D+1],M),f(t[D+2],C),l(S,M,C,v)}function l(v,S,M,C){const D=C+1,I=[];for(let _=0;_<=D;_++){I[_]=[];const x=v.clone().lerp(M,_/D),N=S.clone().lerp(M,_/D),R=D-_;for(let B=0;B<=R;B++)B===0&&_===D?I[_][B]=x:I[_][B]=x.clone().lerp(N,B/R)}for(let _=0;_<D;_++)for(let x=0;x<2*(D-_)-1;x++){const N=Math.floor(x/2);x%2===0?(h(I[_][N+1]),h(I[_+1][N]),h(I[_][N])):(h(I[_][N+1]),h(I[_+1][N+1]),h(I[_+1][N]))}}function c(v){const S=new O;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const v=new O;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const M=p(v)/2/Math.PI+.5,C=g(v)/Math.PI+.5;o.push(M,1-C)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){const S=o[v+0],M=o[v+2],C=o[v+4],D=Math.max(S,M,C),I=Math.min(S,M,C);D>.9&&I<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,S){const M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function m(){const v=new O,S=new O,M=new O,C=new O,D=new re,I=new re,_=new re;for(let x=0,N=0;x<r.length;x+=9,N+=6){v.set(r[x+0],r[x+1],r[x+2]),S.set(r[x+3],r[x+4],r[x+5]),M.set(r[x+6],r[x+7],r[x+8]),D.set(o[N+0],o[N+1]),I.set(o[N+2],o[N+3]),_.set(o[N+4],o[N+5]),C.copy(v).add(S).add(M).divideScalar(3);const R=p(C);y(D,N+0,v,R),y(I,N+2,S,R),y(_,N+4,M,R)}}function y(v,S,M,C){C<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.vertices,e.indices,e.radius,e.detail)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,s=[],r=[],o=[],a=new O,l=new _t;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wc extends qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kf extends wc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const io=new O,La=new Ec,Ia=new Ec,Na=new Ec;class kh extends qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(io.subVectors(s[0],s[1]).add(s[0]),c=io);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(io.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),La.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,y,p),Ia.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,y,p),Na.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,y,p)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ia.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Na.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(La.calc(l),Ia.calc(l),Na.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Jf(n,e){const t=1-n;return t*t*e}function Qf(n,e){return 2*(1-n)*n*e}function $f(n,e){return n*n*e}function pr(n,e,t,i){return Jf(n,e)+Qf(n,t)+$f(n,i)}function ep(n,e){const t=1-n;return t*t*t*e}function tp(n,e){const t=1-n;return 3*t*t*n*e}function np(n,e){return 3*(1-n)*n*n*e}function ip(n,e){return n*n*n*e}function mr(n,e,t,i,s){return ep(n,e)+tp(n,t)+np(n,i)+ip(n,s)}class Vh extends qn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sp extends qn{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y),mr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gh extends qn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rp extends qn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends qn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends qn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y),pr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xh extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(uu(a,l.x,c.x,u.x,d.x),uu(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var Io=Object.freeze({__proto__:null,ArcCurve:Kf,CatmullRomCurve3:kh,CubicBezierCurve:Vh,CubicBezierCurve3:sp,EllipseCurve:wc,LineCurve:Gh,LineCurve3:rp,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:Wh,SplineCurve:Xh});class op extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Io[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Io[s.type]().fromJSON(s))}return this}}class No extends op{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Gh(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Hh(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Vh(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Xh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new wc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ri extends No{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new No().fromJSON(s))}return this}}function ap(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=qh(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=dp(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){const f=n[h],m=n[h+1];f<a&&(a=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return br(r,o,t,a,l,c,0),o}function qh(n,e,t,i,s){let r;if(s===bp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=hu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=hu(o/i|0,n[o],n[o+1],r);return r&&Os(r,r.next)&&(Er(r),r=r.next),r}function Xi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Os(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function br(n,e,t,i,s,r,o){if(!n)return;!o&&r&&xp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?cp(n,i,s,r):lp(n)){e.push(l.i,n.i,c.i),Er(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=up(Xi(n),e),br(n,e,t,i,s,r,2)):o===2&&hp(n,e,t,i,s,r):br(Xi(n),e,t,i,s,r,1);break}}}function lp(n){const e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&lr(s,a,r,l,o,c,m.x,m.y)&&Ct(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function cp(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),m=Math.min(u,d,h),y=Math.max(a,l,c),p=Math.max(u,d,h),g=Wl(f,m,e,t,i),v=Wl(y,p,e,t,i);let S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&lr(a,u,l,d,c,h,S.x,S.y)&&Ct(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&lr(a,u,l,d,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=y&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&lr(a,u,l,d,c,h,S.x,S.y)&&Ct(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&lr(a,u,l,d,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function up(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Os(i,s)&&jh(i,t,t.next,s)&&wr(i,s)&&wr(s,i)&&(e.push(i.i,t.i,s.i),Er(t),Er(t.next),t=n=s),t=t.next}while(t!==n);return Xi(t)}function hp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mp(o,a)){let l=Zh(o,a);o=Xi(o,o.next),l=Xi(l,l.next),br(o,e,t,i,s,r,0),br(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function dp(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=qh(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(_p(c))}s.sort(fp);for(let r=0;r<s.length;r++)t=pp(s[r],t);return t}function fp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function pp(n,e){const t=mp(n,e);if(!t)return e;const i=Zh(t,n);return Xi(i,i.next),Xi(t,t.next)}function mp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Os(n,t))return t;do{if(Os(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Yh(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);wr(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&gp(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function gp(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function xp(n,e,t,i){let s=n;do s.z===0&&(s.z=Wl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,vp(s)}function vp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Wl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function _p(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Yh(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function lr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Yh(n,e,t,i,s,r,o,a)}function Mp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!yp(n,e)&&(wr(n,e)&&wr(e,n)&&Sp(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||Os(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Os(n,e){return n.x===e.x&&n.y===e.y}function jh(n,e,t,i){const s=ro(Ct(n,e,t)),r=ro(Ct(n,e,i)),o=ro(Ct(t,i,n)),a=ro(Ct(t,i,e));return!!(s!==r&&o!==a||s===0&&so(n,t,e)||r===0&&so(n,i,e)||o===0&&so(t,n,i)||a===0&&so(t,e,i))}function so(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ro(n){return n>0?1:n<0?-1:0}function yp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&jh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wr(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function Sp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Zh(n,e){const t=Xl(n.i,n.x,n.y),i=Xl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hu(n,e,t,i){const s=Xl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Er(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Xl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class wp{static triangulate(e,t,i=2){return ap(e,t,i)}}class ii{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ii.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];du(e),fu(i,e);let o=e.length;t.forEach(du);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,fu(i,t[l]);const a=wp.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function du(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function fu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class qi extends St{constructor(e=new Ri([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Ep;let S,M=!1,C,D,I,_;if(g){S=g.getSpacedPoints(u),M=!0,h=!1;const ae=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(u,ae),D=new O,I=new O,_=new O}h||(p=0,f=0,m=0,y=0);const x=a.extractPoints(c);let N=x.shape;const R=x.holes;if(!ii.isClockWise(N)){N=N.reverse();for(let ae=0,ve=R.length;ae<ve;ae++){const ce=R[ae];ii.isClockWise(ce)&&(R[ae]=ce.reverse())}}function V(ae){const ce=10000000000000001e-36;let we=ae[0];for(let U=1;U<=ae.length;U++){const He=U%ae.length,Ae=ae[He],ke=Ae.x-we.x,Me=Ae.y-we.y,L=ke*ke+Me*Me,b=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(we.x),Math.abs(we.y)),G=ce*b*b;if(L<=G){ae.splice(He,1),U--;continue}we=Ae}}V(N),R.forEach(V);const Y=R.length,H=N;for(let ae=0;ae<Y;ae++){const ve=R[ae];N=N.concat(ve)}function X(ae,ve,ce){return ve||mt("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ve,ce)}const W=N.length;function de(ae,ve,ce){let we,U,He;const Ae=ae.x-ve.x,ke=ae.y-ve.y,Me=ce.x-ae.x,L=ce.y-ae.y,b=Ae*Ae+ke*ke,G=Ae*L-ke*Me;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(b),ue=Math.sqrt(Me*Me+L*L),k=ve.x-ke/J,se=ve.y+Ae/J,ne=ce.x-L/ue,oe=ce.y+Me/ue,Ee=((ne-k)*L-(oe-se)*Me)/(Ae*L-ke*Me);we=k+Ae*Ee-ae.x,U=se+ke*Ee-ae.y;const Q=we*we+U*U;if(Q<=2)return new re(we,U);He=Math.sqrt(Q/2)}else{let J=!1;Ae>Number.EPSILON?Me>Number.EPSILON&&(J=!0):Ae<-Number.EPSILON?Me<-Number.EPSILON&&(J=!0):Math.sign(ke)===Math.sign(L)&&(J=!0),J?(we=-ke,U=Ae,He=Math.sqrt(b)):(we=Ae,U=ke,He=Math.sqrt(b/2))}return new re(we/He,U/He)}const te=[];for(let ae=0,ve=H.length,ce=ve-1,we=ae+1;ae<ve;ae++,ce++,we++)ce===ve&&(ce=0),we===ve&&(we=0),te[ae]=de(H[ae],H[ce],H[we]);const Se=[];let ye,Te=te.concat();for(let ae=0,ve=Y;ae<ve;ae++){const ce=R[ae];ye=[];for(let we=0,U=ce.length,He=U-1,Ae=we+1;we<U;we++,He++,Ae++)He===U&&(He=0),Ae===U&&(Ae=0),ye[we]=de(ce[we],ce[He],ce[Ae]);Se.push(ye),Te=Te.concat(ye)}let Ge;if(p===0)Ge=ii.triangulateShape(H,R);else{const ae=[],ve=[];for(let ce=0;ce<p;ce++){const we=ce/p,U=f*Math.cos(we*Math.PI/2),He=m*Math.sin(we*Math.PI/2)+y;for(let Ae=0,ke=H.length;Ae<ke;Ae++){const Me=X(H[Ae],te[Ae],He);Fe(Me.x,Me.y,-U),we===0&&ae.push(Me)}for(let Ae=0,ke=Y;Ae<ke;Ae++){const Me=R[Ae];ye=Se[Ae];const L=[];for(let b=0,G=Me.length;b<G;b++){const J=X(Me[b],ye[b],He);Fe(J.x,J.y,-U),we===0&&L.push(J)}we===0&&ve.push(L)}}Ge=ii.triangulateShape(ae,ve)}const Ke=Ge.length,ot=m+y;for(let ae=0;ae<W;ae++){const ve=h?X(N[ae],Te[ae],ot):N[ae];M?(I.copy(C.normals[0]).multiplyScalar(ve.x),D.copy(C.binormals[0]).multiplyScalar(ve.y),_.copy(S[0]).add(I).add(D),Fe(_.x,_.y,_.z)):Fe(ve.x,ve.y,0)}for(let ae=1;ae<=u;ae++)for(let ve=0;ve<W;ve++){const ce=h?X(N[ve],Te[ve],ot):N[ve];M?(I.copy(C.normals[ae]).multiplyScalar(ce.x),D.copy(C.binormals[ae]).multiplyScalar(ce.y),_.copy(S[ae]).add(I).add(D),Fe(_.x,_.y,_.z)):Fe(ce.x,ce.y,d/u*ae)}for(let ae=p-1;ae>=0;ae--){const ve=ae/p,ce=f*Math.cos(ve*Math.PI/2),we=m*Math.sin(ve*Math.PI/2)+y;for(let U=0,He=H.length;U<He;U++){const Ae=X(H[U],te[U],we);Fe(Ae.x,Ae.y,d+ce)}for(let U=0,He=R.length;U<He;U++){const Ae=R[U];ye=Se[U];for(let ke=0,Me=Ae.length;ke<Me;ke++){const L=X(Ae[ke],ye[ke],we);M?Fe(L.x,L.y+S[u-1].y,S[u-1].x+ce):Fe(L.x,L.y,d+ce)}}}ee(),fe();function ee(){const ae=s.length/3;if(h){let ve=0,ce=W*ve;for(let we=0;we<Ke;we++){const U=Ge[we];ze(U[2]+ce,U[1]+ce,U[0]+ce)}ve=u+p*2,ce=W*ve;for(let we=0;we<Ke;we++){const U=Ge[we];ze(U[0]+ce,U[1]+ce,U[2]+ce)}}else{for(let ve=0;ve<Ke;ve++){const ce=Ge[ve];ze(ce[2],ce[1],ce[0])}for(let ve=0;ve<Ke;ve++){const ce=Ge[ve];ze(ce[0]+W*u,ce[1]+W*u,ce[2]+W*u)}}i.addGroup(ae,s.length/3-ae,0)}function fe(){const ae=s.length/3;let ve=0;pe(H,ve),ve+=H.length;for(let ce=0,we=R.length;ce<we;ce++){const U=R[ce];pe(U,ve),ve+=U.length}i.addGroup(ae,s.length/3-ae,1)}function pe(ae,ve){let ce=ae.length;for(;--ce>=0;){const we=ce;let U=ce-1;U<0&&(U=ae.length-1);for(let He=0,Ae=u+p*2;He<Ae;He++){const ke=W*He,Me=W*(He+1),L=ve+we+ke,b=ve+U+ke,G=ve+U+Me,J=ve+we+Me;We(L,b,G,J)}}}function Fe(ae,ve,ce){l.push(ae),l.push(ve),l.push(ce)}function ze(ae,ve,ce){ct(ae),ct(ve),ct(ce);const we=s.length/3,U=v.generateTopUV(i,s,we-3,we-2,we-1);Je(U[0]),Je(U[1]),Je(U[2])}function We(ae,ve,ce,we){ct(ae),ct(ve),ct(we),ct(ve),ct(ce),ct(we);const U=s.length/3,He=v.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);Je(He[0]),Je(He[1]),Je(He[3]),Je(He[1]),Je(He[2]),Je(He[3])}function ct(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function Je(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Tp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Io[s.type]().fromJSON(s)),new qi(i,e.options)}}const Ep={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],m=e[s*3+2],y=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-d),new re(h,1-m),new re(y,1-g)]:[new re(a,1-l),new re(u,1-d),new re(f,1-m),new re(p,1-g)]}};function Tp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class oi extends Yo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oi(e.radius,e.detail)}}class jo extends Yo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jo(e.radius,e.detail)}}class Vs extends St{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],y=[],p=[];for(let g=0;g<u;g++){const v=g*h-o;for(let S=0;S<c;S++){const M=S*d-r;m.push(M,-v,0),y.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const S=v+c*g,M=v+c*(g+1),C=v+1+c*(g+1),D=v+1+c*g;f.push(S,M,D),f.push(M,C,D)}this.setIndex(f),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends St{constructor(e=new Ri([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(r,3)),this.setAttribute("uv",new rt(o,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const m=h.holes;ii.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const v=m[p];ii.isClockWise(v)===!0&&(m[p]=v.reverse())}const y=ii.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const v=m[p];f=f.concat(v)}for(let p=0,g=f.length;p<g;p++){const v=f[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,g=y.length;p<g;p++){const v=y[p],S=v[0]+d,M=v[1]+d,C=v[2]+d;i.push(S,M,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ap(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new Tc(i,e.curveSegments)}}function Ap(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Ac extends St{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new O,h=new O,f=[],m=[],y=[],p=[];for(let g=0;g<=i;g++){const v=[],S=g/i;let M=0;g===0&&o===0?M=.5/t:g===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const D=C/t;d.x=-e*Math.cos(s+D*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+D*r)*Math.sin(o+S*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(D+M,1-S),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){const S=u[g][v+1],M=u[g][v],C=u[g+1][v],D=u[g+1][v+1];(g!==0||o>0)&&f.push(S,M,D),(g!==i-1||l<Math.PI)&&f.push(M,C,D)}this.setIndex(f),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uo extends St{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new O,f=new O,m=new O;for(let y=0;y<=i;y++){const p=o+y/i*a;for(let g=0;g<=s;g++){const v=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(g/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){const g=(s+1)*y+p-1,v=(s+1)*(y-1)+p-1,S=(s+1)*(y-1)+p,M=(s+1)*y+p;l.push(g,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Oo extends St{constructor(e=new Wh(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new re;let u=new O;const d=[],h=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2));function y(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),v(),g()}function p(S){u=e.getPointAt(S/t,u);const M=o.normals[S],C=o.binormals[S];for(let D=0;D<=s;D++){const I=D/s*Math.PI*2,_=Math.sin(I),x=-Math.cos(I);l.x=x*M.x+_*C.x,l.y=x*M.y+_*C.y,l.z=x*M.z+_*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){const C=(s+1)*(S-1)+(M-1),D=(s+1)*S+(M-1),I=(s+1)*S+M,_=(s+1)*(S-1)+M;m.push(C,D,_),m.push(D,I,_)}}function v(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Oo(new Io[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const s in i)e[s]=i[s]}return e}function Cp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const bn={clone:Fs,merge:tn};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jh extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yn extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dp extends Ki{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Qh extends Ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ic,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cc extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $h extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ed extends $h{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ua=new _t,pu=new O,mu=new O;class Ip{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mu),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===yr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oo=new O,ao=new Pi,Fn=new O;class td extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,ao,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(oo,ao,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new O,gu=new re,xu=new re;class mn extends td{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,gu,xu),t.subVectors(xu,gu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zo extends td{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Np extends Ip{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Up extends $h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Np}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ms=-90,gs=1;class Op extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(ms,gs,e,t);s.layers=this.layers,this.add(s);const r=new mn(ms,gs,e,t);r.layers=this.layers,this.add(r);const o=new mn(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new mn(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new mn(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new mn(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Fp extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zp(){this._document.hidden===!1&&this.reset()}const vu=new _t;class kp{constructor(e,t,i=0,s=1/0){this.ray=new yc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vu),this}intersectObject(e,t=!0,i=[]){return ql(e,this,i,t),i.sort(_u),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,i,t);return i.sort(_u),i}}function _u(n,e){return n.distance-e.distance}function ql(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ql(r[o],e,t,!0)}}class Mu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yu=new re;class Vp{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Gp extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){st("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Su(n,e,t,i){const s=Hp(i);switch(t){case Rh:return n*e;case Wo:return n*e/s.components*s.byteLength;case fc:return n*e/s.components*s.byteLength;case Is:return n*e*2/s.components*s.byteLength;case pc:return n*e*2/s.components*s.byteLength;case Dh:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case mc:return n*e*4/s.components*s.byteLength;case So:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:case ml:return Math.max(n,16)*Math.max(e,8)/4;case dl:case pl:return Math.max(n,8)*Math.max(e,8)/2;case gl:case xl:case _l:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vl:case yl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Bl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kl:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hp(n){switch(n){case xn:case Th:return{byteLength:1,components:1};case Mr:case Ah:case Ut:return{byteLength:2,components:1};case hc:case dc:return{byteLength:2,components:4};case Xn:case uc:case Sn:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function nd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wp(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,Fm=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wm=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,lg=`#define MATCAP
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
}`,cg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,gg=`#define TOON
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
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,vg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Sg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:Yp,alphamap_pars_fragment:jp,alphatest_fragment:Zp,alphatest_pars_fragment:Kp,aomap_fragment:Jp,aomap_pars_fragment:Qp,batching_pars_vertex:$p,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:hm,color_pars_vertex:dm,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:xm,displacementmap_vertex:vm,emissivemap_fragment:_m,emissivemap_pars_fragment:Mm,colorspace_fragment:ym,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:Cm,fog_pars_vertex:Pm,fog_fragment:Rm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Um,lights_pars_begin:Om,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:km,lights_phong_pars_fragment:Vm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:$m,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:u0,normal_pars_vertex:h0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:v0,packing:_0,premultiplied_alpha_fragment:M0,project_vertex:y0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:R0,skinning_pars_vertex:D0,skinning_vertex:L0,skinnormal_vertex:I0,specularmap_fragment:N0,specularmap_pars_fragment:U0,tonemapping_fragment:O0,tonemapping_pars_fragment:F0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:j0,cube_frag:Z0,depth_vert:K0,depth_frag:J0,distance_vert:Q0,distance_frag:$0,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:og,meshlambert_frag:ag,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:ug,meshnormal_frag:hg,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:xg,points_vert:vg,points_frag:_g,shadow_vert:Mg,shadow_frag:yg,sprite_vert:Sg,sprite_frag:bg},Oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:tn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:tn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:tn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:tn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:tn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:tn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:tn([Oe.common,Oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:tn([Oe.lights,Oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const lo={r:0,b:0,g:0},Fi=new On,wg=new _t;function Eg(n,e,t,i,s,r){const o=new $e(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(v){let S=!1;const M=f(v);M===null?p(o,a):M&&M.isColor&&(p(M,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===Ho)?(c===void 0&&(c=new ft(new ks(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Fs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Fi.copy(S.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Fi)),c.material.toneMapped=gt.getTransfer(M.colorSpace)!==yt,(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ft(new Vs(2,2),new Tt({name:"BackgroundMaterial",uniforms:Fs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=gt.getTransfer(M.colorSpace)!==yt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(lo,Kh(n)),t.buffers.color.setClear(lo.r,lo.g,lo.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:y,dispose:g}}function Tg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(R,B,V,Y,H){let X=!1;const W=d(R,Y,V,B);r!==W&&(r=W,c(r.object)),X=f(R,Y,V,H),X&&m(R,Y,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(R,B,V,Y),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,B,V,Y){const H=Y.wireframe===!0;let X=i[B.id];X===void 0&&(X={},i[B.id]=X);const W=R.isInstancedMesh===!0?R.id:0;let de=X[W];de===void 0&&(de={},X[W]=de);let te=de[V.id];te===void 0&&(te={},de[V.id]=te);let Se=te[H];return Se===void 0&&(Se=h(l()),te[H]=Se),Se}function h(R){const B=[],V=[],Y=[];for(let H=0;H<t;H++)B[H]=0,V[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:Y,object:R,attributes:{},index:null}}function f(R,B,V,Y){const H=r.attributes,X=B.attributes;let W=0;const de=V.getAttributes();for(const te in de)if(de[te].location>=0){const ye=H[te];let Te=X[te];if(Te===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(Te=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(Te=R.instanceColor)),ye===void 0||ye.attribute!==Te||Te&&ye.data!==Te.data)return!0;W++}return r.attributesNum!==W||r.index!==Y}function m(R,B,V,Y){const H={},X=B.attributes;let W=0;const de=V.getAttributes();for(const te in de)if(de[te].location>=0){let ye=X[te];ye===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(ye=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(ye=R.instanceColor));const Te={};Te.attribute=ye,ye&&ye.data&&(Te.data=ye.data),H[te]=Te,W++}r.attributes=H,r.attributesNum=W,r.index=Y}function y(){const R=r.newAttributes;for(let B=0,V=R.length;B<V;B++)R[B]=0}function p(R){g(R,0)}function g(R,B){const V=r.newAttributes,Y=r.enabledAttributes,H=r.attributeDivisors;V[R]=1,Y[R]===0&&(n.enableVertexAttribArray(R),Y[R]=1),H[R]!==B&&(n.vertexAttribDivisor(R,B),H[R]=B)}function v(){const R=r.newAttributes,B=r.enabledAttributes;for(let V=0,Y=B.length;V<Y;V++)B[V]!==R[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function S(R,B,V,Y,H,X,W){W===!0?n.vertexAttribIPointer(R,B,V,H,X):n.vertexAttribPointer(R,B,V,Y,H,X)}function M(R,B,V,Y){y();const H=Y.attributes,X=V.getAttributes(),W=B.defaultAttributeValues;for(const de in X){const te=X[de];if(te.location>=0){let Se=H[de];if(Se===void 0&&(de==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),de==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor)),Se!==void 0){const ye=Se.normalized,Te=Se.itemSize,Ge=e.get(Se);if(Ge===void 0)continue;const Ke=Ge.buffer,ot=Ge.type,ee=Ge.bytesPerElement,fe=ot===n.INT||ot===n.UNSIGNED_INT||Se.gpuType===uc;if(Se.isInterleavedBufferAttribute){const pe=Se.data,Fe=pe.stride,ze=Se.offset;if(pe.isInstancedInterleavedBuffer){for(let We=0;We<te.locationSize;We++)g(te.location+We,pe.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let We=0;We<te.locationSize;We++)p(te.location+We);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let We=0;We<te.locationSize;We++)S(te.location+We,Te/te.locationSize,ot,ye,Fe*ee,(ze+Te/te.locationSize*We)*ee,fe)}else{if(Se.isInstancedBufferAttribute){for(let pe=0;pe<te.locationSize;pe++)g(te.location+pe,Se.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let pe=0;pe<te.locationSize;pe++)p(te.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let pe=0;pe<te.locationSize;pe++)S(te.location+pe,Te/te.locationSize,ot,ye,Te*ee,Te/te.locationSize*pe*ee,fe)}}else if(W!==void 0){const ye=W[de];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(te.location,ye);break;case 3:n.vertexAttrib3fv(te.location,ye);break;case 4:n.vertexAttrib4fv(te.location,ye);break;default:n.vertexAttrib1fv(te.location,ye)}}}}v()}function C(){x();for(const R in i){const B=i[R];for(const V in B){const Y=B[V];for(const H in Y){const X=Y[H];for(const W in X)u(X[W].object),delete X[W];delete Y[H]}}delete i[R]}}function D(R){if(i[R.id]===void 0)return;const B=i[R.id];for(const V in B){const Y=B[V];for(const H in Y){const X=Y[H];for(const W in X)u(X[W].object),delete X[W];delete Y[H]}}delete i[R.id]}function I(R){for(const B in i){const V=i[B];for(const Y in V){const H=V[Y];if(H[R.id]===void 0)continue;const X=H[R.id];for(const W in X)u(X[W].object),delete X[W];delete H[R.id]}}}function _(R){for(const B in i){const V=i[B],Y=R.isInstancedMesh===!0?R.id:0,H=V[Y];if(H!==void 0){for(const X in H){const W=H[X];for(const de in W)u(W[de].object),delete W[de];delete H[X]}delete V[Y],Object.keys(V).length===0&&delete i[B]}}}function x(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:x,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function Ag(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let m=0;for(let y=0;y<d;y++)m+=u[y]*h[y];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Nn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const _=I===Ut&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Sn&&!_)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(st("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:C,samples:D}}function Pg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new vi,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{const v=r?0:i,S=v*4;let M=g.clippingState||null;l.value=M,M=u(m,h,S,f);for(let C=0;C!==S;++C)M[C]=t[C];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,m){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,m!==!0||p===null){const g=f+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,M=f;S!==y;++S,M+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}const wi=4,bu=[.125,.215,.35,.446,.526,.582],Vi=20,Rg=256,tr=new Zo,wu=new $e;let Oa=null,Fa=0,Ba=0,za=!1;const Dg=new O;class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Dg}=r;Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Fa,Ba),this._renderer.xr.enabled=za,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Ut,format:Nn,colorSpace:Ns,depthBuffer:!1},s=Tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Ng(r,e,t),this._ggxMaterial=Ig(r,e,t)}return s}_compileMaterial(e){const t=new ft(new St,e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,i,s,r){const l=new mn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(wu),d.toneMapping=Wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new ks,new Hi({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let g=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,g=!0):(p.color.copy(wu),g=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const C=this._cubeSize;xs(s,M*C,S>2?C:0,C,C),d.setRenderTarget(s),g&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Wi||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:m}=this,y=this._sizeLods[i],p=3*y*(i>m-wi?i-m+wi:0),g=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,xs(r,p,g,3*y,2*y),s.setRenderTarget(r),s.render(a,tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,xs(e,p,g,3*y,2*y),s.setRenderTarget(e),s.render(a,tr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),y=r/m,p=isFinite(r)?1+Math.floor(u*y):Vi;p>Vi&&st(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const g=[];let v=0;for(let I=0;I<Vi;++I){const _=I/y,x=Math.exp(-_*_/2);g.push(x),I===0?v+=x:I<p&&(v+=2*x)}for(let I=0;I<g.length;I++)g[I]=g[I]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-i;const M=this._sizeLods[s],C=3*M*(s>S-wi?s-S+wi:0),D=4*(this._cubeSize-M);xs(t,C,D,3*M,2*M),l.setRenderTarget(t),l.render(d,tr)}}function Lg(n){const e=[],t=[],i=[];let s=n;const r=n-wi+1+bu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-wi?l=bu[o-n+wi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,y=3,p=2,g=1,v=new Float32Array(y*m*f),S=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let D=0;D<f;D++){const I=D%3*2/3-1,_=D>2?0:-1,x=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];v.set(x,y*m*D),S.set(h,p*m*D);const N=[D,D,D,D,D,D];M.set(N,g*m*D)}const C=new St;C.setAttribute("position",new wn(v,y)),C.setAttribute("uv",new wn(S,p)),C.setAttribute("faceIndex",new wn(M,g)),i.push(new ft(C,null)),s>wi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Tu(n,e,t){const i=new At(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ig(n,e,t){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Ng(n,e,t){const i=new Float32Array(Vi),s=new O(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Au(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Cu(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Ko(){return`

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
	`}class id extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ks(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Vt});r.uniforms.tEquirect.value=t;const o=new ft(s,r),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=jt),new Op(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function Ug(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===aa||f===la)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const y=new id(m.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,m=f===aa||f===la,y=f===Wi||f===Ds;if(m||y){let p=t.get(h);const g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Eu(n)),p=m?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return m&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new Eu(n)),p=m?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===aa?h.mapping=Wi:f===la&&(h.mapping=Ds),h}function l(h){let f=0;const m=6;for(let y=0;y<m;y++)h[y]!==void 0&&f++;return f===m}function c(h){const f=h.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Og(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Do("WebGLRenderer: "+i+" extension not supported."),s}}}function Fg(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,m=d.attributes.position;let y=0;if(m===void 0)return;if(f!==null){const v=f.array;y=f.version;for(let S=0,M=v.length;S<M;S+=3){const C=v[S+0],D=v[S+1],I=v[S+2];h.push(C,D,D,I,I,C)}}else{const v=m.array;y=m.version;for(let S=0,M=v.length/3-1;S<M;S+=3){const C=S+0,D=S+1,I=S+2;h.push(C,D,D,I,I,C)}}const p=new(m.count>=65535?Fh:Oh)(h,1);p.version=y;const g=r.get(d);g&&e.remove(g),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Bg(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,h*o,m),t.update(f,i,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,i,1)}function d(h,f,m,y){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/o,f[g],y[g]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,y,0,m);let g=0;for(let v=0;v<m;v++)g+=f[v]*y[v];t.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function zg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kg(n,e,t){const i=new WeakMap,s=new Dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let N=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var f=N;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let C=a.attributes.position.count*M,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const I=new Float32Array(C*D*4*d),_=new Nh(I,C,D,d);_.type=Sn,_.needsUpdate=!0;const x=M*4;for(let R=0;R<d;R++){const B=g[R],V=v[R],Y=S[R],H=C*D*4*R;for(let X=0;X<B.count;X++){const W=X*x;m===!0&&(s.fromBufferAttribute(B,X),I[H+W+0]=s.x,I[H+W+1]=s.y,I[H+W+2]=s.z,I[H+W+3]=0),y===!0&&(s.fromBufferAttribute(V,X),I[H+W+4]=s.x,I[H+W+5]=s.y,I[H+W+6]=s.z,I[H+W+7]=0),p===!0&&(s.fromBufferAttribute(Y,X),I[H+W+8]=s.x,I[H+W+9]=s.y,I[H+W+10]=s.z,I[H+W+11]=Y.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new re(C,D)},i.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Vg(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Gg={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[oc]:"CINEON_TONE_MAPPING",[Go]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[ac]:"CUSTOM_TONE_MAPPING"};function Hg(n,e,t,i,s){const r=new At(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new At(e,t,{type:Ut,depthBuffer:!1,stencilBuffer:!1}),a=new St;a.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new rt([0,2,0,0,2,0],2));const l=new Jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ft(a,l),u=new Zo(-1,1,1,-1,0,1);let d=null,h=null,f=!1,m,y=null,p=[],g=!1;this.setSize=function(v,S){r.setSize(v,S),o.setSize(v,S);for(let M=0;M<p.length;M++){const C=p[M];C.setSize&&C.setSize(v,S)}},this.setEffects=function(v){p=v,g=p.length>0&&p[0].isRenderPass===!0;const S=r.width,M=r.height;for(let C=0;C<p.length;C++){const D=p[C];D.setSize&&D.setSize(S,M)}},this.begin=function(v,S){if(f||v.toneMapping===Wn&&p.length===0)return!1;if(y=S,S!==null){const M=S.width,C=S.height;(r.width!==M||r.height!==C)&&this.setSize(M,C)}return g===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=Wn,!0},this.hasRenderPass=function(){return g},this.end=function(v,S){v.toneMapping=m,f=!0;let M=r,C=o;for(let D=0;D<p.length;D++){const I=p[D];if(I.enabled!==!1&&(I.render(v,C,M,S),I.needsSwap!==!1)){const _=M;M=C,C=_}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},gt.getTransfer(d)===yt&&(l.defines.SRGB_TRANSFER="");const D=Gg[h];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(y),v.render(c,u),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const sd=new Zt,Yl=new Us(1,1),rd=new Nh,od=new Df,ad=new Bh,Pu=[],Ru=[],Du=new Float32Array(16),Lu=new Float32Array(9),Iu=new Float32Array(4);function Gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;Iu.set(i),n.uniformMatrix2fv(this.addr,!1,Iu),Ht(t,i)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),Ht(t,i)}}function Kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),Ht(t,i)}}function Jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function tx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function rx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yl.compareFunction=t.isReversedDepthBuffer()?xc:gc,r=Yl):r=sd,t.setTexture2D(e||r,s)}function ox(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||od,s)}function ax(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ad,s)}function lx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rd,s)}function cx(n){switch(n){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return jg;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return $g;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function ux(n,e){n.uniform1fv(this.addr,e)}function hx(n,e){const t=Gs(e,this.size,2);n.uniform2fv(this.addr,t)}function dx(n,e){const t=Gs(e,this.size,3);n.uniform3fv(this.addr,t)}function fx(n,e){const t=Gs(e,this.size,4);n.uniform4fv(this.addr,t)}function px(n,e){const t=Gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mx(n,e){const t=Gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gx(n,e){const t=Gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xx(n,e){n.uniform1iv(this.addr,e)}function vx(n,e){n.uniform2iv(this.addr,e)}function _x(n,e){n.uniform3iv(this.addr,e)}function Mx(n,e){n.uniform4iv(this.addr,e)}function yx(n,e){n.uniform1uiv(this.addr,e)}function Sx(n,e){n.uniform2uiv(this.addr,e)}function bx(n,e){n.uniform3uiv(this.addr,e)}function wx(n,e){n.uniform4uiv(this.addr,e)}function Ex(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Yl:o=sd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Tx(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||od,r[o])}function Ax(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ad,r[o])}function Cx(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rd,r[o])}function Px(n){switch(n){case 5126:return ux;case 35664:return hx;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return vx;case 35668:case 35672:return _x;case 35669:case 35673:return Mx;case 5125:return yx;case 36294:return Sx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Cx}}class Rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cx(t.type)}}class Dx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Px(t.type)}}class Lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Nu(n,e){n.seq.push(e),n.map[e.id]=e}function Ix(n,e,t){const i=n.name,s=i.length;for(ka.lastIndex=0;;){const r=ka.exec(i),o=ka.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nu(t,c===void 0?new Rx(a,n,e):new Dx(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Lx(a),Nu(t,d)),t=d}}}class To{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Ix(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Nx=37297;let Ux=0;function Ox(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ou=new lt;function Fx(n){gt._getMatrix(Ou,gt.workingColorSpace,n);const e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Po:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ox(n.getShaderSource(e),a)}else return r}function Bx(n,e){const t=Fx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zx={[sc]:"Linear",[rc]:"Reinhard",[oc]:"Cineon",[Go]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[ac]:"Custom"};function kx(n,e){const t=zx[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new O;function Vx(){gt.getLuminanceCoefficients(co);const n=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Hx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cr(n){return n!==""}function Bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(Xx,Yx)}const qx=new Map;function Yx(n,e){let t=ht[e];if(t===void 0){const i=qx.get(e);if(i!==void 0)t=ht[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jl(t)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(n){return n.replace(jx,Zx)}function Zx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kx={[Es]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function Jx(n){return Kx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qx={[Wi]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};function $x(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Qx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ev={[Ds]:"ENVMAP_MODE_REFRACTION"};function tv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ev[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nv={[ic]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Zd]:"ENVMAP_BLENDING_ADD"};function iv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nv[n.combine]||"ENVMAP_BLENDING_NONE"}function sv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jx(t),c=$x(t),u=tv(t),d=iv(t),h=sv(t),f=Gx(t),m=Hx(r),y=s.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cr).join(`
`),g.length>0&&(g+=`
`)):(p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),g=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?ht.tonemapping_pars_fragment:"",t.toneMapping!==Wn?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Bx("linearToOutputTexel",t.outputColorSpace),Vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=jl(o),o=Bu(o,t),o=zu(o,t),a=jl(a),a=Bu(a,t),a=zu(a,t),o=ku(o),a=ku(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=v+p+o,M=v+g+a,C=Uu(s,s.VERTEX_SHADER,S),D=Uu(s,s.FRAGMENT_SHADER,M);s.attachShader(y,C),s.attachShader(y,D),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(R){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(C)||"",Y=s.getShaderInfoLog(D)||"",H=B.trim(),X=V.trim(),W=Y.trim();let de=!0,te=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,C,D);else{const Se=Fu(s,C,"vertex"),ye=Fu(s,D,"fragment");mt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Se+`
`+ye)}else H!==""?st("WebGLProgram: Program Info Log:",H):(X===""||W==="")&&(te=!1);te&&(R.diagnostics={runnable:de,programLog:H,vertexShader:{log:X,prefix:p},fragmentShader:{log:W,prefix:g}})}s.deleteShader(C),s.deleteShader(D),_=new To(s,y),x=Wx(s,y)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(y,Nx)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ux++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=D,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lv(e),t.set(e,i)),i}}class lv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function cv(n,e,t,i,s,r){const o=new Mc,a=new av,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,x,N,R,B){const V=R.fog,Y=B.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||H,X),de=W&&W.mapping===Ho?W.image.height:null,te=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&st("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const Se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=Se!==void 0?Se.length:0;let Te=0;Y.morphAttributes.position!==void 0&&(Te=1),Y.morphAttributes.normal!==void 0&&(Te=2),Y.morphAttributes.color!==void 0&&(Te=3);let Ge,Ke,ot,ee;if(te){const xt=Vn[te];Ge=xt.vertexShader,Ke=xt.fragmentShader}else Ge=_.vertexShader,Ke=_.fragmentShader,a.update(_),ot=a.getVertexShaderID(_),ee=a.getFragmentShaderID(_);const fe=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,ze=B.isBatchedMesh===!0,We=!!_.map,ct=!!_.matcap,Je=!!W,ae=!!_.aoMap,ve=!!_.lightMap,ce=!!_.bumpMap,we=!!_.normalMap,U=!!_.displacementMap,He=!!_.emissiveMap,Ae=!!_.metalnessMap,ke=!!_.roughnessMap,Me=_.anisotropy>0,L=_.clearcoat>0,b=_.dispersion>0,G=_.iridescence>0,J=_.sheen>0,ue=_.transmission>0,k=Me&&!!_.anisotropyMap,se=L&&!!_.clearcoatMap,ne=L&&!!_.clearcoatNormalMap,oe=L&&!!_.clearcoatRoughnessMap,Ee=G&&!!_.iridescenceMap,Q=G&&!!_.iridescenceThicknessMap,ie=J&&!!_.sheenColorMap,Be=J&&!!_.sheenRoughnessMap,Ie=!!_.specularMap,Ce=!!_.specularColorMap,qe=!!_.specularIntensityMap,z=ue&&!!_.transmissionMap,_e=ue&&!!_.thicknessMap,me=!!_.gradientMap,Re=!!_.alphaMap,xe=_.alphaTest>0,$=!!_.alphaHash,De=!!_.extensions;let Ye=Wn;_.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const ut={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ge,fragmentShader:Ke,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ze,batchingColor:ze&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ns,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:ct,envMap:Je,envMapMode:Je&&W.mapping,envMapCubeUVHeight:de,aoMap:ae,lightMap:ve,bumpMap:ce,normalMap:we,displacementMap:U,emissiveMap:He,normalMapObjectSpace:we&&_.normalMapType===Qd,normalMapTangentSpace:we&&_.normalMapType===Xo,metalnessMap:Ae,roughnessMap:ke,anisotropy:Me,anisotropyMap:k,clearcoat:L,clearcoatMap:se,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,dispersion:b,iridescence:G,iridescenceMap:Ee,iridescenceThicknessMap:Q,sheen:J,sheenColorMap:ie,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:qe,transmission:ue,transmissionMap:z,thicknessMap:_e,gradientMap:me,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:Re,alphaTest:xe,alphaHash:$,combine:_.combine,mapUv:We&&m(_.map.channel),aoMapUv:ae&&m(_.aoMap.channel),lightMapUv:ve&&m(_.lightMap.channel),bumpMapUv:ce&&m(_.bumpMap.channel),normalMapUv:we&&m(_.normalMap.channel),displacementMapUv:U&&m(_.displacementMap.channel),emissiveMapUv:He&&m(_.emissiveMap.channel),metalnessMapUv:Ae&&m(_.metalnessMap.channel),roughnessMapUv:ke&&m(_.roughnessMap.channel),anisotropyMapUv:k&&m(_.anisotropyMap.channel),clearcoatMapUv:se&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Be&&m(_.sheenRoughnessMap.channel),specularMapUv:Ie&&m(_.specularMap.channel),specularColorMapUv:Ce&&m(_.specularColorMap.channel),specularIntensityMapUv:qe&&m(_.specularIntensityMap.channel),transmissionMapUv:z&&m(_.transmissionMap.channel),thicknessMapUv:_e&&m(_.thicknessMap.channel),alphaMapUv:Re&&m(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||Me),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(We||Re),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Y.attributes.normal===void 0&&we===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Te,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:He&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:De&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&_.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)x.push(N),x.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(g(x,_),v(x,_),x.push(n.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function g(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function v(_,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)}function S(_){const x=f[_.type];let N;if(x){const R=Vn[x];N=bn.clone(R.uniforms)}else N=_.uniforms;return N}function M(_,x){let N=u.get(x);return N!==void 0?++N.usedTimes:(N=new rv(n,x,_,s),c.push(N),u.set(x,N)),N}function C(_){if(--_.usedTimes===0){const x=c.indexOf(_);c[x]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function D(_){a.remove(_)}function I(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:C,releaseShaderCache:D,programs:c,dispose:I}}function uv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function hv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,y,p,g){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:m,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:g},n[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=m,v.materialVariant=o(h),v.groupOrder=y,v.renderOrder=h.renderOrder,v.z=p,v.group=g),e++,v}function l(h,f,m,y,p,g){const v=a(h,f,m,y,p,g);m.transmission>0?i.push(v):m.transparent===!0?s.push(v):t.push(v)}function c(h,f,m,y,p,g){const v=a(h,f,m,y,p,g);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||hv),i.length>1&&i.sort(f||Gu),s.length>1&&s.sort(f||Gu)}function d(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function dv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Hu,n.set(i,[o])):s>=r.length?(o=new Hu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mv=0;function gv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xv(n){const e=new fv,t=pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new _t,o=new _t;function a(c){let u=0,d=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,m=0,y=0,p=0,g=0,v=0,S=0,M=0,C=0,D=0,I=0;c.sort(gv);for(let x=0,N=c.length;x<N;x++){const R=c[x],B=R.color,V=R.intensity,Y=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Is?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=B.r*V,d+=B.g*V,h+=B.b*V;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],V);I++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,de=t.get(R);de.shadowIntensity=W.intensity,de.shadowBias=W.bias,de.shadowNormalBias=W.normalBias,de.shadowRadius=W.radius,de.shadowMapSize=W.mapSize,i.directionalShadow[f]=de,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=R.shadow.matrix,v++}i.directional[f]=X,f++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(B).multiplyScalar(V),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[y]=X;const W=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,W.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[y]=W.matrix,R.castShadow){const de=t.get(R);de.shadowIntensity=W.intensity,de.shadowBias=W.bias,de.shadowNormalBias=W.normalBias,de.shadowRadius=W.radius,de.shadowMapSize=W.mapSize,i.spotShadow[y]=de,i.spotShadowMap[y]=H,M++}y++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=X,p++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const W=R.shadow,de=t.get(R);de.shadowIntensity=W.intensity,de.shadowBias=W.bias,de.shadowNormalBias=W.normalBias,de.shadowRadius=W.radius,de.shadowMapSize=W.mapSize,de.shadowCameraNear=W.camera.near,de.shadowCameraFar=W.camera.far,i.pointShadow[m]=de,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=R.shadow.matrix,S++}i.point[m]=X,m++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(V),X.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[g]=X,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==f||_.pointLength!==m||_.spotLength!==y||_.rectAreaLength!==p||_.hemiLength!==g||_.numDirectionalShadows!==v||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==C||_.numLightProbes!==I)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+C-D,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,_.directionalLength=f,_.pointLength=m,_.spotLength=y,_.rectAreaLength=p,_.hemiLength=g,_.numDirectionalShadows=v,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=C,_.numLightProbes=I,i.version=mv++)}function l(c,u){let d=0,h=0,f=0,m=0,y=0;const p=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const S=c[g];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(S.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function Wu(n){const e=new xv(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wu(n),e.set(s,[a])):r>=o.length?(a=new Wu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Sv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Xu=new _t,nr=new O,Va=new O;function bv(n,e,t){let i=new bc;const s=new re,r=new re,o=new Dt,a=new Cc,l=new Lp,c={},u=t.maxTextureSize,d={[Ci]:hn,[hn]:Ci,[un]:un},h=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:_v,fragmentShader:Mv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new St;m.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ft(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let g=this.type;this.render=function(D,I,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;this.type===Id&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);const x=n.getRenderTarget(),N=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Vt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=g!==this.type;V&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(H=>H.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,H=D.length;Y<H;Y++){const X=D[Y],W=X.shadow;if(W===void 0){st("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const de=W.getFrameExtents();s.multiply(de),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,W.mapSize.y=r.y));const te=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=te,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ar){if(X.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new At(s.x,s.y,{format:Is,type:Ut,minFilter:jt,magFilter:jt,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Us(s.x,s.y,Sn),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=ai,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt}else X.isPointLight?(W.map=new id(s.x),W.map.depthTexture=new Zf(s.x,Xn)):(W.map=new At(s.x,s.y),W.map.depthTexture=new Us(s.x,s.y,Xn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=ai,this.type===Es?(W.map.depthTexture.compareFunction=te?xc:gc,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt);W.camera.updateProjectionMatrix()}const Se=W.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Se;ye++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(W.map),n.clear());const Te=W.getViewport(ye);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),B.viewport(o)}if(X.isPointLight){const Te=W.camera,Ge=W.matrix,Ke=X.distance||Te.far;Ke!==Te.far&&(Te.far=Ke,Te.updateProjectionMatrix()),nr.setFromMatrixPosition(X.matrixWorld),Te.position.copy(nr),Va.copy(Te.position),Va.add(yv[ye]),Te.up.copy(Sv[ye]),Te.lookAt(Va),Te.updateMatrixWorld(),Ge.makeTranslation(-nr.x,-nr.y,-nr.z),Xu.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xu,Te.coordinateSystem,Te.reversedDepth)}else W.updateMatrices(X);i=W.getFrustum(),M(I,_,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===ar&&v(W,_),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(x,N,R)};function v(D,I){const _=e.update(y);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new At(s.x,s.y,{format:Is,type:Ut})),h.uniforms.shadow_pass.value=D.map.depthTexture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,_,h,y,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,_,f,y,null)}function S(D,I,_,x){let N=null;const R=_.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)N=R;else if(N=_.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=N.uuid,V=I.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let H=Y[V];H===void 0&&(H=N.clone(),Y[V]=H,I.addEventListener("dispose",C)),N=H}if(N.visible=I.visible,N.wireframe=I.wireframe,x===ar?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:d[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=n.properties.get(N);B.light=_}return N}function M(D,I,_,x,N){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===ar)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,D.matrixWorld);const V=e.update(D),Y=D.material;if(Array.isArray(Y)){const H=V.groups;for(let X=0,W=H.length;X<W;X++){const de=H[X],te=Y[de.materialIndex];if(te&&te.visible){const Se=S(D,te,x,N);D.onBeforeShadow(n,D,I,_,V,Se,de),n.renderBufferDirect(_,null,V,Se,D,de),D.onAfterShadow(n,D,I,_,V,Se,de)}}}else if(Y.visible){const H=S(D,Y,x,N);D.onBeforeShadow(n,D,I,_,V,H,null),n.renderBufferDirect(_,null,V,H,D,null),D.onAfterShadow(n,D,I,_,V,H,null)}}const B=D.children;for(let V=0,Y=B.length;V<Y;V++)M(B[V],I,_,x,N)}function C(D){D.target.removeEventListener("dispose",C);for(const _ in c){const x=c[_],N=D.target.uuid;N in x&&(x[N].dispose(),delete x[N])}}}function wv(n,e){function t(){let z=!1;const _e=new Dt;let me=null;const Re=new Dt(0,0,0,0);return{setMask:function(xe){me!==xe&&!z&&(n.colorMask(xe,xe,xe,xe),me=xe)},setLocked:function(xe){z=xe},setClear:function(xe,$,De,Ye,ut){ut===!0&&(xe*=Ye,$*=Ye,De*=Ye),_e.set(xe,$,De,Ye),Re.equals(_e)===!1&&(n.clearColor(xe,$,De,Ye),Re.copy(_e))},reset:function(){z=!1,me=null,Re.set(-1,0,0,0)}}}function i(){let z=!1,_e=!1,me=null,Re=null,xe=null;return{setReversed:function($){if(_e!==$){const De=e.get("EXT_clip_control");$?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),_e=$;const Ye=xe;xe=null,this.setClear(Ye)}},getReversed:function(){return _e},setTest:function($){$?fe(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function($){me!==$&&!z&&(n.depthMask($),me=$)},setFunc:function($){if(_e&&($=cf[$]),Re!==$){switch($){case sl:n.depthFunc(n.NEVER);break;case rl:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case al:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=$}},setLocked:function($){z=$},setClear:function($){xe!==$&&(xe=$,_e&&($=1-$),n.clearDepth($))},reset:function(){z=!1,me=null,Re=null,xe=null,_e=!1}}}function s(){let z=!1,_e=null,me=null,Re=null,xe=null,$=null,De=null,Ye=null,ut=null;return{setTest:function(xt){z||(xt?fe(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(xt){_e!==xt&&!z&&(n.stencilMask(xt),_e=xt)},setFunc:function(xt,Tn,An){(me!==xt||Re!==Tn||xe!==An)&&(n.stencilFunc(xt,Tn,An),me=xt,Re=Tn,xe=An)},setOp:function(xt,Tn,An){($!==xt||De!==Tn||Ye!==An)&&(n.stencilOp(xt,Tn,An),$=xt,De=Tn,Ye=An)},setLocked:function(xt){z=xt},setClear:function(xt){ut!==xt&&(n.clearStencil(xt),ut=xt)},reset:function(){z=!1,_e=null,me=null,Re=null,xe=null,$=null,De=null,Ye=null,ut=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],m=null,y=!1,p=null,g=null,v=null,S=null,M=null,C=null,D=null,I=new $e(0,0,0),_=0,x=!1,N=null,R=null,B=null,V=null,Y=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(de)[1]),X=W>=1):de.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),X=W>=2);let te=null,Se={};const ye=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Ge=new Dt().fromArray(ye),Ke=new Dt().fromArray(Te);function ot(z,_e,me,Re){const xe=new Uint8Array(4),$=n.createTexture();n.bindTexture(z,$),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<me;De++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(_e+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return $}const ee={};ee[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Rs),ce(!1),we(Fc),fe(n.CULL_FACE),ae(Vt);function fe(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function pe(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Fe(z,_e){return d[z]!==_e?(n.bindFramebuffer(z,_e),d[z]=_e,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function ze(z,_e){let me=f,Re=!1;if(z){me=h.get(_e),me===void 0&&(me=[],h.set(_e,me));const xe=z.textures;if(me.length!==xe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let $=0,De=xe.length;$<De;$++)me[$]=n.COLOR_ATTACHMENT0+$;me.length=xe.length,Re=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Re=!0);Re&&n.drawBuffers(me)}function We(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const ct={[ei]:n.FUNC_ADD,[Nd]:n.FUNC_SUBTRACT,[Ud]:n.FUNC_REVERSE_SUBTRACT};ct[Od]=n.MIN,ct[Fd]=n.MAX;const Je={[tl]:n.ZERO,[Bd]:n.ONE,[zd]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[Hd]:n.SRC_ALPHA_SATURATE,[wh]:n.DST_COLOR,[bh]:n.DST_ALPHA,[kd]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[Vd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(z,_e,me,Re,xe,$,De,Ye,ut,xt){if(z===Vt){y===!0&&(pe(n.BLEND),y=!1);return}if(y===!1&&(fe(n.BLEND),y=!0),z!==Sh){if(z!==p||xt!==x){if((g!==ei||M!==ei)&&(n.blendEquation(n.FUNC_ADD),g=ei,M=ei),xt)switch(z){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case el:n.blendFunc(n.ONE,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",z);break}else switch(z){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case el:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bc:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",z);break}v=null,S=null,C=null,D=null,I.set(0,0,0),_=0,p=z,x=xt}return}xe=xe||_e,$=$||me,De=De||Re,(_e!==g||xe!==M)&&(n.blendEquationSeparate(ct[_e],ct[xe]),g=_e,M=xe),(me!==v||Re!==S||$!==C||De!==D)&&(n.blendFuncSeparate(Je[me],Je[Re],Je[$],Je[De]),v=me,S=Re,C=$,D=De),(Ye.equals(I)===!1||ut!==_)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ut),I.copy(Ye),_=ut),p=z,x=!1}function ve(z,_e){z.side===un?pe(n.CULL_FACE):fe(n.CULL_FACE);let me=z.side===hn;_e&&(me=!me),ce(me),z.blending===Ts&&z.transparent===!1?ae(Vt):ae(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Re=z.stencilWrite;a.setTest(Re),Re&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),He(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(z){N!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),N=z)}function we(z){z!==Dd?(fe(n.CULL_FACE),z!==R&&(z===Fc?n.cullFace(n.BACK):z===Ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),R=z}function U(z){z!==B&&(X&&n.lineWidth(z),B=z)}function He(z,_e,me){z?(fe(n.POLYGON_OFFSET_FILL),(V!==_e||Y!==me)&&(V=_e,Y=me,o.getReversed()&&(_e=-_e),n.polygonOffset(_e,me))):pe(n.POLYGON_OFFSET_FILL)}function Ae(z){z?fe(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function ke(z){z===void 0&&(z=n.TEXTURE0+H-1),te!==z&&(n.activeTexture(z),te=z)}function Me(z,_e,me){me===void 0&&(te===null?me=n.TEXTURE0+H-1:me=te);let Re=Se[me];Re===void 0&&(Re={type:void 0,texture:void 0},Se[me]=Re),(Re.type!==z||Re.texture!==_e)&&(te!==me&&(n.activeTexture(me),te=me),n.bindTexture(z,_e||ee[z]),Re.type=z,Re.texture=_e)}function L(){const z=Se[te];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function J(){try{n.texSubImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function ue(){try{n.texSubImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function ne(){try{n.texStorage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function oe(){try{n.texStorage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function Ee(){try{n.texImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function Q(){try{n.texImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function ie(z){Ge.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ge.copy(z))}function Be(z){Ke.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Ke.copy(z))}function Ie(z,_e){let me=c.get(_e);me===void 0&&(me=new WeakMap,c.set(_e,me));let Re=me.get(z);Re===void 0&&(Re=n.getUniformBlockIndex(_e,z.name),me.set(z,Re))}function Ce(z,_e){const Re=c.get(_e).get(z);l.get(_e)!==Re&&(n.uniformBlockBinding(_e,Re,z.__bindingPointIndex),l.set(_e,Re))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,Se={},d={},h=new WeakMap,f=[],m=null,y=!1,p=null,g=null,v=null,S=null,M=null,C=null,D=null,I=new $e(0,0,0),_=0,x=!1,N=null,R=null,B=null,V=null,Y=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:pe,bindFramebuffer:Fe,drawBuffers:ze,useProgram:We,setBlending:ae,setMaterial:ve,setFlipSided:ce,setCullFace:we,setLineWidth:U,setPolygonOffset:He,setScissorTest:Ae,activeTexture:ke,bindTexture:Me,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:Ee,texImage3D:Q,updateUBOMapping:Ie,uniformBlockBinding:Ce,texStorage2D:ne,texStorage3D:oe,texSubImage2D:J,texSubImage3D:ue,compressedTexSubImage2D:k,compressedTexSubImage3D:se,scissor:ie,viewport:Be,reset:qe}}function Ev(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,b){return f?new OffscreenCanvas(L,b):Ro("canvas")}function y(L,b,G){let J=1;const ue=Me(L);if((ue.width>G||ue.height>G)&&(J=G/Math.max(ue.width,ue.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const k=Math.floor(J*ue.width),se=Math.floor(J*ue.height);d===void 0&&(d=m(k,se));const ne=b?m(k,se):d;return ne.width=k,ne.height=se,ne.getContext("2d").drawImage(L,0,0,k,se),st("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+k+"x"+se+")."),ne}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),L;return L}function p(L){return L.generateMipmaps}function g(L){n.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(L,b,G,J,ue=!1){if(L!==null){if(n[L]!==void 0)return n[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let k=b;if(b===n.RED&&(G===n.FLOAT&&(k=n.R32F),G===n.HALF_FLOAT&&(k=n.R16F),G===n.UNSIGNED_BYTE&&(k=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(k=n.R8UI),G===n.UNSIGNED_SHORT&&(k=n.R16UI),G===n.UNSIGNED_INT&&(k=n.R32UI),G===n.BYTE&&(k=n.R8I),G===n.SHORT&&(k=n.R16I),G===n.INT&&(k=n.R32I)),b===n.RG&&(G===n.FLOAT&&(k=n.RG32F),G===n.HALF_FLOAT&&(k=n.RG16F),G===n.UNSIGNED_BYTE&&(k=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(k=n.RG8UI),G===n.UNSIGNED_SHORT&&(k=n.RG16UI),G===n.UNSIGNED_INT&&(k=n.RG32UI),G===n.BYTE&&(k=n.RG8I),G===n.SHORT&&(k=n.RG16I),G===n.INT&&(k=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(k=n.RGB8UI),G===n.UNSIGNED_SHORT&&(k=n.RGB16UI),G===n.UNSIGNED_INT&&(k=n.RGB32UI),G===n.BYTE&&(k=n.RGB8I),G===n.SHORT&&(k=n.RGB16I),G===n.INT&&(k=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),G===n.UNSIGNED_INT&&(k=n.RGBA32UI),G===n.BYTE&&(k=n.RGBA8I),G===n.SHORT&&(k=n.RGBA16I),G===n.INT&&(k=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),b===n.RGBA){const se=ue?Po:gt.getTransfer(J);G===n.FLOAT&&(k=n.RGBA32F),G===n.HALF_FLOAT&&(k=n.RGBA16F),G===n.UNSIGNED_BYTE&&(k=se===yt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function M(L,b){let G;return L?b===null||b===Xn||b===Ls?G=n.DEPTH24_STENCIL8:b===Sn?G=n.DEPTH32F_STENCIL8:b===Mr&&(G=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xn||b===Ls?G=n.DEPTH_COMPONENT24:b===Sn?G=n.DEPTH_COMPONENT32F:b===Mr&&(G=n.DEPTH_COMPONENT16),G}function C(L,b){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pt&&L.minFilter!==jt?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function D(L){const b=L.target;b.removeEventListener("dispose",D),_(b),b.isVideoTexture&&u.delete(b)}function I(L){const b=L.target;b.removeEventListener("dispose",I),N(b)}function _(L){const b=i.get(L);if(b.__webglInit===void 0)return;const G=L.source,J=h.get(G);if(J){const ue=J[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&x(L),Object.keys(J).length===0&&h.delete(G)}i.remove(L)}function x(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const G=L.source,J=h.get(G);delete J[b.__cacheKey],o.memory.textures--}function N(L){const b=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ue=0;ue<b.__webglFramebuffer[J].length;ue++)n.deleteFramebuffer(b.__webglFramebuffer[J][ue]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=L.textures;for(let J=0,ue=G.length;J<ue;J++){const k=i.get(G[J]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(L)}let R=0;function B(){R=0}function V(){const L=R;return L>=s.maxTextures&&st("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function Y(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function H(L,b){const G=i.get(L);if(L.isVideoTexture&&Ae(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const J=L.image;if(J===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,L,b);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function X(L,b){const G=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ee(G,L,b);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function W(L,b){const G=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ee(G,L,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function de(L,b){const G=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){fe(G,L,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const te={[_r]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},Se={[Pt]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},ye={[$d]:n.NEVER,[rf]:n.ALWAYS,[ef]:n.LESS,[gc]:n.LEQUAL,[tf]:n.EQUAL,[xc]:n.GEQUAL,[nf]:n.GREATER,[sf]:n.NOTEQUAL};function Te(L,b){if(b.type===Sn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===jt||b.magFilter===ca||b.magFilter===Fr||b.magFilter===Gi||b.minFilter===jt||b.minFilter===ca||b.minFilter===Fr||b.minFilter===Gi)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,te[b.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,te[b.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,te[b.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Se[b.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pt||b.minFilter!==Fr&&b.minFilter!==Gi||b.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ge(L,b){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",D));const J=b.source;let ue=h.get(J);ue===void 0&&(ue={},h.set(J,ue));const k=Y(b);if(k!==L.__cacheKey){ue[k]===void 0&&(ue[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ue[k].usedTimes++;const se=ue[L.__cacheKey];se!==void 0&&(ue[L.__cacheKey].usedTimes--,se.usedTimes===0&&x(b)),L.__cacheKey=k,L.__webglTexture=ue[k].texture}return G}function Ke(L,b,G){return Math.floor(Math.floor(L/G)/b)}function ot(L,b,G,J){const k=L.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,J,b.data);else{k.sort((Q,ie)=>Q.start-ie.start);let se=0;for(let Q=1;Q<k.length;Q++){const ie=k[se],Be=k[Q],Ie=ie.start+ie.count,Ce=Ke(Be.start,b.width,4),qe=Ke(ie.start,b.width,4);Be.start<=Ie+1&&Ce===qe&&Ke(Be.start+Be.count-1,b.width,4)===Ce?ie.count=Math.max(ie.count,Be.start+Be.count-ie.start):(++se,k[se]=Be)}k.length=se+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),oe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Q=0,ie=k.length;Q<ie;Q++){const Be=k[Q],Ie=Math.floor(Be.start/4),Ce=Math.ceil(Be.count/4),qe=Ie%b.width,z=Math.floor(Ie/b.width),_e=Ce,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,qe,z,_e,me,G,J,b.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function ee(L,b,G){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const ue=Ge(L,b),k=b.source;t.bindTexture(J,L.__webglTexture,n.TEXTURE0+G);const se=i.get(k);if(k.version!==se.__version||ue===!0){t.activeTexture(n.TEXTURE0+G);const ne=gt.getPrimaries(gt.workingColorSpace),oe=b.colorSpace===Mi?null:gt.getPrimaries(b.colorSpace),Ee=b.colorSpace===Mi||ne===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Q=y(b.image,!1,s.maxTextureSize);Q=ke(b,Q);const ie=r.convert(b.format,b.colorSpace),Be=r.convert(b.type);let Ie=S(b.internalFormat,ie,Be,b.colorSpace,b.isVideoTexture);Te(J,b);let Ce;const qe=b.mipmaps,z=b.isVideoTexture!==!0,_e=se.__version===void 0||ue===!0,me=k.dataReady,Re=C(b,Q);if(b.isDepthTexture)Ie=M(b.format===Si,b.type),_e&&(z?t.texStorage2D(n.TEXTURE_2D,1,Ie,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,ie,Be,null));else if(b.isDataTexture)if(qe.length>0){z&&_e&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,qe[0].width,qe[0].height);for(let xe=0,$=qe.length;xe<$;xe++)Ce=qe[xe],z?me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ie,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Ce.width,Ce.height,0,ie,Be,Ce.data);b.generateMipmaps=!1}else z?(_e&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,Q.width,Q.height),me&&ot(b,Q,ie,Be)):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,ie,Be,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,qe[0].width,qe[0].height,Q.depth);for(let xe=0,$=qe.length;xe<$;xe++)if(Ce=qe[xe],b.format!==Nn)if(ie!==null)if(z){if(me)if(b.layerUpdates.size>0){const De=Su(Ce.width,Ce.height,b.format,b.type);for(const Ye of b.layerUpdates){const ut=Ce.data.subarray(Ye*De/Ce.data.BYTES_PER_ELEMENT,(Ye+1)*De/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ye,Ce.width,Ce.height,1,ie,ut)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,Q.depth,ie,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Ce.width,Ce.height,Q.depth,0,Ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,Q.depth,ie,Be,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Ce.width,Ce.height,Q.depth,0,ie,Be,Ce.data)}else{z&&_e&&t.texStorage2D(n.TEXTURE_2D,Re,Ie,qe[0].width,qe[0].height);for(let xe=0,$=qe.length;xe<$;xe++)Ce=qe[xe],b.format!==Nn?ie!==null?z?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ie,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ie,Ce.width,Ce.height,0,Ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ie,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Ce.width,Ce.height,0,ie,Be,Ce.data)}else if(b.isDataArrayTexture)if(z){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ie,Q.width,Q.height,Q.depth),me)if(b.layerUpdates.size>0){const xe=Su(Q.width,Q.height,b.format,b.type);for(const $ of b.layerUpdates){const De=Q.data.subarray($*xe/Q.data.BYTES_PER_ELEMENT,($+1)*xe/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ie,Be,De)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ie,Be,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,Q.width,Q.height,Q.depth,0,ie,Be,Q.data);else if(b.isData3DTexture)z?(_e&&t.texStorage3D(n.TEXTURE_3D,Re,Ie,Q.width,Q.height,Q.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ie,Be,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,Q.width,Q.height,Q.depth,0,ie,Be,Q.data);else if(b.isFramebufferTexture){if(_e)if(z)t.texStorage2D(n.TEXTURE_2D,Re,Ie,Q.width,Q.height);else{let xe=Q.width,$=Q.height;for(let De=0;De<Re;De++)t.texImage2D(n.TEXTURE_2D,De,Ie,xe,$,0,ie,Be,null),xe>>=1,$>>=1}}else if(qe.length>0){if(z&&_e){const xe=Me(qe[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ie,xe.width,xe.height)}for(let xe=0,$=qe.length;xe<$;xe++)Ce=qe[xe],z?me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ie,Be,Ce):t.texImage2D(n.TEXTURE_2D,xe,Ie,ie,Be,Ce);b.generateMipmaps=!1}else if(z){if(_e){const xe=Me(Q);t.texStorage2D(n.TEXTURE_2D,Re,Ie,xe.width,xe.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,Be,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ie,Be,Q);p(b)&&g(J),se.__version=k.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function fe(L,b,G){if(b.image.length!==6)return;const J=Ge(L,b),ue=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+G);const k=i.get(ue);if(ue.version!==k.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const se=gt.getPrimaries(gt.workingColorSpace),ne=b.colorSpace===Mi?null:gt.getPrimaries(b.colorSpace),oe=b.colorSpace===Mi||se===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,ie=[];for(let $=0;$<6;$++)!Ee&&!Q?ie[$]=y(b.image[$],!0,s.maxCubemapSize):ie[$]=Q?b.image[$].image:b.image[$],ie[$]=ke(b,ie[$]);const Be=ie[0],Ie=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type),qe=S(b.internalFormat,Ie,Ce,b.colorSpace),z=b.isVideoTexture!==!0,_e=k.__version===void 0||J===!0,me=ue.dataReady;let Re=C(b,Be);Te(n.TEXTURE_CUBE_MAP,b);let xe;if(Ee){z&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,Be.width,Be.height);for(let $=0;$<6;$++){xe=ie[$].mipmaps;for(let De=0;De<xe.length;De++){const Ye=xe[De];b.format!==Nn?Ie!==null?z?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De,0,0,Ye.width,Ye.height,Ie,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De,qe,Ye.width,Ye.height,0,Ye.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De,0,0,Ye.width,Ye.height,Ie,Ce,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De,qe,Ye.width,Ye.height,0,Ie,Ce,Ye.data)}}}else{if(xe=b.mipmaps,z&&_e){xe.length>0&&Re++;const $=Me(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,$.width,$.height)}for(let $=0;$<6;$++)if(Q){z?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ie[$].width,ie[$].height,Ie,Ce,ie[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qe,ie[$].width,ie[$].height,0,Ie,Ce,ie[$].data);for(let De=0;De<xe.length;De++){const ut=xe[De].image[$].image;z?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De+1,0,0,ut.width,ut.height,Ie,Ce,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De+1,qe,ut.width,ut.height,0,Ie,Ce,ut.data)}}else{z?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ie,Ce,ie[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qe,Ie,Ce,ie[$]);for(let De=0;De<xe.length;De++){const Ye=xe[De];z?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De+1,0,0,Ie,Ce,Ye.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,De+1,qe,Ie,Ce,Ye.image[$])}}}p(b)&&g(n.TEXTURE_CUBE_MAP),k.__version=ue.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pe(L,b,G,J,ue,k){const se=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),oe=S(G.internalFormat,se,ne,G.colorSpace),Ee=i.get(b),Q=i.get(G);if(Q.__renderTarget=b,!Ee.__hasExternalTextures){const ie=Math.max(1,b.width>>k),Be=Math.max(1,b.height>>k);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,k,oe,ie,Be,b.depth,0,se,ne,null):t.texImage2D(ue,k,oe,ie,Be,0,se,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),He(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ue,Q.__webglTexture,0,U(b)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ue,Q.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(L,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,L),b.depthBuffer){const J=b.depthTexture,ue=J&&J.isDepthTexture?J.type:null,k=M(b.stencilBuffer,ue),se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;He(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(b),k,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(b),k,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,k,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,L)}else{const J=b.textures;for(let ue=0;ue<J.length;ue++){const k=J[ue],se=r.convert(k.format,k.colorSpace),ne=r.convert(k.type),oe=S(k.internalFormat,se,ne,k.colorSpace);He(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(b),oe,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(b),oe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,oe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(L,b,G){const J=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(b.depthTexture);if(ue.__renderTarget=b,(!ue.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,b.depthTexture.addEventListener("dispose",D)),ue.__webglTexture===void 0){ue.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Te(n.TEXTURE_CUBE_MAP,b.depthTexture);const Ee=r.convert(b.depthTexture.format),Q=r.convert(b.depthTexture.type);let ie;b.depthTexture.format===ai?ie=n.DEPTH_COMPONENT24:b.depthTexture.format===Si&&(ie=n.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,ie,b.width,b.height,0,Ee,Q,null)}}else H(b.depthTexture,0);const k=ue.__webglTexture,se=U(b),ne=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,oe=b.depthTexture.format===Si?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ai)He(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,k,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,k,0);else if(b.depthTexture.format===Si)He(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,k,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,k,0);else throw new Error("Unknown depthTexture format")}function We(L){const b=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",ue)};J.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=J}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let J=0;J<6;J++)ze(b.__webglFramebuffer[J],L,J);else{const J=L.texture.mipmaps;J&&J.length>0?ze(b.__webglFramebuffer[0],L,0):ze(b.__webglFramebuffer,L,0)}else if(G){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),Fe(b.__webglDepthbuffer[J],L,!1);else{const ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,k)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Fe(b.__webglDepthbuffer,L,!1);else{const ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(L,b,G){const J=i.get(L);b!==void 0&&pe(J.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&We(L)}function Je(L){const b=L.texture,G=i.get(L),J=i.get(b);L.addEventListener("dispose",I);const ue=L.textures,k=L.isWebGLCubeRenderTarget===!0,se=ue.length>1;if(se||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,o.memory.textures++),k){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let oe=0;oe<b.mipmaps.length;oe++)G.__webglFramebuffer[ne][oe]=n.createFramebuffer()}else G.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)G.__webglFramebuffer[ne]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(se)for(let ne=0,oe=ue.length;ne<oe;ne++){const Ee=i.get(ue[ne]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&He(L)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<ue.length;ne++){const oe=ue[ne];G.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);const Ee=r.convert(oe.format,oe.colorSpace),Q=r.convert(oe.type),ie=S(oe.internalFormat,Ee,Q,oe.colorSpace,L.isXRRenderTarget===!0),Be=U(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ie,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Te(n.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)pe(G.__webglFramebuffer[ne][oe],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else pe(G.__webglFramebuffer[ne],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(b)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let ne=0,oe=ue.length;ne<oe;ne++){const Ee=ue[ne],Q=i.get(Ee);let ie=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),Te(ie,Ee),pe(G.__webglFramebuffer,L,Ee,n.COLOR_ATTACHMENT0+ne,ie,0),p(Ee)&&g(ie)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,J.__webglTexture),Te(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)pe(G.__webglFramebuffer[oe],L,b,n.COLOR_ATTACHMENT0,ne,oe);else pe(G.__webglFramebuffer,L,b,n.COLOR_ATTACHMENT0,ne,0);p(b)&&g(ne),t.unbindTexture()}L.depthBuffer&&We(L)}function ae(L){const b=L.textures;for(let G=0,J=b.length;G<J;G++){const ue=b[G];if(p(ue)){const k=v(L),se=i.get(ue).__webglTexture;t.bindTexture(k,se),g(k),t.unbindTexture()}}}const ve=[],ce=[];function we(L){if(L.samples>0){if(He(L)===!1){const b=L.textures,G=L.width,J=L.height;let ue=n.COLOR_BUFFER_BIT;const k=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(L),ne=b.length>1;if(ne)for(let Ee=0;Ee<b.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const oe=L.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);const Q=i.get(b[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,ue,n.NEAREST),l===!0&&(ve.length=0,ce.length=0,ve.push(n.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ve.push(k),ce.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ee=0;Ee<b.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);const Q=i.get(b[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function U(L){return Math.min(s.maxSamples,L.samples)}function He(L){const b=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ae(L){const b=o.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function ke(L,b){const G=L.colorSpace,J=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Ns&&G!==Mi&&(gt.getTransfer(G)===yt?(J!==Nn||ue!==xn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",G)),b}function Me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=de,this.rebindTextures=ct,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tv(n,e){function t(i,s=Mi){let r;const o=gt.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Th)return n.BYTE;if(i===Ah)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===uc)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Ut)return n.HALF_FLOAT;if(i===Rh)return n.ALPHA;if(i===Dh)return n.RGB;if(i===Nn)return n.RGBA;if(i===ai)return n.DEPTH_COMPONENT;if(i===Si)return n.DEPTH_STENCIL;if(i===Wo)return n.RED;if(i===fc)return n.RED_INTEGER;if(i===Is)return n.RG;if(i===pc)return n.RG_INTEGER;if(i===mc)return n.RGBA_INTEGER;if(i===So||i===bo||i===wo||i===Eo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===fl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===xl||i===vl||i===_l||i===Ml||i===yl||i===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===xl)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_l)return r.COMPRESSED_R11_EAC;if(i===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yl)return r.COMPRESSED_RG11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===wl||i===El||i===Tl||i===Al||i===Cl||i===Pl||i===Rl||i===Dl||i===Ll||i===Il||i===Nl||i===Ul||i===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===Bl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fl)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===Vl||i===Gl||i===Hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
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

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Tt({vertexShader:Av,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rv extends ji{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const y=typeof XRWebGLBinding<"u",p=new Pv,g={},v=t.getContextAttributes();let S=null,M=null;const C=[],D=[],I=new re;let _=null;const x=new mn;x.viewport=new Dt;const N=new mn;N.viewport=new Dt;const R=[x,N],B=new Fp;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=C[ee];return fe===void 0&&(fe=new ma,C[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=C[ee];return fe===void 0&&(fe=new ma,C[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=C[ee];return fe===void 0&&(fe=new ma,C[ee]=fe),fe.getHandSpace()};function H(ee){const fe=D.indexOf(ee.inputSource);if(fe===-1)return;const pe=C[fe];pe!==void 0&&(pe.update(ee.inputSource,ee.frame,c||o),pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",W);for(let ee=0;ee<C.length;ee++){const fe=D[ee];fe!==null&&(D[ee]=null,C[ee].disconnect(fe))}V=null,Y=null,p.reset();for(const ee in g)delete g[ee];e.setRenderTarget(S),f=null,h=null,d=null,s=null,M=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,ze=null;v.depth&&(ze=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?Si:ai,Fe=v.stencil?Ls:Xn);const We={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(We),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new At(h.textureWidth,h.textureHeight,{format:Nn,type:xn,depthTexture:new Us(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new At(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(ee){for(let fe=0;fe<ee.removed.length;fe++){const pe=ee.removed[fe],Fe=D.indexOf(pe);Fe>=0&&(D[Fe]=null,C[Fe].disconnect(pe))}for(let fe=0;fe<ee.added.length;fe++){const pe=ee.added[fe];let Fe=D.indexOf(pe);if(Fe===-1){for(let We=0;We<C.length;We++)if(We>=D.length){D.push(pe),Fe=We;break}else if(D[We]===null){D[We]=pe,Fe=We;break}if(Fe===-1)break}const ze=C[Fe];ze&&ze.connect(pe)}}const de=new O,te=new O;function Se(ee,fe,pe){de.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(pe.matrixWorld);const Fe=de.distanceTo(te),ze=fe.projectionMatrix.elements,We=pe.projectionMatrix.elements,ct=ze[14]/(ze[10]-1),Je=ze[14]/(ze[10]+1),ae=(ze[9]+1)/ze[5],ve=(ze[9]-1)/ze[5],ce=(ze[8]-1)/ze[0],we=(We[8]+1)/We[0],U=ct*ce,He=ct*we,Ae=Fe/(-ce+we),ke=Ae*-ce;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ke),ee.translateZ(Ae),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ze[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Me=ct+Ae,L=Je+Ae,b=U-ke,G=He+(Fe-ke),J=ae*Je/L*Me,ue=ve*Je/L*Me;ee.projectionMatrix.makePerspective(b,G,J,ue,Me,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ye(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let fe=ee.near,pe=ee.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),B.near=N.near=x.near=fe,B.far=N.far=x.far=pe,(V!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,Y=B.far),B.layers.mask=ee.layers.mask|6,x.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;const Fe=ee.parent,ze=B.cameras;ye(B,Fe);for(let We=0;We<ze.length;We++)ye(ze[We],Fe);ze.length===2?Se(B,x,N):B.projectionMatrix.copy(x.projectionMatrix),Te(ee,B,Fe)};function Te(ee,fe,pe){pe===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Sr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(ee){return g[ee]};let Ge=null;function Ke(ee,fe){if(u=fe.getViewerPose(c||o),m=fe,u!==null){const pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Fe=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let Je=0;Je<pe.length;Je++){const ae=pe[Je];let ve=null;if(f!==null)ve=f.getViewport(ae);else{const we=d.getViewSubImage(h,ae);ve=we.viewport,Je===0&&(e.setRenderTargetTextures(M,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(M))}let ce=R[Je];ce===void 0&&(ce=new mn,ce.layers.enable(Je),ce.viewport=new Dt,R[Je]=ce),ce.matrix.fromArray(ae.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ae.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ve.x,ve.y,ve.width,ve.height),Je===0&&(B.matrix.copy(ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(ce)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Je=d.getDepthInformation(pe[0]);Je&&Je.isValid&&Je.texture&&p.init(Je,s.renderState)}if(ze&&ze.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Je=0;Je<pe.length;Je++){const ae=pe[Je].camera;if(ae){let ve=g[ae];ve||(ve=new zh,g[ae]=ve);const ce=d.getCameraImage(ae);ve.sourceTexture=ce}}}}for(let pe=0;pe<C.length;pe++){const Fe=D[pe],ze=C[pe];Fe!==null&&ze!==void 0&&ze.update(Fe,fe,c||o)}Ge&&Ge(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}const ot=new nd;ot.setAnimationLoop(Ke),this.setAnimationLoop=function(ee){Ge=ee},this.dispose=function(){}}}const Bi=new On,Dv=new _t;function Lv(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Kh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,S,M){g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===hn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===hn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=e.get(g),S=v.envMap,M=v.envMapRotation;S&&(p.envMap.value=S,Bi.copy(M),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),p.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(Bi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){const v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Iv(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const M=S.program;i.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(m(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(v,C);const D=e.render.frame;r[v.id]!==D&&(h(v),r[v.id]=D)}function u(v){const S=d();v.__bindingPointIndex=S;const M=n.createBuffer(),C=v.__size,D=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=s[v.id],M=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,I=M.length;D<I;D++){const _=Array.isArray(M[D])?M[D]:[M[D]];for(let x=0,N=_.length;x<N;x++){const R=_[x];if(f(R,D,x,C)===!0){const B=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let H=0;H<V.length;H++){const X=V[H],W=y(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+Y,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,S,M,C){const D=v.value,I=S+"_"+M;if(C[I]===void 0)return typeof D=="number"||typeof D=="boolean"?C[I]=D:C[I]=D.clone(),!0;{const _=C[I];if(typeof D=="number"||typeof D=="boolean"){if(_!==D)return C[I]=D,!0}else if(_.equals(D)===!1)return _.copy(D),!0}return!1}function m(v){const S=v.uniforms;let M=0;const C=16;for(let I=0,_=S.length;I<_;I++){const x=Array.isArray(S[I])?S[I]:[S[I]];for(let N=0,R=x.length;N<R;N++){const B=x[N],V=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,H=V.length;Y<H;Y++){const X=V[Y],W=y(X),de=M%C,te=de%W.boundary,Se=de+te;M+=te,Se!==0&&C-Se<W.storage&&(M+=C-Se),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=W.storage}}}const D=M%C;return D>0&&(M+=C-D),v.__size=M,v.__cache={},this}function y(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",v),S}function p(v){const S=v.target;S.removeEventListener("dispose",p);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function Uv(){return Bn===null&&(Bn=new Sc(Nv,16,16,Is,Ut),Bn.name="DFG_LUT",Bn.minFilter=jt,Bn.magFilter=jt,Bn.wrapS=ni,Bn.wrapT=ni,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class Ov{constructor(e={}){const{canvas:t=af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const y=f,p=new Set([mc,pc,fc]),g=new Set([xn,Xn,Mr,Ls,hc,dc]),v=new Uint32Array(4),S=new Int32Array(4);let M=null,C=null;const D=[],I=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let N=!1;this._outputColorSpace=Mn;let R=0,B=0,V=null,Y=-1,H=null;const X=new Dt,W=new Dt;let de=null;const te=new $e(0);let Se=0,ye=t.width,Te=t.height,Ge=1,Ke=null,ot=null;const ee=new Dt(0,0,ye,Te),fe=new Dt(0,0,ye,Te);let pe=!1;const Fe=new bc;let ze=!1,We=!1;const ct=new _t,Je=new O,ae=new Dt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function we(){return V===null?Ge:1}let U=i;function He(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",ut,!1),U===null){const q="webgl2";if(U=He(q,P),U===null)throw He(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw mt("WebGLRenderer: "+P.message),P}let Ae,ke,Me,L,b,G,J,ue,k,se,ne,oe,Ee,Q,ie,Be,Ie,Ce,qe,z,_e,me,Re;function xe(){Ae=new Og(U),Ae.init(),_e=new Tv(U,Ae),ke=new Cg(U,Ae,e,_e),Me=new wv(U,Ae),ke.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),L=new zg(U),b=new uv,G=new Ev(U,Ae,Me,b,ke,_e,L),J=new Ug(x),ue=new Wp(U),me=new Tg(U,ue),k=new Fg(U,ue,L,me),se=new Vg(U,k,ue,me,L),Ce=new kg(U,ke,G),ie=new Pg(b),ne=new cv(x,J,Ae,ke,me,ie),oe=new Lv(x,b),Ee=new dv,Q=new vv(Ae),Ie=new Eg(x,J,Me,se,m,l),Be=new bv(x,se,ke),Re=new Iv(U,L,ke,Me),qe=new Ag(U,Ae,L),z=new Bg(U,Ae,L),L.programs=ne.programs,x.capabilities=ke,x.extensions=Ae,x.properties=b,x.renderLists=Ee,x.shadowMap=Be,x.state=Me,x.info=L}xe(),y!==xn&&(_=new Hg(y,t.width,t.height,s,r));const $=new Rv(x,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=Ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(P){P!==void 0&&(Ge=P,this.setSize(ye,Te,!1))},this.getSize=function(P){return P.set(ye,Te)},this.setSize=function(P,q,w=!0){if($.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=P,Te=q,t.width=Math.floor(P*Ge),t.height=Math.floor(q*Ge),w===!0&&(t.style.width=P+"px",t.style.height=q+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(ye*Ge,Te*Ge).floor()},this.setDrawingBufferSize=function(P,q,w){ye=P,Te=q,Ge=w,t.width=Math.floor(P*w),t.height=Math.floor(q*w),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(y===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(X)},this.getViewport=function(P){return P.copy(ee)},this.setViewport=function(P,q,w,A){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,q,w,A),Me.viewport(X.copy(ee).multiplyScalar(Ge).round())},this.getScissor=function(P){return P.copy(fe)},this.setScissor=function(P,q,w,A){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,q,w,A),Me.scissor(W.copy(fe).multiplyScalar(Ge).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(P){Me.setScissorTest(pe=P)},this.setOpaqueSort=function(P){Ke=P},this.setTransparentSort=function(P){ot=P},this.getClearColor=function(P){return P.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,w=!0){let A=0;if(P){let E=!1;if(V!==null){const F=V.texture.format;E=p.has(F)}if(E){const F=V.texture.type,Z=g.has(F),j=Ie.getClearColor(),he=Ie.getClearAlpha(),le=j.r,Pe=j.g,Le=j.b;Z?(v[0]=le,v[1]=Pe,v[2]=Le,v[3]=he,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=le,S[1]=Pe,S[2]=Le,S[3]=he,U.clearBufferiv(U.COLOR,0,S))}else A|=U.COLOR_BUFFER_BIT}q&&(A|=U.DEPTH_BUFFER_BIT),w&&(A|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A!==0&&U.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Ie.dispose(),Ee.dispose(),Q.dispose(),b.dispose(),J.dispose(),se.dispose(),me.dispose(),Re.dispose(),ne.dispose(),$.dispose(),$.removeEventListener("sessionstart",$i),$.removeEventListener("sessionend",Li),Cn.stop()};function De(P){P.preventDefault(),Wc("WebGLRenderer: Context Lost."),N=!0}function Ye(){Wc("WebGLRenderer: Context Restored."),N=!1;const P=L.autoReset,q=Be.enabled,w=Be.autoUpdate,A=Be.needsUpdate,E=Be.type;xe(),L.autoReset=P,Be.enabled=q,Be.autoUpdate=w,Be.needsUpdate=A,Be.type=E}function ut(P){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function xt(P){const q=P.target;q.removeEventListener("dispose",xt),Tn(q)}function Tn(P){An(P),b.remove(P)}function An(P){const q=b.get(P).programs;q!==void 0&&(q.forEach(function(w){ne.releaseProgram(w)}),P.isShaderMaterial&&ne.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,w,A,E,F){q===null&&(q=ve);const Z=E.isMesh&&E.matrixWorld.determinant()<0,j=Or(P,q,w,A,E);Me.setMaterial(A,Z);let he=w.index,le=1;if(A.wireframe===!0){if(he=k.getWireframeAttribute(w),he===void 0)return;le=2}const Pe=w.drawRange,Le=w.attributes.position;let Ne=Pe.start*le,Xe=(Pe.start+Pe.count)*le;F!==null&&(Ne=Math.max(Ne,F.start*le),Xe=Math.min(Xe,(F.start+F.count)*le)),he!==null?(Ne=Math.max(Ne,0),Xe=Math.min(Xe,he.count)):Le!=null&&(Ne=Math.max(Ne,0),Xe=Math.min(Xe,Le.count));const tt=Xe-Ne;if(tt<0||tt===1/0)return;me.setup(E,A,j,w,he);let Qe,nt=qe;if(he!==null&&(Qe=ue.get(he),nt=z,nt.setIndex(Qe)),E.isMesh)A.wireframe===!0?(Me.setLineWidth(A.wireframeLinewidth*we()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(E.isLine){let bt=A.linewidth;bt===void 0&&(bt=1),Me.setLineWidth(bt*we()),E.isLineSegments?nt.setMode(U.LINES):E.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else E.isPoints?nt.setMode(U.POINTS):E.isSprite&&nt.setMode(U.TRIANGLES);if(E.isBatchedMesh)if(E._multiDrawInstances!==null)Do("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount,E._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))nt.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{const bt=E._multiDrawStarts,Ve=E._multiDrawCounts,Lt=E._multiDrawCount,pt=he?ue.get(he).bytesPerElement:1,an=b.get(A).currentProgram.getUniforms();for(let Kt=0;Kt<Lt;Kt++)an.setValue(U,"_gl_DrawID",Kt),nt.render(bt[Kt]/pt,Ve[Kt])}else if(E.isInstancedMesh)nt.renderInstances(Ne,tt,E.count);else if(w.isInstancedBufferGeometry){const bt=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,Ve=Math.min(w.instanceCount,bt);nt.renderInstances(Ne,tt,Ve)}else nt.render(Ne,tt)};function Di(P,q,w){P.transparent===!0&&P.side===un&&P.forceSinglePass===!1?(P.side=hn,P.needsUpdate=!0,ts(P,q,w),P.side=Ci,P.needsUpdate=!0,ts(P,q,w),P.side=un):ts(P,q,w)}this.compile=function(P,q,w=null){w===null&&(w=P),C=Q.get(w),C.init(q),I.push(C),w.traverseVisible(function(E){E.isLight&&E.layers.test(q.layers)&&(C.pushLight(E),E.castShadow&&C.pushShadow(E))}),P!==w&&P.traverseVisible(function(E){E.isLight&&E.layers.test(q.layers)&&(C.pushLight(E),E.castShadow&&C.pushShadow(E))}),C.setupLights();const A=new Set;return P.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;const F=E.material;if(F)if(Array.isArray(F))for(let Z=0;Z<F.length;Z++){const j=F[Z];Di(j,w,E),A.add(j)}else Di(F,w,E),A.add(F)}),C=I.pop(),A},this.compileAsync=function(P,q,w=null){const A=this.compile(P,q,w);return new Promise(E=>{function F(){if(A.forEach(function(Z){b.get(Z).currentProgram.isReady()&&A.delete(Z)}),A.size===0){E(P);return}setTimeout(F,10)}Ae.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let ci=null;function Qi(P){ci&&ci(P)}function $i(){Cn.stop()}function Li(){Cn.start()}const Cn=new nd;Cn.setAnimationLoop(Qi),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(P){ci=P,$.setAnimationLoop(P),P===null?Cn.stop():Cn.start()},$.addEventListener("sessionstart",$i),$.addEventListener("sessionend",Li),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const w=$.enabled===!0&&$.isPresenting===!0,A=_!==null&&(V===null||w)&&_.begin(x,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(q),q=$.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,q,V),C=Q.get(P,I.length),C.init(q),I.push(C),ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Fe.setFromProjectionMatrix(ct,Hn,q.reversedDepth),We=this.localClippingEnabled,ze=ie.init(this.clippingPlanes,We),M=Ee.get(P,D.length),M.init(),D.push(M),$.enabled===!0&&$.isPresenting===!0){const Z=x.xr.getDepthSensingMesh();Z!==null&&qs(Z,q,-1/0,x.sortObjects)}qs(P,q,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(Ke,ot),ce=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ce&&Ie.addToRenderList(M,P),this.info.render.frame++,ze===!0&&ie.beginShadows();const E=C.state.shadowsArray;if(Be.render(E,P,q),ze===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(A&&_.hasRenderPass())===!1){const Z=M.opaque,j=M.transmissive;if(C.setupLights(),q.isArrayCamera){const he=q.cameras;if(j.length>0)for(let le=0,Pe=he.length;le<Pe;le++){const Le=he[le];js(Z,j,P,Le)}ce&&Ie.render(P);for(let le=0,Pe=he.length;le<Pe;le++){const Le=he[le];Ys(M,P,Le,Le.viewport)}}else j.length>0&&js(Z,j,P,q),ce&&Ie.render(P),Ys(M,P,q)}V!==null&&B===0&&(G.updateMultisampleRenderTarget(V),G.updateRenderTargetMipmap(V)),A&&_.end(x),P.isScene===!0&&P.onAfterRender(x,P,q),me.resetDefaultState(),Y=-1,H=null,I.pop(),I.length>0?(C=I[I.length-1],ze===!0&&ie.setGlobalState(x.clippingPlanes,C.state.camera)):C=null,D.pop(),D.length>0?M=D[D.length-1]:M=null};function qs(P,q,w,A){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)w=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)C.pushLight(P),P.castShadow&&C.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Fe.intersectsSprite(P)){A&&ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ct);const Z=se.update(P),j=P.material;j.visible&&M.push(P,Z,j,w,ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Fe.intersectsObject(P))){const Z=se.update(P),j=P.material;if(A&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ae.copy(P.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),ae.copy(Z.boundingSphere.center)),ae.applyMatrix4(P.matrixWorld).applyMatrix4(ct)),Array.isArray(j)){const he=Z.groups;for(let le=0,Pe=he.length;le<Pe;le++){const Le=he[le],Ne=j[Le.materialIndex];Ne&&Ne.visible&&M.push(P,Z,Ne,w,ae.z,Le)}}else j.visible&&M.push(P,Z,j,w,ae.z,null)}}const F=P.children;for(let Z=0,j=F.length;Z<j;Z++)qs(F[Z],q,w,A)}function Ys(P,q,w,A){const{opaque:E,transmissive:F,transparent:Z}=P;C.setupLightsView(w),ze===!0&&ie.setGlobalState(x.clippingPlanes,w),A&&Me.viewport(X.copy(A)),E.length>0&&es(E,q,w),F.length>0&&es(F,q,w),Z.length>0&&es(Z,q,w),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function js(P,q,w,A){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[A.id]===void 0){const Ne=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[A.id]=new At(1,1,{generateMipmaps:!0,type:Ne?Ut:xn,minFilter:Gi,samples:Math.max(4,ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const F=C.state.transmissionRenderTarget[A.id],Z=A.viewport||X;F.setSize(Z.z*x.transmissionResolutionScale,Z.w*x.transmissionResolutionScale);const j=x.getRenderTarget(),he=x.getActiveCubeFace(),le=x.getActiveMipmapLevel();x.setRenderTarget(F),x.getClearColor(te),Se=x.getClearAlpha(),Se<1&&x.setClearColor(16777215,.5),x.clear(),ce&&Ie.render(w);const Pe=x.toneMapping;x.toneMapping=Wn;const Le=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),C.setupLightsView(A),ze===!0&&ie.setGlobalState(x.clippingPlanes,A),es(P,w,A),G.updateMultisampleRenderTarget(F),G.updateRenderTargetMipmap(F),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Xe=0,tt=q.length;Xe<tt;Xe++){const Qe=q[Xe],{object:nt,geometry:bt,material:Ve,group:Lt}=Qe;if(Ve.side===un&&nt.layers.test(A.layers)){const pt=Ve.side;Ve.side=hn,Ve.needsUpdate=!0,Mt(nt,w,A,bt,Ve,Lt),Ve.side=pt,Ve.needsUpdate=!0,Ne=!0}}Ne===!0&&(G.updateMultisampleRenderTarget(F),G.updateRenderTargetMipmap(F))}x.setRenderTarget(j,he,le),x.setClearColor(te,Se),Le!==void 0&&(A.viewport=Le),x.toneMapping=Pe}function es(P,q,w){const A=q.isScene===!0?q.overrideMaterial:null;for(let E=0,F=P.length;E<F;E++){const Z=P[E],{object:j,geometry:he,group:le}=Z;let Pe=Z.material;Pe.allowOverride===!0&&A!==null&&(Pe=A),j.layers.test(w.layers)&&Mt(j,q,w,he,Pe,le)}}function Mt(P,q,w,A,E,F){P.onBeforeRender(x,q,w,A,E,F),P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),E.onBeforeRender(x,q,w,A,P,F),E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,x.renderBufferDirect(w,q,A,E,P,F),E.side=Ci,E.needsUpdate=!0,x.renderBufferDirect(w,q,A,E,P,F),E.side=un):x.renderBufferDirect(w,q,A,E,P,F),P.onAfterRender(x,q,w,A,E,F)}function ts(P,q,w){q.isScene!==!0&&(q=ve);const A=b.get(P),E=C.state.lights,F=C.state.shadowsArray,Z=E.state.version,j=ne.getParameters(P,E.state,F,q,w),he=ne.getProgramCacheKey(j);let le=A.programs;A.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,A.fog=q.fog;const Pe=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;A.envMap=J.get(P.envMap||A.environment,Pe),A.envMapRotation=A.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,le===void 0&&(P.addEventListener("dispose",xt),le=new Map,A.programs=le);let Le=le.get(he);if(Le!==void 0){if(A.currentProgram===Le&&A.lightsStateVersion===Z)return Ur(P,j),Le}else j.uniforms=ne.getUniforms(P),P.onBeforeCompile(j,x),Le=ne.acquireProgram(j,he),le.set(he,Le),A.uniforms=j.uniforms;const Ne=A.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),Ur(P,j),A.needsLights=ia(P),A.lightsStateVersion=Z,A.needsLights&&(Ne.ambientLightColor.value=E.state.ambient,Ne.lightProbe.value=E.state.probe,Ne.directionalLights.value=E.state.directional,Ne.directionalLightShadows.value=E.state.directionalShadow,Ne.spotLights.value=E.state.spot,Ne.spotLightShadows.value=E.state.spotShadow,Ne.rectAreaLights.value=E.state.rectArea,Ne.ltc_1.value=E.state.rectAreaLTC1,Ne.ltc_2.value=E.state.rectAreaLTC2,Ne.pointLights.value=E.state.point,Ne.pointLightShadows.value=E.state.pointShadow,Ne.hemisphereLights.value=E.state.hemi,Ne.directionalShadowMatrix.value=E.state.directionalShadowMatrix,Ne.spotLightMatrix.value=E.state.spotLightMatrix,Ne.spotLightMap.value=E.state.spotLightMap,Ne.pointShadowMatrix.value=E.state.pointShadowMatrix),A.currentProgram=Le,A.uniformsList=null,Le}function Nr(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=To.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Ur(P,q){const w=b.get(P);w.outputColorSpace=q.outputColorSpace,w.batching=q.batching,w.batchingColor=q.batchingColor,w.instancing=q.instancing,w.instancingColor=q.instancingColor,w.instancingMorph=q.instancingMorph,w.skinning=q.skinning,w.morphTargets=q.morphTargets,w.morphNormals=q.morphNormals,w.morphColors=q.morphColors,w.morphTargetsCount=q.morphTargetsCount,w.numClippingPlanes=q.numClippingPlanes,w.numIntersection=q.numClipIntersection,w.vertexAlphas=q.vertexAlphas,w.vertexTangents=q.vertexTangents,w.toneMapping=q.toneMapping}function Or(P,q,w,A,E){q.isScene!==!0&&(q=ve),G.resetTextureUnits();const F=q.fog,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,j=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ns,he=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,le=J.get(A.envMap||Z,he),Pe=A.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,Le=!!w.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),Ne=!!w.morphAttributes.position,Xe=!!w.morphAttributes.normal,tt=!!w.morphAttributes.color;let Qe=Wn;A.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Qe=x.toneMapping);const nt=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,bt=nt!==void 0?nt.length:0,Ve=b.get(A),Lt=C.state.lights;if(ze===!0&&(We===!0||P!==H)){const Wt=P===H&&A.id===Y;ie.setState(A,P,Wt)}let pt=!1;A.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Lt.state.version||Ve.outputColorSpace!==j||E.isBatchedMesh&&Ve.batching===!1||!E.isBatchedMesh&&Ve.batching===!0||E.isBatchedMesh&&Ve.batchingColor===!0&&E.colorTexture===null||E.isBatchedMesh&&Ve.batchingColor===!1&&E.colorTexture!==null||E.isInstancedMesh&&Ve.instancing===!1||!E.isInstancedMesh&&Ve.instancing===!0||E.isSkinnedMesh&&Ve.skinning===!1||!E.isSkinnedMesh&&Ve.skinning===!0||E.isInstancedMesh&&Ve.instancingColor===!0&&E.instanceColor===null||E.isInstancedMesh&&Ve.instancingColor===!1&&E.instanceColor!==null||E.isInstancedMesh&&Ve.instancingMorph===!0&&E.morphTexture===null||E.isInstancedMesh&&Ve.instancingMorph===!1&&E.morphTexture!==null||Ve.envMap!==le||A.fog===!0&&Ve.fog!==F||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ie.numPlanes||Ve.numIntersection!==ie.numIntersection)||Ve.vertexAlphas!==Pe||Ve.vertexTangents!==Le||Ve.morphTargets!==Ne||Ve.morphNormals!==Xe||Ve.morphColors!==tt||Ve.toneMapping!==Qe||Ve.morphTargetsCount!==bt)&&(pt=!0):(pt=!0,Ve.__version=A.version);let an=Ve.currentProgram;pt===!0&&(an=ts(A,q,E));let Kt=!1,dn=!1,ln=!1;const at=an.getUniforms(),wt=Ve.uniforms;if(Me.useProgram(an.program)&&(Kt=!0,dn=!0,ln=!0),A.id!==Y&&(Y=A.id,dn=!0),Kt||H!==P){Me.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),at.setValue(U,"projectionMatrix",P.projectionMatrix),at.setValue(U,"viewMatrix",P.matrixWorldInverse);const ui=at.map.cameraPosition;ui!==void 0&&ui.setValue(U,Je.setFromMatrixPosition(P.matrixWorld)),ke.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&at.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),H!==P&&(H=P,dn=!0,ln=!0)}if(Ve.needsLights&&(Lt.state.directionalShadowMap.length>0&&at.setValue(U,"directionalShadowMap",Lt.state.directionalShadowMap,G),Lt.state.spotShadowMap.length>0&&at.setValue(U,"spotShadowMap",Lt.state.spotShadowMap,G),Lt.state.pointShadowMap.length>0&&at.setValue(U,"pointShadowMap",Lt.state.pointShadowMap,G)),E.isSkinnedMesh){at.setOptional(U,E,"bindMatrix"),at.setOptional(U,E,"bindMatrixInverse");const Wt=E.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),at.setValue(U,"boneTexture",Wt.boneTexture,G))}E.isBatchedMesh&&(at.setOptional(U,E,"batchingTexture"),at.setValue(U,"batchingTexture",E._matricesTexture,G),at.setOptional(U,E,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",E._indirectTexture,G),at.setOptional(U,E,"batchingColorTexture"),E._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",E._colorsTexture,G));const Pn=w.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ce.update(E,w,an),(dn||Ve.receiveShadow!==E.receiveShadow)&&(Ve.receiveShadow=E.receiveShadow,at.setValue(U,"receiveShadow",E.receiveShadow)),(A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial)&&A.envMap===null&&q.environment!==null&&(wt.envMapIntensity.value=q.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Uv()),dn&&(at.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&na(wt,ln),F&&A.fog===!0&&oe.refreshFogUniforms(wt,F),oe.refreshMaterialUniforms(wt,A,Ge,Te,C.state.transmissionRenderTarget[P.id]),To.upload(U,Nr(Ve),wt,G)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(To.upload(U,Nr(Ve),wt,G),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&at.setValue(U,"center",E.center),at.setValue(U,"modelViewMatrix",E.modelViewMatrix),at.setValue(U,"normalMatrix",E.normalMatrix),at.setValue(U,"modelMatrix",E.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const Wt=A.uniformsGroups;for(let ui=0,ns=Wt.length;ui<ns;ui++){const Oc=Wt[ui];Re.update(Oc,an),Re.bind(Oc,an)}}return an}function na(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function ia(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,q,w){const A=b.get(P);A.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,A.__autoAllocateDepthBuffer===!1&&(A.__useRenderToTexture=!1),b.get(P.texture).__webglTexture=q,b.get(P.depthTexture).__webglTexture=A.__autoAllocateDepthBuffer?void 0:w,A.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const w=b.get(P);w.__webglFramebuffer=q,w.__useDefaultFramebuffer=q===void 0};const sa=U.createFramebuffer();this.setRenderTarget=function(P,q=0,w=0){V=P,R=q,B=w;let A=null,E=!1,F=!1;if(P){const j=b.get(P);if(j.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(U.FRAMEBUFFER,j.__webglFramebuffer),X.copy(P.viewport),W.copy(P.scissor),de=P.scissorTest,Me.viewport(X),Me.scissor(W),Me.setScissorTest(de),Y=-1;return}else if(j.__webglFramebuffer===void 0)G.setupRenderTarget(P);else if(j.__hasExternalTextures)G.rebindTextures(P,b.get(P.texture).__webglTexture,b.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Pe=P.depthTexture;if(j.__boundDepthTexture!==Pe){if(Pe!==null&&b.has(Pe)&&(P.width!==Pe.image.width||P.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(P)}}const he=P.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(F=!0);const le=b.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(le[q])?A=le[q][w]:A=le[q],E=!0):P.samples>0&&G.useMultisampledRTT(P)===!1?A=b.get(P).__webglMultisampledFramebuffer:Array.isArray(le)?A=le[w]:A=le,X.copy(P.viewport),W.copy(P.scissor),de=P.scissorTest}else X.copy(ee).multiplyScalar(Ge).floor(),W.copy(fe).multiplyScalar(Ge).floor(),de=pe;if(w!==0&&(A=sa),Me.bindFramebuffer(U.FRAMEBUFFER,A)&&Me.drawBuffers(P,A),Me.viewport(X),Me.scissor(W),Me.setScissorTest(de),E){const j=b.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,j.__webglTexture,w)}else if(F){const j=q;for(let he=0;he<P.textures.length;he++){const le=b.get(P.textures[he]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+he,le.__webglTexture,w,j)}}else if(P!==null&&w!==0){const j=b.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,j.__webglTexture,w)}Y=-1},this.readRenderTargetPixels=function(P,q,w,A,E,F,Z,j=0){if(!(P&&P.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Z!==void 0&&(he=he[Z]),he){Me.bindFramebuffer(U.FRAMEBUFFER,he);try{const le=P.textures[j],Pe=le.format,Le=le.type;if(P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+j),!ke.textureFormatReadable(Pe)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Le)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-A&&w>=0&&w<=P.height-E&&U.readPixels(q,w,A,E,_e.convert(Pe),_e.convert(Le),F)}finally{const le=V!==null?b.get(V).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(P,q,w,A,E,F,Z,j=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Z!==void 0&&(he=he[Z]),he)if(q>=0&&q<=P.width-A&&w>=0&&w<=P.height-E){Me.bindFramebuffer(U.FRAMEBUFFER,he);const le=P.textures[j],Pe=le.format,Le=le.type;if(P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+j),!ke.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.bufferData(U.PIXEL_PACK_BUFFER,F.byteLength,U.STREAM_READ),U.readPixels(q,w,A,E,_e.convert(Pe),_e.convert(Le),0);const Xe=V!==null?b.get(V).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Xe);const tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await lf(U,tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,F),U.deleteBuffer(Ne),U.deleteSync(tt),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,w=0){const A=Math.pow(2,-w),E=Math.floor(P.image.width*A),F=Math.floor(P.image.height*A),Z=q!==null?q.x:0,j=q!==null?q.y:0;G.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,w,0,0,Z,j,E,F),Me.unbindTexture()};const ra=U.createFramebuffer(),oa=U.createFramebuffer();this.copyTextureToTexture=function(P,q,w=null,A=null,E=0,F=0){let Z,j,he,le,Pe,Le,Ne,Xe,tt;const Qe=P.isCompressedTexture?P.mipmaps[F]:P.image;if(w!==null)Z=w.max.x-w.min.x,j=w.max.y-w.min.y,he=w.isBox3?w.max.z-w.min.z:1,le=w.min.x,Pe=w.min.y,Le=w.isBox3?w.min.z:0;else{const wt=Math.pow(2,-E);Z=Math.floor(Qe.width*wt),j=Math.floor(Qe.height*wt),P.isDataArrayTexture?he=Qe.depth:P.isData3DTexture?he=Math.floor(Qe.depth*wt):he=1,le=0,Pe=0,Le=0}A!==null?(Ne=A.x,Xe=A.y,tt=A.z):(Ne=0,Xe=0,tt=0);const nt=_e.convert(q.format),bt=_e.convert(q.type);let Ve;q.isData3DTexture?(G.setTexture3D(q,0),Ve=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(G.setTexture2DArray(q,0),Ve=U.TEXTURE_2D_ARRAY):(G.setTexture2D(q,0),Ve=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const Lt=U.getParameter(U.UNPACK_ROW_LENGTH),pt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),an=U.getParameter(U.UNPACK_SKIP_PIXELS),Kt=U.getParameter(U.UNPACK_SKIP_ROWS),dn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,le),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le);const ln=P.isDataArrayTexture||P.isData3DTexture,at=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const wt=b.get(P),Pn=b.get(q),Wt=b.get(wt.__renderTarget),ui=b.get(Pn.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ns=0;ns<he;ns++)ln&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,b.get(P).__webglTexture,E,Le+ns),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,b.get(q).__webglTexture,F,tt+ns)),U.blitFramebuffer(le,Pe,Z,j,Ne,Xe,Z,j,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(E!==0||P.isRenderTargetTexture||b.has(P)){const wt=b.get(P),Pn=b.get(q);Me.bindFramebuffer(U.READ_FRAMEBUFFER,ra),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,oa);for(let Wt=0;Wt<he;Wt++)ln?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,E,Le+Wt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,E),at?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pn.__webglTexture,F,tt+Wt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pn.__webglTexture,F),E!==0?U.blitFramebuffer(le,Pe,Z,j,Ne,Xe,Z,j,U.COLOR_BUFFER_BIT,U.NEAREST):at?U.copyTexSubImage3D(Ve,F,Ne,Xe,tt+Wt,le,Pe,Z,j):U.copyTexSubImage2D(Ve,F,Ne,Xe,le,Pe,Z,j);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?P.isDataTexture||P.isData3DTexture?U.texSubImage3D(Ve,F,Ne,Xe,tt,Z,j,he,nt,bt,Qe.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Ve,F,Ne,Xe,tt,Z,j,he,nt,Qe.data):U.texSubImage3D(Ve,F,Ne,Xe,tt,Z,j,he,nt,bt,Qe):P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Ne,Xe,Z,j,nt,bt,Qe.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Ne,Xe,Qe.width,Qe.height,nt,Qe.data):U.texSubImage2D(U.TEXTURE_2D,F,Ne,Xe,Z,j,nt,bt,Qe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,an),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,dn),F===0&&q.generateMipmaps&&U.generateMipmap(Ve),Me.unbindTexture()},this.initRenderTarget=function(P){b.get(P).__webglFramebuffer===void 0&&G.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?G.setTextureCube(P,0):P.isData3DTexture?G.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?G.setTexture2DArray(P,0):G.setTexture2D(P,0),Me.unbindTexture()},this.resetState=function(){R=0,B=0,V=null,Me.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const qu={type:"change"},Pc={type:"start"},ld={type:"end"},uo=new yc,Yu=new vi,Fv=Math.cos(70*it.DEG2RAD),zt=new O,cn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class Bv extends Gp{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Pi,this._lastTargetPosition=new O,this._quat=new Pi().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mu,this._sphericalDelta=new Mu,this._scale=1,this._panOffset=new O,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new O,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kv.bind(this),this._onPointerDown=zv.bind(this),this._onPointerUp=Vv.bind(this),this._onContextMenu=jv.bind(this),this._onMouseWheel=Wv.bind(this),this._onKeyDown=Xv.bind(this),this._onTouchStart=qv.bind(this),this._onTouchMove=Yv.bind(this),this._onMouseDown=Gv.bind(this),this._onMouseMove=Hv.bind(this),this._interceptControlDown=Zv.bind(this),this._interceptControlUp=Kv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<Fv?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function zv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function kv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ld),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Pc)}function Hv(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Wv(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ld))}function Xv(n){this.enabled!==!1&&this._handleKeyDown(n)}function qv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Pc)}function Yv(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function jv(n){this.enabled!==!1&&n.preventDefault()}function Zv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class li{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jv=new Zo(-1,1,1,-1,0,1);class Qv extends St{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const $v=new Qv;class Hs{constructor(e){this._mesh=new ft($v,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cd extends li{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bn.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Hs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ju extends li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class e1 extends li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class t1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new At(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ut}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cd(gr),this.copyPass.material.blending=Vt,this.timer=new Bp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ju!==void 0&&(o instanceof ju?i=!0:o instanceof e1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class n1 extends li{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}class Ei extends li{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new $e(1,1,1),this.hiddenEdgeColor=new $e(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new At(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Cc,this.depthMaterial.side=un,this.depthMaterial.depthPacking=Lh,this.depthMaterial.blending=Vt,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=un,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new At(this.resolution.x,this.resolution.y,{type:Ut}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new At(r,o,{type:Ut}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new At(r,o,{type:Ut}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new At(Math.round(r/2),Math.round(o/2),{type:Ut}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new At(r,o,{type:Ut}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new At(Math.round(r/2),Math.round(o/2),{type:Ut}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=gr;this.copyUniforms=bn.clone(c.uniforms),this.materialCopy=new Tt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Vt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this._fsQuad=new Hs(null),this.tempPulseColor1=new $e,this.tempPulseColor2=new $e,this.textureMatrix=new _t;function u(d,h){const f=h.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ei.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ei.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ei.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ei.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!i.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Tt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new re(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
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

				}`})}_getEdgeDetectionMaterial(){return new Tt({uniforms:{maskTexture:{value:null},texSize:{value:new re(.5,.5)},visibleEdgeColor:{value:new O(1,1,1)},hiddenEdgeColor:{value:new O(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}_getSeparableBlurMaterial(e){return new Tt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}_getOverlayMaterial(){return new Tt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:el,depthTest:!1,depthWrite:!1,transparent:!0})}}Ei.BlurDirectionX=new re(1,0);Ei.BlurDirectionY=new re(0,1);const ho={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class i1 extends li{constructor(){super(),this.isOutputPass=!0,this.uniforms=bn.clone(ho.uniforms),this.material=new Jh({name:ho.name,uniforms:this.uniforms,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader}),this._fsQuad=new Hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ac&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const fo={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class s1 extends li{constructor(e,t,i){super(),this.scene=e,this.camera=t;const s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new At(1,1,{minFilter:Pt,magFilter:Pt,type:Ut}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Cc,this._materialDepth.depthPacking=Lh,this._materialDepth.blending=Vt;const a=bn.clone(fo.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=t.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=t.near,a.farClip.value=t.far,this.materialBokeh=new Tt({defines:Object.assign({},fo.defines),uniforms:a,vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader}),this.uniforms=a,this._fsQuad=new Hs(this.materialBokeh),this._oldClearColor=new $e}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}class r1{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,d=(l+c)*u,h=l-d,f=c-d,m=e-h,y=t-f;let p,g;m>y?(p=1,g=0):(p=0,g=1);const v=m-p+u,S=y-g+u,M=m-1+2*u,C=y-1+2*u,D=l&255,I=c&255,_=this.perm[D+this.perm[I]]%12,x=this.perm[D+p+this.perm[I+g]]%12,N=this.perm[D+1+this.perm[I+1]]%12;let R=.5-m*m-y*y;R<0?i=0:(R*=R,i=R*R*this._dot(this.grad3[_],m,y));let B=.5-v*v-S*S;B<0?s=0:(B*=B,s=B*B*this._dot(this.grad3[x],v,S));let V=.5-M*M-C*C;return V<0?r=0:(V*=V,r=V*V*this._dot(this.grad3[N],M,C)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a;const c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),d=Math.floor(t+c),h=Math.floor(i+c),f=1/6,m=(u+d+h)*f,y=u-m,p=d-m,g=h-m,v=e-y,S=t-p,M=i-g;let C,D,I,_,x,N;v>=S?S>=M?(C=1,D=0,I=0,_=1,x=1,N=0):v>=M?(C=1,D=0,I=0,_=1,x=0,N=1):(C=0,D=0,I=1,_=1,x=0,N=1):S<M?(C=0,D=0,I=1,_=0,x=1,N=1):v<M?(C=0,D=1,I=0,_=0,x=1,N=1):(C=0,D=1,I=0,_=1,x=1,N=0);const R=v-C+f,B=S-D+f,V=M-I+f,Y=v-_+2*f,H=S-x+2*f,X=M-N+2*f,W=v-1+3*f,de=S-1+3*f,te=M-1+3*f,Se=u&255,ye=d&255,Te=h&255,Ge=this.perm[Se+this.perm[ye+this.perm[Te]]]%12,Ke=this.perm[Se+C+this.perm[ye+D+this.perm[Te+I]]]%12,ot=this.perm[Se+_+this.perm[ye+x+this.perm[Te+N]]]%12,ee=this.perm[Se+1+this.perm[ye+1+this.perm[Te+1]]]%12;let fe=.6-v*v-S*S-M*M;fe<0?s=0:(fe*=fe,s=fe*fe*this._dot3(this.grad3[Ge],v,S,M));let pe=.6-R*R-B*B-V*V;pe<0?r=0:(pe*=pe,r=pe*pe*this._dot3(this.grad3[Ke],R,B,V));let Fe=.6-Y*Y-H*H-X*X;Fe<0?o=0:(Fe*=Fe,o=Fe*Fe*this._dot3(this.grad3[ot],Y,H,X));let ze=.6-W*W-de*de-te*te;return ze<0?a=0:(ze*=ze,a=ze*ze*this._dot3(this.grad3[ee],W,de,te)),32*(s+r+o+a)}noise4d(e,t,i,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,d,h,f,m;const y=(e+t+i+s)*l,p=Math.floor(e+y),g=Math.floor(t+y),v=Math.floor(i+y),S=Math.floor(s+y),M=(p+g+v+S)*c,C=p-M,D=g-M,I=v-M,_=S-M,x=e-C,N=t-D,R=i-I,B=s-_,V=x>N?32:0,Y=x>R?16:0,H=N>R?8:0,X=x>B?4:0,W=N>B?2:0,de=R>B?1:0,te=V+Y+H+X+W+de,Se=o[te][0]>=3?1:0,ye=o[te][1]>=3?1:0,Te=o[te][2]>=3?1:0,Ge=o[te][3]>=3?1:0,Ke=o[te][0]>=2?1:0,ot=o[te][1]>=2?1:0,ee=o[te][2]>=2?1:0,fe=o[te][3]>=2?1:0,pe=o[te][0]>=1?1:0,Fe=o[te][1]>=1?1:0,ze=o[te][2]>=1?1:0,We=o[te][3]>=1?1:0,ct=x-Se+c,Je=N-ye+c,ae=R-Te+c,ve=B-Ge+c,ce=x-Ke+2*c,we=N-ot+2*c,U=R-ee+2*c,He=B-fe+2*c,Ae=x-pe+3*c,ke=N-Fe+3*c,Me=R-ze+3*c,L=B-We+3*c,b=x-1+4*c,G=N-1+4*c,J=R-1+4*c,ue=B-1+4*c,k=p&255,se=g&255,ne=v&255,oe=S&255,Ee=a[k+a[se+a[ne+a[oe]]]]%32,Q=a[k+Se+a[se+ye+a[ne+Te+a[oe+Ge]]]]%32,ie=a[k+Ke+a[se+ot+a[ne+ee+a[oe+fe]]]]%32,Be=a[k+pe+a[se+Fe+a[ne+ze+a[oe+We]]]]%32,Ie=a[k+1+a[se+1+a[ne+1+a[oe+1]]]]%32;let Ce=.6-x*x-N*N-R*R-B*B;Ce<0?u=0:(Ce*=Ce,u=Ce*Ce*this._dot4(r[Ee],x,N,R,B));let qe=.6-ct*ct-Je*Je-ae*ae-ve*ve;qe<0?d=0:(qe*=qe,d=qe*qe*this._dot4(r[Q],ct,Je,ae,ve));let z=.6-ce*ce-we*we-U*U-He*He;z<0?h=0:(z*=z,h=z*z*this._dot4(r[ie],ce,we,U,He));let _e=.6-Ae*Ae-ke*ke-Me*Me-L*L;_e<0?f=0:(_e*=_e,f=_e*_e*this._dot4(r[Be],Ae,ke,Me,L));let me=.6-b*b-G*G-J*J-ue*ue;return me<0?m=0:(me*=me,m=me*me*this._dot4(r[Ie],b,G,J,ue)),27*(u+d+h+f+m)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}}const po={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new re},cameraProjectionMatrix:{value:new _t},cameraInverseProjectionMatrix:{value:new _t},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},mo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},go={uniforms:{tDiffuse:{value:null},resolution:{value:new re}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class yi extends li{constructor(e,t,i=512,s=512,r=32){super(),this.width=i,this.height=s,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const o=new Us;o.format=Si,o.type=Ls,this.normalRenderTarget=new At(this.width,this.height,{minFilter:Pt,magFilter:Pt,type:Ut,depthTexture:o}),this.ssaoRenderTarget=new At(this.width,this.height,{type:Ut}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Tt({defines:Object.assign({},po.defines),uniforms:bn.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,blending:Vt}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Dp,this.normalMaterial.blending=Vt,this.blurMaterial=new Tt({defines:Object.assign({},go.defines),uniforms:bn.clone(go.uniforms),vertexShader:go.vertexShader,fragmentShader:go.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Tt({defines:Object.assign({},mo.defines),uniforms:bn.clone(mo.uniforms),vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:Vt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Tt({uniforms:bn.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:wh,blendDst:tl,blendEquation:ei,blendSrcAlpha:bh,blendDstAlpha:tl,blendEquationAlpha:ei}),this._fsQuad=new Hs(null),this._originalClearColor=new $e}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,i){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case yi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case yi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case yi.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:i);break;case yi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case yi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Sh,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_generateSampleKernel(e){const t=this.kernel;for(let i=0;i<e;i++){const s=new O;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=i/e;r=it.lerp(.1,1,r*r),s.multiplyScalar(r),t.push(s)}}_generateRandomKernelRotations(){const i=new r1,s=16,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=i.noise3d(a,l,c)}this.noiseTexture=new Sc(r,4,4,Wo,Sn),this.noiseTexture.wrapS=_r,this.noiseTexture.wrapT=_r,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}yi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const o1={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};class a1 extends cd{constructor(){super(o1)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}}const xo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},vo={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Ha={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class l1 extends li{constructor(){super(),this._edgesRT=new At(1,1,{depthBuffer:!1,type:Ut}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new At(1,1,{depthBuffer:!1,type:Ut}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Zt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=jt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Zt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=Pt,this._searchTexture.minFilter=Pt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=bn.clone(xo.uniforms),this._materialEdges=new Tt({defines:Object.assign({},xo.defines),uniforms:this._uniformsEdges,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader}),this._uniformsWeights=bn.clone(vo.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Tt({defines:Object.assign({},vo.defines),uniforms:this._uniformsWeights,vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader}),this._uniformsBlend=bn.clone(Ha.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Tt({uniforms:this._uniformsBlend,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader}),this._fsQuad=new Hs(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Fo={lat:35.17487590642147,lon:137.08873819808036,verticalDatum:100},Yi=[{id:"youth",name:"青春之丘",en:"Hill of Youth",x:28,z:-65,radius:95,color:"#b9845c",page:"seishunnooka"},{id:"warehouse",name:"吉卜力大倉庫",en:"Ghibli’s Grand Warehouse",x:55,z:145,radius:115,color:"#668f98",page:"daisouko"},{id:"mononoke",name:"魔法之里",en:"Mononoke Village",x:469,z:-188,radius:100,color:"#868652",page:"mononoke"},{id:"witch",name:"魔女之谷",en:"Valley of Witches",x:378,z:120,radius:160,color:"#a27275",page:"majonotani"},{id:"dondoko",name:"動動力森林",en:"Dondoko Forest",x:388,z:573,radius:145,color:"#6b8861",page:"dondokomori"},{id:"park",name:"公園公共景觀",en:"Moricoro Park",x:100,z:175,radius:580,color:"#89968b",page:""}],c1=[["elevator","電梯塔","youth","elevator","w231474689",-12,-67,0,9,9,23,"以十九世紀末幻想科學為靈感的電梯塔，是通往青春之丘的入口地標。保留金屬裝飾、上層觀景平台及連接北側的空橋。",[28,29,30,37],!0],["earth","地球屋","youth","earth","w1379612444",60,-63,202,11.6,14,13.5,"《心之谷》中位於丘陵上的古董店。橘色立面、折線屋頂與白色陽台面向圓環，後側木構露台順應坡地向下延伸。",[21,32,34,36,38],!0],["cat","貓之事務所","youth","cat","w1379612447",63,-82,22,2.6,3.6,3.7,"《貓的報恩》的貓之事務所，以貓的尺度重現。綠白木構立面、拱窗與小小陽台是辨識重點。",[31,33,35]],["warehouse","吉卜力大倉庫","warehouse","warehouse","w1058741195",55.5,146,37,60,87,16,"由既有室內泳池建築改造的展示設施。外觀保留大跨距鋼構與玻璃量體；本版只呈現建築外殼，不展開室內展區。",[6],!0],["skating","溜冰場・北館","warehouse","skating","w232297262",-14.5,51.1,37,62,86,16,"與大倉庫以中央拱廊相接的北館。白色大跨距屋頂、連續鋼構立面、半圓附屬空間及東側步行雨棚。",[]],["atrium","大倉庫中央拱廊","warehouse","atrium","w232297263",20.4,97.9,37,60,30,19.2,"南北兩館之間的拱形採光連廊，橫向連接大草坪與池畔。",[]],["ferris","摩天輪廣場・大觀覽車","park","ferris",void 0,-784,35,-77.6,82,25,88,"白色雙面輪圈、放射鋼桿、A 形支架與垂直懸掛座艙。位置依既有航照定位紀錄推估。",[]],["cafe","大陸橫斷飛行咖啡館","warehouse","cafe","n11256954616",26,192,37,36,10,5,"大倉庫旁的咖啡館。飛機翼般的輕薄弧形屋頂延伸到戶外座位，面向池畔與公園景觀。",[5,7]],["satsuki","小月與小梅之家","dondoko","satsuki","w231418334",374,615,45,16,15,8,"《龍貓》中草壁家的住宅。結合紅屋頂西式書房、日式平屋、緣側、庭園與附屬小屋，保留昭和年代鄉村生活的外觀。",[8,9,10,11,13,19,22,23],!0],["totoro","咚咚堂","dondoko","totoro","n12776501576",433,570,120,6.8,6.8,5.8,"山頂約五公尺高的木製龍貓造型遊具。以木質外殼、立耳、圓腹與木製傘帽輪廓呈現，周圍為林間步道與休憩空間。",[26],!0],["dondokoshop","咚咚賣店","dondoko","hut","w1380026674",427,562,0,5.8,6,4.6,"位於咚咚堂附近的小型賣店，沿林間路徑配置，提供登丘後的休憩節點。",[26]],["dondokorest","咚咚處","dondoko","hut","w231542702",338,478,0,14,7,4.7,"咚咚森林入口的休憩及服務設施，串連通往住宅及山頂的步道。",[24]],["tram","咚咚斜行車","dondoko","tram",void 0,414,584,-35,2.1,3.8,3,"以昔日名古屋市電為外觀靈感的斜行電梯，協助旅客沿山坡移動。本版保留車廂與斜坡軌道，不提供乘坐。",[25]],["tatara","達達拉製鐵場","mononoke","tatara","w1317432416",483,-189,15,27,17,11.8,"靈感來自《魔法公主》的達達拉製鐵場。覆土植草的大屋頂、紅色入口高樓與木柵圍合出山村空間。",[100,104,105,106,108],!0],["okkoto","乙事主","mononoke","boar","n12774379304",450,-169,120,6,11,5.6,"以白色山豬神乙事主為造型的遊具。外表有多色馬賽克裝飾與豎起的鬃毛。",[101]],["curse","祟神","mononoke","curse","n12774379303",439,-174,50,7,6,3.5,"《魔法公主》中祟神的造型雕塑，以密集纏繞的深色觸鬚、伸展四肢和紅色眼睛呈現。",[102]],["monorest","魔法公主之里休憩處","mononoke","hut","w1379625310",455.95,-223.63,-39.5,12,9,5,"以木構與木板屋頂形成的開放休憩處，呼應山里聚落的質樸構造。",[103]],["watch","木製瞭望台","mononoke","watch",void 0,434,-191,0,3.5,3.5,10,"魔法公主之里的木製瞭望構造，以交叉支撐、粗木梯和頂端小平台呈現。",[97,98]],["howl","霍爾城","witch","howl","w1380249800",458,150,-135,19,15,19.289,"《霍爾的移動城堡》的實體城堡，官方介紹約高二十公尺。設計剖面標示最高點為地面以上 19.289 公尺；模型分別建立不對稱外殼、凸窗、圓頂、煙囪、管線與機械足。",[39,58,59,84,90,95,96],!0],["okino","琪琪老家・歐其諾邸","witch","okino","w1317296609",484,61,-45,23,18,11,"《魔女宅急便》中琪琪的家。白色粉刷牆、紅瓦折線屋頂、大片格窗與開滿花草的庭院，組成帶有鄉村氣息的住宅。",[40,44,60,92],!0],["hatter","哈達帽子店","witch","hatter","w1351658872",387,84,-45,20,24,13.5,"《霍爾的移動城堡》中蘇菲工作的帽子店。綠色一樓、赭紅色上層、深色半木構與大折線屋頂，和鄰棟組成街景。",[41,46,55,62,83,87]],["bakery","古琪麵包店","witch","bakery","w1351658874",396,100,-45,11,12,11,"《魔女宅急便》中琪琪寄宿的麵包店。奶油色牆面、深色木構、紅色遮棚與瓦屋頂是主要外觀特徵。",[54,61,83]],["witchhouse","魔女之家","witch","witchhouse","w1351658865",379,133,176.5,21,14,8,"《安雅與魔女》中貝拉・雅嘉的家。低矮磚造量體、石板屋頂、對稱煙囪與前庭白柵欄，和周邊高聳街屋形成對比。",[63,74,91]],["carousel","旋轉木馬","witch","carousel","w1317296606",419,86,0,17,17,9,"以吉卜力作品中的交通工具、生物與角色為靈感的旋轉木馬。雙層裝飾、綠金色欄飾與旗幟構成節慶般的輪廓。",[52,64,89]],["flying","飛行機","witch","flying","w1351658870",415,136,0,14,14,8,"以《天空之城》世界觀為靈感的飛行遊具。中央樹狀支架向外伸出彩色機翼與吊艙。",[53,65,93]],["pilot","飛行員之塔","witch","pilot","w1380249778",404.2,126.3,18.7,16,13,9,"廢墟街道上的石造建築，搭配圓形殘牆與高低錯落的平台，連接霍爾城所在的坡地。",[50,56,66,85]],["clock","鐘塔與廢墟","witch","clock","w1351658871",421,116,0,4,4,12,"白色鐘樓立於石造廢墟基座上，紅褐色四坡屋頂、鐘面和拱形入口構成街景地標。",[45,67]],["witchlift","魔女電梯","witch","witchlift","w1351658873",388,93,-45,4,4,15,"白色細長塔身、深色木構與綠色尖頂的電梯，位於帽子店和麵包店之間。",[62,69,83]],["oven","飛天烤箱餐廳","witch","oven","w1351658863",273.8,158.25,180.5,57,17,9,"魔女之谷的餐廳，沿坡地形成細長量體、露台與木欄杆，入口端配置玻璃塔狀構件。",[48,70,81]],["shop13","十三人魔女團","witch","shop","w1351658875",329,88,-16.8,36,11,5.5,"魔女之谷的商店，以低矮的單坡大屋頂、連續柱廊與大片玻璃呈現現代公園設施。",[57,71]],["hotdog","熱鐵皮屋頂熱狗店","witch","hotdog","w1380151605",363,86,0,7,5,5,"魔女之谷的小型餐飲設施，磚牆、低斜屋頂與拱形窗口融入街道。",[49,82]],["mouth","魔女之口","witch","mouth","n12777394429",199,148,-90,18,2,4.5,"以張口面孔和向兩側延伸的藍色裝飾牆形成的入口景觀。中央門洞保留可通行空間。",[51,72,86]],["fountain","魔女之谷噴水廣場","witch","fountain",void 0,375,109,0,13,13,1,"鋪石廣場以環形噴水與鐘形構件點綴，面向帽子店和麵包店的連續街屋。",[68,75]],["gate","稻樓門","park","gate","w1380127066",124,210,0,18,6,10,"移築並修復的中式門樓，是公園公共空間的地標。紅色牆體、綠瓦重簷與高起的屋脊構成獨特輪廓。",[2,99]],["rotunda","圓形廣場・風之丘","park","rotunda","n14001821527",-13,-198,0,25,25,5,"北口附近的圓形餐飲與商業設施，低矮圓頂和環形玻璃立面銜接入口廣場。",[1]],["catcastle","貓之城遊具","park","catcastle",void 0,520,-103,0,16,12,10,"公園公共區域的貓主題遊具，以尖塔、城牆和紅色管狀溜滑梯構成童趣輪廓。位置及尺寸依官方總圖推估。",[3]],["lookout","森林展望台","park","lookout","w231418341",319,653,0,5,5,12,"林間步道的高架展望設施，可從另一角度觀察小月與小梅之家周邊森林。",[]]],Bt=c1.map(([n,e,t,i,s,r,o,a,l,c,u,d,h,f])=>({id:n,name:e,zone:t,kind:i,osm:s,x:r,z:o,yaw:a,width:l,depth:c,height:u,intro:d,references:h,core:f,source:t==="park"?"https://ghibli-park.jp/about/":`https://ghibli-park.jp/about/${Yi.find(m=>m.id===t).page}.html`,basis:{position:s?"OSM 地理輪廓／官方地圖辨識":"官方插畫地圖相對位置推估",dimensions:s?"地理輪廓與照片比例推算":"照片估算",height:n==="howl"?"設計剖面 GL+19.289 m":n==="totoro"?"官方標示約 5 m":"照片估算",orientation:"建物輪廓軸線＋照片／地圖估算"},...["warehouse","skating","atrium"].includes(n)?{viewYaw:127}:{},...n==="tatara"?{viewYaw:-75}:{},...n==="howl"?{elevation:32.3}:{}})),Zu=Bt.filter(n=>["elevator","earth","warehouse","tatara","howl","okino","satsuki","gate","totoro","rotunda"].includes(n.id)).map(n=>({id:n.id,x:n.x,z:n.z,osm:n.osm,source:"OSM定位／官方照片辨識；非測量控制點"}));function Dr(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new St;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=Ku(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let y=0;y<o[u].length;++y)f.push(o[u][y][h]);const m=Ku(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Ku(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new wn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let m=0;m<t;m++){const y=u.getComponent(h,m);a.setComponent(h+d,m,y)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const Ju=new Map;function ud(n,e=0){const t=n+e;let i=Ju.get(t);return i||(i=new yn({color:n,roughness:e?.52:.88,metalness:e,flatShading:!0}),Ju.set(t,i)),i}const T={wood:"#705340",dark:"#423f38",cream:"#f2e5c9",white:"#f5efdc",stone:"#a49c87",tile:"#a75443",slate:"#647479",glass:"#537b7f",green:"#719565",iron:"#655d58",gold:"#d5b976",rust:"#967864",plaster:"#d79976"},vs=n=>new O(n[0],n[1],n[2]),_s=new WeakMap;class vt{group=new qt;add(e,t,i=[0,0,0],s=[0,0,0],r=0){const o=new ft(e,ud(t,r));return o.position.copy(vs(i)),o.rotation.set(s[0],s[1],s[2]),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),o}box(e,t,i,s,r,o,a,l=[0,0,0]){return this.add(new ks(s,r,o),a,[e,t,i],l)}cyl(e,t,i,s,r,o,a,l=12){const c=new bi(s,r,o,l);return _s.set(c,u=>new bi(s,r,o,Math.min(l,u===1?10:6))),this.add(c,a,[e,t,i])}ell(e,t,i,s,r,o,a,l=2){const c=new oi(1,l);return c.scale(s,r,o),_s.set(c,u=>new oi(1,Math.max(0,l-u)).scale(s,r,o)),this.add(c,a,[e,t,i])}beam(e,t,i,s,r=6){const o=vs(e),a=vs(t),l=a.clone().sub(o),c=new bi(i,i,l.length(),r),u=l.length();_s.set(c,h=>new bi(i,i,u,Math.min(r,h===1?5:4)));const d=this.add(c,s,o.clone().add(a).multiplyScalar(.5).toArray());return d.quaternion.setFromUnitVectors(new O(0,1,0),l.normalize()),d}tube(e,t,i,s=24){const r=new kh(e.map(vs)),o=new Oo(r,s,t,6,!1);return _s.set(o,a=>new Oo(r,Math.max(6,Math.ceil(s/(a+1))),t,a===1?5:4,!1)),this.add(o,i)}ring(e,t,i,s,r,o,a=[Math.PI/2,0,0]){const l=new Uo(s,r,5,32);return _s.set(l,c=>new Uo(s,r,c===1?4:3,c===1?20:12)),this.add(l,o,[e,t,i],a)}prism(e,t,i,s=[0,0,0]){const r=new Ri;e.forEach(([a,l],c)=>c?r.lineTo(a,l):r.moveTo(a,l)),r.closePath();const o=new qi(r,{depth:t,bevelEnabled:!1,steps:1});return o.translate(0,0,-t/2),this.add(o,i,s)}roof(e,t,i,s,r,o,a,l=!1){const c=l?[[-s/2,0],[-s*.34,o*.72],[0,o],[s*.34,o*.72],[s/2,0]]:[[-s/2,0],[0,o],[s/2,0]];for(let u=1;u<c.length;u++){const d=c[u-1],h=c[u];this.prism([d,h,[h[0],h[1]-.16],[d[0],d[1]-.16]],r,a,[e,t,i])}for(const u of[-1,1])for(let d=1;d<14;d++){const h=d/14;let f=s/2*(1-h),m=o*h;l&&(h<.32?(f=s/2-s*.16*(h/.32),m=o*.72*h/.32):(f=s*.34*(1-(h-.32)/.68),m=o*(.72+.28*(h-.32)/.68))),this.beam([e+f*u,t+m+.035,i-r/2],[e+f*u,t+m+.035,i+r/2],.025,a===T.slate?"#7d8a88":"#bd7760")}this.beam([e,t+o+.06,i-r/2-.06],[e,t+o+.06,i+r/2+.06],.12,a)}hip(e,t,i,s,r,o,a){const l=Math.max(.01,r-s*.65),c=[[-s/2,0,-r/2],[s/2,0,-r/2],[s/2,0,r/2],[-s/2,0,r/2],[0,o,-l/2],[0,o,l/2]],u=[0,4,1,1,4,5,1,5,2,2,5,3,3,5,4,3,4,0,0,1,2,0,2,3],d=new St;return d.setAttribute("position",new rt(c.flat(),3)),d.setIndex(u),d.computeVertexNormals(),this.add(d,a,[e,t,i])}win(e,t,i,s=1,r=1.6,o=T.white,a=!1){if(a){const l=new Ri;l.moveTo(-s/2,-r/2),l.lineTo(s/2,-r/2),l.lineTo(s/2,r/2-s/2),l.absarc(0,r/2-s/2,s/2,0,Math.PI,!1),l.lineTo(-s/2,-r/2),this.add(new qi(l,{depth:.12,bevelEnabled:!1}),o,[e,t,i]),this.win(e,t-.1,i+.15,s*.77,r*.76,o,!1);return}this.box(e,t,i,s+.18,r+.18,.13,o),this.box(e,t,i+.08,s,r,.08,T.glass),this.box(e,t,i+.15,.06,r,.065,o),this.box(e,t,i+.15,s,.06,.065,o),this.box(e,t-r/2-.13,i+.15,s+.32,.1,.3,o)}door(e,t,i,s=1.1,r=2.2,o=T.dark){this.box(e,t+r/2,i,s+.22,r+.2,.2,T.cream),this.box(e,t+r/2,i+.12,s,r,.16,o),this.ell(e+s*.3,t+r*.45,i+.24,.055,.055,.04,T.gold,0)}rail(e,t,i=1,s=T.dark,r=.65){const o=vs(e),a=vs(t),l=Math.ceil(o.distanceTo(a)/r);for(let c=0;c<=l;c++){const u=o.clone().lerp(a,c/l);this.beam(u.toArray(),u.clone().add(new O(0,i,0)).toArray(),.035,s)}this.beam(o.clone().add(new O(0,i,0)).toArray(),a.clone().add(new O(0,i,0)).toArray(),.055,s)}stairs(e,t,i,s,r,o,a,l=T.stone){for(let c=0;c<a;c++){const u=r*(c+1)/a;this.box(e,t+u/2,i-o/2+(c+.5)*o/a,s,u,o/a+.02,l)}}chimney(e,t,i,s=2,r=T.stone){this.box(e,t+s/2,i,.7,s,.7,r),this.box(e,t+s-.1,i,.95,.25,.95,r);for(const o of[-.23,.23])this.cyl(e+o,t+s+.22,i,.13,.17,.45,T.tile,8)}finish(e=!1,t=0){this.group.updateMatrixWorld(!0);const i=[];this.group.traverse(r=>{r instanceof ft&&i.push(r)});const s=[];for(let r=0;r<(e?3:1);r++){const o=new Map;for(const l of i){if(r>(l.userData.maxLod??2))continue;l.geometry.computeBoundingBox();const c=l.geometry.boundingBox.getSize(new O).toArray().sort((p,g)=>p-g);if(r>0&&!l.userData.lodEssential&&(c[2]<(r===1?.35:.8)||c[1]<(r===1?.125:.18)))continue;const u=(r>0?_s.get(l.geometry)?.(r):void 0)??l.geometry.clone();u.applyMatrix4(l.matrixWorld);const d=u.index?u.toNonIndexed():u;d!==u&&u.dispose(),d.deleteAttribute("uv");const h=l.material,f=t?new En().setFromBufferAttribute(d.getAttribute("position")).getCenter(new O):void 0,m=h.uuid+(f?`/${Math.floor(f.x/t)}/${Math.floor(f.z/t)}`:"");let y=o.get(m);y||(y={material:h,geometries:[]},o.set(m,y)),y.geometries.push(d)}const a=new qt;a.name=["近景完整細節","中景簡化曲面","遠景主要結構"][r];for(const{material:l,geometries:c}of o.values()){const u=Dr(c);if(u){u.computeBoundingSphere();const d=new ft(u,l);d.castShadow=!0,d.receiveShadow=!0,a.add(d)}c.forEach(d=>d.dispose())}s.push(a)}if(i.forEach(r=>r.geometry.dispose()),this.group.clear(),e){const r=new Lo;r.name="建物三級LOD";const o=new En().setFromObject(s[0]).getSize(new O).length();r.addLevel(s[0],0),r.addLevel(s[1],Math.max(180,o*5),.12),r.addLevel(s[2],Math.max(480,o*12),.12),r.raycast=(a,l)=>(a.intersectObject(r.levels[r.getCurrentLevel()].object,!0,l),!1),this.group.add(r)}else s[0].children.length&&this.group.add(...s[0].children.slice());return this.group}}function Tr(n=8128){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function hd(n,e,t,i,s,r=T.white){const o=[];for(let a=0;a<=24;a++){const l=-e/2+e*a/24;o.push([l,i+s*(1-(2*l/e)**2)])}n.prism([...o,...o.slice().reverse().map(([a,l])=>[a,l-.22])],t,r);for(let a=-t/2;a<=t/2+.1;a+=t/10)n.tube(o.map(([l,c])=>[l,c+.12,a]),.055,"#c4c9c4",24)}function dd(n,e=!1){const i=e?86:87,s="#445b5b";n.box(0,1.15,0,60,2.3,i,"#b7bfb9"),n.box(0,7,0,60-.6,9.4,i-.5,"#668185");const r=new vt;hd(r,i+1,62,13.8,2.4,"#e1e3da"),r.group.rotation.y=Math.PI/2,n.group.add(r.group);for(const a of[-1,1]){const l=a*30.05;for(let c=-i/2+1;c<i/2;c+=4.5)n.box(l,7,c,.24,9.5,.2,T.white),n.box(l,2.2,c,.65,4.4,.65,"#bbc3bf");for(const c of[3.3,5.3,7.3,9.3,11.2,13.7])n.box(l,c,0,.3,.18,i,s);for(let c=-i/2;c<i/2-2;c+=5.4)n.beam([l,11.3,c],[l,13.6,c+2.7],.11,s),n.beam([l,13.6,c+2.7],[l,11.3,Math.min(i/2,c+5.4)],.11,s)}for(const a of[-i/2-.02,i/2+.02]){n.box(0,5.9,a,60-.4,8.8,.2,"#768a8b");for(let l=-28;l<=28;l+=4)n.box(l,6,a,.18,9,.24,T.white);for(const l of[3,6,9,12])n.box(0,l,a,60,.17,.22,"#bac4be")}const o=new vt;o.cyl(0,2.4,0,7.6,7.6,4.8,"#bac3be",32),o.cyl(0,4.85,0,7.9,7.9,.3,T.white,32);for(let a=0;a<14;a++){const l=Math.PI*a/13;o.box(Math.cos(l)*7.65,2.7,Math.sin(l)*7.65,.16,2.1,.16,s)}if(o.group.position.set(-27,0,e?22:-8),n.group.add(o.group),!e){for(let a=-5;a<27;a+=4){n.prism([[-17,0],[17,0],[17,1.65],[-17,.2]],3.9,"#d6caa3",[0,16.15,a]),n.box(0,17.03,a+1.97,34,1.4,.09,"#a2bab3");for(let l=-16;l<17;l+=2.6)n.box(l,17.03,a+2.03,.07,1.45,.12,T.white)}for(let a=-32;a<-17;a+=3)n.box(-13,16.1,a,8,.5,2,"#83908b")}}function u1(n){const e=new vt;hd(e,30,60,13.7,5.5,"#e9e8df"),e.group.rotation.y=Math.PI/2,n.group.add(e.group);for(const t of[-14.6,14.6]){n.box(0,9,t,60,8.6,.16,"#7e9b94");for(let i=-29;i<=29;i+=3)n.box(i,8.9,t,.16,8.9,.3,"#c4d0c7")}for(const t of[-29.7,29.7]){n.box(t,11.1,0,.2,5.3,30,"#809c96");for(let i=-14;i<=14;i+=3)n.box(t,11.2,i,.3,5.3,.15,T.white);for(let i=-14;i<14;i+=4)n.beam([t,14,i],[t,17,i+2],.13,"#697c70")}n.box(0,.18,0,60,.36,30,"#c9c9b8")}function h1(n){n.box(-7,1.8,0,40,3.6,12,"#8f7667"),n.box(-7,3.72,-4.7,42,.28,3.2,T.slate),n.box(-7,3.72,5.3,42,.28,2,T.slate),n.box(-7,3.75,.1,38,.3,7.4,"#82936c");for(const e of[-3.7,3.8])n.box(-7,4.03,e,39,.55,.3,T.stone);for(let e=-25;e<13;e+=3)n.box(e,1.9,6.05,2.65,2.9,.12,T.glass),n.box(e+1.45,2,6.16,.13,3.5,.18,T.dark);for(const e of[17,25])n.box(e,2.5,0,7,5,13,"#8f6654"),n.prism([[-3.5,0],[0,2.3],[3.5,0]],13,"#8f6654",[e,5,0]),n.roof(e,5,0,7.8,14,2.3,T.slate),n.win(e,3,6.6,2.2,2,T.dark,!0);n.box(21,3,0,2,6,10,T.glass),n.box(21,6.1,0,2.5,.25,11,T.slate),n.box(-25,4.25,-2,3.7,8.5,4.2,T.glass);for(const e of[-26.9,-23.1])n.box(e,4.35,.2,.15,8.7,.15,T.dark);n.box(-25,8.65,-2,4.3,.3,4.7,T.slate),n.box(-7,3.78,0,37,.2,5.7,"#c3b29c");for(let e=-22;e<9;e+=6){n.cyl(e,4.65,0,.6,.6,.12,T.cream),n.beam([e,3.9,0],[e,6.1,0],.035,T.iron),n.cyl(e,6.15,0,0,1.45,.55,"#bf4d46",12);for(const t of[-1,1])n.box(e+t,4.15,0,.5,.12,.55,T.dark)}n.box(-7,.2,8.2,42,.4,3.6,"#b7ac98"),n.rail([-28,.4,9.9],[14,.4,9.9],1.05,T.dark,.8);for(const e of[-20,-5,10])n.box(e,.2,12,4,.4,4,T.stone),n.rail([e-2,.4,14],[e+2,.4,14],1.05,T.dark)}function d1(n){n.box(0,3,0,5,6,5.6,"#aca492"),n.prism([[-2.5,0],[0,2.6],[2.5,0]],5.6,"#aca492",[0,6,0]),n.roof(0,6,0,5.6,6.3,2.6,T.slate);for(const e of[-1.3,1.3])n.win(e,4.4,2.87,.65,1.25,T.dark);n.door(0,.25,2.86,1.1,2.1,T.dark),n.box(1.4,1.5,4,3.4,3,3.2,"#956f60"),n.roof(1.4,3,4,3.9,3.8,1.1,"#8f6254"),n.door(1.4,.15,5.65,.85,1.95);for(const[e,t,i,s]of[[-4.2,1.5,2.1,4.6],[3.8,-1.1,2.3,5.1]]){const r=new Ri;r.absarc(0,0,i,0,Math.PI*2,!1);const o=new No;o.absarc(0,0,i-.38,0,Math.PI*2,!0),r.holes.push(o);const a=new qi(r,{depth:s,bevelEnabled:!1,curveSegments:24});a.rotateX(-Math.PI/2),n.add(a,"#b3ad9b",[e,0,t]),n.ring(e,s+.03,t,i-.18,.22,"#d0c9b7"),n.cyl(e,.12,t,i-.4,i-.4,.24,T.stone,24);for(let l=.7;l<s;l+=.65)for(let c=0;c<12;c++){const u=c*Math.PI/6+l%1*.2;n.beam([e+Math.sin(u)*i,l,t+Math.cos(u)*i],[e+Math.sin(u)*i,l+.18,t+Math.cos(u)*i],.025,"#7f827a")}}n.stairs(6.5,0,-1,2.1,3.9,8.5,22),n.rail([7.55,0,3.25],[7.55,3.9,-5.25],.9,T.stone)}function f1(n){const e=(t,i,s,r)=>{n.box(t,1.8,i,s,3.6,r,"#929189"),n.prism([[-s/2,0],[0,3],[s/2,0]],r,"#929189",[t,3.6,i]),n.roof(t,3.6,i,s+.6,r+.7,3,"#8b8979")};e(5,-.5,8,11.8),e(-4.6,-.4,11,7.3);for(const t of[2.5,7.5])n.win(t,1.8,5.48,1.35,1.4,T.white),n.prism([[-.7,0],[0,1],[.7,0]],1.4,T.white,[t,4.2,4.1]),n.win(t,4.5,4.84,.58,.7,T.white);n.door(5,.1,5.57,1.1,2.35,"#52776e"),n.roof(5,2.9,6,2.5,2,1.05,T.white);for(const t of[-8,-4,-1])n.win(t,1.8,3.35,1,1.4,T.white);for(const t of[-8.6,8])n.chimney(t,5,-2.5,2.2,"#968576");n.box(-5,.15,5.2,8,.3,2.5,"#839475");for(const t of[-5,6.8])n.rail([-10,0,t],[9.5,0,t],.75,T.stone,.9)}function p1(n){n.box(0,1.6,-.5,14,3.2,6,T.cream),n.hip(0,3.3,-.5,15.2,7.4,1.7,"#747b7a");for(let e=-6.5;e<6.6;e+=1.3)n.box(e,1.6,2.55,1.14,2.8,.14,T.glass),n.box(e+.62,1.6,2.66,.12,3.1,.13,T.wood);n.roof(-2,3.2,4,6.7,5.4,1.5,"#747b7a"),n.prism([[-3,0],[0,1.4],[3,0]],.2,T.cream,[-2,3.2,6.5]);for(const e of[-5,1]){n.box(e,1.65,6.3,.24,3.3,.24,T.wood);for(let t=2;t<6.4;t+=.3)n.box(e,1.6,t,.1,2.8,.065,T.wood);for(let t=.5;t<3;t+=.3)n.box(e,t,4.2,.1,.07,4.4,T.wood)}n.box(-2,3.13,6.45,6.3,.25,.2,T.wood),n.box(-.8,1.54,6.55,1.7,2.85,.045,"#414c68"),n.ring(-.8,1.7,6.59,.58,.04,T.white,[0,0,0]);for(let e=0;e<5;e++)n.ell(-4+e,3.65,6.68,.4,.4,.07,"#c6a675",1)}function m1(n){n.box(0,.15,0,11.5,.3,8,T.stone),n.roof(0,3.1,0,12.4,8.8,1.9,"#969084");for(const e of[-5.2,0,5.2])for(const t of[-3.3,3.3])n.box(e,1.65,t,.25,3,.25,T.wood),n.beam([e,2.2,t],[e+(e>0?-1:1),3.1,t],.09,T.wood);n.box(0,1.6,-2,10.4,2.9,2.6,"#8c795f"),n.box(0,1.8,-.65,7,1.3,.15,T.dark),n.box(0,1.1,-.25,8,.14,1,T.wood);for(const e of[-3,3]){n.box(e,.6,2,2.1,.15,.65,T.wood);for(const t of[-.7,.7])n.box(e+t,.3,2,.15,.6,.5,T.wood)}}const Wa=[407,599],Xa=[422,569];function g1(n){const e=(n%56+56)%56,t=i=>i*i*(3-2*i);return e<4?0:e<28?t((e-4)/24):e<32?1:1-t((e-32)/24)}function x1(n){n.cyl(0,.12,0,8.4,8.4,.24,T.stone,64),n.cyl(0,3.8,0,.48,.65,7.6,T.gold,16);for(let e=0;e<12;e++){const t=e*Math.PI/6,i=t+Math.PI/6,s=Math.sin(t)*7.7,r=Math.cos(t)*7.7;n.beam([s,.3,r],[s,6.55,r],.12,"#648b80"),n.beam([0,8.5,0],[s,6.65,r],.07,T.gold);const o=new St,a=[0,8.6,0,s,6.65,r,Math.sin(i)*7.7,6.65,Math.cos(i)*7.7,0,8.43,0,s,6.48,r,Math.sin(i)*7.7,6.48,Math.cos(i)*7.7];o.setAttribute("position",new rt(a,3)),o.setIndex([0,1,2,3,5,4,0,3,1,1,3,4,1,4,5,1,5,2,2,5,0,0,5,3]),o.computeVertexNormals(),n.add(o,e%2?"#efe4c7":"#cd7463"),n.box(s,6.35,r,.7,.8,.3,T.gold,[0,t,0])}n.ring(0,6.5,0,7.7,.18,"#638d7e"),n.ring(0,6.15,0,7.7,.1,T.gold),n.cyl(0,8.8,0,0,.6,.7,"#759b8c",12),n.stairs(0,0,8.1,3,.45,2,3),n.rail([-4,.2,8.3],[-1.7,.2,8.3],.8,T.dark),n.rail([1.7,.2,8.3],[4,.2,8.3],.8,T.dark)}function v1(){const n=new vt;for(const t of[.45,3.8]){n.cyl(0,t-.12,0,7.25,7.25,.24,"#967752",48);for(let i=0;i<12;i++){const s=i*Math.PI/6,r=Math.sin(s)*5.7,o=Math.cos(s)*5.7,a=new vt;a.ell(0,1,0,.76,.36,.3,["#d6c5a1","#93a59b","#c58b69"][i%3],1),a.ell(.55,1.37,0,.22,.47,.23,T.cream,1),a.ell(.77,1.62,0,.3,.17,.18,T.cream,1);for(const l of[-.45,.4])for(const c of[-.21,.21])a.beam([l,.87,c],[l-.12,.35,c],.065,T.cream);a.tube([[-.65,1,0],[-.98,.87,0],[-1.1,.55,0]],.07,T.dark,8),a.box(0,1.32,0,.55,.12,.58,"#917054"),a.cyl(0,1.5,0,.035,.035,3,T.gold,6),a.group.position.set(r,t,o),a.group.rotation.y=s,n.group.add(a.group),t>1&&(n.beam([Math.sin(s)*7,4,Math.cos(s)*7],[Math.sin(s)*7,4.9,Math.cos(s)*7],.035,T.gold),n.beam([Math.sin(s)*7,4.9,Math.cos(s)*7],[Math.sin(s+Math.PI/6)*7,4.9,Math.cos(s+Math.PI/6)*7],.05,T.gold))}}const e=n.finish(!0);return e.name="旋轉木馬・雙層轉盤與坐騎",e.userData.motion="carousel",e}function _1(n){const i="#ccd3ce";n.box(0,.3,0,25,.6,22,"#9c7667");for(const s of[-1,1]){for(const r of[-12,12])n.box(r,.8,s*8,3,1.3,3,T.stone),n.beam([r,1,s*8],[0,46,s*2.8],.48,i,10);for(const r of[12,23,34]){const o=12*(1-r/46);n.beam([-o,r,s*(8-r*.113)],[o,r,s*(8-r*.113)],.25,i)}}for(const s of[-2.6,2.6]){n.ring(0,46,s,40,.19,i,[0,0,0]),n.ring(0,46,s,37,.14,i,[0,0,0]),n.ring(0,46,s,7,.22,i,[0,0,0]);for(let r=0;r<48;r++){const o=r*Math.PI/24,a=Math.sin(o)*40,l=46+Math.cos(o)*40;n.beam([0,46,s],[a,l,s],.065,i).userData.lodEssential=!0,n.beam([a,l,s],[Math.sin(o+Math.PI/24)*40,46+Math.cos(o+Math.PI/24)*40,-s],.06,i)}}n.beam([0,46,-4],[0,46,4],1.1,i,16);for(let s=0;s<48;s++){const r=s*Math.PI/24,o=Math.sin(r)*40,a=46+Math.cos(r)*40;n.beam([o,a,0],[o,a-1.4,0],.1,i),n.box(o,a-2.1,0,1.8,1.8,2,"#b9c9c2"),n.box(o,a-1.85,1.02,1.4,1.05,.06,T.glass),n.box(o,a-1.85,-1.02,1.4,1.05,.06,T.glass),n.hip(o,a-1.2,0,2.05,2.2,.4,i)}n.box(0,1.2,0,9,1.8,10,T.stone),n.box(0,4,-6.5,11,.28,5.5,i);for(const s of[-5,5])n.box(s,2,-8.5,.2,4,.2,i);n.stairs(0,0,8,6,2,5,10)}function fd(n,e,t,i,s,r=T.dark){for(const o of[-t/2-.03,t/2+.03]){for(const a of[-e/2,0,e/2])n.box(a,i+s/2,o,.16,s,.18,r);for(const a of[i,i+s/2,i+s])n.box(0,a,o,e,.16,.18,r);for(const a of[-e/4,e/4])n.beam([a-e/4,i,o],[a+e/4,i+s/2,o],.07,r),n.beam([a+e/4,i,o],[a-e/4,i+s/2,o],.07,r)}for(const o of[-e/2,e/2]){n.box(o,i+s/2,0,.16,.15,t,r);for(let a=-t/2;a<=t/2;a+=t/4)n.box(o,i+s/2,a,.18,s,.17,r)}}function Ar(n,e,t,i,s,r,o=T.tile,a=!1){n.box(0,.25,0,e+.2,.5,t+.2,T.stone),n.box(0,i/2+.4,0,e,i,t,r),n.prism([[-e/2,0],[0,s],[e/2,0]],t,r,[0,i+.4,0]),n.roof(0,i+.4,0,e+.8,t+.8,s,o),a&&fd(n,e,t,.4,i);for(const l of[-1,1])for(let c=-e/2+1.3;c<e/2-.6;c+=2.5)if(l===1)n.win(c,i*.62,l*(t/2+.02),1,1.4);else{const u=new vt;u.win(-c,i*.62,t/2+.02,1,1.4),u.group.rotation.y=Math.PI,n.group.add(u.group)}n.door(0,.4,t/2+.08),n.chimney(e*.28,i+s*.65,-t*.2,2)}function M1(n){n.box(0,2.9,0,10.8,5.8,12.8,T.plaster),n.prism([[-5.4,0],[-3.65,3.7],[0,5],[3.65,3.7],[5.4,0]],12.8,T.plaster,[0,5.8,0]),n.roof(0,5.8,0,11.6,14,5.1,T.slate,!0);for(const e of[-1,1]){const t=7.05*e;for(const[i,s]of[[[-5.8,5.8],[-3.95,9.5]],[[-3.95,9.5],[0,10.9]],[[0,10.9],[3.95,9.5]],[[3.95,9.5],[5.8,5.8]]])n.beam([i[0],i[1],t],[s[0],s[1],t],.09,T.white)}n.box(0,.2,6.7,12,.4,2,T.stone),n.door(0,.4,6.51,1.4,2.5,"#304c42");for(const e of[-3.7,3.7])n.win(e,2.7,6.52,1.4,2.2,T.dark),n.box(e-1,2.7,6.55,.5,2.4,.16,"#4b6453"),n.box(e+1,2.7,6.55,.5,2.4,.16,"#4b6453");n.win(0,6.9,6.53,2.7,2.2,T.dark),n.win(0,9.3,6.55,.9,.65,T.white),n.cyl(0,5.47,7.35,1.85,1.85,.22,T.white,24),n.rail([-1.85,5.58,7.8],[1.85,5.58,7.8],1,T.white,.35),n.rail([-1.8,5.58,6.5],[-1.8,5.58,7.8],1,T.white),n.rail([1.8,5.58,6.5],[1.8,5.58,7.8],1,T.white),n.box(0,-1.9,-2.6,10.8,3.8,7.4,T.stone);for(const e of[-.6,3.1]){n.box(0,e,-7.05,11.3,.23,2.8,T.wood),n.rail([-5.5,e+.15,-8.45],[5.5,e+.15,-8.45],1.1,T.wood,.37);for(const t of[-5.35,0,5.35])n.box(t,e+1.65,-8.1,.23,3.3,.23,T.wood);for(let t=-4.5;t<=4.5;t+=1.8){n.box(t,e+1.5,-6.45,1.4,2.5,.15,T.dark);for(const i of[-.5,0,.5])n.box(t+i,e+1.5,-6.55,.045,2.4,.08,T.cream)}}for(const e of[-4.6,4.6])n.box(e,-3.3,-7.5,.5,5.8,.5,T.wood),n.beam([e,-5.6,-7.4],[0,-.8,-7.4],.18,T.wood);n.roof(0,6,-7.1,11.8,2.6,.6,T.slate),n.chimney(4.1,8.2,-1.3,2.1,T.cream);for(const e of[-5.83,5.83])for(const t of[-2.5,2.5]){const i=new vt;i.box(0,0,0,1.3,1.5,1.2,T.plaster),i.roof(0,.75,0,1.7,1.5,.6,T.slate),i.win(0,0,.68,.75,1),i.group.position.set(e*.65,8,t),i.group.rotation.y=e<0?-Math.PI/2:Math.PI/2,n.group.add(i.group)}n.box(0,4.18,6.59,10.55,.12,.12,T.dark),n.stairs(0,.08,7.32,2.25,.42,1.28,3,T.stone);for(const e of[-4.65,4.65])n.beam([e,.3,6.76],[e,2.15,6.76],.045,T.dark),n.ell(e,2.22,6.77,.16,.19,.08,T.gold,1);for(const e of[-5.5,5.5])n.beam([e,5.7,-6.7],[e,5.7,6.7],.065,T.iron),n.beam([e,5.7,-6.2],[e,-2,-6.2],.06,T.iron);n.box(0,1.1,6.7,1,.12,.35,T.wood)}function y1(n){n.box(0,6.4,0,5.7,12.8,5.7,"#846b54");for(let e=1;e<12;e+=2.1)for(const t of[-2.88,2.88])n.box(0,e,t,5.75,.11,.1,T.gold);n.box(0,13,0,10,.6,9,T.iron);for(const e of[-4.4,4.4])n.rail([-4.8,13.3,e],[4.8,13.3,e],1.15,T.dark,.45);for(const e of[-4.8,4.8])n.rail([e,13.3,-4.4],[e,13.3,4.4],1.15,T.dark,.45);n.box(0,15.1,0,5.6,4,5.6,"#715746"),n.hip(0,17.1,0,7.9,7.9,2.5,"#554d44"),n.box(0,17.2,0,8,.25,8,T.gold);for(const e of[-3,3])for(const t of[-3,3])n.cyl(e,18.8,t,.22,.35,3.4,T.gold,8),n.cyl(e,20.7,t,0,.6,.9,T.iron,8);n.cyl(0,20,0,1.25,1.5,2.5,T.wood,8),n.cyl(0,22,0,0,1.7,1.8,T.iron,8),n.beam([0,22.9,0],[0,23.7,0],.06,T.gold);for(const e of[4,7.4,10.8,15]){n.win(0,e,2.86,1.6,2,T.gold);const t=new vt;t.win(0,e,2.86,1.6,2,T.gold),t.group.rotation.y=Math.PI,n.group.add(t.group)}n.ring(0,18.1,4.04,.73,.07,T.gold,[0,0,0]),n.box(0,18.1,4.03,1.2,1.2,.08,T.cream),n.beam([0,18.1,4.12],[0,18.55,4.12],.035,T.dark),n.beam([0,18.1,4.12],[.4,18.1,4.12],.035,T.dark),n.door(0,0,2.92,2,3);for(const e of[-3,3])n.beam([e,10,0],[e*1.7,12.8,0],.18,T.iron);n.prism([[-2.05,0],[0,2.35],[2.05,0]],.26,T.dark,[0,17.52,4.28]),n.ring(0,18.35,4.45,1.18,.1,T.gold,[0,0,0]),n.ell(0,18.35,4.49,.95,.95,.07,T.cream,1),n.beam([0,18.35,4.56],[.56,18.7,4.56],.045,T.dark),n.beam([0,18.35,4.56],[-.28,17.62,4.56],.035,T.dark);for(const[e,t,i]of[[-2.75,2.8,20.2],[2.8,4.2,21.75]])n.box(e,i-t/2,1.1,1.85,t,1.85,"#715746"),n.hip(e,i,1.1,2.45,2.45,.86,T.dark),n.win(e,i-t*.4,2.05,.72,1.05,T.gold),n.cyl(e,i+.95,1.1,.06,.35,1.15,T.iron,8);for(let e=1.25;e<12.2;e+=.8)n.beam([-3.25,e,-2.85],[-3.25,e+.66,-2.85],.035,T.iron),n.beam([-3.25,e+.66,-2.85],[-2.9,e+.66,-2.85],.035,T.iron);n.rail([-3.45,12.9,-3.75],[-3.45,12.9,3.75],1.05,T.iron,.42);for(const e of[-4.2,4.2])for(const t of[-3.8,3.8])n.ell(e,13.52,t,.13,.13,.13,T.gold,0);for(const e of[-1.3,1.3])n.box(e,1.8,3.03,.18,3.6,.24,T.gold),n.beam([e,3.3,3.04],[e*.7,3.8,3.04],.065,T.gold);n.box(0,3.75,3.05,2.8,.18,.28,T.gold)}function S1(n){Ar(n,2.5,3.1,2.35,1.15,"#e9e2ca","#567d55",!0),n.box(0,1.2,1.64,2.5,2.3,.16,"#397a49"),n.door(0,.05,1.76,.52,1.15,"#705038");for(const e of[-.8,.8])n.win(e,.85,1.78,.47,.95,T.white,!0);n.win(0,2.25,1.65,.9,1.1,T.white,!0),n.box(0,1.7,1.95,1.3,.12,.6,T.white),n.rail([-.65,1.77,2.25],[.65,1.77,2.25],.5,T.white,.18)}function b1(n){dd(n)}function w1(n){n.box(0,1.8,0,29,3.6,6.8,T.glass);for(let s=-14;s<=14;s+=2.2)for(const r of[-3.5,3.5])n.box(s,1.9,r,.1,3.8,.12,T.iron);const e=n.ell(2.4,4.65,1.1,23.2,.22,7.25,"#d5d7cc",2);e.rotation.z=.105;const t=n.ell(2.4,4.41,1.1,22.9,.12,6.95,"#56605e",2);t.rotation.z=.105,n.beam([-18.9,3.15,-.15],[24.3,5.46,2.35],.1,T.iron),n.beam([-15.2,1.1,-3.5],[-7.8,4.3,-1.65],.09,T.iron),n.beam([-2.5,1.1,-3.5],[5,4.95,-.65],.09,T.iron);const i=[[-12,7],[-6.5,6.4],[.5,7.3],[7.5,6.2],[13.4,7.2]];for(const[s,r]of i){n.cyl(s,.78,r,.5,.5,.1,T.white),n.cyl(s,.38,r,.065,.065,.78,T.dark);for(const o of[-.82,.82])n.box(s+o,.47,r+.1,.48,.14,.48,T.tile);n.box(s,.75,r+.52,1.65,.55,.06,T.dark)}for(const[s,r]of[[-10,7.1],[3,7.4],[12,7.2]])n.cyl(s,3.35,r,0,1.55,.5,"#c64b50",8),n.beam([s,.78,r],[s,3.35,r],.035,T.dark);n.box(19,1.3,5.8,3.5,2.2,1.9,"#d8aba1"),n.box(19,2.5,5.8,3.8,.2,2.2,"#d9c58b"),n.box(19,1.75,6.8,2.2,.85,.08,T.glass),n.box(19,2.35,7.3,3,.12,1.3,"#b65e61");for(const s of[17.9,20.1]){const r=n.cyl(s,.45,6.55,.35,.35,.18,T.dark,12);r.rotation.x=Math.PI/2}}function E1(n){n.box(-2,.5,-1,12,1,9,T.stone),n.box(-2,2.2,-1,11,3.5,8,T.cream),n.hip(-2,4,-1,13,10,2.1,"#596265");for(let e=-7;e<3;e+=1.2)n.box(e,2.2,3.07,1,2.8,.12,T.glass),n.box(e-.55,2.2,3.2,.1,3,.16,"#733f39"),n.box(e,2.2,3.22,1,.06,.08,T.cream);n.box(-2,.7,4,12,.15,2,T.wood);for(const e of[-7.5,3.5])n.box(e,2.2,4.7,.16,3.2,.16,"#733f39");n.box(-2,3.9,4,12,.15,2,T.slate),n.box(4,2.8,2,4.8,5.6,7,"#e4e8cf"),n.prism([[-2.4,0],[0,3],[2.4,0]],7,"#dbe4c9",[4,5.6,2]),n.roof(4,5.6,2,5.4,7.8,3,T.tile);for(let e=.8;e<5.5;e+=.24)n.box(4,e,5.54,4.8,.035,.08,"#b9c9ad");n.win(4,5.9,5.65,1.15,1.75,T.white);for(const e of[2.9,5.1])n.box(e,5.9,5.68,.5,1.8,.1,"#98b889");n.win(4,2.4,5.65,2.2,3.1,T.white),n.box(4,3.9,6.6,5,.15,2.5,T.white);for(const e of[1.7,6.3])n.box(e,1.9,7.7,.15,3.8,.15,T.white),n.beam([e,2.8,7.7],[e,3.9,6.6],.06,T.white);for(let e=1.6;e<6.5;e+=.52)n.box(e,3.95,6.6,.08,.13,2.7,T.white);n.box(-8,.25,-6,3,.5,3,T.stone),n.box(-8,1.5,-6,3,2.5,3,T.wood),n.roof(-8,2.75,-6,3.7,3.8,1,T.slate),n.cyl(-3,.5,8,.45,.45,1,"#677d5a"),n.beam([-3,1,8],[-3,1.7,8],.08,"#416c50"),n.beam([-3,1.5,8],[-2.55,1.5,8],.05,"#416c50"),n.beam([7,0,6],[7.4,7.1,6],.15,T.wood);for(let e=0;e<9;e++){const t=e*Math.PI*2/9;n.beam([7.4,7.1,6],[7.4+Math.cos(t)*2.2,7.5,6+Math.sin(t)*2.2],.09,"#5c8651")}}function T1(n){n.cyl(0,.16,0,2.9,2.9,.32,T.wood,24),n.ring(0,.35,0,2.58,.08,"#9c7351");for(let t=0;t<8;t++){const i=t*Math.PI/4+.15;n.cyl(Math.sin(i)*2.1,.78,Math.cos(i)*2.1,.19,.25,1.22,T.wood,7),n.beam([Math.sin(i)*2.1,1.28,Math.cos(i)*2.1],[Math.sin(i)*1.45,.36,Math.cos(i)*1.45],.07,T.wood)}n.ell(0,2.85,0,2.18,2.65,1.75,"#8b9896"),n.ell(0,2.42,1.22,1.62,1.65,.56,"#ded5b7");for(const t of[-1,1]){const i=n.cyl(t*1.15,4.78,0,.13,.42,1.18,"#778483",7);i.rotation.z=-t*.12,n.ell(t*2.08,2.65,0,.5,1.22,.72,"#8b9896"),n.ell(t*.72,4.3,1.54,.29,.3,.11,T.cream),n.ell(t*.72,4.32,1.65,.09,.11,.05,T.dark)}n.ell(0,3.7,1.69,1.15,.57,.13,T.dark);for(let t=-.96;t<=.96;t+=.24)n.box(t,3.7,1.82,.1,.95,.08,"#b68b61");n.ell(0,4.62,1.42,.24,.14,.08,T.dark);for(const t of[-1,1])for(let i=0;i<2;i++){const s=2.14+i*.5;n.beam([t*.18,s,1.78],[t*.72,s+.27,1.8],.065,"#8f7c60"),n.beam([t*.72,s+.27,1.8],[t*1.15,s,1.78],.065,"#8f7c60")}const e=3.35;n.cyl(0,5.25,0,.36,e,.58,"#a8754f",32);for(let t=0;t<14;t++){const i=t*Math.PI/7;n.beam([0,5.65,0],[Math.sin(i)*e*.96,5.06,Math.cos(i)*e*.96],.055,"#6e503a")}n.cyl(0,5.62,0,.13,.22,.33,T.dark,8)}function A1(n){n.box(0,1.6,0,24,3.2,14,"#9b8d68");const e=new vt;e.hip(0,3.25,0,17,27,5.35,"#81935f"),e.group.rotation.y=Math.PI/2,n.group.add(e.group),n.box(0,8.35,-1.9,6.8,2.9,4.8,T.wood),n.roof(0,9.72,-1.9,7.55,5.45,2.1,T.dark);for(let s=-7.6;s<=7.6;s+=1.25){const o=3.42+(1-Math.abs(s)/8)*.42;n.beam([-12.9,o,s],[12.9,o,s],.045,"#9bad72")}for(const s of[-2.7,2.7])n.beam([s,8.1,-4.25],[s*.46,10.8,-4.25],.11,T.wood),n.beam([s*.46,10.8,-4.25],[-s,8.1,-4.25],.11,T.wood);for(let s=-11;s<=11;s+=1.8)n.box(s,1.6,7.12,.2,3.3,.25,T.wood),n.box(s,1.6,-7.12,.2,3.3,.25,T.wood);const t=new vt;t.box(0,3.8,9,4.5,7.6,4,"#a29670"),t.box(0,5.25,11.04,4.05,2,.2,"#a64136"),t.hip(0,7.6,9,5.6,4.8,1.2,"#bca778"),t.box(0,4,11.35,5,.28,1,T.wood),t.door(0,0,11.12,2.3,2.6,T.dark);for(const s of[-2.1,2.1])t.box(s,5,11.3,.22,5,.24,T.wood),t.beam([s,4.25,11.48],[-s*.58,6.42,11.48],.075,T.wood);t.group.rotation.y=-Math.PI/2,t.group.position.x=-5,n.group.add(t.group);const i=Tr(321);for(const s of[-10,10])for(let r=-14;r<=14;r+=.55){const o=1.9+i()*.3;n.cyl(r,o/2,s,.075,.095,o,"#a59474",5)}for(const s of[-7,0,7]){const r=new vt;r.prism([[-.7,0],[0,.9],[.7,0]],1.2,T.dark),r.group.position.set(s,5.5,5),n.group.add(r.group)}}function Qu(n,e=!1){const t=Tr(e?913:534);if(!e){n.ell(0,2.15,-1.05,2.8,2.35,4.05,"#c9c4b7"),n.ell(0,2.7,2.62,2.2,1.75,2.7,"#cbbba8"),n.ell(0,2.28,5,1.32,.9,1.04,T.cream);for(const[s,r]of[[-1.95,-1.8],[1.95,-1.8],[-1.78,2.15],[1.78,2.15]])n.cyl(s,.95,r,.48,.62,2.05,"#c1b19e",8);for(const s of[-1,1]){const r=n.ell(s*1.52,4.08,2.7,.62,.72,.38,"#c7b29c",1);r.rotation.z=-s*.25,n.ell(s*.86,3.02,4.55,.13,.16,.09,"#a84542",0),n.ell(s*.86,3.02,4.65,.06,.07,.04,T.dark,0),n.tube([[s*.82,2.1,5.48],[s*1.42,2.42,5.78],[s*1.18,3.04,5.78]],.16,T.cream)}n.ell(0,2.26,5.84,.46,.4,.13,"#8a7565",0);for(const s of[-1,1])n.ell(s*.68,2.22,5.73,.16,.11,.07,"#63564e",0);for(let s=-2.55;s<2.4;s+=.42)n.ell(0,4.62,s,.35,.52,.42,"#b38d72",1);for(let s=0;s<190;s++){const r=t()*Math.PI*2,o=-2.6+t()*7.25,a=o<-.1,l=a?2.72:2.18,c=a?2.28:1.72,u=Math.cos(r)*l,d=2.22+Math.sin(r)*c,h=a?["#eee8d7","#d9d4c5","#c9c3b7"]:["#d7aa76","#a77f69","#8b9a93","#e1c38e","#bd8c70"];n.ell(u,d,o,.105+t()*.065,.105+t()*.06,.07,h[Math.floor(t()*h.length)],0)}for(let s=0;s<32;s++){const r=s/32*Math.PI*2;n.ell(Math.cos(r)*2.86,2.15+Math.sin(r)*2.35,-1.1,.16,.16,.09,"#ece4d5",0)}for(const s of[-1,1])n.tube([[s*1.7,1.8,3.8],[s*2.25,2.05,4.5],[s*2.15,2.8,4.6]],.11,T.cream,12);n.tube([[0,1.25,-4.6],[.6,1.25,-5.25],[1.22,.82,-5.1]],.13,"#c7bba9",10);return}const i="#655e63";n.ell(0,1.68,-.2,2.65,1.45,3.65,i),n.ell(0,2.12,2.35,1.75,1.12,1.62,i);for(const s of[-1,1])n.ell(s*1.1,2.55,3.25,.15,.17,.1,"#a34840",0),n.tube([[s*.82,1.65,2.95],[s*1.65,2.2,3.35],[s*1.14,3,3.52]],.16,T.cream);for(let s=0;s<170;s++){const r=t()*Math.PI*2,o=t()*5.2-2.6,a=1.75+t()*.75;n.tube([[Math.cos(r)*a,1.8+Math.sin(r)*a,o],[Math.cos(r+.2)*(a+.25),2.12+Math.sin(r+.2)*a,o+.38],[Math.cos(r+.4)*(a+.1),1.45+Math.sin(r+.4)*a,o+.9]],.06,s%3===0?"#84777d":"#514e53",8)}for(const s of[-1,1])n.tube([[s*2.2,1.1,1],[s*3.4,.3,2.2],[s*4.3,.22,2.7],[s*4.5,.24,2]],.09,"#514e53",16);for(const s of[-1,1])for(const r of[-1,1])n.tube([[s,1.8,r],[s*3.15,2.25,r*1.7],[s*4.05,.12,r*2.45]],.22,i)}function C1(n){const e=Tr(821),t="#878b83",i="#55534c",s="#76847a",r=[[.4,4.7],[2.3,5.5],[4.7,6.3],[6.3,5.1],[8.8,4.7],[10.99,4.7],[12.85,4.5]],o=[],a=[],l=40;r.forEach(([p,g],v)=>{for(let S=0;S<l;S++){const M=S/l*Math.PI*2,C=1+.035*Math.sin(M*5+v);o.push(Math.cos(M)*g*C,p,Math.sin(M)*g*.87*C)}});for(let p=0;p<r.length-1;p++)for(let g=0;g<l;g++){let v=p*l+g,S=p*l+(g+1)%l;a.push(v,v+l,S,S,v+l,S+l)}const c=new St;c.setAttribute("position",new rt(o,3)),c.setIndex(a),c.computeVertexNormals(),n.add(c,"#89847b");for(let p=0;p<28;p++){const g=p/28*Math.PI*2,v=Math.sin(g),S=Math.cos(g);n.beam([v*5.15,2.4,S*4.5],[v*5.9,5,S*5.05],.075,"#695f56");for(const M of[2.7,4.9])n.ell(v*(M<3?5.22:6.01),M,S*(M<3?4.6:5.14),.1,.1,.1,T.rust,0)}n.box(0,1.45,4.35,3.3,2.9,.25,"#353b36"),n.door(0,.3,4.56,1.5,2.45,T.wood);for(let p=0;p<9;p++){const g=(p-4)*.39;n.box(g,.7+Math.abs(g)*.15,4.8,.21,1.4+Math.abs(g)*.2,.4,T.rust)}n.tube([[-2.2,.2,4.7],[-2.25,2.7,4.7],[-1.4,3.5,5.05],[0,3.8,5.3],[1.9,3.15,5],[2.4,.2,4.7]],.23,i);for(const p of[-1,1])n.ell(p*3.1,5.6,4.6,1.05,.9,.7,t),n.ring(p*3.1,5.7,5.2,.52,.16,T.rust,[0,0,0]),n.ell(p*3.1,5.7,5.26,.38,.37,.13,"#35454a");const u=[[-3.5,8.6,3.5,3.2,4,2.4,"#a7b661",-.36],[.1,8.6,4.5,4.6,4,2.3,"#d6cdb5",0],[3.6,8.65,2.9,2.8,4,2.8,"#92756b",.48],[-4.7,8,-1.2,2.2,3.1,3.3,"#af9474",-1.4],[3.8,8,-2.9,3,3,3,"#c2a987",1.8]];for(const[p,g,v,S,M,C,D,I]of u){const _=new vt;_.box(0,0,0,S,M,C,D);for(const x of[-S/2,S/2])_.box(x,0,C/2+.04,.15,M+.2,.2,i);_.box(0,-M/2,C/2+.1,S+.25,.2,.22,i),_.box(0,M/2,C/2+.1,S+.3,.3,.3,i);for(let x=-S/2+.7;x<S/2;x+=1.2)_.win(x,.15,C/2+.1,.77,1.7,T.cream);_.hip(0,M/2,0,S+.5,C+.5,.75,i),_.group.position.set(p,g,v),_.group.rotation.y=I,n.group.add(_.group)}const d=new Ac(1,32,14,0,Math.PI*2,0,Math.PI/2);d.scale(4.65,3.42,4.35),n.add(d,t,[0,12.85,0]),n.ring(0,12.87,0,4.52,.14,i);for(let p=0;p<32;p++){const g=p*Math.PI/16;n.ell(Math.sin(g)*4.55,13,Math.cos(g)*4.26,.08,.08,.08,i,0)}for(let p=0;p<5;p++){const g=p*.72-1.25,v=Math.sin(g)*3.3,S=Math.cos(g)*3.1,M=new vt;M.cyl(0,0,0,.5,.63,.55,i,16),M.ring(0,.3,0,.46,.14,t),M.cyl(0,.31,0,.37,.37,.03,"#344b4d",16),M.group.position.set(v,14.9,S),M.group.rotation.set(.8,0,-g*.4),n.group.add(M.group)}n.cyl(-2.8,8.5,-4.2,2.2,2.5,5,s,14),n.ell(-2.8,11.1,-4.2,2.2,1.6,2.2,s);for(const[p,g,v,S]of[[-3.6,-3.8,7,.14],[-1.8,-4.4,5.9,-.15],[.1,-3.9,6.5,.1],[-4.4,-2.2,4.2,-.15]]){const M=new vt;M.cyl(0,v/2,0,.42,.65,v,T.rust,12);for(let C=.4;C<v;C+=1.25)M.ring(0,C,0,.5+.1*(1-C/v),.08,t);M.cyl(0,v+.08,0,.61,.58,.16,t,12),M.cyl(0,v+.17,0,.4,.4,.02,i,12),M.group.position.set(p,11,g),M.group.rotation.z=S,n.group.add(M.group)}for(const[p,g]of[[-1,-1],[-1,1],[1,-1],[1,1]]){const v=[p*4.5,4.2,g*3],S=[p*7,2.7,g*4.6],M=[p*7.8,.6,g*5.5];n.ell(...v,.7,.7,.7,i),n.beam(v,S,.42,t,10),n.ell(...S,.65,.65,.65,T.rust),n.beam(S,M,.3,i,10),n.beam([p*4.8,4.45,g*3.1],[p*7.4,1.7,g*5],.1,"#b5aaa0");for(let C=-1;C<=1;C++)n.tube([M,[p*8.1,.3,g*5.8+C*.4],[p*8.8,.15,g*6+C*.5]],.15,i,8)}const h=[-4.7,5,-1];for(let p=0;p<7;p++){const g=-.4+p*.23,v=[-9.3,6.6+Math.sin(g)*3,-2.3+Math.cos(g)*3];n.beam(h,v,.09,T.wood),p>0&&n.beam(v,[-9.3,6.6+Math.sin(g-.23)*3,-2.3+Math.cos(g-.23)*3],.08,T.wood)}const f=new St;f.setAttribute("position",new rt([-4.72,5.02,-1,-9.28,5.45,-4.82,-9.28,8.38,-3.45,-4.72,5.02,-1,-9.28,8.38,-3.45,-8.8,9.28,-.72],3)),f.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]),f.computeVertexNormals(),n.add(f,"#b58255");const m=n.cyl(-.85,17.05,-2.35,.76,1.03,3.15,i,12);m.rotation.x=Math.PI/2;const y=n.cyl(-.85,17.05,-3.94,.94,.94,.19,t,12);y.rotation.x=Math.PI/2;for(const[p,g]of[[-3.9,3.1],[-1.2,4.65],[3.55,2.6]])n.beam([p,6.2,g],[p*.78,8.15,g*.82],.14,T.wood),n.beam([p*.78,8.15,g*.82],[p+1.05,7.45,g+.22],.08,T.rust);for(let p=0;p<18;p++){const g=e()*Math.PI*2;n.tube([[Math.sin(g)*5,4,Math.cos(g)*4.4],[Math.sin(g+.1)*5.7,3,Math.cos(g+.1)*5],[Math.sin(g+.25)*5.2,1.8,Math.cos(g+.25)*4.5]],.08,p%2?T.rust:i,12)}n.beam([2,13,-2],[2,17.7,-2],.08,i),n.cyl(2,18.3,-2,.72,.6,1.1,t,10),n.cyl(2,18.98,-2,0,.84,.38,i,10)}function P1(n){n.box(-3,2.4,0,11,4.8,11,T.white);const e=new vt;e.prism([[-5.5,0],[0,4],[5.5,0]],11,T.white,[0,4.8,0]),e.roof(0,4.8,0,12,12,4,T.tile),e.group.rotation.y=Math.PI/2,e.group.position.x=-3,n.group.add(e.group);const t=new vt;t.box(0,2.8,0,6.8,5.6,10,T.white),t.prism([[-3.4,0],[-2.4,2.9],[0,4.5],[2.4,2.9],[3.4,0]],10,T.white,[0,5.6,0]),t.roof(0,5.6,0,7.4,11,4.5,T.tile,!0),t.win(0,7,5.12,1.2,1.7,T.white),t.door(0,.2,5.13,1.2,2.4,T.glass),t.group.position.set(4,0,2),n.group.add(t.group);for(let i=-7.5;i<1;i+=1.25)n.win(i,2,5.65,.95,2.5,T.white);for(const i of[-5.5,-2]){const s=new vt;s.box(0,0,0,1.5,1.6,1.5,T.white),s.roof(0,.8,0,1.9,1.8,.65,T.tile),s.win(0,0,.81,.9,1.1,T.white,!0),s.group.position.set(i,6.5,4.45),n.group.add(s.group)}n.roof(4,2.7,8,2.8,1.9,.75,T.tile);for(const i of[2.8,5.2])n.box(i,1.4,8.9,.14,2.8,.14,T.white);n.chimney(-6,7,-2,3,T.cream),n.box(9,1.7,1,4.5,3.4,6,T.white),n.prism([[-2.25,0],[0,2.1],[2.25,0]],6,T.white,[9,3.4,1]),n.roof(9,3.4,1,5.1,6.6,2.1,T.tile),n.win(9,1.65,4.06,2.7,2.8,T.wood,!0),n.box(-3,.25,0,11.2,.5,11.2,T.stone);for(let i=-7.8;i<1;i+=1.2)n.box(i,.6,5.72,1,.25,.09,"#a89e83")}function R1(n){n.box(0,2.1,0,11,4.2,13,"#84a36d"),n.box(0,5.8,0,11,3.2,13,"#b36c59"),n.prism([[-5.5,0],[-3.5,4.4],[0,6.1],[3.5,4.4],[5.5,0]],13,"#b36c59",[0,7.4,0]),n.roof(0,7.4,0,11.8,14,6.1,T.tile,!0),fd(n,11,13,4.2,3.2);for(const t of[-6.59,6.59]){for(const i of[-1,1])n.beam([i*5.5,7.4,t],[0,13.4,t],.11,T.dark);n.box(0,10.5,t,.15,5.7,.14,T.dark),n.box(0,10,t,6.8,.14,.14,T.dark)}for(const t of[-3.5,3.5])n.win(t,2.2,6.57,2.1,2.6,T.cream,!0);n.door(0,.2,6.57,1.5,2.7,"#af7660"),n.win(0,6,6.6,2,1.8,T.cream),n.win(0,10.8,6.61,1.4,1.4,T.cream),n.box(0,.2,7.7,9,.4,2.4,T.stone),n.rail([-4.5,.4,8.8],[-1.3,.4,8.8],.9),n.rail([1.3,.4,8.8],[4.5,.4,8.8],.9);const e=new vt;Ar(e,7.5,12,5.4,3.2,"#dfd3bc",T.tile,!0),e.group.rotation.y=Math.PI/2,e.group.position.set(-4,0,-7),n.group.add(e.group)}function D1(n){Ar(n,9.5,10,5.8,5,T.cream,T.tile,!0),n.prism([[-4.75,0],[0,5],[4.75,0]],10,T.cream,[0,6.2,0]);for(const t of[-5.12,5.12]){for(const i of[-1,1])n.beam([i*4.75,6.2,t],[0,11.2,t],.12,T.wood);n.box(0,8.6,t,.18,5,.2,T.wood),n.box(0,8,t,5.5,.14,.15,T.wood)}n.win(0,6.6,5.25,2.5,2.6,T.white),n.win(0,2.5,5.23,3.7,1.8,T.wood),n.box(0,3.55,6,4.4,.12,1.7,"#ae4e59",[-.15,0,0]),n.box(0,3.4,6.8,4.4,.35,.1,"#a44350"),n.door(3.3,.4,5.3,1.1,2.4,"#506453");const e=new vt;Ar(e,8,7,3.6,2.4,T.cream,T.tile,!0),e.group.position.set(-7,0,-1),n.group.add(e.group);for(let t=-1.9;t<2.1;t+=.55)n.box(t,3.59,6,.24,.025,1.65,T.cream,[-.15,0,0]);n.box(-2.2,7.1,2.5,1.3,1.4,1.5,T.cream),n.roof(-2.2,7.8,2.5,1.7,1.8,.8,T.tile),n.win(-2.2,7.1,3.3,.7,.9,T.dark)}function L1(n){f1(n)}function I1(n){x1(n)}function N1(n){n.cyl(0,.4,0,2,2.2,.8,T.stone,12),n.cyl(0,3.2,0,.7,1.1,5.6,T.wood,9),n.ell(0,6.1,0,1.7,1.4,1.7,"#4a8764");for(let e=0;e<6;e++){const t=e*Math.PI/3,i=Math.sin(t),s=Math.cos(t);n.beam([0,5.3,0],[i*5.7,5.8,s*5.7],.12,T.gold),n.beam([i*5.7,5.8,s*5.7],[i*5.7,2,s*5.7],.065,T.dark),n.ell(i*5.7,2,s*5.7,1,.55,.7,["#b98962","#8baab0","#cfac66"][e%3]);const r=n.box(i*4.5,5.8,s*4.5,3.5,.09,1.2,e%2?"#d6b250":"#58a393");r.rotation.y=t}}function U1(n){n.box(0,2,0,4.2,4,4.2,T.stone),n.box(0,7,0,3.8,6,3.8,T.white),n.hip(0,10,0,5.1,5.1,2.2,T.tile),n.door(0,0,2.15,1.3,2.5);for(let e=0;e<4;e++){const t=new vt;t.box(0,8.1,1.94,2.5,2.5,.1,T.slate),t.ring(0,8.1,2.04,1.04,.07,T.white,[0,0,0]);for(let i=0;i<12;i++){const s=i*Math.PI/6;t.ell(Math.sin(s)*.86,8.1+Math.cos(s)*.86,2.07,.045,.07,.02,T.white,0)}t.beam([0,8.1,2.1],[.4,8.55,2.1],.04,T.white),t.beam([0,8.1,2.1],[-.2,7.4,2.1],.035,T.white),t.group.rotation.y=e*Math.PI/2,n.group.add(t.group)}for(let e=-6;e<7;e+=1.4)n.box(e,.8+(Math.sin(e*3)+1)*.3,-2,1.4,1.6+(Math.sin(e*3)+1)*.6,.7,T.stone)}function O1(n){d1(n)}function F1(n){n.box(0,1.65,0,4.05,3.3,3.9,T.white),n.box(-1.28,1.55,2.02,.48,3.1,.18,T.dark),n.box(1.28,1.55,2.02,.48,3.1,.18,T.dark),n.tube([[-1.5,.12,2.12],[-1.5,1.65,2.12],[-.82,2.62,2.12],[0,2.86,2.12],[.82,2.62,2.12],[1.5,1.65,2.12],[1.5,.12,2.12]],.095,T.dark,12),n.cyl(0,7.35,0,2.16,2.02,8.95,T.white,8);for(let e=0;e<8;e++){const t=e*Math.PI/4,i=Math.sin(t)*1.92,s=Math.cos(t)*1.92;n.beam([i,3.1,s],[i,11.65,s],.12,T.dark)}for(const e of[5.05,7.55,10])for(let t=0;t<8;t+=2){const i=new vt;i.win(0,0,2.04,.9,1.72,T.dark),i.group.position.set(0,e,0),i.group.rotation.y=t*Math.PI/4,n.group.add(i.group)}n.cyl(0,11.92,0,2.55,2.55,.38,T.dark,8);for(let e=12.15;e<14.7;e+=.42)n.ring(0,e,0,2.18-(e-12.15)*.38,.045,"#8fa28b");n.cyl(0,13.45,0,0,2.36,3.25,"#739082",8),n.ring(0,11.98,0,2.52,.08,T.gold),n.cyl(0,15.25,0,.05,.34,.7,T.dark,8)}function B1(n){for(const e of[-1,1])for(const t of[-1,1])n.beam([e*2.5,0,t*2.5],[e,9,t],.16,T.wood);for(const e of[2,4,6,8]){const t=2.5-e*.15;n.beam([-t,e,t],[t,e,t],.12,T.wood),n.beam([-t,e,-t],[t,e,-t],.12,T.wood)}for(const e of[-2.35,2.35])n.beam([-2.35,.2,e],[1.15,4.1,e],.1,T.wood),n.beam([2.35,.2,e],[-1.15,4.1,e],.1,T.wood),n.beam([-1.15,4.1,e],[1.1,7.8,e],.09,T.wood),n.beam([1.15,4.1,e],[-1.1,7.8,e],.09,T.wood);for(let e=0;e<12;e++){const t=.28+e*.55,i=2.72-e*.28;n.beam([-.82,t,i],[.82,t,i],.075,T.wood),n.beam([-.92,t-.22,i+.18],[-.92,t+.34,i-.1],.06,T.wood),n.beam([.92,t-.22,i+.18],[.92,t+.34,i-.1],.06,T.wood)}n.box(0,8.5,0,3,.25,3,T.wood),n.rail([-1.48,8.65,-1.48],[1.48,8.65,-1.48],1,T.wood,.45),n.rail([-1.48,8.65,1.48],[1.48,8.65,1.48],1,T.wood,.45),n.roof(0,9.2,0,3.5,3.5,1,T.wood)}function $u(n,e,t){n.box(0,.2,0,e+.5,.4,t+.5,T.stone),n.box(0,1.6,0,e,2.8,t,"#b9a679"),n.roof(0,3,0,e+1,t+1,1.2,"#9e8968");for(let i=-e/2+.3;i<e/2;i+=.4)n.box(i,1.6,t/2+.05,.05,2.8,.1,T.wood);n.box(0,1.9,t/2+.12,e*.6,1.2,.15,T.dark),n.box(0,1.2,t/2+.4,e*.7,.14,.8,T.wood)}function z1(n){n.box(0,.2,0,5.45,.4,4.45,T.stone),n.box(0,1.68,0,5,2.95,3.85,"#54785d");for(let e=.4;e<3.1;e+=.23){n.box(0,e,1.98,5,.055,.1,"#42664f");for(const t of[-2.51,2.51])n.box(t,e,0,.07,.055,3.85,"#42664f")}n.hip(0,3.15,0,5.75,4.65,1.38,T.tile),n.box(0,1.86,2.02,3.55,1.22,.12,T.dark),n.box(0,1.12,2.16,3.75,.16,.72,"#ba6d47");for(const e of[-2.35,2.35])n.box(e,1.92,2.9,.18,3.84,.18,"#ba6d47"),n.beam([e,3.75,2.9],[e*.74,4.35,1.78],.085,"#ba6d47");n.box(0,3.88,2.9,5.2,.18,2.1,"#b85f42"),n.rail([-2.45,.4,2.7],[2.45,.4,2.7],.78,T.wood,.6)}function k1(n){h1(n)}function V1(n){n.box(0,2.1,5.01,35,3.6,.08,"#617b76"),n.box(0,2.1,0,36,4.2,10,"#b4bcb0"),n.box(0,4.7,0,38,.35,12,T.slate,[.1,0,0]);for(let e=-17;e<18;e+=2)n.box(e,2.1,5.12,1.7,3.7,.1,T.glass).userData.maxLod=1,n.box(e+.9,2.2,6,.12,4.4,.12,T.dark);n.box(0,.1,6,38,.2,3,T.stone)}function G1(n){n.box(0,.4,0,20,.8,7,T.stone);for(const e of[-4.5,4.5])n.box(e,3,0,1.1,5.5,4,"#986844");for(const e of[-7,7])n.box(e,2.8,0,5.5,4.8,2,"#a84c43"),n.hip(e,5.2,0,6.5,3.2,1.1,"#6b8373");n.box(0,5.5,0,9.6,1.3,4.2,"#a66049"),n.hip(0,6.1,0,12.5,7,1.6,"#658777"),n.box(0,7.2,0,8,1.4,3,T.wood),n.hip(0,7.9,0,11.6,5.8,1.5,"#577666");for(const e of[7.2,9])for(const t of[-5.6,5.6])n.tube([[t*.7,e,-2.7],[t,e,-2.7],[t*1.1,e+.6,-2.7]],.12,"#577666");for(let e=-3.6;e<4;e+=.65)n.box(e,7.2,1.55,.2,.8,.2,T.gold);for(const e of[-3.5,3.5]){n.tube([[-6.4,6.4,e],[-5.2,6.25,e],[0,6.25,e],[5.2,6.25,e],[6.4,6.8,e]],.1,"#779080");for(const t of[-4,-2,0,2,4])n.box(t,5.9,e*.72,.45,.28,.85,T.wood),n.box(t,6.12,e*.82,.65,.18,.65,T.gold)}}function H1(n){for(const e of[-1,1])n.prism([[1.3,0],[9,0],[9,2.5],[5,2.8],[2.5,4],[1.3,3.1]],.8,"#a9c5d0",[0,0,0]).scale.x=e;n.tube([[-1.25,0,.2],[-1.4,2.4,.2],[-.7,3.5,.2],[0,3.65,.2],[.7,3.5,.2],[1.4,2.4,.2],[1.25,0,.2]],.35,T.cream);for(const e of[-1,1]){n.ell(e*.8,3.8,.1,.65,.53,.38,T.cream),n.ring(e*.8,3.85,.48,.24,.07,"#597a85",[0,0,0]);for(let t=0;t<5;t++)n.tube([[e*1.1,3.1-t*.4,.45],[e*2.3,3-t*.42,.45],[e*3.5,3-t*.5,.45]],.035,"#507f94")}}function W1(n){n.cyl(0,.17,0,6.5,6.5,.34,"#b6a992",64);for(const e of[1,1.5,3,4.3,5.7,6.3])n.ring(0,.38,0,e,.055,e===3?"#d5c4a5":"#eee0c6");for(let e=0;e<24;e++){const t=e*Math.PI/12;n.beam([Math.sin(t)*1.5,.38,Math.cos(t)*1.5],[Math.sin(t+.12)*5.7,.38,Math.cos(t+.12)*5.7],.035,"#eadcc3")}for(let e=0;e<8;e++){const t=e*Math.PI/4,i=Math.sin(t)*3,s=Math.cos(t)*3;n.tube([[i,.4,s],[i*.8,1.45,s*.8],[i*.6,.4,s*.6]],.025,"#b2e0d9",12)}for(const e of[-5,5])n.cyl(e,.6,0,.25,.55,.9,"#7f968a")}function X1(n){for(const e of[-4,4])n.cyl(e,3.5,0,2.1,2.4,7,"#d4bea0",10),n.cyl(e,8,0,.25,2.6,3,"#a78475",10),n.ell(e,8.4,2,.5,.4,.1,"#dbca86"),n.win(e,5.5,2.05,.8,1.4,T.cream,!0);n.box(0,2.5,0,10,5,4,"#d4bea0"),n.door(0,0,2.15,1.3,2.5),n.tube([[-4,6.8,2],[-6,5,3],[-3,3.4,4],[-5,1.8,5],[-4,.4,7]],.62,"#cc6158",36)}function q1(n){n.box(0,1.35,0,2.1,2.7,3.5,"#477965"),n.box(0,2,0,2.13,1.3,3.53,T.cream);for(const e of[-1.79,1.79])n.box(0,2,e,1.7,1,.06,T.glass),n.box(0,2,e,.06,1,.1,T.cream),n.box(0,1.2,e,2.1,.17,.07,"#af514b");n.box(0,2.78,0,2.25,.18,3.7,T.cream);for(const e of[-1.08,1.08])for(const t of[-1.1,0,1.1])n.box(e,2,t,.07,.92,.85,T.glass),n.box(e,1.05,t,.08,.06,.85,T.gold);for(const e of[-1.84,1.84])n.ell(0,1.05,e,.17,.17,.05,T.cream,1),n.box(0,.25,e,1.8,.18,.18,T.dark);n.box(0,.12,0,1.7,.24,3.4,T.iron)}function Y1(n){const e=new vt;switch(n.kind){case"earth":M1(e);break;case"elevator":y1(e);break;case"cat":S1(e);break;case"warehouse":b1(e);break;case"skating":dd(e,!0);break;case"atrium":u1(e);break;case"ferris":_1(e);break;case"cafe":w1(e);break;case"satsuki":E1(e);break;case"totoro":T1(e);break;case"tatara":A1(e);break;case"boar":Qu(e);break;case"curse":Qu(e,!0);break;case"howl":C1(e);break;case"okino":P1(e);break;case"hatter":R1(e);break;case"bakery":D1(e);break;case"witchhouse":L1(e);break;case"carousel":I1(e);break;case"flying":N1(e);break;case"pilot":O1(e);break;case"clock":U1(e);break;case"witchlift":F1(e);break;case"watch":case"lookout":B1(e);break;case"hut":n.id==="dondokoshop"?z1(e):n.id==="dondokorest"?p1(e):n.id==="monorest"?m1(e):$u(e,n.width,n.depth);break;case"oven":k1(e);break;case"shop":V1(e);break;case"hotdog":Ar(e,7,5,3,1.5,"#a47d61",T.slate);break;case"gate":G1(e);break;case"mouth":H1(e);break;case"fountain":W1(e);break;case"catcastle":X1(e);break;case"tram":q1(e);break;case"rotunda":e.cyl(0,2,0,12,12,4,T.glass,64),e.cyl(0,4.2,0,13,13,.4,T.wood,64);for(let i=0;i<64;i++){const s=i*Math.PI/32;e.box(Math.sin(s)*12,2,Math.cos(s)*12,.11,4,.11,T.cream)}break;default:$u(e,n.width,n.depth)}const t=e.finish(!0);return n.kind==="carousel"&&t.add(v1()),n.kind==="fountain"&&t.traverse(i=>{if(i instanceof ft){const s=i.material.clone();s.polygonOffset=!0,s.polygonOffsetFactor=-4,s.polygonOffsetUnits=-6,i.material=s}}),t.name=n.id,t.userData.building=n,t.rotation.y=n.yaw*Math.PI/180,t}function pd(n,e,t,i,s=5){const r=n.getAttribute("position"),o=n.index,a=[],l=(h,f)=>{const m=[];for(let y=0;y<h.length;y++){const p=h[y],g=h[(y+1)%h.length],v=f(p),S=f(g);if(v>=-1e-8&&m.push(p),v>0&&S<0||v<0&&S>0){const M=v/(v-S);m.push([p[0]+(g[0]-p[0])*M,p[1]+(g[1]-p[1])*M])}}return m},c=h=>{for(let f=1;f<h.length-1;f++){const m=h[0],y=h[f],p=h[f+1],g=(y[0]-m[0])*(p[1]-m[1])-(y[1]-m[1])*(p[0]-m[0]);if(!(Math.abs(g)<1e-8))for(const v of g>0?[m,p,y]:[m,y,p])a.push(v[0],e(...v)+t,v[1])}},u=o?.count??r.count;for(let h=0;h<u;h+=3){const f=[0,1,2].map(v=>{const S=o?o.getX(h+v):h+v;return[r.getX(S),r.getZ(S)]}),m=Math.floor((Math.min(...f.map(v=>v[0]))-i[0])/s),y=Math.floor((Math.max(...f.map(v=>v[0]))-i[0])/s),p=Math.floor((Math.min(...f.map(v=>v[1]))-i[1])/s),g=Math.floor((Math.max(...f.map(v=>v[1]))-i[1])/s);for(let v=m;v<=y;v++)for(let S=p;S<=g;S++){const M=i[0]+v*s,C=i[1]+S*s;let D=l(f,I=>I[0]-M);D=l(D,I=>M+s-I[0]),D=l(D,I=>I[1]-C),D=l(D,I=>C+s-I[1]),!(D.length<3)&&(c(l(D,I=>M+C+s-I[0]-I[1])),c(l(D,I=>I[0]+I[1]-M-C-s)))}}const d=new St;return d.setAttribute("position",new rt(a,3)),d.computeVertexNormals(),d}function j1(n){return!(!["footway","pedestrian","path","steps","service","cycleway","living_street"].includes(n.highway)||n.area==="yes"||n.indoor==="yes"||n.tunnel&&n.tunnel!=="no"||["no","private"].includes(n.foot)||["no","private"].includes(n.access)&&!["yes","designated","permissive"].includes(n.foot))}function Z1(n){return n.filter(e=>{if(e.tags.leisure!=="garden"||e.points.length<4)return!1;const t=e.points.reduce((s,r)=>s+r[0],0)/e.points.length,i=e.points.reduce((s,r)=>s+r[1],0)/e.points.length;return t>-380&&t<-200&&i>-20&&i<155||t>170&&t<300&&i>-140&&i<80})}function K1(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const o=t[s],a=t[r];o[1]>e!=a[1]>e&&n<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(i=!i)}return i}function ur(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function J1(n,e){const t=[];for(const i of n){const s=i.points.map(o=>o[0]),r=i.points.map(o=>o[1]);for(let o=Math.min(...s);o<Math.max(...s);o+=1.35)for(let a=Math.min(...r);a<Math.max(...r);a+=1.35){const l=o+(ur(o,a,1)-.5)*.45,c=a+(ur(o,a,2)-.5)*.45;![[0,0],[.4,0],[-.4,0],[0,.4],[0,-.4]].every(([u,d])=>K1(l+u,c+d,i.points))||!e(l,c,.55)||t.push({x:l,z:c,scale:.7+ur(o,a,3)*.3,colour:Math.floor(ur(Math.floor(o/4),Math.floor(a/4),4)*4),garden:i.id})}}return t}function Q1(n,e,t){const i=J1(n,t),s=new qt;s.name="GIS 花田與花之廣場";const r=[];for(let h=0;h<5;h++){const f=h*Math.PI*2/5,m=new jo(1,0);m.scale(.16,.075,.24),m.rotateY(f),m.translate(Math.sin(f)*.13,.48,Math.cos(f)*.13),r.push(m)}const o=Dr(r);r.forEach(h=>h.dispose());const a=new ri(o,new yn({color:16777215,roughness:.9,flatShading:!0}),i.length),l=new ri(new oi(1,0),new yn({color:"#8ea76a",roughness:1,flatShading:!0}),i.length),c=new ri(new oi(.09,0),new yn({color:"#e2c575",roughness:1}),i.length),u=new Ot,d=["#d4a0ab","#efe4cf","#d8be79","#b795b8"].map(h=>new $e(h));i.forEach((h,f)=>{const m=e(h.x,h.z);u.position.set(h.x,m+.12,h.z),u.scale.setScalar(h.scale),u.rotation.set(0,ur(h.x,h.z,6)*Math.PI*2,0),u.updateMatrix(),a.setMatrixAt(f,u.matrix),a.setColorAt(f,d[h.colour]),u.position.y=m+.28,u.scale.set(.32*h.scale,.18,.32*h.scale),u.updateMatrix(),l.setMatrixAt(f,u.matrix),u.position.y=m+.12+.49*h.scale,u.scale.setScalar(h.scale),u.updateMatrix(),c.setMatrixAt(f,u.matrix)});for(const h of[a,l,c])h.receiveShadow=!0,h.computeBoundingSphere(),s.add(h);return s.userData={source:"Existing OSM garden polygons; flower palette interpreted from supplied official maps",beds:n.length,plants:i.length,plantingAccuracy:"Illustrative seasonal planting, not surveyed individual plants"},s}function md(n){const e=n.heights.length,t=n.heights[0].length,i=n.heights.map(a=>a.slice());let s=0;const r=a=>typeof a=="number"&&Number.isFinite(a);for(let a=0;a<e;a++)for(let l=0;l<t;l++){if(r(n.heights[a][l]))continue;let c=0,u=0,d=0;for(let h=1;h<Math.max(e,t)&&d<4;h++)for(let f=Math.max(0,a-h);f<=Math.min(e-1,a+h);f++)for(let m=Math.max(0,l-h);m<=Math.min(t-1,l+h);m++){if(Math.max(Math.abs(m-l),Math.abs(f-a))!==h)continue;const y=n.heights[f][m];if(!r(y))continue;const p=1/((m-l)**2+(f-a)**2);c+=y*p,u+=p,d++}if(!u)throw new Error("地形資料沒有可用標高，無法建立場景");i[a][l]=c/u,s++}return{sample:(a,l)=>{const c=Math.max(0,Math.min(t-1.000001,(a-n.bounds[0])/n.step)),u=Math.max(0,Math.min(e-1.000001,(l-n.bounds[1])/n.step)),d=Math.floor(c),h=Math.floor(u),f=c-d,m=u-h;return(i[h][d]*(1-f)+i[h][d+1]*f)*(1-m)+(i[h+1][d]*(1-f)+i[h+1][d+1]*f)*m},filled:i,repaired:s}}const $1=new Vs(1,1);let ir;function e_(n,e,t){ir||(ir=new yn({color:"#ffffff",roughness:.88}),ir.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec2 treeUv;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=vec3(0.,1.,0.);`).replace("#include <project_vertex>",`
     treeUv=uv;
     vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);
     vec2 treeSize=vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz));
     mvPosition.xy+=position.xy*treeSize;
     gl_Position=projectionMatrix*mvPosition;
    `),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 treeUv;`).replace("#include <color_fragment>",`#include <color_fragment>
    vec2 p=treeUv;
    vec2 qt=abs((p-vec2(.5,.74))/vec2(.30,.25));
    vec2 ql=abs((p-vec2(.31,.58))/vec2(.25,.22));
    vec2 qr=abs((p-vec2(.69,.58))/vec2(.25,.22));
    float top=max(qt.y,qt.x*.866+qt.y*.5);
    float left=max(ql.y,ql.x*.866+ql.y*.5);
    float right=max(qr.y,qr.x*.866+qr.y*.5);
    float crown=min(top,min(left,right));
    bool trunk=abs(p.x-.5)<.025&&p.y>.02&&p.y<.62;
    if(crown>1.&&!trunk)discard;
    diffuseColor.rgb=crown<=1.?diffuseColor.rgb:vec3(.246,.181,.112);
    `).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
    vec2 crownNormal=(p-vec2(.5,.74))/vec2(.30,.25);
    if(left<top&&left<=right)crownNormal=(p-vec2(.31,.58))/vec2(.25,.22);
    else if(right<top&&right<left)crownNormal=(p-vec2(.69,.58))/vec2(.25,.22);
    if(crown<=1.)normal=normalize(vec3(sign(crownNormal.x)*.32,crownNormal.y*.22,.92));
    `)},ir.customProgramCacheKey=()=>"park-lit-tree-billboard-v4-faceted");const i=ir,s=new ri($1,i,n.length),r=new Ot;return n.forEach((o,a)=>{r.position.set(o.x-e,o.y+o.h*.5,o.z-t),r.scale.set(o.type===1?8:6.5,o.h,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix),s.setColorAt(a,o.col)}),s.layers.set(1),s.name="極遠景面向鏡頭樹木",s.castShadow=!1,s.computeBoundingSphere(),s}function t_(){const n=new yn({color:"#8acbda",roughness:.4,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e={value:0},t=matchMedia("(prefers-reduced-motion: reduce)");return n.onBeforeCompile=i=>{i.uniforms.parkWaterTime=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 parkWaterPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
parkWaterPosition=(modelMatrix*vec4(position,1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 parkWaterPosition; uniform float parkWaterTime;`).replace("#include <color_fragment>",`#include <color_fragment>
    float waterNear=1.0-smoothstep(140.0,340.0,distance(cameraPosition,parkWaterPosition));
    if(waterNear>0.0){
     vec2 p=parkWaterPosition.xz;
     float wave=sin(p.x*.72+p.y*.28+parkWaterTime*.48);
     float crossWave=sin(p.x*.21-p.y*.57-parkWaterTime*.31);
     float shimmer=pow(max(0.0,wave*crossWave),5.0);
     diffuseColor.rgb*=1.0+waterNear*(wave*.022+crossWave*.018);
     diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.62,.83,.84),shimmer*waterNear*.12);
    }`)},n.customProgramCacheKey=()=>"park-water-ripples-v1",{material:n,update(){e.value=t.matches?0:performance.now()*.001}}}function n_(n,e,t){const[i,s,r,o]=n,a=[],l=[],c=[],u=(C,D)=>Array.from({length:Math.round((D-C)/5)+1},(I,_)=>C+_*5),d=[0,25,50,100,200,300,400,1e3,4e3],h=(C,D)=>t?[C,...Array.from({length:Math.ceil((2100-Math.abs(C))/25)},(I,_)=>C+D*Math.min((_+1)*25,2100-Math.abs(C))),D*3e3,D*8e3].sort((I,_)=>I-_):[...d.map(I=>C+D*I),D*8e3].sort((I,_)=>I-_),f=u(i,r),m=u(s,o),y=h(i,-1),p=h(r,1),g=h(s,-1),v=h(o,1);function S(C,D){const I=a.length/3;c.push({xs:C,zs:D,start:I});for(const _ of D)for(const x of C){const N=it.clamp(x,i,r),R=it.clamp(_,s,o),B=Math.hypot(x-N,_-R);a.push(x,t?t(x,_):e(N,R)*(1-it.smoothstep(B,0,400)),_)}for(let _=0;_<D.length-1;_++)for(let x=0;x<C.length-1;x++){const N=I+_*C.length+x,R=N+1,B=N+C.length,V=B+1;l.push(N,B,R,R,B,V)}}S(f,g),S(f,v),S(y,m),S(p,m),S(y,g),S(p,g),S(y,v),S(p,v);const M=new St;return M.setAttribute("position",new rt(a,3)),M.setIndex(l),M.computeBoundingSphere(),M.userData.patches=c,M}function i_(n,e){const t=n.userData.patches,i=n.getAttribute("position"),s=(r,o)=>{let a=0,l=r.length-1;for(;l-a>1;){const c=a+l>>1;r[c]<=o?a=c:l=c}return Math.min(a,r.length-2)};return(r,o)=>{for(const{xs:a,zs:l,start:c}of t){if(r<a[0]||r>a[a.length-1]||o<l[0]||o>l[l.length-1])continue;const u=s(a,r),d=s(l,o),h=(r-a[u])/(a[u+1]-a[u]),f=(o-l[d])/(l[d+1]-l[d]),m=c+d*a.length+u,y=m+1,p=m+a.length,g=p+1;return h+f<=1?i.getY(m)*(1-h-f)+i.getY(y)*h+i.getY(p)*f:i.getY(g)*(h+f-1)+i.getY(y)*(1-f)+i.getY(p)*(1-h)}return e(r,o)}}function gd(n,e,t){const i=[],s=new Set;for(let r=0;r<n.length;r+=9)if(![n[r+1],n[r+4],n[r+7]].every(o=>o<.03))for(let o=0;o<3;o++){const a=r+o*3,l=r+(o+1)%3*3;if(n[a+1]>.03||n[l+1]>.03)continue;const c=[`${n[a]},${n[a+2]}`,`${n[l]},${n[l+2]}`].sort().join("|");if(s.has(c))continue;s.add(c);const u=Math.max(1,Math.ceil(Math.hypot(n[l]-n[a],n[l+2]-n[a+2])/2));for(let d=0;d<u;d++){const h=it.lerp(n[a],n[l],d/u),f=it.lerp(n[a+2],n[l+2],d/u),m=it.lerp(n[a],n[l],(d+1)/u),y=it.lerp(n[a+2],n[l+2],(d+1)/u),p=Math.min(e,t(h,f))-.05,g=Math.min(e,t(m,y))-.05;e-p<=.051&&e-g<=.051||i.push(m,e,y,h,e,f,h,p,f,m,e,y,h,p,f,m,g,y)}}return i}async function s_(n,e){const t=await fetch("./data/plateau-buildings.json");if(!t.ok)throw new Error("周邊建物資料讀取失敗");const i=await t.json(),s=[],r=[],o=[];for(const c of i.buildings){if(e(c.x,c.z))continue;const u=c.positions;let d=-1/0;const h=new Vp;for(let f=0;f<u.length;f+=3)h.expandByPoint(new re(u[f],u[f+2]));o.push(h);for(let f=0;f<u.length;f+=3)d=Math.max(d,n(u[f],u[f+2]));for(let f=0;f<u.length;f+=3)s.push(u[f],u[f+1]+d,u[f+2]);s.push(...gd(u,d,n)),r.push(c.id)}const a=new St;a.setAttribute("position",new rt(s,3)),a.computeVertexNormals(),a.computeBoundingSphere();const l=new ft(a,new Qh({color:"#d6dbce"}));return l.name="PLATEAU 豐田市・園外實際建物",l.userData={source:"PLATEAU 豐田市 2023 LOD1",buildingIds:r,exteriorBuilding:!0,verticalPlacement:"Source-relative heights seated on illustrative exterior terrain; not absolute survey elevation."},l.userData.footprintBounds=o,l.userData.verticalPlacement="Source-relative heights seated on GSI-based context terrain with park seam blending; not absolute survey elevation.",l.castShadow=!1,l.receiveShadow=!1,l}function eh(n,e){const t=new yn({color:n,roughness:.88,flatShading:!0});return t.onBeforeCompile=i=>{i.uniforms.parkFocusDistance=e,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float parkFocusDistance;`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
    float depth=vViewPosition.z;
    float nearView=1.0-smoothstep(220.0,380.0,parkFocusDistance);
    float foreground=(1.0-smoothstep(55.0,85.0,depth))*(1.0-smoothstep(parkFocusDistance-12.0,parkFocusDistance-3.0,depth));
    float corridor=1.0-smoothstep(5.0+depth*.06,12.0+depth*.10,length(vViewPosition.xy));
    float retained=1.0-.88*nearView*foreground*corridor;
    float pattern=fract(dot(floor(gl_FragCoord.xy),vec2(.754877666,.569840296)));
    if(pattern>retained)discard;
   `)},t.customProgramCacheKey=()=>"park-foreground-cutaway-v1",t}function r_(n){const e=new Map,t=new O;for(const s of n){s.updateMatrix();let r=s.geometry.clone().applyMatrix4(s.matrix);if(r.index){const l=r;r=l.toNonIndexed(),l.dispose()}r.computeBoundingBox(),r.boundingBox.getCenter(t);const o=[s.material.uuid,s.castShadow,s.receiveShadow,Math.floor(t.x/256),Math.floor(t.z/256)].join("/");let a=e.get(o);a||(a={source:s,geometries:[]},e.set(o,a)),a.geometries.push(r)}const i=new qt;i.name="分區合併地景";for(const{source:s,geometries:r}of e.values()){const o=Dr(r,!1);if(!o)throw new Error("地景合併失敗：不相容的幾何屬性");o.computeBoundingSphere();const a=new ft(o,s.material);a.castShadow=s.castShadow,a.receiveShadow=s.receiveShadow,s.userData.exteriorBuilding&&(a.userData.exteriorBuilding=!0),i.add(a),r.forEach(l=>l.dispose())}return n.forEach(s=>s.geometry.dispose()),i.userData.batching={sourceMeshes:n.length,batches:i.children.length},i}function o_(n,e=80){const t=[];n.traverse(o=>{o instanceof ri&&t.push(o)});const i=new _t,s=new O,r=new $e;for(const o of t){const a=new Map;for(let l=0;l<o.count;l++){o.getMatrixAt(l,i),s.setFromMatrixPosition(i);const c=`${Math.floor(s.x/e)}/${Math.floor(s.z/e)}`;let u=a.get(c);u||(u=[],a.set(c,u)),u.push(l)}for(const l of a.values()){const c=new ri(o.geometry,o.material,l.length);c.position.copy(o.position),c.quaternion.copy(o.quaternion),c.scale.copy(o.scale),c.castShadow=o.castShadow,c.receiveShadow=o.receiveShadow,l.forEach((u,d)=>{o.getMatrixAt(u,i),c.setMatrixAt(d,i),o.instanceColor&&(o.getColorAt(u,r),c.setColorAt(d,r))}),c.computeBoundingSphere(),o.parent.add(c)}o.removeFromParent(),o.dispose()}}function th(n){n.updateWorldMatrix(!0,!0);const e=[];return n.traverse(t=>{if(!(t instanceof ft))return;let i;t instanceof ri?(t.computeBoundingSphere(),i=t.boundingSphere.clone()):(t.geometry.computeBoundingSphere(),i=t.geometry.boundingSphere.clone()),i.applyMatrix4(t.matrixWorld),e.push({mesh:t,sphere:i})}),n.visible=!0,(t,i)=>{for(const{mesh:s,sphere:r}of e){const o=Math.max(0,t.position.distanceTo(r.center)-r.radius);s.visible=o<i*(s.visible?1.1:1)}}}function xd(n,e){const t=[0];for(let o=1;o<n.length;o++)t.push(t[o-1]+Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1]));const i=t.at(-1)??0,s=e(...n[0]),r=e(...n.at(-1));return{distance:t,total:i,at:o=>i?it.lerp(s,r,o/i):s}}function a_(n,e,t,i){const s=n.features.find(l=>l.id===e),r=n.nodes[t];if(!s||!r)return r?i(...r.point):0;if(!s.tags.bridge||s.tags.bridge==="no")return i(...r.point);const o=s.nodes.indexOf(t),a=xd(s.points,i);return o<0?i(...r.point):a.at(a.distance[o])}async function vd(n,e){const[t,i]=await Promise.all(["context-geography","context-terrain"].map(async o=>{const a=await fetch(`./data/${o}.json`);if(!a.ok)throw new Error(`周邊 GIS 資料讀取失敗：${o}`);return a.json()})),s=md(i);return{source:t,height:(o,a)=>{const l=it.clamp(o,n[0],n[2]),c=it.clamp(a,n[1],n[3]),u=Math.hypot(o-l,a-c);if(u===0)return e(o,a);const d=s.sample(o,a)-100,h=it.smoothstep(u,0,50);return it.lerp(e(l,c),d,h)*(1-it.smoothstep(Math.max(Math.abs(o),Math.abs(a)),2100,8e3))}}}function l_(n,e,t,i=[]){const s=new qt,r=[],o=[[],[],[],[]];let a=0,l=0;for(const f of n.features){const{points:m,tags:y}=f;if(m.length<2)continue;if(y.highway&&y.area!=="yes"&&(!y.tunnel||y.tunnel==="no")&&!["construction","proposed"].includes(y.highway)){const R=["motorway","trunk","primary"].includes(y.highway)?9:["footway","path","steps","cycleway"].includes(y.highway)?2:5,B=y.bridge&&y.bridge!=="no"?xd(m,e):void 0;for(let V=1;V<m.length;V++){const Y=m[V-1],H=m[V],X=Math.hypot(H[0]-Y[0],H[1]-Y[1]);if(!X)continue;const W=Math.ceil(X/5),de=-(H[1]-Y[1])/X*R/2,te=(H[0]-Y[0])/X*R/2;for(let Se=0;Se<W;Se++){const ye=Y[0]+(H[0]-Y[0])*Se/W,Te=Y[1]+(H[1]-Y[1])*Se/W,Ge=Y[0]+(H[0]-Y[0])*(Se+1)/W,Ke=Y[1]+(H[1]-Y[1])*(Se+1)/W;if(Math.hypot((ye+Ge)/2,(Te+Ke)/2)>2e3||t((ye+Ge)/2,(Te+Ke)/2))continue;const ot=B?B.at(B.distance[V-1]+X*Se/W):void 0,ee=B?B.at(B.distance[V-1]+X*(Se+1)/W):void 0;for(const[fe,pe,Fe]of[[ye+de,Te+te,ot],[Ge+de,Ke+te,ee],[ye-de,Te-te,ot],[ye-de,Te-te,ot],[Ge+de,Ke+te,ee],[Ge-de,Ke-te,ee]])r.push(fe,(Fe??e(fe,pe))+.35,pe)}}}if(!y.building||y.building==="no"||m.length<4)continue;const p=m.reduce((R,B)=>R+B[0],0)/m.length,g=m.reduce((R,B)=>R+B[1],0)/m.length;if(Math.hypot(p,g)>2100||t(p,g)||i.some(R=>R.containsPoint(new re(p,g))))continue;const v=Number(y.height),S=Number(y["building:levels"]),M=Math.abs(Math.sin(p*12.9898+g*78.233)*43758.5453)%1,C=Number.isFinite(v)&&v>0?v:Number.isFinite(S)&&S>0?S*3:5+M*7;v>0?l++:a++;const D=new Ri(m.map(R=>new re(R[0],-R[1]))),I=new qi(D,{depth:Math.min(C,150),bevelEnabled:!1,steps:1});I.rotateX(-Math.PI/2);const _=Math.max(...m.map(R=>e(...R))),x=gd(Array.from(I.getAttribute("position").array),_,e),N=Math.min(3,Math.floor(M*4));if(I.translate(0,_,0),o[N].push(I),x.length){const R=new St;R.setAttribute("position",new rt(x,3)),R.setAttribute("uv",new rt(new Float32Array(x.length/3*2),2)),R.computeVertexNormals(),o[N].push(R)}}const c=new St;c.setAttribute("position",new rt(r,3)),c.computeVertexNormals();const u=new Hi({color:"#c5cbbd",side:un,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=new ft(c,u);d.name="OSM 周邊道路",s.add(d);const h=["#cbd2c3","#d8d6c8","#c9cfce","#d7cabe"];return o.forEach((f,m)=>{if(!f.length)return;const y=Dr(f);if(y){const p=new ft(y,new Qh({color:h[m]}));p.name=`OSM 周邊建物色階 ${m+1}`,p.userData.exteriorBuilding=!0,s.add(p)}f.forEach(p=>p.dispose())}),s.name="2km OSM 周邊道路與建築輪廓",s.userData={heightTagged:l,heightEstimated:a,heightNote:"OSM height where available; otherwise storeys × 3m or 6m illustrative massing. Not measured 3D geometry.",bridgeHeight:"OSM bridge ways interpolate a planar deck between endpoint terrain heights; no surveyed deck elevation."},s}function c_(n,e,t){const i=1-n[e];if(i<=t){n.fill(0),n[e]=1;return}const s=(i-t)/i;for(let r=0;r<n.length;r++)n[r]=r===e?n[r]+t:n[r]*s}function u_(n){if(n.userData.softened)return;n.userData.softened=!0;const e=n.levels.map(()=>({value:new re(0,1)})),t=n.levels.map((a,l)=>l===0?1:0),i=typeof matchMedia<"u"?matchMedia("(prefers-reduced-motion: reduce)"):void 0;n.levels.forEach((a,l)=>{const c=new Map;a.object.traverse(u=>{if(!(u instanceof ft))return;const d=h=>{let f=c.get(h);if(f)return f;f=h.clone();const m=h.onBeforeCompile.bind(h),y=h.customProgramCacheKey();return f.onBeforeCompile=(p,g)=>{m(p,g),p.uniforms.parkLodRange=e[l],p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 parkLodRange;`).replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
      float lodPattern=fract(dot(floor(gl_FragCoord.xy),vec2(.754877666,.569840296)));
      if(lodPattern<parkLodRange.x||lodPattern>=parkLodRange.y)discard;
    `)},f.customProgramCacheKey=()=>y+"-lod-crossfade-v1",c.set(h,f),f};u.material=Array.isArray(u.material)?u.material.map(d):d(u.material)})});const s=n.update.bind(n);let r=0,o=!1;n.update=a=>{s(a);const l=n.getCurrentLevel(),c=performance.now();o?c_(t,l,Math.min(1,(c-r)/(i?.matches?125:200))):(t.fill(0),t[l]=1,o=!0),r=c;let u=0;n.levels.forEach((d,h)=>{e[h].value.set(u,u+t[h]),u+=t[h],d.object.visible=t[h]>1e-5})}}function h_(n,e){const t=new qt;t.name="參考圖・階地與廣場附屬構成";const i=new vt,s=(f,m)=>{const y=n(f,m);i.beam([f,y,m],[f,y+2.55,m],.035,T.wood),i.cyl(f,y+2.6,m,0,1.25,.45,"#ba514a",12),i.cyl(f,y+.72,m,.48,.48,.1,T.wood,12);for(const p of[-1,1])i.box(f+p*.85,y+.45,m,.5,.12,.5,T.wood)};for(const[f,m]of[[451,-214],[455,-213],[447,-217],[469,-176]])s(f,m);for(let f=0;f<6;f++)for(let m=0;m<22;m++){const y=m/22*Math.PI*.85+.2,p=(m+1)/22*Math.PI*.85+.2,g=6+f*.8,v=472+Math.cos(y)*g,S=-211+Math.sin(y)*g*.62,M=472+Math.cos(p)*g,C=-211+Math.sin(p)*g*.62;e(v,S,.3)&&e(M,C,.3)&&(i.beam([v,n(v,S)+.16,S],[M,n(M,C)+.16,C],.16,"#bdab7f",6),m%3===0&&i.ell(v,n(v,S)+.36,S,.18,.28,.18,"#a8b16e",0))}const r=Bt.find(f=>f.id==="okino"),o=r.yaw*Math.PI/180,a=(f,m)=>[r.x+f*Math.cos(o)+m*Math.sin(o),r.z-f*Math.sin(o)+m*Math.cos(o)];for(const f of[-5.8,5.8])for(const m of[18,28])for(let y=0;y<30;y++){const p=y/30*Math.PI*2,g=(y+1)/30*Math.PI*2,[v,S]=a(f+Math.cos(p)*4,m+Math.sin(p)*3.2),[M,C]=a(f+Math.cos(g)*4,m+Math.sin(g)*3.2);e(v,S,.6)&&(i.beam([v,n(v,S)+.16,S],[M,n(M,C)+.16,C],.12,"#b9af8d"),y%2===0&&i.ell(v,n(v,S)+.4,S,.38,.3,.38,"#80976b",1))}const l=new vt;for(let f=-39;f<39;f+=6)l.box(33,3.65,f,4.8,.18,6.1,T.white,[0,0,(Math.round(f/6)%2?1:-1)*.06]),l.box(35,1.8,f,.14,3.6,.14,"#70847b");const c=Bt.find(f=>f.id==="skating"),u=l.finish(!0);u.position.set(c.x,n(c.x,c.z),c.z),u.rotation.y=c.yaw*Math.PI/180,t.add(u);const d=new vt;d.cyl(0,1.3,0,12.6,12.6,2.6,"#697c79",48),d.cyl(0,2.75,0,13.2,13.2,.3,T.white,64);for(let f=0;f<24;f++){const m=f*Math.PI/12;d.box(Math.sin(m)*12.7,1.35,Math.cos(m)*12.7,.12,2.5,.12,"#b5beb2")}for(let f=0;f<8;f++){const m=-.8+f*.14,y=Math.cos(m)*25,p=Math.sin(m)*25;d.box(y,1.8,p,7,3.6,5.8,"#c0bca9",[0,-m,0]),d.box(y,3.7,p,7.2,.24,6.3,"#ccd4cf",[0,-m,0])}for(const[f,m]of[[-9,-20],[12,17]])d.box(f,1.2,m,8,2.4,4,"#95b3a6"),d.box(f,2.5,m,8.6,.2,4.7,"#9cbcaf");const h=d.finish(!0);return h.position.set(-669.9,n(-669.9,-26.5)+.12,-26.5),h.name="摩天輪廣場・圓形休憩所及餐飲側翼",t.add(h),t.add(i.finish(!0)),t}const je=[-1e3,-750,830,1200];function zn(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const o=t[s],a=t[r];o[1]>e!=a[1]>e&&n<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(i=!i)}return i}const Ms=(n,e)=>n>je[0]&&n<je[2]&&e>je[1]&&e<je[3];function nh(n,e,t,i){const s=i[0]-t[0],r=i[1]-t[1],o=it.clamp(((n-t[0])*s+(e-t[1])*r)/(s*s+r*r||1),0,1);return Math.hypot(n-t[0]-s*o,e-t[1]-r*o)}function qa(n,e,t=.05,i=[]){const s=new Ri(n.map(h=>new re(h[0],-h[1])));s.holes=i.map(h=>new No(h.map(f=>new re(f[0],-f[1]))));const r=new Tc(s);r.rotateX(-Math.PI/2);const o=r.getAttribute("position"),a=r.index,l=[];function c(h,f,m,y=0){const p=[Math.hypot(h[0]-f[0],h[1]-f[1]),Math.hypot(f[0]-m[0],f[1]-m[1]),Math.hypot(m[0]-h[0],m[1]-h[1])],g=Math.max(...p);if(g>6&&y<18){const v=p.indexOf(g),S=[h,f,m],M=S[v],C=S[(v+1)%3],D=S[(v+2)%3],I=[(M[0]+C[0])/2,(M[1]+C[1])/2];c(M,I,D,y+1),c(I,C,D,y+1)}else for(const v of[h,f,m])l.push(v[0],e(...v)+t,v[1])}for(let h=0;h<a.count;h+=3){const f=[0,1,2].map(m=>{const y=a.getX(h+m);return[o.getX(y),o.getZ(y)]});c(f[0],f[1],f[2])}r.dispose();const u=new St;u.setAttribute("position",new rt(l,3));const d=pd(u,e,t,[je[0],je[1]]);return u.dispose(),d}function Ya(n){const e=n.length>2?n.slice(0,-1):n;return[e.reduce((t,i)=>t+i[0],0)/e.length,e.reduce((t,i)=>t+i[1],0)/e.length]}async function d_(n){n("讀取公尺座標與地形…");const[e,t]=await Promise.all(["geography","terrain"].map(async w=>{const A=await fetch(`./data/${w}.json`);if(!A.ok)throw new Error(`資料讀取失敗：${w}`);return A.json()})),i=md(t),s=(w,A)=>i.sample(w,A)-100,r=new qt;r.name="Ghibli Park · metres / east-up-south",r.userData.elevationRepairs={missingSamples:i.repaired,method:"Inverse-distance interpolation of neighbouring measured samples; raw DEM retained"};const o=e.features.find(w=>w.id==="w231420392"),a=e.features.filter(w=>["w232196817","w134546861","w134546862","w231411027","w231410266","w233350226"].includes(w.id)),l=(w,A)=>Ms(w,A)&&(!o||zn(w,A,o.points)||a.some(E=>zn(w,A,E.points))),c=e.features.filter(w=>w.points.length>1&&w.points.some(A=>Ms(...A))),u=c.filter(w=>w.tags.natural==="water"&&w.points.length>3&&w.points.every(A=>Ms(...A))).map(w=>{const A=w.points.map(E=>s(...E)).sort((E,F)=>E-F);return{f:w,h:A[Math.floor(A.length*.5)],bounds:[Math.min(...w.points.map(E=>E[0]))-9,Math.min(...w.points.map(E=>E[1]))-9,Math.max(...w.points.map(E=>E[0]))+9,Math.max(...w.points.map(E=>E[1]))+9]}}),d=Bt.map(w=>({...w,y:w.elevation??s(w.x,w.z)})),h=(w,A)=>{let E=s(w,A);for(const F of d){const Z=F.yaw*Math.PI/180,j=w-F.x,he=A-F.z,le=j*Math.cos(Z)-he*Math.sin(Z),Pe=j*Math.sin(Z)+he*Math.cos(Z),Le=Math.max(Math.abs(le)-F.width/2-1.2,Math.abs(Pe)-F.depth/2-1.2);if(Le<7){const Ne=1-it.smoothstep(Le,0,7),Xe=F.id==="earth"?F.y-6*(1-it.smoothstep(Pe,-6,-1)):F.y;E=it.lerp(E,Xe,Ne)}}for(const F of u){if(w<F.bounds[0]||A<F.bounds[1]||w>F.bounds[2]||A>F.bounds[3])continue;const Z=F.f.holes?.some(he=>zn(w,A,he));if(zn(w,A,F.f.points)&&!Z)return F.h-.35;let j=9;for(const he of[F.f.points,...F.f.holes??[]])for(let le=1;le<he.length;le++)j=Math.min(j,nh(w,A,he[le-1],he[le]));j<8&&(E=it.lerp(F.h+.07,E,it.smoothstep(j,0,8)))}return E},f=5,m=Math.round((je[2]-je[0])/f)+1,y=Math.round((je[3]-je[1])/f)+1,p=new Float32Array(m*y).fill(NaN),g=(w,A)=>{const E=A*m+w;return Number.isNaN(p[E])&&(p[E]=h(je[0]+w*f,je[1]+A*f)),p[E]},v=(w,A)=>{const E=it.clamp((w-je[0])/f,0,m-1.000001),F=it.clamp((A-je[1])/f,0,y-1.000001),Z=Math.floor(E),j=Math.floor(F),he=E-Z,le=F-j;return he+le<=1?g(Z,j)+(g(Z+1,j)-g(Z,j))*he+(g(Z,j+1)-g(Z,j))*le:g(Z+1,j+1)+(g(Z,j+1)-g(Z+1,j+1))*(1-he)+(g(Z+1,j)-g(Z+1,j+1))*(1-le)},S=vd(je,v),M=c.filter(w=>(w.tags.natural==="wood"||w.tags.landuse==="forest")&&w.points.length>3),C=c.filter(w=>["grass","meadow","farmland"].includes(w.tags.landuse)||["garden","pitch","playground"].includes(w.tags.leisure)||w.tags.amenity==="parking");n("建立連續地形、湖岸與通路…");const D=new Vs(je[2]-je[0],je[3]-je[1],366,390);D.rotateX(-Math.PI/2),D.translate((je[0]+je[2])/2,0,(je[1]+je[3])/2);const I=D.getAttribute("position"),_=[],x=[],N=[],R=new $e;for(let w=0;w<I.count;w++){const A=I.getX(w),E=I.getZ(w);I.setY(w,g(w%m,Math.floor(w/m)));const F=l(A,E),Z=F?Math.sin(A*.036)*Math.cos(E*.041)*.018+Math.sin(A*.11+E*.09)*.008:0;R.set(F?"#a1b573":"#dce2d4"),R.offsetHSL(0,0,Z),_.push(R.r,R.g,R.b),x.push(F?0:1),N.push(Z)}D.setAttribute("color",new rt(_,3)),D.setAttribute("contextWeight",new rt(x,1)),D.computeVertexNormals();const B=new yn({vertexColors:!0,roughness:1,flatShading:!0});B.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
attribute float contextWeight; varying float vContextWeight;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vContextWeight=contextWeight;`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying float vContextWeight;`).replace("#include <opaque_fragment>",`outgoingLight=mix(outgoingLight,diffuseColor.rgb,vContextWeight);
#include <opaque_fragment>`)},B.customProgramCacheKey=()=>"park-context-unlit-v1";const V=new ft(D,B);V.name="GSI DEM / 5m source resampled to 10m",V.receiveShadow=!0,r.add(V);const Y=w=>{const A=new $e(w),E=V.geometry.getAttribute("color");for(let F=0;F<E.count;F++){const Z=(x[F]===0?A.clone():new $e(r.userData.exteriorGroundColor||"#dce2d4")).offsetHSL(0,0,N[F]);E.setXYZ(F,Z.r,Z.g,Z.b)}E.needsUpdate=!0,r.userData.groundColor=w},H=await S,X=n_(je,v,H.height),W=new ft(X,new Hi({color:"#dce2d4",fog:!0}));W.name="GSI 周邊地形・2km 外漸隱示意",r.add(W),r.userData.exteriorGroundColor="#dce2d4";const de=w=>{const A=new $e(w),E=V.geometry.getAttribute("color");r.userData.exteriorGroundColor=w;for(let F=0;F<E.count;F++){if(x[F]!==1)continue;const Z=A.clone().offsetHSL(0,0,N[F]);E.setXYZ(F,Z.r,Z.g,Z.b)}E.needsUpdate=!0,W.material.color.set(w)};H.height=i_(X,v),r.userData.contextHeight=H.height;const te=await s_(H.height,l);r.add(te);const Se=l_(H.source,H.height,l,te.userData.footprintBounds);r.add(Se);const ye=w=>{r.userData.exteriorRoadColor=w,Se.getObjectByName("OSM 周邊道路")?.material.color.set(w)},Te=w=>{const A=it.clamp(w,0,1);r.userData.exteriorBuildingOpacity=A,r.traverse(E=>{if(!E.userData.exteriorBuilding)return;const F=E,Z=Array.isArray(F.material)?F.material:[F.material];for(const j of Z){if(!j)return;j.transparent=A<.999,j.opacity=A,j.depthWrite=A>.999,j.needsUpdate=!0}})},Ge=t_();for(const w of u){if(!l(...Ya(w.f.points)))continue;const A=qa(w.f.points,()=>w.h,.12,w.f.holes),E=new ft(A,Ge.material);E.name=w.f.tags.name||"池塘",E.receiveShadow=!0,E.onBeforeRender=Ge.update,r.add(E)}const Ke=[],ot=[],ee=[],fe=new vt,pe=new vt,Fe=new Map;function ze(w,A,E){for(let F=Math.floor((Math.min(w[0],A[0])-E-6)/16);F<=Math.floor((Math.max(w[0],A[0])+E+6)/16);F++)for(let Z=Math.floor((Math.min(w[1],A[1])-E-6)/16);Z<=Math.floor((Math.max(w[1],A[1])+E+6)/16);Z++){const j=F+","+Z;(Fe.get(j)??(Fe.set(j,[]),Fe.get(j))).push({a:w,b:A,width:E})}}const We=(w,A,E)=>!(Fe.get(Math.floor(w/16)+","+Math.floor(A/16))??[]).some(F=>nh(w,A,F.a,F.b)<F.width/2+E);function ct(w,A,E,F="path",Z){if(A.some(Qe=>!l(...Qe))){let Qe=[],nt=0;for(const bt of A)l(...bt)?Qe.push(bt):(Qe.length>1&&ct(w+"-clip"+nt++,Qe,E,F,Z),Qe=[]);Qe.length>1&&ct(w+"-clip"+nt,Qe,E,F,Z);return}if(A.length<2)return;const j=[],he=[],le=[];for(let Qe=1;Qe<A.length;Qe++){const nt=A[Qe-1],bt=A[Qe];if(!Ms(...nt)||!Ms(...bt))continue;ze(nt,bt,E);const Ve=Math.max(1,Math.ceil(Math.hypot(bt[0]-nt[0],bt[1]-nt[1])/2));for(let Lt=0;Lt<Ve;Lt++)le.push([it.lerp(nt[0],bt[0],Lt/Ve),it.lerp(nt[1],bt[1],Lt/Ve)])}if(!le.length)return;le.push(A[A.length-1]);const Pe=v(...le[0]),Le=v(...le[le.length-1]),Ne=(Qe,nt)=>Z??(F==="bridge"?it.lerp(Pe,Le,nt/(le.length-1))+.3:v(...Qe)),Xe=[];le.forEach((Qe,nt)=>{const bt=le[Math.max(0,nt-1)],Ve=le[Math.min(le.length-1,nt+1)],Lt=Ve[0]-bt[0],pt=Ve[1]-bt[1],an=Math.hypot(Lt,pt)||1,Kt=-pt/an,dn=Lt/an;let ln=Ne(Qe,nt)+.18;F==="stairs"&&(ln=Math.round(ln/.17)*.17),Xe.push([Qe[0],ln,Qe[1]]);for(const at of[-1,1]){const wt=Qe[0]+Kt*E/2*at,Pn=Qe[1]+dn*E/2*at;j.push(wt,F==="bridge"||F==="stairs"||Z!==void 0?ln:v(wt,Pn)+.18,Pn)}if(nt){const at=nt*2;he.push(at-2,at-1,at,at-1,at+1,at)}if(F==="bridge"&&nt>0){const at=Xe[nt-1];for(const wt of[-1,1])pe.beam([at[0]+Kt*E/2*wt,at[1]+1.05,at[2]+dn*E/2*wt],[Qe[0]+Kt*E/2*wt,ln+1.05,Qe[1]+dn*E/2*wt],.045,T.wood),nt%2===0&&pe.beam([Qe[0]+Kt*E/2*wt,ln,Qe[1]+dn*E/2*wt],[Qe[0]+Kt*E/2*wt,ln+1.05,Qe[1]+dn*E/2*wt],.05,T.wood)}});const tt=new St;tt.setAttribute("position",new rt(j,3)),tt.setIndex(he),tt.computeVertexNormals(),(F==="path"||F==="ramp")&&Z===void 0?(ot.push(pd(tt,v,.22,[je[0],je[1]])),tt.dispose()):(F==="stairs"?ee:ot).push(tt),Ke.push({id:w,kind:F,width:E,points:Xe,source:w.startsWith("w")?"OpenStreetMap":"照片／地圖保守補接"})}for(const w of c){const A=w.tags;if(!j1(A))continue;const E=parseFloat(A.width)||{pedestrian:5,service:4.5,cycleway:3.5,steps:2.2}[A.highway]||2.6;ct(w.id,w.points,Math.min(10,E),A.bridge==="yes"?"bridge":A.highway==="steps"?"stairs":A.incline?"ramp":"path")}const Je=c.filter(w=>w.tags.highway==="pedestrian"&&w.tags.area==="yes"||w.tags.area==="yes"&&w.tags.highway==="footway"),ae=[],ve=new yn({color:"#ebd6a1",roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});for(const w of Je){if(w.points.length<3||!w.points.every(E=>l(...E)))continue;const A=new ft(qa(w.points,v,.13),ve);A.receiveShadow=!0,ae.push(A)}const ce=[],we=[],U=[];n("組裝五區建築與地標…");for(const w of d){const A=Y1(w);A.position.set(w.x,w.y+.16,w.z),A.userData.baseHeight=w.y+.16,ce.push(A),r.add(A);const E=(w.viewYaw??w.yaw)*Math.PI/180,F=E-w.yaw*Math.PI/180,Z=Math.abs(Math.sin(F))*w.width/2+Math.abs(Math.cos(F))*w.depth/2+1.8,j=w.x+Math.sin(E)*Z,he=w.z+Math.cos(E)*Z;U.push({id:w.id,position:[j,v(j,he)+.16,he]}),we.push({id:w.id,center:[w.x,w.y+w.height/2,w.z],size:[w.width,w.height,w.depth],yaw:w.yaw});let le,Pe=22;for(const Xe of Ke)if(Xe.kind!=="stairs"&&Xe.kind!=="bridge")for(const tt of Xe.points){const Qe=Math.hypot(tt[0]-j,tt[2]-he);Qe<Pe&&(Pe=Qe,le=[tt[0],tt[2]])}le&&Pe>1.5&&ct("entrance-"+w.id,[[j,he],le],w.id==="warehouse"?5:2.3);const Le=new vt;["earth","fountain","tram"].includes(w.id)?w.id==="earth"&&Le.box(0,-.14,5.7,w.width+.8,.28,3.4,"#a69e87"):Le.box(0,-.14,0,w.width+.8,.28,w.depth+.8,w.zone==="witch"?"#aaa38e":"#a69e87");const Ne=Le.finish();Ne.position.copy(A.position),Ne.rotation.y=A.rotation.y,r.add(Ne)}const He=d.find(w=>w.id==="elevator");ct("skybridge",[[-12,-125],[-12,-67]],4,"bridge",He.y+13.2);for(const w of[-114,-90])fe.box(-12,He.y+6,w,1.2,14,1.2,T.stone);const Ae=new O(Wa[0],v(...Wa)+.4,Wa[1]),ke=new O(Xa[0],v(...Xa)+.4,Xa[1]);let Me=0;for(let w=0;w<=40;w++){const A=Ae.clone().lerp(ke,w/40);Me=Math.max(Me,v(A.x,A.z)+.3-A.y)}Ae.y+=Me,ke.y+=Me;const L=ke.clone().sub(Ae),b=Math.atan2(L.x,L.z),G=new O(Math.cos(b),0,-Math.sin(b));Ke.push({id:"slope-tram",kind:"tram",width:2.2,points:[Ae.toArray(),ke.toArray()],source:"照片／地圖推估斜行軌道；非步道"});for(const w of[-.65,.65])fe.beam(Ae.clone().addScaledVector(G,w).toArray(),ke.clone().addScaledVector(G,w).toArray(),.07,T.iron);for(let w=0;w<=30;w++){const A=Ae.clone().lerp(ke,w/30);fe.beam(A.clone().addScaledVector(G,-1).toArray(),A.clone().addScaledVector(G,1).toArray(),.09,T.wood),w%4===0&&fe.box(A.x,(A.y+v(A.x,A.z))/2,A.z,.4,Math.max(.1,A.y-v(A.x,A.z)),.4,T.stone)}for(const w of[Ae,ke]){const A=new vt;A.box(2,.05,0,2.4,.25,4.2,T.stone),A.box(2,3,0,3,.2,4.7,T.slate);for(const F of[-1.8,1.8])A.box(3,1.5,F,.15,3,.15,T.wood);const E=A.finish(!0);E.position.copy(w),E.rotation.y=b,r.add(E)}const J=ce.find(w=>w.name==="tram"),ue=ce.find(w=>w.name==="carousel").getObjectByName("旋轉木馬・雙層轉盤與坐騎");J.rotation.y=b,J.position.copy(Ae).add(new O(0,.18,0));const k=w=>{J.position.copy(Ae).lerp(ke,g1(w)).y+=.18,ue.rotation.y=w*Math.PI/24},se=await fetch("./data/facilities.json"),ne=se.ok?await se.json():[],oe=new vt,Ee=(w,A,E,F=T.green)=>{oe.cyl(w,A+1.35,E,.07,.09,2.7,T.dark,7),oe.box(w,A+2.35,E,.72,.62,.12,F)};for(const w of ne){const{x:A,z:E}=w,F=v(A,E),Z=d.some(j=>Math.hypot(A-j.x,E-j.z)<Math.max(j.width,j.depth)*.6+4);if(l(A,E))if(w.kind==="接駁"){oe.box(A,F+.08,E,5.8,.16,2.5,"#c8c1aa");for(const j of[-2.25,2.25])for(const he of[-.8,.8])oe.cyl(A+j,F+1.25,E+he,.07,.08,2.5,T.iron,7);oe.box(A,F+2.55,E,5.6,.18,2.4,"#71898a"),oe.box(A,F+.55,E-.72,3.2,.16,.48,T.wood),Ee(A-3.25,F,E,"#6f8e86")}else if(w.kind==="入口"){for(const j of[-2.1,2.1])oe.box(A+j,F+1.55,E,.5,3.1,.5,T.stone);oe.beam([A-2.35,F+2.75,E],[A+2.35,F+2.75,E],.18,T.wood,8),Ee(A+3,F,E,T.green)}else if(w.kind==="洗手間"&&!Z)oe.box(A,F+1.25,E,4.8,2.5,3.2,"#d7c7a6"),oe.hip(A,F+2.5,E,5.3,3.7,1.1,"#71817b"),oe.door(A,F,E+1.66,1.05,2.05,T.dark),Ee(A-3,F,E,"#81748b");else if(w.kind==="服務"&&!Z)oe.box(A,F+1.3,E,5.2,2.6,3.8,T.cream),oe.hip(A,F+2.6,E,5.8,4.4,1.25,T.tile),oe.box(A,F+1.25,E+1.96,2.2,1.05,.12,T.glass),Ee(A-3.4,F,E,"#628695");else if(w.kind==="休憩"){for(const j of[-2,2])for(const he of[-1.4,1.4])oe.cyl(A+j,F+1.45,E+he,.08,.1,2.9,T.wood,7);oe.hip(A,F+2.9,E,5.2,4,1.15,"#a9855f");for(const j of[-.75,.75])oe.box(A,F+.48,E+j,3.4,.16,.52,T.wood)}else if(w.kind==="停車")oe.box(A,F+1.1,E,2.7,2.2,2.3,"#d4d2c2"),oe.hip(A,F+2.2,E,3.1,2.7,.65,"#697a7d"),oe.box(A,F+1.1,E+1.18,1.5,.8,.1,T.glass),Ee(A-2.2,F,E,"#5d8594");else if(w.kind==="景觀"){Ee(A,F,E,T.green);for(const j of[-2,0,2])oe.box(A+j,F+.48,E+1.2,1.7,.14,.48,T.wood);/觀景|廣場|花田|花壇|庭園/.test(w.name)&&oe.rail([A-3.5,F,E-2.2],[A+3.5,F,E-2.2],1,T.wood,.9)}else Ee(A,F,E,"#628695")}const Q=oe.finish(!0);Q.name="設施周邊用途量體",r.add(Q);const ie=Tr(7319);for(let w=0;w<5;w++){const A=477+w*3,E=-156+w*5,F=v(A,E);fe.box(A,F+.07,E,23-w*2,.12,4.2,"#91a274");for(let Z=0;Z<25;Z++){const j=A-10+ie()*20,he=E-1.7+ie()*3.4;fe.beam([j,v(j,he),he],[j,v(j,he)+.55,he],.035,"#8eaa63")}}for(const w of["howl","clock","pilot"]){const A=d.find(E=>E.id===w);for(let E=0;E<28;E++){const F=E/28*Math.PI*2,Z=A.width*.62,j=A.x+Math.sin(F)*Z,he=A.z+Math.cos(F)*A.depth*.63;We(j,he,.7)&&fe.ell(j,v(j,he)+.2,he,.7+ie(),.5+ie()*.9,.65+ie(),E%2?"#a5a08d":"#b1a995",0)}}const Be=new vt,Ie=["#d4a0ab","#efe4cf","#d8be79","#b795b8","#819760"];for(const w of d.filter(A=>["earth","okino","satsuki","witchhouse","bakery"].includes(A.id)))for(let A=0;A<64;A++){const E=ie()*Math.PI*2,F=Math.max(w.width,w.depth)*.65+ie()*4,Z=w.x+Math.sin(E)*F,j=w.z+Math.cos(E)*F;We(Z,j,.6)&&Be.ell(Z,v(Z,j)+.42,j,.34,.29,.34,Ie[A%Ie.length],0)}const Ce=new qt;Ce.name="近景花朵",Ce.add(Be.finish(!1,80),Q1(Z1(c),v,(w,A,E)=>l(w,A)&&We(w,A,E)&&!u.some(F=>zn(w,A,F.f.points)))),o_(Ce),r.add(Ce);for(const w of Ke.filter(A=>A.kind==="path"))if(!(w.points.length<15))for(let A=12;A<w.points.length;A+=30){const E=w.points[A],F=w.points[A-1],Z=E[0]-F[0],j=E[2]-F[2],he=Math.hypot(Z,j)||1,le=E[0]-j/he*(w.width/2+1),Pe=E[2]+Z/he*(w.width/2+1),Le=v(le,Pe);if(!(!Ms(le,Pe)||u.some(Ne=>zn(le,Pe,Ne.f.points)))&&(pe.beam([le,Le,Pe],[le,Le+3,Pe],.045,T.dark),pe.cyl(le,Le+3.15,Pe,.18,.12,.4,"#e5d7a6",6),pe.cyl(le,Le+3.42,Pe,0,.28,.2,T.dark,6),A%60===12)){pe.box(le+1.1,Le+.48,Pe,1.7,.12,.5,T.wood),pe.box(le+1.1,Le+.78,Pe-.2,1.7,.45,.08,T.wood);for(const Ne of[-.6,.6])pe.box(le+1.1+Ne,Le+.24,Pe,.08,.48,.38,T.dark)}}r.add(fe.finish(),h_(v,We));const qe=pe.finish(!1,80);qe.name="近景欄杆、座椅與路燈",r.add(qe);const z=th(qe),_e=th(Ce);for(const[w,A]of[[ot,"#eddbac"],[ee,"#c7bea3"]]){if(!w.length)continue;const E=w.map(Z=>Z.index?Z.toNonIndexed():Z),F=Dr(E);if(F){const Z=new ft(F,new yn({color:A,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-3}));Z.receiveShadow=!0,Z.name="可通行道路",r.add(Z)}new Set([...w,...E]).forEach(Z=>Z.dispose())}const me=new Set([...Bt.map(w=>w.osm),"w232297268","w232297267","w232297269","w231490039","w231490040","w231490674"]);for(const w of c.filter(A=>A.tags.building&&!me.has(A.id))){const[A,E]=Ya(w.points);if(!w.points.every(le=>l(...le))||Bt.some(le=>Math.hypot(A-le.x,E-le.z)<Math.max(le.width,le.depth)*.6))continue;const F=new Ri(w.points.map(le=>new re(le[0],-le[1]))),Z=Math.min(16,parseFloat(w.tags.height)||Number(w.tags["building:levels"]||1)*3.4),j=new qi(F,{depth:Z,bevelEnabled:!1});j.rotateX(-Math.PI/2),j.translate(0,s(A,E),0);const he=new ft(j,ud("#b7bcb0"));he.userData.exteriorBuilding=!0,he.castShadow=!0,he.receiveShadow=!0,ae.push(he)}const Re=new Map;for(const w of C){if(w.points.length<4||!l(...Ya(w.points)))continue;const A=w.tags.amenity==="parking"?"#c1c2b9":w.tags.leisure==="pitch"?"#dccba6":"#b0c488";let E=Re.get(A);E||(E=new yn({color:A,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Re.set(A,E));const F=new ft(qa(w.points,v,.09),E);F.receiveShadow=!0,ae.push(F)}r.add(r_(ae)),n("種植分級森林與林間景觀…"),await new Promise(w=>setTimeout(w,0));const xe=[];let $=0;const De=96,Ye=new Map;for(let w=je[0]+7;w<je[2]-5;w+=7)for(let A=je[1]+7;A<je[3]-5;A+=7){const E=w+(ie()-.5)*6,F=A+(ie()-.5)*6;if(!l(E,F))continue;const Z=M.some(tt=>zn(E,F,tt.points)),j=Bt.some(tt=>Math.hypot(E-tt.x,F-tt.z)<Math.max(tt.width,tt.depth)*.8+9),he=Je.some(tt=>zn(E,F,tt.points)),le=C.some(tt=>zn(E,F,tt.points));if(j||he||le||!We(E,F,4.1)||u.some(tt=>zn(E,F,tt.f.points))||!Z&&ie()>.055||Z&&ie()>.82)continue;const Pe=6+ie()*8,Le=Math.floor(ie()*3),Ne=new $e(["#81ad59","#a3bd65","#658e54","#b5c977","#769e60"][Math.floor(ie()*5)]),Xe=Math.floor(E/De)+","+Math.floor(F/De);(Ye.get(Xe)??(Ye.set(Xe,[]),Ye.get(Xe))).push({x:E,y:v(E,F),z:F,h:Pe,type:Le,col:Ne}),$++}const ut=new Ot,xt={value:9999},Tn=eh("#88765e",xt),An=eh("#ffffff",xt);for(const[w,A]of Ye){const[E,F]=w.split(",").map(Number).map(j=>j*De+De/2),Z=new Lo;Z.position.set(E,0,F);for(const j of[!1,!0]){const he=new qt,le=new ri(new bi(.12,.22,1,5),Tn,A.length),Pe=new ri(new oi(1,j?0:1),An,A.length*(j?1:3));A.forEach((Le,Ne)=>{ut.position.set(Le.x-E,Le.y+Le.h*.25,Le.z-F),ut.scale.set(1,Le.h*.5,1),ut.rotation.set(0,0,0),ut.updateMatrix(),le.setMatrixAt(Ne,ut.matrix);for(let Xe=0;Xe<(j?1:3);Xe++){const tt=Le.type===0?2.6:Le.type===1?3.6:2.9;ut.position.set(Le.x-E+(Xe===1?1.1:Xe===2?-1:0),Le.y+Le.h*(j?.69:.6+Xe*.1),Le.z-F+(Xe===2?1:0)),ut.scale.set(tt*(Xe?.78:1),Le.h*(Le.type===0?.43:.28)*(Xe?.78:1),tt*.88),ut.rotation.set(0,Ne*.713,0),ut.updateMatrix(),Pe.setMatrixAt(Ne*(j?1:3)+Xe,ut.matrix),Pe.setColorAt(Ne*(j?1:3)+Xe,Le.col)}}),le.castShadow=!j,Pe.castShadow=!j,Pe.receiveShadow=!0,le.computeBoundingSphere(),Pe.computeBoundingSphere(),he.add(le,Pe),Z.addLevel(he,j?320:0,.15)}Z.addLevel(e_(A,E,F),1050,.15),xe.push(Z),r.add(Z)}const Di=new vt,ci=52,Qi=-89,$i=v(ci,Qi);Di.cyl(ci,$i+.35,Qi,3,3,.7,T.stone,28),Di.cyl(ci,$i+4,Qi,.15,.35,8,T.wood,7);for(let w=0;w<5;w++)Di.cyl(ci,$i+4+w*1.5,Qi,0,3.5-w*.5,4,"#68876e",10);r.add(Di.finish());const Li=new qt;Li.name="高空低多邊形鳥群與漂浮雲體",r.add(Li);const Cn=new yn({color:"#52635d",roughness:1,flatShading:!0}),qs=new oi(1,0),Ys=new qo(.3,2.3,3),js=[],es=Math.floor(Math.random()*2147483647),Mt=Tr(es),ts=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;for(let w=0;w<10;w++){const A=new qt,E=new ft(qs,Cn),F=new ft(Ys,Cn),Z=new ft(Ys,Cn);E.scale.set(.72,.34,1.18),F.position.set(-.78,.04,-.02),Z.position.set(.78,.04,-.02),F.rotation.set(.18,0,-Math.PI/2),Z.rotation.set(-.18,0,Math.PI/2),F.scale.set(1,1,.84),Z.scale.set(1,1,.84),A.add(E,F,Z),A.renderOrder=4,A.traverse(j=>{j.castShadow=!1,j.receiveShadow=!1,j.frustumCulled=!1}),Li.add(A),js.push({bird:A,left:F,right:Z,cx:je[0]+180+Mt()*(je[2]-je[0]-360),cz:je[1]+180+Mt()*(je[3]-je[1]-360),radius:110+Mt()*300,phase:Mt()*Math.PI*2,speed:.65+Mt()*.7,height:95+Mt()*75,flapPhase:Mt()*Math.PI*2})}const Nr=new Tt({uniforms:{opacity:{value:.14}},vertexShader:"varying vec3 vCloudNormal;varying vec3 vCloudViewDirection;void main(){vCloudNormal=normalize(normalMatrix*normal);vec4 viewPosition=modelViewMatrix*vec4(position,1.0);vCloudViewDirection=normalize(-viewPosition.xyz);gl_Position=projectionMatrix*viewPosition;}",fragmentShader:"uniform float opacity;varying vec3 vCloudNormal;varying vec3 vCloudViewDirection;void main(){float facing=abs(dot(normalize(vCloudNormal),normalize(vCloudViewDirection)));float softEdge=smoothstep(.0,.92,facing);float variation=.94+.06*sin(dot(normalize(vCloudNormal),vec3(17.2,9.4,23.7)));float alpha=opacity*softEdge*variation;if(alpha<.003)discard;gl_FragColor=vec4(1.0,1.0,1.0,alpha);}",transparent:!0,depthWrite:!1,side:un}),Ur=new oi(1,1),Or=[],na=[{x:-820,z:-520,count:2,height:740,spreadX:150,spreadZ:130},{x:-470,z:-260,count:2,height:880,spreadX:170,spreadZ:140},{x:-90,z:-580,count:2,height:620,spreadX:160,spreadZ:130},{x:320,z:-390,count:2,height:500,spreadX:180,spreadZ:150},{x:730,z:-60,count:2,height:760,spreadX:150,spreadZ:160},{x:-720,z:150,count:2,height:360,spreadX:180,spreadZ:150},{x:-240,z:240,count:2,height:430,spreadX:170,spreadZ:140},{x:220,z:360,count:2,height:680,spreadX:180,spreadZ:150},{x:620,z:560,count:2,height:920,spreadX:150,spreadZ:130}],ia=480,sa=(Mt()-.5)*120,ra=(Mt()-.5)*120;for(const w of na)for(let A=0;A<w.count;A++){const E=new qt,F=18+Mt()*42,Z=4+Math.floor(Mt()*5),j=Math.max(ia,w.height+(Mt()-.5)*70),he=w.x+sa+(Mt()-.5)*w.spreadX,le=w.z+ra+(Mt()-.5)*w.spreadZ;for(let Pe=0;Pe<Z;Pe++){const Le=new ft(Ur,Nr),Ne=Pe/Z*Math.PI*2+Mt()*.8,Xe=Mt()*.75;Le.position.set(Math.cos(Ne)*F*Xe,(Mt()-.42)*F*.34,Math.sin(Ne)*F*Xe*.72),Le.scale.set(F*(.42+Mt()*.72),F*(.25+Mt()*.5),F*(.36+Mt()*.78)),Le.rotation.set(Mt()*.35,Mt()*Math.PI,Mt()*.35),E.add(Le)}E.position.set(he,j,le),E.renderOrder=3,E.frustumCulled=!1,E.traverse(Pe=>{Pe.castShadow=!1,Pe.receiveShadow=!1,Pe.frustumCulled=!1}),Li.add(E),Or.push({cloud:E,anchorX:he,anchorZ:le,cy:j,scale:F,phase:Mt()*Math.PI*2,driftX:.3+Mt()*.55,driftZ:.2+Mt()*.45,driftSpeed:.018+Mt()*.012})}const oa=w=>{if(ts)return;const A=w*.001;k(A);for(const E of js){const F=E.phase+A*.12*E.speed,Z=Math.sin(A*5.4+E.flapPhase)*.48,j=-Math.sin(F),he=Math.cos(F)*.58;E.bird.position.set(E.cx+Math.cos(F)*E.radius,E.height+Math.sin(F*2.1)*7,E.cz+Math.sin(F)*E.radius*.58),E.bird.rotation.y=Math.atan2(j,he),E.bird.rotation.z=Math.sin(F*3.2)*.08,E.left.rotation.x=.18+Z*.18,E.left.rotation.z=-Math.PI/2-Z*.82,E.right.rotation.x=-.18-Z*.18,E.right.rotation.z=Math.PI/2+Z*.82}for(const E of Or){const F=A*E.driftSpeed,Z=1+Math.sin(A*.13+E.phase)*.045;E.cloud.position.x=E.anchorX+Math.sin(F+E.phase)*E.scale*E.driftX,E.cloud.position.z=E.anchorZ+Math.cos(F*.73+E.phase)*E.scale*E.driftZ,E.cloud.position.y=E.cy+Math.sin(F*.6+E.phase)*E.scale*.16,E.cloud.scale.setScalar(Z),E.cloud.rotation.y=Math.sin(F*.4+E.phase)*.08,E.cloud.rotation.z=Math.cos(F*.31+E.phase)*.018}};r.updateMatrixWorld(!0);const P=[...Ye.values()].flat().map(w=>({x:w.x,y:w.y+w.h*.69,z:w.z,r:Math.max(3.6,w.h*.35)})),q=(w,A,E)=>{const F=A.x-w.x,Z=A.y-w.y,j=A.z-w.z,he=F*F+Z*Z+j*j;let le=0;for(const Pe of P){const Le=((Pe.x-w.x)*F+(Pe.y-w.y)*Z+(Pe.z-w.z)*j)/he;if(Le<0||Le>.94)continue;const Ne=Math.hypot(Pe.x-w.x-F*Le,Pe.y-w.y-Z*Le,Pe.z-w.z-j*Le),Xe=Pe.r+E*Le*.65;Ne<Xe&&(le+=1-Ne/Xe)}return le};return r.traverse(w=>{w instanceof Lo&&u_(w)}),{group:r,models:ce,terrain:V,heightAt:v,contextSource:H.source,isDisplayPoint:l,walkways:Ke,obstacles:we,entrances:U,treeCount:$,treeLods:xe,viewObstruction:q,setGroundColor:Y,setExteriorGroundColor:de,setExteriorRoadColor:ye,setExteriorBuildingOpacity:Te,updateAtmosphere:oa,update(w,A,E=400,F=240){xt.value=A,xe.forEach(Z=>Z.update(w)),z(w,E),_e(w,F)}}}async function f_(n,e){const t=await fetch("./data/facilities.json");if(!t.ok)throw new Error("設施資料讀取失敗");const i=await t.json(),s=document.createElement("button");s.id="facilities-btn",s.title="園區設施",s.setAttribute("aria-label","園區設施"),s.setAttribute("aria-expanded","false"),s.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2ZM9 3v16M15 5v16"/></svg>',document.querySelector(".tools").prepend(s);const r=document.createElement("section");r.className="panel facilities",r.hidden=!0,r.setAttribute("aria-label","園區設施導覽"),r.innerHTML='<div class="panel-head"><h2>園區設施</h2><button class="close" aria-label="關閉設施導覽">×</button></div><label class="facility-filter">顯示類型<select aria-label="設施類型"><option>全部</option></select></label><div class="facility-list"></div>',document.getElementById("app").append(r);const o=r.querySelector("select"),a=r.querySelector(".facility-list");for(const x of["入口","服務","停車","接駁","洗手間","休憩","景觀"])o.add(new Option(x));const l=[],c=document.createElement("div");c.id="facility-markers",c.hidden=!0,document.getElementById("app").append(c);const u={入口:"M4 21V3h12v18M8 21V7h8M11 13h10m-3-3 3 3-3 3",服務:"M12 8v.1M11 11h1v6m-2 0h4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",停車:"M4 3h16v18H4ZM9 18V7h4a3 3 0 0 1 0 6H9",接駁:"M5 17V5q7-3 14 0v12ZM5 11h14M8 17v3m8-3v3M8 14h.1M16 14h.1",洗手間:"M7 4v.1M17 4v.1M4 9h6v6H8v6H6v-6H4ZM15 9h4l2 8h-3v4h-2v-4h-3Z",休憩:"M4 5h16v7H4ZM3 15h18M6 12v9m12-9v9M4 8h16",景觀:"m3 18 6-10 4 6 3-4 5 8ZM18 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"},d={入口:"#6e8865",服務:"#5d8594",停車:"#5d8594",接駁:"#5d8594",洗手間:"#88778d",休憩:"#9a8453",景觀:"#6e8865"},h=document.createElement("label");h.className="setting-row",h.innerHTML='<span>顯示場景設施</span><input id="facility-visibility" type="checkbox" role="switch">',r.querySelector(".panel-head").after(h);const f=h.querySelector("input");try{const x=localStorage.getItem("ghibli-park-facilities");f.checked=x===null||x==="true"}catch{f.checked=!0}c.hidden=!f.checked,f.onchange=()=>{c.hidden=!f.checked;try{localStorage.setItem("ghibli-park-facilities",String(f.checked))}catch{}};let m;const y=document.createElement("section");y.className="facility-detail",y.hidden=!0,y.setAttribute("aria-live","polite");const p=document.createElement("nav");p.className="content-pager",p.setAttribute("aria-label","切換設施介紹"),p.innerHTML='<button aria-label="上一個設施">← 上一個</button><span>請選擇設施</span><button aria-label="下一個設施">下一個 →</button>',a.after(y,p);const g=()=>["北區","西區","中央區","東區","南區"].flatMap(x=>i.filter(N=>N.area===x&&(o.value==="全部"||o.value===N.kind)));function v(x){const N=g();if(!N.length)return;const R=N.findIndex(B=>B.id===m?.id);S(N[R<0?x>0?0:N.length-1:(R+x+N.length)%N.length])}p.querySelectorAll("button")[0].onclick=()=>v(-1),p.querySelectorAll("button")[1].onclick=()=>v(1);function S(x){m=x,r.hidden=!1,s.setAttribute("aria-expanded","true"),document.dispatchEvent(new CustomEvent("park-panel-open",{detail:"facilities"})),y.hidden=!1,y.replaceChildren();const N=document.createElement("h3"),R=document.createElement("p");N.textContent=x.name,R.textContent=`${x.area} · ${x.kind}｜${x.basis}`,y.append(N,R),p.querySelector("span").textContent=`${g().findIndex(V=>V.id===x.id)+1} / ${g().length}`;const B=new O(x.x,n(x.x,x.z)+2,x.z);e(B,B.clone().add(new O(-55,85,95))),a.querySelectorAll("button").forEach(V=>V.setAttribute("aria-current",String(V.dataset.id===x.id)))}for(const x of i){const N=document.createElement("button");N.className="facility-marker",N.dataset.visible="false",N.setAttribute("aria-hidden","true"),N.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${u[x.kind]}"/></svg>`,N.title=x.name,N.setAttribute("aria-label",x.name),N.onclick=()=>S(x),c.append(N),l.push({el:N,kind:x.kind,position:new O(x.x,n(x.x,x.z)+5,x.z)})}function M(){a.replaceChildren();for(const x of["北區","西區","中央區","東區","南區"]){const N=i.filter(B=>B.area===x&&(o.value==="全部"||o.value===B.kind));if(!N.length)continue;const R=document.createElement("h3");R.textContent=x,a.append(R);for(const B of N){const V=document.createElement("button");V.dataset.id=B.id,V.title=B.basis;const Y=document.createElement("span"),H=document.createElement("small");Y.textContent=B.name,H.textContent=B.kind,V.append(Y,H),V.onclick=()=>S(B),a.append(V)}}}function C(){const x=g(),N=x.findIndex(R=>R.id===m?.id);p.querySelector("span").textContent=N<0?"請選擇設施":`${N+1} / ${x.length}`,p.querySelectorAll("button").forEach(R=>{R.disabled=x.length===0}),a.querySelectorAll("button").forEach(R=>R.setAttribute("aria-current",String(R.dataset.id===m?.id)))}o.addEventListener("change",()=>queueMicrotask(C)),l.forEach(x=>{x.el.style.color=d[x.kind],x.el.style.borderColor=d[x.kind]});function D(x){r.hidden=!x,s.setAttribute("aria-expanded",String(x)),x?(document.dispatchEvent(new CustomEvent("park-panel-open",{detail:"facilities"})),f.focus({preventScroll:!0})):s.focus({preventScroll:!0})}document.addEventListener("park-panel-open",x=>{x.detail!=="facilities"&&(r.hidden=!0,s.setAttribute("aria-expanded","false"))}),s.onclick=()=>D(r.hidden),r.querySelector("button").onclick=()=>D(!1),o.onchange=()=>{m&&!g().some(x=>x.id===m.id)&&(m=void 0,y.hidden=!0,p.querySelector("span").textContent="請選擇設施"),M()},document.addEventListener("keydown",x=>{x.key==="Escape"&&!r.hidden&&D(!1)}),M();const I=matchMedia("(max-width: 700px)").matches||navigator.maxTouchPoints>0&&innerWidth<900;D(!I);const _=new O;return{facilities:i,update(x,N=[]){if(c.hidden)return;const R=[];for(const B of l){_.copy(B.position).project(x);const V=(_.x*.5+.5)*innerWidth,Y=(-_.y*.5+.5)*innerHeight,H=(o.value==="全部"||o.value===B.kind)&&_.z>-1&&_.z<1&&V>20&&V<innerWidth-30&&Y>90&&Y<innerHeight-100&&!R.some(X=>Math.abs(X.x-V)<28&&Math.abs(X.y-Y)<28)&&!N.some(X=>Math.abs(X.x-V)<X.w/2+20&&Math.abs(X.y-(Y-12.5))<X.h/2+20);B.el.dataset.visible=String(H),B.el.setAttribute("aria-hidden",String(!H)),H&&(R.push({x:V,y:Y}),B.el.style.transform=`translate(${V}px,${Y}px) translate(-50%,-100%)`)}}}}function p_(n,e,t,i,s){let r,o,a=0;const l=t;n.addEventListener("pointerdown",u=>{const d=u.target.closest(".scene-label,.facility-marker");!d||u.button!==0&&u.button!==2||!u.isPrimary||!t.enabled||(r={id:u.pointerId,button:u.button,label:d,x:u.clientX,y:u.clientY,lastX:u.clientX,lastY:u.clientY,dragged:!1},d.setPointerCapture(u.pointerId))},!0),n.addEventListener("pointermove",u=>{const d=r;if(!d||u.pointerId!==d.id||!d.dragged&&Math.hypot(u.clientX-d.x,u.clientY-d.y)<5)return;d.dragged||(d.dragged=!0,i());const h=Math.max(1,t.domElement.clientHeight),f=u.clientX-d.lastX,m=u.clientY-d.lastY;d.button===0?(l._rotateLeft(2*Math.PI*f/h*t.rotateSpeed),l._rotateUp(2*Math.PI*m/h*t.rotateSpeed)):l._pan(f,m),t.update(),d.lastX=u.clientX,d.lastY=u.clientY,u.preventDefault()},!0);const c=u=>{const d=r;!d||d.id!==u.pointerId||(d.dragged&&(d.button===0&&(o=d.label,a=performance.now()+500),s?.()),d.label.hasPointerCapture(d.id)&&d.label.releasePointerCapture(d.id),r=void 0)};n.addEventListener("pointerup",c,!0),n.addEventListener("pointercancel",c,!0),n.addEventListener("wheel",u=>{const d=u.target;!(d instanceof Element)||!d.closest(".scene-label,.facility-marker")||(u.preventDefault(),i(),t.domElement.dispatchEvent(new WheelEvent("wheel",{bubbles:!0,cancelable:!0,deltaX:u.deltaX,deltaY:u.deltaY,deltaZ:u.deltaZ,deltaMode:u.deltaMode,ctrlKey:u.ctrlKey,shiftKey:u.shiftKey,altKey:u.altKey,metaKey:u.metaKey,clientX:u.clientX,clientY:u.clientY})))},{capture:!0,passive:!1}),n.addEventListener("click",u=>{u.detail>0&&performance.now()<a&&o?.contains(u.target)&&(u.preventDefault(),u.stopImmediatePropagation(),o=void 0)},!0)}function m_(n){if(n.area==="yes"||n.indoor==="yes"||n.tunnel&&n.tunnel!=="no"||["no","private","use_sidepath"].includes(n.foot))return!1;const e=["yes","designated","permissive"].includes(n.foot);return["no","private","customers","delivery","agricultural","forestry"].includes(n.access)&&!e||n.highway==="construction"||n.highway==="proposed"||n.construction||["motorway","motorway_link","trunk","trunk_link"].includes(n.highway)?!1:["footway","pedestrian","path","steps","living_street","residential","service","unclassified"].includes(n.highway)?!0:n.highway==="cycleway"?e:["primary","primary_link","secondary","secondary_link","tertiary","tertiary_link"].includes(n.highway)&&(e||["yes","both","left","right"].includes(n.sidewalk))}function ih(n){return n.locked==="yes"||n.foot==="no"||n.foot==="private"||["private","no"].includes(n.access)&&!["yes","designated","permissive"].includes(n.foot)?!0:["wall","fence","retaining_wall","hedge"].includes(n.barrier)}function g_(n,e=2e3){const t=new Map,i=(s,r)=>{let o=t.get(s);o||(o=[],t.set(s,o)),o.push(r)};for(const s of n.features)if(m_(s.tags))for(let r=1;r<s.nodes.length;r++){const o=s.nodes[r-1],a=s.nodes[r],l=n.nodes[o],c=n.nodes[a];if(!l||!c||ih(l.tags)||ih(c.tags)||Math.hypot(...l.point)>e||Math.hypot(...c.point)>e)continue;const u=Math.hypot(c.point[0]-l.point[0],c.point[1]-l.point[1]);if(u<.001)continue;const d=s.tags.highway==="steps",h=u/(d?.65:1.2);s.tags["oneway:foot"]!=="-1"&&i(o,{to:a,way:s.id,metres:u,seconds:h,steps:d}),s.tags["oneway:foot"]!=="yes"&&s.tags["oneway:foot"]!=="1"&&i(a,{to:o,way:s.id,metres:u,seconds:h,steps:d})}return{nodes:n.nodes,edges:t}}function x_(n,e,t){if(!n.nodes[e]||!n.nodes[t])return null;const i=[],s=new Map,r=new Map,o=d=>{i.push(d);let h=i.length-1;for(;h>0;){const f=h-1>>1;if(i[f].cost<=d.cost)break;i[h]=i[f],h=f}i[h]=d},a=()=>{const d=i[0],h=i.pop();if(i.length){let f=0;for(;f*2+1<i.length;){let m=f*2+1;if(m+1<i.length&&i[m+1].cost<i[m].cost&&m++,i[m].cost>=h.cost)break;i[f]=i[m],f=m}i[f]=h}return d};for(s.set(e,0),o({id:e,cost:0});i.length;){const d=a();if(d.cost===s.get(d.id)){if(d.id===t)break;for(const h of n.edges.get(d.id)??[]){const f=d.cost+h.seconds;f>=(s.get(h.to)??1/0)||(s.set(h.to,f),r.set(h.to,{from:d.id,edge:h}),o({id:h.to,cost:f}))}}}if(!s.has(t))return null;const l=[t],c=[];let u=t;for(;u!==e;){const d=r.get(u);c.push(d.edge),u=d.from,l.push(u)}return l.reverse(),c.reverse(),{ids:l,points:l.map(d=>n.nodes[d].point),edges:c,metres:c.reduce((d,h)=>d+h.metres,0),seconds:s.get(t),hasSteps:c.some(d=>d.steps)}}const Bo=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${n}"/></svg>`,v_='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6a2.35 2.35 0 1 0 0 4.7 2.35 2.35 0 0 0 0-4.7ZM9.75 8.4h3.9l.95 4.2 3.2 1.55-.8 1.75-3.35-1.6-.48 2.1 2.8 3.1-1.48 1.25-3.05-3.25-2.05 3.9-1.82-.9 2.25-4.35.75-3.4-2.35 2.05-1.2-1.55 3.3-2.8Z"/></svg>',ja=Bo("M5 7h14m-9 4v6m4-6v6M9 7V4h6v3m-9 0 1 14h10l1-14"),__=Bo("M8 5h11m0 0-3-3m3 3-3 3M16 19H5m0 0 3-3m-3 3 3 3");async function M_(n,e,t,i,s,r,o){const a=r?{source:r,height:e}:await vd(je,e),l=g_(a.source);i&&(a.height=i);const c=document.createElement("button");c.id="navigation-btn",c.textContent="導航",c.setAttribute("aria-expanded","false"),c.title="步行導航",document.querySelector(".tools").prepend(c);const u=document.createElement("button");u.id="capture-btn",u.innerHTML=Bo("M4 8h4l1.5-2h5L16 8h4v10H4Z M9 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0"),u.setAttribute("aria-label","拍照"),u.title="保存目前場景截圖",c.after(u),u.onclick=()=>s?.();const d=document.createElement("section");d.id="navigation",d.className="panel navigation",d.hidden=!0,d.setAttribute("aria-label","步行導航"),d.innerHTML=`<button type="button" class="navigation-sheet-grabber" aria-label="調整導航卡片高度" title="拖曳調整卡片高度"><i></i></button><div class="panel-head"><h2>步行導航</h2><button class="close" aria-label="離開導航">${Bo("m6 6 12 12M6 18 18 6")}</button></div><div class="navigation-scroll"><p class="navigation-caption">先點選左側欄位，再在地圖上選擇起點與目的地</p><div class="route-points"><div class="route-point is-active" data-point="start"><button type="button" class="route-pick" data-select="start" aria-pressed="true"><i class="route-dot start"></i><span><small>起點</small><b id="route-start">尚未選擇</b></span></button><button type="button" class="route-clear-point" data-clear="start" disabled aria-label="清除起點" title="清除起點">${ja}</button></div><div class="route-point" data-point="end"><button type="button" class="route-pick" data-select="end" aria-pressed="false"><i class="route-dot end"></i><span><small>目的地</small><b id="route-end">尚未選擇</b></span></button><button type="button" class="route-clear-point" data-clear="end" disabled aria-label="清除目的地" title="清除目的地">${ja}</button></div></div><div class="route-actions"><button type="button" class="route-swap" disabled>${__}<span>交換起終點</span></button><button type="button" class="route-clear" disabled aria-label="清除導航點" title="清除導航點">${ja}<span>清除導航點</span></button></div><div class="route-status" role="status" aria-live="polite">請在地圖上選擇起點</div><p class="panel-note">點選建物會定位至鄰近步道；點選其他地面則定位至最近的已連通步道。一般步速 1.2 m/s。路線不代表無障礙通行，臨時封路與管制請以現場為準。</p></div>`,document.querySelector("#app").append(d);let h="",f="",m="",y="",p="",g="",v="start";const S=new qt;S.name="步行導航路線",n.add(S);let M,C,D=[],I,_;const x=d.querySelector("#route-start"),N=d.querySelector("#route-end"),R=d.querySelector(".route-status"),B=d.querySelector("[data-point=start]"),V=d.querySelector("[data-point=end]"),Y=d.querySelector("[data-select=start]"),H=d.querySelector("[data-select=end]"),X=d.querySelector(".route-swap"),W=d.querySelector(".route-clear"),de=d.querySelector("[data-clear=start]"),te=d.querySelector("[data-clear=end]"),Se=k=>{k.traverse(se=>{const ne=se;ne.geometry?.dispose&&ne.geometry.dispose();const oe=ne.material;Array.isArray(oe)?oe.forEach(Ee=>Ee.dispose()):oe?.dispose()})},ye=()=>document.dispatchEvent(new CustomEvent("park-navigation-selection")),Te=()=>{M=void 0,D=[];for(const k of[...S.children])S.remove(k),Se(k)},Ge=k=>{let se="",ne=1/0;for(const oe of l.edges.keys()){const Ee=l.nodes[oe].point,Q=Math.hypot(Ee[0]-k.x,Ee[1]-k.z);Q<ne&&(ne=Q,se=oe)}return se},Ke=(k,se=!1)=>{R.innerHTML=se?`<span class="walking-status-icon">${v_}</span><span>${k}</span>`:k},ot=()=>{x.textContent=m||"尚未選擇",N.textContent=y||"尚未選擇",de.disabled=!h,te.disabled=!f,W.disabled=!h&&!f,X.disabled=!h||!f;for(const[k,se,ne]of[[B,Y,"start"],[V,H,"end"]]){const oe=v===ne;k.classList.toggle("is-active",oe),k.classList.toggle("is-filled",ne==="start"?!!h:!!f),se.setAttribute("aria-pressed",String(oe))}},ee=(k,se)=>{const ne=new qt,oe=new Hi({color:se,depthTest:!1,depthWrite:!1,toneMapped:!1}),Ee=new ft(new qo(3,7,6),oe);Ee.rotation.x=Math.PI;const Q=new ft(new jo(1.35,0),new Hi({color:"#fff9e8",depthTest:!1,depthWrite:!1,toneMapped:!1}));return Q.position.y=2.1,ne.add(Ee,Q),ne.position.set(k[0],a.height(...k)+8,k[1]),ne.renderOrder=21,ne},fe=k=>{const se=Fo.lat-k[1]/111319.49,ne=Fo.lon+k[0]/(111319.49*Math.cos(se*Math.PI/180));return`GPS ${se.toFixed(6)}, ${ne.toFixed(6)}`},pe=3.6,Fe=pe*.5,ze=(k,se,ne)=>{const oe=Math.hypot(se.x,se.z)||1,Ee=-se.z/oe*ne,Q=se.x/oe*ne,ie=k.y+.03;return{left:new O(k.x+Ee,ie,k.z+Q),right:new O(k.x-Ee,ie,k.z-Q)}},We=(k,se,ne,oe)=>{const Ee=se.end.clone().sub(se.start),Q=ze(ne,Ee,Fe),ie=ze(oe,Ee,Fe);k.setXYZ(se.vertexBase,Q.left.x,Q.left.y,Q.left.z),k.setXYZ(se.vertexBase+1,Q.right.x,Q.right.y,Q.right.z),k.setXYZ(se.vertexBase+2,ie.left.x,ie.left.y,ie.left.z),k.setXYZ(se.vertexBase+3,ie.right.x,ie.right.y,ie.right.z)},ct=(k,se)=>{const ne=k.reduce((De,Ye)=>De+Ye.y,0)/k.length,oe=[...k,...se.filter(De=>!!De).map(De=>new O(De.x,ne,De.z))],Ee=new En().setFromPoints(oe),Q=Ee.getCenter(new O);if(!o){const De=Math.max(100,Ee.getSize(new O).length());t(Q,Q.clone().add(new O(0,De*.95,De*.35)));return}const ie=new O(0,1,.38).normalize(),Be=ie.clone().negate(),Ie=new O().crossVectors(Be,new O(0,1,0)).normalize(),Ce=new O().crossVectors(Ie,Be).normalize(),qe=Math.tan(o.fov*Math.PI/360),z=qe*o.aspect,_e=Math.min(96,innerWidth*.09),me=Math.min(112,innerHeight*.14),Re=z*Math.max(.35,1-_e*2/innerWidth),xe=qe*Math.max(.35,1-me*2/innerHeight);let $=120;for(const De of oe){const Ye=De.clone().sub(Q),ut=Ye.dot(Be);$=Math.max($,Math.abs(Ye.dot(Ie))/Re-ut,Math.abs(Ye.dot(Ce))/xe-ut)}$=Math.max($*1.1,Ee.getSize(new O).length()*.55),t(Q,Q.clone().addScaledVector(ie,$))},Je=()=>{if(Te(),ot(),I){const z=ee([I.x,I.z],"#1677ff");D.push(z),S.add(z)}if(_){const z=ee([_.x,_.z],"#f18b4e");D.push(z),S.add(z)}if(!h){Ke(v==="end"?"請在地圖上選擇目的地":"請在地圖上選擇起點");return}if(!f){Ke("起點已設定，請選擇目的地");return}const k=x_(l,h,f);if(!k){Ke("目前資料找不到連通步行路線，請清除後改選其他導航點。");return}if(!k.edges.length){Ke("起點與目的地位於同一個步道節點。");return}Ke(`約 ${Math.max(1,Math.ceil(k.seconds/60))} 分鐘 · ${Math.round(k.metres)} 公尺${k.hasSteps?" · 含樓梯":""}`,!0);const se=[];if(k.points.forEach((z,_e)=>{const me=k.edges[Math.min(_e,k.edges.length-1)],Re=new O(z[0],a_(a.source,me.way,k.ids[_e],a.height)+1.2,z[1]);(!se.length||Re.distanceToSquared(se[se.length-1])>.0025)&&se.push(Re)}),se.length<2){Ke("起點與目的地距離太近，請重新選擇。");return}const ne=[],oe=[],Ee=[],Q=z=>(ne.push(z.x,z.y+.03,z.z),ne.length/3-1),ie=z=>{const _e=Q(z),me=[];for(let Re=0;Re<12;Re++){const xe=Re/12*Math.PI*2;me.push(Q(new O(z.x+Math.cos(xe)*Fe,z.y,z.z+Math.sin(xe)*Fe)))}for(let Re=0;Re<12;Re++)oe.push(_e,me[(Re+1)%12],me[Re])},Be=(z,_e)=>{const me=_e.clone().sub(z),Re=ze(z,me,Fe),xe=ze(_e,me,Fe),$=ne.length/3;Q(Re.left),Q(Re.right),Q(xe.left),Q(xe.right);const De=$,Ye=oe.length;return oe.push(De,De+2,De+1,De+1,De+2,De+3),{vertexBase:$,start:z.clone(),end:_e.clone(),indexEnd:Ye+6}};ie(se[0]);for(let z=0;z<se.length-1;z++){const _e=Be(se[z],se[z+1]);ie(se[z+1]),Ee.push(_e)}const Ie=new St,Ce=new rt(ne,3);Ie.setAttribute("position",Ce),Ie.setIndex(oe),Ie.setDrawRange(0,0),Ie.computeBoundingSphere();const qe=new Hi({color:"#1677ff",depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!1,side:un});M=new ft(Ie,qe),M.renderOrder=20,M.frustumCulled=!1,M.castShadow=!1,M.receiveShadow=!1,S.add(M),C={geometry:Ie,position:Ce,segments:Ee,start:performance.now()},ct(se,[I,_])},ae=k=>{v=k,ot(),Ke(k==="start"&&h?"請重新在地圖上選擇起點":k==="end"&&f?"請重新在地圖上選擇目的地":k==="start"?"請在地圖上選擇起點":"請在地圖上選擇目的地"),ye()},ve=k=>{k==="start"?(h="",m="",p="",I=void 0):(f="",y="",g="",_=void 0),v=k,Je(),ye()},ce=()=>{h=f=m=y=p=g="",I=void 0,_=void 0,v="start",Je(),ye()},we=d.querySelector(".navigation-sheet-grabber");let U=36,He=0,Ae=U,ke=!1,Me=!1;const L=(k,se=k>=52)=>{U=it.clamp(k,24,82),d.style.setProperty("--navigation-sheet-height",`${U}dvh`),document.querySelector("#app").classList.toggle("navigation-sheet-expanded",se),we.setAttribute("aria-expanded",String(se))};we.addEventListener("pointerdown",k=>{ke=!0,Me=!1,He=k.clientY,Ae=U,we.setPointerCapture(k.pointerId),k.preventDefault()}),we.addEventListener("pointermove",k=>{ke&&(Me=Me||Math.abs(k.clientY-He)>4,L(Ae+(He-k.clientY)/innerHeight*100,U>=52))});const b=k=>{ke&&(ke=!1,we.hasPointerCapture(k.pointerId)&&we.releasePointerCapture(k.pointerId),L(U>=52?68:30,U>=52))};we.addEventListener("pointerup",b),we.addEventListener("pointercancel",b),we.addEventListener("click",()=>{if(Me){Me=!1;return}L(U>=52?30:68,U<52)}),L(U,!1);const G=(k,se,ne)=>{if(d.hidden)return;const oe=Ge(k);if(!oe)return;const Ee=fe([k.x,k.z]),Q=ne?.userData.building?.id||ne?.name||"",ie=k.clone();v==="start"||!h?(h=oe,m=Ee,p=Q,I=ie,f||(v="end")):(f=oe,y=Ee,g=Q,_=ie),Je(),ye()};Y.onclick=()=>ae("start"),H.onclick=()=>ae("end"),de.onclick=()=>ve("start"),te.onclick=()=>ve("end"),W.onclick=ce,X.onclick=()=>{[h,f]=[f,h],[m,y]=[y,m],[p,g]=[g,p],v="start",Je(),ye()};const J=()=>{ce(),d.hidden=!0,S.visible=!1,document.querySelector("#app").classList.remove("navigation-mode","navigation-sheet-expanded"),c.setAttribute("aria-expanded","false"),document.dispatchEvent(new CustomEvent("park-navigation-mode",{detail:!1}))},ue=()=>{d.hidden&&(document.dispatchEvent(new CustomEvent("park-panel-open",{detail:"navigation"})),d.hidden=!1,S.visible=!0,document.querySelector("#app").classList.add("navigation-mode"),L(36,!1),c.setAttribute("aria-expanded","true"),document.dispatchEvent(new CustomEvent("park-navigation-mode",{detail:!0})),ot(),ye(),d.querySelector(".close").focus({preventScroll:!0}))};return c.onclick=()=>d.hidden?ue():J(),d.querySelector(".close").onclick=J,document.addEventListener("park-panel-open",k=>{k.detail!=="navigation"&&J()}),document.addEventListener("keydown",k=>{k.key==="Escape"&&!d.hidden&&J()}),{active:()=>!d.hidden,open:ue,selectionTarget:()=>v,selectedBuildingIds:()=>[p,g].filter(Boolean),selectPoint:G,clear:ce,update(k,se){if(D.forEach((ne,oe)=>{if(ne.rotation.y=k*.00125+(oe?Math.PI*.35:0),se instanceof mn){const Ee=se.position.distanceTo(ne.position),Q=2*Ee*Math.tan(se.fov*Math.PI/360)/innerHeight;ne.scale.setScalar(Q*48/7)}}),C&&M){const oe=it.clamp((k-C.start)/3e3,0,1),Ee=C.segments.length;if(oe>=1){const Q=C.segments[Ee-1];We(C.position,Q,Q.start,Q.end),C.geometry.setDrawRange(0,C.geometry.index?.count??0),C.position.needsUpdate=!0,C=void 0}else{const Q=oe*Ee,ie=Math.min(Ee-1,Math.floor(Q)),Be=Q-ie;for(let qe=0;qe<ie;qe++){const z=C.segments[qe];We(C.position,z,z.start,z.end)}const Ie=C.segments[ie],Ce=Ie.start.clone().lerp(Ie.end,Be);We(C.position,Ie,Ie.start,Ce),C.geometry.setDrawRange(0,Ie.indexEnd),C.position.needsUpdate=!0}}}}}const Rc={propDistance:{label:"路燈與座椅顯示距離",min:80,max:400,step:20,value:400,unit:" m"},flowerDistance:{label:"花朵顯示距離",min:40,max:240,step:20,value:240,unit:" m"},buildingLod:{label:"建物 LOD 距離倍率",min:.2,max:2,step:.1,value:1,unit:"×"},treeLod:{label:"樹木 LOD 距離倍率",min:.5,max:2,step:.1,value:1,unit:"×"},shadowDistance:{label:"陰影顯示最遠觀看距離",min:200,max:5e3,step:100,value:5e3,unit:" m"},zoomSpeed:{label:"滾輪縮放速度",min:.5,max:3,step:.0125,value:1.9125,unit:"×"}};function _d(n){const e=n&&typeof n=="object"?n:{};return Object.fromEntries(Object.entries(Rc).map(([t,i])=>{const s=e[t];return[t,typeof s=="number"&&Number.isFinite(s)?Math.min(i.max,Math.max(i.min,s)):i.value]}))}const sh=new WeakMap;function rh(n,e,t=!0){n.traverse(i=>{const s=i;if(!s.isLOD)return;let r=sh.get(s);r||(r=s.levels.map(o=>o.distance),sh.set(s,r)),s.levels.forEach((o,a)=>{o.distance=t?r[a]*e:a===0?0:1/0})})}const zi=n=>{const e={home:"M3 10 12 3l9 7M5 9v11h14V9M9 20v-7h6v7",settings:"M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6",close:"m6 6 12 12M6 18 18 6",arrow:"M5 12h14m-6-6 6 6-6 6",help:"M9 8a3 3 0 0 1 6 0c0 2-3 2-3 5M12 17v.1",expand:"M4 9V4h5m6 0h5v5M4 15v5h5m6 0h5v-5",trash:"M5 7h14m-9 4v6m4-6v6M9 7V4h6v3m-9 0 1 14h10l1-14",camera:"M4 8h4l1.5-2h5L16 8h4v10H4Z M9 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0",walk:"M12 2.6a2.35 2.35 0 1 0 0 4.7 2.35 2.35 0 0 0 0-4.7ZM9.75 8.4h3.9l.95 4.2 3.2 1.55-.8 1.75-3.35-1.6-.48 2.1 2.8 3.1-1.48 1.25-3.05-3.25-2.05 3.9-1.82-.9 2.25-4.35.75-3.4-2.35 2.05-1.2-1.55 3.3-2.8Z"},t=n==="walk";return`<svg viewBox="0 0 24 24" fill="${t?"currentColor":"none"}" stroke="${t?"none":"currentColor"}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${e[n]}"/></svg>`},xr=document.querySelector("#app");xr.addEventListener("contextmenu",n=>n.preventDefault());xr.innerHTML=`<div id="viewport" aria-label="吉卜力公園互動三維場景"></div><div id="labels"></div>
 <header class="brand"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M20 3C9 10 6 19 9 29c6 1 13-4 17-10-1 10-5 14-10 18" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m13 24 12-13" fill="none" stroke="currentColor" stroke-width="1.1"/></svg></span><div><h1>吉卜力公園</h1><p>立體散策 <span>／</span> GHIBLI PARK</p></div></header>
 <nav class="tools" aria-label="場景工具"><button id="home" title="回到全園視角" aria-label="回到全園視角">${zi("home")}</button><button id="settings-btn" title="觀看設定" aria-label="觀看設定" aria-expanded="false">${zi("settings")}</button></nav>
 <section id="settings" class="panel settings" aria-label="觀看設定" hidden><div class="panel-head"><h2>觀看設定</h2><button class="close" id="settings-close" aria-label="關閉設定">${zi("close")}</button></div><div id="settings-scroll" class="settings-scroll">
  <details class="settings-group"><summary>介面與互動</summary><label class="setting-row"><span>名稱標籤<small>依距離顯示分區與建物</small></span><input type="checkbox" id="labels-setting" role="switch" checked></label><label class="setting-row"><span>滑過高亮<small>指出滑鼠下的建築</small></span><input type="checkbox" id="hover-setting" role="switch" checked></label><label class="setting-row"><span>LOD 細節層級<small>依觀看距離切換模型複雜度</small></span><input type="checkbox" id="lod-setting" role="switch" checked></label></details>
  <details class="settings-group"><summary>畫面品質</summary><div class="quality-grid" role="radiogroup" aria-label="畫面品質"><button type="button" class="quality-button" data-quality="lowest" aria-pressed="false"><b>最低</b><small>效能優先</small></button><button type="button" class="quality-button" data-quality="medium" aria-pressed="false"><b>中等</b><small>均衡</small></button><button type="button" class="quality-button" data-quality="high" aria-pressed="false"><b>高</b><small>細節優先</small></button><button type="button" class="quality-button" data-quality="ultra" aria-pressed="false"><b>極致</b><small>全開</small></button></div><div class="settings-control"><label for="resolution-scale">渲染解析度<output id="resolution-scale-value"></output></label><input id="resolution-scale" type="range" min="1" max="2" step=".05"></div><label class="settings-control"><span>抗鋸齒</span><select id="antialias"><option value="off">關閉</option><option value="fxaa">FXAA · 輕量</option><option value="smaa">SMAA · 高品質</option></select></label><label class="settings-control"><span>陰影品質</span><select id="shadow-quality"><option value="off">關閉</option><option value="low">低</option><option value="high">高</option><option value="ultra">極致</option></select></label><label class="setting-row"><span>環境遮蔽<small>加強建物與地形接觸陰影</small></span><input id="ao-setting" type="checkbox" role="switch"></label><label class="setting-row"><span>景深<small>模擬鏡頭前後景焦外效果</small></span><input id="dof-setting" type="checkbox" role="switch"></label><div class="settings-control"><label for="dof-focus">景深對焦距離<output id="dof-focus-value"></output></label><input id="dof-focus" type="range" min="100" max="5000" step="50"></div><div class="settings-control"><label for="dof-strength">景深模糊強度<output id="dof-strength-value"></output></label><input id="dof-strength" type="range" min="0" max="1" step=".05"></div></details>
  <details class="settings-group"><summary>場景距離與相機</summary><div class="settings-control"><label for="view-distance">最遠可視距離<output id="view-distance-value"></output></label><input id="view-distance" type="range" min="1800" max="10000" step="100"></div><div class="settings-control"><label for="camera-fov">視野角度 FOV<output id="camera-fov-value"></output></label><input id="camera-fov" type="range" min="30" max="60" step="1"></div></details>
  <details class="settings-group"><summary>環境色彩</summary><label class="color-control"><span>園區地面色彩</span><input id="ground-color" type="color"><output id="ground-color-value"></output></label><label class="color-control"><span>天空色彩</span><input id="sky-color" type="color"><output id="sky-color-value"></output></label><div class="settings-control"><label for="tone-exposure">色調曝光<output id="tone-exposure-value"></output></label><input id="tone-exposure" type="range" min=".7" max="1.3" step=".01"></div></details>
  <details class="settings-group"><summary>園區外部</summary><label class="color-control"><span>園區外部地面</span><input id="exterior-ground-color" type="color"><output id="exterior-ground-color-value"></output></label><label class="color-control"><span>園區外道路</span><input id="exterior-road-color" type="color"><output id="exterior-road-color-value"></output></label><div class="settings-control"><label for="exterior-building-opacity">園區外建築透明度<output id="exterior-building-opacity-value"></output></label><input id="exterior-building-opacity" type="range" min="0" max="1" step=".05"></div></details>
  <p class="panel-note">單位 1 m · 真實相對距離<br>外觀研究模型，非官方導覽或測繪成果。</p></div></section>
 <section id="info" class="panel info" aria-labelledby="info-name" hidden><header class="info-header"><div class="panel-head"><span id="info-zone"></span><button id="info-close" class="close" aria-label="關閉介紹">${zi("close")}</button></div><h2 id="info-name"></h2></header><div class="info-scroll"><div id="info-photo"></div><p id="info-description"></p><dl><div><dt>尺度依據</dt><dd id="info-basis"></dd></div></dl><div class="info-actions"><button id="focus-building">開始導航 ${zi("walk")}</button><a id="info-source" target="_blank" rel="noopener noreferrer">官方介紹 ↗</a></div></div></section>
 <footer><div class="map-meta"><button id="compass" type="button" aria-label="校正北向" title="校正北向"><span>N</span><svg viewBox="0 0 28 36"><path d="m14 2 8 26-8-5-8 5Z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M14 2v21" stroke="currentColor"/></svg></button><div class="scale"><span id="scale-label">100 m</span><i id="scale-line"></i></div></div><nav id="zones" class="zones" aria-label="前往主題區">${Yi.filter(n=>n.id!=="park").map((n,e)=>`<button data-zone="${n.id}"><i style="--zone:${n.color}"></i><span>${n.name}</span><small>0${e+1}</small></button>`).join("")}</nav><div class="footer-tools"><div class="zoom-controls" aria-label="鏡頭縮放"><button id="zoom-in" type="button" aria-label="放大畫面" title="放大畫面">+</button><button id="zoom-out" type="button" aria-label="縮小畫面" title="縮小畫面">−</button></div><button id="help-btn" aria-label="操作說明" title="操作說明">${zi("help")}</button></div></footer>
 <aside class="help panel" id="help" hidden><button id="help-close" class="close" aria-label="關閉操作說明">${zi("close")}</button><p>左鍵拖曳 <b>旋轉</b><br>滾輪 <b>縮放</b> · 中鍵拖曳 <b>前後推拉</b> · 右鍵拖曳 <b>平移</b><br>點選建物 <b>閱讀介紹</b><br>縮到最遠仍保留目前視角</p><small>觸控：單指旋轉，雙指縮放與平移。</small></aside>
 <div class="attribution">非官方個人研究 · 自製 3D 模型。地形：<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">國土地理院</a> · 周邊建物：<a href="https://www.mlit.go.jp/plateau/" target="_blank" rel="noopener" title="PLATEAU 豐田市 2023 LOD1，加工資料；局部涵蓋">PLATEAU（加工）</a> · 地理資料：<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a></div>
 <div id="loading" role="status"><div class="loading-card"><span class="loader"></span><h2>走進故事的風景</h2><p id="loading-text">正在準備吉卜力公園…</p></div></div>`;const ge=n=>document.getElementById(n);document.querySelector(".brand p").textContent="立體散策";document.querySelector(".brand-mark").innerHTML='<img src="./park-mark.svg" alt="" width="46" height="46">';document.querySelector("#compass span").textContent="北";document.querySelectorAll("#zones small").forEach(n=>n.remove());const Lr=document.querySelector(".brand");Lr.setAttribute("role","button");Lr.tabIndex=0;Lr.setAttribute("aria-label","回到預設全園視角");Lr.onclick=()=>{rn&&Cr()};Lr.onkeydown=n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),rn&&Cr())};const sr=matchMedia("(max-width: 700px)").matches||navigator.maxTouchPoints>0&&innerWidth<900,K={labels:!0,hover:!0,lod:!0,quality:sr?"lowest":"high",resolutionScale:sr?1:1.35,antialias:"off",shadowQuality:sr?"off":"low",ambientOcclusion:!sr,depthOfField:!1,dofFocus:1500,dofStrength:.35,viewDistance:1e4,cameraFov:43,toneExposure:.98,groundColor:"#a1b573",skyColor:"#dcfcfe",exteriorGroundColor:"#dce2d4",exteriorRoadColor:"#c5cbbd",exteriorBuildingOpacity:1,..._d(sr?{propDistance:80,flowerDistance:40,buildingLod:.2,treeLod:.6,shadowDistance:200}:{propDistance:280,flowerDistance:160,buildingLod:.4,treeLod:1.2,shadowDistance:5e3})},_o=n=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n);try{const n=JSON.parse(localStorage.getItem("ghibli-park-settings")||"null");if(n&&typeof n=="object"){const e=n;typeof e.labels=="boolean"&&(K.labels=e.labels),typeof e.hover=="boolean"&&(K.hover=e.hover),typeof e.lod=="boolean"&&(K.lod=e.lod),["lowest","medium","high","ultra"].includes(String(e.quality))&&(K.quality=e.quality),["off","fxaa","smaa"].includes(String(e.antialias))&&(K.antialias=e.antialias),["off","low","high","ultra"].includes(String(e.shadowQuality))&&(K.shadowQuality=e.shadowQuality),typeof e.ambientOcclusion=="boolean"&&(K.ambientOcclusion=e.ambientOcclusion),typeof e.depthOfField=="boolean"&&(K.depthOfField=e.depthOfField),typeof e.dofFocus=="number"&&Number.isFinite(e.dofFocus)&&(K.dofFocus=it.clamp(e.dofFocus,100,5e3)),typeof e.dofStrength=="number"&&Number.isFinite(e.dofStrength)&&(K.dofStrength=it.clamp(e.dofStrength,0,1)),typeof e.resolutionScale=="number"&&Number.isFinite(e.resolutionScale)&&(K.resolutionScale=it.clamp(e.resolutionScale,1,2)),typeof e.viewDistance=="number"&&Number.isFinite(e.viewDistance)&&(K.viewDistance=it.clamp(e.viewDistance,1800,1e4)),typeof e.cameraFov=="number"&&Number.isFinite(e.cameraFov)&&(K.cameraFov=it.clamp(e.cameraFov,30,60)),typeof e.toneExposure=="number"&&Number.isFinite(e.toneExposure)&&(K.toneExposure=it.clamp(e.toneExposure,.7,1.3)),_o(e.groundColor)&&(K.groundColor=e.groundColor),_o(e.skyColor)&&(K.skyColor=e.skyColor),_o(e.exteriorGroundColor)&&(K.exteriorGroundColor=e.exteriorGroundColor),_o(e.exteriorRoadColor)&&(K.exteriorRoadColor=e.exteriorRoadColor),typeof e.exteriorBuildingOpacity=="number"&&Number.isFinite(e.exteriorBuildingOpacity)&&(K.exteriorBuildingOpacity=it.clamp(e.exteriorBuildingOpacity,0,1)),Object.assign(K,_d(e))}}catch{}const Qo=matchMedia("(prefers-reduced-motion: reduce)").matches;let Ze,et,Ue,be,It,kn,nn,_i,Ao,Co,vr,Yt;const oh=new O;let xi=0;const Md=.12,Dc=.05;let Bs,Zl=0,Kl=0,Cs=0,Ps=0,Lc=0,Un,$t,rn=!1,zo=0,ah=0,Jl,sn;const Nt=new Up("#fff5e3",2.2),hr=[222,24,209],ki=new O(...hr),yd=new O,_n={minX:je[0]-180,maxX:je[2]+180,minZ:je[1]-180,maxZ:je[3]+180,minY:-40,maxY:420},Mo=new O;let kt,$o=!1,Ql=0,$l=0,Qn,yo=0,rr=1,gn=!0,zs=!0,lh=0,ch="";const ti=new kp,ko=new re,ec=[];let uh=null;function Ws(n,e){e&&document.dispatchEvent(new CustomEvent("park-panel-open",{detail:n})),ge(n).hidden=!e,e?(uh=document.activeElement,ge(n).querySelector("button,input,select")?.focus({preventScroll:!0})):uh?.focus({preventScroll:!0}),n==="settings"&&ge("settings-btn").setAttribute("aria-expanded",String(e))}document.addEventListener("park-panel-open",n=>{const e=n.detail;for(const t of["settings","info","help"])t!==e&&(ge(t).hidden=!0);e!=="info"&&(Un=void 0),e!=="settings"&&ge("settings-btn").setAttribute("aria-expanded","false"),gn=!0});ge("settings-btn").onclick=()=>Ws("settings",ge("settings").hidden);ge("settings-close").onclick=()=>Ws("settings",!1);ge("help-btn").onclick=()=>Ws("help",ge("help").hidden);ge("help-close").onclick=()=>Ws("help",!1);ge("info-close").onclick=()=>{Ws("info",!1),Un=void 0};const ea=document.createElement("nav");ea.className="content-pager";ea.setAttribute("aria-label","切換建物介紹");ea.innerHTML='<button aria-label="上一個建物" id="previous-building">← 上一個</button><span id="building-index"></span><button aria-label="下一個建物" id="next-building">下一個 →</button>';ge("info").append(ea);function Sd(n){if(!Un)return;const e=Bt.findIndex(t=>t.id===Un.id);Uc(Bt[(e+n+Bt.length)%Bt.length])}ge("previous-building").onclick=()=>Sd(-1);ge("next-building").onclick=()=>Sd(1);document.addEventListener("keydown",n=>{if(n.key==="Escape"){for(const e of["settings","help","info"])ge(e).hidden||Ws(e,!1);Un=void 0}});window.addEventListener("blur",()=>{S_()});function Xs(){try{localStorage.setItem("ghibli-park-settings",JSON.stringify(K))}catch{}}const Ji=document.createElement("details");Ji.className="settings-group detail-settings";Ji.open=!1;Ji.innerHTML="<summary>場景細節</summary><p>小物件按鏡頭至各分區的距離顯示；LOD 倍率越高，細節保留越遠。</p>";for(const[n,e]of Object.entries(Rc)){const t=n,i=document.createElement("label");i.className="detail-control",i.dataset.detailKey=t,(t==="buildingLod"||t==="treeLod")&&(i.dataset.lodControl="true");const s=document.createElement("span");s.textContent=e.label;const r=document.createElement("output"),o=document.createElement("input");o.type="range",o.setAttribute("aria-label",e.label),o.min=String(e.min),o.max=String(e.max),o.step=String(e.step),o.value=String(K[t]),r.textContent=K[t].toFixed(t==="zoomSpeed"?2:1)+e.unit,o.oninput=()=>{K[t]=Number(o.value),r.textContent=K[t].toFixed(t==="zoomSpeed"?2:1)+e.unit,zs=!0,Xs()},i.append(s,r,o),Ji.append(i)}const hh=ge("settings-scroll");hh.insertBefore(Ji,hh.querySelector(".panel-note"));const Ic=()=>{Ji.querySelectorAll("[data-lod-control]").forEach(n=>n.hidden=!K.lod)},bd=()=>{for(const n of["dof-focus","dof-strength"])ge(n).closest(".settings-control").hidden=!K.depthOfField},dh={lowest:{lod:!0,resolutionScale:1,antialias:"off",shadowQuality:"off",ambientOcclusion:!1,depthOfField:!1,viewDistance:1e4,propDistance:80,flowerDistance:40,buildingLod:.2,treeLod:.6,shadowDistance:200},medium:{lod:!0,resolutionScale:1.15,antialias:"off",shadowQuality:"low",ambientOcclusion:!1,depthOfField:!1,viewDistance:1e4,propDistance:180,flowerDistance:100,buildingLod:.3,treeLod:.9,shadowDistance:1200},high:{lod:!0,resolutionScale:1.35,antialias:"off",shadowQuality:"low",ambientOcclusion:!0,depthOfField:!1,viewDistance:1e4,propDistance:280,flowerDistance:160,buildingLod:.4,treeLod:1.2,shadowDistance:5e3},ultra:{lod:!0,resolutionScale:1.5,antialias:"off",shadowQuality:"low",ambientOcclusion:!0,depthOfField:!1,viewDistance:1e4,propDistance:400,flowerDistance:240,buildingLod:.5,treeLod:1.5,shadowDistance:5e3}},Ti=(n,e)=>`${Number.isInteger(n)?n:n.toFixed(2)}${e}`,Rt=(n,e)=>{ge(n).textContent=e},wd=()=>{document.querySelectorAll(".quality-button").forEach(n=>{const e=n.dataset.quality===K.quality;n.setAttribute("aria-pressed",String(e)),n.classList.toggle("is-active",e)})},Ed=()=>{ge("lod-setting").checked=K.lod,ge("resolution-scale").value=String(K.resolutionScale),Rt("resolution-scale-value",Ti(K.resolutionScale,"×")),ge("antialias").value=K.antialias,ge("shadow-quality").value=K.shadowQuality,ge("ao-setting").checked=K.ambientOcclusion,ge("dof-setting").checked=K.depthOfField,ge("dof-focus").value=String(K.dofFocus),Rt("dof-focus-value",Ti(K.dofFocus," m")),ge("dof-strength").value=String(K.dofStrength),Rt("dof-strength-value",`${Math.round(K.dofStrength*100)}%`),ge("view-distance").value=String(K.viewDistance),Rt("view-distance-value",Ti(K.viewDistance," m")),ge("camera-fov").value=String(K.cameraFov),Rt("camera-fov-value",Ti(K.cameraFov,"°")),ge("ground-color").value=K.groundColor,Rt("ground-color-value",K.groundColor.toUpperCase()),ge("sky-color").value=K.skyColor,Rt("sky-color-value",K.skyColor.toUpperCase()),ge("exterior-ground-color").value=K.exteriorGroundColor,Rt("exterior-ground-color-value",K.exteriorGroundColor.toUpperCase()),ge("exterior-road-color").value=K.exteriorRoadColor,Rt("exterior-road-color-value",K.exteriorRoadColor.toUpperCase()),ge("exterior-building-opacity").value=String(K.exteriorBuildingOpacity),Rt("exterior-building-opacity-value",`${Math.round(K.exteriorBuildingOpacity*100)}%`),ge("tone-exposure").value=String(K.toneExposure),Rt("tone-exposure-value",K.toneExposure.toFixed(2)),Object.entries(Rc).forEach(([n,e])=>{const t=n,i=Ji.querySelector(`[data-detail-key="${t}"]`),s=i?.querySelector("input"),r=i?.querySelector("output");s&&r&&(s.value=String(K[t]),r.textContent=K[t].toFixed(t==="zoomSpeed"?2:1)+e.unit)}),bd(),wd()};ge("labels-setting").checked=K.labels;ge("hover-setting").checked=K.hover;ge("lod-setting").checked=K.lod;Ic();Ed();ge("labels-setting").onchange=()=>{K.labels=ge("labels-setting").checked,ge("labels").hidden=!K.labels,gn=!0,Xs()};ge("hover-setting").onchange=()=>{K.hover=ge("hover-setting").checked,$t=void 0,gn=!0,Xs()};ge("lod-setting").onchange=()=>{K.lod=ge("lod-setting").checked,zs=!0,Ic(),Xs()};const on=()=>{Xs(),wd()};document.querySelectorAll(".quality-button").forEach(n=>n.onclick=()=>{const e=n.dataset.quality;dh[e]&&(K.quality=e,Object.assign(K,dh[e]),zs=!0,Ed(),Ic(),Xs(),rn&&Ir())});ge("resolution-scale").oninput=()=>{K.resolutionScale=Number(ge("resolution-scale").value),Rt("resolution-scale-value",Ti(K.resolutionScale,"×")),on(),rn&&Ir()};ge("antialias").onchange=()=>{K.antialias=ge("antialias").value,on(),rn&&Ir()};ge("shadow-quality").onchange=()=>{K.shadowQuality=ge("shadow-quality").value,on(),rn&&Ir()};ge("ao-setting").onchange=()=>{K.ambientOcclusion=ge("ao-setting").checked,on()};ge("dof-setting").onchange=()=>{K.depthOfField=ge("dof-setting").checked,bd(),on(),ta()};ge("dof-focus").oninput=()=>{K.dofFocus=Number(ge("dof-focus").value),Rt("dof-focus-value",Ti(K.dofFocus," m")),on(),ta()};ge("dof-strength").oninput=()=>{K.dofStrength=Number(ge("dof-strength").value),Rt("dof-strength-value",`${Math.round(K.dofStrength*100)}%`),on(),ta()};ge("view-distance").oninput=()=>{K.viewDistance=Number(ge("view-distance").value),Rt("view-distance-value",Ti(K.viewDistance," m")),on(),Ad()};const Za=n=>{if(!Ue||!be)return;$n(),kt=void 0,Gn();const e=Yt??Ue.position.distanceTo(be.target);Yt=it.clamp(e*n,be.minDistance,be.maxDistance),gn=!0},Td=(n,e)=>{let t,i,s=!1,r=!1;const o=()=>{t!==void 0&&(window.clearTimeout(t),t=void 0),i!==void 0&&(window.clearInterval(i),i=void 0),s&&(r=!0,s=!1)};n.addEventListener("pointerdown",a=>{a.button===0&&(a.preventDefault(),n.setPointerCapture(a.pointerId),t=window.setTimeout(()=>{s=!0,Za(e),i=window.setInterval(()=>Za(e),80)},320))}),n.addEventListener("pointerup",a=>{n.hasPointerCapture(a.pointerId)&&n.releasePointerCapture(a.pointerId),o()}),n.addEventListener("pointercancel",o),n.addEventListener("pointerleave",o),n.addEventListener("click",()=>{if(r){r=!1;return}Za(e)})};Td(ge("zoom-in"),.88);Td(ge("zoom-out"),1/.88);ge("camera-fov").oninput=()=>{K.cameraFov=Number(ge("camera-fov").value),Rt("camera-fov-value",Ti(K.cameraFov,"°")),on(),Ue&&(Ue.fov=K.cameraFov,Ue.updateProjectionMatrix(),Nc())};ge("ground-color").oninput=()=>{K.groundColor=ge("ground-color").value,Rt("ground-color-value",K.groundColor.toUpperCase()),Ze?.setGroundColor(K.groundColor),on()};ge("sky-color").oninput=()=>{K.skyColor=ge("sky-color").value,Rt("sky-color-value",K.skyColor.toUpperCase()),Cd(),on()};ge("exterior-ground-color").oninput=()=>{K.exteriorGroundColor=ge("exterior-ground-color").value,Rt("exterior-ground-color-value",K.exteriorGroundColor.toUpperCase()),Ze?.setExteriorGroundColor(K.exteriorGroundColor),on()};ge("exterior-road-color").oninput=()=>{K.exteriorRoadColor=ge("exterior-road-color").value,Rt("exterior-road-color-value",K.exteriorRoadColor.toUpperCase()),Ze?.setExteriorRoadColor(K.exteriorRoadColor),on()};ge("exterior-building-opacity").oninput=()=>{K.exteriorBuildingOpacity=Number(ge("exterior-building-opacity").value),Rt("exterior-building-opacity-value",`${Math.round(K.exteriorBuildingOpacity*100)}%`),Ze?.setExteriorBuildingOpacity(K.exteriorBuildingOpacity),on()};ge("tone-exposure").oninput=()=>{K.toneExposure=Number(ge("tone-exposure").value),Rt("tone-exposure-value",K.toneExposure.toFixed(2)),et&&(et.toneMappingExposure=K.toneExposure),on()};function Ad(){!Ue||!It||(Ue.far=Math.max(K.viewDistance,be.maxDistance+100),Ue.updateProjectionMatrix(),It.fog instanceof Pr&&(It.fog.near=Math.min(3200,Math.max(900,K.viewDistance*.48)),It.fog.far=Math.max(It.fog.near+250,K.viewDistance)))}function Cd(){It&&(It.background=new $e(K.skyColor),It.fog instanceof Pr&&It.fog.color.set(K.skyColor),It.traverse(n=>{n instanceof ed&&n.color.set(K.skyColor)}))}function ta(){if(!vr)return;vr.enabled=K.depthOfField;const n=vr.uniforms;n.focus.value=K.dofFocus,n.aperture.value=K.dofStrength*8e-5,n.maxblur.value=K.dofStrength*.012}function Gn(){if(!be)return;const n=be;n._sphericalDelta?.set(0,0,0),n._panOffset?.set(0,0,0),n._scale!==void 0&&(n._scale=1)}function y_(n){!be||n.button!==0||n.pointerType==="touch"||!n.isPrimary||(Bs=n.pointerId,Zl=n.clientX,Kl=n.clientY,Cs=0,Ps=0,Lc=performance.now(),be.enableDamping=!0,be.dampingFactor=Md,Gn())}function fh(n,e){if(Bs!==n.pointerId)return;const t=performance.now()-Lc,i=e&&t<80&&Math.abs(Cs)+Math.abs(Ps)>0;if(be){const s=be;if(be.enableDamping=!0,be.dampingFactor=Dc,i&&s._sphericalDelta){const r=Math.max(1,et.domElement.clientHeight),o=.18;s._sphericalDelta.theta-=2*Math.PI*Cs/r*be.rotateSpeed*o,s._sphericalDelta.phi-=2*Math.PI*Ps/r*be.rotateSpeed*o}else Gn()}Bs=void 0,Cs=0,Ps=0}function S_(){Bs!==void 0&&(Bs=void 0,Cs=0,Ps=0,be&&(be.enableDamping=!0,be.dampingFactor=Dc,Gn()))}function b_(){if(!Ue||!be)return;const n=it.clamp(be.target.x,_n.minX,_n.maxX),e=it.clamp(be.target.y,_n.minY,_n.maxY),t=it.clamp(be.target.z,_n.minZ,_n.maxZ),i=be,s=i._panOffset;Mo.set(n-be.target.x,e-be.target.y,t-be.target.z);const r=.35,o=!!(s&&(be.target.x<=_n.minX+r&&s.x<0||be.target.x>=_n.maxX-r&&s.x>0||be.target.y<=_n.minY+r&&s.y<0||be.target.y>=_n.maxY-r&&s.y>0||be.target.z<=_n.minZ+r&&s.z<0||be.target.z>=_n.maxZ-r&&s.z>0));if(Mo.lengthSq()<1e-6){o&&s?.set(0,0,0);return}Ue.position.add(Mo),be.target.add(Mo),s?.set(0,0,0)}function w_(n){if(Yt===void 0)return;const e=Ue.position.distanceTo(be.target),t=Qo?1:1-Math.exp(-n/95),i=it.lerp(e,Yt,t);oh.copy(Ue.position).sub(be.target).setLength(i),Ue.position.copy(be.target).add(oh),Math.abs(i-Yt)<.05&&(Yt=void 0)}function Ir(){if(!et)return;const n={off:512,low:1024,high:2048,ultra:4096};et.setPixelRatio(Math.min(devicePixelRatio,K.resolutionScale)),et.shadowMap.enabled=K.shadowQuality!=="off",et.shadowMap.type=Es,Nt.shadow.mapSize.setScalar(n[K.shadowQuality]),Nt.shadow.map?.dispose(),Nt.shadow.map=null,Nt.castShadow=K.shadowQuality!=="off",Nt.shadow.radius=K.shadowQuality==="ultra"?4:K.shadowQuality==="high"?3:K.shadowQuality==="low"?1:0,_i.enabled=K.ambientOcclusion,Ao.enabled=K.antialias==="fxaa",Co.enabled=K.antialias==="smaa",ta(),et.toneMappingExposure=K.toneExposure,Pd()}function Nc(){const n=new En(new O(je[0],-25,je[1]),new O(je[2],110,je[3])),e=new O(0,1,1).normalize(),t=new O(1,0,0),i=new O(0,1,-1).normalize(),s=Math.tan(Ue.fov*Math.PI/360);let r=0;for(const l of[n.min.x,n.max.x])for(const c of[n.min.y,n.max.y])for(const u of[n.min.z,n.max.z]){const d=new O(l,c,u).sub(ki);r=Math.max(r,d.dot(e)+Math.max(Math.abs(d.dot(t))/(s*Ue.aspect),Math.abs(d.dot(i))/s))}r*=.46,yd.copy(ki).addScaledVector(e,r);const o=Math.max(Math.abs(je[0]-ki.x),Math.abs(je[2]-ki.x)),a=Math.max(Math.abs(je[1]-ki.z),Math.abs(je[3]-ki.z));be.maxDistance=Math.max(o/(s*Ue.aspect),a/s)*1.06,Ad()}function $n(){$o=!1}function E_(){Qo||(Ql=performance.now(),$l=Ql,$o=!0)}function Ai(n,e,t=!1){if(rn){if($n(),Yt=void 0,Gn(),t||Qo){kt=void 0,be.target.copy(n),Ue.position.copy(e),be.update();return}kt={from:Ue.position.clone(),targetFrom:be.target.clone(),to:e.clone(),target:n.clone(),start:performance.now(),duration:1100}}}function T_(n=!1){if(!rn)return;const e=Ue.position.clone().sub(be.target),t=Math.hypot(e.x,e.z);if(t<1)return;const i=be.target.clone(),s=i.clone().add(new O(0,e.y,t));Ai(i,s,n)}function Cr(n=!1,e=!1){if(Nc(),e){const t=(je[0]+je[2])*.5,i=(je[1]+je[3])*.5+160,s=new O(t,Ze.heightAt(t,i),i),r=Math.tan(Ue.fov*Math.PI/360),o=Math.max((je[2]-je[0])*.5/(r*Ue.aspect),(je[3]-je[1])*.5/r)*1.16,a=be.minPolarAngle;be.maxDistance=o,Ai(s,s.clone().add(new O(0,Math.cos(a)*o,Math.sin(a)*o)),n)}else Ai(ki,yd,n);document.querySelectorAll("[data-zone]").forEach(t=>t.removeAttribute("aria-current"))}function Vo(n,e=!1){const t=Yi.find(s=>s.id===n);if(!t)return;const i=new O(t.x,Ze.heightAt(t.x,t.z)+8,t.z);Ai(i,i.clone().add(new O(-.45,.85,1.1).multiplyScalar(t.radius)),e),document.querySelectorAll("[data-zone]").forEach(s=>s.dataset.zone===n?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current"))}function tc(n,e=!1){const t=Bt.find(c=>c.id===n);if(!t)return;const i=Ze.models.find(c=>c.name===n);let s=Math.max(t.width,t.depth,t.height);const r=i.position.clone().add(new O(0,t.height*.45,0));if(n==="tram"){const c=Ze.walkways.find(u=>u.id==="slope-tram");if(c){const u=new O(...c.points[0]),d=new O(...c.points[c.points.length-1]);r.copy(u).lerp(d,.5).y+=1.5,s=Math.max(30,u.distanceTo(d))}}const o=s*1.9*Math.max(1,.8/Ue.aspect),a=(t.viewYaw??t.yaw)*Math.PI/180+.35;let l;for(const c of[0,.35,-.35,.7,-.7,1.05,-1.05])for(const u of n==="totoro"?[.25,.35,.45]:[.57,.85,1.1]){const d=a+c,h=r.clone();ge("info").hidden||(innerWidth>650?h.addScaledVector(new O(Math.cos(d),0,-Math.sin(d)),o*.18):h.addScaledVector(new O(-Math.sin(d)*u,1,-Math.cos(d)*u).normalize(),-o*.19));const f=h.clone().add(new O(Math.sin(d)*o,o*u,Math.cos(d)*o));if(f.y<Ze.heightAt(f.x,f.z)+3)continue;const m=Ze.viewObstruction(f,r,s*.45)+Math.abs(c)*.9+(u-.57)*.35;(!l||m<l.score)&&(l={target:h,camera:f,score:m})}l&&Ai(l.target,l.camera,e)}function A_(n){if(!rn||!sn)return;const e=Ze.models.find(t=>t.name===n.id);e&&(sn.open(),sn.clear(),sn.selectPoint(e.position.clone(),n.name,e))}const ph={youth:"model-youth.webp",warehouse:"model-warehouse.webp",mononoke:"model-mononoke.webp",witch:"model-witch.webp",dondoko:"model-dondoko.webp",park:"model-overview.webp",howl:"model-howl.webp",earth:"model-earth.webp"};function Uc(n){document.dispatchEvent(new CustomEvent("park-panel-open",{detail:"info"})),Un=n,ge("building-index").textContent=`${Bt.findIndex(r=>r.id===n.id)+1} / ${Bt.length}`,ge("info-zone").textContent=Yi.find(r=>r.id===n.zone).name,ge("info-name").textContent=n.name,ge("info-description").textContent=n.intro,ge("info-basis").textContent=`${n.basis.dimensions}；高度：${n.basis.height}`,ge("info-source").href=n.source,ge("info").hidden=!1,ge("info").querySelector(".info-scroll").scrollTop=0,ge("focus-building").onclick=()=>A_(n),tc(n.id);const e=document.createElement("figure"),t=document.createElement("img"),i=document.createElement("figcaption"),s=ph[n.id]??ph[n.zone];t.src="./models/"+s,t.alt=n.name+"所在區域的自製 3D 模型畫面",t.loading="lazy",t.onerror=()=>{t.remove(),i.textContent="3D 模型畫面暫時無法載入，仍可直接觀看背景中的互動場景。"},i.textContent="自製 3D 模型畫面 · 非官方園區照片",e.append(t,i),ge("info-photo").replaceChildren(e)}ge("home").onclick=()=>{rn&&Cr(!1,!0)};ge("compass").onclick=()=>{rn&&T_()};document.querySelectorAll("[data-zone]").forEach(n=>n.onclick=()=>{rn&&Vo(n.dataset.zone)});function Pd(){if(!et)return;const n=innerWidth,e=innerHeight;et.setSize(n,e),Ue.aspect=n/e,Ue.updateProjectionMatrix(),kn?.setSize(n,e),Nc(),gn=!0,zs=!0}function C_(){if(!et)return;const n=new Date().toISOString().replace(/[:.]/g,"-");et.domElement.toBlob(e=>{if(!e)return;const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=`ghibli-park-scene-${n}.png`,i.click(),window.setTimeout(()=>URL.revokeObjectURL(t),1e3)},"image/png")}function mh(n){const e=et.domElement.getBoundingClientRect();ko.set((n.clientX-e.left)/e.width*2-1,-(n.clientY-e.top)/e.height*2+1),ti.setFromCamera(ko,Ue);const t=ti.intersectObjects(Ze.models,!0)[0];if(!t)return;let i=t.object;for(;i.parent&&!i.userData.building;)i=i.parent;return i.userData.building?i:void 0}function gh(n){const e=et.domElement.getBoundingClientRect();return ko.set((n.clientX-e.left)/e.width*2-1,-(n.clientY-e.top)/e.height*2+1),ti.setFromCamera(ko,Ue),ti.intersectObject(Ze.terrain,!1)[0]?.point}function P_(){for(const n of Yi.filter(e=>e.id!=="park")){const e=document.createElement("button");e.className="scene-label zone-label",e.style.setProperty("--zone",n.color),e.innerHTML=`<span>${n.name}</span>`,e.onclick=()=>Vo(n.id),ge("labels").append(e),ec.push({element:e,id:n.id,zone:!0,position:new O(n.x,Ze.heightAt(n.x,n.z)+25,n.z)})}for(const n of Bt){const e=document.createElement("button");e.className="scene-label building-label",e.style.setProperty("--zone",Yi.find(i=>i.id===n.zone).color),e.innerHTML=`<span>${n.name}</span>`,e.onclick=()=>Uc(n),ge("labels").append(e);const t=Ze.models.find(i=>i.name===n.id);ec.push({element:e,id:n.id,zone:!1,building:n,position:t.position.clone().add(new O(0,n.height+1.7,0))})}ge("labels").hidden=!K.labels}const or=new O,ys=new O,R_=new O(0,1,0),Ka=new O,xh=new O,vh=new O,Ja=new O,Qa=new O;let $a=[],_h=[];const Mh=new O,yh=new WeakMap;function D_(){$a.length||($a=Ze.models.map(r=>({id:r.name,box:new En().setFromObject(r),model:r})));const n=Ue.position.distanceTo(be.target),e=[],t=new Set(sn?.selectedBuildingIds()??[]),i=!!sn?.active(),s=[...ec].sort((r,o)=>+(o.id===$t?.name)-+(r.id===$t?.name)||Number(o.zone)-Number(r.zone)||Number(o.building?.core)-Number(r.building?.core));for(const r of s){r.id==="tram"&&(r.position.copy(Ze.models.find(m=>m.name==="tram").position).y+=4.7);const o=i&&!r.zone&&t.has(r.id);r.element.classList.toggle("hovered",r.id===$t?.name&&K.hover),r.element.classList.toggle("navigation-selected",o);const a=Ue.position.distanceTo(r.position);let l=K.labels&&(o||(i?!1:r.zone?n>420:n<470&&a<(r.building?.core?520:300)));or.copy(r.position).project(Ue);const c=(or.x*.5+.5)*innerWidth,u=(-or.y*.5+.5)*innerHeight;if(l=l&&or.z<1&&or.z>-1&&c>50&&c<innerWidth-60&&u>90&&u<innerHeight-110,l&&!r.zone){ys.copy(r.position).sub(Ue.position);for(let m=1;m<25;m++){const y=m/25,p=Ue.position.x+ys.x*y,g=Ue.position.y+ys.y*y,v=Ue.position.z+ys.z*y;if(Ze.heightAt(p,v)>g+1){l=!1;break}}}if(l&&!r.zone){ys.copy(r.position).sub(Ue.position).normalize(),ti.set(Ue.position,ys);const m=$a.filter(y=>y.id!==r.id&&ti.ray.intersectBox(y.box,Mh)&&Mh.distanceTo(Ue.position)<a-1).map(y=>y.model);m.length&&(ti.far=a-1,l=ti.intersectObjects(m,!0).length===0,ti.far=1/0)}const d=Math.max(94,(r.zone?r.element.firstElementChild?.textContent?.length??7:r.building?.name.length??8)*10+22),h=34;l&&e.some(m=>Math.abs(m.x-c)<(m.w+d)/2+8&&Math.abs(m.y-u)<(m.h+h)/2+4)&&(l=!1);const f=r.element.dataset.visible==="true";r.element.dataset.visible!==String(l)&&(r.element.dataset.visible=String(l),r.element.setAttribute("aria-hidden",String(!l)),r.element.tabIndex=l?0:-1,f&&!l&&yh.set(r.element,performance.now()+(Qo?0:500))),r.element.style.transform=`translate(${c}px,${u}px) translate(-50%,-100%)`,(l||(yh.get(r.element)??0)>performance.now())&&e.push({x:c,y:u,w:d,h})}return K.labels?e.map(r=>({...r,y:r.y-r.h/2})):[]}function Rd(n){if(requestAnimationFrame(Rd),document.hidden){yo=n;return}const e=yo?Math.min(50,n-yo):16;if(yo=n,kt){const d=it.clamp((n-kt.start)/kt.duration,0,1),h=d*d*d*(d*(d*6-15)+10);Ue.position.lerpVectors(kt.from,kt.to,h),be.target.lerpVectors(kt.targetFrom,kt.target,h),d===1&&(kt=void 0)}if($o&&!kt){const d=Math.min(50,Math.max(0,n-$l)),h=it.smoothstep(n-Ql,0,3e3);$l=n,Ka.copy(Ue.position).sub(be.target),Ka.applyAxisAngle(R_,-d*h*Math.PI*2/4e4),Ue.position.copy(be.target).add(Ka)}w_(e),be.update(),b_();const t=Ze.heightAt(Ue.position.x,Ue.position.z)+1.8;Ue.position.y<t&&(Ue.position.y=t);const i=Ue.position.distanceTo(be.target),s=Math.max(.25,Math.min(6,i/180));Math.abs(Ue.near-s)>.015&&(Ue.near=s,Ue.updateProjectionMatrix());const r=sn?.active()?sn.selectedBuildingIds():[],o=r.map(d=>Ze.models.find(h=>h.name===d)).filter(d=>!!d),a=Un?Ze.models.find(d=>d.name===Un.id):void 0,l=[K.hover&&$t?.name||"",r.join(","),a?.name||""].join("|");if(l!==ch){const d=[...K.hover&&$t?[$t]:[],...o.length?o:a?[a]:[]];nn.selectedObjects=[...new Set(d)],nn.edgeStrength=o.length?5.5:3.2,nn.edgeThickness=o.length?2.4:1.5,nn.enabled=nn.selectedObjects.length>0,ch=l}if(_i.enabled=K.ambientOcclusion&&i<240,K.shadowQuality==="off")rr=0,Nt.castShadow=!1,Nt.shadow.intensity=0;else{const d=1-it.smoothstep(i,K.shadowDistance*.82,K.shadowDistance);rr+=(d-rr)*(1-Math.exp(-e/260)),Nt.castShadow=d>0||rr>.01,Nt.shadow.intensity=it.clamp(rr,0,1)}if(zo%10===0||zs){const d=Math.max(70,Math.min(660,i*.7)),h=be.target;Nt.position.set(h.x-150,h.y+260,h.z-120),Nt.target.position.copy(h),Nt.target.updateMatrixWorld(),Object.assign(Nt.shadow.camera,{left:-d,right:d,top:d,bottom:-d,near:1,far:1100}),Nt.shadow.camera.updateProjectionMatrix(),be.zoomSpeed=K.zoomSpeed,Ze.models.forEach(y=>rh(y,K.buildingLod,K.lod)),Ze.treeLods.forEach(y=>rh(y,K.treeLod,K.lod)),Ze.update(Ue,i,K.propDistance,K.flowerDistance);const f=2*i*Math.tan(Ue.fov*Math.PI/360)/innerHeight,m=[1,2,5,10,20,50,100,200,500].find(y=>y/f>=55)||500;ge("scale-label").textContent=`${m} m`,ge("scale-line").style.width=`${m/f}px`,zs=!1}Ze.updateAtmosphere(n),sn?.update(n,Ue),Ue.updateMatrixWorld();const c=xh.distanceToSquared(Ue.position)>1e-4||vh.distanceToSquared(be.target)>1e-4;(gn||c||n-lh>220)&&(_h=D_(),xh.copy(Ue.position),vh.copy(be.target),lh=n,gn=!1),Jl?.update(Ue,_h),Ja.copy(be.target).project(Ue),Qa.copy(be.target).add(new O(0,0,-50)).project(Ue),ge("compass").style.transform=`rotate(${Math.atan2((Qa.x-Ja.x)*innerWidth,(Qa.y-Ja.y)*innerHeight)}rad)`,et.info.reset(),kn.render(),zo++}async function L_(){et=new Ov({antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),et.domElement.tabIndex=0,et.domElement.setAttribute("aria-label","3D 場景，左鍵旋轉、右鍵平移、滾輪縮放；手機可用雙指縮放；按住中鍵拖曳前後推拉"),et.setPixelRatio(Math.min(devicePixelRatio,K.resolutionScale)),et.setSize(innerWidth,innerHeight),et.shadowMap.enabled=!0,et.shadowMap.type=Es,et.toneMapping=Go,et.toneMappingExposure=K.toneExposure,ge("viewport").append(et.domElement),It=new zf,It.background=new $e(K.skyColor),It.fog=new Pr(K.skyColor,Math.min(3200,K.viewDistance*.48),K.viewDistance),Ue=new mn(K.cameraFov,innerWidth/innerHeight,.25,K.viewDistance),Ue.layers.enable(1),be=new Bv(Ue,et.domElement),be.enableDamping=!0,be.dampingFactor=.05,be.enableZoom=!1,be.rotateSpeed=1,be.minDistance=8,be.minPolarAngle=.04,be.maxPolarAngle=Math.PI/2-.01,be.zoomSpeed=K.zoomSpeed,be.panSpeed=1,be.screenSpacePanning=!0,et.domElement.addEventListener("wheel",x=>{x.preventDefault(),kt=void 0,Gn();const N=Yt??Ue.position.distanceTo(be.target),R=Math.exp(it.clamp(x.deltaY,-240,240)*.00105);Yt=it.clamp(N*R,be.minDistance,be.maxDistance),$n()},{passive:!1}),be.addEventListener("start",()=>{kt=void 0,Yt=void 0,Gn(),$n(),gn=!0}),p_(xr,Ue,be,()=>{be.enableDamping=!0,be.dampingFactor=Md,kt=void 0,Yt=void 0,Gn(),$t=void 0,$n(),gn=!0},()=>{be.enableDamping=!0,be.dampingFactor=Dc});const n=(x,N,R)=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="${x}" fill="${N}" stroke="#fff8e8" stroke-width="1.2" stroke-linejoin="round"/></svg>`)}") 14 14,${R}`,e=n("M14 2.2 22 5.1v6.3c0 5.4-3.3 9.8-8 12.5-4.7-2.7-8-7.1-8-12.5V5.1l8-2.9Z","#f28b45","crosshair"),t=n("M14 2.2 22 5.1v6.3c0 5.4-3.3 9.8-8 12.5-4.7-2.7-8-7.1-8-12.5V5.1l8-2.9Z","#1677ff","crosshair"),i=n("M9.2 13V6.4a1.7 1.7 0 0 1 3.4 0v5.1V4.7a1.7 1.7 0 0 1 3.4 0v6.9V6.4a1.7 1.7 0 0 1 3.4 0v7.1l1.2-1.1a1.8 1.8 0 0 1 2.5 2.6l-4.5 5.1a4.2 4.2 0 0 1-3.1 1.4h-2.1a4.2 4.2 0 0 1-3.4-1.7l-3.1-4.2a1.8 1.8 0 0 1 2.7-2.4L9.2 14Z","#46695e","grab"),s=n("M7 12.4V8.1a1.7 1.7 0 0 1 3.4 0v2.6V6.9a1.7 1.7 0 0 1 3.4 0v3.8V7.6a1.7 1.7 0 0 1 3.4 0v4l1.1-1a1.8 1.8 0 0 1 2.5 2.6l-3.1 3.6a4.8 4.8 0 0 1-3.6 1.7h-1.8a4.7 4.7 0 0 1-3.6-1.7l-2.1-2.5a1.8 1.8 0 0 1 .4-1.9Z","#3d5b52","grabbing");let r,o=!0;const a=()=>{const x=sn?.selectionTarget()==="start",N=xi?s:sn?.active()?o?$t?"pointer":x?t:e:"not-allowed":$t?"pointer":i;et.domElement.style.setProperty("cursor",N,"important")},l=new Map;let c;const u=(x,N)=>Math.hypot(x.x-N.x,x.y-N.y),d=x=>{if(x.pointerType!=="touch"||(l.set(x.pointerId,{x:x.clientX,y:x.clientY}),l.size!==2||c))return;const N=[...l.values()];c={distance:Math.max(2,u(N[0],N[1])),centerX:(N[0].x+N[1].x)/2,centerY:(N[0].y+N[1].y)/2,enableRotate:be.enableRotate,enablePan:be.enablePan},be.enableRotate=!1,be.enablePan=!1,Qn=void 0,xi=0,kt=void 0,Yt=void 0,Gn(),$n(),a()},h=x=>{if(x.pointerType!=="touch")return;const N=l.get(x.pointerId);if(!N||(N.x=x.clientX,N.y=x.clientY,!c))return;const R=[...l.values()];if(R.length<2)return;x.preventDefault();const B=(R[0].x+R[1].x)/2,V=(R[0].y+R[1].y)/2,Y=B-c.centerX,H=V-c.centerY,X=Math.max(2,u(R[0],R[1])),W=Yt??Ue.position.distanceTo(be.target),de=2*W*Math.tan(Ue.fov*Math.PI/360)/innerHeight,te=new O().setFromMatrixColumn(Ue.matrix,0),Se=new O().setFromMatrixColumn(Ue.matrix,1),ye=te.multiplyScalar(-Y*de).add(Se.multiplyScalar(H*de));Ue.position.add(ye),be.target.add(ye),Yt=it.clamp(W*c.distance/X,be.minDistance,be.maxDistance),c.distance=X,c.centerX=B,c.centerY=V,kt=void 0,$n(),gn=!0},f=x=>{x.pointerType==="touch"&&(l.delete(x.pointerId),c&&l.size<2&&(be.enableRotate=c.enableRotate,be.enablePan=c.enablePan,c=void 0),xi=l.size?1:0,a())};et.domElement.addEventListener("pointerdown",d,!0),et.domElement.addEventListener("pointermove",h,!0),et.domElement.addEventListener("pointerup",f,!0),et.domElement.addEventListener("pointercancel",f,!0),document.addEventListener("park-navigation-mode",x=>{x.detail&&(o=!0),a()}),document.addEventListener("park-navigation-selection",a),et.domElement.addEventListener("pointerdown",y_,!0),et.domElement.addEventListener("pointermove",x=>{Bs!==x.pointerId||!(x.buttons&1)||(Cs=x.clientX-Zl,Ps=x.clientY-Kl,Zl=x.clientX,Kl=x.clientY,Lc=performance.now())},!0),et.domElement.addEventListener("pointerup",x=>fh(x,!0),!0),et.domElement.addEventListener("pointercancel",x=>fh(x,!1),!0),et.domElement.addEventListener("pointerdown",x=>{xi=x.buttons||1,$n(),x.button===1&&(x.preventDefault(),kt=void 0,Gn(),Yt=Ue.position.distanceTo(be.target),r={id:x.pointerId,lastY:x.clientY},et.domElement.setPointerCapture(x.pointerId)),x.button===0&&(Qn={x:x.clientX,y:x.clientY,time:performance.now()}),a()}),et.domElement.addEventListener("pointermove",x=>{if(xi=x.buttons,r?.id===x.pointerId){const N=Yt??Ue.position.distanceTo(be.target);Yt=it.clamp(N*Math.exp((x.clientY-r.lastY)*.004),be.minDistance,be.maxDistance),r.lastY=x.clientY,kt=void 0,$n(),x.preventDefault(),a();return}if(rn){if(!x.buttons){const N=mh(x);if(N!==$t&&($t=N,gn=!0),sn?.active()){const R=N?.position??gh(x);o=!!(R&&Ze.isDisplayPoint(R.x,R.z))}}a()}}),et.domElement.addEventListener("pointerleave",()=>{!xi&&$t&&($t=void 0,gn=!0),o=!1,a()}),et.domElement.addEventListener("pointerup",x=>{if(xi=x.buttons,r?.id===x.pointerId){r=void 0,et.domElement.hasPointerCapture(x.pointerId)&&et.domElement.releasePointerCapture(x.pointerId),a();return}if(a(),!rn||x.button!==0||!Qn){Qn=void 0;return}if(Math.hypot(x.clientX-Qn.x,x.clientY-Qn.y)<5&&performance.now()-Qn.time<700){const N=mh(x);if(sn?.active()){const R=N?N.position:gh(x);R&&Ze.isDisplayPoint(R.x,R.z)&&sn.selectPoint(R,N?.userData.building?.name,N),Un=void 0,ge("info").hidden=!0}else N?Uc(N.userData.building):(Un=void 0,$t=void 0,ge("info").hidden=!0);gn=!0}Qn=void 0}),et.domElement.addEventListener("pointercancel",x=>{r?.id===x.pointerId&&(r=void 0),xi=0,Qn=void 0,a()}),et.domElement.addEventListener("webglcontextlost",x=>{x.preventDefault(),ge("loading").hidden=!1,ge("loading-text").textContent="圖形環境已中斷，請重新整理頁面以恢復場景。"});const m=new ed(K.skyColor,"#9c9c86",1.4);It.add(m),Nt.castShadow=!0,Nt.shadow.mapSize.set(4096,4096),Nt.shadow.bias=-15e-5,Nt.shadow.normalBias=.22,Nt.shadow.radius=3,It.add(Nt,Nt.target),kn=new t1(et),kn.addPass(new n1(It,Ue)),_i=new yi(It,Ue,innerWidth,innerHeight),_i.kernelRadius=3,_i.minDistance=2e-4,_i.maxDistance=.025,_i.enabled=!1,kn.addPass(_i),nn=new Ei(new re(innerWidth,innerHeight),It,Ue),nn.edgeStrength=3.2,nn.edgeGlow=.3,nn.edgeThickness=1.5,nn.visibleEdgeColor.set("#f1d477"),nn.hiddenEdgeColor.set("#bdad70"),Ao=new a1,Co=new l1,Ao.enabled=!1,Co.enabled=!1,kn.addPass(Ao),kn.addPass(Co);const y=nn.render.bind(nn);nn.render=(...x)=>{const N=Ue.layers.mask;Ue.layers.disable(1);try{y(...x)}finally{Ue.layers.mask=N}},kn.addPass(nn),vr=new s1(It,Ue,{focus:K.dofFocus,aperture:K.dofStrength*8e-5,maxblur:K.dofStrength*.012}),kn.addPass(vr),kn.addPass(new i1),Ze=await d_(x=>{ge("loading-text").textContent=x}),It.add(Ze.group),Ze.setGroundColor(K.groundColor),Ze.setExteriorGroundColor(K.exteriorGroundColor),Ze.setExteriorRoadColor(K.exteriorRoadColor),Ze.setExteriorBuildingOpacity(K.exteriorBuildingOpacity),Cd();const p=f_(Ze.heightAt,Ai),g=M_(It,Ze.heightAt,Ai,Ze.group.userData.contextHeight,C_,Ze.contextSource,Ue);et.info.autoReset=!1,rn=!0,Ir(),Cr(!0),P_(),ge("loading").hidden=!0,requestAnimationFrame(Rd),[Jl,sn]=await Promise.all([p,g]);let v=performance.now(),S=0;setInterval(()=>{const x=performance.now();ah=(zo-S)*1e3/(x-v),v=x,S=zo},1e3);const M={ready:!0,origin:Fo,buildings:Bt,controlPoints:Zu,walkways:Ze.walkways,obstacles:Ze.obstacles,entrances:Ze.entrances,heightAt:Ze.heightAt,lodStats:()=>Ze.models.map(x=>{const N=[];return x.traverse(R=>{R instanceof Lo&&N.push({name:R.parent?.name??R.name,active:R.getCurrentLevel(),distances:R.levels.map(B=>B.distance),triangles:R.levels.map(B=>{let V=0;return B.object.traverse(Y=>{Y instanceof ft&&(V+=(Y.geometry.index?.count??Y.geometry.getAttribute("position").count)/3)}),V})})}),{id:x.name,tiers:N}}),rideState:()=>({tram:Ze.models.find(x=>x.name==="tram").position.toArray(),carousel:Ze.models.find(x=>x.name==="carousel").getObjectByName("旋轉木馬・雙層轉盤與坐騎").rotation.y}),home:()=>Cr(!0),zone:x=>Vo(x,!0),building:x=>tc(x,!0),view:(x,N)=>Ai(new O(...N),new O(...x),!0),state:()=>({camera:Ue.position.toArray(),target:be.target.toArray(),maxDistance:be.maxDistance,autoOrbiting:$o,near:Ue.near,far:Ue.far,settings:{...K},fps:ah,drawCalls:et.info.render.calls,triangles:et.info.render.triangles,trees:Ze.treeCount,models:Ze.models.length,selected:Un?.id,hovered:$t?.name}),rendererInfo:()=>{const x=et.getContext(),N=x.getExtension("WEBGL_debug_renderer_info");return{vendor:N?x.getParameter(N.UNMASKED_VENDOR_WEBGL):x.getParameter(x.VENDOR),renderer:N?x.getParameter(N.UNMASKED_RENDERER_WEBGL):x.getParameter(x.RENDERER),viewport:[innerWidth,innerHeight],pixelRatio:et.getPixelRatio()}},screenPoint:x=>{const N=Ze.models.find(V=>V.name===x),R=Bt.find(V=>V.id===x);if(!N||!R)return;const B=N.position.clone().add(new O(0,R.height*.5,0)).project(Ue);return[(B.x*.5+.5)*innerWidth,(-B.y*.5+.5)*innerHeight]}};Object.assign(window,{__park:M});const C=new URLSearchParams(location.search).get("view"),D=new URLSearchParams(location.search).get("forest-review");if(D==="2d"||D==="3d")for(const x of Ze.treeLods)x.levels[1].distance=0,x.levels[2].distance=D==="2d"?0:1/0;if(C)if(Yi.some(x=>x.id===C))Vo(C,!0);else if(Bt.some(x=>x.id===C))tc(C,!0);else if(C==="top")M.view([230,1400,221],hr);else if(C==="south")M.view([230,820,1250],hr);else if(C==="east")M.view([1250,820,220],hr);else if(C==="west")M.view([-800,820,220],hr);else if(C==="earth-rear"){const x=Ze.models.find(N=>N.name==="earth");M.view([80,x.position.y+9,-35],[60,x.position.y+2,-63])}else if(C==="howl-rear"){const x=Ze.models.find(N=>N.name==="howl");M.view([482,x.position.y+20,175],[458,x.position.y+8,150])}else C==="walk"&&M.view([375,Ze.heightAt(375,112)+1.7,112],[389,Ze.heightAt(389,96)+4,96]);!C&&!D&&E_();const I=document.createElement("output");I.id="qa-diagnostics",I.hidden=!0,xr.append(I);const _=document.createElement("script");_.id="scene-manifest",_.type="application/json",_.textContent=JSON.stringify({schemaVersion:2,bounds:je,origin:Fo,buildings:Bt,controlPoints:Zu,walkways:Ze.walkways,obstacles:Ze.obstacles,entrances:Ze.entrances,facilities:Jl.facilities}),xr.append(_),setInterval(()=>{I.textContent=JSON.stringify({state:M.state(),hardware:M.rendererInfo(),forest:{tilesByLevel:[0,1,2].map(x=>Ze.treeLods.filter(N=>N.getCurrentLevel()===x).length),billboardTrees:Ze.treeLods.filter(x=>x.getCurrentLevel()===2).reduce((x,N)=>x+N.levels[2].object.count,0)},screenPoints:Object.fromEntries(Bt.map(x=>[x.id,M.screenPoint(x.id)]))})},1e3)}window.addEventListener("resize",Pd);L_().catch(n=>{console.error(n),ge("loading-text").textContent=`無法開啟場景：${n instanceof Error?n.message:"未知錯誤"}。請確認瀏覽器支援 WebGL 2，並使用啟動網址而非直接開啟 HTML。`,document.querySelector(".loader")?.remove()});
