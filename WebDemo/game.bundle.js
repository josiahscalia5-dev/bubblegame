var lg=Object.defineProperty;var cg=(i,e)=>{for(var t in e)lg(i,t,{get:e[t],enumerable:!0})};var Dh="170";var ug=0,Mf=1,hg=2;var Jp=1,dg=2,Gi=3,Ai=0,Fn=1,qe=2,Si=0,Gr=1,mn=2,Tf=3,Sf=4,Nt=5,Ks=100,fg=101,pg=102,mg=103,gg=104,zh=200,kt=201,vg=202,xg=203,qo=204,At=205,yg=206,bg=207,_g=208,wg=209,Eg=210,Mg=211,Tg=212,Sg=213,Ag=214,yu=0,bu=1,_u=2,qr=3,wu=4,Eu=5,Mu=6,Tu=7,Bh=0,Rg=1,Cg=2,bs=0,Oh=1,kh=2,Vh=3,Gh=4,Pg=5,Wh=6,la=7,Af="attached",Ig="detached",Qp=300,Yr=301,jr=302,Su=303,Au=304,Yl=306,Js=1e3,Xi=1001,Yo=1002,Ln=1003,Xh=1004;var Or=1005;var $n=1006,Oo=1007;var Ti=1008;var Yi=1009,e0=1010,t0=1011,jo=1012,$h=1013,Qs=1014,gi=1015,yi=1016,qh=1017,Yh=1018,Kr=1020,n0=35902,i0=1021,s0=1022,ii=1023,r0=1024,o0=1025,Wr=1026,Zr=1027,jh=1028,Kh=1029,a0=1030,Zh=1031;var Jh=1033,ul=33776,hl=33777,dl=33778,fl=33779,Ru=35840,Cu=35841,Pu=35842,Iu=35843,Fu=36196,Lu=37492,Uu=37496,Nu=37808,Hu=37809,Du=37810,zu=37811,Bu=37812,Ou=37813,ku=37814,Vu=37815,Gu=37816,Wu=37817,Xu=37818,$u=37819,qu=37820,Yu=37821,pl=36492,ju=36494,Ku=36495,l0=36283,Zu=36284,Ju=36285,Qu=36286;var Jr=2300,Qr=2301,Dc=2302,Rf=2400,Cf=2401,Pf=2402,Fg=2500;var c0=0,jl=1,ca=2,Lg=3200,Ug=3201;var Qh=0,Ng=1,vs="",St="srgb",Un="srgb-linear",Kl="linear",Ft="srgb";var _r=7680;var If=519,Hg=512,Dg=513,zg=514,u0=515,Bg=516,Og=517,kg=518,Vg=519,eh=35044,En=35048;var Ff="300 es",$i=2e3,ml=2001,_s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lf=1234567,ko=Math.PI/180,eo=180/Math.PI;function si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function pn(i,e,t){return Math.max(e,Math.min(t,i))}function ed(i,e){return(i%e+e)%e}function Gg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wg(i,e,t){return i!==e?(t-i)/(e-i):0}function Vo(i,e,t){return(1-t)*i+t*e}function Xg(i,e,t,n){return Vo(i,e,1-Math.exp(-t*n))}function $g(i,e=1){return e-Math.abs(ed(i,e*2)-e)}function qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kg(i,e){return i+Math.random()*(e-i)}function Zg(i){return i*(.5-Math.random())}function Jg(i){i!==void 0&&(Lf=i);let e=Lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qg(i){return i*ko}function ev(i){return i*eo}function tv(i){return(i&i-1)===0&&i!==0}function nv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function iv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sv(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _e={DEG2RAD:ko,RAD2DEG:eo,generateUUID:si,clamp:pn,euclideanModulo:ed,mapLinear:Gg,inverseLerp:Wg,lerp:Vo,damp:Xg,pingpong:$g,smoothstep:qg,smootherstep:Yg,randInt:jg,randFloat:Kg,randFloatSpread:Zg,seededRandom:Jg,degToRad:Qg,radToDeg:ev,isPowerOfTwo:tv,ceilPowerOfTwo:nv,floorPowerOfTwo:iv,setQuaternionFromProperEuler:sv,normalize:Lt,denormalize:mi},ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],y=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return r[0]=o*v+a*x+l*R,r[3]=o*g+a*y+l*E,r[6]=o*m+a*b+l*A,r[1]=c*v+u*x+h*R,r[4]=c*g+u*y+h*E,r[7]=c*m+u*b+h*A,r[2]=d*v+f*x+p*R,r[5]=d*g+f*y+p*E,r[8]=d*m+f*b+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zc=new pt;function h0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rv(){let i=Ko("canvas");return i.style.display="block",i}var Uf={};function zo(i){i in Uf||(Uf[i]=!0,console.warn(i))}function ov(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function av(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lv(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var yt={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ft&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ft&&(i.r=Xr(i.r),i.g=Xr(i.g),i.b=Xr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vs?Kl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nf=[.64,.33,.3,.6,.15,.06],Hf=[.2126,.7152,.0722],Df=[.3127,.329],zf=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Un]:{primaries:Nf,whitePoint:Df,transfer:Kl,toXYZ:zf,fromXYZ:Bf,luminanceCoefficients:Hf,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:Nf,whitePoint:Df,transfer:Ft,toXYZ:zf,fromXYZ:Bf,luminanceCoefficients:Hf,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});var wr,th=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=Ko("canvas")),wr.width=e.width,wr.height=e.height;let n=wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cv=0,gl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bc(s[o].image)):r.push(Bc(s[o]))}else r=Bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uv=0,_n=class i extends _s{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xi,s=Xi,r=$n,o=Ti,a=ii,l=Yi,c=i.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=si(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Qp;_n.DEFAULT_ANISOTROPY=1;var bt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(f+1)/2,R=(m+1)/2,E=(u+d)/4,A=(h+v)/4,C=(p+g)/4;return y>b&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nh=class extends _s{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new _n(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vl=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ih=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*v,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,m*x);g=Math.sin(g*E)/R,a=Math.sin(a*E)/R}let b=a*x;if(l=l*g+d*b,c=c*g+f*b,u=u*g+p*b,h=h*g+v*b,g===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Of.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new w,Of=new _t,an=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Ia.subVectors(this.max,Ao),Er.subVectors(e.a,Ao),Mr.subVectors(e.b,Ao),Tr.subVectors(e.c,Ao),hs.subVectors(Mr,Er),ds.subVectors(Tr,Mr),Gs.subVectors(Er,Tr);let t=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Gs.z,Gs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Gs.z,0,-Gs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Gs.y,Gs.x,0];return!kc(t,Er,Mr,Tr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!kc(t,Er,Mr,Tr,Ia))?!1:(Fa.crossVectors(hs,ds),t=[Fa.x,Fa.y,Fa.z],kc(t,Er,Mr,Tr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Di=[new w,new w,new w,new w,new w,new w,new w,new w],di=new w,Pa=new an,Er=new w,Mr=new w,Tr=new w,hs=new w,ds=new w,Gs=new w,Ao=new w,Ia=new w,Fa=new w,Ws=new w;function kc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ws.fromArray(i,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),u=n.dot(Ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var hv=new an,Ro=new w,Vc=new w,On=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);let t=Ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Vc)),this.expandByPoint(Ro.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new w,Gc=new w,La=new w,fs=new w,Wc=new w,Ua=new w,Xc=new w,er=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gc.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=fs.dot(this.direction),l=-fs.dot(La),c=fs.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Gc).addScaledVector(La,d),f}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){Wc.subVectors(t,e),Ua.subVectors(n,e),Xc.crossVectors(Wc,Ua);let o=this.direction.dot(Xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fs.subVectors(this.origin,e);let l=a*this.direction.dot(Ua.crossVectors(fs,Ua));if(l<0)return null;let c=a*this.direction.dot(Wc.cross(fs));if(c<0||l+c>o)return null;let u=-a*fs.dot(Xc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,p,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,v,g)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,v=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dv,e,fv)}lookAt(e,t,n){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ps.crossVectors(n,Kn),ps.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ps.crossVectors(n,Kn)),ps.normalize(),Na.crossVectors(Kn,ps),s[0]=ps.x,s[4]=Na.x,s[8]=Kn.x,s[1]=ps.y,s[5]=Na.y,s[9]=Kn.y,s[2]=ps.z,s[6]=Na.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],y=n[7],b=n[11],R=n[15],E=s[0],A=s[4],C=s[8],M=s[12],_=s[1],S=s[5],U=s[9],N=s[13],I=s[2],z=s[6],L=s[10],O=s[14],D=s[3],j=s[7],k=s[11],Z=s[15];return r[0]=o*E+a*_+l*I+c*D,r[4]=o*A+a*S+l*z+c*j,r[8]=o*C+a*U+l*L+c*k,r[12]=o*M+a*N+l*O+c*Z,r[1]=u*E+h*_+d*I+f*D,r[5]=u*A+h*S+d*z+f*j,r[9]=u*C+h*U+d*L+f*k,r[13]=u*M+h*N+d*O+f*Z,r[2]=p*E+v*_+g*I+m*D,r[6]=p*A+v*S+g*z+m*j,r[10]=p*C+v*U+g*L+m*k,r[14]=p*M+v*N+g*O+m*Z,r[3]=x*E+y*_+b*I+R*D,r[7]=x*A+y*S+b*z+R*j,r[11]=x*C+y*U+b*L+R*k,r[15]=x*M+y*N+b*O+R*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],x=h*g*c-v*d*c+v*l*f-a*g*f-h*l*m+a*d*m,y=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,b=u*v*c-p*h*c+p*a*f-o*v*f-u*a*m+o*h*m,R=p*h*l-u*v*l-p*a*d+o*v*d+u*a*g-o*h*g,E=t*x+n*y+s*b+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=x*A,e[1]=(v*d*r-h*g*r-v*s*f+n*g*f+h*s*m-n*d*m)*A,e[2]=(a*g*r-v*l*r+v*s*c-n*g*c-a*s*m+n*l*m)*A,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*A,e[4]=y*A,e[5]=(u*g*r-p*d*r+p*s*f-t*g*f-u*s*m+t*d*m)*A,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=b*A,e[9]=(p*h*r-u*v*r-p*n*f+t*v*f+u*n*m-t*h*m)*A,e[10]=(o*v*r-p*a*r+p*n*c-t*v*c-o*n*m+t*a*m)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=R*A,e[13]=(u*v*s-p*h*s+p*n*d-t*v*d-u*n*g+t*h*g)*A,e[14]=(p*a*s-o*v*s-p*n*l+t*v*l+o*n*g-t*a*g)*A,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,v=o*u,g=o*h,m=a*h,x=l*c,y=l*u,b=l*h,R=n.x,E=n.y,A=n.z;return s[0]=(1-(v+m))*R,s[1]=(f+b)*R,s[2]=(p-y)*R,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+m))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(p+y)*A,s[9]=(g-x)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Sr.set(s[0],s[1],s[2]).length(),o=Sr.set(s[4],s[5],s[6]).length(),a=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fi.copy(this);let c=1/r,u=1/o,h=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,t.setFromRotationMatrix(fi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=$i){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(a===$i)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ml)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$i){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,p,v;if(a===$i)p=(o+r)*h,v=-2*h;else if(a===ml)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new w,fi=new Se,dv=new w(0,0,0),fv=new w(1,1,1),ps=new w,Na=new w,Kn=new w,kf=new Se,Vf=new _t,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vf.setFromEuler(this),this.setFromQuaternion(Vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pv=0,Gf=new w,Ar=new _t,Bi=new Se,Ha=new w,Co=new w,mv=new w,gv=new _t,Wf=new w(1,0,0),Xf=new w(0,1,0),$f=new w(0,0,1),qf={type:"added"},vv={type:"removed"},Rr={type:"childadded",child:null},$c={type:"childremoved",child:null},Jt=class i extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new Sn,n=new _t,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new pt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Wf,e)}rotateY(e){return this.rotateOnAxis(Xf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return Gf.copy(e).applyQuaternion(this.quaternion),this.position.add(Gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wf,e)}translateY(e){return this.translateOnAxis(Xf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Co,Ha,this.up):Bi.lookAt(Ha,Co,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qf),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vv),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qf),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Jt.DEFAULT_UP=new w(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new w,Oi=new w,qc=new w,ki=new w,Cr=new w,Pr=new w,Yf=new w,Yc=new w,jc=new w,Kc=new w,Zc=new bt,Jc=new bt,Qc=new bt,xs=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pi.subVectors(s,t),Oi.subVectors(n,t),qc.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Oi),l=pi.dot(qc),c=Oi.dot(Oi),u=Oi.dot(qc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Zc.setScalar(0),Jc.setScalar(0),Qc.setScalar(0),Zc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zc,r.x),o.addScaledVector(Jc,r.y),o.addScaledVector(Qc,r.z),o}static isFrontFacing(e,t,n,s){return pi.subVectors(n,t),Oi.subVectors(e,t),pi.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),pi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Cr.subVectors(s,n),Pr.subVectors(r,n),Yc.subVectors(e,n);let l=Cr.dot(Yc),c=Pr.dot(Yc);if(l<=0&&c<=0)return t.copy(n);jc.subVectors(e,s);let u=Cr.dot(jc),h=Pr.dot(jc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Cr,o);Kc.subVectors(e,r);let f=Cr.dot(Kc),p=Pr.dot(Kc);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Pr,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Yf.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(Yf,a);let m=1/(g+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Da={h:0,s:0,l:0};function eu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=ed(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=eu(o,r,e+1/3),this.g=eu(o,r,e),this.b=eu(o,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=d0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return yt.fromWorkingColorSpace(In.copy(this),e),Math.round(pn(In.r*255,0,255))*65536+Math.round(pn(In.g*255,0,255))*256+Math.round(pn(In.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(In.copy(this),t);let n=In.r,s=In.g,r=In.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=St){yt.fromWorkingColorSpace(In.copy(this),e);let t=In.r,n=In.g,s=In.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Da);let n=Vo(ms.h,Da.h,t),s=Vo(ms.s,Da.s,t),r=Vo(ms.l,Da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new re;re.NAMES=d0;var xv=0,kn=class extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=si(),this.name="",this.blending=Gr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=At,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==At&&(n.blendDst=this.blendDst),this.blendEquation!==Ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==If&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bt=class extends kn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new w,za=new ae,nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}};var xl=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yl=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},yv=0,ni=new Se,tu=new Jt,Ir=new w,Zn=new an,Po=new an,bn=new w,Ze=class i extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h0(e)?yl:xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(Zn.min,Po.min),Zn.expandByPoint(bn),bn.addVectors(Zn.max,Po.max),Zn.expandByPoint(bn)):(Zn.expandByPoint(Po.min),Zn.expandByPoint(Po.max))}Zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),bn.add(Ir)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new w,l[C]=new w;let c=new w,u=new w,h=new w,d=new ae,f=new ae,p=new ae,v=new w,g=new w;function m(C,M,_){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,_),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(S),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(S),a[C].add(v),a[M].add(v),a[_].add(v),l[C].add(g),l[M].add(g),l[_].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){let _=x[C],S=_.start,U=_.count;for(let N=S,I=S+U;N<I;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new w,b=new w,R=new w,E=new w;function A(C){R.fromBufferAttribute(s,C),E.copy(R);let M=a[C];y.copy(M),y.sub(R.multiplyScalar(R.dot(M))).normalize(),b.crossVectors(E,M);let S=b.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,S)}for(let C=0,M=x.length;C<M;++C){let _=x[C],S=_.start,U=_.count;for(let N=S,I=S+U;N<I;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new nt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jf=new Se,Xs=new er,Ba=new On,Kf=new w,Oa=new w,ka=new w,Va=new w,nu=new w,Ga=new w,Zf=new w,Wa=new w,Te=class extends Jt{constructor(e=new Ze,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(nu.fromBufferAttribute(h,e),o?Ga.addScaledVector(nu,u):Ga.addScaledVector(nu.sub(t),u))}t.add(Ga)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Ba.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Ba,Kf)===null||Xs.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(jf.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,R=y;b<R;b+=3){let E=a.getX(b),A=a.getX(b+1),C=a.getX(b+2);s=Xa(this,m,e,n,c,u,h,E,A,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let x=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);s=Xa(this,o,e,n,c,u,h,x,y,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,R=y;b<R;b+=3){let E=b,A=b+1,C=b+2;s=Xa(this,m,e,n,c,u,h,E,A,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let x=g,y=g+1,b=g+2;s=Xa(this,o,e,n,c,u,h,x,y,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function bv(i,e,t,n,s,r,o,a){let l;if(e.side===Fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ai,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:i}}function Xa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Oa),i.getVertexPosition(l,ka),i.getVertexPosition(c,Va);let u=bv(i,e,t,n,Oa,ka,Va,Zf);if(u){let h=new w;xs.getBarycoord(Zf,Oa,ka,Va,h),s&&(u.uv=xs.getInterpolatedAttribute(s,a,l,c,h,new ae)),r&&(u.uv1=xs.getInterpolatedAttribute(r,a,l,c,h,new ae)),o&&(u.normal=xs.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new w,materialIndex:0};xs.getNormal(Oa,ka,Va,d.normal),u.face=d,u.barycoord=h}return u}var tr=class i extends Ze{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function p(v,g,m,x,y,b,R,E,A,C,M){let _=b/A,S=R/C,U=b/2,N=R/2,I=E/2,z=A+1,L=C+1,O=0,D=0,j=new w;for(let k=0;k<L;k++){let Z=k*S-N;for(let ge=0;ge<z;ge++){let de=ge*_-U;j[v]=de*x,j[g]=Z*y,j[m]=I,c.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[m]=E>0?1:-1,u.push(j.x,j.y,j.z),h.push(ge/A),h.push(1-k/C),O+=1}}for(let k=0;k<C;k++)for(let Z=0;Z<A;Z++){let ge=d+Z+z*k,de=d+Z+z*(k+1),V=d+(Z+1)+z*(k+1),J=d+(Z+1)+z*k;l.push(ge,de,J),l.push(de,V,J),D+=6}a.addGroup(f,D,M),f+=D,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function to(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=to(i[t]);for(let s in n)e[s]=n[s]}return e}function _v(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function f0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var Ps={clone:to,merge:zn},wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ev=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ue=class extends kn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wv,this.fragmentShader=Ev,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bl=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gs=new w,Jf=new ae,Qf=new ae,Zt=class extends bl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,Jf,Qf),t.subVectors(Qf,Jf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ko*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,Lr=1,sh=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Fr,Lr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Fr,Lr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Fr,Lr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Fr,Lr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Fr,Lr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Fr,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_l=class extends _n{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rh=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tr(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:to(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Si});r.uniforms.tEquirect.value=t;let o=new Te(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=$n),new sh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},iu=new w,Mv=new w,Tv=new pt,Wi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=iu.subVectors(n,t).cross(Mv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(iu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tv.getNormalMatrix(e),s=this.coplanarPoint(iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$s=new On,$a=new w,Jo=class{constructor(e=new Wi,t=new Wi,n=new Wi,s=new Wi,r=new Wi,o=new Wi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],x=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,g-f,b-m).normalize(),n[1].setComponents(l+r,d+c,g+f,b+m).normalize(),n[2].setComponents(l+o,d+u,g+p,b+x).normalize(),n[3].setComponents(l-o,d-u,g-p,b-x).normalize(),n[4].setComponents(l-a,d-h,g-v,b-y).normalize(),t===$i)n[5].setComponents(l+a,d+h,g+v,b+y).normalize();else if(t===ml)n[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function p0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sv(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wt=class i extends Ze{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*d-o;for(let y=0;y<c;y++){let b=y*h-r;p.push(b,-x,0),v.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let y=x+c*m,b=x+c*(m+1),R=x+1+c*(m+1),E=x+1+c*m;f.push(y,b,E),f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rv=`#ifdef USE_ALPHAHASH
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
#endif`,Cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lv=`#ifdef USE_AOMAP
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
#endif`,Uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
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
#endif`,Hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
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
#endif`,kv=`#ifdef USE_BUMPMAP
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kv=`#define PI 3.141592653589793
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
} // validated`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jv=`vec3 transformedNormal = objectNormal;
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
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
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
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#endif`,Tx=`struct PhysicalMaterial {
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
}`,Sx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hy=`float getShadowMask() {
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
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Ly=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uy=`#define DISTANCE
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
}`,Ny=`#define DISTANCE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
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
}`,By=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,ky=`uniform vec3 diffuse;
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
}`,Vy=`#define LAMBERT
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
}`,Gy=`#define LAMBERT
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
}`,Wy=`#define MATCAP
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
}`,Xy=`#define MATCAP
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
}`,$y=`#define NORMAL
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
}`,qy=`#define NORMAL
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
}`,Yy=`#define PHONG
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
}`,jy=`#define PHONG
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
}`,Ky=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,Jy=`#define TOON
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
}`,Qy=`#define TOON
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
}`,e1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
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
}`,s1=`uniform float rotation;
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
}`,r1=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Av,alphahash_pars_fragment:Rv,alphamap_fragment:Cv,alphamap_pars_fragment:Pv,alphatest_fragment:Iv,alphatest_pars_fragment:Fv,aomap_fragment:Lv,aomap_pars_fragment:Uv,batching_pars_vertex:Nv,batching_vertex:Hv,begin_vertex:Dv,beginnormal_vertex:zv,bsdfs:Bv,iridescence_fragment:Ov,bumpmap_pars_fragment:kv,clipping_planes_fragment:Vv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Wv,clipping_planes_vertex:Xv,color_fragment:$v,color_pars_fragment:qv,color_pars_vertex:Yv,color_vertex:jv,common:Kv,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Jv,displacementmap_pars_vertex:Qv,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ox,envmap_pars_fragment:ax,envmap_pars_vertex:lx,envmap_physical_pars_fragment:yx,envmap_vertex:cx,fog_vertex:ux,fog_pars_vertex:hx,fog_fragment:dx,fog_pars_fragment:fx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:vx,lights_pars_begin:xx,lights_toon_fragment:bx,lights_toon_pars_fragment:_x,lights_phong_fragment:wx,lights_phong_pars_fragment:Ex,lights_physical_fragment:Mx,lights_physical_pars_fragment:Tx,lights_fragment_begin:Sx,lights_fragment_maps:Ax,lights_fragment_end:Rx,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Fx,map_fragment:Lx,map_pars_fragment:Ux,map_particle_fragment:Nx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Bx,morphcolor_vertex:Ox,morphnormal_vertex:kx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:$x,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Qx,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:sy,dithering_pars_fragment:ry,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:uy,shadowmask_pars_fragment:hy,skinbase_vertex:dy,skinning_pars_vertex:fy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:vy,tonemapping_fragment:xy,tonemapping_pars_fragment:yy,transmission_fragment:by,transmission_pars_fragment:_y,uv_pars_fragment:wy,uv_pars_vertex:Ey,uv_vertex:My,worldpos_vertex:Ty,background_vert:Sy,background_frag:Ay,backgroundCube_vert:Ry,backgroundCube_frag:Cy,cube_vert:Py,cube_frag:Iy,depth_vert:Fy,depth_frag:Ly,distanceRGBA_vert:Uy,distanceRGBA_frag:Ny,equirect_vert:Hy,equirect_frag:Dy,linedashed_vert:zy,linedashed_frag:By,meshbasic_vert:Oy,meshbasic_frag:ky,meshlambert_vert:Vy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:$y,meshnormal_frag:qy,meshphong_vert:Yy,meshphong_frag:jy,meshphysical_vert:Ky,meshphysical_frag:Zy,meshtoon_vert:Jy,meshtoon_frag:Qy,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:s1,sprite_frag:r1},Oe={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Mi={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new re(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new re(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Mi.physical={uniforms:zn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var qa={r:0,b:0,g:0},qs=new Sn,o1=new Se;function a1(i,e,t,n,s,r,o){let a=new re(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1,b=p(x);b===null?m(a,l):b&&b.isColor&&(m(b,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,y){let b=p(y);b&&(b.isCubeTexture||b.mapping===Yl)?(u===void 0&&(u=new Te(new tr(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:to(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qs.copy(y.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(qs)),u.material.toneMapped=yt.getTransfer(b.colorSpace)!==Ft,(h!==b||d!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Te(new Wt(2,2),new Ue({name:"BackgroundMaterial",uniforms:to(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=yt.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(qa,f0(i)),n.buffers.color.setClear(qa.r,qa.g,qa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:v,addToRenderList:g}}function l1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(_,S,U,N,I){let z=!1,L=h(N,U,S);r!==L&&(r=L,c(r.object)),z=f(_,N,U,I),z&&p(_,N,U,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(_,S,U,N),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,S,U){let N=U.wireframe===!0,I=n[_.id];I===void 0&&(I={},n[_.id]=I);let z=I[S.id];z===void 0&&(z={},I[S.id]=z);let L=z[N];return L===void 0&&(L=d(l()),z[N]=L),L}function d(_){let S=[],U=[],N=[];for(let I=0;I<t;I++)S[I]=0,U[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:U,attributeDivisors:N,object:_,attributes:{},index:null}}function f(_,S,U,N){let I=r.attributes,z=S.attributes,L=0,O=U.getAttributes();for(let D in O)if(O[D].location>=0){let k=I[D],Z=z[D];if(Z===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;L++}return r.attributesNum!==L||r.index!==N}function p(_,S,U,N){let I={},z=S.attributes,L=0,O=U.getAttributes();for(let D in O)if(O[D].location>=0){let k=z[D];k===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(k=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(k=_.instanceColor));let Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),I[D]=Z,L++}r.attributes=I,r.attributesNum=L,r.index=N}function v(){let _=r.newAttributes;for(let S=0,U=_.length;S<U;S++)_[S]=0}function g(_){m(_,0)}function m(_,S){let U=r.newAttributes,N=r.enabledAttributes,I=r.attributeDivisors;U[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),I[_]!==S&&(i.vertexAttribDivisor(_,S),I[_]=S)}function x(){let _=r.newAttributes,S=r.enabledAttributes;for(let U=0,N=S.length;U<N;U++)S[U]!==_[U]&&(i.disableVertexAttribArray(U),S[U]=0)}function y(_,S,U,N,I,z,L){L===!0?i.vertexAttribIPointer(_,S,U,I,z):i.vertexAttribPointer(_,S,U,N,I,z)}function b(_,S,U,N){v();let I=N.attributes,z=U.getAttributes(),L=S.defaultAttributeValues;for(let O in z){let D=z[O];if(D.location>=0){let j=I[O];if(j===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){let k=j.normalized,Z=j.itemSize,ge=e.get(j);if(ge===void 0)continue;let de=ge.buffer,V=ge.type,J=ge.bytesPerElement,me=V===i.INT||V===i.UNSIGNED_INT||j.gpuType===$h;if(j.isInterleavedBufferAttribute){let oe=j.data,xe=oe.stride,ue=j.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<D.locationSize;Re++)m(D.location+Re,oe.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<D.locationSize;Re++)g(D.location+Re);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Re=0;Re<D.locationSize;Re++)y(D.location+Re,Z/D.locationSize,V,k,xe*J,(ue+Z/D.locationSize*Re)*J,me)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<D.locationSize;oe++)m(D.location+oe,j.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<D.locationSize;oe++)g(D.location+oe);i.bindBuffer(i.ARRAY_BUFFER,de);for(let oe=0;oe<D.locationSize;oe++)y(D.location+oe,Z/D.locationSize,V,k,Z*J,Z/D.locationSize*oe*J,me)}}else if(L!==void 0){let k=L[O];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(D.location,k);break;case 3:i.vertexAttrib3fv(D.location,k);break;case 4:i.vertexAttrib4fv(D.location,k);break;default:i.vertexAttrib1fv(D.location,k)}}}}x()}function R(){C();for(let _ in n){let S=n[_];for(let U in S){let N=S[U];for(let I in N)u(N[I].object),delete N[I];delete S[U]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let S=n[_.id];for(let U in S){let N=S[U];for(let I in N)u(N[I].object),delete N[I];delete S[U]}delete n[_.id]}function A(_){for(let S in n){let U=n[S];if(U[_.id]===void 0)continue;let N=U[_.id];for(let I in N)u(N[I].object),delete N[I];delete U[_.id]}}function C(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function c1(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v]*d[v];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function u1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ii&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:R,maxSamples:E}}function h1(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Wi,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let x=r?0:n,y=x*4,b=m.clippingState||null;l.value=b,b=u(p,d,y,f);for(let R=0;R!==y;++R)b[R]=t[R];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let v=h!==null?h.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,b=f;y!==v;++y,b+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function d1(i){let e=new WeakMap;function t(o,a){return a===Su?o.mapping=Yr:a===Au&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Su||a===Au)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ri=class extends bl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,ep=[.125,.215,.35,.446,.526,.582],Zs=20,su=new Ri,tp=new re,ru=null,ou=0,au=0,lu=!1,js=(1+Math.sqrt(5))/2,Ur=1/js,np=[new w(-js,Ur,0),new w(js,Ur,0),new w(-Ur,0,js),new w(Ur,0,js),new w(0,js,-Ur),new w(0,js,Ur),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],no=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ru=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,ou,au),this._renderer.xr.enabled=lu,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:yi,format:ii,colorSpace:Un,depthBuffer:!1},s=ip(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ip(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f1(r)),this._blurMaterial=p1(r,e,t)}return s}_compileMaterial(e){let t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,su)}_sceneToCubeUV(e,t,n,s){let a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tp),u.toneMapping=bs,u.autoClear=!1;let f=new Bt({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),p=new Te(new tr,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(tp),v=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Ya(s,x*y,m>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Yr||e.mapping===jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ya(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,su)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=np[(s-r-1)%np.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Te(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zs-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):Zs;g>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zs}`);let m=[],x=0;for(let A=0;A<Zs;++A){let C=A/v,M=Math.exp(-C*C/2);m.push(M),A===0?x+=M:A<g&&(x+=2*M)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;let b=this._sizeLods[s],R=3*b*(s>y-kr?s-y+kr:0),E=4*(this._cubeSize-b);Ya(t,R,E,3*b,2*b),l.setRenderTarget(t),l.render(h,su)}};function f1(i){let e=[],t=[],n=[],s=i,r=i-kr+1+ep.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-kr?l=ep[o-i+kr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,v=3,g=2,m=1,x=new Float32Array(v*p*f),y=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,C=E>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(M,v*p*E),y.set(d,g*p*E);let _=[E,E,E,E,E,E];b.set(_,m*p*E)}let R=new Ze;R.setAttribute("position",new nt(x,v)),R.setAttribute("uv",new nt(y,g)),R.setAttribute("faceIndex",new nt(b,m)),e.push(R),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ip(i,e,t){let n=new Bn(i,e,t);return n.texture.mapping=Yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function p1(i,e,t){let n=new Float32Array(Zs),s=new w(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:td(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function sp(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function rp(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function td(){return`

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
	`}function m1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Su||l===Au,u=l===Yr||l===jr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new no(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new no(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function g1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function v1(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,p=h.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let y=0,b=x.length;y<b;y+=3){let R=x[y+0],E=x[y+1],A=x[y+2];d.push(R,E,E,A,A,R)}}else if(p!==void 0){let x=p.array;v=p.version;for(let y=0,b=x.length/3-1;y<b;y+=3){let R=y+0,E=y+1,A=y+2;d.push(R,E,E,A,A,R)}}else return;let g=new(h0(d)?yl:xl)(d,1);g.version=v;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function x1(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function h(d,f,p,v){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*v[x];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function y1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function b1(i,e,t){let n=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let b=a.attributes.position.count*y,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*R*4*h),A=new vl(E,b,R,h);A.type=gi,A.needsUpdate=!0;let C=y*4;for(let _=0;_<h;_++){let S=g[_],U=m[_],N=x[_],I=b*R*4*_;for(let z=0;z<S.count;z++){let L=z*C;f===!0&&(s.fromBufferAttribute(S,z),E[I+L+0]=s.x,E[I+L+1]=s.y,E[I+L+2]=s.z,E[I+L+3]=0),p===!0&&(s.fromBufferAttribute(U,z),E[I+L+4]=s.x,E[I+L+5]=s.y,E[I+L+6]=s.z,E[I+L+7]=0),v===!0&&(s.fromBufferAttribute(N,z),E[I+L+8]=s.x,E[I+L+9]=s.y,E[I+L+10]=s.z,E[I+L+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new ae(b,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function _1(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var wl=class extends _n{constructor(e,t,n,s,r,o,a,l,c,u=Wr){if(u!==Wr&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wr&&(n=Qs),n===void 0&&u===Zr&&(n=Kr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},m0=new _n,op=new wl(1,1),g0=new vl,v0=new ih,x0=new _l,ap=[],lp=[],cp=new Float32Array(16),up=new Float32Array(9),hp=new Float32Array(4);function lo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ap[s];if(r===void 0&&(r=new Float32Array(s),ap[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zl(i,e){let t=lp[e];t===void 0&&(t=new Int32Array(e),lp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function w1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function E1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function M1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function T1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function S1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;hp.set(n),i.uniformMatrix2fv(this.addr,!1,hp),vn(t,n)}}function A1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;up.set(n),i.uniformMatrix3fv(this.addr,!1,up),vn(t,n)}}function R1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;cp.set(n),i.uniformMatrix4fv(this.addr,!1,cp),vn(t,n)}}function C1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function P1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function I1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function F1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function L1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function U1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function N1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function H1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function D1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(op.compareFunction=u0,r=op):r=m0,t.setTexture2D(e||r,s)}function z1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||v0,s)}function B1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||x0,s)}function O1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||g0,s)}function k1(i){switch(i){case 5126:return w1;case 35664:return E1;case 35665:return M1;case 35666:return T1;case 35674:return S1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return F1;case 5125:return L1;case 36294:return U1;case 36295:return N1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return O1}}function V1(i,e){i.uniform1fv(this.addr,e)}function G1(i,e){let t=lo(e,this.size,2);i.uniform2fv(this.addr,t)}function W1(i,e){let t=lo(e,this.size,3);i.uniform3fv(this.addr,t)}function X1(i,e){let t=lo(e,this.size,4);i.uniform4fv(this.addr,t)}function $1(i,e){let t=lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q1(i,e){let t=lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y1(i,e){let t=lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function j1(i,e){i.uniform1iv(this.addr,e)}function K1(i,e){i.uniform2iv(this.addr,e)}function Z1(i,e){i.uniform3iv(this.addr,e)}function J1(i,e){i.uniform4iv(this.addr,e)}function Q1(i,e){i.uniform1uiv(this.addr,e)}function eb(i,e){i.uniform2uiv(this.addr,e)}function tb(i,e){i.uniform3uiv(this.addr,e)}function nb(i,e){i.uniform4uiv(this.addr,e)}function ib(i,e,t){let n=this.cache,s=e.length,r=Zl(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||m0,r[o])}function sb(i,e,t){let n=this.cache,s=e.length,r=Zl(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||v0,r[o])}function rb(i,e,t){let n=this.cache,s=e.length,r=Zl(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||x0,r[o])}function ob(i,e,t){let n=this.cache,s=e.length,r=Zl(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||g0,r[o])}function ab(i){switch(i){case 5126:return V1;case 35664:return G1;case 35665:return W1;case 35666:return X1;case 35674:return $1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return j1;case 35667:case 35671:return K1;case 35668:case 35672:return Z1;case 35669:case 35673:return J1;case 5125:return Q1;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ob}}var oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k1(t.type)}},ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ab(t.type)}},lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},cu=/(\w+)(\])?(\[|\.)?/g;function dp(i,e){i.seq.push(e),i.map[e.id]=e}function lb(i,e,t){let n=i.name,s=n.length;for(cu.lastIndex=0;;){let r=cu.exec(n),o=cu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dp(t,c===void 0?new oh(a,i,e):new ah(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new lh(a),dp(t,h)),t=h}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lb(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function fp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var cb=37297,ub=0;function hb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var pp=new pt;function db(i){yt._getMatrix(pp,yt.workingColorSpace,i);let e=`mat3( ${pp.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Kl:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hb(i.getShaderSource(e),o)}else return s}function fb(i,e){let t=db(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pb(i,e){let t;switch(e){case Oh:t="Linear";break;case kh:t="Reinhard";break;case Vh:t="Cineon";break;case Gh:t="ACESFilmic";break;case Wh:t="AgX";break;case la:t="Neutral";break;case Pg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ja=new w;function mb(){yt.getLuminanceCoefficients(ja);let i=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function vb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bo(i){return i!==""}function gp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(yb,_b)}var bb=new Map;function _b(i,e){let t=gt[e];if(t===void 0){let n=bb.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}var wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xp(i){return i.replace(wb,Eb)}function Eb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Mb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yr:case jr:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Rg:e="ENVMAP_BLENDING_MIX";break;case Cg:e="ENVMAP_BLENDING_ADD";break}return e}function Rb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Mb(t),c=Tb(t),u=Sb(t),h=Ab(t),d=Rb(t),f=gb(t),p=vb(r),v=s.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),m.length>0&&(m+=`
`)):(g=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),m=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?gt.tonemapping_pars_fragment:"",t.toneMapping!==bs?pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,fb("linearToOutputTexel",t.outputColorSpace),mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=ch(o),o=gp(o,t),o=vp(o,t),a=ch(a),a=gp(a,t),a=vp(a,t),o=xp(o),a=xp(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=x+g+o,b=x+m+a,R=fp(s,s.VERTEX_SHADER,y),E=fp(s,s.FRAGMENT_SHADER,b);s.attachShader(v,R),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(R).trim(),I=s.getShaderInfoLog(E).trim(),z=!0,L=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,E);else{let O=mp(s,R,"vertex"),D=mp(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+U+`
`+O+`
`+D)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||I==="")&&(L=!1);L&&(S.diagnostics={runnable:z,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:I,prefix:m}})}s.deleteShader(R),s.deleteShader(E),C=new $r(s,v),M=xb(s,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,cb)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ub++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}var Pb=0,uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hh(e),t.set(e,n)),n}},hh=class{constructor(e){this.id=Pb++,this.code=e,this.usedTimes=0}};function Ib(i,e,t,n,s,r,o){let a=new Zo,l=new uh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,_,S,U,N){let I=U.fog,z=N.geometry,L=M.isMeshStandardMaterial?U.environment:null,O=(M.isMeshStandardMaterial?t:e).get(M.envMap||L),D=O&&O.mapping===Yl?O.image.height:null,j=p[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let k=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=k!==void 0?k.length:0,ge=0;z.morphAttributes.position!==void 0&&(ge=1),z.morphAttributes.normal!==void 0&&(ge=2),z.morphAttributes.color!==void 0&&(ge=3);let de,V,J,me;if(j){let vt=Mi[j];de=vt.vertexShader,V=vt.fragmentShader}else de=M.vertexShader,V=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);let oe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ue=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,He=!!M.map,ie=!!M.matcap,se=!!O,H=!!M.aoMap,be=!!M.lightMap,ee=!!M.bumpMap,fe=!!M.normalMap,pe=!!M.displacementMap,De=!!M.emissiveMap,we=!!M.metalnessMap,F=!!M.roughnessMap,T=M.anisotropy>0,B=M.clearcoat>0,W=M.dispersion>0,X=M.iridescence>0,Y=M.sheen>0,ve=M.transmission>0,Ee=T&&!!M.anisotropyMap,Me=B&&!!M.clearcoatMap,Fe=B&&!!M.clearcoatNormalMap,ce=B&&!!M.clearcoatRoughnessMap,he=X&&!!M.iridescenceMap,ye=X&&!!M.iridescenceThicknessMap,Pe=Y&&!!M.sheenColorMap,Ce=Y&&!!M.sheenRoughnessMap,tt=!!M.specularMap,et=!!M.specularColorMap,ht=!!M.specularIntensityMap,G=ve&&!!M.transmissionMap,Ae=ve&&!!M.thicknessMap,Q=!!M.gradientMap,le=!!M.alphaMap,Be=M.alphaTest>0,ke=!!M.alphaHash,at=!!M.extensions,zt=bs;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(zt=i.toneMapping);let un={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:de,fragmentShader:V,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:ue,instancingColor:ue&&N.instanceColor!==null,instancingMorph:ue&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Un,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:ie,envMap:se,envMapMode:se&&O.mapping,envMapCubeUVHeight:D,aoMap:H,lightMap:be,bumpMap:ee,normalMap:fe,displacementMap:d&&pe,emissiveMap:De,normalMapObjectSpace:fe&&M.normalMapType===Ng,normalMapTangentSpace:fe&&M.normalMapType===Qh,metalnessMap:we,roughnessMap:F,anisotropy:T,anisotropyMap:Ee,clearcoat:B,clearcoatMap:Me,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ce,dispersion:W,iridescence:X,iridescenceMap:he,iridescenceThicknessMap:ye,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:Ce,specularMap:tt,specularColorMap:et,specularIntensityMap:ht,transmission:ve,transmissionMap:G,thicknessMap:Ae,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Gr&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:Be,alphaHash:ke,combine:M.combine,mapUv:He&&v(M.map.channel),aoMapUv:H&&v(M.aoMap.channel),lightMapUv:be&&v(M.lightMap.channel),bumpMapUv:ee&&v(M.bumpMap.channel),normalMapUv:fe&&v(M.normalMap.channel),displacementMapUv:pe&&v(M.displacementMap.channel),emissiveMapUv:De&&v(M.emissiveMap.channel),metalnessMapUv:we&&v(M.metalnessMap.channel),roughnessMapUv:F&&v(M.roughnessMap.channel),anisotropyMapUv:Ee&&v(M.anisotropyMap.channel),clearcoatMapUv:Me&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(M.sheenRoughnessMap.channel),specularMapUv:tt&&v(M.specularMap.channel),specularColorMapUv:et&&v(M.specularColorMap.channel),specularIntensityMapUv:ht&&v(M.specularIntensityMap.channel),transmissionMapUv:G&&v(M.transmissionMap.channel),thicknessMapUv:Ae&&v(M.thicknessMap.channel),alphaMapUv:le&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(fe||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(He||le),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ge,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Ft,decodeVideoTextureEmissive:De&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qe,flipSided:M.side===Fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:at&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&M.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return un.vertexUv1s=c.has(1),un.vertexUv2s=c.has(2),un.vertexUv3s=c.has(3),c.clear(),un}function m(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let S in M.defines)_.push(S),_.push(M.defines[S]);return M.isRawShaderMaterial===!1&&(x(_,M),y(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function x(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function y(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){let _=p[M.type],S;if(_){let U=Mi[_];S=Ps.clone(U.uniforms)}else S=M.uniforms;return S}function R(M,_){let S;for(let U=0,N=u.length;U<N;U++){let I=u[U];if(I.cacheKey===_){S=I,++S.usedTimes;break}}return S===void 0&&(S=new Cb(i,_,M,r),u.push(S)),S}function E(M){if(--M.usedTimes===0){let _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:C}}function Fb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Lb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _p(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,p,v,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function a(h,d,f,p,v,g){let m=o(h,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,p,v,g){let m=o(h,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Lb),n.length>1&&n.sort(d||bp),s.length>1&&s.sort(d||bp)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ub(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new _p,i.set(n,[o])):s>=r.length?(o=new _p,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new re};break;case"SpotLight":t={position:new w,direction:new w,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function Hb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Db=0;function zb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bb(i){let e=new Nb,t=Hb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let s=new w,r=new Se,o=new Se;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,x=0,y=0,b=0,R=0,E=0,A=0;c.sort(zb);for(let M=0,_=c.length;M<_;M++){let S=c[M],U=S.color,N=S.intensity,I=S.distance,z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=U.r*N,h+=U.g*N,d+=U.b*N;else if(S.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(S.sh.coefficients[L],N);A++}else if(S.isDirectionalLight){let L=e.get(S);if(L.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let O=S.shadow,D=t.get(S);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,n.directionalShadow[f]=D,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=S.shadow.matrix,x++}n.directional[f]=L,f++}else if(S.isSpotLight){let L=e.get(S);L.position.setFromMatrixPosition(S.matrixWorld),L.color.copy(U).multiplyScalar(N),L.distance=I,L.coneCos=Math.cos(S.angle),L.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),L.decay=S.decay,n.spot[v]=L;let O=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,O.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[v]=O.matrix,S.castShadow){let D=t.get(S);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=z,b++}v++}else if(S.isRectAreaLight){let L=e.get(S);L.color.copy(U).multiplyScalar(N),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=L,g++}else if(S.isPointLight){let L=e.get(S);if(L.color.copy(S.color).multiplyScalar(S.intensity),L.distance=S.distance,L.decay=S.decay,S.castShadow){let O=S.shadow,D=t.get(S);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,n.pointShadow[p]=D,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=S.shadow.matrix,y++}n.point[p]=L,p++}else if(S.isHemisphereLight){let L=e.get(S);L.skyColor.copy(S.color).multiplyScalar(N),L.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[m]=L,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==b||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=f,C.pointLength=p,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=b,C.numSpotMaps=R,C.numLightProbes=A,n.version=Db++)}function l(c,u){let h=0,d=0,f=0,p=0,v=0,g=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let y=c[m];if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(y.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let b=n.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function wp(i){let e=new Bb(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ob(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new wp(i),e.set(s,[a])):r>=o.length?(a=new wp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var dh=class extends kn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fh=class extends kn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vb=`uniform sampler2D shadow_pass;
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
}`;function Gb(i,e,t){let n=new Jo,s=new ae,r=new ae,o=new bt,a=new dh({depthPacking:Ug}),l=new fh,c={},u=t.maxTextureSize,h={[Ai]:Fn,[Fn]:Ai,[qe]:qe},d=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:kb,fragmentShader:Vb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ze;p.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Te(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp;let m=this.type;this.render=function(E,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Si),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=m!==Gi&&this.type===Gi,I=m===Gi&&this.type!==Gi;for(let z=0,L=E.length;z<L;z++){let O=E[z],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let j=D.getFrameExtents();if(s.multiply(j),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,D.mapSize.y=r.y)),D.map===null||N===!0||I===!0){let Z=this.type!==Gi?{minFilter:Ln,magFilter:Ln}:{};D.map!==null&&D.map.dispose(),D.map=new Bn(s.x,s.y,Z),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let k=D.getViewportCount();for(let Z=0;Z<k;Z++){let ge=D.getViewport(Z);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),U.viewport(o),D.updateMatrices(O,Z),n=D.getFrustum(),b(A,C,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===Gi&&x(D,C),D.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,_,S)};function x(E,A){let C=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,f,v,null)}function y(E,A,C,M){let _=null,S=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)_=S;else if(_=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let U=_.uuid,N=A.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let z=I[N];z===void 0&&(z=_.clone(),I[N]=z,A.addEventListener("dispose",R)),_=z}if(_.visible=A.visible,_.wireframe=A.wireframe,M===Gi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let U=i.properties.get(_);U.light=C}return _}function b(E,A,C,M,_){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let N=e.update(E),I=E.material;if(Array.isArray(I)){let z=N.groups;for(let L=0,O=z.length;L<O;L++){let D=z[L],j=I[D.materialIndex];if(j&&j.visible){let k=y(E,j,M,_);E.onBeforeShadow(i,E,A,C,N,k,D),i.renderBufferDirect(C,null,N,k,E,D),E.onAfterShadow(i,E,A,C,N,k,D)}}}else if(I.visible){let z=y(E,I,M,_);E.onBeforeShadow(i,E,A,C,N,z,null),i.renderBufferDirect(C,null,N,z,E,null),E.onAfterShadow(i,E,A,C,N,z,null)}}let U=E.children;for(let N=0,I=U.length;N<I;N++)b(U[N],A,C,M,_)}function R(E){E.target.removeEventListener("dispose",R);for(let C in c){let M=c[C],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var Wb={[yu]:bu,[_u]:Mu,[wu]:Tu,[qr]:Eu,[bu]:yu,[Mu]:_u,[Tu]:wu,[Eu]:qr};function Xb(i,e){function t(){let G=!1,Ae=new bt,Q=null,le=new bt(0,0,0,0);return{setMask:function(Be){Q!==Be&&!G&&(i.colorMask(Be,Be,Be,Be),Q=Be)},setLocked:function(Be){G=Be},setClear:function(Be,ke,at,zt,un){un===!0&&(Be*=zt,ke*=zt,at*=zt),Ae.set(Be,ke,at,zt),le.equals(Ae)===!1&&(i.clearColor(Be,ke,at,zt),le.copy(Ae))},reset:function(){G=!1,Q=null,le.set(-1,0,0,0)}}}function n(){let G=!1,Ae=!1,Q=null,le=null,Be=null;return{setReversed:function(ke){if(Ae!==ke){let at=e.get("EXT_clip_control");Ae?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);let zt=Be;Be=null,this.setClear(zt)}Ae=ke},getReversed:function(){return Ae},setTest:function(ke){ke?oe(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ke){Q!==ke&&!G&&(i.depthMask(ke),Q=ke)},setFunc:function(ke){if(Ae&&(ke=Wb[ke]),le!==ke){switch(ke){case yu:i.depthFunc(i.NEVER);break;case bu:i.depthFunc(i.ALWAYS);break;case _u:i.depthFunc(i.LESS);break;case qr:i.depthFunc(i.LEQUAL);break;case wu:i.depthFunc(i.EQUAL);break;case Eu:i.depthFunc(i.GEQUAL);break;case Mu:i.depthFunc(i.GREATER);break;case Tu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ke}},setLocked:function(ke){G=ke},setClear:function(ke){Be!==ke&&(Ae&&(ke=1-ke),i.clearDepth(ke),Be=ke)},reset:function(){G=!1,Q=null,le=null,Be=null,Ae=!1}}}function s(){let G=!1,Ae=null,Q=null,le=null,Be=null,ke=null,at=null,zt=null,un=null;return{setTest:function(vt){G||(vt?oe(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(i.stencilMask(vt),Ae=vt)},setFunc:function(vt,Hn,cn){(Q!==vt||le!==Hn||Be!==cn)&&(i.stencilFunc(vt,Hn,cn),Q=vt,le=Hn,Be=cn)},setOp:function(vt,Hn,cn){(ke!==vt||at!==Hn||zt!==cn)&&(i.stencilOp(vt,Hn,cn),ke=vt,at=Hn,zt=cn)},setLocked:function(vt){G=vt},setClear:function(vt){un!==vt&&(i.clearStencil(vt),un=vt)},reset:function(){G=!1,Ae=null,Q=null,le=null,Be=null,ke=null,at=null,zt=null,un=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,y=null,b=null,R=null,E=null,A=new re(0,0,0),C=0,M=!1,_=null,S=null,U=null,N=null,I=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,O=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(D)[1]),L=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),L=O>=2);let j=null,k={},Z=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),de=new bt().fromArray(Z),V=new bt().fromArray(ge);function J(G,Ae,Q,le){let Be=new Uint8Array(4),ke=i.createTexture();i.bindTexture(G,ke),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<Q;at++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Ae+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return ke}let me={};me[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(qr),ee(!1),fe(Mf),oe(i.CULL_FACE),H(Si);function oe(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function xe(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function ue(G,Ae){return h[G]!==Ae?(i.bindFramebuffer(G,Ae),h[G]=Ae,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ae),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Re(G,Ae){let Q=f,le=!1;if(G){Q=d.get(Ae),Q===void 0&&(Q=[],d.set(Ae,Q));let Be=G.textures;if(Q.length!==Be.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ke=0,at=Be.length;ke<at;ke++)Q[ke]=i.COLOR_ATTACHMENT0+ke;Q.length=Be.length,le=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,le=!0);le&&i.drawBuffers(Q)}function He(G){return p!==G?(i.useProgram(G),p=G,!0):!1}let ie={[Ks]:i.FUNC_ADD,[fg]:i.FUNC_SUBTRACT,[pg]:i.FUNC_REVERSE_SUBTRACT};ie[mg]=i.MIN,ie[gg]=i.MAX;let se={[zh]:i.ZERO,[kt]:i.ONE,[vg]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Eg]:i.SRC_ALPHA_SATURATE,[_g]:i.DST_COLOR,[yg]:i.DST_ALPHA,[xg]:i.ONE_MINUS_SRC_COLOR,[At]:i.ONE_MINUS_SRC_ALPHA,[wg]:i.ONE_MINUS_DST_COLOR,[bg]:i.ONE_MINUS_DST_ALPHA,[Mg]:i.CONSTANT_COLOR,[Tg]:i.ONE_MINUS_CONSTANT_COLOR,[Sg]:i.CONSTANT_ALPHA,[Ag]:i.ONE_MINUS_CONSTANT_ALPHA};function H(G,Ae,Q,le,Be,ke,at,zt,un,vt){if(G===Si){v===!0&&(xe(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),G!==Nt){if(G!==g||vt!==M){if((m!==Ks||b!==Ks)&&(i.blendEquation(i.FUNC_ADD),m=Ks,b=Ks),vt)switch(G){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.ONE,i.ONE);break;case Tf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,y=null,R=null,E=null,A.set(0,0,0),C=0,g=G,M=vt}return}Be=Be||Ae,ke=ke||Q,at=at||le,(Ae!==m||Be!==b)&&(i.blendEquationSeparate(ie[Ae],ie[Be]),m=Ae,b=Be),(Q!==x||le!==y||ke!==R||at!==E)&&(i.blendFuncSeparate(se[Q],se[le],se[ke],se[at]),x=Q,y=le,R=ke,E=at),(zt.equals(A)===!1||un!==C)&&(i.blendColor(zt.r,zt.g,zt.b,un),A.copy(zt),C=un),g=G,M=!1}function be(G,Ae){G.side===qe?xe(i.CULL_FACE):oe(i.CULL_FACE);let Q=G.side===Fn;Ae&&(Q=!Q),ee(Q),G.blending===Gr&&G.transparent===!1?H(Si):H(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let le=G.stencilWrite;a.setTest(le),le&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),De(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){_!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),_=G)}function fe(G){G!==ug?(oe(i.CULL_FACE),G!==S&&(G===Mf?i.cullFace(i.BACK):G===hg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),S=G}function pe(G){G!==U&&(L&&i.lineWidth(G),U=G)}function De(G,Ae,Q){G?(oe(i.POLYGON_OFFSET_FILL),(N!==Ae||I!==Q)&&(i.polygonOffset(Ae,Q),N=Ae,I=Q)):xe(i.POLYGON_OFFSET_FILL)}function we(G){G?oe(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function F(G){G===void 0&&(G=i.TEXTURE0+z-1),j!==G&&(i.activeTexture(G),j=G)}function T(G,Ae,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+z-1:Q=j);let le=k[Q];le===void 0&&(le={type:void 0,texture:void 0},k[Q]=le),(le.type!==G||le.texture!==Ae)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(G,Ae||me[G]),le.type=G,le.texture=Ae)}function B(){let G=k[j];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){de.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),de.copy(G))}function Ce(G){V.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),V.copy(G))}function tt(G,Ae){let Q=c.get(Ae);Q===void 0&&(Q=new WeakMap,c.set(Ae,Q));let le=Q.get(G);le===void 0&&(le=i.getUniformBlockIndex(Ae,G.name),Q.set(G,le))}function et(G,Ae){let le=c.get(Ae).get(G);l.get(Ae)!==le&&(i.uniformBlockBinding(Ae,le,G.__bindingPointIndex),l.set(Ae,le))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,k={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,y=null,b=null,R=null,E=null,A=new re(0,0,0),C=0,M=!1,_=null,S=null,U=null,N=null,I=null,de.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:xe,bindFramebuffer:ue,drawBuffers:Re,useProgram:He,setBlending:H,setMaterial:be,setFlipSided:ee,setCullFace:fe,setLineWidth:pe,setPolygonOffset:De,setScissorTest:we,activeTexture:F,bindTexture:T,unbindTexture:B,compressedTexImage2D:W,compressedTexImage3D:X,texImage2D:he,texImage3D:ye,updateUBOMapping:tt,uniformBlockBinding:et,texStorage2D:Fe,texStorage3D:ce,texSubImage2D:Y,texSubImage3D:ve,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Me,scissor:Pe,viewport:Ce,reset:ht}}function Ep(i,e,t,n){let s=$b(n);switch(t){case i0:return i*e;case r0:return i*e;case o0:return i*e*2;case jh:return i*e/s.components*s.byteLength;case Kh:return i*e/s.components*s.byteLength;case a0:return i*e*2/s.components*s.byteLength;case Zh:return i*e*2/s.components*s.byteLength;case s0:return i*e*3/s.components*s.byteLength;case ii:return i*e*4/s.components*s.byteLength;case Jh:return i*e*4/s.components*s.byteLength;case ul:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:case Iu:return Math.max(i,16)*Math.max(e,8)/4;case Ru:case Pu:return Math.max(i,8)*Math.max(e,8)/2;case Fu:case Lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $u:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pl:case ju:case Ku:return Math.ceil(i/4)*Math.ceil(e/4)*16;case l0:case Zu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ju:case Qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $b(i){switch(i){case Yi:case e0:return{byteLength:1,components:1};case jo:case t0:case yi:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Qs:case $h:case gi:return{byteLength:4,components:1};case n0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(F,T){return f?new OffscreenCanvas(F,T):Ko("canvas")}function v(F,T,B){let W=1,X=we(F);if((X.width>B||X.height>B)&&(W=B/Math.max(X.width,X.height)),W<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Y=Math.floor(W*X.width),ve=Math.floor(W*X.height);h===void 0&&(h=p(Y,ve));let Ee=T?p(Y,ve):h;return Ee.width=Y,Ee.height=ve,Ee.getContext("2d").drawImage(F,0,0,Y,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Y+"x"+ve+")."),Ee}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),F;return F}function g(F){return F.generateMipmaps}function m(F){i.generateMipmap(F)}function x(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(F,T,B,W,X=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Y=T;if(T===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),T===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),T===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),T===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),T===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),T===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),T===i.RGBA){let ve=X?Kl:yt.getTransfer(W);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=ve===Ft?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(F,T){let B;return F?T===null||T===Qs||T===Kr?B=i.DEPTH24_STENCIL8:T===gi?B=i.DEPTH32F_STENCIL8:T===jo&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qs||T===Kr?B=i.DEPTH_COMPONENT24:T===gi?B=i.DEPTH_COMPONENT32F:T===jo&&(B=i.DEPTH_COMPONENT16),B}function R(F,T){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ln&&F.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function E(F){let T=F.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&u.delete(T)}function A(F){let T=F.target;T.removeEventListener("dispose",A),_(T)}function C(F){let T=n.get(F);if(T.__webglInit===void 0)return;let B=F.source,W=d.get(B);if(W){let X=W[T.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(F),Object.keys(W).length===0&&d.delete(B)}n.remove(F)}function M(F){let T=n.get(F);i.deleteTexture(T.__webglTexture);let B=F.source,W=d.get(B);delete W[T.__cacheKey],o.memory.textures--}function _(F){let T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(T.__webglFramebuffer[W]))for(let X=0;X<T.__webglFramebuffer[W].length;X++)i.deleteFramebuffer(T.__webglFramebuffer[W][X]);else i.deleteFramebuffer(T.__webglFramebuffer[W]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[W])}else{if(Array.isArray(T.__webglFramebuffer))for(let W=0;W<T.__webglFramebuffer.length;W++)i.deleteFramebuffer(T.__webglFramebuffer[W]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let W=0;W<T.__webglColorRenderbuffer.length;W++)T.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[W]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let B=F.textures;for(let W=0,X=B.length;W<X;W++){let Y=n.get(B[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[W])}n.remove(F)}let S=0;function U(){S=0}function N(){let F=S;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),S+=1,F}function I(F){let T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function z(F,T){let B=n.get(F);if(F.isVideoTexture&&pe(F),F.isRenderTargetTexture===!1&&F.version>0&&B.__version!==F.version){let W=F.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,F,T);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function L(F,T){let B=n.get(F);if(F.version>0&&B.__version!==F.version){V(B,F,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function O(F,T){let B=n.get(F);if(F.version>0&&B.__version!==F.version){V(B,F,T);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function D(F,T){let B=n.get(F);if(F.version>0&&B.__version!==F.version){J(B,F,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}let j={[Js]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},k={[Ln]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Z={[Hg]:i.NEVER,[Vg]:i.ALWAYS,[Dg]:i.LESS,[u0]:i.LEQUAL,[zg]:i.EQUAL,[kg]:i.GEQUAL,[Bg]:i.GREATER,[Og]:i.NOTEQUAL};function ge(F,T){if(T.type===gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===$n||T.magFilter===Oo||T.magFilter===Or||T.magFilter===Ti||T.minFilter===$n||T.minFilter===Oo||T.minFilter===Or||T.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,j[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,j[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,j[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,k[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,k[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ln||T.minFilter!==Or&&T.minFilter!==Ti||T.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function de(F,T){let B=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",E));let W=T.source,X=d.get(W);X===void 0&&(X={},d.set(W,X));let Y=I(T);if(Y!==F.__cacheKey){X[Y]===void 0&&(X[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),X[Y].usedTimes++;let ve=X[F.__cacheKey];ve!==void 0&&(X[F.__cacheKey].usedTimes--,ve.usedTimes===0&&M(T)),F.__cacheKey=Y,F.__webglTexture=X[Y].texture}return B}function V(F,T,B){let W=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(W=i.TEXTURE_3D);let X=de(F,T),Y=T.source;t.bindTexture(W,F.__webglTexture,i.TEXTURE0+B);let ve=n.get(Y);if(Y.version!==ve.__version||X===!0){t.activeTexture(i.TEXTURE0+B);let Ee=yt.getPrimaries(yt.workingColorSpace),Me=T.colorSpace===vs?null:yt.getPrimaries(T.colorSpace),Fe=T.colorSpace===vs||Ee===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ce=v(T.image,!1,s.maxTextureSize);ce=De(T,ce);let he=r.convert(T.format,T.colorSpace),ye=r.convert(T.type),Pe=y(T.internalFormat,he,ye,T.colorSpace,T.isVideoTexture);ge(W,T);let Ce,tt=T.mipmaps,et=T.isVideoTexture!==!0,ht=ve.__version===void 0||X===!0,G=Y.dataReady,Ae=R(T,ce);if(T.isDepthTexture)Pe=b(T.format===Zr,T.type),ht&&(et?t.texStorage2D(i.TEXTURE_2D,1,Pe,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ce.width,ce.height,0,he,ye,null));else if(T.isDataTexture)if(tt.length>0){et&&ht&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,tt[0].width,tt[0].height);for(let Q=0,le=tt.length;Q<le;Q++)Ce=tt[Q],et?G&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,he,ye,Ce.data):t.texImage2D(i.TEXTURE_2D,Q,Pe,Ce.width,Ce.height,0,he,ye,Ce.data);T.generateMipmaps=!1}else et?(ht&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ce.width,ce.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,he,ye,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ce.width,ce.height,0,he,ye,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){et&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Pe,tt[0].width,tt[0].height,ce.depth);for(let Q=0,le=tt.length;Q<le;Q++)if(Ce=tt[Q],T.format!==ii)if(he!==null)if(et){if(G)if(T.layerUpdates.size>0){let Be=Ep(Ce.width,Ce.height,T.format,T.type);for(let ke of T.layerUpdates){let at=Ce.data.subarray(ke*Be/Ce.data.BYTES_PER_ELEMENT,(ke+1)*Be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ke,Ce.width,Ce.height,1,he,at)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,ce.depth,he,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Pe,Ce.width,Ce.height,ce.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ce.width,Ce.height,ce.depth,he,ye,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Pe,Ce.width,Ce.height,ce.depth,0,he,ye,Ce.data)}else{et&&ht&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,tt[0].width,tt[0].height);for(let Q=0,le=tt.length;Q<le;Q++)Ce=tt[Q],T.format!==ii?he!==null?et?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,he,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Pe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?G&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ce.width,Ce.height,he,ye,Ce.data):t.texImage2D(i.TEXTURE_2D,Q,Pe,Ce.width,Ce.height,0,he,ye,Ce.data)}else if(T.isDataArrayTexture)if(et){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Pe,ce.width,ce.height,ce.depth),G)if(T.layerUpdates.size>0){let Q=Ep(ce.width,ce.height,T.format,T.type);for(let le of T.layerUpdates){let Be=ce.data.subarray(le*Q/ce.data.BYTES_PER_ELEMENT,(le+1)*Q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ce.width,ce.height,1,he,ye,Be)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,he,ye,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ce.width,ce.height,ce.depth,0,he,ye,ce.data);else if(T.isData3DTexture)et?(ht&&t.texStorage3D(i.TEXTURE_3D,Ae,Pe,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,he,ye,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ce.width,ce.height,ce.depth,0,he,ye,ce.data);else if(T.isFramebufferTexture){if(ht)if(et)t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ce.width,ce.height);else{let Q=ce.width,le=ce.height;for(let Be=0;Be<Ae;Be++)t.texImage2D(i.TEXTURE_2D,Be,Pe,Q,le,0,he,ye,null),Q>>=1,le>>=1}}else if(tt.length>0){if(et&&ht){let Q=we(tt[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Pe,Q.width,Q.height)}for(let Q=0,le=tt.length;Q<le;Q++)Ce=tt[Q],et?G&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he,ye,Ce):t.texImage2D(i.TEXTURE_2D,Q,Pe,he,ye,Ce);T.generateMipmaps=!1}else if(et){if(ht){let Q=we(ce);t.texStorage2D(i.TEXTURE_2D,Ae,Pe,Q.width,Q.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,ye,ce)}else t.texImage2D(i.TEXTURE_2D,0,Pe,he,ye,ce);g(T)&&m(W),ve.__version=Y.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function J(F,T,B){if(T.image.length!==6)return;let W=de(F,T),X=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+B);let Y=n.get(X);if(X.version!==Y.__version||W===!0){t.activeTexture(i.TEXTURE0+B);let ve=yt.getPrimaries(yt.workingColorSpace),Ee=T.colorSpace===vs?null:yt.getPrimaries(T.colorSpace),Me=T.colorSpace===vs||ve===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,he=[];for(let le=0;le<6;le++)!Fe&&!ce?he[le]=v(T.image[le],!0,s.maxCubemapSize):he[le]=ce?T.image[le].image:T.image[le],he[le]=De(T,he[le]);let ye=he[0],Pe=r.convert(T.format,T.colorSpace),Ce=r.convert(T.type),tt=y(T.internalFormat,Pe,Ce,T.colorSpace),et=T.isVideoTexture!==!0,ht=Y.__version===void 0||W===!0,G=X.dataReady,Ae=R(T,ye);ge(i.TEXTURE_CUBE_MAP,T);let Q;if(Fe){et&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,ye.width,ye.height);for(let le=0;le<6;le++){Q=he[le].mipmaps;for(let Be=0;Be<Q.length;Be++){let ke=Q[Be];T.format!==ii?Pe!==null?et?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,ke.width,ke.height,Pe,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,tt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,ke.width,ke.height,Pe,Ce,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,tt,ke.width,ke.height,0,Pe,Ce,ke.data)}}}else{if(Q=T.mipmaps,et&&ht){Q.length>0&&Ae++;let le=we(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,le.width,le.height)}for(let le=0;le<6;le++)if(ce){et?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,he[le].width,he[le].height,Pe,Ce,he[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,tt,he[le].width,he[le].height,0,Pe,Ce,he[le].data);for(let Be=0;Be<Q.length;Be++){let at=Q[Be].image[le].image;et?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,at.width,at.height,Pe,Ce,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,tt,at.width,at.height,0,Pe,Ce,at.data)}}else{et?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,Ce,he[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,tt,Pe,Ce,he[le]);for(let Be=0;Be<Q.length;Be++){let ke=Q[Be];et?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,Pe,Ce,ke.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,tt,Pe,Ce,ke.image[le])}}}g(T)&&m(i.TEXTURE_CUBE_MAP),Y.__version=X.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function me(F,T,B,W,X,Y){let ve=r.convert(B.format,B.colorSpace),Ee=r.convert(B.type),Me=y(B.internalFormat,ve,Ee,B.colorSpace),Fe=n.get(T),ce=n.get(B);if(ce.__renderTarget=T,!Fe.__hasExternalTextures){let he=Math.max(1,T.width>>Y),ye=Math.max(1,T.height>>Y);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,Y,Me,he,ye,T.depth,0,ve,Ee,null):t.texImage2D(X,Y,Me,he,ye,0,ve,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,X,ce.__webglTexture,0,ee(T)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,X,ce.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(F,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){let W=T.depthTexture,X=W&&W.isDepthTexture?W.type:null,Y=b(T.stencilBuffer,X),ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=ee(T);fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Y,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,F)}else{let W=T.textures;for(let X=0;X<W.length;X++){let Y=W[X],ve=r.convert(Y.format,Y.colorSpace),Ee=r.convert(Y.type),Me=y(Y.internalFormat,ve,Ee,Y.colorSpace),Fe=ee(T);B&&fe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Me,T.width,T.height):fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Me,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Me,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(F,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(T.depthTexture);W.__renderTarget=T,(!W.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);let X=W.__webglTexture,Y=ee(T);if(T.depthTexture.format===Wr)fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(T.depthTexture.format===Zr)fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ue(F){let T=n.get(F),B=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){let W=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),W){let X=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,W.removeEventListener("dispose",X)};W.addEventListener("dispose",X),T.__depthDisposeCallback=X}T.__boundDepthTexture=W}if(F.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");xe(T.__webglFramebuffer,F)}else if(B){T.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[W]),T.__webglDepthbuffer[W]===void 0)T.__webglDepthbuffer[W]=i.createRenderbuffer(),oe(T.__webglDepthbuffer[W],F,!1);else{let X=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),oe(T.__webglDepthbuffer,F,!1);else{let W=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,X)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(F,T,B){let W=n.get(F);T!==void 0&&me(W.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ue(F)}function He(F){let T=F.texture,B=n.get(F),W=n.get(T);F.addEventListener("dispose",A);let X=F.textures,Y=F.isWebGLCubeRenderTarget===!0,ve=X.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=T.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[Ee]=[];for(let Me=0;Me<T.mipmaps.length;Me++)B.__webglFramebuffer[Ee][Me]=i.createFramebuffer()}else B.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)B.__webglFramebuffer[Ee]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ve)for(let Ee=0,Me=X.length;Ee<Me;Ee++){let Fe=n.get(X[Ee]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&fe(F)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ee=0;Ee<X.length;Ee++){let Me=X[Ee];B.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Ee]);let Fe=r.convert(Me.format,Me.colorSpace),ce=r.convert(Me.type),he=y(Me.internalFormat,Fe,ce,Me.colorSpace,F.isXRRenderTarget===!0),ye=ee(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,he,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,B.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ge(i.TEXTURE_CUBE_MAP,T);for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)me(B.__webglFramebuffer[Ee][Me],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Me);else me(B.__webglFramebuffer[Ee],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);g(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let Ee=0,Me=X.length;Ee<Me;Ee++){let Fe=X[Ee],ce=n.get(Fe);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),ge(i.TEXTURE_2D,Fe),me(B.__webglFramebuffer,F,Fe,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),g(Fe)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ee=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,W.__webglTexture),ge(Ee,T),T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)me(B.__webglFramebuffer[Me],F,T,i.COLOR_ATTACHMENT0,Ee,Me);else me(B.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,Ee,0);g(T)&&m(Ee),t.unbindTexture()}F.depthBuffer&&ue(F)}function ie(F){let T=F.textures;for(let B=0,W=T.length;B<W;B++){let X=T[B];if(g(X)){let Y=x(F),ve=n.get(X).__webglTexture;t.bindTexture(Y,ve),m(Y),t.unbindTexture()}}}let se=[],H=[];function be(F){if(F.samples>0){if(fe(F)===!1){let T=F.textures,B=F.width,W=F.height,X=i.COLOR_BUFFER_BIT,Y=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(F),Ee=T.length>1;if(Ee)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let Fe=n.get(T[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,X,i.NEAREST),l===!0&&(se.length=0,H.length=0,se.push(i.COLOR_ATTACHMENT0+Me),F.depthBuffer&&F.resolveDepthBuffer===!1&&(se.push(Y),H.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let Fe=n.get(T[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ee(F){return Math.min(s.maxSamples,F.samples)}function fe(F){let T=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pe(F){let T=o.render.frame;u.get(F)!==T&&(u.set(F,T),F.update())}function De(F,T){let B=F.colorSpace,W=F.format,X=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||B!==Un&&B!==vs&&(yt.getTransfer(B)===Ft?(W!==ii||X!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function we(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=D,this.rebindTextures=Re,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=me,this.useMultisampledRTT=fe}function Yb(i,e){function t(n,s=vs){let r,o=yt.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===qh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===n0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===e0)return i.BYTE;if(n===t0)return i.SHORT;if(n===jo)return i.UNSIGNED_SHORT;if(n===$h)return i.INT;if(n===Qs)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===i0)return i.ALPHA;if(n===s0)return i.RGB;if(n===ii)return i.RGBA;if(n===r0)return i.LUMINANCE;if(n===o0)return i.LUMINANCE_ALPHA;if(n===Wr)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===jh)return i.RED;if(n===Kh)return i.RED_INTEGER;if(n===a0)return i.RG;if(n===Zh)return i.RG_INTEGER;if(n===Jh)return i.RGBA_INTEGER;if(n===ul||n===hl||n===dl||n===fl)if(o===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ru||n===Cu||n===Pu||n===Iu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Iu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fu||n===Lu||n===Uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fu||n===Lu)return o===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nu||n===Hu||n===Du||n===zu||n===Bu||n===Ou||n===ku||n===Vu||n===Gu||n===Wu||n===Xu||n===$u||n===qu||n===Yu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Du)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ou)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$u)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ju||n===Ku)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ju)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===l0||n===Zu||n===Ju||n===Qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ju)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ph=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$e=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jb={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new _n,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ue({vertexShader:Kb,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends _s{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,v=new mh,g=t.getContextAttributes(),m=null,x=null,y=[],b=[],R=new ae,E=null,A=new Zt;A.viewport=new bt;let C=new Zt;C.viewport=new bt;let M=[A,C],_=new ph,S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=y[V];return J===void 0&&(J=new Go,y[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=y[V];return J===void 0&&(J=new Go,y[V]=J),J.getGripSpace()},this.getHand=function(V){let J=y[V];return J===void 0&&(J=new Go,y[V]=J),J.getHandSpace()};function N(V){let J=b.indexOf(V.inputSource);if(J===-1)return;let me=y[J];me!==void 0&&(me.update(V.inputSource,V.frame,c||o),me.dispatchEvent({type:V.type,data:V.inputSource}))}function I(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",z);for(let V=0;V<y.length;V++){let J=b[V];J!==null&&(b[V]=null,y[V].disconnect(J))}S=null,U=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,x=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",I),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bn(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,me=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Zr:Wr,me=g.stencil?Kr:Qs);let xe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Bn(d.textureWidth,d.textureHeight,{format:ii,type:Yi,depthTexture:new wl(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(V){for(let J=0;J<V.removed.length;J++){let me=V.removed[J],oe=b.indexOf(me);oe>=0&&(b[oe]=null,y[oe].disconnect(me))}for(let J=0;J<V.added.length;J++){let me=V.added[J],oe=b.indexOf(me);if(oe===-1){for(let ue=0;ue<y.length;ue++)if(ue>=b.length){b.push(me),oe=ue;break}else if(b[ue]===null){b[ue]=me,oe=ue;break}if(oe===-1)break}let xe=y[oe];xe&&xe.connect(me)}}let L=new w,O=new w;function D(V,J,me){L.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(me.matrixWorld);let oe=L.distanceTo(O),xe=J.projectionMatrix.elements,ue=me.projectionMatrix.elements,Re=xe[14]/(xe[10]-1),He=xe[14]/(xe[10]+1),ie=(xe[9]+1)/xe[5],se=(xe[9]-1)/xe[5],H=(xe[8]-1)/xe[0],be=(ue[8]+1)/ue[0],ee=Re*H,fe=Re*be,pe=oe/(-H+be),De=pe*-H;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(De),V.translateZ(pe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),xe[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let we=Re+pe,F=He+pe,T=ee-De,B=fe+(oe-De),W=ie*He/F*we,X=se*He/F*we;V.projectionMatrix.makePerspective(T,B,W,X,we,F),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function j(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,me=V.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(me=v.depthFar)),_.near=C.near=A.near=J,_.far=C.far=A.far=me,(S!==_.near||U!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,U=_.far),A.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,_.layers.mask=A.layers.mask|C.layers.mask;let oe=V.parent,xe=_.cameras;j(_,oe);for(let ue=0;ue<xe.length;ue++)j(xe[ue],oe);xe.length===2?D(_,A,C):_.projectionMatrix.copy(A.projectionMatrix),k(V,_,oe)};function k(V,J,me){me===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(me.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=eo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Z=null;function ge(V,J){if(u=J.getViewerPose(c||o),p=J,u!==null){let me=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;me.length!==_.cameras.length&&(_.cameras.length=0,oe=!0);for(let ue=0;ue<me.length;ue++){let Re=me[ue],He=null;if(f!==null)He=f.getViewport(Re);else{let se=h.getViewSubImage(d,Re);He=se.viewport,ue===0&&(e.setRenderTargetTextures(x,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(x))}let ie=M[ue];ie===void 0&&(ie=new Zt,ie.layers.enable(ue),ie.viewport=new bt,M[ue]=ie),ie.matrix.fromArray(Re.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Re.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(He.x,He.y,He.width,He.height),ue===0&&(_.matrix.copy(ie.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),oe===!0&&_.cameras.push(ie)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")){let ue=h.getDepthInformation(me[0]);ue&&ue.isValid&&ue.texture&&v.init(e,ue,s.renderState)}}for(let me=0;me<y.length;me++){let oe=b[me],xe=y[me];oe!==null&&xe!==void 0&&xe.update(oe,J,c||o)}Z&&Z(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let de=new p0;de.setAnimationLoop(ge),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}},Ys=new Sn,Jb=new Se;function Qb(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,f0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),y=x.envMap,b=x.envMapRotation;y&&(g.envMap.value=y,Ys.copy(b),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),g.envMapRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(Ys)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){let b=y.program;n.uniformBlockBinding(x,b)}function c(x,y){let b=s[x.id];b===void 0&&(p(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",g));let R=y.program;n.updateUBOMapping(x,R);let E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function u(x){let y=h();x.__bindingPointIndex=y;let b=i.createBuffer(),R=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=b.length;E<A;E++){let C=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,_=C.length;M<_;M++){let S=C[M];if(f(S,E,M,R)===!0){let U=S.__offset,N=Array.isArray(S.value)?S.value:[S.value],I=0;for(let z=0;z<N.length;z++){let L=N[z],O=v(L);typeof L=="number"||typeof L=="boolean"?(S.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,U+I,S.__data)):L.isMatrix3?(S.__data[0]=L.elements[0],S.__data[1]=L.elements[1],S.__data[2]=L.elements[2],S.__data[3]=0,S.__data[4]=L.elements[3],S.__data[5]=L.elements[4],S.__data[6]=L.elements[5],S.__data[7]=0,S.__data[8]=L.elements[6],S.__data[9]=L.elements[7],S.__data[10]=L.elements[8],S.__data[11]=0):(L.toArray(S.__data,I),I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,b,R){let E=x.value,A=y+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let C=R[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function p(x){let y=x.uniforms,b=0,R=16;for(let A=0,C=y.length;A<C;A++){let M=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,S=M.length;_<S;_++){let U=M[_],N=Array.isArray(U.value)?U.value:[U.value];for(let I=0,z=N.length;I<z;I++){let L=N[I],O=v(L),D=b%R,j=D%O.boundary,k=D+j;b+=j,k!==0&&R-k<O.storage&&(b+=R-k),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=O.storage}}}let E=b%R;return E>0&&(b+=R-E),x.__size=b,x.__cache={},this}function v(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){let y=x.target;y.removeEventListener("dispose",g);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var El=class{constructor(e={}){let{canvas:t=rv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=bs,this.toneMappingExposure=1;let b=this,R=!1,E=0,A=0,C=null,M=-1,_=null,S=new bt,U=new bt,N=null,I=new re(0),z=0,L=t.width,O=t.height,D=1,j=null,k=null,Z=new bt(0,0,L,O),ge=new bt(0,0,L,O),de=!1,V=new Jo,J=!1,me=!1,oe=new Se,xe=new Se,ue=new w,Re=new bt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function se(){return C===null?D:1}let H=n;function be(P,$){return t.getContext(P,$)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",ke,!1),H===null){let $="webgl2";if(H=be($,P),H===null)throw be($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ee,fe,pe,De,we,F,T,B,W,X,Y,ve,Ee,Me,Fe,ce,he,ye,Pe,Ce,tt,et,ht,G;function Ae(){ee=new g1(H),ee.init(),et=new Yb(H,ee),fe=new u1(H,ee,e,et),pe=new Xb(H,ee),fe.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),De=new y1(H),we=new Fb,F=new qb(H,ee,pe,we,fe,et,De),T=new d1(b),B=new m1(b),W=new Sv(H),ht=new l1(H,W),X=new v1(H,W,De,ht),Y=new _1(H,X,W,De),Pe=new b1(H,fe,F),ce=new h1(we),ve=new Ib(b,T,B,ee,fe,ht,ce),Ee=new Qb(b,we),Me=new Ub,Fe=new Ob(ee),ye=new a1(b,T,B,pe,Y,f,l),he=new Gb(b,Y,fe),G=new e_(H,De,fe,pe),Ce=new c1(H,ee,De),tt=new x1(H,ee,De),De.programs=ve.programs,b.capabilities=fe,b.extensions=ee,b.properties=we,b.renderLists=Me,b.shadowMap=he,b.state=pe,b.info=De}Ae();let Q=new gh(b,H);this.xr=Q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let P=ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(P){P!==void 0&&(D=P,this.setSize(L,O,!1))},this.getSize=function(P){return P.set(L,O)},this.setSize=function(P,$,ne=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=P,O=$,t.width=Math.floor(P*D),t.height=Math.floor($*D),ne===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(L*D,O*D).floor()},this.setDrawingBufferSize=function(P,$,ne){L=P,O=$,D=ne,t.width=Math.floor(P*ne),t.height=Math.floor($*ne),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(Z)},this.setViewport=function(P,$,ne,te){P.isVector4?Z.set(P.x,P.y,P.z,P.w):Z.set(P,$,ne,te),pe.viewport(S.copy(Z).multiplyScalar(D).round())},this.getScissor=function(P){return P.copy(ge)},this.setScissor=function(P,$,ne,te){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,$,ne,te),pe.scissor(U.copy(ge).multiplyScalar(D).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(P){pe.setScissorTest(de=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(P=!0,$=!0,ne=!0){let te=0;if(P){let q=!1;if(C!==null){let Ie=C.texture.format;q=Ie===Jh||Ie===Zh||Ie===Kh}if(q){let Ie=C.texture.type,Ge=Ie===Yi||Ie===Qs||Ie===jo||Ie===Kr||Ie===qh||Ie===Yh,Ye=ye.getClearColor(),je=ye.getClearAlpha(),ut=Ye.r,ft=Ye.g,Ke=Ye.b;Ge?(p[0]=ut,p[1]=ft,p[2]=Ke,p[3]=je,H.clearBufferuiv(H.COLOR,0,p)):(v[0]=ut,v[1]=ft,v[2]=Ke,v[3]=je,H.clearBufferiv(H.COLOR,0,v))}else te|=H.COLOR_BUFFER_BIT}$&&(te|=H.DEPTH_BUFFER_BIT),ne&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Me.dispose(),Fe.dispose(),we.dispose(),T.dispose(),B.dispose(),Y.dispose(),ht.dispose(),G.dispose(),ve.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",os),Q.removeEventListener("sessionend",Vs),wi.stop()};function le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let P=De.autoReset,$=he.enabled,ne=he.autoUpdate,te=he.needsUpdate,q=he.type;Ae(),De.autoReset=P,he.enabled=$,he.autoUpdate=ne,he.needsUpdate=te,he.type=q}function ke(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function at(P){let $=P.target;$.removeEventListener("dispose",at),zt($)}function zt(P){un(P),we.remove(P)}function un(P){let $=we.get(P).programs;$!==void 0&&($.forEach(function(ne){ve.releaseProgram(ne)}),P.isShaderMaterial&&ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,ne,te,q,Ie){$===null&&($=He);let Ge=q.isMesh&&q.matrixWorld.determinant()<0,Ye=ls(P,$,ne,te,q);pe.setMaterial(te,Ge);let je=ne.index,ut=1;if(te.wireframe===!0){if(je=X.getWireframeAttribute(ne),je===void 0)return;ut=2}let ft=ne.drawRange,Ke=ne.attributes.position,Tt=ft.start*ut,$t=(ft.start+ft.count)*ut;Ie!==null&&(Tt=Math.max(Tt,Ie.start*ut),$t=Math.min($t,(Ie.start+Ie.count)*ut)),je!==null?(Tt=Math.max(Tt,0),$t=Math.min($t,je.count)):Ke!=null&&(Tt=Math.max(Tt,0),$t=Math.min($t,Ke.count));let jt=$t-Tt;if(jt<0||jt===1/0)return;ht.setup(q,te,Ye,ne,je);let Xn,Pt=Ce;if(je!==null&&(Xn=W.get(je),Pt=tt,Pt.setIndex(Xn)),q.isMesh)te.wireframe===!0?(pe.setLineWidth(te.wireframeLinewidth*se()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(q.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),pe.setLineWidth(Je*se()),q.isLineSegments?Pt.setMode(H.LINES):q.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else q.isPoints?Pt.setMode(H.POINTS):q.isSprite&&Pt.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Je=q._multiDrawStarts,Hi=q._multiDrawCounts,It=q._multiDrawCount,hi=je?W.get(je).bytesPerElement:1,br=we.get(te).currentProgram.getUniforms();for(let jn=0;jn<It;jn++)br.setValue(H,"_gl_DrawID",jn),Pt.render(Je[jn]/hi,Hi[jn])}else if(q.isInstancedMesh)Pt.renderInstances(Tt,jt,q.count);else if(ne.isInstancedBufferGeometry){let Je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Hi=Math.min(ne.instanceCount,Je);Pt.renderInstances(Tt,jt,Hi)}else Pt.render(Tt,jt)};function vt(P,$,ne){P.transparent===!0&&P.side===qe&&P.forceSinglePass===!1?(P.side=Fn,P.needsUpdate=!0,Le(P,$,ne),P.side=Ai,P.needsUpdate=!0,Le(P,$,ne),P.side=qe):Le(P,$,ne)}this.compile=function(P,$,ne=null){ne===null&&(ne=P),m=Fe.get(ne),m.init($),y.push(m),ne.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),P!==ne&&P.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();let te=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ie=q.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){let Ye=Ie[Ge];vt(Ye,ne,q),te.add(Ye)}else vt(Ie,ne,q),te.add(Ie)}),y.pop(),m=null,te},this.compileAsync=function(P,$,ne=null){let te=this.compile(P,$,ne);return new Promise(q=>{function Ie(){if(te.forEach(function(Ge){we.get(Ge).currentProgram.isReady()&&te.delete(Ge)}),te.size===0){q(P);return}setTimeout(Ie,10)}ee.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Hn=null;function cn(P){Hn&&Hn(P)}function os(){wi.stop()}function Vs(){wi.start()}let wi=new p0;wi.setAnimationLoop(cn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(P){Hn=P,Q.setAnimationLoop(P),P===null?wi.stop():wi.start()},Q.addEventListener("sessionstart",os),Q.addEventListener("sessionend",Vs),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera($),$=Q.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,$,C),m=Fe.get(P,y.length),m.init($),y.push(m),xe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V.setFromProjectionMatrix(xe),me=this.localClippingEnabled,J=ce.init(this.clippingPlanes,me),g=Me.get(P,x.length),g.init(),x.push(g),Q.enabled===!0&&Q.isPresenting===!0){let Ie=b.xr.getDepthSensingMesh();Ie!==null&&yr(Ie,$,-1/0,b.sortObjects)}yr(P,$,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(j,k),ie=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ie&&ye.addToRenderList(g,P),this.info.render.frame++,J===!0&&ce.beginShadows();let ne=m.state.shadowsArray;he.render(ne,P,$),J===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=g.opaque,q=g.transmissive;if(m.setupLights(),$.isArrayCamera){let Ie=$.cameras;if(q.length>0)for(let Ge=0,Ye=Ie.length;Ge<Ye;Ge++){let je=Ie[Ge];Eo(te,q,P,je)}ie&&ye.render(P);for(let Ge=0,Ye=Ie.length;Ge<Ye;Ge++){let je=Ie[Ge];wo(g,P,je,je.viewport)}}else q.length>0&&Eo(te,q,P,$),ie&&ye.render(P),wo(g,P,$);C!==null&&(F.updateMultisampleRenderTarget(C),F.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(b,P,$),ht.resetDefaultState(),M=-1,_=null,y.pop(),y.length>0?(m=y[y.length-1],J===!0&&ce.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function yr(P,$,ne,te){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||V.intersectsSprite(P)){te&&Re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xe);let Ge=Y.update(P),Ye=P.material;Ye.visible&&g.push(P,Ge,Ye,ne,Re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||V.intersectsObject(P))){let Ge=Y.update(P),Ye=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Re.copy(P.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Re.copy(Ge.boundingSphere.center)),Re.applyMatrix4(P.matrixWorld).applyMatrix4(xe)),Array.isArray(Ye)){let je=Ge.groups;for(let ut=0,ft=je.length;ut<ft;ut++){let Ke=je[ut],Tt=Ye[Ke.materialIndex];Tt&&Tt.visible&&g.push(P,Ge,Tt,ne,Re.z,Ke)}}else Ye.visible&&g.push(P,Ge,Ye,ne,Re.z,null)}}let Ie=P.children;for(let Ge=0,Ye=Ie.length;Ge<Ye;Ge++)yr(Ie[Ge],$,ne,te)}function wo(P,$,ne,te){let q=P.opaque,Ie=P.transmissive,Ge=P.transparent;m.setupLightsView(ne),J===!0&&ce.setGlobalState(b.clippingPlanes,ne),te&&pe.viewport(S.copy(te)),q.length>0&&as(q,$,ne),Ie.length>0&&as(Ie,$,ne),Ge.length>0&&as(Ge,$,ne),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Eo(P,$,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[te.id]===void 0&&(m.state.transmissionRenderTarget[te.id]=new Bn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?yi:Yi,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));let Ie=m.state.transmissionRenderTarget[te.id],Ge=te.viewport||S;Ie.setSize(Ge.z,Ge.w);let Ye=b.getRenderTarget();b.setRenderTarget(Ie),b.getClearColor(I),z=b.getClearAlpha(),z<1&&b.setClearColor(16777215,.5),b.clear(),ie&&ye.render(ne);let je=b.toneMapping;b.toneMapping=bs;let ut=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),m.setupLightsView(te),J===!0&&ce.setGlobalState(b.clippingPlanes,te),as(P,ne,te),F.updateMultisampleRenderTarget(Ie),F.updateRenderTargetMipmap(Ie),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Ke=0,Tt=$.length;Ke<Tt;Ke++){let $t=$[Ke],jt=$t.object,Xn=$t.geometry,Pt=$t.material,Je=$t.group;if(Pt.side===qe&&jt.layers.test(te.layers)){let Hi=Pt.side;Pt.side=Fn,Pt.needsUpdate=!0,Mo(jt,ne,te,Xn,Pt,Je),Pt.side=Hi,Pt.needsUpdate=!0,ft=!0}}ft===!0&&(F.updateMultisampleRenderTarget(Ie),F.updateRenderTargetMipmap(Ie))}b.setRenderTarget(Ye),b.setClearColor(I,z),ut!==void 0&&(te.viewport=ut),b.toneMapping=je}function as(P,$,ne){let te=$.isScene===!0?$.overrideMaterial:null;for(let q=0,Ie=P.length;q<Ie;q++){let Ge=P[q],Ye=Ge.object,je=Ge.geometry,ut=te===null?Ge.material:te,ft=Ge.group;Ye.layers.test(ne.layers)&&Mo(Ye,$,ne,je,ut,ft)}}function Mo(P,$,ne,te,q,Ie){P.onBeforeRender(b,$,ne,te,q,Ie),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(b,$,ne,te,P,Ie),q.transparent===!0&&q.side===qe&&q.forceSinglePass===!1?(q.side=Fn,q.needsUpdate=!0,b.renderBufferDirect(ne,$,te,q,P,Ie),q.side=Ai,q.needsUpdate=!0,b.renderBufferDirect(ne,$,te,q,P,Ie),q.side=qe):b.renderBufferDirect(ne,$,te,q,P,Ie),P.onAfterRender(b,$,ne,te,q,Ie)}function Le(P,$,ne){$.isScene!==!0&&($=He);let te=we.get(P),q=m.state.lights,Ie=m.state.shadowsArray,Ge=q.state.version,Ye=ve.getParameters(P,q.state,Ie,$,ne),je=ve.getProgramCacheKey(Ye),ut=te.programs;te.environment=P.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(P.isMeshStandardMaterial?B:T).get(P.envMap||te.environment),te.envMapRotation=te.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,ut===void 0&&(P.addEventListener("dispose",at),ut=new Map,te.programs=ut);let ft=ut.get(je);if(ft!==void 0){if(te.currentProgram===ft&&te.lightsStateVersion===Ge)return fn(P,Ye),ft}else Ye.uniforms=ve.getUniforms(P),P.onBeforeCompile(Ye,b),ft=ve.acquireProgram(Ye,je),ut.set(je,ft),te.uniforms=Ye.uniforms;let Ke=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=ce.uniform),fn(P,Ye),te.needsLights=Yt(P),te.lightsStateVersion=Ge,te.needsLights&&(Ke.ambientLightColor.value=q.state.ambient,Ke.lightProbe.value=q.state.probe,Ke.directionalLights.value=q.state.directional,Ke.directionalLightShadows.value=q.state.directionalShadow,Ke.spotLights.value=q.state.spot,Ke.spotLightShadows.value=q.state.spotShadow,Ke.rectAreaLights.value=q.state.rectArea,Ke.ltc_1.value=q.state.rectAreaLTC1,Ke.ltc_2.value=q.state.rectAreaLTC2,Ke.pointLights.value=q.state.point,Ke.pointLightShadows.value=q.state.pointShadow,Ke.hemisphereLights.value=q.state.hemi,Ke.directionalShadowMap.value=q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ke.spotShadowMap.value=q.state.spotShadowMap,Ke.spotLightMatrix.value=q.state.spotLightMatrix,Ke.spotLightMap.value=q.state.spotLightMap,Ke.pointShadowMap.value=q.state.pointShadowMap,Ke.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=ft,te.uniformsList=null,ft}function rt(P){if(P.uniformsList===null){let $=P.currentProgram.getUniforms();P.uniformsList=$r.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function fn(P,$){let ne=we.get(P);ne.outputColorSpace=$.outputColorSpace,ne.batching=$.batching,ne.batchingColor=$.batchingColor,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.instancingMorph=$.instancingMorph,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function ls(P,$,ne,te,q){$.isScene!==!0&&($=He),F.resetTextureUnits();let Ie=$.fog,Ge=te.isMeshStandardMaterial?$.environment:null,Ye=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Un,je=(te.isMeshStandardMaterial?B:T).get(te.envMap||Ge),ut=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ft=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!ne.morphAttributes.position,Tt=!!ne.morphAttributes.normal,$t=!!ne.morphAttributes.color,jt=bs;te.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(jt=b.toneMapping);let Xn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Pt=Xn!==void 0?Xn.length:0,Je=we.get(te),Hi=m.state.lights;if(J===!0&&(me===!0||P!==_)){let ti=P===_&&te.id===M;ce.setState(te,P,ti)}let It=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Hi.state.version||Je.outputColorSpace!==Ye||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==je||te.fog===!0&&Je.fog!==Ie||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ce.numPlanes||Je.numIntersection!==ce.numIntersection)||Je.vertexAlphas!==ut||Je.vertexTangents!==ft||Je.morphTargets!==Ke||Je.morphNormals!==Tt||Je.morphColors!==$t||Je.toneMapping!==jt||Je.morphTargetsCount!==Pt)&&(It=!0):(It=!0,Je.__version=te.version);let hi=Je.currentProgram;It===!0&&(hi=Le(te,$,q));let br=!1,jn=!1,To=!1,Kt=hi.getUniforms(),Ei=Je.uniforms;if(pe.useProgram(hi.program)&&(br=!0,jn=!0,To=!0),te.id!==M&&(M=te.id,jn=!0),br||_!==P){pe.buffers.depth.getReversed()?(oe.copy(P.projectionMatrix),av(oe),lv(oe),Kt.setValue(H,"projectionMatrix",oe)):Kt.setValue(H,"projectionMatrix",P.projectionMatrix),Kt.setValue(H,"viewMatrix",P.matrixWorldInverse);let cs=Kt.map.cameraPosition;cs!==void 0&&cs.setValue(H,ue.setFromMatrixPosition(P.matrixWorld)),fe.logarithmicDepthBuffer&&Kt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Kt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,jn=!0,To=!0)}if(q.isSkinnedMesh){Kt.setOptional(H,q,"bindMatrix"),Kt.setOptional(H,q,"bindMatrixInverse");let ti=q.skeleton;ti&&(ti.boneTexture===null&&ti.computeBoneTexture(),Kt.setValue(H,"boneTexture",ti.boneTexture,F))}q.isBatchedMesh&&(Kt.setOptional(H,q,"batchingTexture"),Kt.setValue(H,"batchingTexture",q._matricesTexture,F),Kt.setOptional(H,q,"batchingIdTexture"),Kt.setValue(H,"batchingIdTexture",q._indirectTexture,F),Kt.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Kt.setValue(H,"batchingColorTexture",q._colorsTexture,F));let So=ne.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0)&&Pe.update(q,ne,hi),(jn||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Kt.setValue(H,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ei.envMap.value=je,Ei.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&$.environment!==null&&(Ei.envMapIntensity.value=$.environmentIntensity),jn&&(Kt.setValue(H,"toneMappingExposure",b.toneMappingExposure),Je.needsLights&&Wn(Ei,To),Ie&&te.fog===!0&&Ee.refreshFogUniforms(Ei,Ie),Ee.refreshMaterialUniforms(Ei,te,D,O,m.state.transmissionRenderTarget[P.id]),$r.upload(H,rt(Je),Ei,F)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&($r.upload(H,rt(Je),Ei,F),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Kt.setValue(H,"center",q.center),Kt.setValue(H,"modelViewMatrix",q.modelViewMatrix),Kt.setValue(H,"normalMatrix",q.normalMatrix),Kt.setValue(H,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let ti=te.uniformsGroups;for(let cs=0,us=ti.length;cs<us;cs++){let Ef=ti[cs];G.update(Ef,hi),G.bind(Ef,hi)}}return hi}function Wn(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Yt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,$,ne){we.get(P.texture).__webglTexture=$,we.get(P.depthTexture).__webglTexture=ne;let te=we.get(P);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ne===void 0,te.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){let ne=we.get(P);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,ne=0){C=P,E=$,A=ne;let te=!0,q=null,Ie=!1,Ge=!1;if(P){let je=we.get(P);if(je.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(H.FRAMEBUFFER,null),te=!1;else if(je.__webglFramebuffer===void 0)F.setupRenderTarget(P);else if(je.__hasExternalTextures)F.rebindTextures(P,we.get(P.texture).__webglTexture,we.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ke=P.depthTexture;if(je.__boundDepthTexture!==Ke){if(Ke!==null&&we.has(Ke)&&(P.width!==Ke.image.width||P.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(P)}}let ut=P.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Ge=!0);let ft=we.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ft[$])?q=ft[$][ne]:q=ft[$],Ie=!0):P.samples>0&&F.useMultisampledRTT(P)===!1?q=we.get(P).__webglMultisampledFramebuffer:Array.isArray(ft)?q=ft[ne]:q=ft,S.copy(P.viewport),U.copy(P.scissor),N=P.scissorTest}else S.copy(Z).multiplyScalar(D).floor(),U.copy(ge).multiplyScalar(D).floor(),N=de;if(pe.bindFramebuffer(H.FRAMEBUFFER,q)&&te&&pe.drawBuffers(P,q),pe.viewport(S),pe.scissor(U),pe.setScissorTest(N),Ie){let je=we.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,ne)}else if(Ge){let je=we.get(P.texture),ut=$||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.__webglTexture,ne||0,ut)}M=-1},this.readRenderTargetPixels=function(P,$,ne,te,q,Ie,Ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=we.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye){pe.bindFramebuffer(H.FRAMEBUFFER,Ye);try{let je=P.texture,ut=je.format,ft=je.type;if(!fe.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-te&&ne>=0&&ne<=P.height-q&&H.readPixels($,ne,te,q,et.convert(ut),et.convert(ft),Ie)}finally{let je=C!==null?we.get(C).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,$,ne,te,q,Ie,Ge){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=we.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye){let je=P.texture,ut=je.format,ft=je.type;if(!fe.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-te&&ne>=0&&ne<=P.height-q){pe.bindFramebuffer(H.FRAMEBUFFER,Ye);let Ke=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.bufferData(H.PIXEL_PACK_BUFFER,Ie.byteLength,H.STREAM_READ),H.readPixels($,ne,te,q,et.convert(ut),et.convert(ft),0);let Tt=C!==null?we.get(C).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,Tt);let $t=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ov(H,$t,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ie),H.deleteBuffer(Ke),H.deleteSync($t),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,ne=0){P.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);let te=Math.pow(2,-ne),q=Math.floor(P.image.width*te),Ie=Math.floor(P.image.height*te),Ge=$!==null?$.x:0,Ye=$!==null?$.y:0;F.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Ge,Ye,q,Ie),pe.unbindTexture()},this.copyTextureToTexture=function(P,$,ne=null,te=null,q=0){P.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,P=arguments[1],$=arguments[2],q=arguments[3]||0,ne=null);let Ie,Ge,Ye,je,ut,ft,Ke,Tt,$t,jt=P.isCompressedTexture?P.mipmaps[q]:P.image;ne!==null?(Ie=ne.max.x-ne.min.x,Ge=ne.max.y-ne.min.y,Ye=ne.isBox3?ne.max.z-ne.min.z:1,je=ne.min.x,ut=ne.min.y,ft=ne.isBox3?ne.min.z:0):(Ie=jt.width,Ge=jt.height,Ye=jt.depth||1,je=0,ut=0,ft=0),te!==null?(Ke=te.x,Tt=te.y,$t=te.z):(Ke=0,Tt=0,$t=0);let Xn=et.convert($.format),Pt=et.convert($.type),Je;$.isData3DTexture?(F.setTexture3D($,0),Je=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(F.setTexture2DArray($,0),Je=H.TEXTURE_2D_ARRAY):(F.setTexture2D($,0),Je=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);let Hi=H.getParameter(H.UNPACK_ROW_LENGTH),It=H.getParameter(H.UNPACK_IMAGE_HEIGHT),hi=H.getParameter(H.UNPACK_SKIP_PIXELS),br=H.getParameter(H.UNPACK_SKIP_ROWS),jn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,jt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,jt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,je),H.pixelStorei(H.UNPACK_SKIP_ROWS,ut),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ft);let To=P.isDataArrayTexture||P.isData3DTexture,Kt=$.isDataArrayTexture||$.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Ei=we.get(P),So=we.get($),ti=we.get(Ei.__renderTarget),cs=we.get(So.__renderTarget);pe.bindFramebuffer(H.READ_FRAMEBUFFER,ti.__webglFramebuffer),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let us=0;us<Ye;us++)To&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,we.get(P).__webglTexture,q,ft+us),P.isDepthTexture?(Kt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,we.get($).__webglTexture,q,$t+us),H.blitFramebuffer(je,ut,Ie,Ge,Ke,Tt,Ie,Ge,H.DEPTH_BUFFER_BIT,H.NEAREST)):Kt?H.copyTexSubImage3D(Je,q,Ke,Tt,$t+us,je,ut,Ie,Ge):H.copyTexSubImage2D(Je,q,Ke,Tt,$t+us,je,ut,Ie,Ge);pe.bindFramebuffer(H.READ_FRAMEBUFFER,null),pe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Kt?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Je,q,Ke,Tt,$t,Ie,Ge,Ye,Xn,Pt,jt.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(Je,q,Ke,Tt,$t,Ie,Ge,Ye,Xn,jt.data):H.texSubImage3D(Je,q,Ke,Tt,$t,Ie,Ge,Ye,Xn,Pt,jt):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,Ke,Tt,Ie,Ge,Xn,Pt,jt.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,Ke,Tt,jt.width,jt.height,Xn,jt.data):H.texSubImage2D(H.TEXTURE_2D,q,Ke,Tt,Ie,Ge,Xn,Pt,jt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Hi),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It),H.pixelStorei(H.UNPACK_SKIP_PIXELS,hi),H.pixelStorei(H.UNPACK_SKIP_ROWS,br),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jn),q===0&&$.generateMipmaps&&H.generateMipmap(Je),pe.unbindTexture()},this.copyTextureToTexture3D=function(P,$,ne=null,te=null,q=0){return P.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,te=arguments[1]||null,P=arguments[2],$=arguments[3],q=arguments[4]||0),zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,ne,te,q)},this.initRenderTarget=function(P){we.get(P).__webglFramebuffer===void 0&&F.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?F.setTextureCube(P,0):P.isData3DTexture?F.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?F.setTexture2DArray(P,0):F.setTexture2D(P,0),pe.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,pe.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var Qo=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new w,nr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ri=class extends kn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,Io=new w,Hr=new w,Dr=new w,zr=new ae,Fo=new ae,y0=new Se,Ka=new w,Lo=new w,Za=new w,Mp=new ae,uu=new ae,Tp=new ae,vi=class extends Jt{constructor(e=new ri){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new nr(n,3,0,!1)),Nr.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),y0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Dr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ja(Ka.set(-.5,-.5,0),Dr,o,Hr,s,r),Ja(Lo.set(.5,-.5,0),Dr,o,Hr,s,r),Ja(Za.set(.5,.5,0),Dr,o,Hr,s,r),Mp.set(0,0),uu.set(1,0),Tp.set(1,1);let a=e.ray.intersectTriangle(Ka,Lo,Za,!1,Io);if(a===null&&(Ja(Lo.set(-.5,.5,0),Dr,o,Hr,s,r),uu.set(0,1),a=e.ray.intersectTriangle(Ka,Za,Lo,!1,Io),a===null))return;let l=e.ray.origin.distanceTo(Io);l<e.near||l>e.far||t.push({distance:l,point:Io.clone(),uv:xs.getInterpolation(Io,Ka,Lo,Za,Mp,uu,Tp,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ja(i,e,t,n,s,r){zr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fo.x=r*zr.x-s*zr.y,Fo.y=s*zr.x+r*zr.y):Fo.copy(zr),i.copy(e),i.x+=Fo.x,i.y+=Fo.y,i.applyMatrix4(y0)}var Qa=new w,Sp=new w,Ml=class extends Jt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Qa.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Qa);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Qa.setFromMatrixPosition(e.matrixWorld),Sp.setFromMatrixPosition(this.matrixWorld);let n=Qa.distanceTo(Sp)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},Ap=new w,Rp=new bt,Cp=new bt,t_=new w,Pp=new Se,el=new w,hu=new On,Ip=new Se,du=new er,Tl=class extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Af,this.bindMatrix=new Se,this.bindMatrixInverse=new Se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,el),this.boundingBox.expandByPoint(el)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,el),this.boundingSphere.expandByPoint(el)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hu.copy(this.boundingSphere),hu.applyMatrix4(s),e.ray.intersectsSphere(hu)!==!1&&(Ip.copy(s).invert(),du.copy(e.ray).applyMatrix4(Ip),!(this.boundingBox!==null&&du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Af?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ig?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rp.fromBufferAttribute(s.attributes.skinIndex,e),Cp.fromBufferAttribute(s.attributes.skinWeight,e),Ap.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Cp.getComponent(r);if(o!==0){let a=Rp.getComponent(r);Pp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(t_.copy(Ap).applyMatrix4(Pp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ea=class extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sl=class extends _n{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ln,u=Ln,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fp=new Se,n_=new Se,Al=class i{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Se;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:n_;Fp.multiplyMatrices(a,t[r]),Fp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Sl(t,e,e,ii,gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ea),this.bones.push(o),this.boneInverses.push(new Se().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},st=class extends nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new Se,Lp=new Se,tl=[],Up=new an,i_=new Se,Uo=new Te,No=new On,Ut=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new st(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Up.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Up)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),No.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(No)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),e.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),Lp.multiplyMatrices(n,Br),Uo.matrixWorld=Lp,Uo.raycast(e,tl);for(let o=0,a=tl.length;o<a;o++){let l=tl[o];l.instanceId=r,l.object=this,t.push(l)}tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new st(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sl(new Float32Array(s*this.count),s,this.count,jh,gi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ta=class extends kn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rl=new w,Cl=new w,Np=new Se,Ho=new er,nl=new On,fu=new w,Hp=new w,so=class extends Jt{constructor(e=new Ze,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rl.fromBufferAttribute(t,s-1),Cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rl.distanceTo(Cl);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;Np.copy(s).invert(),Ho.copy(e.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=u.getX(v),x=u.getX(v+1),y=il(this,e,Ho,l,m,x);y&&t.push(y)}if(this.isLineLoop){let v=u.getX(p-1),g=u.getX(f),m=il(this,e,Ho,l,v,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=il(this,e,Ho,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=il(this,e,Ho,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function il(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Rl.fromBufferAttribute(o,s),Cl.fromBufferAttribute(o,r),t.distanceSqToSegment(Rl,Cl,fu,Hp)>n)return;fu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fu);if(!(l<e.near||l>e.far))return{distance:l,point:Hp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Dp=new w,zp=new w,Pl=class extends so{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Dp.fromBufferAttribute(t,s),zp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Dp.distanceTo(zp);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Il=class extends so{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends kn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bp=new Se,vh=new er,sl=new On,rl=new w,xi=class extends Jt{constructor(e=new Ze,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),sl.radius+=r,e.ray.intersectsSphere(sl)===!1)return;Bp.copy(s).invert(),vh.copy(e.ray).applyMatrix4(Bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);rl.fromBufferAttribute(h,g),Op(rl,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,v=f;p<v;p++)rl.fromBufferAttribute(h,p),Op(rl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Op(i,e,t,n,s,r,o){let a=vh.distanceSqToPoint(i);if(a<t){let l=new w;vh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Jn=class extends _n{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,s=[],r=[],o=[],a=new w,l=new Se;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(pn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(pn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},na=class extends oi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xh=class extends na{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nd(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ol=new w,pu=new nd,mu=new nd,gu=new nd,ws=class extends oi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ol.subVectors(s[0],s[1]).add(s[0]),c=ol);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ol.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ol),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),pu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,v,g),mu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,v,g),gu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(pu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),mu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),gu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(pu.calc(l),mu.calc(l),gu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function s_(i,e){let t=1-i;return t*t*e}function r_(i,e){return 2*(1-i)*i*e}function o_(i,e){return i*i*e}function Wo(i,e,t,n){return s_(i,e)+r_(i,t)+o_(i,n)}function a_(i,e){let t=1-i;return t*t*t*e}function l_(i,e){let t=1-i;return 3*t*t*i*e}function c_(i,e){return 3*(1-i)*i*i*e}function u_(i,e){return i*i*i*e}function Xo(i,e,t,n,s){return a_(i,e)+l_(i,t)+c_(i,n)+u_(i,s)}var Fl=class extends oi{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xo(e,s.x,r.x,o.x,a.x),Xo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yh=class extends oi{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xo(e,s.x,r.x,o.x,a.x),Xo(e,s.y,r.y,o.y,a.y),Xo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ll=class extends oi{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends oi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends oi{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Wo(e,s.x,r.x,o.x),Wo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends oi{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Wo(e,s.x,r.x,o.x),Wo(e,s.y,r.y,o.y),Wo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(kp(a,l.x,c.x,u.x,h.x),kp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:ws,CubicBezierCurve:Fl,CubicBezierCurve3:yh,EllipseCurve:na,LineCurve:Ll,LineCurve3:bh,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Nl,SplineCurve:Hl}),_h=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}},ro=class extends _h{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ll(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ul(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Fl(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Hl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new na(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},oo=class i extends Ze{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=pn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new w,d=new ae,f=new w,p=new w,v=new w,g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=t;x++){let y=n+x*u*s,b=Math.sin(y),R=Math.cos(y);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*b,h.y=e[E].y,h.z=e[E].x*R,o.push(h.x,h.y,h.z),d.x=x/t,d.y=E/(e.length-1),a.push(d.x,d.y);let A=l[3*E+0]*b,C=l[3*E+1],M=l[3*E+0]*R;c.push(A,C,M)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let b=y+x*e.length,R=b,E=b+e.length,A=b+e.length+1,C=b+1;r.push(R,E,C),r.push(A,C,E)}this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("uv",new We(a,2)),this.setAttribute("normal",new We(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Es=class i extends Ze{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new w,u=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wn=class i extends Ze{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,v=[],g=n/2,m=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function x(){let b=new w,R=new w,E=0,A=(t-e)/n;for(let C=0;C<=r;C++){let M=[],_=C/r,S=_*(t-e)+e;for(let U=0;U<=s;U++){let N=U/s,I=N*l+a,z=Math.sin(I),L=Math.cos(I);R.x=S*z,R.y=-_*n+g,R.z=S*L,h.push(R.x,R.y,R.z),b.set(z,A,L).normalize(),d.push(b.x,b.y,b.z),f.push(N,1-_),M.push(p++)}v.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let _=v[M][C],S=v[M+1][C],U=v[M+1][C+1],N=v[M][C+1];(e>0||M!==0)&&(u.push(_,S,N),E+=3),(t>0||M!==r-1)&&(u.push(S,U,N),E+=3)}c.addGroup(m,E,0),m+=E}function y(b){let R=p,E=new ae,A=new w,C=0,M=b===!0?e:t,_=b===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),p++;let S=p;for(let U=0;U<=s;U++){let I=U/s*l+a,z=Math.cos(I),L=Math.sin(I);A.x=M*L,A.y=g*_,A.z=M*z,h.push(A.x,A.y,A.z),d.push(0,_,0),E.x=z*.5+.5,E.y=L*.5*_+.5,f.push(E.x,E.y),p++}for(let U=0;U<s;U++){let N=R+U,I=S+U;b===!0?u.push(I,I+1,N):u.push(I+1,I,N),C+=3}c.addGroup(m,C,b===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wh=class i extends Ze{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new w,b=new w,R=new w;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],b),f(t[E+2],R),l(y,b,R,x)}function l(x,y,b,R){let E=R+1,A=[];for(let C=0;C<=E;C++){A[C]=[];let M=x.clone().lerp(b,C/E),_=y.clone().lerp(b,C/E),S=E-C;for(let U=0;U<=S;U++)U===0&&C===E?A[C][U]=M:A[C][U]=M.clone().lerp(_,U/S)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){let _=Math.floor(M/2);M%2===0?(d(A[C][_+1]),d(A[C+1][_]),d(A[C][_])):(d(A[C][_+1]),d(A[C+1][_+1]),d(A[C+1][_]))}}function c(x){let y=new w;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(x),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function u(){let x=new w;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let b=g(x)/2/Math.PI+.5,R=m(x)/Math.PI+.5;o.push(b,1-R)}p(),h()}function h(){for(let x=0;x<o.length;x+=6){let y=o[x+0],b=o[x+2],R=o[x+4],E=Math.max(y,b,R),A=Math.min(y,b,R);E>.9&&A<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){let b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function p(){let x=new w,y=new w,b=new w,R=new w,E=new ae,A=new ae,C=new ae;for(let M=0,_=0;M<r.length;M+=9,_+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),R.copy(x).add(y).add(b).divideScalar(3);let S=g(R);v(E,_+0,x,S),v(A,_+2,y,S),v(C,_+4,b,S)}}function v(x,y,b,R){R<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ms=class extends ro{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ro().fromJSON(s))}return this}},h_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=b0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=g_(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let p=t;p<s;p+=t)h=i[p],d=i[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return ia(r,o,t,a,l,f,0),o}};function b0(i,e,t,n,s){let r,o;if(s===A_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Vp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Vp(r,i[r],i[r+1],o);return o&&Jl(o,o.next)&&(ra(o),o=o.next),o}function sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Jl(t,t.next)||sn(t.prev,t,t.next)===0)){if(ra(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ia(i,e,t,n,s,r,o){if(!i)return;!o&&r&&__(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?f_(i,n,s,r):d_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ra(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=p_(sr(i),e,t),ia(i,e,t,n,s,r,2)):o===2&&m_(i,e,t,n,s,r):ia(sr(i),e,t,n,s,r,1);break}}}function d_(i){let e=i.prev,t=i,n=i.next;if(sn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Vr(s,a,r,l,o,c,p.x,p.y)&&sn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function f_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(sn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=Eh(f,p,e,t,n),x=Eh(v,g,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=m&&b&&b.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Vr(a,u,l,h,c,d,y.x,y.y)&&sn(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Vr(a,u,l,h,c,d,b.x,b.y)&&sn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Vr(a,u,l,h,c,d,y.x,y.y)&&sn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Vr(a,u,l,h,c,d,b.x,b.y)&&sn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function p_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Jl(s,r)&&_0(s,n,n.next,r)&&sa(s,r)&&sa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ra(n),ra(n.next),n=i=r),n=n.next}while(n!==i);return sr(n)}function m_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M_(o,a)){let l=w0(o,a);o=sr(o,o.next),l=sr(l,l.next),ia(o,e,t,n,s,r,0),ia(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function g_(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=b0(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(E_(c));for(s.sort(v_),r=0;r<s.length;r++)t=x_(s[r],t);return t}function v_(i,e){return i.x-e.x}function x_(i,e){let t=y_(i,e);if(!t)return e;let n=w0(t,i);return sr(n,n.next),sr(t,t.next)}function y_(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Vr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),sa(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&b_(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function b_(i,e){return sn(i.prev,i,e.prev)<0&&sn(e.next,i,i.next)<0}function __(i,e,t,n){let s=i;do s.z===0&&(s.z=Eh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,w_(s)}function w_(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Eh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function E_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function M_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!T_(i,e)&&(sa(i,e)&&sa(e,i)&&S_(i,e)&&(sn(i.prev,i,e.prev)||sn(i,e.prev,e))||Jl(i,e)&&sn(i.prev,i,i.next)>0&&sn(e.prev,e,e.next)>0)}function sn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Jl(i,e){return i.x===e.x&&i.y===e.y}function _0(i,e,t,n){let s=ll(sn(i,e,t)),r=ll(sn(i,e,n)),o=ll(sn(t,n,i)),a=ll(sn(t,n,e));return!!(s!==r&&o!==a||s===0&&al(i,t,e)||r===0&&al(i,n,e)||o===0&&al(t,i,n)||a===0&&al(t,e,n))}function al(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ll(i){return i>0?1:i<0?-1:0}function T_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sa(i,e){return sn(i.prev,i,i.next)<0?sn(i,e,i.next)>=0&&sn(i,i.prev,e)>=0:sn(i,e,i.prev)<0||sn(i,i.next,e)<0}function S_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function w0(i,e){let t=new Mh(i.i,i.x,i.y),n=new Mh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vp(i,e,t,n){let s=new Mh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ra(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $o=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Gp(e),Wp(n,e);let o=e.length;t.forEach(Gp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Wp(n,t[l]);let a=h_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Gp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var rr=class i extends Ze{constructor(e=new Ms([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new We(s,3)),this.setAttribute("uv",new We(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:R_,y,b=!1,R,E,A,C;m&&(y=m.getSpacedPoints(u),b=!0,d=!1,R=m.computeFrenetFrames(u,!1),E=new w,A=new w,C=new w),d||(g=0,f=0,p=0,v=0);let M=a.extractPoints(c),_=M.shape,S=M.holes;if(!$o.isClockWise(_)){_=_.reverse();for(let ie=0,se=S.length;ie<se;ie++){let H=S[ie];$o.isClockWise(H)&&(S[ie]=H.reverse())}}let N=$o.triangulateShape(_,S),I=_;for(let ie=0,se=S.length;ie<se;ie++){let H=S[ie];_=_.concat(H)}function z(ie,se,H){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(se,H)}let L=_.length,O=N.length;function D(ie,se,H){let be,ee,fe,pe=ie.x-se.x,De=ie.y-se.y,we=H.x-ie.x,F=H.y-ie.y,T=pe*pe+De*De,B=pe*F-De*we;if(Math.abs(B)>Number.EPSILON){let W=Math.sqrt(T),X=Math.sqrt(we*we+F*F),Y=se.x-De/W,ve=se.y+pe/W,Ee=H.x-F/X,Me=H.y+we/X,Fe=((Ee-Y)*F-(Me-ve)*we)/(pe*F-De*we);be=Y+pe*Fe-ie.x,ee=ve+De*Fe-ie.y;let ce=be*be+ee*ee;if(ce<=2)return new ae(be,ee);fe=Math.sqrt(ce/2)}else{let W=!1;pe>Number.EPSILON?we>Number.EPSILON&&(W=!0):pe<-Number.EPSILON?we<-Number.EPSILON&&(W=!0):Math.sign(De)===Math.sign(F)&&(W=!0),W?(be=-De,ee=pe,fe=Math.sqrt(T)):(be=pe,ee=De,fe=Math.sqrt(T/2))}return new ae(be/fe,ee/fe)}let j=[];for(let ie=0,se=I.length,H=se-1,be=ie+1;ie<se;ie++,H++,be++)H===se&&(H=0),be===se&&(be=0),j[ie]=D(I[ie],I[H],I[be]);let k=[],Z,ge=j.concat();for(let ie=0,se=S.length;ie<se;ie++){let H=S[ie];Z=[];for(let be=0,ee=H.length,fe=ee-1,pe=be+1;be<ee;be++,fe++,pe++)fe===ee&&(fe=0),pe===ee&&(pe=0),Z[be]=D(H[be],H[fe],H[pe]);k.push(Z),ge=ge.concat(Z)}for(let ie=0;ie<g;ie++){let se=ie/g,H=f*Math.cos(se*Math.PI/2),be=p*Math.sin(se*Math.PI/2)+v;for(let ee=0,fe=I.length;ee<fe;ee++){let pe=z(I[ee],j[ee],be);oe(pe.x,pe.y,-H)}for(let ee=0,fe=S.length;ee<fe;ee++){let pe=S[ee];Z=k[ee];for(let De=0,we=pe.length;De<we;De++){let F=z(pe[De],Z[De],be);oe(F.x,F.y,-H)}}}let de=p+v;for(let ie=0;ie<L;ie++){let se=d?z(_[ie],ge[ie],de):_[ie];b?(A.copy(R.normals[0]).multiplyScalar(se.x),E.copy(R.binormals[0]).multiplyScalar(se.y),C.copy(y[0]).add(A).add(E),oe(C.x,C.y,C.z)):oe(se.x,se.y,0)}for(let ie=1;ie<=u;ie++)for(let se=0;se<L;se++){let H=d?z(_[se],ge[se],de):_[se];b?(A.copy(R.normals[ie]).multiplyScalar(H.x),E.copy(R.binormals[ie]).multiplyScalar(H.y),C.copy(y[ie]).add(A).add(E),oe(C.x,C.y,C.z)):oe(H.x,H.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){let se=ie/g,H=f*Math.cos(se*Math.PI/2),be=p*Math.sin(se*Math.PI/2)+v;for(let ee=0,fe=I.length;ee<fe;ee++){let pe=z(I[ee],j[ee],be);oe(pe.x,pe.y,h+H)}for(let ee=0,fe=S.length;ee<fe;ee++){let pe=S[ee];Z=k[ee];for(let De=0,we=pe.length;De<we;De++){let F=z(pe[De],Z[De],be);b?oe(F.x,F.y+y[u-1].y,y[u-1].x+H):oe(F.x,F.y,h+H)}}}V(),J();function V(){let ie=s.length/3;if(d){let se=0,H=L*se;for(let be=0;be<O;be++){let ee=N[be];xe(ee[2]+H,ee[1]+H,ee[0]+H)}se=u+g*2,H=L*se;for(let be=0;be<O;be++){let ee=N[be];xe(ee[0]+H,ee[1]+H,ee[2]+H)}}else{for(let se=0;se<O;se++){let H=N[se];xe(H[2],H[1],H[0])}for(let se=0;se<O;se++){let H=N[se];xe(H[0]+L*u,H[1]+L*u,H[2]+L*u)}}n.addGroup(ie,s.length/3-ie,0)}function J(){let ie=s.length/3,se=0;me(I,se),se+=I.length;for(let H=0,be=S.length;H<be;H++){let ee=S[H];me(ee,se),se+=ee.length}n.addGroup(ie,s.length/3-ie,1)}function me(ie,se){let H=ie.length;for(;--H>=0;){let be=H,ee=H-1;ee<0&&(ee=ie.length-1);for(let fe=0,pe=u+g*2;fe<pe;fe++){let De=L*fe,we=L*(fe+1),F=se+be+De,T=se+ee+De,B=se+ee+we,W=se+be+we;ue(F,T,B,W)}}}function oe(ie,se,H){l.push(ie),l.push(se),l.push(H)}function xe(ie,se,H){Re(ie),Re(se),Re(H);let be=s.length/3,ee=x.generateTopUV(n,s,be-3,be-2,be-1);He(ee[0]),He(ee[1]),He(ee[2])}function ue(ie,se,H,be){Re(ie),Re(se),Re(be),Re(se),Re(H),Re(be);let ee=s.length/3,fe=x.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);He(fe[0]),He(fe[1]),He(fe[3]),He(fe[1]),He(fe[2]),He(fe[3])}function Re(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function He(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dl[s.type]().fromJSON(s)),new i(n,e.options)}},R_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-h),new ae(d,1-p),new ae(v,1-m)]:[new ae(a,1-l),new ae(u,1-h),new ae(f,1-p),new ae(g,1-m)]}};function C_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ji=class i extends wh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var or=class i extends Ze{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new w,p=new ae;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let x=m+g,y=x,b=x+n+1,R=x+n+2,E=x+1;a.push(y,b,E),a.push(b,R,E)}}this.setIndex(a),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var tn=class i extends Ze{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new w,d=new w,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],y=m/n,b=0;m===0&&o===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let E=R/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(E+b,1-y),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let y=u[m][x+1],b=u[m][x],R=u[m+1][x],E=u[m+1][x+1];(m!==0||o>0)&&f.push(y,b,E),(m!==n-1||l<Math.PI)&&f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ot=class i extends Ze{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let v=p/s*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let v=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,x=(s+1)*f+p;o.push(v,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ar=class i extends Ze{constructor(e=new Nl(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new ae,u=new w,h=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function v(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),x(),m()}function g(y){u=e.getPointAt(y/t,u);let b=o.normals[y],R=o.binormals[y];for(let E=0;E<=s;E++){let A=E/s*Math.PI*2,C=Math.sin(A),M=-Math.cos(A);l.x=M*b.x+C*R.x,l.y=M*b.y+C*R.y,l.z=M*b.z+C*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let b=1;b<=s;b++){let R=(s+1)*(y-1)+(b-1),E=(s+1)*y+(b-1),A=(s+1)*y+b,C=(s+1)*(y-1)+b;p.push(R,E,C),p.push(E,A,C)}}function x(){for(let y=0;y<=t;y++)for(let b=0;b<=s;b++)c.x=y/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Dl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var zl=class extends Ue{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ot=class extends kn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qn=class extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Bl=class extends kn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function cl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function P_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function I_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function E0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ts=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Th=class extends Ts{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rf,endingEnd:Rf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cf:r=e,a=2*t-n;break;case Pf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cf:o=e,l=2*n-t;break;case Pf:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*v+.5*p,b=f*g-f*v;for(let R=0;R!==a;++R)r[R]=m*o[u+R]+x*o[c+R]+y*o[l+R]+b*o[h+R];return r}},Sh=class extends Ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Ah=class extends Ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cl(t,this.TimeBufferType),this.values=cl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cl(e.times,Array),values:cl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Th(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Qr:t=this.InterpolantFactoryMethodLinear;break;case Dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&P_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let v=t[h+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Qr;var Ss=class extends ai{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Jr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends ai{};Ol.prototype.ValueTypeName="color";var Ki=class extends ai{};Ki.prototype.ValueTypeName="number";var Rh=class extends Ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)_t.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zi=class extends ai{InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}};Zi.prototype.ValueTypeName="quaternion";Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends ai{constructor(e,t,n){super(e,t,n)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Jr;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends ai{};Ji.prototype.ValueTypeName="vector";var kl=class{constructor(e="",t=-1,n=[],s=Fg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(L_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ai.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=I_(l);l=Xp(l,1,u),c=Xp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ki(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,p,v){if(f.length!==0){let g=[],m=[];E0(f,g,m,p),g.length!==0&&v.push(new h(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(let v in f){let g=[],m=[];for(let x=0;x!==d[p].morphTargets.length;++x){let y=d[p];g.push(y.time),m.push(y.morphTarget===v?1:0)}s.push(new Ki(".morphTargetInfluence["+v+"]",g,m))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Ji,f+".position",d,"pos",s),n(Zi,f+".quaternion",d,"rot",s),n(Ji,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function F_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return Ji;case"color":return Ol;case"quaternion":return Zi;case"bool":case"boolean":return Ss;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function L_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=F_(i.type);if(i.times===void 0){let t=[],n=[];E0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ys={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ch=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},U_=new Ch,Qi=class{constructor(e){this.manager=e!==void 0?e:U_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi={},Ph=class extends Error{constructor(e,t){super(e),this.response=t}},oa=class extends Qi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ys.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Vi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,g=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:b})=>{if(y)m.close();else{v+=b.byteLength;let R=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,A=u.length;E<A;E++){let C=u[E];C.onProgress&&C.onProgress(R)}m.enqueue(b),x()}},y=>{m.error(y)})}}});return new Response(g)}else throw new Ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ys.add(e,c);let u=Vi[e];delete Vi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ih=class extends Qi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ys.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ko("img");function l(){u(),ys.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Rs=class extends Qi{constructor(e){super(e)}load(e,t,n,s){let r=new _n,o=new Ih(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ao=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vl=class extends ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vu=new Se,$p=new w,qp=new w,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;$p.setFromMatrixPosition(e.matrixWorld),t.position.copy($p),qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qp),t.updateMatrixWorld(),vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fh=class extends aa{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=eo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Gl=class extends ao{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yp=new Se,Do=new w,xu=new w,Lh=class extends aa{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Do.setFromMatrixPosition(e.matrixWorld),n.position.copy(Do),xu.copy(n.position),xu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xu),n.updateMatrixWorld(),s.makeTranslation(-Do.x,-Do.y,-Do.z),Yp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yp)}},Wl=class extends ao{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uh=class extends aa{constructor(){super(new Ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Cs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Qt=class extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Xl=class extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ys.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ys.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ys.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ys.add(e,l),r.manager.itemStart(e)}};var $l=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=jp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jp(){return performance.now()}var id="\\[\\]\\.:\\/",N_=new RegExp("["+id+"]","g"),sd="[^"+id+"]",H_="[^"+id.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",sd),z_=/(WCOD+)?/.source.replace("WCOD",H_),B_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),k_=new RegExp("^"+D_+z_+B_+O_+"$"),V_=["material","materials","bones","map"],Nh=class{constructor(e,t,n){let s=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(e){let t=k_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);V_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=Nh;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AT=new Float32Array(1);var Kp=new Se,ql=class{constructor(e,t,n=0,s=1/0){this.ray=new er(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kp),this}intersectObject(e,t=!0,n=[]){return Hh(e,this,n,t),n.sort(Zp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Hh(e[s],this,n,t);return n.sort(Zp),n}};function Zp(i,e){return i.distance-e.distance}function Hh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Hh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);function rd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ze,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=M0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);let p=M0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function M0(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new nt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let v=u.getComponent(d,p);a.setComponent(d+h,p,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function od(i,e){if(e===c0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ca||e===jl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ca)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Fs=class extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Ad(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Cs.extractUrlBase(e);o=Cs.resolveURL(c,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new oa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===C0){try{o[wt.KHR_BINARY_GLTF]=new Rd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[wt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Nd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case wt.KHR_MATERIALS_UNLIT:o[h]=new hd;break;case wt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Cd(r,this.dracoLoader);break;case wt.KHR_TEXTURE_TRANSFORM:o[h]=new Pd;break;case wt.KHR_MESH_QUANTIZATION:o[h]=new Id;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function G_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ud=class{constructor(e){this.parser=e,this.name=wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Un);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wl(u),c.distance=h;break;case"spot":c=new Gl(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},hd=class{constructor(){this.name=wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let s=[];e.color=new re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Un),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},fd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,a)}return Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},vd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},xd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(a[0],a[1],a[2],Un),Promise.all(r)}},yd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},bd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(a[0],a[1],a[2],Un),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=wt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},wd=class{constructor(e){this.parser=e,this.name=wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Ed=class{constructor(e){this.parser=e,this.name=wt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Md=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Td=class{constructor(e){this.parser=e,this.name=wt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sd=class{constructor(e){this.name=wt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Ad=class{constructor(e){this.name=wt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let v=new Se,g=new w,m=new _t,x=new w(1,1,1),y=new Ut(p.geometry,p.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,v.compose(g,m,x));for(let b in l)if(b==="_COLOR_0"){let R=l[b];y.instanceColor=new st(R.array,R.itemSize,R.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&p.geometry.setAttribute(b,l[b]);Jt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},C0="glTF",ua=12,T0={JSON:1313821514,BIN:5130562},Rd=class{constructor(e){this.name=wt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==C0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ua,r=new DataView(e,ua),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===T0.JSON){let c=new Uint8Array(e,ua+o,a);this.content=n.decode(c)}else if(l===T0.BIN){let c=ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Cd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=wt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Ld[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Ld[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=co[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let v=f.attributes[p],g=l[p];g!==void 0&&(v.normalized=g)}h(f)},a,c,Un,d)})})}},Pd=class{constructor(){this.name=wt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Id=class{constructor(){this.name=wt.KHR_MESH_QUANTIZATION}},Ql=class extends Ts{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,v=p-c,g=-2*f+3*d,m=f-d,x=1-g,y=m-d+h;for(let b=0;b!==a;b++){let R=o[v+b+a],E=o[v+b+l]*u,A=o[p+b+a],C=o[p+b]*u;r[b]=x*R+y*E+g*A+m*C}return r}},W_=new _t,Fd=class extends Ql{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return W_.fromArray(r).normalize().toArray(r),r}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},S0={9728:Ln,9729:$n,9984:Xh,9985:Oo,9986:Or,9987:Ti},A0={33071:Xi,33648:Yo,10497:Js},ad={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ld={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},X_={CUBICSPLINE:void 0,LINEAR:Qr,STEP:Jr},ld={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),i.DefaultMaterial}function cr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function q_(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Y_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j_(i){let e,t=i.extensions&&i.extensions[wt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cd(t.attributes):e=i.indices+":"+cd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+cd(i.targets[n]);return e}function cd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ud(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function K_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Z_=new Se,Nd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Rs(this.options.manager):this.textureLoader=new Xl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cr(r,a,s),es(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[wt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Cs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ad[s.type],a=co[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new nt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=ad[s.type],c=co[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,v,g;if(f&&f!==h){let m=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,y=t.cache.get(x);y||(v=new c(a,m*f,s.count*f/u),y=new io(v,f/u),t.cache.add(x,y)),g=new nr(y,l,d%f/u,p)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),g=new nt(v,l,p);if(s.sparse!==void 0){let m=ad.SCALAR,x=co[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,R=new x(o[1],y,s.sparse.count*m),E=new c(o[2],b,s.sparse.count*l);a!==null&&(g=new nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,C=R.length;A<C;A++){let M=R[A];if(g.setX(M,E[A*l]),l>=2&&g.setY(M,E[A*l+1]),l>=3&&g.setZ(M,E[A*l+2]),l>=4&&g.setW(M,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=S0[d.magFilter]||$n,u.minFilter=S0[d.minFilter]||Ti,u.wrapS=A0[d.wrapS]||Js,u.wrapT=A0[d.wrapT]||Js,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ln&&u.minFilter!==$n,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){let g=new _n(v);g.needsUpdate=!0,d(g)}),t.load(Cs.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),es(h,o),h.userData.mimeType=o.mimeType||K_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[wt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[wt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[wt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ir,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ta,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ot}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[wt.KHR_MATERIALS_UNLIT]){let h=s[wt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Un),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,St)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qe);let u=r.alphaMode||ld.OPAQUE;if(u===ld.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ld.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bt){let h=r.emissiveFactor;a.emissive=new re().setRGB(h[0],h[1],h[2],Un)}return r.emissiveTexture!==void 0&&o!==Bt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),es(h,r),t.associations.set(h,{materials:e}),r.extensions&&cr(s,h,r),h})}createUniqueName(e){let t=qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return R0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=j_(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[wt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=R0(new Ze,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?$_(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let v=u[f],g=o[f],m,x=c[f];if(g.mode===li.TRIANGLES||g.mode===li.TRIANGLE_STRIP||g.mode===li.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Tl(v,x):new Te(v,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===li.TRIANGLE_STRIP?m.geometry=od(m.geometry,jl):g.mode===li.TRIANGLE_FAN&&(m.geometry=od(m.geometry,ca));else if(g.mode===li.LINES)m=new Pl(v,x);else if(g.mode===li.LINE_STRIP)m=new so(v,x);else if(g.mode===li.LINE_LOOP)m=new Il(v,x);else if(g.mode===li.POINTS)m=new xi(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Y_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),es(m,r),g.extensions&&cr(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&cr(s,h[0],r),h[0];let d=new $e;r.extensions&&cr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(_e.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ri(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Se;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Al(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],v=f.target,g=v.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(p),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],v=h[3],g=h[4],m=[];for(let x=0,y=d.length;x<y;x++){let b=d[x],R=f[x],E=p[x],A=v[x],C=g[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let M=n._createAnimationTracks(b,R,E,A,C);if(M)for(let _=0;_<M.length;_++)m.push(M[_])}return new kl(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Z_)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ea:c.length>1?u=new $e:c.length===1?u=c[0]:u=new Jt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),es(u,r),r.extensions&&cr(n,u,r),r.matrix!==void 0){let h=new Se;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new $e;n.name&&(r.name=s.createUniqueName(n.name)),es(r,n),n.extensions&&cr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof kn||d instanceof _n)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Is[r.path]===Is.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Is[r.path]){case Is.weights:c=Ki;break;case Is.rotation:c=Zi;break;case Is.position:case Is.scale:c=Ji;break;default:switch(n.itemSize){case 1:c=Ki;break;case 2:case 3:default:c=Ji;break}break}let u=s.interpolation!==void 0?X_[s.interpolation]:Qr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+Is[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ud(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Zi?Fd:Ql;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function J_(i,e,t){let n=e.attributes,s=new an;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){let u=Ud(co[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,l=new w;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=Ud(co[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function R0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Ld[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return yt.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),es(i,e),J_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?q_(i,e.targets,t):i})}var ec={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Q_=new Ri(-1,1,1,-1,0,1),Hd=class extends Ze{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}},ew=new Hd,Ls=class{constructor(e){this._mesh=new Te(ew,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Q_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var uo=class extends ei{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ue?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ps.clone(e.uniforms),this.material=new Ue({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ls(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ha=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},tc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var nc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uo(ec),this.copyPass.material.blending=Si,this.clock=new $l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ha!==void 0&&(o instanceof ha?n=!0:o instanceof tc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ic=class extends ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var P0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ho=class i extends ei{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bn(r,o,{type:yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Bn(r,o,{type:yi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Bn(r,o,{type:yi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=P0;this.highPassUniforms=Ps.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ue({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ec;this.copyUniforms=Ps.clone(u.uniforms),this.blendMaterial=new Ue({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:mn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new re,this.oldClearAlpha=1,this.basic=new Bt,this.fsQuad=new Ls(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ue({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ue({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ho.BlurDirectionX=new ae(1,0);ho.BlurDirectionY=new ae(0,1);var I0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var sc=class extends ei{constructor(){super();let e=I0;this.uniforms=Ps.clone(e.uniforms),this.material=new zl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ls(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===la&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var da=new w;function ci(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;da.copy(e),da[n]=0,da.normalize();let c=.5*o/(o+a),u=1-da.angleTo(i)/l;return Math.sign(da[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Ci=class extends tr{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,l=new w,c=new w(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new w,v=.5/s;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=ci(p,l,"z","y",r,n),d[m+1]=1-ci(p,l,"y","z",r,t);break;case 1:p.set(-1,0,0),d[m+0]=1-ci(p,l,"z","y",r,n),d[m+1]=1-ci(p,l,"y","z",r,t);break;case 2:p.set(0,1,0),d[m+0]=1-ci(p,l,"x","z",r,e),d[m+1]=ci(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-ci(p,l,"x","z",r,e),d[m+1]=1-ci(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-ci(p,l,"x","y",r,e),d[m+1]=1-ci(p,l,"y","x",r,t);break;case 5:p.set(0,0,-1),d[m+0]=ci(p,l,"x","y",r,e),d[m+1]=1-ci(p,l,"y","x",r,t);break}}};var mo={};cg(mo,{AXIS_H:()=>Pi,BODY_R:()=>rc,CRUISE:()=>Ns,FLOAT_H:()=>fo,GRAVITY:()=>Od,HEIGHT_GLSL:()=>ac,HILLS:()=>rn,JUMP_V:()=>Bd,LANE:()=>Dd,LAYOUT_LANE:()=>zd,SLIDE:()=>on,SWELL:()=>fa,WATER:()=>Us,baseHeight:()=>qn,clamp01:()=>ur,hills:()=>F0,laneX:()=>Yn,slopeAt:()=>oc,smoothstep:()=>po,surface:()=>ts,waves:()=>L0});var Us=0,Pi=1.5,Dd=.7,zd=.85,fo=.34,rc=.4,Ns=7,Bd=6.2,Od=17,on={half:1.1,moat:-.6,crown:.1},rn=[[-16.7,0],[-11.8,-.5],[-5.6,.36],[-1,0]],fa={amp:.1,wavelength:7.4},ur=i=>Math.min(1,Math.max(0,i)),po=(i,e,t)=>{let n=ur((t-i)/(e-i));return n*n*(3-2*n)},Yn=i=>(1-i)*.7;function F0(i){if(i<=rn[0][0]||i>=rn[rn.length-1][0])return 0;for(let e=0;e<rn.length-1;e++){let[t,n]=rn[e],[s,r]=rn[e+1];if(i<s)return n+(r-n)*po(t,s,i)}return 0}function qn(i,e,t){let n=ur((i.tunnelStart-t)*.5),s=Math.abs(e),r=on.crown*ur(1-s*s/(on.half*on.half)),o=po(on.half,on.half+.55,s),a=n*((r+F0(t))*(1-o)+on.moat*o),l=ur((t-i.tunnelStart)*.5)*ur((i.tunnelEnd-t)*.5),c=l*fa.amp*Math.sin((t-i.tunnelStart)*2*Math.PI/fa.wavelength),u=Math.sqrt(Math.max(.01,i.tunnelRadius*i.tunnelRadius-1.5*1.5)),h=ur((s-(u-.45))/.45);return 0+a+c+l*.45*h*h}function L0(i,e,t){return .06*Math.sin(e*.9-t*3.1+i*.35)+.035*Math.sin(e*2.3-t*5.3-i*1.1+1.7)+.02*Math.sin(e*4.7-t*7.9+i*2.3+.4)+.012*Math.sin(i*6+t*4+e*.5)}var ts=(i,e,t,n)=>qn(i,e,t)+L0(e,t,n),oc=(i,e,t)=>(qn(i,e,t+.25)-qn(i,e,t-.25))/.5,ac=`
uniform vec4 uTunnel;   // start z, end z, radius, axis height
uniform float uTime;
float bwSmooth(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float bwHills(float z) {
  if (z <= ${rn[0][0].toFixed(3)} || z >= ${rn[3][0].toFixed(3)}) return 0.0;
  if (z < ${rn[1][0].toFixed(3)}) return mix(${rn[0][1].toFixed(3)}, ${rn[1][1].toFixed(3)}, bwSmooth(${rn[0][0].toFixed(3)}, ${rn[1][0].toFixed(3)}, z));
  if (z < ${rn[2][0].toFixed(3)}) return mix(${rn[1][1].toFixed(3)}, ${rn[2][1].toFixed(3)}, bwSmooth(${rn[1][0].toFixed(3)}, ${rn[2][0].toFixed(3)}, z));
  return mix(${rn[2][1].toFixed(3)}, ${rn[3][1].toFixed(3)}, bwSmooth(${rn[2][0].toFixed(3)}, ${rn[3][0].toFixed(3)}, z));
}
float bwBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = ${on.crown.toFixed(3)} * clamp(1.0 - ax * ax / ${(on.half*on.half).toFixed(3)}, 0.0, 1.0);
  float edge = bwSmooth(${on.half.toFixed(3)}, ${(on.half+.55).toFixed(3)}, ax);
  float slide = before * mix(crown + bwHills(xz.y), ${on.moat.toFixed(3)}, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * ${fa.amp.toFixed(3)} * sin((xz.y - uTunnel.x) * ${(2*Math.PI/fa.wavelength).toFixed(5)});
  float half_ = sqrt(max(0.01, uTunnel.z * uTunnel.z - uTunnel.w * uTunnel.w));
  float u = clamp((ax - (half_ - 0.45)) / 0.45, 0.0, 1.0);
  return slide + swell + inside * 0.45 * u * u;
}
float bwWaves(vec2 xz, float t) {
  return 0.06 * sin(xz.y * 0.9 - t * 3.1 + xz.x * 0.35)
       + 0.035 * sin(xz.y * 2.3 - t * 5.3 - xz.x * 1.1 + 1.7)
       + 0.02 * sin(xz.y * 4.7 - t * 7.9 + xz.x * 2.3 + 0.4)
       + 0.012 * sin(xz.x * 6.0 + t * 4.0 + xz.y * 0.5);
}
float bwHeight(vec2 xz, float t) { return bwBase(xz) + bwWaves(xz, t); }
`;var Rt=`
float bwHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float bwNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(bwHash(i), bwHash(i + vec2(1, 0)), f.x), mix(bwHash(i + vec2(0, 1)), bwHash(i + vec2(1, 1)), f.x), f.y);
}
float bwFbm(vec2 p) { return 0.55 * bwNoise(p) + 0.30 * bwNoise(p * 2.07 + 13.1) + 0.15 * bwNoise(p * 4.13 + 7.7); }
vec2 bwVoronoi(vec2 p) {
  vec2 i = floor(p), f = fract(p); float d1 = 8.0, d2 = 8.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y));
    vec2 o = vec2(bwHash(i + g), bwHash(i + g + 17.17));
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
  }
  return vec2(d1, d2);
}
`,U0=`
vec3 bwRgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 bwHsv2rgb(vec3 c) {
  vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
  return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
}
`,N0=`
{ vec3 c = pow(max(diffuseColor.rgb, 0.0), vec3(1.0 / 2.2));
  vec3 hsv = bwRgb2hsv(c);
  float h = hsv.x * 360.0, hp = h < 40.0 ? h + 360.0 : h;
  float gold = smoothstep(10.0, 18.0, h) * (1.0 - smoothstep(55.0, 70.0, h)) * smoothstep(0.22, 0.4, hsv.y);
  float pink = smoothstep(286.0, 302.0, hp) * (1.0 - smoothstep(368.0, 376.0, hp)) * (1.0 - smoothstep(0.5, 0.72, hsv.y));
  float hn = mix(h, 40.0 + (h - 35.0) * 0.3, gold);
  float hpn = mix(hp, 268.0, pink * 0.82);
  hn = pink > 0.0 ? mod(hpn, 360.0) : hn;
  hsv.x = hn / 360.0;
  hsv.y *= mix(1.0, 0.88, gold) * mix(1.0, 0.62, pink);
  hsv.z = min(1.0, hsv.z * mix(1.0, 1.06, gold) * mix(1.0, 1.05, pink));
  diffuseColor.rgb = pow(bwHsv2rgb(hsv), vec3(2.2)); }
`,H0=i=>`
{ float r = length(vObj.xz) / ${i.toFixed(4)};
  float j = fract(sin(dot(floor(vObj * 38.0), vec3(12.99, 78.23, 37.71))) * 43758.55) - 0.5;   // ragged band edges
  r += j * 0.07;
  // Round blue tufts set in rings around the hub, each lit in its middle and shaded at its edge.
  float rr = length(vObj.xz) / ${i.toFixed(4)} * 7.0, ring = floor(rr);
  float segs = 9.0 + ring * 5.0, seg = (atan(vObj.z, vObj.x) / 6.28318 + 0.5) * segs + ring * 0.5;
  vec2 cellUv = vec2(fract(rr), fract(seg)) - 0.5;
  float tuft = 1.0 - smoothstep(0.15, 0.62, length(cellUv));
  float tone = fract(sin(ring * 17.3 + floor(seg) * 3.71) * 4375.85);
  vec3 blue = mix(vec3(0.02, 0.05, 0.45), mix(vec3(0.05, 0.16, 0.85), vec3(0.5, 0.7, 1.0), tone * tone), tuft);   // varied tufts make the spin easy to see
  vec3 white = vec3(1.0, 0.88, 0.95), pink = vec3(1.0, 0.22, 0.58);
  vec3 col = mix(blue, white, smoothstep(0.5, 0.57, r));
  col = mix(col, pink, smoothstep(0.68, 0.76, r));
  float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  diffuseColor.rgb = col * clamp(0.72 + l * 0.75, 0.72, 1.25); }
`,D0=`
{
  vec3 c = diffuseColor.rgb;
  float gb = c.g / max(c.b, 1e-3);
  float mx = max(c.r, max(c.g, c.b)), mn = min(c.r, min(c.g, c.b));
  float sat = (mx - mn) / max(mx, 1e-3);
  float fluid = smoothstep(0.2, 0.34, gb) * (1.0 - smoothstep(1.15, 1.5, gb)) * smoothstep(0.35, 0.6, sat)
              * (1.0 - smoothstep(0.18, 0.28, roughnessFactor)) * smoothstep(0.08, 0.2, c.b);
  float t = uFluidTime, a = atan(vFluidP.x, vFluidP.z), y = vFluidP.y;
  // deeper, saturated electric blue under the glass (the lighting below uses this colour; kept dark enough
  // that the tone mapping does not wash it out to pale blue), with softer reflections on the glass
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.0, 0.13, 0.48) + diffuseColor.rgb * vec3(0.02, 0.2, 0.18), fluid * 0.85);
  roughnessFactor = mix(roughnessFactor, 0.38, fluid * 0.7);
  // bright currents swirling upward
  float swirl = sin(y * 26.0 - t * 4.2 + a * 2.0) * 0.5 + 0.5;
  float n = bwNoise(vec2(a * 2.6 + t * 0.4, y * 16.0 - t * 2.4));
  float band = smoothstep(0.5, 0.92, swirl * 0.55 + n * 0.6);
  // round bubbles rising through it
  vec2 cell = vec2(a * 7.0, y * 34.0 - t * 5.5);
  vec2 id = floor(cell), f = fract(cell) - 0.5 + (vec2(bwHash(id + 3.1), bwHash(id + 7.7)) - 0.5) * 0.3;
  float bubble = step(0.82, bwHash(id)) * smoothstep(0.3, 0.16, length(f));
  float pulse = 0.8 + 0.2 * sin(t * 2.3);
  totalEmissiveRadiance = mix(totalEmissiveRadiance, vec3(0.0), fluid * 0.8);
  totalEmissiveRadiance += fluid * (vec3(0.0, 0.32, 0.85) * 0.5 * pulse + vec3(0.2, 0.95, 1.35) * band * 1.0 + vec3(0.8, 0.97, 1.2) * bubble * 0.8);
}
`;var hr=8,z0=`
uniform vec3 uPlayer;       // mascot track x, water height under it, u
uniform vec3 uPlayerMove;   // sideways velocity, speed 0..1, downhill 0..1
float bowWave(vec2 xz) {
  vec2 d = xz - uPlayer.xz;
  float r = length(d * vec2(1.0, 0.85));
  float front = smoothstep(-0.3, 0.5, d.y);
  float mound = exp(-pow((r - 0.6) / 0.17, 2.0)) * (0.06 + 0.06 * uPlayerMove.y + 0.05 * uPlayerMove.z) * (0.55 + 0.75 * front);
  float hollow = -exp(-r * r * 9.0) * 0.04;
  float behind = clamp(-d.y / (2.4 + 2.6 * uPlayerMove.y), 0.0, 1.0);
  float spread = 0.6 + behind * (0.8 + 0.7 * uPlayerMove.y);
  float ridge = exp(-pow((abs(d.x - uPlayerMove.x * 0.12 * behind) - spread) / 0.15, 2.0)) * step(d.y, 0.0) * (1.0 - behind) * (0.02 + 0.07 * uPlayerMove.y);
  return mound + hollow + ridge;
}
`,B0=`
${ac}
${z0}
uniform vec4 uRipples[${hr}];   // x, u, start time, strength (track coordinates)
// Each vertex knows its track position (sideways x, along u) and the path frame there, so the sheet
// follows the 3D path: it climbs, drops and banks with the bent drum (track.js).
attribute vec2 aTrack;
attribute vec3 aP, aR, aU, aT;
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;
float rippleHeight(vec2 xz) {
  float h = 0.0;
  for (int i = 0; i < ${hr}; i++) {
    vec4 r = uRipples[i];
    float age = uTime - r.z;
    if (age < 0.0 || age > 2.5 || r.w <= 0.0) continue;
    float d = length(xz - r.xy) - age * 2.4;
    h += sin(d * 9.0) * exp(-d * d * 6.0) * exp(-age * 1.6) * 0.045 * r.w;
  }
  return h;
}
void main() {
  float h = bwHeight(aTrack, uTime) + rippleHeight(aTrack) + bowWave(aTrack);
  vec3 w = aP + aR * aTrack.x + aU * h;
  vTrack = aTrack; vWorld = w; vR = aR; vU = aU; vT = aT;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`,O0=`
${ac}
${Rt}
${z0}
uniform vec4 uRipples[${hr}];
uniform float uFlow;        // current speed (m/s)
uniform float uSlideHalf;   // half width of the raised slide
uniform vec3 uDeep, uShallow, uTurq, uGlow, uSky, uPink, uGold, uRingA, uRingB, uFog, uSunDir;
uniform vec3 uRings;        // first ring u, spacing, count
uniform float uOpen;        // the Screen 3 opening look on the slide (opening.js); 0 = the original water
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;

float ripples(vec2 xz) {
  float f = 0.0;
  for (int i = 0; i < ${hr}; i++) {
    vec4 r = uRipples[i];
    float age = uTime - r.z;
    if (age < 0.0 || age > 2.5 || r.w <= 0.0) continue;
    float d = length(xz - r.xy) - age * 2.4;
    f += exp(-d * d * 18.0) * exp(-age * 1.4) * r.w;
  }
  return f;
}

void main() {
  float t = uTime;
  vec2 xz = vTrack;
  float flowT = t * uFlow;
  const float e = 0.06;
  float hx = bwHeight(xz + vec2(e, 0.0), t) + bowWave(xz + vec2(e, 0.0)) - bwHeight(xz - vec2(e, 0.0), t) - bowWave(xz - vec2(e, 0.0));
  float hz = bwHeight(xz + vec2(0.0, e), t) + bowWave(xz + vec2(0.0, e)) - bwHeight(xz - vec2(0.0, e), t) - bowWave(xz - vec2(0.0, e));
  float n1 = bwNoise(xz * vec2(3.1, 1.4) - vec2(0.0, flowT * 0.35));
  float n2 = bwNoise(xz * vec2(5.7, 2.6) - vec2(0.0, flowT * 0.6) + 3.3);
  float rip = ripples(xz);
  vec3 Nt = normalize(vec3(-hx * 1.4 + (n1 - 0.5) * 0.22, 2.0 * e, -hz * 1.4 + (n2 - 0.5) * 0.22 + rip * 0.08));
  vec3 N = normalize(vR * Nt.x + vU * Nt.y + vT * Nt.z);   // track frame -> world
  vec3 V = normalize(cameraPosition - vWorld);
  float NdotV = clamp(dot(N, V), 0.0, 1.0);
  float fresnel = pow(1.0 - NdotV, 3.0);

  float inDrum = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float onPath = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float pathEdge = onPath * (1.0 - smoothstep(0.0, 0.22, abs(ax - (uSlideHalf + 0.2))));
  float moat = onPath * smoothstep(uSlideHalf + 0.2, uSlideHalf + 0.7, ax);
  // Downhill runs (the water speeding toward the portal) churn into streaks of white water.
  float slope = (bwBase(xz + vec2(0.0, 0.3)) - bwBase(xz - vec2(0.0, 0.3))) / 0.6;
  float steep = onPath * (1.0 - moat) * smoothstep(0.07, 0.18, -slope);

  // Colour: rich electric blue, turquoise where the water is shallow over the slide bed and on the
  // crests, a deeper blue in the spill beside the slide.
  float waveH = bwWaves(xz, t);
  float crest = clamp(waveH * 6.0 + 0.5, 0.0, 1.0);
  float centre = 1.0 - clamp(ax / (uSlideHalf + 0.6), 0.0, 1.0);
  vec3 col = mix(uDeep, uShallow, clamp(0.2 + crest * 0.45 + centre * 0.3 - moat * 0.45, 0.0, 1.0));
  float turq = smoothstep(0.35, 0.85, bwNoise(xz * vec2(0.9, 0.45) - vec2(0.0, flowT * 0.22)) * 0.6 + crest * 0.5);
  col = mix(col, uTurq, turq * 0.55 * (1.0 - moat));
  col = mix(col, uDeep * vec3(0.35, 0.45, 0.75), moat * 0.7);      // the spill beside the raised slide sits deeper and darker
  // The approved slide's shimmer: soft, wavy caustic light flowing with the current. The cell network
  // is warped by flowing noise (no straight polygon edges), its lines are thin and soft, and they fade
  // in and out in patches instead of covering the slide as one even grid.
  vec2 fq = xz * vec2(1.0, 0.5) - vec2(0.0, flowT * 0.21);
  vec2 warp = vec2(bwFbm(fq * 1.7 + vec2(0.0, t * 0.35)), bwFbm(fq * 1.7 + vec2(5.2, -t * 0.3))) - 0.5;
  vec2 cv = bwVoronoi((xz + warp * 0.55) * vec2(3.2, 1.6) - vec2(0.0, flowT * 0.5));
  vec2 cv2 = bwVoronoi((xz - warp * 0.4) * vec2(6.4, 3.1) - vec2(0.0, flowT * 0.68) + 7.0);
  float patchy = smoothstep(0.32, 0.72, bwNoise(xz * vec2(0.7, 0.35) - vec2(0.0, flowT * 0.12) + 3.0));
  float caustic = (1.0 - smoothstep(0.0, 0.05, cv.y - cv.x)) * (0.25 + 0.5 * patchy) + (1.0 - smoothstep(0.0, 0.04, cv2.y - cv2.x)) * 0.22 * patchy;
  col += mix(uGlow, vec3(1.0), 0.35) * caustic * (0.5 + 0.4 * crest) * (1.0 - moat * 0.6);

  // Foam, kept to where water really churns: thin lace at the slide edges and drum walls, the
  // mascot's V wake and bow ring (stronger when fast or dropping), steep drops and splash rings.
  vec2 fuv = xz * vec2(1.0, 0.45) * 1.6 - vec2(0.0, flowT * 0.3 * 1.6);
  vec2 lv = bwVoronoi(fuv * 1.7);
  float lace = 1.0 - smoothstep(0.02, 0.09, lv.y - lv.x);
  float streak = bwFbm(fuv * vec2(2.2, 1.0));
  float halfW = sqrt(max(0.01, uTunnel.z * uTunnel.z - uTunnel.w * uTunnel.w));
  float wall = inDrum * smoothstep(halfW - 0.35, halfW - 0.02, ax) * 0.75;
  vec2 toP = xz - uPlayer.xz;
  float behind = clamp(-toP.y / (2.2 + 2.8 * uPlayerMove.y), 0.0, 1.0);   // a short wake: foam hugs the mascot
  float spread = 0.22 + behind * (0.9 + 0.8 * uPlayerMove.y);
  float wakeLine = 1.0 - smoothstep(0.0, 0.28, abs(abs(toP.x - uPlayerMove.x * 0.15 * behind) - spread));
  float trail = (1.0 - smoothstep(0.0, 0.12 + 0.16 * behind, abs(toP.x))) * 0.16;
  float wake = max(wakeLine, trail) * step(toP.y, 0.35) * (1.0 - behind);
  wake *= 0.18 + 0.22 * uPlayerMove.y + 0.3 * uPlayerMove.z;
  float ring = (1.0 - smoothstep(0.42, mix(1.0, 0.78, uPlayerMove.y), length(toP * vec2(1.0, 0.8)))) * mix(0.85, 0.4, uPlayerMove.y);   // full collar at rest, lighter while running   // the foam collar around the mascot (approved Screen 3)
  float mask = clamp(wall * 0.35 + pathEdge * 0.85 + crest * crest * 0.08 + wake + ring + steep * 0.25 + rip * 0.5, 0.0, 1.2);
  float foam = smoothstep(0.5, 0.78, streak * 0.6 + mask * 0.7 - 0.1);   // no foam unless the water churns (mask)
  foam = clamp(foam + lace * 0.5 * min(mask, 1.0), 0.0, 1.0) * 0.92;

  vec3 L = normalize(uSunDir);
  float NdotL = clamp(dot(N, L), 0.0, 1.0);
  vec3 H = normalize(L + V);
  float spec = pow(clamp(dot(N, H), 0.0, 1.0), 400.0) * 3.0;
  vec2 gp = xz * 9.0 + vec2(0.0, -flowT * 0.45);   // sun glints: round points, not whole grid cells
  float glint = step(0.982, bwHash(floor(gp))) * (1.0 - smoothstep(0.0, 0.2, length(fract(gp) - 0.5))) * pow(clamp(dot(N, H), 0.0, 1.0), 6.0) * 1.8;
  // Twinkling sparkles over the water, as in the approved screen (each cell blinks on its own beat).
  vec2 sp = xz * vec2(7.0, 4.0) - vec2(0.0, flowT * 0.3), sc = floor(sp);
  float sh = bwHash(sc + 31.7);
  float star = 1.0 - smoothstep(0.0, 0.03, length((fract(sp) - 0.5 + (vec2(bwHash(sc + 3.1), bwHash(sc + 8.3)) - 0.5) * 0.6) * vec2(0.143, 0.25)));
  glint += step(0.955, sh) * star * pow(max(0.0, sin(t * (3.0 + sh * 4.0) + sh * 40.0)), 6.0) * (1.0 - moat * 0.7) * 1.4;
  vec3 R = reflect(-V, N);
  vec3 env = mix(uSky, uPink, clamp(R.x * 0.9 + 0.5, 0.0, 1.0));
  env = mix(env, uGold, clamp(1.0 - abs(R.y) * 6.0, 0.0, 1.0) * 0.6);
  float k = (xz.y - uRings.x) / uRings.y;
  float idx = clamp(floor(k + 0.5), 0.0, max(0.0, uRings.z - 1.0));
  float dRing = xz.y - (uRings.x + idx * uRings.y);
  float ringBand = exp(-dRing * dRing * 1.8) * inDrum;
  vec3 ringCol = mod(idx, 2.0) < 0.5 ? uRingA : uRingB;

  // Depth: troughs a little deeper, crests and the raised water around the mascot lighter and more
  // turquoise (thin water lit through), so the surface reads as moving volume.
  col = mix(col, uDeep * 0.72, (1.0 - crest) * 0.22 * (1.0 - moat));
  col += uTurq * smoothstep(0.55, 0.95, crest) * 0.22 * (1.0 - moat);
  col += uTurq * clamp(bowWave(xz) * 5.0, 0.0, 1.0) * 0.3;
  // The Screen 3 opening look (opening.js), on the slide in front of the castle only (onPath is 0 in the
  // drum, so the tunnel's water is computed exactly as before): bubbly white foam wrapping the mascot,
  // whitewater along both slide edges streaming toward the portal, thin flow streaks, a brighter caustic web.
  float openK = uOpen * onPath;
  float bubbleShade = 0.0;
  if (openK > 0.0) {
    vec2 toM = xz - uPlayer.xz;
    float rM = length(toM * vec2(1.0, 0.85));
    float run = uPlayerMove.y;
    float stream = bwFbm(vec2(xz.x * 4.5, xz.y * 0.8 - flowT * 0.42));
    // foam made of little round bubbles: thin bright cell rims (the blue water shows between them)
    vec2 bc = bwVoronoi(xz * vec2(9.0, 6.5) - vec2(0.0, flowT * 0.32));
    vec2 bc2 = bwVoronoi(xz * vec2(18.0, 12.5) - vec2(0.0, flowT * 0.36) + 4.0);
    float near = exp(-pow(max(0.0, rM - 0.45) / 0.9, 2.0));   // close to the mascot the bubble web is bolder
    float rims = max(1.0 - smoothstep(0.02, 0.08 + 0.02 * near, bc.y - bc.x), (1.0 - smoothstep(0.02, 0.06 + 0.015 * near, bc2.y - bc2.x)) * 0.8);
    float hollow = smoothstep(0.12, 0.42, bc.x);   // the middle of each bubble cell
    // where the body meets the water: a solid white line of froth (a full ring at rest; at the bow and
    // sides when running, trailing back in a V)
    float contact = exp(-pow((rM - 0.5) / mix(0.12, 0.09, run), 2.0)) * mix(1.0, 0.85, run);
    float behindM = clamp(-toM.y / (1.6 + 2.4 * run), 0.0, 1.0);
    float vTrail = exp(-pow((abs(toM.x) - (0.45 + behindM * (0.5 + 0.6 * run))) / 0.14, 2.0)) * step(toM.y, 0.1) * (1.0 - behindM) * (0.3 + 0.7 * run);
    // the churned zone around it: bubble lace on bright turquoise water, thinning with distance
    float churnZone = exp(-pow(max(0.0, rM - 0.45) / 0.75, 2.0));
    // whitewater along both edges of the slide, streaming toward the portal
    float edgeBand = (1.0 - smoothstep(0.0, 0.26, abs(ax - (uSlideHalf - 0.06)))) * (1.0 - moat);
    // white foam sweeping out around both sides of the body, curling as it goes
    float swirl = exp(-pow((abs(toM.x) - (0.72 + 0.22 * sin(toM.y * 3.2 + t * 1.4 + sign(toM.x) * 1.3))) / 0.13, 2.0)) * exp(-pow(toM.y / 0.95, 2.0));
    float lace = rims * clamp(churnZone * (0.8 + 0.5 * stream) + edgeBand * (0.35 + 0.65 * stream) + vTrail, 0.0, 1.0);
    float solid = clamp(contact * (0.75 + 0.35 * stream) + swirl * (0.45 + 0.6 * stream) + edgeBand * smoothstep(0.5, 0.8, stream) * 0.8 + vTrail * 0.7, 0.0, 1.0) * (1.0 - hollow * 0.35);
    foam = max(foam, clamp(max(lace * 0.92, smoothstep(0.25, 0.7, solid)), 0.0, 1.0) * openK);
    bubbleShade = hollow * smoothstep(0.2, 0.9, solid) * 0.42 * openK;
    // brighter, more turquoise water where it churns around the mascot (thin water lit through)
    // around the mascot the water stays a saturated cyan-blue (not pale), glowing inside the bubble web
    // (measured against the approved close-up: the same average brightness, but deeper cyan between brighter web lines)
    col = mix(col, mix(uShallow, uTurq, 0.62) * 0.92, churnZone * 0.6 * openK);
    col += uGlow * hollow * near * 0.14 * openK;
    // the interconnected bubble web across the whole slide, bolder and whiter than the soft caustics alone
    float web = 1.0 - smoothstep(0.0, 0.1, cv.y - cv.x);
    col += vec3(0.85, 0.97, 1.0) * web * (0.38 + 0.3 * patchy) * (1.0 - moat) * openK;
    // thin bright flow streaks stretched along the current, and a whiter caustic web over the slide
    float lines = smoothstep(0.8, 0.97, bwNoise(vec2(xz.x * 12.0, xz.y * 0.5 - flowT * 0.5))) * (1.0 - moat);
    col += (vec3(0.55, 0.92, 1.0) * lines * 0.3 + vec3(0.75, 0.95, 1.0) * caustic * 0.3 * (1.0 - moat)) * openK;
  }
  vec3 lit = col * (0.8 + 0.3 * NdotL);
  lit += env * fresnel * 0.28 * (1.0 - inDrum * 0.6);
  lit += ringCol * ringBand * 1.3 * (0.35 + fresnel);
  lit += vec3(1.0) * (spec + glint * 4.0);
  vec3 foamCol = vec3(0.9, 0.97, 1.0) * (0.92 + 0.18 * NdotL);
  foamCol = mix(foamCol, vec3(0.52, 0.76, 1.0), bubbleShade);
  lit = mix(lit, foamCol, foam);

  float dist = length(cameraPosition - vWorld);
  lit = mix(lit, uFog, smoothstep(40.0, 160.0, dist));
  gl_FragColor = vec4(lit, 1.0);
}
`,k0=`
attribute float progress;
uniform float uTime, uLipSpeed, uStreakLen;
varying vec3 vFall; varying vec3 vN; varying vec3 vWorld;
float fallTime(float along) { float v0 = max(0.05, uLipSpeed); return (sqrt(v0 * v0 + 2.0 * 9.81 * max(0.0, along)) - v0) / 9.81; }
void main() {
  float flow = (fallTime(uv.y) - uTime) * uLipSpeed / uStreakLen;
  vec3 nW = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0);
  w.xyz += nW * (sin(flow * 1.3 + uv.x * 2.0) * 0.6 + sin(flow * 2.9 + 1.3) * 0.4) * 0.035 * (0.3 + progress);
  vFall = vec3(uv, progress); vN = nW; vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,V0=`
${Rt}
uniform float uTime, uLipSpeed, uStreakLen;
uniform vec3 uDeep, uBright, uSky, uPink;
varying vec3 vFall; varying vec3 vN; varying vec3 vWorld;
float fallTime(float along) { float v0 = max(0.05, uLipSpeed); return (sqrt(v0 * v0 + 2.0 * 9.81 * max(0.0, along)) - v0) / 9.81; }
void main() {
  float across = vFall.x, along = vFall.y, progress = vFall.z;
  float flow = (fallTime(along) - uTime) * uLipSpeed / uStreakLen;
  float n = bwFbm(vec2(across * 7.0, flow * 0.5));
  float fine = bwNoise(vec2(across * 18.9 + 5.1, flow * 1.5));
  float streak = smoothstep(0.5, 0.78, n * 0.7 + fine * 0.45);
  vec2 lv = bwVoronoi(vec2(across * 6.3, flow));
  float lace = 1.0 - smoothstep(0.03, 0.12, lv.y - lv.x);
  float middle = 1.0 - abs(across * 2.0 - 1.0);
  float foam = clamp(streak * 0.75 + lace * (0.25 + 0.55 * progress) + (1.0 - smoothstep(0.0, 0.35, middle)) * 0.9
                     + (1.0 - smoothstep(0.0, 0.25, along)) * 0.5 + smoothstep(0.72, 1.0, progress) * 1.2, 0.0, 1.0);
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - abs(dot(N, V)), 3.0);
  vec3 col = mix(uDeep, uBright, clamp(0.25 + n * 0.8, 0.0, 1.0)) + uBright * 0.8 * (0.3 + 0.7 * n);
  col += mix(uSky, uPink, clamp(N.x * 0.5 + 0.5, 0.0, 1.0)) * fres * 0.8;
  col += step(0.975, bwHash(floor(vec2(across * 14.0, flow * 3.0)))) * 1.5;
  col = mix(col, vec3(1.15), foam);
  float alpha = clamp(0.82 * (0.65 + 0.35 * n) + foam * 0.35, 0.0, 1.0);
  alpha *= smoothstep(0.0, 0.18, middle + foam * 0.1) * (1.0 - smoothstep(0.93, 1.0, progress) * 0.85);
  gl_FragColor = vec4(col, alpha);
}
`;var h2=`
${Rt}
uniform float uTime;
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
void main() {
  vec2 p = vec2(vUv.x * 9.0, vUv.y * 14.0 - uTime * 2.6);
  float n = bwFbm(p * vec2(1.0, 0.5));
  float streak = smoothstep(0.55, 0.8, bwNoise(vec2(vUv.x * 22.0, vUv.y * 5.0 - uTime * 3.4)) * 0.7 + n * 0.45);
  vec3 V = normalize(cameraPosition - vWorld);
  float edge = pow(1.0 - abs(dot(normalize(vN), V)), 2.0);
  vec3 col = mix(vec3(0.02, 0.22, 0.95), vec3(0.15, 0.85, 1.0), n);
  col += vec3(0.75, 0.95, 1.0) * streak * 0.8 + vec3(0.6, 0.85, 1.0) * edge * 0.6;
  col += step(0.985, bwHash(floor(p * vec2(1.0, 2.0)))) * 1.6;   // bubbles catching the light
  gl_FragColor = vec4(col, 1.0);
}
`,G0=`
varying vec3 vDir;
void main() { vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }
`,W0=`
uniform vec3 uTop, uMid, uHorizon, uBottom;
varying vec3 vDir;
void main() {
  float y = vDir.y;
  vec3 c = y > 0.0 ? mix(uHorizon, mix(uMid, uTop, smoothstep(0.25, 0.9, y)), smoothstep(0.0, 0.25, y)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.3, y));
  gl_FragColor = vec4(c, 1.0);
}
`,X0=`
attribute vec4 inst;   // world centre xyz, size
attribute float phase;
uniform float uTime;
varying vec2 vUv; varying float vPhase;
void main() {
  vec3 centre = inst.xyz + vec3(0.0, sin(uTime * 0.9 + phase) * inst.w * 0.06, 0.0);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 p = centre + (right * position.x + up * position.y) * inst.w;
  vUv = uv; vPhase = phase;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,$0=`
uniform float uTime;
varying vec2 vUv; varying float vPhase;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r = length(p);
  if (r > 1.0) discard;
  float rim = smoothstep(0.55, 1.0, r) * (1.0 - smoothstep(0.93, 1.0, r));
  float film = r * 1.7 + p.x * 0.4 + uTime * 0.12 + vPhase;
  vec3 thin = 0.5 + 0.5 * cos(6.28318 * (film + vec3(0.0, 0.33, 0.67)));
  vec3 col = mix(vec3(1.0), thin, 0.75) * (0.5 + rim * 1.2);
  float hl = exp(-pow(length(p - vec2(-0.38, 0.42)) * 4.5, 2.0)) * 1.6;
  col += hl;
  float alpha = clamp(rim * 0.85 + 0.06 + hl * 0.8, 0.0, 1.0);
  gl_FragColor = vec4(col * alpha, alpha);   // premultiplied
}
`,q0=`
attribute float size; attribute float alpha; attribute float kind;
uniform float uScale;
varying float vAlpha; varying float vKind;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  vAlpha = alpha; vKind = kind;
  gl_Position = projectionMatrix * mv;
}
`,Y0=`
varying float vAlpha; varying float vKind;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0; float r = length(p);
  if (r > 1.0) discard;
  vec3 col; float a;
  if (vKind < 0.5) {            // water droplet: clear cyan body, bright rim and a sparkle highlight
    float hl = 1.0 - smoothstep(0.0, 0.35, length(p - vec2(-0.32, -0.32)));
    a = (1.0 - smoothstep(0.8, 1.0, r)) * (0.42 + 0.45 * smoothstep(0.45, 0.9, r)) + hl * 0.5;
    col = mix(vec3(0.55, 0.88, 1.0), vec3(1.25), clamp(hl + smoothstep(0.6, 0.95, r) * 0.45, 0.0, 1.0));
  } else if (vKind < 1.5) {     // foam puff: soft, see-through white
    a = (1.0 - smoothstep(0.15, 1.0, r)) * 0.4;
    col = vec3(0.9, 0.96, 1.0);
  } else {                      // sparkle star
    float cross_ = max((1.0 - smoothstep(0.0, 0.14, abs(p.x))) * (1.0 - abs(p.y)), (1.0 - smoothstep(0.0, 0.14, abs(p.y))) * (1.0 - abs(p.x)));
    a = clamp(cross_ + (1.0 - smoothstep(0.0, 0.35, r)), 0.0, 1.0);
    col = vec3(2.2, 1.6, 2.0);
  }
  a *= vAlpha;
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`,j0={uniforms:{tDiffuse:{value:null},uSat:{value:1.32},uContrast:{value:1.12},uVignette:{value:.18},uOpen:{value:0},uOpenExposure:{value:.9},uOpenVibrance:{value:.35},uOpenDepth:{value:.16}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uSat, uContrast, uVignette; varying vec2 vUv;
    uniform float uOpen, uOpenExposure, uOpenVibrance, uOpenDepth;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat);
      c.rgb = (c.rgb - 0.18) * uContrast + 0.18;
      vec2 d = vUv - 0.5; d.x *= 0.6;
      c.rgb *= mix(vec3(1.0), vec3(0.7, 0.66, 0.92), smoothstep(0.4, 0.8, length(d)) * uVignette * 2.0);
      if (uOpen > 0.0) {
        // Richer and less washed out, without a colour filter: pale pastels gain colour (vibrance acts
        // most on the least saturated colours), bright areas come down a little so the tone mapping keeps
        // their detail, and mid-darks deepen for depth.
        vec3 g = c.rgb;
        float mx = max(g.r, max(g.g, g.b)), mn = min(g.r, min(g.g, g.b));
        float sat = (mx - mn) / max(mx, 1e-4);
        float lg = dot(g, vec3(0.2126, 0.7152, 0.0722));
        g = max(mix(vec3(lg), g, 1.0 + uOpenVibrance * (1.0 - sat) * smoothstep(0.02, 0.2, lg)), 0.0);
        g *= uOpenExposure;
        g *= 1.0 - uOpenDepth * (1.0 - smoothstep(0.0, 0.55, lg)) * smoothstep(0.02, 0.18, lg);
        c.rgb = mix(c.rgb, g, uOpen);
      }
      gl_FragColor = max(c, 0.0);
    }`},K0=`
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Z0=`
${Rt}
uniform sampler2D map;
uniform vec3 uCentre, uUp, uKey, uSky, uGround, uRim, uTip;
uniform float uRadius, uTime;
uniform float uSpike;   // the Screen 3 presentation (opening.js): crisper strands and water droplets; 0 = the original fur
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
void main() {
  vec3 base = texture2D(map, vUv).rgb;
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 Nm = normalize(vN) * (gl_FrontFacing ? 1.0 : -1.0);
  vec3 rel = vWorld - uCentre;
  vec3 Ns = normalize(rel);
  vec3 N = normalize(mix(Nm, Ns, 0.65));
  float key = clamp((dot(N, uKey) + 0.5) / 1.5, 0.0, 1.0);          // soft wrapped key light
  float strand = clamp(dot(Nm, uKey) * 0.5 + 0.5, 0.0, 1.0);         // each bristle's own light and shade
  float up = dot(Ns, uUp) * 0.5 + 0.5;
  float hgt = dot(rel, uUp) / uRadius;                               // -1 at the water .. +1 on top
  vec3 amb = mix(uGround, uSky, up);
  vec3 c = base * (amb * 0.52 + vec3(1.0, 0.94, 0.97) * key * 0.92);
  c *= mix(0.5 + 0.72 * strand, 0.4 + 0.88 * strand, uSpike);       // each spike lit on one side, shaded on the other
  c *= 0.7 + 0.3 * smoothstep(-1.05, 0.35, hgt);                     // deeper magenta toward the water
  float rim = pow(1.0 - clamp(dot(Ns, V), 0.0, 1.0), 2.4);
  c += uRim * rim * (0.25 + 0.75 * up) * 0.85;                       // fur tips glowing around the silhouette
  c += uTip * smoothstep(0.55, 1.0, strand) * smoothstep(0.15, 1.0, up) * 0.4;   // pale pink tips catching the light, as in the approved fur
  // Water droplets caught in the fur twinkle in the light.
  vec3 cell = floor(rel * 34.0);
  float h = bwHash(cell.xy + cell.z * 17.13);
  float tw = step(0.97, h) * (0.55 + 0.45 * sin(uTime * 5.0 + h * 40.0)) * smoothstep(0.25, 0.85, strand);
  c += vec3(1.0, 0.96, 1.0) * tw * 1.1;
  // little water droplets resting on the fur tips, as in the approved Screen 3 (none unless uSpike > 0)
  float drop = step(mix(1.01, 0.958, uSpike), bwHash(cell.yz * 1.7 + cell.x * 5.31)) * smoothstep(0.35, 0.9, strand);
  c = mix(c, vec3(1.0, 0.9, 0.97), drop * 0.75 * uSpike);
  gl_FragColor = vec4(c, 1.0);
}
`;var lc=(i,e,t,n,s)=>po(e,t,i)*(1-po(n,s,i));function Q0(i,e={}){let t=i.tunnelStart+(e.straight||0),n=e.curve??1,s=I=>n*(.27*lc(I,t+5,t+8,t+11,t+13.5)-.34*lc(I,t+14.5,t+17.5,t+21,t+24)),r=I=>n*(.055*lc(I,t+6,t+9,t+12,t+15)-.06*lc(I,t+18,t+21,t+26,t+29)),o=I=>Math.atan(7*7*r(I)/9.81),a=i.startZ-34,l=i.tunnelEnd+14,c=.05,u=Math.ceil((l-a)/c)+1,h=new Float64Array(u*3),d=new Float64Array(u*3),f=new Float64Array(u*3),p=new Float64Array(u*3),v=new Float64Array(u*3),g=0,m=0,x=a,y=0,b=(I,z)=>{let L=s(I);return[Math.cos(L)*Math.sin(z),Math.sin(L),Math.cos(L)*Math.cos(z)]};for(let I=0;I<u;I++){let z=a+I*c,L=I*3,O=s(z),D=o(z),j=b(z,y),k=[Math.cos(y),0,-Math.sin(y)],Z=[j[1]*k[2]-j[2]*k[1],j[2]*k[0]-j[0]*k[2],j[0]*k[1]-j[1]*k[0]],ge=Math.cos(D),de=Math.sin(D);h[L]=g,h[L+1]=m,h[L+2]=x,p[L]=j[0],p[L+1]=j[1],p[L+2]=j[2];for(let me=0;me<3;me++)d[L+me]=k[me]*ge-Z[me]*de,f[L+me]=Z[me]*ge+k[me]*de;v[L]=O,v[L+1]=y,v[L+2]=D;let V=y+r(z+c*.5)*c*.5,J=b(z+c*.5,V);g+=J[0]*c,m+=J[1]*c,x+=J[2]*c,y+=r(z+c*.5)*c}let R=I=>{let z=Math.min(u-1.0001,Math.max(0,(I-a)/c)),L=Math.floor(z);return[L,z-L]},E=(I,z,L,O)=>{let D=z*3;return O.x=I[D]+(I[D+3]-I[D])*L,O.y=I[D+1]+(I[D+4]-I[D+1])*L,O.z=I[D+2]+(I[D+5]-I[D+2])*L,O};function A(I,z={P:new w,R:new w,U:new w,T:new w}){let[L,O]=R(I);E(h,L,O,z.P),E(d,L,O,z.R).normalize(),E(f,L,O,z.U).normalize(),E(p,L,O,z.T).normalize();let D=I-a<0?I-a:I-(a+(u-1)*c);return(I<a||I>a+(u-1)*c)&&z.P.addScaledVector(z.T,D),z}let C={P:new w,R:new w,U:new w,T:new w};function M(I,z,L,O=new w){return A(L,C),O.copy(C.P).addScaledVector(C.R,I).addScaledVector(C.U,z)}function _(I,z,L,O,D=new w){return A(O,C),D.set(0,0,0).addScaledVector(C.R,I).addScaledVector(C.U,z).addScaledVector(C.T,L)}function S(I,z=new _t){return A(I,C),z.setFromRotationMatrix(new Se().makeBasis(C.R,C.U,C.T))}function U(I,z=new Se){let L=I.elements[14];A(L,C);let O=new Se().makeBasis(C.R,C.U,C.T).setPosition(C.P);return z.multiplyMatrices(O,new Se().makeTranslation(0,0,-L)).multiply(I)}function N(I){let[z,L]=R(I),O=z*3,D=180/Math.PI;return{pitch:(v[O]+(v[O+3]-v[O])*L)*D,heading:(v[O+1]+(v[O+4]-v[O+1])*L)*D,bank:(v[O+2]+(v[O+5]-v[O+2])*L)*D}}return{u0:a,u1:l,frame:A,map:M,dir:_,quaternion:S,mapMatrix:U,angles:N,pitch:s,turn:r,bankOf:o}}function nm({scene:i,mats:e,track:t}){let n=new $e;n.name="scenery",i.add(n);let s=[],r=e.env,o=e.gold,a=new ot({color:15903035,metalness:1,roughness:.3,envMap:r,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),l=new ot({color:2381823,metalness:.35,roughness:.26,envMap:r,envMapIntensity:1.2}),c=new ot({color:1521336,metalness:.3,roughness:.3,envMap:r,envMapIntensity:1}),u=new ot({color:1343628,metalness:.3,roughness:.25,envMap:r,envMapIntensity:1}),h=new ot({color:16178356,metalness:.25,roughness:.35,envMap:r,envMapIntensity:.9}),d=tm(16740296),f=tm(16773370),p=new Bt({color:new re(2.4,2.05,1.35)}),v=(M,_=n)=>(_.add(M),M),g=(M,_,S,U)=>{let N=new Te(M,_);return S&&N.position.set(...S),v(N,U)},m=(M,_,S=n)=>{let U=new $e;return U.position.set(...M),U.quaternion.setFromUnitVectors(new w(0,0,1),new w(..._).normalize()),v(U,S)},x=(M,_,S,U,N,I=0,z=0)=>{let L=new Ut(new tn(U,10,8),N,S),O=new Se;for(let D=0;D<S;D++){let j=z+D/S*Math.PI*2;L.setMatrixAt(D,O.makeTranslation(Math.cos(j)*_,Math.sin(j)*_,I))}return v(L,M)},y=(M,_,S,U,N,I=0)=>{let z=nw(),L=new Ut(z,N,S),O=new Se,D=new _t,j=new w;for(let k=0;k<S;k++){let Z=k/S*Math.PI*2,ge=U*(.8+.4*pa(k*7.1));D.setFromEuler(new Sn(pa(k)*6,pa(k+3)*6,pa(k+9)*6)),j.set(ge,ge,ge),L.setMatrixAt(k,O.compose(new w(Math.cos(Z)*_,Math.sin(Z)*_,I+(pa(k+5)-.5)*U),D,j))}return v(L,M)},b=new Map;function R(M,_,S){let U=`${M}|${_}|${S}`;if(b.has(U))return b.get(U);let N=new Ms,I=M*.8,z=Math.PI*2/_;for(let D=0;D<_;D++){let j=D*z;[[I,j],[M*.97,j+z*.1],[M,j+z*.22],[M,j+z*.34],[M*.97,j+z*.46],[I,j+z*.56]].forEach(([Z,ge],de)=>{let V=Math.cos(ge)*Z,J=Math.sin(ge)*Z;D===0&&de===0?N.moveTo(V,J):N.lineTo(V,J)})}N.closePath();let L=new ro;L.absarc(0,0,M*.42,0,Math.PI*2,!0),N.holes.push(L);let O=new rr(N,{depth:S,bevelEnabled:!0,bevelThickness:S*.35,bevelSize:M*.05,bevelSegments:3,curveSegments:6});return O.translate(0,0,-S/2),b.set(U,O),O}{let _=m([-2.25,-.3,-10],[.94,.05,-.34]),S=v(new $e,_);g(new Ot(1.3,.24,20,72),o,null,S),g(new Ot(1.3-.32,.1,12,64),a,null,S);let U=new Ut(new Ci(.26,.2,.5,2,.05),a,28),N=new Se,I=new _t;for(let L=0;L<28;L++){let O=L/28*Math.PI*2;I.setFromAxisAngle(new w(0,0,1),O),U.setMatrixAt(L,N.compose(new w(Math.cos(O)*(1.3+.2),Math.sin(O)*(1.3+.2),0),I,new w(1,1,1)))}v(U,S),g(new wn(1.3-.36,1.3-.36,.16,48),l,null,S).rotation.x=Math.PI/2;for(let L=0;L<6;L++){let O=g(new Ci(.16,2.275,.12,2,.05),o,[0,0,.12],S);O.rotation.z=L/6*Math.PI}g(new wn(.32,.36,.4,32),o,null,S).rotation.x=Math.PI/2,g(new tn(.2,20,14),l,[0,0,.24],S),x(S,1.3-.08,18,.05,p,.24),x(S,1.3-.08,18,.05,p,-.24,.17),y(S,1.3+.42,22,.17,d,-.15),s.push({obj:S,axis:new w(0,0,1),speed:-.55});let z=g(new wn(.22,.22,1.2,24),a,null,_);z.rotation.x=Math.PI/2,z.position.z=-.6,g(new Ot(.3,.06,10,28),c,[0,0,-.35],_)}{let M=v(new $e);M.position.set(2.05,-.55,-12),M.rotation.y=.3,g(new Ci(1.3,1.1,1.4,4,.2),h,null,M);for(let S of[-.25,.27])g(new Ci(1.36,.12,1.46,2,.05),a,[0,S,0],M);g(new Ot(.3,.07,10,32),o,[0,.02,-.72],M),g(new Es(.26,32),l,[0,.02,-.71],M).rotation.y=Math.PI,x(M,.3,10,.035,p,-.77);let _=v(new $e,M);_.position.y=.6,_.rotation.x=Math.PI/2,y(_,.45,9,.2,d),y(_,.15,4,.18,f)}for(let M of[1,-1]){let _=[[M*2.9,-.7,-12.5],[M*2.5,.25,-10.8],[M*2.75,.55,-7.5],[M*2.45,1.15,-4.6],[M*2.9,1.5,-2.2]],S=new ws(_.map(U=>new w(...U)));g(new ar(S,60,.1,14),o);for(let U=.08;U<1;U+=.16){let N=S.getPoint(U),I=S.getTangent(U);g(new Ot(.12,.045,8,20),c,[N.x,N.y,N.z]).quaternion.setFromUnitVectors(new w(0,0,1),I)}}let E=new $e;E.name="tunnelDecor",i.add(E);let A=[],C=null;if(t){let{TR:M,L:_,W:S}=t,U=[[0,1.25,2.1],[.2,1.6,2.3]],N=_.tunnelRadius*.955,I=2.3,z=new Ot(N,.06,8,112),L=new Ot(N,.17,8,112),O=new tn(.055,8,6),D=0;for(let ee=_.tunnelStart+1.4;ee<_.tunnelEnd-.8;ee+=I,D++){let fe=new re(...U[D%2]),pe=new Bt({color:fe.clone()}),De=new Te(z,pe);De.matrixAutoUpdate=!1,M.mapMatrix(new Se().makeTranslation(0,S.WATER+S.AXIS_H,ee),De.matrix),E.add(De);let we=new Bt({color:new re(0,.22,.42),transparent:!0,blending:mn,depthWrite:!1}),F=new Te(L,we);F.matrixAutoUpdate=!1,F.matrix.copy(De.matrix),F.renderOrder=3,E.add(F);let T=new Ut(O,new Bt({color:new re(2.4,2.8,2.9)}),28),B=new Se,W=new Se;for(let X=0;X<28;X++){let Y=X/28*Math.PI*2;W.makeTranslation(Math.cos(Y)*N,S.WATER+S.AXIS_H+Math.sin(Y)*N,ee+.08),M.mapMatrix(W,B),T.setMatrixAt(X,B)}T.frustumCulled=!1,E.add(T),A.push({mat:pe,base:fe,haloMat:we,haloBase:we.color.clone(),u:ee})}let j=[-10,15,65,90,115,165,190].map(ee=>_e.degToRad(ee)),k=[];for(let ee=_.tunnelStart+1.4+I/2;ee<_.tunnelEnd-1.5;ee+=I)k.push(ee);let Z=k.length*j.length,ge=_.tunnelRadius*.92,de=new Bt({map:tw(),color:16777215,alphaTest:.5,side:qe}),V=new Ut(new Wt(.62,.34),de,Z),J=new Ut(new Ci(.72,.44,.06,2,.04),o,Z),me=new Se,oe=new Se,xe=new Se,ue=new Se,Re=new w,He=new w(0,0,1),ie=new w,se=[],H=0;for(let ee of k)for(let fe of j)Re.set(Math.sin(fe),-Math.cos(fe),0),ie.set(-Math.cos(fe),-Math.sin(fe),0),me.makeBasis(Re,He,ie).setPosition(Math.cos(fe)*ge,S.WATER+S.AXIS_H+Math.sin(fe)*ge,ee),M.mapMatrix(me,xe),V.setMatrixAt(H,xe),oe.multiplyMatrices(me,ue.makeTranslation(0,0,-.04)),M.mapMatrix(oe,xe),J.setMatrixAt(H,xe),V.setColorAt(H,new re(1,1,1)),se.push(ee),H++;V.frustumCulled=J.frustumCulled=!1,E.add(J,V),C={mesh:V,u:se,c:new re};let be=0;for(let ee=_.tunnelStart+3;ee<_.tunnelEnd-2;ee+=4.6,be++)for(let fe of[1,-1]){let pe=fe*(.62+.12*(be%2)),De=fe*Math.cos(pe*fe)*(_.tunnelRadius-.12),we=S.WATER+S.AXIS_H+Math.sin(Math.abs(pe))*(_.tunnelRadius-.12),F=new $e;F.matrixAutoUpdate=!1;let T=new w(-De,S.WATER+S.AXIS_H-we,0).normalize(),B=new Se().compose(new w(De,we,ee),new _t().setFromUnitVectors(new w(0,0,1),T),new w(1,1,1));M.mapMatrix(B,F.matrix),E.add(F);let W=.34+.08*((be+(fe>0?1:0))%2),X=new $e;F.add(X);let Y=g(R(W,Math.round(W*26),W*.3),o,null,X),ve=g(new wn(W*.4,W*.4,W*.3,24),(be+fe)%2?u:l,null,Y);ve.rotation.x=Math.PI/2,g(new tn(W*.15,14,10),o,[0,0,W*.18],Y),x(Y,W*.62,6,W*.06,p,W*.18),s.push({obj:Y,axis:new w(0,0,1),speed:fe*(.8+.2*(be%3))})}}return{root:n,tunnel:E,update(M,_){for(let S of A){let U=em(S.u,_);S.mat.color.copy(S.base).multiplyScalar(.75+.4*U),S.haloMat.color.copy(S.haloBase).multiplyScalar(.6+.8*U)}if(C){for(let S=0;S<C.u.length;S++)C.mesh.setColorAt(S,C.c.setScalar(1.15+.6*em(C.u[S]+1.15,_)));C.mesh.instanceColor.needsUpdate=!0}for(let S of s)S.obj.rotateOnAxis(S.axis,S.speed*M)}}}function em(i,e){let t=.5+.5*Math.sin(i*.55-e*2.6);return t*t}function tw(){let i=document.createElement("canvas");i.width=256,i.height=140;let e=i.getContext("2d"),t=(r,o,a,l,c)=>{e.beginPath(),e.moveTo(r+c,o),e.arcTo(r+a,o,r+a,o+l,c),e.arcTo(r+a,o+l,r,o+l,c),e.arcTo(r,o+l,r,o,c),e.arcTo(r,o,r+a,o,c),e.closePath()};t(4,4,248,132,26),e.fillStyle="#d61c9a",e.fill();let n=e.createLinearGradient(0,14,0,126);n.addColorStop(0,"#ff9be2"),n.addColorStop(.5,"#ff5cc8"),n.addColorStop(1,"#f23cb4"),t(14,14,228,112,18),e.fillStyle=n,e.fill(),e.fillStyle="rgba(255, 236, 250, 0.92)";for(let r=0;r<7;r++)t(36+r*28,34,12,72,6),e.fill();let s=new Jn(i);return s.colorSpace=St,s.anisotropy=4,s}function tm(i){let e=new ot({color:i,roughness:.95,metalness:0,emissive:i,emissiveIntensity:.18});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.0);
        totalEmissiveRadiance += diffuseColor.rgb * rim * 0.55; }`)},e}var kd=null;function nw(){if(kd)return kd;let i=new ji(1,3),e=i.attributes.position,t=new w;for(let n=0;n<e.count;n++){t.fromBufferAttribute(e,n);let s=1+.16*Math.sin(t.x*9.1+t.y*4.3)*Math.sin(t.y*7.7+t.z*5.9)+.08*Math.sin(t.z*17+t.x*13);t.multiplyScalar(s),e.setXYZ(n,t.x,t.y,t.z)}return i.computeVertexNormals(),kd=i,i}function pa(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}var iw=2.6,Ii={towers:[{at:[3,1.2,-2],height:5.9,yaw:180},{at:[-3,1.2,-2],height:5.9,yaw:0}],gears:[{at:[1.72,1.05,-1.7],dir:[-.2,.05,-.98],d:.8,spin:.9},{at:[2,.45,-2.4],dir:[-.25,.1,-.96],d:.92,spin:-.75},{at:[1.53,.26,-3.1],dir:[-.1,.1,-.99],d:.56,spin:1.2},{at:[-1.66,1,-1.7],dir:[.2,.05,-.98],d:.76,spin:-.9},{at:[-2,.5,-2.5],dir:[.25,.1,-.96],d:.96,spin:.7},{at:[-1.53,.23,-3.2],dir:[.1,.1,-.99],d:.55,spin:-1.2},{at:[2.05,3.15,-2.6],dir:[-.3,0,-.95],d:1.1,spin:-.7}],pipes:[{onTower:0,lift:.3,anchor:"down",size:.95,rot:[0,-135,0],pour:!0},{onTower:1,lift:.3,anchor:"down",size:.95,rot:[0,-45,0],pour:!0}],crowns:[{at:[0,4.72,2.12],width:2.1,rot:[0,180,0]}]};function im({scene:i,models:e,env:t,gold:n,glowTexture:s,fallGeometry:r,fallMaterial:o,fx:a}){let l=new $e;l.name="entranceDecor",i.add(l);let c={value:0},u=new ot({color:2381823,metalness:.35,roughness:.26,envMap:t,envMapIntensity:1.2}),h=[],d=[],f=[],p=(S,U,N={})=>{let I=new ot({map:S.map,metalnessMap:S.metalnessMap,roughnessMap:S.roughnessMap,normalMap:S.normalMap,metalness:1,roughness:1,envMap:t,envMapIntensity:N.envI??1.1,emissive:16777215,emissiveMap:S.map,emissiveIntensity:N.glow??.2,side:qe});return N.fluid&&(I.onBeforeCompile=z=>{z.uniforms.uFluidTime=c,z.vertexShader=z.vertexShader.replace("void main() {",`varying vec3 vFluidP;
void main() {
  vFluidP = position;`),z.fragmentShader=z.fragmentShader.replace("void main() {",`varying vec3 vFluidP;
uniform float uFluidTime;
${Rt}
void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+D0)}),I.customProgramCacheKey=()=>"decor:"+U,I},v=(S,U,N)=>{let I=null;S.scene.traverse(L=>{L.isMesh&&(I=I||p(L.material,U,N),L.material=I)}),S.scene.updateMatrixWorld(!0);let z=new an().setFromObject(S.scene);return{scene:S.scene,box:z,size:z.getSize(new w),centre:z.getCenter(new w),mat:I}},g={tower:v(e.tower,"tower",{fluid:!0,glow:.18}),gear:v(e.gear,"gear",{glow:.22}),pipe:v(e.pipe,"pipe",{glow:.2}),crown:v(e.crown,"crown",{glow:.25})},m=(S,U,N)=>{let I=S.scene.clone();return I.scale.setScalar(U),I.position.copy(N).multiplyScalar(-U),I},x=(S,U)=>{let N=new w(...U),I=new w,z=new w,L=-1/0,O=0,D=[];S.scene.traverse(j=>{if(!j.isMesh)return;let k=j.geometry.attributes.position;for(let Z=0;Z<k.count;Z+=3){I.fromBufferAttribute(k,Z).applyMatrix4(j.matrixWorld);let ge=I.dot(N);D.push(I.clone(),ge),L=Math.max(L,ge)}});for(let j=0;j<D.length;j+=2)D[j+1]>L-.04&&(z.add(D[j]),O++);return z.divideScalar(Math.max(1,O))},y={down:x(g.pipe,[0,-1,0]),side:x(g.pipe,[-1,0,0]),centre:g.pipe.centre},b=(()=>{let S=new w,U=-1/0,N=0,I=0,z=0,L=g.tower.box,O=L.max.x-L.min.x;return g.tower.scene.traverse(D=>{if(!D.isMesh)return;let j=D.geometry.attributes.position;for(let k=0;k<j.count;k++)S.fromBufferAttribute(j,k).applyMatrix4(D.matrixWorld),S.x>L.max.x-O*.16&&S.y<L.min.y+(L.max.y-L.min.y)*.55&&(U=Math.max(U,S.y));for(let k=0;k<j.count;k++)S.fromBufferAttribute(j,k).applyMatrix4(D.matrixWorld),S.x>L.max.x-O*.16&&Math.abs(S.y-U)<.02&&(N+=S.x,I+=S.z,z++)}),new w(N/Math.max(1,z),U,I/Math.max(1,z))})(),R=S=>S.map(U=>_e.degToRad(U)),E={towers:[],gears:[],pipes:[],crowns:[]},A=[];function C(){for(let S of Object.values(E))for(let U of S)l.remove(U);for(let S of A)l.remove(S);for(let S of Object.keys(E))E[S]=[];A.length=0,h.length=0,d.length=0;for(let S of Ii.towers){let U=g.tower,N=S.height/U.size.y,I=new $e;if(I.position.set(...S.at),I.rotation.y=_e.degToRad(S.yaw),I.add(m(U,N,new w(U.centre.x,U.box.min.y,U.centre.z))),s){let z=new vi(new ri({map:s,color:new re(.25,.75,1.6),transparent:!0,opacity:.55,blending:mn,depthWrite:!1}));z.position.set(0,S.height*.57,0),z.scale.setScalar(S.height*.42),z.renderOrder=3,I.add(z),d.push({sp:z,phase:d.length*1.7})}if(S.at[1]>-.4&&n){let z=U.size.x*N*.36,L=S.at[1]+.75,O=new Te(new wn(z,z*1.12,L,32),n);O.position.y=-L/2,I.add(O);for(let D of[-.12,-L*.55]){let j=new Te(new Ot(z*1.03,.07,10,40),u);j.rotation.x=Math.PI/2,j.position.y=D,I.add(j)}}I.updateMatrixWorld(!0),I.userData.stubTop=b.clone().sub(new w(U.centre.x,U.box.min.y,U.centre.z)).multiplyScalar(N).applyMatrix4(I.matrixWorld),l.add(I),E.towers.push(I)}for(let S of Ii.gears){let U=g.gear,N=S.d/Math.max(U.size.x,U.size.y),I=new $e;I.position.set(...S.at),I.quaternion.setFromUnitVectors(new w(0,0,1),new w(...S.dir).normalize());let z=new $e;z.rotation.z=S.at[0]*7.3,z.add(m(U,N,U.centre)),I.add(z),h.push({obj:z,speed:S.spin}),l.add(I),E.gears.push(I)}for(let S of Ii.pipes){let U=g.pipe,N=S.size/Math.max(U.size.x,U.size.y,U.size.z),I=y[S.anchor||"centre"],z=S.onTower!==void 0?E.towers[S.onTower].userData.stubTop.clone():new w(...S.at),L=new $e;if(S.lift&&n){let O=S.size*.16,D=new Te(new wn(O,O,S.lift+.1,20),n);D.position.copy(z).add(new w(0,(S.lift-.1)/2,0)),l.add(D),A.push(D),z.y+=S.lift}if(L.position.copy(z),L.rotation.set(...R(S.rot)),S.mirror&&(L.scale.x=-1),L.add(m(U,N,I)),l.add(L),E.pipes.push(L),S.pour&&r&&o){L.updateMatrixWorld(!0);let O=S.anchor==="side"?"down":"side",D=y[O].clone().sub(I).multiplyScalar(N).applyMatrix4(L.matrixWorld),j=new w(...O==="side"?[-1,0,0]:[0,-1,0]).applyQuaternion(L.getWorldQuaternion(new _t));j.y=0,j.lengthSq()<1e-4&&j.set(Math.sign(z.x)||1,0,0),j.normalize();let k=Math.max(.3,D.y+.62),Z=O==="side"?.55:.15,ge=S.size*.36,de=new Te(r(Z,k,ge,ge*1.5),o);de.position.copy(D),de.lookAt(D.clone().add(j)),de.renderOrder=2,l.add(de),A.push(de);let V=D.clone().addScaledVector(j,Z);if(V.y=-.6,a){let J=Ii.pipes.indexOf(S);f[J]?f[J].pos.copy(V):(f[J]={pos:V,rate:14,kind:1,spread:.25,up:1.1,size:.34},a.addSource(f[J]))}}}for(let S of Ii.crowns){let U=g.crown,N=S.width/U.size.x,I=new $e;I.position.set(...S.at),I.rotation.set(...R(S.rot)),I.add(m(U,N,U.centre)),l.add(I),E.crowns.push(I)}return l.updateMatrixWorld(!0),M()}function M(S=3.9){let U={},N=new w;for(let[I,z]of Object.entries(E)){let L=1/0;for(let O of z)O.traverse(D=>{if(!D.isMesh)return;let j=D.geometry.attributes.position;for(let k=0;k<j.count;k+=5)N.fromBufferAttribute(j,k).applyMatrix4(D.matrixWorld),N.z<S&&N.y<iw&&(L=Math.min(L,Math.abs(N.x)))});U[I]=Number.isFinite(L)?+L.toFixed(2):null}return U}let _=C();return{root:l,clear:_,place:C,update(S,U){c.value=U;for(let N of h)N.obj.rotation.z+=N.speed*S;for(let N of d)N.sp.material.opacity=.42+.16*Math.sin(U*2.3+N.phase)}}}var rm=typeof window<"u"&&!window.__BW_CLASSIC__&&!/[?&]classic(=|&|$)/.test(location.search)&&!!(window.__BW_PHASE_A__||/[?&]phase-?a(=|&|$)/i.test(location.search)),om={wallHue:305,wallSat:.32,wallDim:.14,goldHue:36,goldSoften:.18,hotSoften:.2,glowAbove:3.3,glowZ:1.2,glowSize:[4.5,3.2,8],glowColor:[1,.86,.98],glowMix:.35,glowAdd:.06},Vd={hotHue:300,hotSoften:.22,goldHue:34,goldSoften:.3},am={stone:[.62,.38,.66],glow:[.95,.8,.95],glowMix:.55,glowReach:3.6},Gd={deep:[.03,.4,.88],light:[.3,.75,1],icyMix:.85,crackScale:[4.4,2.2],crack:1,crackW:.11,collarR:.5,collarW:.7,edgeFoam:1,sparkle:2,skyCut:.6},cc=typeof window<"u"&&window.__BW_PHASE_A_TUNE__||{};Object.assign(om,cc.castle||{});Object.assign(Vd,cc.tower||{});Object.assign(am,cc.wall||{});Object.assign(Gd,cc.water||{});var Xt=i=>(+i).toFixed(4),sm=i=>`vec2(${i.map(Xt).join(", ")})`,dr=i=>`vec3(${i.map(Xt).join(", ")})`,sw=`
vec3 paRgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 paHsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function lm({scene:i,castle:e,waterSheets:t,axisY:n,tunnelStart:s}){let r={castleMaterials:0,towerMeshes:0,wallFacing:!1,waterSheet:!1},o=null,a=null;if(i.traverse(c=>{if(!(!c.isMesh||!c.material||!c.material.customProgramCacheKey||c.material.customProgramCacheKey()!=="decor:tower")){if(!a){o=c.material;let u=Vd,h=o.onBeforeCompile;a=o.clone(),a.onBeforeCompile=(d,f)=>{h.call(o,d,f),d.fragmentShader=d.fragmentShader.replace("void main() {",`${sw}
vec3 paTower(vec3 lin) {
  vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = paRgb2hsv(c); float h = hsv.x * 360.0;
  float hot = smoothstep(295.0, 312.0, h) * smoothstep(0.45, 0.7, hsv.y);
  hsv.x = mix(hsv.x, ${Xt(u.hotHue/360)}, hot * 0.5); hsv.y *= 1.0 - ${Xt(u.hotSoften)} * hot; hsv.z *= 1.0 - 0.05 * hot;
  float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
  hsv.x = mix(hsv.x, ${Xt(u.goldHue/360)}, gold * 0.4); hsv.y *= 1.0 - ${Xt(u.goldSoften)} * gold;
  return pow(paHsv2rgb(hsv), vec3(2.2));
}
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  diffuseColor.rgb = paTower(diffuseColor.rgb);   // Phase A`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = paTower(totalEmissiveRadiance);   // Phase A`)},a.customProgramCacheKey=()=>"decor:tower|phaseA:"+JSON.stringify(Vd)}c.material=a,r.towerMeshes++}}),i.traverse(c=>{if(r.wallFacing||!c.isMesh||!c.material||!c.material.uniforms||!c.material.uniforms.uWall)return;let u=am,h=c.material.clone();h.fragmentShader=`uniform vec3 uWall, uShade; varying vec2 vP;
      void main() {   // Phase A (?phaseA)
        float r = length(vP);
        vec3 c = mix(${dr(u.stone)}, ${dr(u.glow)}, (1.0 - smoothstep(2.95, ${Xt(u.glowReach)}, r)) * ${Xt(u.glowMix)});
        c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);
        c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));   // the thin dark line right at the ring stays
        float a = 1.0 - smoothstep(3.55, 3.92, r);                 // fades into the castle's own wall, as before
        gl_FragColor = vec4(c * a, a);
      }`,c.material=h,r.wallFacing=!0}),e){let c=om,u=`
      { // Phase A (?phaseA): the approved castle's pink-lavender stone, softer peach gold, calmer pink, and a soft glow
        vec3 c = pow(max(diffuseColor.rgb, 0.0), vec3(1.0 / 2.2));
        vec3 hsv = bwRgb2hsv(c);
        float h = hsv.x * 360.0;
        float lav = smoothstep(215.0, 245.0, h) * (1.0 - smoothstep(330.0, 345.0, h));
        float pale = max(lav, 1.0 - smoothstep(0.04, 0.09, hsv.y)) * (1.0 - smoothstep(0.22, 0.42, hsv.y)) * smoothstep(0.45, 0.75, hsv.z);
        hsv.x = mix(hsv.x, ${Xt(c.wallHue/360)}, pale * 0.75);
        hsv.y = mix(hsv.y, max(hsv.y, ${Xt(c.wallSat)}), pale);
        hsv.z *= 1.0 - ${Xt(c.wallDim)} * pale;
        float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
        hsv.x = mix(hsv.x, ${Xt(c.goldHue/360)}, gold * 0.4);
        hsv.y *= 1.0 - ${Xt(c.goldSoften)} * gold;
        hsv.z *= 1.0 - 0.06 * gold;
        float hot = smoothstep(300.0, 318.0, h) * smoothstep(0.55, 0.8, hsv.y);
        hsv.y *= 1.0 - ${Xt(c.hotSoften)} * hot;
        c = bwHsv2rgb(hsv);
        vec3 dg = (vShadeP - vec3(0.0, ${Xt(n+c.glowAbove)}, ${Xt(c.glowZ)})) / ${dr(c.glowSize)};
        float glowK = exp(-dot(dg, dg));
        c = mix(c, ${dr(c.glowColor)}, glowK * ${Xt(c.glowMix)}) + ${dr(c.glowColor)} * glowK * ${Xt(c.glowAdd)};
        diffuseColor.rgb = pow(c, vec3(2.2));
      }`;e.traverse(h=>{if(!h.isMesh||!h.material||!h.material.onBeforeCompile)return;let d=h.material,f=d.onBeforeCompile,p=d.customProgramCacheKey.bind(d),v=d.clone();v.onBeforeCompile=(g,m)=>{f.call(d,g,m),g.fragmentShader.includes("bwRgb2hsv")&&g.fragmentShader.includes("vShadeP")&&(g.fragmentShader=g.fragmentShader.replace("#include <color_fragment>",u+`
#include <color_fragment>`))},v.customProgramCacheKey=()=>p()+"|phaseA-castle:"+JSON.stringify(c),h.material=v,r.castleMaterials++})}let l=(t||[]).find(c=>(c.geometry.computeBoundingBox(),c.geometry.boundingBox.min.z<s-5));if(l){let c=l.material,u=c.fragmentShader,h=`  float bubbleShade = 0.0;
`,d=`    col += (vec3(0.55, 0.92, 1.0) * lines * 0.3 + vec3(0.75, 0.95, 1.0) * caustic * 0.3 * (1.0 - moat)) * openK;
  }`,f="  vec3 foamCol = vec3(0.9, 0.97, 1.0) * (0.92 + 0.18 * NdotL);";if([h,d,f].every(p=>u.split(p).length===2)){let p=c.clone();p.uniforms=c.uniforms,p.fragmentShader=u.replace(h,h+`  float paSlide = 0.0;   // Phase A
`).replace(d,d.replace(/\n  }$/,"")+`
`+rw(Gd)+`
  }`).replace(f,`  lit -= env * fresnel * 0.28 * (1.0 - inDrum * 0.6) * ${Xt(Gd.skyCut)} * paSlide;   // Phase A: less pale sky on the slide
`+f),l.material=p,r.waterSheet=!0}}return r}var rw=i=>`
    { // Phase A (?phaseA): icy cyan water, a bold white crackle web, a thicker white foam collar and more sparkles
      float slideK = openK * (1.0 - moat);
      paSlide = slideK;
      vec3 icy = mix(${dr(i.deep)}, ${dr(i.light)}, clamp(0.3 + crest * 0.4 + hollow * 0.3, 0.0, 1.0));
      col = mix(col, icy, ${Xt(i.icyMix)} * slideK);
      vec2 iw = bwVoronoi((xz + warp * 0.35) * ${sm(i.crackScale)} - vec2(0.0, flowT * 0.55) + 11.0);
      vec2 iw2 = bwVoronoi((xz + warp * 0.25) * ${sm(i.crackScale)} * 2.0 - vec2(0.0, flowT * 0.6) + 23.0);
      float crack = 1.0 - smoothstep(0.015, ${Xt(i.crackW)}, iw.y - iw.x);
      float crack2 = (1.0 - smoothstep(0.01, ${Xt(i.crackW*.66)}, iw2.y - iw2.x)) * 0.6;
      col = mix(col, vec3(0.93, 0.99, 1.0), clamp(max(crack, crack2) * (0.55 + 0.45 * patchy) * ${Xt(i.crack)}, 0.0, 1.0) * slideK);
      float collar = exp(-pow(max(0.0, rM - ${Xt(i.collarR)}) / ${Xt(i.collarW)}, 2.0));
      foam = max(foam, smoothstep(0.3, 0.75, collar * (0.75 + 0.5 * stream)) * openK);
      foam = max(foam, edgeBand * smoothstep(0.35, 0.7, stream) * ${Xt(i.edgeFoam)} * openK);
      vec2 sp2 = xz * vec2(11.0, 6.0) - vec2(0.0, flowT * 0.35), sc2 = floor(sp2);
      float sh2 = bwHash(sc2 + 57.3);
      float star2 = 1.0 - smoothstep(0.0, 0.035, length((fract(sp2) - 0.5) * vec2(0.09, 0.17)));
      glint += step(0.93, sh2) * star2 * pow(max(0.0, sin(t * (4.0 + sh2 * 5.0) + sh2 * 60.0)), 4.0) * ${Xt(i.sparkle)} * slideK;
    }`;var xn={ringColours:[[.16,.8,1],[.25,.45,1],[1,.45,.85],[.72,.56,1],[.75,.95,1]],ringGlow:.6,ringFar:{from:5,to:16,white:.6,bright:.9,keep:1},wallDeep:[[.01,.035,.26],[.1,.26,.8]],swirl:{radius:1.93,rowStep:.3,around:72,from:4,to:176,strength:1.3,white:1,blue:.3,bands:1.7,twist:.35,far:1},water:{azure:[.1,.4,.95],azureMix:.35,foam:.75},foam:{count:96,bright:1.12,cells:2.6,zones:[{w:.3,dx:[-.8,.8],du:[-.7,-.15],r:[.2,.36],sink:.4,drift:.4,out:.25},{w:.34,side:[.5,1],du:[-.5,.4],r:[.28,.5],sink:.12,drift:.4,out:.25},{w:.16,dx:[-.95,.95],du:[-1.45,-.8],r:[.15,.3],sink:.5,drift:.5,out:.2},{w:.2,ring:[.42,.56],r:[.12,.22],sink:.2,drift:.3,out:.15}],life:[.6,1.25]},spray:{rate:110,size:[.07,.15]},whirl:{ahead:14,radius:1.9,strength:1.25,exitFade:[7,2]},camera:{lookY:1.1},bubbles:{count:32,du:[-2.6,13],x:[.38,1.55],h:[.35,2.5],r:[.05,.28],flow:1.6,film:1.7},sparkles:{rate:34,du:[3,15],r:[.2,1.7]},brush:{pink:[1,.34,.72],white:[1,.92,.98],royal:[.1,.2,.9],deep:[.05,.1,.55],tufts:26,core:.45},gem:{color:[.7,.45,1],emissive:[.62,.36,1]}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round3,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(xn,i)}function cm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,soap:a,round4:l=!1}){let c=t.tunnelStart,u=t.tunnelEnd,h=n.WATER+n.AXIS_H,d=uc(15930),f={},p=()=>_e.smoothstep(s.z,c-.9,c+.4);return f.foam=ow({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:d,inside:p,big:l?1.3:1,look4:l||null}),f.swirl=dw({scene:i,TR:e,TS:c,TE:u,axisH:h,updaters:r,time:o,inside:p,mascot:s}),a&&(f.bubbles=mw({scene:i,TR:e,W:n,L:t,mascot:s,updaters:r,time:o,rnd:d,soap:a,inside:p,axisH:h,look4:l||null})),l&&(f.whirl=gw({scene:i,TR:e,TE:u,axisH:h,mascot:s,updaters:r,time:o,inside:p})),f}function ow({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:a,inside:l,big:c=1,look4:u=null}){let h=u&&u.foam,d=h?{...xn.foam,count:h.count,cells:h.cells,bright:h.bright}:xn.foam,f=d.count,p=h?h.size:1,v=new ji(1,4),g=new Qt;g.setAttribute("position",v.attributes.position),g.setAttribute("normal",v.attributes.normal);let m=new st(new Float32Array(f*4),4).setUsage(En),x=new st(new Float32Array(f),1);g.setAttribute("aBlob",m),g.setAttribute("aSeed",x),g.instanceCount=f;let y={uTime:o,uBright:{value:d.bright},uCells:{value:d.cells},uKey:{value:new w(.35,.85,-.42).normalize()}};h&&Object.assign(y,{uWhite:{value:h.white},uDeep:{value:new re(...h.deep)},uAqua:{value:new re(...h.aqua)}});let b=new Ue({uniforms:y,vertexShader:aw,fragmentShader:h?hw:lw}),R=new Te(g,b);R.frustumCulled=!1,R.name="r3Foam",R.visible=!1,R.renderOrder=2,i.add(R);let E=u&&u.foamBubbles,A=null,C=null,M=null,_=null,S=null,U=null;if(E){let k=f*E.per,Z=uc(45237),ge=new ji(1,1),de=new Qt;de.setAttribute("position",ge.attributes.position),de.setAttribute("normal",ge.attributes.normal),C=new st(new Float32Array(k*4),4).setUsage(En);let V=new st(new Float32Array(k),1);de.setAttribute("aBlob",C),de.setAttribute("aSeed",V),de.instanceCount=k,M=new Float32Array(k*3),_=new Float32Array(k),S=new Float32Array(k);for(let J=0;J<k;J++){let me=Z()*2-1,oe=.15+Z()*.85,xe=Z()*2-1.35,ue=Math.hypot(me,oe,xe)||1;M.set([me/ue,oe/ue,xe/ue],J*3),_[J]=E.at[0]+Z()*(E.at[1]-E.at[0]),S[J]=E.size[0]+Math.pow(Z(),1.5)*(E.size[1]-E.size[0]),V.array[J]=Z()}U={uTime:o,uKey:y.uKey,uUp:{value:new w(0,1,0)},uInner:{value:new re(...E.inner)},uDeep:{value:new re(...E.deep)},uBright:{value:E.bright}},A=new Te(de,new Ue({uniforms:U,vertexShader:cw,fragmentShader:uw})),A.name="r4FoamBubbles",A.frustumCulled=!1,A.visible=!1,A.renderOrder=2,i.add(A)}let N={P:new w,R:new w,U:new w,T:new w},I=d.zones.reduce((k,Z)=>k+Z.w,0),z=k=>k[0]+a()*(k[1]-k[0]),L=[],O=(k,Z)=>{let ge=a()*I,de=d.zones[0];for(let V of d.zones){if(ge<V.w){de=V;break}ge-=V.w}if(k.z=de,k.r=z(de.r)*(de.side?c:1)*p,k.life=z(d.life),k.age=Z?a()*k.life:0,de.ring){let V=_e.degToRad(-200+a()*220),J=z(de.ring);k.dx=Math.cos(V)*J,k.du=Math.sin(V)*J*.8}else de.side?(k.dx=(a()<.5?-1:1)*z(de.side),k.du=z(de.du)):(k.dx=z(de.dx),k.du=z(de.du));k.out=Math.sign(k.dx||1)*de.out*(.5+a())};for(let k=0;k<f;k++){let Z={};O(Z,!0),L.push(Z),x.array[k]=a()}let D=new w,j=null;return r.push((k,Z)=>{let ge=l();if(R.visible=ge>0,A&&(A.visible=R.visible),!R.visible){j=null;return}j===null&&(j=s.x),j+=(s.x-j)*(1-Math.exp(-k/.12));let de=m.array,V=A?C.array:null,J=E?E.per:0;A&&(e.frame(s.z,N),U.uUp.value.copy(N.U));for(let me=0;me<f;me++){let oe=L[me];oe.age+=k,oe.age>=oe.life&&O(oe,!1),oe.du-=oe.z.drift*k,oe.dx+=oe.out*k;let xe=oe.age/oe.life,ue=Math.pow(Math.sin(Math.PI*Math.min(1,xe*1.2+.08)),.55)*ge,Re=j+oe.dx,He=s.z+oe.du,ie=oe.r*ue;e.map(Re,n.surface(t,Re,He,Z)-oe.z.sink*oe.r+ie*.25,He,D),de[me*4]=D.x,de[me*4+1]=D.y,de[me*4+2]=D.z,de[me*4+3]=Math.max(ie,1e-4);for(let se=me*J,H=se+J;se<H;se++){let be=M[se*3],ee=M[se*3+1],fe=M[se*3+2],pe=ie*_[se];V[se*4]=D.x+(N.R.x*be+N.U.x*ee*.8+N.T.x*fe)*pe,V[se*4+1]=D.y+(N.R.y*be+N.U.y*ee*.8+N.T.y*fe)*pe,V[se*4+2]=D.z+(N.R.z*be+N.U.z*ee*.8+N.T.z*fe)*pe,V[se*4+3]=Math.max(ie*S[se],1e-4)}}m.needsUpdate=!0,A&&(C.needsUpdate=!0)}),{heaps:f,trianglesEach:v.attributes.position.count/3}}var aw=`
${Rt}
attribute vec4 aBlob; attribute float aSeed;
uniform float uTime;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vSeed;
void main() {
  vec3 n = normal;
  float lump = bwNoise(n.xy * 2.4 + vec2(n.z * 1.9 + aSeed * 7.0, aSeed * 3.1) + uTime * 0.45);
  float lump2 = bwNoise(n.yz * 4.6 + vec2(aSeed * 5.3, n.x * 2.2) - uTime * 0.35);
  float r = aBlob.w * (0.84 + 0.26 * lump + 0.1 * lump2);
  vec3 p = aBlob.xyz + n * r * vec3(1.0, 0.8, 1.0);
  vN = n; vL = n; vW = p; vSeed = aSeed;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,lw=`
${Rt}
uniform float uTime, uBright, uCells; uniform vec3 uKey;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vSeed;
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  // a heap of soap bubbles: each cell a bubble, lavender-blue inside, bright white round its rim, a white highlight up
  // and to the left; blue shade underneath and at the edges (the approved foreground foam)
  vec2 sp = (vL.xy * 1.6 + vec2(vL.z * 1.2, -vL.z * 0.7)) * uCells + vSeed * 13.0 + vec2(0.0, uTime * 0.15);
  vec2 c = bwVoronoi(sp);
  float cell = c.x / max(c.y, 1e-3);                               // 0 at a bubble's middle, 1 at its rim
  float rim = smoothstep(0.62, 0.95, cell);
  float diff = clamp(dot(N, uKey), 0.0, 1.0), up = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
  float lit = clamp(0.25 + 0.6 * diff + 0.35 * up, 0.0, 1.0);
  vec3 inside = mix(vec3(0.5, 0.56, 1.0), vec3(0.8, 0.86, 1.0), lit) * (0.9 + 0.1 * smoothstep(0.0, 0.5, cell));
  vec3 col = mix(inside, vec3(1.08, 1.08, 1.1), smoothstep(0.55, 0.9, cell) * (0.65 + 0.35 * lit));
  float hl = 1.0 - smoothstep(0.0, 0.25, abs(cell - 0.45) + length(vec2(N.x + 0.4, N.y - 0.5)) * 0.25);
  col += vec3(1.0) * hl * 0.25 * lit;
  col = mix(col, col * vec3(0.62, 0.72, 1.0), (1.0 - up) * 0.55);
  col = mix(col, vec3(0.55, 0.78, 1.0), pow(1.0 - ndv, 2.5) * 0.45);
  gl_FragColor = vec4(col * uBright, 1.0);
}
`,cw=`
attribute vec4 aBlob; attribute float aSeed;
varying vec3 vN; varying vec3 vW; varying float vSeed;
void main() {
  vec3 p = aBlob.xyz + normal * aBlob.w;
  vN = normal; vW = p; vSeed = aSeed;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,uw=`
uniform vec3 uKey, uUp, uInner, uDeep; uniform float uBright;
varying vec3 vN; varying vec3 vW; varying float vSeed;
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0), up = clamp(dot(N, uUp) * 0.5 + 0.5, 0.0, 1.0);
  float rim = 1.0 - smoothstep(0.08, 0.6, ndv);
  vec3 inside = mix(uDeep, uInner, 0.3 + 0.7 * up);
  vec3 col = mix(inside, vec3(1.0), clamp(rim * 1.25 + 0.22 * up * up, 0.0, 1.0));
  col += vec3(1.0) * pow(max(dot(N, normalize(normalize(uKey) + V)), 0.0), 36.0) * 1.4;
  col += (0.5 + 0.5 * cos(6.2832 * (ndv * 1.6 + vSeed + vec3(0.0, 0.33, 0.67)))) * 0.14 * rim;
  gl_FragColor = vec4(col * uBright, 1.0);
}
`,hw=`
${Rt}
uniform float uTime, uBright, uCells, uWhite; uniform vec3 uKey, uDeep, uAqua;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vSeed;
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  vec2 sp = (vL.xy * 1.6 + vec2(vL.z * 1.2, -vL.z * 0.7)) * uCells + vSeed * 13.0 + vec2(0.0, uTime * 0.2);
  vec2 c = bwVoronoi(sp);
  float cell = c.x / max(c.y, 1e-3);                                 // 0 at a bubble's middle, 1 at its rim
  vec2 c2 = bwVoronoi(sp * 2.3 + 5.0);                               // smaller bubbles between the big ones
  float cell2 = c2.x / max(c2.y, 1e-3);
  float diff = clamp(dot(N, uKey), 0.0, 1.0), up = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
  float lit = clamp(0.2 + 0.65 * diff + 0.35 * up, 0.0, 1.0);
  vec3 water = mix(uDeep, uAqua, clamp(lit * 0.9 + 0.25 * cell, 0.0, 1.0));   // saturated: azure in shade, aqua in light
  float rim = smoothstep(0.68, 0.86, cell) + smoothstep(0.74, 0.9, cell2) * 0.7;
  float top = smoothstep(0.62, 0.8, lit + 0.25 * bwNoise(vL.xz * 5.0 + vSeed * 9.0 + uTime * 0.3));   // white piled on the lit crests only
  float white = clamp(max(rim, top * (0.55 + 0.45 * smoothstep(0.3, 0.7, cell))) * uWhite, 0.0, 1.0);
  vec3 col = mix(water, vec3(1.0), white);
  float glint = 1.0 - smoothstep(0.0, 0.12, length(vec2(cell - 0.35, 0.0)) + length(vec2(N.x + 0.35, N.y - 0.55)) * 0.3);
  col += vec3(1.0) * glint * 0.6 * lit;
  col = mix(col, uDeep * 0.8, (1.0 - up) * (1.0 - white) * 0.5);             // deep blue underneath
  vec2 g = vL.xy * 14.0 + vSeed * 31.0, gc = floor(g);
  float hs = fract(sin(dot(gc, vec2(12.9898, 78.233))) * 43758.5453);
  col += vec3(1.0) * step(0.93, hs) * (1.0 - smoothstep(0.0, 0.25, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 6.0 + hs * 50.0)) * lit;
  col = mix(col, uAqua, pow(1.0 - ndv, 3.0) * 0.35);                         // a thin wet edge
  gl_FragColor = vec4(col * uBright, 1.0);
}
`;function dw({scene:i,TR:e,TS:t,TE:n,axisH:s,updaters:r,time:o,inside:a,mascot:l}){let c=xn.swirl,u=Math.ceil((n+4-(t+.2))/c.rowStep)+1,h=c.around+1,d=new Float32Array(u*h*3),f=new Float32Array(u*h*2),p=[],v=new w;for(let b=0;b<u;b++){let R=t+.2+b*c.rowStep;for(let E=0;E<h;E++){let A=_e.degToRad(c.from+(c.to-c.from)*E/c.around);if(e.map(Math.cos(A)*c.radius,s+Math.sin(A)*c.radius,R,v),d.set([v.x,v.y,v.z],(b*h+E)*3),f.set([A,R],(b*h+E)*2),E<c.around&&b<u-1){let C=b*h+E;p.push(C,C+1,C+h,C+1,C+h+1,C+h)}}}let g=new Ze;g.setAttribute("position",new nt(d,3)),g.setAttribute("aAU",new nt(f,2)),g.setIndex(p),g.computeBoundingSphere();let m={uTime:o,uStrength:{value:c.strength},uEnds:{value:new ae(t,n+4)},uFade:{value:0},uMix:{value:new ae(c.white,c.blue)},uBands:{value:new ae(c.bands,c.twist)},uFar:{value:c.far}},x=new Ue({uniforms:m,vertexShader:fw,fragmentShader:pw,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At,side:qe}),y=new Te(g,x);return y.name="r3Swirl",y.renderOrder=3,y.visible=!1,y.frustumCulled=!1,i.add(y),r.push(()=>{let b=a();y.visible=b>0,m.uFade.value=b}),{triangles:p.length/3}}var fw=`
attribute vec2 aAU;
varying vec2 vAU; varying float vDepth;
void main() {
  vAU = aAU;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,pw=`
${Rt}
uniform float uTime, uStrength, uFade, uFar; uniform vec2 uEnds, uMix, uBands;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  // rings of churning white water round the drum (bands across the tube, so they read as circles down its length),
  // wobbling and turning slowly, broken into foamy pieces; a faint blue glow along them
  float wob = bwFbm(vec2(a * 1.4, u * 0.6 - uTime * 0.4)) - 0.5;
  float ph = u * uBands.x + a * uBands.y + wob * 1.3 - uTime * 1.1;
  float band = 0.5 + 0.5 * sin(ph * 6.2832 * 0.5);
  float rough = bwFbm(vec2(a * 9.0, u * 3.0 + uTime * 0.7));
  float line = smoothstep(0.78, 0.93, band) * smoothstep(0.38, 0.62, rough);       // the white water band, foamy
  float flecks = smoothstep(0.72, 0.8, bwFbm(vec2(a * 18.0, u * 7.0 - uTime))) * smoothstep(0.5, 0.85, band);
  float glow = smoothstep(0.45, 0.95, band);
  float white = clamp(line * 0.85 + flecks * 0.6, 0.0, 1.0) * uMix.x;   // laid over the wall (alpha), so it reads white
  vec3 add = vec3(0.15, 0.5, 1.0) * glow * 0.6 * uMix.y;               // and a faint blue glow added (alpha 0)
  vec2 g = vec2(a * 30.0, u * 4.0 - uTime * 0.6), c = floor(g);
  float hs = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  float sparkle = step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 4.0 + hs * 40.0));
  float near = smoothstep(1.2, 3.5, vDepth) * (1.0 - (1.0 - uFar) * smoothstep(10.0, 26.0, vDepth));   // uFar 1: as white far down the tube
  float ends = smoothstep(uEnds.x, uEnds.x + 1.5, u) * (1.0 - smoothstep(uEnds.y - 2.0, uEnds.y, u));
  float k = near * ends * uFade;
  float aW = clamp(white * uStrength * k, 0.0, 0.92);
  gl_FragColor = vec4(vec3(0.92, 0.97, 1.0) * aW + (add + vec3(1.0) * sparkle) * uStrength * k, aW);   // premultiplied
}
`;function mw({scene:i,TR:e,W:t,L:n,mascot:s,updaters:r,time:o,rnd:a,soap:l,inside:c,axisH:u,look4:h=null}){let d=h&&h.bubbles?{...xn.bubbles,...h.bubbles}:xn.bubbles,f=d.count,p=new tn(1,26,16),v=new Qt;v.index=p.index,v.setAttribute("position",p.attributes.position),v.setAttribute("normal",p.attributes.normal);let g=new st(new Float32Array(f*4),4).setUsage(En),m=new Float32Array(f*4);for(let _=0;_<f;_++)m.set([a()*6.28,0,.05,0],_*4);v.setAttribute("inst",g),v.setAttribute("motion",new st(m,4)),v.instanceCount=f;let x={uTime:o,uMotion:{value:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:.04},uFilm:{value:d.film}},y=new Ue({uniforms:x,vertexShader:l.vertex,fragmentShader:l.fragment,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}),b=new Te(v,y);b.frustumCulled=!1,b.renderOrder=7,b.name="r3Bubbles",b.visible=!1,i.add(b);let R=_=>_[0]+a()*(_[1]-_[0]),E=[],A=(_,S)=>{_.u=s.z+(S?R(d.du):d.du[1]-a()*2),_.x=(a()<.5?-1:1)*R(d.x),_.h=R(d.h),_.h>u+.6&&(_.x*=.8),_.r=d.r[0]+Math.pow(a(),1.8)*(d.r[1]-d.r[0])};for(let _=0;_<f;_++){let S={};A(S,!0),E.push(S)}let C=new w,M=!1;return r.push(_=>{let S=c();if(b.visible=S>0,!b.visible){M=!1;return}if(!M){for(let N of E)A(N,!0);M=!0}x.uAvoid.value.copy(s.root.position);let U=g.array;for(let N=0;N<f;N++){let I=E[N];I.u+=d.flow*_,I.u<s.z+d.du[0]&&A(I,!1),e.map(I.x,I.h,I.u,C),U[N*4]=C.x,U[N*4+1]=C.y,U[N*4+2]=C.z,U[N*4+3]=I.r*S}g.needsUpdate=!0}),{count:f}}function gw({scene:i,TR:e,TE:t,axisH:n,mascot:s,updaters:r,time:o,inside:a}){let l=xn.whirl,c={uTime:o,uFade:{value:0},uStrength:{value:l.strength}},u=new Ue({uniforms:c,vertexShader:vw,fragmentShader:xw,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At,side:qe}),h=new Te(new Es(1,96),u);h.name="r3Whirlpool",h.renderOrder=1,h.visible=!1,h.frustumCulled=!1,i.add(h);let d={P:new w,R:new w,U:new w,T:new w},f=new Se;return r.push(()=>{let p=s.z+l.ahead,v=a()*(1-_e.smoothstep(p,t-l.exitFade[0],t-l.exitFade[1]));h.visible=v>.001,c.uFade.value=v,h.visible&&(e.frame(Math.min(p,t-.5),d),h.position.copy(d.P).addScaledVector(d.U,n),f.makeBasis(d.R,d.U,d.T.clone().negate()),h.quaternion.setFromRotationMatrix(f),h.scale.setScalar(l.radius))}),{ahead:l.ahead,radius:l.radius}}var vw="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",xw=`
uniform float uTime, uFade, uStrength; varying vec2 vUv;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p);
  if (r > 1.0) discard;
  float a = atan(p.y, p.x), lr = log(max(r, 0.02));
  float arms = smoothstep(0.45, 0.95, 0.5 + 0.5 * sin(a * 4.0 + lr * 6.0 - uTime * 2.4));
  float arms2 = smoothstep(0.62, 1.0, 0.5 + 0.5 * sin(a * 7.0 + lr * 10.0 - uTime * 3.3 + 1.7));
  float ripples = smoothstep(0.74, 0.97, 0.5 + 0.5 * sin(lr * 13.0 - uTime * 4.0));
  float heart = 1.0 - smoothstep(0.0, 0.32, r);
  float edge = 1.0 - smoothstep(0.7, 1.0, r);
  vec3 white = vec3(0.94, 0.98, 1.0), cyan = vec3(0.3, 0.82, 1.0);
  float waterW = clamp(arms * 0.75 + arms2 * 0.4 + ripples * 0.35, 0.0, 1.0) * (0.35 + 0.65 * (1.0 - r));
  float band = exp(-pow((r - 0.6) / 0.07, 2.0));
  vec3 rainbow = 0.55 + 0.45 * cos(6.2832 * (a / 6.2832 + vec3(0.0, 0.33, 0.67)) + uTime * 0.6);
  vec2 g = vec2(a * 12.0, lr * 8.0 - uTime), c = floor(g);
  float sparkle = step(0.9, h21(c)) * (1.0 - smoothstep(0.0, 0.25, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 6.0 + h21(c + 4.0) * 30.0));
  float cover = clamp(waterW * 0.85 + heart, 0.0, 1.0) * edge;
  vec3 col = white * cover + cyan * (1.0 - r) * 0.45 * edge + rainbow * band * 0.3 + white * sparkle * 1.2 * edge;
  float k = uFade * uStrength;
  gl_FragColor = vec4(col * k, cover * 0.9 * k);
}
`;function uc(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var An={straight:4,emerge:[7.5,11,1.6],lining:{radius:2,from:-56,to:236,rowStep:.25,around:96,deep:[.005,.012,.14],mid:[.015,.05,.42],cyan:[.05,.48,.92],spacing:1.15,streaks:.2,line:.7,far:.25},rings:{radius:1.93,tube:.045,glow:[.12,.55,1.05],every:1.15},gold:{radius:1.97,tube:.085,every:3,color:[1,.72,.28]},grade:{contrast:1.2,saturation:1.15,exposure:.84,pivot:.5},crown:{petals:32,radius:[.44,.72],height:[.55,1.05],width:[.3,.5],life:[.5,.95],flare:.55,curl:.35,alpha:1.6,fingers:7,veil:.1},water:{middle:[0,.66,.84],side:[.015,.15,.55],mix:.75,crest:.3,froth:.9,churn:.95},foam:{count:150,size:.72,cells:4,bright:1.05,white:1,deep:[.01,.16,.78],aqua:[.05,.6,1]},bubbles:{count:44,r:[.05,.32]},foamBubbles:{per:7,at:[.8,1.05],size:[.22,.46],inner:[.42,.55,1],deep:[.06,.2,.86],bright:1.08},camera:{lookY:1.3},spray:{rate:400,size:[.1,.26]},pompom:{count:320,rim:48,radius:.92,depth:.5,cap:80,size:.115,long:1.25,glow:.28,sheen:.32,strands:.35,fibres:.45,fuzz:.5,whiteLift:.35,right:[[.42,[[.1,.2,.86],[.13,.25,.95]]],[.58,[[1,.95,.98]]],[.78,[[1,.5,.8],[1,.42,.76]]],[9,[[1,.95,.98],[1,.86,.94]]]],left:[[.4,[[1,.36,.74]]],[.62,[[1,.95,.98],[1,.86,.94]]],[9,[[1,.4,.76],[1,.32,.7]]]]}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round4,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(An,i)}function um({scene:i,TR:e,L:t,W:n,updaters:s,time:r,env:o,mascot:a,hide:l=[]}){let c=t.tunnelStart,u=t.tunnelEnd,h=n.WATER+n.AXIS_H;for(let f of l)f&&(f.visible=!1);let d={hidden:l.filter(Boolean).length};return d.lining=yw({scene:i,TR:e,TS:c,TE:u,axisH:h,time:r}),d.rings=ww({scene:i,TR:e,TS:c,TE:u,axisH:h,env:o,time:r}),a&&(d.crown=Tw({scene:i,TR:e,L:t,W:n,mascot:a,updaters:s,time:r,TS:c})),d}function yw({scene:i,TR:e,TS:t,TE:n,axisH:s,time:r}){let o=An.lining,a=t-.4,l=n+4,c=Math.ceil((l-a)/o.rowStep)+1,u=o.around+1,h=new Float32Array(c*u*3),d=new Float32Array(c*u*2),f=[],p=new w;for(let y=0;y<c;y++){let b=a+y*o.rowStep;for(let R=0;R<u;R++){let E=_e.degToRad(o.from+(o.to-o.from)*R/o.around);if(e.map(Math.cos(E)*o.radius,s+Math.sin(E)*o.radius,b,p),h.set([p.x,p.y,p.z],(y*u+R)*3),d.set([E,b],(y*u+R)*2),R<o.around&&y<c-1){let A=y*u+R;f.push(A,A+u,A+1,A+1,A+u,A+u+1)}}}let v=new Ze;v.setAttribute("position",new nt(h,3)),v.setAttribute("aAU",new nt(d,2)),v.setIndex(f),v.computeBoundingSphere();let g={uTime:r,uDeep:{value:new re(...o.deep)},uMid:{value:new re(...o.mid)},uCyan:{value:new re(...o.cyan)},uSpacing:{value:o.spacing},uStreaks:{value:o.streaks},uStart:{value:t},uLine:{value:o.line},uFar:{value:o.far}},m=new Ue({uniforms:g,vertexShader:bw,fragmentShader:_w,side:qe}),x=new Te(v,m);return x.name="r4Lining",x.frustumCulled=!1,i.add(x),{triangles:f.length/3,rows:c,cols:u}}var bw=`
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`,_w=`
${Rt}
uniform float uTime, uSpacing, uStreaks, uStart, uLine, uFar; uniform vec3 uDeep, uMid, uCyan;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float k = fract((u - uStart) / uSpacing), d = min(k, 1.0 - k) * uSpacing;
  float line = exp(-pow(d / 0.045, 2.0)), glow = exp(-pow(d / 0.32, 2.0));
  float side = abs(cos(a));
  vec3 col = mix(uDeep, uMid, clamp(0.25 + 0.55 * glow + 0.15 * side, 0.0, 1.0));
  col += uCyan * glow * 0.55 + vec3(0.7, 0.95, 1.0) * line * uLine;
  float seam = exp(-pow((fract(a * 12.0 / 6.2832) - 0.5) / 0.015, 2.0)) * (1.0 - glow);
  col = mix(col, uCyan * 0.5, seam * 0.25);
  float sw = bwFbm(vec2(a * 2.2 + u * 0.45 - uTime * 0.9, u * 0.6 - uTime * 0.35));
  float sw2 = bwFbm(vec2(a * 5.0 - u * 0.3 + uTime * 0.6, u * 1.4));
  col += vec3(0.55, 0.85, 1.0) * (smoothstep(0.6, 0.78, sw) * 0.5 + smoothstep(0.68, 0.82, sw2) * 0.25) * uStreaks;
  vec2 g = vec2(a * 26.0, u * 3.5 - uTime * 0.5), c = floor(g);
  float hs = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  col += vec3(1.0) * step(0.94, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.6 + 0.4 * sin(uTime * 5.0 + hs * 40.0)) * 0.9;
  col *= 1.0 + uFar * smoothstep(9.0, 24.0, vDepth);
  gl_FragColor = vec4(col, 1.0);
}
`;function ww({scene:i,TR:e,TS:t,TE:n,axisH:s,env:r,time:o}){let a=An.rings,l=An.gold,c=An.lining,u=[];for(let E=t+.4;E<n+3.5;E+=a.every)u.push(E);let h=new Se,d=(E,A)=>e.mapMatrix(new Se().makeTranslation(0,s,E),A),f=new Ot(a.radius,a.tube,8,128),p={uTime:o,uGlow:{value:new re(...a.glow)}},v=new Ue({uniforms:p,vertexShader:Ew,fragmentShader:Mw}),g=new Ut(f,v,u.length),m=new Float32Array(u.length);u.forEach((E,A)=>{d(E,h),g.setMatrixAt(A,h),m[A]=E}),f.setAttribute("aU",new st(m,1)),g.name="r4GlowRings",g.frustumCulled=!1,i.add(g);let x=u.filter((E,A)=>A%l.every===1).map(E=>E+.3),y=new Ot(l.radius,l.tube,10,128),b=new ot({color:new re(...l.color),metalness:1,roughness:.22,envMap:r||null,envMapIntensity:1.4,emissive:new re(.55,.32,.05),emissiveIntensity:.6}),R=new Ut(y,b,x.length);return x.forEach((E,A)=>{d(E,h),R.setMatrixAt(A,h)}),R.name="r4GoldRings",R.frustumCulled=!1,i.add(R),{glow:u.length,gold:x.length,trianglesEach:[f.index.count/3,y.index.count/3]}}var Ew=`
attribute float aU; uniform float uTime; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  vWave = 0.75 + 0.25 * sin(aU * 0.9 - uTime * 3.0);
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Mw=`
uniform vec3 uGlow; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  float face = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  vec3 col = mix(uGlow * 0.6, uGlow * 1.5 + vec3(0.2), pow(face, 3.0) * 0.6) * vWave;
  gl_FragColor = vec4(col, 1.0);
}
`;function Tw({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,TS:a}){let l=An.crown,c=l.petals,u=Sw(1220),h=new Wt(1,1,4,10);h.translate(0,.5,0);let d=new Qt;d.index=h.index,d.setAttribute("position",h.attributes.position),d.setAttribute("uv",h.attributes.uv);let f=new st(new Float32Array(c*4),4).setUsage(En),p=new st(new Float32Array(c*2),2).setUsage(En);d.setAttribute("aPetal",f),d.setAttribute("aState",p),d.instanceCount=c;let v={uTime:o,uCentre:{value:new w},uR:{value:new w(1,0,0)},uU:{value:new w(0,1,0)},uT:{value:new w(0,0,1)},uFlare:{value:l.flare},uCurl:{value:l.curl},uFade:{value:0},uAlpha:{value:l.alpha},uFingers:{value:l.fingers},uVeil:{value:l.veil}},g=new Ue({uniforms:v,vertexShader:Aw,fragmentShader:Rw,transparent:!0,depthWrite:!1,side:qe,blending:Nt,blendSrc:kt,blendDst:At}),m=new Te(d,g);m.name="r4SplashCrown",m.frustumCulled=!1,m.renderOrder=6,m.visible=!1,i.add(m);let x=A=>A[0]+u()*(A[1]-A[0]),y=new Float32Array(c),b=new Float32Array(c),R=(A,C)=>{f.array.set([u()*Math.PI*2,x(l.radius),x(l.height),x(l.width)],A*4),y[A]=x(l.life),b[A]=C?u()*y[A]:0,p.array[A*2+1]=u()};for(let A=0;A<c;A++)R(A,!0);let E={P:new w,R:new w,U:new w,T:new w};return r.push((A,C)=>{let M=_e.smoothstep(s.z,a-.9,a+.4)*(s.air?.25:1);if(m.visible=M>.01,v.uFade.value=M,!m.visible)return;e.frame(s.z,E);let _=n.surface(t,s.x,s.z,C);v.uCentre.value.copy(E.P).addScaledVector(E.R,s.x).addScaledVector(E.U,_),v.uR.value.copy(E.R),v.uU.value.copy(E.U),v.uT.value.copy(E.T);for(let S=0;S<c;S++)b[S]+=A*(.8+.4*Math.min(1.5,s.speed/n.CRUISE)),b[S]>=y[S]&&R(S,!1),p.array[S*2]=b[S]/y[S];p.needsUpdate=!0,f.needsUpdate=!0}),{petals:c}}function Sw(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Aw=`
attribute vec4 aPetal; attribute vec2 aState;
uniform vec3 uCentre, uR, uU, uT; uniform float uFlare, uCurl;
varying vec2 vUv; varying float vAge; varying float vSeed;
void main() {
  float ang = aPetal.x, rad = aPetal.y, hgt = aPetal.z, wid = aPetal.w, k = aState.x;
  float up = position.y, across = position.x;
  float rise = pow(sin(3.14159 * min(1.0, k * 1.15)), 0.7);             // shoots up, then falls back
  vec2 d = vec2(cos(ang), sin(ang)), tg = vec2(-d.y, d.x);
  float reach = rad + up * up * uFlare * (0.6 + k) + pow(up, 3.0) * uCurl; // flares and curls outward toward its lip
  float spread = 1.0 + up * 0.7;
  vec2 p = d * (reach - pow(across * wid * spread, 2.0) * 1.1) + tg * across * wid * spread;   // wraps round the circle
  float h = up * hgt * rise - 0.04 - pow(up, 4.0) * uCurl * 0.5 * k;      // the lip droops as it falls
  h *= mix(1.0, 0.32, smoothstep(0.15, 0.75, -d.y));   // low froth on the camera's side: tall sheets there veiled the pink mascot in stripes
  vec3 w = uCentre + uR * p.x + uT * (p.y * 0.85) + uU * h;
  vUv = vec2(across + 0.5, up); vAge = k; vSeed = aState.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`,Rw=`
${Rt}
uniform float uTime, uFade, uAlpha, uFingers, uVeil; varying vec2 vUv; varying float vAge; varying float vSeed;
void main() {
  float x = vUv.x, y = vUv.y;
  float ragged = bwNoise(vec2(x * 9.0 + vSeed * 17.0, uTime * 2.0 + vSeed * 5.0));
  float top = 1.0 - smoothstep(0.72 + 0.2 * ragged, 1.0, y);              // a broken, frothy lip
  float sides = smoothstep(0.0, 0.38, x) * smoothstep(0.0, 0.38, 1.0 - x);
  float froth = bwNoise(vec2(x * 11.0 + vSeed * 7.0, y * 7.0 - uTime * 2.5));
  float holes = smoothstep(0.25, 0.55, bwNoise(vec2(x * 18.0 - vSeed * 3.0, y * 12.0 + uTime * 1.7)));   // the sheet breaks into froth
  // above its base the sheet splits into fingers of white water, each ending in a droplet: splash, not a veil
  // each sheet its own number of fingers (2 to uFingers), wavy and of uneven width: thick, irregular splash, not a striped fan
  float nf = floor(2.0 + vSeed * (uFingers - 1.0));
  float fx = x * nf + vSeed * 3.0 + 0.45 * bwNoise(vec2(y * 2.5, vSeed * 11.0));
  float wF = 0.3 + 0.12 * bwNoise(vec2(floor(fx) * 3.1, vSeed * 7.0));
  float finger = 1.0 - smoothstep(wF, wF + 0.14, abs(fract(fx) - 0.5));
  float split = smoothstep(0.25, 0.6, y);
  float drop = 1.0 - smoothstep(0.0, 0.16, length(vec2((fract(fx) - 0.5) * 0.9, y - 0.86 - 0.08 * fract(vSeed * 7.0 + floor(fx) * 0.37))));
  float body = max(top * sides * mix(1.0, finger, split) * mix(uVeil + 0.25, 1.0, holes), drop * sides * 1.2);
  if (body < 0.02) discard;
  float rim = smoothstep(0.55, 0.9, y) * top + (1.0 - smoothstep(0.0, 0.35, min(x, 1.0 - x))) * 0.5;
  float streak = smoothstep(0.55, 0.85, bwNoise(vec2(x * 14.0, y * 3.0 - uTime * 3.0 + vSeed * 9.0)));
  vec3 water = vec3(0.12, 0.62, 1.0), white = vec3(1.0, 1.0, 1.04);
  float wh = clamp(rim * 0.95 + streak * 0.5 + froth * 0.35 + finger * split * 0.8 + drop + y * 0.3, 0.0, 1.0);
  vec3 col = mix(water, white, smoothstep(0.3, 0.6, wh));               // white or clear blue water, little in between
  float a = clamp(body * (0.3 + 0.6 * rim + 0.25 * streak + 0.5 * finger * split + drop) * uAlpha, 0.0, 0.97) * (1.0 - smoothstep(0.75, 1.0, vAge)) * uFade;
  gl_FragColor = vec4(col * a, a);
}
`;var Hs={radius:.9,depth:.5,roll:118,around:80,along:24,shells:20,fur:.22,lean:.2,density:30,clumpSize:.18,clump:.88,taper:.22,fringe:{count:120,rows:[[.98,.02],[.93,-.16]],length:[.15,.26],width:[.1,.16],strands:9},light:[.35,.85,.6],ambient:.72,diffuse:.5,sheen:.32,tip:.8,ao:.55,glow:.14,right:{edges:[.5,.78],bands:[["#2a48d8","#3a5ef0","#1f38bd","#4566ff"],["#fff7fc","#f7e4f1","#ffffff","#fbeaf5"],["#f55ab4","#ec4aa9","#ff7cc8","#ff63b8"]]},left:{edges:[.22,.72],bands:[["#ff5fb6","#f04aa8","#ff74c2","#f55ab4"],["#fff7fc","#f7e4f1","#ffffff","#fbeaf5"],["#f55ab4","#ff7cc8","#ec4aa9","#ff63b8"]]},balls:{fur:.2,density:80,clumpSize:.16,clump:.2,taper:.32,tip:.2,sheen:.15,glow:.08,ambient:.62,diffuse:.6,edges:{right:[.42,.7],left:[.25,.62]}}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.fluffy,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(Hs,i)}var Wd=null,Xd={},hc={};function hm(){if(Wd)return Wd;let i=Hs,e=i.radius,t=i.depth,n=_e.degToRad(i.roll),s=i.around+1,r=i.along+1,o=[],a=[],l=[],c=[],u=[],h=0,d=null;for(let p=0;p<r;p++){let v=n*p/i.along,g=e*Math.sin(v),m=t*Math.cos(v);d&&(h+=Math.hypot(g-d[0],m-d[1])),d=[g,m];let x=Math.sin(v)/e,y=Math.cos(v)/t,b=Math.hypot(x,y),R=v<=Math.PI/2?Math.sin(v):1+(v-Math.PI/2)/(Math.PI/2);for(let E=0;E<s;E++){let A=Math.PI*2*E/i.around,C=Math.cos(A),M=Math.sin(A);if(o.push(g*C,g*M,m),a.push(C*x/b,M*x/b,y/b),l.push(h*C,h*M),c.push(R),E<i.around&&p<i.along){let _=p*s+E;u.push(_,_+1,_+s,_+1,_+s+1,_+s)}}}let f=new Ze;return f.setAttribute("position",new We(o,3)),f.setAttribute("normal",new We(a,3)),f.setAttribute("aFur",new We(l,2)),f.setAttribute("aT",new We(c,1)),f.setIndex(u),Wd=f}function Cw(){let i=Hs.shells;if(Xd[i])return Xd[i];let e=hm(),t=new Qt;t.index=e.index;for(let s of["position","normal","aFur","aT"])t.setAttribute(s,e.attributes[s]);let n=new Float32Array(i);for(let s=0;s<i;s++)n[s]=s/(i-1);return t.setAttribute("aLayer",new st(n,1)),t.instanceCount=i,t.boundingSphere=new On(new w,Hs.radius+Hs.fur+.2),Xd[i]=t}var dm=`
// sine-free hashes (stable for large cell indices: a sin() hash turned into streaks over half the brush's face)
float fbH(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 fbH2(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
uniform vec3 uLight, uCol[12]; uniform vec2 uEdges; uniform float uAmb, uDif, uSheen, uTip, uAo, uGlow;
vec3 fbBand(float t, vec2 id) {
  t += (fbH(id) - 0.5) * 0.1;                                   // ragged band edges: whole tufts change colour
  int band = t < uEdges.x ? 0 : (t < uEdges.y ? 1 : 2);
  int k = int(floor(fbH(id + 11.0) * 3.999));
  return uCol[band * 4 + k];
}
vec3 fbShade(vec3 base, vec3 N, vec3 V, float h, float tip, float ao) {
  float dif = clamp(dot(N, normalize(uLight)) * 0.5 + 0.5, 0.0, 1.0);   // soft, wrapped light (fibres scatter it)
  vec3 col = base * (uAmb + uDif * dif) * ao;
  col = mix(col, mix(base, vec3(1.0, 0.95, 0.98), 0.75) * (uAmb + uDif), uTip * tip);   // pale, light-catching tips
  col += vec3(1.0, 0.93, 0.98) * pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.5) * uSheen * (0.3 + 0.7 * h);
  return col + base * uGlow;
}
`,Pw=`
attribute float aLayer; attribute vec2 aFur; attribute float aT;
uniform float uFur, uLean;
varying vec2 vFur; varying float vT; varying float vH; varying vec3 vN; varying vec3 vW;
void main() {
  float h = aLayer;
  vec3 n = normalize(normal), out3 = normalize(vec3(position.xy, 0.0) + vec3(1e-4, 0.0, 0.0));
  vec3 p = position + n * uFur * h + out3 * uLean * uFur * h * h;
  vFur = aFur; vT = aT; vH = h;
  vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,fm=`
uniform float uDensity, uClumpSize, uClump, uTaper;
varying vec2 vFur; varying float vT; varying float vH; varying vec3 vN; varying vec3 vW;
${dm}
void main() {
  float h = vH;
  vec2 cq = vFur / uClumpSize, ci = floor(cq), bestC = vec2(0.0), bid = ci; float bd = 9.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 c = ci + vec2(float(i), float(j)), cp = c + 0.15 + 0.7 * fbH2(c);
    float d = length(cq - cp); if (d < bd) { bd = d; bestC = cp; bid = c; }
  }
  vec2 p = mix(vFur, bestC * uClumpSize, uClump * h);            // tips gather into their tuft
  vec2 sq = p * uDensity, si = floor(sq), sf = fract(sq) - 0.5 - (fbH2(si) - 0.5) * 0.45;
  float len = (0.6 + 0.4 * fbH(si + 7.0)) * (1.0 - 0.55 * smoothstep(0.3, 0.75, bd));   // shorter between the tufts
  float thick = mix(0.5, uTaper, h / max(len, 0.05)) * (0.8 + 0.35 * fbH(si + 3.0));
  if (h > 0.0 && (length(sf) > thick || h > len)) discard;
  vec3 base = fbBand(vT, bid) * (0.9 + 0.18 * fbH(si + 1.0));
  float ao = mix(uAo, 1.0, smoothstep(0.0, 0.85, h)) * mix(1.0, 0.82, smoothstep(0.45, 0.8, bd) * (1.0 - h));
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  gl_FragColor = vec4(fbShade(base, N, V, h, smoothstep(0.55, 1.0, h / max(len, 0.05)), ao), 1.0);
}
`,Iw=fm.replace("  float len = (0.6 + 0.4 * fbH(si + 7.0)) * (1.0 - 0.55 * smoothstep(0.3, 0.75, bd));   // shorter between the tufts",`  float rb = clamp(bd / 0.66, 0.0, 1.0), domeH = sqrt(max(0.0, 1.0 - rb * rb));
  float len = (0.18 + 0.82 * domeH) * (0.86 + 0.14 * fbH(si + 7.0));   // a round ball of fuzz`).replace("  vec3 base = fbBand(vT, bid) * (0.9 + 0.18 * fbH(si + 1.0));","  vec3 base = fbBand(vT, bid) * (0.9 + 0.18 * fbH(si + 1.0)) * (0.82 + 0.3 * domeH * smoothstep(0.2, 1.0, h));").replace("  float ao = mix(uAo, 1.0, smoothstep(0.0, 0.85, h)) * mix(1.0, 0.82, smoothstep(0.45, 0.8, bd) * (1.0 - h));","  float ao = mix(uAo, 1.0, smoothstep(0.0, 0.85, h)) * mix(1.0, 0.68, smoothstep(0.7, 1.0, rb) * (1.0 - h));"),Fw=`
attribute vec4 aCard; attribute float aCardT;   // aCard: id seed, length, width, unused
varying vec2 vUv; varying float vSeed; varying float vT; varying vec3 vN; varying vec3 vW;
void main() {
  vUv = uv; vSeed = aCard.x; vT = aCardT;
  vec3 p = position; p.x *= aCard.z * (0.7 + 0.6 * uv.y); p.y *= aCard.y;   // fans out toward the tips
  p.z += uv.y * uv.y * aCard.y * 0.35;                                    // curls toward the rider
  vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * vec3(0.0, 0.4, 1.0));
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Lw=`
uniform float uStrands;
varying vec2 vUv; varying float vSeed; varying float vT; varying vec3 vN; varying vec3 vW;
${dm}
void main() {
  float x = vUv.x * uStrands, xi = floor(x), y = vUv.y;
  float len = 0.55 + 0.45 * fbH(vec2(xi, vSeed * 37.0));
  float bend = (fbH(vec2(xi + 5.0, vSeed)) - 0.5) * 0.5 * y * y;
  float w = mix(0.42, 0.1, y / len);
  if (abs(fract(x + bend) - 0.5) > w || y > len) discard;
  vec3 base = fbBand(vT, vec2(vSeed * 91.0, 3.0)) * (0.9 + 0.18 * fbH(vec2(xi, vSeed + 2.0)));
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  gl_FragColor = vec4(fbShade(base, N, V, y, smoothstep(0.5, 1.0, y / len), mix(uAo, 1.0, smoothstep(0.0, 0.6, y))), 1.0);
}
`;function Uw(i){if(hc[i])return hc[i];let e=new Wt(1,1,1,4);return e.translate(0,.5,0),hc[i]=e}function pm(i=!1,e={}){let t=e.balls?Hs.balls:null,n=t?{...Hs,...t}:Hs,s=i?n.left:n.right,r=t?{...s,edges:i?t.edges.left:t.edges.right}:s,o=[];for(let _ of r.bands)for(let S of _)o.push(new re(S));let a={uLight:{value:new w(...n.light).normalize()},uCol:{value:o},uEdges:{value:new ae(...r.edges)},uAmb:{value:n.ambient},uDif:{value:n.diffuse},uSheen:{value:n.sheen},uTip:{value:n.tip},uAo:{value:n.ao},uGlow:{value:n.glow},uFur:{value:n.fur},uLean:{value:n.lean},uDensity:{value:n.density},uClumpSize:{value:n.clumpSize},uClump:{value:n.clump},uTaper:{value:n.taper},uStrands:{value:n.fringe.strands}},l=new $e;l.name="fluffyBrush";let c=new Ue({uniforms:a,vertexShader:Pw,fragmentShader:t?Iw:fm,side:qe}),u=new Te(Cw(),c);u.name="fluffyShells",u.frustumCulled=!1,l.add(u);let h=n.fringe,d=h.count*h.rows.length,f=Nw(i?241:242),p=new Ue({uniforms:a,vertexShader:Fw,fragmentShader:Lw,side:qe}),v=i?"L":"R",g=!hc[v],m=Uw(v),x=new Ut(m,p,d);x.name="fluffyFringe",x.frustumCulled=!1;let y=new Float32Array(d*4),b=new Float32Array(d),R=new Se,E=new _t,A=new Sn,C=0;h.rows.forEach(([_,S],U)=>{for(let N=0;N<h.count;N++,C++){let I=(N+f()*.6+U*.5)/h.count*Math.PI*2,z=n.radius*_,L=n.depth*S;A.set(0,0,I-Math.PI/2),E.setFromEuler(A),E.multiply(new _t().setFromAxisAngle(new w(1,0,0),-.35+f()*.3)),R.compose(new w(Math.cos(I)*z,Math.sin(I)*z,L),E,new w(1,1,1)),x.setMatrixAt(C,R),y.set([f()*10,h.length[0]+f()*(h.length[1]-h.length[0]),h.width[0]+f()*(h.width[1]-h.width[0]),0],C*4),b[C]=1.05+U*.15}}),g&&(m.setAttribute("aCard",new st(y,4)),m.setAttribute("aCardT",new st(b,1))),l.add(x);let M=hm().index.count/3*n.shells+m.index.count/3*d;return l.userData.fluffy={shells:n.shells,cards:d,triangles:M},l}function Nw(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Rn={round6:{round5:{softBubbles:{count:0},bubbles:{count:110,r:[.025,.17],x:[.35,1.9],du:[1.2,16]}}},hide:["r5Contact","r4SplashCrown"],sheets:{on:!0,reach:[35,135],radius:[.5,1.25],height:.92,lean:.36,body:[0,.62,1],deep:[0,.28,.95],alpha:.9},fadeIn:[-7,-4],foam:{front:{count:220,u:[-1.3,-.3],top:[.11,.26],r:[.055,.13],flow:.25},collar:{count:200,rho:[.34,.64],phi:[35,180],top:[.24,.45],r:[.05,.11],flow:.35},side:{count:170,x:[.55,1.5],u:[-.9,1.5],top:.4,r:[.05,.12],flow:.7},flecks:{count:70,x:[.15,1.5],u:[.3,3.2],top:.08,r:[.025,.06],flow:2},suds:.5,white:[1,1,1],lilac:[.6,.56,1],cyan:[.34,.62,1],film:[.08,.4,1],swerve:.13,landing:[.32,.16],air:.35},spray:{count:1e3,streaks:.2,up:[1.6,4.9],out:[.3,1.5],size:[.018,.044],streak:[.06,.13],scale:700,maxPx:32,back:[.5,1.6]},bubbles:{heroAt:-2.31,hero:[[-.43,2.08,-.65,.165],[.52,.86,-1.2,.09],[.375,.7,-1.4,.075]],mid:14,midR:[.035,.1],len:[18,30],rise:.012,back:.025}};function mm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,motion:a}){let l=t.tunnelStart,c={},u={P:new w,R:new w,U:new w,T:new w},h=new w,d={k:0,C:h,F:u,air:0};r.push(v=>{d.k=_e.smoothstep(s.z,l+Rn.fadeIn[0],l+Rn.fadeIn[1]),e.frame(s.z,u),e.map(s.x,a.ride,s.z,h);let g=s.air?_e.smoothstep(a.lift,.1,.6):0;d.air+=(g-d.air)*(1-Math.exp(-(v||0)/.08))});let p=(Rn.sheets.on?Rn.hide:[...Rn.hide,"r6BowWave"]).map(v=>i.getObjectByName(v)).filter(Boolean);return r.push(()=>{for(let v of p)v.visible=!1}),c.hidden=p.map(v=>v.name),Rn.sheets.on&&(c.sheets=Bw({scene:i,updaters:r,motion:a,frame:d})),c.foam=Hw({scene:i,updaters:r,time:o,motion:a,frame:d}),c.spray=kw({scene:i,updaters:r,time:o,motion:a,frame:d}),c.bubbles=Ww({scene:i,updaters:r,time:o,mascot:s,frame:d,TS:l}),c.streamBubbles=qw({scene:i,updaters:r,frame:d}),c.drumBubbles=Yw({scene:i,updaters:r,frame:d}),c}function Hw({scene:i,updaters:e,time:t,motion:n,frame:s}){let r=Rn.foam,o=dc(61603),a=R=>R[0]+o()*(R[1]-R[0]),l=_e.smoothstep,c=[],u=(R,E,A,C,M,_)=>{let S=C,U=Math.max(A-S*(.15+o()*.95),-S*.25);c.push({x:R,h:U,u:E,r:S,ph:o()*6.2832,sp:.6+o()*.9,amp:S*(.15+o()*.25),flow:M*(.7+o()*.6),span:.25+o()*.35,kind:o()<r.suds?1:0,tint:o(),zone:_})};for(let R=0;R<r.front.count;R++){let E=a(r.front.u),A=.37*(3+E)+.12,C=(o()*2-1)*A,M=Math.abs(C),_=r.front.top[0]+(r.front.top[1]-r.front.top[0])*l(E,r.front.u[0],-.45)*(1-.35*l(M,.4,1.1))+o()*.04;u(C,E,_,a(r.front.r)*(1+.35*l(-E,.4,1.2)),r.front.flow,0)}for(let R=0;R<r.collar.count;R++){let E=R%2?1:-1,A=_e.degToRad(a(r.collar.phi)),C=a(r.collar.rho),M=E*Math.sin(A)*C,_=Math.cos(A)*C,S=Math.sin(A);u(M,_,r.collar.top[0]+(r.collar.top[1]-r.collar.top[0])*S*S+o()*.05,a(r.collar.r),r.collar.flow,1)}for(let R=0;R<r.side.count;R++){let E=R%2?1:-1,A=a(r.side.x),C=a(r.side.u),M=.5+.5*Math.sin(A*5.2+C*2.7+E*1.9),_=r.side.top*(1-.6*l(A,.6,1.5))*(1-.55*l(C,.2,1.5))*(.55+.7*M*M)+.04+o()*.05;u(E*A,C,_,a(r.side.r),r.side.flow,2)}for(let R=0;R<r.flecks.count;R++){let E=R%2?1:-1;u(E*a(r.flecks.x),a(r.flecks.u),r.flecks.top+o()*.04,a(r.flecks.r),r.flecks.flow,3)}let h=[0,1.12,-3];c.sort((R,E)=>Math.hypot(E.x-h[0],E.h-h[1],E.u-h[2])-Math.hypot(R.x-h[0],R.h-h[1],R.u-h[2]));let d=c.length,f=new Wt(2,2),p=new Qt;p.index=f.index,p.setAttribute("position",f.attributes.position),p.setAttribute("uv",f.attributes.uv);let v=new Float32Array(d*4),g=new Float32Array(d*4),m=new Float32Array(d*4);c.forEach((R,E)=>{v.set([R.x,R.h,R.u,R.r],E*4),g.set([R.ph,R.sp,R.amp,R.zone],E*4),m.set([R.kind,R.tint,R.flow,R.span],E*4)}),p.setAttribute("aPos",new st(v,4)),p.setAttribute("aMove",new st(g,4)),p.setAttribute("aLook",new st(m,4)),p.instanceCount=d;let x={uTime:t,uFade:{value:0},uC:{value:new w},uR:{value:new w(1,0,0)},uU:{value:new w(0,1,0)},uT:{value:new w(0,0,1)},uLat:{value:0},uLand:{value:0},uAir:{value:0},uWhite:{value:new re(...r.white)},uLilac:{value:new re(...r.lilac)},uCyan:{value:new re(...r.cyan)},uFilm:{value:new re(...r.film)}},y=new Ue({uniforms:x,vertexShader:Dw,fragmentShader:zw,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}),b=new Te(p,y);return b.name="r7FoamBank",b.frustumCulled=!1,b.renderOrder=6,b.visible=!1,i.add(b),e.push(()=>{if(b.visible=s.k>.01,!b.visible)return;let R=n;x.uFade.value=s.k,x.uC.value.copy(s.C),x.uR.value.copy(s.F.R),x.uU.value.copy(s.F.U),x.uT.value.copy(s.F.T),x.uLat.value=_e.clamp(R.lat,-6,6),x.uLand.value=R.landing,x.uAir.value=s.air}),{lumps:d,triangles:d*2,drawCalls:1}}var Dw=`
attribute vec4 aPos, aMove, aLook;   // x, h, u, radius | phase, churn speed, churn size, zone | kind, tint, flow, span
uniform vec3 uC, uR, uU, uT; uniform float uTime, uLat, uLand, uAir, uFade;
varying vec2 vUv; varying float vKind, vTint, vA, vLow;
void main() {
  float x = aPos.x, h = aPos.y, u = aPos.z, r = aPos.w, ph = aMove.x, sp = aMove.y, amp = aMove.z, zone = aMove.w;
  // the water streams past: each lump slides back toward the camera and is reborn in front (it grows in and shrinks away)
  float life = fract(uTime * aLook.z / aLook.w + ph * 0.159);
  float env = smoothstep(0.0, 0.25, life) * (1.0 - smoothstep(0.7, 1.0, life));
  float seen = smoothstep(0.0, 0.1, life) * (1.0 - smoothstep(0.86, 1.0, life));   // fully faded where it jumps back
  u += (0.5 - life) * aLook.w;
  // churning: every lump rolls on its own small loop and breathes
  float t = uTime * sp * 2.2 + ph;
  x += sin(t) * amp; u += cos(t * 0.8) * amp * 0.7; h += (0.5 + 0.5 * sin(t * 1.3 + 1.7)) * amp;
  r *= (0.5 + 0.5 * env) * (1.0 + 0.08 * sin(t * 1.7));
  // swerve: the side it moves toward piles up higher, the other side drops; the bank lags behind the move a little
  float side = x >= 0.0 ? 1.0 : -1.0;
  h *= 1.0 + clamp(side * uLat * ${Rn.foam.swerve.toFixed(3)}, -0.4, 0.7);
  x -= uLat * 0.035;
  // landing: thrown out in a ring and up
  float d = length(vec2(x, u)); vec2 dir = d > 0.01 ? vec2(x, u) / d : vec2(0.0, -1.0);
  float ringK = 1.0 - smoothstep(0.2, 1.4, d);
  x += dir.x * uLand * ${Rn.foam.landing[0].toFixed(3)} * ringK; u += dir.y * uLand * ${Rn.foam.landing[0].toFixed(3)} * ringK;
  h += uLand * ${Rn.foam.landing[1].toFixed(3)} * ringK;
  // in the air: the pile round the body slumps back onto the water and thins (the foam stays, lower and smaller)
  float slump = uAir * ${Rn.foam.air.toFixed(3)} * (zone < 1.5 ? 1.0 : 0.5);
  h = mix(h, min(h, r * 0.3), slump); r *= 1.0 - uAir * 0.15;
  vec3 c = uC + uR * x + uU * h + uT * u;
  // a camera-facing card, pulled toward the camera so the lump's front (not its middle) meets the water and the body
  c += normalize(cameraPosition - c) * r * 0.6;
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vUv = uv; vKind = aLook.x; vTint = aLook.y; vLow = 1.0 - smoothstep(0.0, 0.32, h);
  vA = uFade * seen * (1.0 - uAir * 0.15);
  gl_Position = projectionMatrix * viewMatrix * vec4(c + (right * position.x + up * position.y) * r, 1.0);
}
`,zw=`
uniform vec3 uWhite, uLilac, uCyan, uFilm;
varying vec2 vUv; varying float vKind, vTint, vA, vLow;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  float r = sqrt(r2), nz = sqrt(1.0 - r2); vec3 n = vec3(p, nz);
  vec3 Ld = normalize(vec3(-0.45, 0.7, 0.55));
  float key = dot(n, Ld);
  vec3 shade = mix(uLilac, uCyan, vTint);
  float spec = pow(max(dot(reflect(-Ld, n), vec3(0.0, 0.0, 1.0)), 0.0), 36.0);
  float glint = exp(-pow(length(p - vec2(-0.36, 0.42)) * 6.5, 2.0));
  float litEdge = smoothstep(0.72, 0.95, r) * smoothstep(-0.1, 0.6, dot(p / max(r, 1e-3), vec2(-0.55, 0.83)));
  float edge = 1.0 - smoothstep(0.88, 1.0, r);
  vec3 col; float a;
  if (vKind < 0.5) {
    col = mix(shade, uWhite, smoothstep(-0.3, 0.5, key));
    col = mix(col, shade * 0.85, vLow * 0.5);                                 // lower in the pile: in its own shade
    col = mix(col, uWhite * 1.1, litEdge * 0.7) + vec3(1.0) * (spec * 0.5 + glint * 0.35);
    a = edge;
  } else {
    float rim = smoothstep(0.62, 0.93, r);
    col = mix(uFilm, uWhite, rim * 0.8 + litEdge * 0.4) + vec3(1.0) * (spec * 0.6 + glint * 1.1);
    a = edge * (0.45 + 0.5 * rim + 0.6 * glint);
  }
  a = clamp(a, 0.0, 1.0) * vA;
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`;function Bw({scene:i,updaters:e,motion:t,frame:n}){let s=i.getObjectByName("r6BowWave");if(!s||!s.material||!s.material.uniforms||!s.material.uniforms.uRad)return null;let r=Rn.sheets,o=s.material.uniforms;return o.uReach.value.set(r.reach[0],r.reach[1]).multiplyScalar(Math.PI/180),o.uRad.value.set(r.radius[0],r.radius[1]),o.uH.value=r.height,o.uLean.value=r.lean,o.uBody.value.setRGB(...r.body),o.uDeep.value.setRGB(...r.deep),o.uAlpha.value=r.alpha,s.material=new Ue({uniforms:o,vertexShader:s.material.vertexShader,fragmentShader:Ow,transparent:!0,depthWrite:!1,side:qe}),s.renderOrder=5,e.push(()=>{s.visible&&(o.uAmp.value=(1+Math.min(Math.abs(t.lat)*.48,1.5)+t.landing*.9)*(1-n.air*.85))}),{restyled:"r6BowWave",triangles:s.geometry.index?s.geometry.index.count/3:0}}var Ow=`
${Rt}
uniform float uTime, uFade, uFlow, uAlpha; uniform vec3 uBody, uDeep;
varying vec2 vUv; varying float vSide; varying vec3 vW; varying vec3 vN;
void main() {
  float t = vUv.x, v = vUv.y;
  float n = bwFbm(vec2(t * 11.0 - uTime * uFlow * 1.3, v * 2.0 + vSide * 4.0));
  float edge = 0.6 + 0.34 * n;                                              // a ragged top broken into fingers of water
  if (v > edge) discard;
  // thin white streaks running along the sheet, back and up, flowing toward the camera
  float s = bwFbm(vec2(t * 2.4 - uTime * uFlow * 1.5 + v * 1.2, v * 6.0 + t * 3.0 + vSide * 7.0));
  float ridge = 1.0 - abs(2.0 * fract(s * 3.0) - 1.0);
  float streak = smoothstep(0.84, 0.97, ridge) * smoothstep(0.15, 0.55, v);
  // white flecks along the broken top (not a solid crest)
  float fleck = smoothstep(edge - 0.14, edge - 0.02, v) * smoothstep(0.5, 0.75, bwNoise(vec2(t * 46.0 - uTime * 3.0, v * 14.0 + vSide * 9.0)));
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (!gl_FrontFacing) N = -N;
  float fres = pow(1.0 - abs(dot(N, V)), 2.0);
  vec3 water = mix(uDeep, uBody, 0.2 + 0.8 * v) + vec3(0.1, 0.9, 1.0) * fres * 0.18;
  float w = clamp(streak * 0.85 + fleck * 0.85, 0.0, 1.0);
  vec3 col = mix(water, vec3(1.0), w);
  float ends = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.72, 1.0, t)) * smoothstep(0.0, 0.15, v + 0.04);
  float a = mix(0.48 + 0.3 * v, 0.95, w) * (1.0 - 0.45 * smoothstep(edge - 0.05, edge, v)) * uAlpha * ends * uFade;
  gl_FragColor = vec4(col, a);
}
`;function kw({scene:i,updaters:e,time:t,motion:n,frame:s}){let r=Rn.spray,o=r.count,a=dc(23418),l=v=>v[0]+a()*(v[1]-v[0]),c=new Float32Array(o*4),u=new Float32Array(o*4);for(let v=0;v<o;v++){let g=v%2?1:-1,m=a(),x=g*_e.degToRad(m<.75?l([45,140]):m<.92?l([140,180]):l([10,45])),y=l(r.up)*(m<.75?1:.6),b=2*y/9*(.85+a()*.25),R=a()<r.streaks;c.set([x,.32+a()*.25,l(r.out),y],v*4),u.set([a(),b,R?-l(r.streak):l(r.size),l(r.back)],v*4)}let h=new Ze;h.setAttribute("position",new nt(new Float32Array(o*3),3)),h.setAttribute("aA",new nt(c,4)),h.setAttribute("aB",new nt(u,4));let d={uTime:t,uFade:{value:0},uC:{value:new w},uR:{value:new w(1,0,0)},uU:{value:new w(0,1,0)},uT:{value:new w(0,0,1)},uLat:{value:0},uLand:{value:0},uAir:{value:0},uScale:{value:r.scale},uMaxPx:{value:r.maxPx}},f=new Ue({uniforms:d,vertexShader:Vw,fragmentShader:Gw,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}),p=new xi(h,f);return p.name="r7Spray",p.frustumCulled=!1,p.renderOrder=8,p.visible=!1,i.add(p),e.push(()=>{p.visible=s.k>.01,p.visible&&(d.uFade.value=s.k,d.uC.value.copy(s.C),d.uR.value.copy(s.F.R),d.uU.value.copy(s.F.U),d.uT.value.copy(s.F.T),d.uLat.value=_e.clamp(n.lat,-6,6),d.uLand.value=n.landing,d.uAir.value=s.air)}),{points:o,drawCalls:1}}var Vw=`
attribute vec4 aA, aB;   // angle from straight ahead, start radius, outward speed, upward speed | phase, life, size, carried back
uniform vec3 uC, uR, uU, uT; uniform float uTime, uLat, uLand, uAir, uFade, uScale, uMaxPx;
varying float vA, vStreak, vSlant;
void main() {
  float life = aB.y, k = fract(uTime / life + aB.x), tau = k * life;
  vec2 dir = vec2(sin(aA.x), cos(aA.x));
  float side = dir.x >= 0.0 ? 1.0 : -1.0;
  float boost = 1.0 + uLand * 0.9 + clamp(side * uLat * 0.15, -0.4, 0.7);
  float rad = aA.y + aA.z * boost * tau;
  float x = dir.x * rad, u = dir.y * rad - aB.w * tau;
  float h = 0.06 + aA.w * boost * tau - 4.5 * tau * tau;
  vA = smoothstep(0.0, 0.06, k) * (1.0 - smoothstep(0.75, 1.0, k)) * step(-0.03, h) * (1.0 - 0.75 * uAir) * uFade;
  vStreak = aB.z < 0.0 ? 1.0 : 0.0;
  vSlant = side * 0.45 * (1.0 - 2.0 * k);   // leaning outward on the way up, back in as it falls (screen-left is +x)
  vec4 mv = viewMatrix * vec4(uC + uR * x + uU * h + uT * u, 1.0);
  gl_PointSize = min(abs(aB.z) * uScale / max(-mv.z, 0.3), uMaxPx * (aB.z < 0.0 ? 1.0 : 0.4));   // specks stay small
  gl_Position = projectionMatrix * mv;
}
`,Gw=`
varying float vA, vStreak, vSlant;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  if (vA <= 0.0) discard;
  float a;
  if (vStreak > 0.5) {   // an upright white streak, thin and tapering at both ends
    float x = p.x + vSlant * p.y;
    a = exp(-x * x / 0.035) * (1.0 - smoothstep(0.35, 1.0, abs(p.y)));
  } else {
    float r2 = dot(p, p); if (r2 > 1.0) discard;
    a = 1.0 - smoothstep(0.45, 1.0, r2);
  }
  a *= vA;
  vec3 col = mix(vec3(1.05), vec3(0.75, 0.93, 1.0), smoothstep(0.3, 0.9, dot(p, p)) * (1.0 - vStreak));
  gl_FragColor = vec4(col * a, a);
}
`,$d=`
vec4 r7Bubble(vec2 p, float ph, float t, float body) {
  float r = length(p), nz = sqrt(max(0.0, 1.0 - r * r)), ang = atan(p.y, p.x);
  // a soap film swirling round the bubble in soft pink, lilac and cyan (no yellow-green: the approved film is pastel),
  // strongest toward the rim
  float film = (1.0 - nz) * 1.5 + 0.3 * sin(ang * 2.0 + t * 0.5 + ph * 6.0) + 0.15 * sin(ang * 3.0 - t * 0.3) + ph;
  float fk = 0.5 + 0.5 * sin(film * 6.2832);
  vec3 tint = mix(mix(vec3(1.0, 0.55, 0.92), vec3(0.72, 0.6, 1.0), smoothstep(0.0, 0.5, fk)), vec3(0.45, 0.92, 1.0), smoothstep(0.5, 1.0, fk));
  float band = smoothstep(0.45, 0.8, r) * (1.0 - smoothstep(0.84, 0.93, r));       // the coloured film inside the rim
  float rim = smoothstep(0.76, 0.9, r) * (1.0 - smoothstep(0.96, 1.0, r));         // a thick bright rim
  float glow = smoothstep(0.35, 0.88, r) * (1.0 - smoothstep(0.96, 1.0, r));       // the milky glow inward from the rim
  float dA = ang - 2.3; dA = mod(dA + 3.14159, 6.28318) - 3.14159;
  float cres = exp(-dA * dA / 0.35) * exp(-pow((r - 0.68) / 0.09, 2.0));            // a white crescent up and to the left
  float spot = exp(-pow(length(p - vec2(-0.32, 0.38)) * 6.0, 2.0));                 // the window glint
  float spot2 = exp(-pow(length(p - vec2(0.45, -0.5)) * 9.0, 2.0)) * 0.6;
  vec3 col = vec3(0.86, 0.88, 1.0) * body + tint * band * 0.34 + vec3(0.9, 0.9, 1.0) * glow * 0.22
           + mix(vec3(1.0, 0.98, 1.0), tint, 0.15) * rim * 1.05 + vec3(1.0) * (cres * 0.85 + spot * 1.2 + spot2 * 0.7);
  float a = clamp(body + band * 0.26 + glow * 0.18 + rim * 0.9 + cres * 0.7 + spot * 0.9 + spot2 * 0.55, 0.0, 1.0);
  return vec4(col, a);
}
`;function Ww({scene:i,updaters:e,time:t,mascot:n,frame:s,TS:r}){let o=Rn.bubbles,a=o.hero.length,l=a+o.mid,c=dc(45239),u=E=>E[0]+c()*(E[1]-E[0]),h=new Wt(2,2),d=new Qt;d.index=h.index,d.setAttribute("position",h.attributes.position),d.setAttribute("uv",h.attributes.uv);let f=new st(new Float32Array(l*4),4).setUsage(En),p=new Float32Array(l);for(let E=0;E<l;E++)p[E]=c();d.setAttribute("aInst",f),d.setAttribute("aPh",new st(p,1)),d.instanceCount=l;let v=new Ue({uniforms:{uTime:t},vertexShader:Xw,fragmentShader:$w,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}),g=new Te(d,v);g.name="r7Bubbles",g.frustumCulled=!1,g.renderOrder=7,g.visible=!1,i.add(g);let m=[];for(let E=0;E<l;E++)m.push({len:u(o.len),f0:E<a?.4:c()});let x=new Map,y=(E,A)=>{let C=E*4096+(A&4095),M=x.get(C);if(M)return M;if(E<a&&A===0){let[_,S,U,N]=o.hero[E];M={x:_,h:S,u:U,r:N}}else{let _=dc(40503+E*7919+A*104729),S=_()<.5?-1:1,U=-1.4+_()*6.5,N=.37*(3+U);M=_()<.35?{x:(_()*2-1)*.7,h:1.5+_()*1,u:1+_()*5}:{x:S*N*(.55+_()*.45),h:.45+_()*1.6,u:U},M.r=(E<a?.08+_()*.07:o.midR[0]+Math.pow(_(),1.5)*(o.midR[1]-o.midR[0]))*(M.u<0?.8:1+M.u*.08),x.size>512&&x.clear()}return x.set(C,M),M},b=new w,R=f.array;return e.push(()=>{if(g.visible=s.k>.01,!g.visible)return;let E=n.z-(r+o.heroAt);for(let A=0;A<l;A++){let C=m[A],M=E/C.len+C.f0,_=Math.floor(M),S=M-_,U=y(A,_),N=(S-C.f0)*C.len;b.copy(s.C).addScaledVector(s.F.R,U.x+Math.sign(U.x)*N*.006).addScaledVector(s.F.U,U.h+N*o.rise).addScaledVector(s.F.T,U.u-N*o.back);let I=_e.smoothstep(S,0,.08)*(1-_e.smoothstep(S,.93,1));R[A*4]=b.x,R[A*4+1]=b.y,R[A*4+2]=b.z,R[A*4+3]=U.r*I*s.k}f.needsUpdate=!0}),{hero:a,mid:o.mid,drawCalls:1,triangles:l*2}}var Xw=`
attribute vec4 aInst; attribute float aPh; uniform float uTime;
varying vec2 vUv; varying float vPh;
void main() {
  float wob = 1.0 + 0.03 * sin(uTime * 2.1 + aPh * 20.0);
  vec3 c = aInst.xyz + vec3(0.0, sin(uTime * 0.9 + aPh * 9.0) * aInst.w * 0.12, 0.0);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vUv = uv; vPh = aPh;
  gl_Position = projectionMatrix * viewMatrix * vec4(c + (right * position.x * wob + up * position.y / wob) * aInst.w, 1.0);
}
`,$w=`
uniform float uTime; varying vec2 vUv; varying float vPh;
${$d}
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  if (dot(p, p) > 1.0) discard;
  gl_FragColor = r7Bubble(p, vPh, uTime, 0.12);
}
`;function qw({scene:i,updaters:e,frame:t}){let n=[],s=[];for(let r of["r3Bubbles","s4Bubbles"]){let o=i.getObjectByName(r);if(!o||!o.material||!o.material.vertexShader||!o.material.vertexShader.includes("varying float vFade"))continue;let a=o.material,l=new Ue({uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:Kw,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At});s.push([o,a,l]),n.push(r)}return e.push(()=>{for(let[r,o,a]of s)r.material=t.k>.01?a:o}),{restyled:n}}function Yw({scene:i,updaters:e,frame:t}){let n=null;if(i.traverse(o=>{!n&&o.isMesh&&o.material&&o.material.vertexShader&&o.material.vertexShader.includes("attribute float phase;")&&o.geometry.attributes.inst&&(n=o)}),!n||!n.material.uniforms||!n.material.uniforms.uTime)return null;let s=n.material,r=new Ue({uniforms:s.uniforms,vertexShader:s.vertexShader,fragmentShader:jw,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At});return e.push(()=>{n.material=t.k>.01?r:s}),{restyled:"game bubbles (in the drum)",instances:n.geometry.instanceCount}}var jw=`
uniform float uTime; varying vec2 vUv; varying float vPhase;
${$d}
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  if (dot(p, p) > 1.0) discard;
  gl_FragColor = r7Bubble(p, vPhase * 0.159, uTime, 0.1);
}
`,Kw=`
uniform float uTime;
varying vec3 vN; varying vec3 vW; varying float vPhase; varying float vFade;
${$d}
void main() {
  if (vFade <= 0.0) discard;
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0), r = sqrt(1.0 - ndv * ndv);
  vec3 Nv = (viewMatrix * vec4(N, 0.0)).xyz;
  vec2 p = normalize(Nv.xy + 1e-5) * r;
  gl_FragColor = r7Bubble(p, vPhase * 0.159, uTime, 0.09) * vFade;
}
`;function dc(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Cn={fade:[-7.5,-5],hide:["r7FoamBank","mascotFoam","r7Spray"],swell:{ax:.95,au:.55,phiMax:108,cols:216,rows:30,out:.3,inner:.22,foot:-.32,skirt:-.9,line:[.376,.386,.397,.41,.425,.44,.457,.475,.494,.514,.535,.556,.577,.608,.645,.684,.72,.712,.632,.548,.478,.471,.474,.513,.562,.645,.7,.733,.697,.659,.62,.583,.555,.533,.511,.49,.471,.452,.434,.417,.402,.389,.377,.367,.358],dip:.015,mounds:[[60,.025,7],[35.4,.03,8],[17,.03,7],[-1.2,.035,6],[-11,.025,5],[-30.5,.03,7],[-51.9,.03,8]],wave:.016,flow:1,swerve:.05,air:.55,land:.12,clear:.86,azure:.42},colours:{crest:"#8fe3ff",turq:"#2fb4f5",azure:"#4bbbf7",electric:"#1e8ff0",deep:"#0f6fe0",pale:"#aad6f8",white:"#f4fbff",sky:"#d4f0ff"},white:{crest:.95,cap:.07,lace:0,flecks:.85,lines:.55,gloss:1,rim:.45},splash:{count:560,flecks:.4,puffSize:3.2,trail:.03,rest:[.1,.9],zones:[[.42,[-36,-16],[1.6,3.4],[.2,.8],[.012,.026],.14],[.3,[14,36],[1.4,3],[.2,.7],[.011,.024],.1],[.28,[-60,60],[.8,2],[.1,.5],[.009,.018],0]]},floor:{radius:[1.15,2.1],ahead:1.6,amount:.9},debug:!1};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.heroWater;if(i)for(let e of Object.keys(i))Cn[e]=i[e]&&typeof i[e]=="object"&&!Array.isArray(i[e])&&Cn[e]?{...Cn[e],...i[e]}:i[e]}var en=i=>(+i).toFixed(4),gm=i=>new re(i),fc=Math.PI/180;function vm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,waterSheets:a,drumSheet:l,fogAnchor:c}){let u=t.tunnelStart,h=t.tunnelEnd,d={},f=Math.sqrt(Math.max(.01,t.tunnelRadius*t.tunnelRadius-n.AXIS_H*n.AXIS_H)),p={k:0,F:{P:new w,R:new w,U:new w,T:new w},C:new w,lagX:s.x||0,base:0,lat:0,air:0,land:0,speed:0,xMax:3,wasAir:!1};r.push(g=>{g=Math.min(g||0,.1);let m=s.z;p.k=_e.smoothstep(m,u+Cn.fade[0],u+Cn.fade[1]);let x=C=>1-Math.exp(-g/C);p.lagX+=(s.x-p.lagX)*x(.07),p.lat+=((s.xv||0)-p.lat)*x(.12),p.speed+=((s.speed||0)-p.speed)*x(.3);let y=n.baseHeight(t,p.lagX,m),b=Math.max(0,s.yAbs-y-n.FLOAT_H),R=s.air?_e.smoothstep(b,.08,.6):0;p.air+=(R-p.air)*x(.08),p.wasAir&&!s.air&&(p.land=1),p.wasAir=!!s.air,p.land=Math.max(0,p.land-g*2);let E=s.air?0:Math.min(0,s.yAbs-n.FLOAT_H-y);p.base+=(y+E-p.base)*x(.05),e.frame(m,p.F),e.map(p.lagX,p.base,m,p.C);let A=_e.clamp((m-u)*.5,0,1)*_e.clamp((h-m)*.5,0,1);p.xMax=3+(f-.22-3)*A}),d.swell=Jw({scene:i,updaters:r,time:o,S:p}),d.splash=tE({scene:i,updaters:r,time:o,S:p}),d.floor=sE({waterSheets:a,drumSheet:l,fogAnchor:c,updaters:r,S:p});let v=Cn.hide.map(g=>i.getObjectByName(g)).filter(Boolean);return r.push(()=>{if(p.k>.05)for(let g of v)g.visible=!1}),d.hidden=v.map(g=>g.name),d}function xm(i,e){let t=_e.clamp((e+110)/5,0,i.line.length-1.0001),n=Math.floor(t),s=i.line[n]+(i.line[n+1]-i.line[n])*(t-n)-i.dip,r=0;for(let[a,l,c]of i.mounds){let u=(e-a)/c;Math.abs(u)<1&&(r+=l*(1-u*u)**2)}let o=_e.clamp((Math.abs(e)-96)/12,0,1);return s*=1-o*o*.85,[s+r,r]}function Zw(i){let e=i.cols,t=i.rows,n=[],s=[],r=[],o=h=>[i.ax*Math.sin(h*fc),-i.au*Math.cos(h*fc)],a=h=>{let d=0,[f,p]=o(0),v=60;for(let g=1;g<=v;g++){let[m,x]=o(h*g/v);d+=Math.hypot(m-f,x-p),f=m,p=x}return h<0?-d:d},l=t+2;for(let h=0;h<=e;h++){let d=-i.phiMax+2*i.phiMax*h/e,f=d*fc,[p,v]=o(d),g=Math.sin(f)/i.ax,m=-Math.cos(f)/i.au,x=Math.hypot(g,m);g/=x,m/=x;let[y,b]=xm(i,d),R=Math.min(Math.max(y/.45,1),1.6)**.8,E=i.out*(1+.4*b/.05)*R,A=i.inner*R,C=a(d);for(let M=-1;M<=t;M++){let _=Math.PI*Math.max(M,0)/t,S=(_<=Math.PI/2?E:A)*Math.cos(_),U=M<0?i.skirt:i.foot+(y-i.foot)*Math.sin(_);n.push(p+g*S,U,v+m*S),s.push(C,Math.max(M,0)/t,y-U,y)}}for(let h=0;h<e;h++)for(let d=0;d<l-1;d++){let f=h*l+d,p=f+l;r.push(f,p,f+1,f+1,p,p+1)}let c=new Ze;c.setAttribute("position",new We(n,3)),c.setAttribute("aSurf",new We(s,4)),c.setIndex(r),c.computeVertexNormals();let u=(Math.floor(e/2)*l+Math.floor(l/2)+1)*3;if(c.attributes.normal.array[u+1]<0){let h=c.index.array;for(let d=0;d<h.length;d+=3){let f=h[d+1];h[d+1]=h[d+2],h[d+2]=f}c.computeVertexNormals()}return c}function Jw({scene:i,updaters:e,time:t,S:n}){let s=Cn.swell,r=Cn.colours,o=Cn.white,a=Zw(s),l={uTime:t,uFade:{value:0},uC:{value:new w},uR:{value:new w(1,0,0)},uU:{value:new w(0,1,0)},uT:{value:new w(0,0,1)},uLat:{value:0},uAir:{value:0},uLand:{value:0},uPX:{value:0},uXMax:{value:3},uFlow:{value:s.flow}};for(let[h,d]of Object.entries(r))l["uK"+h]={value:gm(d)};let c=new Ue({uniforms:l,vertexShader:Qw(s),fragmentShader:eE(o),transparent:!0,depthWrite:!0}),u=new Te(a,c);return u.name="heroSwell",u.frustumCulled=!1,u.renderOrder=5,u.visible=!1,i.add(u),e.push(()=>{u.visible=n.k>.01,u.visible&&(l.uFade.value=n.k,l.uC.value.copy(n.C),l.uR.value.copy(n.F.R),l.uU.value.copy(n.F.U),l.uT.value.copy(n.F.T),l.uLat.value=_e.clamp(n.lat,-6,6),l.uAir.value=n.air,l.uLand.value=n.land,l.uPX.value=n.lagX,l.uXMax.value=n.xMax,l.uFlow.value=s.flow*(.6+.4*_e.clamp(n.speed/7,0,1.5)))}),{drawCalls:1,triangles:a.index.count/3}}function Qw(i){return`
attribute vec4 aSurf;   // s (m along the crest from the front), t (0 outer foot .. 1 inner foot), depth below the crest (m), crest height (m)
uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uLat, uAir, uLand, uPX, uXMax;
varying vec3 vW, vN; varying vec4 vS;
void main() {
  vec3 p = position;   // x (screen-left), height above the water, u (along the path) in the character's frame
  float s = aSurf.x, H = aSurf.w;
  float top = clamp(p.y / max(H, 0.05), 0.0, 1.0); top *= top;
  // waves running out along the crest from the front, and a slower roll
  float run = 0.6 * sin(abs(s) * 7.0 - uTime * 4.0) + 0.4 * sin(s * 13.0 + uTime * 2.3 + 1.3);
  float side = p.x >= 0.0 ? 1.0 : -1.0;
  float pile = 1.0 + clamp(side * uLat * ${en(i.swerve)}, -0.3, 0.3) * smoothstep(0.1, 0.8, abs(p.x));
  float lift = uFade * pile * (1.0 - uAir * ${en(i.air)}) * (1.0 + uLand * ${en(i.land)});
  if (p.y > 0.0) p.y = p.y * lift + run * ${en(i.wave)} * top * uFade;
  // landing: thrown outward; swerving: the far ends drag behind
  float r = length(p.xz); p.xz += (r > 1e-3 ? p.xz / r : vec2(0.0)) * uLand * 0.12 * top;
  p.x -= uLat * 0.025 * smoothstep(0.3, 1.0, abs(p.x));
  float X = uPX + p.x; X = sign(X) * min(abs(X), uXMax); p.x = X - uPX;   // inside the drum: off the walls
  vec3 w = uC + uR * p.x + uU * p.y + uT * p.z;
  vW = w; vN = normalize(uR * normal.x + uU * normal.y + uT * normal.z);
  vS = vec4(s, aSurf.y, max(aSurf.z * max(lift, 0.3) - run * ${en(i.wave)} * top * uFade, 0.0), H);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`}function eE(i){return Cn.debug?"void main() { gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); }":`
${Rt}
uniform float uTime, uFade, uFlow, uLand;
uniform vec3 uR, uU, uT;
uniform vec3 uKcrest, uKturq, uKazure, uKelectric, uKdeep, uKpale, uKwhite, uKsky;
varying vec3 vW, vN; varying vec4 vS;
void main() {
  // as: distance along the crest from the front, so the pattern flows outward on both sides and meets without a seam
  float s = vS.x, as = abs(s), d = vS.z, fl = uTime * uFlow;
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN);
  float ndv0 = abs(dot(N, V));
  // the water's moving pattern: ripples running down the face toward the camera and out along the bank
  vec2 q = vec2(as * 3.2 - fl * 0.35, d * 7.0 - fl * 1.3);
  float n1 = bwFbm(q), n2 = bwFbm(q * vec2(2.1, 1.7) + 7.1), n3 = bwNoise(vec2(as * 1.3, d * 2.0) - fl * 0.2);
  // glossy ripples: the normal tilted by the pattern
  vec3 along = normalize(cross(uU, N) + 1e-4), down = normalize(cross(N, along));
  float n4 = bwNoise(vec2(as * 14.0 - fl * 0.9, d * 18.0 - fl * 2.6)), n5 = bwNoise(vec2(as * 17.0 + 4.0 - fl * 0.8, d * 15.0 - fl * 2.2));
  vec3 Nr = normalize(N + along * ((n1 - 0.5) * 0.7 + (n4 - 0.5) * 0.35) + down * ((n2 - 0.5) * 0.9 + (n5 - 0.5) * 0.35));
  float ndv = clamp(dot(Nr, V), 0.0, 1.0);
  // the mounds lit from the whirlpool's light ahead and above, a little from the left
  float key = clamp(dot(Nr, normalize(uU * 0.8 + uT * 0.45 + uR * 0.3)) * 0.5 + 0.5, 0.0, 1.0);
  // the body of the water: bright lit-through turquoise near the crest, azure down the face, electric blue in the ripple
  // troughs and the mounds' shaded sides, deep blue low down
  float rip = smoothstep(0.3, 0.7, n1 + (n3 - 0.5) * 0.4);
  vec3 col = mix(uKelectric, uKazure, clamp(rip * 0.8 + (key - 0.5) * 1.1 + ${en(Cn.swell.azure)}, 0.0, 1.0));
  col = mix(col, uKturq, (1.0 - smoothstep(0.02, 0.14, d)) * 0.55);
  col = mix(col, uKdeep, smoothstep(0.45, 0.8, d) * (0.3 + 0.6 * (1.0 - rip)));
  // light through the thin crest (the whirlpool's glow behind it)
  col += uKcrest * (1.0 - smoothstep(0.0, 0.1, d)) * 0.14 * pow(1.0 - ndv, 1.5);
  // a cyan sheen on the lit side of every swell and ripple
  col += uKcrest * pow(key, 5.0) * 0.22;
  // soft brighter patches of light in the water
  col = mix(col, uKpale, smoothstep(0.62, 0.85, bwFbm(vec2(as * 2.2 - fl * 0.2, d * 4.0 - fl * 0.7) + 3.7)) * 0.3);
  // glossy: the pale sky in the ripples at grazing angles, the whirlpool's light reflected off the crest, and crisp
  // highlights from a light behind the camera, up and to the left (a white glint on every mound and ripple)
  vec3 Rv = reflect(-V, Nr);
  float toGlow = clamp(dot(Rv, normalize(uT * 0.9 + uU * 0.45)), 0.0, 1.0);
  float fres = pow(1.0 - ndv, 4.0);
  col = mix(col, uKsky, clamp(fres * mix(0.12, 0.3, smoothstep(0.04, 0.2, d)) + smoothstep(0.9, 0.99, toGlow) * 0.25, 0.0, 0.6));
  vec3 Hc = normalize(normalize(uU * 0.75 - uT * 0.35 + uR * 0.45) + V);
  float spec = pow(clamp(dot(Nr, Hc), 0.0, 1.0), 70.0) * smoothstep(0.35, 0.65, n2) * ${en(i.gloss)} + pow(toGlow, 140.0) * smoothstep(0.4, 0.7, n2);
  // streaks of paler water swept out along the bank
  float st = bwFbm(vec2(as * 1.4 - fl * 0.7, d * 11.0 + n1 * 1.6));
  float streak = smoothstep(0.58, 0.76, st) * smoothstep(0.02, 0.07, d);
  col = mix(col, uKpale, streak * 0.6);
  // clear bubbles caught in the water: a pale rim, a white glint up and to the left
  vec2 bq = vec2(as * 11.0 - fl * 0.25, d * 11.0 - fl * 0.9), bi = floor(bq), bo = fract(bq) - 0.5 - (vec2(bwHash(bi + 3.3), bwHash(bi + 8.8)) - 0.5) * 0.3;
  float bh = bwHash(bi + 21.0), br = 0.16 + 0.22 * bwHash(bi + 4.4), bl = length(bo);
  float bub = step(0.78, bh) * smoothstep(0.03, 0.4, d);
  float bring = bub * exp(-pow((bl - br) / (0.05 * br + 0.012), 2.0));
  float bglint = bub * exp(-pow(length(bo - vec2(-0.45, 0.45) * br) / (0.18 * br), 2.0));
  col = mix(col, uKpale, bub * (1.0 - smoothstep(br * 0.8, br, bl)) * 0.25);
  col = mix(col, uKwhite, bring * 0.55);
  // a glassy rim on the crest and round every mound (the approved water's bright outlines)
  float rim = pow(1.0 - ndv0, 3.0) * (1.0 - smoothstep(0.0, 0.12, d)) * smoothstep(0.35, 0.7, bwNoise(vec2(as * 9.0 - fl * 0.7, uTime * 0.35) + 2.0));   // broken
  // white: a crest broken into short pieces, lacy foam patches just under it, flecks of spray in drifting bands down the
  // face (bigger and denser near the crest), the brightest streaks, the highlights
  float nc = bwNoise(vec2(as * 6.0 - fl * 0.5, uTime * 0.25)), nc2 = bwNoise(vec2(as * 13.0 - fl * 0.9, uTime * 0.4) + 5.0);
  float cw = 0.006 + ${en(i.cap)} * nc * nc * nc + 0.008 * nc2;                       // the white cap's depth down the face (m)
  float crest = (1.0 - smoothstep(cw * 0.55, cw, d)) * smoothstep(0.42, 0.6, nc + 0.25 * nc2);
  vec2 lv = bwVoronoi(vec2(as * 30.0 - fl * 0.8, d * 34.0 - fl * 2.0));
  crest *= 1.0 - 0.75 * (1.0 - smoothstep(0.08, 0.3, lv.x)) * smoothstep(0.012, 0.03, d);   // bubbles in the foam (blue shows through)
  float lace = 0.0;
  float band = smoothstep(0.35, 0.75, bwFbm(vec2(as * 2.6 - fl * 0.5, d * 3.5 - fl * 1.2) + 11.0));
  float fleck = 0.0;
  for (int i = 0; i < 2; i++) {
    float sc = i == 0 ? 24.0 : 50.0;
    vec2 fc = vec2(as * sc - fl * 1.5, d * sc * 0.8 - fl * 3.5) + float(i) * 17.3, fi = floor(fc);
    float fh = bwHash(fi + 5.3), rr = i == 0 ? 0.26 : 0.34;
    float thr = (i == 0 ? 0.9 : 0.86) - 0.22 * band - 0.08 * (1.0 - smoothstep(0.02, 0.22, d));
    vec2 fo = (fract(fc) - 0.5 + (vec2(bwHash(fi + 1.7), bwHash(fi + 9.1)) - 0.5) * 0.4) * vec2(1.0, 0.8);   // a little drawn out down the face
    fleck = max(fleck, step(thr, fh) * (1.0 - smoothstep(rr * 0.4, rr, length(fo))));
  }
  fleck *= 1.0 - 0.3 * smoothstep(0.3, 0.65, d);
  float white = clamp(crest * ${en(i.crest)} + lace * ${en(i.lace)} + fleck * ${en(i.flecks)} + streak * smoothstep(0.8, 0.9, st) * ${en(i.lines)} + rim * ${en(i.rim)} + spec + bglint, 0.0, 1.0);
  col = mix(col, uKwhite, white);
  // translucent near the top (what is behind shows through, tinted: the character's lower body reads lavender), solid lower
  float a = mix(${en(Cn.swell.clear)}, 1.0, smoothstep(0.03, 0.2, d));
  a = max(a, white);
  gl_FragColor = vec4(col, a * step(0.001, uFade));
}
`}function tE({scene:i,updaters:e,time:t,S:n}){let s=Cn.splash,r=Cn.swell,o=s.count,a=rE(389541),l=x=>x[0]+a()*(x[1]-x[0]),c=new Wt(1,1),u=new Qt;u.index=c.index,u.setAttribute("position",c.attributes.position);let h=new Float32Array(o*4),d=new Float32Array(o*4),f=new Float32Array(o*4),p=s.zones.reduce((x,y)=>x+y[0],0);for(let x=0;x<o;x++){let y=a()*p,b=s.zones[0];for(let J of s.zones){if(y<J[0]){b=J;break}y-=J[0]}let[,R,E,A,C,M]=b,_=l(R),S=_*fc,U=a(),N=U<(M||0)?2:U<(M||0)+s.flecks?1:0,I=r.ax*Math.sin(S),z=-r.au*Math.cos(S),[L]=xm(r,_),O=Math.sin(S)/r.ax,D=-Math.cos(S)/r.au,j=Math.hypot(O,D);O/=j,D/=j;let k=l([0,.12]),Z=l(E)*(N===2?.55:1),ge=l(A),de=Math.sign(I||1)*l([.1,.5]);h.set([I-O*k,L*l([.7,1]),z-D*k,l(C)*(N===2?s.puffSize:1)],x*4);let V=2*Z/9;d.set([O*ge+de,Z,D*ge*.6+l([-.2,.3]),a()],x*4),f.set([V,V*l(s.rest),N,_],x*4)}u.setAttribute("aBase",new st(h,4)),u.setAttribute("aVel",new st(d,4)),u.setAttribute("aLife",new st(f,4)),u.instanceCount=o;let v={uTime:t,uFade:{value:0},uC:{value:new w},uR:{value:new w(1,0,0)},uU:{value:new w(0,1,0)},uT:{value:new w(0,0,1)},uLat:{value:0},uAir:{value:0},uLand:{value:0}},g=new Ue({uniforms:v,vertexShader:nE(r),fragmentShader:iE,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}),m=new Te(u,g);return m.name="heroSplash",m.frustumCulled=!1,m.renderOrder=8,m.visible=!1,i.add(m),e.push(()=>{m.visible=n.k>.01,m.visible&&(v.uFade.value=n.k,v.uC.value.copy(n.C),v.uR.value.copy(n.F.R),v.uU.value.copy(n.F.U),v.uT.value.copy(n.F.T),v.uLat.value=_e.clamp(n.lat,-6,6),v.uAir.value=n.air,v.uLand.value=n.land)}),{droplets:o,drawCalls:1,triangles:o*2}}var nE=i=>`
attribute vec4 aBase, aVel, aLife;   // start x, h, u, size | velocity sideways, up, along, phase | flight time, rest, fleck, phi
uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uLat, uAir, uLand;
varying vec2 vP; varying float vA, vRound;
vec3 at(float t, vec3 v, float lift) {
  vec3 p = aBase.xyz; p.y *= lift;
  p += v * t; p.y -= 4.5 * t * t;
  return uC + uR * p.x + uU * p.y + uT * p.z;
}
void main() {
  float fly = aLife.x, cyc = fly + aLife.y, age = mod(uTime + aVel.w * cyc, cyc);
  float side = aBase.x >= 0.0 ? 1.0 : -1.0;
  // the swell's own lift (as its vertex shader), and more spray on the side it swerves to and on landing, less in the air
  float pile = 1.0 + clamp(side * uLat * ${en(i.swerve)}, -0.3, 0.3);
  float lift = uFade * pile * (1.0 - uAir * ${en(i.air)}) * (1.0 + uLand * ${en(i.land)});
  float boost = (1.0 + clamp(side * uLat * 0.12, -0.5, 0.8) + uLand * 0.9) * (1.0 - 0.6 * uAir);
  vec3 v = aVel.xyz * vec3(1.0 + uLand * 0.5, boost, 1.0);
  float t = min(age, fly * boost);
  vec4 c1 = projectionMatrix * viewMatrix * vec4(at(t, v, lift), 1.0);
  vec4 c0 = projectionMatrix * viewMatrix * vec4(at(max(t - ${en(Cn.splash.trail)}, 0.0), v, lift), 1.0);
  float asp = projectionMatrix[1][1] / projectionMatrix[0][0];
  vec2 a1 = c1.xy / c1.w * vec2(asp, 1.0), a0 = c0.xy / c0.w * vec2(asp, 1.0);
  float wN = aBase.w * projectionMatrix[1][1] / c1.w;
  vRound = aLife.z;
  vec2 dv = vRound > 0.5 ? vec2(0.0) : a1 - a0; float L = length(dv);
  vec2 ax = L > 1e-5 ? dv / L : vec2(0.0, 1.0), nx = vec2(ax.y, -ax.x);   // a right-handed quad (front-facing)
  float len = max(L, wN);
  vec2 p = (a0 + a1) * 0.5 + ax * position.y * (len + wN) + nx * position.x * wN;
  p.x /= asp;
  vP = position.xy * 2.0;
  vA = step(age, fly * boost) * smoothstep(0.0, 0.06, age / fly) * (1.0 - smoothstep(0.7, 1.0, age / (fly * boost))) * uFade * step(0.01, boost);
  gl_Position = vec4(p * c1.w, c1.z, c1.w);
}
`,iE=`
varying vec2 vP; varying float vA, vRound;
void main() {
  if (vA <= 0.0) discard;
  float a;
  if (vRound > 1.5) a = exp(-dot(vP, vP) * 2.6) * 0.6;   // a soft puff of spray
  else if (vRound > 0.5) a = 1.0 - smoothstep(0.35, 1.0, length(vP));
  else {
    // a streak: a round head (the leading end), fading toward the tail
    float y = vP.y * 0.5 + 0.5;
    a = (1.0 - smoothstep(0.35, 1.0, abs(vP.x))) * smoothstep(0.0, 0.7, y) * (1.0 - smoothstep(0.92, 1.0, y));
  }
  a *= vA;
  vec3 col = mix(vec3(1.0), vec3(0.62, 0.86, 1.0), smoothstep(0.2, 0.9, abs(vP.x)) * 0.6);
  gl_FragColor = vec4(col * a, a);
}
`;function sE({waterSheets:i,drumSheet:e,fogAnchor:t,updaters:n,S:s}){let r=Cn.floor,o=Cn.colours,a=[],l={value:0},c=`  if (uHeroWater > 0.0) {   // ?s3=hero: turquoise water round the character (tunnel_r7_hero_water.js)
    vec2 hw = xz - uPlayer.xz;
    float hr = length(vec2(hw.x, hw.y > 0.0 ? hw.y / ${en(r.ahead)} : hw.y));
    float hk = (1.0 - smoothstep(${en(r.radius[0])}, ${en(r.radius[1])}, hr)) * uHeroWater * ${en(r.amount)};
    float hf = flowT;
    float hn = bwFbm(vec2(xz.x * 3.0, xz.y * 1.4 - hf * 0.5)), hn2 = bwFbm(vec2(xz.x * 7.0 + 3.1, xz.y * 2.5 - hf * 0.8));
    vec3 hc = mix(${ma(o.electric)}, ${ma(o.azure)}, smoothstep(0.35, 0.65, hn));
    hc = mix(hc, ${ma(o.turq)}, smoothstep(0.55, 0.8, hn2) * 0.6);
    float hl = smoothstep(0.85, 0.97, 1.0 - abs(2.0 * fract(bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - hf * 0.6)) * 4.0) - 1.0));
    hc = mix(hc, ${ma(o.pale)}, hl * 0.75);
    vec2 hfc = vec2(xz.x * 14.0, xz.y * 9.0 - hf * 1.2), hfi = floor(hfc);
    float hfl = step(0.9, bwHash(hfi + 2.7)) * (1.0 - smoothstep(0.1, 0.3, length(fract(hfc) - 0.5)));
    hc = mix(hc, ${ma(o.white)}, hfl * 0.85);
    hc *= 0.92 + 0.12 * NdotL;
    lit = mix(lit, hc, hk);
  }
`;for(let u of i||[]){let h=u.material;!h||!h.fragmentShader||!h.fragmentShader.includes(t)||!h.fragmentShader.includes("vec3 lit")||!h.fragmentShader.includes("uniform vec3 uPlayer")||h.fragmentShader.includes("uniform float uHeroWater;")||(h.uniforms.uHeroWater=l,h.fragmentShader=h.fragmentShader.replace(t,c+t).replace("void main() {",`uniform float uHeroWater;
void main() {`),h.needsUpdate=!0,a.push(u===e?"drum":"slide"))}return n.push(()=>{l.value=s.k}),a}function ma(i){let e=gm(i);return`vec3(${en(e.r)}, ${en(e.g)}, ${en(e.b)})`}function rE(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var oE=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),aE=typeof window>"u"||oE?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),ns=aE.includes("hero"),dn={round6:{round5:{camera:{off:[-.11,1.08,-2.6],lookY:1.38,lookX:.26,fov:72},bloom:{strength:.32,radius:.42,threshold:1}},porthole:{bezel:{inner:2.5,outer:2.64,front:-.12,back:.12,round:.5},step:{hide:!0},face:{inner:2.6,outer:14,z:.02,dish:.3},rimRivets:{size:1e-4},rivets:{radius:3.3},lavender:[.1095,.1221,.552],lilac:[.2705,.2384,.6867],shade:[.0423,.0612,.3813]},hideFoamBubbles:!0,hideCrestCards:!0,inside:[-6.5,-3.8],layout:{coinLines:[[-.4,1.95,1,1,1.02,0],[-1.14,4.05,1,1,1.5,0],[.81,7.3,1,1,.99,0],[2.29,1.5,1,1,.45,0],[2,13,1,1,.55,0],[1,12,3,1,.72,0]],replace:3,firstSock:[1.97,2.25,.97],extraGem:[-.76,5.7,1.45]},r7:{coin:{color:[1,1.1,.28],glow:.62,lemon:.12},deco:[[1.15,1,31,.74,1.86],[2.6,-1,2,1.05,1.98]]}},hazards:[[9.4,1],[10.1,-1],[16.6,-1],[18.8,1],[26,1],[26.7,-1]],emerge:[6,9,1.9],vortex:{perLog:3,spiral:.5,wobble:.5,flow:.3,travel:.1,arcs:3,stops:[[.02,"#e9e6f8","#f6f4fc","#ffffff"],[.06,"#b4c6f2","#cfe8fc","#f2fbff"],[.1,"#d6aef0","#eccdf5","#f6f2fb"],[.14,"#4072e2","#6696ed","#bedbfc"],[.185,"#1a63d8","#2f80e8","#a6d6fb"],[.24,"#7fa6ea","#cfe2f6","#f6f9ea"],[.29,"#2a80ee","#39b4fb","#c8f0ff"],[.36,"#0955e2","#1f78f0","#5aa8f8"],[.43,"#1c6fe8","#2d87f4","#4fb0fa"]],ridge:.85,splash:1,caustic:.45,droplets:.9,streaks:.6,sparkle:1,rainbow:.85,rainbowAt:.235,rainbowW:.024,below:.55,floor:.92},rim:{u:-2.1,centre:[.14,.5],bevel:"#cbabea",gold:"#e9a878",goldHi:"#fff0c8",shadow:"#784463",mauve:"#b68fa0",mauveHi:"#baadd0"},collar:{wall:"#a49ce0",deep:"#7a70c8",lip:"#c4bcf6",edge:"#002ca9"},grade:{contrast:1.08,saturation:1.16,exposure:1,vignette:.28,vignetteCol:"#5a6fd8",in:[-12,-8]},coinScale:1.3,bubbles:[[-1.75,-.72,2.67,.33],[-.2,-.17,2.76,.17],[-1.35,.95,2.76,.16],[-2.15,-1.29,2.43,.15],[-3.2,.88,.62,.15],[-2.9,.72,.8,.1],[-3,.92,2.91,.13],[.6,.9,2.2,.09],[1.2,-1,2.5,.1],[-.8,1.2,1.9,.08]],glow:{ahead:16,size:.12,core:.45,halo:.12,alpha:.75},hide:["r6Flanges","r7Glow","r5Heart","s4Rings"]};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.hero;if(i)for(let e of Object.keys(i))dn[e]=i[e]&&typeof i[e]=="object"&&!Array.isArray(i[e])&&dn[e]?{...dn[e],...i[e]}:i[e]}var Et=i=>(+i).toFixed(4),Ht=i=>{let e=typeof i=="string"?new re(i):{r:i[0],g:i[1],b:i[2]};return`vec3(${[e.r,e.g,e.b].map(Et).join(", ")})`};function lE(i){let e=`  vec3 tr = ${Ht(i[0][1])}, bd = ${Ht(i[0][2])}, cr = ${Ht(i[0][3])};
`;for(let t=1;t<i.length;t++){let[n]=i[t-1],[s,r,o,a]=i[t];e+=`  { float k = smoothstep(${Et(n)}, ${Et(s)}, rw); tr = mix(tr, ${Ht(r)}, k); bd = mix(bd, ${Ht(o)}, k); cr = mix(cr, ${Ht(a)}, k); }
`}return e}function pc(){let i=dn.vortex;return`
uniform float uHeroTime, uHeroTravel, uHeroTanW;
uniform vec3 uHeroCam;   // the camera in the track frame: sideways x, height above the water, metres along the path
float heroH(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// cs: the point's place in the tube's cross-section (x, height above the water); u: metres along the path
vec3 heroVortex(vec2 cs, float u, out float rw) {
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
  rw = length(rel) / du / uHeroTanW;                 // screen radius from the vanishing point, as a share of the width
  float ang = atan(rel.y, rel.x);
  float lr = log(max(rw, 0.003));
  float wob = bwFbm(vec2(ang * 1.7 + uHeroTime * 0.15, lr * 2.6 - uHeroTime * 0.1));
  float s = lr * ${Et(i.perLog)} + ang / 6.2832 * ${Et(i.spiral)} + (wob - 0.5) * ${Et(i.wobble)} - uHeroTime * ${Et(i.flow)} - uHeroTravel * ${Et(i.travel)};
  float k = fract(s), id = floor(s), rnd = heroH(vec2(id, 7.0));
${lE(i.stops)}
  // each ring: the band's own colour (its measured median), a narrow deep trough at its edge, a lit crest broken into
  // swirling arcs, and a thin bright ridge on the crest
  float arcs = smoothstep(0.32, 0.78, bwFbm(vec2(ang * ${Et(i.arcs)} + id * 5.3 - uHeroTime * 0.5, s * 1.7)));
  float body = exp(-pow((k - 0.6) / 0.1, 2.0));   // the crest's lit water (kept as 'body' for the streaks below)
  float trough = 1.0 - smoothstep(0.0, 0.2, k) + smoothstep(0.88, 1.0, k);
  vec3 col = mix(bd, tr, clamp(trough, 0.0, 1.0) * (0.7 + 0.3 * rnd));
  col = mix(col, cr, body * (0.35 + 0.65 * arcs));
  float ridge = exp(-pow((k - 0.62) / 0.045, 2.0));
  col = mix(col, vec3(1.0), clamp(ridge * (0.2 + 0.8 * arcs) * ${Et(i.ridge)} * smoothstep(0.03, 0.12, rw), 0.0, 1.0));
  // a crisp cyan line along each ring's crest (the approved rings' glossy edges)
  col = mix(col, ${Ht("#3fc4ff")}, exp(-pow((k - 0.78) / 0.025, 2.0)) * 0.7 * smoothstep(0.12, 0.25, rw));
  // irregular white splash strokes along the rings (stretched round them, of all lengths), drawn inward with the rings
  float ringPh = lr * ${Et(i.perLog)} - uHeroTime * ${Et(i.flow)} - uHeroTravel * ${Et(i.travel)};
  float sp1 = bwFbm(vec2(ang * 3.2 + id * 3.1, ringPh * 11.0));            // long strokes round the rings, thin across them
  float sp2 = bwNoise(vec2(ang * 9.0 - id * 1.7, ringPh * 3.0));
  float splash = smoothstep(0.62, 0.74, sp1) * smoothstep(0.3, 0.65, sp2) * smoothstep(0.08, 0.16, rw) * (1.0 - smoothstep(0.44, 0.5, rw));
  col = mix(col, ${Ht("#bfe9ff")}, clamp(smoothstep(0.52, 0.66, sp1) * smoothstep(0.3, 0.65, sp2) * 0.35 * smoothstep(0.08, 0.16, rw), 0.0, 1.0));   // a soft glow round them
  col = mix(col, vec3(1.0), clamp(splash * ${Et(i.splash)}, 0.0, 1.0));
  // white water streaks, fixed in the world and flowing toward the rider: short dashes round the rings
  vec2 sg = vec2(ang * 14.0, u * 1.6 + uHeroTime * 2.2), sc = floor(sg);
  float sh = heroH(sc + 3.0) + 0.25 * smoothstep(0.1, 0.4, rw) * step(0.0, rel.y) * (1.0 - smoothstep(0.42, 0.5, rw)), sh2 = heroH(sc + 17.0);
  vec2 sq = fract(sg) - vec2(0.5, 0.25 + 0.5 * sh2);
  float streak = (1.0 - smoothstep(0.18, 0.46, abs(sq.x))) * (1.0 - smoothstep(0.04, 0.12, abs(sq.y))) * step(0.62, sh);
  col = mix(col, vec3(1.0), clamp(streak * (0.35 + 0.65 * body) * ${Et(i.streaks)} * smoothstep(0.06, 0.2, rw), 0.0, 1.0));
  // water caustics: a web of cyan-white light playing over the rings (the approved rings read as water, not paint)
  vec2 cv = bwVoronoi(vec2(ang * 5.0 + uHeroTime * 0.25, ringPh * 2.6));
  float caus = (1.0 - smoothstep(0.0, 0.08, cv.y - cv.x)) * smoothstep(0.1, 0.2, rw) * (1.0 - smoothstep(0.44, 0.5, rw));
  col = mix(col, ${Ht("#c9f2ff")}, clamp(caus * ${Et(i.caustic)} * (0.25 + 0.75 * body), 0.0, 1.0));   // on the lit crests
  // fine droplets: small bright points with a soft cyan glow, thickest above the centre
  vec2 dg = vec2(ang * 40.0, ringPh * 16.0), dc = floor(dg);
  float dh = heroH(dc + 71.0), dd = length(fract(dg) - 0.5);
  float drop = step(0.86, dh) * (1.0 - smoothstep(0.08, 0.22, dd)) * smoothstep(0.08, 0.16, rw) * (1.0 - smoothstep(0.44, 0.5, rw));
  col = mix(col, vec3(1.0), clamp(drop * ${Et(i.droplets)} * (0.7 + 0.6 * step(0.0, rel.y)), 0.0, 1.0));
  col = mix(col, ${Ht("#9fe6ff")}, clamp(step(0.86, dh) * (1.0 - smoothstep(0.2, 0.5, dd)) * 0.3 * ${Et(i.droplets)} * smoothstep(0.08, 0.16, rw), 0.0, 1.0));
  // twinkling sparkles
  vec2 pg = vec2(ang * 24.0, u * 4.0 + uHeroTime * 1.4), pc = floor(pg);
  float ph = heroH(pc + 41.0);
  float sp = step(0.9, ph) * (1.0 - smoothstep(0.0, 0.3, length(fract(pg) - 0.5))) * (0.55 + 0.45 * sin(uHeroTime * 6.0 + ph * 50.0));
  col += vec3(1.0) * sp * ${Et(i.sparkle)};
  // pastel ring 2, tinted by angle (ang: 0 = screen right in the camera's view, up positive): peach at the top, mint
  // upper left, lilac left, ice-cyan upper right
  float up = clamp(rel.y / max(length(rel), 1e-3), -1.0, 1.0), right = -rel.x / max(length(rel), 1e-3);
  vec3 tint = mix(${Ht("#b98cf0")}, ${Ht("#8fdcf6")}, smoothstep(-0.6, 0.6, right));
  tint = mix(tint, ${Ht("#ffc27a")}, smoothstep(0.5, 0.95, up));                                   // warm peach-gold at the top
  tint = mix(tint, ${Ht("#f59ad8")}, smoothstep(0.1, 0.6, up) * smoothstep(0.0, 0.6, -right) * 0.8);   // pink upper left
  tint = mix(tint, vec3(1.0), 0.18);
  col = mix(col, tint, ${Et(i.rainbow)} * exp(-pow((rw - ${Et(i.rainbowAt)}) / ${Et(i.rainbowW)}, 2.0)));
  // below the centre: brighter, flatter horizontal flow streaks of white and pale blue water
  float low = smoothstep(0.1, 0.7, -up) * smoothstep(0.04, 0.12, rw);
  float flowS = smoothstep(0.45, 0.85, bwFbm(vec2(rel.x / du * 9.0 + uHeroTime * 0.4, lr * 7.0 - uHeroTime * 1.6)));
  col = mix(col, mix(${Ht("#a7d3f6")}, vec3(1.0), flowS), low * ${Et(i.below)} * (0.45 + 0.55 * flowS));
  return col;
}
`}var cE=`
attribute vec2 aAU; varying vec2 vAU;
void main() { vAU = aAU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;function uE(i,e,t){return`
${Rt}
${pc()}
uniform float uStart; varying vec2 vAU;
void main() {
  float a = vAU.x, u = vAU.y, rw;
  vec3 col = heroVortex(vec2(cos(a) * ${Et(i)}, ${Et(e)} + sin(a) * ${Et(i)}), u, rw);
  col = mix(col, ${Ht(dn.collar.edge)}, exp(-pow((u - uStart - 0.1) / 0.07, 2.0)) * 0.9);   // the thin navy edge of the mouth
  col = mix(col, ${Ht(t)}, 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u));   // the washer's lavender shell before the mouth
  gl_FragColor = vec4(col, 1.0);
}
`}function ym({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,waterSheets:a,drumSheet:l,fogAnchor:c}){let u=t.tunnelStart,h=n.WATER+n.AXIS_H,d={},f={pos:new w,ok:!1},p={uHeroTime:o,uHeroTravel:{value:0},uHeroTanW:{value:.7265},uHeroCam:{value:new w(0,h,u-6)}},v={P:new w,R:new w,U:new w,T:new w},g=new w,m=i.onBeforeRender;i.onBeforeRender=function(E,A,C,M){if(m&&m.call(this,E,A,C,M),!C||!C.isPerspectiveCamera)return;let _=p.uHeroCam.value.z;(!f.ok||Math.abs(_-s.z)>12)&&(_=s.z-3);for(let S=0;S<2;S++)e.frame(_,v),g.copy(C.position).sub(v.P),_+=g.dot(v.T);e.frame(_,v),g.copy(C.position).sub(v.P),p.uHeroCam.value.set(g.dot(v.R),g.dot(v.U),_),f.ok=!0,p.uHeroTanW.value=2*Math.tan(_e.degToRad(C.fov)/2)*C.aspect},r.push(()=>{p.uHeroTravel.value=s.z});let x=i.getObjectByName("r6Walls")||i.getObjectByName("r5Vortex")||i.getObjectByName("r4Lining");if(x){let E=typeof window<"u"&&window.__BW_HERO_LINING__||{radius:2};x.material=new Ue({uniforms:{...p,uStart:{value:u}},vertexShader:cE,fragmentShader:uE(E.radius,h,"#c4b8f0"),side:qe}),x.name="heroWalls",d.walls=!0}let y=E=>`  {   // ?s3=hero: the whirlpool on the water (concentric with the walls' rings)
    float hrw; vec3 hv = heroVortex(vec2(xz.x, vWorld.y * 0.0 + ${Et(n.WATER)}), xz.y, hrw);
    float hk = (${E}) * ${Et(dn.vortex.floor)} * (1.0 - smoothstep(0.35, 0.8, foam));
    lit = mix(lit, hv * (0.92 + 0.12 * NdotL), hk);
  }
`,b=[];for(let E of a||[]){let A=E.material;if(!A||!A.fragmentShader||!A.fragmentShader.includes(c)||!A.fragmentShader.includes("vec3 lit"))continue;let C=E===l?"inDrum":`smoothstep(${(u-9).toFixed(2)}, ${(u-5).toFixed(2)}, xz.y)`;Object.assign(A.uniforms,p),A.fragmentShader=A.fragmentShader.replace(c,y(C)+c).replace("void main() {",pc()+`
void main() {`),A.needsUpdate=!0,b.push(E===l?"drum":"slide")}d.floor=b,d.rim=hE({scene:i,TR:e,TS:u,axisH:h,time:o,U:p}),d.glow=fE({scene:i,TR:e,L:t,mascot:s,updaters:r,time:o,axisH:h,U:p}),d.bubbles=dE({scene:i,TR:e,TS:u,mascot:s,updaters:r,time:o}),d.water=vm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,U:p,heroVortexGLSL:pc,waterSheets:a,drumSheet:l,fogAnchor:c});let R=dn.hide.map(E=>i.getObjectByName(E)).filter(Boolean);return r.push(()=>{for(let E of R)E.visible=!1}),d.hidden=R.map(E=>E.name),d}function bm({grade:i,mascot:e,updaters:t,L:n}){if(!i||!i.material.fragmentShader.includes("void main() {"))return null;let s=dn.grade;i.uniforms.uHero={value:0},i.material.fragmentShader=i.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uHero;").replace(/gl_FragColor = max\(c, 0\.0\);\s*}\s*$/,`if (uHero > 0.0) {   // ?s3=hero: the hero grade (tunnel_r7_hero.js)
        vec3 h = max(texture2D(tDiffuse, vUv).rgb, 0.0);
        float L0 = dot(h, vec3(0.2126, 0.7152, 0.0722));
        h *= pow(max(L0, 1e-4) / 0.18, ${Et(s.contrast-1)}) * ${Et(s.exposure)};
        float L1 = dot(h, vec3(0.2126, 0.7152, 0.0722));
        h = max(L1 + (h - L1) * ${Et(s.saturation)}, 0.0);
        vec2 hv = vUv - 0.5; hv.x *= 0.6;
        h *= mix(vec3(1.0), ${Ht(s.vignetteCol)}, smoothstep(0.42, 0.85, length(hv)) * ${Et(s.vignette)});
        c.rgb = mix(c.rgb, h, uHero);
      }
      gl_FragColor = max(c, 0.0);
    }`),i.material.needsUpdate=!0;let r=i.material.fragmentShader.includes("?s3=hero: the hero grade"),o=n.tunnelStart;return t.push(()=>{i.uniforms.uHero.value=_e.smoothstep(e.z,o+s.in[0],o+s.in[1])*(1-_e.smoothstep(e.z,n.tunnelEnd-2,n.tunnelEnd+4))}),{ok:r,...s}}function hE({scene:i,TR:e,TS:t,axisH:n,time:s,U:r}){let o=dn.rim,a=dn.collar,l=i.getObjectByName("r6Porthole");if(!l)return null;let c={P:new w,R:new w,U:new w,T:new w};e.frame(t+o.u,c);let u=new Se().makeBasis(c.R,c.U,c.T);u.setPosition(c.P.clone().addScaledVector(c.R,o.centre[0]).addScaledVector(c.U,o.centre[1])),l.position.set(0,0,0),l.quaternion.identity(),l.scale.set(1,1,1),l.updateMatrix(),l.applyMatrix4(u),l.updateMatrixWorld(!0);let h=l.getObjectByName("r6Bezel"),d=dn.round6.porthole.bezel;for(let _ of l.children)_!==h&&_.name!=="r6Face"&&!_.isInstancedMesh&&(_.visible=!1);h&&(h.material=new Ue({uniforms:{uTime:s},side:qe,vertexShader:`varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() { vL = position; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uTime; varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() {
  float r = length(vL.xy), t = clamp((r - ${Et(d.inner)}) / ${Et(d.outer-d.inner)}, 0.0, 1.0);   // 0 inner edge, 1 outer
  vec2 d = vL.xy / max(r, 1e-3);           // local +x is screen-left: right = -d.x
  float right = -d.x, up = d.y;
  float goldK = clamp(smoothstep(0.3, 0.8, up) + smoothstep(-0.05, 0.55, right) * smoothstep(-0.5, 0.2, up), 0.0, 1.0);   // gold across the top and the right, mauve low on the left
  vec3 core = mix(${Ht(o.mauve)}, ${Ht(o.gold)}, goldK);
  vec3 hi = mix(${Ht(o.mauveHi)}, ${Ht(o.goldHi)}, goldK);
  vec3 col = mix(${Ht(o.shadow)}, core, smoothstep(0.0, 0.16, t));                 // a thin plum shadow on the inner edge
  col = mix(col, hi, exp(-pow((t - 0.5) / 0.1, 2.0)) * (0.35 + 0.65 * goldK));      // the polished highlight
  col = mix(col, ${Ht(o.bevel)}, smoothstep(0.7, 0.95, t));                          // the lavender bevel outside
  float glint = pow(max(0.0, sin(atan(d.y, d.x) * 3.0 + uTime * 0.6)), 24.0) * goldK * exp(-pow((t - 0.5) / 0.12, 2.0));
  gl_FragColor = vec4(col + vec3(1.0, 0.95, 0.8) * glint * 0.6, 1.0);
}`}));let f=24,p=128,v=[],g=[],m=[],x=[],y=new w,b=t+o.u-.05,R=t+.06,E=d.inner-.03,A=2.02;for(let _=0;_<=f;_++){let S=_/f,U=S*S*(3-2*S),N=b+(R-b)*S,I=o.centre[0]*(1-U),z=o.centre[1]+(n-o.centre[1])*U,L=E+(A-E)*U;for(let O=0;O<=p;O++){let D=O/p*Math.PI*2;if(e.map(I+Math.cos(D)*L,z+Math.sin(D)*L,N,y),v.push(y.x,y.y,y.z),g.push(S,D),m.push(I+Math.cos(D)*L,z+Math.sin(D)*L,N),O<p&&_<f){let j=_*(p+1)+O;x.push(j,j+p+1,j+1,j+1,j+p+1,j+p+2)}}}let C=new Ze;C.setAttribute("position",new We(v,3)),C.setAttribute("aTA",new We(g,2)),C.setAttribute("aXHU",new We(m,3)),C.setIndex(x);let M=new Te(C,new Ue({uniforms:{...r,uTime:s},side:qe,vertexShader:`attribute vec2 aTA; attribute vec3 aXHU; varying vec2 vTA; varying vec3 vXHU;
void main() { vTA = aTA; vXHU = aXHU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`${Rt}
${pc()}
uniform float uTime; varying vec2 vTA; varying vec3 vXHU;
void main() {
  float t = vTA.x, a = vTA.y, up = sin(a), right = -cos(a);
  vec3 col = mix(${Ht(a.deep)}, ${Ht(a.wall)}, 0.55 + 0.45 * up);
  col *= 0.9 + 0.1 * bwNoise(vec2(a * 30.0, t * 4.0));                         // brushed metal
  col = mix(col, ${Ht(a.lip)}, smoothstep(0.8, 0.95, t));                      // the pale lip just before the mouth
  col += ${Ht("#5fa8ff")} * smoothstep(0.55, 1.0, t) * 0.18;                   // blue light from the tunnel
  col += ${Ht("#ffb0c8")} * smoothstep(0.2, 0.9, right) * smoothstep(0.0, 0.8, up) * (1.0 - t) * 0.12;   // warm light, top right
  // only the top arc is the washer's lavender wall (as in the approved picture); round the sides and below, the
  // whirlpool's water runs on out to the rim
  float rw; vec3 water = heroVortex(vXHU.xy, vXHU.z, rw);
  col = mix(water, col, smoothstep(0.3, 0.62, up));
  gl_FragColor = vec4(col, 1.0);
}`}));return M.name="heroCollar",M.frustumCulled=!1,i.add(M),{u:o.u,centre:o.centre,inner:d.inner,outer:d.outer}}function dE({scene:i,TR:e,TS:t,mascot:n,updaters:s,time:r}){let o=dn.bubbles,a=o.length,l=new tn(1,32,20),c=new Qt;c.index=l.index,c.setAttribute("position",l.attributes.position),c.setAttribute("normal",l.attributes.normal);let u=new Float32Array(a*4),h=new w;o.forEach(([p,v,g,m],x)=>{e.map(v,g,t+p,h),u.set([h.x,h.y,h.z,m],x*4)}),c.setAttribute("inst",new st(u,4)),c.instanceCount=a;let d=new Ue({uniforms:{uTime:r},transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At,vertexShader:`attribute vec4 inst; uniform float uTime; varying vec3 vN; varying vec3 vV; varying float vSeed;
void main() {
  vSeed = fract(inst.x * 3.1 + inst.z * 7.7);
  vec3 c = inst.xyz + vec3(sin(uTime * 0.9 + vSeed * 6.0) * 0.04, mod(uTime * 0.12 + vSeed, 1.0) * 0.3 - 0.15, 0.0);
  vec3 p = position * inst.w * (1.0 + 0.03 * sin(uTime * 3.0 + vSeed * 9.0 + position.y * 3.0));
  vec4 w = modelMatrix * vec4(c + p, 1.0); vN = normalize(position); vV = normalize(cameraPosition - w.xyz);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,fragmentShader:`uniform float uTime; varying vec3 vN; varying vec3 vV; varying float vSeed;
void main() {
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 3.0), body = 0.06 + 0.1 * pow(f, 1.5);
  vec3 film = 0.6 + 0.4 * cos(6.2832 * (f * 1.4 + vN.y * 0.4 + vec3(0.0, 0.33, 0.67) + uTime * 0.05 + vSeed));
  vec3 col = vec3(0.92, 0.97, 1.0) * body + mix(vec3(1.0), film, 0.55) * rim * 0.9;
  vec3 L = normalize(vec3(-0.45, 0.6, 0.65));
  float spec = pow(max(dot(reflect(-L, normalize(vN)), vV), 0.0), 40.0);
  float a = clamp(body + rim * 0.85 + spec, 0.0, 1.0);
  gl_FragColor = vec4(col + vec3(1.0) * spec * 1.2, a);
}`}),f=new Te(c,d);return f.name="heroBubbles",f.frustumCulled=!1,f.renderOrder=6,i.add(f),s.push(()=>{f.visible=n.z>t-9&&n.z<t+6}),{count:a}}function fE({scene:i,TR:e,L:t,mascot:n,updaters:s,time:r,axisH:o,U:a}){let l=dn.glow,c={uTime:r,uCore:{value:l.core},uHalo:{value:l.halo},uAlpha:{value:l.alpha}},u=new Ue({uniforms:c,transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
uniform float uTime, uCore, uHalo, uAlpha; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x);
  float core = exp(-r * r / 0.03);
  float halo = exp(-r * r / 0.28);
  float rays = (0.6 + 0.4 * sin(a * 7.0 + uTime * 0.8)) * exp(-r * 3.0);
  vec3 col = vec3(1.0, 0.99, 0.96) * core * uCore + vec3(0.82, 0.93, 1.0) * halo * uHalo + vec3(1.0, 0.96, 1.0) * rays * 0.25;
  float al = clamp(core * uCore + halo * uHalo * 0.8 + rays * 0.2, 0.0, 1.0) * (1.0 - smoothstep(0.75, 1.0, r)) * uAlpha;
  gl_FragColor = vec4(min(col, vec3(1.25)), al);
}`}),h=new Te(new Wt(2,2),u);h.name="heroGlow",h.frustumCulled=!1,h.renderOrder=3,h.onBeforeRender=(f,p,v)=>{let g=Math.min(a.uHeroCam.value.z+l.ahead,t.tunnelEnd+2);e.frame(g,d),h.position.copy(d.P).addScaledVector(d.U,o);let m=h.position.distanceTo(v.position);h.scale.setScalar(l.size*a.uHeroTanW.value*m*.5/.5),h.quaternion.copy(v.quaternion),h.updateMatrixWorld()};let d={P:new w,R:new w,U:new w,T:new w};return i.add(h),s.push(()=>{h.visible=n.z>t.tunnelStart-7&&n.z<t.tunnelEnd-2}),{ahead:l.ahead,size:l.size}}var pE=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),gc=typeof window>"u"||pE?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),yn=gc.includes("round7")||gc.includes("hero"),Fi=gc.includes("round6")||yn,mE=Fi&&(gc.includes("rich")||yn),Ne={inside:[-5,-2.5],camBlendEnd:-4.3,porthole:{bezel:{inner:1.98,outer:2.5,front:-.34,back:.16,round:.55},step:{inner:1.9,outer:2.04,z:.22,depth:.14},seal:{radius:1.99,tube:.075,z:.36},face:{inner:2.42,outer:9,z:-.2,dish:.35},rivets:{count:16,radius:2.82,size:.07},rimRivets:{count:24,size:.055},panels:12,lavender:[.68,.6,.98],lilac:[.88,.8,1],shade:[.34,.26,.62],goldColor:16764782,goldGlow:9064978,goldRough:.2,goldEnv:1.6,faceGloss:.55,lemon:0},flanges:{every:2.3,from:1,wall:2.03,lip:1.8,depth:.16,goldEvery:3,arc:[-56,236],face:[.05,.35,.95],deep:[.02,.14,.58],cyan:[.6,1,1.2],gold:[1,.74,.32]},bowWave:{reach:[25,150],radius:[.38,1.05],height:.64,swerve:.12,lean:.22,flow:1.6,rows:14,cols:64,body:[0,.52,.88],deep:[0,.22,.8],alpha:.85},walls:{hole:.2,holeFade:[5,13],light:.62,drift:.35,caustic:.95,causticScale:1.7,lowGlow:.5,lavender:.1,streaks:.55,glints:.9,glowFrom:[3,12],glowMix:.75,lit:[0,.42,1],cyanLit:[.1,.82,1],swirlCol:[.12,.85,1],ringCol:[.3,.85,1],midCol:[.05,.72,1],vband:.85,warmRing:0,warmAt:14,midRing:0,farMix:.55,glintCut:.965,shade:[.02,.16,.72],metal:.12,twist:.35,flow:.9,swirl:.55,ringStep:1.15,rings:.55,foam:.8},flangeVary:{dim:.5,patch:.85,lavender:.12},waterTint:{amount:.85,deep:[0,.3,.95],bright:[0,.8,.95],slideFrom:[-9,-4]},wake:{speedLen:.6,swing:.16,tilt:.1,land:.7},layout:{coinLines:[[0,4.6,1,1,.75,0],[1,5.6,2,1,.8,0]],firstSock:[2,2.8],extraGem:[2,5]},hideFoamBubbles:!0,hideCrestCards:!0,round5:{camera:{off:[0,.75,-3],lookY:2.2,fov:72},vortex:{bands:1,twist:.12,warp:.6,crestLine:.45,lip:.2,ribs:.3,foam:.4,streaks:.28,deep:[0,.02,.3],body:[0,.3,1],cyan:[.3,.9,1],rainbow:.18,farMix:.45,violet:.5},water:{middle:[0,.7,.95],side:[0,.2,.85],mix:.92,crest:.8,froth:.55,churn:.4},bloom:{strength:.42,radius:.55,threshold:.95},grade:{contrast:1.2,saturation:1.35},contact:{radius:.45,height:.66},spray:{rate:650,size:[.03,.1]},heart:{core:1,halo:.6},softBubbles:{count:20,big:0,size:[.03,.11]},bubbles:{r:[.03,.19],x:[.75,1.7]}}};Ne.rich={walls:{glintCut:.935,glints:1.5,shade:[0,.1,.62],twist:.6,swirl:.7,rings:.7,foam:1,lavender:.08,midRing:.8,farMix:.3,glowMix:.6},waterTint:{amount:.95,bright:[0,.85,1]},porthole:{goldColor:16770447,goldGlow:9071130},bowWave:{body:[0,.6,.95],deep:[0,.28,.9]},round5:{grade:{contrast:1.45,saturation:1.35},bloom:{strength:.32,radius:.5,threshold:1.15},softBubbles:{count:34,size:[.04,.17]},bubbles:{count:90,r:[.035,.27],x:[.7,1.9]},droplets:{count:1600,size:[.025,.085],scale:700,maxPx:18}}};mE&&go(Ne,Ne.rich);Ne.r7={walls:{shade:[0,.05,.5],lit:[0,.3,.95],cyanLit:[.1,.65,1],swirlCol:[0,.78,1],ringCol:[.15,.75,1],midCol:[.3,.55,1],rings:.15,ringStep:3.2,midRing:.25,swirl:.85,twist:1.2,foam:1.6,lavender:0,glowMix:.4,farMix:.35,vband:.1,warmRing:1,warmAt:13,glintCut:.85,glints:2.2,streaks:.85},flanges:{goldEvery:1,every:4.6,jitter:.6,face:[0,.2,.6],deep:[0,.1,.36],cyan:[.4,.75,1.05]},flangeVary:{lavender:0,dim:.25,patch:1},porthole:{bezel:{outer:2.47,front:-.42},step:{hide:!0},sealColor:677336,sealGlow:404080,goldColor:16762992,goldGlow:10120210,goldRough:.1,goldEnv:2.4,faceGloss:.85,lemon:.25,lavender:[.8,.76,.96],lilac:[.97,.94,1],shade:[.55,.5,.76]},layout:{coinLines:[[2,1.9,1,1,.5,0],[0,2.7,1,1,.6,0],[0,5.2,1,1,1.35,0],[1,7.4,1,1,.9,0],[2,13,1,1,.55,0],[1,12,3,1,.72,0]],replace:3,firstSock:[2,3.3],extraGem:[0,4.4]},deco:[[3.3,1,48,.66,2.3],[4.4,-1,14,.8]],coin:{color:[1,1.24,.42],glow:.75,lemon:.6},round5:{droplets:{scale:950,maxPx:22},bloom:{strength:.45,radius:.5,threshold:.9},grade:{contrast:1.4,saturation:1.2}},warmLight:{at:[.9,.8],radius:.3,color:[1,.7,.6],amount:.3},hudEarly:4.6,whirl:{perLog:2.4,flow:.25,spiral:1,wobble:.5,arcs:3.2,crestW:.14,troughW:.28,trough:1,crest:1,troughCol:[0,.1,.28],crestCol:[.75,.9,1],lilacCol:[.8,.68,1],flecks:1,fleckCut:.5,fleckA:14,fleckU:8,fleckFar:[16,30],pale:.65,paleFrom:[8,18],paleTint:.4,troughFade:.4,lip:.85,lipLen:1.2},glow:{ahead:11,radius:3.2,lift:0,core:1,ring:.85,ringAt:.45,arms:.5,alpha:.9}};yn&&(go(Ne,Ne.r7),go(Ne,Rn.round6||{}));ns&&go(Ne,dn.round6);{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round6;i&&go(Ne,i)}function go(i,e){for(let t of Object.keys(e))e[t]&&typeof e[t]=="object"&&!Array.isArray(e[t])&&i[t]?go(i[t],e[t]):i[t]=e[t];return i}function wm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,env:a,waterSheets:l,drumSheet:c,fogAnchor:u}){let h=t.tunnelStart,d=t.tunnelEnd,f=n.WATER+n.AXIS_H,p={};for(let g of["r5Entrance","r4GlowRings"]){let m=i.getObjectByName(g);m&&(m.visible=!1)}p.porthole=PE({scene:i,TR:e,TS:h,axisH:f,env:a,time:o}),p.flanges=LE({scene:i,TR:e,TS:h,TE:d,axisH:f,env:a,time:o}),p.walls=EE({scene:i,time:o,TS:h}),p.waterTint=SE({waterSheets:l,drumSheet:c,fogAnchor:u,TS:h});let v=yE({L:t,W:n,mascot:s,updaters:r});if(p.bowWave=AE({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,motion:v}),p.wake=bE({scene:i,mascot:s,updaters:r,motion:v}),yn&&(p.r7water=mm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,motion:v})),yn&&Ne.glow&&(p.r7glow=gE({scene:i,TR:e,L:t,mascot:s,updaters:r,time:o,axisH:f})),Ne.hideFoamBubbles){let g=i.getObjectByName("r4FoamBubbles");g&&r.push(()=>{g.visible=!1}),p.foamBubblesHidden=!!g}if(Ne.hideCrestCards){let g=i.getObjectByName("r5Crests");g&&r.push(()=>{g.visible=!1}),p.crestCardsHidden=!!g}return ns&&(p.hero=ym({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,waterSheets:l,drumSheet:c,fogAnchor:u})),p}function gE({scene:i,TR:e,L:t,mascot:n,updaters:s,time:r,axisH:o}){let a=Ne.glow,l=t.tunnelStart,c={uTime:r,uFade:{value:0},uCore:{value:a.core},uRing:{value:a.ring},uArms:{value:a.arms},uRingAt:{value:a.ringAt},uAlpha:{value:a.alpha}},u=new Ue({uniforms:c,vertexShader:vE,fragmentShader:xE,transparent:!0,depthWrite:!1}),h=new Te(new Wt(2,2),u);h.name="r7Glow",h.frustumCulled=!1,h.visible=!1,h.renderOrder=3,h.onBeforeRender=(f,p,v)=>{h.quaternion.copy(v.quaternion),h.updateMatrixWorld()},i.add(h);let d={P:new w,R:new w,U:new w,T:new w};return s.push(()=>{let f=Math.min(n.z+a.ahead,t.tunnelEnd-1),p=_e.smoothstep(n.z,l+Ne.inside[0],l+Ne.inside[1])*(1-_e.smoothstep(n.z+a.ahead,t.tunnelEnd-4,t.tunnelEnd+2));h.visible=p>.001,c.uFade.value=p,h.visible&&(e.frame(f,d),h.position.copy(d.P).addScaledVector(d.U,o+a.lift),h.scale.setScalar(a.radius))}),{ahead:a.ahead,radius:a.radius}}var vE="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",xE=`
uniform float uTime, uFade, uCore, uRing, uArms, uRingAt, uAlpha; varying vec2 vUv;
float gh(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x), lr = log(max(r, 0.02));
  float core = exp(-r * r / 0.035);                                                        // the near-white warm centre
  float ring = exp(-pow((r - uRingAt) / 0.17, 2.0));                                        // the pastel ring round it
  vec3 pastel = 0.68 + 0.32 * cos(6.2832 * (a / 6.2832 + vec3(0.0, 0.33, 0.67) - uTime * 0.05));
  pastel = mix(pastel, vec3(1.0, 0.8, 0.64), 0.35 * (0.5 + 0.5 * sin(a * 2.0 + uTime * 0.3)));   // peach drifting round it
  float arm = smoothstep(0.45, 0.95, 0.5 + 0.5 * sin(a * 3.0 + lr * 5.5 - uTime * 1.6)) * exp(-r * 2.0) * smoothstep(0.08, 0.3, r);
  vec2 g = vec2(a * 9.0, lr * 7.0 - uTime * 1.2), c = floor(g);
  float fleck = step(0.7, gh(c)) * (1.0 - smoothstep(0.08, 0.3, length((fract(g) - 0.5) * vec2(0.6, 1.4)))) * smoothstep(0.1, 0.35, r);
  vec3 col = vec3(1.0, 0.97, 0.93) * core * uCore + pastel * ring * uRing + vec3(0.88, 0.96, 1.0) * arm * uArms + vec3(1.0) * fleck;
  float al = clamp(core * uCore + ring * uRing * 0.85 + arm * uArms * 0.7 + fleck * 0.9 + exp(-r * r / 0.2) * 0.35, 0.0, 1.0);
  al *= (1.0 - smoothstep(0.7, 1.0, r)) * uFade * uAlpha;
  gl_FragColor = vec4(col / max(max(col.r, max(col.g, col.b)), 1.0), al);
}
`;function yE({L:i,W:e,mascot:t,updaters:n}){let s={lat:0,speed:0,lift:0,landing:0,ride:0},r=!1;return n.push(o=>{o=o||0,s.ride=e.baseHeight?e.baseHeight(i,t.x,t.z):e.WATER,s.lift=Math.max(0,t.yAbs-s.ride-e.FLOAT_H),r&&!t.air&&(s.landing=1),r=t.air,s.landing=Math.max(0,s.landing-o*2.2),s.lat+=((t.xv||0)-s.lat)*(1-Math.exp(-o/.12)),s.speed+=((t.speed||0)-s.speed)*(1-Math.exp(-o/.3))}),s}function bE({scene:i,mascot:e,updaters:t,motion:n}){let s=Ne.wake,r=i.getObjectByName("r5Contact");if(!r||r.children.length<2)return null;let[o,a]=r.children,l=wE(o,a),c=a.material.uniforms;return a.material=new Ue({uniforms:c,vertexShader:a.material.vertexShader,fragmentShader:_E,transparent:!0,depthWrite:!1,side:qe}),t.push(()=>{if(!r.visible)return;let u=n,h=_e.clamp(u.speed/7,0,1.6),d=_e.clamp(-u.lat*s.swing,-.5,.5);o.scale.set(l.discS.x*(1+u.landing*s.land),1,l.discS.z*(.75+s.speedLen*h)),o.rotation.y=d,o.position.set(Math.sin(d)*l.discP.z,l.discP.y,l.discP.z*Math.cos(d)),a.rotation.z=_e.clamp(-u.lat*s.tilt,-.3,.3);let f=1+u.landing*s.land;a.scale.set(f,Math.max(.35,1-u.landing*.4),f),c.uFade.value*=1-_e.smoothstep(u.lift,.1,.6)*.85}),{speedLen:s.speedLen,swing:s.swing}}var _E=`
${Rt}
uniform float uTime, uFade; varying vec2 vUv;
void main() {
  float h = vUv.y;                                                          // 0 at the waterline, 1 at the collar's top
  float n = bwFbm(vec2(vUv.x * 18.0 + uTime * 0.6, h * 3.0 - uTime * 2.2)), n2 = bwFbm(vec2(vUv.x * 40.0 - uTime, h * 6.0 - uTime * 3.0));
  float top = 0.5 + 0.45 * n;                                               // ragged, churning top edge
  if (h > top) discard;
  float crest = smoothstep(top - 0.2, top - 0.03, h + 0.1 * n2);            // white only along the top
  float streak = smoothstep(0.66, 0.85, n2) * (1.0 - crest);
  vec3 water = mix(vec3(0.0, 0.3, 0.92), vec3(0.0, 0.78, 0.95), smoothstep(0.0, 0.7, h) * (0.6 + 0.4 * n));
  vec3 col = mix(water, vec3(1.0), clamp(crest + streak * 0.35, 0.0, 1.0));
  float a = mix(0.62, 0.95, crest) * smoothstep(0.0, 0.08, h + 0.02) * uFade;
  gl_FragColor = vec4(col, a);
}`;function wE(i,e){return{discS:i.scale.clone(),discP:i.position.clone(),collarS:e.scale.clone()}}function EE({scene:i,time:e,TS:t}){let n=i.getObjectByName("r5Vortex");return n?(n.material=new Ue({uniforms:{uTime:e,uStart:{value:t}},vertexShader:n.material.vertexShader,fragmentShader:TE,side:qe}),n.name="r6Walls",{replaced:"r5Vortex"}):null}function ME(i){let e=n=>n.map(s=>s.toFixed(3)).join(", "),t=n=>n.toFixed(3);return`  { // ?s3=round7: the whirlpool
    float wIn = smoothstep(uStart + 0.05, uStart + 0.3, u);
    float pk = smoothstep(${t(i.paleFrom[0])}, ${t(i.paleFrom[1])}, vDepth);
    vec3 pastel = mix(vec3(0.8, 0.88, 1.0), 0.7 + 0.3 * cos(6.2832 * (a / 6.2832 * 2.0 + vec3(0.0, 0.33, 0.67) + uTime * 0.04)), ${t(i.paleTint)});
    col = mix(col, pastel * (0.85 + 0.3 * w2), pk * ${t(i.pale)} * wIn);
    float wsp = log(max(vDepth, 0.5)) * ${t(i.perLog)} + a / 6.2832 * ${t(i.spiral)} + ${t(i.wobble)} * (w1 - 0.5) - uTime * ${t(i.flow)};   // a log spiral: evenly spaced on screen, drawn inward
    float wk = fract(wsp), wi = floor(wsp), wr = fract(sin(wi * 17.13 + 3.1) * 4375.85);
    float arcs = smoothstep(0.32, 0.72, bwFbm(vec2(a * ${t(i.arcs)} + wi * 5.3 - uTime * 0.7, wsp * 2.3 + wi)));
    float crest = exp(-pow((wk - 0.55) / ${t(i.crestW)}, 2.0)) * (0.6 + 0.4 * wr);
    float trough = exp(-pow((wk - 0.12) / ${t(i.troughW)}, 2.0)) + exp(-pow((wk - 1.12) / ${t(i.troughW)}, 2.0));
    col = mix(col, vec3(${e(i.troughCol)}) * (0.8 + 0.4 * w2), clamp(trough * ${t(i.trough)} * (1.0 - ${t(i.troughFade)} * pk), 0.0, 1.0) * wIn);
    col = mix(col, vec3(${e(i.troughCol)}) * (0.85 + 0.3 * w2), ${t(i.lip)} * exp(-(u - uStart) / ${t(i.lipLen)}) * wIn);   // the cobalt shadow just inside the rim
    vec3 crestC = mix(vec3(${e(i.crestCol)}), vec3(${e(i.lilacCol)}), step(0.62, wr));
    col = mix(col, crestC, clamp(crest * (0.3 + 0.7 * arcs) * ${t(i.crest)}, 0.0, 1.0) * wIn);
    vec2 fg = vec2(a * ${t(i.fleckA)}, (u - uStart) * ${t(i.fleckU)} - uTime * 1.3), fc = floor(fg);
    float fh = h21(fc + 11.0), fh2 = h21(fc + 37.0), fh3 = h21(fc + 53.0);
    vec2 fq = fract(fg) - vec2(0.3 + 0.4 * fh2, 0.3 + 0.4 * fh3);   // short dashes round the drum, scattered in their cells
    float fleck = (1.0 - smoothstep(0.12, 0.3, abs(fq.x))) * (1.0 - smoothstep(0.05, 0.16, abs(fq.y)));
    float fleckK = step(${t(i.fleckCut)}, fh) * (0.35 + 0.65 * max(crest, arcs * 0.6)) * (1.0 - smoothstep(${t(i.fleckFar[0])}, ${t(i.fleckFar[1])}, vDepth));
    col = mix(col, vec3(1.0, 0.99, 1.0), clamp(fleck * fleckK * ${t(i.flecks)}, 0.0, 1.0) * wIn);
  }
`}var TE=`
${Rt}
uniform float uTime, uStart;
varying vec2 vAU; varying float vDepth;
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  float a = vAU.x, u = vAU.y, s = a * 2.0;                       // s: metres round the wall (radius 2)
  float up = sin(a);                                              // 1 at the top, about -0.75 at the water's edge
  // broad, uneven light: big still patches, and slower brighter light drifting down the tube (no repeating bands)
  float broad = bwFbm(vec2(a * 0.9 + 7.0, u * 0.22));
  float drift = bwFbm(vec2(a * 1.4 - uTime * 0.2, u * 0.33 - uTime * ${Ne.walls.drift.toFixed(2)}));
  float light = ${Ne.walls.light.toFixed(2)} * (0.45 + broad) + 0.4 * drift;
  // pass 3 (the exact target board): the walls are glowing water, not dark metal: royal blue in the deepest shade, electric
  // blue, and bright turquoise where the light falls (pass 2's deep blue-black shadows made the tunnel too dark)
  vec3 col = mix(vec3(${Ne.walls.shade.join(", ")}), vec3(${Ne.walls.lit.join(", ")}), clamp(light, 0.0, 1.0));
  col = mix(col, vec3(${Ne.walls.cyanLit.join(", ")}), smoothstep(0.75, 1.2, light) * 0.6);
  // layered panels between the flanges: lit toward the front of each, a soft shadow just behind each flange
  float sec = fract((u - uStart - ${Ne.flanges.from.toFixed(2)}) / ${Ne.flanges.every.toFixed(2)});
  col *= 0.82 + 0.3 * smoothstep(0.03, 0.3, sec) * (1.0 - smoothstep(0.6, 1.0, sec));
  col *= 1.0 - 0.3 * exp(-pow((sec - 0.03) / 0.06, 2.0));
  // the water film over the walls: water swirling round the drum as it rushes toward the rider (a spiral), bright turquoise
  // swirls, and soft glowing ring layers of uneven brightness (the target's layered rings, not identical neon hoops)
  vec2 fp = vec2(a + u * ${Ne.walls.twist.toFixed(2)} - uTime * 0.35, u * 0.5 - uTime * ${Ne.walls.flow.toFixed(2)});
  float w1 = bwFbm(fp * vec2(2.0, 1.4)), w2 = bwFbm(fp * vec2(4.5, 3.0) + 7.0);
  col = mix(col, vec3(${Ne.walls.swirlCol.join(", ")}), smoothstep(0.55, 0.85, w1 * 0.7 + w2 * 0.5) * ${Ne.walls.swirl.toFixed(2)});
  float ringP = (u - uStart) / ${Ne.walls.ringStep.toFixed(2)} + 0.25 * w1, ringK = fract(ringP), ringI = floor(ringP);
  float ringB = fract(sin(ringI * 41.31) * 9134.7);                                         // each ring layer its own brightness
  float ringGlow = exp(-pow((ringK - 0.5) / 0.16, 2.0)) * (0.35 + 0.65 * ringB) * (0.6 + 0.6 * smoothstep(0.3, 0.7, bwNoise(vec2(a * 1.7 + ringI, uTime * 0.4))));
  col += vec3(${Ne.walls.ringCol.join(", ")}) * ringGlow * ${Ne.walls.rings.toFixed(2)};
  float ridge = 1.0 - abs(2.0 * bwFbm(fp * vec2(3.0, 2.2) + 3.0) - 1.0);                  // white foam filaments in the swirl
  col = mix(col, vec3(0.93, 0.99, 1.0), clamp(smoothstep(0.86, 0.97, ridge) * 0.7 + smoothstep(0.7, 0.86, w2) * smoothstep(0.45, 0.7, w1) * 0.45, 0.0, 1.0) * ${Ne.walls.foam.toFixed(2)});
  col = mix(col, vec3(1.0), exp(-pow((up + 0.72) / 0.09, 2.0)) * smoothstep(0.35, 0.65, w2) * 0.8);   // foam where the wall meets the water
  // perforated drum metal: staggered round dimples, dark inside, the rim facing the light catching it
  vec2 gp = vec2(s, u) / ${Ne.walls.hole.toFixed(3)}; gp.x += 0.5 * mod(floor(gp.y), 2.0);
  vec2 f = fract(gp) - 0.5; float d = length(f);
  float holeK = 1.0 - smoothstep(${Ne.walls.holeFade[0].toFixed(1)}, ${Ne.walls.holeFade[1].toFixed(1)}, vDepth);
  float hole = (1.0 - smoothstep(0.16, 0.21, d)) * holeK, rim = smoothstep(0.17, 0.21, d) * (1.0 - smoothstep(0.23, 0.3, d)) * smoothstep(0.0, -0.3, f.y) * holeK;
  float holeVar = 0.45 + 0.55 * smoothstep(0.3, 0.7, bwNoise(vec2(s * 0.7, u * 0.5)));   // worn in places, crisp in others
  col = col * (1.0 - ${Ne.walls.metal.toFixed(2)} * hole * holeVar) + vec3(0.2, 0.55, 1.0) * rim * 0.2 * holeVar * (0.4 + light);   // drum metal faint under the water
  // turquoise water light on the walls: a moving caustic web, strongest low down near the water, coming and going in patches
  vec2 cw = vec2(s * 1.5, u * 1.05 - uTime * 0.85) * ${Ne.walls.causticScale.toFixed(2)} + vec2(0.6 * bwNoise(vec2(u * 0.6, uTime * 0.35)), 0.0);
  vec2 cv = bwVoronoi(cw); float web = 1.0 - smoothstep(0.0, 0.07, cv.y - cv.x);
  float low = 1.0 - smoothstep(-0.6, 0.85, up);
  float patchW = smoothstep(0.3, 0.75, bwFbm(vec2(a * 1.6 + uTime * 0.25, u * 0.45 - uTime * 0.7)));
  col += vec3(0.05, 0.85, 0.95) * web * (0.25 + 0.9 * low) * (0.25 + 1.0 * patchW) * ${Ne.walls.caustic.toFixed(2)};
  col += vec3(0.0, 0.42, 0.62) * low * ${Ne.walls.lowGlow.toFixed(2)} * (0.6 + 0.5 * drift);                 // light bouncing up off the water
  col += vec3(0.24, 0.1, 0.42) * smoothstep(0.25, 1.0, up) * (0.35 + 0.65 * broad) * ${Ne.walls.lavender.toFixed(2)};   // lavender, up top
  // sparse white streaks of water swirling round the drum, and twinkling star glints
  // thin arcs round the drum (stretched round the circumference, narrow along the tube), as the approved swirling water lines
  float st = smoothstep(0.72, 0.9, bwFbm(vec2(a * 1.1 + u * 0.15 - uTime * 0.9, u * 3.4 - uTime * 1.1))) * smoothstep(0.35, 0.65, bwNoise(vec2(a * 2.0, u * 0.4 - uTime * 0.3)));
  col = mix(col, vec3(0.86, 0.97, 1.0), st * ${Ne.walls.streaks.toFixed(2)});
  vec2 g2 = vec2(a * 22.0, u * 2.8 - uTime * 0.6), c2 = floor(g2); float hs = h21(c2);
  vec2 q2 = fract(g2) - 0.5; float star = (1.0 - smoothstep(0.0, 0.04, abs(q2.x))) * (1.0 - smoothstep(0.05, 0.4, abs(q2.y))) + (1.0 - smoothstep(0.0, 0.04, abs(q2.y))) * (1.0 - smoothstep(0.05, 0.4, abs(q2.x)));
  col += vec3(0.9, 1.0, 1.0) * step(${Ne.walls.glintCut.toFixed(3)}, hs) * star * (0.55 + 0.45 * sin(uTime * 4.0 + hs * 50.0)) * ${Ne.walls.glints.toFixed(2)};
  // the lavender metal shell up to the mouth and the violet band just inside it: exactly round5's (the approved entrance)
  { float door = 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u);
    float brushed = 0.82 + 0.18 * bwNoise(vec2(a * 40.0, u * 2.0)), sheen = pow(max(0.0, sin(a)), 6.0);
    vec3 lav = vec3(0.62, 0.55, 0.92) * brushed + vec3(0.35, 0.3, 0.45) * sheen + vec3(0.2, 0.12, 0.3) * smoothstep(0.4, 0.0, u - uStart + 0.4);
    float vband = smoothstep(uStart, uStart + 0.05, u) * (1.0 - smoothstep(uStart + 0.30, uStart + 0.35, u));
    col = mix(col, vec3(0.5, 0.28, 1.0) * 0.95, vband * ${Ne.walls.vband.toFixed(2)});
    col = mix(col, lav, door); }
  // luminous depth: the near walls keep their deep shadows, and down the tube the drum brightens into the approved picture's
  // glowing cyan-turquoise centre (measured: with the heart only beyond 18 m the middle distance stayed deep royal blue and
  // the centre's colour difference to the approved doubled), then to the white-cyan heart far away
  float mid = smoothstep(${Ne.walls.glowFrom[0].toFixed(1)}, ${Ne.walls.glowFrom[1].toFixed(1)}, vDepth);
  float midRing = 1.0 - ${Ne.walls.midRing.toFixed(2)} + ${Ne.walls.midRing.toFixed(2)} * (0.35 + 1.7 * ringGlow + 0.6 * smoothstep(0.86, 0.97, ridge));   // rich: rings keep their contrast in the glow
  col = mix(col, col * 0.5 + vec3(${Ne.walls.midCol.join(", ")}) * (0.75 + 0.35 * drift) * midRing + vec3(0.3, 0.95, 1.0) * web * 0.4, mid * ${Ne.walls.glowMix.toFixed(2)});   // pass 3: toward cyan
  float far = smoothstep(16.0, 36.0, vDepth);
  col = mix(col, mix(vec3(0.45, 0.88, 1.0), vec3(1.0, 0.98, 1.0), 0.35 + 0.4 * broad), far * ${Ne.walls.farMix.toFixed(2)});
  // a warm peach and pastel-rainbow glow ring round the bright centre (the original's whirlpool heart)
  col += mix(vec3(1.0, 0.72, 0.55), 0.6 + 0.4 * cos(6.2832 * (a / 6.2832 + vec3(0.0, 0.33, 0.67) + uTime * 0.05)), 0.4) * exp(-pow((vDepth - ${Ne.walls.warmAt.toFixed(1)}) / 3.0, 2.0)) * ${Ne.walls.warmRing.toFixed(2)};
${yn&&Ne.whirl?ME(Ne.whirl):""}  gl_FragColor = vec4(col, 1.0);
}
`;function SE({waterSheets:i,drumSheet:e,fogAnchor:t,TS:n}){let s=Ne.waterTint,r=[],o=c=>`  {   // ?s3=round6: saturated turquoise-blue water kept under the white wherever it is not foam
    float r6Lum = dot(lit, vec3(0.299, 0.587, 0.114));
    vec3 r6Water = mix(vec3(${s.deep.join(", ")}), vec3(${s.bright.join(", ")}), smoothstep(0.25, 0.85, r6Lum)) * (0.7 + 0.55 * r6Lum);
    float r6Keep = (1.0 - smoothstep(0.3, 0.75, foam)) * (${c}) * ${s.amount.toFixed(3)};
    lit = mix(lit, r6Water, r6Keep);
  }
`,a=(c,u)=>{let h=c.material;return!h||!h.fragmentShader||!h.fragmentShader.includes(t)||!h.fragmentShader.includes("vec3 lit")?!1:(h.fragmentShader=h.fragmentShader.replace(t,o(u)+t),h.needsUpdate=!0,!0)};e&&a(e,"inDrum")&&r.push("drum");let l=(i||[]).find(c=>c!==e);if(l&&l.material){let c=l.material,u=c.clone();u.uniforms=c.uniforms,l.material=u,a(l,`smoothstep(${(n+s.slideFrom[0]).toFixed(2)}, ${(n+s.slideFrom[1]).toFixed(2)}, xz.y)`)&&r.push("slide")}return{sheets:r}}function AE({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,motion:a}){let l=Ne.bowWave,c=l.rows,u=l.cols,h=[],d=[],f=[],p=[];for(let E of[-1,1]){let A=h.length/3;for(let C=0;C<=c;C++)for(let M=0;M<=u;M++)h.push(0,0,0),d.push(M/u,C/c),f.push(E);for(let C=0;C<c;C++)for(let M=0;M<u;M++){let _=A+C*(u+1)+M;p.push(_,_+1,_+u+1,_+1,_+u+2,_+u+1)}}let v=new Ze;v.setAttribute("position",new We(h,3)),v.setAttribute("uv",new We(d,2)),v.setAttribute("aSide",new We(f,1)),v.setIndex(p);let g={uTime:o,uFade:{value:0},uAmp:{value:1},uReach:{value:new ae(...l.reach).multiplyScalar(Math.PI/180)},uRad:{value:new ae(...l.radius)},uH:{value:l.height},uLean:{value:l.lean},uFlow:{value:l.flow},uLat:{value:0},uBody:{value:new re(...l.body)},uDeep:{value:new re(...l.deep)},uAlpha:{value:l.alpha}},m=new Ue({uniforms:g,vertexShader:RE,fragmentShader:CE,transparent:!0,depthWrite:!1,side:qe}),x=new Te(v,m);x.name="r6BowWave",x.frustumCulled=!1,x.renderOrder=6,x.visible=!1,i.add(x);let y={P:new w,R:new w,U:new w,T:new w},b=new w,R=new Se;return r.push(()=>{let E=_e.smoothstep(s.z,t.tunnelStart-7,t.tunnelStart-4);if(x.visible=E>.01,!x.visible)return;let A=a;g.uLat.value=A.lat,g.uAmp.value=(1+Math.abs(A.lat)*l.swerve*4+A.landing*.9)*(1-_e.smoothstep(A.lift,.05,.45)),g.uFade.value=E,e.frame(s.z,y),e.map(s.x,A.ride,s.z,b),x.position.copy(b),R.makeBasis(y.R,y.U,y.T),x.quaternion.setFromRotationMatrix(R)}),{rows:c,cols:u,triangles:p.length/3}}var RE=`
${Rt}
attribute float aSide; uniform float uTime, uAmp, uH, uLean, uFlow, uLat; uniform vec2 uReach, uRad;
varying vec2 vUv; varying float vSide; varying vec3 vW; varying vec3 vN;
void main() {
  float t = uv.x, v = uv.y;
  float phi = aSide * mix(uReach.x, uReach.y, t);                      // from just in front of the character round its side to behind it
  float r = mix(uRad.x, uRad.y, t);
  // the crest rises fast from the bow, peaks beside the character and trails off behind; the swerve side throws a taller sheet
  float swerve = 1.0 + clamp(aSide * uLat * 0.35, -0.4, 0.8);
  float h = uH * uAmp * swerve * pow(max(sin(3.14159 * pow(t, 0.55)), 0.0), 1.2) * (0.8 + 0.35 * bwNoise(vec2(t * 6.0 - uTime * uFlow, aSide * 3.0 + uTime * 0.7)));
  float lean = uLean * v * v * (0.6 + 0.4 * t);                         // the top curls outward
  float rr = r + lean;
  vec3 p = vec3(sin(phi) * rr, h * v, cos(phi) * rr);
  vUv = uv; vSide = aSide;
  vec3 tang = vec3(cos(phi), 0.0, -sin(phi)) * aSide, up = vec3(sin(phi) * uLean * 2.0 * v, max(h, 0.01), cos(phi) * uLean * 2.0 * v);
  vN = normalize(mat3(modelMatrix) * cross(tang, up));
  vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,CE=`
${Rt}
uniform float uTime, uFade, uFlow, uAlpha; uniform vec3 uBody, uDeep;
varying vec2 vUv; varying float vSide; varying vec3 vW; varying vec3 vN;
void main() {
  float t = vUv.x, v = vUv.y;
  vec2 q = vec2(t * 9.0 - uTime * uFlow * 1.3, v * 2.5 + vSide * 4.0);
  float n = bwFbm(q), n2 = bwFbm(q * 2.7 + vec2(uTime * 0.9, 0.0));
  float edge = 0.62 + 0.3 * n;                                          // the ragged top edge: foam fingers, not a clean line
  if (v > edge + 0.12 * n2) discard;
  float foam = smoothstep(edge - 0.24, edge - 0.03, v + 0.12 * n2);     // a thick white foam crest along the top; clear water below
  float streak = smoothstep(0.62, 0.8, bwFbm(vec2(t * 22.0 - uTime * uFlow * 2.2, v * 3.0)));   // white streaks running back
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (!gl_FrontFacing) N = -N;
  float fres = pow(1.0 - abs(dot(N, V)), 2.0);
  // clear turquoise, a little lit at grazing angles (the sheets are mostly seen edge-on, so a strong rim light turned them white)
  vec3 water = mix(uDeep, uBody, 0.35 + 0.65 * v) + vec3(0.3, 0.85, 1.0) * fres * 0.15;
  vec3 col = mix(water, vec3(1.0), clamp(foam + streak * 0.45 * (1.0 - foam), 0.0, 1.0));
  float fadeEnds = smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.82, 1.0, t)) * smoothstep(0.0, 0.12, v + 0.06);
  float a = mix(0.62 + 0.3 * fres, 0.97, foam) * uAlpha * fadeEnds * uFade;
  gl_FragColor = vec4(col, a);
}
`;function mc(i,e=[0,360],t=160){let n=_e.degToRad(e[0]),s=_e.degToRad(e[1]),r=i.length,o=[],a=[],l=[];for(let u=0;u<=t;u++){let h=n+(s-n)*u/t,d=Math.cos(h),f=Math.sin(h);for(let p=0;p<r;p++){let[v,g]=i[p];o.push(d*v,f*v,g),a.push(u/t,p/(r-1))}}for(let u=0;u<t;u++)for(let h=0;h<r-1;h++){let d=u*r+h;l.push(d,d+1,d+r,d+1,d+r+1,d+r)}let c=new Ze;return c.setAttribute("position",new We(o,3)),c.setAttribute("uv",new We(a,2)),c.setIndex(l),c.computeVertexNormals(),c}function _m(i,e,t,n,s,r=40){let o=(i+e)/2,a=(t+n)/2,l=(e-i)/2,c=(n-t)/2,u=Math.max(.1,s),h=[];for(let d=0;d<=r;d++){let f=Math.PI*2*d/r,p=Math.cos(f),v=Math.sin(f);h.push([o+l*Math.sign(p)*Math.pow(Math.abs(p),u),a+c*Math.sign(v)*Math.pow(Math.abs(v),u)])}return h}function Em(i,e,t){let n={P:new w,R:new w,U:new w,T:new w};i.frame(e,n);let s=new Se().makeBasis(n.R,n.U,n.T);return s.setPosition(n.P.clone().addScaledVector(n.U,t)),s}function PE({scene:i,TR:e,TS:t,axisH:n,env:s,time:r}){let o=Ne.porthole,a=new $e;a.name="r6Porthole";let l=o.bezel,c=new ot({color:o.goldColor,metalness:1,roughness:o.goldRough,envMap:s||null,envMapIntensity:o.goldEnv,emissive:o.goldGlow,emissiveIntensity:.75});o.lemon>0&&vc(c,o.lemon,"r6BezelLemon");let u=new Te(mc(_m(l.inner,l.outer,l.front,l.back,l.round),[0,360],192),c);u.name="r6Bezel";let h=o.step,d=new ot({color:14192714,metalness:1,roughness:.3,envMap:s||null,envMapIntensity:1.3,emissive:5909e3,emissiveIntensity:.6});o.lemon>0&&vc(d,o.lemon,"r6BronzeLemon");let f=new Te(mc(_m(h.inner,h.outer,h.z-h.depth/2,h.z+h.depth/2,.4),[0,360],160),d);yn&&h.hide&&(f.visible=!1);let p=new Te(new Ot(o.seal.radius,o.seal.tube,16,160),new ot({color:yn&&o.sealColor||1716152,metalness:.2,roughness:.18,envMap:s||null,envMapIntensity:1.2,emissive:yn&&o.sealGlow||660576,emissiveIntensity:.6}));p.position.z=o.seal.z;let v=o.face,g=[];for(let M=0;M<=24;M++){let _=M/24,S=v.inner+(v.outer-v.inner)*_;g.push([S,v.z-v.dish*Math.sin(_*Math.PI*.5)])}let m=new Ue({uniforms:{uTime:r,uIn:{value:v.inner},uOut:{value:v.outer},uLav:{value:new re(...o.lavender)},uLilac:{value:new re(...o.lilac)},uShade:{value:new re(...o.shade)}},vertexShader:IE,fragmentShader:FE,side:qe}),x=new Te(mc(g,[0,360],160),m);x.name="r6Face";let y=o.rivets,b=new Ut(new tn(1,16,10),c,y.count),R=new Se;for(let M=0;M<y.count;M++){let _=(M+.5)/y.count*Math.PI*2,S=y.radius,U=v.z-v.dish*Math.sin((S-v.inner)/(v.outer-v.inner)*Math.PI*.5);R.compose(new w(Math.cos(_)*S,Math.sin(_)*S,U-.02),new _t,new w(y.size,y.size,y.size*.55)),b.setMatrixAt(M,R)}let E=o.rimRivets,A=new Ut(new tn(1,16,10),c,E.count),C=(l.inner+l.outer)/2;for(let M=0;M<E.count;M++){let _=(M+.5)/E.count*Math.PI*2;R.compose(new w(Math.cos(_)*C,Math.sin(_)*C,l.front+.02),new _t,new w(E.size,E.size,E.size*.7)),A.setMatrixAt(M,R)}a.add(x,u,f,p,b,A),a.applyMatrix4(Em(e,t,n));for(let M of a.children)M.frustumCulled=!1;return i.add(a),{bezel:[l.inner,l.outer],face:[v.inner,v.outer],rivets:y.count}}var IE=`
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() { vL = position; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`,FE=`
${Rt}
uniform float uTime, uIn, uOut; uniform vec3 uLav, uLilac, uShade;
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() {
  float r = length(vL.xy), a = atan(vL.y, vL.x), t = clamp((r - uIn) / (uOut - uIn), 0.0, 1.0);
  vec3 col = mix(uLav, uShade, smoothstep(0.15, 1.0, t) * 0.75);                         // lavender, deepening outward
  float grain = 0.9 + 0.1 * bwNoise(vec2(r * 38.0, a * 3.0)) + 0.04 * sin(r * 160.0);       // brushed concentric grain
  col *= grain;
  float sheen = pow(max(0.0, dot(normalize(vL.xy + 0.0001), normalize(vec2(-0.55, 0.85)))), 3.0) * (1.0 - t);   // up and to the left
  col = mix(col, uLilac * 1.15, sheen * ${Ne.porthole.faceGloss.toFixed(2)});
  float bounce = exp(-pow((r - uIn) / 0.35, 2.0));                                           // cyan light from the tunnel
  col += vec3(0.25, 0.7, 1.0) * bounce * (0.45 + 0.15 * sin(a * 6.0 + uTime * 2.0));
  float groove = exp(-pow((r - (uIn + 0.95)) / 0.05, 2.0)) + exp(-pow((r - (uIn + 1.9)) / 0.07, 2.0));   // pressed rings
  col = mix(col, uShade * 0.8, groove * 0.5); col += uLilac * 0.25 * exp(-pow((r - (uIn + 1.0)) / 0.04, 2.0));
  float pa = a / 6.2832 * ${Ne.porthole.panels.toFixed(1)} + 0.5;                     // panel seams (the construction guide)
  float seam = exp(-pow((fract(pa) - 0.5) * r * 6.2832 / ${Ne.porthole.panels.toFixed(1)} / 0.025, 2.0)) * step(uIn + 0.95, r);
  col = mix(col, uShade * 0.7, seam * 0.6); col += uLilac * 0.18 * exp(-pow((fract(pa) - 0.47) * r * 6.2832 / ${Ne.porthole.panels.toFixed(1)} / 0.02, 2.0)) * step(uIn + 0.95, r);
  float lightPanel = smoothstep(0.2, 0.17, abs(a - 1.5708)) * smoothstep(uIn + 0.42, uIn + 0.5, r) * (1.0 - smoothstep(uIn + 0.8, uIn + 0.88, r));
  col = mix(col, vec3(0.75, 0.95, 1.0) * 1.35, lightPanel);                                 // a glowing light panel above the door
  float view = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  col *= 0.75 + 0.35 * view;
  gl_FragColor = vec4(col, 1.0);
}
`;function LE({scene:i,TR:e,TS:t,TE:n,axisH:s,env:r,time:o}){let a=Ne.flanges,l=[];for(let m=t+a.from;m<n+3;m+=a.every)l.push(m);let c=[[a.wall+.05,-a.depth*.5],[a.wall,-a.depth*.5],[a.lip+.08,-a.depth*.42],[a.lip+.02,-a.depth*.3],[a.lip,0],[a.lip+.02,a.depth*.3],[a.lip+.08,a.depth*.42],[a.wall,a.depth*.5],[a.wall+.05,a.depth*.5]],u=mc(c,a.arc,128),h=new Float32Array(l.length),d=new Float32Array(l.length);l.forEach((m,x)=>{h[x]=m,d[x]=x%a.goldEvery===1?1:0}),u.setAttribute("aU",new st(h,1)),u.setAttribute("aGold",new st(d,1));let f=yn&&a.jitter||0,p=m=>{let x=Math.sin(m*91.7)*43758.5453;return x-Math.floor(x)};f&&u.setAttribute("aLipK",new st(Float32Array.from(l,m=>1+f*(2*p(m)-1)),1));let v=new Ue({uniforms:{uTime:o,uFace:{value:new re(...a.face)},uDeep:{value:new re(...a.deep)},uCyan:{value:new re(...a.cyan)},uGold:{value:new re(...a.gold)},uLip:{value:a.lip},uWall:{value:a.wall}},vertexShader:f?NE:UE,fragmentShader:HE,side:qe}),g=new Ut(u,v,l.length);return l.forEach((m,x)=>g.setMatrixAt(x,Em(e,m,s))),g.name="r6Flanges",g.frustumCulled=!1,i.add(g),{count:l.length,every:a.every,triangles:u.index.count/3}}var UE=`
attribute float aU; attribute float aGold; varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  vL = position; vU = aU; vGold = aGold;
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,NE=`
attribute float aU; attribute float aGold; attribute float aLipK; uniform float uWall; varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  vL = position; vU = aU; vGold = aGold;
  vec3 p = position; float rr = length(p.xy); p.xy *= (uWall - (uWall - rr) * aLipK) / max(rr, 1e-3);
  vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,HE=`
${Rt}
uniform float uTime, uLip, uWall; uniform vec3 uFace, uDeep, uCyan, uGold;
varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  float r = length(vL.xy), a = atan(vL.y, vL.x);
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (!gl_FrontFacing) N = -N;
  float facing = clamp(dot(N, V), 0.0, 1.0);
  float toLip = 1.0 - smoothstep(uLip, uLip + 0.14, r);                                   // 1 on the rounded inner lip
  float front = step(vL.z, 0.0);                                                            // the face toward the rider
  vec3 col = mix(uDeep, uFace, (0.35 + 0.65 * facing) * mix(0.55, 1.0, front));
  col += uFace * 0.5 * smoothstep(uWall - 0.08, uWall, r) * front;                          // light catching the outer step
  float up = smoothstep(0.2, 1.0, sin(a));                                                  // lavender reflections on the upper wall
  col = mix(col, col + vec3(0.18, 0.08, 0.32), up * ${Ne.flangeVary.lavender.toFixed(2)});
  float wave = 0.75 + 0.25 * sin(vU * 0.9 - uTime * 3.0);                                   // the glow pulses down the tunnel
  float sheen = pow(1.0 - facing, 2.0);
  // pass 2: every flange different: its own brightness and tint (cyan, turquoise, or an unlit deep-blue lip), and patchy
  // light round it that drifts, so the rings are not a row of identical neon hoops
  float hv = fract(sin(vU * 12.9898) * 43758.5453), ht = fract(sin(vU * 78.233) * 12543.1);
  float patchL = mix(1.0, smoothstep(0.25, 0.8, bwFbm(vec2(a * 2.2 + vU * 3.1 + uTime * 0.25, vU * 0.7 - uTime * 0.4))) * 1.3, ${Ne.flangeVary.patch.toFixed(2)});
  float bright = mix(${Ne.flangeVary.dim.toFixed(2)}, 1.0, hv) * patchL;
  vec3 tint = mix(uCyan, vec3(0.05, 0.95, 0.85), step(0.5, ht)) * bright + uFace * 0.6 * (1.0 - bright);
  vec3 lipCol = mix(tint * (0.8 + 0.5 * sheen), uGold * (1.0 + 0.8 * pow(abs(sin(a * 3.0 + uTime * 0.6)), 6.0)), vGold);
  col = mix(col, lipCol * wave, toLip);
  float caustic = pow(0.5 + 0.5 * sin(a * 14.0 + vU * 2.0 - uTime * 2.6) * sin(a * 9.0 - uTime * 1.7 + vU), 6.0);   // water light
  col += vec3(0.3, 0.8, 1.0) * caustic * 0.35 * front * (1.0 - toLip);
  gl_FragColor = vec4(col, 1.0);
}
`;function vc(i,e,t){let n=i.onBeforeCompile;i.onBeforeCompile=(s,r)=>{n&&n(s,r),s.fragmentShader=s.fragmentShader.replace("#include <tonemapping_fragment>",`{ float lgL = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0, 0.86, 0.26) * lgL * 1.45, ${e.toFixed(3)}); }
  #include <tonemapping_fragment>`)},i.customProgramCacheKey=()=>t,i.needsUpdate=!0}var dt={vortex:{bands:1.6,twist:.05,flow:1.3,deep:[0,.05,.4],body:[0,.45,1],cyan:[.55,1,1],foam:.4,streaks:.2,far:[18,40],farGlow:1,farMix:.55,rainbow:.8,rainbowAt:13,warp:.35,crestLine:1.5,ribs:.45,lip:.55,violet:.75,gold:.8,caustic:.35},camera:{off:[0,1,-2.7],lookY:1.5,fov:64},foam:{white:.6,deep:[.01,.2,.88],aqua:[.12,.58,1]},foamBubbles:{per:2,inner:[.35,.62,1],deep:[.04,.24,.9],bright:1.05},hideFoamHeaps:!0,spray:{rate:450,size:[.03,.09]},grade:{contrast:1.32,saturation:1.4},path:{curve:.3},heart:{ahead:20,radius:3.5,core:1.3,halo:.9,rays:.45},entrance:{rim:1.88,rimTube:.11,inner:1.7,innerTube:.05,violet:.35,lavender:[.62,.55,.92]},hideRings:!1,bloom:{strength:.45,radius:.5,threshold:1.05},droplets:{count:700,near:3,far:22,radius:[.35,1.85],size:[.02,.06],swirl:.35,flow:2.2,scale:420,maxPx:14},bubbles:{count:64,du:[-1.4,14],x:[.3,1.6],h:[.2,2.6],r:[.04,.36],flow:1.6,film:1.7},fur:{shells:8,length:.05,density:260,tip:.5,halo:.45},crests:{spots:[[-1,0,.2,1.1],[1,0,.2,1.1],[-1.45,.05,1.1,1.3],[1.45,.05,1.1,1.3],[-.38,-.18,-.42,.75],[.4,-.18,-.4,.75],[-.85,-.2,-.9,.7],[.85,-.2,-.9,.7]],bob:.05,breathe:.08,opacity:.95},water:{middle:[0,.75,.9],side:[0,.18,.78],mix:.85,crest:.7,froth:1},contact:{radius:.42,height:.5,disc:1.15,wake:2.2,wakeBack:1.1},softBubbles:{count:40,box:[[-1.2,1.2],[0,1.3],[-1,2.2]],size:[.05,.3],big:7,rise:.25,drift:.9}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round5,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};Fi&&e(dt,Ne.round5),i&&e(dt,i)}function Tm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,bloomPass:a}){let l=t.tunnelStart,c=n.WATER+n.AXIS_H,u={},h=Fi?Ne.inside:[-.5,2.5],d=()=>_e.smoothstep(s.z,l+h[0],l+h[1]);if(u.vortex=DE(i,o,l),u.entrance=JE({scene:i,TR:e,TS:l,axisH:c}),dt.hideRings)for(let f of["r4GlowRings","r4GoldRings"]){let p=i.getObjectByName(f);p&&(p.visible=!1)}{let f=i.getObjectByName("r4GoldRings");f&&(f.visible=!1)}if(u.droplets=GE({scene:i,TR:e,mascot:s,updaters:r,time:o,inside:d,axisH:c}),u.heart=OE({scene:i,TR:e,L:t,mascot:s,updaters:r,time:o,inside:d,axisH:c}),u.crests=$E({scene:i,TR:e,W:n,mascot:s,updaters:r,time:o,inside:d}),u.contact=qE({scene:i,TR:e,W:n,mascot:s,updaters:r,time:o,inside:d}),dt.hideFoamHeaps){let f=i.getObjectByName("r3Foam");f&&r.push(()=>{f.visible=!1})}if(u.softBubbles=ZE({scene:i,TR:e,W:n,mascot:s,updaters:r,time:o,inside:d}),a){let f=dt.bloom,p=a.radius,v=a.threshold,g=null;r.push(()=>{let m=d();g===null&&(g={radius:p,threshold:v}),a.strength=a.strength+(f.strength-a.strength)*m,a.radius=g.radius+(f.radius-g.radius)*m,a.threshold=g.threshold+(f.threshold-g.threshold)*m}),u.bloom=f}return u}function DE(i,e,t){let n=i.getObjectByName("r4Lining");if(!n)return null;let s=dt.vortex,r={uTime:e,uStart:{value:t},uDeep:{value:new re(...s.deep)},uBody:{value:new re(...s.body)},uCyan:{value:new re(...s.cyan)}};return n.material=new Ue({uniforms:r,vertexShader:zE,fragmentShader:BE,side:qe}),n.name="r5Vortex",{replaced:"r4Lining"}}var zE=`
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`,BE=`
${Rt}
uniform float uTime, uStart; uniform vec3 uDeep, uBody, uCyan;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float sw = bwFbm(vec2(a * 1.6 + u * 0.25 - uTime * 0.6, u * 0.5 - uTime * 0.3));
  float ph = (u - uStart) * ${dt.vortex.bands.toFixed(3)} + a * ${dt.vortex.twist.toFixed(3)} + sw * ${dt.vortex.warp.toFixed(3)} - uTime * ${dt.vortex.flow.toFixed(3)};
  float band = 0.5 + 0.5 * sin(ph * 6.2832);
  vec3 col = mix(uDeep, uBody, smoothstep(0.1, 0.6, band));                       // deep blue troughs, electric-blue bodies
  col = mix(col, uCyan, smoothstep(0.62, 0.86, band));                            // cyan crests
  col += uCyan * smoothstep(0.9, 0.97, band) * ${dt.vortex.crestLine.toFixed(3)};   // a thin glowing cyan line on each crest
  // the drum's own wall, fixed in place under the flowing water: ribs and occasional violet and gold bands
  float phS = (u - uStart) * ${dt.vortex.bands.toFixed(3)} + a * ${dt.vortex.twist.toFixed(3)}, fiS = floor(phS), frS = fract(phS);
  float lip = smoothstep(0.0, 0.07, frS) * (1.0 - smoothstep(0.07, 0.2, frS)), trough = smoothstep(0.55, 0.95, frS);
  col = col * (1.0 - ${dt.vortex.ribs.toFixed(3)} * trough) + uCyan * lip * ${dt.vortex.lip.toFixed(3)};
  float hv = fract(sin(fiS * 12.9898) * 43758.5453), hg = fract(sin(fiS * 78.233) * 12543.1);
  float vio = step(0.82, hv), gld = step(0.88, hg) * (1.0 - vio), bandM = smoothstep(0.15, 0.3, frS) * (1.0 - smoothstep(0.62, 0.78, frS));
  col = mix(col, vec3(0.55, 0.25, 1.0) * (0.8 + 0.6 * band), vio * bandM * ${dt.vortex.violet.toFixed(3)});
  col = mix(col, vec3(1.0, 0.72, 0.3) * (0.75 + 0.9 * pow(abs(sin(a * 2.0 + uTime * 0.7)), 8.0)), gld * bandM * ${dt.vortex.gold.toFixed(3)});
  float foam = smoothstep(0.84, 0.97, band) * smoothstep(0.35, 0.7, bwFbm(vec2(a * 7.0 - uTime * 0.8, u * 3.0 + uTime * 0.5)));
  float streak = smoothstep(0.7, 0.9, bwFbm(vec2(a * 14.0 + u * 1.5 - uTime * 1.5, u * 0.8)));
  col = mix(col, vec3(1.0), clamp(foam * ${dt.vortex.foam.toFixed(3)} + streak * ${dt.vortex.streaks.toFixed(3)} * band, 0.0, 1.0));
  vec2 g = vec2(a * 26.0, u * 3.5 - uTime * 0.7), c = floor(g);                   // twinkling glints in the water
  vec3 p3 = fract(vec3(c.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); float hs = fract((p3.x + p3.y) * p3.z);
  col += vec3(1.0) * step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.6 + 0.4 * sin(uTime * 5.0 + hs * 40.0));
  { float door = 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u);           // pass A: the lavender metal shell up to the mouth
    float brushed = 0.82 + 0.18 * bwNoise(vec2(a * 40.0, u * 2.0)), sheen = pow(max(0.0, sin(a)), 6.0);
    vec3 lav = vec3(${dt.entrance.lavender.join(", ")}) * brushed + vec3(0.35, 0.3, 0.45) * sheen + vec3(0.2, 0.12, 0.3) * smoothstep(0.4, 0.0, u - uStart + 0.4);
    float vband = smoothstep(uStart, uStart + 0.05, u) * (1.0 - smoothstep(uStart + ${dt.entrance.violet.toFixed(2)} - 0.05, uStart + ${dt.entrance.violet.toFixed(2)}, u));
    col = mix(col, vec3(0.5, 0.28, 1.0) * (0.85 + 0.4 * band), vband * 0.85);
    col = mix(col, lav, door); }
  float far = smoothstep(${dt.vortex.far[0].toFixed(1)}, ${dt.vortex.far[1].toFixed(1)}, vDepth);   // the luminous heart
  vec2 cv = bwVoronoi(vec2(a * 5.0, u * 2.2 - uTime * 0.9));                      // water caustics playing over the wall
  col += vec3(0.35, 0.85, 1.0) * (1.0 - smoothstep(0.0, 0.08, cv.y - cv.x)) * ${dt.vortex.caustic.toFixed(3)} * (1.0 - far);
  col = mix(col, mix(vec3(0.55, 0.85, 1.0), vec3(1.0, 0.97, 1.0), band) * ${dt.vortex.farGlow.toFixed(3)}, far * ${dt.vortex.farMix.toFixed(3)});
  float rb = exp(-pow((vDepth - ${dt.vortex.rainbowAt.toFixed(1)}) / 2.0, 2.0)) * ${dt.vortex.rainbow.toFixed(3)};
  col += (0.5 + 0.5 * cos(6.2832 * (a / 6.2832 * 2.0 + vec3(0.0, 0.33, 0.67) + uTime * 0.1))) * rb * band;   // a pastel rainbow ring
  gl_FragColor = vec4(col, 1.0);
}
`;function OE({scene:i,TR:e,L:t,mascot:n,updaters:s,time:r,inside:o,axisH:a}){let l=dt.heart,c={uTime:r,uFade:{value:0},uCore:{value:l.core},uHalo:{value:l.halo},uRays:{value:l.rays}},u=new Ue({uniforms:c,vertexShader:kE,fragmentShader:VE,transparent:!0,depthWrite:!1,blending:mn,side:qe}),h=new Te(new Wt(2,2),u);h.name="r5Heart",h.frustumCulled=!1,h.visible=!1,h.renderOrder=2,i.add(h);let d={P:new w,R:new w,U:new w,T:new w},f=new Se;return s.push(()=>{let p=Math.min(n.z+l.ahead,t.tunnelEnd-1),v=o()*(1-_e.smoothstep(n.z+l.ahead,t.tunnelEnd+2,t.tunnelEnd+8));h.visible=v>.001,c.uFade.value=v,h.visible&&(e.frame(p,d),h.position.copy(d.P).addScaledVector(d.U,a),f.makeBasis(d.R,d.U,d.T.clone().negate()),h.quaternion.setFromRotationMatrix(f),h.scale.setScalar(l.radius))}),{ahead:l.ahead}}var kE="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",VE=`
uniform float uTime, uFade, uCore, uHalo, uRays; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x);
  float core = exp(-r * r / 0.012) * 1.6 + exp(-r * r / 0.06);                        // a brilliant white core
  float halo = exp(-r * r / 0.25);                                                    // its warm halo
  float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 0.4) * sin(a * 5.0 - uTime * 0.3), 3.0) * exp(-r * 2.2);
  vec3 col = vec3(1.0, 0.98, 0.94) * core * uCore + mix(vec3(1.0, 0.85, 0.55), vec3(1.0, 0.6, 0.85), smoothstep(0.1, 0.5, r)) * halo * uHalo
           + vec3(1.0, 0.92, 0.85) * rays * uRays;
  col *= 1.0 - smoothstep(0.75, 1.0, r);
  gl_FragColor = vec4(col * uFade, 1.0);
}
`;function GE({scene:i,TR:e,mascot:t,updaters:n,time:s,inside:r,axisH:o}){let a=dt.droplets,l=a.count,c=Yd(3440),u=new Float32Array(l*3),h=new Float32Array(l),d=new Float32Array(l),f=new Ze;f.setAttribute("position",new nt(u,3).setUsage(En)),f.setAttribute("aSize",new nt(h,1)),f.setAttribute("aSeed",new nt(d,1));let p=new Ue({uniforms:{uTime:s,uFade:{value:0},uScale:{value:a.scale},uMaxPx:{value:a.maxPx}},vertexShader:WE,fragmentShader:XE,transparent:!0,depthWrite:!1,blending:mn}),v=new xi(f,p);v.name="r5Droplets",v.frustumCulled=!1,v.visible=!1,v.renderOrder=8,i.add(v);let g=R=>R[0]+c()*(R[1]-R[0]),m=[],x=(R,E)=>{R.u=t.z+(E?a.near+c()*(a.far-a.near):a.far-c()*2),R.a=c()*Math.PI*2,R.r=g(a.radius),R.w=(.5+c())*a.swirl*(c()<.5?-1:1)};for(let R=0;R<l;R++){let E={};x(E,!0),m.push(E),h[R]=g(a.size),d[R]=c()}let y=new w,b=!1;return n.push(R=>{let E=r();if(v.visible=E>0,p.uniforms.uFade.value=E,!v.visible){b=!1;return}if(!b){for(let A of m)x(A,!0);b=!0}for(let A=0;A<l;A++){let C=m[A];C.u-=a.flow*R*.3,C.a+=C.w*R,C.u<t.z+a.near-1.5&&x(C,!1);let M=o+Math.sin(C.a)*C.r;M<o-.6&&(C.a=-C.a),e.map(Math.cos(C.a)*C.r,Math.max(M,o-.5),C.u,y),u[A*3]=y.x,u[A*3+1]=y.y,u[A*3+2]=y.z}f.attributes.position.needsUpdate=!0}),{count:l}}var WE=`
attribute float aSize; attribute float aSeed; uniform float uTime, uScale, uMaxPx; varying float vSeed; varying float vTw;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vSeed = aSeed; vTw = 0.55 + 0.45 * sin(uTime * (3.0 + aSeed * 5.0) + aSeed * 30.0);
  gl_PointSize = min(aSize * uScale / max(-mv.z, 0.2), uMaxPx);   // small, sharp glints (big soft ones fogged the view)
  gl_Position = projectionMatrix * mv;
}
`,XE=`
uniform float uFade; varying float vSeed; varying float vTw;
void main() {
  vec2 p = gl_PointCoord - 0.5; float r = length(p);
  float core = 1.0 - smoothstep(0.0, 0.22, r), halo = 1.0 - smoothstep(0.1, 0.5, r);
  float star = (1.0 - smoothstep(0.0, 0.05, abs(p.x))) * (1.0 - smoothstep(0.1, 0.5, abs(p.y))) + (1.0 - smoothstep(0.0, 0.05, abs(p.y))) * (1.0 - smoothstep(0.1, 0.5, abs(p.x)));
  float glint = step(0.8, vSeed) * star * 0.8;
  vec3 col = vec3(0.85, 0.97, 1.0) * (core * 0.9 + halo * 0.12 + glint) * vTw;
  gl_FragColor = vec4(col * uFade, 1.0);
}
`;function qd(i){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=Yd(i),r=(a,l,c,u,h,d)=>{let f=n.createRadialGradient(a-c*.25,l-c*.35,c*.1,a,l,c);f.addColorStop(0,u),f.addColorStop(.55,h),f.addColorStop(1,d),n.fillStyle=f,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()};for(let a=0;a<2;a++)for(let l=0;l<46;l++){let c=s(),u=18+c*220,h=Math.sin(c*Math.PI),d=256*(.78-.42*h*(.6+.4*s()))+(a?10:0),f=10+s()*26*(.5+h*.7);a===0?r(u,d,f*1.1,"rgba(225,240,255,0.95)","rgba(120,185,255,0.9)","rgba(40,110,235,0)"):r(u,d,f,"rgba(255,255,255,1)","rgba(232,244,255,0.97)","rgba(150,200,255,0)")}for(let a=0;a<70;a++){let l=20+s()*216,c=256*(.35+s()*.5),u=2+s()*6;n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=1.2,n.beginPath(),n.arc(l,c,u,0,Math.PI*2),n.stroke(),n.fillStyle="rgba(90,160,255,0.35)",n.beginPath(),n.arc(l,c,u*.8,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.95)",n.beginPath(),n.arc(l-u*.35,c-u*.35,u*.25,0,Math.PI*2),n.fill()}for(let a=0;a<40;a++){let l=20+s()*216,c=256*(.08+s()*.35),u=1+s()*3.5;n.fillStyle="rgba(255,255,255,0.95)",n.beginPath(),n.arc(l,c,u,0,Math.PI*2),n.fill()}let o=new Jn(t);return o.colorSpace=St,o}function $E({scene:i,TR:e,W:t,mascot:n,updaters:s,time:r,inside:o}){let a=dt.crests,l=new $e;l.name="r5Crests",l.visible=!1,i.add(l);let c=[qd(49637),qd(49893),qd(50149)],u=a.spots.map(([d,f,p,v],g)=>{let m=new ri({map:c[g%3],transparent:!0,depthWrite:!1,opacity:a.opacity,fog:!1}),x=new vi(m);return x.center.set(.5,.15),x.renderOrder=5,x.frustumCulled=!1,l.add(x),{sp:x,dx:d,dh:f,du:p,s:v,ph:g*1.7}}),h=new w;return s.push(()=>{let d=o();if(l.visible=d>.01,!l.visible)return;let f=r.value;for(let p of u){e.map(n.x+p.dx,t.WATER+p.dh+Math.sin(f*2.3+p.ph)*a.bob,n.z+p.du,h),p.sp.position.copy(h);let v=1+Math.sin(f*3.1+p.ph*1.3)*a.breathe;p.sp.scale.set(p.s*v*1.25,p.s*v,1),p.sp.material.opacity=a.opacity*d}}),{cards:u.length}}function qE({scene:i,TR:e,W:t,mascot:n,updaters:s,time:r,inside:o}){let a=dt.contact,l={P:new w,R:new w,U:new w,T:new w},c={uTime:r,uFade:{value:0}},u=new Te(new wn(a.radius,a.radius*1.25,a.height,64,1,!0),new Ue({uniforms:c,vertexShader:Mm,fragmentShader:YE,transparent:!0,depthWrite:!1,side:qe})),h=new Te(new Es(a.disc,64).rotateX(-Math.PI/2),new Ue({uniforms:{...c,uR:{value:a.radius/a.disc}},vertexShader:Mm,fragmentShader:jE,transparent:!0,depthWrite:!1}));u.renderOrder=6,h.renderOrder=4,u.frustumCulled=h.frustumCulled=!1;let d=new $e;d.name="r5Contact",d.add(h,u),d.visible=!1,i.add(d),u.position.y=a.height*.32,h.position.y=.01,h.scale.set(1,1,a.wake),h.position.z=-a.wakeBack;let f=new Se,p=new w;return s.push(()=>{let v=o();d.visible=v>.01,c.uFade.value=v,d.visible&&(e.frame(n.z,l),e.map(n.x,t.WATER,n.z,p),d.position.copy(p),f.makeBasis(l.R,l.U,l.T),d.quaternion.setFromRotationMatrix(f))}),{radius:a.radius}}var Mm="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",YE=`
${Rt}
uniform float uTime, uFade; varying vec2 vUv;
void main() {
  float a = vUv.x * 6.2832, h = vUv.y;   // h: 0 at the waterline, 1 at the collar's ragged top
  float n = bwFbm(vec2(vUv.x * 18.0 + uTime * 0.6, h * 3.0 - uTime * 2.2)), n2 = bwFbm(vec2(vUv.x * 40.0 - uTime, h * 6.0 - uTime * 3.0));
  float top = 0.45 + 0.5 * n;                                             // ragged, churning top edge
  float body = 1.0 - smoothstep(top - 0.25, top, h);
  float foam = smoothstep(0.35, 0.65, n2 + (1.0 - h) * 0.35);
  vec3 col = mix(vec3(0.2, 0.55, 1.0), vec3(1.0), foam);                  // blue water under white churn
  float a0 = body * (0.55 + 0.45 * foam) * uFade;
  gl_FragColor = vec4(col, a0);
}`,jE=`
${Rt}
uniform float uTime, uFade, uR; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p);
  float ring = smoothstep(uR * 0.7, uR, r) * (1.0 - smoothstep(0.55, 1.0, r));   // churn from the body outward, fading
  float n = bwFbm(vec2(atan(p.y, p.x) * 3.0, r * 6.0 + uTime * 1.6)) + 0.4 * bwFbm(p * 9.0 - vec2(0.0, uTime * 2.0));
  float foam = smoothstep(0.55, 0.95, n) * ring;
  vec3 col = mix(vec3(0.0, 0.6, 1.0), vec3(1.0), smoothstep(0.3, 0.8, foam * 1.4));
  gl_FragColor = vec4(col, clamp(foam * 1.3 + ring * 0.18, 0.0, 1.0) * uFade);
}`;function KE(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=128/2,s=t.createRadialGradient(n,n,n*.55,n,n,n*.98);s.addColorStop(0,"rgba(180,220,255,0.04)"),s.addColorStop(.6,"rgba(160,140,255,0.16)"),s.addColorStop(.85,"rgba(120,230,255,0.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.beginPath(),t.arc(n,n,n*.98,0,Math.PI*2),t.fill();let r=t.createLinearGradient(0,0,128,128);["rgba(255,140,220,0.55)","rgba(140,200,255,0.55)","rgba(150,255,210,0.5)","rgba(255,240,150,0.5)"].forEach((a,l)=>r.addColorStop(l/3,a)),t.strokeStyle=r,t.lineWidth=128*.035,t.beginPath(),t.arc(n,n,n*.9,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=128*.015,t.beginPath(),t.arc(n,n,n*.94,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.ellipse(n*.62,n*.55,n*.16,n*.09,-.7,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.6)",t.beginPath(),t.arc(n*1.35,n*1.38,n*.06,0,Math.PI*2),t.fill();let o=new Jn(e);return o.colorSpace=St,o}function ZE({scene:i,TR:e,W:t,mascot:n,updaters:s,time:r,inside:o}){let a=dt.softBubbles,l=Yd(11582238),c=KE(),u=new $e;u.name="r5SoftBubbles",u.visible=!1,i.add(u);let h=v=>v[0]+l()*(v[1]-v[0]),d=[];for(let v=0;v<a.count;v++){let g=new vi(new ri({map:c,transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=7,g.frustumCulled=!1,u.add(g);let m=v<a.big;d.push({sp:g,x:m?(v%2?.9:-1)+l()*.3:h(a.box[0]),h:m?.05+l()*.25:h(a.box[1]),du:m?-.9-l()*.3:h(a.box[2]),s:m?.28+l()*.12:h(a.size),w:l()*6})}let f=new w,p=null;return s.push(v=>{let g=o();if(u.visible=g>.01,!u.visible){p=null;return}let m=r.value;for(let x of d)p!==null&&(x.h+=a.rise*v,x.du-=a.drift*v*.3),(x.h>a.box[1][1]+.3||x.du<a.box[2][0]-.4)&&(x.h=h([0,.3]),x.du=h([.5,a.box[2][1]]),x.x=h(a.box[0])),e.map(n.x+x.x+Math.sin(m*1.3+x.w)*.05,t.WATER+x.h,n.z+x.du,f),x.sp.position.copy(f),x.sp.scale.setScalar(x.s*2),x.sp.material.opacity=g;p=m}),{count:d.length}}function JE({scene:i,TR:e,TS:t,axisH:n}){let s=dt.entrance,r={P:new w,R:new w,U:new w,T:new w};e.frame(t,r);let o=new $e;o.name="r5Entrance";let a=new ot({color:15909995,metalness:.8,roughness:.32,emissive:8014356,emissiveIntensity:.8}),l=new ot({color:14260821,metalness:.8,roughness:.35,emissive:5910544,emissiveIntensity:.7}),c=new Te(new Ot(s.rim,s.rimTube,20,128),a),u=new Te(new Ot(s.inner,s.innerTube,12,128),l);return u.position.z=.12,o.add(c,u),o.position.copy(r.P).addScaledVector(r.U,n),o.quaternion.setFromRotationMatrix(new Se().makeBasis(r.R,r.U,r.T)),i.add(o),{at:t}}function Yd(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var QE={ringStep:.85,ringIn:2,ringOut:2.5,hazards:[[6,1],[6.7,-1],[16.6,-1],[18.8,1],[26,1],[26.7,-1]],deco:[[11.2,1,52],[21.8,-1,50],[31.5,1,55]],brushR:1,brushX:1.62,brushY:.9,turnIn:24,spin:2.2,bubbles:46,cluster:.03,showAhead:18,showBehind:6},xc={ringColours:[[1,.36,.8],[.62,.42,1],[.16,.88,1],[.95,.45,.95],[1,.74,.26]],sparkle:.955,bubbles:22,bubbleAngle:[28,152],bubbleR:[1.5,1.95],bubbleMax:.3,clearOut:1.15,hazardWarn:[7.5,3],hazardWidth:.34,hazardMix:.8,grade:{vibrance:.25,knee:.62,roll:1.6},bloom:.22,wallDeep:[[.1,.08,.46],[.58,.38,.98]],brushBlue:[.62,.66,1],brushBlueMix:.45,brushPink:[1,.5,.82]};async function Rm({scene:i,TR:e,L:t,W:n,camera:s,updaters:r,mascot:o,bump:a,brushBytes:l,waterSheets:c,soap:u,loaderParse:h,drumMeshes:d,round2:f}){let p=f?xc:null,v=f&&f.hooks||{},g=f&&f.round3?xn:null,m=f&&f.round4?An:null,x=m&&f.round5?dt:null,y=!!m,b={rings:0,brushes:0,bubbles:0,panelsHidden:0,waterCopy:!1},R=QE,E=t.tunnelStart,A=t.tunnelEnd,C=n.WATER+n.AXIS_H,M={value:0},_={P:new w,R:new w,U:new w,T:new w};{let k=[];for(let ue=E+.6;ue<A-.6+(p?4.4:0);ue+=R.ringStep)k.push(ue);let Z=new or(R.ringIn,R.ringOut,112,1),ge=new Ue({uniforms:{uTime:M,uIn:{value:R.ringIn},uOut:{value:R.ringOut},uSpark:{value:p?p.sparkle:.9}},vertexShader:iM,fragmentShader:g?sM(g):Pm,transparent:!0,depthWrite:!1,blending:mn,side:qe}),de=new Ut(Z,ge,k.length),V=p?(g||p).ringColours.map(ue=>new re(...ue)):[new re(.5,.22,1),new re(1,.3,.78),new re(.12,.85,1),new re(.45,.65,1)],J=new Se,me=new Float32Array(k.length);k.forEach((ue,Re)=>{e.mapMatrix(new Se().makeTranslation(0,C,ue),J),de.setMatrixAt(Re,J),de.setColorAt(Re,V[Re%V.length]),me[Re]=ue}),Z.setAttribute("aU",new st(me,1)),de.frustumCulled=!1,de.renderOrder=3,de.name="s4Rings",i.add(de),b.rings=k.length;let oe=i.getObjectByName("tunnelDecor"),xe=0;if(oe&&oe.traverse(ue=>{if(!ue.isInstancedMesh)return;let Re=ue.geometry.parameters||{};ue.geometry.type==="PlaneGeometry"&&Math.abs(Re.width-.62)<.001&&(ue.visible=!1,b.panelsHidden++,xe=ue.count)}),oe&&xe&&oe.traverse(ue=>{ue.isInstancedMesh&&ue.visible&&ue.count===xe&&ue.material&&ue.material.metalness===1&&(ue.visible=!1,b.panelsHidden++)}),p&&oe){let ue=new Map,Re=0;oe.traverse(He=>{if(!He.isMesh||He.isInstancedMesh||!He.material||He.material.metalness<.9)return;let ie={};if(He.material.color.getHSL(ie),!(ie.h<.06||ie.h>.18)){if(!ue.has(He.material)){let se=He.material.clone();se.emissive=new re(1,.68,.18),se.emissiveIntensity=.45,se.roughness=Math.min(se.roughness,.3),ue.set(He.material,se)}He.material=ue.get(He.material),Re++}}),b.goldGlow=Re}}let S=new Map;for(let k of d||[]){let Z=k.material;if(!S.has(Z)){let ge=Z.clone(),de=Z.onBeforeCompile,V=Z.customProgramCacheKey.bind(Z);ge.onBeforeCompile=(J,me)=>{de.call(Z,J,me),J.fragmentShader=J.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            vec3 deep = mix(vec3(${(p?(g||p).wallDeep[0]:[.06,.08,.42]).map(oe=>oe.toFixed(3)).join(", ")}), vec3(${(p?(g||p).wallDeep[1]:[.42,.36,.95]).map(oe=>oe.toFixed(3)).join(", ")}), smoothstep(0.05, 0.75, l));
            diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.5, 0.55, 0.95), deep, 0.55); }`)},ge.customProgramCacheKey=()=>V()+"|s4-deep"+(g?"3":p?"2":""),S.set(Z,ge)}k.material=S.get(Z)}b.drumMaterialsTinted=S.size;let U=[],N=null;f&&f.tripoBrush&&(await h(await(await fetch("models/brush_p2.glb")).arrayBuffer())).scene.traverse(Z=>{Z.isMesh&&!N&&(N=Z)});let I=k=>{let Z=N.material.clone();return Z.onBeforeCompile=ge=>{ge.vertexShader=ge.vertexShader.replace("void main() {",`varying vec3 vBrushP;
void main() {
  vBrushP = position;`),ge.fragmentShader=ge.fragmentShader.replace("void main() {",`varying vec3 vBrushP;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  { float lum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114)), c = normalize(vBrushP).z;
    vec3 mid = ${k?"vec3(0.06, 0.12, 0.85)":"vec3(1.0, 0.3, 0.68)"}, ring = vec3(1.0, 0.95, 0.98), outer = vec3(1.0, 0.32, 0.7);
    vec3 band = c > 0.84 ? mid : (c > 0.55 ? ring : outer);
    diffuseColor.rgb = band * clamp(0.35 + 0.95 * lum / 0.62, 0.0, 1.4); }`)},Z.customProgramCacheKey=()=>"tripoBrush"+k,new Te(N.geometry,Z)};if(l){let k=await h(l),Z=null;k.scene.traverse(be=>{be.isMesh&&!Z&&(Z=be)});let ge=Z.geometry,de=ge.attributes.position,V=ge.attributes.color,J=ge.index.array,me=[],oe=new re;for(let be=0;be<J.length;be+=3){let ee=J[be],fe=J[be+1],pe=J[be+2],De=(de.getX(ee)+de.getX(fe)+de.getX(pe))/3,we=(de.getY(ee)+de.getY(fe)+de.getY(pe))/3,F=Math.hypot(De,we);oe.setRGB((V.getX(ee)+V.getX(fe)+V.getX(pe))/3,(V.getY(ee)+V.getY(fe)+V.getY(pe))/3,(V.getZ(ee)+V.getZ(fe)+V.getZ(pe))/3);let T={};oe.getHSL(T);let B=T.h>.07&&T.h<.17&&T.s>.35||T.h>.66&&T.h<.84&&T.s<.45&&T.l>.55;F>.96||we<-.58&&B||we<-.86||me.push(ee,fe,pe)}let xe=nM(ge,me,R.cluster);p&&rM(xe,2,.6),b.brushTriangles=xe.index.count/3,b.brushTrianglesDelivered=J.length/3;let ue=new ot({vertexColors:!0,roughness:.7,metalness:.15,side:qe}),Re=p?`
  totalEmissiveRadiance += vec3(1.0, 0.88, 0.97) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.5) * 0.4;`:"";p&&(ue.roughness=.85);let He=p?`{ vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
        diffuseColor.rgb = mix(c, vec3(${p.brushBlue.join(", ")}) * (0.6 + 0.6 * dot(c, vec3(0.333))), blue * ${p.brushBlueMix}); }`:"";ue.onBeforeCompile=be=>{be.fragmentShader=be.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+He).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+Re)},ue.customProgramCacheKey=()=>"s4:brush"+(p?"2":""),g&&Sm(ue,!1,Re);let ie=new ot({color:16762194,metalness:1,roughness:.2,emissive:4860416,emissiveIntensity:.5}),se=ue.clone();se.onBeforeCompile=be=>{be.fragmentShader=be.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          diffuseColor.rgb = mix(c, vec3(${p?p.brushPink.join(", "):"1.0, 0.42, 0.78"}) * (${p?"0.62 + 0.6":"0.5 + 0.7"} * dot(c, vec3(0.333))), blue * 0.92); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+Re)},se.customProgramCacheKey=()=>"s4:brushPink"+(p?"2":""),g&&Sm(se,!0,Re);let H=(be,ee,fe,pe,De)=>{e.frame(be,_);let we=new $e,F,T;if(pe)F=ee*R.brushX,T=R.brushY;else{let ce=_e.degToRad(fe),he=De||1.95;F=ee*Math.cos(ce)*he,T=C+Math.sin(ce)*he}we.position.copy(_.P).addScaledVector(_.R,F).addScaledVector(_.U,T);let B=_.T.clone().negate(),W=_.R.clone().multiplyScalar(-ee),X=B.multiplyScalar(Math.cos(_e.degToRad(R.turnIn))).addScaledVector(W,Math.sin(_e.degToRad(R.turnIn))).normalize(),Y=new Se().lookAt(new w,X.clone().negate(),_.U);we.quaternion.setFromRotationMatrix(Y);let ve=new Te(xe,ee>0?se:ue);ve.scale.setScalar(R.brushR/.95);let Ee=new $e;if(Ee.add(ve),we.add(Ee),m){let ce=N?I(ee<0):y?pm(ee>0,{balls:!!x}):eM(ee>0,ve.scale.x);y&&ce.scale.setScalar(ve.scale.x),Ee.add(ce),ve.visible=!1}let Me=new Te(new wn(.09,.09,1.1,16),ie);Me.rotation.x=Math.PI/2,Me.position.z=-.75,we.add(Me),we.name="s4Brush",i.add(we);let Fe={holder:we,spinner:Ee,u:be,side:ee,hazard:pe,hit:!1,dir:ee*(pe?1:.6),base:we.position.clone(),out:_.R.clone().multiplyScalar(ee),cleared:!1,clear:0,bonk:0};return U.push(Fe),Fe};for(let[be,ee]of ns?dn.hazards:R.hazards)H(be,ee,0,!0);for(let[be,ee,fe,pe,De]of yn?[...Ne.r7.deco,...R.deco]:R.deco){let we=H(be,ee,fe,!1,De);pe&&we.holder.scale.setScalar(pe)}b.brushes=U.length,b.hazards=R.hazards.length}let z=[];v.clearBrushes=(k,Z)=>{let ge=0;for(let de of U)de.hazard&&!de.cleared&&de.u>=k&&de.u<=Z&&(de.cleared=!0,ge++,v.pop&&v.pop(de.holder.position));return ge},v.hazards=()=>U.filter(k=>k.hazard).map(k=>({u:k.u,side:k.side,cleared:k.cleared})),r.push((k,Z,ge)=>{M.value=Z;for(let V of U){let J=V.u-o.z;V.holder.visible=o.z>E-14&&J<R.showAhead&&J>-R.showBehind,V.cleared&&o.z>V.u+R.showBehind&&(V.cleared=!1);let me=V.cleared?1:0,oe=ns?dn.emerge:m&&m.emerge,xe=m?_e.smoothstep(J,oe[0],oe[1])*oe[2]:0;if(V.clear!==me||m){V.clear!==me&&(V.clear=V.holder.visible?_e.clamp(V.clear+Math.sign(me-V.clear)*k/.35,0,1):me);let ue=V.clear*V.clear*(3-2*V.clear);V.holder.position.copy(V.base).addScaledVector(V.out,ue*(p?p.clearOut:0)+xe)}V.bonk=Math.max(0,V.bonk-k),V.holder.visible&&(V.spinner.rotation.z+=R.spin*V.dir*k*(1-.7*V.clear+5*V.bonk))}if(O&&O.forEach((V,J)=>{let me=L[J];V.z=me.cleared?0:1}),ge!=="running")return;let de=o;for(let V of U)if(V.hazard){if(Math.abs(de.z-V.u)>1.25){de.z>V.u+1.5&&(V.hit=!1);continue}if(!(V.hit||V.cleared||de.air&&de.yAbs-n.surface(t,de.x,de.z,Z)>2.2)&&V.side*de.x>.33){V.hit=!0;let J=a(V.side);z.push({t:+Z.toFixed(2),u:V.u,side:V.side,lane:de.lane,knocked:J!==!1}),J===!1&&(V.bonk=.5)}}}),b.hits=z;let L=U.filter(k=>k.hazard),O=p?L.map(k=>new bt(k.u,n.laneX(k.side>0?0:2),1,0)):null;for(;O&&O.length<6;)O.push(new bt(-999,0,0,0));if(u){let k=p?p.bubbles:R.bubbles,Z=Cm(23307),ge=new tn(1,26,16),de=new Qt;de.index=ge.index,de.setAttribute("position",ge.attributes.position),de.setAttribute("normal",ge.attributes.normal);let V=new Float32Array(k*4),J=new Float32Array(k*4),me=new w;for(let Re=0;Re<k;Re++){let He=E+1.5+Z()*(A-E-3),ie=_e.degToRad(-10+Z()*200),se=1.05+Z()*.85;p&&(ie=_e.degToRad(p.bubbleAngle[0]+(ie/Math.PI*180+10)/200*(p.bubbleAngle[1]-p.bubbleAngle[0])),se=p.bubbleR[0]+(se-1.05)/.85*(p.bubbleR[1]-p.bubbleR[0])),e.map(Math.cos(ie)*se,C+Math.sin(ie)*se,He,me);let H=.06+Math.pow(Z(),2.2)*.42;V.set([me.x,me.y,me.z,p?.05+(H-.06)*(p.bubbleMax-.05)/.42:H],Re*4),J.set([Z()*6.28,Z()<.3?.08:0,.04,0],Re*4)}de.setAttribute("inst",new st(V,4)),de.setAttribute("motion",new st(J,4)),de.instanceCount=k;let oe={uTime:M,uMotion:{value:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:.035},uFilm:{value:1.3}},xe=new Ue({uniforms:oe,vertexShader:u.vertex,fragmentShader:u.fragment,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}),ue=new Te(de,xe);ue.frustumCulled=!1,ue.renderOrder=5,ue.name="s4Bubbles",i.add(ue),r.push(()=>{oe.uAvoid.value.copy(o.root.position)}),b.bubbles=k}let D=(c||[]).find(k=>(k.geometry.computeBoundingBox(),k.geometry.boundingBox.min.z>E-5)),j="  vec3 lit = col * (0.8 + 0.3 * NdotL);";if(D&&D.material.fragmentShader.includes(j)){let k=D.material,Z=k.clone();Z.uniforms=k.uniforms,p&&(k.uniforms.uS4Haz={value:O},k.uniforms.uS4Warn={value:new w(...p.hazardWarn,p.hazardWidth)},Z.polygonOffset=!0,Z.polygonOffsetFactor=-1,Z.polygonOffsetUnits=-4),Z.fragmentShader=(p?`uniform vec4 uS4Haz[6]; uniform vec3 uS4Warn;
`:"")+k.fragmentShader.replace(j,p?g?Am.replace(j,hM()+(m?uM(x):"")+j):Am:`  if (inDrum > 0.0) {   // Screen 4 tunnel look (?s3=tunnel)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float collar = exp(-pow(max(0.0, rM - 0.42) / 0.42, 2.0));
    float behindM = clamp(-toM.y / 3.2, 0.0, 1.0);
    float trailV = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.95)) / 0.17, 2.0)) * step(toM.y, 0.2) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    foam = max(foam, smoothstep(0.28, 0.72, (collar + trailV * 0.85) * (0.7 + 0.6 * st)) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.55), 0.35 * inDrum);
  }
`+j),p&&(Z.fragmentShader=Z.fragmentShader.replace(Kd,dM+Kd)),D.material=Z,b.waterCopy=!0,p&&(b.warnShader=Z.fragmentShader.includes("a brush's warning"))}return p&&(b.round2=oM({scene:i,round2:f,mascot:o,updaters:r,time:M,TS:E})),g&&(b.round3=cm({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:M,soap:u,round4:x?{...m,bubbles:x.bubbles,foam:{...m.foam,...x.foam},foamBubbles:{...m.foamBubbles,...x.foamBubbles}}:m||!1})),m&&(b.round4=um({scene:i,TR:e,L:t,W:n,updaters:r,time:M,env:f.env,mascot:o,hide:[i.getObjectByName("s4Rings"),i.getObjectByName("r3Swirl"),...d||[]]})),x&&(b.round5=Tm({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:M,bloomPass:f.bloomPass})),x&&Fi&&(b.round6=wm({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:M,env:f.env,bloomPass:f.bloomPass,waterSheets:c,drumSheet:D,fogAnchor:Kd})),ns&&f&&(b.heroGrade=bm({grade:f.grade,mascot:o,updaters:r,L:t})),b}var Ds={uR3Pink:{value:new re},uR3White:{value:new re},uR3Royal:{value:new re},uR3Deep:{value:new re},uR3Tufts:{value:26},uR3Core:{value:.45}},ga=null,jd={};function eM(i,e){let t=An.pompom;if(!ga){ga=new tn(1,10,8);let v=ga.attributes.position,g=new w;for(let m=0;m<v.count;m++){g.fromBufferAttribute(v,m);let x=1+.16*Math.sin(g.x*7.1+g.y*3.3)*Math.sin(g.z*5.7-g.y*4.1);g.multiplyScalar(x),v.setXYZ(m,g.x,g.y,g.z)}ga.computeVertexNormals()}let n=i?"L":"R";if(!jd[n]){let v=new ot({color:16777215,roughness:.92,metalness:0});v.onBeforeCompile=g=>{g.vertexShader=`varying vec3 vTuft;
`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vTuft = position;`),g.fragmentShader=`varying vec3 vTuft;
float tfH(float n) { return fract(sin(n * 91.345) * 47453.5453); }
`+g.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  float tfFib;
  { float ang = atan(vTuft.z, vTuft.x);
    float strand = 0.5 + 0.5 * sin(ang * 14.0 + vTuft.y * 3.0) * sin(ang * 23.0 - vTuft.y * 5.0 + 1.3);
    float fa = ang * 30.0 / 6.2832 + vTuft.y * 0.6, fi = floor(fa);
    tfFib = mix(tfH(fi), tfH(fi + 1.0), smoothstep(0.3, 0.7, fract(fa))) * (0.7 + 0.3 * tfH(floor(fa * 2.7) + 17.0));
    float tip = smoothstep(-0.2, 1.0, vTuft.y);
    diffuseColor.rgb *= (1.0 - ${t.strands.toFixed(3)} * 0.5 * (1.0 - strand) * smoothstep(-0.6, 0.6, vTuft.y))
      * (1.0 - ${t.fibres.toFixed(3)} * (1.0 - tfFib) * (1.0 - 0.5 * tip)) * (0.88 + 0.24 * tip); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  { float edge = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
    if (edge > 1.0 - ${t.fuzz.toFixed(3)} && tfFib < smoothstep(1.0 - ${t.fuzz.toFixed(3)}, 1.0, edge) * 1.25) discard;
    float whiteness = smoothstep(0.55, 0.85, min(diffuseColor.r, min(diffuseColor.g, diffuseColor.b)));
    totalEmissiveRadiance += diffuseColor.rgb * (${t.glow.toFixed(3)} + ${t.whiteLift.toFixed(3)} * whiteness) + vec3(1.0, 0.92, 0.98) * pow(edge, 2.0) * ${t.sheen.toFixed(3)}; }`)},v.customProgramCacheKey=()=>"s4:tuft4c",jd[n]=v}let s=t.count+t.rim,r=new Ut(ga,jd[n],s),o=new Se,a=new _t,l=new w,c=new w,u=new re,h=new w,d=Cm(i?1953:1954),f=Math.PI*(3-Math.sqrt(5)),p=v=>{let g=i?t.left:t.right;v+=(d()-.5)*.06;for(let m of g)if(v<=m[0])return m[1][Math.floor(d()*m[1].length)];return g[g.length-1][1][0]};for(let v=0;v<s;v++){let g,m;if(v<t.count){let y=(v+.5)/t.count;g=Math.acos(1-y*(1-Math.cos(_e.degToRad(t.cap)))),m=v*f}else g=_e.degToRad(t.cap+4+d()*10),m=(v-t.count)/t.rim*Math.PI*2+d()*.2;h.set(Math.sin(g)*Math.cos(m),Math.sin(g)*Math.sin(m),Math.cos(g)),c.set(h.x*t.radius,h.y*t.radius,h.z*t.radius*t.depth-t.radius*t.depth*.35),a.setFromUnitVectors(new w(0,1,0),h);let x=t.size*(.8+d()*.4)*(v<t.count?1:1.15);l.set(x,x*t.long,x),o.compose(c,a,l),r.setMatrixAt(v,o),u.setRGB(...p(g/_e.degToRad(t.cap))).multiplyScalar(.9+d()*.18),r.setColorAt(v,u)}return r.scale.setScalar(e),r.name="r4PomPom",r.frustumCulled=!1,r}var tM=`float r3h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float r3n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(r3h(i), r3h(i + vec2(1, 0)), f.x), mix(r3h(i + vec2(0, 1)), r3h(i + vec2(1, 1)), f.x), f.y); }
`;function Sm(i,e,t){let n=xn.brush;Ds.uR3Pink.value.setRGB(...n.pink),Ds.uR3White.value.setRGB(...n.white),Ds.uR3Royal.value.setRGB(...n.royal),Ds.uR3Deep.value.setRGB(...n.deep),Ds.uR3Tufts.value=n.tufts,Ds.uR3Core.value=n.core,typeof window<"u"&&(window.__bwR3=Object.assign(window.__bwR3||{},{brushU:Ds,ROUND3:xn})),i.onBeforeCompile=s=>{Object.assign(s.uniforms,Ds),s.vertexShader=`varying vec3 vR3Obj;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vR3Obj = position;`),s.fragmentShader=`varying vec3 vR3Obj; uniform vec3 uR3Pink, uR3White, uR3Royal, uR3Deep; uniform float uR3Tufts, uR3Core;
`+tM+s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float l = dot(c, vec3(0.333));
          float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          float rr = length(vR3Obj.xy), ang = atan(vR3Obj.y, vR3Obj.x);
          vec2 q = vec2(ang * uR3Tufts / 6.2832, rr * 8.0);   // tufts round the wheel and outward from the axle
          float clump = r3n(vR3Obj.xy * 7.0) * 0.65 + r3n(vR3Obj.xy * 15.0 + 7.0) * 0.35;   // soft clumps (no seam round the wheel)
          float tuft = 0.74 + 0.26 * r3n(q * vec2(3.0, 5.0) + 3.0);
          float shade = 0.72 + 0.5 * smoothstep(0.1, 0.8, l);
          vec3 fluff = mix(uR3Pink, uR3White, smoothstep(${e?"0.55, 0.68":"0.38, 0.52"}, clump)) * tuft * shade;
          vec3 face = ${e?"fluff":"mix(uR3Royal, uR3Deep, smoothstep(0.35, 0.75, clump) * 0.7) * (0.85 + 0.3 * tuft) * shade"};
          diffuseColor.rgb = mix(fluff, face, blue * (1.0 - smoothstep(uR3Core, uR3Core + 0.1, rr))); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+t)},i.customProgramCacheKey=()=>"s4:brush3"+(e?"L":"R")}function nM(i,e,t){let n=i.attributes.position,s=i.attributes.color,r=new Map,o=[],a=new Map,l=p=>{if(a.has(p))return a.get(p);let v=Math.floor(n.getX(p)/t)+","+Math.floor(n.getY(p)/t)+","+Math.floor(n.getZ(p)/t),g=r.get(v);g===void 0&&(g=o.length,r.set(v,g),o.push([0,0,0,0,0,0,0]));let m=o[g];return m[0]+=n.getX(p),m[1]+=n.getY(p),m[2]+=n.getZ(p),s&&(m[3]+=s.getX(p),m[4]+=s.getY(p),m[5]+=s.getZ(p)),m[6]++,a.set(p,g),g},c=[];for(let p=0;p<e.length;p+=3){let v=l(e[p]),g=l(e[p+1]),m=l(e[p+2]);v!==g&&g!==m&&v!==m&&c.push(v,g,m)}let u=o.length,h=new Float32Array(u*3),d=new Float32Array(u*3);o.forEach((p,v)=>{h.set([p[0]/p[6],p[1]/p[6],p[2]/p[6]],v*3),d.set([p[3]/p[6],p[4]/p[6],p[5]/p[6]],v*3)});let f=new Ze;return f.setAttribute("position",new nt(h,3)),s&&f.setAttribute("color",new nt(d,3)),f.setIndex(c),f.computeVertexNormals(),f.computeBoundingSphere(),f}function Cm(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var iM=`
attribute float aU;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
void main() {
  vR = length(position.xy); vA = atan(position.y, position.x); vU = aU;
  vC = instanceColor;
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,Pm=`
uniform float uTime, uIn, uOut, uSpark;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  float k = (vR - uIn) / (uOut - uIn);
  float core = exp(-pow((k - 0.06) / 0.045, 2.0)) * 1.9 + exp(-pow((k - 0.9) / 0.035, 2.0)) * 0.5;
  float glow = (1.0 - smoothstep(0.0, 0.7, k)) * 0.12;
  vec2 g = vec2(vA * 28.0, vU * 3.0); vec2 c = floor(g);
  float sp = step(uSpark, h21(c)) * (1.0 - smoothstep(0.0, 0.25, length(fract(g) - 0.5))) * pow(max(0.0, sin(uTime * 3.5 + h21(c + 3.0) * 30.0)), 6.0);
  float wave = 0.72 + 0.28 * sin(vU * 0.9 - uTime * 3.0);
  float fade = 1.0 - 0.45 * smoothstep(6.0, 26.0, vDepth);
  vec3 col = vC * (core + glow) * wave * fade + vec3(1.0) * sp * 0.9;
  gl_FragColor = vec4(col, 1.0);
}
`;function sM(i){let e=i.ringFar;return Pm.replace("float fade = 1.0 - 0.45 * smoothstep(6.0, 26.0, vDepth);",`float fade = 1.0 - ${(.45*(1-e.keep)).toFixed(3)} * smoothstep(6.0, 26.0, vDepth);`).replace("gl_FragColor = vec4(col, 1.0);",`float far = smoothstep(${e.from.toFixed(2)}, ${e.to.toFixed(2)}, vDepth);
  col = mix(col * ${i.ringGlow.toFixed(3)}, vec3(0.85, 0.95, 1.0) * (core + glow) * wave * ${e.bright.toFixed(3)}, far * ${e.white.toFixed(3)});
  gl_FragColor = vec4(col, 1.0);`)}function rM(i,e,t){let n=i.attributes.color,s=i.index.array,r=n.count,o=Array.from({length:r},()=>new Set);for(let l=0;l<s.length;l+=3){let c=s[l],u=s[l+1],h=s[l+2];o[c].add(u).add(h),o[u].add(c).add(h),o[h].add(c).add(u)}let a=Float32Array.from(n.array);for(let l=0;l<e;l++){let c=new Float32Array(a.length);for(let u=0;u<r;u++){let h=0,d=0,f=0,p=0;for(let v of o[u])h+=a[v*3],d+=a[v*3+1],f+=a[v*3+2],p++;if(!p){c.set(a.subarray(u*3,u*3+3),u*3);continue}c[u*3]=a[u*3]*(1-t)+h/p*t,c[u*3+1]=a[u*3+1]*(1-t)+d/p*t,c[u*3+2]=a[u*3+2]*(1-t)+f/p*t}a=c}n.array.set(a),n.needsUpdate=!0}function oM({round2:i,mascot:e,updaters:t,time:n,TS:s}){let r={exit:!1,grade:!1},{exitLight:o,grade:a,bloomPass:l}=i;o&&o[0]&&(o[0].material=new Ue({uniforms:{uTime:n},vertexShader:lM,fragmentShader:cM}),o[1]&&o[1].material.color.setRGB(.12,.16,.3),r.exit=!0);let c=xc.grade,u=i.round5?{...An.grade,...dt.grade}:An.grade;a&&a.material.fragmentShader.includes("if (uOpen > 0.0) {")&&(a.uniforms.uS4Grade={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS4Grade;").replace("if (uOpen > 0.0) {",`if (uS4Grade > 0.0) {   // ?s3=round2: inside the drum, rich and never washed out
        vec3 g = c.rgb;
        float lg = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float mx = max(g.r, max(g.g, g.b)), mn = min(g.r, min(g.g, g.b));
        float sat = (mx - mn) / max(mx, 1e-4);
        g = max(mix(vec3(lg), g, 1.0 + ${c.vibrance.toFixed(3)} * (1.0 - sat) * smoothstep(0.05, 0.35, lg)), 0.0);
        float l2 = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float kn = l2 > ${c.knee.toFixed(3)} ? ${c.knee.toFixed(3)} + (l2 - ${c.knee.toFixed(3)}) / (1.0 + (l2 - ${c.knee.toFixed(3)}) * ${c.roll.toFixed(3)}) : l2;
        g *= kn / max(l2, 1e-4);
        c.rgb = mix(c.rgb, g, uS4Grade);${i.round4?`
        { vec3 h = c.rgb * ${u.exposure.toFixed(3)};   // ?s3=round4: richer and less pastel inside the drum
          float lh = dot(h, vec3(0.2126, 0.7152, 0.0722));
          h = mix(vec3(lh), h, ${u.saturation.toFixed(3)});
          h = (h - ${u.pivot.toFixed(3)}) * ${u.contrast.toFixed(3)} + ${u.pivot.toFixed(3)};
          c.rgb = mix(c.rgb, max(h, 0.0), uS4Grade); }`:""}${yn&&Ne.warmLight?aM(Ne.warmLight):""}
      }
      if (uOpen > 0.0) {`),a.material.needsUpdate=!0,r.grade=!0);let h=l?l.strength:0,d=Fi?Ne.inside:[-.5,2.5];return t.push(()=>{let f=_e.smoothstep(e.z,s+d[0],s+d[1]);r.grade&&(a.uniforms.uS4Grade.value=f),l&&(l.strength=h+(xc.bloom-h)*f)}),r}function aM(i){return`
        { vec2 wq = (vUv - vec2(${i.at.map(e=>e.toFixed(3)).join(", ")})) * vec2(0.5, 1.0);   // ?s3=round7: warm light, top right
          c.rgb += vec3(${i.color.map(e=>e.toFixed(3)).join(", ")}) * exp(-dot(wq, wq) / ${(i.radius*i.radius).toFixed(4)}) * ${i.amount.toFixed(3)} * uS4Grade; }`}var lM="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",cM=`
uniform float uTime; varying vec2 vUv;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 p = (vUv - 0.5) * 16.0; float r = length(p), a = atan(p.y, p.x), lr = log(max(r, 0.05));
  float sw = a * 3.0 + lr * 4.5 - uTime * 2.0;
  float armP = smoothstep(0.55, 0.9, 0.5 + 0.5 * sin(sw));             // pink spiral arms
  float armC = smoothstep(0.55, 0.9, 0.5 + 0.5 * sin(sw + 3.1416));    // cyan arms between them
  float rings = smoothstep(0.8, 0.98, 0.5 + 0.5 * sin(lr * 10.0 - uTime * 3.0));
  vec3 col = mix(vec3(0.3, 0.22, 0.8), vec3(0.07, 0.09, 0.42), smoothstep(0.8, 3.5, r));   // violet into deep blue
  float band = smoothstep(0.35, 1.0, r) * (1.0 - smoothstep(3.0, 6.5, r));
  col += vec3(1.0, 0.36, 0.78) * armP * band * 0.75;
  col += vec3(0.2, 0.85, 1.0) * armC * band * 0.6;
  col += vec3(0.75, 0.6, 1.0) * rings * band * 0.35;
  col = mix(col, vec3(0.55, 0.92, 1.0), 1.0 - smoothstep(0.25, 1.2, r));   // a cyan glow round
  col = mix(col, vec3(1.0), 1.0 - smoothstep(0.08, 0.45, r));               // a small white heart
  vec2 g = vec2(a * 10.0, lr * 6.0 - uTime * 0.8), c = floor(g);
  float sp = step(0.93, h21(c)) * (1.0 - smoothstep(0.05, 0.3, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 5.0 + h21(c + 2.0) * 20.0));
  col += vec3(1.0) * sp * 0.7 * smoothstep(0.6, 1.5, r);
  gl_FragColor = vec4(col, 1.0);
}
`,Am=`  float s4Haz = 0.0;
  if (inDrum > 0.0) {   // Screen 4 tunnel, round 2 (?s3=round2)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float run = uPlayerMove.y;
    foam *= mix(1.0, 0.4, inDrum);
    vec2 bc = bwVoronoi(xz * vec2(9.0, 6.5) - vec2(0.0, flowT * 0.32));
    float rims = 1.0 - smoothstep(0.02, 0.075, bc.y - bc.x);
    float churn = exp(-pow(max(0.0, rM - 0.45) / 0.6, 2.0));
    float contact = exp(-pow((rM - 0.5) / 0.08, 2.0));
    float behindM = clamp(-toM.y / 3.0, 0.0, 1.0);
    float vTrail = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.85)) / 0.12, 2.0)) * step(toM.y, 0.1) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    float lace = rims * clamp(churn * (0.6 + 0.5 * st) + vTrail * 0.8, 0.0, 1.0);
    foam = max(foam, clamp(max(lace * 0.8, smoothstep(0.35, 0.8, contact * (0.75 + 0.4 * st) + vTrail * 0.55)), 0.0, 1.0) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.7) * 0.86, 0.5 * inDrum);
    col += uGlow * churn * smoothstep(0.12, 0.42, bc.x) * 0.1 * inDrum;
    float dash = smoothstep(0.35, 0.5, fract(xz.y * 0.55 - flowT * 0.18)) * (1.0 - smoothstep(0.85, 1.0, fract(xz.y * 0.55 - flowT * 0.18)));
    float guide = exp(-pow((abs(xz.x) - 0.35) / 0.035, 2.0)) * dash;
    col += vec3(0.75, 0.95, 1.0) * guide * 0.22 * inDrum;
    float haz = 0.0;
    for (int i = 0; i < 6; i++) {
      vec4 h = uS4Haz[i];
      float du = h.x - xz.y;
      float along = (1.0 - smoothstep(uS4Warn.y, uS4Warn.x, du)) * smoothstep(-1.0, -0.2, du);
      float dx = (xz.x - h.y) / uS4Warn.z;
      float across = exp(-dx * dx);
      float stripes = 0.55 + 0.45 * smoothstep(0.25, 0.55, fract(du * 1.2 + t * 1.6)) * (1.0 - smoothstep(0.75, 0.95, fract(du * 1.2 + t * 1.6)));
      haz = max(haz, along * across * h.z * stripes);
    }
    s4Haz = haz * (0.82 + 0.18 * sin(t * 7.0)) * inDrum;
    foam *= 1.0 - 0.8 * s4Haz;   // the warning stays clear of foam
  }
  vec3 lit = col * (0.8 + 0.3 * NdotL);
`,Kd="  float dist = length(cameraPosition - vWorld);",uM=i=>{let e=i&&i.water?{...An.water,...i.water}:An.water;return`  if (inDrum > 0.0) {   // ?s3=round4
    col -= mix(uGlow, vec3(1.0), 0.35) * caustic * (0.5 + 0.4 * crest) * (1.0 - moat * 0.6) * inDrum;
    vec2 toM4 = xz - uPlayer.xz; float rM4 = length(toM4 * vec2(1.0, 0.8));
    float centreW = 1.0 - smoothstep(0.25, 1.35, abs(xz.x));
    col = mix(col, mix(vec3(${e.side.join(", ")}), vec3(${e.middle.join(", ")}), centreW), ${e.mix.toFixed(3)} * inDrum);
    float roll = sin(xz.y * 2.4 - flowT * 1.15 + bwNoise(xz * vec2(1.5, 0.5)) * 3.0);
    float crestR = smoothstep(0.55, 1.0, roll);
    col += vec3(0.25, 0.8, 1.0) * crestR * ${e.crest.toFixed(3)} * inDrum;
    float st1 = bwFbm(vec2(xz.x * 5.0, xz.y * 0.7 - flowT * 0.55));
    float st2 = bwFbm(vec2(xz.x * 9.0 + 3.0, xz.y * 1.2 - flowT * 0.7));
    float froth = smoothstep(0.58, 0.78, st1) * 0.7 + smoothstep(0.62, 0.8, st2) * 0.4;
    float nearM = exp(-pow(max(0.0, rM4 - 0.4) / 1.5, 2.0));
    float churn = smoothstep(0.32, 0.72, bwFbm(xz * vec2(3.0, 1.6) - vec2(0.0, flowT * 0.5))) * nearM;
    float f4 = clamp(froth * (0.3 + 0.7 * crestR) * ${e.froth.toFixed(3)} + churn * ${e.churn.toFixed(3)}, 0.0, 1.0);
    foam = mix(foam, max(f4, foam * 0.25), inDrum) * (1.0 - s4Haz);
  }
`},hM=()=>{let i=xn.water;return`  if (inDrum > 0.0) {   // ?s3=round3
    col = mix(col, vec3(${i.azure.join(", ")}), ${i.azureMix.toFixed(3)} * inDrum);
    vec2 b3 = bwVoronoi(xz * vec2(5.5, 3.8) - vec2(0.0, flowT * 0.42));
    float patch3 = smoothstep(0.42, 0.72, bwFbm(xz * vec2(1.7, 0.75) - vec2(0.0, flowT * 0.35)));
    float near3 = exp(-pow(max(0.0, length(xz - uPlayer.xz) - 0.5) / 1.8, 2.0));
    float lace3 = 1.0 - smoothstep(0.02, 0.11, b3.y - b3.x);
    foam = max(foam, clamp(lace3 * patch3 * (0.45 + 0.55 * near3) + smoothstep(0.62, 0.9, patch3) * near3 * 0.6, 0.0, 1.0) * ${i.foam.toFixed(3)} * inDrum * (1.0 - s4Haz));
  }
`},dM=`  lit = mix(lit, vec3(1.0, 0.12, 0.5) * (0.85 + 0.25 * NdotL), clamp(s4Haz * 1.7, 0.0, 1.0) * ${xc.hazardMix.toFixed(2)});   // ?s3=round2: a brush's warning
`;var fM=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),Vn=typeof window>"u"||fM?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),Qe=Object.fromEntries(["castle","entrance","machinery","brush","bubbles"].map(i=>[i,Vn.includes(i)||Vn.includes("all")]));Qe.edges=Vn.includes("edges");Qe.cine=Vn.includes("cine");Qe.tunnel=Vn.includes("tunnel");Qe.paint=Vn.includes("paint");Qe.round2=Vn.includes("round2");Qe.round3=Vn.includes("round3");Qe.round6=Vn.includes("round6")||Vn.includes("round7")||Vn.includes("hero");Qe.round5=Vn.includes("round5")||Qe.round6;Qe.round4=Vn.includes("round4")||Qe.round5;Qe.fluffy=Qe.round4&&Vn.includes("fluffy");Qe.tripobrush=Qe.round5&&Vn.includes("tripobrush");Qe.round4&&(Qe.round3=!0);Qe.round3&&(Qe.round2=!0);Qe.round2&&(Qe.paint=!Qe.round3,Qe.tunnel=!0);if(Qe.round3)for(let i of["castle","entrance","machinery","brush","bubbles","edges","cine"])Qe[i]=!0;Qe.paint&&(Qe.castle=!0,Qe.edges=!0);var Lm=Object.values(Qe).some(Boolean),Jd={castle:"models/s3_castle.glb",entrance:"models/s3_entrance.glb",machinery:"models/s3_machinery.glb",brush:"models/s3_brush.glb"},Li={castle:{scale:10,archCentreY:-.27,front:2.75,glow:.32,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},pink:{hue:292,mix:.45,sat:.62},cyan:{sat:.55,val:1.06,glow:.55}},entrance:{holeRadius:2.05,holeCentre:[-.01,-.29],z:2.6,glow:.25,envI:1.25,gold:{hue:43,sat:.92,val:1.08,metal:.6}},machinery:{scale:1.66,at:[-2.73,.4,-7],yaw:180,glow:.3,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},cyan:{sat:.6,val:1.06,glow:.5}},brush:{scale:1.2,at:[2.32,.165,-7],yaw:180,glow:.22,rough:.72,metal:.15,envI:1},bubbles:{extra:[[475,526,14,79,0,.02],[428,478,13,15,.06,.03],[522,612,11,20,0,.02]],centreAlpha:.035}},vo={brush:{scale:1.51,at:[2.62,.23,-4.9]},film:1.4,edge:{profile:[[-.08,-.05],[0,.07],[.1,.13],[.22,.1],[.3,-.02],[.33,-.8]],alpha:.45,foam:1}},Um={far:2.35,towers:-1.5,brush:-4.9,machinery:-6.5,groundBelow:.35,tear:1.35,cutZ:-14,fadeFrom:-12,fadeTo:-6},fr={up:.099,forward:.818,pitch:.3,fov:1.0375,blend:.9},zs=typeof window<"u"&&window.__BW_S3_TUNE__||{};for(let i of Object.keys(zs))Li[i]&&(Li[i]={...Li[i],...zs[i]});zs.edges&&Object.assign(vo,zs.edges);zs.cine&&Object.assign(fr,zs.cine);zs.paint&&Object.assign(Um,zs.paint);Qe.edges&&(Li.brush={...Li.brush,...vo.brush});var va={};for(let i of Object.keys(Jd))Qe[i]&&(va[i]=Nm(Jd[i]));Qe.tunnel&&(va.brushT=va.brush||Nm(Jd.brush));async function Nm(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}async function Hm({scene:i,env:e,axisY:t,tunnelStart:n,oldCastle:s,sideMachinery:r,staticBubbles:o,camera:a,updaters:l,mascot:c,L:u,W:h,renderPass:d,rollers:f,grade:p,bloomPass:v,outputPass:g,waterSheets:m,TR:x,bumpMascot:y,drumMeshes:b,exitLight:R,r2:E}){let A={},C=new Fs,M=async I=>{let z=await va[I];return z?C.parseAsync(z,""):null},_=I=>{I&&(I.visible=!1)},S=(I,z)=>{let L=null;return I&&I.children.forEach(O=>O.traverse(D=>{!L&&D.isMesh&&D.material&&D.material.customProgramCacheKey&&D.material.customProgramCacheKey()===z&&(L=O)})),L};if(Qe.castle){let I=await M("castle");if(!I)A.castle="not found";else{let z=Li.castle,L=z.scale,O=new $e;O.name="s3Castle",O.rotation.y=Math.PI,O.scale.setScalar(L),O.position.set(0,t-z.archCentreY*L,z.front+.236*L),I.scene.traverse(D=>{D.isMesh&&(D.material=Zd(D.material,e,"castle",z))}),O.add(I.scene),i.add(O),_(s),i.traverse(D=>{D.isMesh&&D.material&&D.material.uniforms&&D.material.uniforms.uWall&&_(D)}),_(S(i.getObjectByName("entranceDecor"),"decor:crown")),A.castle={scale:L,...Fm(O,t,n)}}}if(Qe.entrance){let I=await M("entrance");if(!I)A.entrance="not found";else{let z=Li.entrance,L=z.holeRadius/.52,O=new $e;O.name="s3Entrance",O.rotation.y=Math.PI,O.scale.setScalar(L),O.position.set(z.holeCentre[0]*L,t-z.holeCentre[1]*L,z.z),I.scene.traverse(D=>{D.isMesh&&(D.material=Zd(D.material,e,"entrance",z))}),O.add(I.scene),i.add(O),_(i.getObjectByName("washerDoor")),A.entrance={scale:+L.toFixed(3),...Fm(O,t,n)}}}let U=(I,z,L)=>{let O=new $e;O.rotation.y=_e.degToRad(z.yaw),O.scale.setScalar(z.scale),O.position.set(...z.at),I.scene.traverse(j=>{j.isMesh&&(j.material=L(j.material))}),O.add(I.scene),i.add(O);let D=Im(O,n);for(let j=0;j<40&&D<1.18;j++)O.position.x+=.03*Math.sign(O.position.x),D=Im(O,n);return{holder:O,lane:+D.toFixed(2),at:O.position.toArray().map(j=>+j.toFixed(2))}};if(Qe.machinery){let I=await M("machinery");if(!I)A.machinery="not found";else{let z=Li.machinery,L=U(I,z,D=>Zd(D,e,"machinery",z));L.holder.name="s3Machinery";let O=i.getObjectByName("scenery");if(O)for(let D of O.children)D.position.distanceTo(new w(-2.25,-.3,-10))<.01&&_(D);A.machinery={scale:z.scale,at:L.at,nearestToLanes:L.lane}}}if(Qe.brush){let I=await M("brush");if(!I)A.brush="not found";else{let z=Li.brush,L=U(I,z,D=>{let j=new ot({vertexColors:!0,roughness:z.rough,metalness:z.metal,envMap:e,envMapIntensity:z.envI,side:qe});return j.onBeforeCompile=k=>{k.fragmentShader=k.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${(+z.glow).toFixed(3)};`)},j.customProgramCacheKey=()=>"s3:brush:"+JSON.stringify(z),j});L.holder.name="s3Brush",_(r);let O=i.getObjectByName("scenery");if(O)for(let D of O.children)D.position.distanceTo(new w(2.05,-.55,-12))<.01&&_(D);A.brush={scale:z.scale,at:L.at,nearestToLanes:L.lane,spins:!1}}}let N=Qe.cine&&d?yM({camera:a,renderPass:d,updaters:l}):null;if(N&&(A.cine={...fr}),Qe.bubbles&&o&&(A.bubbles=pM({scene:i,staticBubbles:o,camera:N||a,updaters:l,mascot:c})),Qe.edges&&u&&h&&(A.edges=gM({scene:i,L:u,W:h,env:e,updaters:l})),Qe.tunnel&&x&&y&&(A.tunnel=await Rm({scene:i,TR:x,L:u,W:h,camera:a,updaters:l,mascot:c,bump:y,brushBytes:await va.brushT,waterSheets:m,soap:{vertex:Dm,fragment:zm},loaderParse:I=>C.parseAsync(I.slice(0),""),drumMeshes:b,round2:Qe.round2?{exitLight:R,grade:p,bloomPass:v,hooks:E,round3:Qe.round3,round4:Qe.round4,round5:Qe.round5,fluffy:Qe.fluffy,tripoBrush:Qe.tripobrush,env:e}:null})),Qe.paint&&p&&g&&(A.paint=await bM({scene:i,camera:a,updaters:l,tunnelStart:n,sideMachinery:r,staticBubbles:o,rollers:f,grade:p,bloomPass:v,outputPass:g,waterSheets:m,L:u,W:h})),Qe.edges&&a){let I=[];i.traverse(L=>{/^s3(Castle|Entrance|Machinery|Brush|IcyEdge|Bubbles)/.test(L.name)&&I.push(L)});let z=!1;l.push(()=>{let L=a.position.z,O=z?L>n:L>n+1.5;if(O!==z){z=O;for(let D of I)D.visible=!z}}),A.hiddenInTunnel=I.length}return A}function Im(i,e){i.updateMatrixWorld(!0);let t=1/0,n=new w;return i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.attributes.position;for(let o=0;o<r.count;o+=2)n.fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld),n.z<e&&n.y<2.6&&(t=Math.min(t,Math.abs(n.x)))}),t}function pM({scene:i,staticBubbles:e,camera:t,updaters:n,mascot:s}){let r=Li.bubbles,o=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,a={uTime:{value:0},uMotion:{value:o?0:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:r.centreAlpha},uFilm:{value:Qe.edges?vo.film:1}},l=new Ue({uniforms:a,vertexShader:Dm,fragmentShader:zm,transparent:!0,depthWrite:!1,depthTest:!0,blending:Nt,blendSrc:kt,blendDst:At}),c=new tn(1,40,24),u=(x,y)=>{let b=new Qt;return b.index=c.index,b.setAttribute("position",c.attributes.position),b.setAttribute("normal",c.attributes.normal),b.setAttribute("inst",x),b.setAttribute("motion",y),b},h=x=>{let y=new Te(x,l);return y.frustumCulled=!1,y.renderOrder=5,y.name="s3Bubbles",i.add(y),y},d=e.geometry,f=h(u(d.attributes.inst,d.attributes.motion)),p=r.extra.length,v=u(new st(new Float32Array(p*4),4),new st(new Float32Array(p*4),4));v.instanceCount=0,h(v);let g=new Zt(40,.5,.1,200),m=!1;return n.push((x,y,b)=>{if(a.uTime.value=y,s&&a.uAvoid.value.copy(s.root.position),e.visible=!1,f.geometry.instanceCount=d.instanceCount,m||b!=="intro")return;m=!0,g.fov=t.aspect>=.5?t.fov:_e.radToDeg(2*Math.atan(Math.tan(_e.degToRad(t.fov)/2)*t.aspect/.5)),g.position.copy(t.position),g.quaternion.copy(t.quaternion),g.updateProjectionMatrix(),g.updateMatrixWorld(!0);let R=g.getWorldDirection(new w),E=new w,A=v.attributes.inst,C=v.attributes.motion,M=_=>1076/(2*_*Math.tan(_e.degToRad(g.fov)/2));r.extra.forEach(([_,S,U,N,I,z],L)=>{E.set(_/538*2-1,1-S/1076*2,.5).unproject(g).sub(g.position).normalize();let O=g.position.clone().addScaledVector(E,U/E.dot(R));A.setXYZW(L,O.x,O.y,O.z,N/M(U)),C.setXYZW(L,1.7+L*2.3,I,z,0)}),v.instanceCount=p,A.needsUpdate=C.needsUpdate=!0}),{spheres:!0,extra:p,reducedMotion:o}}var Dm=`
attribute vec4 inst;     // centre xyz, radius
attribute vec4 motion;   // phase, rise speed, sway, kind
uniform float uTime, uMotion;
uniform vec3 uAvoid;
varying vec3 vN; varying vec3 vW; varying float vPhase; varying float vFade;
void main() {
  float ph = motion.x, rise = motion.y * uMotion, sway = motion.z * uMotion;
  float lift = 0.0, fade = 1.0;
  if (rise > 0.0) { float k = fract(uTime * rise / 1.4 + ph * 0.159); lift = k * 1.4 - 0.4; fade = smoothstep(0.0, 0.15, k) * (1.0 - smoothstep(0.8, 1.0, k)); }
  vec3 centre = inst.xyz + vec3(sin(uTime * 0.55 + ph) * sway, lift + sin(uTime * 0.9 + ph * 1.3) * inst.w * 0.08 * uMotion, cos(uTime * 0.45 + ph) * sway * 0.6);
  fade *= smoothstep(0.35, 0.85, length(centre - uAvoid) - inst.w * 0.6);
  float wob = 1.0 + 0.025 * sin(uTime * 2.3 + ph * 3.0) * uMotion;
  vec3 p = centre + normal * inst.w * vec3(wob, 1.0 / wob, wob);
  vN = normal; vW = p; vPhase = ph; vFade = fade * step(0.0005, inst.w);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,zm=`
uniform float uTime, uCentreAlpha, uFilm;
varying vec3 vN; varying vec3 vW; varying float vPhase; varying float vFade;
void main() {
  if (vFade <= 0.0) discard;
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0), fres = pow(1.0 - ndv, 2.2);
  // thin-film colour: pearly pink (#FF8EE6), lavender (#D099FF), icy cyan (#6DF0FF), pale blue, swirling slowly
  float film = fres * 1.3 + 0.22 * sin(dot(N, vec3(2.7, 1.9, 3.3)) * 2.4 + uTime * 0.35 + vPhase) + vPhase * 0.17;
  float k = fract(film) * 4.0;
  vec3 c0 = vec3(1.0, 0.557, 0.902), c1 = vec3(0.816, 0.6, 1.0), c2 = vec3(0.427, 0.941, 1.0), c3 = vec3(0.78, 0.9, 1.0);
  vec3 col = k < 1.0 ? mix(c0, c1, k) : k < 2.0 ? mix(c1, c2, k - 1.0) : k < 3.0 ? mix(c2, c3, k - 2.0) : mix(c3, c0, k - 3.0);
  col *= 0.6 + 0.9 * fres;
  // a soft pearly reflection across the upper part of the film (the approved bubbles show pink-lilac swirls there)
  float refl = smoothstep(0.25, 0.85, 1.0 - ndv) * (0.45 + 0.55 * smoothstep(-0.3, 0.8, N.y)) * 0.22;
  col += mix(c0, c1, 0.5 + 0.5 * sin(uTime * 0.3 + vPhase)) * refl;
  // soft white window highlights: up-left from the key light, a small one low-right
  vec3 L1 = normalize(vec3(0.45, 0.75, -0.5)), L2 = normalize(vec3(-0.5, -0.4, -0.6));
  float s1 = pow(max(dot(N, normalize(L1 + V)), 0.0), 90.0), s2 = pow(max(dot(N, normalize(L2 + V)), 0.0), 40.0) * 0.35;
  col += vec3(1.0, 0.98, 1.0) * (s1 * 1.1 + s2);
  float rim = smoothstep(0.82, 0.97, 1.0 - ndv) * (1.0 - smoothstep(0.985, 1.0, 1.0 - ndv)) * 0.25;
  float a = clamp(uCentreAlpha + (fres * 0.85 + rim * 1.6 + refl * 0.9) * uFilm + s1 * 0.8 + s2 * 0.6, 0.0, 0.92) * vFade;
  gl_FragColor = vec4(col * a, a);
}
`;function Fm(i,e,t){i.updateMatrixWorld(!0);let n=1/0,s=1/0,r=new w;return i.traverse(o=>{if(!o.isMesh)return;let a=o.geometry.attributes.position;for(let l=0;l<a.count;l++)r.fromBufferAttribute(a,l).applyMatrix4(o.matrixWorld),s=Math.min(s,r.z),r.y>-.2&&r.z<t+30&&(n=Math.min(n,Math.hypot(r.x,r.y-e)))}),{nearestToAxis:+n.toFixed(2),frontZ:+s.toFixed(2)}}function Zd(i,e,t,n){let s=new ot({map:i.map,metalnessMap:i.metalnessMap,roughnessMap:i.roughnessMap,normalMap:i.normalMap||null,metalness:1,roughness:1,envMap:e,envMapIntensity:n.envI,emissive:16777215,emissiveMap:i.map,emissiveIntensity:n.glow,side:qe}),r=n.gold||{},o=n.pink||null,a=n.cyan||null,l=u=>(+u).toFixed(4),c=`
    vec3 s3Grade(vec3 lin) {
      vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = s3Rgb2hsv(c); float h = hsv.x * 360.0;
      float gold = smoothstep(22.0, 30.0, h) * (1.0 - smoothstep(58.0, 66.0, h)) * smoothstep(0.3, 0.45, hsv.y);
      hsv.x = mix(hsv.x, ${l((r.hue??43)/360)}, gold * 0.6); hsv.y *= mix(1.0, ${l(r.sat??1)}, gold); hsv.z = min(1.0, hsv.z * mix(1.0, ${l(r.val??1)}, gold));
      ${o?`float pink = smoothstep(265.0, 280.0, h) * (1.0 - smoothstep(338.0, 350.0, h)) * smoothstep(0.1, 0.2, hsv.y);
      hsv.x = mix(hsv.x, ${l(o.hue/360)}, pink * ${l(o.mix)}); hsv.y *= mix(1.0, ${l(o.sat)}, pink);`:""}
      ${a?`float cyan = smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y);
      hsv.y *= mix(1.0, ${l(a.sat)}, cyan); hsv.z = min(1.0, hsv.z * mix(1.0, ${l(a.val)}, cyan));`:""}
      return pow(s3Hsv2rgb(hsv), vec3(2.2));
    }
    float s3GoldMask(vec3 lin) { vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = s3Rgb2hsv(c); float h = hsv.x * 360.0;
      return smoothstep(22.0, 30.0, h) * (1.0 - smoothstep(58.0, 66.0, h)) * smoothstep(0.3, 0.45, hsv.y); }
    ${a?`float s3CyanMask(vec3 lin) { vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = s3Rgb2hsv(c); float h = hsv.x * 360.0;
      return smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y); }`:""}`;return s.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("void main() {",`${mM}
${c}
float s3Gold = 0.0;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  s3Gold = s3GoldMask(diffuseColor.rgb);
  diffuseColor.rgb = s3Grade(diffuseColor.rgb);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
  metalnessFactor *= mix(1.0, ${l(r.metal??1)}, s3Gold);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = s3Grade(totalEmissiveRadiance)${a?` * (1.0 + ${l(a.glow)} * s3CyanMask(totalEmissiveRadiance))`:""};`)},s.customProgramCacheKey=()=>"s3:"+t+":"+JSON.stringify(n),s}var mM=`
vec3 s3Rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 s3Hsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function gM({scene:i,L:e,W:t,env:n,updaters:s}){let r={wallsHidden:0,railsHidden:0},o=e.startZ-24,a=-.6;i.traverse(d=>{if(!d.isMesh||d.isInstancedMesh||!d.material||!d.material.color)return;let f=d.material.color.getHex(),p=d.geometry;p.boundingBox||p.computeBoundingBox();let v=p.boundingBox;v.max.z-v.min.z>20&&v.min.z<o+1&&Math.abs((v.min.x+v.max.x)/2)<1.8&&(f===15128831||f===9425663?(d.visible=!1,r.wallsHidden++):p.type==="TubeGeometry"&&(d.visible=!1,r.railsHidden++))});let l={uTime:{value:0},uAlpha:{value:vo.edge.alpha},uFoam:{value:vo.edge.foam}},c=new Ue({uniforms:l,vertexShader:vM,fragmentShader:xM,transparent:!0,depthWrite:!1,side:qe,blending:Nt,blendSrc:kt,blendDst:At}),u=vo.edge.profile,h=u.length;for(let d of[-1,1]){let f=[],p=[],v=[],g=0;for(let y=o;y<=a+1e-6;y+=.25,g++){let b=t.baseHeight(e,d*t.SLIDE.half,y);u.forEach(([R,E],A)=>{f.push(d*(t.SLIDE.half+R),b+E,y),p.push(A/(h-1))})}for(let y=0;y<g-1;y++)for(let b=0;b<h-1;b++){let R=y*h+b,E=R+h;v.push(R,E,R+1,E,E+1,R+1)}let m=new Ze;m.setAttribute("position",new We(f,3)),m.setAttribute("across",new We(p,1)),m.setIndex(v),m.computeVertexNormals();let x=new Te(m,c);x.renderOrder=2,x.name="s3IcyEdge",i.add(x)}return s.push((d,f)=>{l.uTime.value=f}),r.icyEdges=2,r}var vM=`
attribute float across;
varying vec3 vW; varying vec3 vN; varying float vAcross;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vAcross = across;
  gl_Position = projectionMatrix * viewMatrix * w; }
`,xM=`
uniform float uTime, uAlpha, uFoam;
varying vec3 vW; varying vec3 vN; varying float vAcross;
float eh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float en(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(eh(i), eh(i + vec2(1, 0)), f.x), mix(eh(i + vec2(0, 1)), eh(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - abs(dot(N, V)), 2.0);
  // icy crystal: pale cyan, deeper toward the outside, brighter facing away from the camera
  vec3 ice = mix(vec3(0.62, 0.92, 1.0), vec3(0.2, 0.62, 1.0), smoothstep(0.35, 1.0, vAcross));
  ice += vec3(0.6, 0.85, 1.0) * fres * 0.5;
  // a white foam crest along the top of the rim, broken into lumps that flow toward the portal
  float crest = exp(-pow((vAcross - 0.4) / 0.16, 2.0));
  float lumps = en(vec2(vW.z * 2.2 - uTime * 2.4, vAcross * 6.0)) * 0.6 + en(vec2(vW.z * 5.0 - uTime * 3.1, vAcross * 11.0)) * 0.4;
  float foam = smoothstep(0.35, 0.7, crest * (0.55 + 0.75 * lumps)) * uFoam;
  vec3 col = mix(ice, vec3(0.96, 0.99, 1.0), foam);
  // sparkles
  vec2 sp = vec2(vW.z * 9.0, vAcross * 14.0); vec2 sc = floor(sp);
  float tw = step(0.94, eh(sc)) * (1.0 - smoothstep(0.0, 0.22, length(fract(sp) - 0.5))) * pow(max(0.0, sin(uTime * (3.0 + eh(sc + 3.1) * 4.0) + eh(sc) * 40.0)), 6.0);
  col += vec3(1.0) * tw * 1.4;
  // the outer face: white-cyan foam spilling down over the edge into the water beside the slide (the approved slide's
  // edges foam over; without this the deep water beside the slide showed as a dark strip once the tall walls were gone)
  float outer = smoothstep(0.62, 0.86, vAcross);
  float spill = en(vec2(vW.z * 3.0 - uTime * 1.5, vW.y * 4.0 + uTime * 2.2)) * 0.6 + en(vec2(vW.z * 7.0, vW.y * 9.0 + uTime * 3.0)) * 0.4;
  col = mix(col, mix(vec3(0.55, 0.85, 1.0), vec3(0.97, 0.99, 1.0), smoothstep(0.3, 0.75, spill)), outer);
  float a = clamp(uAlpha * (0.7 + 0.6 * fres) + foam * 0.85 + tw + outer * (0.35 + 0.45 * spill), 0.0, 0.95);
  gl_FragColor = vec4(col * a, a);
}
`;function yM({camera:i,renderPass:e,updaters:t}){let n=new Zt(i.fov,i.aspect,i.near,i.far),s=new w,r=new _t,o=new w(1,0,0),a=null;return t.push((l,c,u)=>{u==="running"&&a===null&&(a=c);let h=a===null?0:c-a,d=u==="intro"?1:a===null?0:1-_e.smoothstep(h,0,fr.blend);if(d<=0){e.camera!==i&&(e.camera=i);return}i.getWorldDirection(s),s.y=0,s.normalize(),n.position.copy(i.position).addScaledVector(s,fr.forward*d),n.position.y+=fr.up*d,n.quaternion.copy(i.quaternion).multiply(r.setFromAxisAngle(o,-_e.degToRad(fr.pitch)*d)),n.fov=i.fov*(1+(fr.fov-1)*d),n.aspect=i.aspect,n.near=i.near,n.far=i.far,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),e.camera=n}),n}async function bM({scene:i,camera:e,updaters:t,tunnelStart:n,sideMachinery:s,staticBubbles:r,rollers:o,grade:a,bloomPass:l,outputPass:c,waterSheets:u,L:h,W:d}){let f=Um,p=await new Rs().loadAsync("ui/s3_paint_backdrop.png");p.colorSpace=St,p.anisotropy=4;let v=[i.getObjectByName("entranceDecor"),i.getObjectByName("scenery"),s,r,...(o||[]).filter(xe=>xe.centre.z<n).map(xe=>xe.g)].filter(Boolean);for(let xe of v)xe.visible=!1;let g=48,m=96,x=-40,y=578,b=-80,R=1156,E=(g+1)*(m+1),A=new Float32Array(E*3),C=new Float32Array(E*2),M=[];for(let xe=0;xe<=m;xe++)for(let ue=0;ue<=g;ue++){let Re=xe*(g+1)+ue;C[Re*2]=x+(y-x)*ue/g,C[Re*2+1]=b+(R-b)*xe/m}for(let xe=0;xe<m;xe++)for(let ue=0;ue<g;ue++){let Re=xe*(g+1)+ue,He=Re+g+1;M.push(Re,He,Re+1,Re+1,He,He+1)}let _=new Ze;_.setAttribute("position",new nt(A,3)),_.setAttribute("stage",new nt(C,2)),_.setIndex(M);let S={map:{value:p},uFade:{value:1},uBanner:{value:0},uPanel:{value:0}},U=new Ue({uniforms:S,vertexShader:_M,fragmentShader:wM,transparent:!0,depthWrite:!0,depthTest:!0,blending:Nt,blendSrc:qo,blendDst:At,blendSrcAlpha:zh,blendDstAlpha:At}),N=new Te(_,U);N.name="s3Paint",N.frustumCulled=!1,N.renderOrder=-1,N.visible=!1,i.add(N),a.uniforms.uS3Paint={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS3Paint;").replace("gl_FragColor = max(c, 0.0);",`{ vec4 s3o = texture2D(tDiffuse, vUv); c.rgb = mix(c.rgb, s3o.rgb, clamp(1.0 - s3o.a, 0.0, 1.0) * uS3Paint); c.a = s3o.a; }
      gl_FragColor = max(c, 0.0);`),a.material.needsUpdate=!0,c.uniforms.uS3Paint={value:0},c.material.fragmentShader=c.material.fragmentShader.replace("uniform sampler2D tDiffuse;",`uniform sampler2D tDiffuse;
		uniform float uS3Paint;`).replace("gl_FragColor = texture2D( tDiffuse, vUv );","vec4 s3o = texture2D( tDiffuse, vUv ); gl_FragColor = s3o;").replace("// color space",`gl_FragColor.rgb = mix( gl_FragColor.rgb, s3o.rgb, clamp( 1.0 - s3o.a, 0.0, 1.0 ) * uS3Paint ); gl_FragColor.a = 1.0;
			// color space`),c.material.needsUpdate=!0;let I={uPaintCut:{value:0},uPaintZ:{value:f.cutZ}},z=(u||[]).find(xe=>(xe.geometry.computeBoundingBox(),xe.geometry.boundingBox.min.z<n-5)),L=!1;if(z&&z.material.fragmentShader.includes("  vec2 xz = vTrack;")){let xe=z.material,ue=xe.clone();ue.uniforms={...xe.uniforms,...I},ue.fragmentShader=`uniform float uPaintCut; uniform float uPaintZ;
`+xe.fragmentShader.replace("  vec2 xz = vTrack;",`  vec2 xz = vTrack;
  if (uPaintCut > 0.5 && abs(xz.x) > uSlideHalf + 0.62 && xz.y > uPaintZ && xz.y < uTunnel.x) discard;`),z.material=ue,L=!0}let O=a.material.fragmentShader.includes("uS3Paint")&&c.material.fragmentShader.includes("s3o.rgb"),D=new Zt(40,.5,.1,200),j=new w,k=new w,Z=(xe,ue,Re)=>{let He=Math.min(1,Math.max(0,(Re-xe)/(ue-xe)));return He*He*(3-2*He)},ge=(xe,ue,Re)=>{let He=H=>{let be=xe.y+ue.y*H,ee=xe.z+ue.z*H;return be<d.baseHeight(h,0,Math.min(ee,n-.5))-f.groundBelow},ie=.3,se=null;for(let H=.3;H<=Re;H+=.25){if(He(H)){se=H;break}ie=H}if(se===null)return Re;for(let H=0;H<20;H++){let be=(ie+se)/2;He(be)?se=be:ie=be}return se},de=new Float32Array(E),V=0,J=!1,me=null,oe=null;return t.push((xe,ue,Re)=>{if(!J&&Re==="intro"){J=!0,D.fov=e.aspect>=.5?e.fov:_e.radToDeg(2*Math.atan(Math.tan(_e.degToRad(e.fov)/2)*e.aspect/.5)),D.position.copy(e.position),D.quaternion.copy(e.quaternion),D.updateProjectionMatrix(),D.updateMatrixWorld(!0);let H=D.position,be=fe=>(fe-H.z)/Math.max(j.z,1e-4);for(let fe=0;fe<E;fe++){let pe=C[fe*2],De=C[fe*2+1];j.set(pe/538*2-1,1-De/1076*2,.5).unproject(D).sub(H).normalize();let we=1-Z(.8,1.3,((pe-52)/120)**2+((De-582)/135)**2),F=Z(368,410,pe)*Z(395,430,De)*(1-Z(780,820,De)),T=Math.min(1,1-Z(60,95,pe)+Z(445,480,pe))*Z(50,80,De)*(1-Z(430,470,De))*(1-Math.max(we,F)),B=Math.max(.05,1-Math.max(we,F,T)),X=1/((we/be(f.brush)+F/be(f.machinery)+T/be(f.towers)+B/be(f.far))/(we+F+T+B)),Y=Math.max(we,F,T);j.y<-1e-4&&(X=X*Y+Math.min(X,ge(H,j,X))*(1-Y)),k.copy(H).addScaledVector(j,X),de[fe]=X,A[fe*3]=k.x,A[fe*3+1]=k.y,A[fe*3+2]=k.z}let ee=[];for(let fe=0;fe<m;fe++)for(let pe=0;pe<g;pe++){let De=fe*(g+1)+pe,we=De+g+1,F=[De,De+1,we,we+1].map(T=>de[T]);Math.max(...F)/Math.min(...F)<f.tear&&ee.push(De,we,De+1,De+1,we,we+1)}_.setIndex(ee),V=M.length/6-ee.length/6,_.attributes.position.needsUpdate=!0,_.computeBoundingSphere(),N.visible=!0}Re==="running"&&me===null&&(me=ue);let He=me===null?-1:ue-me,ie=He<0?0:Z(0,.45,He);S.uBanner.value=ie,S.uPanel.value=ie,S.uFade.value=1-Z(f.fadeFrom,f.fadeTo,e.position.z);let se=J&&S.uFade.value>.001&&e.position.z<n;N.visible=se,U.depthWrite=S.uFade.value>.999,a.uniforms.uS3Paint.value=c.uniforms.uS3Paint.value=se?1:0,I.uPaintCut.value=se?1:0,l&&(se?oe===null&&(oe=l.enabled,l.enabled=!1):oe!==null&&(l.enabled=oe,oe=null))}),{grid:[g,m],hidden:v.length,passesPatched:O,moatCut:L,depths:{...f},get tornCells(){return V}}}var _M=`
attribute vec2 stage;
varying vec2 vStage;
void main() { vStage = stage; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,wM=`
uniform sampler2D map; uniform float uFade, uBanner, uPanel;
varying vec2 vStage;
// 1 inside a rounded rectangle (centre c, half size h, corner radius r), softened over 6 px
float rrect(vec2 p, vec2 c, vec2 h, float r) { vec2 q = abs(p - c) - h + r; float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; return 1.0 - smoothstep(-3.0, 3.0, d); }
void main() {
  vec2 uv = vec2((vStage.x - 1.0) / 536.0, vStage.y / 1076.0);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;
  vec4 t = texture2D(map, vec2(uv.x, 1.0 - uv.y));
  float a = t.a * uFade;
  a *= 1.0 - uBanner * rrect(vStage, vec2(269.0, 233.0), vec2(208.0, 74.0), 30.0);   // the painted "Let's go!" banner
  a *= 1.0 - uPanel * rrect(vStage, vec2(269.0, 890.0), vec2(244.0, 124.0), 32.0);   // the painted Tap to Start panel
  if (a < 0.01) discard;
  gl_FragColor = vec4(t.rgb, a);   // linear colour; the alpha channel's mark keeps it past the grade and tone mapping
}
`;var Ui=!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)));function pr(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var yc={1:"models/roller_candidate_1.glb",2:"models/roller_candidate_2.glb"},ya=typeof window>"u"?null:String(window.__BW_ROLLER__||(location.search.match(/[?&]roller=(\d)/)||[])[1]||"")||null,Bm=EM()&&yc[ya]?MM(yc[ya]):null;function EM(){return!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)))}async function MM(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}var TM={at:[-2.7,null,-6.4],yaw:-50,length:2.7,spin:-1.4,feetY:.4};function ba(i,e){let t=Math.random;Math.random=i;try{return e()}finally{Math.random=t}}async function Gm(i,e){let t=Math.random;Math.random=i;try{return await e()}finally{Math.random=t}}var xa=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Wm(i){let{scene:e,env:t,TR:n,L:s,W:r,mascot:o,camera:a,Particles:l,fxScale:c,waterU:u,grade:h,bubbles:d,rollers:f,sideMachinery:p,setSideMachinery:v,fur:g,mascotModel:m}=i,x=pr(377827),y=new $e;y.name="openingLook",e.add(y);let b=r.WATER+r.AXIS_H,R=s.tunnelStart,E=[],A=new ot({color:16762194,metalness:1,roughness:.17,envMap:t,envMapIntensity:1.55,emissive:4860416,emissiveIntensity:.45}),C=new ot({color:15242798,metalness:1,roughness:.26,envMap:t,envMapIntensity:1.35,emissive:3808256,emissiveIntensity:.5}),M=new ot({color:2759290,metalness:.1,roughness:.34,envMap:t,envMapIntensity:.9,emissive:1181247,emissiveIntensity:.5,side:qe});if(Gn.portal){let T=new $e;T.name="washerDoor",T.position.set(0,b,0),y.add(T);let B=G=>(G.rotateX(Math.PI/2),G),W=new Te(new Ot(2.74,.25,28,140),A);W.position.z=2.72,T.add(W);let X=new Te(new Ot(3.02,.075,14,140),C);X.position.z=2.62,T.add(X);let Y=new Te(new Ot(2.5,.06,12,140),C);Y.position.z=2.98,T.add(Y);let ve=new Ut(new tn(.075,14,10),C,28),Ee=new Se;for(let G=0;G<28;G++){let Ae=G/28*Math.PI*2;ve.setMatrixAt(G,Ee.makeTranslation(Math.cos(Ae)*2.76,Math.sin(Ae)*2.76,2.47))}T.add(ve);let Me=[[2.56,3.02],[2.47,3.12],[2.5,3.24],[2.41,3.36],[2.44,3.48],[2.35,3.6],[2.37,3.7],[2.27,3.8],[2.24,3.88]],Fe=B(new oo(Me.map(([G,Ae])=>new ae(G,Ae)),140));T.add(new Te(Fe,M));let ce=[new re(.08,1,1.9),new re(.4,1.35,2.1),new re(.08,1,1.9)],he=[];[[2.43,3.15],[2.39,3.4],[2.31,3.64]].forEach(([G,Ae],Q)=>{let le=new Bt({color:ce[Q].clone()}),Be=new Te(new Ot(G,.022,8,140),le);Be.position.z=Ae,T.add(Be),he.push({mat:le,base:ce[Q],u:Ae})});let ye=new Ue({uniforms:{uColor:{value:new re(.25,.95,1.6)},uGain:{value:1}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uGain; varying vec2 vP; void main() { float r = length(vP); float k = exp(-pow((r - 2.26) / 0.04, 2.0)); gl_FragColor = vec4(uColor * k * uGain, 1.0); }",transparent:!0,blending:mn,depthWrite:!1,side:qe}),Pe=new Te(new or(2.2,2.34,140,1),ye);Pe.position.z=3.87,Pe.renderOrder=3,T.add(Pe);let Ce=new Ue({uniforms:{uWall:{value:new re(.66,.56,.93)},uShade:{value:new re(.2,.13,.45)}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uWall, uShade; varying vec2 vP;
        void main() {
          float r = length(vP);
          float shade = 1.0 - smoothstep(2.95, 3.35, r);                 // soft shadow next to the gold ring
          vec3 c = mix(uWall, uShade, shade * 0.55);
          c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);               // a little lighter toward the top
          c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));      // a dark outline right at the ring
          float a = 1.0 - smoothstep(3.55, 3.92, r);                     // fades into the castle's own wall
          gl_FragColor = vec4(c * a, a);
        }`,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At,side:qe}),tt=new Te(new or(2.93,3.92,160,1),Ce);tt.position.z=.86,tt.renderOrder=1,T.add(tt);let et=new ri({map:FM(),color:new re(2.2,2,1.6),transparent:!0,blending:mn,depthWrite:!1}),ht=[];for(let G=0;G<7;G++){let Ae=.35+G*.36+x()*.2,Q=new vi(et.clone());Q.position.set(Math.cos(Ae)*2.9,Math.sin(Ae)*2.9,2.45),Q.renderOrder=4,T.add(Q),ht.push({sp:Q,ph:x()*6.28,rate:1.3+x()*1.4})}E.push((G,Ae)=>{for(let Q of he)Q.mat.color.copy(Q.base).multiplyScalar(.82+.25*Math.sin(Ae*2.6-Q.u*2.2));ye.uniforms.uGain.value=.8+.2*Math.sin(Ae*1.7);for(let Q of ht){let le=Math.pow(Math.max(0,Math.sin(Ae*Q.rate+Q.ph)),8);Q.sp.scale.setScalar(.05+.42*le),Q.sp.material.opacity=le}})}let _=new l(700);_.u.uScale=c;let S=new Ue({uniforms:{uTime:{value:0}},vertexShader:CM,fragmentShader:PM}),U=64,N=new Ut(IM(x),S,U);N.frustumCulled=!1,N.name="mascotFoam",y.add(N);let I=[];for(let T=0;T<U;T++){let B=T>=40,W=B?Math.PI+(x()<.5?-1:1)*(.55+x()*1.15):T/40*Math.PI*2+x()*.12;!B&&Math.abs((W-Math.PI+Math.PI*3)%(Math.PI*2)-Math.PI)<.6&&(W=Math.PI+(x()<.5?-1:1)*(.6+x()*.7));let X=B?.6+Math.pow(x(),.8)*.45:.42+x()*.08;I.push({a:W,r:X,s:B?.03+x()*.04:.055+x()*.05,ph:x()*6.28,spin:x()*6.28,outer:B,drift:x()})}let z=new _t,L=new Sn,O=new w,D=new w,j=new Se,k={P:new w,R:new w,U:new w,T:new w},Z=o.x,ge={side:0,wall:0,puff:0,bow:0},de=T=>1-xa(R-3.5,R-.8,T),V=(T,B)=>{let W=o,X=T-W.x,Y=B-W.z,ve=W.speed/r.CRUISE,Ee=W.downhill||0,Me=Math.hypot(X,Y*.85),Fe=xa(-.3,.5,Y),ce=Math.exp(-(((Me-.6)/.17)**2))*(.06+.06*ve+.05*Ee)*(.55+.75*Fe),he=-Math.exp(-Me*Me*9)*.04,ye=Math.min(1,Math.max(0,-Y/(2.4+2.6*ve))),Pe=.6+ye*(.8+.7*ve),Ce=Math.exp(-(((Math.abs(X-W.xv*.12*ye)-Pe)/.15)**2))*(Y<=0?1:0)*(1-ye)*(.02+.07*ve);return ce+he+Ce},J=(T,B,W)=>r.surface(s,T,B,W)+V(T,B);E.push((T,B,W)=>{let X=o,Y=W==="running",ve=Gn.foam?de(X.z):0,Ee=r.surface(s,X.x,X.z,B)+r.FLOAT_H,Me=Math.max(0,X.yAbs-Ee),Fe=ve*(1-xa(.08,.45,Me)),ce=Math.min(1.4,X.speed/r.CRUISE);Z+=(X.x-Z)*Math.min(1,T*5);for(let he=0;he<U;he++){let ye=I[he],Pe=Y?(B*(1.1+1.4*ye.drift)+ye.drift)%1:0,Ce=Pe*ce*(ye.outer?.9:.5),et=(ye.outer?Z:X.x)+Math.sin(ye.a)*ye.r*(1+.25*ce*Pe),ht=X.z+Math.cos(ye.a)*ye.r*.85-Ce,G=J(et,ht,B),Ae=Math.sin(B*2.3+ye.ph)*.015,Q=Y?Math.sin(Math.PI*Math.min(1,Pe*1.05))*.6+.4:1,le=ye.s*Fe*Q*(Y?ye.outer?.5:.9:1)*(1+.12*Math.sin(B*1.7+ye.ph));n.frame(ht,k),D.copy(k.P).addScaledVector(k.R,et).addScaledVector(k.U,G+.01+le*.3+Ae),L.set(ye.spin+B*.4,ye.ph+B*.3,0),z.setFromEuler(L),O.set(le*1.25,le*.8,le*1.25),N.setMatrixAt(he,j.compose(D,z,O))}if(N.instanceMatrix.needsUpdate=!0,S.uniforms.uTime.value=B,N.visible=Fe>.001,Fe>.01&&!X.air){for(ge.side+=(Y?20+30*ce:16)*Fe*T;ge.side>=1;ge.side--){let he=x()<.5?-1:1,ye=(x()-.5)*1.4,Pe=X.x+he*(.44+x()*.14),Ce=X.z+ye*.35,tt=r.surface(s,Pe,Ce,B);_.emitT(Pe,tt+.04,Ce,he*(.4+x()*.7),1+x()*1.3,X.speed*.6+(x()-.5)*.5,.03+x()*.045,.45+x()*.35,0)}for(ge.puff+=(Y?6:7)*Fe*T;ge.puff>=1;ge.puff--){let he=Math.PI+(x()-.5)*2.6,ye=.5+x()*.35,Pe=X.x+Math.sin(he)*ye,Ce=X.z+Math.cos(he)*ye*.85,tt=r.surface(s,Pe,Ce,B);_.emitT(Pe,tt+.03,Ce,Math.sin(he)*.12,.12+x()*.12,X.speed*.8,.12+x()*.12,.6+x()*.5,1,.08)}}if(Gn.foam)for(ge.wall+=30*T;ge.wall>=1;ge.wall--){let he=Math.min(R-1.2,X.z-2+x()*18);if(de(he)<.5)continue;let ye=x()<.5?-1:1,Pe=ye*(r.SLIDE.half-.04),Ce=r.surface(s,Pe,he,B);_.emitT(Pe,Ce+.05,he,-ye*(.2+x()*.5),.8+x()*1.2,1.5+x()*2,.035+x()*.04,.4+x()*.3,0),x()<.25&&_.emitT(Pe-ye*.08,Ce+.03,he,-ye*.1,.1,2,.1+x()*.08,.5+x()*.4,1,.05)}_.update(T)}),u&&(u.uOpen.value=Gn.foam?1:0);let me={uTime:{value:0},uAvoid:{value:new w(0,-99,0)}},oe=new Ue({vertexShader:AM,fragmentShader:RM,uniforms:me,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}),xe=T=>{let B=new Wt(2,2),W=new Qt;W.index=B.index,W.attributes.position=B.attributes.position,W.attributes.uv=B.attributes.uv,W.setAttribute("inst",new st(new Float32Array(T*4),4).setUsage(En)),W.setAttribute("motion",new st(new Float32Array(T*4),4)),W.instanceCount=0;let X=new Te(W,oe);return X.frustumCulled=!1,X.renderOrder=5,y.add(X),X},ue=null,Re=!1,He=new Zt(40,.5,.1,200),ie=[];if(Gn.bubbles&&d){let T=d.geometry.attributes.inst,B=d.geometry.attributes.phase;for(let W=0;W<T.count;W++)T.getZ(W)>R-.5||(ie.push([T.getX(W),T.getY(W),T.getZ(W),T.getW(W),B.getX(W)]),T.setW(W,0));T.needsUpdate=!0,ue=xe(ie.length+km.length)}let se=64,H=Gn.bubbles?xe(se):null,be=[];for(let T=0;T<se;T++)be.push({a:Math.PI+(x()-.5)*3.8,r:.5+Math.pow(x(),1.3)*.7,s:.012+Math.pow(x(),2.2)*.04,ph:x()*6.28});let ee=20,fe=Gn.foam?xe(ee):null,pe=[];for(let T=0;T<ee;T++){let B=T<9,W=B?9:11,X=B?T:T-9,Y=B?1.35:1.75,ve=Math.PI+((X+.5)/W*2-1)*Y+(x()-.5)*.15;pe.push({a:ve,r:B?.47+x()*.05:.6+x()*.08,s:B?.1+x()*.07:.05+x()*.045,lift:B?.22+x()*.3:.25+x()*.2,ph:x()*6.28,drift:x(),inner:B})}if(E.push((T,B,W)=>{if(me.uTime.value=B,me.uAvoid.value.copy(o.root.position),ue&&!Re&&W==="intro"){Re=!0;let X=a.aspect;He.fov=X>=.5?a.fov:_e.radToDeg(2*Math.atan(Math.tan(_e.degToRad(a.fov)/2)*X/.5)),He.position.copy(a.position),He.quaternion.copy(a.quaternion),He.updateProjectionMatrix(),He.updateMatrixWorld(!0);let Y=He.getWorldDirection(new w),ve=new w,Ee=ue.geometry.attributes.inst,Me=ue.geometry.attributes.motion,Fe=0;for(let he of ie)Ee.setXYZW(Fe,he[0],he[1],he[2],he[3]),Me.setXYZW(Fe,he[4],0,.02,0),Fe++;let ce=he=>1076/(2*he*Math.tan(_e.degToRad(He.fov)/2));for(let[he,ye,Pe,Ce,tt,et]of km){ve.set(he/538*2-1,1-ye/1076*2,.5).unproject(He).sub(He.position).normalize();let ht=He.position.clone().addScaledVector(ve,Pe/ve.dot(Y));Ee.setXYZW(Fe,ht.x,ht.y,ht.z,Ce/ce(Pe)),Me.setXYZW(Fe,x()*6.28,tt,et,0),Fe++}ue.geometry.instanceCount=Fe,Ee.needsUpdate=Me.needsUpdate=!0}if(H){let X=o,Y=de(X.z)*(X.air?0:1),ve=H.geometry.attributes.inst,Ee=H.geometry.attributes.motion;for(let Me=0;Me<se;Me++){let Fe=be[Me],ce=W==="running"?(B*.9+Fe.ph)%1*(X.speed/r.CRUISE):0,he=Z+Math.sin(Fe.a)*Fe.r,ye=X.z+Math.cos(Fe.a)*Fe.r*.85-ce*1.2,Pe=J(he,ye,B);n.frame(ye,k),D.copy(k.P).addScaledVector(k.R,he).addScaledVector(k.U,Pe+Fe.s*.9),ve.setXYZW(Me,D.x,D.y,D.z,Fe.s*Y),Ee.setXYZW(Me,Fe.ph,0,0,-1)}H.geometry.instanceCount=se,ve.needsUpdate=!0,Ee.needsUpdate=!0}if(fe){let X=o,Y=W==="running",ve=Math.min(1.4,X.speed/r.CRUISE),Ee=Math.max(0,X.yAbs-(r.surface(s,X.x,X.z,B)+r.FLOAT_H)),Me=de(X.z)*(1-xa(.06,.35,Ee)),Fe=fe.geometry.attributes.inst,ce=fe.geometry.attributes.motion;for(let he=0;he<ee;he++){let ye=pe[he],Pe=Y?(B*(.7+.6*ye.drift)+ye.drift)%1:0,Ce=Pe*ve*(ye.inner?.35:.6),tt=Y?.55+.45*Math.sin(Math.PI*Math.min(1,Pe*1.1)):1,et=ye.inner?X.x:Z,ht=1+.06*Math.sin(B*2.1+ye.ph),G=et+Math.sin(ye.a)*ye.r*(1+.15*ve*Pe),Ae=X.z+Math.cos(ye.a)*ye.r*.85-Ce,Q=ye.s*Me*tt*ht;n.frame(Ae,k),D.copy(k.P).addScaledVector(k.R,G).addScaledVector(k.U,J(G,Ae,B)+Q*ye.lift),Fe.setXYZW(he,D.x,D.y,D.z,Q),ce.setXYZW(he,ye.ph,0,0,1)}fe.geometry.instanceCount=ee,fe.renderOrder=6,Fe.needsUpdate=!0,ce.needsUpdate=!0}}),Gn.brushes){if(v){let B={...Qd.machinery,at:[...Qd.machinery.at]},W=v(B);for(let X=0;X<20&&!(W>=Vm);X++)B.at[0]+=.03,W=v(B);i.machineryInnerX=W}p&&p.traverse(B=>{B.isMesh&&(B.material=F(B.material,"machinery","face",B.geometry))}),f.filter(B=>B.centre.z<R).forEach((B,W)=>{let X=null;B.g.traverse(ve=>{ve.isMesh&&(!X||ve.geometry.attributes.position.count>X.geometry.attributes.position.count)&&(X=ve)}),X&&(X.material=F(X.material,"roller"+W,"roller",X.geometry));let Y=Qd.rollers[W];Y&&Y.hide?B.g.visible=!1:Y&&De(B,Y)})}function De(T,B){let W=new an,X=new w,Y=new w,ve=T.g.children[0];T.g.remove(ve),ve.updateMatrixWorld(!0),W.setFromObject(ve),W.getSize(X),W.getCenter(Y),T.g.add(ve);let Ee=B.d/Math.max(X.x,X.z),Me=new w(...B.axis).normalize(),Fe=n.map(B.at[0],B.at[1],B.at[2]);T.m0=new Se().compose(Fe,new _t().setFromUnitVectors(new w(0,1,0),Me),new w(Ee,Ee,Ee)).multiply(new Se().makeTranslation(-Y.x,-Y.y,-Y.z)),T.centre=Fe,T.axis=Me}if(Gn.slide&&e.traverse(T=>{if(T.isMesh&&T.material&&T.material.isMeshStandardMaterial&&T.material.color.getHex()===15128831){let B=T.material.clone();B.color.set(9425663),B.roughness=.16,B.metalness=.1,B.envMapIntensity=1.35,B.emissive.set(1929176),B.emissiveIntensity=.35,T.material=B}}),Gn.mascot&&m){let T=new w(...Om.stretch);m.scale.multiply(T),m.position.multiply(T),g&&(g.uSpike.value=Om.spike)}h&&(h.uniforms.uOpen.value=0),E.push(()=>{if(!h)return;let T=a.position.z;h.uniforms.uOpen.value=Gn.light?1-xa(-6,1.2,T):0});async function we(){if(Lm&&(window.__bwS3=await Hm({scene:e,env:t,axisY:b,tunnelStart:R,oldCastle:i.castle,sideMachinery:p,staticBubbles:ue,camera:a,updaters:E,mascot:o,L:s,W:r,renderPass:i.renderPass,rollers:f,grade:h,bloomPass:i.bloomPass,outputPass:i.outputPass,waterSheets:i.waterSheets,TR:n,bumpMascot:i.bumpMascot,drumMeshes:i.drumMeshes,exitLight:i.exitLight,r2:i.r2})),!Bm)return;let T=await Bm;if(!T){i.rollerCandidate={file:yc[ya],error:"not found"};return}let B=await new Fs().parseAsync(T,""),W=null;B.scene.traverse(Le=>{Le.isMesh&&!W&&(W=Le)});let X=W.geometry,Y=X.attributes.position,ve=X.index.array,Ee=ve.length/3,Me=Le=>`${Math.round(Y.getX(Le)*1e4)},${Math.round(Y.getY(Le)*1e4)},${Math.round(Y.getZ(Le)*1e4)}`,Fe=new Map,ce=new Int32Array(Y.count);for(let Le=0;Le<Y.count;Le++){let rt=Me(Le);Fe.has(rt)||Fe.set(rt,Fe.size),ce[Le]=Fe.get(rt)}let he=new Int32Array(Fe.size).map((Le,rt)=>rt),ye=Le=>{for(;he[Le]!==Le;)Le=he[Le]=he[he[Le]];return Le};for(let Le=0;Le<Ee;Le++){let rt=ye(ce[ve[Le*3]]);he[ye(ce[ve[Le*3+1]])]=rt,he[ye(ce[ve[Le*3+2]])]=rt}let Pe=new Map;for(let Le=0;Le<Ee;Le++){let rt=ye(ce[ve[Le*3]]);Pe.has(rt)||Pe.set(rt,[]),Pe.get(rt).push(ve[Le*3],ve[Le*3+1],ve[Le*3+2])}let Ce=[...Pe.values()].sort((Le,rt)=>rt.length-Le.length),tt=(()=>{let Le=W.material.metalnessMap;if(!Le||!Le.image)return null;let rt=document.createElement("canvas");rt.width=Le.image.width,rt.height=Le.image.height;let fn=rt.getContext("2d");fn.drawImage(Le.image,0,0);let ls=fn.getImageData(0,0,rt.width,rt.height).data,Wn=X.attributes.uv;return(Yt,P,$)=>{let ne=(Wn.getX(Yt)+Wn.getX(P)+Wn.getX($))/3,te=(Wn.getY(Yt)+Wn.getY(P)+Wn.getY($))/3;Le.flipY&&(te=1-te);let q=Math.min(rt.width-1,Math.max(0,Math.floor(ne*rt.width))),Ie=Math.min(rt.height-1,Math.max(0,Math.floor(te*rt.height)));return ls[(Ie*rt.width+q)*4+2]/255}})(),et=0;if(tt){let Le=Ce[0],rt=Yt=>(Y.getZ(Le[Yt])+Y.getZ(Le[Yt+1])+Y.getZ(Le[Yt+2]))/3,fn=[];for(let Yt=0;Yt<Le.length;Yt+=3)tt(Le[Yt],Le[Yt+1],Le[Yt+2])<.5&&fn.push(rt(Yt));fn.sort((Yt,P)=>Yt-P);let ls=fn[Math.floor(fn.length*.02)],Wn=fn[Math.floor(fn.length*.98)];for(let Yt=0;Yt<Le.length;Yt+=3)tt(Le[Yt],Le[Yt+1],Le[Yt+2])>.5&&(rt(Yt)<ls||rt(Yt)>Wn)&&et++}let ht=Le=>{let rt=new Ze;for(let fn of Object.keys(X.attributes))rt.setAttribute(fn,X.attributes[fn]);return rt.setIndex(Le),rt.computeBoundingBox(),rt.computeBoundingSphere(),rt},G=ht(Ce[0]),Ae=Ce.length>1?ht(Ce.slice(1).flat()):null,Q=!!Ae&&et<10,le=G.boundingBox,Be=new w((le.min.x+le.max.x)/2,(le.min.y+le.max.y)/2,0);X.computeBoundingBox();let ke=X.boundingBox,at=ke.getSize(new w),zt=W.material,un=new ot({map:zt.map,metalnessMap:zt.metalnessMap,roughnessMap:zt.roughnessMap,normalMap:zt.normalMap||null,metalness:1,roughness:1,envMap:t,envMapIntensity:1.15,emissive:16777215,emissiveMap:zt.map,emissiveIntensity:.2,side:qe});un.customProgramCacheKey=()=>"opening:rollerCandidate";let vt=TM,Hn=vt.length/at.z,cn=new $e;cn.name="rollerCandidate"+ya;let os=new $e;os.scale.setScalar(Hn),cn.add(os);let Vs=new $e;Vs.position.copy(Be),os.add(Vs);let wi=new Te(G,un);if(wi.position.copy(Be).negate(),Vs.add(wi),Ae){let Le=new Te(Ae,un);os.add(Le)}y.add(cn);let yr=()=>{let Le=vt.length/at.z;os.scale.setScalar(Le),cn.position.set(vt.at[0],vt.feetY-ke.min.y*Le,vt.at[2]),cn.rotation.y=_e.degToRad(vt.yaw)};yr();let wo=()=>{cn.updateMatrixWorld(!0);let Le=1/0,rt=new w;return cn.traverse(fn=>{if(!fn.isMesh)return;let ls=fn.geometry.attributes.position;for(let Wn=0;Wn<ls.count;Wn+=3)rt.fromBufferAttribute(ls,Wn).applyMatrix4(fn.matrixWorld),rt.z<R&&rt.y<2.6&&(Le=Math.min(Le,Math.abs(rt.x)))}),Le},Eo=()=>{let Le=wo();for(let rt=0;rt<30&&Le<Vm;rt++)cn.position.x+=.04*Math.sign(cn.position.x||-1),Le=wo();return Le},as=Eo();window.__bwRoller=Le=>(Object.assign(vt,Le),yr(),as=Eo(),i.rollerCandidate={...i.rollerCandidate,at:cn.position.toArray().map(rt=>+rt.toFixed(2)),nearestToLanes:+as.toFixed(2)},i.rollerCandidate);let Mo=f.filter(Le=>Le.centre.z<R);Mo[1]&&(Mo[1].g.visible=!1),i.rollerCandidate={file:yc[ya],pieces:Pe.size,drumTris:Ce[0].length/3,bracketTris:Ae?Ae.index.count/3:0,fusedGoldTris:et,spinnable:Q,scale:+Hn.toFixed(3),diameter:+(Math.max(at.x,at.y)*Hn).toFixed(2),length:vt.length,at:cn.position.toArray().map(Le=>+Le.toFixed(2)),nearestToLanes:+as.toFixed(2)},Q&&E.push(Le=>{Vs.rotation.z+=vt.spin*Le})}return rm&&(window.__bwPhaseA=lm({scene:e,castle:i.castle,waterSheets:i.waterSheets,axisY:b,tunnelStart:R})),{root:y,loadExtras:we,update(T,B,W){for(let X of E)X(T,B,W)}};function F(T,B,W,X){let Y=T.clone(),ve=T.onBeforeCompile,Ee=T.customProgramCacheKey.bind(T),Me=W==="face";Me&&(Y.envMapIntensity=1.4,Y.emissiveIntensity=.15),X.computeBoundingBox();let Fe=X.boundingBox,ce=Fe.getCenter(new w),he=Fe.getSize(new w),ye=Me?Math.max(he.x,he.y)*.5:Math.max(he.x,he.z)*.5;return Y.onBeforeCompile=(Pe,Ce)=>{ve.call(T,Pe,Ce),Pe.vertexShader=Pe.vertexShader.replace("void main() {",`varying vec3 vFibreP;
void main() {
  vFibreP = position;`),Pe.fragmentShader=Pe.fragmentShader.replace("void main() {",`varying vec3 vFibreP;
${SM}
void main() {`);let tt=Me?"#include <emissivemap_fragment>":"#include <alphamap_fragment>",et=`(vFibreP - vec3(${ce.x.toFixed(4)}, ${ce.y.toFixed(4)}, ${ce.z.toFixed(4)})) / ${ye.toFixed(4)}`,ht=Me?"vec3(atan(q.y, q.x) * 160.0, length(q.xy) * 9.0, q.z * 30.0)":"vec3(atan(q.z, q.x) * 150.0, q.y * 120.0, length(q.xz) * 8.0)";Pe.fragmentShader=Pe.fragmentShader.replace(tt,`${tt}
        { vec3 cc = diffuseColor.rgb;
          float mx = max(cc.r, max(cc.g, cc.b));
          float soft = ${Me?"(1.0 - smoothstep(0.3, 0.6, metalnessFactor))":"1.0"} * smoothstep(0.04, 0.2, mx);
          vec3 q = ${et};
          vec3 fc = ${ht};
          float strand = fibreNoise(fc) * 0.65 + fibreNoise(fc * vec3(2.1, 1.7, 1.0) + 7.3) * 0.35;
          float f = mix(0.74, 1.18, smoothstep(0.2, 0.8, strand));
          diffuseColor.rgb *= mix(1.0, f, soft * 0.85);
          ${Me?"totalEmissiveRadiance *= mix(1.0, f, soft);":""} }`)},Y.customProgramCacheKey=()=>Ee()+"|fibre:"+B,Y}}var Gn={portal:Ui,foam:Ui,bubbles:Ui,brushes:Ui,slide:Ui,mascot:Ui,light:Ui,art:Ui};if(typeof window<"u"&&Array.isArray(window.__BW_OPENING_OFF__))for(let i of window.__BW_OPENING_OFF__)Gn[i]=!1;Qe.round3&&(Gn.art=!1);var Om={stretch:[.95,1.07,.95],spike:1},km=[[512,655,7.5,30,0,.03],[36,815,5.4,52,0,.03],[503,848,5.2,46,0,.03],[165,592,13,26,0,.04],[92,470,15,20,0,.04],[120,700,9,14,.12,.05],[420,720,9,12,.1,.05],[205,440,22,8,.15,.06],[345,430,22,9,.12,.06],[372,540,18,10,.1,.05],[160,520,18,9,.14,.05],[60,640,9,16,.08,.04],[250,400,26,6,.1,.05],[300,395,26,5,.12,.05],[24,560,12,22,0,.03]],Vm=1.18,Qd={machinery:{at:[2.9,.92,-9.7],yaw:.1,height:3.1},rollers:[{hide:!0},{at:[-2.7,1.1,-5.8],axis:[.12,1,.25],d:1.35}]},SM=`
float fibreHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float fibreNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(fibreHash(i), fibreHash(i + vec3(1, 0, 0)), f.x), mix(fibreHash(i + vec3(0, 1, 0)), fibreHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(fibreHash(i + vec3(0, 0, 1)), fibreHash(i + vec3(1, 0, 1)), f.x), mix(fibreHash(i + vec3(0, 1, 1)), fibreHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
`,AM=`
attribute vec4 inst;     // centre xyz, radius
attribute vec4 motion;   // phase, rise speed, sway, kind (0 floating in the air, 1 soap suds, -1 riding in the foam)
uniform float uTime;
uniform vec3 uAvoid;     // the mascot's body centre: floating bubbles part around it instead of drifting across it
varying vec2 vUv; varying float vPhase; varying float vFade; varying float vSuds;
void main() {
  float ph = motion.x, rise = motion.y, sway = motion.z; vSuds = motion.w;
  float lift = 0.0, fade = 1.0;
  if (rise > 0.0) { float k = fract(uTime * rise / 1.4 + ph * 0.159); lift = k * 1.4 - 0.4; fade = smoothstep(0.0, 0.15, k) * (1.0 - smoothstep(0.8, 1.0, k)); }
  vec3 centre = inst.xyz + vec3(sin(uTime * 0.55 + ph) * sway, lift + sin(uTime * 0.9 + ph * 1.3) * inst.w * 0.08, cos(uTime * 0.45 + ph) * sway * 0.6);
  if (abs(motion.w) < 0.25) fade *= smoothstep(0.35, 0.85, length(centre - uAvoid) - inst.w * 0.6);
  float wob = 1.0 + 0.03 * sin(uTime * 2.3 + ph * 3.0);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 p = centre + (right * position.x * wob + up * position.y / wob) * inst.w;
  vUv = uv; vPhase = ph; vFade = fade * step(0.0005, inst.w);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,RM=`
uniform float uTime;
varying vec2 vUv; varying float vPhase; varying float vFade; varying float vSuds;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r = length(p);
  if (r > 1.0 || vFade <= 0.0) discard;
  float nz = sqrt(max(0.0, 1.0 - r * r));
  float fres = pow(1.0 - nz, 1.8);
  // thin-film colours, swirling slowly
  float film = (1.0 - nz) * 2.2 + p.y * 0.3 + 0.18 * sin(atan(p.y, p.x) * 2.0 + uTime * 0.35 + vPhase) + uTime * 0.04 + vPhase;
  vec3 thin = 0.5 + 0.5 * cos(6.28318 * (film + vec3(0.0, 0.33, 0.67)));
  // what the bubble reflects: pink on one side, cyan on the other, a little gold underneath
  vec3 envc = mix(vec3(1.0, 0.5, 0.92), vec3(0.42, 0.88, 1.0), smoothstep(-0.8, 0.8, p.x + 0.2 * p.y));
  envc = mix(envc, vec3(1.0, 0.82, 0.45), smoothstep(0.25, 0.95, -p.y) * 0.35);
  vec3 col = mix(envc, thin, 0.6) * (0.4 + 1.15 * fres);
  float rim = smoothstep(0.88, 0.975, r) * (1.0 - smoothstep(0.985, 1.0, r));
  col += mix(vec3(0.95, 0.97, 1.0), thin * 1.3, 0.6) * rim * 0.85;
  // soft window highlight up and to the left, a small one down and to the right
  float hl = exp(-pow(length((p - vec2(-0.4, 0.44)) * vec2(1.0, 1.5)) * 3.0, 2.0));
  float hl2 = exp(-pow(length(p - vec2(0.46, -0.48)) * 6.5, 2.0)) * 0.55;
  col += vec3(1.0, 0.98, 1.0) * (hl * 1.25 + hl2);
  float a = clamp(0.09 + fres * 0.66 + rim * 0.55 + hl * 0.75 + hl2 * 0.5, 0.0, 1.0) * vFade;
  if (vSuds > 0.5) {
    // soap suds on the water: a milky blue-lavender film (each bubble its own tint), a bright white rim and a
    // window highlight, a little more body than an air bubble so the cluster reads against the pink fur
    vec3 tint = mix(vec3(0.46, 0.7, 1.0), vec3(0.74, 0.66, 1.0), 0.5 + 0.5 * sin(vPhase * 2.7));
    tint = mix(tint, vec3(0.95, 0.75, 1.0), 0.18 * (0.5 + 0.5 * sin(vPhase * 5.1)));
    float milky = 0.55 + 0.45 * smoothstep(0.2, 0.95, r);   // milkier toward the edge, clearer in the middle
    col = mix(col, tint * (0.7 + 0.6 * fres), 0.65) + vec3(1.0) * (rim * 0.75 + hl * 0.45);
    a = clamp(a + 0.3 * milky + rim * 0.5 + fres * 0.2, 0.0, 1.0) * vFade;
  }
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`,CM=`
varying vec3 vN; varying vec3 vW;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,PM=`
uniform float uTime;
varying vec3 vN; varying vec3 vW;
float fh(vec3 p) { p = fract(p * 0.3183 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float key = clamp(dot(N, normalize(vec3(-0.25, 0.85, -0.45))) * 0.55 + 0.45, 0.0, 1.0);
  float up = N.y * 0.5 + 0.5;
  vec3 col = mix(vec3(0.3, 0.62, 1.0), vec3(1.0, 1.0, 1.0), smoothstep(0.18, 0.82, key * 0.65 + up * 0.45));
  float rim = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 2.5);
  col = mix(col, vec3(0.78, 0.92, 1.0), rim * 0.45);
  vec3 cell = floor(vW * 70.0);
  col += step(0.985, fh(cell)) * (0.5 + 0.5 * sin(uTime * 6.0 + fh(cell + 3.0) * 30.0)) * 0.6 * up;
  gl_FragColor = vec4(col * 0.97, 1.0);
}
`;function IM(i){let e=new ji(1,4),t=e.attributes.position,n=new w,s=4+i()*2,r=5+i()*2;for(let o=0;o<t.count;o++){n.fromBufferAttribute(t,o);let a=1+.1*Math.sin(n.x*s+n.y*3.1)*Math.sin(n.y*r+n.z*3.7)+.035*Math.sin(n.z*9+n.x*7);n.multiplyScalar(a),t.setXYZ(o,n.x,n.y,n.z)}return e.computeVertexNormals(),e}function FM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.moveTo(32,2),e.lineTo(35,29),e.lineTo(62,32),e.lineTo(35,35),e.lineTo(32,62),e.lineTo(29,35),e.lineTo(2,32),e.lineTo(29,29),e.closePath(),e.fill();let n=new Jn(i);return n.colorSpace=St,n}var $m={radius:.3,half:.05,bright:[1,.78,.26],field:[.96,.6,.12],edge:[.95,.52,.08],metalness:.75,roughness:.26,glow:.3};function ef(i="high"){let e=$m,t=i==="high",n=[[0,.03],[.188,.03],[.2,.038],[.214,.044],[.228,.038],[.237,.034],[.248,.047],[.266,.052],[.287,.047],[.299,.032]],s=[...n,...n.slice().reverse().map(([d,f])=>[d,-f])].map(([d,f])=>new ae(d,f));s.reverse();let r=new oo(s,t?56:28).toNonIndexed();r.rotateX(Math.PI/2),Xm(r,(d,f,p)=>{let v=Math.hypot(d,f);return Math.abs(p)<.034&&v>.29?e.edge:v<.196?e.field:e.bright});let o=[],a={depth:.004,bevelEnabled:!0,bevelThickness:.008,bevelSize:.007,bevelSegments:t?3:1,curveSegments:t?14:6},l=new Ms;l.moveTo(0,.03),l.bezierCurveTo(.058,.03,.084,-.008,.084,-.042),l.bezierCurveTo(.084,-.076,.06,-.094,.036,-.09),l.bezierCurveTo(.016,-.087,.009,-.1,0,-.1),l.bezierCurveTo(-.009,-.1,-.016,-.087,-.036,-.09),l.bezierCurveTo(-.06,-.094,-.084,-.076,-.084,-.042),l.bezierCurveTo(-.084,-.008,-.058,.03,0,.03),o.push(new rr(l,a));for(let[d,f,p,v,g]of[[-.106,.04,.03,.04,.5],[-.039,.093,.031,.042,.14],[.039,.093,.031,.042,-.14],[.106,.04,.03,.04,-.5]]){let m=new Ms;m.absellipse(0,0,p,v,0,Math.PI*2,!1,0);let x=new rr(m,a);x.rotateZ(g),x.translate(d,f,0),o.push(x)}let c=rd(o.map(d=>(d.deleteAttribute("uv"),d.index?d.toNonIndexed():d)));c.translate(0,-.005,.03+a.bevelThickness-.002),Xm(c,()=>e.bright);let u=c.clone();u.rotateY(Math.PI),r.deleteAttribute("uv");let h=rd([r,c,u]);return h.computeBoundingSphere(),h}function Xm(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3);for(let s=0;s<t.count;s++)n.set(e(t.getX(s),t.getY(s),t.getZ(s)),s*3);i.setAttribute("color",new nt(n,3))}function qm(i){let e=$m,t=new ot({vertexColors:!0,metalness:e.metalness,roughness:e.roughness,envMap:i,envMapIntensity:1.35});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${e.glow.toFixed(3)} + vec3(1.0, 0.9, 0.55) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.35;`)},t.customProgramCacheKey=()=>"pawCoin",t}var Mt=!!Qe.round2,Gt={hearts:5,hurtGuard:1,outOfHearts:1.4,blasts:3,blastTime:3,blastReach:13,turbos:3,turboTime:2.5,turboSpeed:1.45,coinH:.7,sockH:.88,gemH:.85,coinLines:[[1,4.4,5],[0,10.8,3],[1,16.8,2],[2,18.6,3],[1,23.4,5],[0,29.8,3]],coinStep:1,socks:[[1,9.6],[0,14],[2,21.8],[1,28.6],[0,33]],gems:[[1,15.6],[0,34.2]]},ks={},Ni=!!Qe.round3,Mc=!!Qe.round5,df=!!Qe.round4;Ni&&Object.assign(Gt,{coinLines:[[1,4,3,1,.7,0],[2,10.1,1,1,.55,0],[0,11.2,3,1.4,.92,.18],[1,15,3,1,.72,0],[2,18.4,3,1,.7,0],[1,23.4,5,1,.7,0],[0,29.8,3,1,.7,0]],socks:[[1,7.6],[2,12.1],[2,21.8],[1,28.6],[0,33]],gems:[[0,14.6],[0,34.2]],gemH:1});if(Ni&&Fi){let i=Ne.layout;Gt.coinLines=[...i.coinLines,...Gt.coinLines.slice(yn&&i.replace||1)],Gt.socks=[i.firstSock,...Gt.socks.slice(1)],Gt.gems=[i.extraGem,...Gt.gems]}var LM=Ni?uc(15931):null,Km=!!window.__BW_TEST__,cf=!!window.__BW_SIDE__||/[?&]side(=|&|$)/.test(location.search),Nc=!!window.__BW_TOUCHES__||/[?&]touches(=|&|$)/.test(location.search);cf&&document.body.classList.add("side");var ct=i=>document.getElementById(i),Bs=i=>new w(i[0],i[1],i[2]),ln=i=>new re(i),Tn=ct("stage"),UM=ct("view"),rs=new El({canvas:UM,antialias:!1,powerPreference:"high-performance"});rs.toneMapping=la;rs.toneMappingExposure=1.05;var is=Math.min(window.devicePixelRatio||1,1.6);rs.setPixelRatio(is);var Dt=new Qo,Mn=new Zt(55,.5,.1,200),_i=new nc(rs);_i.addPass(new ic(Dt,Mn));var bo=new ho(new ae(256,512),.32,.45,.97);_i.addPass(bo);var Zm=new uo(j0);_i.addPass(Zm);_i.addPass(new sc);Dt.add(new Vl(16771583,7252223,1.1));var ff=new lr(16773862,1.7);ff.position.set(-3,6,-4);Dt.add(ff);var NM=ff.position.clone().normalize(),Jm=new lr(13625599,1.3);Jm.position.set(2,7,12);Dt.add(Jm);var uf={layout:"models/layout.json",castle:"models/castle.glb",drum:"models/drum.glb",mascot:"models/mascot.glb",roller:"models/roller.glb",gem:"models/gem.glb",sock:"models/sock.glb",machinery:"models/machinery.glb",tower:"models/tower.glb",gear:"models/gear.glb",pipe:"models/pipe.glb",crown:"models/crown.glb",coinP2:"models/coin_p2.glb",coinP2Lo:"models/coin_p2_lo.glb"},Qm={};function HM(){let i=0,e=0;for(let n of Object.values(Qm))i+=n.loaded,e+=n.total||n.loaded;let t=e>0?Math.round(i/e*100):0;ct("loadBar").style.width=t+"%",ct("loadPct").textContent=t+"%"}var DM=new Fs;async function Ym(i,e){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);let n=+t.headers.get("content-length")||0,s=t.body.getReader(),r=[],o=0;for(;;){let{done:c,value:u}=await s.read();if(c)break;r.push(u),o+=u.length,Qm[e]={loaded:o,total:Math.max(n,o)},HM()}let a=new Uint8Array(o),l=0;for(let c of r)a.set(c,l),l+=c.length;return a}var zM=window.__BW_MODEL_FORMAT__==="json";async function tf(i){let e;try{if(zM)throw new Error("json");e=await Ym(uf[i],i)}catch{let t=JSON.parse(new TextDecoder().decode(await Ym(uf[i]+".json",i))),n=atob(t.data);e=new Uint8Array(n.length);for(let s=0;s<n.length;s++)e[s]=n.charCodeAt(s)}return DM.parseAsync(e.buffer,"")}var ze,Ct,Ve={P:new w,R:new w,U:new w,T:new w},K={phase:"loading",time:0,coins:1280,gems:36,socks:0,sound:!0,collected:{coins:0,gems:0},laps:0};Mt&&Object.assign(K,{hearts:Gt.hearts,blasts:Gt.blasts,turbos:Gt.turbos,paused:!1,blastT:0,turboT:0,guardT:0,outT:-1,knocks:0,restarts:0});var Xe={};function BM(i,e={}){let t=new Bt({map:i.map||null,color:16777215,vertexColors:!!e.vertexColors,side:qe}),n=e.saturation??1.15,s=e.brightness??1,r=e.glow??0,o=e.haze,a=e.shade;t.onBeforeCompile=c=>{a&&(c.vertexShader=c.vertexShader.replace("void main() {",`varying vec3 vShadeN; varying vec3 vShadeP;
void main() {
  vShadeN = normalize(mat3(modelMatrix) * normal);
  vShadeP = (modelMatrix * vec4(position, 1.0)).xyz;`),c.fragmentShader=`varying vec3 vShadeN; varying vec3 vShadeP;
`+c.fragmentShader),o&&(c.vertexShader=c.vertexShader.replace("void main() {",`varying float vHazeDepth;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
  vHazeDepth = -mvPosition.z;`),c.fragmentShader=`varying float vHazeDepth;
`+c.fragmentShader),e.afterColor&&(c.vertexShader=c.vertexShader.replace("void main() {",`varying vec3 vObj;
void main() {
  vObj = position;`),c.fragmentShader=c.fragmentShader.replace("void main() {",`varying vec3 vObj;
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
`+e.afterColor)),(e.grade||e.afterColor)&&(c.fragmentShader=c.fragmentShader.replace("void main() {",`${U0}
void main() {`)),c.fragmentShader=c.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      ${e.grade||""}
      { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, ${n.toFixed(3)}) * ${s.toFixed(3)};
        diffuseColor.rgb += diffuseColor.rgb * smoothstep(0.55, 0.95, l) * ${r.toFixed(3)};
        diffuseColor.rgb += (1.0 - min(diffuseColor.rgb, 1.0)) * ${(e.lift??0).toFixed(3)}; }
      ${a?`{ vec3 N = normalize(vShadeN) * (gl_FrontFacing ? 1.0 : -1.0);
        vec3 V = normalize(cameraPosition - vShadeP);
        float key = dot(N, normalize(vec3(0.45, 0.75, -0.5)));
        float rim = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 3.0) * clamp(dot(N, vec3(0.0, 0.6, 0.8)) + 0.4, 0.0, 1.0);
        diffuseColor.rgb *= ${a[0].toFixed(3)} + ${a[1].toFixed(3)} * key;
        diffuseColor.rgb += vec3(0.85, 0.9, 1.0) * rim * ${a[2].toFixed(3)}; }`:""}
      ${o?`diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${o[3].map(u=>u.toFixed(3)).join(", ")}), ${o[0].toFixed(3)} * smoothstep(${o[1].toFixed(2)}, ${o[2].toFixed(2)}, vHazeDepth));`:""}`)};let l="baked:"+JSON.stringify([n,s,r,e.lift??0,o||0,a||0,e.grade||"",e.afterColor||""]);return t.customProgramCacheKey=()=>l,t}var mr,gr,it,xt,mt,Sa,vr,Tc=null,Sc=[],Ac=[],Rc=[],Aa=[],eg=[],Cc=new Se,OM=new Se,Pc=new _t;function kM(){let i=new Te(new tn(170,32,16),new Ue({vertexShader:G0,fragmentShader:W0,side:Fn,depthWrite:!1,uniforms:{uTop:{value:ln(12759295)},uMid:{value:ln(15128319)},uHorizon:{value:ln(16445183)},uBottom:{value:ln(9420031)}}}));i.renderOrder=-10,Dt.add(i);let e=new Qo,t=i.clone();t.material=i.material.clone(),t.material.uniforms={uTop:{value:ln(7299008)},uMid:{value:ln(10127064)},uHorizon:{value:ln(14072048)},uBottom:{value:ln(2306159)}},e.add(t);for(let[s,r,o]of[[[0,60,10],[90,50],[3.2,3,3.2]],[[-70,25,20],[40,60],[2.6,1.6,2.4]],[[70,20,10],[40,60],[1.4,2.4,3]],[[0,18,-80],[70,30],[2,1.9,2.2]],[[0,10,85],[60,25],[1.6,2,2.8]]]){let a=new Te(new Wt(...r),new Bt({color:new re(...o),side:qe}));a.position.set(...s),a.lookAt(0,0,0),e.add(a)}let n=new no(rs);Xe.env=n.fromScene(e,.02,.1,400).texture,Xe.gold=new ot({color:16760645,metalness:1,roughness:.22,envMap:Xe.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.35})}function Hc(i){let e=0;return i.traverse(t=>{if(!t.isMesh)return;t.geometry.attributes.normal||(t.geometry.computeVertexNormals(),e+=1e6);let n=t.geometry.attributes.normal,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){let o=n.getX(r),a=n.getY(r),l=n.getZ(r),c=Math.hypot(o,a,l);c>1e-4?(o/=c,a/=c,l/=c):(o=0,a=1,l=0,e++),s[r*3]=o,s[r*3+1]=a,s[r*3+2]=l}t.geometry.setAttribute("normal",new nt(s,3))}),e}function VM(i,e){let t=new $e;return t.matrixAutoUpdate=!1,t.matrix.fromArray(e),t.add(i),Dt.add(t),t}function pf(i,e,t){i.traverse(n=>{n.isMesh&&(n.material=BM(n.material,{...e,...t?t(n):{},vertexColors:!!n.geometry.attributes.color}),n.frustumCulled=!0)})}function GM(){let i=[];for(let r=0;r<=10;r++)i.push(-30+(30-3.2)*Math.pow(r/10,.55));for(let r=1;r<40;r++)i.push(-3.2+6.4*(r/40));for(let r=10;r>=0;r--)i.push(30-(30-3.2)*Math.pow(r/10,.55));let e=(r,o,a,l)=>{let c=Math.ceil((a-o)/l)+1,u=c*r.length,h=new Float32Array(u*3),d=new Float32Array(u*2),f=new Float32Array(u*3),p=new Float32Array(u*3),v=new Float32Array(u*3),g=new Float32Array(u*3),m=[];for(let y=0;y<c;y++){let b=o+(a-o)*y/(c-1);Ct.frame(b,Ve);for(let R=0;R<r.length;R++){let E=y*r.length+R,A=r[R];d[E*2]=A,d[E*2+1]=b,Ve.P.toArray(f,E*3),Ve.R.toArray(p,E*3),Ve.U.toArray(v,E*3),Ve.T.toArray(g,E*3),h[E*3]=Ve.P.x+Ve.R.x*A,h[E*3+1]=Ve.P.y+Ve.R.y*A,h[E*3+2]=Ve.P.z+Ve.R.z*A}}for(let y=0;y<c-1;y++)for(let b=0;b<r.length-1;b++){let R=y*r.length+b,E=R+r.length;m.push(R,E,R+1,E,E+1,R+1)}let x=new Ze;x.setAttribute("position",new nt(h,3)),x.setAttribute("aTrack",new nt(d,2));for(let[y,b]of[["aP",f],["aR",p],["aU",v],["aT",g]])x.setAttribute(y,new nt(b,3));return x.setIndex(m),x.computeBoundingSphere(),x.boundingSphere.radius+=3,x},t=[];for(let r=0;r<hr;r++)t.push(new bt(0,0,-99,0));gr={uTime:{value:0},uTunnel:{value:new bt(ze.tunnelStart,ze.tunnelEnd,ze.tunnelRadius,ze.axisHeight)},uRipples:{value:t},uPlayer:{value:new w},uPlayerMove:{value:new w},uFlow:{value:9},uSlideHalf:{value:on.half},uDeep:{value:ln(407256)},uShallow:{value:ln(2071551)},uTurq:{value:ln(4123384)},uGlow:{value:ln(10154751)},uSky:{value:ln(11126015)},uPink:{value:ln(16751584)},uGold:{value:ln(16763994)},uRingA:{value:ln(16767091)},uRingB:{value:ln(9234175)},uFog:{value:ln(13421823)},uSunDir:{value:NM},uRings:{value:new w(ze.tunnelStart+.25,ze.segmentLength-Math.max(.02,ze.segmentLength*.005),4)},uOpen:{value:0}};let n=new Ue({vertexShader:B0,fragmentShader:O0,uniforms:gr}),s=[];for(let r=0;r<=28;r++)s.push(-2.1+4.2*(r/28));mr=new $e,mr.add(new Te(e(i,ze.startZ-30,ze.tunnelStart+2.5,.3),n)),mr.add(new Te(e(s,ze.tunnelStart-.5,ze.tunnelEnd+6,.25),n)),Dt.add(mr)}function WM(){let i=new ot({color:3107839,metalness:.2,roughness:.12,envMap:Xe.env,envMapIntensity:1.6,emissive:666266,emissiveIntensity:.5}),e=new ot({color:15128831,metalness:.15,roughness:.32,envMap:Xe.env,envMapIntensity:1,side:qe}),t=new ot({color:15903035,metalness:1,roughness:.3,envMap:Xe.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),n=ze.startZ-24,s=-.6,r=.62,o=Math.floor((s-n)/r)+1,a=new Ut(new Ci(.22,.26,.5,2,.06),t,o*2),l=new Ut(new tn(.055,12,8),i,o*2),c=[[-.06,-.06],[.04,.1],[.14,.2],[.26,.2],[.34,.08],[.36,-.8]],u=0;for(let h of[-1,1]){let d=[],f=[],p=[],v=0;for(let x=n;x<=s+1e-6;x+=.25,v++){let y=qn(ze,h*on.half,x);for(let[b,R]of c)d.push(h*(on.half+b),y+R,x);p.push(new w(h*(on.half+.2),y+.26,x))}let g=c.length;for(let x=0;x<v-1;x++)for(let y=0;y<g-1;y++){let b=x*g+y,R=b+g;f.push(b,R,b+1,R,R+1,b+1)}let m=new Ze;m.setAttribute("position",new We(d,3)),m.setIndex(f),m.computeVertexNormals(),Dt.add(new Te(m,e)),Dt.add(new Te(new ar(new ws(p),p.length*2,.1,14),Xe.gold));for(let x=0;x<o;x++,u++){let y=n+x*r,b=qn(ze,h*on.half,y),R=(qn(ze,h*on.half,y+.2)-qn(ze,h*on.half,y-.2))/.4;Pc.setFromAxisAngle(new w(1,0,0),-Math.atan(R)),a.setMatrixAt(u,Cc.compose(new w(h*(on.half+.36),b+.1,y),Pc,new w(1,1,1))),l.setMatrixAt(u,Cc.makeTranslation(h*(on.half+.48),b+.1,y))}}Dt.add(a,l)}function tg(i,e,t,n,s=12,r=26){let a=[0],l=new w;for(let m=1;m<=200;m++){let x=m/200,y=new w(0,-e*x*x,i*x);a.push(a[m-1]+y.distanceTo(l)),l=y}let c=a[200],u=[],h=[],d=[],f=[],p=[],v=0;for(let m=0;m<=r;m++){let x=m/r,y=x*c;for(;v<199&&a[v+1]<y;)v++;let b=(v+Math.min(1,Math.max(0,(y-a[v])/Math.max(1e-6,a[v+1]-a[v]))))/200,R=new w(0,-e*b*b,i*b),E=new w(0,-2*e*b,i).normalize(),A=new w(0,E.z,-E.y),C=t+(n-t)*x,M=C*.5,_=C*.35;for(let S=0;S<=s;S++){let U=Math.PI*S/s,N=-Math.cos(U),I=Math.sin(U),z=R.clone().add(new w(N*M,0,0)).addScaledVector(A,I*_),L=new w(N/M,0,0).addScaledVector(A,I/_).normalize();u.push(z.x,z.y,z.z),h.push(L.x,L.y,L.z),d.push(S/s,y),f.push(x)}}for(let m=0;m<r;m++)for(let x=0;x<s;x++){let y=m*(s+1)+x,b=y+s+1;p.push(y,y+1,b,b,y+1,b+1)}let g=new Ze;return g.setAttribute("position",new We(u,3)),g.setAttribute("normal",new We(h,3)),g.setAttribute("uv",new We(d,2)),g.setAttribute("progress",new We(f,1)),g.setIndex(p),g}function XM(){let i={uTime:{value:0},uLipSpeed:{value:1.2},uStreakLen:{value:.35},uDeep:{value:ln(21247)},uBright:{value:ln(4250623)},uSky:{value:ln(14268671)},uPink:{value:ln(16751078)}};eg.push(i);let e=new $e;Dt.add(e),Xe.falls=e;let t=new Ue({vertexShader:k0,fragmentShader:V0,uniforms:i,transparent:!0,depthWrite:!1,side:qe});Xe.fallMat=t;let n=(r,o,a,l)=>{let c=o.clone().sub(r),u=r.y-o.y;c.y=0;let h=new Te(tg(Math.max(.02,c.length()),Math.max(.05,u),a,l),t);h.position.copy(r),h.lookAt(r.clone().add(c.lengthSq()>1e-6?c.normalize():new w(0,0,-1))),h.renderOrder=2,e.add(h)},s=(r,o,a)=>{let l=o.clone().sub(r),c=l.length(),u=new Te(new wn(a,a,c,16),Xe.gold);u.position.copy(r).add(o).multiplyScalar(.5),u.quaternion.setFromUnitVectors(new w(0,1,0),l.normalize()),e.add(u)};for(let r of ze.waterfalls){let o=Bs(r.lip),a=Bs(r.basin),l=Bs(r.overflow),c=Bs(r.landing),u=Bs(r.tower),h=r.width,d=h*.42;n(o,a.clone().add(new w(0,-.02,0)),h*.7,h*.85),n(l,c,h*.9,h*1.15),s(o.clone().add(new w(0,d*.45,0)),u.clone().add(new w(0,d*.45,.3)),d);let f=new Te(new wn(r.basinRadius,r.basinRadius*.8,.18,24),Xe.gold);f.position.copy(a).add(new w(0,-.1,0)),e.add(f);let p=new Te(new Ot(r.basinRadius,.07,8,32),Xe.gold);p.position.copy(a),p.rotation.x=Math.PI/2,e.add(p),s(a.clone().add(new w(0,-.12,0)),Bs(r.basinTower).add(new w(0,-.12,.3)),.08),mt.addSource({pos:c.clone().setY(-.6),rate:22,kind:1,spread:h*.5,up:1.6,size:.55}),mt.addSource({pos:c.clone().setY(-.6),rate:30,kind:0,spread:h*.4,up:2.4,size:.12}),mt.addSource({pos:a.clone(),rate:10,kind:1,spread:h*.3,up:.9,size:.35})}}function $M(){let i=new Ot(ze.tunnelRadius*.965,.075,8,72),e=[],t=ze.segmentLength-Math.max(.02,ze.segmentLength*.005);for(let s=0;s<3;s++)e.push(ze.tunnelStart+s*t+.25);e.push(ze.tunnelEnd-.25),e.forEach((s,r)=>{let o=new Te(i,new Bt({color:r%2===0?new re(2.6,2,.95):new re(1.4,2.2,2.9)}));o.matrixAutoUpdate=!1,Ct.mapMatrix(new Se().makeTranslation(0,0+1.5,s),o.matrix),o.userData.pulse=r*.9,o.userData.base=o.material.color.clone(),Dt.add(o),Xe.rings=Xe.rings||[],Xe.rings.push(o)});let n=(s,r,o,a)=>{let l=new Te(new Wt(r,r),o);return l.matrixAutoUpdate=!1,l.renderOrder=a,Ct.mapMatrix(new Se().makeTranslation(0,0+1.5,ze.tunnelEnd+s).multiply(new Se().makeRotationY(Math.PI)),l.matrix),Dt.add(l),l};Xe.exitLight=[n(4.5,16,new Bt({map:qM(),toneMapped:!1}),0)],Xe.exitLight[1]=n(1.5,7,new Bt({map:ng(),color:new re(.9,1.1,1.4),transparent:!0,blending:mn,depthWrite:!1}),3)}function qM(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=e.createRadialGradient(256,256,0,256,256,256);t.addColorStop(0,"#ffffff"),t.addColorStop(.22,"#f4fbff"),t.addColorStop(.45,"#bfe9ff"),t.addColorStop(.7,"#d9c4ff"),t.addColorStop(1,"#ffc6ec"),e.fillStyle=t,e.fillRect(0,0,512,512),e.globalCompositeOperation="lighter";for(let s=0;s<18;s++){let r=s/18*Math.PI*2+s%2*.09,o=.05+s%3*.025,a=e.createRadialGradient(256,256,30,256,256,256);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(256,256),e.arc(256,256,256,r-o,r+o),e.closePath(),e.fill()}let n=new Jn(i);return n.colorSpace=St,n}function ng(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Jn(i);return n.colorSpace=St,n}var YM=[{at:[2.55,2.25,-3.4],axis:[-.3,.05,-.95],d:1.8,spin:110},{at:[-2.45,1.3,-5],axis:[.3,.05,-.95],d:1.8,spin:-95}];function jM(i){pf(i.scene,{saturation:1.25,brightness:1.1,glow:.9,lift:.08,haze:[.45,6,32,[.78,.86,1]],shade:[.88,.22,.25]}),i.scene.updateMatrixWorld(!0);let e=[];i.scene.traverse(o=>{o.isMesh&&e.push(o)});let t=new Se,n=new Se,s=new w,r=new w;Xe.drumMeshes=[];for(let o of ze.drumSegments){t.fromArray(o);for(let a of e){n.multiplyMatrices(t,a.matrixWorld);let l=a.geometry,c=l.attributes.position,u=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)s.fromBufferAttribute(c,f).applyMatrix4(n),Ct.map(s.x,s.y,s.z,r),u[f*3]=r.x,u[f*3+1]=r.y,u[f*3+2]=r.z;let h=new Ze;h.setAttribute("position",new nt(u,3));for(let f of["uv","color"])l.attributes[f]&&h.setAttribute(f,l.attributes[f]);h.setIndex(l.index),h.computeVertexNormals(),h.computeBoundingSphere();let d=new Te(h,a.material);Dt.add(d),Xe.drumMeshes.push(d)}}}function KM(i){let e=i.scene;Hc(e),pf(e,{saturation:1.25,brightness:1.08,shade:[.8,.38,.45]},r=>{if(!/Bristles/.test(r.material.name))return{};let o=r.geometry.attributes.position,a=0;for(let l=0;l<o.count;l++)a=Math.max(a,Math.hypot(o.getX(l),o.getZ(l)));return{afterColor:H0(a)}});for(let r of ze.rollers){if(r.centre[2]<ze.tunnelStart)continue;let o=new $e;o.matrixAutoUpdate=!1,o.add(e.clone()),Dt.add(o),Mt&&(o.visible=!1);let a=Bs(r.centre);Aa.push({g:o,m0:Ct.mapMatrix(new Se().fromArray(r.matrix)),centre:Ct.map(a.x,a.y,a.z),axis:Ct.dir(r.axis[0],r.axis[1],r.axis[2],a.z).normalize(),speed:_e.degToRad(r.spin),angle:0})}let t=new an().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w);for(let r of YM){let o=r.d/Math.max(n.x,n.z),a=new w(...r.axis).normalize(),l=Ct.map(r.at[0],r.at[1],r.at[2]),c=new Se().compose(l,new _t().setFromUnitVectors(new w(0,1,0),a),new w(o,o,o)).multiply(new Se().makeTranslation(-s.x,-s.y,-s.z)),u=new $e;u.matrixAutoUpdate=!1,u.add(e.clone()),Dt.add(u),Aa.push({g:u,m0:c,centre:l,axis:a,speed:_e.degToRad(r.spin),angle:Math.random()*6})}}var Ma={at:[2.7,1.05,-8],yaw:.08,height:2.8};function ZM(i){let e=i.scene;e.traverse(o=>{if(!o.isMesh)return;let a=o.material;o.material=new ot({map:a.map,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,normalMap:a.normalMap,metalness:1,roughness:1,envMap:Xe.env,envMapIntensity:1.05,emissive:16777215,emissiveMap:a.map,emissiveIntensity:.2,side:qe})});let t=new an().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w);Xe.sideMachineryModel={model:e,size:n,centre:s};let r=new $e;r.name="sideMachinery",r.add(e),Dt.add(r),Xe.sideMachinery=r,mf()}function mf(){let{model:i,size:e,centre:t}=Xe.sideMachineryModel,n=Xe.sideMachinery,s=Ma.height/e.y;i.scale.setScalar(s),i.position.copy(t).multiplyScalar(-s),n.position.set(...Ma.at),n.rotation.y=Math.PI+Ma.yaw,n.updateMatrixWorld(!0);let r=1/0,o=new w;i.traverse(a=>{if(!a.isMesh)return;let l=a.geometry.attributes.position;for(let c=0;c<l.count;c+=7)o.fromBufferAttribute(l,c).applyMatrix4(a.matrixWorld),o.y<1.4&&(r=Math.min(r,Math.abs(o.x)))}),K.machineryInnerX=+r.toFixed(2)}function JM(){let i=new Wt(2,2),e=new Qt;e.index=i.index,e.attributes.position=i.attributes.position,e.attributes.uv=i.attributes.uv;let t=(r,o,a,l)=>[...Ct.map(r,o,a).toArray(),l],n=ze.bubbles.map(r=>t(r.pos[0],r.pos[1],r.pos[2],r.size*.5));for(let r of[[.72,.42,-17.9,.24],[-.82,.3,-17.6,.3],[-1.2,1.05,-16.4,.2],[-2.05,1.55,-13.6,.55],[-1.75,.55,-14.4,.3],[1.9,1.75,-12.6,.24],[-2.4,2.6,-10.2,.4],[1.4,.15,-15.6,.22]])n.push(t(...r));for(let r=0;r<30;r++){let o=ze.startZ+2+Math.random()*(ze.tunnelEnd-ze.startZ-2),a=o>ze.tunnelStart,l=(Math.random()*2-1)*(a?1.6:4.5),c=(a?1:.8)+Math.random()*2.2,u=.06+Math.random()*.2;Mt&&a&&(l=Math.sign(l||1)*(1.35+Math.abs(l)*.3),c=2.1+(c-1)*.45,u*=.6),n.push(t(l,c,o,u))}e.setAttribute("inst",new st(new Float32Array(n.flat()),4)),e.setAttribute("phase",new st(new Float32Array(n.map(()=>Math.random()*6.28)),1)),e.instanceCount=n.length,Xe.bubbleU={uTime:{value:0}};let s=new Te(e,new Ue({vertexShader:X0,fragmentShader:$0,uniforms:Xe.bubbleU,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At}));s.frustumCulled=!1,s.renderOrder=5,Dt.add(s),Xe.bubbles=s}function QM([i,e],t){let n=a=>{let l=null;return a.scene.traverse(c=>{c.isMesh&&!l&&(l=c)}),l},s=n(i),r=n(e),o=s.material;return o.envMap=t,o.envMapIntensity=1.5,o.color.setRGB(...yn?Ne.r7.coin.color:[1,1.14,.72]),o.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${yn?Ne.r7.coin.glow.toFixed(2):"0.5"} + vec3(1.0, 0.92, 0.5) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.45;`)},o.customProgramCacheKey=()=>"tripoCoin",yn&&vc(o,Ne.r7.coin.lemon,"tripoCoinR7"),{hi:s.geometry,lo:r.geometry,mat:o}}function eT(i,e,t=null){e.colorSpace=St;let n=new ot({map:e,color:16777215,metalness:.6,roughness:.3,envMap:Xe.env,emissive:9067008,emissiveMap:e,emissiveIntensity:1.25}),s=new ot({color:16761418,metalness:1,roughness:.25,envMap:Xe.env,envMapIntensity:1.3,emissive:8014336,emissiveIntensity:.8}),r=new wn(.3,.3,.08,36);r.rotateX(Math.PI/2);let o=[s,n,n],a=Mt?ba(pr(39484),()=>t?QM(t,Xe.env):{hi:ef("high"),lo:ef("low"),mat:qm(Xe.env)}):null,l=(y,b)=>{let R=y.z;y=Ct.map(y.x,y.y,y.z);let E=a?ba(pr(39485+Sc.length),()=>{let A=new Ml;if(A.addLevel(new Te(a.hi,a.mat),0),A.addLevel(new Te(a.lo,a.mat),9),ns)for(let C of A.levels)C.object.scale.setScalar(dn.coinScale);return A}):new Te(r,o);E.position.copy(y),Dt.add(E),Sc.push({obj:E,home:y.clone(),kind:"coin",live:!0,pop:-1,phase:Math.random()*6,compose:b,u:R,q0:Mt?Ct.quaternion(R,new _t):null})},c=y=>Bs(y).multiply(new w(.7/.85,1,1)),u=ze.tunnelStart,h=ze.screen4Z+11,d=(y,b,R)=>new w(y,qn(ze,y,R)+b,R);if(Mt){for(let y of ze.coins3)y[2]<u&&l(c(y),!0);for(let[y,b,R,E,A,C]of Gt.coinLines)for(let M=0;M<R;M++){let _=Ni?A+C*Math.sin(Math.PI*M/Math.max(1,R-1)):Gt.coinH;l(d(Yn(y),_,b+M*(Ni?E:Gt.coinStep)))}}else{for(let y of ze.coins3)l(c(y),!0);for(let y of ze.coins4)l(c(y),!0);for(let y=0;y<6;y++)l(d(Yn(1),.65,u+2.5+y*1.6));for(let y=0;y<5;y++)l(d(Yn(2),.65+Math.sin(y/4*Math.PI)*.9,u+4+y*1.5));for(let y=0;y<5;y++)l(d(Yn(0),.65,h+y*1.3))}let f=i.scene;Hc(f);let p=new an().setFromObject(f),v=p.getSize(new w),g=p.getCenter(new w),m=.42/v.y;if(f.traverse(y=>{if(!y.isMesh)return;let b=y.material.map;y.material=new ot({map:b,metalness:0,roughness:.12,envMap:Xe.env,envMapIntensity:1.6,emissive:16777215,emissiveMap:b,emissiveIntensity:.35,side:qe})}),Xe.gemMaterials=[],f.traverse(y=>{y.isMesh&&Xe.gemMaterials.push(y.material)}),Ni)for(let y of Xe.gemMaterials)y.color.setRGB(...xn.gem.color),y.emissive.setRGB(...xn.gem.emissive);let x=(y,b)=>{let R=y.z;y=Ct.map(y.x,y.y,y.z);let E=new $e,A=f.clone(),C=m*(Mt?1.2:1);A.scale.setScalar(C),A.position.copy(g).multiplyScalar(-C),E.add(A),E.position.copy(y),Dt.add(E),Ac.push({obj:E,home:y.clone(),kind:"gem",live:!0,pop:-1,phase:Math.random()*6,spin:Math.random()*6,compose:b,u:R})};if(Mt){for(let[y,b,R]of Gt.gems)x(d(Yn(y),R??Gt.gemH,b));return}x(c(ze.gem4),!0),x(d(Yn(1),1.7,ze.tunnelEnd-1.5)),x(d(Yn(0),1.35,u+10.5)),x(d(Yn(1),.7,u+12)),x(d(Yn(2),.7,h+1.5))}var bc={};function tT(i,e){if(!bc[i]){let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);i==="sock"?(r.addColorStop(0,"rgba(255,248,236,0.95)"),r.addColorStop(.42,"rgba(255,190,232,0.62)"),r.addColorStop(.7,"rgba(255,214,120,0.42)"),r.addColorStop(.78,"rgba(255,170,220,0.18)"),r.addColorStop(1,"rgba(255,160,220,0)")):(r.addColorStop(0,"rgba(255,170,250,0.8)"),r.addColorStop(.5,"rgba(210,90,255,0.35)"),r.addColorStop(1,"rgba(160,60,255,0)")),s.fillStyle=r,s.fillRect(0,0,128,128),bc[i]=new Jn(n),bc[i].colorSpace=St}let t=new vi(new ri({map:bc[i],transparent:!0,depthWrite:!1,blending:mn,opacity:i==="sock"?.7:.6}));return t.scale.setScalar(e),t.position.z=.32,t.renderOrder=4,t.name="r2Halo",t}function nT(i){let e=i.scene;e.traverse(l=>{l.isMesh&&(l.material=new Bl({map:l.material.map,emissive:16777215,emissiveMap:l.material.map,emissiveIntensity:.32}))});let t=new an().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w),r=(Mt?.74:.62)/n.y,o=ze.tunnelStart,a=Mt?Gt.socks.map(([l,c,u])=>[l,u??Gt.sockH,c]):[[1,.8,o+7.5],[0,.95,o+11.8],[2,1,o+15.6],[1,.85,o+21],[0,.9,o+26.4]];Mt&&e.traverse(l=>{l.isMesh&&(l.material.emissiveIntensity=.42)});for(let[l,c,u]of a){let h=Yn(l),d=new $e,f=new $e,p=e.clone();p.scale.setScalar(r),p.position.copy(s).multiplyScalar(-r),f.add(p),f.rotation.y=Math.PI,d.add(f),Ct.map(h,qn(ze,h,u)+c,u,d.position),Ct.quaternion(u,d.quaternion),Mt&&ba(pr(20672+Rc.length),()=>d.add(tT("sock",1.25))),Dt.add(d),Rc.push({obj:d,turn:f,home:d.position.clone(),kind:"sock",live:!0,pop:-1,phase:Math.random()*6,u})}}var Ic=class{constructor(e){this.n=e,this.next=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.size0=new Float32Array(e),this.kind=new Float32Array(e),this.grav=new Float32Array(e),this.sizeA=new Float32Array(e),this.alphaA=new Float32Array(e),this.fl=new Float32Array(e*6);let t=new Ze;this.posAttr=new nt(this.p,3).setUsage(En),this.sizeAttr=new nt(this.sizeA,1).setUsage(En),this.alphaAttr=new nt(this.alphaA,1).setUsage(En),this.kindAttr=new nt(this.kind,1).setUsage(En),t.setAttribute("position",this.posAttr),t.setAttribute("size",this.sizeAttr),t.setAttribute("alpha",this.alphaAttr),t.setAttribute("kind",this.kindAttr),this.u={uScale:{value:400}},this.points=new xi(t,new Ue({vertexShader:q0,fragmentShader:Y0,uniforms:this.u,transparent:!0,depthWrite:!1,blending:Nt,blendSrc:kt,blendDst:At})),this.points.frustumCulled=!1,this.points.renderOrder=6,this.sources=[],Dt.add(this.points)}emit(e,t,n,s,r,o,a,l,c,u=1,h=null){let d=this.next;this.next=(this.next+1)%this.n,this.p.set([e,t,n],d*3),this.v.set([s,r,o],d*3),this.life[d]=l,this.max[d]=l,this.size0[d]=a,this.kind[d]=c,this.grav[d]=u,h?this.fl.set(h,d*6):this.fl.fill(0,d*6,d*6+6)}emitT(e,t,n,s,r,o,a,l,c,u=1){Ct.frame(n,Ve);let h=qn(ze,e,n),d=Ve.P.x+Ve.R.x*e+Ve.U.x*t,f=Ve.P.y+Ve.R.y*e+Ve.U.y*t,p=Ve.P.z+Ve.R.z*e+Ve.U.z*t;this.emit(d,f,p,Ve.R.x*s+Ve.U.x*r+Ve.T.x*o,Ve.R.y*s+Ve.U.y*r+Ve.T.y*o,Ve.R.z*s+Ve.U.z*r+Ve.T.z*o,a,l,c,u,[Ve.P.x+Ve.R.x*e+Ve.U.x*h,Ve.P.y+Ve.R.y*e+Ve.U.y*h,Ve.P.z+Ve.R.z*e+Ve.U.z*h,Ve.U.x,Ve.U.y,Ve.U.z])}burstT(e,t,n,s,r,o={}){for(let a=0;a<s;a++){let l=Math.random()*Math.PI*2,c=(.4+Math.random())*r,u=o.dir||0;this.emitT(e+Math.cos(l)*.25,t,n+Math.sin(l)*.25,Math.cos(l)*c*.9+u*r*.9,(1.2+Math.random()*1.6)*r*(o.up??1),Math.sin(l)*c*.9+(o.vz||0),(o.size||.11)*(.6+Math.random()*.8),.5+Math.random()*.5,o.kind??0,o.grav??1)}}sparkle(e,t){for(let n=0;n<t;n++){let s=new w().randomDirection().multiplyScalar(1+Math.random()*2.5);this.emit(e.x,e.y,e.z,s.x,s.y+.6,s.z,.16+Math.random()*.2,.45+Math.random()*.45,2,-.1)}}addSource(e){e.carry=0,this.sources.push(e)}update(e){for(let t of this.sources)for(t.carry+=t.rate*e;t.carry>=1;t.carry--){let n=Math.random()*Math.PI*2,s=Math.random()*t.spread;this.emit(t.pos.x+Math.cos(n)*s,t.pos.y+.05,t.pos.z+Math.sin(n)*s,Math.cos(n)*.6,t.up*(.5+Math.random()*.7),Math.sin(n)*.6,t.size*(.6+Math.random()*.8),.5+Math.random()*.6,t.kind,t.kind===1?.15:1,[t.pos.x,t.pos.y,t.pos.z,0,1,0])}for(let t=0;t<this.n;t++){if(this.life[t]<=0){this.alphaA[t]=0,this.sizeA[t]=0;continue}this.life[t]-=e;let n=t*3;this.v[n+1]-=9.81*this.grav[t]*e,this.kind[t]===1&&(this.v[n]*=1-e*2,this.v[n+2]*=1-e*2,this.v[n+1]*=1-e*3),this.p[n]+=this.v[n]*e,this.p[n+1]+=this.v[n+1]*e,this.p[n+2]+=this.v[n+2]*e;let s=1-this.life[t]/this.max[t];this.alphaA[t]=Math.min(1,s*8)*(1-s*s),this.sizeA[t]=this.size0[t]*(this.kind[t]===1?.7+s*1.2:this.kind[t]===2?Math.sin(Math.min(1,s*1.4)*Math.PI):1);let r=t*6,o=this.fl[r+3],a=this.fl[r+4],l=this.fl[r+5];this.kind[t]===0&&(o!==0||a!==0||l!==0)&&(this.p[n]-this.fl[r])*o+(this.p[n+1]-this.fl[r+1])*a+(this.p[n+2]-this.fl[r+2])*l<-.05&&this.v[n]*o+this.v[n+1]*a+this.v[n+2]*l<0&&(this.life[t]=0)}this.posAttr.needsUpdate=this.sizeAttr.needsUpdate=this.alphaAttr.needsUpdate=this.kindAttr.needsUpdate=!0}},nf=0;function xo(i,e,t){gr.uRipples.value[nf].set(i,e,K.time,t),nf=(nf+1)%hr}var iT=1.04;function sT(i){let e=i.scene;K.repairedNormals=Hc(e);let t=new an().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w),r=iT/n.x;e.position.copy(s).multiplyScalar(-r),e.scale.setScalar(r),Xe.fur={uCentre:{value:new w},uUp:{value:new w(0,1,0)},uRadius:{value:n.y*r*.5},uKey:{value:new w(.35,.85,-.42).normalize()},uTime:{value:0},uSky:{value:new re(1,.86,1)},uGround:{value:new re(.55,.42,.95)},uRim:{value:new re(1,.55,.88)},uTip:{value:new re(1,.8,.96)},uSpike:{value:0}},e.traverse(c=>{c.isMesh&&(c.material=new Ue({uniforms:{map:{value:c.material.map},...Xe.fur},vertexShader:K0,fragmentShader:Z0,side:qe}))});let o=new $e;o.add(e);let a=new $e;a.add(o);let l=new $e;l.add(a),Dt.add(l),it={root:l,tilt:a,squash:o,height:n.y*r,lane:1,x:0,xv:0,z:ze.startZ,y:0,speed:0,air:!1,vy:0,yAbs:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0,look:0,lookT:2.5,lastSlope:0,downhill:0,wakeCarry:0,foamCarry:0,bobRipple:0}}function gf(){let i=it;Object.assign(i,{lane:1,x:0,xv:0,z:ze.startZ,speed:0,air:!1,vy:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0}),i.yAbs=ts(ze,0,ze.startZ,K.time)+.34;for(let e of[...Sc,...Ac,...Rc])e.live=!0,e.pop=-1,e.obj.visible=!0,e.obj.scale.setScalar(1),e.obj.position.copy(e.home);K.socks=0,K.phase!=="loading"&&xr(),Vt&&(Vt.n=0),xt.snap=!0}function Ra(i){if(K.phase!=="running")return;let e=Math.max(0,Math.min(2,it.lane+i));if(e===it.lane){it.sqV+=2;return}it.lane=e;let t=it;mt.burstT(t.x,ts(ze,t.x,t.z,K.time)+.05,t.z,16,1,{dir:Yn(e)>t.x?1:-1,vz:t.speed*.5}),xo(t.x,t.z,1),K.lastGesture={t:K.time,lane:e},ui("swish")}function vf(){if(K.phase!=="running"||it.air)return;it.air=!0,it.vy=6.2,it.flip=0,it.sqV+=6;let i=it;mt.burstT(i.x,i.yAbs-.34+.05,i.z,20,1.1,{vz:i.speed*.4}),xo(i.x,i.z,1.2),ui("splash")}function xf(){K.phase==="running"&&(it.spinV=Math.PI*2/.5,it.spinLeft=Math.PI*2,ui("swish"))}function rT(i){if(K.phase!=="running")return!1;let e=it;if(Mt){if(K.turboT>0||K.blastT>0||K.guardT>0||K.outT>=0)return mt.sparkle(e.root.position.clone().add(new w(i*.5,.4,0)),14),ui("swish"),!1;K.hearts=Math.max(0,K.hearts-1),K.knocks++,K.guardT=Gt.hurtGuard,xr(),Ca("heartPill"),cT(),K.hearts===0&&(K.outT=0,ct("r2Toast").classList.add("show"))}e.lane=1,e.speed*=.55,e.sqV-=12;let t=ts(ze,e.x,e.z,K.time);return mt.burstT(e.x,t+.1,e.z,40,1.6,{dir:-i,vz:e.speed*.3}),mt.burstT(e.x,t+.05,e.z,8,.9,{kind:1,size:.24,grav:.15,up:.6}),xo(e.x,e.z,1.6),ui("splash"),K.bumps=(K.bumps||0)+1,!0}function oT(i){let e=it,t=K.time,n=K.phase==="running",s=oc(ze,e.x,e.z),r=s+Math.tan(Ct.pitch(e.z)),o=n?7*(1+_e.clamp(-r*1.6,-.22,.4))*(Mt&&K.turboT>0?Gt.turboSpeed:1):0;e.speed+=(o-e.speed)*Math.min(1,i*(n?2.2:4)),e.z+=e.speed*i;{let f=11.11111111111111,p=f*i,v=1/(1+p+.48*p*p+.235*p*p*p),g=Yn(e.lane),m=e.x-g,x=(e.xv+f*m)*i;e.xv=(e.xv-f*x)*v,e.x=g+(m+x)*v}let a=ts(ze,e.x,e.z,t),l=Math.sin(t*1.7*Math.PI*2)*.05,c=a+.34+l;e.air?(e.vy-=17*i,e.yAbs+=e.vy*i,e.flip=Math.min(Math.PI*2,e.flip+i*(Math.PI*2)/.62),e.yAbs<=c&&e.vy<0&&(e.air=!1,e.flip=0,e.sqV-=9+Math.min(8,-e.vy),mt.burstT(e.x,a+.05,e.z,34,1.4,{vz:e.speed*.5}),mt.burstT(e.x,a+.05,e.z,6,.8,{kind:1,size:.22,grav:.15,up:.5}),xo(e.x,e.z,1.6),ui("splash"))):e.yAbs=c,e.downhill+=(_e.clamp(-r*4,0,1)-e.downhill)*Math.min(1,i*4);let u=Math.max(0,r-e.lastSlope)/Math.max(i,.001);if(n&&!e.air&&u>.35&&e.lastSlope<-.1){for(e.splashCarry=(e.splashCarry||0)+u*i*36;e.splashCarry>=1;e.splashCarry--)mt.emitT(e.x+(Math.random()*2-1)*.55,a+.05,e.z+.2+Math.random()*.4,(Math.random()*2-1)*2.2,2.2+Math.random()*2.4,e.speed*(.6+Math.random()*.3),.07+Math.random()*.08,.6+Math.random()*.4,0);e.sqV-=u*i*25,(!e.splashRipple||K.time-e.splashRipple>.4)&&(xo(e.x,e.z,1.4),e.splashRipple=K.time,ui("splash"))}if(e.pitch+=(Math.atan(s)*.9-e.pitch)*Math.min(1,i*6),e.lean+=(_e.clamp(-e.xv*.22,-.45,.45)-e.lean)*Math.min(1,i*10),e.yaw+=(_e.clamp(e.xv*.1,-.3,.3)-e.yaw)*Math.min(1,i*8),e.spinLeft>0){let f=Math.min(e.spinLeft,e.spinV*i);e.spin+=f,e.spinLeft-=f}else e.spin=0;e.sqV+=(-e.sq*90-e.sqV*9)*i,e.sq+=e.sqV*i,n?e.look=Math.max(0,e.look-i/.3):(e.lookT-=i,e.lookT<0?(e.look=Math.min(1,e.look+i/.55),e.lookT<-1.6&&(e.lookT=4.5)):e.look=Math.max(0,e.look-i/.55));let h=_e.smoothstep(e.look,0,1)*Math.PI*.92;Ct.map(e.x,e.yAbs,e.z,e.root.position),Ct.quaternion(e.z,e.root.quaternion),e.tilt.rotation.set(-e.pitch+(e.air?-e.flip:0)+Math.sin(t*3.4)*.03*(n?1:.4),e.yaw+e.spin+h,e.lean+Math.sin(t*2.2)*.04,"YXZ");let d=1+e.sq*.25;if(e.squash.scale.set(1/Math.sqrt(d),d,1/Math.sqrt(d)),!e.air){let f=e.speed/7;for(e.wakeCarry+=(n?8+22*f+50*e.downhill+Math.abs(e.xv)*18:2)*i;e.wakeCarry>=1;e.wakeCarry--){let p=Math.random()<.5?-1:1;mt.emitT(e.x+p*(.25+Math.random()*.25),a+.04,e.z-.15-Math.random()*.3,p*(.5+Math.random()*1.2)-e.xv*.4,1+Math.random()*(1.6+2.2*e.downhill),e.speed*(.35+Math.random()*.3),.04+Math.random()*.07,.45+Math.random()*.4,0)}for(e.bowCarry=(e.bowCarry||0)+(n?6+18*f+24*e.downhill:0)*i;e.bowCarry>=1;e.bowCarry--){let p=Math.random()<.5?-1:1,v=Math.random()*.9;mt.emitT(e.x+p*(.42+Math.random()*.15),a+.08,e.z+.15+v*.3,p*(.9+Math.random()*1.1)-e.xv*.3,1.4+Math.random()*1.6,e.speed*(.55+Math.random()*.25),.04+Math.random()*.05,.4+Math.random()*.3,0)}for(e.foamCarry+=(n?1.5+3*f+5*e.downhill:.8)*i;e.foamCarry>=1;e.foamCarry--){let p=Math.random()<.5?-1:1;mt.emitT(e.x+p*(.32+Math.random()*.25),a+.05,e.z-.35-Math.random()*.6,p*.45,.2,e.speed*.75,.1+Math.random()*.12,.45+Math.random()*.3,1,.1)}if(!n)for(e.restBubbles=(e.restBubbles||0)+14*i;e.restBubbles>=1;e.restBubbles--){let p=Math.random()*Math.PI*2,v=.42+Math.random()*.28;mt.emitT(e.x+Math.cos(p)*v,a+.02,e.z+Math.sin(p)*v*.7,Math.cos(p)*.15,.25+Math.random()*.3,0,.07+Math.random()*.09,1+Math.random()*.8,0,-.03)}e.bobRipple-=i,e.bobRipple<0&&(xo(e.x,e.z,n?.35:.6),e.bobRipple=n?.45:1.2)}gr.uPlayer.value.set(e.x,a,e.z),gr.uPlayerMove.value.set(e.xv,e.speed/7,e.downhill),e.lastSlope=r,Xe.fur.uTime.value=t,Xe.fur.uCentre.value.copy(e.root.position),Ct.frame(e.z,Ve),Xe.fur.uUp.value.copy(Ve.U),document.body.classList.toggle("inDrum",n&&e.z>ze.tunnelStart-(yn?Ne.r7.hudEarly:.5)),Vt&&yT(),n&&e.z>ze.tunnelEnd-2&&uT()}function aT(i){let e=it;if(K.guardT=Math.max(0,K.guardT-i),K.blastT>0&&(K.blastT=Math.max(0,K.blastT-i),ks.clearBrushes&&ks.clearBrushes(e.z-1,e.z+Gt.blastReach)),K.turboT>0)for(K.turboT=Math.max(0,K.turboT-i),(!e.spinLeft||e.spinLeft<.5)&&(e.spinV=Math.PI*2/.32,e.spinLeft=Math.PI*2),e.turboCarry=(e.turboCarry||0)+i*60;e.turboCarry>=1;e.turboCarry--){let t=Math.random()*Math.PI*2,n=ts(ze,e.x,e.z,K.time);mt.emitT(e.x+Math.cos(t)*.5,n+.1+Math.random()*.4,e.z+Math.sin(t)*.3,Math.cos(t)*2.2,.8+Math.random(),e.speed*.4,.08+Math.random()*.07,.4+Math.random()*.3,0)}K.outT>=0&&(K.outT+=i,K.outT>=Gt.outOfHearts&&ig()),ct("r2Shield").classList.toggle("on",K.blastT>0||K.turboT>0)}function lT(i){let e=it,t=LM;if(K.phase!=="running"||e.z<ze.tunnelStart-.3)return;let n=df?{...xn.spray,...An.spray,...Mc?dt.spray:{}}:xn.spray,s=ts(ze,e.x,e.z,K.time);if(!e.air)for(e.r3Spray=(e.r3Spray||0)+n.rate*i;e.r3Spray>=1;e.r3Spray--){let o=t()<.5?-1:1,a=t();mt.emitT(e.x+o*(.38+t()*.3),s+.05,e.z-.25+a*.5,o*(.4+t()*1.4)-e.xv*.3,1.6+t()*2.2,e.speed*(.45+t()*.35),n.size[0]+t()*(n.size[1]-n.size[0]),.45+t()*.35,3,.9)}let r=xn.sparkles;for(e.r3Spark=(e.r3Spark||0)+r.rate*i;e.r3Spark>=1;e.r3Spark--){let o=t()*Math.PI*2,a=r.r[0]+t()*(r.r[1]-r.r[0]),l=r.du[0]+t()*(r.du[1]-r.du[0]);Ct.frame(e.z+l,Ve);let c=0+1.5+Math.sin(o)*a;if(c<.35)continue;let u=Ve.P.clone().addScaledVector(Ve.R,Math.cos(o)*a).addScaledVector(Ve.U,c);mt.emit(u.x,u.y,u.z,0,.05,0,.1+t()*.14,.5+t()*.5,2,0)}}function yf(){if(!Mt||K.phase!=="running"||K.paused||K.blasts<=0||K.blastT>0||K.outT>=0)return!1;K.blasts--,K.blastT=Gt.blastTime;let i=it,e=ts(ze,i.x,i.z,K.time);for(let t=0;t<46;t++){let n=Math.random()*Math.PI*2,s=Math.random()*.5;mt.emitT(i.x+Math.cos(n)*s*.6,e+.5+Math.sin(n)*s*.5,i.z+.4,Math.cos(n)*.9,.4+Math.random()*.8,i.speed+4+Math.random()*5,.16+Math.random()*.2,.9+Math.random()*.6,1,-.05)}return ks.clearBrushes&&ks.clearBrushes(i.z-1,i.z+Gt.blastReach),Ca("blastBtn"),ui("gem"),xr(),!0}function bf(){return!Mt||K.phase!=="running"||K.paused||K.turbos<=0||K.turboT>0||K.outT>=0?!1:(K.turbos--,K.turboT=Gt.turboTime,Ca("turboBtn"),ui("swish"),xr(),!0)}function Ta(i){(!Mt||K.phase!=="running")&&(i=!1),K.paused=!!i,document.body.classList.toggle("paused",K.paused),ct("pausePanel").hidden=!K.paused,nn&&(K.paused?nn.suspend?.():nn.resume?.()),hf=performance.now(),K.paused&&ct("resumeBtn").focus({preventScroll:!0})}function cT(){let i=ct("r2Hurt");i.classList.remove("go"),i.offsetWidth,i.classList.add("go")}function ig(){K.outT=-1,K.restarts++,ct("r2Toast").classList.remove("show"),Object.assign(K,{hearts:Gt.hearts,blasts:Gt.blasts,turbos:Gt.turbos,blastT:0,turboT:0,guardT:0}),gf(),K.phase="intro",document.body.classList.remove("running","inDrum"),xr()}Mt&&(ks.pop=i=>{mt.sparkle(i,22);for(let e=0;e<14;e++){let t=new w().randomDirection();mt.emit(i.x+t.x*.6,i.y+t.y*.6,i.z+t.z*.6,t.x,t.y+.5,t.z,.2+Math.random()*.2,.7,1,-.05)}});function uT(){K.laps++;let i=ct("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),gf(),K.phase="running"}var yo={off:new w(0,1,-6.4),look:new w(0,.5,5.97),fov:40},ss={off:new w(0,1.03,-3.58),look:new w(0,.89,6.42),fov:60};Ni&&(ss.look.y=xn.camera.lookY);df&&(ss.look.y=An.camera.lookY);if(Mc&&dt.camera){let i=dt.camera;ss.off.set(...i.off),ss.look.y=i.lookY,ss.fov=i.fov,i.lookX!=null&&(ss.look.x=i.lookX)}xt={snap:!0,x:0,y:0,tilt:0,shake:0};function hT(i){let e=it,t=_e.smoothstep(e.z,-4,ze.tunnelStart+(Fi?Ne.camBlendEnd:3)),n=yo.off.clone().lerp(ss.off,t),s=yo.look.clone().lerp(ss.look,t),r=_e.lerp(yo.fov,ss.fov,t),o=qn(ze,e.x,e.z)+.34,a=e.x*.55,l=o+(e.yAbs-o)*.35,c=0;for(let R=1;R<=6;R++)c+=oc(ze,e.x,e.z+R*1.2);c/=6;let u=K.phase==="running"?c:0,h=xt.snap;xt.snap&&(xt.x=a,xt.y=l,xt.tilt=u,xt.snap=!1);let d=1-Math.exp(-i/.14);xt.x+=(a-xt.x)*d,xt.y+=(l-xt.y)*(1-Math.exp(-i/.12)),xt.tilt+=(u-xt.tilt)*(1-Math.exp(-i/.35));let f=xt.x+n.x,p=xt.y+n.y+xt.tilt*n.z*.6,v=e.z+n.z;Ct.frame(e.z,Ve),(h||!xt.fT)&&(xt.fP=Ve.P.clone(),xt.fR=Ve.R.clone(),xt.fU=Ve.U.clone(),xt.fT=Ve.T.clone());let g=1-Math.exp(-i/.25);xt.fP.copy(Ve.P),xt.fT.lerp(Ve.T,g).normalize(),xt.fU.lerp(Ve.U,g),xt.fR.crossVectors(xt.fU,xt.fT).normalize(),xt.fU.crossVectors(xt.fT,xt.fR).normalize();let m=(R,E,A,C)=>C.copy(xt.fP).addScaledVector(xt.fR,R).addScaledVector(xt.fU,E).addScaledVector(xt.fT,A),x=m(f,p,n.z,new w),y=m(xt.x+s.x,xt.y+s.y+xt.tilt*s.z,s.z,new w);if(Ct.frame(v,Ve),v>-.25&&v<ze.tunnelEnd){let R=x.clone().sub(Ve.P),E=R.dot(Ve.R),A=R.dot(Ve.U)-(0+1.5),C=R.dot(Ve.T),M=Math.hypot(E,A),_=ze.clearRadius-.4;M>_&&x.copy(Ve.P).addScaledVector(Ve.R,E/M*_).addScaledVector(Ve.U,0+1.5+A/M*_).addScaledVector(Ve.T,C)}Mn.up.set(0,1,0).lerp(Ve.U,.75).normalize(),Mn.position.copy(x),Mn.lookAt(y);let b=Mn.aspect;Mn.fov=b>=.5?r:_e.radToDeg(2*Math.atan(Math.tan(_e.degToRad(r)/2)*.5/b)),Mn.updateProjectionMatrix()}function dT(i){let e=K.time,t=it.root.position,n=r=>r.obj.position.distanceTo(t)<.4+.42;for(let r of Sc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){rf(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*1.2*6.283+r.phase)*.08,r.q0?r.obj.quaternion.copy(r.q0).multiply(fT.setFromAxisAngle(pT,Math.sin(e*2-r.u*.9)*.5)):r.obj.rotation.y+=i*_e.degToRad(120),Mt&&sf(r),K.phase==="running"&&n(r)&&of(r)}for(let r of Ac)if(!(!r.live&&r.pop<0)){if(r.pop>=0){rf(r,i);continue}if(r.spin+=i*_e.degToRad(70),r.obj.position.y=r.home.y+Math.sin(e*.75*6.283+r.phase)*.1,r.obj.rotation.set(Math.sin(e*.9+r.phase)*.16,r.spin,Math.sin(e*.7+r.phase*1.3)*.12),Mt&&sf(r),K.phase==="running"&&n(r)&&of(r),Math.random()<i*(1.2+10*Math.max(0,1-r.obj.position.distanceTo(t)/6))){let o=r.obj.position.clone().add(new w().randomDirection().multiplyScalar(.22));mt.emit(o.x,o.y,o.z,0,.1,0,.12+Math.random()*.1,.35,2,0)}}for(let r of Rc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){rf(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*.9*6.283+r.phase)*.09,r.turn.rotation.set(Math.sin(e*1.3+r.phase)*.12,Math.PI+Math.sin(e*.8+r.phase)*.45,Math.sin(e*1.1+r.phase*1.7)*.15),Mt&&sf(r),K.phase==="running"&&n(r)&&of(r)}let s=Ac.reduce((r,o)=>o.live?Math.max(r,1-Math.min(1,o.obj.position.distanceTo(t)/6)):r,0);for(let r of Xe.gemMaterials||[])r.emissiveIntensity=.35+.6*s}var fT=new _t,pT=new w(0,1,0);function sf(i){let e=it.z-i.u,t=_e.clamp((e-.6)/1,0,1);i.obj.scale.setScalar(1-t+.001),i.obj.visible=t<1}function rf(i,e){i.pop+=e;let t=Math.min(1,i.pop/.35);i.obj.position.lerp(it.root.position.clone().add(new w(0,Mt?1:.6,0)),t),i.obj.scale.setScalar((1+(Mt?.15:.6)*Math.sin(t*Math.PI))*(1-t)+.001),t>=1&&(i.pop=-1,i.obj.visible=!1)}function of(i){i.live=!1,i.pop=0,i.kind==="coin"?(K.coins++,K.collected.coins++,mt.sparkle(i.obj.position,7),ui("coin")):i.kind==="sock"?(K.socks++,K.collected.socks=(K.collected.socks||0)+1,mt.sparkle(i.obj.position,16),ui("gem"),Ca("sockPanel")):(K.gems++,K.collected.gems++,mt.sparkle(i.obj.position,18),ui("gem"),Ca("gemPill")),xr()}function xr(){Mt&&(ct("hearts").innerHTML=K.hearts>=Gt.hearts?`${K.hearts} <small>Full</small>`:String(K.hearts),ct("blastCount").textContent=String(K.blasts),ct("turboCount").textContent=String(K.turbos),ct("blastBtn").disabled=K.blasts<=0,ct("turboBtn").disabled=K.turbos<=0),ct("coins").textContent=K.coins.toLocaleString("en-US"),ct("gems").textContent=String(K.gems),ct("sockCount").textContent=`${Math.min(5,K.socks)}/5`,ct("sockBar").style.width=`${Math.min(5,K.socks)*20}%`}function Ca(i){let e=ct(i);e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}function _o(){K.phase==="intro"&&(K.phase="running",K.startedAt=K.time,document.body.classList.add("running"),vT())}var mT=["banner","startPanel"].map(i=>ct(i)),_a=ct("openingArt");function gT(){let i=K.phase==="running"?K.time-K.startedAt:-1,e=i<0?0:_e.smoothstep(i,0,.45);for(let t of mT)t.style.opacity=(1-e).toFixed(3),t.style.transform=`translateX(-50%) translateY(calc(var(--u) * ${(12*e).toFixed(2)}))`,t.style.visibility=e>=1?"hidden":"";if(ct("hint").classList.toggle("show",i>=.3&&i<3.8&&K.laps===0),_a){let t=Gn.art&&e<1&&_a.complete&&_a.naturalWidth>0&&document.body.classList.contains("ready");document.body.classList.toggle("openingArt",t),_a.style.visibility=t?"visible":"hidden",_a.style.opacity=(1-e).toFixed(3),ct("soundBtn").style.opacity=t?e.toFixed(3):""}if(Mt){let t=i<0?0:_e.smoothstep(i,.1,.55);document.body.classList.toggle("r2Play",t>0);let n=document.body.classList.contains("openingArt");ct("soundBtn").style.opacity=String(n?e*(1-t):1-t),ct("soundBtn").style.visibility=t>=1?"hidden":"";for(let s of["pauseBtn","blastBtn","turboBtn"]){let r=ct(s);r.style.opacity=t.toFixed(3),r.style.visibility=t>0?"":"hidden"}}}var nn=null,Os=null;function vT(){if(!(nn||Km))try{nn=new(window.AudioContext||window.webkitAudioContext),Os=nn.createGain(),Os.gain.value=K.sound?.5:0,Os.connect(nn.destination);let i=nn.createBuffer(1,nn.sampleRate*2,nn.sampleRate),e=i.getChannelData(0);for(let r=0;r<e.length;r++)e[r]=Math.random()*2-1;let t=nn.createBufferSource();t.buffer=i,t.loop=!0;let n=nn.createBiquadFilter();n.type="lowpass",n.frequency.value=900;let s=nn.createGain();s.gain.value=.06,t.connect(n).connect(s).connect(Os),t.start()}catch{nn=null}}function af(i,e,t,n,s="sine"){let r=nn.createOscillator(),o=nn.createGain();r.type=s,r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(Os),r.start(e),r.stop(e+t+.05)}function ui(i){if(!nn||!K.sound)return;let e=nn.currentTime;if(i==="coin")af(1318.5,e,.12,.25,"triangle"),af(1975.5,e+.06,.22,.2,"triangle");else if(i==="gem")[1567.98,2093,2637.02,3135.96].forEach((t,n)=>af(t,e+n*.045,.5,.18));else if(i==="splash"||i==="swish"){let t=i==="splash"?.35:.18,n=nn.createBuffer(1,nn.sampleRate*t,nn.sampleRate),s=n.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=(Math.random()*2-1)*Math.pow(1-l/s.length,2);let r=nn.createBufferSource();r.buffer=n;let o=nn.createBiquadFilter();o.type="bandpass",o.frequency.value=i==="splash"?700:1800,o.Q.value=.8;let a=nn.createGain();a.gain.value=i==="splash"?.5:.18,r.connect(o).connect(a).connect(Os),r.start(e)}}var bi=null,jm=["left","middle","right"],wc=[],wa=null;function _f(i,e){if(!Nc)return;let t=Tn.getBoundingClientRect();wc.push({x:i.clientX-t.left,y:i.clientY-t.top,t:K.time,down:e}),wc.length>80&&wc.shift()}function Fc(i){Nc&&(wa={text:i,t:K.time})}Tn.addEventListener("pointerdown",i=>{i.target.closest("button")||Mt&&K.paused||(bi={x:i.clientX,y:i.clientY,t:performance.now(),used:!1},Tn.setPointerCapture?.(i.pointerId),_f(i,!0))});Tn.addEventListener("pointermove",i=>{if(!bi||(_f(i,!0),bi.used))return;let e=i.clientX-bi.x,t=i.clientY-bi.y,n=Math.max(24,Tn.clientWidth*.06);if(Math.abs(e)>n&&Math.abs(e)>Math.abs(t)){bi.used=!0,K.phase==="intro"&&_o();let s=it.lane;Ra(e<0?-1:1),Fc(`Swipe ${e<0?"\u2190":"\u2192"}  \xB7  ${s===it.lane?"edge lane":`lane ${jm[s]} \u2192 ${jm[it.lane]}`}`)}else t<-n&&Math.abs(t)>Math.abs(e)&&(bi.used=!0,K.phase==="intro"&&_o(),vf(),Fc("Swipe \u2191  \xB7  jump"))});Tn.addEventListener("pointerup",i=>{bi&&(_f(i,!1),!bi.used&&performance.now()-bi.t<400&&(K.phase==="intro"?(_o(),Fc("Tap  \xB7  start")):(xf(),Fc("Tap  \xB7  spin"))),bi=null)});window.addEventListener("keydown",i=>{if(K.phase==="loading")return;let e=i.key;if(Mt&&K.phase==="running"){if(e==="p"||e==="P"||e==="Escape"){Ta(!K.paused),i.preventDefault();return}if(K.paused)return;if(e==="b"||e==="B"){yf();return}if(e==="t"||e==="T"){bf();return}}if(K.phase==="intro"&&[" ","Enter","ArrowLeft","ArrowRight","ArrowUp","a","d","w"].includes(e)&&(_o(),e===" "||e==="Enter")){i.preventDefault();return}e==="ArrowLeft"||e==="a"?Ra(-1):e==="ArrowRight"||e==="d"?Ra(1):e==="ArrowUp"||e==="w"?vf():e===" "&&(i.preventDefault(),xf())});function sg(){K.sound=!K.sound,ct("soundBtn").setAttribute("aria-pressed",String(!K.sound)),ct("soundBtn").title=K.sound?"Sound on":"Sound off",Os&&(Os.gain.value=K.sound?.5:0),Mt&&(ct("pauseSound").textContent=K.sound?"Sound: On":"Sound: Off",ct("pauseSound").setAttribute("aria-pressed",String(K.sound)))}ct("soundBtn").addEventListener("click",sg);if(Mt){document.body.classList.add("r2"),ct("hint").after(ct("r2Hud").content.cloneNode(!0));for(let i of["pauseBtn","blastBtn","turboBtn","pausePanel","r2Toast","r2Hurt","r2Shield"])ct(i).hidden=!1;ct("pausePanel").hidden=!0,ct("blastBtn").addEventListener("click",i=>{i.currentTarget.blur(),yf()}),ct("turboBtn").addEventListener("click",i=>{i.currentTarget.blur(),bf()}),ct("pauseBtn").addEventListener("click",i=>{i.currentTarget.blur(),Ta(!0)}),ct("resumeBtn").addEventListener("click",()=>Ta(!1)),ct("pauseSound").addEventListener("click",sg),ct("restartBtn").addEventListener("click",()=>{Ta(!1),ig()})}var Vt=null;function xT(){let i=new Ri(-1,1,1,-1,.1,500),e=new $e;Dt.add(e);let t=[],n=[],s=0;for(let u=ze.startZ-10;u<=ze.tunnelEnd+8;u+=.2,s++){let h=Ct.map(0,qn(ze,0,u),u);if(t.push(h.x,h.y,h.z,h.x,h.y-.45,h.z),s){let d=s*2;n.push(d-2,d-1,d,d-1,d+1,d)}}let r=new Ze;r.setAttribute("position",new We(t,3)),r.setIndex(n),e.add(new Te(r,new Bt({color:2063871,side:qe})));for(let u of[1.5+ze.tunnelRadius,1.5-ze.tunnelRadius]){let h=[];for(let d=ze.tunnelStart;d<=ze.tunnelEnd;d+=.5)h.push(Ct.map(0,u,d));e.add(new Te(new ar(new ws(h),h.length*2,.05,6),new Bt({color:14721056})))}let o=1200,a=new Float32Array(o*3),l=new Ze;l.setAttribute("position",new nt(a,3)),l.setDrawRange(0,0);let c=new xi(l,new ir({color:16719774,size:5,sizeAttenuation:!1}));c.frustumCulled=!1,e.add(c);for(let u of[Xe.castle,mr,Xe.machinery,Xe.sideMachinery,vr&&vr.root,Sa&&Sa.tunnel,Xe.falls,Xe.bubbles,...Xe.drumMeshes||[],...Xe.exitLight||[],...Aa.map(h=>h.g)])u&&(u.visible=!1);Vt={cam:i,g:e,dots:c,tp:a,n:0,N:o,yc:1,width:22,startY:it.root.position.y}}function yT(){let i=it.root.position;Vt.n>=Vt.N&&(Vt.tp.copyWithin(0,3),Vt.n=Vt.N-1),i.toArray(Vt.tp,Vt.n*3),Vt.n++,Vt.dots.geometry.attributes.position.needsUpdate=!0,Vt.dots.geometry.setDrawRange(0,Vt.n)}function bT(){let i=Tn.clientWidth,e=Tn.clientHeight,t=it.root.position,n=Vt.cam,s=Vt.width,r=s*e/i;return n.left=-s*.36,n.right=s*.64,n.top=r/2,n.bottom=-r/2,n.updateProjectionMatrix(),n.position.set(t.x-60,Vt.yc,t.z),n.up.set(0,1,0),n.lookAt(t.x,Vt.yc,t.z),{width:s,height:r,left:t.z+n.left}}var Ea=ct("overlay"),lt=Ea.getContext("2d");function _T(){let i=Tn.clientWidth,e=Tn.clientHeight;(Ea.width!==i||Ea.height!==e)&&(Ea.width=i,Ea.height=e),lt.clearRect(0,0,i,e),Vt&&ET(i,e),Nc&&wT(i,e)}function Ec(i,e,t,n,s=1,r="center"){lt.font=`600 ${n}px Fredoka, system-ui, sans-serif`;let o=lt.measureText(i).width,a=n*.6,l=r==="center"?e-o/2-a:e-a;lt.globalAlpha=s*.82,lt.fillStyle="#141c5c",lt.beginPath(),lt.roundRect(l,t-n*.95,o+a*2,n*1.6,n*.8),lt.fill(),lt.globalAlpha=s,lt.fillStyle="#fff",lt.textAlign=r==="center"?"center":"left",lt.fillText(i,e,t+n*.1),lt.globalAlpha=1}function wT(i,e){let t=wc.filter(n=>K.time-n.t<.5);if(t.length){lt.lineCap="round",lt.lineJoin="round";for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=K.time-a.t;lt.strokeStyle=`rgba(255,255,255,${Math.max(0,.85-l*1.6)})`,lt.lineWidth=14*(1-l),lt.beginPath(),lt.moveTo(o.x,o.y),lt.lineTo(a.x,a.y),lt.stroke()}let n=t[t.length-1],s=K.time-n.t;lt.fillStyle=`rgba(255,255,255,${Math.max(0,.9-s*1.8)})`,lt.strokeStyle=`rgba(255,79,184,${Math.max(0,.9-s*1.8)})`,lt.lineWidth=3,lt.beginPath(),lt.arc(n.x,n.y,15,0,Math.PI*2),lt.fill(),lt.stroke()}wa&&K.time-wa.t<1&&Ec(wa.text,i/2,e*.86,Math.round(e*.024),Math.min(1,(1-(K.time-wa.t))*3))}function ET(i,e){let t=Vt.frame,n=it.root.position,s=c=>(Vt.cam.top-(c-Vt.yc))/t.height*e;lt.font=`500 ${Math.round(e*.022)}px Fredoka, system-ui, sans-serif`,lt.textAlign="left";for(let c=-3;c<=6;c+=.5){let u=s(c);if(u<0||u>e)continue;let h=Math.abs(c-Math.round(c))<1e-6;lt.strokeStyle=h?"rgba(40,30,110,0.45)":"rgba(40,30,110,0.18)",lt.lineWidth=h?1.5:1,lt.beginPath(),lt.moveTo(0,u),lt.lineTo(i,u),lt.stroke(),h&&(lt.fillStyle="rgba(30,20,90,0.85)",lt.fillText(`${c>=0?"+":""}${c.toFixed(0)} m`,8,u-4))}let r=(n.z-t.left)/t.width*i,o=s(n.y);lt.strokeStyle="#ff1f9e",lt.setLineDash([6,5]),lt.lineWidth=2,lt.beginPath(),lt.moveTo(r,o),lt.lineTo(i*.9,o),lt.stroke(),lt.setLineDash([]);let a=Ct.angles(it.z),l=Math.round(e*.028);Ec(`height ${n.y>=0?"+":""}${n.y.toFixed(2)} m`,i*.9-4,o+l*.35,l,1,"left"),Ec("SIDE VIEW (debug) \xB7 camera fixed in height \xB7 pink dots = the mascot's real path",i/2,l*1.5,l),Ec(`tube pitch ${a.pitch>=0?"+":""}${a.pitch.toFixed(0)}\xB0  \xB7  bank ${a.bank>=0?"+":""}${a.bank.toFixed(0)}\xB0  \xB7  speed ${it.speed.toFixed(1)} m/s${it.air?"  \xB7  jumping":""}`,i/2,e-l*1.2,l)}function wf(){let i=Tn.clientWidth,e=Tn.clientHeight;rs.setSize(i,e,!1),_i.setSize(i,e),_i.setPixelRatio(is),bo.resolution.set(Math.round(i*.5),Math.round(e*.5)),Mn.aspect=i/e,mt&&(mt.u.uScale.value=e*is*.5/Math.tan(_e.degToRad(Mn.fov)/2)),Tn.style.setProperty("--u",Math.min(e/537,i/269).toFixed(4)+"px")}new ResizeObserver(wf).observe(Tn);function Lc(i){if(!(Mt&&K.paused)){K.time+=i,Mt&&aT(i),Ni&&lT(i),gr.uTime.value=K.time;for(let e of eg)e.uTime.value=K.time;Xe.bubbleU.uTime.value=K.time,oT(i),dT(i);for(let e of Aa)e.angle+=e.speed*i,Pc.setFromAxisAngle(e.axis,e.angle),Cc.makeTranslation(e.centre.x,e.centre.y,e.centre.z).multiply(OM.makeRotationFromQuaternion(Pc)).multiply(new Se().makeTranslation(-e.centre.x,-e.centre.y,-e.centre.z)),e.g.matrix.multiplyMatrices(Cc,e.m0);Sa.update(i,K.time),vr.update(i,K.time);for(let e of Xe.rings)e.material.color.copy(e.userData.base).multiplyScalar(.8+.25*Math.sin(K.time*2.4+e.userData.pulse));mt.update(i),hT(i),gT(),Tc&&Tc.update(i,K.time,K.phase)}}var lf=60,_c=0;function Uc(){Vt?(Vt.frame=bT(),mt&&(mt.u.uScale.value=Tn.clientHeight*is/Vt.frame.height),rs.render(Dt,Vt.cam)):(mt&&(mt.u.uScale.value=Tn.clientHeight*is*.5/Math.tan(_e.degToRad(Mn.fov)/2)),_i.render()),(Vt||Nc)&&_T()}var hf=performance.now();function rg(i){if(requestAnimationFrame(rg),K.phase==="loading"||Km)return;let e=Math.min(.05,(i-hf)/1e3);hf=i,Lc(e),Uc(),lf+=(1/Math.max(e,.001)-lf)*.05,_c=lf<32?_c+e:0,_c>2.5&&(_c=0,bo.enabled?bo.enabled=!1:is>.75&&(is=Math.max(.75,is*.8),rs.setPixelRatio(is),wf()))}async function MT(){try{ze=await(await fetch(uf.layout)).json(),Ct=Q0(ze,df?{straight:An.straight,...Mc?{curve:dt.path.curve}:{}}:{}),kM();let[e,t,n,s,r,o,a,l,c,u,h,d]=await Promise.all([...["castle","drum","mascot","roller","gem","sock","machinery","tower","gear","pipe","crown"].map(tf),new Rs().loadAsync("ui/coin_face.png")]);mt=new Ic(Ni?2200:1400),Ni&&(mt.points.material.fragmentShader=mt.points.material.fragmentShader.replace("if (vKind < 0.5) {",`if (vKind > 2.5) {
    float hl = 1.0 - smoothstep(0.0, 0.4, length(p - vec2(-0.3, -0.3)));
    a = (1.0 - smoothstep(0.7, 1.0, r)) * 0.85 + hl * 0.15;
    col = mix(vec3(0.8, 0.93, 1.0), vec3(1.25), clamp(hl + (1.0 - r) * 0.5, 0.0, 1.0));
  } else if (vKind < 0.5) {`),mt.points.material.needsUpdate=!0),Hc(e.scene),pf(e.scene,{saturation:1,brightness:1.06,glow:.35,grade:N0,haze:[.3,14,45,[.86,.79,1]],shade:[.86,.26,.35]}),Xe.castle=VM(e.scene,ze.castle),jM(t),GM(),WM(),XM(),$M(),KM(s),Sa=nm({scene:Dt,mats:Xe,track:{TR:Ct,L:ze,W:mo}}),Xe.machinery=Sa.root,ZM(a),vr=im({scene:Dt,models:{tower:l,gear:c,pipe:u,crown:h},env:Xe.env,gold:Xe.gold,glowTexture:ng(),fallGeometry:tg,fallMaterial:Xe.fallMat,fx:mt}),K.decorClear=vr.clear,JM();let f=Mc?await Promise.all([tf("coinP2"),tf("coinP2Lo")]):null;eT(r,d,f),nT(o),sT(n),Ui&&!cf&&(Tc=ba(pr(3045),()=>Wm({scene:Dt,env:Xe.env,TR:Ct,L:ze,W:mo,mascot:it,camera:Mn,Particles:Ic,fxScale:mt.u.uScale,waterU:gr,castle:Xe.castle,waterSheets:mr.children,renderPass:_i.passes[0],bumpMascot:rT,drumMeshes:Xe.drumMeshes,exitLight:Xe.exitLight,r2:Mt?ks:null,bloomPass:bo,outputPass:_i.passes[_i.passes.length-1],grade:Zm,bubbles:Xe.bubbles,rollers:Aa,sideMachinery:Xe.sideMachinery,fur:Xe.fur,mascotModel:it.squash.children[0],setSideMachinery:p=>(Object.assign(Ma,p),mf(),K.machineryInnerX),get rollerCandidate(){return K.rollerCandidate},set rollerCandidate(p){K.rollerCandidate=p}})),await Gm(pr(3046),Tc.loadExtras)),cf&&xT(),wf(),gf(),K.phase="intro",xr(),Lc(1/60),Uc(),document.body.classList.add("ready"),ct("loading").hidden=!0,og()}catch(i){console.error(i),ct("loadMsg").textContent="The washing machine could not load: "+(i&&i.message?i.message:i)+". Reload the page to try again.",ag(i)}}var og,ag,TT=new Promise((i,e)=>{og=i,ag=e});requestAnimationFrame(rg);MT();window.__bw={ready:TT,state:()=>({phase:K.phase,time:+K.time.toFixed(3),z:+it.z.toFixed(3),x:+it.x.toFixed(3),y:+it.yAbs.toFixed(3),world:it.root.position.toArray().map(i=>+i.toFixed(3)),path:Object.fromEntries(Object.entries(Ct.angles(it.z)).map(([i,e])=>[i,+e.toFixed(1)])),cameraUp:Mn.up.toArray().map(i=>+i.toFixed(3)),lane:it.lane,speed:+it.speed.toFixed(2),air:it.air,slope:+it.lastSlope.toFixed(3),pitchDeg:+_e.radToDeg(it.pitch).toFixed(1),leanDeg:+_e.radToDeg(it.lean).toFixed(1),coins:K.coins,gems:K.gems,socks:K.socks,collected:{...K.collected},laps:K.laps,camera:Mn.position.toArray().map(i=>+i.toFixed(3)),cameraPitchDeg:+_e.radToDeg(Math.asin(Mn.getWorldDirection(new w).y)).toFixed(2),particles:mt?mt.life.reduce((i,e)=>i+(e>0?1:0),0):0,repairedNormals:K.repairedNormals,machineryInnerX:K.machineryInnerX??null,decorClear:K.decorClear??null,rollerCandidate:K.rollerCandidate??null,...Mt?{hearts:K.hearts,blasts:K.blasts,turbos:K.turbos,paused:K.paused,blastT:+K.blastT.toFixed(2),turboT:+K.turboT.toFixed(2),knocks:K.knocks,restarts:K.restarts,bumps:K.bumps||0}:{}}),blast:()=>yf(),turbo:()=>bf(),pause:i=>Ta(i),hazards:()=>ks.hazards?ks.hazards():null,tap:()=>{K.phase==="intro"?_o():xf()},swipe:i=>{K.phase==="intro"&&_o(),i==="left"?Ra(-1):i==="right"?Ra(1):i==="up"&&vf()},advance:(i,e=30)=>{let t=Math.max(1,Math.round(i*e));for(let n=0;n<t;n++)Lc(1/e);return Uc(),window.__bw.state()},render:Uc,lookBack:i=>{it.look=i,it.lookT=-.5},setBloom:i=>{bo.enabled=!!i},setSideMachinery:i=>(Object.assign(Ma,i),mf(),K.machineryInnerX),setDecor:(i,e,t)=>(t===null?Ii[i].splice(e,1):Ii[i][e]=Object.assign(Ii[i][e]||{},t),K.decorClear=vr.place(),K.decorClear),getDecor:()=>JSON.parse(JSON.stringify(Ii)),pick:(i,e)=>{let t=Tn.getBoundingClientRect(),n=new ql;n.setFromCamera(new ae(i/t.width*2-1,-(e/t.height)*2+1),Mn);let s=n.intersectObjects([Xe.castle,vr.root,Xe.sideMachinery].filter(Boolean),!0)[0];return s?{p:s.point.toArray().map(r=>+r.toFixed(2)),obj:s.object.name||s.object.parent?.name||""}:null},project:i=>{let e=new w(...i).project(Mn),t=Tn.getBoundingClientRect();return[+((e.x+1)/2*t.width).toFixed(1),+((1-e.y)/2*t.height).toFixed(1)]},setFraming:i=>{i.off&&yo.off.set(...i.off),i.look&&yo.look.set(...i.look),i.fov&&(yo.fov=i.fov),xt.snap=!0},clearanceTrace:(i,e=30)=>{let t=[],n=0+1.5,s=new w,r=o=>o>ze.tunnelStart+.5&&o<ze.tunnelEnd-.5;for(let o=0,a=Math.round(i*e);o<a;o++){Lc(1/e);let l=it,c=r(l.z)?Math.hypot(l.x,l.yAbs-n)+.4:null,u=null;for(let h=l.z-9;h<=l.z+.5;h+=.05){Ct.frame(h,Ve),s.copy(Mn.position).sub(Ve.P);let d=Math.abs(s.dot(Ve.T));(!u||d<u.along)&&(u={along:d,u:h,r:Math.hypot(s.dot(Ve.R),s.dot(Ve.U)-n)})}t.push({t:+K.time.toFixed(3),z:+l.z.toFixed(2),body:c&&+c.toFixed(3),camera:r(u.u)?+u.r.toFixed(3):null})}return t},debug:()=>({scene:Dt,water:mr,mascot:it.root,particles:mt.points,renderer:rs,composer:_i,camera:Mn,track:Ct,layout:ze,world:mo,mascotState:it})};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
