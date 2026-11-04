var r0=Object.defineProperty;var o0=(i,e)=>{for(var t in e)r0(i,t,{get:e[t],enumerable:!0})};var au="170";var a0=0,Hd=1,l0=2;var mp=1,c0=2,bi=3,ai=0,hn=1,gt=2,oi=0,Er=1,dn=2,kd=3,Vd=4,Un=5,As=100,h0=101,u0=102,d0=103,f0=104,lu=200,Gn=201,p0=202,m0=203,Co=204,fn=205,g0=206,v0=207,x0=208,_0=209,y0=210,M0=211,b0=212,E0=213,w0=214,Gc=0,Wc=1,Xc=2,Ar=3,qc=4,Yc=5,$c=6,Zc=7,cu=0,S0=1,T0=2,ji=0,hu=1,uu=2,du=3,fu=4,A0=5,pu=6,Wo=7,Gd="attached",R0="detached",gp=300,Rr=301,Cr=302,Kc=303,jc=304,Cl=306,Cs=1e3,wi=1001,Po=1002,un=1003,mu=1004;var yr=1005;var Sn=1006,bo=1007;var ri=1008;var Ai=1009,vp=1010,xp=1011,Io=1012,gu=1013,Ps=1014,Jn=1015,Qn=1016,vu=1017,xu=1018,Pr=1020,_p=35902,yp=1021,Mp=1022,Bn=1023,bp=1024,Ep=1025,wr=1026,Ir=1027,_u=1028,yu=1029,wp=1030,Mu=1031;var bu=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Jc=35840,Qc=35841,eh=35842,th=35843,nh=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,lh=37811,ch=37812,hh=37813,uh=37814,dh=37815,fh=37816,ph=37817,mh=37818,gh=37819,vh=37820,xh=37821,$a=36492,_h=36494,yh=36495,Sp=36283,Mh=36284,bh=36285,Eh=36286;var Lr=2300,Dr=2301,ac=2302,Wd=2400,Xd=2401,qd=2402,C0=2500;var Tp=0,Pl=1,Xo=2,P0=3200,I0=3201;var Eu=0,L0=1,$i="",St="srgb",gn="srgb-linear",Il="linear",Et="srgb";var tr=7680;var Yd=519,D0=512,U0=513,N0=514,Ap=515,F0=516,O0=517,B0=518,z0=519,wh=35044,ks=35048;var $d="300 es",Si=2e3,Za=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,Eo=Math.PI/180,Ur=180/Math.PI;function zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function wu(i,e){return(i%e+e)%e}function H0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function k0(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function V0(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function G0(i,e=1){return e-Math.abs(wu(i,e*2)-e)}function W0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function X0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function q0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Y0(i,e){return i+Math.random()*(e-i)}function $0(i){return i*(.5-Math.random())}function Z0(i){i!==void 0&&(Zd=i);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K0(i){return i*Eo}function j0(i){return i*Ur}function J0(i){return(i&i-1)===0&&i!==0}function Q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ke={DEG2RAD:Eo,RAD2DEG:Ur,generateUUID:zn,clamp:Qt,euclideanModulo:wu,mapLinear:H0,inverseLerp:k0,lerp:wo,damp:V0,pingpong:G0,smoothstep:W0,smootherstep:X0,randInt:q0,randFloat:Y0,randFloatSpread:$0,seededRandom:Z0,degToRad:K0,radToDeg:j0,isPowerOfTwo:J0,ceilPowerOfTwo:Q0,floorPowerOfTwo:eg,setQuaternionFromProperEuler:tg,normalize:wt,denormalize:jn},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],y=s[4],_=s[7],L=s[2],T=s[5],P=s[8];return r[0]=o*x+a*v+l*L,r[3]=o*g+a*y+l*T,r[6]=o*p+a*_+l*P,r[1]=c*x+h*v+u*L,r[4]=c*g+h*y+u*T,r[7]=c*p+h*_+u*P,r[2]=d*x+f*v+m*L,r[5]=d*g+f*y+m*T,r[8]=d*p+f*_+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new rt;function Rp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ng(){let i=Lo("canvas");return i.style.display="block",i}var Kd={};function yo(i){i in Kd||(Kd[i]=!0,console.warn(i))}function ig(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function sg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?Il:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jd=[.64,.33,.3,.6,.15,.06],Jd=[.2126,.7152,.0722],Qd=[.3127,.329],ef=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[gn]:{primaries:jd,whitePoint:Qd,transfer:Il,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:Jd,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:jd,whitePoint:Qd,transfer:Et,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:Jd,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});var nr,Sh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=Lo("canvas")),nr.width=e.width,nr.height=e.height;let n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},og=0,Ka=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cc(s[o].image)):r.push(cc(s[o]))}else r=cc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ag=0,rn=class i extends Ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wi,s=wi,r=Sn,o=ri,a=Bn,l=Ai,c=i.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=zn(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=gp;rn.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,L=(p+1)/2,T=(h+d)/4,P=(u+x)/4,O=(m+g)/4;return y>_&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=P/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=O/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=P/r,s=O/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Th=class extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ka(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ja=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ah=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let L=Math.sqrt(y),T=Math.atan2(L,p*v);g=Math.sin(g*T)/L,a=Math.sin(a*T)/L}let _=a*v;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hc=new E,nf=new Tt,Wt=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),ua.subVectors(this.max,lo),ir.subVectors(e.a,lo),sr.subVectors(e.b,lo),rr.subVectors(e.c,lo),Vi.subVectors(sr,ir),Gi.subVectors(rr,sr),ys.subVectors(ir,rr);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-ys.z,ys.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,ys.z,0,-ys.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-ys.y,ys.x,0];return!uc(t,ir,sr,rr,ua)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,ir,sr,rr,ua))?!1:(da.crossVectors(Vi,Gi),t=[da.x,da.y,da.z],uc(t,ir,sr,rr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new E,new E,new E,new E,new E,new E,new E,new E],$n=new E,ha=new Wt,ir=new E,sr=new E,rr=new E,Vi=new E,Gi=new E,ys=new E,lo=new E,ua=new E,da=new E,Ms=new E;function uc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ms.fromArray(i,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var lg=new Wt,co=new E,dc=new E,Ln=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(co,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(dc)),this.expandByPoint(co.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new E,fc=new E,fa=new E,Wi=new E,pc=new E,pa=new E,mc=new E,Is=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fc.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(fc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=Wi.dot(this.direction),l=-Wi.dot(fa),c=Wi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fc).addScaledVector(fa,d),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){pc.subVectors(t,e),pa.subVectors(n,e),mc.crossVectors(pc,pa);let o=this.direction.dot(mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);let l=a*this.direction.dot(pa.crossVectors(Wi,pa));if(l<0)return null;let c=a*this.direction.dot(pc.cross(Wi));if(c<0||l+c>o)return null;let h=-a*Wi.dot(mc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cg,e,hg)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Xi.crossVectors(n,Pn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Xi.crossVectors(n,Pn)),Xi.normalize(),ma.crossVectors(Pn,Xi),s[0]=Xi.x,s[4]=ma.x,s[8]=Pn.x,s[1]=Xi.y,s[5]=ma.y,s[9]=Pn.y,s[2]=Xi.z,s[6]=ma.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],y=n[7],_=n[11],L=n[15],T=s[0],P=s[4],O=s[8],w=s[12],b=s[1],S=s[5],D=s[9],B=s[13],R=s[2],U=s[6],N=s[10],H=s[14],I=s[3],$=s[7],Q=s[11],le=s[15];return r[0]=o*T+a*b+l*R+c*I,r[4]=o*P+a*S+l*U+c*$,r[8]=o*O+a*D+l*N+c*Q,r[12]=o*w+a*B+l*H+c*le,r[1]=h*T+u*b+d*R+f*I,r[5]=h*P+u*S+d*U+f*$,r[9]=h*O+u*D+d*N+f*Q,r[13]=h*w+u*B+d*H+f*le,r[2]=m*T+x*b+g*R+p*I,r[6]=m*P+x*S+g*U+p*$,r[10]=m*O+x*D+g*N+p*Q,r[14]=m*w+x*B+g*H+p*le,r[3]=v*T+y*b+_*R+L*I,r[7]=v*P+y*S+_*U+L*$,r[11]=v*O+y*D+_*N+L*Q,r[15]=v*w+y*B+_*H+L*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,y=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,_=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,L=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,T=t*v+n*y+s*_+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=v*P,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*P,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,e[4]=y*P,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*P,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=_*P,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*P,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=L*P,e[13]=(h*x*s-m*u*s+m*n*d-t*x*d-h*n*g+t*u*g)*P,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,v=l*c,y=l*h,_=l*u,L=n.x,T=n.y,P=n.z;return s[0]=(1-(x+p))*L,s[1]=(f+_)*L,s[2]=(m-y)*L,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(m+y)*P,s[9]=(g-v)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),a=or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let c=1/r,h=1/o,u=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Si){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(a===Si)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Za)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Si){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,m,x;if(a===Si)m=(o+r)*u,x=-2*u;else if(a===Za)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},or=new E,Zn=new Re,cg=new E(0,0,0),hg=new E(1,1,1),Xi=new E,ma=new E,Pn=new E,sf=new Re,rf=new Tt,Mn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ug=0,of=new E,ar=new Tt,xi=new Re,ga=new E,ho=new E,dg=new E,fg=new Tt,af=new E(1,0,0),lf=new E(0,1,0),cf=new E(0,0,1),hf={type:"added"},pg={type:"removed"},lr={type:"childadded",child:null},gc={type:"childremoved",child:null},zt=class i extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new Mn,n=new Tt,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new rt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ho,ga,this.up):xi.lookAt(ga,ho,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(xi),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pg),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};zt.DEFAULT_UP=new E(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new E,_i=new E,vc=new E,yi=new E,cr=new E,hr=new E,uf=new E,xc=new E,_c=new E,yc=new E,Mc=new pt,bc=new pt,Ec=new pt,Zi=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),_i.subVectors(n,t),vc.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(_i),l=Kn.dot(vc),c=_i.dot(_i),h=_i.dot(vc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mc.setScalar(0),bc.setScalar(0),Ec.setScalar(0),Mc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mc,r.x),o.addScaledVector(bc,r.y),o.addScaledVector(Ec,r.z),o}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),_i.subVectors(e,t),Kn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Kn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;cr.subVectors(s,n),hr.subVectors(r,n),xc.subVectors(e,n);let l=cr.dot(xc),c=hr.dot(xc);if(l<=0&&c<=0)return t.copy(n);_c.subVectors(e,s);let h=cr.dot(_c),u=hr.dot(_c);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(cr,o);yc.subVectors(e,r);let f=cr.dot(yc),m=hr.dot(yc);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(hr,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return uf.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(uf,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(cr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},va={h:0,s:0,l:0};function wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=wu(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wc(o,r,e+1/3),this.g=wc(o,r,e),this.b=wc(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return dt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Qt(cn.r*255,0,255))*65536+Math.round(Qt(cn.g*255,0,255))*256+Math.round(Qt(cn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=St){dt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(va);let n=wo(qi.h,va.h,t),s=wo(qi.s,va.s,t),r=wo(qi.l,va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new _e;_e.NAMES=Cp;var mg=0,bn=class extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=zn(),this.name="",this.blending=Er,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=fn,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==fn&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pt=class extends bn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new E,xa=new re,ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wh&&(e.usage=this.usage),e}};var Ja=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qa=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},gg=0,On=new Re,Sc=new zt,ur=new E,In=new Wt,uo=new Wt,sn=new E,ot=class i extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Qa:Ja)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(In.min,uo.min),In.expandByPoint(sn),sn.addVectors(In.max,uo.max),In.expandByPoint(sn)):(In.expandByPoint(uo.min),In.expandByPoint(uo.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),sn.add(ur)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new E,l[O]=new E;let c=new E,h=new E,u=new E,d=new re,f=new re,m=new re,x=new E,g=new E;function p(O,w,b){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(S),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(S),a[O].add(x),a[w].add(x),a[b].add(x),l[O].add(g),l[w].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let O=0,w=v.length;O<w;++O){let b=v[O],S=b.start,D=b.count;for(let B=S,R=S+D;B<R;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new E,_=new E,L=new E,T=new E;function P(O){L.fromBufferAttribute(s,O),T.copy(L);let w=a[O];y.copy(w),y.sub(L.multiplyScalar(L.dot(w))).normalize(),_.crossVectors(T,w);let S=_.dot(l[O])<0?-1:1;o.setXYZW(O,y.x,y.y,y.z,S)}for(let O=0,w=v.length;O<w;++O){let b=v[O],S=b.start,D=b.count;for(let B=S,R=S+D;B<R;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},df=new Re,bs=new Is,_a=new Ln,ff=new E,ya=new E,Ma=new E,ba=new E,Tc=new E,Ea=new E,pf=new E,wa=new E,He=class extends zt{constructor(e=new ot,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Tc.fromBufferAttribute(u,e),o?Ea.addScaledVector(Tc,h):Ea.addScaledVector(Tc.sub(t),h))}t.add(Ea)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(_a.containsPoint(bs.origin)===!1&&(bs.intersectSphere(_a,ff)===null||bs.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(df.copy(r).invert(),bs.copy(e.ray).applyMatrix4(df),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,L=y;_<L;_+=3){let T=a.getX(_),P=a.getX(_+1),O=a.getX(_+2);s=Sa(this,p,e,n,c,h,u,T,P,O),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Sa(this,o,e,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,L=y;_<L;_+=3){let T=_,P=_+1,O=_+2;s=Sa(this,p,e,n,c,h,u,T,P,O),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,y=g+1,_=g+2;s=Sa(this,o,e,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function vg(i,e,t,n,s,r,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ai,a),l===null)return null;wa.copy(a),wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:i}}function Sa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ya),i.getVertexPosition(l,Ma),i.getVertexPosition(c,ba);let h=vg(i,e,t,n,ya,Ma,ba,pf);if(h){let u=new E;Zi.getBarycoord(pf,ya,Ma,ba,u),s&&(h.uv=Zi.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=Zi.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new E,materialIndex:0};Zi.getNormal(ya,Ma,ba,d.normal),h.face=d,h.barycoord=u}return h}var Ls=class i extends ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function m(x,g,p,v,y,_,L,T,P,O,w){let b=_/P,S=L/O,D=_/2,B=L/2,R=T/2,U=P+1,N=O+1,H=0,I=0,$=new E;for(let Q=0;Q<N;Q++){let le=Q*S-B;for(let Ae=0;Ae<U;Ae++){let be=Ae*b-D;$[x]=be*v,$[g]=le*y,$[p]=R,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Ae/P),u.push(1-Q/O),H+=1}}for(let Q=0;Q<O;Q++)for(let le=0;le<P;le++){let Ae=d+le+U*Q,be=d+le+U*(Q+1),Z=d+(le+1)+U*(Q+1),ie=d+(le+1)+U*Q;l.push(Ae,be,ie),l.push(be,Z,ie),I+=6}a.addGroup(f,I,w),f+=I,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=Nr(i[t]);for(let s in n)e[s]=n[s]}return e}function xg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var as={clone:Nr,merge:_n},_g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends bn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},el=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new E,mf=new re,gf=new re,Bt=class extends el{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dr=-90,fr=1,Rh=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new Bt(dr,fr,e,t);r.layers=this.layers,this.add(r);let o=new Bt(dr,fr,e,t);o.layers=this.layers,this.add(o);let a=new Bt(dr,fr,e,t);a.layers=this.layers,this.add(a);let l=new Bt(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},tl=class extends rn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ch=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new tl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ls(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:oi});r.uniforms.tEquirect.value=t;let o=new He(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=Sn),new Rh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ac=new E,Mg=new E,bg=new rt,Ei=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ac.subVectors(n,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bg.getNormalMatrix(e),s=this.coplanarPoint(Ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Ln,Ta=new E,Uo=class{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,g-f,_-p).normalize(),n[1].setComponents(l+r,d+c,g+f,_+p).normalize(),n[2].setComponents(l+o,d+h,g+m,_+v).normalize(),n[3].setComponents(l-o,d-h,g-m,_-v).normalize(),n[4].setComponents(l-a,d-u,g-x,_-y).normalize(),t===Si)n[5].setComponents(l+a,d+u,g+x,_+y).normalize();else if(t===Za)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ta.x=s.normal.x>0?e.max.x:e.min.x,Ta.y=s.normal.y>0?e.max.y:e.min.y,Ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ip(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Eg(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hn=class i extends ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let y=0;y<c;y++){let _=y*u-r;m.push(_,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,_=v+c*(p+1),L=v+1+c*(p+1),T=v+1+c*p;f.push(y,_,T),f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
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
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
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
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Og=`#ifdef USE_IRIDESCENCE
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
#endif`,Bg=`#ifdef USE_BUMPMAP
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yg=`#define PI 3.141592653589793
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
} // validated`,$g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
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
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mv=`PhysicalMaterial material;
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
#endif`,bv=`struct PhysicalMaterial {
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
}`,Ev=`
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
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
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lx=`float getShadowMask() {
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
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
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
}`,Px=`#if DEPTH_PACKING == 3200
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
}`,Ix=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,Hx=`#define LAMBERT
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
}`,kx=`#define MATCAP
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define NORMAL
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define PHONG
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
}`,qx=`#define PHONG
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
}`,Yx=`#define STANDARD
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
}`,$x=`#define STANDARD
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
}`,Zx=`#define TOON
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
}`,Kx=`#define TOON
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
}`,jx=`uniform float size;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,e_=`uniform vec3 color;
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
}`,t_=`uniform float rotation;
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
}`,n_=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:wg,alphahash_pars_fragment:Sg,alphamap_fragment:Tg,alphamap_pars_fragment:Ag,alphatest_fragment:Rg,alphatest_pars_fragment:Cg,aomap_fragment:Pg,aomap_pars_fragment:Ig,batching_pars_vertex:Lg,batching_vertex:Dg,begin_vertex:Ug,beginnormal_vertex:Ng,bsdfs:Fg,iridescence_fragment:Og,bumpmap_pars_fragment:Bg,clipping_planes_fragment:zg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Vg,color_fragment:Gg,color_pars_fragment:Wg,color_pars_vertex:Xg,color_vertex:qg,common:Yg,cube_uv_reflection_fragment:$g,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Kg,displacementmap_vertex:jg,emissivemap_fragment:Jg,emissivemap_pars_fragment:Qg,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:sv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:gv,envmap_vertex:ov,fog_vertex:av,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:hv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:dv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:_v,lights_phong_pars_fragment:yv,lights_physical_fragment:Mv,lights_physical_pars_fragment:bv,lights_fragment_begin:Ev,lights_fragment_maps:wv,lights_fragment_end:Sv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Cv,map_fragment:Pv,map_pars_fragment:Iv,map_particle_fragment:Lv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Fv,morphcolor_vertex:Ov,morphnormal_vertex:Bv,morphtarget_pars_vertex:zv,morphtarget_vertex:Hv,normal_fragment_begin:kv,normal_fragment_maps:Vv,normal_pars_fragment:Gv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:Kv,opaque_fragment:jv,packing:Jv,premultiplied_alpha_fragment:Qv,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:lx,skinbase_vertex:cx,skinning_pars_vertex:hx,skinning_vertex:ux,skinnormal_vertex:dx,specularmap_fragment:fx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:vx,transmission_pars_fragment:xx,uv_pars_fragment:_x,uv_pars_vertex:yx,uv_vertex:Mx,worldpos_vertex:bx,background_vert:Ex,background_frag:wx,backgroundCube_vert:Sx,backgroundCube_frag:Tx,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Px,distanceRGBA_vert:Ix,distanceRGBA_frag:Lx,equirect_vert:Dx,equirect_frag:Ux,linedashed_vert:Nx,linedashed_frag:Fx,meshbasic_vert:Ox,meshbasic_frag:Bx,meshlambert_vert:zx,meshlambert_frag:Hx,meshmatcap_vert:kx,meshmatcap_frag:Vx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:qx,meshphysical_vert:Yx,meshphysical_frag:$x,meshtoon_vert:Zx,meshtoon_frag:Kx,points_vert:jx,points_frag:Jx,shadow_vert:Qx,shadow_frag:e_,sprite_vert:t_,sprite_frag:n_},Ue={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},si={basic:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _e(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:_n([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:_n([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new _e(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:_n([Ue.points,Ue.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:_n([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:_n([Ue.common,Ue.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:_n([Ue.sprite,Ue.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:_n([Ue.common,Ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:_n([Ue.lights,Ue.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};si.physical={uniforms:_n([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Aa={r:0,b:0,g:0},ws=new Mn,i_=new Re;function s_(i,e,t,n,s,r,o){let a=new _e(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,_=m(v);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===Cl)?(h===void 0&&(h=new He(new Ls(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:Nr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(y.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(ws)),h.material.toneMapped=dt.getTransfer(_.colorSpace)!==Et,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new He(new Hn(2,2),new ht({name:"BackgroundMaterial",uniforms:Nr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=dt.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Aa,Pp(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:g}}function r_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,S,D,B,R){let U=!1,N=u(B,D,S);r!==N&&(r=N,c(r.object)),U=f(b,B,D,R),U&&m(b,B,D,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,_(b,S,D,B),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,S,D){let B=D.wireframe===!0,R=n[b.id];R===void 0&&(R={},n[b.id]=R);let U=R[S.id];U===void 0&&(U={},R[S.id]=U);let N=U[B];return N===void 0&&(N=d(l()),U[B]=N),N}function d(b){let S=[],D=[],B=[];for(let R=0;R<t;R++)S[R]=0,D[R]=0,B[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:D,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,S,D,B){let R=r.attributes,U=S.attributes,N=0,H=D.getAttributes();for(let I in H)if(H[I].location>=0){let Q=R[I],le=U[I];if(le===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;N++}return r.attributesNum!==N||r.index!==B}function m(b,S,D,B){let R={},U=S.attributes,N=0,H=D.getAttributes();for(let I in H)if(H[I].location>=0){let Q=U[I];Q===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));let le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),R[I]=le,N++}r.attributes=R,r.attributesNum=N,r.index=B}function x(){let b=r.newAttributes;for(let S=0,D=b.length;S<D;S++)b[S]=0}function g(b){p(b,0)}function p(b,S){let D=r.newAttributes,B=r.enabledAttributes,R=r.attributeDivisors;D[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),R[b]!==S&&(i.vertexAttribDivisor(b,S),R[b]=S)}function v(){let b=r.newAttributes,S=r.enabledAttributes;for(let D=0,B=S.length;D<B;D++)S[D]!==b[D]&&(i.disableVertexAttribArray(D),S[D]=0)}function y(b,S,D,B,R,U,N){N===!0?i.vertexAttribIPointer(b,S,D,R,U):i.vertexAttribPointer(b,S,D,B,R,U)}function _(b,S,D,B){x();let R=B.attributes,U=D.getAttributes(),N=S.defaultAttributeValues;for(let H in U){let I=U[H];if(I.location>=0){let $=R[H];if($===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){let Q=$.normalized,le=$.itemSize,Ae=e.get($);if(Ae===void 0)continue;let be=Ae.buffer,Z=Ae.type,ie=Ae.bytesPerElement,Te=Z===i.INT||Z===i.UNSIGNED_INT||$.gpuType===gu;if($.isInterleavedBufferAttribute){let he=$.data,oe=he.stride,xe=$.offset;if(he.isInstancedInterleavedBuffer){for(let Pe=0;Pe<I.locationSize;Pe++)p(I.location+Pe,he.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Pe=0;Pe<I.locationSize;Pe++)g(I.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Pe=0;Pe<I.locationSize;Pe++)y(I.location+Pe,le/I.locationSize,Z,Q,oe*ie,(xe+le/I.locationSize*Pe)*ie,Te)}else{if($.isInstancedBufferAttribute){for(let he=0;he<I.locationSize;he++)p(I.location+he,$.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let he=0;he<I.locationSize;he++)g(I.location+he);i.bindBuffer(i.ARRAY_BUFFER,be);for(let he=0;he<I.locationSize;he++)y(I.location+he,le/I.locationSize,Z,Q,le*ie,le/I.locationSize*he*ie,Te)}}else if(N!==void 0){let Q=N[H];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(I.location,Q);break;case 3:i.vertexAttrib3fv(I.location,Q);break;case 4:i.vertexAttrib4fv(I.location,Q);break;default:i.vertexAttrib1fv(I.location,Q)}}}}v()}function L(){O();for(let b in n){let S=n[b];for(let D in S){let B=S[D];for(let R in B)h(B[R].object),delete B[R];delete S[D]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let S=n[b.id];for(let D in S){let B=S[D];for(let R in B)h(B[R].object),delete B[R];delete S[D]}delete n[b.id]}function P(b){for(let S in n){let D=n[S];if(D[b.id]===void 0)continue;let B=D[b.id];for(let R in B)h(B[R].object),delete B[R];delete D[b.id]}}function O(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function o_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function a_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let O=P===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ai&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Jn&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:T}}function l_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ei,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,y=v*4,_=p.clippingState||null;l.value=_,_=h(m,d,y,f);for(let L=0;L!==y;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function c_(i){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=Rr:a===jc&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kc||a===jc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ch(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var li=class extends el{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mr=4,vf=[.125,.215,.35,.446,.526,.582],Rs=20,Rc=new li,xf=new _e,Cc=null,Pc=0,Ic=0,Lc=!1,Ts=(1+Math.sqrt(5))/2,pr=1/Ts,_f=[new E(-Ts,pr,0),new E(Ts,pr,0),new E(-pr,0,Ts),new E(pr,0,Ts),new E(0,Ts,-pr),new E(0,Ts,pr),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Fr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Pc,Ic),this._renderer.xr.enabled=Lc,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Qn,format:Bn,colorSpace:gn,depthBuffer:!1},s=yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(r)),this._blurMaterial=u_(r,e,t)}return s}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,n,s){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xf),h.toneMapping=ji,h.autoClear=!1;let f=new Pt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new He(new Ls,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(xf),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Ra(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Rr||e.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_f[(s-r-1)%_f.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new He(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Rs;g>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Rs}`);let p=[],v=0;for(let P=0;P<Rs;++P){let O=P/x,w=Math.exp(-O*O/2);p.push(w),P===0?v+=w:P<g&&(v+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let _=this._sizeLods[s],L=3*_*(s>y-Mr?s-y+Mr:0),T=4*(this._cubeSize-_);Ra(t,L,T,3*_,2*_),l.setRenderTarget(t),l.render(u,Rc)}};function h_(i){let e=[],t=[],n=[],s=i,r=i-Mr+1+vf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Mr?l=vf[o-i+Mr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let P=T%3*2/3-1,O=T>2?0:-1,w=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];v.set(w,x*m*T),y.set(d,g*m*T);let b=[T,T,T,T,T,T];_.set(b,p*m*T)}let L=new ot;L.setAttribute("position",new ct(v,x)),L.setAttribute("uv",new ct(y,g)),L.setAttribute("faceIndex",new ct(_,p)),e.push(L),s>Mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yf(i,e,t){let n=new yn(i,e,t);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function u_(i,e,t){let n=new Float32Array(Rs),s=new E(0,1,0);return new ht({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Mf(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function bf(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function d_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Kc||l===jc,h=l===Rr||l===Cr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Fr(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Fr(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function f_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&yo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function p_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let L=v[y+0],T=v[y+1],P=v[y+2];d.push(L,T,T,P,P,L)}}else if(m!==void 0){let v=m.array;x=m.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let L=y+0,T=y+1,P=y+2;d.push(L,T,T,P,P,L)}}else return;let g=new(Rp(d)?Qa:Ja)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function m_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function g_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function v_(i,e,t){let n=new WeakMap,s=new pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*L*4*u),P=new ja(T,_,L,u);P.type=Jn,P.needsUpdate=!0;let O=y*4;for(let b=0;b<u;b++){let S=g[b],D=p[b],B=v[b],R=_*L*4*b;for(let U=0;U<S.count;U++){let N=U*O;f===!0&&(s.fromBufferAttribute(S,U),T[R+N+0]=s.x,T[R+N+1]=s.y,T[R+N+2]=s.z,T[R+N+3]=0),m===!0&&(s.fromBufferAttribute(D,U),T[R+N+4]=s.x,T[R+N+5]=s.y,T[R+N+6]=s.z,T[R+N+7]=0),x===!0&&(s.fromBufferAttribute(B,U),T[R+N+8]=s.x,T[R+N+9]=s.y,T[R+N+10]=s.z,T[R+N+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new re(_,L)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function x_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var nl=class extends rn{constructor(e,t,n,s,r,o,a,l,c,h=wr){if(h!==wr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wr&&(n=Ps),n===void 0&&h===Ir&&(n=Pr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lp=new rn,Ef=new nl(1,1),Dp=new ja,Up=new Ah,Np=new tl,wf=[],Sf=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function Gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ll(i,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function __(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Rf.set(n),i.uniformMatrix2fv(this.addr,!1,Rf),tn(t,n)}}function w_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Af.set(n),i.uniformMatrix3fv(this.addr,!1,Af),tn(t,n)}}function S_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),tn(t,n)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function P_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=Ap,r=Ef):r=Lp,t.setTexture2D(e||r,s)}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Up,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Np,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Dp,s)}function B_(i){switch(i){case 5126:return __;case 35664:return y_;case 35665:return M_;case 35666:return b_;case 35674:return E_;case 35675:return w_;case 35676:return S_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(i,e){i.uniform1fv(this.addr,e)}function H_(i,e){let t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function k_(i,e){let t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function V_(i,e){let t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function G_(i,e){let t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W_(i,e){let t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X_(i,e){let t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q_(i,e){i.uniform1iv(this.addr,e)}function Y_(i,e){i.uniform2iv(this.addr,e)}function $_(i,e){i.uniform3iv(this.addr,e)}function Z_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function j_(i,e){i.uniform2uiv(this.addr,e)}function J_(i,e){i.uniform3uiv(this.addr,e)}function Q_(i,e){i.uniform4uiv(this.addr,e)}function ey(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Lp,r[o])}function ty(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Up,r[o])}function ny(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Np,r[o])}function iy(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Dp,r[o])}function sy(i){switch(i){case 5126:return z_;case 35664:return H_;case 35665:return k_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return $_;case 35669:case 35673:return Z_;case 5125:return K_;case 36294:return j_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}var Ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}},Ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sy(t.type)}},Lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Cf(i,e){i.seq.push(e),i.map[e.id]=e}function ry(i,e,t){let n=i.name,s=n.length;for(Dc.lastIndex=0;;){let r=Dc.exec(n),o=Dc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cf(t,c===void 0?new Ph(a,i,e):new Ih(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Lh(a),Cf(t,u)),t=u}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ry(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Pf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var oy=37297,ay=0;function ly(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var If=new rt;function cy(i){dt._getMatrix(If,dt.workingColorSpace,i);let e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Il:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ly(i.getShaderSource(e),o)}else return s}function hy(i,e){let t=cy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uy(i,e){let t;switch(e){case hu:t="Linear";break;case uu:t="Reinhard";break;case du:t="Cineon";break;case fu:t="ACESFilmic";break;case pu:t="AgX";break;case Wo:t="Neutral";break;case A0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ca=new E;function dy(){dt.getLuminanceCoefficients(Ca);let i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function py(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function my(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mo(i){return i!==""}function Df(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(i){return i.replace(gy,xy)}var vy=new Map;function xy(i,e){let t=at[e];if(t===void 0){let n=vy.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dh(t)}var _y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(i){return i.replace(_y,yy)}function yy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function My(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function by(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ey(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function wy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cu:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case T0:e="ENVMAP_BLENDING_ADD";break}return e}function Sy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ty(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=My(t),c=by(t),h=Ey(t),u=wy(t),d=Sy(t),f=fy(t),m=py(r),x=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Mo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Mo).join(`
`),p.length>0&&(p+=`
`)):(g=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),p=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?at.tonemapping_pars_fragment:"",t.toneMapping!==ji?uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,hy("linearToOutputTexel",t.outputColorSpace),dy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=Dh(o),o=Df(o,t),o=Uf(o,t),a=Dh(a),a=Df(a,t),a=Uf(a,t),o=Nf(o),a=Nf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+g+o,_=v+p+a,L=Pf(s,s.VERTEX_SHADER,y),T=Pf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(S){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(L).trim(),R=s.getShaderInfoLog(T).trim(),U=!0,N=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,T);else{let H=Lf(s,L,"vertex"),I=Lf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+H+`
`+I)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||R==="")&&(N=!1);N&&(S.diagnostics={runnable:U,programLog:D,vertexShader:{log:B,prefix:g},fragmentShader:{log:R,prefix:p}})}s.deleteShader(L),s.deleteShader(T),O=new Tr(s,x),w=my(s,x)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,oy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ay++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}var Ay=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nh(e),t.set(e,n)),n}},Nh=class{constructor(e){this.id=Ay++,this.code=e,this.usedTimes=0}};function Ry(i,e,t,n,s,r,o){let a=new Do,l=new Uh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,S,D,B){let R=D.fog,U=B.geometry,N=w.isMeshStandardMaterial?D.environment:null,H=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),I=H&&H.mapping===Cl?H.image.height:null,$=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,le=Q!==void 0?Q.length:0,Ae=0;U.morphAttributes.position!==void 0&&(Ae=1),U.morphAttributes.normal!==void 0&&(Ae=2),U.morphAttributes.color!==void 0&&(Ae=3);let be,Z,ie,Te;if($){let lt=si[$];be=lt.vertexShader,Z=lt.fragmentShader}else be=w.vertexShader,Z=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),Te=l.getFragmentShaderID(w);let he=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),xe=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,Oe=!!w.map,ee=!!w.matcap,ce=!!H,F=!!w.aoMap,Ee=!!w.lightMap,te=!!w.bumpMap,ue=!!w.normalMap,pe=!!w.displacementMap,Le=!!w.emissiveMap,ye=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,z=w.clearcoat>0,V=w.dispersion>0,G=w.iridescence>0,q=w.sheen>0,fe=w.transmission>0,ve=M&&!!w.anisotropyMap,me=z&&!!w.clearcoatMap,Ie=z&&!!w.clearcoatNormalMap,ae=z&&!!w.clearcoatRoughnessMap,se=G&&!!w.iridescenceMap,de=G&&!!w.iridescenceThicknessMap,we=q&&!!w.sheenColorMap,Me=q&&!!w.sheenRoughnessMap,Ye=!!w.specularMap,qe=!!w.specularColorMap,it=!!w.specularIntensityMap,k=fe&&!!w.transmissionMap,ge=fe&&!!w.thicknessMap,K=!!w.gradientMap,ne=!!w.alphaMap,De=w.alphaTest>0,Fe=!!w.alphaHash,Qe=!!w.extensions,Ct=ji;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let $t={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Z,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:xe,instancingColor:xe&&B.instanceColor!==null,instancingMorph:xe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:gn,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:ee,envMap:ce,envMapMode:ce&&H.mapping,envMapCubeUVHeight:I,aoMap:F,lightMap:Ee,bumpMap:te,normalMap:ue,displacementMap:d&&pe,emissiveMap:Le,normalMapObjectSpace:ue&&w.normalMapType===L0,normalMapTangentSpace:ue&&w.normalMapType===Eu,metalnessMap:ye,roughnessMap:C,anisotropy:M,anisotropyMap:ve,clearcoat:z,clearcoatMap:me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ae,dispersion:V,iridescence:G,iridescenceMap:se,iridescenceThicknessMap:de,sheen:q,sheenColorMap:we,sheenRoughnessMap:Me,specularMap:Ye,specularColorMap:qe,specularIntensityMap:it,transmission:fe,transmissionMap:k,thicknessMap:ge,gradientMap:K,opaque:w.transparent===!1&&w.blending===Er&&w.alphaToCoverage===!1,alphaMap:ne,alphaTest:De,alphaHash:Fe,combine:w.combine,mapUv:Oe&&x(w.map.channel),aoMapUv:F&&x(w.aoMap.channel),lightMapUv:Ee&&x(w.lightMap.channel),bumpMapUv:te&&x(w.bumpMap.channel),normalMapUv:ue&&x(w.normalMap.channel),displacementMapUv:pe&&x(w.displacementMap.channel),emissiveMapUv:Le&&x(w.emissiveMap.channel),metalnessMapUv:ye&&x(w.metalnessMap.channel),roughnessMapUv:C&&x(w.roughnessMap.channel),anisotropyMapUv:ve&&x(w.anisotropyMap.channel),clearcoatMapUv:me&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(w.sheenRoughnessMap.channel),specularMapUv:Ye&&x(w.specularMap.channel),specularColorMapUv:qe&&x(w.specularColorMap.channel),specularIntensityMapUv:it&&x(w.specularIntensityMap.channel),transmissionMapUv:k&&x(w.transmissionMap.channel),thicknessMapUv:ge&&x(w.thicknessMap.channel),alphaMapUv:ne&&x(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ue||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(Oe||ne),fog:!!R,useFog:w.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:oe,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===Et,decodeVideoTextureEmissive:Le&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===Et,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gt,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&w.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let S in w.defines)b.push(S),b.push(w.defines[S]);return w.isRawShaderMaterial===!1&&(v(b,w),y(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let b=m[w.type],S;if(b){let D=si[b];S=as.clone(D.uniforms)}else S=w.uniforms;return S}function L(w,b){let S;for(let D=0,B=h.length;D<B;D++){let R=h[D];if(R.cacheKey===b){S=R,++S.usedTimes;break}}return S===void 0&&(S=new Ty(i,b,w,r),h.push(S)),S}function T(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:O}}function Cy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Py(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Of(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Py),n.length>1&&n.sort(d||Of),s.length>1&&s.sort(d||Of)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Iy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Bf,i.set(n,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new _e};break;case"SpotLight":t={position:new E,direction:new E,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function Dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Uy=0;function Ny(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fy(i){let e=new Ly,t=Dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let s=new E,r=new Re,o=new Re;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,y=0,_=0,L=0,T=0,P=0;c.sort(Ny);for(let w=0,b=c.length;w<b;w++){let S=c[w],D=S.color,B=S.intensity,R=S.distance,U=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=D.r*B,u+=D.g*B,d+=D.b*B;else if(S.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(S.sh.coefficients[N],B);P++}else if(S.isDirectionalLight){let N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let H=S.shadow,I=t.get(S);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=S.shadow.matrix,v++}n.directional[f]=N,f++}else if(S.isSpotLight){let N=e.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(D).multiplyScalar(B),N.distance=R,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,n.spot[x]=N;let H=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,H.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=H.matrix,S.castShadow){let I=t.get(S);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,n.spotShadow[x]=I,n.spotShadowMap[x]=U,_++}x++}else if(S.isRectAreaLight){let N=e.get(S);N.color.copy(D).multiplyScalar(B),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=N,g++}else if(S.isPointLight){let N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){let H=S.shadow,I=t.get(S);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,I.shadowCameraNear=H.camera.near,I.shadowCameraFar=H.camera.far,n.pointShadow[m]=I,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=S.shadow.matrix,y++}n.point[m]=N,m++}else if(S.isHemisphereLight){let N=e.get(S);N.skyColor.copy(S.color).multiplyScalar(B),N.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[p]=N,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==f||O.pointLength!==m||O.spotLength!==x||O.rectAreaLength!==g||O.hemiLength!==p||O.numDirectionalShadows!==v||O.numPointShadows!==y||O.numSpotShadows!==_||O.numSpotMaps!==L||O.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,O.directionalLength=f,O.pointLength=m,O.spotLength=x,O.rectAreaLength=g,O.hemiLength=p,O.numDirectionalShadows=v,O.numPointShadows=y,O.numSpotShadows=_,O.numSpotMaps=L,O.numLightProbes=P,n.version=Uy++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function zf(i){let e=new Fy(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Oy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new zf(i),e.set(s,[a])):r>=o.length?(a=new zf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fh=class extends bn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oh=class extends bn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
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
}`;function Hy(i,e,t){let n=new Uo,s=new re,r=new re,o=new pt,a=new Fh({depthPacking:I0}),l=new Oh,c={},h=t.maxTextureSize,u={[ai]:hn,[hn]:ai,[gt]:gt},d=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:By,fragmentShader:zy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ot;m.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let p=this.type;this.render=function(T,P,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),D=i.state;D.setBlending(oi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=p!==bi&&this.type===bi,R=p===bi&&this.type!==bi;for(let U=0,N=T.length;U<N;U++){let H=T[U],I=H.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let $=I.getFrameExtents();if(s.multiply($),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,I.mapSize.y=r.y)),I.map===null||B===!0||R===!0){let le=this.type!==bi?{minFilter:un,magFilter:un}:{};I.map!==null&&I.map.dispose(),I.map=new yn(s.x,s.y,le),I.map.texture.name=H.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let Q=I.getViewportCount();for(let le=0;le<Q;le++){let Ae=I.getViewport(le);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),D.viewport(o),I.updateMatrices(H,le),n=I.getFrustum(),_(P,O,I.camera,H,this.type)}I.isPointLightShadow!==!0&&this.type===bi&&v(I,O),I.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,b,S)};function v(T,P){let O=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,O,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,O,f,x,null)}function y(T,P,O,w){let b=null,S=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)b=S;else if(b=O.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let D=b.uuid,B=P.uuid,R=c[D];R===void 0&&(R={},c[D]=R);let U=R[B];U===void 0&&(U=b.clone(),R[B]=U,P.addEventListener("dispose",L)),b=U}if(b.visible=P.visible,b.wireframe=P.wireframe,w===bi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=i.properties.get(b);D.light=O}return b}function _(T,P,O,w,b){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===bi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);let B=e.update(T),R=T.material;if(Array.isArray(R)){let U=B.groups;for(let N=0,H=U.length;N<H;N++){let I=U[N],$=R[I.materialIndex];if($&&$.visible){let Q=y(T,$,w,b);T.onBeforeShadow(i,T,P,O,B,Q,I),i.renderBufferDirect(O,null,B,Q,T,I),T.onAfterShadow(i,T,P,O,B,Q,I)}}}else if(R.visible){let U=y(T,R,w,b);T.onBeforeShadow(i,T,P,O,B,U,null),i.renderBufferDirect(O,null,B,U,T,null),T.onAfterShadow(i,T,P,O,B,U,null)}}let D=T.children;for(let B=0,R=D.length;B<R;B++)_(D[B],P,O,w,b)}function L(T){T.target.removeEventListener("dispose",L);for(let O in c){let w=c[O],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var ky={[Gc]:Wc,[Xc]:$c,[qc]:Zc,[Ar]:Yc,[Wc]:Gc,[$c]:Xc,[Zc]:qc,[Yc]:Ar};function Vy(i,e){function t(){let k=!1,ge=new pt,K=null,ne=new pt(0,0,0,0);return{setMask:function(De){K!==De&&!k&&(i.colorMask(De,De,De,De),K=De)},setLocked:function(De){k=De},setClear:function(De,Fe,Qe,Ct,$t){$t===!0&&(De*=Ct,Fe*=Ct,Qe*=Ct),ge.set(De,Fe,Qe,Ct),ne.equals(ge)===!1&&(i.clearColor(De,Fe,Qe,Ct),ne.copy(ge))},reset:function(){k=!1,K=null,ne.set(-1,0,0,0)}}}function n(){let k=!1,ge=!1,K=null,ne=null,De=null;return{setReversed:function(Fe){if(ge!==Fe){let Qe=e.get("EXT_clip_control");ge?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let Ct=De;De=null,this.setClear(Ct)}ge=Fe},getReversed:function(){return ge},setTest:function(Fe){Fe?he(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(Fe){K!==Fe&&!k&&(i.depthMask(Fe),K=Fe)},setFunc:function(Fe){if(ge&&(Fe=ky[Fe]),ne!==Fe){switch(Fe){case Gc:i.depthFunc(i.NEVER);break;case Wc:i.depthFunc(i.ALWAYS);break;case Xc:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case qc:i.depthFunc(i.EQUAL);break;case Yc:i.depthFunc(i.GEQUAL);break;case $c:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Fe}},setLocked:function(Fe){k=Fe},setClear:function(Fe){De!==Fe&&(ge&&(Fe=1-Fe),i.clearDepth(Fe),De=Fe)},reset:function(){k=!1,K=null,ne=null,De=null,ge=!1}}}function s(){let k=!1,ge=null,K=null,ne=null,De=null,Fe=null,Qe=null,Ct=null,$t=null;return{setTest:function(lt){k||(lt?he(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(lt){ge!==lt&&!k&&(i.stencilMask(lt),ge=lt)},setFunc:function(lt,vn,qt){(K!==lt||ne!==vn||De!==qt)&&(i.stencilFunc(lt,vn,qt),K=lt,ne=vn,De=qt)},setOp:function(lt,vn,qt){(Fe!==lt||Qe!==vn||Ct!==qt)&&(i.stencilOp(lt,vn,qt),Fe=lt,Qe=vn,Ct=qt)},setLocked:function(lt){k=lt},setClear:function(lt){$t!==lt&&(i.clearStencil(lt),$t=lt)},reset:function(){k=!1,ge=null,K=null,ne=null,De=null,Fe=null,Qe=null,Ct=null,$t=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,L=null,T=null,P=new _e(0,0,0),O=0,w=!1,b=null,S=null,D=null,B=null,R=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,H=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(I)[1]),N=H>=1):I.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),N=H>=2);let $=null,Q={},le=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),be=new pt().fromArray(le),Z=new pt().fromArray(Ae);function ie(k,ge,K,ne){let De=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(k,Fe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<K;Qe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ge+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Fe}let Te={};Te[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(Ar),te(!1),ue(Hd),he(i.CULL_FACE),F(oi);function he(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function oe(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function xe(k,ge){return u[k]!==ge?(i.bindFramebuffer(k,ge),u[k]=ge,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Pe(k,ge){let K=f,ne=!1;if(k){K=d.get(ge),K===void 0&&(K=[],d.set(ge,K));let De=k.textures;if(K.length!==De.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,Qe=De.length;Fe<Qe;Fe++)K[Fe]=i.COLOR_ATTACHMENT0+Fe;K.length=De.length,ne=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ne=!0);ne&&i.drawBuffers(K)}function Oe(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let ee={[As]:i.FUNC_ADD,[h0]:i.FUNC_SUBTRACT,[u0]:i.FUNC_REVERSE_SUBTRACT};ee[d0]=i.MIN,ee[f0]=i.MAX;let ce={[lu]:i.ZERO,[Gn]:i.ONE,[p0]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[y0]:i.SRC_ALPHA_SATURATE,[x0]:i.DST_COLOR,[g0]:i.DST_ALPHA,[m0]:i.ONE_MINUS_SRC_COLOR,[fn]:i.ONE_MINUS_SRC_ALPHA,[_0]:i.ONE_MINUS_DST_COLOR,[v0]:i.ONE_MINUS_DST_ALPHA,[M0]:i.CONSTANT_COLOR,[b0]:i.ONE_MINUS_CONSTANT_COLOR,[E0]:i.CONSTANT_ALPHA,[w0]:i.ONE_MINUS_CONSTANT_ALPHA};function F(k,ge,K,ne,De,Fe,Qe,Ct,$t,lt){if(k===oi){x===!0&&(oe(i.BLEND),x=!1);return}if(x===!1&&(he(i.BLEND),x=!0),k!==Un){if(k!==g||lt!==w){if((p!==As||_!==As)&&(i.blendEquation(i.FUNC_ADD),p=As,_=As),lt)switch(k){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,y=null,L=null,T=null,P.set(0,0,0),O=0,g=k,w=lt}return}De=De||ge,Fe=Fe||K,Qe=Qe||ne,(ge!==p||De!==_)&&(i.blendEquationSeparate(ee[ge],ee[De]),p=ge,_=De),(K!==v||ne!==y||Fe!==L||Qe!==T)&&(i.blendFuncSeparate(ce[K],ce[ne],ce[Fe],ce[Qe]),v=K,y=ne,L=Fe,T=Qe),(Ct.equals(P)===!1||$t!==O)&&(i.blendColor(Ct.r,Ct.g,Ct.b,$t),P.copy(Ct),O=$t),g=k,w=!1}function Ee(k,ge){k.side===gt?oe(i.CULL_FACE):he(i.CULL_FACE);let K=k.side===hn;ge&&(K=!K),te(K),k.blending===Er&&k.transparent===!1?F(oi):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let ne=k.stencilWrite;a.setTest(ne),ne&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function ue(k){k!==a0?(he(i.CULL_FACE),k!==S&&(k===Hd?i.cullFace(i.BACK):k===l0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),S=k}function pe(k){k!==D&&(N&&i.lineWidth(k),D=k)}function Le(k,ge,K){k?(he(i.POLYGON_OFFSET_FILL),(B!==ge||R!==K)&&(i.polygonOffset(ge,K),B=ge,R=K)):oe(i.POLYGON_OFFSET_FILL)}function ye(k){k?he(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function C(k){k===void 0&&(k=i.TEXTURE0+U-1),$!==k&&(i.activeTexture(k),$=k)}function M(k,ge,K){K===void 0&&($===null?K=i.TEXTURE0+U-1:K=$);let ne=Q[K];ne===void 0&&(ne={type:void 0,texture:void 0},Q[K]=ne),(ne.type!==k||ne.texture!==ge)&&($!==K&&(i.activeTexture(K),$=K),i.bindTexture(k,ge||Te[k]),ne.type=k,ne.texture=ge)}function z(){let k=Q[$];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function V(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(k){be.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function Me(k){Z.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function Ye(k,ge){let K=c.get(ge);K===void 0&&(K=new WeakMap,c.set(ge,K));let ne=K.get(k);ne===void 0&&(ne=i.getUniformBlockIndex(ge,k.name),K.set(k,ne))}function qe(k,ge){let ne=c.get(ge).get(k);l.get(ge)!==ne&&(i.uniformBlockBinding(ge,ne,k.__bindingPointIndex),l.set(ge,ne))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,Q={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,_=null,L=null,T=null,P=new _e(0,0,0),O=0,w=!1,b=null,S=null,D=null,B=null,R=null,be.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:oe,bindFramebuffer:xe,drawBuffers:Pe,useProgram:Oe,setBlending:F,setMaterial:Ee,setFlipSided:te,setCullFace:ue,setLineWidth:pe,setPolygonOffset:Le,setScissorTest:ye,activeTexture:C,bindTexture:M,unbindTexture:z,compressedTexImage2D:V,compressedTexImage3D:G,texImage2D:se,texImage3D:de,updateUBOMapping:Ye,uniformBlockBinding:qe,texStorage2D:Ie,texStorage3D:ae,texSubImage2D:q,texSubImage3D:fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:me,scissor:we,viewport:Me,reset:it}}function Hf(i,e,t,n){let s=Gy(n);switch(t){case yp:return i*e;case bp:return i*e;case Ep:return i*e*2;case _u:return i*e/s.components*s.byteLength;case yu:return i*e/s.components*s.byteLength;case wp:return i*e*2/s.components*s.byteLength;case Mu:return i*e*2/s.components*s.byteLength;case Mp:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case bu:return i*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:case th:return Math.max(i,16)*Math.max(e,8)/4;case Jc:case eh:return Math.max(i,8)*Math.max(e,8)/2;case nh:case ih:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case uh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ph:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $a:case _h:case yh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sp:case Mh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bh:case Eh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gy(i){switch(i){case Ai:case vp:return{byteLength:1,components:1};case Io:case xp:case Qn:return{byteLength:2,components:1};case vu:case xu:return{byteLength:2,components:4};case Ps:case gu:case Jn:return{byteLength:4,components:1};case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return f?new OffscreenCanvas(C,M):Lo("canvas")}function x(C,M,z){let V=1,G=ye(C);if((G.width>z||G.height>z)&&(V=z/Math.max(G.width,G.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(V*G.width),fe=Math.floor(V*G.height);u===void 0&&(u=m(q,fe));let ve=M?m(q,fe):u;return ve.width=q,ve.height=fe,ve.getContext("2d").drawImage(C,0,0,q,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+q+"x"+fe+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,M,z,V,G=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===i.RED&&(z===i.FLOAT&&(q=i.R32F),z===i.HALF_FLOAT&&(q=i.R16F),z===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.R8UI),z===i.UNSIGNED_SHORT&&(q=i.R16UI),z===i.UNSIGNED_INT&&(q=i.R32UI),z===i.BYTE&&(q=i.R8I),z===i.SHORT&&(q=i.R16I),z===i.INT&&(q=i.R32I)),M===i.RG&&(z===i.FLOAT&&(q=i.RG32F),z===i.HALF_FLOAT&&(q=i.RG16F),z===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RG8UI),z===i.UNSIGNED_SHORT&&(q=i.RG16UI),z===i.UNSIGNED_INT&&(q=i.RG32UI),z===i.BYTE&&(q=i.RG8I),z===i.SHORT&&(q=i.RG16I),z===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(q=i.RGB16UI),z===i.UNSIGNED_INT&&(q=i.RGB32UI),z===i.BYTE&&(q=i.RGB8I),z===i.SHORT&&(q=i.RGB16I),z===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),z===i.UNSIGNED_INT&&(q=i.RGBA32UI),z===i.BYTE&&(q=i.RGBA8I),z===i.SHORT&&(q=i.RGBA16I),z===i.INT&&(q=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){let fe=G?Il:dt.getTransfer(V);z===i.FLOAT&&(q=i.RGBA32F),z===i.HALF_FLOAT&&(q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(q=fe===Et?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(C,M){let z;return C?M===null||M===Ps||M===Pr?z=i.DEPTH24_STENCIL8:M===Jn?z=i.DEPTH32F_STENCIL8:M===Io&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ps||M===Pr?z=i.DEPTH_COMPONENT24:M===Jn?z=i.DEPTH_COMPONENT32F:M===Io&&(z=i.DEPTH_COMPONENT16),z}function L(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){let M=C.target;M.removeEventListener("dispose",T),O(M),M.isVideoTexture&&h.delete(M)}function P(C){let M=C.target;M.removeEventListener("dispose",P),b(M)}function O(C){let M=n.get(C);if(M.__webglInit===void 0)return;let z=C.source,V=d.get(z);if(V){let G=V[M.__cacheKey];G.usedTimes--,G.usedTimes===0&&w(C),Object.keys(V).length===0&&d.delete(z)}n.remove(C)}function w(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let z=C.source,V=d.get(z);delete V[M.__cacheKey],o.memory.textures--}function b(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let G=0;G<M.__webglFramebuffer[V].length;G++)i.deleteFramebuffer(M.__webglFramebuffer[V][G]);else i.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)i.deleteFramebuffer(M.__webglFramebuffer[V]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=C.textures;for(let V=0,G=z.length;V<G;V++){let q=n.get(z[V]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[V])}n.remove(C)}let S=0;function D(){S=0}function B(){let C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function R(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function U(C,M){let z=n.get(C);if(C.isVideoTexture&&pe(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let V=C.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,C,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function N(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){Z(z,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function H(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){Z(z,C,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function I(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){ie(z,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let $={[Cs]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},Q={[un]:i.NEAREST,[mu]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},le={[D0]:i.NEVER,[z0]:i.ALWAYS,[U0]:i.LESS,[Ap]:i.LEQUAL,[N0]:i.EQUAL,[B0]:i.GEQUAL,[F0]:i.GREATER,[O0]:i.NOTEQUAL};function Ae(C,M){if(M.type===Jn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===bo||M.magFilter===yr||M.magFilter===ri||M.minFilter===Sn||M.minFilter===bo||M.minFilter===yr||M.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,$[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Q[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==yr&&M.minFilter!==ri||M.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function be(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));let V=M.source,G=d.get(V);G===void 0&&(G={},d.set(V,G));let q=R(M);if(q!==C.__cacheKey){G[q]===void 0&&(G[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),G[q].usedTimes++;let fe=G[C.__cacheKey];fe!==void 0&&(G[C.__cacheKey].usedTimes--,fe.usedTimes===0&&w(M)),C.__cacheKey=q,C.__webglTexture=G[q].texture}return z}function Z(C,M,z){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);let G=be(C,M),q=M.source;t.bindTexture(V,C.__webglTexture,i.TEXTURE0+z);let fe=n.get(q);if(q.version!==fe.__version||G===!0){t.activeTexture(i.TEXTURE0+z);let ve=dt.getPrimaries(dt.workingColorSpace),me=M.colorSpace===$i?null:dt.getPrimaries(M.colorSpace),Ie=M.colorSpace===$i||ve===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ae=x(M.image,!1,s.maxTextureSize);ae=Le(M,ae);let se=r.convert(M.format,M.colorSpace),de=r.convert(M.type),we=y(M.internalFormat,se,de,M.colorSpace,M.isVideoTexture);Ae(V,M);let Me,Ye=M.mipmaps,qe=M.isVideoTexture!==!0,it=fe.__version===void 0||G===!0,k=q.dataReady,ge=L(M,ae);if(M.isDepthTexture)we=_(M.format===Ir,M.type),it&&(qe?t.texStorage2D(i.TEXTURE_2D,1,we,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,we,ae.width,ae.height,0,se,de,null));else if(M.isDataTexture)if(Ye.length>0){qe&&it&&t.texStorage2D(i.TEXTURE_2D,ge,we,Ye[0].width,Ye[0].height);for(let K=0,ne=Ye.length;K<ne;K++)Me=Ye[K],qe?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,se,de,Me.data):t.texImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,se,de,Me.data);M.generateMipmaps=!1}else qe?(it&&t.texStorage2D(i.TEXTURE_2D,ge,we,ae.width,ae.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,se,de,ae.data)):t.texImage2D(i.TEXTURE_2D,0,we,ae.width,ae.height,0,se,de,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,Ye[0].width,Ye[0].height,ae.depth);for(let K=0,ne=Ye.length;K<ne;K++)if(Me=Ye[K],M.format!==Bn)if(se!==null)if(qe){if(k)if(M.layerUpdates.size>0){let De=Hf(Me.width,Me.height,M.format,M.type);for(let Fe of M.layerUpdates){let Qe=Me.data.subarray(Fe*De/Me.data.BYTES_PER_ELEMENT,(Fe+1)*De/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Fe,Me.width,Me.height,1,se,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,se,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,se,de,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,ae.depth,0,se,de,Me.data)}else{qe&&it&&t.texStorage2D(i.TEXTURE_2D,ge,we,Ye[0].width,Ye[0].height);for(let K=0,ne=Ye.length;K<ne;K++)Me=Ye[K],M.format!==Bn?se!==null?qe?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,se,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,se,de,Me.data):t.texImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,se,de,Me.data)}else if(M.isDataArrayTexture)if(qe){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,ae.width,ae.height,ae.depth),k)if(M.layerUpdates.size>0){let K=Hf(ae.width,ae.height,M.format,M.type);for(let ne of M.layerUpdates){let De=ae.data.subarray(ne*K/ae.data.BYTES_PER_ELEMENT,(ne+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,se,de,De)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,se,de,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ae.width,ae.height,ae.depth,0,se,de,ae.data);else if(M.isData3DTexture)qe?(it&&t.texStorage3D(i.TEXTURE_3D,ge,we,ae.width,ae.height,ae.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,se,de,ae.data)):t.texImage3D(i.TEXTURE_3D,0,we,ae.width,ae.height,ae.depth,0,se,de,ae.data);else if(M.isFramebufferTexture){if(it)if(qe)t.texStorage2D(i.TEXTURE_2D,ge,we,ae.width,ae.height);else{let K=ae.width,ne=ae.height;for(let De=0;De<ge;De++)t.texImage2D(i.TEXTURE_2D,De,we,K,ne,0,se,de,null),K>>=1,ne>>=1}}else if(Ye.length>0){if(qe&&it){let K=ye(Ye[0]);t.texStorage2D(i.TEXTURE_2D,ge,we,K.width,K.height)}for(let K=0,ne=Ye.length;K<ne;K++)Me=Ye[K],qe?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se,de,Me):t.texImage2D(i.TEXTURE_2D,K,we,se,de,Me);M.generateMipmaps=!1}else if(qe){if(it){let K=ye(ae);t.texStorage2D(i.TEXTURE_2D,ge,we,K.width,K.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,de,ae)}else t.texImage2D(i.TEXTURE_2D,0,we,se,de,ae);g(M)&&p(V),fe.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ie(C,M,z){if(M.image.length!==6)return;let V=be(C,M),G=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let q=n.get(G);if(G.version!==q.__version||V===!0){t.activeTexture(i.TEXTURE0+z);let fe=dt.getPrimaries(dt.workingColorSpace),ve=M.colorSpace===$i?null:dt.getPrimaries(M.colorSpace),me=M.colorSpace===$i||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,se=[];for(let ne=0;ne<6;ne++)!Ie&&!ae?se[ne]=x(M.image[ne],!0,s.maxCubemapSize):se[ne]=ae?M.image[ne].image:M.image[ne],se[ne]=Le(M,se[ne]);let de=se[0],we=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),Ye=y(M.internalFormat,we,Me,M.colorSpace),qe=M.isVideoTexture!==!0,it=q.__version===void 0||V===!0,k=G.dataReady,ge=L(M,de);Ae(i.TEXTURE_CUBE_MAP,M);let K;if(Ie){qe&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,de.width,de.height);for(let ne=0;ne<6;ne++){K=se[ne].mipmaps;for(let De=0;De<K.length;De++){let Fe=K[De];M.format!==Bn?we!==null?qe?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Fe.width,Fe.height,we,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Ye,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Fe.width,Fe.height,we,Me,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Ye,Fe.width,Fe.height,0,we,Me,Fe.data)}}}else{if(K=M.mipmaps,qe&&it){K.length>0&&ge++;let ne=ye(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){qe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,se[ne].width,se[ne].height,we,Me,se[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,se[ne].width,se[ne].height,0,we,Me,se[ne].data);for(let De=0;De<K.length;De++){let Qe=K[De].image[ne].image;qe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,Qe.width,Qe.height,we,Me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Ye,Qe.width,Qe.height,0,we,Me,Qe.data)}}else{qe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,we,Me,se[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,we,Me,se[ne]);for(let De=0;De<K.length;De++){let Fe=K[De];qe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,we,Me,Fe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Ye,we,Me,Fe.image[ne])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=G.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Te(C,M,z,V,G,q){let fe=r.convert(z.format,z.colorSpace),ve=r.convert(z.type),me=y(z.internalFormat,fe,ve,z.colorSpace),Ie=n.get(M),ae=n.get(z);if(ae.__renderTarget=M,!Ie.__hasExternalTextures){let se=Math.max(1,M.width>>q),de=Math.max(1,M.height>>q);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,q,me,se,de,M.depth,0,fe,ve,null):t.texImage2D(G,q,me,se,de,0,fe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,G,ae.__webglTexture,0,te(M)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,G,ae.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(C,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let V=M.depthTexture,G=V&&V.isDepthTexture?V.type:null,q=_(M.stencilBuffer,G),fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=te(M);ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,q,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,C)}else{let V=M.textures;for(let G=0;G<V.length;G++){let q=V[G],fe=r.convert(q.format,q.colorSpace),ve=r.convert(q.type),me=y(q.internalFormat,fe,ve,q.colorSpace),Ie=te(M);z&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,me,M.width,M.height):ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(M.depthTexture);V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);let G=V.__webglTexture,q=te(M);if(M.depthTexture.format===wr)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(M.depthTexture.format===Ir)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function xe(C){let M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){let G=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",G)};V.addEventListener("dispose",G),M.__depthDisposeCallback=G}M.__boundDepthTexture=V}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(M.__webglFramebuffer,C)}else if(z){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=i.createRenderbuffer(),he(M.__webglDepthbuffer[V],C,!1);else{let G=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),he(M.__webglDepthbuffer,C,!1);else{let V=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,G)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(C,M,z){let V=n.get(C);M!==void 0&&Te(V.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&xe(C)}function Oe(C){let M=C.texture,z=n.get(C),V=n.get(M);C.addEventListener("dispose",P);let G=C.textures,q=C.isWebGLCubeRenderTarget===!0,fe=G.length>1;if(fe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let me=0;me<M.mipmaps.length;me++)z.__webglFramebuffer[ve][me]=i.createFramebuffer()}else z.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)z.__webglFramebuffer[ve]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ve=0,me=G.length;ve<me;ve++){let Ie=n.get(G[ve]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ue(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<G.length;ve++){let me=G[ve];z.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);let Ie=r.convert(me.format,me.colorSpace),ae=r.convert(me.type),se=y(me.internalFormat,Ie,ae,me.colorSpace,C.isXRRenderTarget===!0),de=te(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),he(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Te(z.__webglFramebuffer[ve][me],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,me);else Te(z.__webglFramebuffer[ve],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ve=0,me=G.length;ve<me;ve++){let Ie=G[ve],ae=n.get(Ie);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Ae(i.TEXTURE_2D,Ie),Te(z.__webglFramebuffer,C,Ie,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),g(Ie)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,V.__webglTexture),Ae(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Te(z.__webglFramebuffer[me],C,M,i.COLOR_ATTACHMENT0,ve,me);else Te(z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ve,0);g(M)&&p(ve),t.unbindTexture()}C.depthBuffer&&xe(C)}function ee(C){let M=C.textures;for(let z=0,V=M.length;z<V;z++){let G=M[z];if(g(G)){let q=v(C),fe=n.get(G).__webglTexture;t.bindTexture(q,fe),p(q),t.unbindTexture()}}}let ce=[],F=[];function Ee(C){if(C.samples>0){if(ue(C)===!1){let M=C.textures,z=C.width,V=C.height,G=i.COLOR_BUFFER_BIT,q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(C),ve=M.length>1;if(ve)for(let me=0;me<M.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ie=n.get(M[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,z,V,0,0,z,V,G,i.NEAREST),l===!0&&(ce.length=0,F.length=0,ce.push(i.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ce.push(q),F.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let me=0;me<M.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ie=n.get(M[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function te(C){return Math.min(s.maxSamples,C.samples)}function ue(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Le(C,M){let z=C.colorSpace,V=C.format,G=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==gn&&z!==$i&&(dt.getTransfer(z)===Et?(V!==Bn||G!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=I,this.rebindTextures=Pe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ue}function Xy(i,e){function t(n,s=$i){let r,o=dt.getTransfer(s);if(n===Ai)return i.UNSIGNED_BYTE;if(n===vu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_p)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vp)return i.BYTE;if(n===xp)return i.SHORT;if(n===Io)return i.UNSIGNED_SHORT;if(n===gu)return i.INT;if(n===Ps)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===yp)return i.ALPHA;if(n===Mp)return i.RGB;if(n===Bn)return i.RGBA;if(n===bp)return i.LUMINANCE;if(n===Ep)return i.LUMINANCE_ALPHA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Ir)return i.DEPTH_STENCIL;if(n===_u)return i.RED;if(n===yu)return i.RED_INTEGER;if(n===wp)return i.RG;if(n===Mu)return i.RG_INTEGER;if(n===bu)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===Qc||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nh||n===ih||n===sh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nh||n===ih)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===vh||n===xh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ah)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ch)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ph)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===_h||n===yh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_h)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sp||n===Mh||n===bh||n===Eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bh=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$e=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qy={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:Yy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends Ji{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=new zh,g=t.getContextAttributes(),p=null,v=null,y=[],_=[],L=new re,T=null,P=new Bt;P.viewport=new pt;let O=new Bt;O.viewport=new pt;let w=[P,O],b=new Bh,S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=y[Z];return ie===void 0&&(ie=new So,y[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=y[Z];return ie===void 0&&(ie=new So,y[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=y[Z];return ie===void 0&&(ie=new So,y[Z]=ie),ie.getHandSpace()};function B(Z){let ie=_.indexOf(Z.inputSource);if(ie===-1)return;let Te=y[ie];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,c||o),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function R(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",U);for(let Z=0;Z<y.length;Z++){let ie=_[Z];ie!==null&&(_[Z]=null,y[Z].disconnect(ie))}S=null,D=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",R),s.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new yn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,Te=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?Ir:wr,Te=g.stencil?Pr:Ps);let oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new yn(d.textureWidth,d.textureHeight,{format:Bn,type:Ai,depthTexture:new nl(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(Z){for(let ie=0;ie<Z.removed.length;ie++){let Te=Z.removed[ie],he=_.indexOf(Te);he>=0&&(_[he]=null,y[he].disconnect(Te))}for(let ie=0;ie<Z.added.length;ie++){let Te=Z.added[ie],he=_.indexOf(Te);if(he===-1){for(let xe=0;xe<y.length;xe++)if(xe>=_.length){_.push(Te),he=xe;break}else if(_[xe]===null){_[xe]=Te,he=xe;break}if(he===-1)break}let oe=y[he];oe&&oe.connect(Te)}}let N=new E,H=new E;function I(Z,ie,Te){N.setFromMatrixPosition(ie.matrixWorld),H.setFromMatrixPosition(Te.matrixWorld);let he=N.distanceTo(H),oe=ie.projectionMatrix.elements,xe=Te.projectionMatrix.elements,Pe=oe[14]/(oe[10]-1),Oe=oe[14]/(oe[10]+1),ee=(oe[9]+1)/oe[5],ce=(oe[9]-1)/oe[5],F=(oe[8]-1)/oe[0],Ee=(xe[8]+1)/xe[0],te=Pe*F,ue=Pe*Ee,pe=he/(-F+Ee),Le=pe*-F;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Le),Z.translateZ(pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),oe[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let ye=Pe+pe,C=Oe+pe,M=te-Le,z=ue+(he-Le),V=ee*Oe/C*ye,G=ce*Oe/C*ye;Z.projectionMatrix.makePerspective(M,z,V,G,ye,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ie=Z.near,Te=Z.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),b.near=O.near=P.near=ie,b.far=O.far=P.far=Te,(S!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,D=b.far),P.layers.mask=Z.layers.mask|2,O.layers.mask=Z.layers.mask|4,b.layers.mask=P.layers.mask|O.layers.mask;let he=Z.parent,oe=b.cameras;$(b,he);for(let xe=0;xe<oe.length;xe++)$(oe[xe],he);oe.length===2?I(b,P,O):b.projectionMatrix.copy(P.projectionMatrix),Q(Z,b,he)};function Q(Z,ie,Te){Te===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ur*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let le=null;function Ae(Z,ie){if(h=ie.getViewerPose(c||o),m=ie,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let he=!1;Te.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let xe=0;xe<Te.length;xe++){let Pe=Te[xe],Oe=null;if(f!==null)Oe=f.getViewport(Pe);else{let ce=u.getViewSubImage(d,Pe);Oe=ce.viewport,xe===0&&(e.setRenderTargetTextures(v,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(v))}let ee=w[xe];ee===void 0&&(ee=new Bt,ee.layers.enable(xe),ee.viewport=new pt,w[xe]=ee),ee.matrix.fromArray(Pe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Pe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(b.matrix.copy(ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(ee)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")){let xe=u.getDepthInformation(Te[0]);xe&&xe.isValid&&xe.texture&&x.init(e,xe,s.renderState)}}for(let Te=0;Te<y.length;Te++){let he=_[Te],oe=y[Te];he!==null&&oe!==void 0&&oe.update(he,ie,c||o)}le&&le(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}let be=new Ip;be.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}},Ss=new Mn,Zy=new Re;function Ky(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Pp(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,Ss.copy(_),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),g.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(Ss)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(m(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let L=y.program;n.updateUBOMapping(v,L);let T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let y=u();v.__bindingPointIndex=y;let _=i.createBuffer(),L=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],_=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,P=_.length;T<P;T++){let O=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,b=O.length;w<b;w++){let S=O[w];if(f(S,T,w,L)===!0){let D=S.__offset,B=Array.isArray(S.value)?S.value:[S.value],R=0;for(let U=0;U<B.length;U++){let N=B[U],H=x(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,D+R,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,R),R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,L){let T=v.value,P=y+"_"+_;if(L[P]===void 0)return typeof T=="number"||typeof T=="boolean"?L[P]=T:L[P]=T.clone(),!0;{let O=L[P];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return L[P]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function m(v){let y=v.uniforms,_=0,L=16;for(let P=0,O=y.length;P<O;P++){let w=Array.isArray(y[P])?y[P]:[y[P]];for(let b=0,S=w.length;b<S;b++){let D=w[b],B=Array.isArray(D.value)?D.value:[D.value];for(let R=0,U=B.length;R<U;R++){let N=B[R],H=x(N),I=_%L,$=I%H.boundary,Q=I+$;_+=$,Q!==0&&L-Q<H.storage&&(_+=L-Q),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=H.storage}}}let T=_%L;return T>0&&(_+=L-T),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var il=class{constructor(e={}){let{canvas:t=ng(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=ji,this.toneMappingExposure=1;let _=this,L=!1,T=0,P=0,O=null,w=-1,b=null,S=new pt,D=new pt,B=null,R=new _e(0),U=0,N=t.width,H=t.height,I=1,$=null,Q=null,le=new pt(0,0,N,H),Ae=new pt(0,0,N,H),be=!1,Z=new Uo,ie=!1,Te=!1,he=new Re,oe=new Re,xe=new E,Pe=new pt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ce(){return O===null?I:1}let F=n;function Ee(A,W){return t.getContext(A,W)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${au}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),F===null){let W="webgl2";if(F=Ee(W,A),F===null)throw Ee(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,ue,pe,Le,ye,C,M,z,V,G,q,fe,ve,me,Ie,ae,se,de,we,Me,Ye,qe,it,k;function ge(){te=new f_(F),te.init(),qe=new Xy(F,te),ue=new a_(F,te,e,qe),pe=new Vy(F,te),ue.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Le=new g_(F),ye=new Cy,C=new Wy(F,te,pe,ye,ue,qe,Le),M=new c_(_),z=new d_(_),V=new Eg(F),it=new r_(F,V),G=new p_(F,V,Le,it),q=new x_(F,G,V,Le),we=new v_(F,ue,C),ae=new l_(ye),fe=new Ry(_,M,z,te,ue,it,ae),ve=new Ky(_,ye),me=new Iy,Ie=new Oy(te),de=new s_(_,M,z,pe,q,f,l),se=new Hy(_,q,ue),k=new jy(F,Le,ue,pe),Me=new o_(F,te,Le),Ye=new m_(F,te,Le),Le.programs=fe.programs,_.capabilities=ue,_.extensions=te,_.properties=ye,_.renderLists=me,_.shadowMap=se,_.state=pe,_.info=Le}ge();let K=new Hh(_,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(N,H,!1))},this.getSize=function(A){return A.set(N,H)},this.setSize=function(A,W,J=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,H=W,t.width=Math.floor(A*I),t.height=Math.floor(W*I),J===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(N*I,H*I).floor()},this.setDrawingBufferSize=function(A,W,J){N=A,H=W,I=J,t.width=Math.floor(A*J),t.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,W,J,j){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,W,J,j),pe.viewport(S.copy(le).multiplyScalar(I).round())},this.getScissor=function(A){return A.copy(Ae)},this.setScissor=function(A,W,J,j){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,W,J,j),pe.scissor(D.copy(Ae).multiplyScalar(I).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){pe.setScissorTest(be=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A=!0,W=!0,J=!0){let j=0;if(A){let X=!1;if(O!==null){let Se=O.texture.format;X=Se===bu||Se===Mu||Se===yu}if(X){let Se=O.texture.type,Be=Se===Ai||Se===Ps||Se===Io||Se===Pr||Se===vu||Se===xu,Ve=de.getClearColor(),Ge=de.getClearAlpha(),nt=Ve.r,st=Ve.g,We=Ve.b;Be?(m[0]=nt,m[1]=st,m[2]=We,m[3]=Ge,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=nt,x[1]=st,x[2]=We,x[3]=Ge,F.clearBufferiv(F.COLOR,0,x))}else j|=F.COLOR_BUFFER_BIT}W&&(j|=F.DEPTH_BUFFER_BIT),J&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),me.dispose(),Ie.dispose(),ye.dispose(),M.dispose(),z.dispose(),q.dispose(),it.dispose(),k.dispose(),fe.dispose(),K.dispose(),K.removeEventListener("sessionstart",Oi),K.removeEventListener("sessionend",_s),ni.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let A=Le.autoReset,W=se.enabled,J=se.autoUpdate,j=se.needsUpdate,X=se.type;ge(),Le.autoReset=A,se.enabled=W,se.autoUpdate=J,se.needsUpdate=j,se.type=X}function Fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){let W=A.target;W.removeEventListener("dispose",Qe),Ct(W)}function Ct(A){$t(A),ye.remove(A)}function $t(A){let W=ye.get(A).programs;W!==void 0&&(W.forEach(function(J){fe.releaseProgram(J)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,J,j,X,Se){W===null&&(W=Oe);let Be=X.isMesh&&X.matrixWorld.determinant()<0,Ve=zi(A,W,J,j,X);pe.setMaterial(j,Be);let Ge=J.index,nt=1;if(j.wireframe===!0){if(Ge=G.getWireframeAttribute(J),Ge===void 0)return;nt=2}let st=J.drawRange,We=J.attributes.position,_t=st.start*nt,Dt=(st.start+st.count)*nt;Se!==null&&(_t=Math.max(_t,Se.start*nt),Dt=Math.min(Dt,(Se.start+Se.count)*nt)),Ge!==null?(_t=Math.max(_t,0),Dt=Math.min(Dt,Ge.count)):We!=null&&(_t=Math.max(_t,0),Dt=Math.min(Dt,We.count));let Ft=Dt-_t;if(Ft<0||Ft===1/0)return;it.setup(X,j,Ve,J,Ge);let wn,Mt=Me;if(Ge!==null&&(wn=V.get(Ge),Mt=Ye,Mt.setIndex(wn)),X.isMesh)j.wireframe===!0?(pe.setLineWidth(j.wireframeLinewidth*ce()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(X.isLine){let Xe=j.linewidth;Xe===void 0&&(Xe=1),pe.setLineWidth(Xe*ce()),X.isLineSegments?Mt.setMode(F.LINES):X.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else X.isPoints?Mt.setMode(F.POINTS):X.isSprite&&Mt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Mt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Xe=X._multiDrawStarts,mi=X._multiDrawCounts,bt=X._multiDrawCount,Yn=Ge?V.get(Ge).bytesPerElement:1,er=ye.get(j).currentProgram.getUniforms();for(let Cn=0;Cn<bt;Cn++)er.setValue(F,"_gl_DrawID",Cn),Mt.render(Xe[Cn]/Yn,mi[Cn])}else if(X.isInstancedMesh)Mt.renderInstances(_t,Ft,X.count);else if(J.isInstancedBufferGeometry){let Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,mi=Math.min(J.instanceCount,Xe);Mt.renderInstances(_t,Ft,mi)}else Mt.render(_t,Ft)};function lt(A,W,J){A.transparent===!0&&A.side===gt&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Ce(A,W,J),A.side=ai,A.needsUpdate=!0,Ce(A,W,J),A.side=gt):Ce(A,W,J)}this.compile=function(A,W,J=null){J===null&&(J=A),p=Ie.get(J),p.init(W),y.push(p),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==J&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let j=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Se=X.material;if(Se)if(Array.isArray(Se))for(let Be=0;Be<Se.length;Be++){let Ve=Se[Be];lt(Ve,J,X),j.add(Ve)}else lt(Se,J,X),j.add(Se)}),y.pop(),p=null,j},this.compileAsync=function(A,W,J=null){let j=this.compile(A,W,J);return new Promise(X=>{function Se(){if(j.forEach(function(Be){ye.get(Be).currentProgram.isReady()&&j.delete(Be)}),j.size===0){X(A);return}setTimeout(Se,10)}te.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let vn=null;function qt(A){vn&&vn(A)}function Oi(){ni.stop()}function _s(){ni.start()}let ni=new Ip;ni.setAnimationLoop(qt),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(A){vn=A,K.setAnimationLoop(A),A===null?ni.stop():ni.start()},K.addEventListener("sessionstart",Oi),K.addEventListener("sessionend",_s),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(W),W=K.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,W,O),p=Ie.get(A,y.length),p.init(W),y.push(p),oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(oe),Te=this.localClippingEnabled,ie=ae.init(this.clippingPlanes,Te),g=me.get(A,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){let Se=_.xr.getDepthSensingMesh();Se!==null&&Qs(Se,W,-1/0,_.sortObjects)}Qs(A,W,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort($,Q),ee=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ee&&de.addToRenderList(g,A),this.info.render.frame++,ie===!0&&ae.beginShadows();let J=p.state.shadowsArray;se.render(J,A,W),ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){let Se=W.cameras;if(X.length>0)for(let Be=0,Ve=Se.length;Be<Ve;Be++){let Ge=Se[Be];so(j,X,A,Ge)}ee&&de.render(A);for(let Be=0,Ve=Se.length;Be<Ve;Be++){let Ge=Se[Be];io(g,A,Ge,Ge.viewport)}}else X.length>0&&so(j,X,A,W),ee&&de.render(A),io(g,A,W);O!==null&&(C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(_,A,W),it.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],ie===!0&&ae.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Qs(A,W,J,j){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){j&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);let Be=q.update(A),Ve=A.material;Ve.visible&&g.push(A,Be,Ve,J,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){let Be=q.update(A),Ve=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Pe.copy(Be.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Ve)){let Ge=Be.groups;for(let nt=0,st=Ge.length;nt<st;nt++){let We=Ge[nt],_t=Ve[We.materialIndex];_t&&_t.visible&&g.push(A,Be,_t,J,Pe.z,We)}}else Ve.visible&&g.push(A,Be,Ve,J,Pe.z,null)}}let Se=A.children;for(let Be=0,Ve=Se.length;Be<Ve;Be++)Qs(Se[Be],W,J,j)}function io(A,W,J,j){let X=A.opaque,Se=A.transmissive,Be=A.transparent;p.setupLightsView(J),ie===!0&&ae.setGlobalState(_.clippingPlanes,J),j&&pe.viewport(S.copy(j)),X.length>0&&Bi(X,W,J),Se.length>0&&Bi(Se,W,J),Be.length>0&&Bi(Be,W,J),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function so(A,W,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new yn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Qn:Ai,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let Se=p.state.transmissionRenderTarget[j.id],Be=j.viewport||S;Se.setSize(Be.z,Be.w);let Ve=_.getRenderTarget();_.setRenderTarget(Se),_.getClearColor(R),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),ee&&de.render(J);let Ge=_.toneMapping;_.toneMapping=ji;let nt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ie===!0&&ae.setGlobalState(_.clippingPlanes,j),Bi(A,J,j),C.updateMultisampleRenderTarget(Se),C.updateRenderTargetMipmap(Se),te.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let We=0,_t=W.length;We<_t;We++){let Dt=W[We],Ft=Dt.object,wn=Dt.geometry,Mt=Dt.material,Xe=Dt.group;if(Mt.side===gt&&Ft.layers.test(j.layers)){let mi=Mt.side;Mt.side=hn,Mt.needsUpdate=!0,ro(Ft,J,j,wn,Mt,Xe),Mt.side=mi,Mt.needsUpdate=!0,st=!0}}st===!0&&(C.updateMultisampleRenderTarget(Se),C.updateRenderTargetMipmap(Se))}_.setRenderTarget(Ve),_.setClearColor(R,U),nt!==void 0&&(j.viewport=nt),_.toneMapping=Ge}function Bi(A,W,J){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Se=A.length;X<Se;X++){let Be=A[X],Ve=Be.object,Ge=Be.geometry,nt=j===null?Be.material:j,st=Be.group;Ve.layers.test(J.layers)&&ro(Ve,W,J,Ge,nt,st)}}function ro(A,W,J,j,X,Se){A.onBeforeRender(_,W,J,j,X,Se),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(_,W,J,j,A,Se),X.transparent===!0&&X.side===gt&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,_.renderBufferDirect(J,W,j,X,A,Se),X.side=ai,X.needsUpdate=!0,_.renderBufferDirect(J,W,j,X,A,Se),X.side=gt):_.renderBufferDirect(J,W,j,X,A,Se),A.onAfterRender(_,W,J,j,X,Se)}function Ce(A,W,J){W.isScene!==!0&&(W=Oe);let j=ye.get(A),X=p.state.lights,Se=p.state.shadowsArray,Be=X.state.version,Ve=fe.getParameters(A,X.state,Se,W,J),Ge=fe.getProgramCacheKey(Ve),nt=j.programs;j.environment=A.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(A.isMeshStandardMaterial?z:M).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",Qe),nt=new Map,j.programs=nt);let st=nt.get(Ge);if(st!==void 0){if(j.currentProgram===st&&j.lightsStateVersion===Be)return Jt(A,Ve),st}else Ve.uniforms=fe.getUniforms(A),A.onBeforeCompile(Ve,_),st=fe.acquireProgram(Ve,Ge),nt.set(Ge,st),j.uniforms=Ve.uniforms;let We=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ae.uniform),Jt(A,Ve),j.needsLights=Nt(A),j.lightsStateVersion=Be,j.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=st,j.uniformsList=null,st}function Je(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Tr.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Jt(A,W){let J=ye.get(A);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function zi(A,W,J,j,X){W.isScene!==!0&&(W=Oe),C.resetTextureUnits();let Se=W.fog,Be=j.isMeshStandardMaterial?W.environment:null,Ve=O===null?_.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:gn,Ge=(j.isMeshStandardMaterial?z:M).get(j.envMap||Be),nt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,st=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),We=!!J.morphAttributes.position,_t=!!J.morphAttributes.normal,Dt=!!J.morphAttributes.color,Ft=ji;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ft=_.toneMapping);let wn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=wn!==void 0?wn.length:0,Xe=ye.get(j),mi=p.state.lights;if(ie===!0&&(Te===!0||A!==b)){let Fn=A===b&&j.id===w;ae.setState(j,A,Fn)}let bt=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==mi.state.version||Xe.outputColorSpace!==Ve||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isBatchedMesh&&Xe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==Ge||j.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ae.numPlanes||Xe.numIntersection!==ae.numIntersection)||Xe.vertexAlphas!==nt||Xe.vertexTangents!==st||Xe.morphTargets!==We||Xe.morphNormals!==_t||Xe.morphColors!==Dt||Xe.toneMapping!==Ft||Xe.morphTargetsCount!==Mt)&&(bt=!0):(bt=!0,Xe.__version=j.version);let Yn=Xe.currentProgram;bt===!0&&(Yn=Ce(j,W,X));let er=!1,Cn=!1,oo=!1,Ot=Yn.getUniforms(),ii=Xe.uniforms;if(pe.useProgram(Yn.program)&&(er=!0,Cn=!0,oo=!0),j.id!==w&&(w=j.id,Cn=!0),er||b!==A){pe.buffers.depth.getReversed()?(he.copy(A.projectionMatrix),sg(he),rg(he),Ot.setValue(F,"projectionMatrix",he)):Ot.setValue(F,"projectionMatrix",A.projectionMatrix),Ot.setValue(F,"viewMatrix",A.matrixWorldInverse);let Hi=Ot.map.cameraPosition;Hi!==void 0&&Hi.setValue(F,xe.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&Ot.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ot.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Cn=!0,oo=!0)}if(X.isSkinnedMesh){Ot.setOptional(F,X,"bindMatrix"),Ot.setOptional(F,X,"bindMatrixInverse");let Fn=X.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ot.setValue(F,"boneTexture",Fn.boneTexture,C))}X.isBatchedMesh&&(Ot.setOptional(F,X,"batchingTexture"),Ot.setValue(F,"batchingTexture",X._matricesTexture,C),Ot.setOptional(F,X,"batchingIdTexture"),Ot.setValue(F,"batchingIdTexture",X._indirectTexture,C),Ot.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Ot.setValue(F,"batchingColorTexture",X._colorsTexture,C));let ao=J.morphAttributes;if((ao.position!==void 0||ao.normal!==void 0||ao.color!==void 0)&&we.update(X,J,Yn),(Cn||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Ot.setValue(F,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ii.envMap.value=Ge,ii.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(ii.envMapIntensity.value=W.environmentIntensity),Cn&&(Ot.setValue(F,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&En(ii,oo),Se&&j.fog===!0&&ve.refreshFogUniforms(ii,Se),ve.refreshMaterialUniforms(ii,j,I,H,p.state.transmissionRenderTarget[A.id]),Tr.upload(F,Je(Xe),ii,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Tr.upload(F,Je(Xe),ii,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ot.setValue(F,"center",X.center),Ot.setValue(F,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(F,"normalMatrix",X.normalMatrix),Ot.setValue(F,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Fn=j.uniformsGroups;for(let Hi=0,ki=Fn.length;Hi<ki;Hi++){let zd=Fn[Hi];k.update(zd,Yn),k.bind(zd,Yn)}}return Yn}function En(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Nt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,W,J){ye.get(A.texture).__webglTexture=W,ye.get(A.depthTexture).__webglTexture=J;let j=ye.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){let J=ye.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,J=0){O=A,T=W,P=J;let j=!0,X=null,Se=!1,Be=!1;if(A){let Ge=ye.get(A);if(Ge.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(F.FRAMEBUFFER,null),j=!1;else if(Ge.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Ge.__hasExternalTextures)C.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let We=A.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&ye.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Be=!0);let st=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[W])?X=st[W][J]:X=st[W],Se=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?X=ye.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?X=st[J]:X=st,S.copy(A.viewport),D.copy(A.scissor),B=A.scissorTest}else S.copy(le).multiplyScalar(I).floor(),D.copy(Ae).multiplyScalar(I).floor(),B=be;if(pe.bindFramebuffer(F.FRAMEBUFFER,X)&&j&&pe.drawBuffers(A,X),pe.viewport(S),pe.scissor(D),pe.setScissorTest(B),Se){let Ge=ye.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,J)}else if(Be){let Ge=ye.get(A.texture),nt=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,J||0,nt)}w=-1},this.readRenderTargetPixels=function(A,W,J,j,X,Se,Be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){pe.bindFramebuffer(F.FRAMEBUFFER,Ve);try{let Ge=A.texture,nt=Ge.format,st=Ge.type;if(!ue.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-j&&J>=0&&J<=A.height-X&&F.readPixels(W,J,j,X,qe.convert(nt),qe.convert(st),Se)}finally{let Ge=O!==null?ye.get(O).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,W,J,j,X,Se,Be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){let Ge=A.texture,nt=Ge.format,st=Ge.type;if(!ue.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-j&&J>=0&&J<=A.height-X){pe.bindFramebuffer(F.FRAMEBUFFER,Ve);let We=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(W,J,j,X,qe.convert(nt),qe.convert(st),0);let _t=O!==null?ye.get(O).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,_t);let Dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ig(F,Dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(We),F.deleteSync(Dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,J=0){A.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);let j=Math.pow(2,-J),X=Math.floor(A.image.width*j),Se=Math.floor(A.image.height*j),Be=W!==null?W.x:0,Ve=W!==null?W.y:0;C.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Be,Ve,X,Se),pe.unbindTexture()},this.copyTextureToTexture=function(A,W,J=null,j=null,X=0){A.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],W=arguments[2],X=arguments[3]||0,J=null);let Se,Be,Ve,Ge,nt,st,We,_t,Dt,Ft=A.isCompressedTexture?A.mipmaps[X]:A.image;J!==null?(Se=J.max.x-J.min.x,Be=J.max.y-J.min.y,Ve=J.isBox3?J.max.z-J.min.z:1,Ge=J.min.x,nt=J.min.y,st=J.isBox3?J.min.z:0):(Se=Ft.width,Be=Ft.height,Ve=Ft.depth||1,Ge=0,nt=0,st=0),j!==null?(We=j.x,_t=j.y,Dt=j.z):(We=0,_t=0,Dt=0);let wn=qe.convert(W.format),Mt=qe.convert(W.type),Xe;W.isData3DTexture?(C.setTexture3D(W,0),Xe=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(C.setTexture2DArray(W,0),Xe=F.TEXTURE_2D_ARRAY):(C.setTexture2D(W,0),Xe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);let mi=F.getParameter(F.UNPACK_ROW_LENGTH),bt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Yn=F.getParameter(F.UNPACK_SKIP_PIXELS),er=F.getParameter(F.UNPACK_SKIP_ROWS),Cn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,st);let oo=A.isDataArrayTexture||A.isData3DTexture,Ot=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let ii=ye.get(A),ao=ye.get(W),Fn=ye.get(ii.__renderTarget),Hi=ye.get(ao.__renderTarget);pe.bindFramebuffer(F.READ_FRAMEBUFFER,Fn.__webglFramebuffer),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let ki=0;ki<Ve;ki++)oo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(A).__webglTexture,X,st+ki),A.isDepthTexture?(Ot&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.get(W).__webglTexture,X,Dt+ki),F.blitFramebuffer(Ge,nt,Se,Be,We,_t,Se,Be,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ot?F.copyTexSubImage3D(Xe,X,We,_t,Dt+ki,Ge,nt,Se,Be):F.copyTexSubImage2D(Xe,X,We,_t,Dt+ki,Ge,nt,Se,Be);pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Xe,X,We,_t,Dt,Se,Be,Ve,wn,Mt,Ft.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,X,We,_t,Dt,Se,Be,Ve,wn,Ft.data):F.texSubImage3D(Xe,X,We,_t,Dt,Se,Be,Ve,wn,Mt,Ft):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,We,_t,Se,Be,wn,Mt,Ft.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,We,_t,Ft.width,Ft.height,wn,Ft.data):F.texSubImage2D(F.TEXTURE_2D,X,We,_t,Se,Be,wn,Mt,Ft);F.pixelStorei(F.UNPACK_ROW_LENGTH,mi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,er),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Cn),X===0&&W.generateMipmaps&&F.generateMipmap(Xe),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J=null,j=null,X=0){return A.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,j=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,J,j,X)},this.initRenderTarget=function(A){ye.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){T=0,P=0,O=null,pe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var No=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new E,Ds=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ri=class extends bn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mr,fo=new E,gr=new E,vr=new E,xr=new re,po=new re,Fp=new Re,Pa=new E,mo=new E,Ia=new E,kf=new re,Uc=new re,Vf=new re,Qi=class extends zt{constructor(e=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Or(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Ds(n,3,0,!1)),mr.setAttribute("uv",new Ds(n,2,3,!1))}this.geometry=mr,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),Fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-vr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;La(Pa.set(-.5,-.5,0),vr,o,gr,s,r),La(mo.set(.5,-.5,0),vr,o,gr,s,r),La(Ia.set(.5,.5,0),vr,o,gr,s,r),kf.set(0,0),Uc.set(1,0),Vf.set(1,1);let a=e.ray.intersectTriangle(Pa,mo,Ia,!1,fo);if(a===null&&(La(mo.set(-.5,.5,0),vr,o,gr,s,r),Uc.set(0,1),a=e.ray.intersectTriangle(Pa,Ia,mo,!1,fo),a===null))return;let l=e.ray.origin.distanceTo(fo);l<e.near||l>e.far||t.push({distance:l,point:fo.clone(),uv:Zi.getInterpolation(fo,Pa,mo,Ia,kf,Uc,Vf,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function La(i,e,t,n,s,r){xr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(po.x=r*xr.x-s*xr.y,po.y=s*xr.x+r*xr.y):po.copy(xr),i.copy(e),i.x+=po.x,i.y+=po.y,i.applyMatrix4(Fp)}var Da=new E,Gf=new E,sl=class extends zt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Da.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Da);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Da.setFromMatrixPosition(e.matrixWorld),Gf.setFromMatrixPosition(this.matrixWorld);let n=Da.distanceTo(Gf)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},Wf=new E,Xf=new pt,qf=new pt,Jy=new E,Yf=new Re,Ua=new E,Nc=new Ln,$f=new Re,Fc=new Is,rl=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(s),e.ray.intersectsSphere(Nc)!==!1&&($f.copy(s).invert(),Fc.copy(e.ray).applyMatrix4($f),!(this.boundingBox!==null&&Fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===R0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Xf.fromBufferAttribute(s.attributes.skinIndex,e),qf.fromBufferAttribute(s.attributes.skinWeight,e),Wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=qf.getComponent(r);if(o!==0){let a=Xf.getComponent(r);Yf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jy.copy(Wf).applyMatrix4(Yf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Fo=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ol=class extends rn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=un,h=un,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new Re,Qy=new Re,al=class i{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Qy;Zf.multiplyMatrices(a,t[r]),Zf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ol(t,e,e,Bn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fo),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Kt=class extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new Re,Kf=new Re,Na=[],jf=new Wt,eM=new Re,go=new He,vo=new Ln,nn=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,eM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),jf.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(jf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),vo.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),Kf.multiplyMatrices(n,_r),go.matrixWorld=Kf,go.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){let l=Na[o];l.instanceId=r,l.object=this,t.push(l)}Na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ol(new Float32Array(s*this.count),s,this.count,_u,Jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Oo=class extends bn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ll=new E,cl=new E,Jf=new Re,xo=new Is,Fa=new Ln,Oc=new E,Qf=new E,Br=class extends zt{constructor(e=new ot,t=new Oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ll.fromBufferAttribute(t,s-1),cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ll.distanceTo(cl);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Jf.copy(s).invert(),xo.copy(e.ray).applyMatrix4(Jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),v=h.getX(x+1),y=Oa(this,e,xo,l,p,v);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Oa(this,e,xo,l,x,g);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Oa(this,e,xo,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Oa(this,e,xo,l,m-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ll.fromBufferAttribute(o,s),cl.fromBufferAttribute(o,r),t.distanceSqToSegment(ll,cl,Oc,Qf)>n)return;Oc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Oc);if(!(l<e.near||l>e.far))return{distance:l,point:Qf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ep=new E,tp=new E,hl=class extends Br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ep.fromBufferAttribute(t,s),tp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ep.distanceTo(tp);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ul=class extends Br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Us=class extends bn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},np=new Re,kh=new Is,Ba=new Ln,za=new E,Ns=class extends zt{constructor(e=new ot,t=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;np.copy(s).invert(),kh.copy(e.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);za.fromBufferAttribute(u,g),ip(za,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)za.fromBufferAttribute(u,m),ip(za,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ip(i,e,t,n,s,r,o){let a=kh.distanceSqToPoint(i);if(a<t){let l=new E;kh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ci=class extends rn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,s=[],r=[],o=[],a=new E,l=new Re;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bo=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vh=class extends Bo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ha=new E,Bc=new Tu,zc=new Tu,Hc=new Tu,es=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ha.subVectors(s[0],s[1]).add(s[0]),c=Ha);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ha.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Bc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),zc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),Hc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Bc.calc(l),zc.calc(l),Hc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function tM(i,e){let t=1-i;return t*t*e}function nM(i,e){return 2*(1-i)*i*e}function iM(i,e){return i*i*e}function To(i,e,t,n){return tM(i,e)+nM(i,t)+iM(i,n)}function sM(i,e){let t=1-i;return t*t*t*e}function rM(i,e){let t=1-i;return 3*t*t*i*e}function oM(i,e){return 3*(1-i)*i*i*e}function aM(i,e){return i*i*i*e}function Ao(i,e,t,n,s){return sM(i,e)+rM(i,t)+oM(i,n)+aM(i,s)}var dl=class extends kn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gh=class extends kn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y),Ao(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends kn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wh=class extends kn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends kn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(To(e,s.x,r.x,o.x),To(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends kn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(To(e,s.x,r.x,o.x),To(e,s.y,r.y,o.y),To(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(sp(a,l.x,c.x,h.x,u.x),sp(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:Vh,CatmullRomCurve3:es,CubicBezierCurve:dl,CubicBezierCurve3:Gh,EllipseCurve:Bo,LineCurve:fl,LineCurve3:Wh,QuadraticBezierCurve:pl,QuadraticBezierCurve3:ml,SplineCurve:gl}),Xh=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new vl[s.type]().fromJSON(s))}return this}},zr=class extends Xh{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fl(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new pl(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new dl(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new gl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Bo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hr=class i extends ot{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new E,d=new re,f=new E,m=new E,x=new E,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let y=n+v*h*s,_=Math.sin(y),L=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*L,o.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),a.push(d.x,d.y);let P=l[3*T+0]*_,O=l[3*T+1],w=l[3*T+0]*L;c.push(P,O,w)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let _=y+v*e.length,L=_,T=_+e.length,P=_+e.length+1,O=_+1;r.push(L,T,O),r.push(P,O,T)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var xl=class i extends ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new E,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pn=class i extends ot{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function v(){let _=new E,L=new E,T=0,P=(t-e)/n;for(let O=0;O<=r;O++){let w=[],b=O/r,S=b*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,R=B*l+a,U=Math.sin(R),N=Math.cos(R);L.x=S*U,L.y=-b*n+g,L.z=S*N,u.push(L.x,L.y,L.z),_.set(U,P,N).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-b),w.push(m++)}x.push(w)}for(let O=0;O<s;O++)for(let w=0;w<r;w++){let b=x[w][O],S=x[w+1][O],D=x[w+1][O+1],B=x[w][O+1];(e>0||w!==0)&&(h.push(b,S,B),T+=3),(t>0||w!==r-1)&&(h.push(S,D,B),T+=3)}c.addGroup(p,T,0),p+=T}function y(_){let L=m,T=new re,P=new E,O=0,w=_===!0?e:t,b=_===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let S=m;for(let D=0;D<=s;D++){let R=D/s*l+a,U=Math.cos(R),N=Math.sin(R);P.x=w*N,P.y=g*b,P.z=w*U,u.push(P.x,P.y,P.z),d.push(0,b,0),T.x=U*.5+.5,T.y=N*.5*b+.5,f.push(T.x,T.y),m++}for(let D=0;D<s;D++){let B=L+D,R=S+D;_===!0?h.push(R,R+1,B):h.push(R+1,R,B),O+=3}c.addGroup(p,O,_===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qh=class i extends ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new E,_=new E,L=new E;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],_),f(t[T+2],L),l(y,_,L,v)}function l(v,y,_,L){let T=L+1,P=[];for(let O=0;O<=T;O++){P[O]=[];let w=v.clone().lerp(_,O/T),b=y.clone().lerp(_,O/T),S=T-O;for(let D=0;D<=S;D++)D===0&&O===T?P[O][D]=w:P[O][D]=w.clone().lerp(b,D/S)}for(let O=0;O<T;O++)for(let w=0;w<2*(T-O)-1;w++){let b=Math.floor(w/2);w%2===0?(d(P[O][b+1]),d(P[O+1][b]),d(P[O][b])):(d(P[O][b+1]),d(P[O+1][b+1]),d(P[O+1][b]))}}function c(v){let y=new E;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new E;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=g(v)/2/Math.PI+.5,L=p(v)/Math.PI+.5;o.push(_,1-L)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],L=o[v+4],T=Math.max(y,_,L),P=Math.min(y,_,L);T>.9&&P<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){let v=new E,y=new E,_=new E,L=new E,T=new re,P=new re,O=new re;for(let w=0,b=0;w<r.length;w+=9,b+=6){v.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),L.copy(v).add(y).add(_).divideScalar(3);let S=g(L);x(T,b+0,v,S),x(P,b+2,y,S),x(O,b+4,_,S)}}function x(v,y,_,L){L<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=L/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ts=class extends zr{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new zr().fromJSON(s))}return this}},lM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Op(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=fM(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return zo(r,o,t,a,l,f,0),o}};function Op(i,e,t,n,s){let r,o;if(s===wM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=rp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=rp(r,i[r],i[r+1],o);return o&&Dl(o,o.next)&&(ko(o),o=o.next),o}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Dl(t,t.next)||kt(t.prev,t,t.next)===0)){if(ko(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&xM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?hM(i,n,s,r):cM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ko(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=uM(Fs(i),e,t),zo(i,e,t,n,s,r,2)):o===2&&dM(i,e,t,n,s,r):zo(Fs(i),e,t,n,s,r,1);break}}}function cM(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&br(s,a,r,l,o,c,m.x,m.y)&&kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Yh(f,m,e,t,n),v=Yh(x,g,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&br(a,h,l,u,c,d,y.x,y.y)&&kt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&br(a,h,l,u,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&br(a,h,l,u,c,d,y.x,y.y)&&kt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&br(a,h,l,u,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function uM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Dl(s,r)&&Bp(s,n,n.next,r)&&Ho(s,r)&&Ho(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ko(n),ko(n.next),n=i=r),n=n.next}while(n!==i);return Fs(n)}function dM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&MM(o,a)){let l=zp(o,a);o=Fs(o,o.next),l=Fs(l,l.next),zo(o,e,t,n,s,r,0),zo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fM(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Op(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(yM(c));for(s.sort(pM),r=0;r<s.length;r++)t=mM(s[r],t);return t}function pM(i,e){return i.x-e.x}function mM(i,e){let t=gM(i,e);if(!t)return e;let n=zp(t,i);return Fs(n,n.next),Fs(t,t.next)}function gM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&br(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ho(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&vM(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function vM(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function xM(i,e,t,n){let s=i;do s.z===0&&(s.z=Yh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_M(s)}function _M(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Yh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function br(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function MM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bM(i,e)&&(Ho(i,e)&&Ho(e,i)&&EM(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||Dl(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Dl(i,e){return i.x===e.x&&i.y===e.y}function Bp(i,e,t,n){let s=Va(kt(i,e,t)),r=Va(kt(i,e,n)),o=Va(kt(t,n,i)),a=Va(kt(t,n,e));return!!(s!==r&&o!==a||s===0&&ka(i,t,e)||r===0&&ka(i,n,e)||o===0&&ka(t,i,n)||a===0&&ka(t,e,n))}function ka(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Va(i){return i>0?1:i<0?-1:0}function bM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ho(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function EM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zp(i,e){let t=new $h(i.i,i.x,i.y),n=new $h(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function rp(i,e,t,n){let s=new $h(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $h(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ro=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];op(e),ap(n,e);let o=e.length;t.forEach(op);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ap(n,t[l]);let a=lM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function op(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ap(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Os=class i extends ot{constructor(e=new ts([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:SM,y,_=!1,L,T,P,O;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),T=new E,P=new E,O=new E),d||(g=0,f=0,m=0,x=0);let w=a.extractPoints(c),b=w.shape,S=w.holes;if(!Ro.isClockWise(b)){b=b.reverse();for(let ee=0,ce=S.length;ee<ce;ee++){let F=S[ee];Ro.isClockWise(F)&&(S[ee]=F.reverse())}}let B=Ro.triangulateShape(b,S),R=b;for(let ee=0,ce=S.length;ee<ce;ee++){let F=S[ee];b=b.concat(F)}function U(ee,ce,F){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ce,F)}let N=b.length,H=B.length;function I(ee,ce,F){let Ee,te,ue,pe=ee.x-ce.x,Le=ee.y-ce.y,ye=F.x-ee.x,C=F.y-ee.y,M=pe*pe+Le*Le,z=pe*C-Le*ye;if(Math.abs(z)>Number.EPSILON){let V=Math.sqrt(M),G=Math.sqrt(ye*ye+C*C),q=ce.x-Le/V,fe=ce.y+pe/V,ve=F.x-C/G,me=F.y+ye/G,Ie=((ve-q)*C-(me-fe)*ye)/(pe*C-Le*ye);Ee=q+pe*Ie-ee.x,te=fe+Le*Ie-ee.y;let ae=Ee*Ee+te*te;if(ae<=2)return new re(Ee,te);ue=Math.sqrt(ae/2)}else{let V=!1;pe>Number.EPSILON?ye>Number.EPSILON&&(V=!0):pe<-Number.EPSILON?ye<-Number.EPSILON&&(V=!0):Math.sign(Le)===Math.sign(C)&&(V=!0),V?(Ee=-Le,te=pe,ue=Math.sqrt(M)):(Ee=pe,te=Le,ue=Math.sqrt(M/2))}return new re(Ee/ue,te/ue)}let $=[];for(let ee=0,ce=R.length,F=ce-1,Ee=ee+1;ee<ce;ee++,F++,Ee++)F===ce&&(F=0),Ee===ce&&(Ee=0),$[ee]=I(R[ee],R[F],R[Ee]);let Q=[],le,Ae=$.concat();for(let ee=0,ce=S.length;ee<ce;ee++){let F=S[ee];le=[];for(let Ee=0,te=F.length,ue=te-1,pe=Ee+1;Ee<te;Ee++,ue++,pe++)ue===te&&(ue=0),pe===te&&(pe=0),le[Ee]=I(F[Ee],F[ue],F[pe]);Q.push(le),Ae=Ae.concat(le)}for(let ee=0;ee<g;ee++){let ce=ee/g,F=f*Math.cos(ce*Math.PI/2),Ee=m*Math.sin(ce*Math.PI/2)+x;for(let te=0,ue=R.length;te<ue;te++){let pe=U(R[te],$[te],Ee);he(pe.x,pe.y,-F)}for(let te=0,ue=S.length;te<ue;te++){let pe=S[te];le=Q[te];for(let Le=0,ye=pe.length;Le<ye;Le++){let C=U(pe[Le],le[Le],Ee);he(C.x,C.y,-F)}}}let be=m+x;for(let ee=0;ee<N;ee++){let ce=d?U(b[ee],Ae[ee],be):b[ee];_?(P.copy(L.normals[0]).multiplyScalar(ce.x),T.copy(L.binormals[0]).multiplyScalar(ce.y),O.copy(y[0]).add(P).add(T),he(O.x,O.y,O.z)):he(ce.x,ce.y,0)}for(let ee=1;ee<=h;ee++)for(let ce=0;ce<N;ce++){let F=d?U(b[ce],Ae[ce],be):b[ce];_?(P.copy(L.normals[ee]).multiplyScalar(F.x),T.copy(L.binormals[ee]).multiplyScalar(F.y),O.copy(y[ee]).add(P).add(T),he(O.x,O.y,O.z)):he(F.x,F.y,u/h*ee)}for(let ee=g-1;ee>=0;ee--){let ce=ee/g,F=f*Math.cos(ce*Math.PI/2),Ee=m*Math.sin(ce*Math.PI/2)+x;for(let te=0,ue=R.length;te<ue;te++){let pe=U(R[te],$[te],Ee);he(pe.x,pe.y,u+F)}for(let te=0,ue=S.length;te<ue;te++){let pe=S[te];le=Q[te];for(let Le=0,ye=pe.length;Le<ye;Le++){let C=U(pe[Le],le[Le],Ee);_?he(C.x,C.y+y[h-1].y,y[h-1].x+F):he(C.x,C.y,u+F)}}}Z(),ie();function Z(){let ee=s.length/3;if(d){let ce=0,F=N*ce;for(let Ee=0;Ee<H;Ee++){let te=B[Ee];oe(te[2]+F,te[1]+F,te[0]+F)}ce=h+g*2,F=N*ce;for(let Ee=0;Ee<H;Ee++){let te=B[Ee];oe(te[0]+F,te[1]+F,te[2]+F)}}else{for(let ce=0;ce<H;ce++){let F=B[ce];oe(F[2],F[1],F[0])}for(let ce=0;ce<H;ce++){let F=B[ce];oe(F[0]+N*h,F[1]+N*h,F[2]+N*h)}}n.addGroup(ee,s.length/3-ee,0)}function ie(){let ee=s.length/3,ce=0;Te(R,ce),ce+=R.length;for(let F=0,Ee=S.length;F<Ee;F++){let te=S[F];Te(te,ce),ce+=te.length}n.addGroup(ee,s.length/3-ee,1)}function Te(ee,ce){let F=ee.length;for(;--F>=0;){let Ee=F,te=F-1;te<0&&(te=ee.length-1);for(let ue=0,pe=h+g*2;ue<pe;ue++){let Le=N*ue,ye=N*(ue+1),C=ce+Ee+Le,M=ce+te+Le,z=ce+te+ye,V=ce+Ee+ye;xe(C,M,z,V)}}}function he(ee,ce,F){l.push(ee),l.push(ce),l.push(F)}function oe(ee,ce,F){Pe(ee),Pe(ce),Pe(F);let Ee=s.length/3,te=v.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);Oe(te[0]),Oe(te[1]),Oe(te[2])}function xe(ee,ce,F,Ee){Pe(ee),Pe(ce),Pe(Ee),Pe(ce),Pe(F),Pe(Ee);let te=s.length/3,ue=v.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);Oe(ue[0]),Oe(ue[1]),Oe(ue[3]),Oe(ue[1]),Oe(ue[2]),Oe(ue[3])}function Pe(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Oe(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return TM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vl[s.type]().fromJSON(s)),new i(n,e.options)}},SM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(d,1-m),new re(x,1-p)]:[new re(a,1-l),new re(h,1-u),new re(f,1-m),new re(g,1-p)]}};function TM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kr=class i extends qh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bs=class i extends ot{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new E,m=new re;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,y=v,_=v+n+1,L=v+n+2,T=v+1;a.push(y,_,T),a.push(_,L,T)}}this.setIndex(a),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var mn=class i extends ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new E,d=new E,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){let T=L/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let y=h[p][v+1],_=h[p][v],L=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&f.push(y,_,T),(p!==n-1||l<Math.PI)&&f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class i extends ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zs=class i extends ot{constructor(e=new ml(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new E,l=new E,c=new re,h=new E,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function x(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),v(),p()}function g(y){h=e.getPointAt(y/t,h);let _=o.normals[y],L=o.binormals[y];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,O=Math.sin(P),w=-Math.cos(P);l.x=w*_.x+O*L.x,l.y=w*_.y+O*L.y,l.z=w*_.z+O*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let L=(s+1)*(y-1)+(_-1),T=(s+1)*y+(_-1),P=(s+1)*y+_,O=(s+1)*(y-1)+_;m.push(L,T,O),m.push(T,P,O)}}function v(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new vl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var _l=class extends ht{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ft=class extends bn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dn=class extends ft{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var yl=class extends bn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ga(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function AM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function RM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Hp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zh=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xd:r=e,a=2*t-n;break;case qd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xd:o=e,l=2*n-t;break;case qd:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+v*o[c+L]+y*o[l+L]+_*o[u+L];return r}},Kh=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},jh=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&AM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ac,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Dr;var is=class extends Vn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Lr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Vn{};Ml.prototype.ValueTypeName="color";var Ci=class extends Vn{};Ci.prototype.ValueTypeName="number";var Jh=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Tt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pi=class extends Vn{InterpolantFactoryMethodLinear(e){return new Jh(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Vn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Lr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Vn{};Ii.prototype.ValueTypeName="vector";var bl=class{constructor(e="",t=-1,n=[],s=C0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(PM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=RM(l);l=lp(l,1,h),c=lp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ci(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let g=[],p=[];Hp(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){let y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Ci(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Ii,f+".position",d,"pos",s),n(Pi,f+".quaternion",d,"rot",s),n(Ii,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function CM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ci;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return Ml;case"quaternion":return Pi;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function PM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=CM(i.type);if(i.times===void 0){let t=[],n=[];Hp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Qh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},IM=new Qh,Li=class{constructor(e){this.manager=e!==void 0?e:IM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},eu=class extends Error{constructor(e,t){super(e),this.response=t}},Vo=class extends Li{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Mi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let L=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,P=h.length;T<P;T++){let O=h[T];O.onProgress&&O.onProgress(L)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ki.add(e,c);let h=Mi[e];delete Mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var tu=class extends Li{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Lo("img");function l(){h(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var rs=class extends Li{constructor(e){super(e)}load(e,t,n,s){let r=new rn,o=new tu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Vr=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},El=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kc=new Re,cp=new E,hp=new E,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cp.setFromMatrixPosition(e.matrixWorld),t.position.copy(cp),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nu=class extends Go{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wl=class extends Vr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},up=new Re,_o=new E,Vc=new E,iu=class extends Go{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_o.setFromMatrixPosition(e.matrixWorld),n.position.copy(_o),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),s.makeTranslation(-_o.x,-_o.y,-_o.z),up.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up)}},Sl=class extends Vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},su=class extends Go{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new su}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var os=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},hi=class extends ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Tl=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,l),r.manager.itemStart(e)}};var Al=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=dp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function dp(){return performance.now()}var Au="\\[\\]\\.:\\/",LM=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",DM="[^"+Au.replace("\\.","")+"]",UM=/((?:WC+[\/:])*)/.source.replace("WC",Ru),NM=/(WCOD+)?/.source.replace("WCOD",DM),FM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),OM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),BM=new RegExp("^"+UM+NM+FM+OM+"$"),zM=["material","materials","bones","map"],ru=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LM,"")}static parseTrackName(e){let t=BM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=ru;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w1=new Float32Array(1);var fp=new Re,Rl=class{constructor(e,t,n=0,s=1/0){this.ray=new Is(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fp),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(pp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ou(e[s],this,n,t);return n.sort(pp),n}};function pp(i,e){return i.distance-e.distance}function ou(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ou(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=au);function Cu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ot,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=kp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=kp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function kp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new ct(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Pu(i,e){if(e===Tp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Xo||e===Pl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Xo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var hs=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ou(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new ju(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=os.extractUrlBase(e);o=os.resolveURL(c,this.path)}else o=os.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qp){try{o[mt.KHR_BINARY_GLTF]=new Ju(e)}catch(u){s&&s(u);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:o[u]=new Nu;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Qu(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[u]=new ed;break;case mt.KHR_MESH_QUANTIZATION:o[u]=new td;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function HM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uu=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],gn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Sl(h),c.distance=u;break;case"spot":c=new wl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Nu=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){let s=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},Fu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Vu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],gn),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Wu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$u=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zu=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ku=class{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ju=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new Re,g=new E,p=new Tt,v=new E(1,1,1),y=new nn(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(g,p,v));for(let _ in l)if(_==="_COLOR_0"){let L=l[_];y.instanceColor=new Kt(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);zt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},qp="glTF",qo=12,Vp={JSON:1313821514,BIN:5130562},Ju=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qo,r=new DataView(e,qo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Vp.JSON){let c=new Uint8Array(e,qo+o,a);this.content=n.decode(c)}else if(l===Vp.BIN){let c=qo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=id[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=id[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Wr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(f)},a,c,gn,d)})})}},ed=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},td=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},Ul=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,v=1-g,y=p-d+u;for(let _=0;_!==a;_++){let L=o[x+_+a],T=o[x+_+l]*h,P=o[m+_+a],O=o[m+_]*h;r[_]=v*L+y*T+g*P+p*O}return r}},kM=new Tt,nd=class extends Ul{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return kM.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gp={9728:un,9729:Sn,9984:mu,9985:bo,9986:yr,9987:ri},Wp={33071:wi,33648:Po,10497:Cs},Iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VM={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Lr},Lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),i.DefaultMaterial}function Vs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function WM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function XM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qM(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=i.indices+":"+Du(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Du(i.targets[n]);return e}function Du(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var $M=new Re,rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new rs(this.options.manager):this.textureLoader=new Tl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Vs(r,a,s),Di(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(os.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Iu[s.type],a=Wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new ct(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Iu[s.type],c=Wr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(v);y||(x=new c(a,p*f,s.count*f/h),y=new Or(x,f/h),t.cache.add(v,y)),g=new Ds(y,l,d%f/h,m)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),g=new ct(x,l,m);if(s.sparse!==void 0){let p=Iu.SCALAR,v=Wr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,L=new v(o[1],y,s.sparse.count*p),T=new c(o[2],_,s.sparse.count*l);a!==null&&(g=new ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,O=L.length;P<O;P++){let w=L[P];if(g.setX(w,T[P*l]),l>=2&&g.setY(w,T[P*l+1]),l>=3&&g.setZ(w,T[P*l+2]),l>=4&&g.setW(w,T[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Gp[d.magFilter]||Sn,h.minFilter=Gp[d.minFilter]||ri,h.wrapS=Wp[d.wrapS]||Cs,h.wrapT=Wp[d.wrapT]||Cs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==un&&h.minFilter!==Sn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new rn(x);g.needsUpdate=!0,d(g)}),t.load(os.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Di(u,o),u.userData.mimeType=o.mimeType||YM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Us,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Oo,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ft}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){let u=s[mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],gn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gt);let h=r.alphaMode||Lu.OPAQUE;if(h===Lu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Lu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Pt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pt){let u=r.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],gn)}return r.emissiveTexture!==void 0&&o!==Pt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Di(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vs(s,u,r),u})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Xp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=qM(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Xp(new ot,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?GM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=o[f],p,v=c[f];if(g.mode===Wn.TRIANGLES||g.mode===Wn.TRIANGLE_STRIP||g.mode===Wn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new rl(x,v):new He(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Wn.TRIANGLE_STRIP?p.geometry=Pu(p.geometry,Pl):g.mode===Wn.TRIANGLE_FAN&&(p.geometry=Pu(p.geometry,Xo));else if(g.mode===Wn.LINES)p=new hl(x,v);else if(g.mode===Wn.LINE_STRIP)p=new Br(x,v);else if(g.mode===Wn.LINE_LOOP)p=new ul(x,v);else if(g.mode===Wn.POINTS)p=new Ns(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&XM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Di(p,r),g.extensions&&Vs(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Vs(s,u[0],r),u[0];let d=new $e;r.extensions&&Vs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Ke.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new li(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Re;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new al(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let v=0,y=d.length;v<y;v++){let _=d[v],L=f[v],T=m[v],P=x[v],O=g[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let w=n._createAnimationTracks(_,L,T,P,O);if(w)for(let b=0;b<w.length;b++)p.push(w[b])}return new bl(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,$M)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Fo:c.length>1?h=new $e:c.length===1?h=c[0]:h=new zt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Di(h,r),r.extensions&&Vs(n,h,r),r.matrix!==void 0){let u=new Re;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new $e;n.name&&(r.name=s.createUniqueName(n.name)),Di(r,n),n.extensions&&Vs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof bn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];cs[r.path]===cs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(cs[r.path]){case cs.weights:c=Ci;break;case cs.rotation:c=Pi;break;case cs.position:case cs.scale:c=Ii;break;default:switch(n.itemSize){case 1:c=Ci;break;case 2:case 3:default:c=Ii;break}break}let h=s.interpolation!==void 0?VM[s.interpolation]:Dr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+cs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=sd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Pi?nd:Ul;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ZM(i,e,t){let n=e.attributes,s=new Wt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){let h=sd(Wr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new E,l=new E;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=sd(Wr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Xp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=id[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return dt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Di(i,e),ZM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?WM(i,e.targets,t):i})}var Nl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},KM=new li(-1,1,1,-1,0,1),od=class extends ot{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},jM=new od,us=class{constructor(e){this._mesh=new He(jM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,KM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xr=class extends Nn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=as.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yo=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fl=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ol=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xr(Nl),this.copyPass.material.blending=oi,this.clock=new Al}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yo!==void 0&&(o instanceof Yo?n=!0:o instanceof Fl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bl=class extends Nn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Yp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qr=class i extends Nn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(r,o,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new yn(r,o,{type:Qn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new yn(r,o,{type:Qn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Yp;this.highPassUniforms=as.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Nl;this.copyUniforms=as.clone(h.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new Pt,this.fsQuad=new us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};qr.BlurDirectionX=new re(1,0);qr.BlurDirectionY=new re(0,1);var $p={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zl=class extends Nn{constructor(){super();let e=$p;this.uniforms=as.clone(e.uniforms),this.material=new _l({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===du?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $o=new E;function Xn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;$o.copy(e),$o[n]=0,$o.normalize();let c=.5*o/(o+a),h=1-$o.angleTo(i)/l;return Math.sign($o[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ui=class extends Ls{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new E,l=new E,c=new E(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new E,x=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=Xn(m,l,"z","y",r,n),d[p+1]=1-Xn(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),d[p+0]=1-Xn(m,l,"z","y",r,n),d[p+1]=1-Xn(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),d[p+0]=1-Xn(m,l,"x","z",r,e),d[p+1]=Xn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-Xn(m,l,"x","z",r,e),d[p+1]=1-Xn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-Xn(m,l,"x","y",r,e),d[p+1]=1-Xn(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),d[p+0]=Xn(m,l,"x","y",r,e),d[p+1]=1-Xn(m,l,"y","x",r,t);break}}};var Zr={};o0(Zr,{AXIS_H:()=>Ui,BODY_R:()=>Hl,CRUISE:()=>ds,FLOAT_H:()=>Yr,GRAVITY:()=>hd,HEIGHT_GLSL:()=>Vl,HILLS:()=>Vt,JUMP_V:()=>cd,LANE:()=>ad,LAYOUT_LANE:()=>ld,SLIDE:()=>Gt,SWELL:()=>Zo,WATER:()=>Ws,baseHeight:()=>Tn,clamp01:()=>Gs,hills:()=>Zp,laneX:()=>An,slopeAt:()=>kl,smoothstep:()=>$r,surface:()=>fs,waves:()=>Kp});var Ws=0,Ui=1.5,ad=.7,ld=.85,Yr=.34,Hl=.4,ds=7,cd=6.2,hd=17,Gt={half:1.1,moat:-.6,crown:.1},Vt=[[-16.7,0],[-11.8,-.5],[-5.6,.36],[-1,0]],Zo={amp:.1,wavelength:7.4},Gs=i=>Math.min(1,Math.max(0,i)),$r=(i,e,t)=>{let n=Gs((t-i)/(e-i));return n*n*(3-2*n)},An=i=>(1-i)*.7;function Zp(i){if(i<=Vt[0][0]||i>=Vt[Vt.length-1][0])return 0;for(let e=0;e<Vt.length-1;e++){let[t,n]=Vt[e],[s,r]=Vt[e+1];if(i<s)return n+(r-n)*$r(t,s,i)}return 0}function Tn(i,e,t){let n=Gs((i.tunnelStart-t)*.5),s=Math.abs(e),r=Gt.crown*Gs(1-s*s/(Gt.half*Gt.half)),o=$r(Gt.half,Gt.half+.55,s),a=n*((r+Zp(t))*(1-o)+Gt.moat*o),l=Gs((t-i.tunnelStart)*.5)*Gs((i.tunnelEnd-t)*.5),c=l*Zo.amp*Math.sin((t-i.tunnelStart)*2*Math.PI/Zo.wavelength),h=Math.sqrt(Math.max(.01,i.tunnelRadius*i.tunnelRadius-1.5*1.5)),u=Gs((s-(h-.45))/.45);return 0+a+c+l*.45*u*u}function Kp(i,e,t){return .06*Math.sin(e*.9-t*3.1+i*.35)+.035*Math.sin(e*2.3-t*5.3-i*1.1+1.7)+.02*Math.sin(e*4.7-t*7.9+i*2.3+.4)+.012*Math.sin(i*6+t*4+e*.5)}var fs=(i,e,t,n)=>Tn(i,e,t)+Kp(e,t,n),kl=(i,e,t)=>(Tn(i,e,t+.25)-Tn(i,e,t-.25))/.5,Vl=`
uniform vec4 uTunnel;   // start z, end z, radius, axis height
uniform float uTime;
float bwSmooth(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float bwHills(float z) {
  if (z <= ${Vt[0][0].toFixed(3)} || z >= ${Vt[3][0].toFixed(3)}) return 0.0;
  if (z < ${Vt[1][0].toFixed(3)}) return mix(${Vt[0][1].toFixed(3)}, ${Vt[1][1].toFixed(3)}, bwSmooth(${Vt[0][0].toFixed(3)}, ${Vt[1][0].toFixed(3)}, z));
  if (z < ${Vt[2][0].toFixed(3)}) return mix(${Vt[1][1].toFixed(3)}, ${Vt[2][1].toFixed(3)}, bwSmooth(${Vt[1][0].toFixed(3)}, ${Vt[2][0].toFixed(3)}, z));
  return mix(${Vt[2][1].toFixed(3)}, ${Vt[3][1].toFixed(3)}, bwSmooth(${Vt[2][0].toFixed(3)}, ${Vt[3][0].toFixed(3)}, z));
}
float bwBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = ${Gt.crown.toFixed(3)} * clamp(1.0 - ax * ax / ${(Gt.half*Gt.half).toFixed(3)}, 0.0, 1.0);
  float edge = bwSmooth(${Gt.half.toFixed(3)}, ${(Gt.half+.55).toFixed(3)}, ax);
  float slide = before * mix(crown + bwHills(xz.y), ${Gt.moat.toFixed(3)}, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * ${Zo.amp.toFixed(3)} * sin((xz.y - uTunnel.x) * ${(2*Math.PI/Zo.wavelength).toFixed(5)});
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
`;var Kr=`
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
`,jp=`
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
`,Jp=`
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
`,Qp=i=>`
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
`,em=`
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
`;var Xs=8,tm=`
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
`,nm=`
${Vl}
${tm}
uniform vec4 uRipples[${Xs}];   // x, u, start time, strength (track coordinates)
// Each vertex knows its track position (sideways x, along u) and the path frame there, so the sheet
// follows the 3D path: it climbs, drops and banks with the bent drum (track.js).
attribute vec2 aTrack;
attribute vec3 aP, aR, aU, aT;
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;
float rippleHeight(vec2 xz) {
  float h = 0.0;
  for (int i = 0; i < ${Xs}; i++) {
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
`,im=`
${Vl}
${Kr}
${tm}
uniform vec4 uRipples[${Xs}];
uniform float uFlow;        // current speed (m/s)
uniform float uSlideHalf;   // half width of the raised slide
uniform vec3 uDeep, uShallow, uTurq, uGlow, uSky, uPink, uGold, uRingA, uRingB, uFog, uSunDir;
uniform vec3 uRings;        // first ring u, spacing, count
uniform float uOpen;        // the Screen 3 opening look on the slide (opening.js); 0 = the original water
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;

float ripples(vec2 xz) {
  float f = 0.0;
  for (int i = 0; i < ${Xs}; i++) {
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
`,sm=`
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
`,rm=`
${Kr}
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
`;var lE=`
${Kr}
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
`,om=`
varying vec3 vDir;
void main() { vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }
`,am=`
uniform vec3 uTop, uMid, uHorizon, uBottom;
varying vec3 vDir;
void main() {
  float y = vDir.y;
  vec3 c = y > 0.0 ? mix(uHorizon, mix(uMid, uTop, smoothstep(0.25, 0.9, y)), smoothstep(0.0, 0.25, y)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.3, y));
  gl_FragColor = vec4(c, 1.0);
}
`,lm=`
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
`,cm=`
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
`,hm=`
attribute float size; attribute float alpha; attribute float kind;
uniform float uScale;
varying float vAlpha; varying float vKind;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  vAlpha = alpha; vKind = kind;
  gl_Position = projectionMatrix * mv;
}
`,um=`
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
`,dm={uniforms:{tDiffuse:{value:null},uSat:{value:1.32},uContrast:{value:1.12},uVignette:{value:.18},uOpen:{value:0},uOpenExposure:{value:.9},uOpenVibrance:{value:.35},uOpenDepth:{value:.16}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},fm=`
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,pm=`
${Kr}
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
`;var Gl=(i,e,t,n,s)=>$r(e,t,i)*(1-$r(n,s,i));function gm(i){let e=i.tunnelStart,t=D=>.27*Gl(D,e+5,e+8,e+11,e+13.5)-.34*Gl(D,e+14.5,e+17.5,e+21,e+24),n=D=>.055*Gl(D,e+6,e+9,e+12,e+15)-.06*Gl(D,e+18,e+21,e+26,e+29),s=D=>Math.atan(7*7*n(D)/9.81),r=i.startZ-34,o=i.tunnelEnd+14,a=.05,l=Math.ceil((o-r)/a)+1,c=new Float64Array(l*3),h=new Float64Array(l*3),u=new Float64Array(l*3),d=new Float64Array(l*3),f=new Float64Array(l*3),m=0,x=0,g=r,p=0,v=(D,B)=>{let R=t(D);return[Math.cos(R)*Math.sin(B),Math.sin(R),Math.cos(R)*Math.cos(B)]};for(let D=0;D<l;D++){let B=r+D*a,R=D*3,U=t(B),N=s(B),H=v(B,p),I=[Math.cos(p),0,-Math.sin(p)],$=[H[1]*I[2]-H[2]*I[1],H[2]*I[0]-H[0]*I[2],H[0]*I[1]-H[1]*I[0]],Q=Math.cos(N),le=Math.sin(N);c[R]=m,c[R+1]=x,c[R+2]=g,d[R]=H[0],d[R+1]=H[1],d[R+2]=H[2];for(let Z=0;Z<3;Z++)h[R+Z]=I[Z]*Q-$[Z]*le,u[R+Z]=$[Z]*Q+I[Z]*le;f[R]=U,f[R+1]=p,f[R+2]=N;let Ae=p+n(B+a*.5)*a*.5,be=v(B+a*.5,Ae);m+=be[0]*a,x+=be[1]*a,g+=be[2]*a,p+=n(B+a*.5)*a}let y=D=>{let B=Math.min(l-1.0001,Math.max(0,(D-r)/a)),R=Math.floor(B);return[R,B-R]},_=(D,B,R,U)=>{let N=B*3;return U.x=D[N]+(D[N+3]-D[N])*R,U.y=D[N+1]+(D[N+4]-D[N+1])*R,U.z=D[N+2]+(D[N+5]-D[N+2])*R,U};function L(D,B={P:new E,R:new E,U:new E,T:new E}){let[R,U]=y(D);_(c,R,U,B.P),_(h,R,U,B.R).normalize(),_(u,R,U,B.U).normalize(),_(d,R,U,B.T).normalize();let N=D-r<0?D-r:D-(r+(l-1)*a);return(D<r||D>r+(l-1)*a)&&B.P.addScaledVector(B.T,N),B}let T={P:new E,R:new E,U:new E,T:new E};function P(D,B,R,U=new E){return L(R,T),U.copy(T.P).addScaledVector(T.R,D).addScaledVector(T.U,B)}function O(D,B,R,U,N=new E){return L(U,T),N.set(0,0,0).addScaledVector(T.R,D).addScaledVector(T.U,B).addScaledVector(T.T,R)}function w(D,B=new Tt){return L(D,T),B.setFromRotationMatrix(new Re().makeBasis(T.R,T.U,T.T))}function b(D,B=new Re){let R=D.elements[14];L(R,T);let U=new Re().makeBasis(T.R,T.U,T.T).setPosition(T.P);return B.multiplyMatrices(U,new Re().makeTranslation(0,0,-R)).multiply(D)}function S(D){let[B,R]=y(D),U=B*3,N=180/Math.PI;return{pitch:(f[U]+(f[U+3]-f[U])*R)*N,heading:(f[U+1]+(f[U+4]-f[U+1])*R)*N,bank:(f[U+2]+(f[U+5]-f[U+2])*R)*N}}return{u0:r,u1:o,frame:L,map:P,dir:O,quaternion:w,mapMatrix:b,angles:S,pitch:t,turn:n,bankOf:s}}function _m({scene:i,mats:e,track:t}){let n=new $e;n.name="scenery",i.add(n);let s=[],r=e.env,o=e.gold,a=new ft({color:15903035,metalness:1,roughness:.3,envMap:r,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),l=new ft({color:2381823,metalness:.35,roughness:.26,envMap:r,envMapIntensity:1.2}),c=new ft({color:1521336,metalness:.3,roughness:.3,envMap:r,envMapIntensity:1}),h=new ft({color:1343628,metalness:.3,roughness:.25,envMap:r,envMapIntensity:1}),u=new ft({color:16178356,metalness:.25,roughness:.35,envMap:r,envMapIntensity:.9}),d=xm(16740296),f=xm(16773370),m=new Pt({color:new _e(2.4,2.05,1.35)}),x=(w,b=n)=>(b.add(w),w),g=(w,b,S,D)=>{let B=new He(w,b);return S&&B.position.set(...S),x(B,D)},p=(w,b,S=n)=>{let D=new $e;return D.position.set(...w),D.quaternion.setFromUnitVectors(new E(0,0,1),new E(...b).normalize()),x(D,S)},v=(w,b,S,D,B,R=0,U=0)=>{let N=new nn(new mn(D,10,8),B,S),H=new Re;for(let I=0;I<S;I++){let $=U+I/S*Math.PI*2;N.setMatrixAt(I,H.makeTranslation(Math.cos($)*b,Math.sin($)*b,R))}return x(N,w)},y=(w,b,S,D,B,R=0)=>{let U=QM(),N=new nn(U,B,S),H=new Re,I=new Tt,$=new E;for(let Q=0;Q<S;Q++){let le=Q/S*Math.PI*2,Ae=D*(.8+.4*Ko(Q*7.1));I.setFromEuler(new Mn(Ko(Q)*6,Ko(Q+3)*6,Ko(Q+9)*6)),$.set(Ae,Ae,Ae),N.setMatrixAt(Q,H.compose(new E(Math.cos(le)*b,Math.sin(le)*b,R+(Ko(Q+5)-.5)*D),I,$))}return x(N,w)},_=new Map;function L(w,b,S){let D=`${w}|${b}|${S}`;if(_.has(D))return _.get(D);let B=new ts,R=w*.8,U=Math.PI*2/b;for(let I=0;I<b;I++){let $=I*U;[[R,$],[w*.97,$+U*.1],[w,$+U*.22],[w,$+U*.34],[w*.97,$+U*.46],[R,$+U*.56]].forEach(([le,Ae],be)=>{let Z=Math.cos(Ae)*le,ie=Math.sin(Ae)*le;I===0&&be===0?B.moveTo(Z,ie):B.lineTo(Z,ie)})}B.closePath();let N=new zr;N.absarc(0,0,w*.42,0,Math.PI*2,!0),B.holes.push(N);let H=new Os(B,{depth:S,bevelEnabled:!0,bevelThickness:S*.35,bevelSize:w*.05,bevelSegments:3,curveSegments:6});return H.translate(0,0,-S/2),_.set(D,H),H}{let b=p([-2.25,-.3,-10],[.94,.05,-.34]),S=x(new $e,b);g(new jt(1.3,.24,20,72),o,null,S),g(new jt(1.3-.32,.1,12,64),a,null,S);let D=new nn(new ui(.26,.2,.5,2,.05),a,28),B=new Re,R=new Tt;for(let N=0;N<28;N++){let H=N/28*Math.PI*2;R.setFromAxisAngle(new E(0,0,1),H),D.setMatrixAt(N,B.compose(new E(Math.cos(H)*(1.3+.2),Math.sin(H)*(1.3+.2),0),R,new E(1,1,1)))}x(D,S),g(new pn(1.3-.36,1.3-.36,.16,48),l,null,S).rotation.x=Math.PI/2;for(let N=0;N<6;N++){let H=g(new ui(.16,2.275,.12,2,.05),o,[0,0,.12],S);H.rotation.z=N/6*Math.PI}g(new pn(.32,.36,.4,32),o,null,S).rotation.x=Math.PI/2,g(new mn(.2,20,14),l,[0,0,.24],S),v(S,1.3-.08,18,.05,m,.24),v(S,1.3-.08,18,.05,m,-.24,.17),y(S,1.3+.42,22,.17,d,-.15),s.push({obj:S,axis:new E(0,0,1),speed:-.55});let U=g(new pn(.22,.22,1.2,24),a,null,b);U.rotation.x=Math.PI/2,U.position.z=-.6,g(new jt(.3,.06,10,28),c,[0,0,-.35],b)}{let w=x(new $e);w.position.set(2.05,-.55,-12),w.rotation.y=.3,g(new ui(1.3,1.1,1.4,4,.2),u,null,w);for(let S of[-.25,.27])g(new ui(1.36,.12,1.46,2,.05),a,[0,S,0],w);g(new jt(.3,.07,10,32),o,[0,.02,-.72],w),g(new xl(.26,32),l,[0,.02,-.71],w).rotation.y=Math.PI,v(w,.3,10,.035,m,-.77);let b=x(new $e,w);b.position.y=.6,b.rotation.x=Math.PI/2,y(b,.45,9,.2,d),y(b,.15,4,.18,f)}for(let w of[1,-1]){let b=[[w*2.9,-.7,-12.5],[w*2.5,.25,-10.8],[w*2.75,.55,-7.5],[w*2.45,1.15,-4.6],[w*2.9,1.5,-2.2]],S=new es(b.map(D=>new E(...D)));g(new zs(S,60,.1,14),o);for(let D=.08;D<1;D+=.16){let B=S.getPoint(D),R=S.getTangent(D);g(new jt(.12,.045,8,20),c,[B.x,B.y,B.z]).quaternion.setFromUnitVectors(new E(0,0,1),R)}}let T=new $e;T.name="tunnelDecor",i.add(T);let P=[],O=null;if(t){let{TR:w,L:b,W:S}=t,D=[[0,1.25,2.1],[.2,1.6,2.3]],B=b.tunnelRadius*.955,R=2.3,U=new jt(B,.06,8,112),N=new jt(B,.17,8,112),H=new mn(.055,8,6),I=0;for(let te=b.tunnelStart+1.4;te<b.tunnelEnd-.8;te+=R,I++){let ue=new _e(...D[I%2]),pe=new Pt({color:ue.clone()}),Le=new He(U,pe);Le.matrixAutoUpdate=!1,w.mapMatrix(new Re().makeTranslation(0,S.WATER+S.AXIS_H,te),Le.matrix),T.add(Le);let ye=new Pt({color:new _e(0,.22,.42),transparent:!0,blending:dn,depthWrite:!1}),C=new He(N,ye);C.matrixAutoUpdate=!1,C.matrix.copy(Le.matrix),C.renderOrder=3,T.add(C);let M=new nn(H,new Pt({color:new _e(2.4,2.8,2.9)}),28),z=new Re,V=new Re;for(let G=0;G<28;G++){let q=G/28*Math.PI*2;V.makeTranslation(Math.cos(q)*B,S.WATER+S.AXIS_H+Math.sin(q)*B,te+.08),w.mapMatrix(V,z),M.setMatrixAt(G,z)}M.frustumCulled=!1,T.add(M),P.push({mat:pe,base:ue,haloMat:ye,haloBase:ye.color.clone(),u:te})}let $=[-10,15,65,90,115,165,190].map(te=>Ke.degToRad(te)),Q=[];for(let te=b.tunnelStart+1.4+R/2;te<b.tunnelEnd-1.5;te+=R)Q.push(te);let le=Q.length*$.length,Ae=b.tunnelRadius*.92,be=new Pt({map:JM(),color:16777215,alphaTest:.5,side:gt}),Z=new nn(new Hn(.62,.34),be,le),ie=new nn(new ui(.72,.44,.06,2,.04),o,le),Te=new Re,he=new Re,oe=new Re,xe=new Re,Pe=new E,Oe=new E(0,0,1),ee=new E,ce=[],F=0;for(let te of Q)for(let ue of $)Pe.set(Math.sin(ue),-Math.cos(ue),0),ee.set(-Math.cos(ue),-Math.sin(ue),0),Te.makeBasis(Pe,Oe,ee).setPosition(Math.cos(ue)*Ae,S.WATER+S.AXIS_H+Math.sin(ue)*Ae,te),w.mapMatrix(Te,oe),Z.setMatrixAt(F,oe),he.multiplyMatrices(Te,xe.makeTranslation(0,0,-.04)),w.mapMatrix(he,oe),ie.setMatrixAt(F,oe),Z.setColorAt(F,new _e(1,1,1)),ce.push(te),F++;Z.frustumCulled=ie.frustumCulled=!1,T.add(ie,Z),O={mesh:Z,u:ce,c:new _e};let Ee=0;for(let te=b.tunnelStart+3;te<b.tunnelEnd-2;te+=4.6,Ee++)for(let ue of[1,-1]){let pe=ue*(.62+.12*(Ee%2)),Le=ue*Math.cos(pe*ue)*(b.tunnelRadius-.12),ye=S.WATER+S.AXIS_H+Math.sin(Math.abs(pe))*(b.tunnelRadius-.12),C=new $e;C.matrixAutoUpdate=!1;let M=new E(-Le,S.WATER+S.AXIS_H-ye,0).normalize(),z=new Re().compose(new E(Le,ye,te),new Tt().setFromUnitVectors(new E(0,0,1),M),new E(1,1,1));w.mapMatrix(z,C.matrix),T.add(C);let V=.34+.08*((Ee+(ue>0?1:0))%2),G=new $e;C.add(G);let q=g(L(V,Math.round(V*26),V*.3),o,null,G),fe=g(new pn(V*.4,V*.4,V*.3,24),(Ee+ue)%2?h:l,null,q);fe.rotation.x=Math.PI/2,g(new mn(V*.15,14,10),o,[0,0,V*.18],q),v(q,V*.62,6,V*.06,m,V*.18),s.push({obj:q,axis:new E(0,0,1),speed:ue*(.8+.2*(Ee%3))})}}return{root:n,tunnel:T,update(w,b){for(let S of P){let D=vm(S.u,b);S.mat.color.copy(S.base).multiplyScalar(.75+.4*D),S.haloMat.color.copy(S.haloBase).multiplyScalar(.6+.8*D)}if(O){for(let S=0;S<O.u.length;S++)O.mesh.setColorAt(S,O.c.setScalar(1.15+.6*vm(O.u[S]+1.15,b)));O.mesh.instanceColor.needsUpdate=!0}for(let S of s)S.obj.rotateOnAxis(S.axis,S.speed*w)}}}function vm(i,e){let t=.5+.5*Math.sin(i*.55-e*2.6);return t*t}function JM(){let i=document.createElement("canvas");i.width=256,i.height=140;let e=i.getContext("2d"),t=(r,o,a,l,c)=>{e.beginPath(),e.moveTo(r+c,o),e.arcTo(r+a,o,r+a,o+l,c),e.arcTo(r+a,o+l,r,o+l,c),e.arcTo(r,o+l,r,o,c),e.arcTo(r,o,r+a,o,c),e.closePath()};t(4,4,248,132,26),e.fillStyle="#d61c9a",e.fill();let n=e.createLinearGradient(0,14,0,126);n.addColorStop(0,"#ff9be2"),n.addColorStop(.5,"#ff5cc8"),n.addColorStop(1,"#f23cb4"),t(14,14,228,112,18),e.fillStyle=n,e.fill(),e.fillStyle="rgba(255, 236, 250, 0.92)";for(let r=0;r<7;r++)t(36+r*28,34,12,72,6),e.fill();let s=new ci(i);return s.colorSpace=St,s.anisotropy=4,s}function xm(i){let e=new ft({color:i,roughness:.95,metalness:0,emissive:i,emissiveIntensity:.18});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.0);
        totalEmissiveRadiance += diffuseColor.rgb * rim * 0.55; }`)},e}var ud=null;function QM(){if(ud)return ud;let i=new kr(1,3),e=i.attributes.position,t=new E;for(let n=0;n<e.count;n++){t.fromBufferAttribute(e,n);let s=1+.16*Math.sin(t.x*9.1+t.y*4.3)*Math.sin(t.y*7.7+t.z*5.9)+.08*Math.sin(t.z*17+t.x*13);t.multiplyScalar(s),e.setXYZ(n,t.x,t.y,t.z)}return i.computeVertexNormals(),ud=i,i}function Ko(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}var eb=2.6,di={towers:[{at:[3,1.2,-2],height:5.9,yaw:180},{at:[-3,1.2,-2],height:5.9,yaw:0}],gears:[{at:[1.72,1.05,-1.7],dir:[-.2,.05,-.98],d:.8,spin:.9},{at:[2,.45,-2.4],dir:[-.25,.1,-.96],d:.92,spin:-.75},{at:[1.53,.26,-3.1],dir:[-.1,.1,-.99],d:.56,spin:1.2},{at:[-1.66,1,-1.7],dir:[.2,.05,-.98],d:.76,spin:-.9},{at:[-2,.5,-2.5],dir:[.25,.1,-.96],d:.96,spin:.7},{at:[-1.53,.23,-3.2],dir:[.1,.1,-.99],d:.55,spin:-1.2},{at:[2.05,3.15,-2.6],dir:[-.3,0,-.95],d:1.1,spin:-.7}],pipes:[{onTower:0,lift:.3,anchor:"down",size:.95,rot:[0,-135,0],pour:!0},{onTower:1,lift:.3,anchor:"down",size:.95,rot:[0,-45,0],pour:!0}],crowns:[{at:[0,4.72,2.12],width:2.1,rot:[0,180,0]}]};function ym({scene:i,models:e,env:t,gold:n,glowTexture:s,fallGeometry:r,fallMaterial:o,fx:a}){let l=new $e;l.name="entranceDecor",i.add(l);let c={value:0},h=new ft({color:2381823,metalness:.35,roughness:.26,envMap:t,envMapIntensity:1.2}),u=[],d=[],f=[],m=(S,D,B={})=>{let R=new ft({map:S.map,metalnessMap:S.metalnessMap,roughnessMap:S.roughnessMap,normalMap:S.normalMap,metalness:1,roughness:1,envMap:t,envMapIntensity:B.envI??1.1,emissive:16777215,emissiveMap:S.map,emissiveIntensity:B.glow??.2,side:gt});return B.fluid&&(R.onBeforeCompile=U=>{U.uniforms.uFluidTime=c,U.vertexShader=U.vertexShader.replace("void main() {",`varying vec3 vFluidP;
void main() {
  vFluidP = position;`),U.fragmentShader=U.fragmentShader.replace("void main() {",`varying vec3 vFluidP;
uniform float uFluidTime;
${Kr}
void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+em)}),R.customProgramCacheKey=()=>"decor:"+D,R},x=(S,D,B)=>{let R=null;S.scene.traverse(N=>{N.isMesh&&(R=R||m(N.material,D,B),N.material=R)}),S.scene.updateMatrixWorld(!0);let U=new Wt().setFromObject(S.scene);return{scene:S.scene,box:U,size:U.getSize(new E),centre:U.getCenter(new E),mat:R}},g={tower:x(e.tower,"tower",{fluid:!0,glow:.18}),gear:x(e.gear,"gear",{glow:.22}),pipe:x(e.pipe,"pipe",{glow:.2}),crown:x(e.crown,"crown",{glow:.25})},p=(S,D,B)=>{let R=S.scene.clone();return R.scale.setScalar(D),R.position.copy(B).multiplyScalar(-D),R},v=(S,D)=>{let B=new E(...D),R=new E,U=new E,N=-1/0,H=0,I=[];S.scene.traverse($=>{if(!$.isMesh)return;let Q=$.geometry.attributes.position;for(let le=0;le<Q.count;le+=3){R.fromBufferAttribute(Q,le).applyMatrix4($.matrixWorld);let Ae=R.dot(B);I.push(R.clone(),Ae),N=Math.max(N,Ae)}});for(let $=0;$<I.length;$+=2)I[$+1]>N-.04&&(U.add(I[$]),H++);return U.divideScalar(Math.max(1,H))},y={down:v(g.pipe,[0,-1,0]),side:v(g.pipe,[-1,0,0]),centre:g.pipe.centre},_=(()=>{let S=new E,D=-1/0,B=0,R=0,U=0,N=g.tower.box,H=N.max.x-N.min.x;return g.tower.scene.traverse(I=>{if(!I.isMesh)return;let $=I.geometry.attributes.position;for(let Q=0;Q<$.count;Q++)S.fromBufferAttribute($,Q).applyMatrix4(I.matrixWorld),S.x>N.max.x-H*.16&&S.y<N.min.y+(N.max.y-N.min.y)*.55&&(D=Math.max(D,S.y));for(let Q=0;Q<$.count;Q++)S.fromBufferAttribute($,Q).applyMatrix4(I.matrixWorld),S.x>N.max.x-H*.16&&Math.abs(S.y-D)<.02&&(B+=S.x,R+=S.z,U++)}),new E(B/Math.max(1,U),D,R/Math.max(1,U))})(),L=S=>S.map(D=>Ke.degToRad(D)),T={towers:[],gears:[],pipes:[],crowns:[]},P=[];function O(){for(let S of Object.values(T))for(let D of S)l.remove(D);for(let S of P)l.remove(S);for(let S of Object.keys(T))T[S]=[];P.length=0,u.length=0,d.length=0;for(let S of di.towers){let D=g.tower,B=S.height/D.size.y,R=new $e;if(R.position.set(...S.at),R.rotation.y=Ke.degToRad(S.yaw),R.add(p(D,B,new E(D.centre.x,D.box.min.y,D.centre.z))),s){let U=new Qi(new Ri({map:s,color:new _e(.25,.75,1.6),transparent:!0,opacity:.55,blending:dn,depthWrite:!1}));U.position.set(0,S.height*.57,0),U.scale.setScalar(S.height*.42),U.renderOrder=3,R.add(U),d.push({sp:U,phase:d.length*1.7})}if(S.at[1]>-.4&&n){let U=D.size.x*B*.36,N=S.at[1]+.75,H=new He(new pn(U,U*1.12,N,32),n);H.position.y=-N/2,R.add(H);for(let I of[-.12,-N*.55]){let $=new He(new jt(U*1.03,.07,10,40),h);$.rotation.x=Math.PI/2,$.position.y=I,R.add($)}}R.updateMatrixWorld(!0),R.userData.stubTop=_.clone().sub(new E(D.centre.x,D.box.min.y,D.centre.z)).multiplyScalar(B).applyMatrix4(R.matrixWorld),l.add(R),T.towers.push(R)}for(let S of di.gears){let D=g.gear,B=S.d/Math.max(D.size.x,D.size.y),R=new $e;R.position.set(...S.at),R.quaternion.setFromUnitVectors(new E(0,0,1),new E(...S.dir).normalize());let U=new $e;U.rotation.z=S.at[0]*7.3,U.add(p(D,B,D.centre)),R.add(U),u.push({obj:U,speed:S.spin}),l.add(R),T.gears.push(R)}for(let S of di.pipes){let D=g.pipe,B=S.size/Math.max(D.size.x,D.size.y,D.size.z),R=y[S.anchor||"centre"],U=S.onTower!==void 0?T.towers[S.onTower].userData.stubTop.clone():new E(...S.at),N=new $e;if(S.lift&&n){let H=S.size*.16,I=new He(new pn(H,H,S.lift+.1,20),n);I.position.copy(U).add(new E(0,(S.lift-.1)/2,0)),l.add(I),P.push(I),U.y+=S.lift}if(N.position.copy(U),N.rotation.set(...L(S.rot)),S.mirror&&(N.scale.x=-1),N.add(p(D,B,R)),l.add(N),T.pipes.push(N),S.pour&&r&&o){N.updateMatrixWorld(!0);let H=S.anchor==="side"?"down":"side",I=y[H].clone().sub(R).multiplyScalar(B).applyMatrix4(N.matrixWorld),$=new E(...H==="side"?[-1,0,0]:[0,-1,0]).applyQuaternion(N.getWorldQuaternion(new Tt));$.y=0,$.lengthSq()<1e-4&&$.set(Math.sign(U.x)||1,0,0),$.normalize();let Q=Math.max(.3,I.y+.62),le=H==="side"?.55:.15,Ae=S.size*.36,be=new He(r(le,Q,Ae,Ae*1.5),o);be.position.copy(I),be.lookAt(I.clone().add($)),be.renderOrder=2,l.add(be),P.push(be);let Z=I.clone().addScaledVector($,le);if(Z.y=-.6,a){let ie=di.pipes.indexOf(S);f[ie]?f[ie].pos.copy(Z):(f[ie]={pos:Z,rate:14,kind:1,spread:.25,up:1.1,size:.34},a.addSource(f[ie]))}}}for(let S of di.crowns){let D=g.crown,B=S.width/D.size.x,R=new $e;R.position.set(...S.at),R.rotation.set(...L(S.rot)),R.add(p(D,B,D.centre)),l.add(R),T.crowns.push(R)}return l.updateMatrixWorld(!0),w()}function w(S=3.9){let D={},B=new E;for(let[R,U]of Object.entries(T)){let N=1/0;for(let H of U)H.traverse(I=>{if(!I.isMesh)return;let $=I.geometry.attributes.position;for(let Q=0;Q<$.count;Q+=5)B.fromBufferAttribute($,Q).applyMatrix4(I.matrixWorld),B.z<S&&B.y<eb&&(N=Math.min(N,Math.abs(B.x)))});D[R]=Number.isFinite(N)?+N.toFixed(2):null}return D}let b=O();return{root:l,clear:b,place:O,update(S,D){c.value=D;for(let B of u)B.obj.rotation.z+=B.speed*S;for(let B of d)B.sp.material.opacity=.42+.16*Math.sin(D*2.3+B.phase)}}}var bm=typeof window<"u"&&!window.__BW_CLASSIC__&&!/[?&]classic(=|&|$)/.test(location.search)&&!!(window.__BW_PHASE_A__||/[?&]phase-?a(=|&|$)/i.test(location.search)),Em={wallHue:305,wallSat:.32,wallDim:.14,goldHue:36,goldSoften:.18,hotSoften:.2,glowAbove:3.3,glowZ:1.2,glowSize:[4.5,3.2,8],glowColor:[1,.86,.98],glowMix:.35,glowAdd:.06},dd={hotHue:300,hotSoften:.22,goldHue:34,goldSoften:.3},wm={stone:[.62,.38,.66],glow:[.95,.8,.95],glowMix:.55,glowReach:3.6},fd={deep:[.03,.4,.88],light:[.3,.75,1],icyMix:.85,crackScale:[4.4,2.2],crack:1,crackW:.11,collarR:.5,collarW:.7,edgeFoam:1,sparkle:2,skyCut:.6},Wl=typeof window<"u"&&window.__BW_PHASE_A_TUNE__||{};Object.assign(Em,Wl.castle||{});Object.assign(dd,Wl.tower||{});Object.assign(wm,Wl.wall||{});Object.assign(fd,Wl.water||{});var Lt=i=>(+i).toFixed(4),Mm=i=>`vec2(${i.map(Lt).join(", ")})`,qs=i=>`vec3(${i.map(Lt).join(", ")})`,tb=`
vec3 paRgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 paHsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function Sm({scene:i,castle:e,waterSheets:t,axisY:n,tunnelStart:s}){let r={castleMaterials:0,towerMeshes:0,wallFacing:!1,waterSheet:!1},o=null,a=null;if(i.traverse(c=>{if(!(!c.isMesh||!c.material||!c.material.customProgramCacheKey||c.material.customProgramCacheKey()!=="decor:tower")){if(!a){o=c.material;let h=dd,u=o.onBeforeCompile;a=o.clone(),a.onBeforeCompile=(d,f)=>{u.call(o,d,f),d.fragmentShader=d.fragmentShader.replace("void main() {",`${tb}
vec3 paTower(vec3 lin) {
  vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = paRgb2hsv(c); float h = hsv.x * 360.0;
  float hot = smoothstep(295.0, 312.0, h) * smoothstep(0.45, 0.7, hsv.y);
  hsv.x = mix(hsv.x, ${Lt(h.hotHue/360)}, hot * 0.5); hsv.y *= 1.0 - ${Lt(h.hotSoften)} * hot; hsv.z *= 1.0 - 0.05 * hot;
  float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
  hsv.x = mix(hsv.x, ${Lt(h.goldHue/360)}, gold * 0.4); hsv.y *= 1.0 - ${Lt(h.goldSoften)} * gold;
  return pow(paHsv2rgb(hsv), vec3(2.2));
}
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  diffuseColor.rgb = paTower(diffuseColor.rgb);   // Phase A`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = paTower(totalEmissiveRadiance);   // Phase A`)},a.customProgramCacheKey=()=>"decor:tower|phaseA:"+JSON.stringify(dd)}c.material=a,r.towerMeshes++}}),i.traverse(c=>{if(r.wallFacing||!c.isMesh||!c.material||!c.material.uniforms||!c.material.uniforms.uWall)return;let h=wm,u=c.material.clone();u.fragmentShader=`uniform vec3 uWall, uShade; varying vec2 vP;
      void main() {   // Phase A (?phaseA)
        float r = length(vP);
        vec3 c = mix(${qs(h.stone)}, ${qs(h.glow)}, (1.0 - smoothstep(2.95, ${Lt(h.glowReach)}, r)) * ${Lt(h.glowMix)});
        c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);
        c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));   // the thin dark line right at the ring stays
        float a = 1.0 - smoothstep(3.55, 3.92, r);                 // fades into the castle's own wall, as before
        gl_FragColor = vec4(c * a, a);
      }`,c.material=u,r.wallFacing=!0}),e){let c=Em,h=`
      { // Phase A (?phaseA): the approved castle's pink-lavender stone, softer peach gold, calmer pink, and a soft glow
        vec3 c = pow(max(diffuseColor.rgb, 0.0), vec3(1.0 / 2.2));
        vec3 hsv = bwRgb2hsv(c);
        float h = hsv.x * 360.0;
        float lav = smoothstep(215.0, 245.0, h) * (1.0 - smoothstep(330.0, 345.0, h));
        float pale = max(lav, 1.0 - smoothstep(0.04, 0.09, hsv.y)) * (1.0 - smoothstep(0.22, 0.42, hsv.y)) * smoothstep(0.45, 0.75, hsv.z);
        hsv.x = mix(hsv.x, ${Lt(c.wallHue/360)}, pale * 0.75);
        hsv.y = mix(hsv.y, max(hsv.y, ${Lt(c.wallSat)}), pale);
        hsv.z *= 1.0 - ${Lt(c.wallDim)} * pale;
        float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
        hsv.x = mix(hsv.x, ${Lt(c.goldHue/360)}, gold * 0.4);
        hsv.y *= 1.0 - ${Lt(c.goldSoften)} * gold;
        hsv.z *= 1.0 - 0.06 * gold;
        float hot = smoothstep(300.0, 318.0, h) * smoothstep(0.55, 0.8, hsv.y);
        hsv.y *= 1.0 - ${Lt(c.hotSoften)} * hot;
        c = bwHsv2rgb(hsv);
        vec3 dg = (vShadeP - vec3(0.0, ${Lt(n+c.glowAbove)}, ${Lt(c.glowZ)})) / ${qs(c.glowSize)};
        float glowK = exp(-dot(dg, dg));
        c = mix(c, ${qs(c.glowColor)}, glowK * ${Lt(c.glowMix)}) + ${qs(c.glowColor)} * glowK * ${Lt(c.glowAdd)};
        diffuseColor.rgb = pow(c, vec3(2.2));
      }`;e.traverse(u=>{if(!u.isMesh||!u.material||!u.material.onBeforeCompile)return;let d=u.material,f=d.onBeforeCompile,m=d.customProgramCacheKey.bind(d),x=d.clone();x.onBeforeCompile=(g,p)=>{f.call(d,g,p),g.fragmentShader.includes("bwRgb2hsv")&&g.fragmentShader.includes("vShadeP")&&(g.fragmentShader=g.fragmentShader.replace("#include <color_fragment>",h+`
#include <color_fragment>`))},x.customProgramCacheKey=()=>m()+"|phaseA-castle:"+JSON.stringify(c),u.material=x,r.castleMaterials++})}let l=(t||[]).find(c=>(c.geometry.computeBoundingBox(),c.geometry.boundingBox.min.z<s-5));if(l){let c=l.material,h=c.fragmentShader,u=`  float bubbleShade = 0.0;
`,d=`    col += (vec3(0.55, 0.92, 1.0) * lines * 0.3 + vec3(0.75, 0.95, 1.0) * caustic * 0.3 * (1.0 - moat)) * openK;
  }`,f="  vec3 foamCol = vec3(0.9, 0.97, 1.0) * (0.92 + 0.18 * NdotL);";if([u,d,f].every(m=>h.split(m).length===2)){let m=c.clone();m.uniforms=c.uniforms,m.fragmentShader=h.replace(u,u+`  float paSlide = 0.0;   // Phase A
`).replace(d,d.replace(/\n  }$/,"")+`
`+nb(fd)+`
  }`).replace(f,`  lit -= env * fresnel * 0.28 * (1.0 - inDrum * 0.6) * ${Lt(fd.skyCut)} * paSlide;   // Phase A: less pale sky on the slide
`+f),l.material=m,r.waterSheet=!0}}return r}var nb=i=>`
    { // Phase A (?phaseA): icy cyan water, a bold white crackle web, a thicker white foam collar and more sparkles
      float slideK = openK * (1.0 - moat);
      paSlide = slideK;
      vec3 icy = mix(${qs(i.deep)}, ${qs(i.light)}, clamp(0.3 + crest * 0.4 + hollow * 0.3, 0.0, 1.0));
      col = mix(col, icy, ${Lt(i.icyMix)} * slideK);
      vec2 iw = bwVoronoi((xz + warp * 0.35) * ${Mm(i.crackScale)} - vec2(0.0, flowT * 0.55) + 11.0);
      vec2 iw2 = bwVoronoi((xz + warp * 0.25) * ${Mm(i.crackScale)} * 2.0 - vec2(0.0, flowT * 0.6) + 23.0);
      float crack = 1.0 - smoothstep(0.015, ${Lt(i.crackW)}, iw.y - iw.x);
      float crack2 = (1.0 - smoothstep(0.01, ${Lt(i.crackW*.66)}, iw2.y - iw2.x)) * 0.6;
      col = mix(col, vec3(0.93, 0.99, 1.0), clamp(max(crack, crack2) * (0.55 + 0.45 * patchy) * ${Lt(i.crack)}, 0.0, 1.0) * slideK);
      float collar = exp(-pow(max(0.0, rM - ${Lt(i.collarR)}) / ${Lt(i.collarW)}, 2.0));
      foam = max(foam, smoothstep(0.3, 0.75, collar * (0.75 + 0.5 * stream)) * openK);
      foam = max(foam, edgeBand * smoothstep(0.35, 0.7, stream) * ${Lt(i.edgeFoam)} * openK);
      vec2 sp2 = xz * vec2(11.0, 6.0) - vec2(0.0, flowT * 0.35), sc2 = floor(sp2);
      float sh2 = bwHash(sc2 + 57.3);
      float star2 = 1.0 - smoothstep(0.0, 0.035, length((fract(sp2) - 0.5) * vec2(0.09, 0.17)));
      glint += step(0.93, sh2) * star2 * pow(max(0.0, sin(t * (4.0 + sh2 * 5.0) + sh2 * 60.0)), 4.0) * ${Lt(i.sparkle)} * slideK;
    }`;var ib={ringStep:.85,ringIn:2,ringOut:2.5,hazards:[[6,1],[6.7,-1],[16.6,-1],[18.8,1],[26,1],[26.7,-1]],deco:[[11.2,1,52],[21.8,-1,50],[31.5,1,55]],brushR:1,brushX:1.62,brushY:.9,turnIn:24,spin:2.2,bubbles:46,cluster:.03,showAhead:18,showBehind:6},pd={ringColours:[[.62,.42,1],[1,.36,.8],[.16,.88,1],[1,.74,.26]],sparkle:.955,bubbles:22,bubbleAngle:[28,152],bubbleR:[1.5,1.95],bubbleMax:.3,clearOut:1.15,hazardWarn:[4.2,1.6],grade:{vibrance:.45,knee:.62,roll:1.6},bloom:.22};async function Tm({scene:i,TR:e,L:t,W:n,camera:s,updaters:r,mascot:o,bump:a,brushBytes:l,waterSheets:c,soap:h,loaderParse:u,drumMeshes:d,round2:f}){let m=f?pd:null,x=f&&f.hooks||{},g={rings:0,brushes:0,bubbles:0,panelsHidden:0,waterCopy:!1},p=ib,v=t.tunnelStart,y=t.tunnelEnd,_=n.WATER+n.AXIS_H,L={value:0},T={P:new E,R:new E,U:new E,T:new E};{let R=[];for(let be=v+.6;be<y-.6+(m?4.4:0);be+=p.ringStep)R.push(be);let U=new Bs(p.ringIn,p.ringOut,112,1),N=new ht({uniforms:{uTime:L,uIn:{value:p.ringIn},uOut:{value:p.ringOut},uSpark:{value:m?m.sparkle:.9}},vertexShader:ob,fragmentShader:ab,transparent:!0,depthWrite:!1,blending:dn,side:gt}),H=new nn(U,N,R.length),I=m?m.ringColours.map(be=>new _e(...be)):[new _e(.5,.22,1),new _e(1,.3,.78),new _e(.12,.85,1),new _e(.45,.65,1)],$=new Re,Q=new Float32Array(R.length);R.forEach((be,Z)=>{e.mapMatrix(new Re().makeTranslation(0,_,be),$),H.setMatrixAt(Z,$),H.setColorAt(Z,I[Z%I.length]),Q[Z]=be}),U.setAttribute("aU",new Kt(Q,1)),H.frustumCulled=!1,H.renderOrder=3,H.name="s4Rings",i.add(H),g.rings=R.length;let le=i.getObjectByName("tunnelDecor"),Ae=0;if(le&&le.traverse(be=>{if(!be.isInstancedMesh)return;let Z=be.geometry.parameters||{};be.geometry.type==="PlaneGeometry"&&Math.abs(Z.width-.62)<.001&&(be.visible=!1,g.panelsHidden++,Ae=be.count)}),le&&Ae&&le.traverse(be=>{be.isInstancedMesh&&be.visible&&be.count===Ae&&be.material&&be.material.metalness===1&&(be.visible=!1,g.panelsHidden++)}),m&&le){let be=new Map,Z=0;le.traverse(ie=>{if(!ie.isMesh||ie.isInstancedMesh||!ie.material||ie.material.metalness<.9)return;let Te={};if(ie.material.color.getHSL(Te),!(Te.h<.06||Te.h>.18)){if(!be.has(ie.material)){let he=ie.material.clone();he.emissive=new _e(1,.68,.18),he.emissiveIntensity=.45,he.roughness=Math.min(he.roughness,.3),be.set(ie.material,he)}ie.material=be.get(ie.material),Z++}}),g.goldGlow=Z}}let P=new Map;for(let R of d||[]){let U=R.material;if(!P.has(U)){let N=U.clone(),H=U.onBeforeCompile,I=U.customProgramCacheKey.bind(U);N.onBeforeCompile=($,Q)=>{H.call(U,$,Q),$.fragmentShader=$.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            vec3 deep = mix(vec3(0.06, 0.08, 0.42), vec3(0.42, 0.36, 0.95), smoothstep(0.05, 0.75, l));
            diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.5, 0.55, 0.95), deep, 0.55); }`)},N.customProgramCacheKey=()=>I()+"|s4-deep",P.set(U,N)}R.material=P.get(U)}g.drumMaterialsTinted=P.size;let O=[];if(l){let R=await u(l),U=null;R.scene.traverse(oe=>{oe.isMesh&&!U&&(U=oe)});let N=U.geometry,H=N.attributes.position,I=N.attributes.color,$=N.index.array,Q=[],le=new _e;for(let oe=0;oe<$.length;oe+=3){let xe=$[oe],Pe=$[oe+1],Oe=$[oe+2],ee=(H.getX(xe)+H.getX(Pe)+H.getX(Oe))/3,ce=(H.getY(xe)+H.getY(Pe)+H.getY(Oe))/3,F=Math.hypot(ee,ce);le.setRGB((I.getX(xe)+I.getX(Pe)+I.getX(Oe))/3,(I.getY(xe)+I.getY(Pe)+I.getY(Oe))/3,(I.getZ(xe)+I.getZ(Pe)+I.getZ(Oe))/3);let Ee={};le.getHSL(Ee);let te=Ee.h>.07&&Ee.h<.17&&Ee.s>.35||Ee.h>.66&&Ee.h<.84&&Ee.s<.45&&Ee.l>.55;F>.96||ce<-.58&&te||ce<-.86||Q.push(xe,Pe,Oe)}let Ae=sb(N,Q,p.cluster);m&&lb(Ae,2,.6),g.brushTriangles=Ae.index.count/3,g.brushTrianglesDelivered=$.length/3;let be=new ft({vertexColors:!0,roughness:.7,metalness:.15,side:gt}),Z=m?`
  totalEmissiveRadiance += vec3(1.0, 0.88, 0.97) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.5) * 0.4;`:"";m&&(be.roughness=.85),be.onBeforeCompile=oe=>{oe.fragmentShader=oe.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+Z)},be.customProgramCacheKey=()=>"s4:brush"+(m?"2":"");let ie=new ft({color:16762194,metalness:1,roughness:.2,emissive:4860416,emissiveIntensity:.5}),Te=be.clone();Te.onBeforeCompile=oe=>{oe.fragmentShader=oe.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          diffuseColor.rgb = mix(c, vec3(1.0, 0.42, 0.78) * (0.5 + 0.7 * dot(c, vec3(0.333))), blue * 0.92); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+Z)},Te.customProgramCacheKey=()=>"s4:brushPink"+(m?"2":"");let he=(oe,xe,Pe,Oe)=>{e.frame(oe,T);let ee=new $e,ce,F;if(Oe)ce=xe*p.brushX,F=p.brushY;else{let z=Ke.degToRad(Pe),V=1.95;ce=xe*Math.cos(z)*V,F=_+Math.sin(z)*V}ee.position.copy(T.P).addScaledVector(T.R,ce).addScaledVector(T.U,F);let Ee=T.T.clone().negate(),te=T.R.clone().multiplyScalar(-xe),ue=Ee.multiplyScalar(Math.cos(Ke.degToRad(p.turnIn))).addScaledVector(te,Math.sin(Ke.degToRad(p.turnIn))).normalize(),pe=new Re().lookAt(new E,ue.clone().negate(),T.U);ee.quaternion.setFromRotationMatrix(pe);let Le=new He(Ae,xe>0?Te:be);Le.scale.setScalar(p.brushR/.95);let ye=new $e;ye.add(Le),ee.add(ye);let C=new He(new pn(.09,.09,1.1,16),ie);C.rotation.x=Math.PI/2,C.position.z=-.75,ee.add(C),ee.name="s4Brush",i.add(ee);let M={holder:ee,spinner:ye,u:oe,side:xe,hazard:Oe,hit:!1,dir:xe*(Oe?1:.6),base:ee.position.clone(),out:T.R.clone().multiplyScalar(xe),cleared:!1,clear:0,bonk:0};return O.push(M),M};for(let[oe,xe]of p.hazards)he(oe,xe,0,!0);for(let[oe,xe,Pe]of p.deco)he(oe,xe,Pe,!1);g.brushes=O.length,g.hazards=p.hazards.length}let w=[];x.clearBrushes=(R,U)=>{let N=0;for(let H of O)H.hazard&&!H.cleared&&H.u>=R&&H.u<=U&&(H.cleared=!0,N++,x.pop&&x.pop(H.holder.position));return N},x.hazards=()=>O.filter(R=>R.hazard).map(R=>({u:R.u,side:R.side,cleared:R.cleared})),r.push((R,U,N)=>{L.value=U;for(let I of O){let $=I.u-o.z;I.holder.visible=o.z>v-14&&$<p.showAhead&&$>-p.showBehind,I.cleared&&o.z>I.u+p.showBehind&&(I.cleared=!1);let Q=I.cleared?1:0;if(I.clear!==Q){I.clear=I.holder.visible?Ke.clamp(I.clear+Math.sign(Q-I.clear)*R/.35,0,1):Q;let le=I.clear*I.clear*(3-2*I.clear);I.holder.position.copy(I.base).addScaledVector(I.out,le*(m?m.clearOut:0))}I.bonk=Math.max(0,I.bonk-R),I.holder.visible&&(I.spinner.rotation.z+=p.spin*I.dir*R*(1-.7*I.clear+5*I.bonk))}if(S&&S.forEach((I,$)=>{let Q=b[$];I.z=Q.cleared?0:1}),N!=="running")return;let H=o;for(let I of O)if(I.hazard){if(Math.abs(H.z-I.u)>1.25){H.z>I.u+1.5&&(I.hit=!1);continue}if(!(I.hit||I.cleared||H.air&&H.yAbs-n.surface(t,H.x,H.z,U)>2.2)&&I.side*H.x>.33){I.hit=!0;let $=a(I.side);w.push({t:+U.toFixed(2),u:I.u,side:I.side,lane:H.lane,knocked:$!==!1}),$===!1&&(I.bonk=.5)}}}),g.hits=w;let b=O.filter(R=>R.hazard),S=m?b.map(R=>new pt(R.u,n.laneX(R.side>0?0:2),1,0)):null;for(;S&&S.length<6;)S.push(new pt(-999,0,0,0));if(h){let R=m?m.bubbles:p.bubbles,U=rb(23307),N=new mn(1,26,16),H=new hi;H.index=N.index,H.setAttribute("position",N.attributes.position),H.setAttribute("normal",N.attributes.normal);let I=new Float32Array(R*4),$=new Float32Array(R*4),Q=new E;for(let Z=0;Z<R;Z++){let ie=v+1.5+U()*(y-v-3),Te=Ke.degToRad(-10+U()*200),he=1.05+U()*.85;m&&(Te=Ke.degToRad(m.bubbleAngle[0]+(Te/Math.PI*180+10)/200*(m.bubbleAngle[1]-m.bubbleAngle[0])),he=m.bubbleR[0]+(he-1.05)/.85*(m.bubbleR[1]-m.bubbleR[0])),e.map(Math.cos(Te)*he,_+Math.sin(Te)*he,ie,Q);let oe=.06+Math.pow(U(),2.2)*.42;I.set([Q.x,Q.y,Q.z,m?.05+(oe-.06)*(m.bubbleMax-.05)/.42:oe],Z*4),$.set([U()*6.28,U()<.3?.08:0,.04,0],Z*4)}H.setAttribute("inst",new Kt(I,4)),H.setAttribute("motion",new Kt($,4)),H.instanceCount=R;let le={uTime:L,uMotion:{value:1},uAvoid:{value:new E(0,-99,0)},uCentreAlpha:{value:.035},uFilm:{value:1.3}},Ae=new ht({uniforms:le,vertexShader:h.vertex,fragmentShader:h.fragment,transparent:!0,depthWrite:!1,blending:Un,blendSrc:Gn,blendDst:fn}),be=new He(H,Ae);be.frustumCulled=!1,be.renderOrder=5,be.name="s4Bubbles",i.add(be),r.push(()=>{le.uAvoid.value.copy(o.root.position)}),g.bubbles=R}let D=(c||[]).find(R=>(R.geometry.computeBoundingBox(),R.geometry.boundingBox.min.z>v-5)),B="  vec3 lit = col * (0.8 + 0.3 * NdotL);";if(D&&D.material.fragmentShader.includes(B)){let R=D.material,U=R.clone();U.uniforms=R.uniforms,m&&(R.uniforms.uS4Haz={value:S},R.uniforms.uS4Warn={value:new re(...m.hazardWarn)}),U.fragmentShader=(m?`uniform vec4 uS4Haz[6]; uniform vec2 uS4Warn;
`:"")+R.fragmentShader.replace(B,m?db:`  if (inDrum > 0.0) {   // Screen 4 tunnel look (?s3=tunnel)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float collar = exp(-pow(max(0.0, rM - 0.42) / 0.42, 2.0));
    float behindM = clamp(-toM.y / 3.2, 0.0, 1.0);
    float trailV = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.95)) / 0.17, 2.0)) * step(toM.y, 0.2) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    foam = max(foam, smoothstep(0.28, 0.72, (collar + trailV * 0.85) * (0.7 + 0.6 * st)) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.55), 0.35 * inDrum);
  }
`+B),D.material=U,g.waterCopy=!0}return m&&(g.round2=cb({scene:i,round2:f,mascot:o,updaters:r,time:L,TS:v})),g}function sb(i,e,t){let n=i.attributes.position,s=i.attributes.color,r=new Map,o=[],a=new Map,l=m=>{if(a.has(m))return a.get(m);let x=Math.floor(n.getX(m)/t)+","+Math.floor(n.getY(m)/t)+","+Math.floor(n.getZ(m)/t),g=r.get(x);g===void 0&&(g=o.length,r.set(x,g),o.push([0,0,0,0,0,0,0]));let p=o[g];return p[0]+=n.getX(m),p[1]+=n.getY(m),p[2]+=n.getZ(m),s&&(p[3]+=s.getX(m),p[4]+=s.getY(m),p[5]+=s.getZ(m)),p[6]++,a.set(m,g),g},c=[];for(let m=0;m<e.length;m+=3){let x=l(e[m]),g=l(e[m+1]),p=l(e[m+2]);x!==g&&g!==p&&x!==p&&c.push(x,g,p)}let h=o.length,u=new Float32Array(h*3),d=new Float32Array(h*3);o.forEach((m,x)=>{u.set([m[0]/m[6],m[1]/m[6],m[2]/m[6]],x*3),d.set([m[3]/m[6],m[4]/m[6],m[5]/m[6]],x*3)});let f=new ot;return f.setAttribute("position",new ct(u,3)),s&&f.setAttribute("color",new ct(d,3)),f.setIndex(c),f.computeVertexNormals(),f.computeBoundingSphere(),f}function rb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var ob=`
attribute float aU;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
void main() {
  vR = length(position.xy); vA = atan(position.y, position.x); vU = aU;
  vC = instanceColor;
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,ab=`
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
`;function lb(i,e,t){let n=i.attributes.color,s=i.index.array,r=n.count,o=Array.from({length:r},()=>new Set);for(let l=0;l<s.length;l+=3){let c=s[l],h=s[l+1],u=s[l+2];o[c].add(h).add(u),o[h].add(c).add(u),o[u].add(c).add(h)}let a=Float32Array.from(n.array);for(let l=0;l<e;l++){let c=new Float32Array(a.length);for(let h=0;h<r;h++){let u=0,d=0,f=0,m=0;for(let x of o[h])u+=a[x*3],d+=a[x*3+1],f+=a[x*3+2],m++;if(!m){c.set(a.subarray(h*3,h*3+3),h*3);continue}c[h*3]=a[h*3]*(1-t)+u/m*t,c[h*3+1]=a[h*3+1]*(1-t)+d/m*t,c[h*3+2]=a[h*3+2]*(1-t)+f/m*t}a=c}n.array.set(a),n.needsUpdate=!0}function cb({round2:i,mascot:e,updaters:t,time:n,TS:s}){let r={exit:!1,grade:!1},{exitLight:o,grade:a,bloomPass:l}=i;o&&o[0]&&(o[0].material=new ht({uniforms:{uTime:n},vertexShader:hb,fragmentShader:ub}),o[1]&&o[1].material.color.setRGB(.12,.16,.3),r.exit=!0);let c=pd.grade;a&&a.material.fragmentShader.includes("if (uOpen > 0.0) {")&&(a.uniforms.uS4Grade={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS4Grade;").replace("if (uOpen > 0.0) {",`if (uS4Grade > 0.0) {   // ?s3=round2: inside the drum, rich and never washed out
        vec3 g = c.rgb;
        float lg = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float mx = max(g.r, max(g.g, g.b)), mn = min(g.r, min(g.g, g.b));
        float sat = (mx - mn) / max(mx, 1e-4);
        g = max(mix(vec3(lg), g, 1.0 + ${c.vibrance.toFixed(3)} * (1.0 - sat) * smoothstep(0.05, 0.35, lg)), 0.0);
        float l2 = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float kn = l2 > ${c.knee.toFixed(3)} ? ${c.knee.toFixed(3)} + (l2 - ${c.knee.toFixed(3)}) / (1.0 + (l2 - ${c.knee.toFixed(3)}) * ${c.roll.toFixed(3)}) : l2;
        g *= kn / max(l2, 1e-4);
        c.rgb = mix(c.rgb, g, uS4Grade);
      }
      if (uOpen > 0.0) {`),a.material.needsUpdate=!0,r.grade=!0);let h=l?l.strength:0;return t.push(()=>{let u=Ke.smoothstep(e.z,s-.5,s+2.5);r.grade&&(a.uniforms.uS4Grade.value=u),l&&(l.strength=h+(pd.bloom-h)*u)}),r}var hb="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",ub=`
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
`,db=`  if (inDrum > 0.0) {   // Screen 4 tunnel, round 2 (?s3=round2)
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
      float across = exp(-pow((xz.x - h.y) / 0.34, 2.0));
      float stripes = 0.65 + 0.35 * smoothstep(0.3, 0.6, fract(du * 1.4 + t * 1.6));
      haz = max(haz, along * across * h.z * stripes);
    }
    col = mix(col, vec3(1.0, 0.26, 0.62), haz * (0.42 + 0.12 * sin(t * 7.0)) * inDrum);
  }
  vec3 lit = col * (0.8 + 0.3 * NdotL);`;var fb=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),$s=typeof window>"u"||fb?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),At=Object.fromEntries(["castle","entrance","machinery","brush","bubbles"].map(i=>[i,$s.includes(i)||$s.includes("all")]));At.edges=$s.includes("edges");At.cine=$s.includes("cine");At.tunnel=$s.includes("tunnel");At.paint=$s.includes("paint");At.round2=$s.includes("round2");At.round2&&(At.paint=!0,At.tunnel=!0);At.paint&&(At.castle=!0,At.edges=!0);var Cm=Object.values(At).some(Boolean),gd={castle:"models/s3_castle.glb",entrance:"models/s3_entrance.glb",machinery:"models/s3_machinery.glb",brush:"models/s3_brush.glb"},fi={castle:{scale:10,archCentreY:-.27,front:2.75,glow:.32,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},pink:{hue:292,mix:.45,sat:.62},cyan:{sat:.55,val:1.06,glow:.55}},entrance:{holeRadius:2.05,holeCentre:[-.01,-.29],z:2.6,glow:.25,envI:1.25,gold:{hue:43,sat:.92,val:1.08,metal:.6}},machinery:{scale:1.66,at:[-2.73,.4,-7],yaw:180,glow:.3,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},cyan:{sat:.6,val:1.06,glow:.5}},brush:{scale:1.2,at:[2.32,.165,-7],yaw:180,glow:.22,rough:.72,metal:.15,envI:1},bubbles:{extra:[[475,526,14,79,0,.02],[428,478,13,15,.06,.03],[522,612,11,20,0,.02]],centreAlpha:.035}},jr={brush:{scale:1.51,at:[2.62,.23,-4.9]},film:1.4,edge:{profile:[[-.08,-.05],[0,.07],[.1,.13],[.22,.1],[.3,-.02],[.33,-.8]],alpha:.45,foam:1}},Pm={far:2.35,towers:-1.5,brush:-4.9,machinery:-6.5,groundBelow:.35,tear:1.35,cutZ:-14,fadeFrom:-12,fadeTo:-6},Ys={up:.099,forward:.818,pitch:.3,fov:1.0375,blend:.9},ps=typeof window<"u"&&window.__BW_S3_TUNE__||{};for(let i of Object.keys(ps))fi[i]&&(fi[i]={...fi[i],...ps[i]});ps.edges&&Object.assign(jr,ps.edges);ps.cine&&Object.assign(Ys,ps.cine);ps.paint&&Object.assign(Pm,ps.paint);At.edges&&(fi.brush={...fi.brush,...jr.brush});var jo={};for(let i of Object.keys(gd))At[i]&&(jo[i]=Im(gd[i]));At.tunnel&&(jo.brushT=jo.brush||Im(gd.brush));async function Im(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}async function Lm({scene:i,env:e,axisY:t,tunnelStart:n,oldCastle:s,sideMachinery:r,staticBubbles:o,camera:a,updaters:l,mascot:c,L:h,W:u,renderPass:d,rollers:f,grade:m,bloomPass:x,outputPass:g,waterSheets:p,TR:v,bumpMascot:y,drumMeshes:_,exitLight:L,r2:T}){let P={},O=new hs,w=async R=>{let U=await jo[R];return U?O.parseAsync(U,""):null},b=R=>{R&&(R.visible=!1)},S=(R,U)=>{let N=null;return R&&R.children.forEach(H=>H.traverse(I=>{!N&&I.isMesh&&I.material&&I.material.customProgramCacheKey&&I.material.customProgramCacheKey()===U&&(N=H)})),N};if(At.castle){let R=await w("castle");if(!R)P.castle="not found";else{let U=fi.castle,N=U.scale,H=new $e;H.name="s3Castle",H.rotation.y=Math.PI,H.scale.setScalar(N),H.position.set(0,t-U.archCentreY*N,U.front+.236*N),R.scene.traverse(I=>{I.isMesh&&(I.material=md(I.material,e,"castle",U))}),H.add(R.scene),i.add(H),b(s),i.traverse(I=>{I.isMesh&&I.material&&I.material.uniforms&&I.material.uniforms.uWall&&b(I)}),b(S(i.getObjectByName("entranceDecor"),"decor:crown")),P.castle={scale:N,...Rm(H,t,n)}}}if(At.entrance){let R=await w("entrance");if(!R)P.entrance="not found";else{let U=fi.entrance,N=U.holeRadius/.52,H=new $e;H.name="s3Entrance",H.rotation.y=Math.PI,H.scale.setScalar(N),H.position.set(U.holeCentre[0]*N,t-U.holeCentre[1]*N,U.z),R.scene.traverse(I=>{I.isMesh&&(I.material=md(I.material,e,"entrance",U))}),H.add(R.scene),i.add(H),b(i.getObjectByName("washerDoor")),P.entrance={scale:+N.toFixed(3),...Rm(H,t,n)}}}let D=(R,U,N)=>{let H=new $e;H.rotation.y=Ke.degToRad(U.yaw),H.scale.setScalar(U.scale),H.position.set(...U.at),R.scene.traverse($=>{$.isMesh&&($.material=N($.material))}),H.add(R.scene),i.add(H);let I=Am(H,n);for(let $=0;$<40&&I<1.18;$++)H.position.x+=.03*Math.sign(H.position.x),I=Am(H,n);return{holder:H,lane:+I.toFixed(2),at:H.position.toArray().map($=>+$.toFixed(2))}};if(At.machinery){let R=await w("machinery");if(!R)P.machinery="not found";else{let U=fi.machinery,N=D(R,U,I=>md(I,e,"machinery",U));N.holder.name="s3Machinery";let H=i.getObjectByName("scenery");if(H)for(let I of H.children)I.position.distanceTo(new E(-2.25,-.3,-10))<.01&&b(I);P.machinery={scale:U.scale,at:N.at,nearestToLanes:N.lane}}}if(At.brush){let R=await w("brush");if(!R)P.brush="not found";else{let U=fi.brush,N=D(R,U,I=>{let $=new ft({vertexColors:!0,roughness:U.rough,metalness:U.metal,envMap:e,envMapIntensity:U.envI,side:gt});return $.onBeforeCompile=Q=>{Q.fragmentShader=Q.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${(+U.glow).toFixed(3)};`)},$.customProgramCacheKey=()=>"s3:brush:"+JSON.stringify(U),$});N.holder.name="s3Brush",b(r);let H=i.getObjectByName("scenery");if(H)for(let I of H.children)I.position.distanceTo(new E(2.05,-.55,-12))<.01&&b(I);P.brush={scale:U.scale,at:N.at,nearestToLanes:N.lane,spins:!1}}}let B=At.cine&&d?_b({camera:a,renderPass:d,updaters:l}):null;if(B&&(P.cine={...Ys}),At.bubbles&&o&&(P.bubbles=pb({scene:i,staticBubbles:o,camera:B||a,updaters:l,mascot:c})),At.edges&&h&&u&&(P.edges=gb({scene:i,L:h,W:u,env:e,updaters:l})),At.tunnel&&v&&y&&(P.tunnel=await Tm({scene:i,TR:v,L:h,W:u,camera:a,updaters:l,mascot:c,bump:y,brushBytes:await jo.brushT,waterSheets:p,soap:{vertex:Dm,fragment:Um},loaderParse:R=>O.parseAsync(R.slice(0),""),drumMeshes:_,round2:At.round2?{exitLight:L,grade:m,bloomPass:x,hooks:T}:null})),At.paint&&m&&g&&(P.paint=await yb({scene:i,camera:a,updaters:l,tunnelStart:n,sideMachinery:r,staticBubbles:o,rollers:f,grade:m,bloomPass:x,outputPass:g,waterSheets:p,L:h,W:u})),At.edges&&a){let R=[];i.traverse(N=>{/^s3(Castle|Entrance|Machinery|Brush|IcyEdge|Bubbles)/.test(N.name)&&R.push(N)});let U=!1;l.push(()=>{let N=a.position.z,H=U?N>n:N>n+1.5;if(H!==U){U=H;for(let I of R)I.visible=!U}}),P.hiddenInTunnel=R.length}return P}function Am(i,e){i.updateMatrixWorld(!0);let t=1/0,n=new E;return i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.attributes.position;for(let o=0;o<r.count;o+=2)n.fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld),n.z<e&&n.y<2.6&&(t=Math.min(t,Math.abs(n.x)))}),t}function pb({scene:i,staticBubbles:e,camera:t,updaters:n,mascot:s}){let r=fi.bubbles,o=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,a={uTime:{value:0},uMotion:{value:o?0:1},uAvoid:{value:new E(0,-99,0)},uCentreAlpha:{value:r.centreAlpha},uFilm:{value:At.edges?jr.film:1}},l=new ht({uniforms:a,vertexShader:Dm,fragmentShader:Um,transparent:!0,depthWrite:!1,depthTest:!0,blending:Un,blendSrc:Gn,blendDst:fn}),c=new mn(1,40,24),h=(v,y)=>{let _=new hi;return _.index=c.index,_.setAttribute("position",c.attributes.position),_.setAttribute("normal",c.attributes.normal),_.setAttribute("inst",v),_.setAttribute("motion",y),_},u=v=>{let y=new He(v,l);return y.frustumCulled=!1,y.renderOrder=5,y.name="s3Bubbles",i.add(y),y},d=e.geometry,f=u(h(d.attributes.inst,d.attributes.motion)),m=r.extra.length,x=h(new Kt(new Float32Array(m*4),4),new Kt(new Float32Array(m*4),4));x.instanceCount=0,u(x);let g=new Bt(40,.5,.1,200),p=!1;return n.push((v,y,_)=>{if(a.uTime.value=y,s&&a.uAvoid.value.copy(s.root.position),e.visible=!1,f.geometry.instanceCount=d.instanceCount,p||_!=="intro")return;p=!0,g.fov=t.aspect>=.5?t.fov:Ke.radToDeg(2*Math.atan(Math.tan(Ke.degToRad(t.fov)/2)*t.aspect/.5)),g.position.copy(t.position),g.quaternion.copy(t.quaternion),g.updateProjectionMatrix(),g.updateMatrixWorld(!0);let L=g.getWorldDirection(new E),T=new E,P=x.attributes.inst,O=x.attributes.motion,w=b=>1076/(2*b*Math.tan(Ke.degToRad(g.fov)/2));r.extra.forEach(([b,S,D,B,R,U],N)=>{T.set(b/538*2-1,1-S/1076*2,.5).unproject(g).sub(g.position).normalize();let H=g.position.clone().addScaledVector(T,D/T.dot(L));P.setXYZW(N,H.x,H.y,H.z,B/w(D)),O.setXYZW(N,1.7+N*2.3,R,U,0)}),x.instanceCount=m,P.needsUpdate=O.needsUpdate=!0}),{spheres:!0,extra:m,reducedMotion:o}}var Dm=`
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
`,Um=`
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
`;function Rm(i,e,t){i.updateMatrixWorld(!0);let n=1/0,s=1/0,r=new E;return i.traverse(o=>{if(!o.isMesh)return;let a=o.geometry.attributes.position;for(let l=0;l<a.count;l++)r.fromBufferAttribute(a,l).applyMatrix4(o.matrixWorld),s=Math.min(s,r.z),r.y>-.2&&r.z<t+30&&(n=Math.min(n,Math.hypot(r.x,r.y-e)))}),{nearestToAxis:+n.toFixed(2),frontZ:+s.toFixed(2)}}function md(i,e,t,n){let s=new ft({map:i.map,metalnessMap:i.metalnessMap,roughnessMap:i.roughnessMap,normalMap:i.normalMap||null,metalness:1,roughness:1,envMap:e,envMapIntensity:n.envI,emissive:16777215,emissiveMap:i.map,emissiveIntensity:n.glow,side:gt}),r=n.gold||{},o=n.pink||null,a=n.cyan||null,l=h=>(+h).toFixed(4),c=`
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
      return smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y); }`:""}`;return s.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("void main() {",`${mb}
${c}
float s3Gold = 0.0;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  s3Gold = s3GoldMask(diffuseColor.rgb);
  diffuseColor.rgb = s3Grade(diffuseColor.rgb);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
  metalnessFactor *= mix(1.0, ${l(r.metal??1)}, s3Gold);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = s3Grade(totalEmissiveRadiance)${a?` * (1.0 + ${l(a.glow)} * s3CyanMask(totalEmissiveRadiance))`:""};`)},s.customProgramCacheKey=()=>"s3:"+t+":"+JSON.stringify(n),s}var mb=`
vec3 s3Rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 s3Hsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function gb({scene:i,L:e,W:t,env:n,updaters:s}){let r={wallsHidden:0,railsHidden:0},o=e.startZ-24,a=-.6;i.traverse(d=>{if(!d.isMesh||d.isInstancedMesh||!d.material||!d.material.color)return;let f=d.material.color.getHex(),m=d.geometry;m.boundingBox||m.computeBoundingBox();let x=m.boundingBox;x.max.z-x.min.z>20&&x.min.z<o+1&&Math.abs((x.min.x+x.max.x)/2)<1.8&&(f===15128831||f===9425663?(d.visible=!1,r.wallsHidden++):m.type==="TubeGeometry"&&(d.visible=!1,r.railsHidden++))});let l={uTime:{value:0},uAlpha:{value:jr.edge.alpha},uFoam:{value:jr.edge.foam}},c=new ht({uniforms:l,vertexShader:vb,fragmentShader:xb,transparent:!0,depthWrite:!1,side:gt,blending:Un,blendSrc:Gn,blendDst:fn}),h=jr.edge.profile,u=h.length;for(let d of[-1,1]){let f=[],m=[],x=[],g=0;for(let y=o;y<=a+1e-6;y+=.25,g++){let _=t.baseHeight(e,d*t.SLIDE.half,y);h.forEach(([L,T],P)=>{f.push(d*(t.SLIDE.half+L),_+T,y),m.push(P/(u-1))})}for(let y=0;y<g-1;y++)for(let _=0;_<u-1;_++){let L=y*u+_,T=L+u;x.push(L,T,L+1,T,T+1,L+1)}let p=new ot;p.setAttribute("position",new Ze(f,3)),p.setAttribute("across",new Ze(m,1)),p.setIndex(x),p.computeVertexNormals();let v=new He(p,c);v.renderOrder=2,v.name="s3IcyEdge",i.add(v)}return s.push((d,f)=>{l.uTime.value=f}),r.icyEdges=2,r}var vb=`
attribute float across;
varying vec3 vW; varying vec3 vN; varying float vAcross;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vAcross = across;
  gl_Position = projectionMatrix * viewMatrix * w; }
`,xb=`
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
`;function _b({camera:i,renderPass:e,updaters:t}){let n=new Bt(i.fov,i.aspect,i.near,i.far),s=new E,r=new Tt,o=new E(1,0,0),a=null;return t.push((l,c,h)=>{h==="running"&&a===null&&(a=c);let u=a===null?0:c-a,d=h==="intro"?1:a===null?0:1-Ke.smoothstep(u,0,Ys.blend);if(d<=0){e.camera!==i&&(e.camera=i);return}i.getWorldDirection(s),s.y=0,s.normalize(),n.position.copy(i.position).addScaledVector(s,Ys.forward*d),n.position.y+=Ys.up*d,n.quaternion.copy(i.quaternion).multiply(r.setFromAxisAngle(o,-Ke.degToRad(Ys.pitch)*d)),n.fov=i.fov*(1+(Ys.fov-1)*d),n.aspect=i.aspect,n.near=i.near,n.far=i.far,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),e.camera=n}),n}async function yb({scene:i,camera:e,updaters:t,tunnelStart:n,sideMachinery:s,staticBubbles:r,rollers:o,grade:a,bloomPass:l,outputPass:c,waterSheets:h,L:u,W:d}){let f=Pm,m=await new rs().loadAsync("ui/s3_paint_backdrop.png");m.colorSpace=St,m.anisotropy=4;let x=[i.getObjectByName("entranceDecor"),i.getObjectByName("scenery"),s,r,...(o||[]).filter(oe=>oe.centre.z<n).map(oe=>oe.g)].filter(Boolean);for(let oe of x)oe.visible=!1;let g=48,p=96,v=-40,y=578,_=-80,L=1156,T=(g+1)*(p+1),P=new Float32Array(T*3),O=new Float32Array(T*2),w=[];for(let oe=0;oe<=p;oe++)for(let xe=0;xe<=g;xe++){let Pe=oe*(g+1)+xe;O[Pe*2]=v+(y-v)*xe/g,O[Pe*2+1]=_+(L-_)*oe/p}for(let oe=0;oe<p;oe++)for(let xe=0;xe<g;xe++){let Pe=oe*(g+1)+xe,Oe=Pe+g+1;w.push(Pe,Oe,Pe+1,Pe+1,Oe,Oe+1)}let b=new ot;b.setAttribute("position",new ct(P,3)),b.setAttribute("stage",new ct(O,2)),b.setIndex(w);let S={map:{value:m},uFade:{value:1},uBanner:{value:0},uPanel:{value:0}},D=new ht({uniforms:S,vertexShader:Mb,fragmentShader:bb,transparent:!0,depthWrite:!0,depthTest:!0,blending:Un,blendSrc:Co,blendDst:fn,blendSrcAlpha:lu,blendDstAlpha:fn}),B=new He(b,D);B.name="s3Paint",B.frustumCulled=!1,B.renderOrder=-1,B.visible=!1,i.add(B),a.uniforms.uS3Paint={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS3Paint;").replace("gl_FragColor = max(c, 0.0);",`{ vec4 s3o = texture2D(tDiffuse, vUv); c.rgb = mix(c.rgb, s3o.rgb, clamp(1.0 - s3o.a, 0.0, 1.0) * uS3Paint); c.a = s3o.a; }
      gl_FragColor = max(c, 0.0);`),a.material.needsUpdate=!0,c.uniforms.uS3Paint={value:0},c.material.fragmentShader=c.material.fragmentShader.replace("uniform sampler2D tDiffuse;",`uniform sampler2D tDiffuse;
		uniform float uS3Paint;`).replace("gl_FragColor = texture2D( tDiffuse, vUv );","vec4 s3o = texture2D( tDiffuse, vUv ); gl_FragColor = s3o;").replace("// color space",`gl_FragColor.rgb = mix( gl_FragColor.rgb, s3o.rgb, clamp( 1.0 - s3o.a, 0.0, 1.0 ) * uS3Paint ); gl_FragColor.a = 1.0;
			// color space`),c.material.needsUpdate=!0;let R={uPaintCut:{value:0},uPaintZ:{value:f.cutZ}},U=(h||[]).find(oe=>(oe.geometry.computeBoundingBox(),oe.geometry.boundingBox.min.z<n-5)),N=!1;if(U&&U.material.fragmentShader.includes("  vec2 xz = vTrack;")){let oe=U.material,xe=oe.clone();xe.uniforms={...oe.uniforms,...R},xe.fragmentShader=`uniform float uPaintCut; uniform float uPaintZ;
`+oe.fragmentShader.replace("  vec2 xz = vTrack;",`  vec2 xz = vTrack;
  if (uPaintCut > 0.5 && abs(xz.x) > uSlideHalf + 0.62 && xz.y > uPaintZ && xz.y < uTunnel.x) discard;`),U.material=xe,N=!0}let H=a.material.fragmentShader.includes("uS3Paint")&&c.material.fragmentShader.includes("s3o.rgb"),I=new Bt(40,.5,.1,200),$=new E,Q=new E,le=(oe,xe,Pe)=>{let Oe=Math.min(1,Math.max(0,(Pe-oe)/(xe-oe)));return Oe*Oe*(3-2*Oe)},Ae=(oe,xe,Pe)=>{let Oe=F=>{let Ee=oe.y+xe.y*F,te=oe.z+xe.z*F;return Ee<d.baseHeight(u,0,Math.min(te,n-.5))-f.groundBelow},ee=.3,ce=null;for(let F=.3;F<=Pe;F+=.25){if(Oe(F)){ce=F;break}ee=F}if(ce===null)return Pe;for(let F=0;F<20;F++){let Ee=(ee+ce)/2;Oe(Ee)?ce=Ee:ee=Ee}return ce},be=new Float32Array(T),Z=0,ie=!1,Te=null,he=null;return t.push((oe,xe,Pe)=>{if(!ie&&Pe==="intro"){ie=!0,I.fov=e.aspect>=.5?e.fov:Ke.radToDeg(2*Math.atan(Math.tan(Ke.degToRad(e.fov)/2)*e.aspect/.5)),I.position.copy(e.position),I.quaternion.copy(e.quaternion),I.updateProjectionMatrix(),I.updateMatrixWorld(!0);let F=I.position,Ee=ue=>(ue-F.z)/Math.max($.z,1e-4);for(let ue=0;ue<T;ue++){let pe=O[ue*2],Le=O[ue*2+1];$.set(pe/538*2-1,1-Le/1076*2,.5).unproject(I).sub(F).normalize();let ye=1-le(.8,1.3,((pe-52)/120)**2+((Le-582)/135)**2),C=le(368,410,pe)*le(395,430,Le)*(1-le(780,820,Le)),M=Math.min(1,1-le(60,95,pe)+le(445,480,pe))*le(50,80,Le)*(1-le(430,470,Le))*(1-Math.max(ye,C)),z=Math.max(.05,1-Math.max(ye,C,M)),G=1/((ye/Ee(f.brush)+C/Ee(f.machinery)+M/Ee(f.towers)+z/Ee(f.far))/(ye+C+M+z)),q=Math.max(ye,C,M);$.y<-1e-4&&(G=G*q+Math.min(G,Ae(F,$,G))*(1-q)),Q.copy(F).addScaledVector($,G),be[ue]=G,P[ue*3]=Q.x,P[ue*3+1]=Q.y,P[ue*3+2]=Q.z}let te=[];for(let ue=0;ue<p;ue++)for(let pe=0;pe<g;pe++){let Le=ue*(g+1)+pe,ye=Le+g+1,C=[Le,Le+1,ye,ye+1].map(M=>be[M]);Math.max(...C)/Math.min(...C)<f.tear&&te.push(Le,ye,Le+1,Le+1,ye,ye+1)}b.setIndex(te),Z=w.length/6-te.length/6,b.attributes.position.needsUpdate=!0,b.computeBoundingSphere(),B.visible=!0}Pe==="running"&&Te===null&&(Te=xe);let Oe=Te===null?-1:xe-Te,ee=Oe<0?0:le(0,.45,Oe);S.uBanner.value=ee,S.uPanel.value=ee,S.uFade.value=1-le(f.fadeFrom,f.fadeTo,e.position.z);let ce=ie&&S.uFade.value>.001&&e.position.z<n;B.visible=ce,D.depthWrite=S.uFade.value>.999,a.uniforms.uS3Paint.value=c.uniforms.uS3Paint.value=ce?1:0,R.uPaintCut.value=ce?1:0,l&&(ce?he===null&&(he=l.enabled,l.enabled=!1):he!==null&&(l.enabled=he,he=null))}),{grid:[g,p],hidden:x.length,passesPatched:H,moatCut:N,depths:{...f},get tornCells(){return Z}}}var Mb=`
attribute vec2 stage;
varying vec2 vStage;
void main() { vStage = stage; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,bb=`
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
`;var pi=!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)));function ms(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Xl={1:"models/roller_candidate_1.glb",2:"models/roller_candidate_2.glb"},Qo=typeof window>"u"?null:String(window.__BW_ROLLER__||(location.search.match(/[?&]roller=(\d)/)||[])[1]||"")||null,Nm=Eb()&&Xl[Qo]?wb(Xl[Qo]):null;function Eb(){return!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)))}async function wb(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}var Sb={at:[-2.7,null,-6.4],yaw:-50,length:2.7,spin:-1.4,feetY:.4};function Jr(i,e){let t=Math.random;Math.random=i;try{return e()}finally{Math.random=t}}async function zm(i,e){let t=Math.random;Math.random=i;try{return await e()}finally{Math.random=t}}var Jo=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Hm(i){let{scene:e,env:t,TR:n,L:s,W:r,mascot:o,camera:a,Particles:l,fxScale:c,waterU:h,grade:u,bubbles:d,rollers:f,sideMachinery:m,setSideMachinery:x,fur:g,mascotModel:p}=i,v=ms(377827),y=new $e;y.name="openingLook",e.add(y);let _=r.WATER+r.AXIS_H,L=s.tunnelStart,T=[],P=new ft({color:16762194,metalness:1,roughness:.17,envMap:t,envMapIntensity:1.55,emissive:4860416,emissiveIntensity:.45}),O=new ft({color:15242798,metalness:1,roughness:.26,envMap:t,envMapIntensity:1.35,emissive:3808256,emissiveIntensity:.5}),w=new ft({color:2759290,metalness:.1,roughness:.34,envMap:t,envMapIntensity:.9,emissive:1181247,emissiveIntensity:.5,side:gt});if(Rn.portal){let M=new $e;M.name="washerDoor",M.position.set(0,_,0),y.add(M);let z=k=>(k.rotateX(Math.PI/2),k),V=new He(new jt(2.74,.25,28,140),P);V.position.z=2.72,M.add(V);let G=new He(new jt(3.02,.075,14,140),O);G.position.z=2.62,M.add(G);let q=new He(new jt(2.5,.06,12,140),O);q.position.z=2.98,M.add(q);let fe=new nn(new mn(.075,14,10),O,28),ve=new Re;for(let k=0;k<28;k++){let ge=k/28*Math.PI*2;fe.setMatrixAt(k,ve.makeTranslation(Math.cos(ge)*2.76,Math.sin(ge)*2.76,2.47))}M.add(fe);let me=[[2.56,3.02],[2.47,3.12],[2.5,3.24],[2.41,3.36],[2.44,3.48],[2.35,3.6],[2.37,3.7],[2.27,3.8],[2.24,3.88]],Ie=z(new Hr(me.map(([k,ge])=>new re(k,ge)),140));M.add(new He(Ie,w));let ae=[new _e(.08,1,1.9),new _e(.4,1.35,2.1),new _e(.08,1,1.9)],se=[];[[2.43,3.15],[2.39,3.4],[2.31,3.64]].forEach(([k,ge],K)=>{let ne=new Pt({color:ae[K].clone()}),De=new He(new jt(k,.022,8,140),ne);De.position.z=ge,M.add(De),se.push({mat:ne,base:ae[K],u:ge})});let de=new ht({uniforms:{uColor:{value:new _e(.25,.95,1.6)},uGain:{value:1}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uGain; varying vec2 vP; void main() { float r = length(vP); float k = exp(-pow((r - 2.26) / 0.04, 2.0)); gl_FragColor = vec4(uColor * k * uGain, 1.0); }",transparent:!0,blending:dn,depthWrite:!1,side:gt}),we=new He(new Bs(2.2,2.34,140,1),de);we.position.z=3.87,we.renderOrder=3,M.add(we);let Me=new ht({uniforms:{uWall:{value:new _e(.66,.56,.93)},uShade:{value:new _e(.2,.13,.45)}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uWall, uShade; varying vec2 vP;
        void main() {
          float r = length(vP);
          float shade = 1.0 - smoothstep(2.95, 3.35, r);                 // soft shadow next to the gold ring
          vec3 c = mix(uWall, uShade, shade * 0.55);
          c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);               // a little lighter toward the top
          c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));      // a dark outline right at the ring
          float a = 1.0 - smoothstep(3.55, 3.92, r);                     // fades into the castle's own wall
          gl_FragColor = vec4(c * a, a);
        }`,transparent:!0,depthWrite:!1,blending:Un,blendSrc:Gn,blendDst:fn,side:gt}),Ye=new He(new Bs(2.93,3.92,160,1),Me);Ye.position.z=.86,Ye.renderOrder=1,M.add(Ye);let qe=new Ri({map:Lb(),color:new _e(2.2,2,1.6),transparent:!0,blending:dn,depthWrite:!1}),it=[];for(let k=0;k<7;k++){let ge=.35+k*.36+v()*.2,K=new Qi(qe.clone());K.position.set(Math.cos(ge)*2.9,Math.sin(ge)*2.9,2.45),K.renderOrder=4,M.add(K),it.push({sp:K,ph:v()*6.28,rate:1.3+v()*1.4})}T.push((k,ge)=>{for(let K of se)K.mat.color.copy(K.base).multiplyScalar(.82+.25*Math.sin(ge*2.6-K.u*2.2));de.uniforms.uGain.value=.8+.2*Math.sin(ge*1.7);for(let K of it){let ne=Math.pow(Math.max(0,Math.sin(ge*K.rate+K.ph)),8);K.sp.scale.setScalar(.05+.42*ne),K.sp.material.opacity=ne}})}let b=new l(700);b.u.uScale=c;let S=new ht({uniforms:{uTime:{value:0}},vertexShader:Cb,fragmentShader:Pb}),D=64,B=new nn(Ib(v),S,D);B.frustumCulled=!1,B.name="mascotFoam",y.add(B);let R=[];for(let M=0;M<D;M++){let z=M>=40,V=z?Math.PI+(v()<.5?-1:1)*(.55+v()*1.15):M/40*Math.PI*2+v()*.12;!z&&Math.abs((V-Math.PI+Math.PI*3)%(Math.PI*2)-Math.PI)<.6&&(V=Math.PI+(v()<.5?-1:1)*(.6+v()*.7));let G=z?.6+Math.pow(v(),.8)*.45:.42+v()*.08;R.push({a:V,r:G,s:z?.03+v()*.04:.055+v()*.05,ph:v()*6.28,spin:v()*6.28,outer:z,drift:v()})}let U=new Tt,N=new Mn,H=new E,I=new E,$=new Re,Q={P:new E,R:new E,U:new E,T:new E},le=o.x,Ae={side:0,wall:0,puff:0,bow:0},be=M=>1-Jo(L-3.5,L-.8,M),Z=(M,z)=>{let V=o,G=M-V.x,q=z-V.z,fe=V.speed/r.CRUISE,ve=V.downhill||0,me=Math.hypot(G,q*.85),Ie=Jo(-.3,.5,q),ae=Math.exp(-(((me-.6)/.17)**2))*(.06+.06*fe+.05*ve)*(.55+.75*Ie),se=-Math.exp(-me*me*9)*.04,de=Math.min(1,Math.max(0,-q/(2.4+2.6*fe))),we=.6+de*(.8+.7*fe),Me=Math.exp(-(((Math.abs(G-V.xv*.12*de)-we)/.15)**2))*(q<=0?1:0)*(1-de)*(.02+.07*fe);return ae+se+Me},ie=(M,z,V)=>r.surface(s,M,z,V)+Z(M,z);T.push((M,z,V)=>{let G=o,q=V==="running",fe=Rn.foam?be(G.z):0,ve=r.surface(s,G.x,G.z,z)+r.FLOAT_H,me=Math.max(0,G.yAbs-ve),Ie=fe*(1-Jo(.08,.45,me)),ae=Math.min(1.4,G.speed/r.CRUISE);le+=(G.x-le)*Math.min(1,M*5);for(let se=0;se<D;se++){let de=R[se],we=q?(z*(1.1+1.4*de.drift)+de.drift)%1:0,Me=we*ae*(de.outer?.9:.5),qe=(de.outer?le:G.x)+Math.sin(de.a)*de.r*(1+.25*ae*we),it=G.z+Math.cos(de.a)*de.r*.85-Me,k=ie(qe,it,z),ge=Math.sin(z*2.3+de.ph)*.015,K=q?Math.sin(Math.PI*Math.min(1,we*1.05))*.6+.4:1,ne=de.s*Ie*K*(q?de.outer?.5:.9:1)*(1+.12*Math.sin(z*1.7+de.ph));n.frame(it,Q),I.copy(Q.P).addScaledVector(Q.R,qe).addScaledVector(Q.U,k+.01+ne*.3+ge),N.set(de.spin+z*.4,de.ph+z*.3,0),U.setFromEuler(N),H.set(ne*1.25,ne*.8,ne*1.25),B.setMatrixAt(se,$.compose(I,U,H))}if(B.instanceMatrix.needsUpdate=!0,S.uniforms.uTime.value=z,B.visible=Ie>.001,Ie>.01&&!G.air){for(Ae.side+=(q?20+30*ae:16)*Ie*M;Ae.side>=1;Ae.side--){let se=v()<.5?-1:1,de=(v()-.5)*1.4,we=G.x+se*(.44+v()*.14),Me=G.z+de*.35,Ye=r.surface(s,we,Me,z);b.emitT(we,Ye+.04,Me,se*(.4+v()*.7),1+v()*1.3,G.speed*.6+(v()-.5)*.5,.03+v()*.045,.45+v()*.35,0)}for(Ae.puff+=(q?6:7)*Ie*M;Ae.puff>=1;Ae.puff--){let se=Math.PI+(v()-.5)*2.6,de=.5+v()*.35,we=G.x+Math.sin(se)*de,Me=G.z+Math.cos(se)*de*.85,Ye=r.surface(s,we,Me,z);b.emitT(we,Ye+.03,Me,Math.sin(se)*.12,.12+v()*.12,G.speed*.8,.12+v()*.12,.6+v()*.5,1,.08)}}if(Rn.foam)for(Ae.wall+=30*M;Ae.wall>=1;Ae.wall--){let se=Math.min(L-1.2,G.z-2+v()*18);if(be(se)<.5)continue;let de=v()<.5?-1:1,we=de*(r.SLIDE.half-.04),Me=r.surface(s,we,se,z);b.emitT(we,Me+.05,se,-de*(.2+v()*.5),.8+v()*1.2,1.5+v()*2,.035+v()*.04,.4+v()*.3,0),v()<.25&&b.emitT(we-de*.08,Me+.03,se,-de*.1,.1,2,.1+v()*.08,.5+v()*.4,1,.05)}b.update(M)}),h&&(h.uOpen.value=Rn.foam?1:0);let Te={uTime:{value:0},uAvoid:{value:new E(0,-99,0)}},he=new ht({vertexShader:Ab,fragmentShader:Rb,uniforms:Te,transparent:!0,depthWrite:!1,blending:Un,blendSrc:Gn,blendDst:fn}),oe=M=>{let z=new Hn(2,2),V=new hi;V.index=z.index,V.attributes.position=z.attributes.position,V.attributes.uv=z.attributes.uv,V.setAttribute("inst",new Kt(new Float32Array(M*4),4).setUsage(ks)),V.setAttribute("motion",new Kt(new Float32Array(M*4),4)),V.instanceCount=0;let G=new He(V,he);return G.frustumCulled=!1,G.renderOrder=5,y.add(G),G},xe=null,Pe=!1,Oe=new Bt(40,.5,.1,200),ee=[];if(Rn.bubbles&&d){let M=d.geometry.attributes.inst,z=d.geometry.attributes.phase;for(let V=0;V<M.count;V++)M.getZ(V)>L-.5||(ee.push([M.getX(V),M.getY(V),M.getZ(V),M.getW(V),z.getX(V)]),M.setW(V,0));M.needsUpdate=!0,xe=oe(ee.length+Om.length)}let ce=64,F=Rn.bubbles?oe(ce):null,Ee=[];for(let M=0;M<ce;M++)Ee.push({a:Math.PI+(v()-.5)*3.8,r:.5+Math.pow(v(),1.3)*.7,s:.012+Math.pow(v(),2.2)*.04,ph:v()*6.28});let te=20,ue=Rn.foam?oe(te):null,pe=[];for(let M=0;M<te;M++){let z=M<9,V=z?9:11,G=z?M:M-9,q=z?1.35:1.75,fe=Math.PI+((G+.5)/V*2-1)*q+(v()-.5)*.15;pe.push({a:fe,r:z?.47+v()*.05:.6+v()*.08,s:z?.1+v()*.07:.05+v()*.045,lift:z?.22+v()*.3:.25+v()*.2,ph:v()*6.28,drift:v(),inner:z})}if(T.push((M,z,V)=>{if(Te.uTime.value=z,Te.uAvoid.value.copy(o.root.position),xe&&!Pe&&V==="intro"){Pe=!0;let G=a.aspect;Oe.fov=G>=.5?a.fov:Ke.radToDeg(2*Math.atan(Math.tan(Ke.degToRad(a.fov)/2)*G/.5)),Oe.position.copy(a.position),Oe.quaternion.copy(a.quaternion),Oe.updateProjectionMatrix(),Oe.updateMatrixWorld(!0);let q=Oe.getWorldDirection(new E),fe=new E,ve=xe.geometry.attributes.inst,me=xe.geometry.attributes.motion,Ie=0;for(let se of ee)ve.setXYZW(Ie,se[0],se[1],se[2],se[3]),me.setXYZW(Ie,se[4],0,.02,0),Ie++;let ae=se=>1076/(2*se*Math.tan(Ke.degToRad(Oe.fov)/2));for(let[se,de,we,Me,Ye,qe]of Om){fe.set(se/538*2-1,1-de/1076*2,.5).unproject(Oe).sub(Oe.position).normalize();let it=Oe.position.clone().addScaledVector(fe,we/fe.dot(q));ve.setXYZW(Ie,it.x,it.y,it.z,Me/ae(we)),me.setXYZW(Ie,v()*6.28,Ye,qe,0),Ie++}xe.geometry.instanceCount=Ie,ve.needsUpdate=me.needsUpdate=!0}if(F){let G=o,q=be(G.z)*(G.air?0:1),fe=F.geometry.attributes.inst,ve=F.geometry.attributes.motion;for(let me=0;me<ce;me++){let Ie=Ee[me],ae=V==="running"?(z*.9+Ie.ph)%1*(G.speed/r.CRUISE):0,se=le+Math.sin(Ie.a)*Ie.r,de=G.z+Math.cos(Ie.a)*Ie.r*.85-ae*1.2,we=ie(se,de,z);n.frame(de,Q),I.copy(Q.P).addScaledVector(Q.R,se).addScaledVector(Q.U,we+Ie.s*.9),fe.setXYZW(me,I.x,I.y,I.z,Ie.s*q),ve.setXYZW(me,Ie.ph,0,0,-1)}F.geometry.instanceCount=ce,fe.needsUpdate=!0,ve.needsUpdate=!0}if(ue){let G=o,q=V==="running",fe=Math.min(1.4,G.speed/r.CRUISE),ve=Math.max(0,G.yAbs-(r.surface(s,G.x,G.z,z)+r.FLOAT_H)),me=be(G.z)*(1-Jo(.06,.35,ve)),Ie=ue.geometry.attributes.inst,ae=ue.geometry.attributes.motion;for(let se=0;se<te;se++){let de=pe[se],we=q?(z*(.7+.6*de.drift)+de.drift)%1:0,Me=we*fe*(de.inner?.35:.6),Ye=q?.55+.45*Math.sin(Math.PI*Math.min(1,we*1.1)):1,qe=de.inner?G.x:le,it=1+.06*Math.sin(z*2.1+de.ph),k=qe+Math.sin(de.a)*de.r*(1+.15*fe*we),ge=G.z+Math.cos(de.a)*de.r*.85-Me,K=de.s*me*Ye*it;n.frame(ge,Q),I.copy(Q.P).addScaledVector(Q.R,k).addScaledVector(Q.U,ie(k,ge,z)+K*de.lift),Ie.setXYZW(se,I.x,I.y,I.z,K),ae.setXYZW(se,de.ph,0,0,1)}ue.geometry.instanceCount=te,ue.renderOrder=6,Ie.needsUpdate=!0,ae.needsUpdate=!0}}),Rn.brushes){if(x){let z={...vd.machinery,at:[...vd.machinery.at]},V=x(z);for(let G=0;G<20&&!(V>=Bm);G++)z.at[0]+=.03,V=x(z);i.machineryInnerX=V}m&&m.traverse(z=>{z.isMesh&&(z.material=C(z.material,"machinery","face",z.geometry))}),f.filter(z=>z.centre.z<L).forEach((z,V)=>{let G=null;z.g.traverse(fe=>{fe.isMesh&&(!G||fe.geometry.attributes.position.count>G.geometry.attributes.position.count)&&(G=fe)}),G&&(G.material=C(G.material,"roller"+V,"roller",G.geometry));let q=vd.rollers[V];q&&q.hide?z.g.visible=!1:q&&Le(z,q)})}function Le(M,z){let V=new Wt,G=new E,q=new E,fe=M.g.children[0];M.g.remove(fe),fe.updateMatrixWorld(!0),V.setFromObject(fe),V.getSize(G),V.getCenter(q),M.g.add(fe);let ve=z.d/Math.max(G.x,G.z),me=new E(...z.axis).normalize(),Ie=n.map(z.at[0],z.at[1],z.at[2]);M.m0=new Re().compose(Ie,new Tt().setFromUnitVectors(new E(0,1,0),me),new E(ve,ve,ve)).multiply(new Re().makeTranslation(-q.x,-q.y,-q.z)),M.centre=Ie,M.axis=me}if(Rn.slide&&e.traverse(M=>{if(M.isMesh&&M.material&&M.material.isMeshStandardMaterial&&M.material.color.getHex()===15128831){let z=M.material.clone();z.color.set(9425663),z.roughness=.16,z.metalness=.1,z.envMapIntensity=1.35,z.emissive.set(1929176),z.emissiveIntensity=.35,M.material=z}}),Rn.mascot&&p){let M=new E(...Fm.stretch);p.scale.multiply(M),p.position.multiply(M),g&&(g.uSpike.value=Fm.spike)}u&&(u.uniforms.uOpen.value=0),T.push(()=>{if(!u)return;let M=a.position.z;u.uniforms.uOpen.value=Rn.light?1-Jo(-6,1.2,M):0});async function ye(){if(Cm&&(window.__bwS3=await Lm({scene:e,env:t,axisY:_,tunnelStart:L,oldCastle:i.castle,sideMachinery:m,staticBubbles:xe,camera:a,updaters:T,mascot:o,L:s,W:r,renderPass:i.renderPass,rollers:f,grade:u,bloomPass:i.bloomPass,outputPass:i.outputPass,waterSheets:i.waterSheets,TR:n,bumpMascot:i.bumpMascot,drumMeshes:i.drumMeshes,exitLight:i.exitLight,r2:i.r2})),!Nm)return;let M=await Nm;if(!M){i.rollerCandidate={file:Xl[Qo],error:"not found"};return}let z=await new hs().parseAsync(M,""),V=null;z.scene.traverse(Ce=>{Ce.isMesh&&!V&&(V=Ce)});let G=V.geometry,q=G.attributes.position,fe=G.index.array,ve=fe.length/3,me=Ce=>`${Math.round(q.getX(Ce)*1e4)},${Math.round(q.getY(Ce)*1e4)},${Math.round(q.getZ(Ce)*1e4)}`,Ie=new Map,ae=new Int32Array(q.count);for(let Ce=0;Ce<q.count;Ce++){let Je=me(Ce);Ie.has(Je)||Ie.set(Je,Ie.size),ae[Ce]=Ie.get(Je)}let se=new Int32Array(Ie.size).map((Ce,Je)=>Je),de=Ce=>{for(;se[Ce]!==Ce;)Ce=se[Ce]=se[se[Ce]];return Ce};for(let Ce=0;Ce<ve;Ce++){let Je=de(ae[fe[Ce*3]]);se[de(ae[fe[Ce*3+1]])]=Je,se[de(ae[fe[Ce*3+2]])]=Je}let we=new Map;for(let Ce=0;Ce<ve;Ce++){let Je=de(ae[fe[Ce*3]]);we.has(Je)||we.set(Je,[]),we.get(Je).push(fe[Ce*3],fe[Ce*3+1],fe[Ce*3+2])}let Me=[...we.values()].sort((Ce,Je)=>Je.length-Ce.length),Ye=(()=>{let Ce=V.material.metalnessMap;if(!Ce||!Ce.image)return null;let Je=document.createElement("canvas");Je.width=Ce.image.width,Je.height=Ce.image.height;let Jt=Je.getContext("2d");Jt.drawImage(Ce.image,0,0);let zi=Jt.getImageData(0,0,Je.width,Je.height).data,En=G.attributes.uv;return(Nt,A,W)=>{let J=(En.getX(Nt)+En.getX(A)+En.getX(W))/3,j=(En.getY(Nt)+En.getY(A)+En.getY(W))/3;Ce.flipY&&(j=1-j);let X=Math.min(Je.width-1,Math.max(0,Math.floor(J*Je.width))),Se=Math.min(Je.height-1,Math.max(0,Math.floor(j*Je.height)));return zi[(Se*Je.width+X)*4+2]/255}})(),qe=0;if(Ye){let Ce=Me[0],Je=Nt=>(q.getZ(Ce[Nt])+q.getZ(Ce[Nt+1])+q.getZ(Ce[Nt+2]))/3,Jt=[];for(let Nt=0;Nt<Ce.length;Nt+=3)Ye(Ce[Nt],Ce[Nt+1],Ce[Nt+2])<.5&&Jt.push(Je(Nt));Jt.sort((Nt,A)=>Nt-A);let zi=Jt[Math.floor(Jt.length*.02)],En=Jt[Math.floor(Jt.length*.98)];for(let Nt=0;Nt<Ce.length;Nt+=3)Ye(Ce[Nt],Ce[Nt+1],Ce[Nt+2])>.5&&(Je(Nt)<zi||Je(Nt)>En)&&qe++}let it=Ce=>{let Je=new ot;for(let Jt of Object.keys(G.attributes))Je.setAttribute(Jt,G.attributes[Jt]);return Je.setIndex(Ce),Je.computeBoundingBox(),Je.computeBoundingSphere(),Je},k=it(Me[0]),ge=Me.length>1?it(Me.slice(1).flat()):null,K=!!ge&&qe<10,ne=k.boundingBox,De=new E((ne.min.x+ne.max.x)/2,(ne.min.y+ne.max.y)/2,0);G.computeBoundingBox();let Fe=G.boundingBox,Qe=Fe.getSize(new E),Ct=V.material,$t=new ft({map:Ct.map,metalnessMap:Ct.metalnessMap,roughnessMap:Ct.roughnessMap,normalMap:Ct.normalMap||null,metalness:1,roughness:1,envMap:t,envMapIntensity:1.15,emissive:16777215,emissiveMap:Ct.map,emissiveIntensity:.2,side:gt});$t.customProgramCacheKey=()=>"opening:rollerCandidate";let lt=Sb,vn=lt.length/Qe.z,qt=new $e;qt.name="rollerCandidate"+Qo;let Oi=new $e;Oi.scale.setScalar(vn),qt.add(Oi);let _s=new $e;_s.position.copy(De),Oi.add(_s);let ni=new He(k,$t);if(ni.position.copy(De).negate(),_s.add(ni),ge){let Ce=new He(ge,$t);Oi.add(Ce)}y.add(qt);let Qs=()=>{let Ce=lt.length/Qe.z;Oi.scale.setScalar(Ce),qt.position.set(lt.at[0],lt.feetY-Fe.min.y*Ce,lt.at[2]),qt.rotation.y=Ke.degToRad(lt.yaw)};Qs();let io=()=>{qt.updateMatrixWorld(!0);let Ce=1/0,Je=new E;return qt.traverse(Jt=>{if(!Jt.isMesh)return;let zi=Jt.geometry.attributes.position;for(let En=0;En<zi.count;En+=3)Je.fromBufferAttribute(zi,En).applyMatrix4(Jt.matrixWorld),Je.z<L&&Je.y<2.6&&(Ce=Math.min(Ce,Math.abs(Je.x)))}),Ce},so=()=>{let Ce=io();for(let Je=0;Je<30&&Ce<Bm;Je++)qt.position.x+=.04*Math.sign(qt.position.x||-1),Ce=io();return Ce},Bi=so();window.__bwRoller=Ce=>(Object.assign(lt,Ce),Qs(),Bi=so(),i.rollerCandidate={...i.rollerCandidate,at:qt.position.toArray().map(Je=>+Je.toFixed(2)),nearestToLanes:+Bi.toFixed(2)},i.rollerCandidate);let ro=f.filter(Ce=>Ce.centre.z<L);ro[1]&&(ro[1].g.visible=!1),i.rollerCandidate={file:Xl[Qo],pieces:we.size,drumTris:Me[0].length/3,bracketTris:ge?ge.index.count/3:0,fusedGoldTris:qe,spinnable:K,scale:+vn.toFixed(3),diameter:+(Math.max(Qe.x,Qe.y)*vn).toFixed(2),length:lt.length,at:qt.position.toArray().map(Ce=>+Ce.toFixed(2)),nearestToLanes:+Bi.toFixed(2)},K&&T.push(Ce=>{_s.rotation.z+=lt.spin*Ce})}return bm&&(window.__bwPhaseA=Sm({scene:e,castle:i.castle,waterSheets:i.waterSheets,axisY:_,tunnelStart:L})),{root:y,loadExtras:ye,update(M,z,V){for(let G of T)G(M,z,V)}};function C(M,z,V,G){let q=M.clone(),fe=M.onBeforeCompile,ve=M.customProgramCacheKey.bind(M),me=V==="face";me&&(q.envMapIntensity=1.4,q.emissiveIntensity=.15),G.computeBoundingBox();let Ie=G.boundingBox,ae=Ie.getCenter(new E),se=Ie.getSize(new E),de=me?Math.max(se.x,se.y)*.5:Math.max(se.x,se.z)*.5;return q.onBeforeCompile=(we,Me)=>{fe.call(M,we,Me),we.vertexShader=we.vertexShader.replace("void main() {",`varying vec3 vFibreP;
void main() {
  vFibreP = position;`),we.fragmentShader=we.fragmentShader.replace("void main() {",`varying vec3 vFibreP;
${Tb}
void main() {`);let Ye=me?"#include <emissivemap_fragment>":"#include <alphamap_fragment>",qe=`(vFibreP - vec3(${ae.x.toFixed(4)}, ${ae.y.toFixed(4)}, ${ae.z.toFixed(4)})) / ${de.toFixed(4)}`,it=me?"vec3(atan(q.y, q.x) * 160.0, length(q.xy) * 9.0, q.z * 30.0)":"vec3(atan(q.z, q.x) * 150.0, q.y * 120.0, length(q.xz) * 8.0)";we.fragmentShader=we.fragmentShader.replace(Ye,`${Ye}
        { vec3 cc = diffuseColor.rgb;
          float mx = max(cc.r, max(cc.g, cc.b));
          float soft = ${me?"(1.0 - smoothstep(0.3, 0.6, metalnessFactor))":"1.0"} * smoothstep(0.04, 0.2, mx);
          vec3 q = ${qe};
          vec3 fc = ${it};
          float strand = fibreNoise(fc) * 0.65 + fibreNoise(fc * vec3(2.1, 1.7, 1.0) + 7.3) * 0.35;
          float f = mix(0.74, 1.18, smoothstep(0.2, 0.8, strand));
          diffuseColor.rgb *= mix(1.0, f, soft * 0.85);
          ${me?"totalEmissiveRadiance *= mix(1.0, f, soft);":""} }`)},q.customProgramCacheKey=()=>ve()+"|fibre:"+z,q}}var Rn={portal:pi,foam:pi,bubbles:pi,brushes:pi,slide:pi,mascot:pi,light:pi,art:pi};if(typeof window<"u"&&Array.isArray(window.__BW_OPENING_OFF__))for(let i of window.__BW_OPENING_OFF__)Rn[i]=!1;var Fm={stretch:[.95,1.07,.95],spike:1},Om=[[512,655,7.5,30,0,.03],[36,815,5.4,52,0,.03],[503,848,5.2,46,0,.03],[165,592,13,26,0,.04],[92,470,15,20,0,.04],[120,700,9,14,.12,.05],[420,720,9,12,.1,.05],[205,440,22,8,.15,.06],[345,430,22,9,.12,.06],[372,540,18,10,.1,.05],[160,520,18,9,.14,.05],[60,640,9,16,.08,.04],[250,400,26,6,.1,.05],[300,395,26,5,.12,.05],[24,560,12,22,0,.03]],Bm=1.18,vd={machinery:{at:[2.9,.92,-9.7],yaw:.1,height:3.1},rollers:[{hide:!0},{at:[-2.7,1.1,-5.8],axis:[.12,1,.25],d:1.35}]},Tb=`
float fibreHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float fibreNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(fibreHash(i), fibreHash(i + vec3(1, 0, 0)), f.x), mix(fibreHash(i + vec3(0, 1, 0)), fibreHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(fibreHash(i + vec3(0, 0, 1)), fibreHash(i + vec3(1, 0, 1)), f.x), mix(fibreHash(i + vec3(0, 1, 1)), fibreHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
`,Ab=`
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
`,Rb=`
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
`,Cb=`
varying vec3 vN; varying vec3 vW;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Pb=`
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
`;function Ib(i){let e=new kr(1,4),t=e.attributes.position,n=new E,s=4+i()*2,r=5+i()*2;for(let o=0;o<t.count;o++){n.fromBufferAttribute(t,o);let a=1+.1*Math.sin(n.x*s+n.y*3.1)*Math.sin(n.y*r+n.z*3.7)+.035*Math.sin(n.z*9+n.x*7);n.multiplyScalar(a),t.setXYZ(o,n.x,n.y,n.z)}return e.computeVertexNormals(),e}function Lb(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.moveTo(32,2),e.lineTo(35,29),e.lineTo(62,32),e.lineTo(35,35),e.lineTo(32,62),e.lineTo(29,35),e.lineTo(2,32),e.lineTo(29,29),e.closePath(),e.fill();let n=new ci(i);return n.colorSpace=St,n}var Vm={radius:.3,half:.05,bright:[1,.78,.26],field:[.96,.6,.12],edge:[.95,.52,.08],metalness:.75,roughness:.26,glow:.3};function xd(i="high"){let e=Vm,t=i==="high",n=[[0,.03],[.188,.03],[.2,.038],[.214,.044],[.228,.038],[.237,.034],[.248,.047],[.266,.052],[.287,.047],[.299,.032]],s=[...n,...n.slice().reverse().map(([d,f])=>[d,-f])].map(([d,f])=>new re(d,f));s.reverse();let r=new Hr(s,t?56:28).toNonIndexed();r.rotateX(Math.PI/2),km(r,(d,f,m)=>{let x=Math.hypot(d,f);return Math.abs(m)<.034&&x>.29?e.edge:x<.196?e.field:e.bright});let o=[],a={depth:.004,bevelEnabled:!0,bevelThickness:.008,bevelSize:.007,bevelSegments:t?3:1,curveSegments:t?14:6},l=new ts;l.moveTo(0,.03),l.bezierCurveTo(.058,.03,.084,-.008,.084,-.042),l.bezierCurveTo(.084,-.076,.06,-.094,.036,-.09),l.bezierCurveTo(.016,-.087,.009,-.1,0,-.1),l.bezierCurveTo(-.009,-.1,-.016,-.087,-.036,-.09),l.bezierCurveTo(-.06,-.094,-.084,-.076,-.084,-.042),l.bezierCurveTo(-.084,-.008,-.058,.03,0,.03),o.push(new Os(l,a));for(let[d,f,m,x,g]of[[-.106,.04,.03,.04,.5],[-.039,.093,.031,.042,.14],[.039,.093,.031,.042,-.14],[.106,.04,.03,.04,-.5]]){let p=new ts;p.absellipse(0,0,m,x,0,Math.PI*2,!1,0);let v=new Os(p,a);v.rotateZ(g),v.translate(d,f,0),o.push(v)}let c=Cu(o.map(d=>(d.deleteAttribute("uv"),d.index?d.toNonIndexed():d)));c.translate(0,-.005,.03+a.bevelThickness-.002),km(c,()=>e.bright);let h=c.clone();h.rotateY(Math.PI),r.deleteAttribute("uv");let u=Cu([r,c,h]);return u.computeBoundingSphere(),u}function km(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3);for(let s=0;s<t.count;s++)n.set(e(t.getX(s),t.getY(s),t.getZ(s)),s*3);i.setAttribute("color",new ct(n,3))}function Gm(i){let e=Vm,t=new ft({vertexColors:!0,metalness:e.metalness,roughness:e.roughness,envMap:i,envMapIntensity:1.35});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${e.glow.toFixed(3)} + vec3(1.0, 0.9, 0.55) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.35;`)},t.customProgramCacheKey=()=>"pawCoin",t}var xt=!!At.round2,Yt={hearts:5,hurtGuard:1,outOfHearts:1.4,blasts:3,blastTime:3,blastReach:13,turbos:3,turboTime:2.5,turboSpeed:1.45,coinH:.7,sockH:.88,gemH:.85,coinLines:[[1,4.4,5],[0,10.8,3],[1,16.8,2],[2,18.6,3],[1,23.4,5],[0,29.8,3]],coinStep:1,socks:[[1,9.6],[0,14],[2,21.8],[1,28.6],[0,33]],gems:[[1,15.6],[0,34.2]]},xs={},qm=!!window.__BW_TEST__,Td=!!window.__BW_SIDE__||/[?&]side(=|&|$)/.test(location.search),rc=!!window.__BW_TOUCHES__||/[?&]touches(=|&|$)/.test(location.search);Td&&document.body.classList.add("side");var tt=i=>document.getElementById(i),gs=i=>new E(i[0],i[1],i[2]),Xt=i=>new _e(i),an=tt("stage"),Db=tt("view"),Fi=new il({canvas:Db,antialias:!1,powerPreference:"high-performance"});Fi.toneMapping=Wo;Fi.toneMappingExposure=1.05;var Ni=Math.min(window.devicePixelRatio||1,1.6);Fi.setPixelRatio(Ni);var Rt=new No,on=new Bt(55,.5,.1,200),ti=new Ol(Fi);ti.addPass(new Bl(Rt,on));var to=new qr(new re(256,512),.32,.45,.97);ti.addPass(to);var Ym=new Xr(dm);ti.addPass(Ym);ti.addPass(new zl);Rt.add(new El(16771583,7252223,1.1));var Cd=new Hs(16773862,1.7);Cd.position.set(-3,6,-4);Rt.add(Cd);var Ub=Cd.position.clone().normalize(),$m=new Hs(13625599,1.3);$m.position.set(2,7,12);Rt.add($m);var Ad={layout:"models/layout.json",castle:"models/castle.glb",drum:"models/drum.glb",mascot:"models/mascot.glb",roller:"models/roller.glb",gem:"models/gem.glb",sock:"models/sock.glb",machinery:"models/machinery.glb",tower:"models/tower.glb",gear:"models/gear.glb",pipe:"models/pipe.glb",crown:"models/crown.glb"},Zm={};function Nb(){let i=0,e=0;for(let n of Object.values(Zm))i+=n.loaded,e+=n.total||n.loaded;let t=e>0?Math.round(i/e*100):0;tt("loadBar").style.width=t+"%",tt("loadPct").textContent=t+"%"}var Fb=new hs;async function Wm(i,e){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);let n=+t.headers.get("content-length")||0,s=t.body.getReader(),r=[],o=0;for(;;){let{done:c,value:h}=await s.read();if(c)break;r.push(h),o+=h.length,Zm[e]={loaded:o,total:Math.max(n,o)},Nb()}let a=new Uint8Array(o),l=0;for(let c of r)a.set(c,l),l+=c.length;return a}var Ob=window.__BW_MODEL_FORMAT__==="json";async function Bb(i){let e;try{if(Ob)throw new Error("json");e=await Wm(Ad[i],i)}catch{let t=JSON.parse(new TextDecoder().decode(await Wm(Ad[i]+".json",i))),n=atob(t.data);e=new Uint8Array(n.length);for(let s=0;s<n.length;s++)e[s]=n.charCodeAt(s)}return Fb.parseAsync(e.buffer,"")}var Ne,yt,ze={P:new E,R:new E,U:new E,T:new E},Y={phase:"loading",time:0,coins:1280,gems:36,socks:0,sound:!0,collected:{coins:0,gems:0},laps:0};xt&&Object.assign(Y,{hearts:Yt.hearts,blasts:Yt.blasts,turbos:Yt.turbos,paused:!1,blastT:0,turboT:0,guardT:0,outT:-1,knocks:0,restarts:0});var ke={};function zb(i,e={}){let t=new Pt({map:i.map||null,color:16777215,vertexColors:!!e.vertexColors,side:gt}),n=e.saturation??1.15,s=e.brightness??1,r=e.glow??0,o=e.haze,a=e.shade;t.onBeforeCompile=c=>{a&&(c.vertexShader=c.vertexShader.replace("void main() {",`varying vec3 vShadeN; varying vec3 vShadeP;
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
`+e.afterColor)),(e.grade||e.afterColor)&&(c.fragmentShader=c.fragmentShader.replace("void main() {",`${jp}
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
      ${o?`diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${o[3].map(h=>h.toFixed(3)).join(", ")}), ${o[0].toFixed(3)} * smoothstep(${o[1].toFixed(2)}, ${o[2].toFixed(2)}, vHazeDepth));`:""}`)};let l="baked:"+JSON.stringify([n,s,r,e.lift??0,o||0,a||0,e.grade||"",e.afterColor||""]);return t.customProgramCacheKey=()=>l,t}var Zs,Ks,je,ut,vt,ra,js,Kl=null,jl=[],oa=[],Jl=[],aa=[],Km=[],Ql=new Re,Hb=new Re,ec=new Tt;function kb(){let i=new He(new mn(170,32,16),new ht({vertexShader:om,fragmentShader:am,side:hn,depthWrite:!1,uniforms:{uTop:{value:Xt(12759295)},uMid:{value:Xt(15128319)},uHorizon:{value:Xt(16445183)},uBottom:{value:Xt(9420031)}}}));i.renderOrder=-10,Rt.add(i);let e=new No,t=i.clone();t.material=i.material.clone(),t.material.uniforms={uTop:{value:Xt(7299008)},uMid:{value:Xt(10127064)},uHorizon:{value:Xt(14072048)},uBottom:{value:Xt(2306159)}},e.add(t);for(let[s,r,o]of[[[0,60,10],[90,50],[3.2,3,3.2]],[[-70,25,20],[40,60],[2.6,1.6,2.4]],[[70,20,10],[40,60],[1.4,2.4,3]],[[0,18,-80],[70,30],[2,1.9,2.2]],[[0,10,85],[60,25],[1.6,2,2.8]]]){let a=new He(new Hn(...r),new Pt({color:new _e(...o),side:gt}));a.position.set(...s),a.lookAt(0,0,0),e.add(a)}let n=new Fr(Fi);ke.env=n.fromScene(e,.02,.1,400).texture,ke.gold=new ft({color:16760645,metalness:1,roughness:.22,envMap:ke.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.35})}function oc(i){let e=0;return i.traverse(t=>{if(!t.isMesh)return;t.geometry.attributes.normal||(t.geometry.computeVertexNormals(),e+=1e6);let n=t.geometry.attributes.normal,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){let o=n.getX(r),a=n.getY(r),l=n.getZ(r),c=Math.hypot(o,a,l);c>1e-4?(o/=c,a/=c,l/=c):(o=0,a=1,l=0,e++),s[r*3]=o,s[r*3+1]=a,s[r*3+2]=l}t.geometry.setAttribute("normal",new ct(s,3))}),e}function Vb(i,e){let t=new $e;return t.matrixAutoUpdate=!1,t.matrix.fromArray(e),t.add(i),Rt.add(t),t}function Pd(i,e,t){i.traverse(n=>{n.isMesh&&(n.material=zb(n.material,{...e,...t?t(n):{},vertexColors:!!n.geometry.attributes.color}),n.frustumCulled=!0)})}function Gb(){let i=[];for(let r=0;r<=10;r++)i.push(-30+(30-3.2)*Math.pow(r/10,.55));for(let r=1;r<40;r++)i.push(-3.2+6.4*(r/40));for(let r=10;r>=0;r--)i.push(30-(30-3.2)*Math.pow(r/10,.55));let e=(r,o,a,l)=>{let c=Math.ceil((a-o)/l)+1,h=c*r.length,u=new Float32Array(h*3),d=new Float32Array(h*2),f=new Float32Array(h*3),m=new Float32Array(h*3),x=new Float32Array(h*3),g=new Float32Array(h*3),p=[];for(let y=0;y<c;y++){let _=o+(a-o)*y/(c-1);yt.frame(_,ze);for(let L=0;L<r.length;L++){let T=y*r.length+L,P=r[L];d[T*2]=P,d[T*2+1]=_,ze.P.toArray(f,T*3),ze.R.toArray(m,T*3),ze.U.toArray(x,T*3),ze.T.toArray(g,T*3),u[T*3]=ze.P.x+ze.R.x*P,u[T*3+1]=ze.P.y+ze.R.y*P,u[T*3+2]=ze.P.z+ze.R.z*P}}for(let y=0;y<c-1;y++)for(let _=0;_<r.length-1;_++){let L=y*r.length+_,T=L+r.length;p.push(L,T,L+1,T,T+1,L+1)}let v=new ot;v.setAttribute("position",new ct(u,3)),v.setAttribute("aTrack",new ct(d,2));for(let[y,_]of[["aP",f],["aR",m],["aU",x],["aT",g]])v.setAttribute(y,new ct(_,3));return v.setIndex(p),v.computeBoundingSphere(),v.boundingSphere.radius+=3,v},t=[];for(let r=0;r<Xs;r++)t.push(new pt(0,0,-99,0));Ks={uTime:{value:0},uTunnel:{value:new pt(Ne.tunnelStart,Ne.tunnelEnd,Ne.tunnelRadius,Ne.axisHeight)},uRipples:{value:t},uPlayer:{value:new E},uPlayerMove:{value:new E},uFlow:{value:9},uSlideHalf:{value:Gt.half},uDeep:{value:Xt(407256)},uShallow:{value:Xt(2071551)},uTurq:{value:Xt(4123384)},uGlow:{value:Xt(10154751)},uSky:{value:Xt(11126015)},uPink:{value:Xt(16751584)},uGold:{value:Xt(16763994)},uRingA:{value:Xt(16767091)},uRingB:{value:Xt(9234175)},uFog:{value:Xt(13421823)},uSunDir:{value:Ub},uRings:{value:new E(Ne.tunnelStart+.25,Ne.segmentLength-Math.max(.02,Ne.segmentLength*.005),4)},uOpen:{value:0}};let n=new ht({vertexShader:nm,fragmentShader:im,uniforms:Ks}),s=[];for(let r=0;r<=28;r++)s.push(-2.1+4.2*(r/28));Zs=new $e,Zs.add(new He(e(i,Ne.startZ-30,Ne.tunnelStart+2.5,.3),n)),Zs.add(new He(e(s,Ne.tunnelStart-.5,Ne.tunnelEnd+6,.25),n)),Rt.add(Zs)}function Wb(){let i=new ft({color:3107839,metalness:.2,roughness:.12,envMap:ke.env,envMapIntensity:1.6,emissive:666266,emissiveIntensity:.5}),e=new ft({color:15128831,metalness:.15,roughness:.32,envMap:ke.env,envMapIntensity:1,side:gt}),t=new ft({color:15903035,metalness:1,roughness:.3,envMap:ke.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),n=Ne.startZ-24,s=-.6,r=.62,o=Math.floor((s-n)/r)+1,a=new nn(new ui(.22,.26,.5,2,.06),t,o*2),l=new nn(new mn(.055,12,8),i,o*2),c=[[-.06,-.06],[.04,.1],[.14,.2],[.26,.2],[.34,.08],[.36,-.8]],h=0;for(let u of[-1,1]){let d=[],f=[],m=[],x=0;for(let v=n;v<=s+1e-6;v+=.25,x++){let y=Tn(Ne,u*Gt.half,v);for(let[_,L]of c)d.push(u*(Gt.half+_),y+L,v);m.push(new E(u*(Gt.half+.2),y+.26,v))}let g=c.length;for(let v=0;v<x-1;v++)for(let y=0;y<g-1;y++){let _=v*g+y,L=_+g;f.push(_,L,_+1,L,L+1,_+1)}let p=new ot;p.setAttribute("position",new Ze(d,3)),p.setIndex(f),p.computeVertexNormals(),Rt.add(new He(p,e)),Rt.add(new He(new zs(new es(m),m.length*2,.1,14),ke.gold));for(let v=0;v<o;v++,h++){let y=n+v*r,_=Tn(Ne,u*Gt.half,y),L=(Tn(Ne,u*Gt.half,y+.2)-Tn(Ne,u*Gt.half,y-.2))/.4;ec.setFromAxisAngle(new E(1,0,0),-Math.atan(L)),a.setMatrixAt(h,Ql.compose(new E(u*(Gt.half+.36),_+.1,y),ec,new E(1,1,1))),l.setMatrixAt(h,Ql.makeTranslation(u*(Gt.half+.48),_+.1,y))}}Rt.add(a,l)}function jm(i,e,t,n,s=12,r=26){let a=[0],l=new E;for(let p=1;p<=200;p++){let v=p/200,y=new E(0,-e*v*v,i*v);a.push(a[p-1]+y.distanceTo(l)),l=y}let c=a[200],h=[],u=[],d=[],f=[],m=[],x=0;for(let p=0;p<=r;p++){let v=p/r,y=v*c;for(;x<199&&a[x+1]<y;)x++;let _=(x+Math.min(1,Math.max(0,(y-a[x])/Math.max(1e-6,a[x+1]-a[x]))))/200,L=new E(0,-e*_*_,i*_),T=new E(0,-2*e*_,i).normalize(),P=new E(0,T.z,-T.y),O=t+(n-t)*v,w=O*.5,b=O*.35;for(let S=0;S<=s;S++){let D=Math.PI*S/s,B=-Math.cos(D),R=Math.sin(D),U=L.clone().add(new E(B*w,0,0)).addScaledVector(P,R*b),N=new E(B/w,0,0).addScaledVector(P,R/b).normalize();h.push(U.x,U.y,U.z),u.push(N.x,N.y,N.z),d.push(S/s,y),f.push(v)}}for(let p=0;p<r;p++)for(let v=0;v<s;v++){let y=p*(s+1)+v,_=y+s+1;m.push(y,y+1,_,_,y+1,_+1)}let g=new ot;return g.setAttribute("position",new Ze(h,3)),g.setAttribute("normal",new Ze(u,3)),g.setAttribute("uv",new Ze(d,2)),g.setAttribute("progress",new Ze(f,1)),g.setIndex(m),g}function Xb(){let i={uTime:{value:0},uLipSpeed:{value:1.2},uStreakLen:{value:.35},uDeep:{value:Xt(21247)},uBright:{value:Xt(4250623)},uSky:{value:Xt(14268671)},uPink:{value:Xt(16751078)}};Km.push(i);let e=new $e;Rt.add(e),ke.falls=e;let t=new ht({vertexShader:sm,fragmentShader:rm,uniforms:i,transparent:!0,depthWrite:!1,side:gt});ke.fallMat=t;let n=(r,o,a,l)=>{let c=o.clone().sub(r),h=r.y-o.y;c.y=0;let u=new He(jm(Math.max(.02,c.length()),Math.max(.05,h),a,l),t);u.position.copy(r),u.lookAt(r.clone().add(c.lengthSq()>1e-6?c.normalize():new E(0,0,-1))),u.renderOrder=2,e.add(u)},s=(r,o,a)=>{let l=o.clone().sub(r),c=l.length(),h=new He(new pn(a,a,c,16),ke.gold);h.position.copy(r).add(o).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new E(0,1,0),l.normalize()),e.add(h)};for(let r of Ne.waterfalls){let o=gs(r.lip),a=gs(r.basin),l=gs(r.overflow),c=gs(r.landing),h=gs(r.tower),u=r.width,d=u*.42;n(o,a.clone().add(new E(0,-.02,0)),u*.7,u*.85),n(l,c,u*.9,u*1.15),s(o.clone().add(new E(0,d*.45,0)),h.clone().add(new E(0,d*.45,.3)),d);let f=new He(new pn(r.basinRadius,r.basinRadius*.8,.18,24),ke.gold);f.position.copy(a).add(new E(0,-.1,0)),e.add(f);let m=new He(new jt(r.basinRadius,.07,8,32),ke.gold);m.position.copy(a),m.rotation.x=Math.PI/2,e.add(m),s(a.clone().add(new E(0,-.12,0)),gs(r.basinTower).add(new E(0,-.12,.3)),.08),vt.addSource({pos:c.clone().setY(-.6),rate:22,kind:1,spread:u*.5,up:1.6,size:.55}),vt.addSource({pos:c.clone().setY(-.6),rate:30,kind:0,spread:u*.4,up:2.4,size:.12}),vt.addSource({pos:a.clone(),rate:10,kind:1,spread:u*.3,up:.9,size:.35})}}function qb(){let i=new jt(Ne.tunnelRadius*.965,.075,8,72),e=[],t=Ne.segmentLength-Math.max(.02,Ne.segmentLength*.005);for(let s=0;s<3;s++)e.push(Ne.tunnelStart+s*t+.25);e.push(Ne.tunnelEnd-.25),e.forEach((s,r)=>{let o=new He(i,new Pt({color:r%2===0?new _e(2.6,2,.95):new _e(1.4,2.2,2.9)}));o.matrixAutoUpdate=!1,yt.mapMatrix(new Re().makeTranslation(0,0+1.5,s),o.matrix),o.userData.pulse=r*.9,o.userData.base=o.material.color.clone(),Rt.add(o),ke.rings=ke.rings||[],ke.rings.push(o)});let n=(s,r,o,a)=>{let l=new He(new Hn(r,r),o);return l.matrixAutoUpdate=!1,l.renderOrder=a,yt.mapMatrix(new Re().makeTranslation(0,0+1.5,Ne.tunnelEnd+s).multiply(new Re().makeRotationY(Math.PI)),l.matrix),Rt.add(l),l};ke.exitLight=[n(4.5,16,new Pt({map:Yb(),toneMapped:!1}),0)],ke.exitLight[1]=n(1.5,7,new Pt({map:Jm(),color:new _e(.9,1.1,1.4),transparent:!0,blending:dn,depthWrite:!1}),3)}function Yb(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=e.createRadialGradient(256,256,0,256,256,256);t.addColorStop(0,"#ffffff"),t.addColorStop(.22,"#f4fbff"),t.addColorStop(.45,"#bfe9ff"),t.addColorStop(.7,"#d9c4ff"),t.addColorStop(1,"#ffc6ec"),e.fillStyle=t,e.fillRect(0,0,512,512),e.globalCompositeOperation="lighter";for(let s=0;s<18;s++){let r=s/18*Math.PI*2+s%2*.09,o=.05+s%3*.025,a=e.createRadialGradient(256,256,30,256,256,256);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(256,256),e.arc(256,256,256,r-o,r+o),e.closePath(),e.fill()}let n=new ci(i);return n.colorSpace=St,n}function Jm(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new ci(i);return n.colorSpace=St,n}var $b=[{at:[2.55,2.25,-3.4],axis:[-.3,.05,-.95],d:1.8,spin:110},{at:[-2.45,1.3,-5],axis:[.3,.05,-.95],d:1.8,spin:-95}];function Zb(i){Pd(i.scene,{saturation:1.25,brightness:1.1,glow:.9,lift:.08,haze:[.45,6,32,[.78,.86,1]],shade:[.88,.22,.25]}),i.scene.updateMatrixWorld(!0);let e=[];i.scene.traverse(o=>{o.isMesh&&e.push(o)});let t=new Re,n=new Re,s=new E,r=new E;ke.drumMeshes=[];for(let o of Ne.drumSegments){t.fromArray(o);for(let a of e){n.multiplyMatrices(t,a.matrixWorld);let l=a.geometry,c=l.attributes.position,h=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)s.fromBufferAttribute(c,f).applyMatrix4(n),yt.map(s.x,s.y,s.z,r),h[f*3]=r.x,h[f*3+1]=r.y,h[f*3+2]=r.z;let u=new ot;u.setAttribute("position",new ct(h,3));for(let f of["uv","color"])l.attributes[f]&&u.setAttribute(f,l.attributes[f]);u.setIndex(l.index),u.computeVertexNormals(),u.computeBoundingSphere();let d=new He(u,a.material);Rt.add(d),ke.drumMeshes.push(d)}}}function Kb(i){let e=i.scene;oc(e),Pd(e,{saturation:1.25,brightness:1.08,shade:[.8,.38,.45]},r=>{if(!/Bristles/.test(r.material.name))return{};let o=r.geometry.attributes.position,a=0;for(let l=0;l<o.count;l++)a=Math.max(a,Math.hypot(o.getX(l),o.getZ(l)));return{afterColor:Qp(a)}});for(let r of Ne.rollers){if(r.centre[2]<Ne.tunnelStart)continue;let o=new $e;o.matrixAutoUpdate=!1,o.add(e.clone()),Rt.add(o),xt&&(o.visible=!1);let a=gs(r.centre);aa.push({g:o,m0:yt.mapMatrix(new Re().fromArray(r.matrix)),centre:yt.map(a.x,a.y,a.z),axis:yt.dir(r.axis[0],r.axis[1],r.axis[2],a.z).normalize(),speed:Ke.degToRad(r.spin),angle:0})}let t=new Wt().setFromObject(e),n=t.getSize(new E),s=t.getCenter(new E);for(let r of $b){let o=r.d/Math.max(n.x,n.z),a=new E(...r.axis).normalize(),l=yt.map(r.at[0],r.at[1],r.at[2]),c=new Re().compose(l,new Tt().setFromUnitVectors(new E(0,1,0),a),new E(o,o,o)).multiply(new Re().makeTranslation(-s.x,-s.y,-s.z)),h=new $e;h.matrixAutoUpdate=!1,h.add(e.clone()),Rt.add(h),aa.push({g:h,m0:c,centre:l,axis:a,speed:Ke.degToRad(r.spin),angle:Math.random()*6})}}var ia={at:[2.7,1.05,-8],yaw:.08,height:2.8};function jb(i){let e=i.scene;e.traverse(o=>{if(!o.isMesh)return;let a=o.material;o.material=new ft({map:a.map,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,normalMap:a.normalMap,metalness:1,roughness:1,envMap:ke.env,envMapIntensity:1.05,emissive:16777215,emissiveMap:a.map,emissiveIntensity:.2,side:gt})});let t=new Wt().setFromObject(e),n=t.getSize(new E),s=t.getCenter(new E);ke.sideMachineryModel={model:e,size:n,centre:s};let r=new $e;r.name="sideMachinery",r.add(e),Rt.add(r),ke.sideMachinery=r,Id()}function Id(){let{model:i,size:e,centre:t}=ke.sideMachineryModel,n=ke.sideMachinery,s=ia.height/e.y;i.scale.setScalar(s),i.position.copy(t).multiplyScalar(-s),n.position.set(...ia.at),n.rotation.y=Math.PI+ia.yaw,n.updateMatrixWorld(!0);let r=1/0,o=new E;i.traverse(a=>{if(!a.isMesh)return;let l=a.geometry.attributes.position;for(let c=0;c<l.count;c+=7)o.fromBufferAttribute(l,c).applyMatrix4(a.matrixWorld),o.y<1.4&&(r=Math.min(r,Math.abs(o.x)))}),Y.machineryInnerX=+r.toFixed(2)}function Jb(){let i=new Hn(2,2),e=new hi;e.index=i.index,e.attributes.position=i.attributes.position,e.attributes.uv=i.attributes.uv;let t=(r,o,a,l)=>[...yt.map(r,o,a).toArray(),l],n=Ne.bubbles.map(r=>t(r.pos[0],r.pos[1],r.pos[2],r.size*.5));for(let r of[[.72,.42,-17.9,.24],[-.82,.3,-17.6,.3],[-1.2,1.05,-16.4,.2],[-2.05,1.55,-13.6,.55],[-1.75,.55,-14.4,.3],[1.9,1.75,-12.6,.24],[-2.4,2.6,-10.2,.4],[1.4,.15,-15.6,.22]])n.push(t(...r));for(let r=0;r<30;r++){let o=Ne.startZ+2+Math.random()*(Ne.tunnelEnd-Ne.startZ-2),a=o>Ne.tunnelStart,l=(Math.random()*2-1)*(a?1.6:4.5),c=(a?1:.8)+Math.random()*2.2,h=.06+Math.random()*.2;xt&&a&&(l=Math.sign(l||1)*(1.35+Math.abs(l)*.3),c=2.1+(c-1)*.45,h*=.6),n.push(t(l,c,o,h))}e.setAttribute("inst",new Kt(new Float32Array(n.flat()),4)),e.setAttribute("phase",new Kt(new Float32Array(n.map(()=>Math.random()*6.28)),1)),e.instanceCount=n.length,ke.bubbleU={uTime:{value:0}};let s=new He(e,new ht({vertexShader:lm,fragmentShader:cm,uniforms:ke.bubbleU,transparent:!0,depthWrite:!1,blending:Un,blendSrc:Gn,blendDst:fn}));s.frustumCulled=!1,s.renderOrder=5,Rt.add(s),ke.bubbles=s}function Qb(i,e){e.colorSpace=St;let t=new ft({map:e,color:16777215,metalness:.6,roughness:.3,envMap:ke.env,emissive:9067008,emissiveMap:e,emissiveIntensity:1.25}),n=new ft({color:16761418,metalness:1,roughness:.25,envMap:ke.env,envMapIntensity:1.3,emissive:8014336,emissiveIntensity:.8}),s=new pn(.3,.3,.08,36);s.rotateX(Math.PI/2);let r=[n,t,t],o=xt?Jr(ms(39484),()=>({hi:xd("high"),lo:xd("low"),mat:Gm(ke.env)})):null,a=(v,y)=>{let _=v.z;v=yt.map(v.x,v.y,v.z);let L=o?Jr(ms(39485+jl.length),()=>{let T=new sl;return T.addLevel(new He(o.hi,o.mat),0),T.addLevel(new He(o.lo,o.mat),9),T}):new He(s,r);L.position.copy(v),Rt.add(L),jl.push({obj:L,home:v.clone(),kind:"coin",live:!0,pop:-1,phase:Math.random()*6,compose:y,u:_,q0:xt?yt.quaternion(_,new Tt):null})},l=v=>gs(v).multiply(new E(.7/.85,1,1)),c=Ne.tunnelStart,h=Ne.screen4Z+11,u=(v,y,_)=>new E(v,Tn(Ne,v,_)+y,_);if(xt){for(let v of Ne.coins3)v[2]<c&&a(l(v),!0);for(let[v,y,_]of Yt.coinLines)for(let L=0;L<_;L++)a(u(An(v),Yt.coinH,y+L*Yt.coinStep))}else{for(let v of Ne.coins3)a(l(v),!0);for(let v of Ne.coins4)a(l(v),!0);for(let v=0;v<6;v++)a(u(An(1),.65,c+2.5+v*1.6));for(let v=0;v<5;v++)a(u(An(2),.65+Math.sin(v/4*Math.PI)*.9,c+4+v*1.5));for(let v=0;v<5;v++)a(u(An(0),.65,h+v*1.3))}let d=i.scene;oc(d);let f=new Wt().setFromObject(d),m=f.getSize(new E),x=f.getCenter(new E),g=.42/m.y;d.traverse(v=>{if(!v.isMesh)return;let y=v.material.map;v.material=new ft({map:y,metalness:0,roughness:.12,envMap:ke.env,envMapIntensity:1.6,emissive:16777215,emissiveMap:y,emissiveIntensity:.35,side:gt})}),ke.gemMaterials=[],d.traverse(v=>{v.isMesh&&ke.gemMaterials.push(v.material)});let p=(v,y)=>{let _=v.z;v=yt.map(v.x,v.y,v.z);let L=new $e,T=d.clone(),P=g*(xt?1.2:1);T.scale.setScalar(P),T.position.copy(x).multiplyScalar(-P),L.add(T),xt&&Jr(ms(28224+oa.length),()=>{let O=Qm("gem",.7);yt.frame(_,ze),O.position.copy(ze.T).multiplyScalar(.3),L.add(O)}),L.position.copy(v),Rt.add(L),oa.push({obj:L,home:v.clone(),kind:"gem",live:!0,pop:-1,phase:Math.random()*6,spin:Math.random()*6,compose:y,u:_})};if(xt){for(let[v,y]of Yt.gems)p(u(An(v),Yt.gemH,y));return}p(l(Ne.gem4),!0),p(u(An(1),1.7,Ne.tunnelEnd-1.5)),p(u(An(0),1.35,c+10.5)),p(u(An(1),.7,c+12)),p(u(An(2),.7,h+1.5))}var ql={};function Qm(i,e){if(!ql[i]){let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);i==="sock"?(r.addColorStop(0,"rgba(255,248,236,0.95)"),r.addColorStop(.42,"rgba(255,190,232,0.62)"),r.addColorStop(.7,"rgba(255,214,120,0.42)"),r.addColorStop(.78,"rgba(255,170,220,0.18)"),r.addColorStop(1,"rgba(255,160,220,0)")):(r.addColorStop(0,"rgba(255,170,250,0.8)"),r.addColorStop(.5,"rgba(210,90,255,0.35)"),r.addColorStop(1,"rgba(160,60,255,0)")),s.fillStyle=r,s.fillRect(0,0,128,128),ql[i]=new ci(n),ql[i].colorSpace=St}let t=new Qi(new Ri({map:ql[i],transparent:!0,depthWrite:!1,blending:dn,opacity:i==="sock"?.7:.6}));return t.scale.setScalar(e),t.position.z=.32,t.renderOrder=4,t.name="r2Halo",t}function e1(i){let e=i.scene;e.traverse(l=>{l.isMesh&&(l.material=new yl({map:l.material.map,emissive:16777215,emissiveMap:l.material.map,emissiveIntensity:.32}))});let t=new Wt().setFromObject(e),n=t.getSize(new E),s=t.getCenter(new E),r=(xt?.74:.62)/n.y,o=Ne.tunnelStart,a=xt?Yt.socks.map(([l,c])=>[l,Yt.sockH,c]):[[1,.8,o+7.5],[0,.95,o+11.8],[2,1,o+15.6],[1,.85,o+21],[0,.9,o+26.4]];xt&&e.traverse(l=>{l.isMesh&&(l.material.emissiveIntensity=.42)});for(let[l,c,h]of a){let u=An(l),d=new $e,f=new $e,m=e.clone();m.scale.setScalar(r),m.position.copy(s).multiplyScalar(-r),f.add(m),f.rotation.y=Math.PI,d.add(f),yt.map(u,Tn(Ne,u,h)+c,h,d.position),yt.quaternion(h,d.quaternion),xt&&Jr(ms(20672+Jl.length),()=>d.add(Qm("sock",1.25))),Rt.add(d),Jl.push({obj:d,turn:f,home:d.position.clone(),kind:"sock",live:!0,pop:-1,phase:Math.random()*6,u:h})}}var tc=class{constructor(e){this.n=e,this.next=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.size0=new Float32Array(e),this.kind=new Float32Array(e),this.grav=new Float32Array(e),this.sizeA=new Float32Array(e),this.alphaA=new Float32Array(e),this.fl=new Float32Array(e*6);let t=new ot;this.posAttr=new ct(this.p,3).setUsage(ks),this.sizeAttr=new ct(this.sizeA,1).setUsage(ks),this.alphaAttr=new ct(this.alphaA,1).setUsage(ks),this.kindAttr=new ct(this.kind,1).setUsage(ks),t.setAttribute("position",this.posAttr),t.setAttribute("size",this.sizeAttr),t.setAttribute("alpha",this.alphaAttr),t.setAttribute("kind",this.kindAttr),this.u={uScale:{value:400}},this.points=new Ns(t,new ht({vertexShader:hm,fragmentShader:um,uniforms:this.u,transparent:!0,depthWrite:!1,blending:Un,blendSrc:Gn,blendDst:fn})),this.points.frustumCulled=!1,this.points.renderOrder=6,this.sources=[],Rt.add(this.points)}emit(e,t,n,s,r,o,a,l,c,h=1,u=null){let d=this.next;this.next=(this.next+1)%this.n,this.p.set([e,t,n],d*3),this.v.set([s,r,o],d*3),this.life[d]=l,this.max[d]=l,this.size0[d]=a,this.kind[d]=c,this.grav[d]=h,u?this.fl.set(u,d*6):this.fl.fill(0,d*6,d*6+6)}emitT(e,t,n,s,r,o,a,l,c,h=1){yt.frame(n,ze);let u=Tn(Ne,e,n),d=ze.P.x+ze.R.x*e+ze.U.x*t,f=ze.P.y+ze.R.y*e+ze.U.y*t,m=ze.P.z+ze.R.z*e+ze.U.z*t;this.emit(d,f,m,ze.R.x*s+ze.U.x*r+ze.T.x*o,ze.R.y*s+ze.U.y*r+ze.T.y*o,ze.R.z*s+ze.U.z*r+ze.T.z*o,a,l,c,h,[ze.P.x+ze.R.x*e+ze.U.x*u,ze.P.y+ze.R.y*e+ze.U.y*u,ze.P.z+ze.R.z*e+ze.U.z*u,ze.U.x,ze.U.y,ze.U.z])}burstT(e,t,n,s,r,o={}){for(let a=0;a<s;a++){let l=Math.random()*Math.PI*2,c=(.4+Math.random())*r,h=o.dir||0;this.emitT(e+Math.cos(l)*.25,t,n+Math.sin(l)*.25,Math.cos(l)*c*.9+h*r*.9,(1.2+Math.random()*1.6)*r*(o.up??1),Math.sin(l)*c*.9+(o.vz||0),(o.size||.11)*(.6+Math.random()*.8),.5+Math.random()*.5,o.kind??0,o.grav??1)}}sparkle(e,t){for(let n=0;n<t;n++){let s=new E().randomDirection().multiplyScalar(1+Math.random()*2.5);this.emit(e.x,e.y,e.z,s.x,s.y+.6,s.z,.16+Math.random()*.2,.45+Math.random()*.45,2,-.1)}}addSource(e){e.carry=0,this.sources.push(e)}update(e){for(let t of this.sources)for(t.carry+=t.rate*e;t.carry>=1;t.carry--){let n=Math.random()*Math.PI*2,s=Math.random()*t.spread;this.emit(t.pos.x+Math.cos(n)*s,t.pos.y+.05,t.pos.z+Math.sin(n)*s,Math.cos(n)*.6,t.up*(.5+Math.random()*.7),Math.sin(n)*.6,t.size*(.6+Math.random()*.8),.5+Math.random()*.6,t.kind,t.kind===1?.15:1,[t.pos.x,t.pos.y,t.pos.z,0,1,0])}for(let t=0;t<this.n;t++){if(this.life[t]<=0){this.alphaA[t]=0,this.sizeA[t]=0;continue}this.life[t]-=e;let n=t*3;this.v[n+1]-=9.81*this.grav[t]*e,this.kind[t]===1&&(this.v[n]*=1-e*2,this.v[n+2]*=1-e*2,this.v[n+1]*=1-e*3),this.p[n]+=this.v[n]*e,this.p[n+1]+=this.v[n+1]*e,this.p[n+2]+=this.v[n+2]*e;let s=1-this.life[t]/this.max[t];this.alphaA[t]=Math.min(1,s*8)*(1-s*s),this.sizeA[t]=this.size0[t]*(this.kind[t]===1?.7+s*1.2:this.kind[t]===2?Math.sin(Math.min(1,s*1.4)*Math.PI):1);let r=t*6,o=this.fl[r+3],a=this.fl[r+4],l=this.fl[r+5];this.kind[t]===0&&(o!==0||a!==0||l!==0)&&(this.p[n]-this.fl[r])*o+(this.p[n+1]-this.fl[r+1])*a+(this.p[n+2]-this.fl[r+2])*l<-.05&&this.v[n]*o+this.v[n+1]*a+this.v[n+2]*l<0&&(this.life[t]=0)}this.posAttr.needsUpdate=this.sizeAttr.needsUpdate=this.alphaAttr.needsUpdate=this.kindAttr.needsUpdate=!0}},_d=0;function Qr(i,e,t){Ks.uRipples.value[_d].set(i,e,Y.time,t),_d=(_d+1)%Xs}var t1=1.04;function n1(i){let e=i.scene;Y.repairedNormals=oc(e);let t=new Wt().setFromObject(e),n=t.getSize(new E),s=t.getCenter(new E),r=t1/n.x;e.position.copy(s).multiplyScalar(-r),e.scale.setScalar(r),ke.fur={uCentre:{value:new E},uUp:{value:new E(0,1,0)},uRadius:{value:n.y*r*.5},uKey:{value:new E(.35,.85,-.42).normalize()},uTime:{value:0},uSky:{value:new _e(1,.86,1)},uGround:{value:new _e(.55,.42,.95)},uRim:{value:new _e(1,.55,.88)},uTip:{value:new _e(1,.8,.96)},uSpike:{value:0}},e.traverse(c=>{c.isMesh&&(c.material=new ht({uniforms:{map:{value:c.material.map},...ke.fur},vertexShader:fm,fragmentShader:pm,side:gt}))});let o=new $e;o.add(e);let a=new $e;a.add(o);let l=new $e;l.add(a),Rt.add(l),je={root:l,tilt:a,squash:o,height:n.y*r,lane:1,x:0,xv:0,z:Ne.startZ,y:0,speed:0,air:!1,vy:0,yAbs:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0,look:0,lookT:2.5,lastSlope:0,downhill:0,wakeCarry:0,foamCarry:0,bobRipple:0}}function Ld(){let i=je;Object.assign(i,{lane:1,x:0,xv:0,z:Ne.startZ,speed:0,air:!1,vy:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0}),i.yAbs=fs(Ne,0,Ne.startZ,Y.time)+.34;for(let e of[...jl,...oa,...Jl])e.live=!0,e.pop=-1,e.obj.visible=!0,e.obj.scale.setScalar(1),e.obj.position.copy(e.home);Y.socks=0,Y.phase!=="loading"&&Js(),It&&(It.n=0),ut.snap=!0}function la(i){if(Y.phase!=="running")return;let e=Math.max(0,Math.min(2,je.lane+i));if(e===je.lane){je.sqV+=2;return}je.lane=e;let t=je;vt.burstT(t.x,fs(Ne,t.x,t.z,Y.time)+.05,t.z,16,1,{dir:An(e)>t.x?1:-1,vz:t.speed*.5}),Qr(t.x,t.z,1),Y.lastGesture={t:Y.time,lane:e},qn("swish")}function Dd(){if(Y.phase!=="running"||je.air)return;je.air=!0,je.vy=6.2,je.flip=0,je.sqV+=6;let i=je;vt.burstT(i.x,i.yAbs-.34+.05,i.z,20,1.1,{vz:i.speed*.4}),Qr(i.x,i.z,1.2),qn("splash")}function Ud(){Y.phase==="running"&&(je.spinV=Math.PI*2/.5,je.spinLeft=Math.PI*2,qn("swish"))}function i1(i){if(Y.phase!=="running")return!1;let e=je;if(xt){if(Y.turboT>0||Y.blastT>0||Y.guardT>0||Y.outT>=0)return vt.sparkle(e.root.position.clone().add(new E(i*.5,.4,0)),14),qn("swish"),!1;Y.hearts=Math.max(0,Y.hearts-1),Y.knocks++,Y.guardT=Yt.hurtGuard,Js(),ca("heartPill"),o1(),Y.hearts===0&&(Y.outT=0,tt("r2Toast").classList.add("show"))}e.lane=1,e.speed*=.55,e.sqV-=12;let t=fs(Ne,e.x,e.z,Y.time);return vt.burstT(e.x,t+.1,e.z,40,1.6,{dir:-i,vz:e.speed*.3}),vt.burstT(e.x,t+.05,e.z,8,.9,{kind:1,size:.24,grav:.15,up:.6}),Qr(e.x,e.z,1.6),qn("splash"),Y.bumps=(Y.bumps||0)+1,!0}function s1(i){let e=je,t=Y.time,n=Y.phase==="running",s=kl(Ne,e.x,e.z),r=s+Math.tan(yt.pitch(e.z)),o=n?7*(1+Ke.clamp(-r*1.6,-.22,.4))*(xt&&Y.turboT>0?Yt.turboSpeed:1):0;e.speed+=(o-e.speed)*Math.min(1,i*(n?2.2:4)),e.z+=e.speed*i;{let f=11.11111111111111,m=f*i,x=1/(1+m+.48*m*m+.235*m*m*m),g=An(e.lane),p=e.x-g,v=(e.xv+f*p)*i;e.xv=(e.xv-f*v)*x,e.x=g+(p+v)*x}let a=fs(Ne,e.x,e.z,t),l=Math.sin(t*1.7*Math.PI*2)*.05,c=a+.34+l;e.air?(e.vy-=17*i,e.yAbs+=e.vy*i,e.flip=Math.min(Math.PI*2,e.flip+i*(Math.PI*2)/.62),e.yAbs<=c&&e.vy<0&&(e.air=!1,e.flip=0,e.sqV-=9+Math.min(8,-e.vy),vt.burstT(e.x,a+.05,e.z,34,1.4,{vz:e.speed*.5}),vt.burstT(e.x,a+.05,e.z,6,.8,{kind:1,size:.22,grav:.15,up:.5}),Qr(e.x,e.z,1.6),qn("splash"))):e.yAbs=c,e.downhill+=(Ke.clamp(-r*4,0,1)-e.downhill)*Math.min(1,i*4);let h=Math.max(0,r-e.lastSlope)/Math.max(i,.001);if(n&&!e.air&&h>.35&&e.lastSlope<-.1){for(e.splashCarry=(e.splashCarry||0)+h*i*36;e.splashCarry>=1;e.splashCarry--)vt.emitT(e.x+(Math.random()*2-1)*.55,a+.05,e.z+.2+Math.random()*.4,(Math.random()*2-1)*2.2,2.2+Math.random()*2.4,e.speed*(.6+Math.random()*.3),.07+Math.random()*.08,.6+Math.random()*.4,0);e.sqV-=h*i*25,(!e.splashRipple||Y.time-e.splashRipple>.4)&&(Qr(e.x,e.z,1.4),e.splashRipple=Y.time,qn("splash"))}if(e.pitch+=(Math.atan(s)*.9-e.pitch)*Math.min(1,i*6),e.lean+=(Ke.clamp(-e.xv*.22,-.45,.45)-e.lean)*Math.min(1,i*10),e.yaw+=(Ke.clamp(e.xv*.1,-.3,.3)-e.yaw)*Math.min(1,i*8),e.spinLeft>0){let f=Math.min(e.spinLeft,e.spinV*i);e.spin+=f,e.spinLeft-=f}else e.spin=0;e.sqV+=(-e.sq*90-e.sqV*9)*i,e.sq+=e.sqV*i,n?e.look=Math.max(0,e.look-i/.3):(e.lookT-=i,e.lookT<0?(e.look=Math.min(1,e.look+i/.55),e.lookT<-1.6&&(e.lookT=4.5)):e.look=Math.max(0,e.look-i/.55));let u=Ke.smoothstep(e.look,0,1)*Math.PI*.92;yt.map(e.x,e.yAbs,e.z,e.root.position),yt.quaternion(e.z,e.root.quaternion),e.tilt.rotation.set(-e.pitch+(e.air?-e.flip:0)+Math.sin(t*3.4)*.03*(n?1:.4),e.yaw+e.spin+u,e.lean+Math.sin(t*2.2)*.04,"YXZ");let d=1+e.sq*.25;if(e.squash.scale.set(1/Math.sqrt(d),d,1/Math.sqrt(d)),!e.air){let f=e.speed/7;for(e.wakeCarry+=(n?8+22*f+50*e.downhill+Math.abs(e.xv)*18:2)*i;e.wakeCarry>=1;e.wakeCarry--){let m=Math.random()<.5?-1:1;vt.emitT(e.x+m*(.25+Math.random()*.25),a+.04,e.z-.15-Math.random()*.3,m*(.5+Math.random()*1.2)-e.xv*.4,1+Math.random()*(1.6+2.2*e.downhill),e.speed*(.35+Math.random()*.3),.04+Math.random()*.07,.45+Math.random()*.4,0)}for(e.bowCarry=(e.bowCarry||0)+(n?6+18*f+24*e.downhill:0)*i;e.bowCarry>=1;e.bowCarry--){let m=Math.random()<.5?-1:1,x=Math.random()*.9;vt.emitT(e.x+m*(.42+Math.random()*.15),a+.08,e.z+.15+x*.3,m*(.9+Math.random()*1.1)-e.xv*.3,1.4+Math.random()*1.6,e.speed*(.55+Math.random()*.25),.04+Math.random()*.05,.4+Math.random()*.3,0)}for(e.foamCarry+=(n?1.5+3*f+5*e.downhill:.8)*i;e.foamCarry>=1;e.foamCarry--){let m=Math.random()<.5?-1:1;vt.emitT(e.x+m*(.32+Math.random()*.25),a+.05,e.z-.35-Math.random()*.6,m*.45,.2,e.speed*.75,.1+Math.random()*.12,.45+Math.random()*.3,1,.1)}if(!n)for(e.restBubbles=(e.restBubbles||0)+14*i;e.restBubbles>=1;e.restBubbles--){let m=Math.random()*Math.PI*2,x=.42+Math.random()*.28;vt.emitT(e.x+Math.cos(m)*x,a+.02,e.z+Math.sin(m)*x*.7,Math.cos(m)*.15,.25+Math.random()*.3,0,.07+Math.random()*.09,1+Math.random()*.8,0,-.03)}e.bobRipple-=i,e.bobRipple<0&&(Qr(e.x,e.z,n?.35:.6),e.bobRipple=n?.45:1.2)}Ks.uPlayer.value.set(e.x,a,e.z),Ks.uPlayerMove.value.set(e.xv,e.speed/7,e.downhill),e.lastSlope=r,ke.fur.uTime.value=t,ke.fur.uCentre.value.copy(e.root.position),yt.frame(e.z,ze),ke.fur.uUp.value.copy(ze.U),document.body.classList.toggle("inDrum",n&&e.z>Ne.tunnelStart-.5),It&&g1(),n&&e.z>Ne.tunnelEnd-2&&a1()}function r1(i){let e=je;if(Y.guardT=Math.max(0,Y.guardT-i),Y.blastT>0&&(Y.blastT=Math.max(0,Y.blastT-i),xs.clearBrushes&&xs.clearBrushes(e.z-1,e.z+Yt.blastReach)),Y.turboT>0)for(Y.turboT=Math.max(0,Y.turboT-i),(!e.spinLeft||e.spinLeft<.5)&&(e.spinV=Math.PI*2/.32,e.spinLeft=Math.PI*2),e.turboCarry=(e.turboCarry||0)+i*60;e.turboCarry>=1;e.turboCarry--){let t=Math.random()*Math.PI*2,n=fs(Ne,e.x,e.z,Y.time);vt.emitT(e.x+Math.cos(t)*.5,n+.1+Math.random()*.4,e.z+Math.sin(t)*.3,Math.cos(t)*2.2,.8+Math.random(),e.speed*.4,.08+Math.random()*.07,.4+Math.random()*.3,0)}Y.outT>=0&&(Y.outT+=i,Y.outT>=Yt.outOfHearts&&e0()),tt("r2Shield").classList.toggle("on",Y.blastT>0||Y.turboT>0)}function Nd(){if(!xt||Y.phase!=="running"||Y.paused||Y.blasts<=0||Y.blastT>0||Y.outT>=0)return!1;Y.blasts--,Y.blastT=Yt.blastTime;let i=je,e=fs(Ne,i.x,i.z,Y.time);for(let t=0;t<46;t++){let n=Math.random()*Math.PI*2,s=Math.random()*.5;vt.emitT(i.x+Math.cos(n)*s*.6,e+.5+Math.sin(n)*s*.5,i.z+.4,Math.cos(n)*.9,.4+Math.random()*.8,i.speed+4+Math.random()*5,.16+Math.random()*.2,.9+Math.random()*.6,1,-.05)}return xs.clearBrushes&&xs.clearBrushes(i.z-1,i.z+Yt.blastReach),ca("blastBtn"),qn("gem"),Js(),!0}function Fd(){return!xt||Y.phase!=="running"||Y.paused||Y.turbos<=0||Y.turboT>0||Y.outT>=0?!1:(Y.turbos--,Y.turboT=Yt.turboTime,ca("turboBtn"),qn("swish"),Js(),!0)}function sa(i){(!xt||Y.phase!=="running")&&(i=!1),Y.paused=!!i,document.body.classList.toggle("paused",Y.paused),tt("pausePanel").hidden=!Y.paused,Ht&&(Y.paused?Ht.suspend?.():Ht.resume?.()),Rd=performance.now(),Y.paused&&tt("resumeBtn").focus({preventScroll:!0})}function o1(){let i=tt("r2Hurt");i.classList.remove("go"),i.offsetWidth,i.classList.add("go")}function e0(){Y.outT=-1,Y.restarts++,tt("r2Toast").classList.remove("show"),Object.assign(Y,{hearts:Yt.hearts,blasts:Yt.blasts,turbos:Yt.turbos,blastT:0,turboT:0,guardT:0}),Ld(),Y.phase="intro",document.body.classList.remove("running","inDrum"),Js()}xt&&(xs.pop=i=>{vt.sparkle(i,22);for(let e=0;e<14;e++){let t=new E().randomDirection();vt.emit(i.x+t.x*.6,i.y+t.y*.6,i.z+t.z*.6,t.x,t.y+.5,t.z,.2+Math.random()*.2,.7,1,-.05)}});function a1(){Y.laps++;let i=tt("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),Ld(),Y.phase="running"}var eo={off:new E(0,1,-6.4),look:new E(0,.5,5.97),fov:40},yd={off:new E(0,1.03,-3.58),look:new E(0,.89,6.42),fov:60};ut={snap:!0,x:0,y:0,tilt:0,shake:0};function l1(i){let e=je,t=Ke.smoothstep(e.z,-4,Ne.tunnelStart+3),n=eo.off.clone().lerp(yd.off,t),s=eo.look.clone().lerp(yd.look,t),r=Ke.lerp(eo.fov,yd.fov,t),o=Tn(Ne,e.x,e.z)+.34,a=e.x*.55,l=o+(e.yAbs-o)*.35,c=0;for(let L=1;L<=6;L++)c+=kl(Ne,e.x,e.z+L*1.2);c/=6;let h=Y.phase==="running"?c:0,u=ut.snap;ut.snap&&(ut.x=a,ut.y=l,ut.tilt=h,ut.snap=!1);let d=1-Math.exp(-i/.14);ut.x+=(a-ut.x)*d,ut.y+=(l-ut.y)*(1-Math.exp(-i/.12)),ut.tilt+=(h-ut.tilt)*(1-Math.exp(-i/.35));let f=ut.x+n.x,m=ut.y+n.y+ut.tilt*n.z*.6,x=e.z+n.z;yt.frame(e.z,ze),(u||!ut.fT)&&(ut.fP=ze.P.clone(),ut.fR=ze.R.clone(),ut.fU=ze.U.clone(),ut.fT=ze.T.clone());let g=1-Math.exp(-i/.25);ut.fP.copy(ze.P),ut.fT.lerp(ze.T,g).normalize(),ut.fU.lerp(ze.U,g),ut.fR.crossVectors(ut.fU,ut.fT).normalize(),ut.fU.crossVectors(ut.fT,ut.fR).normalize();let p=(L,T,P,O)=>O.copy(ut.fP).addScaledVector(ut.fR,L).addScaledVector(ut.fU,T).addScaledVector(ut.fT,P),v=p(f,m,n.z,new E),y=p(ut.x+s.x,ut.y+s.y+ut.tilt*s.z,s.z,new E);if(yt.frame(x,ze),x>-.25&&x<Ne.tunnelEnd){let L=v.clone().sub(ze.P),T=L.dot(ze.R),P=L.dot(ze.U)-(0+1.5),O=L.dot(ze.T),w=Math.hypot(T,P),b=Ne.clearRadius-.4;w>b&&v.copy(ze.P).addScaledVector(ze.R,T/w*b).addScaledVector(ze.U,0+1.5+P/w*b).addScaledVector(ze.T,O)}on.up.set(0,1,0).lerp(ze.U,.75).normalize(),on.position.copy(v),on.lookAt(y);let _=on.aspect;on.fov=_>=.5?r:Ke.radToDeg(2*Math.atan(Math.tan(Ke.degToRad(r)/2)*.5/_)),on.updateProjectionMatrix()}function c1(i){let e=Y.time,t=je.root.position,n=r=>r.obj.position.distanceTo(t)<.4+.42;for(let r of jl)if(!(!r.live&&r.pop<0)){if(r.pop>=0){bd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*1.2*6.283+r.phase)*.08,r.q0?r.obj.quaternion.copy(r.q0).multiply(h1.setFromAxisAngle(u1,Math.sin(e*2-r.u*.9)*.5)):r.obj.rotation.y+=i*Ke.degToRad(120),xt&&Md(r),Y.phase==="running"&&n(r)&&Ed(r)}for(let r of oa)if(!(!r.live&&r.pop<0)){if(r.pop>=0){bd(r,i);continue}if(r.spin+=i*Ke.degToRad(70),r.obj.position.y=r.home.y+Math.sin(e*.75*6.283+r.phase)*.1,r.obj.rotation.set(Math.sin(e*.9+r.phase)*.16,r.spin,Math.sin(e*.7+r.phase*1.3)*.12),xt&&Md(r),Y.phase==="running"&&n(r)&&Ed(r),Math.random()<i*(1.2+10*Math.max(0,1-r.obj.position.distanceTo(t)/6))){let o=r.obj.position.clone().add(new E().randomDirection().multiplyScalar(.22));vt.emit(o.x,o.y,o.z,0,.1,0,.12+Math.random()*.1,.35,2,0)}}for(let r of Jl)if(!(!r.live&&r.pop<0)){if(r.pop>=0){bd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*.9*6.283+r.phase)*.09,r.turn.rotation.set(Math.sin(e*1.3+r.phase)*.12,Math.PI+Math.sin(e*.8+r.phase)*.45,Math.sin(e*1.1+r.phase*1.7)*.15),xt&&Md(r),Y.phase==="running"&&n(r)&&Ed(r)}let s=oa.reduce((r,o)=>o.live?Math.max(r,1-Math.min(1,o.obj.position.distanceTo(t)/6)):r,0);for(let r of ke.gemMaterials||[])r.emissiveIntensity=.35+.6*s}var h1=new Tt,u1=new E(0,1,0);function Md(i){let e=je.z-i.u,t=Ke.clamp((e-.6)/1,0,1);i.obj.scale.setScalar(1-t+.001),i.obj.visible=t<1}function bd(i,e){i.pop+=e;let t=Math.min(1,i.pop/.35);i.obj.position.lerp(je.root.position.clone().add(new E(0,xt?1:.6,0)),t),i.obj.scale.setScalar((1+(xt?.15:.6)*Math.sin(t*Math.PI))*(1-t)+.001),t>=1&&(i.pop=-1,i.obj.visible=!1)}function Ed(i){i.live=!1,i.pop=0,i.kind==="coin"?(Y.coins++,Y.collected.coins++,vt.sparkle(i.obj.position,7),qn("coin")):i.kind==="sock"?(Y.socks++,Y.collected.socks=(Y.collected.socks||0)+1,vt.sparkle(i.obj.position,16),qn("gem"),ca("sockPanel")):(Y.gems++,Y.collected.gems++,vt.sparkle(i.obj.position,18),qn("gem"),ca("gemPill")),Js()}function Js(){xt&&(tt("hearts").innerHTML=Y.hearts>=Yt.hearts?`${Y.hearts} <small>Full</small>`:String(Y.hearts),tt("blastCount").textContent=String(Y.blasts),tt("turboCount").textContent=String(Y.turbos),tt("blastBtn").disabled=Y.blasts<=0,tt("turboBtn").disabled=Y.turbos<=0),tt("coins").textContent=Y.coins.toLocaleString("en-US"),tt("gems").textContent=String(Y.gems),tt("sockCount").textContent=`${Math.min(5,Y.socks)}/5`,tt("sockBar").style.width=`${Math.min(5,Y.socks)*20}%`}function ca(i){let e=tt(i);e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}function no(){Y.phase==="intro"&&(Y.phase="running",Y.startedAt=Y.time,document.body.classList.add("running"),p1())}var d1=["banner","startPanel"].map(i=>tt(i)),ea=tt("openingArt");function f1(){let i=Y.phase==="running"?Y.time-Y.startedAt:-1,e=i<0?0:Ke.smoothstep(i,0,.45);for(let t of d1)t.style.opacity=(1-e).toFixed(3),t.style.transform=`translateX(-50%) translateY(calc(var(--u) * ${(12*e).toFixed(2)}))`,t.style.visibility=e>=1?"hidden":"";if(tt("hint").classList.toggle("show",i>=.3&&i<3.8&&Y.laps===0),ea){let t=Rn.art&&e<1&&ea.complete&&ea.naturalWidth>0&&document.body.classList.contains("ready");document.body.classList.toggle("openingArt",t),ea.style.visibility=t?"visible":"hidden",ea.style.opacity=(1-e).toFixed(3),tt("soundBtn").style.opacity=t?e.toFixed(3):""}if(xt){let t=i<0?0:Ke.smoothstep(i,.1,.55);document.body.classList.toggle("r2Play",t>0);let n=document.body.classList.contains("openingArt");tt("soundBtn").style.opacity=String(n?e*(1-t):1-t),tt("soundBtn").style.visibility=t>=1?"hidden":"";for(let s of["pauseBtn","blastBtn","turboBtn"]){let r=tt(s);r.style.opacity=t.toFixed(3),r.style.visibility=t>0?"":"hidden"}}}var Ht=null,vs=null;function p1(){if(!(Ht||qm))try{Ht=new(window.AudioContext||window.webkitAudioContext),vs=Ht.createGain(),vs.gain.value=Y.sound?.5:0,vs.connect(Ht.destination);let i=Ht.createBuffer(1,Ht.sampleRate*2,Ht.sampleRate),e=i.getChannelData(0);for(let r=0;r<e.length;r++)e[r]=Math.random()*2-1;let t=Ht.createBufferSource();t.buffer=i,t.loop=!0;let n=Ht.createBiquadFilter();n.type="lowpass",n.frequency.value=900;let s=Ht.createGain();s.gain.value=.06,t.connect(n).connect(s).connect(vs),t.start()}catch{Ht=null}}function wd(i,e,t,n,s="sine"){let r=Ht.createOscillator(),o=Ht.createGain();r.type=s,r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(vs),r.start(e),r.stop(e+t+.05)}function qn(i){if(!Ht||!Y.sound)return;let e=Ht.currentTime;if(i==="coin")wd(1318.5,e,.12,.25,"triangle"),wd(1975.5,e+.06,.22,.2,"triangle");else if(i==="gem")[1567.98,2093,2637.02,3135.96].forEach((t,n)=>wd(t,e+n*.045,.5,.18));else if(i==="splash"||i==="swish"){let t=i==="splash"?.35:.18,n=Ht.createBuffer(1,Ht.sampleRate*t,Ht.sampleRate),s=n.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=(Math.random()*2-1)*Math.pow(1-l/s.length,2);let r=Ht.createBufferSource();r.buffer=n;let o=Ht.createBiquadFilter();o.type="bandpass",o.frequency.value=i==="splash"?700:1800,o.Q.value=.8;let a=Ht.createGain();a.gain.value=i==="splash"?.5:.18,r.connect(o).connect(a).connect(vs),r.start(e)}}var ei=null,Xm=["left","middle","right"],$l=[],ta=null;function Od(i,e){if(!rc)return;let t=an.getBoundingClientRect();$l.push({x:i.clientX-t.left,y:i.clientY-t.top,t:Y.time,down:e}),$l.length>80&&$l.shift()}function nc(i){rc&&(ta={text:i,t:Y.time})}an.addEventListener("pointerdown",i=>{i.target.closest("button")||xt&&Y.paused||(ei={x:i.clientX,y:i.clientY,t:performance.now(),used:!1},an.setPointerCapture?.(i.pointerId),Od(i,!0))});an.addEventListener("pointermove",i=>{if(!ei||(Od(i,!0),ei.used))return;let e=i.clientX-ei.x,t=i.clientY-ei.y,n=Math.max(24,an.clientWidth*.06);if(Math.abs(e)>n&&Math.abs(e)>Math.abs(t)){ei.used=!0,Y.phase==="intro"&&no();let s=je.lane;la(e<0?-1:1),nc(`Swipe ${e<0?"\u2190":"\u2192"}  \xB7  ${s===je.lane?"edge lane":`lane ${Xm[s]} \u2192 ${Xm[je.lane]}`}`)}else t<-n&&Math.abs(t)>Math.abs(e)&&(ei.used=!0,Y.phase==="intro"&&no(),Dd(),nc("Swipe \u2191  \xB7  jump"))});an.addEventListener("pointerup",i=>{ei&&(Od(i,!1),!ei.used&&performance.now()-ei.t<400&&(Y.phase==="intro"?(no(),nc("Tap  \xB7  start")):(Ud(),nc("Tap  \xB7  spin"))),ei=null)});window.addEventListener("keydown",i=>{if(Y.phase==="loading")return;let e=i.key;if(xt&&Y.phase==="running"){if(e==="p"||e==="P"||e==="Escape"){sa(!Y.paused),i.preventDefault();return}if(Y.paused)return;if(e==="b"||e==="B"){Nd();return}if(e==="t"||e==="T"){Fd();return}}if(Y.phase==="intro"&&[" ","Enter","ArrowLeft","ArrowRight","ArrowUp","a","d","w"].includes(e)&&(no(),e===" "||e==="Enter")){i.preventDefault();return}e==="ArrowLeft"||e==="a"?la(-1):e==="ArrowRight"||e==="d"?la(1):e==="ArrowUp"||e==="w"?Dd():e===" "&&(i.preventDefault(),Ud())});function t0(){Y.sound=!Y.sound,tt("soundBtn").setAttribute("aria-pressed",String(!Y.sound)),tt("soundBtn").title=Y.sound?"Sound on":"Sound off",vs&&(vs.gain.value=Y.sound?.5:0),xt&&(tt("pauseSound").textContent=Y.sound?"Sound: On":"Sound: Off",tt("pauseSound").setAttribute("aria-pressed",String(Y.sound)))}tt("soundBtn").addEventListener("click",t0);if(xt){document.body.classList.add("r2"),tt("hint").after(tt("r2Hud").content.cloneNode(!0));for(let i of["pauseBtn","blastBtn","turboBtn","pausePanel","r2Toast","r2Hurt","r2Shield"])tt(i).hidden=!1;tt("pausePanel").hidden=!0,tt("blastBtn").addEventListener("click",i=>{i.currentTarget.blur(),Nd()}),tt("turboBtn").addEventListener("click",i=>{i.currentTarget.blur(),Fd()}),tt("pauseBtn").addEventListener("click",i=>{i.currentTarget.blur(),sa(!0)}),tt("resumeBtn").addEventListener("click",()=>sa(!1)),tt("pauseSound").addEventListener("click",t0),tt("restartBtn").addEventListener("click",()=>{sa(!1),e0()})}var It=null;function m1(){let i=new li(-1,1,1,-1,.1,500),e=new $e;Rt.add(e);let t=[],n=[],s=0;for(let h=Ne.startZ-10;h<=Ne.tunnelEnd+8;h+=.2,s++){let u=yt.map(0,Tn(Ne,0,h),h);if(t.push(u.x,u.y,u.z,u.x,u.y-.45,u.z),s){let d=s*2;n.push(d-2,d-1,d,d-1,d+1,d)}}let r=new ot;r.setAttribute("position",new Ze(t,3)),r.setIndex(n),e.add(new He(r,new Pt({color:2063871,side:gt})));for(let h of[1.5+Ne.tunnelRadius,1.5-Ne.tunnelRadius]){let u=[];for(let d=Ne.tunnelStart;d<=Ne.tunnelEnd;d+=.5)u.push(yt.map(0,h,d));e.add(new He(new zs(new es(u),u.length*2,.05,6),new Pt({color:14721056})))}let o=1200,a=new Float32Array(o*3),l=new ot;l.setAttribute("position",new ct(a,3)),l.setDrawRange(0,0);let c=new Ns(l,new Us({color:16719774,size:5,sizeAttenuation:!1}));c.frustumCulled=!1,e.add(c);for(let h of[ke.castle,Zs,ke.machinery,ke.sideMachinery,js&&js.root,ra&&ra.tunnel,ke.falls,ke.bubbles,...ke.drumMeshes||[],...ke.exitLight||[],...aa.map(u=>u.g)])h&&(h.visible=!1);It={cam:i,g:e,dots:c,tp:a,n:0,N:o,yc:1,width:22,startY:je.root.position.y}}function g1(){let i=je.root.position;It.n>=It.N&&(It.tp.copyWithin(0,3),It.n=It.N-1),i.toArray(It.tp,It.n*3),It.n++,It.dots.geometry.attributes.position.needsUpdate=!0,It.dots.geometry.setDrawRange(0,It.n)}function v1(){let i=an.clientWidth,e=an.clientHeight,t=je.root.position,n=It.cam,s=It.width,r=s*e/i;return n.left=-s*.36,n.right=s*.64,n.top=r/2,n.bottom=-r/2,n.updateProjectionMatrix(),n.position.set(t.x-60,It.yc,t.z),n.up.set(0,1,0),n.lookAt(t.x,It.yc,t.z),{width:s,height:r,left:t.z+n.left}}var na=tt("overlay"),et=na.getContext("2d");function x1(){let i=an.clientWidth,e=an.clientHeight;(na.width!==i||na.height!==e)&&(na.width=i,na.height=e),et.clearRect(0,0,i,e),It&&y1(i,e),rc&&_1(i,e)}function Zl(i,e,t,n,s=1,r="center"){et.font=`600 ${n}px Fredoka, system-ui, sans-serif`;let o=et.measureText(i).width,a=n*.6,l=r==="center"?e-o/2-a:e-a;et.globalAlpha=s*.82,et.fillStyle="#141c5c",et.beginPath(),et.roundRect(l,t-n*.95,o+a*2,n*1.6,n*.8),et.fill(),et.globalAlpha=s,et.fillStyle="#fff",et.textAlign=r==="center"?"center":"left",et.fillText(i,e,t+n*.1),et.globalAlpha=1}function _1(i,e){let t=$l.filter(n=>Y.time-n.t<.5);if(t.length){et.lineCap="round",et.lineJoin="round";for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=Y.time-a.t;et.strokeStyle=`rgba(255,255,255,${Math.max(0,.85-l*1.6)})`,et.lineWidth=14*(1-l),et.beginPath(),et.moveTo(o.x,o.y),et.lineTo(a.x,a.y),et.stroke()}let n=t[t.length-1],s=Y.time-n.t;et.fillStyle=`rgba(255,255,255,${Math.max(0,.9-s*1.8)})`,et.strokeStyle=`rgba(255,79,184,${Math.max(0,.9-s*1.8)})`,et.lineWidth=3,et.beginPath(),et.arc(n.x,n.y,15,0,Math.PI*2),et.fill(),et.stroke()}ta&&Y.time-ta.t<1&&Zl(ta.text,i/2,e*.86,Math.round(e*.024),Math.min(1,(1-(Y.time-ta.t))*3))}function y1(i,e){let t=It.frame,n=je.root.position,s=c=>(It.cam.top-(c-It.yc))/t.height*e;et.font=`500 ${Math.round(e*.022)}px Fredoka, system-ui, sans-serif`,et.textAlign="left";for(let c=-3;c<=6;c+=.5){let h=s(c);if(h<0||h>e)continue;let u=Math.abs(c-Math.round(c))<1e-6;et.strokeStyle=u?"rgba(40,30,110,0.45)":"rgba(40,30,110,0.18)",et.lineWidth=u?1.5:1,et.beginPath(),et.moveTo(0,h),et.lineTo(i,h),et.stroke(),u&&(et.fillStyle="rgba(30,20,90,0.85)",et.fillText(`${c>=0?"+":""}${c.toFixed(0)} m`,8,h-4))}let r=(n.z-t.left)/t.width*i,o=s(n.y);et.strokeStyle="#ff1f9e",et.setLineDash([6,5]),et.lineWidth=2,et.beginPath(),et.moveTo(r,o),et.lineTo(i*.9,o),et.stroke(),et.setLineDash([]);let a=yt.angles(je.z),l=Math.round(e*.028);Zl(`height ${n.y>=0?"+":""}${n.y.toFixed(2)} m`,i*.9-4,o+l*.35,l,1,"left"),Zl("SIDE VIEW (debug) \xB7 camera fixed in height \xB7 pink dots = the mascot's real path",i/2,l*1.5,l),Zl(`tube pitch ${a.pitch>=0?"+":""}${a.pitch.toFixed(0)}\xB0  \xB7  bank ${a.bank>=0?"+":""}${a.bank.toFixed(0)}\xB0  \xB7  speed ${je.speed.toFixed(1)} m/s${je.air?"  \xB7  jumping":""}`,i/2,e-l*1.2,l)}function Bd(){let i=an.clientWidth,e=an.clientHeight;Fi.setSize(i,e,!1),ti.setSize(i,e),ti.setPixelRatio(Ni),to.resolution.set(Math.round(i*.5),Math.round(e*.5)),on.aspect=i/e,vt&&(vt.u.uScale.value=e*Ni*.5/Math.tan(Ke.degToRad(on.fov)/2)),an.style.setProperty("--u",Math.min(e/537,i/269).toFixed(4)+"px")}new ResizeObserver(Bd).observe(an);function ic(i){if(!(xt&&Y.paused)){Y.time+=i,xt&&r1(i),Ks.uTime.value=Y.time;for(let e of Km)e.uTime.value=Y.time;ke.bubbleU.uTime.value=Y.time,s1(i),c1(i);for(let e of aa)e.angle+=e.speed*i,ec.setFromAxisAngle(e.axis,e.angle),Ql.makeTranslation(e.centre.x,e.centre.y,e.centre.z).multiply(Hb.makeRotationFromQuaternion(ec)).multiply(new Re().makeTranslation(-e.centre.x,-e.centre.y,-e.centre.z)),e.g.matrix.multiplyMatrices(Ql,e.m0);ra.update(i,Y.time),js.update(i,Y.time);for(let e of ke.rings)e.material.color.copy(e.userData.base).multiplyScalar(.8+.25*Math.sin(Y.time*2.4+e.userData.pulse));vt.update(i),l1(i),f1(),Kl&&Kl.update(i,Y.time,Y.phase)}}var Sd=60,Yl=0;function sc(){It?(It.frame=v1(),vt&&(vt.u.uScale.value=an.clientHeight*Ni/It.frame.height),Fi.render(Rt,It.cam)):(vt&&(vt.u.uScale.value=an.clientHeight*Ni*.5/Math.tan(Ke.degToRad(on.fov)/2)),ti.render()),(It||rc)&&x1()}var Rd=performance.now();function n0(i){if(requestAnimationFrame(n0),Y.phase==="loading"||qm)return;let e=Math.min(.05,(i-Rd)/1e3);Rd=i,ic(e),sc(),Sd+=(1/Math.max(e,.001)-Sd)*.05,Yl=Sd<32?Yl+e:0,Yl>2.5&&(Yl=0,to.enabled?to.enabled=!1:Ni>.75&&(Ni=Math.max(.75,Ni*.8),Fi.setPixelRatio(Ni),Bd()))}async function M1(){try{Ne=await(await fetch(Ad.layout)).json(),yt=gm(Ne),kb();let[e,t,n,s,r,o,a,l,c,h,u,d]=await Promise.all([...["castle","drum","mascot","roller","gem","sock","machinery","tower","gear","pipe","crown"].map(Bb),new rs().loadAsync("ui/coin_face.png")]);vt=new tc(1400),oc(e.scene),Pd(e.scene,{saturation:1,brightness:1.06,glow:.35,grade:Jp,haze:[.3,14,45,[.86,.79,1]],shade:[.86,.26,.35]}),ke.castle=Vb(e.scene,Ne.castle),Zb(t),Gb(),Wb(),Xb(),qb(),Kb(s),ra=_m({scene:Rt,mats:ke,track:{TR:yt,L:Ne,W:Zr}}),ke.machinery=ra.root,jb(a),js=ym({scene:Rt,models:{tower:l,gear:c,pipe:h,crown:u},env:ke.env,gold:ke.gold,glowTexture:Jm(),fallGeometry:jm,fallMaterial:ke.fallMat,fx:vt}),Y.decorClear=js.clear,Jb(),Qb(r,d),e1(o),n1(n),pi&&!Td&&(Kl=Jr(ms(3045),()=>Hm({scene:Rt,env:ke.env,TR:yt,L:Ne,W:Zr,mascot:je,camera:on,Particles:tc,fxScale:vt.u.uScale,waterU:Ks,castle:ke.castle,waterSheets:Zs.children,renderPass:ti.passes[0],bumpMascot:i1,drumMeshes:ke.drumMeshes,exitLight:ke.exitLight,r2:xt?xs:null,bloomPass:to,outputPass:ti.passes[ti.passes.length-1],grade:Ym,bubbles:ke.bubbles,rollers:aa,sideMachinery:ke.sideMachinery,fur:ke.fur,mascotModel:je.squash.children[0],setSideMachinery:f=>(Object.assign(ia,f),Id(),Y.machineryInnerX),get rollerCandidate(){return Y.rollerCandidate},set rollerCandidate(f){Y.rollerCandidate=f}})),await zm(ms(3046),Kl.loadExtras)),Td&&m1(),Bd(),Ld(),Y.phase="intro",Js(),ic(1/60),sc(),document.body.classList.add("ready"),tt("loading").hidden=!0,i0()}catch(i){console.error(i),tt("loadMsg").textContent="The washing machine could not load: "+(i&&i.message?i.message:i)+". Reload the page to try again.",s0(i)}}var i0,s0,b1=new Promise((i,e)=>{i0=i,s0=e});requestAnimationFrame(n0);M1();window.__bw={ready:b1,state:()=>({phase:Y.phase,time:+Y.time.toFixed(3),z:+je.z.toFixed(3),x:+je.x.toFixed(3),y:+je.yAbs.toFixed(3),world:je.root.position.toArray().map(i=>+i.toFixed(3)),path:Object.fromEntries(Object.entries(yt.angles(je.z)).map(([i,e])=>[i,+e.toFixed(1)])),cameraUp:on.up.toArray().map(i=>+i.toFixed(3)),lane:je.lane,speed:+je.speed.toFixed(2),air:je.air,slope:+je.lastSlope.toFixed(3),pitchDeg:+Ke.radToDeg(je.pitch).toFixed(1),leanDeg:+Ke.radToDeg(je.lean).toFixed(1),coins:Y.coins,gems:Y.gems,socks:Y.socks,collected:{...Y.collected},laps:Y.laps,camera:on.position.toArray().map(i=>+i.toFixed(3)),cameraPitchDeg:+Ke.radToDeg(Math.asin(on.getWorldDirection(new E).y)).toFixed(2),particles:vt?vt.life.reduce((i,e)=>i+(e>0?1:0),0):0,repairedNormals:Y.repairedNormals,machineryInnerX:Y.machineryInnerX??null,decorClear:Y.decorClear??null,rollerCandidate:Y.rollerCandidate??null,...xt?{hearts:Y.hearts,blasts:Y.blasts,turbos:Y.turbos,paused:Y.paused,blastT:+Y.blastT.toFixed(2),turboT:+Y.turboT.toFixed(2),knocks:Y.knocks,restarts:Y.restarts,bumps:Y.bumps||0}:{}}),blast:()=>Nd(),turbo:()=>Fd(),pause:i=>sa(i),hazards:()=>xs.hazards?xs.hazards():null,tap:()=>{Y.phase==="intro"?no():Ud()},swipe:i=>{Y.phase==="intro"&&no(),i==="left"?la(-1):i==="right"?la(1):i==="up"&&Dd()},advance:(i,e=30)=>{let t=Math.max(1,Math.round(i*e));for(let n=0;n<t;n++)ic(1/e);return sc(),window.__bw.state()},render:sc,lookBack:i=>{je.look=i,je.lookT=-.5},setBloom:i=>{to.enabled=!!i},setSideMachinery:i=>(Object.assign(ia,i),Id(),Y.machineryInnerX),setDecor:(i,e,t)=>(t===null?di[i].splice(e,1):di[i][e]=Object.assign(di[i][e]||{},t),Y.decorClear=js.place(),Y.decorClear),getDecor:()=>JSON.parse(JSON.stringify(di)),pick:(i,e)=>{let t=an.getBoundingClientRect(),n=new Rl;n.setFromCamera(new re(i/t.width*2-1,-(e/t.height)*2+1),on);let s=n.intersectObjects([ke.castle,js.root,ke.sideMachinery].filter(Boolean),!0)[0];return s?{p:s.point.toArray().map(r=>+r.toFixed(2)),obj:s.object.name||s.object.parent?.name||""}:null},project:i=>{let e=new E(...i).project(on),t=an.getBoundingClientRect();return[+((e.x+1)/2*t.width).toFixed(1),+((1-e.y)/2*t.height).toFixed(1)]},setFraming:i=>{i.off&&eo.off.set(...i.off),i.look&&eo.look.set(...i.look),i.fov&&(eo.fov=i.fov),ut.snap=!0},clearanceTrace:(i,e=30)=>{let t=[],n=0+1.5,s=new E,r=o=>o>Ne.tunnelStart+.5&&o<Ne.tunnelEnd-.5;for(let o=0,a=Math.round(i*e);o<a;o++){ic(1/e);let l=je,c=r(l.z)?Math.hypot(l.x,l.yAbs-n)+.4:null,h=null;for(let u=l.z-9;u<=l.z+.5;u+=.05){yt.frame(u,ze),s.copy(on.position).sub(ze.P);let d=Math.abs(s.dot(ze.T));(!h||d<h.along)&&(h={along:d,u,r:Math.hypot(s.dot(ze.R),s.dot(ze.U)-n)})}t.push({t:+Y.time.toFixed(3),z:+l.z.toFixed(2),body:c&&+c.toFixed(3),camera:r(h.u)?+h.r.toFixed(3):null})}return t},debug:()=>({scene:Rt,water:Zs,mascot:je.root,particles:vt.points,renderer:Fi,composer:ti,camera:on,track:yt,layout:Ne,world:Zr,mascotState:je})};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
