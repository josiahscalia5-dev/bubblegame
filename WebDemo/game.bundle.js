var c0=Object.defineProperty;var u0=(i,e)=>{for(var t in e)c0(i,t,{get:e[t],enumerable:!0})};var uh="170";var h0=0,Vd=1,d0=2;var vp=1,f0=2,wi=3,li=0,fn=1,ft=2,ai=0,Ar=1,rn=2,Gd=3,Wd=4,En=5,Ps=100,p0=101,m0=102,g0=103,v0=104,hh=200,An=201,x0=202,y0=203,Po=204,on=205,_0=206,M0=207,b0=208,E0=209,w0=210,S0=211,T0=212,A0=213,R0=214,qc=0,Yc=1,$c=2,Ir=3,Zc=4,Kc=5,jc=6,Jc=7,dh=0,C0=1,P0=2,es=0,fh=1,ph=2,mh=3,gh=4,I0=5,vh=6,Xo=7,Xd="attached",L0="detached",xp=300,Lr=301,Dr=302,Qc=303,eu=304,Pl=306,Ls=1e3,Ti=1001,Io=1002,pn=1003,xh=1004;var wr=1005;var Tn=1006,Eo=1007;var oi=1008;var Ci=1009,yp=1010,_p=1011,Lo=1012,yh=1013,Ds=1014,Qn=1015,ei=1016,_h=1017,Mh=1018,Ur=1020,Mp=35902,bp=1021,Ep=1022,zn=1023,wp=1024,Sp=1025,Rr=1026,Nr=1027,bh=1028,Eh=1029,Tp=1030,wh=1031;var Sh=1033,Xa=33776,qa=33777,Ya=33778,$a=33779,tu=35840,nu=35841,iu=35842,su=35843,ru=36196,ou=37492,au=37496,lu=37808,cu=37809,uu=37810,hu=37811,du=37812,fu=37813,pu=37814,mu=37815,gu=37816,vu=37817,xu=37818,yu=37819,_u=37820,Mu=37821,Za=36492,bu=36494,Eu=36495,Ap=36283,wu=36284,Su=36285,Tu=36286;var Fr=2300,Or=2301,uc=2302,qd=2400,Yd=2401,$d=2402,D0=2500;var Rp=0,Il=1,qo=2,U0=3200,N0=3201;var Th=0,F0=1,ji="",Tt="srgb",gn="srgb-linear",Ll="linear",Et="srgb";var rr=7680;var Zd=519,O0=512,B0=513,H0=514,Cp=515,z0=516,k0=517,V0=518,G0=519,Au=35044,hi=35048;var Kd="300 es",Ai=2e3,Ka=2001,ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=1234567,wo=Math.PI/180,Br=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function Ah(i,e){return(i%e+e)%e}function W0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function X0(i,e,t){return i!==e?(t-i)/(e-i):0}function So(i,e,t){return(1-t)*i+t*e}function q0(i,e,t,n){return So(i,e,1-Math.exp(-t*n))}function Y0(i,e=1){return e-Math.abs(Ah(i,e*2)-e)}function $0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function K0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function j0(i,e){return i+Math.random()*(e-i)}function J0(i){return i*(.5-Math.random())}function Q0(i){i!==void 0&&(jd=i);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eg(i){return i*wo}function tg(i){return i*Br}function ng(i){return(i&i-1)===0&&i!==0}function ig(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ye={DEG2RAD:wo,RAD2DEG:Br,generateUUID:kn,clamp:Qt,euclideanModulo:Ah,mapLinear:W0,inverseLerp:X0,lerp:So,damp:q0,pingpong:Y0,smoothstep:$0,smootherstep:Z0,randInt:K0,randFloat:j0,randFloatSpread:J0,seededRandom:Q0,degToRad:eg,radToDeg:tg,isPowerOfTwo:ng,ceilPowerOfTwo:ig,floorPowerOfTwo:sg,setQuaternionFromProperEuler:rg,normalize:St,denormalize:Jn},ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],_=s[4],y=s[7],U=s[2],T=s[5],R=s[8];return r[0]=o*x+a*v+l*U,r[3]=o*g+a*_+l*T,r[6]=o*p+a*y+l*R,r[1]=c*x+u*v+h*U,r[4]=c*g+u*_+h*T,r[7]=c*p+u*y+h*R,r[2]=d*x+f*v+m*U,r[5]=d*g+f*_+m*T,r[8]=d*p+f*y+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=t*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hc=new lt;function Pp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function og(){let i=Do("canvas");return i.style.display="block",i}var Jd={};function Mo(i){i in Jd||(Jd[i]=!0,console.warn(i))}function ag(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function lg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?Ll:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qd=[.64,.33,.3,.6,.15,.06],ef=[.2126,.7152,.0722],tf=[.3127,.329],nf=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sf=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[gn]:{primaries:Qd,whitePoint:tf,transfer:Ll,toXYZ:nf,fromXYZ:sf,luminanceCoefficients:ef,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Qd,whitePoint:tf,transfer:Et,toXYZ:nf,fromXYZ:sf,luminanceCoefficients:ef,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var or,Ru=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Do("canvas")),or.width=e.width,or.height=e.height;let n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Do("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ug=0,ja=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dc(s[o].image)):r.push(dc(s[o]))}else r=dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hg=0,an=class i extends ts{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=Tn,o=oi,a=zn,l=Ci,c=i.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=kn(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=xp;an.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,U=(p+1)/2,T=(u+d)/4,R=(h+x)/4,I=(m+g)/4;return _>y&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=R/n):y>U?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=I/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cu=class extends ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Cu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ja=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pu=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==m){let g=1-a,p=l*d+c*f+u*m+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let U=Math.sqrt(_),T=Math.atan2(U,p*v);g=Math.sin(g*T)/U,a=Math.sin(a*T)/U}let y=a*v;if(l=l*g+d*y,c=c*g+f*y,u=u*g+m*y,h=h*g+x*y,g===1-a){let U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new w,rf=new At,Xt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),da.subVectors(this.max,co),ar.subVectors(e.a,co),lr.subVectors(e.b,co),cr.subVectors(e.c,co),Xi.subVectors(lr,ar),qi.subVectors(cr,lr),Es.subVectors(ar,cr);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-Es.z,Es.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,Es.z,0,-Es.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-Es.y,Es.x,0];return!pc(t,ar,lr,cr,da)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,ar,lr,cr,da))?!1:(fa.crossVectors(Xi,qi),t=[fa.x,fa.y,fa.z],pc(t,ar,lr,cr,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new w,new w,new w,new w,new w,new w,new w,new w],Zn=new w,ha=new Xt,ar=new w,lr=new w,cr=new w,Xi=new w,qi=new w,Es=new w,co=new w,da=new w,fa=new w,ws=new w;function pc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var dg=new Xt,uo=new w,mc=new w,Un=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);let t=uo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(uo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(mc)),this.expandByPoint(uo.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new w,gc=new w,pa=new w,Yi=new w,vc=new w,ma=new w,xc=new w,Us=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=Yi.dot(this.direction),l=-Yi.dot(pa),c=Yi.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gc).addScaledVector(pa,d),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){vc.subVectors(t,e),ma.subVectors(n,e),xc.crossVectors(vc,ma);let o=this.direction.dot(xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(ma.crossVectors(Yi,ma));if(l<0)return null;let c=a*this.direction.dot(vc.cross(Yi));if(c<0||l+c>o)return null;let u=-a*Yi.dot(xc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,m,x,g)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fg,e,pg)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),$i.crossVectors(n,Ln),$i.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),$i.crossVectors(n,Ln)),$i.normalize(),ga.crossVectors(Ln,$i),s[0]=$i.x,s[4]=ga.x,s[8]=Ln.x,s[1]=$i.y,s[5]=ga.y,s[9]=Ln.y,s[2]=$i.z,s[6]=ga.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],_=n[7],y=n[11],U=n[15],T=s[0],R=s[4],I=s[8],E=s[12],b=s[1],S=s[5],C=s[9],L=s[13],F=s[2],N=s[6],D=s[10],k=s[14],B=s[3],V=s[7],j=s[11],se=s[15];return r[0]=o*T+a*b+l*F+c*B,r[4]=o*R+a*S+l*N+c*V,r[8]=o*I+a*C+l*D+c*j,r[12]=o*E+a*L+l*k+c*se,r[1]=u*T+h*b+d*F+f*B,r[5]=u*R+h*S+d*N+f*V,r[9]=u*I+h*C+d*D+f*j,r[13]=u*E+h*L+d*k+f*se,r[2]=m*T+x*b+g*F+p*B,r[6]=m*R+x*S+g*N+p*V,r[10]=m*I+x*C+g*D+p*j,r[14]=m*E+x*L+g*k+p*se,r[3]=v*T+_*b+y*F+U*B,r[7]=v*R+_*S+y*N+U*V,r[11]=v*I+_*C+y*D+U*j,r[15]=v*E+_*L+y*k+U*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=h*g*c-x*d*c+x*l*f-a*g*f-h*l*p+a*d*p,_=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,y=u*x*c-m*h*c+m*a*f-o*x*f-u*a*p+o*h*p,U=m*h*l-u*x*l-m*a*d+o*x*d+u*a*g-o*h*g,T=t*v+n*_+s*y+r*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=v*R,e[1]=(x*d*r-h*g*r-x*s*f+n*g*f+h*s*p-n*d*p)*R,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=_*R,e[5]=(u*g*r-m*d*r+m*s*f-t*g*f-u*s*p+t*d*p)*R,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(m*h*r-u*x*r-m*n*f+t*x*f+u*n*p-t*h*p)*R,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=U*R,e[13]=(u*x*s-m*h*s+m*n*d-t*x*d-u*n*g+t*h*g)*R,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,x=o*u,g=o*h,p=a*h,v=l*c,_=l*u,y=l*h,U=n.x,T=n.y,R=n.z;return s[0]=(1-(x+p))*U,s[1]=(f+y)*U,s[2]=(m-_)*U,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(m+_)*R,s[9]=(g-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),a=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);let c=1/r,u=1/o,h=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ai){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(a===Ai)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Ka)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ai){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,m,x;if(a===Ai)m=(o+r)*h,x=-2*h;else if(a===Ka)m=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new w,Kn=new Ae,fg=new w(0,0,0),pg=new w(1,1,1),$i=new w,ga=new w,Ln=new w,of=new Ae,af=new At,Mn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mg=0,lf=new w,hr=new At,_i=new Ae,va=new w,ho=new w,gg=new w,vg=new At,cf=new w(1,0,0),uf=new w(0,1,0),hf=new w(0,0,1),df={type:"added"},xg={type:"removed"},dr={type:"childadded",child:null},yc={type:"childremoved",child:null},Ht=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new Mn,n=new At,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new lt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(cf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ho,va,this.up):_i.lookAt(va,ho,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(_i),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xg),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new w(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new w,Mi=new w,_c=new w,bi=new w,fr=new w,pr=new w,ff=new w,Mc=new w,bc=new w,Ec=new w,wc=new mt,Sc=new mt,Tc=new mt,Ji=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),Mi.subVectors(n,t),_c.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Mi),l=jn.dot(_c),c=Mi.dot(Mi),u=Mi.dot(_c),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return wc.setScalar(0),Sc.setScalar(0),Tc.setScalar(0),wc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,n),Tc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wc,r.x),o.addScaledVector(Sc,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Mi.subVectors(e,t),jn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;fr.subVectors(s,n),pr.subVectors(r,n),Mc.subVectors(e,n);let l=fr.dot(Mc),c=pr.dot(Mc);if(l<=0&&c<=0)return t.copy(n);bc.subVectors(e,s);let u=fr.dot(bc),h=pr.dot(bc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fr,o);Ec.subVectors(e,r);let f=fr.dot(Ec),m=pr.dot(Ec);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(pr,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return ff.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(ff,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(fr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Ah(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return dt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Qt(dn.r*255,0,255))*65536+Math.round(Qt(dn.g*255,0,255))*256+Math.round(Qt(dn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Tt){dt.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(xa);let n=So(Zi.h,xa.h,t),s=So(Zi.s,xa.s,t),r=So(Zi.l,xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new xe;xe.NAMES=Ip;var yg=0,bn=class extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=kn(),this.name="",this.blending=Ar,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=on,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==on&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pt=class extends bn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new w,ya=new ae,ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),e}};var Qa=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var el=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},_g=0,Hn=new Ae,Rc=new Ht,mr=new w,Dn=new Xt,fo=new Xt,sn=new w,st=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?el:Qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Dn.min,fo.min),Dn.expandByPoint(sn),sn.addVectors(Dn.max,fo.max),Dn.expandByPoint(sn)):(Dn.expandByPoint(fo.min),Dn.expandByPoint(fo.max))}Dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),sn.add(mr)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new w,l[I]=new w;let c=new w,u=new w,h=new w,d=new ae,f=new ae,m=new ae,x=new w,g=new w;function p(I,E,b){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(S),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(S),a[I].add(x),a[E].add(x),a[b].add(x),l[I].add(g),l[E].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,E=v.length;I<E;++I){let b=v[I],S=b.start,C=b.count;for(let L=S,F=S+C;L<F;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new w,y=new w,U=new w,T=new w;function R(I){U.fromBufferAttribute(s,I),T.copy(U);let E=a[I];_.copy(E),_.sub(U.multiplyScalar(U.dot(E))).normalize(),y.crossVectors(T,E);let S=y.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,S)}for(let I=0,E=v.length;I<E;++I){let b=v[I],S=b.start,C=b.count;for(let L=S,F=S+C;L<F;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pf=new Ae,Ss=new Us,_a=new Un,mf=new w,Ma=new w,ba=new w,Ea=new w,Cc=new w,wa=new w,gf=new w,Sa=new w,Be=class extends Ht{constructor(e=new st,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Cc.fromBufferAttribute(h,e),o?wa.addScaledVector(Cc,u):wa.addScaledVector(Cc.sub(t),u))}t.add(wa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(_a.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(_a,mf)===null||Ss.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(pf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,U=_;y<U;y+=3){let T=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);s=Ta(this,p,e,n,c,u,h,T,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);s=Ta(this,o,e,n,c,u,h,v,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,U=_;y<U;y+=3){let T=y,R=y+1,I=y+2;s=Ta(this,p,e,n,c,u,h,T,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,_=g+1,y=g+2;s=Ta(this,o,e,n,c,u,h,v,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Mg(i,e,t,n,s,r,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===li,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:i}}function Ta(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ma),i.getVertexPosition(l,ba),i.getVertexPosition(c,Ea);let u=Mg(i,e,t,n,Ma,ba,Ea,gf);if(u){let h=new w;Ji.getBarycoord(gf,Ma,ba,Ea,h),s&&(u.uv=Ji.getInterpolatedAttribute(s,a,l,c,h,new ae)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,a,l,c,h,new ae)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new w,materialIndex:0};Ji.getNormal(Ma,ba,Ea,d.normal),u.face=d,u.barycoord=h}return u}var Ns=class i extends st{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(h,2));function m(x,g,p,v,_,y,U,T,R,I,E){let b=y/R,S=U/I,C=y/2,L=U/2,F=T/2,N=R+1,D=I+1,k=0,B=0,V=new w;for(let j=0;j<D;j++){let se=j*S-L;for(let ye=0;ye<N;ye++){let ke=ye*b-C;V[x]=ke*v,V[g]=se*_,V[p]=F,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[p]=T>0?1:-1,u.push(V.x,V.y,V.z),h.push(ye/R),h.push(1-j/I),k+=1}}for(let j=0;j<I;j++)for(let se=0;se<R;se++){let ye=d+se+N*j,ke=d+se+N*(j+1),q=d+(se+1)+N*(j+1),ne=d+(se+1)+N*j;l.push(ye,ke,ne),l.push(ke,q,ne),B+=6}a.addGroup(f,B,E),f+=B,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Hr(i[t]);for(let s in n)e[s]=n[s]}return e}function bg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var hs={clone:Hr,merge:yn},Eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rt=class extends bn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eg,this.fragmentShader=wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},tl=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new w,vf=new ae,xf=new ae,Bt=class extends tl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,vf,xf),t.subVectors(xf,vf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gr=-90,vr=1,Iu=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(gr,vr,e,t);s.layers=this.layers,this.add(s);let r=new Bt(gr,vr,e,t);r.layers=this.layers,this.add(r);let o=new Bt(gr,vr,e,t);o.layers=this.layers,this.add(o);let a=new Bt(gr,vr,e,t);a.layers=this.layers,this.add(a);let l=new Bt(gr,vr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(gr,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},nl=class extends an{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lu=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ns(5,5,5),r=new rt({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ai});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=Tn),new Iu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Pc=new w,Sg=new w,Tg=new lt,Si=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pc.subVectors(n,t).cross(Sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tg.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Un,Aa=new w,No=class{constructor(e=new Si,t=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-p).normalize(),n[1].setComponents(l+r,d+c,g+f,y+p).normalize(),n[2].setComponents(l+o,d+u,g+m,y+v).normalize(),n[3].setComponents(l-o,d-u,g-m,y-v).normalize(),n[4].setComponents(l-a,d-h,g-x,y-_).normalize(),t===Ai)n[5].setComponents(l+a,d+h,g+x,y+_).normalize();else if(t===Ka)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ag(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vn=class i extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let v=p*d-o;for(let _=0;_<c;_++){let y=_*h-r;m.push(y,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),U=v+1+c*(p+1),T=v+1+c*p;f.push(_,y,T),f.push(y,U,T)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jg=`#define PI 3.141592653589793
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
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mv=`#ifdef USE_GRADIENTMAP
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
}`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
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
#endif`,Tv=`struct PhysicalMaterial {
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
}`,Av=`
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ov=`#if defined( USE_POINTS_UV )
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
#endif`,Bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dx=`float getShadowMask() {
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
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,bx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
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
}`,Ux=`#if DEPTH_PACKING == 3200
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
}`,Nx=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
}`,zx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Gx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define MATCAP
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
}`,Yx=`#define NORMAL
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
}`,$x=`#define NORMAL
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
}`,Zx=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,jx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
}`,Qx=`#define TOON
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
}`,ey=`#define TOON
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
}`,ty=`uniform float size;
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#include <common>
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
}`,sy=`uniform vec3 color;
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
}`,ry=`uniform float rotation;
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
}`,oy=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Ig,alphatest_fragment:Lg,alphatest_pars_fragment:Dg,aomap_fragment:Ug,aomap_pars_fragment:Ng,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:Bg,beginnormal_vertex:Hg,bsdfs:zg,iridescence_fragment:kg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:$g,color_pars_vertex:Zg,color_vertex:Kg,common:jg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:ev,displacementmap_vertex:tv,emissivemap_fragment:nv,emissivemap_pars_fragment:iv,colorspace_fragment:sv,colorspace_pars_fragment:rv,envmap_fragment:ov,envmap_common_pars_fragment:av,envmap_pars_fragment:lv,envmap_pars_vertex:cv,envmap_physical_pars_fragment:_v,envmap_vertex:uv,fog_vertex:hv,fog_pars_vertex:dv,fog_fragment:fv,fog_pars_fragment:pv,gradientmap_pars_fragment:mv,lightmap_pars_fragment:gv,lights_lambert_fragment:vv,lights_lambert_pars_fragment:xv,lights_pars_begin:yv,lights_toon_fragment:Mv,lights_toon_pars_fragment:bv,lights_phong_fragment:Ev,lights_phong_pars_fragment:wv,lights_physical_fragment:Sv,lights_physical_pars_fragment:Tv,lights_fragment_begin:Av,lights_fragment_maps:Rv,lights_fragment_end:Cv,logdepthbuf_fragment:Pv,logdepthbuf_pars_fragment:Iv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Dv,map_fragment:Uv,map_pars_fragment:Nv,map_particle_fragment:Fv,map_particle_pars_fragment:Ov,metalnessmap_fragment:Bv,metalnessmap_pars_fragment:Hv,morphinstance_vertex:zv,morphcolor_vertex:kv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Gv,morphtarget_vertex:Wv,normal_fragment_begin:Xv,normal_fragment_maps:qv,normal_pars_fragment:Yv,normal_pars_vertex:$v,normal_vertex:Zv,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:jv,clearcoat_normal_fragment_maps:Jv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:rx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:dx,skinbase_vertex:fx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:vx,specularmap_pars_fragment:xx,tonemapping_fragment:yx,tonemapping_pars_fragment:_x,transmission_fragment:Mx,transmission_pars_fragment:bx,uv_pars_fragment:Ex,uv_pars_vertex:wx,uv_vertex:Sx,worldpos_vertex:Tx,background_vert:Ax,background_frag:Rx,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Ix,cube_frag:Lx,depth_vert:Dx,depth_frag:Ux,distanceRGBA_vert:Nx,distanceRGBA_frag:Fx,equirect_vert:Ox,equirect_frag:Bx,linedashed_vert:Hx,linedashed_frag:zx,meshbasic_vert:kx,meshbasic_frag:Vx,meshlambert_vert:Gx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:Yx,meshnormal_frag:$x,meshphong_vert:Zx,meshphong_frag:Kx,meshphysical_vert:jx,meshphysical_frag:Jx,meshtoon_vert:Qx,meshtoon_frag:ey,points_vert:ty,points_frag:ny,shadow_vert:iy,shadow_frag:sy,sprite_vert:ry,sprite_frag:oy},De={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ri={basic:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xe(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new xe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:yn([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:yn([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:yn([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:yn([De.common,De.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:yn([De.lights,De.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ri.physical={uniforms:yn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Ra={r:0,b:0,g:0},As=new Mn,ay=new Ae;function ly(i,e,t,n,s,r,o){let a=new xe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,y=m(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,_){let y=m(_);y&&(y.isCubeTexture||y.mapping===Pl)?(u===void 0&&(u=new Be(new Ns(1,1,1),new rt({name:"BackgroundCubeMaterial",uniforms:Hr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),As.copy(_.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ay.makeRotationFromEuler(As)),u.material.toneMapped=dt.getTransfer(y.colorSpace)!==Et,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Be(new Vn(2,2),new rt({name:"BackgroundMaterial",uniforms:Hr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(Ra,Lp(i)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:g}}function cy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,S,C,L,F){let N=!1,D=h(L,C,S);r!==D&&(r=D,c(r.object)),N=f(b,L,C,F),N&&m(b,L,C,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(b,S,C,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,S,C){let L=C.wireframe===!0,F=n[b.id];F===void 0&&(F={},n[b.id]=F);let N=F[S.id];N===void 0&&(N={},F[S.id]=N);let D=N[L];return D===void 0&&(D=d(l()),N[L]=D),D}function d(b){let S=[],C=[],L=[];for(let F=0;F<t;F++)S[F]=0,C[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:C,attributeDivisors:L,object:b,attributes:{},index:null}}function f(b,S,C,L){let F=r.attributes,N=S.attributes,D=0,k=C.getAttributes();for(let B in k)if(k[B].location>=0){let j=F[B],se=N[B];if(se===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;D++}return r.attributesNum!==D||r.index!==L}function m(b,S,C,L){let F={},N=S.attributes,D=0,k=C.getAttributes();for(let B in k)if(k[B].location>=0){let j=N[B];j===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(j=b.instanceColor));let se={};se.attribute=j,j&&j.data&&(se.data=j.data),F[B]=se,D++}r.attributes=F,r.attributesNum=D,r.index=L}function x(){let b=r.newAttributes;for(let S=0,C=b.length;S<C;S++)b[S]=0}function g(b){p(b,0)}function p(b,S){let C=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;C[b]=1,L[b]===0&&(i.enableVertexAttribArray(b),L[b]=1),F[b]!==S&&(i.vertexAttribDivisor(b,S),F[b]=S)}function v(){let b=r.newAttributes,S=r.enabledAttributes;for(let C=0,L=S.length;C<L;C++)S[C]!==b[C]&&(i.disableVertexAttribArray(C),S[C]=0)}function _(b,S,C,L,F,N,D){D===!0?i.vertexAttribIPointer(b,S,C,F,N):i.vertexAttribPointer(b,S,C,L,F,N)}function y(b,S,C,L){x();let F=L.attributes,N=C.getAttributes(),D=S.defaultAttributeValues;for(let k in N){let B=N[k];if(B.location>=0){let V=F[k];if(V===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),V!==void 0){let j=V.normalized,se=V.itemSize,ye=e.get(V);if(ye===void 0)continue;let ke=ye.buffer,q=ye.type,ne=ye.bytesPerElement,Ee=q===i.INT||q===i.UNSIGNED_INT||V.gpuType===yh;if(V.isInterleavedBufferAttribute){let de=V.data,ue=de.stride,Ce=V.offset;if(de.isInstancedInterleavedBuffer){for(let _e=0;_e<B.locationSize;_e++)p(B.location+_e,de.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<B.locationSize;_e++)g(B.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let _e=0;_e<B.locationSize;_e++)_(B.location+_e,se/B.locationSize,q,j,ue*ne,(Ce+se/B.locationSize*_e)*ne,Ee)}else{if(V.isInstancedBufferAttribute){for(let de=0;de<B.locationSize;de++)p(B.location+de,V.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let de=0;de<B.locationSize;de++)g(B.location+de);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let de=0;de<B.locationSize;de++)_(B.location+de,se/B.locationSize,q,j,se*ne,se/B.locationSize*de*ne,Ee)}}else if(D!==void 0){let j=D[k];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(B.location,j);break;case 3:i.vertexAttrib3fv(B.location,j);break;case 4:i.vertexAttrib4fv(B.location,j);break;default:i.vertexAttrib1fv(B.location,j)}}}}v()}function U(){I();for(let b in n){let S=n[b];for(let C in S){let L=S[C];for(let F in L)u(L[F].object),delete L[F];delete S[C]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let S=n[b.id];for(let C in S){let L=S[C];for(let F in L)u(L[F].object),delete L[F];delete S[C]}delete n[b.id]}function R(b){for(let S in n){let C=n[S];if(C[b.id]===void 0)continue;let L=C[b.id];for(let F in L)u(L[F].object),delete L[F];delete C[b.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function uy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==zn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ci&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:U,maxSamples:T}}function dy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Si,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,_=v*4,y=p.clippingState||null;l.value=y,y=u(m,d,_,f);for(let U=0;U!==_;++U)y[U]=t[U];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function fy(i){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=Lr:a===eu&&(o.mapping=Dr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qc||a===eu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Lu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ci=class extends tl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sr=4,yf=[.125,.215,.35,.446,.526,.582],Is=20,Ic=new ci,_f=new xe,Lc=null,Dc=0,Uc=0,Nc=!1,Cs=(1+Math.sqrt(5))/2,xr=1/Cs,Mf=[new w(-Cs,xr,0),new w(Cs,xr,0),new w(-xr,0,Cs),new w(xr,0,Cs),new w(0,Cs,-xr),new w(0,Cs,xr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ei,format:zn,colorSpace:gn,depthBuffer:!1},s=bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=py(r)),this._blurMaterial=my(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Ic)}_sceneToCubeUV(e,t,n,s){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_f),u.toneMapping=es,u.autoClear=!1;let f=new Pt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new Be(new Ns,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(_f),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Ca(s,v*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Lr||e.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mf[(s-r-1)%Mf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Be(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Is-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):Is;g>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Is}`);let p=[],v=0;for(let R=0;R<Is;++R){let I=R/x,E=Math.exp(-I*I/2);p.push(E),R===0?v+=E:R<g&&(v+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let y=this._sizeLods[s],U=3*y*(s>_-Sr?s-_+Sr:0),T=4*(this._cubeSize-y);Ca(t,U,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Ic)}};function py(i){let e=[],t=[],n=[],s=i,r=i-Sr+1+yf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Sr?l=yf[o-i+Sr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),_=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,I=T>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(E,x*m*T),_.set(d,g*m*T);let b=[T,T,T,T,T,T];y.set(b,p*m*T)}let U=new st;U.setAttribute("position",new ot(v,x)),U.setAttribute("uv",new ot(_,g)),U.setAttribute("faceIndex",new ot(y,p)),e.push(U),s>Sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bf(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function my(i,e,t){let n=new Float32Array(Is),s=new w(0,1,0);return new rt({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ef(){return new rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function wf(){return new rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function gy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Qc||l===eu,u=l===Lr||l===Dr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new zr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Mo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xy(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){let U=v[_+0],T=v[_+1],R=v[_+2];d.push(U,T,T,R,R,U)}}else if(m!==void 0){let v=m.array;x=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let U=_+0,T=_+1,R=_+2;d.push(U,T,T,R,R,U)}}else return;let g=new(Pp(d)?el:Qa)(d,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function yy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _y(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function My(i,e,t){let n=new WeakMap,s=new mt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,U=1;y>e.maxTextureSize&&(U=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*U*4*h),R=new Ja(T,y,U,h);R.type=Qn,R.needsUpdate=!0;let I=_*4;for(let b=0;b<h;b++){let S=g[b],C=p[b],L=v[b],F=y*U*4*b;for(let N=0;N<S.count;N++){let D=N*I;f===!0&&(s.fromBufferAttribute(S,N),T[F+D+0]=s.x,T[F+D+1]=s.y,T[F+D+2]=s.z,T[F+D+3]=0),m===!0&&(s.fromBufferAttribute(C,N),T[F+D+4]=s.x,T[F+D+5]=s.y,T[F+D+6]=s.z,T[F+D+7]=0),x===!0&&(s.fromBufferAttribute(L,N),T[F+D+8]=s.x,T[F+D+9]=s.y,T[F+D+10]=s.z,T[F+D+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new ae(y,U)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function by(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var il=class extends an{constructor(e,t,n,s,r,o,a,l,c,u=Rr){if(u!==Rr&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rr&&(n=Ds),n===void 0&&u===Nr&&(n=Ur),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Up=new an,Sf=new il(1,1),Np=new Ja,Fp=new Pu,Op=new nl,Tf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Pf=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Tf[s];if(r===void 0&&(r=new Float32Array(s),Tf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dl(i,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Ay(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Pf.set(n),i.uniformMatrix2fv(this.addr,!1,Pf),tn(t,n)}}function Ry(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Cf.set(n),i.uniformMatrix3fv(this.addr,!1,Cf),tn(t,n)}}function Cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Rf.set(n),i.uniformMatrix4fv(this.addr,!1,Rf),tn(t,n)}}function Py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function By(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=Cp,r=Sf):r=Up,t.setTexture2D(e||r,s)}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fp,s)}function zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Op,s)}function ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Np,s)}function Vy(i){switch(i){case 5126:return Ey;case 35664:return wy;case 35665:return Sy;case 35666:return Ty;case 35674:return Ay;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Py;case 35667:case 35671:return Iy;case 35668:case 35672:return Ly;case 35669:case 35673:return Dy;case 5125:return Uy;case 36294:return Ny;case 36295:return Fy;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}function Gy(i,e){i.uniform1fv(this.addr,e)}function Wy(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function Xy(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function qy(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function Yy(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $y(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zy(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ky(i,e){i.uniform1iv(this.addr,e)}function jy(i,e){i.uniform2iv(this.addr,e)}function Jy(i,e){i.uniform3iv(this.addr,e)}function Qy(i,e){i.uniform4iv(this.addr,e)}function e_(i,e){i.uniform1uiv(this.addr,e)}function t_(i,e){i.uniform2uiv(this.addr,e)}function n_(i,e){i.uniform3uiv(this.addr,e)}function i_(i,e){i.uniform4uiv(this.addr,e)}function s_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Up,r[o])}function r_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fp,r[o])}function o_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Op,r[o])}function a_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Np,r[o])}function l_(i){switch(i){case 5126:return Gy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return $y;case 35676:return Zy;case 5124:case 35670:return Ky;case 35667:case 35671:return jy;case 35668:case 35672:return Jy;case 35669:case 35673:return Qy;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}var Du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}},Uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l_(t.type)}},Nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function If(i,e){i.seq.push(e),i.map[e.id]=e}function c_(i,e,t){let n=i.name,s=n.length;for(Fc.lastIndex=0;;){let r=Fc.exec(n),o=Fc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){If(t,c===void 0?new Du(a,i,e):new Uu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Nu(a),If(t,h)),t=h}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);c_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Lf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u_=37297,h_=0;function d_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Df=new lt;function f_(i){dt._getMatrix(Df,dt.workingColorSpace,i);let e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Ll:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+d_(i.getShaderSource(e),o)}else return s}function p_(i,e){let t=f_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function m_(i,e){let t;switch(e){case fh:t="Linear";break;case ph:t="Reinhard";break;case mh:t="Cineon";break;case gh:t="ACESFilmic";break;case vh:t="AgX";break;case Xo:t="Neutral";break;case I0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pa=new w;function g_(){dt.getLuminanceCoefficients(Pa);let i=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function x_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function bo(i){return i!==""}function Nf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var __=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(i){return i.replace(__,b_)}var M_=new Map;function b_(i,e){let t=ct[e];if(t===void 0){let n=M_.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fu(t)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(i){return i.replace(E_,w_)}function w_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function S_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function T_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function R_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case C0:e="ENVMAP_BLENDING_MIX";break;case P0:e="ENVMAP_BLENDING_ADD";break}return e}function C_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function P_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=S_(t),c=T_(t),u=A_(t),h=R_(t),d=C_(t),f=v_(t),m=x_(r),x=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(bo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(g=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?ct.tonemapping_pars_fragment:"",t.toneMapping!==es?m_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,p_("linearToOutputTexel",t.outputColorSpace),g_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),o=Fu(o),o=Nf(o,t),o=Ff(o,t),a=Fu(a),a=Nf(a,t),a=Ff(a,t),o=Of(o),a=Of(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+g+o,y=v+p+a,U=Lf(s,s.VERTEX_SHADER,_),T=Lf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,U),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(S){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(U).trim(),F=s.getShaderInfoLog(T).trim(),N=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,T);else{let k=Uf(s,U,"vertex"),B=Uf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+C+`
`+k+`
`+B)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||F==="")&&(D=!1);D&&(S.diagnostics={runnable:N,programLog:C,vertexShader:{log:L,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(U),s.deleteShader(T),I=new Pr(s,x),E=y_(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,u_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=T,this}var I_=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}},Bu=class{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}};function L_(i,e,t,n,s,r,o){let a=new Uo,l=new Ou,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,b,S,C,L){let F=C.fog,N=L.geometry,D=E.isMeshStandardMaterial?C.environment:null,k=(E.isMeshStandardMaterial?t:e).get(E.envMap||D),B=k&&k.mapping===Pl?k.image.height:null,V=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=j!==void 0?j.length:0,ye=0;N.morphAttributes.position!==void 0&&(ye=1),N.morphAttributes.normal!==void 0&&(ye=2),N.morphAttributes.color!==void 0&&(ye=3);let ke,q,ne,Ee;if(V){let ut=ri[V];ke=ut.vertexShader,q=ut.fragmentShader}else ke=E.vertexShader,q=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),Ee=l.getFragmentShaderID(E);let de=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,Pe=!!E.map,ee=!!E.matcap,re=!!k,O=!!E.aoMap,Te=!!E.lightMap,te=!!E.bumpMap,ce=!!E.normalMap,pe=!!E.displacementMap,Ue=!!E.emissiveMap,be=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,H=E.clearcoat>0,G=E.dispersion>0,W=E.iridescence>0,Y=E.sheen>0,fe=E.transmission>0,ve=M&&!!E.anisotropyMap,me=H&&!!E.clearcoatMap,Ie=H&&!!E.clearcoatNormalMap,le=H&&!!E.clearcoatRoughnessMap,oe=W&&!!E.iridescenceMap,he=W&&!!E.iridescenceThicknessMap,we=Y&&!!E.sheenColorMap,Me=Y&&!!E.sheenRoughnessMap,$e=!!E.specularMap,qe=!!E.specularColorMap,it=!!E.specularIntensityMap,z=fe&&!!E.transmissionMap,ge=fe&&!!E.thicknessMap,K=!!E.gradientMap,ie=!!E.alphaMap,Le=E.alphaTest>0,Fe=!!E.alphaHash,Qe=!!E.extensions,Ct=es;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let Zt={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:ke,fragmentShader:q,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:gn,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:ee,envMap:re,envMapMode:re&&k.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:Te,bumpMap:te,normalMap:ce,displacementMap:d&&pe,emissiveMap:Ue,normalMapObjectSpace:ce&&E.normalMapType===F0,normalMapTangentSpace:ce&&E.normalMapType===Th,metalnessMap:be,roughnessMap:P,anisotropy:M,anisotropyMap:ve,clearcoat:H,clearcoatMap:me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:le,dispersion:G,iridescence:W,iridescenceMap:oe,iridescenceThicknessMap:he,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Me,specularMap:$e,specularColorMap:qe,specularIntensityMap:it,transmission:fe,transmissionMap:z,thicknessMap:ge,gradientMap:K,opaque:E.transparent===!1&&E.blending===Ar&&E.alphaToCoverage===!1,alphaMap:ie,alphaTest:Le,alphaHash:Fe,combine:E.combine,mapUv:Pe&&x(E.map.channel),aoMapUv:O&&x(E.aoMap.channel),lightMapUv:Te&&x(E.lightMap.channel),bumpMapUv:te&&x(E.bumpMap.channel),normalMapUv:ce&&x(E.normalMap.channel),displacementMapUv:pe&&x(E.displacementMap.channel),emissiveMapUv:Ue&&x(E.emissiveMap.channel),metalnessMapUv:be&&x(E.metalnessMap.channel),roughnessMapUv:P&&x(E.roughnessMap.channel),anisotropyMapUv:ve&&x(E.anisotropyMap.channel),clearcoatMapUv:me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(E.sheenRoughnessMap.channel),specularMapUv:$e&&x(E.specularMap.channel),specularColorMapUv:qe&&x(E.specularColorMap.channel),specularIntensityMapUv:it&&x(E.specularIntensityMap.channel),transmissionMapUv:z&&x(E.transmissionMap.channel),thicknessMapUv:ge&&x(E.thicknessMap.channel),alphaMapUv:ie&&x(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ce||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Pe||ie),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===Et,decodeVideoTextureEmissive:Ue&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===Et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ft,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&E.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function p(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let S in E.defines)b.push(S),b.push(E.defines[S]);return E.isRawShaderMaterial===!1&&(v(b,E),_(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function v(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function _(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let b=m[E.type],S;if(b){let C=ri[b];S=hs.clone(C.uniforms)}else S=E.uniforms;return S}function U(E,b){let S;for(let C=0,L=u.length;C<L;C++){let F=u[C];if(F.cacheKey===b){S=F,++S.usedTimes;break}}return S===void 0&&(S=new P_(i,b,E,r),u.push(S)),S}function T(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:I}}function D_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function U_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function a(h,d,f,m,x,g){let p=o(h,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,m,x,g){let p=o(h,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||U_),n.length>1&&n.sort(d||Hf),s.length>1&&s.sort(d||Hf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function N_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new zf,i.set(n,[o])):s>=r.length?(o=new zf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new xe};break;case"SpotLight":t={position:new w,direction:new w,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function O_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var B_=0;function H_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z_(i){let e=new F_,t=O_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let s=new w,r=new Ae,o=new Ae;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,_=0,y=0,U=0,T=0,R=0;c.sort(H_);for(let E=0,b=c.length;E<b;E++){let S=c[E],C=S.color,L=S.intensity,F=S.distance,N=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=C.r*L,h+=C.g*L,d+=C.b*L;else if(S.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(S.sh.coefficients[D],L);R++}else if(S.isDirectionalLight){let D=e.get(S);if(D.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let k=S.shadow,B=t.get(S);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=S.shadow.matrix,v++}n.directional[f]=D,f++}else if(S.isSpotLight){let D=e.get(S);D.position.setFromMatrixPosition(S.matrixWorld),D.color.copy(C).multiplyScalar(L),D.distance=F,D.coneCos=Math.cos(S.angle),D.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),D.decay=S.decay,n.spot[x]=D;let k=S.shadow;if(S.map&&(n.spotLightMap[U]=S.map,U++,k.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=k.matrix,S.castShadow){let B=t.get(S);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=N,y++}x++}else if(S.isRectAreaLight){let D=e.get(S);D.color.copy(C).multiplyScalar(L),D.halfWidth.set(S.width*.5,0,0),D.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=D,g++}else if(S.isPointLight){let D=e.get(S);if(D.color.copy(S.color).multiplyScalar(S.intensity),D.distance=S.distance,D.decay=S.decay,S.castShadow){let k=S.shadow,B=t.get(S);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=S.shadow.matrix,_++}n.point[m]=D,m++}else if(S.isHemisphereLight){let D=e.get(S);D.skyColor.copy(S.color).multiplyScalar(L),D.groundColor.copy(S.groundColor).multiplyScalar(L),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==U||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=U,I.numLightProbes=R,n.version=B_++)}function l(c,u){let h=0,d=0,f=0,m=0,x=0,g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function kf(i){let e=new z_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function k_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new kf(i),e.set(s,[a])):r>=o.length?(a=new kf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Hu=class extends bn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zu=class extends bn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function W_(i,e,t){let n=new No,s=new ae,r=new ae,o=new mt,a=new Hu({depthPacking:N0}),l=new zu,c={},u=t.maxTextureSize,h={[li]:fn,[fn]:li,[ft]:ft},d=new rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:V_,fragmentShader:G_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new st;m.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vp;let p=this.type;this.render=function(T,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ai),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=p!==wi&&this.type===wi,F=p===wi&&this.type!==wi;for(let N=0,D=T.length;N<D;N++){let k=T[N],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let V=B.getFrameExtents();if(s.multiply(V),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,B.mapSize.y=r.y)),B.map===null||L===!0||F===!0){let se=this.type!==wi?{minFilter:pn,magFilter:pn}:{};B.map!==null&&B.map.dispose(),B.map=new _n(s.x,s.y,se),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let j=B.getViewportCount();for(let se=0;se<j;se++){let ye=B.getViewport(se);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),C.viewport(o),B.updateMatrices(k,se),n=B.getFrustum(),y(R,I,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===wi&&v(B,I),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,b,S)};function v(T,R){let I=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,I,f,x,null)}function _(T,R,I,E){let b=null,S=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)b=S;else if(b=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let C=b.uuid,L=R.uuid,F=c[C];F===void 0&&(F={},c[C]=F);let N=F[L];N===void 0&&(N=b.clone(),F[L]=N,R.addEventListener("dispose",U)),b=N}if(b.visible=R.visible,b.wireframe=R.wireframe,E===wi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let C=i.properties.get(b);C.light=I}return b}function y(T,R,I,E,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===wi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let L=e.update(T),F=T.material;if(Array.isArray(F)){let N=L.groups;for(let D=0,k=N.length;D<k;D++){let B=N[D],V=F[B.materialIndex];if(V&&V.visible){let j=_(T,V,E,b);T.onBeforeShadow(i,T,R,I,L,j,B),i.renderBufferDirect(I,null,L,j,T,B),T.onAfterShadow(i,T,R,I,L,j,B)}}}else if(F.visible){let N=_(T,F,E,b);T.onBeforeShadow(i,T,R,I,L,N,null),i.renderBufferDirect(I,null,L,N,T,null),T.onAfterShadow(i,T,R,I,L,N,null)}}let C=T.children;for(let L=0,F=C.length;L<F;L++)y(C[L],R,I,E,b)}function U(T){T.target.removeEventListener("dispose",U);for(let I in c){let E=c[I],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var X_={[qc]:Yc,[$c]:jc,[Zc]:Jc,[Ir]:Kc,[Yc]:qc,[jc]:$c,[Jc]:Zc,[Kc]:Ir};function q_(i,e){function t(){let z=!1,ge=new mt,K=null,ie=new mt(0,0,0,0);return{setMask:function(Le){K!==Le&&!z&&(i.colorMask(Le,Le,Le,Le),K=Le)},setLocked:function(Le){z=Le},setClear:function(Le,Fe,Qe,Ct,Zt){Zt===!0&&(Le*=Ct,Fe*=Ct,Qe*=Ct),ge.set(Le,Fe,Qe,Ct),ie.equals(ge)===!1&&(i.clearColor(Le,Fe,Qe,Ct),ie.copy(ge))},reset:function(){z=!1,K=null,ie.set(-1,0,0,0)}}}function n(){let z=!1,ge=!1,K=null,ie=null,Le=null;return{setReversed:function(Fe){if(ge!==Fe){let Qe=e.get("EXT_clip_control");ge?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let Ct=Le;Le=null,this.setClear(Ct)}ge=Fe},getReversed:function(){return ge},setTest:function(Fe){Fe?de(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(Fe){K!==Fe&&!z&&(i.depthMask(Fe),K=Fe)},setFunc:function(Fe){if(ge&&(Fe=X_[Fe]),ie!==Fe){switch(Fe){case qc:i.depthFunc(i.NEVER);break;case Yc:i.depthFunc(i.ALWAYS);break;case $c:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Zc:i.depthFunc(i.EQUAL);break;case Kc:i.depthFunc(i.GEQUAL);break;case jc:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Fe}},setLocked:function(Fe){z=Fe},setClear:function(Fe){Le!==Fe&&(ge&&(Fe=1-Fe),i.clearDepth(Fe),Le=Fe)},reset:function(){z=!1,K=null,ie=null,Le=null,ge=!1}}}function s(){let z=!1,ge=null,K=null,ie=null,Le=null,Fe=null,Qe=null,Ct=null,Zt=null;return{setTest:function(ut){z||(ut?de(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(ut){ge!==ut&&!z&&(i.stencilMask(ut),ge=ut)},setFunc:function(ut,vn,Yt){(K!==ut||ie!==vn||Le!==Yt)&&(i.stencilFunc(ut,vn,Yt),K=ut,ie=vn,Le=Yt)},setOp:function(ut,vn,Yt){(Fe!==ut||Qe!==vn||Ct!==Yt)&&(i.stencilOp(ut,vn,Yt),Fe=ut,Qe=vn,Ct=Yt)},setLocked:function(ut){z=ut},setClear:function(ut){Zt!==ut&&(i.clearStencil(ut),Zt=ut)},reset:function(){z=!1,ge=null,K=null,ie=null,Le=null,Fe=null,Qe=null,Ct=null,Zt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,y=null,U=null,T=null,R=new xe(0,0,0),I=0,E=!1,b=null,S=null,C=null,L=null,F=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,k=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=k>=2);let V=null,j={},se=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),ke=new mt().fromArray(se),q=new mt().fromArray(ye);function ne(z,ge,K,ie){let Le=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(z,Fe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<K;Qe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(ge+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Fe}let Ee={};Ee[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Ir),te(!1),ce(Vd),de(i.CULL_FACE),O(ai);function de(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Ce(z,ge){return h[z]!==ge?(i.bindFramebuffer(z,ge),h[z]=ge,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function _e(z,ge){let K=f,ie=!1;if(z){K=d.get(ge),K===void 0&&(K=[],d.set(ge,K));let Le=z.textures;if(K.length!==Le.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,Qe=Le.length;Fe<Qe;Fe++)K[Fe]=i.COLOR_ATTACHMENT0+Fe;K.length=Le.length,ie=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ie=!0);ie&&i.drawBuffers(K)}function Pe(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let ee={[Ps]:i.FUNC_ADD,[p0]:i.FUNC_SUBTRACT,[m0]:i.FUNC_REVERSE_SUBTRACT};ee[g0]=i.MIN,ee[v0]=i.MAX;let re={[hh]:i.ZERO,[An]:i.ONE,[x0]:i.SRC_COLOR,[Po]:i.SRC_ALPHA,[w0]:i.SRC_ALPHA_SATURATE,[b0]:i.DST_COLOR,[_0]:i.DST_ALPHA,[y0]:i.ONE_MINUS_SRC_COLOR,[on]:i.ONE_MINUS_SRC_ALPHA,[E0]:i.ONE_MINUS_DST_COLOR,[M0]:i.ONE_MINUS_DST_ALPHA,[S0]:i.CONSTANT_COLOR,[T0]:i.ONE_MINUS_CONSTANT_COLOR,[A0]:i.CONSTANT_ALPHA,[R0]:i.ONE_MINUS_CONSTANT_ALPHA};function O(z,ge,K,ie,Le,Fe,Qe,Ct,Zt,ut){if(z===ai){x===!0&&(ue(i.BLEND),x=!1);return}if(x===!1&&(de(i.BLEND),x=!0),z!==En){if(z!==g||ut!==E){if((p!==Ps||y!==Ps)&&(i.blendEquation(i.FUNC_ADD),p=Ps,y=Ps),ut)switch(z){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.ONE,i.ONE);break;case Gd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,_=null,U=null,T=null,R.set(0,0,0),I=0,g=z,E=ut}return}Le=Le||ge,Fe=Fe||K,Qe=Qe||ie,(ge!==p||Le!==y)&&(i.blendEquationSeparate(ee[ge],ee[Le]),p=ge,y=Le),(K!==v||ie!==_||Fe!==U||Qe!==T)&&(i.blendFuncSeparate(re[K],re[ie],re[Fe],re[Qe]),v=K,_=ie,U=Fe,T=Qe),(Ct.equals(R)===!1||Zt!==I)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Zt),R.copy(Ct),I=Zt),g=z,E=!1}function Te(z,ge){z.side===ft?ue(i.CULL_FACE):de(i.CULL_FACE);let K=z.side===fn;ge&&(K=!K),te(K),z.blending===Ar&&z.transparent===!1?O(ai):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let ie=z.stencilWrite;a.setTest(ie),ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ue(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function ce(z){z!==h0?(de(i.CULL_FACE),z!==S&&(z===Vd?i.cullFace(i.BACK):z===d0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),S=z}function pe(z){z!==C&&(D&&i.lineWidth(z),C=z)}function Ue(z,ge,K){z?(de(i.POLYGON_OFFSET_FILL),(L!==ge||F!==K)&&(i.polygonOffset(ge,K),L=ge,F=K)):ue(i.POLYGON_OFFSET_FILL)}function be(z){z?de(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+N-1),V!==z&&(i.activeTexture(z),V=z)}function M(z,ge,K){K===void 0&&(V===null?K=i.TEXTURE0+N-1:K=V);let ie=j[K];ie===void 0&&(ie={type:void 0,texture:void 0},j[K]=ie),(ie.type!==z||ie.texture!==ge)&&(V!==K&&(i.activeTexture(K),V=K),i.bindTexture(z,ge||Ee[z]),ie.type=z,ie.texture=ge)}function H(){let z=j[V];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function G(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(z){ke.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ke.copy(z))}function Me(z){q.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),q.copy(z))}function $e(z,ge){let K=c.get(ge);K===void 0&&(K=new WeakMap,c.set(ge,K));let ie=K.get(z);ie===void 0&&(ie=i.getUniformBlockIndex(ge,z.name),K.set(z,ie))}function qe(z,ge){let ie=c.get(ge).get(z);l.get(ge)!==ie&&(i.uniformBlockBinding(ge,ie,z.__bindingPointIndex),l.set(ge,ie))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},V=null,j={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,y=null,U=null,T=null,R=new xe(0,0,0),I=0,E=!1,b=null,S=null,C=null,L=null,F=null,ke.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:ue,bindFramebuffer:Ce,drawBuffers:_e,useProgram:Pe,setBlending:O,setMaterial:Te,setFlipSided:te,setCullFace:ce,setLineWidth:pe,setPolygonOffset:Ue,setScissorTest:be,activeTexture:P,bindTexture:M,unbindTexture:H,compressedTexImage2D:G,compressedTexImage3D:W,texImage2D:oe,texImage3D:he,updateUBOMapping:$e,uniformBlockBinding:qe,texStorage2D:Ie,texStorage3D:le,texSubImage2D:Y,texSubImage3D:fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:me,scissor:we,viewport:Me,reset:it}}function Vf(i,e,t,n){let s=Y_(n);switch(t){case bp:return i*e;case wp:return i*e;case Sp:return i*e*2;case bh:return i*e/s.components*s.byteLength;case Eh:return i*e/s.components*s.byteLength;case Tp:return i*e*2/s.components*s.byteLength;case wh:return i*e*2/s.components*s.byteLength;case Ep:return i*e*3/s.components*s.byteLength;case zn:return i*e*4/s.components*s.byteLength;case Sh:return i*e*4/s.components*s.byteLength;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nu:case su:return Math.max(i,16)*Math.max(e,8)/4;case tu:case iu:return Math.max(i,8)*Math.max(e,8)/2;case ru:case ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _u:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Za:case bu:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ap:case wu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Su:case Tu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y_(i){switch(i){case Ci:case yp:return{byteLength:1,components:1};case Lo:case _p:case ei:return{byteLength:2,components:1};case _h:case Mh:return{byteLength:2,components:4};case Ds:case yh:case Qn:return{byteLength:4,components:1};case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,M){return f?new OffscreenCanvas(P,M):Do("canvas")}function x(P,M,H){let G=1,W=be(P);if((W.width>H||W.height>H)&&(G=H/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor(G*W.width),fe=Math.floor(G*W.height);h===void 0&&(h=m(Y,fe));let ve=M?m(Y,fe):h;return ve.width=Y,ve.height=fe,ve.getContext("2d").drawImage(P,0,0,Y,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Y+"x"+fe+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,M,H,G,W=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=M;if(M===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),M===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){let fe=W?Ll:dt.getTransfer(G);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=fe===Et?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(P,M){let H;return P?M===null||M===Ds||M===Ur?H=i.DEPTH24_STENCIL8:M===Qn?H=i.DEPTH32F_STENCIL8:M===Lo&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ds||M===Ur?H=i.DEPTH_COMPONENT24:M===Qn?H=i.DEPTH_COMPONENT32F:M===Lo&&(H=i.DEPTH_COMPONENT16),H}function U(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==Tn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){let M=P.target;M.removeEventListener("dispose",T),I(M),M.isVideoTexture&&u.delete(M)}function R(P){let M=P.target;M.removeEventListener("dispose",R),b(M)}function I(P){let M=n.get(P);if(M.__webglInit===void 0)return;let H=P.source,G=d.get(H);if(G){let W=G[M.__cacheKey];W.usedTimes--,W.usedTimes===0&&E(P),Object.keys(G).length===0&&d.delete(H)}n.remove(P)}function E(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let H=P.source,G=d.get(H);delete G[M.__cacheKey],o.memory.textures--}function b(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let W=0;W<M.__webglFramebuffer[G].length;W++)i.deleteFramebuffer(M.__webglFramebuffer[G][W]);else i.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)i.deleteFramebuffer(M.__webglFramebuffer[G]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=P.textures;for(let G=0,W=H.length;G<W;G++){let Y=n.get(H[G]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[G])}n.remove(P)}let S=0;function C(){S=0}function L(){let P=S;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),S+=1,P}function F(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function N(P,M){let H=n.get(P);if(P.isVideoTexture&&pe(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){let G=P.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,P,M);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function D(P,M){let H=n.get(P);if(P.version>0&&H.__version!==P.version){q(H,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function k(P,M){let H=n.get(P);if(P.version>0&&H.__version!==P.version){q(H,P,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function B(P,M){let H=n.get(P);if(P.version>0&&H.__version!==P.version){ne(H,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let V={[Ls]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},j={[pn]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},se={[O0]:i.NEVER,[G0]:i.ALWAYS,[B0]:i.LESS,[Cp]:i.LEQUAL,[H0]:i.EQUAL,[V0]:i.GEQUAL,[z0]:i.GREATER,[k0]:i.NOTEQUAL};function ye(P,M){if(M.type===Qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Tn||M.magFilter===Eo||M.magFilter===wr||M.magFilter===oi||M.minFilter===Tn||M.minFilter===Eo||M.minFilter===wr||M.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,V[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,V[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,V[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,j[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==wr&&M.minFilter!==oi||M.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ke(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",T));let G=M.source,W=d.get(G);W===void 0&&(W={},d.set(G,W));let Y=F(M);if(Y!==P.__cacheKey){W[Y]===void 0&&(W[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),W[Y].usedTimes++;let fe=W[P.__cacheKey];fe!==void 0&&(W[P.__cacheKey].usedTimes--,fe.usedTimes===0&&E(M)),P.__cacheKey=Y,P.__webglTexture=W[Y].texture}return H}function q(P,M,H){let G=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=i.TEXTURE_3D);let W=ke(P,M),Y=M.source;t.bindTexture(G,P.__webglTexture,i.TEXTURE0+H);let fe=n.get(Y);if(Y.version!==fe.__version||W===!0){t.activeTexture(i.TEXTURE0+H);let ve=dt.getPrimaries(dt.workingColorSpace),me=M.colorSpace===ji?null:dt.getPrimaries(M.colorSpace),Ie=M.colorSpace===ji||ve===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let le=x(M.image,!1,s.maxTextureSize);le=Ue(M,le);let oe=r.convert(M.format,M.colorSpace),he=r.convert(M.type),we=_(M.internalFormat,oe,he,M.colorSpace,M.isVideoTexture);ye(G,M);let Me,$e=M.mipmaps,qe=M.isVideoTexture!==!0,it=fe.__version===void 0||W===!0,z=Y.dataReady,ge=U(M,le);if(M.isDepthTexture)we=y(M.format===Nr,M.type),it&&(qe?t.texStorage2D(i.TEXTURE_2D,1,we,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,we,le.width,le.height,0,oe,he,null));else if(M.isDataTexture)if($e.length>0){qe&&it&&t.texStorage2D(i.TEXTURE_2D,ge,we,$e[0].width,$e[0].height);for(let K=0,ie=$e.length;K<ie;K++)Me=$e[K],qe?z&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,oe,he,Me.data):t.texImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,oe,he,Me.data);M.generateMipmaps=!1}else qe?(it&&t.texStorage2D(i.TEXTURE_2D,ge,we,le.width,le.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,oe,he,le.data)):t.texImage2D(i.TEXTURE_2D,0,we,le.width,le.height,0,oe,he,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,$e[0].width,$e[0].height,le.depth);for(let K=0,ie=$e.length;K<ie;K++)if(Me=$e[K],M.format!==zn)if(oe!==null)if(qe){if(z)if(M.layerUpdates.size>0){let Le=Vf(Me.width,Me.height,M.format,M.type);for(let Fe of M.layerUpdates){let Qe=Me.data.subarray(Fe*Le/Me.data.BYTES_PER_ELEMENT,(Fe+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Fe,Me.width,Me.height,1,oe,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,le.depth,oe,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,le.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,le.depth,oe,he,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,le.depth,0,oe,he,Me.data)}else{qe&&it&&t.texStorage2D(i.TEXTURE_2D,ge,we,$e[0].width,$e[0].height);for(let K=0,ie=$e.length;K<ie;K++)Me=$e[K],M.format!==zn?oe!==null?qe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,oe,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,oe,he,Me.data):t.texImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,oe,he,Me.data)}else if(M.isDataArrayTexture)if(qe){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,le.width,le.height,le.depth),z)if(M.layerUpdates.size>0){let K=Vf(le.width,le.height,M.format,M.type);for(let ie of M.layerUpdates){let Le=le.data.subarray(ie*K/le.data.BYTES_PER_ELEMENT,(ie+1)*K/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,oe,he,Le)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,oe,he,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,le.width,le.height,le.depth,0,oe,he,le.data);else if(M.isData3DTexture)qe?(it&&t.texStorage3D(i.TEXTURE_3D,ge,we,le.width,le.height,le.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,oe,he,le.data)):t.texImage3D(i.TEXTURE_3D,0,we,le.width,le.height,le.depth,0,oe,he,le.data);else if(M.isFramebufferTexture){if(it)if(qe)t.texStorage2D(i.TEXTURE_2D,ge,we,le.width,le.height);else{let K=le.width,ie=le.height;for(let Le=0;Le<ge;Le++)t.texImage2D(i.TEXTURE_2D,Le,we,K,ie,0,oe,he,null),K>>=1,ie>>=1}}else if($e.length>0){if(qe&&it){let K=be($e[0]);t.texStorage2D(i.TEXTURE_2D,ge,we,K.width,K.height)}for(let K=0,ie=$e.length;K<ie;K++)Me=$e[K],qe?z&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe,he,Me):t.texImage2D(i.TEXTURE_2D,K,we,oe,he,Me);M.generateMipmaps=!1}else if(qe){if(it){let K=be(le);t.texStorage2D(i.TEXTURE_2D,ge,we,K.width,K.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,he,le)}else t.texImage2D(i.TEXTURE_2D,0,we,oe,he,le);g(M)&&p(G),fe.__version=Y.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,H){if(M.image.length!==6)return;let G=ke(P,M),W=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let Y=n.get(W);if(W.version!==Y.__version||G===!0){t.activeTexture(i.TEXTURE0+H);let fe=dt.getPrimaries(dt.workingColorSpace),ve=M.colorSpace===ji?null:dt.getPrimaries(M.colorSpace),me=M.colorSpace===ji||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let ie=0;ie<6;ie++)!Ie&&!le?oe[ie]=x(M.image[ie],!0,s.maxCubemapSize):oe[ie]=le?M.image[ie].image:M.image[ie],oe[ie]=Ue(M,oe[ie]);let he=oe[0],we=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),$e=_(M.internalFormat,we,Me,M.colorSpace),qe=M.isVideoTexture!==!0,it=Y.__version===void 0||G===!0,z=W.dataReady,ge=U(M,he);ye(i.TEXTURE_CUBE_MAP,M);let K;if(Ie){qe&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,$e,he.width,he.height);for(let ie=0;ie<6;ie++){K=oe[ie].mipmaps;for(let Le=0;Le<K.length;Le++){let Fe=K[Le];M.format!==zn?we!==null?qe?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Fe.width,Fe.height,we,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,$e,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Fe.width,Fe.height,we,Me,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,$e,Fe.width,Fe.height,0,we,Me,Fe.data)}}}else{if(K=M.mipmaps,qe&&it){K.length>0&&ge++;let ie=be(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,$e,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,oe[ie].width,oe[ie].height,we,Me,oe[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,oe[ie].width,oe[ie].height,0,we,Me,oe[ie].data);for(let Le=0;Le<K.length;Le++){let Qe=K[Le].image[ie].image;qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Qe.width,Qe.height,we,Me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,$e,Qe.width,Qe.height,0,we,Me,Qe.data)}}else{qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,Me,oe[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,we,Me,oe[ie]);for(let Le=0;Le<K.length;Le++){let Fe=K[Le];qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,we,Me,Fe.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,$e,we,Me,Fe.image[ie])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),Y.__version=W.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ee(P,M,H,G,W,Y){let fe=r.convert(H.format,H.colorSpace),ve=r.convert(H.type),me=_(H.internalFormat,fe,ve,H.colorSpace),Ie=n.get(M),le=n.get(H);if(le.__renderTarget=M,!Ie.__hasExternalTextures){let oe=Math.max(1,M.width>>Y),he=Math.max(1,M.height>>Y);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,Y,me,oe,he,M.depth,0,fe,ve,null):t.texImage2D(W,Y,me,oe,he,0,fe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,W,le.__webglTexture,0,te(M)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,W,le.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(P,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let G=M.depthTexture,W=G&&G.isDepthTexture?G.type:null,Y=y(M.stencilBuffer,W),fe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=te(M);ce(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,Y,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,P)}else{let G=M.textures;for(let W=0;W<G.length;W++){let Y=G[W],fe=r.convert(Y.format,Y.colorSpace),ve=r.convert(Y.type),me=_(Y.internalFormat,fe,ve,Y.colorSpace),Ie=te(M);H&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,me,M.width,M.height):ce(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=n.get(M.depthTexture);G.__renderTarget=M,(!G.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);let W=G.__webglTexture,Y=te(M);if(M.depthTexture.format===Rr)ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(M.depthTexture.format===Nr)ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ce(P){let M=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let G=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){let W=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),M.__depthDisposeCallback=W}M.__boundDepthTexture=G}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=i.createRenderbuffer(),de(M.__webglDepthbuffer[G],P,!1);else{let W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),de(M.__webglDepthbuffer,P,!1);else{let G=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,W)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(P,M,H){let G=n.get(P);M!==void 0&&Ee(G.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ce(P)}function Pe(P){let M=P.texture,H=n.get(P),G=n.get(M);P.addEventListener("dispose",R);let W=P.textures,Y=P.isWebGLCubeRenderTarget===!0,fe=W.length>1;if(fe||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=M.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let me=0;me<M.mipmaps.length;me++)H.__webglFramebuffer[ve][me]=i.createFramebuffer()}else H.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)H.__webglFramebuffer[ve]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ve=0,me=W.length;ve<me;ve++){let Ie=n.get(W[ve]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ce(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<W.length;ve++){let me=W[ve];H.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);let Ie=r.convert(me.format,me.colorSpace),le=r.convert(me.type),oe=_(me.internalFormat,Ie,le,me.colorSpace,P.isXRRenderTarget===!0),he=te(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,oe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),de(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ye(i.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Ee(H.__webglFramebuffer[ve][me],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,me);else Ee(H.__webglFramebuffer[ve],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ve=0,me=W.length;ve<me;ve++){let Ie=W[ve],le=n.get(Ie);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),ye(i.TEXTURE_2D,Ie),Ee(H.__webglFramebuffer,P,Ie,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),g(Ie)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,G.__webglTexture),ye(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Ee(H.__webglFramebuffer[me],P,M,i.COLOR_ATTACHMENT0,ve,me);else Ee(H.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,ve,0);g(M)&&p(ve),t.unbindTexture()}P.depthBuffer&&Ce(P)}function ee(P){let M=P.textures;for(let H=0,G=M.length;H<G;H++){let W=M[H];if(g(W)){let Y=v(P),fe=n.get(W).__webglTexture;t.bindTexture(Y,fe),p(Y),t.unbindTexture()}}}let re=[],O=[];function Te(P){if(P.samples>0){if(ce(P)===!1){let M=P.textures,H=P.width,G=P.height,W=i.COLOR_BUFFER_BIT,Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(P),ve=M.length>1;if(ve)for(let me=0;me<M.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<M.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ie=n.get(M[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,H,G,0,0,H,G,W,i.NEAREST),l===!0&&(re.length=0,O.length=0,re.push(i.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(Y),O.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let me=0;me<M.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ie=n.get(M[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function te(P){return Math.min(s.maxSamples,P.samples)}function ce(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(P){let M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Ue(P,M){let H=P.colorSpace,G=P.format,W=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==gn&&H!==ji&&(dt.getTransfer(H)===Et?(G!==zn||W!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=N,this.setTexture2DArray=D,this.setTexture3D=k,this.setTextureCube=B,this.rebindTextures=_e,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ce}function Z_(i,e){function t(n,s=ji){let r,o=dt.getTransfer(s);if(n===Ci)return i.UNSIGNED_BYTE;if(n===_h)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yp)return i.BYTE;if(n===_p)return i.SHORT;if(n===Lo)return i.UNSIGNED_SHORT;if(n===yh)return i.INT;if(n===Ds)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===bp)return i.ALPHA;if(n===Ep)return i.RGB;if(n===zn)return i.RGBA;if(n===wp)return i.LUMINANCE;if(n===Sp)return i.LUMINANCE_ALPHA;if(n===Rr)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===bh)return i.RED;if(n===Eh)return i.RED_INTEGER;if(n===Tp)return i.RG;if(n===wh)return i.RG_INTEGER;if(n===Sh)return i.RGBA_INTEGER;if(n===Xa||n===qa||n===Ya||n===$a)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tu||n===nu||n===iu||n===su)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ru||n===ou)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===au)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lu||n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===vu||n===xu||n===yu||n===_u||n===Mu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_u)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===bu||n===Eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ap||n===wu||n===Su||n===Tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Su)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ku=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},K_={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`,Vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new an,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rt({vertexShader:j_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends ts{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,x=new Vu,g=t.getContextAttributes(),p=null,v=null,_=[],y=[],U=new ae,T=null,R=new Bt;R.viewport=new mt;let I=new Bt;I.viewport=new mt;let E=[R,I],b=new ku,S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=_[q];return ne===void 0&&(ne=new To,_[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=_[q];return ne===void 0&&(ne=new To,_[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=_[q];return ne===void 0&&(ne=new To,_[q]=ne),ne.getHandSpace()};function L(q){let ne=y.indexOf(q.inputSource);if(ne===-1)return;let Ee=_[ne];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,c||o),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",N);for(let q=0;q<_.length;q++){let ne=y[q];ne!==null&&(y[q]=null,_[q].disconnect(ne))}S=null,C=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,v=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new _n(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,Ee=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Nr:Rr,Ee=g.stencil?Ur:Ds);let ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new _n(d.textureWidth,d.textureHeight,{format:zn,type:Ci,depthTexture:new il(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(q){for(let ne=0;ne<q.removed.length;ne++){let Ee=q.removed[ne],de=y.indexOf(Ee);de>=0&&(y[de]=null,_[de].disconnect(Ee))}for(let ne=0;ne<q.added.length;ne++){let Ee=q.added[ne],de=y.indexOf(Ee);if(de===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=y.length){y.push(Ee),de=Ce;break}else if(y[Ce]===null){y[Ce]=Ee,de=Ce;break}if(de===-1)break}let ue=_[de];ue&&ue.connect(Ee)}}let D=new w,k=new w;function B(q,ne,Ee){D.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(Ee.matrixWorld);let de=D.distanceTo(k),ue=ne.projectionMatrix.elements,Ce=Ee.projectionMatrix.elements,_e=ue[14]/(ue[10]-1),Pe=ue[14]/(ue[10]+1),ee=(ue[9]+1)/ue[5],re=(ue[9]-1)/ue[5],O=(ue[8]-1)/ue[0],Te=(Ce[8]+1)/Ce[0],te=_e*O,ce=_e*Te,pe=de/(-O+Te),Ue=pe*-O;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ue[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let be=_e+pe,P=Pe+pe,M=te-Ue,H=ce+(de-Ue),G=ee*Pe/P*be,W=re*Pe/P*be;q.projectionMatrix.makePerspective(M,H,G,W,be,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function V(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,Ee=q.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),b.near=I.near=R.near=ne,b.far=I.far=R.far=Ee,(S!==b.near||C!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,C=b.far),R.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,b.layers.mask=R.layers.mask|I.layers.mask;let de=q.parent,ue=b.cameras;V(b,de);for(let Ce=0;Ce<ue.length;Ce++)V(ue[Ce],de);ue.length===2?B(b,R,I):b.projectionMatrix.copy(R.projectionMatrix),j(q,b,de)};function j(q,ne,Ee){Ee===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Br*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let se=null;function ye(q,ne){if(u=ne.getViewerPose(c||o),m=ne,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let de=!1;Ee.length!==b.cameras.length&&(b.cameras.length=0,de=!0);for(let Ce=0;Ce<Ee.length;Ce++){let _e=Ee[Ce],Pe=null;if(f!==null)Pe=f.getViewport(_e);else{let re=h.getViewSubImage(d,_e);Pe=re.viewport,Ce===0&&(e.setRenderTargetTextures(v,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(v))}let ee=E[Ce];ee===void 0&&(ee=new Bt,ee.layers.enable(Ce),ee.viewport=new mt,E[Ce]=ee),ee.matrix.fromArray(_e.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(_e.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ce===0&&(b.matrix.copy(ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),de===!0&&b.cameras.push(ee)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let Ce=h.getDepthInformation(Ee[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,s.renderState)}}for(let Ee=0;Ee<_.length;Ee++){let de=y[Ee],ue=_[Ee];de!==null&&ue!==void 0&&ue.update(de,ne,c||o)}se&&se(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let ke=new Dp;ke.setAnimationLoop(ye),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}},Rs=new Mn,Q_=new Ae;function eM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Lp(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,Rs.copy(y),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(Rs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(m(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",g));let U=_.program;n.updateUBOMapping(v,U);let T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){let _=h();v.__bindingPointIndex=_;let y=i.createBuffer(),U=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,U,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],y=v.uniforms,U=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,R=y.length;T<R;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,b=I.length;E<b;E++){let S=I[E];if(f(S,T,E,U)===!0){let C=S.__offset,L=Array.isArray(S.value)?S.value:[S.value],F=0;for(let N=0;N<L.length;N++){let D=L[N],k=x(D);typeof D=="number"||typeof D=="boolean"?(S.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,C+F,S.__data)):D.isMatrix3?(S.__data[0]=D.elements[0],S.__data[1]=D.elements[1],S.__data[2]=D.elements[2],S.__data[3]=0,S.__data[4]=D.elements[3],S.__data[5]=D.elements[4],S.__data[6]=D.elements[5],S.__data[7]=0,S.__data[8]=D.elements[6],S.__data[9]=D.elements[7],S.__data[10]=D.elements[8],S.__data[11]=0):(D.toArray(S.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,y,U){let T=v.value,R=_+"_"+y;if(U[R]===void 0)return typeof T=="number"||typeof T=="boolean"?U[R]=T:U[R]=T.clone(),!0;{let I=U[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return U[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(v){let _=v.uniforms,y=0,U=16;for(let R=0,I=_.length;R<I;R++){let E=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,S=E.length;b<S;b++){let C=E[b],L=Array.isArray(C.value)?C.value:[C.value];for(let F=0,N=L.length;F<N;F++){let D=L[F],k=x(D),B=y%U,V=B%k.boundary,j=B+V;y+=V,j!==0&&U-j<k.storage&&(y+=U-j),C.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=k.storage}}}let T=y%U;return T>0&&(y+=U-T),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var sl=class{constructor(e={}){let{canvas:t=og(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=es,this.toneMappingExposure=1;let y=this,U=!1,T=0,R=0,I=null,E=-1,b=null,S=new mt,C=new mt,L=null,F=new xe(0),N=0,D=t.width,k=t.height,B=1,V=null,j=null,se=new mt(0,0,D,k),ye=new mt(0,0,D,k),ke=!1,q=new No,ne=!1,Ee=!1,de=new Ae,ue=new Ae,Ce=new w,_e=new mt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function re(){return I===null?B:1}let O=n;function Te(A,X){return t.getContext(A,X)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uh}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),O===null){let X="webgl2";if(O=Te(X,A),O===null)throw Te(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,ce,pe,Ue,be,P,M,H,G,W,Y,fe,ve,me,Ie,le,oe,he,we,Me,$e,qe,it,z;function ge(){te=new vy(O),te.init(),qe=new Z_(O,te),ce=new hy(O,te,e,qe),pe=new q_(O,te),ce.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Ue=new _y(O),be=new D_,P=new $_(O,te,pe,be,ce,qe,Ue),M=new fy(y),H=new gy(y),G=new Ag(O),it=new cy(O,G),W=new xy(O,G,Ue,it),Y=new by(O,W,G,Ue),we=new My(O,ce,P),le=new dy(be),fe=new L_(y,M,H,te,ce,it,le),ve=new eM(y,be),me=new N_,Ie=new k_(te),he=new ly(y,M,H,pe,Y,f,l),oe=new W_(y,Y,ce),z=new tM(O,Ue,ce,pe),Me=new uy(O,te,Ue),$e=new yy(O,te,Ue),Ue.programs=fe.programs,y.capabilities=ce,y.extensions=te,y.properties=be,y.renderLists=me,y.shadowMap=oe,y.state=pe,y.info=Ue}ge();let K=new Gu(y,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(D,k,!1))},this.getSize=function(A){return A.set(D,k)},this.setSize=function(A,X,Q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,k=X,t.width=Math.floor(A*B),t.height=Math.floor(X*B),Q===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(D*B,k*B).floor()},this.setDrawingBufferSize=function(A,X,Q){D=A,k=X,B=Q,t.width=Math.floor(A*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,X,Q,J){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,X,Q,J),pe.viewport(S.copy(se).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ye)},this.setScissor=function(A,X,Q,J){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,X,Q,J),pe.scissor(C.copy(ye).multiplyScalar(B).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){pe.setScissorTest(ke=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(A=!0,X=!0,Q=!0){let J=0;if(A){let $=!1;if(I!==null){let Se=I.texture.format;$=Se===Sh||Se===wh||Se===Eh}if($){let Se=I.texture.type,Oe=Se===Ci||Se===Ds||Se===Lo||Se===Ur||Se===_h||Se===Mh,Ve=he.getClearColor(),Ge=he.getClearAlpha(),nt=Ve.r,at=Ve.g,We=Ve.b;Oe?(m[0]=nt,m[1]=at,m[2]=We,m[3]=Ge,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=nt,x[1]=at,x[2]=We,x[3]=Ge,O.clearBufferiv(O.COLOR,0,x))}else J|=O.COLOR_BUFFER_BIT}X&&(J|=O.DEPTH_BUFFER_BIT),Q&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),me.dispose(),Ie.dispose(),be.dispose(),M.dispose(),H.dispose(),Y.dispose(),it.dispose(),z.dispose(),fe.dispose(),K.dispose(),K.removeEventListener("sessionstart",zi),K.removeEventListener("sessionend",bs),ii.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let A=Ue.autoReset,X=oe.enabled,Q=oe.autoUpdate,J=oe.needsUpdate,$=oe.type;ge(),Ue.autoReset=A,oe.enabled=X,oe.autoUpdate=Q,oe.needsUpdate=J,oe.type=$}function Fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){let X=A.target;X.removeEventListener("dispose",Qe),Ct(X)}function Ct(A){Zt(A),be.remove(A)}function Zt(A){let X=be.get(A).programs;X!==void 0&&(X.forEach(function(Q){fe.releaseProgram(Q)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,Q,J,$,Se){X===null&&(X=Pe);let Oe=$.isMesh&&$.matrixWorld.determinant()<0,Ve=Vi(A,X,Q,J,$);pe.setMaterial(J,Oe);let Ge=Q.index,nt=1;if(J.wireframe===!0){if(Ge=W.getWireframeAttribute(Q),Ge===void 0)return;nt=2}let at=Q.drawRange,We=Q.attributes.position,_t=at.start*nt,Dt=(at.start+at.count)*nt;Se!==null&&(_t=Math.max(_t,Se.start*nt),Dt=Math.min(Dt,(Se.start+Se.count)*nt)),Ge!==null?(_t=Math.max(_t,0),Dt=Math.min(Dt,Ge.count)):We!=null&&(_t=Math.max(_t,0),Dt=Math.min(Dt,We.count));let Ft=Dt-_t;if(Ft<0||Ft===1/0)return;it.setup($,J,Ve,Q,Ge);let Sn,Mt=Me;if(Ge!==null&&(Sn=G.get(Ge),Mt=$e,Mt.setIndex(Sn)),$.isMesh)J.wireframe===!0?(pe.setLineWidth(J.wireframeLinewidth*re()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if($.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),pe.setLineWidth(Xe*re()),$.isLineSegments?Mt.setMode(O.LINES):$.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else $.isPoints?Mt.setMode(O.POINTS):$.isSprite&&Mt.setMode(O.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Mt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Mt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Xe=$._multiDrawStarts,vi=$._multiDrawCounts,bt=$._multiDrawCount,$n=Ge?G.get(Ge).bytesPerElement:1,sr=be.get(J).currentProgram.getUniforms();for(let In=0;In<bt;In++)sr.setValue(O,"_gl_DrawID",In),Mt.render(Xe[In]/$n,vi[In])}else if($.isInstancedMesh)Mt.renderInstances(_t,Ft,$.count);else if(Q.isInstancedBufferGeometry){let Xe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,vi=Math.min(Q.instanceCount,Xe);Mt.renderInstances(_t,Ft,vi)}else Mt.render(_t,Ft)};function ut(A,X,Q){A.transparent===!0&&A.side===ft&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,Re(A,X,Q),A.side=li,A.needsUpdate=!0,Re(A,X,Q),A.side=ft):Re(A,X,Q)}this.compile=function(A,X,Q=null){Q===null&&(Q=A),p=Ie.get(Q),p.init(X),_.push(p),Q.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),A!==Q&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let J=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Se=$.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){let Ve=Se[Oe];ut(Ve,Q,$),J.add(Ve)}else ut(Se,Q,$),J.add(Se)}),_.pop(),p=null,J},this.compileAsync=function(A,X,Q=null){let J=this.compile(A,X,Q);return new Promise($=>{function Se(){if(J.forEach(function(Oe){be.get(Oe).currentProgram.isReady()&&J.delete(Oe)}),J.size===0){$(A);return}setTimeout(Se,10)}te.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let vn=null;function Yt(A){vn&&vn(A)}function zi(){ii.stop()}function bs(){ii.start()}let ii=new Dp;ii.setAnimationLoop(Yt),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(A){vn=A,K.setAnimationLoop(A),A===null?ii.stop():ii.start()},K.addEventListener("sessionstart",zi),K.addEventListener("sessionend",bs),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(X),X=K.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,X,I),p=Ie.get(A,_.length),p.init(X),_.push(p),ue.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(ue),Ee=this.localClippingEnabled,ne=le.init(this.clippingPlanes,Ee),g=me.get(A,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){let Se=y.xr.getDepthSensingMesh();Se!==null&&ir(Se,X,-1/0,y.sortObjects)}ir(A,X,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,j),ee=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ee&&he.addToRenderList(g,A),this.info.render.frame++,ne===!0&&le.beginShadows();let Q=p.state.shadowsArray;oe.render(Q,A,X),ne===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,$=g.transmissive;if(p.setupLights(),X.isArrayCamera){let Se=X.cameras;if($.length>0)for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++){let Ge=Se[Oe];ro(J,$,A,Ge)}ee&&he.render(A);for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++){let Ge=Se[Oe];so(g,A,Ge,Ge.viewport)}}else $.length>0&&ro(J,$,A,X),ee&&he.render(A),so(g,A,X);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,X),it.resetDefaultState(),E=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],ne===!0&&le.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ir(A,X,Q,J){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){J&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let Oe=Y.update(A),Ve=A.material;Ve.visible&&g.push(A,Oe,Ve,Q,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){let Oe=Y.update(A),Ve=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),_e.copy(Oe.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Ve)){let Ge=Oe.groups;for(let nt=0,at=Ge.length;nt<at;nt++){let We=Ge[nt],_t=Ve[We.materialIndex];_t&&_t.visible&&g.push(A,Oe,_t,Q,_e.z,We)}}else Ve.visible&&g.push(A,Oe,Ve,Q,_e.z,null)}}let Se=A.children;for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++)ir(Se[Oe],X,Q,J)}function so(A,X,Q,J){let $=A.opaque,Se=A.transmissive,Oe=A.transparent;p.setupLightsView(Q),ne===!0&&le.setGlobalState(y.clippingPlanes,Q),J&&pe.viewport(S.copy(J)),$.length>0&&ki($,X,Q),Se.length>0&&ki(Se,X,Q),Oe.length>0&&ki(Oe,X,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ro(A,X,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new _n(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?ei:Ci,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let Se=p.state.transmissionRenderTarget[J.id],Oe=J.viewport||S;Se.setSize(Oe.z,Oe.w);let Ve=y.getRenderTarget();y.setRenderTarget(Se),y.getClearColor(F),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),ee&&he.render(Q);let Ge=y.toneMapping;y.toneMapping=es;let nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ne===!0&&le.setGlobalState(y.clippingPlanes,J),ki(A,Q,J),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),te.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let We=0,_t=X.length;We<_t;We++){let Dt=X[We],Ft=Dt.object,Sn=Dt.geometry,Mt=Dt.material,Xe=Dt.group;if(Mt.side===ft&&Ft.layers.test(J.layers)){let vi=Mt.side;Mt.side=fn,Mt.needsUpdate=!0,oo(Ft,Q,J,Sn,Mt,Xe),Mt.side=vi,Mt.needsUpdate=!0,at=!0}}at===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}y.setRenderTarget(Ve),y.setClearColor(F,N),nt!==void 0&&(J.viewport=nt),y.toneMapping=Ge}function ki(A,X,Q){let J=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Se=A.length;$<Se;$++){let Oe=A[$],Ve=Oe.object,Ge=Oe.geometry,nt=J===null?Oe.material:J,at=Oe.group;Ve.layers.test(Q.layers)&&oo(Ve,X,Q,Ge,nt,at)}}function oo(A,X,Q,J,$,Se){A.onBeforeRender(y,X,Q,J,$,Se),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(y,X,Q,J,A,Se),$.transparent===!0&&$.side===ft&&$.forceSinglePass===!1?($.side=fn,$.needsUpdate=!0,y.renderBufferDirect(Q,X,J,$,A,Se),$.side=li,$.needsUpdate=!0,y.renderBufferDirect(Q,X,J,$,A,Se),$.side=ft):y.renderBufferDirect(Q,X,J,$,A,Se),A.onAfterRender(y,X,Q,J,$,Se)}function Re(A,X,Q){X.isScene!==!0&&(X=Pe);let J=be.get(A),$=p.state.lights,Se=p.state.shadowsArray,Oe=$.state.version,Ve=fe.getParameters(A,$.state,Se,X,Q),Ge=fe.getProgramCacheKey(Ve),nt=J.programs;J.environment=A.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",Qe),nt=new Map,J.programs=nt);let at=nt.get(Ge);if(at!==void 0){if(J.currentProgram===at&&J.lightsStateVersion===Oe)return Jt(A,Ve),at}else Ve.uniforms=fe.getUniforms(A),A.onBeforeCompile(Ve,y),at=fe.acquireProgram(Ve,Ge),nt.set(Ge,at),J.uniforms=Ve.uniforms;let We=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=le.uniform),Jt(A,Ve),J.needsLights=Nt(A),J.lightsStateVersion=Oe,J.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=at,J.uniformsList=null,at}function Je(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Pr.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Jt(A,X){let Q=be.get(A);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Vi(A,X,Q,J,$){X.isScene!==!0&&(X=Pe),P.resetTextureUnits();let Se=X.fog,Oe=J.isMeshStandardMaterial?X.environment:null,Ve=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:gn,Ge=(J.isMeshStandardMaterial?H:M).get(J.envMap||Oe),nt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,at=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),We=!!Q.morphAttributes.position,_t=!!Q.morphAttributes.normal,Dt=!!Q.morphAttributes.color,Ft=es;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ft=y.toneMapping);let Sn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mt=Sn!==void 0?Sn.length:0,Xe=be.get(J),vi=p.state.lights;if(ne===!0&&(Ee===!0||A!==b)){let Bn=A===b&&J.id===E;le.setState(J,A,Bn)}let bt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==vi.state.version||Xe.outputColorSpace!==Ve||$.isBatchedMesh&&Xe.batching===!1||!$.isBatchedMesh&&Xe.batching===!0||$.isBatchedMesh&&Xe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xe.instancingMorph===!1&&$.morphTexture!==null||Xe.envMap!==Ge||J.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==le.numPlanes||Xe.numIntersection!==le.numIntersection)||Xe.vertexAlphas!==nt||Xe.vertexTangents!==at||Xe.morphTargets!==We||Xe.morphNormals!==_t||Xe.morphColors!==Dt||Xe.toneMapping!==Ft||Xe.morphTargetsCount!==Mt)&&(bt=!0):(bt=!0,Xe.__version=J.version);let $n=Xe.currentProgram;bt===!0&&($n=Re(J,X,$));let sr=!1,In=!1,ao=!1,Ot=$n.getUniforms(),si=Xe.uniforms;if(pe.useProgram($n.program)&&(sr=!0,In=!0,ao=!0),J.id!==E&&(E=J.id,In=!0),sr||b!==A){pe.buffers.depth.getReversed()?(de.copy(A.projectionMatrix),lg(de),cg(de),Ot.setValue(O,"projectionMatrix",de)):Ot.setValue(O,"projectionMatrix",A.projectionMatrix),Ot.setValue(O,"viewMatrix",A.matrixWorldInverse);let Gi=Ot.map.cameraPosition;Gi!==void 0&&Gi.setValue(O,Ce.setFromMatrixPosition(A.matrixWorld)),ce.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,In=!0,ao=!0)}if($.isSkinnedMesh){Ot.setOptional(O,$,"bindMatrix"),Ot.setOptional(O,$,"bindMatrixInverse");let Bn=$.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ot.setValue(O,"boneTexture",Bn.boneTexture,P))}$.isBatchedMesh&&(Ot.setOptional(O,$,"batchingTexture"),Ot.setValue(O,"batchingTexture",$._matricesTexture,P),Ot.setOptional(O,$,"batchingIdTexture"),Ot.setValue(O,"batchingIdTexture",$._indirectTexture,P),Ot.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(O,"batchingColorTexture",$._colorsTexture,P));let lo=Q.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0)&&we.update($,Q,$n),(In||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,Ot.setValue(O,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(si.envMap.value=Ge,si.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(si.envMapIntensity.value=X.environmentIntensity),In&&(Ot.setValue(O,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&wn(si,ao),Se&&J.fog===!0&&ve.refreshFogUniforms(si,Se),ve.refreshMaterialUniforms(si,J,B,k,p.state.transmissionRenderTarget[A.id]),Pr.upload(O,Je(Xe),si,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Pr.upload(O,Je(Xe),si,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ot.setValue(O,"center",$.center),Ot.setValue(O,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(O,"normalMatrix",$.normalMatrix),Ot.setValue(O,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Bn=J.uniformsGroups;for(let Gi=0,Wi=Bn.length;Gi<Wi;Gi++){let kd=Bn[Gi];z.update(kd,$n),z.bind(kd,$n)}}return $n}function wn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Nt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,X,Q){be.get(A.texture).__webglTexture=X,be.get(A.depthTexture).__webglTexture=Q;let J=be.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){let Q=be.get(A);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,Q=0){I=A,T=X,R=Q;let J=!0,$=null,Se=!1,Oe=!1;if(A){let Ge=be.get(A);if(Ge.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Ge.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ge.__hasExternalTextures)P.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let We=A.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&be.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);let at=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(at[X])?$=at[X][Q]:$=at[X],Se=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?$=be.get(A).__webglMultisampledFramebuffer:Array.isArray(at)?$=at[Q]:$=at,S.copy(A.viewport),C.copy(A.scissor),L=A.scissorTest}else S.copy(se).multiplyScalar(B).floor(),C.copy(ye).multiplyScalar(B).floor(),L=ke;if(pe.bindFramebuffer(O.FRAMEBUFFER,$)&&J&&pe.drawBuffers(A,$),pe.viewport(S),pe.scissor(C),pe.setScissorTest(L),Se){let Ge=be.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,Q)}else if(Oe){let Ge=be.get(A.texture),nt=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,Q||0,nt)}E=-1},this.readRenderTargetPixels=function(A,X,Q,J,$,Se,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){pe.bindFramebuffer(O.FRAMEBUFFER,Ve);try{let Ge=A.texture,nt=Ge.format,at=Ge.type;if(!ce.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-J&&Q>=0&&Q<=A.height-$&&O.readPixels(X,Q,J,$,qe.convert(nt),qe.convert(at),Se)}finally{let Ge=I!==null?be.get(I).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,X,Q,J,$,Se,Oe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){let Ge=A.texture,nt=Ge.format,at=Ge.type;if(!ce.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-J&&Q>=0&&Q<=A.height-$){pe.bindFramebuffer(O.FRAMEBUFFER,Ve);let We=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(X,Q,J,$,qe.convert(nt),qe.convert(at),0);let _t=I!==null?be.get(I).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,_t);let Dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ag(O,Dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(We),O.deleteSync(Dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,Q=0){A.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);let J=Math.pow(2,-Q),$=Math.floor(A.image.width*J),Se=Math.floor(A.image.height*J),Oe=X!==null?X.x:0,Ve=X!==null?X.y:0;P.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Oe,Ve,$,Se),pe.unbindTexture()},this.copyTextureToTexture=function(A,X,Q=null,J=null,$=0){A.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],X=arguments[2],$=arguments[3]||0,Q=null);let Se,Oe,Ve,Ge,nt,at,We,_t,Dt,Ft=A.isCompressedTexture?A.mipmaps[$]:A.image;Q!==null?(Se=Q.max.x-Q.min.x,Oe=Q.max.y-Q.min.y,Ve=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,nt=Q.min.y,at=Q.isBox3?Q.min.z:0):(Se=Ft.width,Oe=Ft.height,Ve=Ft.depth||1,Ge=0,nt=0,at=0),J!==null?(We=J.x,_t=J.y,Dt=J.z):(We=0,_t=0,Dt=0);let Sn=qe.convert(X.format),Mt=qe.convert(X.type),Xe;X.isData3DTexture?(P.setTexture3D(X,0),Xe=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Xe=O.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Xe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);let vi=O.getParameter(O.UNPACK_ROW_LENGTH),bt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),$n=O.getParameter(O.UNPACK_SKIP_PIXELS),sr=O.getParameter(O.UNPACK_SKIP_ROWS),In=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,at);let ao=A.isDataArrayTexture||A.isData3DTexture,Ot=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let si=be.get(A),lo=be.get(X),Bn=be.get(si.__renderTarget),Gi=be.get(lo.__renderTarget);pe.bindFramebuffer(O.READ_FRAMEBUFFER,Bn.__webglFramebuffer),pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Wi=0;Wi<Ve;Wi++)ao&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(A).__webglTexture,$,at+Wi),A.isDepthTexture?(Ot&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(X).__webglTexture,$,Dt+Wi),O.blitFramebuffer(Ge,nt,Se,Oe,We,_t,Se,Oe,O.DEPTH_BUFFER_BIT,O.NEAREST)):Ot?O.copyTexSubImage3D(Xe,$,We,_t,Dt+Wi,Ge,nt,Se,Oe):O.copyTexSubImage2D(Xe,$,We,_t,Dt+Wi,Ge,nt,Se,Oe);pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Xe,$,We,_t,Dt,Se,Oe,Ve,Sn,Mt,Ft.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,$,We,_t,Dt,Se,Oe,Ve,Sn,Ft.data):O.texSubImage3D(Xe,$,We,_t,Dt,Se,Oe,Ve,Sn,Mt,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,We,_t,Se,Oe,Sn,Mt,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,We,_t,Ft.width,Ft.height,Sn,Ft.data):O.texSubImage2D(O.TEXTURE_2D,$,We,_t,Se,Oe,Sn,Mt,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,vi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$n),O.pixelStorei(O.UNPACK_SKIP_ROWS,sr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,In),$===0&&X.generateMipmaps&&O.generateMipmap(Xe),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,X,Q=null,J=null,$=0){return A.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,A=arguments[2],X=arguments[3],$=arguments[4]||0),Mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,Q,J,$)},this.initRenderTarget=function(A){be.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){T=0,R=0,I=null,pe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Fo=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new w,Fs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pi=class extends bn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yr,po=new w,_r=new w,Mr=new w,br=new ae,mo=new ae,Bp=new Ae,Ia=new w,go=new w,La=new w,Gf=new ae,Oc=new ae,Wf=new ae,ns=class extends Ht{constructor(e=new Pi){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kr(t,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Fs(n,3,0,!1)),yr.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=yr,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-Mr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Da(Ia.set(-.5,-.5,0),Mr,o,_r,s,r),Da(go.set(.5,-.5,0),Mr,o,_r,s,r),Da(La.set(.5,.5,0),Mr,o,_r,s,r),Gf.set(0,0),Oc.set(1,0),Wf.set(1,1);let a=e.ray.intersectTriangle(Ia,go,La,!1,po);if(a===null&&(Da(go.set(-.5,.5,0),Mr,o,_r,s,r),Oc.set(0,1),a=e.ray.intersectTriangle(Ia,La,go,!1,po),a===null))return;let l=e.ray.origin.distanceTo(po);l<e.near||l>e.far||t.push({distance:l,point:po.clone(),uv:Ji.getInterpolation(po,Ia,go,La,Gf,Oc,Wf,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Da(i,e,t,n,s,r){br.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(mo.x=r*br.x-s*br.y,mo.y=s*br.x+r*br.y):mo.copy(br),i.copy(e),i.x+=mo.x,i.y+=mo.y,i.applyMatrix4(Bp)}var Ua=new w,Xf=new w,rl=class extends Ht{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ua.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Ua);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Ua.setFromMatrixPosition(e.matrixWorld),Xf.setFromMatrixPosition(this.matrixWorld);let n=Ua.distanceTo(Xf)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},qf=new w,Yf=new mt,$f=new mt,nM=new w,Zf=new Ae,Na=new w,Bc=new Un,Kf=new Ae,Hc=new Us,ol=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xd,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Na),this.boundingBox.expandByPoint(Na)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Na),this.boundingSphere.expandByPoint(Na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bc.copy(this.boundingSphere),Bc.applyMatrix4(s),e.ray.intersectsSphere(Bc)!==!1&&(Kf.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&Hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===L0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Yf.fromBufferAttribute(s.attributes.skinIndex,e),$f.fromBufferAttribute(s.attributes.skinWeight,e),qf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=$f.getComponent(r);if(o!==0){let a=Yf.getComponent(r);Zf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(nM.copy(qf).applyMatrix4(Zf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Oo=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},al=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,l,c=pn,u=pn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jf=new Ae,iM=new Ae,ll=class i{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:iM;jf.multiplyMatrices(a,t[r]),jf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new al(t,e,e,zn,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Oo),this.bones.push(o),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},zt=class extends ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new Ae,Jf=new Ae,Fa=[],Qf=new Xt,sM=new Ae,vo=new Be,xo=new Un,nn=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Qf.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),xo.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),e.ray.intersectsSphere(xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Jf.multiplyMatrices(n,Er),vo.matrixWorld=Jf,vo.raycast(e,Fa);for(let o=0,a=Fa.length;o<a;o++){let l=Fa[o];l.instanceId=r,l.object=this,t.push(l)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new al(new Float32Array(s*this.count),s,this.count,bh,Qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Bo=class extends bn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cl=new w,ul=new w,ep=new Ae,yo=new Us,Oa=new Un,zc=new w,tp=new w,Vr=class extends Ht{constructor(e=new st,t=new Bo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)cl.fromBufferAttribute(t,s-1),ul.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=cl.distanceTo(ul);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;ep.copy(s).invert(),yo.copy(e.ray).applyMatrix4(ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=u.getX(x),v=u.getX(x+1),_=Ba(this,e,yo,l,p,v);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=Ba(this,e,yo,l,x,g);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Ba(this,e,yo,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ba(this,e,yo,l,m-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ba(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(cl.fromBufferAttribute(o,s),ul.fromBufferAttribute(o,r),t.distanceSqToSegment(cl,ul,zc,tp)>n)return;zc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zc);if(!(l<e.near||l>e.far))return{distance:l,point:tp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var np=new w,ip=new w,hl=class extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)np.fromBufferAttribute(t,s),ip.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+np.distanceTo(ip);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},dl=class extends Vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Os=class extends bn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sp=new Ae,Wu=new Us,Ha=new Un,za=new w,Bs=class extends Ht{constructor(e=new st,t=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;sp.copy(s).invert(),Wu.copy(e.ray).applyMatrix4(sp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);za.fromBufferAttribute(h,g),rp(za,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)za.fromBufferAttribute(h,m),rp(za,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rp(i,e,t,n,s,r,o){let a=Wu.distanceSqToPoint(i);if(a<t){let l=new w;Wu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ui=class extends an{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,s=[],r=[],o=[],a=new w,l=new Ae;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ho=class extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xu=class extends Ho{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ka=new w,kc=new Ch,Vc=new Ch,Gc=new Ch,is=class extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ka.subVectors(s[0],s[1]).add(s[0]),c=ka);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ka.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ka),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),kc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,g),Vc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,g),Gc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Vc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Gc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(kc.calc(l),Vc.calc(l),Gc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function op(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function rM(i,e){let t=1-i;return t*t*e}function oM(i,e){return 2*(1-i)*i*e}function aM(i,e){return i*i*e}function Ao(i,e,t,n){return rM(i,e)+oM(i,t)+aM(i,n)}function lM(i,e){let t=1-i;return t*t*t*e}function cM(i,e){let t=1-i;return 3*t*t*i*e}function uM(i,e){return 3*(1-i)*i*i*e}function hM(i,e){return i*i*i*e}function Ro(i,e,t,n,s){return lM(i,e)+cM(i,t)+uM(i,n)+hM(i,s)}var fl=class extends Gn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ro(e,s.x,r.x,o.x,a.x),Ro(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qu=class extends Gn{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ro(e,s.x,r.x,o.x,a.x),Ro(e,s.y,r.y,o.y,a.y),Ro(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Gn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yu=class extends Gn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Gn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ao(e,s.x,r.x,o.x),Ao(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends Gn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ao(e,s.x,r.x,o.x),Ao(e,s.y,r.y,o.y),Ao(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(op(a,l.x,c.x,u.x,h.x),op(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},xl=Object.freeze({__proto__:null,ArcCurve:Xu,CatmullRomCurve3:is,CubicBezierCurve:fl,CubicBezierCurve3:qu,EllipseCurve:Ho,LineCurve:pl,LineCurve3:Yu,QuadraticBezierCurve:ml,QuadraticBezierCurve3:gl,SplineCurve:vl}),$u=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xl[s.type]().fromJSON(s))}return this}},Gr=class extends $u{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pl(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ml(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new fl(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new vl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ho(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wr=class i extends st{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new w,d=new ae,f=new w,m=new w,x=new w,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let _=n+v*u*s,y=Math.sin(_),U=Math.cos(_);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*U,o.push(h.x,h.y,h.z),d.x=v/t,d.y=T/(e.length-1),a.push(d.x,d.y);let R=l[3*T+0]*y,I=l[3*T+1],E=l[3*T+0]*U;c.push(R,I,E)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,U=y,T=y+e.length,R=y+e.length+1,I=y+1;r.push(U,T,I),r.push(R,I,T)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var yl=class i extends st{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new w,u=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mn=class i extends st{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function v(){let y=new w,U=new w,T=0,R=(t-e)/n;for(let I=0;I<=r;I++){let E=[],b=I/r,S=b*(t-e)+e;for(let C=0;C<=s;C++){let L=C/s,F=L*l+a,N=Math.sin(F),D=Math.cos(F);U.x=S*N,U.y=-b*n+g,U.z=S*D,h.push(U.x,U.y,U.z),y.set(N,R,D).normalize(),d.push(y.x,y.y,y.z),f.push(L,1-b),E.push(m++)}x.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let b=x[E][I],S=x[E+1][I],C=x[E+1][I+1],L=x[E][I+1];(e>0||E!==0)&&(u.push(b,S,L),T+=3),(t>0||E!==r-1)&&(u.push(S,C,L),T+=3)}c.addGroup(p,T,0),p+=T}function _(y){let U=m,T=new ae,R=new w,I=0,E=y===!0?e:t,b=y===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let S=m;for(let C=0;C<=s;C++){let F=C/s*l+a,N=Math.cos(F),D=Math.sin(F);R.x=E*D,R.y=g*b,R.z=E*N,h.push(R.x,R.y,R.z),d.push(0,b,0),T.x=N*.5+.5,T.y=D*.5*b+.5,f.push(T.x,T.y),m++}for(let C=0;C<s;C++){let L=U+C,F=S+C;y===!0?u.push(F,F+1,L):u.push(F+1,F,L),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Zu=class i extends st{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new w,y=new w,U=new w;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],U),l(_,y,U,v)}function l(v,_,y,U){let T=U+1,R=[];for(let I=0;I<=T;I++){R[I]=[];let E=v.clone().lerp(y,I/T),b=_.clone().lerp(y,I/T),S=T-I;for(let C=0;C<=S;C++)C===0&&I===T?R[I][C]=E:R[I][C]=E.clone().lerp(b,C/S)}for(let I=0;I<T;I++)for(let E=0;E<2*(T-I)-1;E++){let b=Math.floor(E/2);E%2===0?(d(R[I][b+1]),d(R[I+1][b]),d(R[I][b])):(d(R[I][b+1]),d(R[I+1][b+1]),d(R[I+1][b]))}}function c(v){let _=new w;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){let v=new w;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=g(v)/2/Math.PI+.5,U=p(v)/Math.PI+.5;o.push(y,1-U)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],U=o[v+4],T=Math.max(_,y,U),R=Math.min(_,y,U);T>.9&&R<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),U<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let v=new w,_=new w,y=new w,U=new w,T=new ae,R=new ae,I=new ae;for(let E=0,b=0;E<r.length;E+=9,b+=6){v.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),T.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),U.copy(v).add(_).add(y).divideScalar(3);let S=g(U);x(T,b+0,v,S),x(R,b+2,_,S),x(I,b+4,y,S)}}function x(v,_,y,U){U<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=U/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ss=class extends Gr{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Gr().fromJSON(s))}return this}},dM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=vM(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let m=t;m<s;m+=t)h=i[m],d=i[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return zo(r,o,t,a,l,f,0),o}};function Hp(i,e,t,n,s){let r,o;if(s===RM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=ap(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=ap(r,i[r],i[r+1],o);return o&&Ul(o,o.next)&&(Vo(o),o=o.next),o}function Hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ul(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Vo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&bM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?pM(i,n,s,r):fM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Vo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=mM(Hs(i),e,t),zo(i,e,t,n,s,r,2)):o===2&&gM(i,e,t,n,s,r):zo(Hs(i),e,t,n,s,r,1);break}}}function fM(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Tr(s,a,r,l,o,c,m.x,m.y)&&Vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=Ku(f,m,e,t,n),v=Ku(x,g,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Tr(a,u,l,h,c,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Tr(a,u,l,h,c,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Tr(a,u,l,h,c,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Tr(a,u,l,h,c,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function mM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ul(s,r)&&zp(s,n,n.next,r)&&ko(s,r)&&ko(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vo(n),Vo(n.next),n=i=r),n=n.next}while(n!==i);return Hs(n)}function gM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&SM(o,a)){let l=kp(o,a);o=Hs(o,o.next),l=Hs(l,l.next),zo(o,e,t,n,s,r,0),zo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vM(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Hp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(wM(c));for(s.sort(xM),r=0;r<s.length;r++)t=yM(s[r],t);return t}function xM(i,e){return i.x-e.x}function yM(i,e){let t=_M(i,e);if(!t)return e;let n=kp(t,i);return Hs(n,n.next),Hs(t,t.next)}function _M(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Tr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),ko(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&MM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function MM(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function bM(i,e,t,n){let s=i;do s.z===0&&(s.z=Ku(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,EM(s)}function EM(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ku(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Tr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function SM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!TM(i,e)&&(ko(i,e)&&ko(e,i)&&AM(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Ul(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ul(i,e){return i.x===e.x&&i.y===e.y}function zp(i,e,t,n){let s=Ga(Vt(i,e,t)),r=Ga(Vt(i,e,n)),o=Ga(Vt(t,n,i)),a=Ga(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&Va(i,t,e)||r===0&&Va(i,n,e)||o===0&&Va(t,i,n)||a===0&&Va(t,e,n))}function Va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ga(i){return i>0?1:i<0?-1:0}function TM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ko(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function AM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function kp(i,e){let t=new ju(i.i,i.x,i.y),n=new ju(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ap(i,e,t,n){let s=new ju(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ju(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Co=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];lp(e),cp(n,e);let o=e.length;t.forEach(lp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,cp(n,t[l]);let a=dM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zs=class i extends st{constructor(e=new ss([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:CM,_,y=!1,U,T,R,I;p&&(_=p.getSpacedPoints(u),y=!0,d=!1,U=p.computeFrenetFrames(u,!1),T=new w,R=new w,I=new w),d||(g=0,f=0,m=0,x=0);let E=a.extractPoints(c),b=E.shape,S=E.holes;if(!Co.isClockWise(b)){b=b.reverse();for(let ee=0,re=S.length;ee<re;ee++){let O=S[ee];Co.isClockWise(O)&&(S[ee]=O.reverse())}}let L=Co.triangulateShape(b,S),F=b;for(let ee=0,re=S.length;ee<re;ee++){let O=S[ee];b=b.concat(O)}function N(ee,re,O){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(re,O)}let D=b.length,k=L.length;function B(ee,re,O){let Te,te,ce,pe=ee.x-re.x,Ue=ee.y-re.y,be=O.x-ee.x,P=O.y-ee.y,M=pe*pe+Ue*Ue,H=pe*P-Ue*be;if(Math.abs(H)>Number.EPSILON){let G=Math.sqrt(M),W=Math.sqrt(be*be+P*P),Y=re.x-Ue/G,fe=re.y+pe/G,ve=O.x-P/W,me=O.y+be/W,Ie=((ve-Y)*P-(me-fe)*be)/(pe*P-Ue*be);Te=Y+pe*Ie-ee.x,te=fe+Ue*Ie-ee.y;let le=Te*Te+te*te;if(le<=2)return new ae(Te,te);ce=Math.sqrt(le/2)}else{let G=!1;pe>Number.EPSILON?be>Number.EPSILON&&(G=!0):pe<-Number.EPSILON?be<-Number.EPSILON&&(G=!0):Math.sign(Ue)===Math.sign(P)&&(G=!0),G?(Te=-Ue,te=pe,ce=Math.sqrt(M)):(Te=pe,te=Ue,ce=Math.sqrt(M/2))}return new ae(Te/ce,te/ce)}let V=[];for(let ee=0,re=F.length,O=re-1,Te=ee+1;ee<re;ee++,O++,Te++)O===re&&(O=0),Te===re&&(Te=0),V[ee]=B(F[ee],F[O],F[Te]);let j=[],se,ye=V.concat();for(let ee=0,re=S.length;ee<re;ee++){let O=S[ee];se=[];for(let Te=0,te=O.length,ce=te-1,pe=Te+1;Te<te;Te++,ce++,pe++)ce===te&&(ce=0),pe===te&&(pe=0),se[Te]=B(O[Te],O[ce],O[pe]);j.push(se),ye=ye.concat(se)}for(let ee=0;ee<g;ee++){let re=ee/g,O=f*Math.cos(re*Math.PI/2),Te=m*Math.sin(re*Math.PI/2)+x;for(let te=0,ce=F.length;te<ce;te++){let pe=N(F[te],V[te],Te);de(pe.x,pe.y,-O)}for(let te=0,ce=S.length;te<ce;te++){let pe=S[te];se=j[te];for(let Ue=0,be=pe.length;Ue<be;Ue++){let P=N(pe[Ue],se[Ue],Te);de(P.x,P.y,-O)}}}let ke=m+x;for(let ee=0;ee<D;ee++){let re=d?N(b[ee],ye[ee],ke):b[ee];y?(R.copy(U.normals[0]).multiplyScalar(re.x),T.copy(U.binormals[0]).multiplyScalar(re.y),I.copy(_[0]).add(R).add(T),de(I.x,I.y,I.z)):de(re.x,re.y,0)}for(let ee=1;ee<=u;ee++)for(let re=0;re<D;re++){let O=d?N(b[re],ye[re],ke):b[re];y?(R.copy(U.normals[ee]).multiplyScalar(O.x),T.copy(U.binormals[ee]).multiplyScalar(O.y),I.copy(_[ee]).add(R).add(T),de(I.x,I.y,I.z)):de(O.x,O.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){let re=ee/g,O=f*Math.cos(re*Math.PI/2),Te=m*Math.sin(re*Math.PI/2)+x;for(let te=0,ce=F.length;te<ce;te++){let pe=N(F[te],V[te],Te);de(pe.x,pe.y,h+O)}for(let te=0,ce=S.length;te<ce;te++){let pe=S[te];se=j[te];for(let Ue=0,be=pe.length;Ue<be;Ue++){let P=N(pe[Ue],se[Ue],Te);y?de(P.x,P.y+_[u-1].y,_[u-1].x+O):de(P.x,P.y,h+O)}}}q(),ne();function q(){let ee=s.length/3;if(d){let re=0,O=D*re;for(let Te=0;Te<k;Te++){let te=L[Te];ue(te[2]+O,te[1]+O,te[0]+O)}re=u+g*2,O=D*re;for(let Te=0;Te<k;Te++){let te=L[Te];ue(te[0]+O,te[1]+O,te[2]+O)}}else{for(let re=0;re<k;re++){let O=L[re];ue(O[2],O[1],O[0])}for(let re=0;re<k;re++){let O=L[re];ue(O[0]+D*u,O[1]+D*u,O[2]+D*u)}}n.addGroup(ee,s.length/3-ee,0)}function ne(){let ee=s.length/3,re=0;Ee(F,re),re+=F.length;for(let O=0,Te=S.length;O<Te;O++){let te=S[O];Ee(te,re),re+=te.length}n.addGroup(ee,s.length/3-ee,1)}function Ee(ee,re){let O=ee.length;for(;--O>=0;){let Te=O,te=O-1;te<0&&(te=ee.length-1);for(let ce=0,pe=u+g*2;ce<pe;ce++){let Ue=D*ce,be=D*(ce+1),P=re+Te+Ue,M=re+te+Ue,H=re+te+be,G=re+Te+be;Ce(P,M,H,G)}}}function de(ee,re,O){l.push(ee),l.push(re),l.push(O)}function ue(ee,re,O){_e(ee),_e(re),_e(O);let Te=s.length/3,te=v.generateTopUV(n,s,Te-3,Te-2,Te-1);Pe(te[0]),Pe(te[1]),Pe(te[2])}function Ce(ee,re,O,Te){_e(ee),_e(re),_e(Te),_e(re),_e(O),_e(Te);let te=s.length/3,ce=v.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);Pe(ce[0]),Pe(ce[1]),Pe(ce[3]),Pe(ce[1]),Pe(ce[2]),Pe(ce[3])}function _e(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Pe(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return PM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xl[s.type]().fromJSON(s)),new i(n,e.options)}},CM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-h),new ae(d,1-m),new ae(x,1-p)]:[new ae(a,1-l),new ae(u,1-h),new ae(f,1-m),new ae(g,1-p)]}};function PM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var rs=class i extends Zu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ks=class i extends st{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new w,m=new ae;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,_=v,y=v+n+1,U=v+n+2,T=v+1;a.push(_,y,T),a.push(y,U,T)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ln=class i extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new w,d=new w,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let U=0;U<=t;U++){let T=U/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(T+y,1-_),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=u[p][v+1],y=u[p][v],U=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&f.push(_,y,T),(p!==n-1||l<Math.PI)&&f.push(y,U,T)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class i extends st{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Vs=class i extends st{constructor(e=new gl(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new ae,u=new w,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),v(),p()}function g(_){u=e.getPointAt(_/t,u);let y=o.normals[_],U=o.binormals[_];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,I=Math.sin(R),E=-Math.cos(R);l.x=E*y.x+I*U.x,l.y=E*y.y+I*U.y,l.z=E*y.z+I*U.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let U=(s+1)*(_-1)+(y-1),T=(s+1)*_+(y-1),R=(s+1)*_+y,I=(s+1)*(_-1)+y;m.push(U,T,I),m.push(T,R,I)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new xl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var _l=class extends rt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},pt=class extends bn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends pt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ml=class extends bn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Wa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function IM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function LM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function up(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Vp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var os=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ju=class extends os{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qd,endingEnd:qd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yd:r=e,a=2*t-n;break;case $d:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yd:o=e,l=2*n-t;break;case $d:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let U=0;U!==a;++U)r[U]=p*o[u+U]+v*o[c+U]+_*o[l+U]+y*o[h+U];return r}},Qu=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},eh=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ju(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&IM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Or;var as=class extends Wn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Fr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Wn{};bl.prototype.ValueTypeName="color";var Ii=class extends Wn{};Ii.prototype.ValueTypeName="number";var th=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},Li=class extends Wn{InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}};Li.prototype.ValueTypeName="quaternion";Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Wn{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Fr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Wn{};Di.prototype.ValueTypeName="vector";var El=class{constructor(e="",t=-1,n=[],s=D0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(UM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=LM(l);l=up(l,1,u),c=up(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ii(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,x){if(f.length!==0){let g=[],p=[];Vp(f,g,p,m),g.length!==0&&x.push(new h(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){let _=d[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new Ii(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Di,f+".position",d,"pos",s),n(Li,f+".quaternion",d,"rot",s),n(Di,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function DM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Di;case"color":return bl;case"quaternion":return Li;case"bool":case"boolean":return as;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function UM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=DM(i.type);if(i.times===void 0){let t=[],n=[];Vp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},nh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},NM=new nh,Ui=class{constructor(e){this.manager=e!==void 0?e:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={},ih=class extends Error{constructor(e,t){super(e),this.response=t}},Go=class extends Ui{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ei[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){v();function v(){h.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let U=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,R=u.length;T<R;T++){let I=u[T];I.onProgress&&I.onProgress(U)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Qi.add(e,c);let u=Ei[e];delete Ei[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var sh=class extends Ui{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Do("img");function l(){u(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var cs=class extends Ui{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new sh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wl=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Wc=new Ae,hp=new w,dp=new w,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(hp),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),Wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rh=class extends Wo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Sl=class extends Xr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fp=new Ae,_o=new w,Xc=new w,oh=class extends Wo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_o.setFromMatrixPosition(e.matrixWorld),n.position.copy(_o),Xc.copy(n.position),Xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xc),n.updateMatrixWorld(),s.makeTranslation(-_o.x,-_o.y,-_o.z),fp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fp)}},Tl=class extends Xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ah=class extends Wo{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var us=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Fn=class extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Al=class extends Ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,l),r.manager.itemStart(e)}};var Rl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pp(){return performance.now()}var Ph="\\[\\]\\.:\\/",FM=new RegExp("["+Ph+"]","g"),Ih="[^"+Ph+"]",OM="[^"+Ph.replace("\\.","")+"]",BM=/((?:WC+[\/:])*)/.source.replace("WC",Ih),HM=/(WCOD+)?/.source.replace("WCOD",OM),zM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),kM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),VM=new RegExp("^"+BM+HM+zM+kM+"$"),GM=["material","materials","bones","map"],lh=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FM,"")}static parseTrackName(e){let t=VM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);GM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=lh;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B1=new Float32Array(1);var mp=new Ae,Cl=class{constructor(e,t,n=0,s=1/0){this.ray=new Us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,t=!0,n=[]){return ch(e,this,n,t),n.sort(gp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ch(e[s],this,n,t);return n.sort(gp),n}};function gp(i,e){return i.distance-e.distance}function ch(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ch(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function Lh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new st,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Gp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let m=Gp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Gp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ot(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){let x=u.getComponent(d,m);a.setComponent(d+h,m,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Dh(i,e){if(e===Rp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qo||e===Il){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===qo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var fs=class extends Ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ed(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=us.extractUrlBase(e);o=us.resolveURL(c,this.path)}else o=us.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Go(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===$p){try{o[gt.KHR_BINARY_GLTF]=new td(e)}catch(h){s&&s(h);return}r=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ld(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:o[h]=new Bh;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[h]=new nd(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[h]=new id;break;case gt.KHR_MESH_QUANTIZATION:o[h]=new sd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function WM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Oh=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],gn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Tl(u),c.distance=h;break;case"spot":c=new Sl(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Bh=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){let s=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},zh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,a)}return Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(a[0],a[1],a[2],gn),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},jh=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Jh=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Qh=class{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},ed=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let m of h){let x=new Ae,g=new w,p=new At,v=new w(1,1,1),_=new nn(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(g,p,v));for(let y in l)if(y==="_COLOR_0"){let U=l[y];_.instanceColor=new zt(U.array,U.itemSize,U.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);Ht.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},$p="glTF",Yo=12,Wp={JSON:1313821514,BIN:5130562},td=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$p)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Yo,r=new DataView(e,Yo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Wp.JSON){let c=new Uint8Array(e,Yo+o,a);this.content=n.decode(c)}else if(l===Wp.BIN){let c=Yo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=od[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=od[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Yr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(f)},a,c,gn,d)})})}},id=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},sd=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},Nl=class extends os{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,v=1-g,_=p-d+h;for(let y=0;y!==a;y++){let U=o[x+y+a],T=o[x+y+l]*u,R=o[m+y+a],I=o[m+y]*u;r[y]=v*U+_*T+g*R+p*I}return r}},XM=new At,rd=class extends Nl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return XM.fromArray(r).normalize().toArray(r),r}},Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xp={9728:pn,9729:Tn,9984:xh,9985:Eo,9986:wr,9987:oi},qp={33071:Ti,33648:Io,10497:Ls},Uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},od={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ds={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qM={CUBICSPLINE:void 0,LINEAR:Or,STEP:Fr},Nh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function Ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $M(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ZM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KM(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fh(t.attributes):e=i.indices+":"+Fh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Fh(i.targets[n]);return e}function Fh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ad(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var JM=new Ae,ld=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new cs(this.options.manager):this.textureLoader=new Al(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ws(r,a,s),Fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Uh[s.type],a=Yr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new ot(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Uh[s.type],c=Yr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==h){let p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(v);_||(x=new c(a,p*f,s.count*f/u),_=new kr(x,f/u),t.cache.add(v,_)),g=new Fs(_,l,d%f/u,m)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),g=new ot(x,l,m);if(s.sparse!==void 0){let p=Uh.SCALAR,v=Yr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,U=new v(o[1],_,s.sparse.count*p),T=new c(o[2],y,s.sparse.count*l);a!==null&&(g=new ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,I=U.length;R<I;R++){let E=U[R];if(g.setX(E,T[R*l]),l>=2&&g.setY(E,T[R*l+1]),l>=3&&g.setZ(E,T[R*l+2]),l>=4&&g.setW(E,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Xp[d.magFilter]||Tn,u.minFilter=Xp[d.minFilter]||oi,u.wrapS=qp[d.wrapS]||Ls,u.wrapT=qp[d.wrapT]||Ls,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==pn&&u.minFilter!==Tn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new an(x);g.needsUpdate=!0,d(g)}),t.load(us.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Fi(h,o),h.userData.mimeType=o.mimeType||jM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Os,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bo,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return pt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let h=s[gt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],gn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ft);let u=r.alphaMode||Nh.OPAQUE;if(u===Nh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Nh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Pt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pt){let h=r.emissiveFactor;a.emissive=new xe().setRGB(h[0],h[1],h[2],gn)}return r.emissiveTexture!==void 0&&o!==Pt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ws(s,h,r),h})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=KM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Yp(new st,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?YM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=o[f],p,v=c[f];if(g.mode===Xn.TRIANGLES||g.mode===Xn.TRIANGLE_STRIP||g.mode===Xn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ol(x,v):new Be(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Xn.TRIANGLE_STRIP?p.geometry=Dh(p.geometry,Il):g.mode===Xn.TRIANGLE_FAN&&(p.geometry=Dh(p.geometry,qo));else if(g.mode===Xn.LINES)p=new hl(x,v);else if(g.mode===Xn.LINE_STRIP)p=new Vr(x,v);else if(g.mode===Xn.LINE_LOOP)p=new dl(x,v);else if(g.mode===Xn.POINTS)p=new Bs(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&ZM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fi(p,r),g.extensions&&Ws(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ws(s,h[0],r),h[0];let d=new Ze;r.extensions&&Ws(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Ye.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ci(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ae;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ll(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let v=0,_=d.length;v<_;v++){let y=d[v],U=f[v],T=m[v],R=x[v],I=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let E=n._createAnimationTracks(y,U,T,R,I);if(E)for(let b=0;b<E.length;b++)p.push(E[b])}return new El(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,JM)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Oo:c.length>1?u=new Ze:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Fi(u,r),r.extensions&&Ws(n,u,r),r.matrix!==void 0){let h=new Ae;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&Ws(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof bn||d instanceof an)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];ds[r.path]===ds.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ds[r.path]){case ds.weights:c=Ii;break;case ds.rotation:c=Li;break;case ds.position:case ds.scale:c=Di;break;default:switch(n.itemSize){case 1:c=Ii;break;case 2:case 3:default:c=Di;break}break}let u=s.interpolation!==void 0?qM[s.interpolation]:Or,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+ds[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ad(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Li?rd:Nl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function QM(i,e,t){let n=e.attributes,s=new Xt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){let u=ad(Yr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,l=new w;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=ad(Yr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Un;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Yp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=od[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return dt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Fi(i,e),QM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$M(i,e.targets,t):i})}var Fl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eb=new ci(-1,1,1,-1,0,1),cd=class extends st{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},tb=new cd,ps=class{constructor(e){this._mesh=new Be(tb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var $r=class extends On{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hs.clone(e.uniforms),this.material=new rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ps(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $o=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ol=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $r(Fl),this.copyPass.material.blending=ai,this.clock=new Rl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$o!==void 0&&(o instanceof $o?n=!0:o instanceof Ol&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hl=class extends On{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Zp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zr=class i extends On{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,o,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new _n(r,o,{type:ei});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new _n(r,o,{type:ei});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Zp;this.highPassUniforms=hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Fl;this.copyUniforms=hs.clone(u.uniforms),this.blendMaterial=new rt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new Pt,this.fsQuad=new ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Zr.BlurDirectionX=new ae(1,0);Zr.BlurDirectionY=new ae(0,1);var Kp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zl=class extends On{constructor(){super();let e=Kp;this.uniforms=hs.clone(e.uniforms),this.material=new _l({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Zo=new w;function qn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Zo.copy(e),Zo[n]=0,Zo.normalize();let c=.5*o/(o+a),u=1-Zo.angleTo(i)/l;return Math.sign(Zo[t])===1?u*c:a/(o+a)+c+c*(1-u)}var di=class extends Ns{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,l=new w,c=new w(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,m=new w,x=.5/s;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=qn(m,l,"z","y",r,n),d[p+1]=1-qn(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),d[p+0]=1-qn(m,l,"z","y",r,n),d[p+1]=1-qn(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),d[p+0]=1-qn(m,l,"x","z",r,e),d[p+1]=qn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-qn(m,l,"x","z",r,e),d[p+1]=1-qn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-qn(m,l,"x","y",r,e),d[p+1]=1-qn(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),d[p+0]=qn(m,l,"x","y",r,e),d[p+1]=1-qn(m,l,"y","x",r,t);break}}};var Jr={};u0(Jr,{AXIS_H:()=>Oi,BODY_R:()=>kl,CRUISE:()=>ms,FLOAT_H:()=>Kr,GRAVITY:()=>fd,HEIGHT_GLSL:()=>Gl,HILLS:()=>Gt,JUMP_V:()=>dd,LANE:()=>ud,LAYOUT_LANE:()=>hd,SLIDE:()=>Wt,SWELL:()=>Ko,WATER:()=>qs,baseHeight:()=>Rn,clamp01:()=>Xs,hills:()=>jp,laneX:()=>Cn,slopeAt:()=>Vl,smoothstep:()=>jr,surface:()=>gs,waves:()=>Jp});var qs=0,Oi=1.5,ud=.7,hd=.85,Kr=.34,kl=.4,ms=7,dd=6.2,fd=17,Wt={half:1.1,moat:-.6,crown:.1},Gt=[[-16.7,0],[-11.8,-.5],[-5.6,.36],[-1,0]],Ko={amp:.1,wavelength:7.4},Xs=i=>Math.min(1,Math.max(0,i)),jr=(i,e,t)=>{let n=Xs((t-i)/(e-i));return n*n*(3-2*n)},Cn=i=>(1-i)*.7;function jp(i){if(i<=Gt[0][0]||i>=Gt[Gt.length-1][0])return 0;for(let e=0;e<Gt.length-1;e++){let[t,n]=Gt[e],[s,r]=Gt[e+1];if(i<s)return n+(r-n)*jr(t,s,i)}return 0}function Rn(i,e,t){let n=Xs((i.tunnelStart-t)*.5),s=Math.abs(e),r=Wt.crown*Xs(1-s*s/(Wt.half*Wt.half)),o=jr(Wt.half,Wt.half+.55,s),a=n*((r+jp(t))*(1-o)+Wt.moat*o),l=Xs((t-i.tunnelStart)*.5)*Xs((i.tunnelEnd-t)*.5),c=l*Ko.amp*Math.sin((t-i.tunnelStart)*2*Math.PI/Ko.wavelength),u=Math.sqrt(Math.max(.01,i.tunnelRadius*i.tunnelRadius-1.5*1.5)),h=Xs((s-(u-.45))/.45);return 0+a+c+l*.45*h*h}function Jp(i,e,t){return .06*Math.sin(e*.9-t*3.1+i*.35)+.035*Math.sin(e*2.3-t*5.3-i*1.1+1.7)+.02*Math.sin(e*4.7-t*7.9+i*2.3+.4)+.012*Math.sin(i*6+t*4+e*.5)}var gs=(i,e,t,n)=>Rn(i,e,t)+Jp(e,t,n),Vl=(i,e,t)=>(Rn(i,e,t+.25)-Rn(i,e,t-.25))/.5,Gl=`
uniform vec4 uTunnel;   // start z, end z, radius, axis height
uniform float uTime;
float bwSmooth(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float bwHills(float z) {
  if (z <= ${Gt[0][0].toFixed(3)} || z >= ${Gt[3][0].toFixed(3)}) return 0.0;
  if (z < ${Gt[1][0].toFixed(3)}) return mix(${Gt[0][1].toFixed(3)}, ${Gt[1][1].toFixed(3)}, bwSmooth(${Gt[0][0].toFixed(3)}, ${Gt[1][0].toFixed(3)}, z));
  if (z < ${Gt[2][0].toFixed(3)}) return mix(${Gt[1][1].toFixed(3)}, ${Gt[2][1].toFixed(3)}, bwSmooth(${Gt[1][0].toFixed(3)}, ${Gt[2][0].toFixed(3)}, z));
  return mix(${Gt[2][1].toFixed(3)}, ${Gt[3][1].toFixed(3)}, bwSmooth(${Gt[2][0].toFixed(3)}, ${Gt[3][0].toFixed(3)}, z));
}
float bwBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = ${Wt.crown.toFixed(3)} * clamp(1.0 - ax * ax / ${(Wt.half*Wt.half).toFixed(3)}, 0.0, 1.0);
  float edge = bwSmooth(${Wt.half.toFixed(3)}, ${(Wt.half+.55).toFixed(3)}, ax);
  float slide = before * mix(crown + bwHills(xz.y), ${Wt.moat.toFixed(3)}, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * ${Ko.amp.toFixed(3)} * sin((xz.y - uTunnel.x) * ${(2*Math.PI/Ko.wavelength).toFixed(5)});
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
`;var fi=`
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
`,Qp=`
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
`,em=`
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
`,tm=i=>`
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
`,nm=`
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
`;var Ys=8,im=`
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
`,sm=`
${Gl}
${im}
uniform vec4 uRipples[${Ys}];   // x, u, start time, strength (track coordinates)
// Each vertex knows its track position (sideways x, along u) and the path frame there, so the sheet
// follows the 3D path: it climbs, drops and banks with the bent drum (track.js).
attribute vec2 aTrack;
attribute vec3 aP, aR, aU, aT;
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;
float rippleHeight(vec2 xz) {
  float h = 0.0;
  for (int i = 0; i < ${Ys}; i++) {
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
`,rm=`
${Gl}
${fi}
${im}
uniform vec4 uRipples[${Ys}];
uniform float uFlow;        // current speed (m/s)
uniform float uSlideHalf;   // half width of the raised slide
uniform vec3 uDeep, uShallow, uTurq, uGlow, uSky, uPink, uGold, uRingA, uRingB, uFog, uSunDir;
uniform vec3 uRings;        // first ring u, spacing, count
uniform float uOpen;        // the Screen 3 opening look on the slide (opening.js); 0 = the original water
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;

float ripples(vec2 xz) {
  float f = 0.0;
  for (int i = 0; i < ${Ys}; i++) {
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
`,om=`
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
`,am=`
${fi}
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
`;var bE=`
${fi}
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
`,lm=`
varying vec3 vDir;
void main() { vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }
`,cm=`
uniform vec3 uTop, uMid, uHorizon, uBottom;
varying vec3 vDir;
void main() {
  float y = vDir.y;
  vec3 c = y > 0.0 ? mix(uHorizon, mix(uMid, uTop, smoothstep(0.25, 0.9, y)), smoothstep(0.0, 0.25, y)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.3, y));
  gl_FragColor = vec4(c, 1.0);
}
`,um=`
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
`,hm=`
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
`,dm=`
attribute float size; attribute float alpha; attribute float kind;
uniform float uScale;
varying float vAlpha; varying float vKind;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  vAlpha = alpha; vKind = kind;
  gl_Position = projectionMatrix * mv;
}
`,fm=`
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
`,pm={uniforms:{tDiffuse:{value:null},uSat:{value:1.32},uContrast:{value:1.12},uVignette:{value:.18},uOpen:{value:0},uOpenExposure:{value:.9},uOpenVibrance:{value:.35},uOpenDepth:{value:.16}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},mm=`
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,gm=`
${fi}
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
`;var Wl=(i,e,t,n,s)=>jr(e,t,i)*(1-jr(n,s,i));function xm(i){let e=i.tunnelStart,t=C=>.27*Wl(C,e+5,e+8,e+11,e+13.5)-.34*Wl(C,e+14.5,e+17.5,e+21,e+24),n=C=>.055*Wl(C,e+6,e+9,e+12,e+15)-.06*Wl(C,e+18,e+21,e+26,e+29),s=C=>Math.atan(7*7*n(C)/9.81),r=i.startZ-34,o=i.tunnelEnd+14,a=.05,l=Math.ceil((o-r)/a)+1,c=new Float64Array(l*3),u=new Float64Array(l*3),h=new Float64Array(l*3),d=new Float64Array(l*3),f=new Float64Array(l*3),m=0,x=0,g=r,p=0,v=(C,L)=>{let F=t(C);return[Math.cos(F)*Math.sin(L),Math.sin(F),Math.cos(F)*Math.cos(L)]};for(let C=0;C<l;C++){let L=r+C*a,F=C*3,N=t(L),D=s(L),k=v(L,p),B=[Math.cos(p),0,-Math.sin(p)],V=[k[1]*B[2]-k[2]*B[1],k[2]*B[0]-k[0]*B[2],k[0]*B[1]-k[1]*B[0]],j=Math.cos(D),se=Math.sin(D);c[F]=m,c[F+1]=x,c[F+2]=g,d[F]=k[0],d[F+1]=k[1],d[F+2]=k[2];for(let q=0;q<3;q++)u[F+q]=B[q]*j-V[q]*se,h[F+q]=V[q]*j+B[q]*se;f[F]=N,f[F+1]=p,f[F+2]=D;let ye=p+n(L+a*.5)*a*.5,ke=v(L+a*.5,ye);m+=ke[0]*a,x+=ke[1]*a,g+=ke[2]*a,p+=n(L+a*.5)*a}let _=C=>{let L=Math.min(l-1.0001,Math.max(0,(C-r)/a)),F=Math.floor(L);return[F,L-F]},y=(C,L,F,N)=>{let D=L*3;return N.x=C[D]+(C[D+3]-C[D])*F,N.y=C[D+1]+(C[D+4]-C[D+1])*F,N.z=C[D+2]+(C[D+5]-C[D+2])*F,N};function U(C,L={P:new w,R:new w,U:new w,T:new w}){let[F,N]=_(C);y(c,F,N,L.P),y(u,F,N,L.R).normalize(),y(h,F,N,L.U).normalize(),y(d,F,N,L.T).normalize();let D=C-r<0?C-r:C-(r+(l-1)*a);return(C<r||C>r+(l-1)*a)&&L.P.addScaledVector(L.T,D),L}let T={P:new w,R:new w,U:new w,T:new w};function R(C,L,F,N=new w){return U(F,T),N.copy(T.P).addScaledVector(T.R,C).addScaledVector(T.U,L)}function I(C,L,F,N,D=new w){return U(N,T),D.set(0,0,0).addScaledVector(T.R,C).addScaledVector(T.U,L).addScaledVector(T.T,F)}function E(C,L=new At){return U(C,T),L.setFromRotationMatrix(new Ae().makeBasis(T.R,T.U,T.T))}function b(C,L=new Ae){let F=C.elements[14];U(F,T);let N=new Ae().makeBasis(T.R,T.U,T.T).setPosition(T.P);return L.multiplyMatrices(N,new Ae().makeTranslation(0,0,-F)).multiply(C)}function S(C){let[L,F]=_(C),N=L*3,D=180/Math.PI;return{pitch:(f[N]+(f[N+3]-f[N])*F)*D,heading:(f[N+1]+(f[N+4]-f[N+1])*F)*D,bank:(f[N+2]+(f[N+5]-f[N+2])*F)*D}}return{u0:r,u1:o,frame:U,map:R,dir:I,quaternion:E,mapMatrix:b,angles:S,pitch:t,turn:n,bankOf:s}}function Mm({scene:i,mats:e,track:t}){let n=new Ze;n.name="scenery",i.add(n);let s=[],r=e.env,o=e.gold,a=new pt({color:15903035,metalness:1,roughness:.3,envMap:r,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),l=new pt({color:2381823,metalness:.35,roughness:.26,envMap:r,envMapIntensity:1.2}),c=new pt({color:1521336,metalness:.3,roughness:.3,envMap:r,envMapIntensity:1}),u=new pt({color:1343628,metalness:.3,roughness:.25,envMap:r,envMapIntensity:1}),h=new pt({color:16178356,metalness:.25,roughness:.35,envMap:r,envMapIntensity:.9}),d=_m(16740296),f=_m(16773370),m=new Pt({color:new xe(2.4,2.05,1.35)}),x=(E,b=n)=>(b.add(E),E),g=(E,b,S,C)=>{let L=new Be(E,b);return S&&L.position.set(...S),x(L,C)},p=(E,b,S=n)=>{let C=new Ze;return C.position.set(...E),C.quaternion.setFromUnitVectors(new w(0,0,1),new w(...b).normalize()),x(C,S)},v=(E,b,S,C,L,F=0,N=0)=>{let D=new nn(new ln(C,10,8),L,S),k=new Ae;for(let B=0;B<S;B++){let V=N+B/S*Math.PI*2;D.setMatrixAt(B,k.makeTranslation(Math.cos(V)*b,Math.sin(V)*b,F))}return x(D,E)},_=(E,b,S,C,L,F=0)=>{let N=ib(),D=new nn(N,L,S),k=new Ae,B=new At,V=new w;for(let j=0;j<S;j++){let se=j/S*Math.PI*2,ye=C*(.8+.4*jo(j*7.1));B.setFromEuler(new Mn(jo(j)*6,jo(j+3)*6,jo(j+9)*6)),V.set(ye,ye,ye),D.setMatrixAt(j,k.compose(new w(Math.cos(se)*b,Math.sin(se)*b,F+(jo(j+5)-.5)*C),B,V))}return x(D,E)},y=new Map;function U(E,b,S){let C=`${E}|${b}|${S}`;if(y.has(C))return y.get(C);let L=new ss,F=E*.8,N=Math.PI*2/b;for(let B=0;B<b;B++){let V=B*N;[[F,V],[E*.97,V+N*.1],[E,V+N*.22],[E,V+N*.34],[E*.97,V+N*.46],[F,V+N*.56]].forEach(([se,ye],ke)=>{let q=Math.cos(ye)*se,ne=Math.sin(ye)*se;B===0&&ke===0?L.moveTo(q,ne):L.lineTo(q,ne)})}L.closePath();let D=new Gr;D.absarc(0,0,E*.42,0,Math.PI*2,!0),L.holes.push(D);let k=new zs(L,{depth:S,bevelEnabled:!0,bevelThickness:S*.35,bevelSize:E*.05,bevelSegments:3,curveSegments:6});return k.translate(0,0,-S/2),y.set(C,k),k}{let b=p([-2.25,-.3,-10],[.94,.05,-.34]),S=x(new Ze,b);g(new jt(1.3,.24,20,72),o,null,S),g(new jt(1.3-.32,.1,12,64),a,null,S);let C=new nn(new di(.26,.2,.5,2,.05),a,28),L=new Ae,F=new At;for(let D=0;D<28;D++){let k=D/28*Math.PI*2;F.setFromAxisAngle(new w(0,0,1),k),C.setMatrixAt(D,L.compose(new w(Math.cos(k)*(1.3+.2),Math.sin(k)*(1.3+.2),0),F,new w(1,1,1)))}x(C,S),g(new mn(1.3-.36,1.3-.36,.16,48),l,null,S).rotation.x=Math.PI/2;for(let D=0;D<6;D++){let k=g(new di(.16,2.275,.12,2,.05),o,[0,0,.12],S);k.rotation.z=D/6*Math.PI}g(new mn(.32,.36,.4,32),o,null,S).rotation.x=Math.PI/2,g(new ln(.2,20,14),l,[0,0,.24],S),v(S,1.3-.08,18,.05,m,.24),v(S,1.3-.08,18,.05,m,-.24,.17),_(S,1.3+.42,22,.17,d,-.15),s.push({obj:S,axis:new w(0,0,1),speed:-.55});let N=g(new mn(.22,.22,1.2,24),a,null,b);N.rotation.x=Math.PI/2,N.position.z=-.6,g(new jt(.3,.06,10,28),c,[0,0,-.35],b)}{let E=x(new Ze);E.position.set(2.05,-.55,-12),E.rotation.y=.3,g(new di(1.3,1.1,1.4,4,.2),h,null,E);for(let S of[-.25,.27])g(new di(1.36,.12,1.46,2,.05),a,[0,S,0],E);g(new jt(.3,.07,10,32),o,[0,.02,-.72],E),g(new yl(.26,32),l,[0,.02,-.71],E).rotation.y=Math.PI,v(E,.3,10,.035,m,-.77);let b=x(new Ze,E);b.position.y=.6,b.rotation.x=Math.PI/2,_(b,.45,9,.2,d),_(b,.15,4,.18,f)}for(let E of[1,-1]){let b=[[E*2.9,-.7,-12.5],[E*2.5,.25,-10.8],[E*2.75,.55,-7.5],[E*2.45,1.15,-4.6],[E*2.9,1.5,-2.2]],S=new is(b.map(C=>new w(...C)));g(new Vs(S,60,.1,14),o);for(let C=.08;C<1;C+=.16){let L=S.getPoint(C),F=S.getTangent(C);g(new jt(.12,.045,8,20),c,[L.x,L.y,L.z]).quaternion.setFromUnitVectors(new w(0,0,1),F)}}let T=new Ze;T.name="tunnelDecor",i.add(T);let R=[],I=null;if(t){let{TR:E,L:b,W:S}=t,C=[[0,1.25,2.1],[.2,1.6,2.3]],L=b.tunnelRadius*.955,F=2.3,N=new jt(L,.06,8,112),D=new jt(L,.17,8,112),k=new ln(.055,8,6),B=0;for(let te=b.tunnelStart+1.4;te<b.tunnelEnd-.8;te+=F,B++){let ce=new xe(...C[B%2]),pe=new Pt({color:ce.clone()}),Ue=new Be(N,pe);Ue.matrixAutoUpdate=!1,E.mapMatrix(new Ae().makeTranslation(0,S.WATER+S.AXIS_H,te),Ue.matrix),T.add(Ue);let be=new Pt({color:new xe(0,.22,.42),transparent:!0,blending:rn,depthWrite:!1}),P=new Be(D,be);P.matrixAutoUpdate=!1,P.matrix.copy(Ue.matrix),P.renderOrder=3,T.add(P);let M=new nn(k,new Pt({color:new xe(2.4,2.8,2.9)}),28),H=new Ae,G=new Ae;for(let W=0;W<28;W++){let Y=W/28*Math.PI*2;G.makeTranslation(Math.cos(Y)*L,S.WATER+S.AXIS_H+Math.sin(Y)*L,te+.08),E.mapMatrix(G,H),M.setMatrixAt(W,H)}M.frustumCulled=!1,T.add(M),R.push({mat:pe,base:ce,haloMat:be,haloBase:be.color.clone(),u:te})}let V=[-10,15,65,90,115,165,190].map(te=>Ye.degToRad(te)),j=[];for(let te=b.tunnelStart+1.4+F/2;te<b.tunnelEnd-1.5;te+=F)j.push(te);let se=j.length*V.length,ye=b.tunnelRadius*.92,ke=new Pt({map:nb(),color:16777215,alphaTest:.5,side:ft}),q=new nn(new Vn(.62,.34),ke,se),ne=new nn(new di(.72,.44,.06,2,.04),o,se),Ee=new Ae,de=new Ae,ue=new Ae,Ce=new Ae,_e=new w,Pe=new w(0,0,1),ee=new w,re=[],O=0;for(let te of j)for(let ce of V)_e.set(Math.sin(ce),-Math.cos(ce),0),ee.set(-Math.cos(ce),-Math.sin(ce),0),Ee.makeBasis(_e,Pe,ee).setPosition(Math.cos(ce)*ye,S.WATER+S.AXIS_H+Math.sin(ce)*ye,te),E.mapMatrix(Ee,ue),q.setMatrixAt(O,ue),de.multiplyMatrices(Ee,Ce.makeTranslation(0,0,-.04)),E.mapMatrix(de,ue),ne.setMatrixAt(O,ue),q.setColorAt(O,new xe(1,1,1)),re.push(te),O++;q.frustumCulled=ne.frustumCulled=!1,T.add(ne,q),I={mesh:q,u:re,c:new xe};let Te=0;for(let te=b.tunnelStart+3;te<b.tunnelEnd-2;te+=4.6,Te++)for(let ce of[1,-1]){let pe=ce*(.62+.12*(Te%2)),Ue=ce*Math.cos(pe*ce)*(b.tunnelRadius-.12),be=S.WATER+S.AXIS_H+Math.sin(Math.abs(pe))*(b.tunnelRadius-.12),P=new Ze;P.matrixAutoUpdate=!1;let M=new w(-Ue,S.WATER+S.AXIS_H-be,0).normalize(),H=new Ae().compose(new w(Ue,be,te),new At().setFromUnitVectors(new w(0,0,1),M),new w(1,1,1));E.mapMatrix(H,P.matrix),T.add(P);let G=.34+.08*((Te+(ce>0?1:0))%2),W=new Ze;P.add(W);let Y=g(U(G,Math.round(G*26),G*.3),o,null,W),fe=g(new mn(G*.4,G*.4,G*.3,24),(Te+ce)%2?u:l,null,Y);fe.rotation.x=Math.PI/2,g(new ln(G*.15,14,10),o,[0,0,G*.18],Y),v(Y,G*.62,6,G*.06,m,G*.18),s.push({obj:Y,axis:new w(0,0,1),speed:ce*(.8+.2*(Te%3))})}}return{root:n,tunnel:T,update(E,b){for(let S of R){let C=ym(S.u,b);S.mat.color.copy(S.base).multiplyScalar(.75+.4*C),S.haloMat.color.copy(S.haloBase).multiplyScalar(.6+.8*C)}if(I){for(let S=0;S<I.u.length;S++)I.mesh.setColorAt(S,I.c.setScalar(1.15+.6*ym(I.u[S]+1.15,b)));I.mesh.instanceColor.needsUpdate=!0}for(let S of s)S.obj.rotateOnAxis(S.axis,S.speed*E)}}}function ym(i,e){let t=.5+.5*Math.sin(i*.55-e*2.6);return t*t}function nb(){let i=document.createElement("canvas");i.width=256,i.height=140;let e=i.getContext("2d"),t=(r,o,a,l,c)=>{e.beginPath(),e.moveTo(r+c,o),e.arcTo(r+a,o,r+a,o+l,c),e.arcTo(r+a,o+l,r,o+l,c),e.arcTo(r,o+l,r,o,c),e.arcTo(r,o,r+a,o,c),e.closePath()};t(4,4,248,132,26),e.fillStyle="#d61c9a",e.fill();let n=e.createLinearGradient(0,14,0,126);n.addColorStop(0,"#ff9be2"),n.addColorStop(.5,"#ff5cc8"),n.addColorStop(1,"#f23cb4"),t(14,14,228,112,18),e.fillStyle=n,e.fill(),e.fillStyle="rgba(255, 236, 250, 0.92)";for(let r=0;r<7;r++)t(36+r*28,34,12,72,6),e.fill();let s=new ui(i);return s.colorSpace=Tt,s.anisotropy=4,s}function _m(i){let e=new pt({color:i,roughness:.95,metalness:0,emissive:i,emissiveIntensity:.18});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.0);
        totalEmissiveRadiance += diffuseColor.rgb * rim * 0.55; }`)},e}var pd=null;function ib(){if(pd)return pd;let i=new rs(1,3),e=i.attributes.position,t=new w;for(let n=0;n<e.count;n++){t.fromBufferAttribute(e,n);let s=1+.16*Math.sin(t.x*9.1+t.y*4.3)*Math.sin(t.y*7.7+t.z*5.9)+.08*Math.sin(t.z*17+t.x*13);t.multiplyScalar(s),e.setXYZ(n,t.x,t.y,t.z)}return i.computeVertexNormals(),pd=i,i}function jo(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}var sb=2.6,pi={towers:[{at:[3,1.2,-2],height:5.9,yaw:180},{at:[-3,1.2,-2],height:5.9,yaw:0}],gears:[{at:[1.72,1.05,-1.7],dir:[-.2,.05,-.98],d:.8,spin:.9},{at:[2,.45,-2.4],dir:[-.25,.1,-.96],d:.92,spin:-.75},{at:[1.53,.26,-3.1],dir:[-.1,.1,-.99],d:.56,spin:1.2},{at:[-1.66,1,-1.7],dir:[.2,.05,-.98],d:.76,spin:-.9},{at:[-2,.5,-2.5],dir:[.25,.1,-.96],d:.96,spin:.7},{at:[-1.53,.23,-3.2],dir:[.1,.1,-.99],d:.55,spin:-1.2},{at:[2.05,3.15,-2.6],dir:[-.3,0,-.95],d:1.1,spin:-.7}],pipes:[{onTower:0,lift:.3,anchor:"down",size:.95,rot:[0,-135,0],pour:!0},{onTower:1,lift:.3,anchor:"down",size:.95,rot:[0,-45,0],pour:!0}],crowns:[{at:[0,4.72,2.12],width:2.1,rot:[0,180,0]}]};function bm({scene:i,models:e,env:t,gold:n,glowTexture:s,fallGeometry:r,fallMaterial:o,fx:a}){let l=new Ze;l.name="entranceDecor",i.add(l);let c={value:0},u=new pt({color:2381823,metalness:.35,roughness:.26,envMap:t,envMapIntensity:1.2}),h=[],d=[],f=[],m=(S,C,L={})=>{let F=new pt({map:S.map,metalnessMap:S.metalnessMap,roughnessMap:S.roughnessMap,normalMap:S.normalMap,metalness:1,roughness:1,envMap:t,envMapIntensity:L.envI??1.1,emissive:16777215,emissiveMap:S.map,emissiveIntensity:L.glow??.2,side:ft});return L.fluid&&(F.onBeforeCompile=N=>{N.uniforms.uFluidTime=c,N.vertexShader=N.vertexShader.replace("void main() {",`varying vec3 vFluidP;
void main() {
  vFluidP = position;`),N.fragmentShader=N.fragmentShader.replace("void main() {",`varying vec3 vFluidP;
uniform float uFluidTime;
${fi}
void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+nm)}),F.customProgramCacheKey=()=>"decor:"+C,F},x=(S,C,L)=>{let F=null;S.scene.traverse(D=>{D.isMesh&&(F=F||m(D.material,C,L),D.material=F)}),S.scene.updateMatrixWorld(!0);let N=new Xt().setFromObject(S.scene);return{scene:S.scene,box:N,size:N.getSize(new w),centre:N.getCenter(new w),mat:F}},g={tower:x(e.tower,"tower",{fluid:!0,glow:.18}),gear:x(e.gear,"gear",{glow:.22}),pipe:x(e.pipe,"pipe",{glow:.2}),crown:x(e.crown,"crown",{glow:.25})},p=(S,C,L)=>{let F=S.scene.clone();return F.scale.setScalar(C),F.position.copy(L).multiplyScalar(-C),F},v=(S,C)=>{let L=new w(...C),F=new w,N=new w,D=-1/0,k=0,B=[];S.scene.traverse(V=>{if(!V.isMesh)return;let j=V.geometry.attributes.position;for(let se=0;se<j.count;se+=3){F.fromBufferAttribute(j,se).applyMatrix4(V.matrixWorld);let ye=F.dot(L);B.push(F.clone(),ye),D=Math.max(D,ye)}});for(let V=0;V<B.length;V+=2)B[V+1]>D-.04&&(N.add(B[V]),k++);return N.divideScalar(Math.max(1,k))},_={down:v(g.pipe,[0,-1,0]),side:v(g.pipe,[-1,0,0]),centre:g.pipe.centre},y=(()=>{let S=new w,C=-1/0,L=0,F=0,N=0,D=g.tower.box,k=D.max.x-D.min.x;return g.tower.scene.traverse(B=>{if(!B.isMesh)return;let V=B.geometry.attributes.position;for(let j=0;j<V.count;j++)S.fromBufferAttribute(V,j).applyMatrix4(B.matrixWorld),S.x>D.max.x-k*.16&&S.y<D.min.y+(D.max.y-D.min.y)*.55&&(C=Math.max(C,S.y));for(let j=0;j<V.count;j++)S.fromBufferAttribute(V,j).applyMatrix4(B.matrixWorld),S.x>D.max.x-k*.16&&Math.abs(S.y-C)<.02&&(L+=S.x,F+=S.z,N++)}),new w(L/Math.max(1,N),C,F/Math.max(1,N))})(),U=S=>S.map(C=>Ye.degToRad(C)),T={towers:[],gears:[],pipes:[],crowns:[]},R=[];function I(){for(let S of Object.values(T))for(let C of S)l.remove(C);for(let S of R)l.remove(S);for(let S of Object.keys(T))T[S]=[];R.length=0,h.length=0,d.length=0;for(let S of pi.towers){let C=g.tower,L=S.height/C.size.y,F=new Ze;if(F.position.set(...S.at),F.rotation.y=Ye.degToRad(S.yaw),F.add(p(C,L,new w(C.centre.x,C.box.min.y,C.centre.z))),s){let N=new ns(new Pi({map:s,color:new xe(.25,.75,1.6),transparent:!0,opacity:.55,blending:rn,depthWrite:!1}));N.position.set(0,S.height*.57,0),N.scale.setScalar(S.height*.42),N.renderOrder=3,F.add(N),d.push({sp:N,phase:d.length*1.7})}if(S.at[1]>-.4&&n){let N=C.size.x*L*.36,D=S.at[1]+.75,k=new Be(new mn(N,N*1.12,D,32),n);k.position.y=-D/2,F.add(k);for(let B of[-.12,-D*.55]){let V=new Be(new jt(N*1.03,.07,10,40),u);V.rotation.x=Math.PI/2,V.position.y=B,F.add(V)}}F.updateMatrixWorld(!0),F.userData.stubTop=y.clone().sub(new w(C.centre.x,C.box.min.y,C.centre.z)).multiplyScalar(L).applyMatrix4(F.matrixWorld),l.add(F),T.towers.push(F)}for(let S of pi.gears){let C=g.gear,L=S.d/Math.max(C.size.x,C.size.y),F=new Ze;F.position.set(...S.at),F.quaternion.setFromUnitVectors(new w(0,0,1),new w(...S.dir).normalize());let N=new Ze;N.rotation.z=S.at[0]*7.3,N.add(p(C,L,C.centre)),F.add(N),h.push({obj:N,speed:S.spin}),l.add(F),T.gears.push(F)}for(let S of pi.pipes){let C=g.pipe,L=S.size/Math.max(C.size.x,C.size.y,C.size.z),F=_[S.anchor||"centre"],N=S.onTower!==void 0?T.towers[S.onTower].userData.stubTop.clone():new w(...S.at),D=new Ze;if(S.lift&&n){let k=S.size*.16,B=new Be(new mn(k,k,S.lift+.1,20),n);B.position.copy(N).add(new w(0,(S.lift-.1)/2,0)),l.add(B),R.push(B),N.y+=S.lift}if(D.position.copy(N),D.rotation.set(...U(S.rot)),S.mirror&&(D.scale.x=-1),D.add(p(C,L,F)),l.add(D),T.pipes.push(D),S.pour&&r&&o){D.updateMatrixWorld(!0);let k=S.anchor==="side"?"down":"side",B=_[k].clone().sub(F).multiplyScalar(L).applyMatrix4(D.matrixWorld),V=new w(...k==="side"?[-1,0,0]:[0,-1,0]).applyQuaternion(D.getWorldQuaternion(new At));V.y=0,V.lengthSq()<1e-4&&V.set(Math.sign(N.x)||1,0,0),V.normalize();let j=Math.max(.3,B.y+.62),se=k==="side"?.55:.15,ye=S.size*.36,ke=new Be(r(se,j,ye,ye*1.5),o);ke.position.copy(B),ke.lookAt(B.clone().add(V)),ke.renderOrder=2,l.add(ke),R.push(ke);let q=B.clone().addScaledVector(V,se);if(q.y=-.6,a){let ne=pi.pipes.indexOf(S);f[ne]?f[ne].pos.copy(q):(f[ne]={pos:q,rate:14,kind:1,spread:.25,up:1.1,size:.34},a.addSource(f[ne]))}}}for(let S of pi.crowns){let C=g.crown,L=S.width/C.size.x,F=new Ze;F.position.set(...S.at),F.rotation.set(...U(S.rot)),F.add(p(C,L,C.centre)),l.add(F),T.crowns.push(F)}return l.updateMatrixWorld(!0),E()}function E(S=3.9){let C={},L=new w;for(let[F,N]of Object.entries(T)){let D=1/0;for(let k of N)k.traverse(B=>{if(!B.isMesh)return;let V=B.geometry.attributes.position;for(let j=0;j<V.count;j+=5)L.fromBufferAttribute(V,j).applyMatrix4(B.matrixWorld),L.z<S&&L.y<sb&&(D=Math.min(D,Math.abs(L.x)))});C[F]=Number.isFinite(D)?+D.toFixed(2):null}return C}let b=I();return{root:l,clear:b,place:I,update(S,C){c.value=C;for(let L of h)L.obj.rotation.z+=L.speed*S;for(let L of d)L.sp.material.opacity=.42+.16*Math.sin(C*2.3+L.phase)}}}var wm=typeof window<"u"&&!window.__BW_CLASSIC__&&!/[?&]classic(=|&|$)/.test(location.search)&&!!(window.__BW_PHASE_A__||/[?&]phase-?a(=|&|$)/i.test(location.search)),Sm={wallHue:305,wallSat:.32,wallDim:.14,goldHue:36,goldSoften:.18,hotSoften:.2,glowAbove:3.3,glowZ:1.2,glowSize:[4.5,3.2,8],glowColor:[1,.86,.98],glowMix:.35,glowAdd:.06},md={hotHue:300,hotSoften:.22,goldHue:34,goldSoften:.3},Tm={stone:[.62,.38,.66],glow:[.95,.8,.95],glowMix:.55,glowReach:3.6},gd={deep:[.03,.4,.88],light:[.3,.75,1],icyMix:.85,crackScale:[4.4,2.2],crack:1,crackW:.11,collarR:.5,collarW:.7,edgeFoam:1,sparkle:2,skyCut:.6},Xl=typeof window<"u"&&window.__BW_PHASE_A_TUNE__||{};Object.assign(Sm,Xl.castle||{});Object.assign(md,Xl.tower||{});Object.assign(Tm,Xl.wall||{});Object.assign(gd,Xl.water||{});var Lt=i=>(+i).toFixed(4),Em=i=>`vec2(${i.map(Lt).join(", ")})`,$s=i=>`vec3(${i.map(Lt).join(", ")})`,rb=`
vec3 paRgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 paHsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function Am({scene:i,castle:e,waterSheets:t,axisY:n,tunnelStart:s}){let r={castleMaterials:0,towerMeshes:0,wallFacing:!1,waterSheet:!1},o=null,a=null;if(i.traverse(c=>{if(!(!c.isMesh||!c.material||!c.material.customProgramCacheKey||c.material.customProgramCacheKey()!=="decor:tower")){if(!a){o=c.material;let u=md,h=o.onBeforeCompile;a=o.clone(),a.onBeforeCompile=(d,f)=>{h.call(o,d,f),d.fragmentShader=d.fragmentShader.replace("void main() {",`${rb}
vec3 paTower(vec3 lin) {
  vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = paRgb2hsv(c); float h = hsv.x * 360.0;
  float hot = smoothstep(295.0, 312.0, h) * smoothstep(0.45, 0.7, hsv.y);
  hsv.x = mix(hsv.x, ${Lt(u.hotHue/360)}, hot * 0.5); hsv.y *= 1.0 - ${Lt(u.hotSoften)} * hot; hsv.z *= 1.0 - 0.05 * hot;
  float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
  hsv.x = mix(hsv.x, ${Lt(u.goldHue/360)}, gold * 0.4); hsv.y *= 1.0 - ${Lt(u.goldSoften)} * gold;
  return pow(paHsv2rgb(hsv), vec3(2.2));
}
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  diffuseColor.rgb = paTower(diffuseColor.rgb);   // Phase A`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = paTower(totalEmissiveRadiance);   // Phase A`)},a.customProgramCacheKey=()=>"decor:tower|phaseA:"+JSON.stringify(md)}c.material=a,r.towerMeshes++}}),i.traverse(c=>{if(r.wallFacing||!c.isMesh||!c.material||!c.material.uniforms||!c.material.uniforms.uWall)return;let u=Tm,h=c.material.clone();h.fragmentShader=`uniform vec3 uWall, uShade; varying vec2 vP;
      void main() {   // Phase A (?phaseA)
        float r = length(vP);
        vec3 c = mix(${$s(u.stone)}, ${$s(u.glow)}, (1.0 - smoothstep(2.95, ${Lt(u.glowReach)}, r)) * ${Lt(u.glowMix)});
        c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);
        c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));   // the thin dark line right at the ring stays
        float a = 1.0 - smoothstep(3.55, 3.92, r);                 // fades into the castle's own wall, as before
        gl_FragColor = vec4(c * a, a);
      }`,c.material=h,r.wallFacing=!0}),e){let c=Sm,u=`
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
        vec3 dg = (vShadeP - vec3(0.0, ${Lt(n+c.glowAbove)}, ${Lt(c.glowZ)})) / ${$s(c.glowSize)};
        float glowK = exp(-dot(dg, dg));
        c = mix(c, ${$s(c.glowColor)}, glowK * ${Lt(c.glowMix)}) + ${$s(c.glowColor)} * glowK * ${Lt(c.glowAdd)};
        diffuseColor.rgb = pow(c, vec3(2.2));
      }`;e.traverse(h=>{if(!h.isMesh||!h.material||!h.material.onBeforeCompile)return;let d=h.material,f=d.onBeforeCompile,m=d.customProgramCacheKey.bind(d),x=d.clone();x.onBeforeCompile=(g,p)=>{f.call(d,g,p),g.fragmentShader.includes("bwRgb2hsv")&&g.fragmentShader.includes("vShadeP")&&(g.fragmentShader=g.fragmentShader.replace("#include <color_fragment>",u+`
#include <color_fragment>`))},x.customProgramCacheKey=()=>m()+"|phaseA-castle:"+JSON.stringify(c),h.material=x,r.castleMaterials++})}let l=(t||[]).find(c=>(c.geometry.computeBoundingBox(),c.geometry.boundingBox.min.z<s-5));if(l){let c=l.material,u=c.fragmentShader,h=`  float bubbleShade = 0.0;
`,d=`    col += (vec3(0.55, 0.92, 1.0) * lines * 0.3 + vec3(0.75, 0.95, 1.0) * caustic * 0.3 * (1.0 - moat)) * openK;
  }`,f="  vec3 foamCol = vec3(0.9, 0.97, 1.0) * (0.92 + 0.18 * NdotL);";if([h,d,f].every(m=>u.split(m).length===2)){let m=c.clone();m.uniforms=c.uniforms,m.fragmentShader=u.replace(h,h+`  float paSlide = 0.0;   // Phase A
`).replace(d,d.replace(/\n  }$/,"")+`
`+ob(gd)+`
  }`).replace(f,`  lit -= env * fresnel * 0.28 * (1.0 - inDrum * 0.6) * ${Lt(gd.skyCut)} * paSlide;   // Phase A: less pale sky on the slide
`+f),l.material=m,r.waterSheet=!0}}return r}var ob=i=>`
    { // Phase A (?phaseA): icy cyan water, a bold white crackle web, a thicker white foam collar and more sparkles
      float slideK = openK * (1.0 - moat);
      paSlide = slideK;
      vec3 icy = mix(${$s(i.deep)}, ${$s(i.light)}, clamp(0.3 + crest * 0.4 + hollow * 0.3, 0.0, 1.0));
      col = mix(col, icy, ${Lt(i.icyMix)} * slideK);
      vec2 iw = bwVoronoi((xz + warp * 0.35) * ${Em(i.crackScale)} - vec2(0.0, flowT * 0.55) + 11.0);
      vec2 iw2 = bwVoronoi((xz + warp * 0.25) * ${Em(i.crackScale)} * 2.0 - vec2(0.0, flowT * 0.6) + 23.0);
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
    }`;var Zs={ringColours:[[.18,.82,1],[.42,.6,1],[.8,.95,1],[.22,.7,1],[1,.55,.88]],wallDeep:[[.04,.12,.55],[.32,.62,1]],swirl:{radius:1.93,rowStep:.4,around:72,from:-36,to:216,strength:.55},foam:{count:72,bright:1.12,zones:[{w:.42,dx:[-.78,.78],du:[-1.05,-.32],r:[.13,.27],sink:.32,drift:.9,out:.35},{w:.36,side:[.5,1.2],du:[-1.5,.45],r:[.13,.28],sink:.3,drift:1.1,out:.3},{w:.22,ring:[.44,.58],r:[.09,.17],sink:.15,drift:.5,out:.2}],life:[.55,1.15]},bubbles:{count:20,du:[-2.6,13],x:[.42,1.55],h:[.35,2.5],r:[.045,.24],flow:1.6},sparkles:{rate:34,du:[3,15],r:[.2,1.7]},brush:{pink:[1,.34,.72],white:[1,.92,.98],royal:[.1,.2,.9],deep:[.05,.1,.55],tufts:26},gem:{color:[.7,.45,1],emissive:[.62,.36,1]}};function Rm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,soap:a}){let l=t.tunnelStart,c=t.tunnelEnd,u=n.WATER+n.AXIS_H,h=pb(15930),d={},f=()=>Ye.smoothstep(s.z,l-.9,l+.4);return d.foam=ab({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:h,inside:f}),d.swirl=ub({scene:i,TR:e,TS:l,TE:c,axisH:u,updaters:r,time:o,inside:f,mascot:s}),a&&(d.bubbles=fb({scene:i,TR:e,W:n,L:t,mascot:s,updaters:r,time:o,rnd:h,soap:a,inside:f,axisH:u})),d}function ab({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:a,inside:l}){let c=Zs.foam,u=c.count,h=new rs(1,4),d=new Fn;d.setAttribute("position",h.attributes.position),d.setAttribute("normal",h.attributes.normal);let f=new zt(new Float32Array(u*4),4).setUsage(hi),m=new zt(new Float32Array(u),1);d.setAttribute("aBlob",f),d.setAttribute("aSeed",m),d.instanceCount=u;let x={uTime:o,uBright:{value:c.bright},uKey:{value:new w(.35,.85,-.42).normalize()}},g=new rt({uniforms:x,vertexShader:lb,fragmentShader:cb}),p=new Be(d,g);p.frustumCulled=!1,p.name="r3Foam",p.visible=!1,p.renderOrder=2,i.add(p);let v=c.zones.reduce((I,E)=>I+E.w,0),_=I=>I[0]+a()*(I[1]-I[0]),y=[],U=(I,E)=>{let b=a()*v,S=c.zones[0];for(let C of c.zones){if(b<C.w){S=C;break}b-=C.w}if(I.z=S,I.r=_(S.r),I.life=_(c.life),I.age=E?a()*I.life:0,S.ring){let C=Ye.degToRad(-200+a()*220),L=_(S.ring);I.dx=Math.cos(C)*L,I.du=Math.sin(C)*L*.8}else S.side?(I.dx=(a()<.5?-1:1)*_(S.side),I.du=_(S.du)):(I.dx=_(S.dx),I.du=_(S.du));I.out=Math.sign(I.dx||1)*S.out*(.5+a())};for(let I=0;I<u;I++){let E={};U(E,!0),y.push(E),m.array[I]=a()}let T=new w,R=null;return r.push((I,E)=>{let b=l();if(p.visible=b>0,!p.visible){R=null;return}R===null&&(R=s.x),R+=(s.x-R)*(1-Math.exp(-I/.12));let S=f.array;for(let C=0;C<u;C++){let L=y[C];L.age+=I,L.age>=L.life&&U(L,!1),L.du-=L.z.drift*I,L.dx+=L.out*I;let F=L.age/L.life,N=Math.pow(Math.sin(Math.PI*Math.min(1,F*1.2+.08)),.55)*b,D=R+L.dx,k=s.z+L.du,B=L.r*N;e.map(D,n.surface(t,D,k,E)-L.z.sink*L.r+B*.25,k,T),S[C*4]=T.x,S[C*4+1]=T.y,S[C*4+2]=T.z,S[C*4+3]=Math.max(B,1e-4)}f.needsUpdate=!0}),{heaps:u,trianglesEach:h.attributes.position.count/3}}var lb=`
${fi}
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
`,cb=`
${fi}
uniform float uTime, uBright; uniform vec3 uKey;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vSeed;
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  vec2 sp = (vL.xy * 3.2 + vec2(vL.z * 2.3, -vL.z * 1.4)) * 2.0 + vSeed * 13.0 + vec2(0.0, uTime * 0.25);
  vec2 c = bwVoronoi(sp);
  float wall = 1.0 - smoothstep(0.03, 0.13, c.y - c.x);
  float hollow = smoothstep(0.12, 0.5, c.x);
  float diff = clamp(dot(N, uKey), 0.0, 1.0), up = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(vec3(0.5, 0.68, 1.0), vec3(1.0, 1.0, 1.03), clamp(0.3 + 0.55 * diff + 0.3 * up, 0.0, 1.0));
  col = mix(col, col * vec3(0.8, 0.88, 1.0), hollow * 0.55);
  col += vec3(0.25) * wall;
  float h = bwHash(floor(sp) + 3.7);
  col += vec3(1.0) * step(0.82, h) * (1.0 - smoothstep(0.0, 0.16, length(fract(sp) - vec2(0.35, 0.65)))) * 1.1;
  col = mix(col, vec3(0.55, 0.82, 1.0), pow(1.0 - ndv, 2.5) * 0.5);
  gl_FragColor = vec4(col * uBright, 1.0);
}
`;function ub({scene:i,TR:e,TS:t,TE:n,axisH:s,updaters:r,time:o,inside:a,mascot:l}){let c=Zs.swirl,u=Math.ceil((n+4-(t+.2))/c.rowStep)+1,h=c.around+1,d=new Float32Array(u*h*3),f=new Float32Array(u*h*2),m=[],x=new w;for(let y=0;y<u;y++){let U=t+.2+y*c.rowStep;for(let T=0;T<h;T++){let R=Ye.degToRad(c.from+(c.to-c.from)*T/c.around);if(e.map(Math.cos(R)*c.radius,s+Math.sin(R)*c.radius,U,x),d.set([x.x,x.y,x.z],(y*h+T)*3),f.set([R,U],(y*h+T)*2),T<c.around&&y<u-1){let I=y*h+T;m.push(I,I+1,I+h,I+1,I+h+1,I+h)}}}let g=new st;g.setAttribute("position",new ot(d,3)),g.setAttribute("aAU",new ot(f,2)),g.setIndex(m),g.computeBoundingSphere();let p={uTime:o,uStrength:{value:c.strength},uEnds:{value:new ae(t,n+4)},uFade:{value:0}},v=new rt({uniforms:p,vertexShader:hb,fragmentShader:db,transparent:!0,depthWrite:!1,blending:rn,side:ft}),_=new Be(g,v);return _.name="r3Swirl",_.renderOrder=3,_.visible=!1,_.frustumCulled=!1,i.add(_),r.push(()=>{let y=a();_.visible=y>0,p.uFade.value=y}),{triangles:m.length/3}}var hb=`
attribute vec2 aAU;
varying vec2 vAU; varying float vDepth;
void main() {
  vAU = aAU;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,db=`
${fi}
uniform float uTime, uStrength, uFade; uniform vec2 uEnds;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float sw = a * 2.0 - u * 0.75 + uTime * 1.6;
  float s1 = bwFbm(vec2(sw * 1.3, u * 0.35 - uTime * 0.5));
  float s2 = bwFbm(vec2(sw * 2.6 + 5.0, u * 0.9 + uTime * 0.3));
  float streak = smoothstep(0.52, 0.8, s1) * 0.8 + smoothstep(0.6, 0.85, s2) * 0.5;
  float foamy = smoothstep(0.7, 0.9, s2) * smoothstep(0.55, 0.75, s1);
  vec3 col = mix(vec3(0.1, 0.55, 1.0), vec3(0.55, 0.9, 1.0), smoothstep(0.55, 0.85, s1)) * streak + vec3(0.85, 0.97, 1.0) * foamy * 0.8;
  vec2 g = vec2(a * 30.0, u * 4.0 - uTime * 0.6), c = floor(g);
  float hs = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  col += vec3(1.0) * step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 4.0 + hs * 40.0));
  float near = smoothstep(1.2, 3.5, vDepth) * (1.0 - 0.5 * smoothstep(10.0, 26.0, vDepth));
  float ends = smoothstep(uEnds.x, uEnds.x + 1.5, u) * (1.0 - smoothstep(uEnds.y - 2.0, uEnds.y, u));
  gl_FragColor = vec4(col * uStrength * near * ends * uFade, 1.0);
}
`;function fb({scene:i,TR:e,W:t,L:n,mascot:s,updaters:r,time:o,rnd:a,soap:l,inside:c,axisH:u}){let h=Zs.bubbles,d=h.count,f=new ln(1,26,16),m=new Fn;m.index=f.index,m.setAttribute("position",f.attributes.position),m.setAttribute("normal",f.attributes.normal);let x=new zt(new Float32Array(d*4),4).setUsage(hi),g=new Float32Array(d*4);for(let E=0;E<d;E++)g.set([a()*6.28,0,.05,0],E*4);m.setAttribute("inst",x),m.setAttribute("motion",new zt(g,4)),m.instanceCount=d;let p={uTime:o,uMotion:{value:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:.03},uFilm:{value:1.35}},v=new rt({uniforms:p,vertexShader:l.vertex,fragmentShader:l.fragment,transparent:!0,depthWrite:!1,blending:En,blendSrc:An,blendDst:on}),_=new Be(m,v);_.frustumCulled=!1,_.renderOrder=7,_.name="r3Bubbles",_.visible=!1,i.add(_);let y=E=>E[0]+a()*(E[1]-E[0]),U=[],T=(E,b)=>{E.u=s.z+(b?y(h.du):h.du[1]-a()*2),E.x=(a()<.5?-1:1)*y(h.x),E.h=y(h.h),E.h>u+.6&&(E.x*=.8),E.r=h.r[0]+Math.pow(a(),1.8)*(h.r[1]-h.r[0])};for(let E=0;E<d;E++){let b={};T(b,!0),U.push(b)}let R=new w,I=!1;return r.push(E=>{let b=c();if(_.visible=b>0,!_.visible){I=!1;return}if(!I){for(let C of U)T(C,!0);I=!0}p.uAvoid.value.copy(s.root.position);let S=x.array;for(let C=0;C<d;C++){let L=U[C];L.u+=h.flow*E,L.u<s.z+h.du[0]&&T(L,!1),e.map(L.x,L.h,L.u,R),S[C*4]=R.x,S[C*4+1]=R.y,S[C*4+2]=R.z,S[C*4+3]=L.r*b}x.needsUpdate=!0}),{count:d}}function pb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var mb={ringStep:.85,ringIn:2,ringOut:2.5,hazards:[[6,1],[6.7,-1],[16.6,-1],[18.8,1],[26,1],[26.7,-1]],deco:[[11.2,1,52],[21.8,-1,50],[31.5,1,55]],brushR:1,brushX:1.62,brushY:.9,turnIn:24,spin:2.2,bubbles:46,cluster:.03,showAhead:18,showBehind:6},ql={ringColours:[[1,.36,.8],[.62,.42,1],[.16,.88,1],[.95,.45,.95],[1,.74,.26]],sparkle:.955,bubbles:22,bubbleAngle:[28,152],bubbleR:[1.5,1.95],bubbleMax:.3,clearOut:1.15,hazardWarn:[7.5,3],hazardWidth:.34,hazardMix:.8,grade:{vibrance:.25,knee:.62,roll:1.6},bloom:.22,wallDeep:[[.1,.08,.46],[.58,.38,.98]],brushBlue:[.62,.66,1],brushBlueMix:.45,brushPink:[1,.5,.82]};async function Im({scene:i,TR:e,L:t,W:n,camera:s,updaters:r,mascot:o,bump:a,brushBytes:l,waterSheets:c,soap:u,loaderParse:h,drumMeshes:d,round2:f}){let m=f?ql:null,x=f&&f.hooks||{},g=f&&f.round3?Zs:null,p={rings:0,brushes:0,bubbles:0,panelsHidden:0,waterCopy:!1},v=mb,_=t.tunnelStart,y=t.tunnelEnd,U=n.WATER+n.AXIS_H,T={value:0},R={P:new w,R:new w,U:new w,T:new w};{let N=[];for(let q=_+.6;q<y-.6+(m?4.4:0);q+=v.ringStep)N.push(q);let D=new ks(v.ringIn,v.ringOut,112,1),k=new rt({uniforms:{uTime:T,uIn:{value:v.ringIn},uOut:{value:v.ringOut},uSpark:{value:m?m.sparkle:.9}},vertexShader:xb,fragmentShader:yb,transparent:!0,depthWrite:!1,blending:rn,side:ft}),B=new nn(D,k,N.length),V=m?(g||m).ringColours.map(q=>new xe(...q)):[new xe(.5,.22,1),new xe(1,.3,.78),new xe(.12,.85,1),new xe(.45,.65,1)],j=new Ae,se=new Float32Array(N.length);N.forEach((q,ne)=>{e.mapMatrix(new Ae().makeTranslation(0,U,q),j),B.setMatrixAt(ne,j),B.setColorAt(ne,V[ne%V.length]),se[ne]=q}),D.setAttribute("aU",new zt(se,1)),B.frustumCulled=!1,B.renderOrder=3,B.name="s4Rings",i.add(B),p.rings=N.length;let ye=i.getObjectByName("tunnelDecor"),ke=0;if(ye&&ye.traverse(q=>{if(!q.isInstancedMesh)return;let ne=q.geometry.parameters||{};q.geometry.type==="PlaneGeometry"&&Math.abs(ne.width-.62)<.001&&(q.visible=!1,p.panelsHidden++,ke=q.count)}),ye&&ke&&ye.traverse(q=>{q.isInstancedMesh&&q.visible&&q.count===ke&&q.material&&q.material.metalness===1&&(q.visible=!1,p.panelsHidden++)}),m&&ye){let q=new Map,ne=0;ye.traverse(Ee=>{if(!Ee.isMesh||Ee.isInstancedMesh||!Ee.material||Ee.material.metalness<.9)return;let de={};if(Ee.material.color.getHSL(de),!(de.h<.06||de.h>.18)){if(!q.has(Ee.material)){let ue=Ee.material.clone();ue.emissive=new xe(1,.68,.18),ue.emissiveIntensity=.45,ue.roughness=Math.min(ue.roughness,.3),q.set(Ee.material,ue)}Ee.material=q.get(Ee.material),ne++}}),p.goldGlow=ne}}let I=new Map;for(let N of d||[]){let D=N.material;if(!I.has(D)){let k=D.clone(),B=D.onBeforeCompile,V=D.customProgramCacheKey.bind(D);k.onBeforeCompile=(j,se)=>{B.call(D,j,se),j.fragmentShader=j.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            vec3 deep = mix(vec3(${(m?(g||m).wallDeep[0]:[.06,.08,.42]).map(ye=>ye.toFixed(3)).join(", ")}), vec3(${(m?(g||m).wallDeep[1]:[.42,.36,.95]).map(ye=>ye.toFixed(3)).join(", ")}), smoothstep(0.05, 0.75, l));
            diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.5, 0.55, 0.95), deep, 0.55); }`)},k.customProgramCacheKey=()=>V()+"|s4-deep"+(g?"3":m?"2":""),I.set(D,k)}N.material=I.get(D)}p.drumMaterialsTinted=I.size;let E=[];if(l){let N=await h(l),D=null;N.scene.traverse(_e=>{_e.isMesh&&!D&&(D=_e)});let k=D.geometry,B=k.attributes.position,V=k.attributes.color,j=k.index.array,se=[],ye=new xe;for(let _e=0;_e<j.length;_e+=3){let Pe=j[_e],ee=j[_e+1],re=j[_e+2],O=(B.getX(Pe)+B.getX(ee)+B.getX(re))/3,Te=(B.getY(Pe)+B.getY(ee)+B.getY(re))/3,te=Math.hypot(O,Te);ye.setRGB((V.getX(Pe)+V.getX(ee)+V.getX(re))/3,(V.getY(Pe)+V.getY(ee)+V.getY(re))/3,(V.getZ(Pe)+V.getZ(ee)+V.getZ(re))/3);let ce={};ye.getHSL(ce);let pe=ce.h>.07&&ce.h<.17&&ce.s>.35||ce.h>.66&&ce.h<.84&&ce.s<.45&&ce.l>.55;te>.96||Te<-.58&&pe||Te<-.86||se.push(Pe,ee,re)}let ke=gb(k,se,v.cluster);m&&_b(ke,2,.6),p.brushTriangles=ke.index.count/3,p.brushTrianglesDelivered=j.length/3;let q=new pt({vertexColors:!0,roughness:.7,metalness:.15,side:ft}),ne=m?`
  totalEmissiveRadiance += vec3(1.0, 0.88, 0.97) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.5) * 0.4;`:"";m&&(q.roughness=.85);let Ee=m?`{ vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
        diffuseColor.rgb = mix(c, vec3(${m.brushBlue.join(", ")}) * (0.6 + 0.6 * dot(c, vec3(0.333))), blue * ${m.brushBlueMix}); }`:"";q.onBeforeCompile=_e=>{_e.fragmentShader=_e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+Ee).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+ne)},q.customProgramCacheKey=()=>"s4:brush"+(m?"2":""),g&&Cm(q,!1,ne);let de=new pt({color:16762194,metalness:1,roughness:.2,emissive:4860416,emissiveIntensity:.5}),ue=q.clone();ue.onBeforeCompile=_e=>{_e.fragmentShader=_e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          diffuseColor.rgb = mix(c, vec3(${m?m.brushPink.join(", "):"1.0, 0.42, 0.78"}) * (${m?"0.62 + 0.6":"0.5 + 0.7"} * dot(c, vec3(0.333))), blue * 0.92); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+ne)},ue.customProgramCacheKey=()=>"s4:brushPink"+(m?"2":""),g&&Cm(ue,!0,ne);let Ce=(_e,Pe,ee,re)=>{e.frame(_e,R);let O=new Ze,Te,te;if(re)Te=Pe*v.brushX,te=v.brushY;else{let W=Ye.degToRad(ee),Y=1.95;Te=Pe*Math.cos(W)*Y,te=U+Math.sin(W)*Y}O.position.copy(R.P).addScaledVector(R.R,Te).addScaledVector(R.U,te);let ce=R.T.clone().negate(),pe=R.R.clone().multiplyScalar(-Pe),Ue=ce.multiplyScalar(Math.cos(Ye.degToRad(v.turnIn))).addScaledVector(pe,Math.sin(Ye.degToRad(v.turnIn))).normalize(),be=new Ae().lookAt(new w,Ue.clone().negate(),R.U);O.quaternion.setFromRotationMatrix(be);let P=new Be(ke,Pe>0?ue:q);P.scale.setScalar(v.brushR/.95);let M=new Ze;M.add(P),O.add(M);let H=new Be(new mn(.09,.09,1.1,16),de);H.rotation.x=Math.PI/2,H.position.z=-.75,O.add(H),O.name="s4Brush",i.add(O);let G={holder:O,spinner:M,u:_e,side:Pe,hazard:re,hit:!1,dir:Pe*(re?1:.6),base:O.position.clone(),out:R.R.clone().multiplyScalar(Pe),cleared:!1,clear:0,bonk:0};return E.push(G),G};for(let[_e,Pe]of v.hazards)Ce(_e,Pe,0,!0);for(let[_e,Pe,ee]of v.deco)Ce(_e,Pe,ee,!1);p.brushes=E.length,p.hazards=v.hazards.length}let b=[];x.clearBrushes=(N,D)=>{let k=0;for(let B of E)B.hazard&&!B.cleared&&B.u>=N&&B.u<=D&&(B.cleared=!0,k++,x.pop&&x.pop(B.holder.position));return k},x.hazards=()=>E.filter(N=>N.hazard).map(N=>({u:N.u,side:N.side,cleared:N.cleared})),r.push((N,D,k)=>{T.value=D;for(let V of E){let j=V.u-o.z;V.holder.visible=o.z>_-14&&j<v.showAhead&&j>-v.showBehind,V.cleared&&o.z>V.u+v.showBehind&&(V.cleared=!1);let se=V.cleared?1:0;if(V.clear!==se){V.clear=V.holder.visible?Ye.clamp(V.clear+Math.sign(se-V.clear)*N/.35,0,1):se;let ye=V.clear*V.clear*(3-2*V.clear);V.holder.position.copy(V.base).addScaledVector(V.out,ye*(m?m.clearOut:0))}V.bonk=Math.max(0,V.bonk-N),V.holder.visible&&(V.spinner.rotation.z+=v.spin*V.dir*N*(1-.7*V.clear+5*V.bonk))}if(C&&C.forEach((V,j)=>{let se=S[j];V.z=se.cleared?0:1}),k!=="running")return;let B=o;for(let V of E)if(V.hazard){if(Math.abs(B.z-V.u)>1.25){B.z>V.u+1.5&&(V.hit=!1);continue}if(!(V.hit||V.cleared||B.air&&B.yAbs-n.surface(t,B.x,B.z,D)>2.2)&&V.side*B.x>.33){V.hit=!0;let j=a(V.side);b.push({t:+D.toFixed(2),u:V.u,side:V.side,lane:B.lane,knocked:j!==!1}),j===!1&&(V.bonk=.5)}}}),p.hits=b;let S=E.filter(N=>N.hazard),C=m?S.map(N=>new mt(N.u,n.laneX(N.side>0?0:2),1,0)):null;for(;C&&C.length<6;)C.push(new mt(-999,0,0,0));if(u){let N=m?m.bubbles:v.bubbles,D=vb(23307),k=new ln(1,26,16),B=new Fn;B.index=k.index,B.setAttribute("position",k.attributes.position),B.setAttribute("normal",k.attributes.normal);let V=new Float32Array(N*4),j=new Float32Array(N*4),se=new w;for(let ne=0;ne<N;ne++){let Ee=_+1.5+D()*(y-_-3),de=Ye.degToRad(-10+D()*200),ue=1.05+D()*.85;m&&(de=Ye.degToRad(m.bubbleAngle[0]+(de/Math.PI*180+10)/200*(m.bubbleAngle[1]-m.bubbleAngle[0])),ue=m.bubbleR[0]+(ue-1.05)/.85*(m.bubbleR[1]-m.bubbleR[0])),e.map(Math.cos(de)*ue,U+Math.sin(de)*ue,Ee,se);let Ce=.06+Math.pow(D(),2.2)*.42;V.set([se.x,se.y,se.z,m?.05+(Ce-.06)*(m.bubbleMax-.05)/.42:Ce],ne*4),j.set([D()*6.28,D()<.3?.08:0,.04,0],ne*4)}B.setAttribute("inst",new zt(V,4)),B.setAttribute("motion",new zt(j,4)),B.instanceCount=N;let ye={uTime:T,uMotion:{value:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:.035},uFilm:{value:1.3}},ke=new rt({uniforms:ye,vertexShader:u.vertex,fragmentShader:u.fragment,transparent:!0,depthWrite:!1,blending:En,blendSrc:An,blendDst:on}),q=new Be(B,ke);q.frustumCulled=!1,q.renderOrder=5,q.name="s4Bubbles",i.add(q),r.push(()=>{ye.uAvoid.value.copy(o.root.position)}),p.bubbles=N}let L=(c||[]).find(N=>(N.geometry.computeBoundingBox(),N.geometry.boundingBox.min.z>_-5)),F="  vec3 lit = col * (0.8 + 0.3 * NdotL);";if(L&&L.material.fragmentShader.includes(F)){let N=L.material,D=N.clone();D.uniforms=N.uniforms,m&&(N.uniforms.uS4Haz={value:C},N.uniforms.uS4Warn={value:new w(...m.hazardWarn,m.hazardWidth)},D.polygonOffset=!0,D.polygonOffsetFactor=-1,D.polygonOffsetUnits=-4),D.fragmentShader=(m?`uniform vec4 uS4Haz[6]; uniform vec3 uS4Warn;
`:"")+N.fragmentShader.replace(F,m?wb:`  if (inDrum > 0.0) {   // Screen 4 tunnel look (?s3=tunnel)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float collar = exp(-pow(max(0.0, rM - 0.42) / 0.42, 2.0));
    float behindM = clamp(-toM.y / 3.2, 0.0, 1.0);
    float trailV = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.95)) / 0.17, 2.0)) * step(toM.y, 0.2) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    foam = max(foam, smoothstep(0.28, 0.72, (collar + trailV * 0.85) * (0.7 + 0.6 * st)) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.55), 0.35 * inDrum);
  }
`+F),m&&(D.fragmentShader=D.fragmentShader.replace(Pm,Sb+Pm)),L.material=D,p.waterCopy=!0,m&&(p.warnShader=D.fragmentShader.includes("a brush's warning"))}return m&&(p.round2=Mb({scene:i,round2:f,mascot:o,updaters:r,time:T,TS:_})),g&&(p.round3=Rm({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:T,soap:u})),p}var Ks={uR3Pink:{value:new xe},uR3White:{value:new xe},uR3Royal:{value:new xe},uR3Deep:{value:new xe},uR3Tufts:{value:26}};function Cm(i,e,t){let n=Zs.brush;Ks.uR3Pink.value.setRGB(...n.pink),Ks.uR3White.value.setRGB(...n.white),Ks.uR3Royal.value.setRGB(...n.royal),Ks.uR3Deep.value.setRGB(...n.deep),Ks.uR3Tufts.value=n.tufts,typeof window<"u"&&(window.__bwR3=Object.assign(window.__bwR3||{},{brushU:Ks,ROUND3:Zs})),i.onBeforeCompile=s=>{Object.assign(s.uniforms,Ks),s.vertexShader=`varying vec3 vR3Obj;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vR3Obj = position;`),s.fragmentShader=`varying vec3 vR3Obj; uniform vec3 uR3Pink, uR3White, uR3Royal, uR3Deep; uniform float uR3Tufts;
`+s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float l = dot(c, vec3(0.333));
          float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          float gold = smoothstep(0.06, 0.2, c.r - c.b) * smoothstep(0.02, 0.12, c.g - c.b) * step(c.g, c.r) * (1.0 - smoothstep(0.25, 0.4, c.r - c.g));
          float fluffy = (1.0 - blue) * (1.0 - gold);
          float rr = length(vR3Obj.xy), ang = atan(vR3Obj.y, vR3Obj.x), row = floor(rr * 9.0);
          float ta = ang * uR3Tufts / 6.2832 + row * 0.5;
          float hsh = fract(sin(floor(ta) * 12.9898 + row * 78.233) * 43758.5453);
          float tuft = 0.7 + 0.3 * sin(fract(ta) * 3.1416);
          float shade = 0.7 + 0.55 * smoothstep(0.1, 0.8, l);
          vec3 fluff = mix(uR3Pink, uR3White, step(0.55, hsh)) * tuft * shade;
          vec3 face = ${e?"mix(uR3Pink, uR3White, step(0.62, hsh) * 0.85) * tuft * shade":"mix(uR3Royal, uR3Deep, hsh * 0.55) * (0.8 + 0.35 * tuft) * shade"};
          diffuseColor.rgb = mix(mix(c, fluff, fluffy * 0.92), face, blue); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+t)},i.customProgramCacheKey=()=>"s4:brush3"+(e?"L":"R")}function gb(i,e,t){let n=i.attributes.position,s=i.attributes.color,r=new Map,o=[],a=new Map,l=m=>{if(a.has(m))return a.get(m);let x=Math.floor(n.getX(m)/t)+","+Math.floor(n.getY(m)/t)+","+Math.floor(n.getZ(m)/t),g=r.get(x);g===void 0&&(g=o.length,r.set(x,g),o.push([0,0,0,0,0,0,0]));let p=o[g];return p[0]+=n.getX(m),p[1]+=n.getY(m),p[2]+=n.getZ(m),s&&(p[3]+=s.getX(m),p[4]+=s.getY(m),p[5]+=s.getZ(m)),p[6]++,a.set(m,g),g},c=[];for(let m=0;m<e.length;m+=3){let x=l(e[m]),g=l(e[m+1]),p=l(e[m+2]);x!==g&&g!==p&&x!==p&&c.push(x,g,p)}let u=o.length,h=new Float32Array(u*3),d=new Float32Array(u*3);o.forEach((m,x)=>{h.set([m[0]/m[6],m[1]/m[6],m[2]/m[6]],x*3),d.set([m[3]/m[6],m[4]/m[6],m[5]/m[6]],x*3)});let f=new st;return f.setAttribute("position",new ot(h,3)),s&&f.setAttribute("color",new ot(d,3)),f.setIndex(c),f.computeVertexNormals(),f.computeBoundingSphere(),f}function vb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var xb=`
attribute float aU;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
void main() {
  vR = length(position.xy); vA = atan(position.y, position.x); vU = aU;
  vC = instanceColor;
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,yb=`
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
`;function _b(i,e,t){let n=i.attributes.color,s=i.index.array,r=n.count,o=Array.from({length:r},()=>new Set);for(let l=0;l<s.length;l+=3){let c=s[l],u=s[l+1],h=s[l+2];o[c].add(u).add(h),o[u].add(c).add(h),o[h].add(c).add(u)}let a=Float32Array.from(n.array);for(let l=0;l<e;l++){let c=new Float32Array(a.length);for(let u=0;u<r;u++){let h=0,d=0,f=0,m=0;for(let x of o[u])h+=a[x*3],d+=a[x*3+1],f+=a[x*3+2],m++;if(!m){c.set(a.subarray(u*3,u*3+3),u*3);continue}c[u*3]=a[u*3]*(1-t)+h/m*t,c[u*3+1]=a[u*3+1]*(1-t)+d/m*t,c[u*3+2]=a[u*3+2]*(1-t)+f/m*t}a=c}n.array.set(a),n.needsUpdate=!0}function Mb({round2:i,mascot:e,updaters:t,time:n,TS:s}){let r={exit:!1,grade:!1},{exitLight:o,grade:a,bloomPass:l}=i;o&&o[0]&&(o[0].material=new rt({uniforms:{uTime:n},vertexShader:bb,fragmentShader:Eb}),o[1]&&o[1].material.color.setRGB(.12,.16,.3),r.exit=!0);let c=ql.grade;a&&a.material.fragmentShader.includes("if (uOpen > 0.0) {")&&(a.uniforms.uS4Grade={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS4Grade;").replace("if (uOpen > 0.0) {",`if (uS4Grade > 0.0) {   // ?s3=round2: inside the drum, rich and never washed out
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
      if (uOpen > 0.0) {`),a.material.needsUpdate=!0,r.grade=!0);let u=l?l.strength:0;return t.push(()=>{let h=Ye.smoothstep(e.z,s-.5,s+2.5);r.grade&&(a.uniforms.uS4Grade.value=h),l&&(l.strength=u+(ql.bloom-u)*h)}),r}var bb="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Eb=`
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
`,wb=`  float s4Haz = 0.0;
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
`,Pm="  float dist = length(cameraPosition - vWorld);",Sb=`  lit = mix(lit, vec3(1.0, 0.12, 0.5) * (0.85 + 0.25 * NdotL), clamp(s4Haz * 1.7, 0.0, 1.0) * ${ql.hazardMix.toFixed(2)});   // ?s3=round2: a brush's warning
`;var Tb=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),vs=typeof window>"u"||Tb?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),xt=Object.fromEntries(["castle","entrance","machinery","brush","bubbles"].map(i=>[i,vs.includes(i)||vs.includes("all")]));xt.edges=vs.includes("edges");xt.cine=vs.includes("cine");xt.tunnel=vs.includes("tunnel");xt.paint=vs.includes("paint");xt.round2=vs.includes("round2");xt.round3=vs.includes("round3");xt.round3&&(xt.round2=!0);xt.round2&&(xt.paint=!0,xt.tunnel=!0);xt.paint&&(xt.castle=!0,xt.edges=!0);var Um=Object.values(xt).some(Boolean),xd={castle:"models/s3_castle.glb",entrance:"models/s3_entrance.glb",machinery:"models/s3_machinery.glb",brush:"models/s3_brush.glb"},mi={castle:{scale:10,archCentreY:-.27,front:2.75,glow:.32,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},pink:{hue:292,mix:.45,sat:.62},cyan:{sat:.55,val:1.06,glow:.55}},entrance:{holeRadius:2.05,holeCentre:[-.01,-.29],z:2.6,glow:.25,envI:1.25,gold:{hue:43,sat:.92,val:1.08,metal:.6}},machinery:{scale:1.66,at:[-2.73,.4,-7],yaw:180,glow:.3,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},cyan:{sat:.6,val:1.06,glow:.5}},brush:{scale:1.2,at:[2.32,.165,-7],yaw:180,glow:.22,rough:.72,metal:.15,envI:1},bubbles:{extra:[[475,526,14,79,0,.02],[428,478,13,15,.06,.03],[522,612,11,20,0,.02]],centreAlpha:.035}},Qr={brush:{scale:1.51,at:[2.62,.23,-4.9]},film:1.4,edge:{profile:[[-.08,-.05],[0,.07],[.1,.13],[.22,.1],[.3,-.02],[.33,-.8]],alpha:.45,foam:1}},Nm={far:2.35,towers:-1.5,brush:-4.9,machinery:-6.5,groundBelow:.35,tear:1.35,cutZ:-14,fadeFrom:-12,fadeTo:-6},js={up:.099,forward:.818,pitch:.3,fov:1.0375,blend:.9},xs=typeof window<"u"&&window.__BW_S3_TUNE__||{};for(let i of Object.keys(xs))mi[i]&&(mi[i]={...mi[i],...xs[i]});xs.edges&&Object.assign(Qr,xs.edges);xs.cine&&Object.assign(js,xs.cine);xs.paint&&Object.assign(Nm,xs.paint);xt.edges&&(mi.brush={...mi.brush,...Qr.brush});var Jo={};for(let i of Object.keys(xd))xt[i]&&(Jo[i]=Fm(xd[i]));xt.tunnel&&(Jo.brushT=Jo.brush||Fm(xd.brush));async function Fm(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}async function Om({scene:i,env:e,axisY:t,tunnelStart:n,oldCastle:s,sideMachinery:r,staticBubbles:o,camera:a,updaters:l,mascot:c,L:u,W:h,renderPass:d,rollers:f,grade:m,bloomPass:x,outputPass:g,waterSheets:p,TR:v,bumpMascot:_,drumMeshes:y,exitLight:U,r2:T}){let R={},I=new fs,E=async F=>{let N=await Jo[F];return N?I.parseAsync(N,""):null},b=F=>{F&&(F.visible=!1)},S=(F,N)=>{let D=null;return F&&F.children.forEach(k=>k.traverse(B=>{!D&&B.isMesh&&B.material&&B.material.customProgramCacheKey&&B.material.customProgramCacheKey()===N&&(D=k)})),D};if(xt.castle){let F=await E("castle");if(!F)R.castle="not found";else{let N=mi.castle,D=N.scale,k=new Ze;k.name="s3Castle",k.rotation.y=Math.PI,k.scale.setScalar(D),k.position.set(0,t-N.archCentreY*D,N.front+.236*D),F.scene.traverse(B=>{B.isMesh&&(B.material=vd(B.material,e,"castle",N))}),k.add(F.scene),i.add(k),b(s),i.traverse(B=>{B.isMesh&&B.material&&B.material.uniforms&&B.material.uniforms.uWall&&b(B)}),b(S(i.getObjectByName("entranceDecor"),"decor:crown")),R.castle={scale:D,...Dm(k,t,n)}}}if(xt.entrance){let F=await E("entrance");if(!F)R.entrance="not found";else{let N=mi.entrance,D=N.holeRadius/.52,k=new Ze;k.name="s3Entrance",k.rotation.y=Math.PI,k.scale.setScalar(D),k.position.set(N.holeCentre[0]*D,t-N.holeCentre[1]*D,N.z),F.scene.traverse(B=>{B.isMesh&&(B.material=vd(B.material,e,"entrance",N))}),k.add(F.scene),i.add(k),b(i.getObjectByName("washerDoor")),R.entrance={scale:+D.toFixed(3),...Dm(k,t,n)}}}let C=(F,N,D)=>{let k=new Ze;k.rotation.y=Ye.degToRad(N.yaw),k.scale.setScalar(N.scale),k.position.set(...N.at),F.scene.traverse(V=>{V.isMesh&&(V.material=D(V.material))}),k.add(F.scene),i.add(k);let B=Lm(k,n);for(let V=0;V<40&&B<1.18;V++)k.position.x+=.03*Math.sign(k.position.x),B=Lm(k,n);return{holder:k,lane:+B.toFixed(2),at:k.position.toArray().map(V=>+V.toFixed(2))}};if(xt.machinery){let F=await E("machinery");if(!F)R.machinery="not found";else{let N=mi.machinery,D=C(F,N,B=>vd(B,e,"machinery",N));D.holder.name="s3Machinery";let k=i.getObjectByName("scenery");if(k)for(let B of k.children)B.position.distanceTo(new w(-2.25,-.3,-10))<.01&&b(B);R.machinery={scale:N.scale,at:D.at,nearestToLanes:D.lane}}}if(xt.brush){let F=await E("brush");if(!F)R.brush="not found";else{let N=mi.brush,D=C(F,N,B=>{let V=new pt({vertexColors:!0,roughness:N.rough,metalness:N.metal,envMap:e,envMapIntensity:N.envI,side:ft});return V.onBeforeCompile=j=>{j.fragmentShader=j.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${(+N.glow).toFixed(3)};`)},V.customProgramCacheKey=()=>"s3:brush:"+JSON.stringify(N),V});D.holder.name="s3Brush",b(r);let k=i.getObjectByName("scenery");if(k)for(let B of k.children)B.position.distanceTo(new w(2.05,-.55,-12))<.01&&b(B);R.brush={scale:N.scale,at:D.at,nearestToLanes:D.lane,spins:!1}}}let L=xt.cine&&d?Lb({camera:a,renderPass:d,updaters:l}):null;if(L&&(R.cine={...js}),xt.bubbles&&o&&(R.bubbles=Ab({scene:i,staticBubbles:o,camera:L||a,updaters:l,mascot:c})),xt.edges&&u&&h&&(R.edges=Cb({scene:i,L:u,W:h,env:e,updaters:l})),xt.tunnel&&v&&_&&(R.tunnel=await Im({scene:i,TR:v,L:u,W:h,camera:a,updaters:l,mascot:c,bump:_,brushBytes:await Jo.brushT,waterSheets:p,soap:{vertex:Bm,fragment:Hm},loaderParse:F=>I.parseAsync(F.slice(0),""),drumMeshes:y,round2:xt.round2?{exitLight:U,grade:m,bloomPass:x,hooks:T,round3:xt.round3}:null})),xt.paint&&m&&g&&(R.paint=await Db({scene:i,camera:a,updaters:l,tunnelStart:n,sideMachinery:r,staticBubbles:o,rollers:f,grade:m,bloomPass:x,outputPass:g,waterSheets:p,L:u,W:h})),xt.edges&&a){let F=[];i.traverse(D=>{/^s3(Castle|Entrance|Machinery|Brush|IcyEdge|Bubbles)/.test(D.name)&&F.push(D)});let N=!1;l.push(()=>{let D=a.position.z,k=N?D>n:D>n+1.5;if(k!==N){N=k;for(let B of F)B.visible=!N}}),R.hiddenInTunnel=F.length}return R}function Lm(i,e){i.updateMatrixWorld(!0);let t=1/0,n=new w;return i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.attributes.position;for(let o=0;o<r.count;o+=2)n.fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld),n.z<e&&n.y<2.6&&(t=Math.min(t,Math.abs(n.x)))}),t}function Ab({scene:i,staticBubbles:e,camera:t,updaters:n,mascot:s}){let r=mi.bubbles,o=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,a={uTime:{value:0},uMotion:{value:o?0:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:r.centreAlpha},uFilm:{value:xt.edges?Qr.film:1}},l=new rt({uniforms:a,vertexShader:Bm,fragmentShader:Hm,transparent:!0,depthWrite:!1,depthTest:!0,blending:En,blendSrc:An,blendDst:on}),c=new ln(1,40,24),u=(v,_)=>{let y=new Fn;return y.index=c.index,y.setAttribute("position",c.attributes.position),y.setAttribute("normal",c.attributes.normal),y.setAttribute("inst",v),y.setAttribute("motion",_),y},h=v=>{let _=new Be(v,l);return _.frustumCulled=!1,_.renderOrder=5,_.name="s3Bubbles",i.add(_),_},d=e.geometry,f=h(u(d.attributes.inst,d.attributes.motion)),m=r.extra.length,x=u(new zt(new Float32Array(m*4),4),new zt(new Float32Array(m*4),4));x.instanceCount=0,h(x);let g=new Bt(40,.5,.1,200),p=!1;return n.push((v,_,y)=>{if(a.uTime.value=_,s&&a.uAvoid.value.copy(s.root.position),e.visible=!1,f.geometry.instanceCount=d.instanceCount,p||y!=="intro")return;p=!0,g.fov=t.aspect>=.5?t.fov:Ye.radToDeg(2*Math.atan(Math.tan(Ye.degToRad(t.fov)/2)*t.aspect/.5)),g.position.copy(t.position),g.quaternion.copy(t.quaternion),g.updateProjectionMatrix(),g.updateMatrixWorld(!0);let U=g.getWorldDirection(new w),T=new w,R=x.attributes.inst,I=x.attributes.motion,E=b=>1076/(2*b*Math.tan(Ye.degToRad(g.fov)/2));r.extra.forEach(([b,S,C,L,F,N],D)=>{T.set(b/538*2-1,1-S/1076*2,.5).unproject(g).sub(g.position).normalize();let k=g.position.clone().addScaledVector(T,C/T.dot(U));R.setXYZW(D,k.x,k.y,k.z,L/E(C)),I.setXYZW(D,1.7+D*2.3,F,N,0)}),x.instanceCount=m,R.needsUpdate=I.needsUpdate=!0}),{spheres:!0,extra:m,reducedMotion:o}}var Bm=`
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
`,Hm=`
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
`;function Dm(i,e,t){i.updateMatrixWorld(!0);let n=1/0,s=1/0,r=new w;return i.traverse(o=>{if(!o.isMesh)return;let a=o.geometry.attributes.position;for(let l=0;l<a.count;l++)r.fromBufferAttribute(a,l).applyMatrix4(o.matrixWorld),s=Math.min(s,r.z),r.y>-.2&&r.z<t+30&&(n=Math.min(n,Math.hypot(r.x,r.y-e)))}),{nearestToAxis:+n.toFixed(2),frontZ:+s.toFixed(2)}}function vd(i,e,t,n){let s=new pt({map:i.map,metalnessMap:i.metalnessMap,roughnessMap:i.roughnessMap,normalMap:i.normalMap||null,metalness:1,roughness:1,envMap:e,envMapIntensity:n.envI,emissive:16777215,emissiveMap:i.map,emissiveIntensity:n.glow,side:ft}),r=n.gold||{},o=n.pink||null,a=n.cyan||null,l=u=>(+u).toFixed(4),c=`
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
      return smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y); }`:""}`;return s.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("void main() {",`${Rb}
${c}
float s3Gold = 0.0;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  s3Gold = s3GoldMask(diffuseColor.rgb);
  diffuseColor.rgb = s3Grade(diffuseColor.rgb);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
  metalnessFactor *= mix(1.0, ${l(r.metal??1)}, s3Gold);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = s3Grade(totalEmissiveRadiance)${a?` * (1.0 + ${l(a.glow)} * s3CyanMask(totalEmissiveRadiance))`:""};`)},s.customProgramCacheKey=()=>"s3:"+t+":"+JSON.stringify(n),s}var Rb=`
vec3 s3Rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 s3Hsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function Cb({scene:i,L:e,W:t,env:n,updaters:s}){let r={wallsHidden:0,railsHidden:0},o=e.startZ-24,a=-.6;i.traverse(d=>{if(!d.isMesh||d.isInstancedMesh||!d.material||!d.material.color)return;let f=d.material.color.getHex(),m=d.geometry;m.boundingBox||m.computeBoundingBox();let x=m.boundingBox;x.max.z-x.min.z>20&&x.min.z<o+1&&Math.abs((x.min.x+x.max.x)/2)<1.8&&(f===15128831||f===9425663?(d.visible=!1,r.wallsHidden++):m.type==="TubeGeometry"&&(d.visible=!1,r.railsHidden++))});let l={uTime:{value:0},uAlpha:{value:Qr.edge.alpha},uFoam:{value:Qr.edge.foam}},c=new rt({uniforms:l,vertexShader:Pb,fragmentShader:Ib,transparent:!0,depthWrite:!1,side:ft,blending:En,blendSrc:An,blendDst:on}),u=Qr.edge.profile,h=u.length;for(let d of[-1,1]){let f=[],m=[],x=[],g=0;for(let _=o;_<=a+1e-6;_+=.25,g++){let y=t.baseHeight(e,d*t.SLIDE.half,_);u.forEach(([U,T],R)=>{f.push(d*(t.SLIDE.half+U),y+T,_),m.push(R/(h-1))})}for(let _=0;_<g-1;_++)for(let y=0;y<h-1;y++){let U=_*h+y,T=U+h;x.push(U,T,U+1,T,T+1,U+1)}let p=new st;p.setAttribute("position",new Ke(f,3)),p.setAttribute("across",new Ke(m,1)),p.setIndex(x),p.computeVertexNormals();let v=new Be(p,c);v.renderOrder=2,v.name="s3IcyEdge",i.add(v)}return s.push((d,f)=>{l.uTime.value=f}),r.icyEdges=2,r}var Pb=`
attribute float across;
varying vec3 vW; varying vec3 vN; varying float vAcross;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vAcross = across;
  gl_Position = projectionMatrix * viewMatrix * w; }
`,Ib=`
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
`;function Lb({camera:i,renderPass:e,updaters:t}){let n=new Bt(i.fov,i.aspect,i.near,i.far),s=new w,r=new At,o=new w(1,0,0),a=null;return t.push((l,c,u)=>{u==="running"&&a===null&&(a=c);let h=a===null?0:c-a,d=u==="intro"?1:a===null?0:1-Ye.smoothstep(h,0,js.blend);if(d<=0){e.camera!==i&&(e.camera=i);return}i.getWorldDirection(s),s.y=0,s.normalize(),n.position.copy(i.position).addScaledVector(s,js.forward*d),n.position.y+=js.up*d,n.quaternion.copy(i.quaternion).multiply(r.setFromAxisAngle(o,-Ye.degToRad(js.pitch)*d)),n.fov=i.fov*(1+(js.fov-1)*d),n.aspect=i.aspect,n.near=i.near,n.far=i.far,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),e.camera=n}),n}async function Db({scene:i,camera:e,updaters:t,tunnelStart:n,sideMachinery:s,staticBubbles:r,rollers:o,grade:a,bloomPass:l,outputPass:c,waterSheets:u,L:h,W:d}){let f=Nm,m=await new cs().loadAsync("ui/s3_paint_backdrop.png");m.colorSpace=Tt,m.anisotropy=4;let x=[i.getObjectByName("entranceDecor"),i.getObjectByName("scenery"),s,r,...(o||[]).filter(ue=>ue.centre.z<n).map(ue=>ue.g)].filter(Boolean);for(let ue of x)ue.visible=!1;let g=48,p=96,v=-40,_=578,y=-80,U=1156,T=(g+1)*(p+1),R=new Float32Array(T*3),I=new Float32Array(T*2),E=[];for(let ue=0;ue<=p;ue++)for(let Ce=0;Ce<=g;Ce++){let _e=ue*(g+1)+Ce;I[_e*2]=v+(_-v)*Ce/g,I[_e*2+1]=y+(U-y)*ue/p}for(let ue=0;ue<p;ue++)for(let Ce=0;Ce<g;Ce++){let _e=ue*(g+1)+Ce,Pe=_e+g+1;E.push(_e,Pe,_e+1,_e+1,Pe,Pe+1)}let b=new st;b.setAttribute("position",new ot(R,3)),b.setAttribute("stage",new ot(I,2)),b.setIndex(E);let S={map:{value:m},uFade:{value:1},uBanner:{value:0},uPanel:{value:0}},C=new rt({uniforms:S,vertexShader:Ub,fragmentShader:Nb,transparent:!0,depthWrite:!0,depthTest:!0,blending:En,blendSrc:Po,blendDst:on,blendSrcAlpha:hh,blendDstAlpha:on}),L=new Be(b,C);L.name="s3Paint",L.frustumCulled=!1,L.renderOrder=-1,L.visible=!1,i.add(L),a.uniforms.uS3Paint={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS3Paint;").replace("gl_FragColor = max(c, 0.0);",`{ vec4 s3o = texture2D(tDiffuse, vUv); c.rgb = mix(c.rgb, s3o.rgb, clamp(1.0 - s3o.a, 0.0, 1.0) * uS3Paint); c.a = s3o.a; }
      gl_FragColor = max(c, 0.0);`),a.material.needsUpdate=!0,c.uniforms.uS3Paint={value:0},c.material.fragmentShader=c.material.fragmentShader.replace("uniform sampler2D tDiffuse;",`uniform sampler2D tDiffuse;
		uniform float uS3Paint;`).replace("gl_FragColor = texture2D( tDiffuse, vUv );","vec4 s3o = texture2D( tDiffuse, vUv ); gl_FragColor = s3o;").replace("// color space",`gl_FragColor.rgb = mix( gl_FragColor.rgb, s3o.rgb, clamp( 1.0 - s3o.a, 0.0, 1.0 ) * uS3Paint ); gl_FragColor.a = 1.0;
			// color space`),c.material.needsUpdate=!0;let F={uPaintCut:{value:0},uPaintZ:{value:f.cutZ}},N=(u||[]).find(ue=>(ue.geometry.computeBoundingBox(),ue.geometry.boundingBox.min.z<n-5)),D=!1;if(N&&N.material.fragmentShader.includes("  vec2 xz = vTrack;")){let ue=N.material,Ce=ue.clone();Ce.uniforms={...ue.uniforms,...F},Ce.fragmentShader=`uniform float uPaintCut; uniform float uPaintZ;
`+ue.fragmentShader.replace("  vec2 xz = vTrack;",`  vec2 xz = vTrack;
  if (uPaintCut > 0.5 && abs(xz.x) > uSlideHalf + 0.62 && xz.y > uPaintZ && xz.y < uTunnel.x) discard;`),N.material=Ce,D=!0}let k=a.material.fragmentShader.includes("uS3Paint")&&c.material.fragmentShader.includes("s3o.rgb"),B=new Bt(40,.5,.1,200),V=new w,j=new w,se=(ue,Ce,_e)=>{let Pe=Math.min(1,Math.max(0,(_e-ue)/(Ce-ue)));return Pe*Pe*(3-2*Pe)},ye=(ue,Ce,_e)=>{let Pe=O=>{let Te=ue.y+Ce.y*O,te=ue.z+Ce.z*O;return Te<d.baseHeight(h,0,Math.min(te,n-.5))-f.groundBelow},ee=.3,re=null;for(let O=.3;O<=_e;O+=.25){if(Pe(O)){re=O;break}ee=O}if(re===null)return _e;for(let O=0;O<20;O++){let Te=(ee+re)/2;Pe(Te)?re=Te:ee=Te}return re},ke=new Float32Array(T),q=0,ne=!1,Ee=null,de=null;return t.push((ue,Ce,_e)=>{if(!ne&&_e==="intro"){ne=!0,B.fov=e.aspect>=.5?e.fov:Ye.radToDeg(2*Math.atan(Math.tan(Ye.degToRad(e.fov)/2)*e.aspect/.5)),B.position.copy(e.position),B.quaternion.copy(e.quaternion),B.updateProjectionMatrix(),B.updateMatrixWorld(!0);let O=B.position,Te=ce=>(ce-O.z)/Math.max(V.z,1e-4);for(let ce=0;ce<T;ce++){let pe=I[ce*2],Ue=I[ce*2+1];V.set(pe/538*2-1,1-Ue/1076*2,.5).unproject(B).sub(O).normalize();let be=1-se(.8,1.3,((pe-52)/120)**2+((Ue-582)/135)**2),P=se(368,410,pe)*se(395,430,Ue)*(1-se(780,820,Ue)),M=Math.min(1,1-se(60,95,pe)+se(445,480,pe))*se(50,80,Ue)*(1-se(430,470,Ue))*(1-Math.max(be,P)),H=Math.max(.05,1-Math.max(be,P,M)),W=1/((be/Te(f.brush)+P/Te(f.machinery)+M/Te(f.towers)+H/Te(f.far))/(be+P+M+H)),Y=Math.max(be,P,M);V.y<-1e-4&&(W=W*Y+Math.min(W,ye(O,V,W))*(1-Y)),j.copy(O).addScaledVector(V,W),ke[ce]=W,R[ce*3]=j.x,R[ce*3+1]=j.y,R[ce*3+2]=j.z}let te=[];for(let ce=0;ce<p;ce++)for(let pe=0;pe<g;pe++){let Ue=ce*(g+1)+pe,be=Ue+g+1,P=[Ue,Ue+1,be,be+1].map(M=>ke[M]);Math.max(...P)/Math.min(...P)<f.tear&&te.push(Ue,be,Ue+1,Ue+1,be,be+1)}b.setIndex(te),q=E.length/6-te.length/6,b.attributes.position.needsUpdate=!0,b.computeBoundingSphere(),L.visible=!0}_e==="running"&&Ee===null&&(Ee=Ce);let Pe=Ee===null?-1:Ce-Ee,ee=Pe<0?0:se(0,.45,Pe);S.uBanner.value=ee,S.uPanel.value=ee,S.uFade.value=1-se(f.fadeFrom,f.fadeTo,e.position.z);let re=ne&&S.uFade.value>.001&&e.position.z<n;L.visible=re,C.depthWrite=S.uFade.value>.999,a.uniforms.uS3Paint.value=c.uniforms.uS3Paint.value=re?1:0,F.uPaintCut.value=re?1:0,l&&(re?de===null&&(de=l.enabled,l.enabled=!1):de!==null&&(l.enabled=de,de=null))}),{grid:[g,p],hidden:x.length,passesPatched:k,moatCut:D,depths:{...f},get tornCells(){return q}}}var Ub=`
attribute vec2 stage;
varying vec2 vStage;
void main() { vStage = stage; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Nb=`
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
`;var gi=!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)));function Js(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Yl={1:"models/roller_candidate_1.glb",2:"models/roller_candidate_2.glb"},ea=typeof window>"u"?null:String(window.__BW_ROLLER__||(location.search.match(/[?&]roller=(\d)/)||[])[1]||"")||null,zm=Fb()&&Yl[ea]?Ob(Yl[ea]):null;function Fb(){return!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)))}async function Ob(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}var Bb={at:[-2.7,null,-6.4],yaw:-50,length:2.7,spin:-1.4,feetY:.4};function ta(i,e){let t=Math.random;Math.random=i;try{return e()}finally{Math.random=t}}async function Wm(i,e){let t=Math.random;Math.random=i;try{return await e()}finally{Math.random=t}}var Qo=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Xm(i){let{scene:e,env:t,TR:n,L:s,W:r,mascot:o,camera:a,Particles:l,fxScale:c,waterU:u,grade:h,bubbles:d,rollers:f,sideMachinery:m,setSideMachinery:x,fur:g,mascotModel:p}=i,v=Js(377827),_=new Ze;_.name="openingLook",e.add(_);let y=r.WATER+r.AXIS_H,U=s.tunnelStart,T=[],R=new pt({color:16762194,metalness:1,roughness:.17,envMap:t,envMapIntensity:1.55,emissive:4860416,emissiveIntensity:.45}),I=new pt({color:15242798,metalness:1,roughness:.26,envMap:t,envMapIntensity:1.35,emissive:3808256,emissiveIntensity:.5}),E=new pt({color:2759290,metalness:.1,roughness:.34,envMap:t,envMapIntensity:.9,emissive:1181247,emissiveIntensity:.5,side:ft});if(Pn.portal){let M=new Ze;M.name="washerDoor",M.position.set(0,y,0),_.add(M);let H=z=>(z.rotateX(Math.PI/2),z),G=new Be(new jt(2.74,.25,28,140),R);G.position.z=2.72,M.add(G);let W=new Be(new jt(3.02,.075,14,140),I);W.position.z=2.62,M.add(W);let Y=new Be(new jt(2.5,.06,12,140),I);Y.position.z=2.98,M.add(Y);let fe=new nn(new ln(.075,14,10),I,28),ve=new Ae;for(let z=0;z<28;z++){let ge=z/28*Math.PI*2;fe.setMatrixAt(z,ve.makeTranslation(Math.cos(ge)*2.76,Math.sin(ge)*2.76,2.47))}M.add(fe);let me=[[2.56,3.02],[2.47,3.12],[2.5,3.24],[2.41,3.36],[2.44,3.48],[2.35,3.6],[2.37,3.7],[2.27,3.8],[2.24,3.88]],Ie=H(new Wr(me.map(([z,ge])=>new ae(z,ge)),140));M.add(new Be(Ie,E));let le=[new xe(.08,1,1.9),new xe(.4,1.35,2.1),new xe(.08,1,1.9)],oe=[];[[2.43,3.15],[2.39,3.4],[2.31,3.64]].forEach(([z,ge],K)=>{let ie=new Pt({color:le[K].clone()}),Le=new Be(new jt(z,.022,8,140),ie);Le.position.z=ge,M.add(Le),oe.push({mat:ie,base:le[K],u:ge})});let he=new rt({uniforms:{uColor:{value:new xe(.25,.95,1.6)},uGain:{value:1}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uGain; varying vec2 vP; void main() { float r = length(vP); float k = exp(-pow((r - 2.26) / 0.04, 2.0)); gl_FragColor = vec4(uColor * k * uGain, 1.0); }",transparent:!0,blending:rn,depthWrite:!1,side:ft}),we=new Be(new ks(2.2,2.34,140,1),he);we.position.z=3.87,we.renderOrder=3,M.add(we);let Me=new rt({uniforms:{uWall:{value:new xe(.66,.56,.93)},uShade:{value:new xe(.2,.13,.45)}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uWall, uShade; varying vec2 vP;
        void main() {
          float r = length(vP);
          float shade = 1.0 - smoothstep(2.95, 3.35, r);                 // soft shadow next to the gold ring
          vec3 c = mix(uWall, uShade, shade * 0.55);
          c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);               // a little lighter toward the top
          c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));      // a dark outline right at the ring
          float a = 1.0 - smoothstep(3.55, 3.92, r);                     // fades into the castle's own wall
          gl_FragColor = vec4(c * a, a);
        }`,transparent:!0,depthWrite:!1,blending:En,blendSrc:An,blendDst:on,side:ft}),$e=new Be(new ks(2.93,3.92,160,1),Me);$e.position.z=.86,$e.renderOrder=1,M.add($e);let qe=new Pi({map:Xb(),color:new xe(2.2,2,1.6),transparent:!0,blending:rn,depthWrite:!1}),it=[];for(let z=0;z<7;z++){let ge=.35+z*.36+v()*.2,K=new ns(qe.clone());K.position.set(Math.cos(ge)*2.9,Math.sin(ge)*2.9,2.45),K.renderOrder=4,M.add(K),it.push({sp:K,ph:v()*6.28,rate:1.3+v()*1.4})}T.push((z,ge)=>{for(let K of oe)K.mat.color.copy(K.base).multiplyScalar(.82+.25*Math.sin(ge*2.6-K.u*2.2));he.uniforms.uGain.value=.8+.2*Math.sin(ge*1.7);for(let K of it){let ie=Math.pow(Math.max(0,Math.sin(ge*K.rate+K.ph)),8);K.sp.scale.setScalar(.05+.42*ie),K.sp.material.opacity=ie}})}let b=new l(700);b.u.uScale=c;let S=new rt({uniforms:{uTime:{value:0}},vertexShader:Vb,fragmentShader:Gb}),C=64,L=new nn(Wb(v),S,C);L.frustumCulled=!1,L.name="mascotFoam",_.add(L);let F=[];for(let M=0;M<C;M++){let H=M>=40,G=H?Math.PI+(v()<.5?-1:1)*(.55+v()*1.15):M/40*Math.PI*2+v()*.12;!H&&Math.abs((G-Math.PI+Math.PI*3)%(Math.PI*2)-Math.PI)<.6&&(G=Math.PI+(v()<.5?-1:1)*(.6+v()*.7));let W=H?.6+Math.pow(v(),.8)*.45:.42+v()*.08;F.push({a:G,r:W,s:H?.03+v()*.04:.055+v()*.05,ph:v()*6.28,spin:v()*6.28,outer:H,drift:v()})}let N=new At,D=new Mn,k=new w,B=new w,V=new Ae,j={P:new w,R:new w,U:new w,T:new w},se=o.x,ye={side:0,wall:0,puff:0,bow:0},ke=M=>1-Qo(U-3.5,U-.8,M),q=(M,H)=>{let G=o,W=M-G.x,Y=H-G.z,fe=G.speed/r.CRUISE,ve=G.downhill||0,me=Math.hypot(W,Y*.85),Ie=Qo(-.3,.5,Y),le=Math.exp(-(((me-.6)/.17)**2))*(.06+.06*fe+.05*ve)*(.55+.75*Ie),oe=-Math.exp(-me*me*9)*.04,he=Math.min(1,Math.max(0,-Y/(2.4+2.6*fe))),we=.6+he*(.8+.7*fe),Me=Math.exp(-(((Math.abs(W-G.xv*.12*he)-we)/.15)**2))*(Y<=0?1:0)*(1-he)*(.02+.07*fe);return le+oe+Me},ne=(M,H,G)=>r.surface(s,M,H,G)+q(M,H);T.push((M,H,G)=>{let W=o,Y=G==="running",fe=Pn.foam?ke(W.z):0,ve=r.surface(s,W.x,W.z,H)+r.FLOAT_H,me=Math.max(0,W.yAbs-ve),Ie=fe*(1-Qo(.08,.45,me)),le=Math.min(1.4,W.speed/r.CRUISE);se+=(W.x-se)*Math.min(1,M*5);for(let oe=0;oe<C;oe++){let he=F[oe],we=Y?(H*(1.1+1.4*he.drift)+he.drift)%1:0,Me=we*le*(he.outer?.9:.5),qe=(he.outer?se:W.x)+Math.sin(he.a)*he.r*(1+.25*le*we),it=W.z+Math.cos(he.a)*he.r*.85-Me,z=ne(qe,it,H),ge=Math.sin(H*2.3+he.ph)*.015,K=Y?Math.sin(Math.PI*Math.min(1,we*1.05))*.6+.4:1,ie=he.s*Ie*K*(Y?he.outer?.5:.9:1)*(1+.12*Math.sin(H*1.7+he.ph));n.frame(it,j),B.copy(j.P).addScaledVector(j.R,qe).addScaledVector(j.U,z+.01+ie*.3+ge),D.set(he.spin+H*.4,he.ph+H*.3,0),N.setFromEuler(D),k.set(ie*1.25,ie*.8,ie*1.25),L.setMatrixAt(oe,V.compose(B,N,k))}if(L.instanceMatrix.needsUpdate=!0,S.uniforms.uTime.value=H,L.visible=Ie>.001,Ie>.01&&!W.air){for(ye.side+=(Y?20+30*le:16)*Ie*M;ye.side>=1;ye.side--){let oe=v()<.5?-1:1,he=(v()-.5)*1.4,we=W.x+oe*(.44+v()*.14),Me=W.z+he*.35,$e=r.surface(s,we,Me,H);b.emitT(we,$e+.04,Me,oe*(.4+v()*.7),1+v()*1.3,W.speed*.6+(v()-.5)*.5,.03+v()*.045,.45+v()*.35,0)}for(ye.puff+=(Y?6:7)*Ie*M;ye.puff>=1;ye.puff--){let oe=Math.PI+(v()-.5)*2.6,he=.5+v()*.35,we=W.x+Math.sin(oe)*he,Me=W.z+Math.cos(oe)*he*.85,$e=r.surface(s,we,Me,H);b.emitT(we,$e+.03,Me,Math.sin(oe)*.12,.12+v()*.12,W.speed*.8,.12+v()*.12,.6+v()*.5,1,.08)}}if(Pn.foam)for(ye.wall+=30*M;ye.wall>=1;ye.wall--){let oe=Math.min(U-1.2,W.z-2+v()*18);if(ke(oe)<.5)continue;let he=v()<.5?-1:1,we=he*(r.SLIDE.half-.04),Me=r.surface(s,we,oe,H);b.emitT(we,Me+.05,oe,-he*(.2+v()*.5),.8+v()*1.2,1.5+v()*2,.035+v()*.04,.4+v()*.3,0),v()<.25&&b.emitT(we-he*.08,Me+.03,oe,-he*.1,.1,2,.1+v()*.08,.5+v()*.4,1,.05)}b.update(M)}),u&&(u.uOpen.value=Pn.foam?1:0);let Ee={uTime:{value:0},uAvoid:{value:new w(0,-99,0)}},de=new rt({vertexShader:zb,fragmentShader:kb,uniforms:Ee,transparent:!0,depthWrite:!1,blending:En,blendSrc:An,blendDst:on}),ue=M=>{let H=new Vn(2,2),G=new Fn;G.index=H.index,G.attributes.position=H.attributes.position,G.attributes.uv=H.attributes.uv,G.setAttribute("inst",new zt(new Float32Array(M*4),4).setUsage(hi)),G.setAttribute("motion",new zt(new Float32Array(M*4),4)),G.instanceCount=0;let W=new Be(G,de);return W.frustumCulled=!1,W.renderOrder=5,_.add(W),W},Ce=null,_e=!1,Pe=new Bt(40,.5,.1,200),ee=[];if(Pn.bubbles&&d){let M=d.geometry.attributes.inst,H=d.geometry.attributes.phase;for(let G=0;G<M.count;G++)M.getZ(G)>U-.5||(ee.push([M.getX(G),M.getY(G),M.getZ(G),M.getW(G),H.getX(G)]),M.setW(G,0));M.needsUpdate=!0,Ce=ue(ee.length+Vm.length)}let re=64,O=Pn.bubbles?ue(re):null,Te=[];for(let M=0;M<re;M++)Te.push({a:Math.PI+(v()-.5)*3.8,r:.5+Math.pow(v(),1.3)*.7,s:.012+Math.pow(v(),2.2)*.04,ph:v()*6.28});let te=20,ce=Pn.foam?ue(te):null,pe=[];for(let M=0;M<te;M++){let H=M<9,G=H?9:11,W=H?M:M-9,Y=H?1.35:1.75,fe=Math.PI+((W+.5)/G*2-1)*Y+(v()-.5)*.15;pe.push({a:fe,r:H?.47+v()*.05:.6+v()*.08,s:H?.1+v()*.07:.05+v()*.045,lift:H?.22+v()*.3:.25+v()*.2,ph:v()*6.28,drift:v(),inner:H})}if(T.push((M,H,G)=>{if(Ee.uTime.value=H,Ee.uAvoid.value.copy(o.root.position),Ce&&!_e&&G==="intro"){_e=!0;let W=a.aspect;Pe.fov=W>=.5?a.fov:Ye.radToDeg(2*Math.atan(Math.tan(Ye.degToRad(a.fov)/2)*W/.5)),Pe.position.copy(a.position),Pe.quaternion.copy(a.quaternion),Pe.updateProjectionMatrix(),Pe.updateMatrixWorld(!0);let Y=Pe.getWorldDirection(new w),fe=new w,ve=Ce.geometry.attributes.inst,me=Ce.geometry.attributes.motion,Ie=0;for(let oe of ee)ve.setXYZW(Ie,oe[0],oe[1],oe[2],oe[3]),me.setXYZW(Ie,oe[4],0,.02,0),Ie++;let le=oe=>1076/(2*oe*Math.tan(Ye.degToRad(Pe.fov)/2));for(let[oe,he,we,Me,$e,qe]of Vm){fe.set(oe/538*2-1,1-he/1076*2,.5).unproject(Pe).sub(Pe.position).normalize();let it=Pe.position.clone().addScaledVector(fe,we/fe.dot(Y));ve.setXYZW(Ie,it.x,it.y,it.z,Me/le(we)),me.setXYZW(Ie,v()*6.28,$e,qe,0),Ie++}Ce.geometry.instanceCount=Ie,ve.needsUpdate=me.needsUpdate=!0}if(O){let W=o,Y=ke(W.z)*(W.air?0:1),fe=O.geometry.attributes.inst,ve=O.geometry.attributes.motion;for(let me=0;me<re;me++){let Ie=Te[me],le=G==="running"?(H*.9+Ie.ph)%1*(W.speed/r.CRUISE):0,oe=se+Math.sin(Ie.a)*Ie.r,he=W.z+Math.cos(Ie.a)*Ie.r*.85-le*1.2,we=ne(oe,he,H);n.frame(he,j),B.copy(j.P).addScaledVector(j.R,oe).addScaledVector(j.U,we+Ie.s*.9),fe.setXYZW(me,B.x,B.y,B.z,Ie.s*Y),ve.setXYZW(me,Ie.ph,0,0,-1)}O.geometry.instanceCount=re,fe.needsUpdate=!0,ve.needsUpdate=!0}if(ce){let W=o,Y=G==="running",fe=Math.min(1.4,W.speed/r.CRUISE),ve=Math.max(0,W.yAbs-(r.surface(s,W.x,W.z,H)+r.FLOAT_H)),me=ke(W.z)*(1-Qo(.06,.35,ve)),Ie=ce.geometry.attributes.inst,le=ce.geometry.attributes.motion;for(let oe=0;oe<te;oe++){let he=pe[oe],we=Y?(H*(.7+.6*he.drift)+he.drift)%1:0,Me=we*fe*(he.inner?.35:.6),$e=Y?.55+.45*Math.sin(Math.PI*Math.min(1,we*1.1)):1,qe=he.inner?W.x:se,it=1+.06*Math.sin(H*2.1+he.ph),z=qe+Math.sin(he.a)*he.r*(1+.15*fe*we),ge=W.z+Math.cos(he.a)*he.r*.85-Me,K=he.s*me*$e*it;n.frame(ge,j),B.copy(j.P).addScaledVector(j.R,z).addScaledVector(j.U,ne(z,ge,H)+K*he.lift),Ie.setXYZW(oe,B.x,B.y,B.z,K),le.setXYZW(oe,he.ph,0,0,1)}ce.geometry.instanceCount=te,ce.renderOrder=6,Ie.needsUpdate=!0,le.needsUpdate=!0}}),Pn.brushes){if(x){let H={...yd.machinery,at:[...yd.machinery.at]},G=x(H);for(let W=0;W<20&&!(G>=Gm);W++)H.at[0]+=.03,G=x(H);i.machineryInnerX=G}m&&m.traverse(H=>{H.isMesh&&(H.material=P(H.material,"machinery","face",H.geometry))}),f.filter(H=>H.centre.z<U).forEach((H,G)=>{let W=null;H.g.traverse(fe=>{fe.isMesh&&(!W||fe.geometry.attributes.position.count>W.geometry.attributes.position.count)&&(W=fe)}),W&&(W.material=P(W.material,"roller"+G,"roller",W.geometry));let Y=yd.rollers[G];Y&&Y.hide?H.g.visible=!1:Y&&Ue(H,Y)})}function Ue(M,H){let G=new Xt,W=new w,Y=new w,fe=M.g.children[0];M.g.remove(fe),fe.updateMatrixWorld(!0),G.setFromObject(fe),G.getSize(W),G.getCenter(Y),M.g.add(fe);let ve=H.d/Math.max(W.x,W.z),me=new w(...H.axis).normalize(),Ie=n.map(H.at[0],H.at[1],H.at[2]);M.m0=new Ae().compose(Ie,new At().setFromUnitVectors(new w(0,1,0),me),new w(ve,ve,ve)).multiply(new Ae().makeTranslation(-Y.x,-Y.y,-Y.z)),M.centre=Ie,M.axis=me}if(Pn.slide&&e.traverse(M=>{if(M.isMesh&&M.material&&M.material.isMeshStandardMaterial&&M.material.color.getHex()===15128831){let H=M.material.clone();H.color.set(9425663),H.roughness=.16,H.metalness=.1,H.envMapIntensity=1.35,H.emissive.set(1929176),H.emissiveIntensity=.35,M.material=H}}),Pn.mascot&&p){let M=new w(...km.stretch);p.scale.multiply(M),p.position.multiply(M),g&&(g.uSpike.value=km.spike)}h&&(h.uniforms.uOpen.value=0),T.push(()=>{if(!h)return;let M=a.position.z;h.uniforms.uOpen.value=Pn.light?1-Qo(-6,1.2,M):0});async function be(){if(Um&&(window.__bwS3=await Om({scene:e,env:t,axisY:y,tunnelStart:U,oldCastle:i.castle,sideMachinery:m,staticBubbles:Ce,camera:a,updaters:T,mascot:o,L:s,W:r,renderPass:i.renderPass,rollers:f,grade:h,bloomPass:i.bloomPass,outputPass:i.outputPass,waterSheets:i.waterSheets,TR:n,bumpMascot:i.bumpMascot,drumMeshes:i.drumMeshes,exitLight:i.exitLight,r2:i.r2})),!zm)return;let M=await zm;if(!M){i.rollerCandidate={file:Yl[ea],error:"not found"};return}let H=await new fs().parseAsync(M,""),G=null;H.scene.traverse(Re=>{Re.isMesh&&!G&&(G=Re)});let W=G.geometry,Y=W.attributes.position,fe=W.index.array,ve=fe.length/3,me=Re=>`${Math.round(Y.getX(Re)*1e4)},${Math.round(Y.getY(Re)*1e4)},${Math.round(Y.getZ(Re)*1e4)}`,Ie=new Map,le=new Int32Array(Y.count);for(let Re=0;Re<Y.count;Re++){let Je=me(Re);Ie.has(Je)||Ie.set(Je,Ie.size),le[Re]=Ie.get(Je)}let oe=new Int32Array(Ie.size).map((Re,Je)=>Je),he=Re=>{for(;oe[Re]!==Re;)Re=oe[Re]=oe[oe[Re]];return Re};for(let Re=0;Re<ve;Re++){let Je=he(le[fe[Re*3]]);oe[he(le[fe[Re*3+1]])]=Je,oe[he(le[fe[Re*3+2]])]=Je}let we=new Map;for(let Re=0;Re<ve;Re++){let Je=he(le[fe[Re*3]]);we.has(Je)||we.set(Je,[]),we.get(Je).push(fe[Re*3],fe[Re*3+1],fe[Re*3+2])}let Me=[...we.values()].sort((Re,Je)=>Je.length-Re.length),$e=(()=>{let Re=G.material.metalnessMap;if(!Re||!Re.image)return null;let Je=document.createElement("canvas");Je.width=Re.image.width,Je.height=Re.image.height;let Jt=Je.getContext("2d");Jt.drawImage(Re.image,0,0);let Vi=Jt.getImageData(0,0,Je.width,Je.height).data,wn=W.attributes.uv;return(Nt,A,X)=>{let Q=(wn.getX(Nt)+wn.getX(A)+wn.getX(X))/3,J=(wn.getY(Nt)+wn.getY(A)+wn.getY(X))/3;Re.flipY&&(J=1-J);let $=Math.min(Je.width-1,Math.max(0,Math.floor(Q*Je.width))),Se=Math.min(Je.height-1,Math.max(0,Math.floor(J*Je.height)));return Vi[(Se*Je.width+$)*4+2]/255}})(),qe=0;if($e){let Re=Me[0],Je=Nt=>(Y.getZ(Re[Nt])+Y.getZ(Re[Nt+1])+Y.getZ(Re[Nt+2]))/3,Jt=[];for(let Nt=0;Nt<Re.length;Nt+=3)$e(Re[Nt],Re[Nt+1],Re[Nt+2])<.5&&Jt.push(Je(Nt));Jt.sort((Nt,A)=>Nt-A);let Vi=Jt[Math.floor(Jt.length*.02)],wn=Jt[Math.floor(Jt.length*.98)];for(let Nt=0;Nt<Re.length;Nt+=3)$e(Re[Nt],Re[Nt+1],Re[Nt+2])>.5&&(Je(Nt)<Vi||Je(Nt)>wn)&&qe++}let it=Re=>{let Je=new st;for(let Jt of Object.keys(W.attributes))Je.setAttribute(Jt,W.attributes[Jt]);return Je.setIndex(Re),Je.computeBoundingBox(),Je.computeBoundingSphere(),Je},z=it(Me[0]),ge=Me.length>1?it(Me.slice(1).flat()):null,K=!!ge&&qe<10,ie=z.boundingBox,Le=new w((ie.min.x+ie.max.x)/2,(ie.min.y+ie.max.y)/2,0);W.computeBoundingBox();let Fe=W.boundingBox,Qe=Fe.getSize(new w),Ct=G.material,Zt=new pt({map:Ct.map,metalnessMap:Ct.metalnessMap,roughnessMap:Ct.roughnessMap,normalMap:Ct.normalMap||null,metalness:1,roughness:1,envMap:t,envMapIntensity:1.15,emissive:16777215,emissiveMap:Ct.map,emissiveIntensity:.2,side:ft});Zt.customProgramCacheKey=()=>"opening:rollerCandidate";let ut=Bb,vn=ut.length/Qe.z,Yt=new Ze;Yt.name="rollerCandidate"+ea;let zi=new Ze;zi.scale.setScalar(vn),Yt.add(zi);let bs=new Ze;bs.position.copy(Le),zi.add(bs);let ii=new Be(z,Zt);if(ii.position.copy(Le).negate(),bs.add(ii),ge){let Re=new Be(ge,Zt);zi.add(Re)}_.add(Yt);let ir=()=>{let Re=ut.length/Qe.z;zi.scale.setScalar(Re),Yt.position.set(ut.at[0],ut.feetY-Fe.min.y*Re,ut.at[2]),Yt.rotation.y=Ye.degToRad(ut.yaw)};ir();let so=()=>{Yt.updateMatrixWorld(!0);let Re=1/0,Je=new w;return Yt.traverse(Jt=>{if(!Jt.isMesh)return;let Vi=Jt.geometry.attributes.position;for(let wn=0;wn<Vi.count;wn+=3)Je.fromBufferAttribute(Vi,wn).applyMatrix4(Jt.matrixWorld),Je.z<U&&Je.y<2.6&&(Re=Math.min(Re,Math.abs(Je.x)))}),Re},ro=()=>{let Re=so();for(let Je=0;Je<30&&Re<Gm;Je++)Yt.position.x+=.04*Math.sign(Yt.position.x||-1),Re=so();return Re},ki=ro();window.__bwRoller=Re=>(Object.assign(ut,Re),ir(),ki=ro(),i.rollerCandidate={...i.rollerCandidate,at:Yt.position.toArray().map(Je=>+Je.toFixed(2)),nearestToLanes:+ki.toFixed(2)},i.rollerCandidate);let oo=f.filter(Re=>Re.centre.z<U);oo[1]&&(oo[1].g.visible=!1),i.rollerCandidate={file:Yl[ea],pieces:we.size,drumTris:Me[0].length/3,bracketTris:ge?ge.index.count/3:0,fusedGoldTris:qe,spinnable:K,scale:+vn.toFixed(3),diameter:+(Math.max(Qe.x,Qe.y)*vn).toFixed(2),length:ut.length,at:Yt.position.toArray().map(Re=>+Re.toFixed(2)),nearestToLanes:+ki.toFixed(2)},K&&T.push(Re=>{bs.rotation.z+=ut.spin*Re})}return wm&&(window.__bwPhaseA=Am({scene:e,castle:i.castle,waterSheets:i.waterSheets,axisY:y,tunnelStart:U})),{root:_,loadExtras:be,update(M,H,G){for(let W of T)W(M,H,G)}};function P(M,H,G,W){let Y=M.clone(),fe=M.onBeforeCompile,ve=M.customProgramCacheKey.bind(M),me=G==="face";me&&(Y.envMapIntensity=1.4,Y.emissiveIntensity=.15),W.computeBoundingBox();let Ie=W.boundingBox,le=Ie.getCenter(new w),oe=Ie.getSize(new w),he=me?Math.max(oe.x,oe.y)*.5:Math.max(oe.x,oe.z)*.5;return Y.onBeforeCompile=(we,Me)=>{fe.call(M,we,Me),we.vertexShader=we.vertexShader.replace("void main() {",`varying vec3 vFibreP;
void main() {
  vFibreP = position;`),we.fragmentShader=we.fragmentShader.replace("void main() {",`varying vec3 vFibreP;
${Hb}
void main() {`);let $e=me?"#include <emissivemap_fragment>":"#include <alphamap_fragment>",qe=`(vFibreP - vec3(${le.x.toFixed(4)}, ${le.y.toFixed(4)}, ${le.z.toFixed(4)})) / ${he.toFixed(4)}`,it=me?"vec3(atan(q.y, q.x) * 160.0, length(q.xy) * 9.0, q.z * 30.0)":"vec3(atan(q.z, q.x) * 150.0, q.y * 120.0, length(q.xz) * 8.0)";we.fragmentShader=we.fragmentShader.replace($e,`${$e}
        { vec3 cc = diffuseColor.rgb;
          float mx = max(cc.r, max(cc.g, cc.b));
          float soft = ${me?"(1.0 - smoothstep(0.3, 0.6, metalnessFactor))":"1.0"} * smoothstep(0.04, 0.2, mx);
          vec3 q = ${qe};
          vec3 fc = ${it};
          float strand = fibreNoise(fc) * 0.65 + fibreNoise(fc * vec3(2.1, 1.7, 1.0) + 7.3) * 0.35;
          float f = mix(0.74, 1.18, smoothstep(0.2, 0.8, strand));
          diffuseColor.rgb *= mix(1.0, f, soft * 0.85);
          ${me?"totalEmissiveRadiance *= mix(1.0, f, soft);":""} }`)},Y.customProgramCacheKey=()=>ve()+"|fibre:"+H,Y}}var Pn={portal:gi,foam:gi,bubbles:gi,brushes:gi,slide:gi,mascot:gi,light:gi,art:gi};if(typeof window<"u"&&Array.isArray(window.__BW_OPENING_OFF__))for(let i of window.__BW_OPENING_OFF__)Pn[i]=!1;var km={stretch:[.95,1.07,.95],spike:1},Vm=[[512,655,7.5,30,0,.03],[36,815,5.4,52,0,.03],[503,848,5.2,46,0,.03],[165,592,13,26,0,.04],[92,470,15,20,0,.04],[120,700,9,14,.12,.05],[420,720,9,12,.1,.05],[205,440,22,8,.15,.06],[345,430,22,9,.12,.06],[372,540,18,10,.1,.05],[160,520,18,9,.14,.05],[60,640,9,16,.08,.04],[250,400,26,6,.1,.05],[300,395,26,5,.12,.05],[24,560,12,22,0,.03]],Gm=1.18,yd={machinery:{at:[2.9,.92,-9.7],yaw:.1,height:3.1},rollers:[{hide:!0},{at:[-2.7,1.1,-5.8],axis:[.12,1,.25],d:1.35}]},Hb=`
float fibreHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float fibreNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(fibreHash(i), fibreHash(i + vec3(1, 0, 0)), f.x), mix(fibreHash(i + vec3(0, 1, 0)), fibreHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(fibreHash(i + vec3(0, 0, 1)), fibreHash(i + vec3(1, 0, 1)), f.x), mix(fibreHash(i + vec3(0, 1, 1)), fibreHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
`,zb=`
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
`,kb=`
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
`,Vb=`
varying vec3 vN; varying vec3 vW;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Gb=`
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
`;function Wb(i){let e=new rs(1,4),t=e.attributes.position,n=new w,s=4+i()*2,r=5+i()*2;for(let o=0;o<t.count;o++){n.fromBufferAttribute(t,o);let a=1+.1*Math.sin(n.x*s+n.y*3.1)*Math.sin(n.y*r+n.z*3.7)+.035*Math.sin(n.z*9+n.x*7);n.multiplyScalar(a),t.setXYZ(o,n.x,n.y,n.z)}return e.computeVertexNormals(),e}function Xb(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.moveTo(32,2),e.lineTo(35,29),e.lineTo(62,32),e.lineTo(35,35),e.lineTo(32,62),e.lineTo(29,35),e.lineTo(2,32),e.lineTo(29,29),e.closePath(),e.fill();let n=new ui(i);return n.colorSpace=Tt,n}var Ym={radius:.3,half:.05,bright:[1,.78,.26],field:[.96,.6,.12],edge:[.95,.52,.08],metalness:.75,roughness:.26,glow:.3};function _d(i="high"){let e=Ym,t=i==="high",n=[[0,.03],[.188,.03],[.2,.038],[.214,.044],[.228,.038],[.237,.034],[.248,.047],[.266,.052],[.287,.047],[.299,.032]],s=[...n,...n.slice().reverse().map(([d,f])=>[d,-f])].map(([d,f])=>new ae(d,f));s.reverse();let r=new Wr(s,t?56:28).toNonIndexed();r.rotateX(Math.PI/2),qm(r,(d,f,m)=>{let x=Math.hypot(d,f);return Math.abs(m)<.034&&x>.29?e.edge:x<.196?e.field:e.bright});let o=[],a={depth:.004,bevelEnabled:!0,bevelThickness:.008,bevelSize:.007,bevelSegments:t?3:1,curveSegments:t?14:6},l=new ss;l.moveTo(0,.03),l.bezierCurveTo(.058,.03,.084,-.008,.084,-.042),l.bezierCurveTo(.084,-.076,.06,-.094,.036,-.09),l.bezierCurveTo(.016,-.087,.009,-.1,0,-.1),l.bezierCurveTo(-.009,-.1,-.016,-.087,-.036,-.09),l.bezierCurveTo(-.06,-.094,-.084,-.076,-.084,-.042),l.bezierCurveTo(-.084,-.008,-.058,.03,0,.03),o.push(new zs(l,a));for(let[d,f,m,x,g]of[[-.106,.04,.03,.04,.5],[-.039,.093,.031,.042,.14],[.039,.093,.031,.042,-.14],[.106,.04,.03,.04,-.5]]){let p=new ss;p.absellipse(0,0,m,x,0,Math.PI*2,!1,0);let v=new zs(p,a);v.rotateZ(g),v.translate(d,f,0),o.push(v)}let c=Lh(o.map(d=>(d.deleteAttribute("uv"),d.index?d.toNonIndexed():d)));c.translate(0,-.005,.03+a.bevelThickness-.002),qm(c,()=>e.bright);let u=c.clone();u.rotateY(Math.PI),r.deleteAttribute("uv");let h=Lh([r,c,u]);return h.computeBoundingSphere(),h}function qm(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3);for(let s=0;s<t.count;s++)n.set(e(t.getX(s),t.getY(s),t.getZ(s)),s*3);i.setAttribute("color",new ot(n,3))}function $m(i){let e=Ym,t=new pt({vertexColors:!0,metalness:e.metalness,roughness:e.roughness,envMap:i,envMapIntensity:1.35});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${e.glow.toFixed(3)} + vec3(1.0, 0.9, 0.55) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.35;`)},t.customProgramCacheKey=()=>"pawCoin",t}var yt=!!xt.round2,$t={hearts:5,hurtGuard:1,outOfHearts:1.4,blasts:3,blastTime:3,blastReach:13,turbos:3,turboTime:2.5,turboSpeed:1.45,coinH:.7,sockH:.88,gemH:.85,coinLines:[[1,4.4,5],[0,10.8,3],[1,16.8,2],[2,18.6,3],[1,23.4,5],[0,29.8,3]],coinStep:1,socks:[[1,9.6],[0,14],[2,21.8],[1,28.6],[0,33]],gems:[[1,15.6],[0,34.2]]},Ms={},jm=!!window.__BW_TEST__,Rd=!!window.__BW_SIDE__||/[?&]side(=|&|$)/.test(location.search),lc=!!window.__BW_TOUCHES__||/[?&]touches(=|&|$)/.test(location.search);Rd&&document.body.classList.add("side");var tt=i=>document.getElementById(i),ys=i=>new w(i[0],i[1],i[2]),qt=i=>new xe(i),un=tt("stage"),qb=tt("view"),Hi=new sl({canvas:qb,antialias:!1,powerPreference:"high-performance"});Hi.toneMapping=Xo;Hi.toneMappingExposure=1.05;var Bi=Math.min(window.devicePixelRatio||1,1.6);Hi.setPixelRatio(Bi);var Rt=new Fo,cn=new Bt(55,.5,.1,200),ni=new Bl(Hi);ni.addPass(new Hl(Rt,cn));var no=new Zr(new ae(256,512),.32,.45,.97);ni.addPass(no);var Jm=new $r(pm);ni.addPass(Jm);ni.addPass(new zl);Rt.add(new wl(16771583,7252223,1.1));var Id=new Gs(16773862,1.7);Id.position.set(-3,6,-4);Rt.add(Id);var Yb=Id.position.clone().normalize(),Qm=new Gs(13625599,1.3);Qm.position.set(2,7,12);Rt.add(Qm);var Cd={layout:"models/layout.json",castle:"models/castle.glb",drum:"models/drum.glb",mascot:"models/mascot.glb",roller:"models/roller.glb",gem:"models/gem.glb",sock:"models/sock.glb",machinery:"models/machinery.glb",tower:"models/tower.glb",gear:"models/gear.glb",pipe:"models/pipe.glb",crown:"models/crown.glb"},e0={};function $b(){let i=0,e=0;for(let n of Object.values(e0))i+=n.loaded,e+=n.total||n.loaded;let t=e>0?Math.round(i/e*100):0;tt("loadBar").style.width=t+"%",tt("loadPct").textContent=t+"%"}var Zb=new fs;async function Zm(i,e){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);let n=+t.headers.get("content-length")||0,s=t.body.getReader(),r=[],o=0;for(;;){let{done:c,value:u}=await s.read();if(c)break;r.push(u),o+=u.length,e0[e]={loaded:o,total:Math.max(n,o)},$b()}let a=new Uint8Array(o),l=0;for(let c of r)a.set(c,l),l+=c.length;return a}var Kb=window.__BW_MODEL_FORMAT__==="json";async function jb(i){let e;try{if(Kb)throw new Error("json");e=await Zm(Cd[i],i)}catch{let t=JSON.parse(new TextDecoder().decode(await Zm(Cd[i]+".json",i))),n=atob(t.data);e=new Uint8Array(n.length);for(let s=0;s<n.length;s++)e[s]=n.charCodeAt(s)}return Zb.parseAsync(e.buffer,"")}var Ne,wt,He={P:new w,R:new w,U:new w,T:new w},Z={phase:"loading",time:0,coins:1280,gems:36,socks:0,sound:!0,collected:{coins:0,gems:0},laps:0};yt&&Object.assign(Z,{hearts:$t.hearts,blasts:$t.blasts,turbos:$t.turbos,paused:!1,blastT:0,turboT:0,guardT:0,outT:-1,knocks:0,restarts:0});var ze={};function Jb(i,e={}){let t=new Pt({map:i.map||null,color:16777215,vertexColors:!!e.vertexColors,side:ft}),n=e.saturation??1.15,s=e.brightness??1,r=e.glow??0,o=e.haze,a=e.shade;t.onBeforeCompile=c=>{a&&(c.vertexShader=c.vertexShader.replace("void main() {",`varying vec3 vShadeN; varying vec3 vShadeP;
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
`+e.afterColor)),(e.grade||e.afterColor)&&(c.fragmentShader=c.fragmentShader.replace("void main() {",`${Qp}
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
      ${o?`diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${o[3].map(u=>u.toFixed(3)).join(", ")}), ${o[0].toFixed(3)} * smoothstep(${o[1].toFixed(2)}, ${o[2].toFixed(2)}, vHazeDepth));`:""}`)};let l="baked:"+JSON.stringify([n,s,r,e.lift??0,o||0,a||0,e.grade||"",e.afterColor||""]);return t.customProgramCacheKey=()=>l,t}var Qs,er,je,ht,vt,aa,tr,Jl=null,Ql=[],ec=[],tc=[],la=[],t0=[],nc=new Ae,Qb=new Ae,ic=new At;function e1(){let i=new Be(new ln(170,32,16),new rt({vertexShader:lm,fragmentShader:cm,side:fn,depthWrite:!1,uniforms:{uTop:{value:qt(12759295)},uMid:{value:qt(15128319)},uHorizon:{value:qt(16445183)},uBottom:{value:qt(9420031)}}}));i.renderOrder=-10,Rt.add(i);let e=new Fo,t=i.clone();t.material=i.material.clone(),t.material.uniforms={uTop:{value:qt(7299008)},uMid:{value:qt(10127064)},uHorizon:{value:qt(14072048)},uBottom:{value:qt(2306159)}},e.add(t);for(let[s,r,o]of[[[0,60,10],[90,50],[3.2,3,3.2]],[[-70,25,20],[40,60],[2.6,1.6,2.4]],[[70,20,10],[40,60],[1.4,2.4,3]],[[0,18,-80],[70,30],[2,1.9,2.2]],[[0,10,85],[60,25],[1.6,2,2.8]]]){let a=new Be(new Vn(...r),new Pt({color:new xe(...o),side:ft}));a.position.set(...s),a.lookAt(0,0,0),e.add(a)}let n=new zr(Hi);ze.env=n.fromScene(e,.02,.1,400).texture,ze.gold=new pt({color:16760645,metalness:1,roughness:.22,envMap:ze.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.35})}function cc(i){let e=0;return i.traverse(t=>{if(!t.isMesh)return;t.geometry.attributes.normal||(t.geometry.computeVertexNormals(),e+=1e6);let n=t.geometry.attributes.normal,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){let o=n.getX(r),a=n.getY(r),l=n.getZ(r),c=Math.hypot(o,a,l);c>1e-4?(o/=c,a/=c,l/=c):(o=0,a=1,l=0,e++),s[r*3]=o,s[r*3+1]=a,s[r*3+2]=l}t.geometry.setAttribute("normal",new ot(s,3))}),e}function t1(i,e){let t=new Ze;return t.matrixAutoUpdate=!1,t.matrix.fromArray(e),t.add(i),Rt.add(t),t}function Ld(i,e,t){i.traverse(n=>{n.isMesh&&(n.material=Jb(n.material,{...e,...t?t(n):{},vertexColors:!!n.geometry.attributes.color}),n.frustumCulled=!0)})}function n1(){let i=[];for(let r=0;r<=10;r++)i.push(-30+(30-3.2)*Math.pow(r/10,.55));for(let r=1;r<40;r++)i.push(-3.2+6.4*(r/40));for(let r=10;r>=0;r--)i.push(30-(30-3.2)*Math.pow(r/10,.55));let e=(r,o,a,l)=>{let c=Math.ceil((a-o)/l)+1,u=c*r.length,h=new Float32Array(u*3),d=new Float32Array(u*2),f=new Float32Array(u*3),m=new Float32Array(u*3),x=new Float32Array(u*3),g=new Float32Array(u*3),p=[];for(let _=0;_<c;_++){let y=o+(a-o)*_/(c-1);wt.frame(y,He);for(let U=0;U<r.length;U++){let T=_*r.length+U,R=r[U];d[T*2]=R,d[T*2+1]=y,He.P.toArray(f,T*3),He.R.toArray(m,T*3),He.U.toArray(x,T*3),He.T.toArray(g,T*3),h[T*3]=He.P.x+He.R.x*R,h[T*3+1]=He.P.y+He.R.y*R,h[T*3+2]=He.P.z+He.R.z*R}}for(let _=0;_<c-1;_++)for(let y=0;y<r.length-1;y++){let U=_*r.length+y,T=U+r.length;p.push(U,T,U+1,T,T+1,U+1)}let v=new st;v.setAttribute("position",new ot(h,3)),v.setAttribute("aTrack",new ot(d,2));for(let[_,y]of[["aP",f],["aR",m],["aU",x],["aT",g]])v.setAttribute(_,new ot(y,3));return v.setIndex(p),v.computeBoundingSphere(),v.boundingSphere.radius+=3,v},t=[];for(let r=0;r<Ys;r++)t.push(new mt(0,0,-99,0));er={uTime:{value:0},uTunnel:{value:new mt(Ne.tunnelStart,Ne.tunnelEnd,Ne.tunnelRadius,Ne.axisHeight)},uRipples:{value:t},uPlayer:{value:new w},uPlayerMove:{value:new w},uFlow:{value:9},uSlideHalf:{value:Wt.half},uDeep:{value:qt(407256)},uShallow:{value:qt(2071551)},uTurq:{value:qt(4123384)},uGlow:{value:qt(10154751)},uSky:{value:qt(11126015)},uPink:{value:qt(16751584)},uGold:{value:qt(16763994)},uRingA:{value:qt(16767091)},uRingB:{value:qt(9234175)},uFog:{value:qt(13421823)},uSunDir:{value:Yb},uRings:{value:new w(Ne.tunnelStart+.25,Ne.segmentLength-Math.max(.02,Ne.segmentLength*.005),4)},uOpen:{value:0}};let n=new rt({vertexShader:sm,fragmentShader:rm,uniforms:er}),s=[];for(let r=0;r<=28;r++)s.push(-2.1+4.2*(r/28));Qs=new Ze,Qs.add(new Be(e(i,Ne.startZ-30,Ne.tunnelStart+2.5,.3),n)),Qs.add(new Be(e(s,Ne.tunnelStart-.5,Ne.tunnelEnd+6,.25),n)),Rt.add(Qs)}function i1(){let i=new pt({color:3107839,metalness:.2,roughness:.12,envMap:ze.env,envMapIntensity:1.6,emissive:666266,emissiveIntensity:.5}),e=new pt({color:15128831,metalness:.15,roughness:.32,envMap:ze.env,envMapIntensity:1,side:ft}),t=new pt({color:15903035,metalness:1,roughness:.3,envMap:ze.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),n=Ne.startZ-24,s=-.6,r=.62,o=Math.floor((s-n)/r)+1,a=new nn(new di(.22,.26,.5,2,.06),t,o*2),l=new nn(new ln(.055,12,8),i,o*2),c=[[-.06,-.06],[.04,.1],[.14,.2],[.26,.2],[.34,.08],[.36,-.8]],u=0;for(let h of[-1,1]){let d=[],f=[],m=[],x=0;for(let v=n;v<=s+1e-6;v+=.25,x++){let _=Rn(Ne,h*Wt.half,v);for(let[y,U]of c)d.push(h*(Wt.half+y),_+U,v);m.push(new w(h*(Wt.half+.2),_+.26,v))}let g=c.length;for(let v=0;v<x-1;v++)for(let _=0;_<g-1;_++){let y=v*g+_,U=y+g;f.push(y,U,y+1,U,U+1,y+1)}let p=new st;p.setAttribute("position",new Ke(d,3)),p.setIndex(f),p.computeVertexNormals(),Rt.add(new Be(p,e)),Rt.add(new Be(new Vs(new is(m),m.length*2,.1,14),ze.gold));for(let v=0;v<o;v++,u++){let _=n+v*r,y=Rn(Ne,h*Wt.half,_),U=(Rn(Ne,h*Wt.half,_+.2)-Rn(Ne,h*Wt.half,_-.2))/.4;ic.setFromAxisAngle(new w(1,0,0),-Math.atan(U)),a.setMatrixAt(u,nc.compose(new w(h*(Wt.half+.36),y+.1,_),ic,new w(1,1,1))),l.setMatrixAt(u,nc.makeTranslation(h*(Wt.half+.48),y+.1,_))}}Rt.add(a,l)}function n0(i,e,t,n,s=12,r=26){let a=[0],l=new w;for(let p=1;p<=200;p++){let v=p/200,_=new w(0,-e*v*v,i*v);a.push(a[p-1]+_.distanceTo(l)),l=_}let c=a[200],u=[],h=[],d=[],f=[],m=[],x=0;for(let p=0;p<=r;p++){let v=p/r,_=v*c;for(;x<199&&a[x+1]<_;)x++;let y=(x+Math.min(1,Math.max(0,(_-a[x])/Math.max(1e-6,a[x+1]-a[x]))))/200,U=new w(0,-e*y*y,i*y),T=new w(0,-2*e*y,i).normalize(),R=new w(0,T.z,-T.y),I=t+(n-t)*v,E=I*.5,b=I*.35;for(let S=0;S<=s;S++){let C=Math.PI*S/s,L=-Math.cos(C),F=Math.sin(C),N=U.clone().add(new w(L*E,0,0)).addScaledVector(R,F*b),D=new w(L/E,0,0).addScaledVector(R,F/b).normalize();u.push(N.x,N.y,N.z),h.push(D.x,D.y,D.z),d.push(S/s,_),f.push(v)}}for(let p=0;p<r;p++)for(let v=0;v<s;v++){let _=p*(s+1)+v,y=_+s+1;m.push(_,_+1,y,y,_+1,y+1)}let g=new st;return g.setAttribute("position",new Ke(u,3)),g.setAttribute("normal",new Ke(h,3)),g.setAttribute("uv",new Ke(d,2)),g.setAttribute("progress",new Ke(f,1)),g.setIndex(m),g}function s1(){let i={uTime:{value:0},uLipSpeed:{value:1.2},uStreakLen:{value:.35},uDeep:{value:qt(21247)},uBright:{value:qt(4250623)},uSky:{value:qt(14268671)},uPink:{value:qt(16751078)}};t0.push(i);let e=new Ze;Rt.add(e),ze.falls=e;let t=new rt({vertexShader:om,fragmentShader:am,uniforms:i,transparent:!0,depthWrite:!1,side:ft});ze.fallMat=t;let n=(r,o,a,l)=>{let c=o.clone().sub(r),u=r.y-o.y;c.y=0;let h=new Be(n0(Math.max(.02,c.length()),Math.max(.05,u),a,l),t);h.position.copy(r),h.lookAt(r.clone().add(c.lengthSq()>1e-6?c.normalize():new w(0,0,-1))),h.renderOrder=2,e.add(h)},s=(r,o,a)=>{let l=o.clone().sub(r),c=l.length(),u=new Be(new mn(a,a,c,16),ze.gold);u.position.copy(r).add(o).multiplyScalar(.5),u.quaternion.setFromUnitVectors(new w(0,1,0),l.normalize()),e.add(u)};for(let r of Ne.waterfalls){let o=ys(r.lip),a=ys(r.basin),l=ys(r.overflow),c=ys(r.landing),u=ys(r.tower),h=r.width,d=h*.42;n(o,a.clone().add(new w(0,-.02,0)),h*.7,h*.85),n(l,c,h*.9,h*1.15),s(o.clone().add(new w(0,d*.45,0)),u.clone().add(new w(0,d*.45,.3)),d);let f=new Be(new mn(r.basinRadius,r.basinRadius*.8,.18,24),ze.gold);f.position.copy(a).add(new w(0,-.1,0)),e.add(f);let m=new Be(new jt(r.basinRadius,.07,8,32),ze.gold);m.position.copy(a),m.rotation.x=Math.PI/2,e.add(m),s(a.clone().add(new w(0,-.12,0)),ys(r.basinTower).add(new w(0,-.12,.3)),.08),vt.addSource({pos:c.clone().setY(-.6),rate:22,kind:1,spread:h*.5,up:1.6,size:.55}),vt.addSource({pos:c.clone().setY(-.6),rate:30,kind:0,spread:h*.4,up:2.4,size:.12}),vt.addSource({pos:a.clone(),rate:10,kind:1,spread:h*.3,up:.9,size:.35})}}function r1(){let i=new jt(Ne.tunnelRadius*.965,.075,8,72),e=[],t=Ne.segmentLength-Math.max(.02,Ne.segmentLength*.005);for(let s=0;s<3;s++)e.push(Ne.tunnelStart+s*t+.25);e.push(Ne.tunnelEnd-.25),e.forEach((s,r)=>{let o=new Be(i,new Pt({color:r%2===0?new xe(2.6,2,.95):new xe(1.4,2.2,2.9)}));o.matrixAutoUpdate=!1,wt.mapMatrix(new Ae().makeTranslation(0,0+1.5,s),o.matrix),o.userData.pulse=r*.9,o.userData.base=o.material.color.clone(),Rt.add(o),ze.rings=ze.rings||[],ze.rings.push(o)});let n=(s,r,o,a)=>{let l=new Be(new Vn(r,r),o);return l.matrixAutoUpdate=!1,l.renderOrder=a,wt.mapMatrix(new Ae().makeTranslation(0,0+1.5,Ne.tunnelEnd+s).multiply(new Ae().makeRotationY(Math.PI)),l.matrix),Rt.add(l),l};ze.exitLight=[n(4.5,16,new Pt({map:o1(),toneMapped:!1}),0)],ze.exitLight[1]=n(1.5,7,new Pt({map:i0(),color:new xe(.9,1.1,1.4),transparent:!0,blending:rn,depthWrite:!1}),3)}function o1(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=e.createRadialGradient(256,256,0,256,256,256);t.addColorStop(0,"#ffffff"),t.addColorStop(.22,"#f4fbff"),t.addColorStop(.45,"#bfe9ff"),t.addColorStop(.7,"#d9c4ff"),t.addColorStop(1,"#ffc6ec"),e.fillStyle=t,e.fillRect(0,0,512,512),e.globalCompositeOperation="lighter";for(let s=0;s<18;s++){let r=s/18*Math.PI*2+s%2*.09,o=.05+s%3*.025,a=e.createRadialGradient(256,256,30,256,256,256);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(256,256),e.arc(256,256,256,r-o,r+o),e.closePath(),e.fill()}let n=new ui(i);return n.colorSpace=Tt,n}function i0(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new ui(i);return n.colorSpace=Tt,n}var a1=[{at:[2.55,2.25,-3.4],axis:[-.3,.05,-.95],d:1.8,spin:110},{at:[-2.45,1.3,-5],axis:[.3,.05,-.95],d:1.8,spin:-95}];function l1(i){Ld(i.scene,{saturation:1.25,brightness:1.1,glow:.9,lift:.08,haze:[.45,6,32,[.78,.86,1]],shade:[.88,.22,.25]}),i.scene.updateMatrixWorld(!0);let e=[];i.scene.traverse(o=>{o.isMesh&&e.push(o)});let t=new Ae,n=new Ae,s=new w,r=new w;ze.drumMeshes=[];for(let o of Ne.drumSegments){t.fromArray(o);for(let a of e){n.multiplyMatrices(t,a.matrixWorld);let l=a.geometry,c=l.attributes.position,u=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)s.fromBufferAttribute(c,f).applyMatrix4(n),wt.map(s.x,s.y,s.z,r),u[f*3]=r.x,u[f*3+1]=r.y,u[f*3+2]=r.z;let h=new st;h.setAttribute("position",new ot(u,3));for(let f of["uv","color"])l.attributes[f]&&h.setAttribute(f,l.attributes[f]);h.setIndex(l.index),h.computeVertexNormals(),h.computeBoundingSphere();let d=new Be(h,a.material);Rt.add(d),ze.drumMeshes.push(d)}}}function c1(i){let e=i.scene;cc(e),Ld(e,{saturation:1.25,brightness:1.08,shade:[.8,.38,.45]},r=>{if(!/Bristles/.test(r.material.name))return{};let o=r.geometry.attributes.position,a=0;for(let l=0;l<o.count;l++)a=Math.max(a,Math.hypot(o.getX(l),o.getZ(l)));return{afterColor:tm(a)}});for(let r of Ne.rollers){if(r.centre[2]<Ne.tunnelStart)continue;let o=new Ze;o.matrixAutoUpdate=!1,o.add(e.clone()),Rt.add(o),yt&&(o.visible=!1);let a=ys(r.centre);la.push({g:o,m0:wt.mapMatrix(new Ae().fromArray(r.matrix)),centre:wt.map(a.x,a.y,a.z),axis:wt.dir(r.axis[0],r.axis[1],r.axis[2],a.z).normalize(),speed:Ye.degToRad(r.spin),angle:0})}let t=new Xt().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w);for(let r of a1){let o=r.d/Math.max(n.x,n.z),a=new w(...r.axis).normalize(),l=wt.map(r.at[0],r.at[1],r.at[2]),c=new Ae().compose(l,new At().setFromUnitVectors(new w(0,1,0),a),new w(o,o,o)).multiply(new Ae().makeTranslation(-s.x,-s.y,-s.z)),u=new Ze;u.matrixAutoUpdate=!1,u.add(e.clone()),Rt.add(u),la.push({g:u,m0:c,centre:l,axis:a,speed:Ye.degToRad(r.spin),angle:Math.random()*6})}}var ra={at:[2.7,1.05,-8],yaw:.08,height:2.8};function u1(i){let e=i.scene;e.traverse(o=>{if(!o.isMesh)return;let a=o.material;o.material=new pt({map:a.map,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,normalMap:a.normalMap,metalness:1,roughness:1,envMap:ze.env,envMapIntensity:1.05,emissive:16777215,emissiveMap:a.map,emissiveIntensity:.2,side:ft})});let t=new Xt().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w);ze.sideMachineryModel={model:e,size:n,centre:s};let r=new Ze;r.name="sideMachinery",r.add(e),Rt.add(r),ze.sideMachinery=r,Dd()}function Dd(){let{model:i,size:e,centre:t}=ze.sideMachineryModel,n=ze.sideMachinery,s=ra.height/e.y;i.scale.setScalar(s),i.position.copy(t).multiplyScalar(-s),n.position.set(...ra.at),n.rotation.y=Math.PI+ra.yaw,n.updateMatrixWorld(!0);let r=1/0,o=new w;i.traverse(a=>{if(!a.isMesh)return;let l=a.geometry.attributes.position;for(let c=0;c<l.count;c+=7)o.fromBufferAttribute(l,c).applyMatrix4(a.matrixWorld),o.y<1.4&&(r=Math.min(r,Math.abs(o.x)))}),Z.machineryInnerX=+r.toFixed(2)}function h1(){let i=new Vn(2,2),e=new Fn;e.index=i.index,e.attributes.position=i.attributes.position,e.attributes.uv=i.attributes.uv;let t=(r,o,a,l)=>[...wt.map(r,o,a).toArray(),l],n=Ne.bubbles.map(r=>t(r.pos[0],r.pos[1],r.pos[2],r.size*.5));for(let r of[[.72,.42,-17.9,.24],[-.82,.3,-17.6,.3],[-1.2,1.05,-16.4,.2],[-2.05,1.55,-13.6,.55],[-1.75,.55,-14.4,.3],[1.9,1.75,-12.6,.24],[-2.4,2.6,-10.2,.4],[1.4,.15,-15.6,.22]])n.push(t(...r));for(let r=0;r<30;r++){let o=Ne.startZ+2+Math.random()*(Ne.tunnelEnd-Ne.startZ-2),a=o>Ne.tunnelStart,l=(Math.random()*2-1)*(a?1.6:4.5),c=(a?1:.8)+Math.random()*2.2,u=.06+Math.random()*.2;yt&&a&&(l=Math.sign(l||1)*(1.35+Math.abs(l)*.3),c=2.1+(c-1)*.45,u*=.6),n.push(t(l,c,o,u))}e.setAttribute("inst",new zt(new Float32Array(n.flat()),4)),e.setAttribute("phase",new zt(new Float32Array(n.map(()=>Math.random()*6.28)),1)),e.instanceCount=n.length,ze.bubbleU={uTime:{value:0}};let s=new Be(e,new rt({vertexShader:um,fragmentShader:hm,uniforms:ze.bubbleU,transparent:!0,depthWrite:!1,blending:En,blendSrc:An,blendDst:on}));s.frustumCulled=!1,s.renderOrder=5,Rt.add(s),ze.bubbles=s}function d1(i,e){e.colorSpace=Tt;let t=new pt({map:e,color:16777215,metalness:.6,roughness:.3,envMap:ze.env,emissive:9067008,emissiveMap:e,emissiveIntensity:1.25}),n=new pt({color:16761418,metalness:1,roughness:.25,envMap:ze.env,envMapIntensity:1.3,emissive:8014336,emissiveIntensity:.8}),s=new mn(.3,.3,.08,36);s.rotateX(Math.PI/2);let r=[n,t,t],o=yt?ta(Js(39484),()=>({hi:_d("high"),lo:_d("low"),mat:$m(ze.env)})):null,a=(v,_)=>{let y=v.z;v=wt.map(v.x,v.y,v.z);let U=o?ta(Js(39485+Ql.length),()=>{let T=new rl;return T.addLevel(new Be(o.hi,o.mat),0),T.addLevel(new Be(o.lo,o.mat),9),T}):new Be(s,r);U.position.copy(v),Rt.add(U),Ql.push({obj:U,home:v.clone(),kind:"coin",live:!0,pop:-1,phase:Math.random()*6,compose:_,u:y,q0:yt?wt.quaternion(y,new At):null})},l=v=>ys(v).multiply(new w(.7/.85,1,1)),c=Ne.tunnelStart,u=Ne.screen4Z+11,h=(v,_,y)=>new w(v,Rn(Ne,v,y)+_,y);if(yt){for(let v of Ne.coins3)v[2]<c&&a(l(v),!0);for(let[v,_,y]of $t.coinLines)for(let U=0;U<y;U++)a(h(Cn(v),$t.coinH,_+U*$t.coinStep))}else{for(let v of Ne.coins3)a(l(v),!0);for(let v of Ne.coins4)a(l(v),!0);for(let v=0;v<6;v++)a(h(Cn(1),.65,c+2.5+v*1.6));for(let v=0;v<5;v++)a(h(Cn(2),.65+Math.sin(v/4*Math.PI)*.9,c+4+v*1.5));for(let v=0;v<5;v++)a(h(Cn(0),.65,u+v*1.3))}let d=i.scene;cc(d);let f=new Xt().setFromObject(d),m=f.getSize(new w),x=f.getCenter(new w),g=.42/m.y;d.traverse(v=>{if(!v.isMesh)return;let _=v.material.map;v.material=new pt({map:_,metalness:0,roughness:.12,envMap:ze.env,envMapIntensity:1.6,emissive:16777215,emissiveMap:_,emissiveIntensity:.35,side:ft})}),ze.gemMaterials=[],d.traverse(v=>{v.isMesh&&ze.gemMaterials.push(v.material)});let p=(v,_)=>{let y=v.z;v=wt.map(v.x,v.y,v.z);let U=new Ze,T=d.clone(),R=g*(yt?1.2:1);T.scale.setScalar(R),T.position.copy(x).multiplyScalar(-R),U.add(T),U.position.copy(v),Rt.add(U),ec.push({obj:U,home:v.clone(),kind:"gem",live:!0,pop:-1,phase:Math.random()*6,spin:Math.random()*6,compose:_,u:y})};if(yt){for(let[v,_]of $t.gems)p(h(Cn(v),$t.gemH,_));return}p(l(Ne.gem4),!0),p(h(Cn(1),1.7,Ne.tunnelEnd-1.5)),p(h(Cn(0),1.35,c+10.5)),p(h(Cn(1),.7,c+12)),p(h(Cn(2),.7,u+1.5))}var $l={};function f1(i,e){if(!$l[i]){let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);i==="sock"?(r.addColorStop(0,"rgba(255,248,236,0.95)"),r.addColorStop(.42,"rgba(255,190,232,0.62)"),r.addColorStop(.7,"rgba(255,214,120,0.42)"),r.addColorStop(.78,"rgba(255,170,220,0.18)"),r.addColorStop(1,"rgba(255,160,220,0)")):(r.addColorStop(0,"rgba(255,170,250,0.8)"),r.addColorStop(.5,"rgba(210,90,255,0.35)"),r.addColorStop(1,"rgba(160,60,255,0)")),s.fillStyle=r,s.fillRect(0,0,128,128),$l[i]=new ui(n),$l[i].colorSpace=Tt}let t=new ns(new Pi({map:$l[i],transparent:!0,depthWrite:!1,blending:rn,opacity:i==="sock"?.7:.6}));return t.scale.setScalar(e),t.position.z=.32,t.renderOrder=4,t.name="r2Halo",t}function p1(i){let e=i.scene;e.traverse(l=>{l.isMesh&&(l.material=new Ml({map:l.material.map,emissive:16777215,emissiveMap:l.material.map,emissiveIntensity:.32}))});let t=new Xt().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w),r=(yt?.74:.62)/n.y,o=Ne.tunnelStart,a=yt?$t.socks.map(([l,c])=>[l,$t.sockH,c]):[[1,.8,o+7.5],[0,.95,o+11.8],[2,1,o+15.6],[1,.85,o+21],[0,.9,o+26.4]];yt&&e.traverse(l=>{l.isMesh&&(l.material.emissiveIntensity=.42)});for(let[l,c,u]of a){let h=Cn(l),d=new Ze,f=new Ze,m=e.clone();m.scale.setScalar(r),m.position.copy(s).multiplyScalar(-r),f.add(m),f.rotation.y=Math.PI,d.add(f),wt.map(h,Rn(Ne,h,u)+c,u,d.position),wt.quaternion(u,d.quaternion),yt&&ta(Js(20672+tc.length),()=>d.add(f1("sock",1.25))),Rt.add(d),tc.push({obj:d,turn:f,home:d.position.clone(),kind:"sock",live:!0,pop:-1,phase:Math.random()*6,u})}}var sc=class{constructor(e){this.n=e,this.next=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.size0=new Float32Array(e),this.kind=new Float32Array(e),this.grav=new Float32Array(e),this.sizeA=new Float32Array(e),this.alphaA=new Float32Array(e),this.fl=new Float32Array(e*6);let t=new st;this.posAttr=new ot(this.p,3).setUsage(hi),this.sizeAttr=new ot(this.sizeA,1).setUsage(hi),this.alphaAttr=new ot(this.alphaA,1).setUsage(hi),this.kindAttr=new ot(this.kind,1).setUsage(hi),t.setAttribute("position",this.posAttr),t.setAttribute("size",this.sizeAttr),t.setAttribute("alpha",this.alphaAttr),t.setAttribute("kind",this.kindAttr),this.u={uScale:{value:400}},this.points=new Bs(t,new rt({vertexShader:dm,fragmentShader:fm,uniforms:this.u,transparent:!0,depthWrite:!1,blending:En,blendSrc:An,blendDst:on})),this.points.frustumCulled=!1,this.points.renderOrder=6,this.sources=[],Rt.add(this.points)}emit(e,t,n,s,r,o,a,l,c,u=1,h=null){let d=this.next;this.next=(this.next+1)%this.n,this.p.set([e,t,n],d*3),this.v.set([s,r,o],d*3),this.life[d]=l,this.max[d]=l,this.size0[d]=a,this.kind[d]=c,this.grav[d]=u,h?this.fl.set(h,d*6):this.fl.fill(0,d*6,d*6+6)}emitT(e,t,n,s,r,o,a,l,c,u=1){wt.frame(n,He);let h=Rn(Ne,e,n),d=He.P.x+He.R.x*e+He.U.x*t,f=He.P.y+He.R.y*e+He.U.y*t,m=He.P.z+He.R.z*e+He.U.z*t;this.emit(d,f,m,He.R.x*s+He.U.x*r+He.T.x*o,He.R.y*s+He.U.y*r+He.T.y*o,He.R.z*s+He.U.z*r+He.T.z*o,a,l,c,u,[He.P.x+He.R.x*e+He.U.x*h,He.P.y+He.R.y*e+He.U.y*h,He.P.z+He.R.z*e+He.U.z*h,He.U.x,He.U.y,He.U.z])}burstT(e,t,n,s,r,o={}){for(let a=0;a<s;a++){let l=Math.random()*Math.PI*2,c=(.4+Math.random())*r,u=o.dir||0;this.emitT(e+Math.cos(l)*.25,t,n+Math.sin(l)*.25,Math.cos(l)*c*.9+u*r*.9,(1.2+Math.random()*1.6)*r*(o.up??1),Math.sin(l)*c*.9+(o.vz||0),(o.size||.11)*(.6+Math.random()*.8),.5+Math.random()*.5,o.kind??0,o.grav??1)}}sparkle(e,t){for(let n=0;n<t;n++){let s=new w().randomDirection().multiplyScalar(1+Math.random()*2.5);this.emit(e.x,e.y,e.z,s.x,s.y+.6,s.z,.16+Math.random()*.2,.45+Math.random()*.45,2,-.1)}}addSource(e){e.carry=0,this.sources.push(e)}update(e){for(let t of this.sources)for(t.carry+=t.rate*e;t.carry>=1;t.carry--){let n=Math.random()*Math.PI*2,s=Math.random()*t.spread;this.emit(t.pos.x+Math.cos(n)*s,t.pos.y+.05,t.pos.z+Math.sin(n)*s,Math.cos(n)*.6,t.up*(.5+Math.random()*.7),Math.sin(n)*.6,t.size*(.6+Math.random()*.8),.5+Math.random()*.6,t.kind,t.kind===1?.15:1,[t.pos.x,t.pos.y,t.pos.z,0,1,0])}for(let t=0;t<this.n;t++){if(this.life[t]<=0){this.alphaA[t]=0,this.sizeA[t]=0;continue}this.life[t]-=e;let n=t*3;this.v[n+1]-=9.81*this.grav[t]*e,this.kind[t]===1&&(this.v[n]*=1-e*2,this.v[n+2]*=1-e*2,this.v[n+1]*=1-e*3),this.p[n]+=this.v[n]*e,this.p[n+1]+=this.v[n+1]*e,this.p[n+2]+=this.v[n+2]*e;let s=1-this.life[t]/this.max[t];this.alphaA[t]=Math.min(1,s*8)*(1-s*s),this.sizeA[t]=this.size0[t]*(this.kind[t]===1?.7+s*1.2:this.kind[t]===2?Math.sin(Math.min(1,s*1.4)*Math.PI):1);let r=t*6,o=this.fl[r+3],a=this.fl[r+4],l=this.fl[r+5];this.kind[t]===0&&(o!==0||a!==0||l!==0)&&(this.p[n]-this.fl[r])*o+(this.p[n+1]-this.fl[r+1])*a+(this.p[n+2]-this.fl[r+2])*l<-.05&&this.v[n]*o+this.v[n+1]*a+this.v[n+2]*l<0&&(this.life[t]=0)}this.posAttr.needsUpdate=this.sizeAttr.needsUpdate=this.alphaAttr.needsUpdate=this.kindAttr.needsUpdate=!0}},Md=0;function eo(i,e,t){er.uRipples.value[Md].set(i,e,Z.time,t),Md=(Md+1)%Ys}var m1=1.04;function g1(i){let e=i.scene;Z.repairedNormals=cc(e);let t=new Xt().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w),r=m1/n.x;e.position.copy(s).multiplyScalar(-r),e.scale.setScalar(r),ze.fur={uCentre:{value:new w},uUp:{value:new w(0,1,0)},uRadius:{value:n.y*r*.5},uKey:{value:new w(.35,.85,-.42).normalize()},uTime:{value:0},uSky:{value:new xe(1,.86,1)},uGround:{value:new xe(.55,.42,.95)},uRim:{value:new xe(1,.55,.88)},uTip:{value:new xe(1,.8,.96)},uSpike:{value:0}},e.traverse(c=>{c.isMesh&&(c.material=new rt({uniforms:{map:{value:c.material.map},...ze.fur},vertexShader:mm,fragmentShader:gm,side:ft}))});let o=new Ze;o.add(e);let a=new Ze;a.add(o);let l=new Ze;l.add(a),Rt.add(l),je={root:l,tilt:a,squash:o,height:n.y*r,lane:1,x:0,xv:0,z:Ne.startZ,y:0,speed:0,air:!1,vy:0,yAbs:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0,look:0,lookT:2.5,lastSlope:0,downhill:0,wakeCarry:0,foamCarry:0,bobRipple:0}}function Ud(){let i=je;Object.assign(i,{lane:1,x:0,xv:0,z:Ne.startZ,speed:0,air:!1,vy:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0}),i.yAbs=gs(Ne,0,Ne.startZ,Z.time)+.34;for(let e of[...Ql,...ec,...tc])e.live=!0,e.pop=-1,e.obj.visible=!0,e.obj.scale.setScalar(1),e.obj.position.copy(e.home);Z.socks=0,Z.phase!=="loading"&&nr(),It&&(It.n=0),ht.snap=!0}function ca(i){if(Z.phase!=="running")return;let e=Math.max(0,Math.min(2,je.lane+i));if(e===je.lane){je.sqV+=2;return}je.lane=e;let t=je;vt.burstT(t.x,gs(Ne,t.x,t.z,Z.time)+.05,t.z,16,1,{dir:Cn(e)>t.x?1:-1,vz:t.speed*.5}),eo(t.x,t.z,1),Z.lastGesture={t:Z.time,lane:e},Yn("swish")}function Nd(){if(Z.phase!=="running"||je.air)return;je.air=!0,je.vy=6.2,je.flip=0,je.sqV+=6;let i=je;vt.burstT(i.x,i.yAbs-.34+.05,i.z,20,1.1,{vz:i.speed*.4}),eo(i.x,i.z,1.2),Yn("splash")}function Fd(){Z.phase==="running"&&(je.spinV=Math.PI*2/.5,je.spinLeft=Math.PI*2,Yn("swish"))}function v1(i){if(Z.phase!=="running")return!1;let e=je;if(yt){if(Z.turboT>0||Z.blastT>0||Z.guardT>0||Z.outT>=0)return vt.sparkle(e.root.position.clone().add(new w(i*.5,.4,0)),14),Yn("swish"),!1;Z.hearts=Math.max(0,Z.hearts-1),Z.knocks++,Z.guardT=$t.hurtGuard,nr(),ua("heartPill"),_1(),Z.hearts===0&&(Z.outT=0,tt("r2Toast").classList.add("show"))}e.lane=1,e.speed*=.55,e.sqV-=12;let t=gs(Ne,e.x,e.z,Z.time);return vt.burstT(e.x,t+.1,e.z,40,1.6,{dir:-i,vz:e.speed*.3}),vt.burstT(e.x,t+.05,e.z,8,.9,{kind:1,size:.24,grav:.15,up:.6}),eo(e.x,e.z,1.6),Yn("splash"),Z.bumps=(Z.bumps||0)+1,!0}function x1(i){let e=je,t=Z.time,n=Z.phase==="running",s=Vl(Ne,e.x,e.z),r=s+Math.tan(wt.pitch(e.z)),o=n?7*(1+Ye.clamp(-r*1.6,-.22,.4))*(yt&&Z.turboT>0?$t.turboSpeed:1):0;e.speed+=(o-e.speed)*Math.min(1,i*(n?2.2:4)),e.z+=e.speed*i;{let f=11.11111111111111,m=f*i,x=1/(1+m+.48*m*m+.235*m*m*m),g=Cn(e.lane),p=e.x-g,v=(e.xv+f*p)*i;e.xv=(e.xv-f*v)*x,e.x=g+(p+v)*x}let a=gs(Ne,e.x,e.z,t),l=Math.sin(t*1.7*Math.PI*2)*.05,c=a+.34+l;e.air?(e.vy-=17*i,e.yAbs+=e.vy*i,e.flip=Math.min(Math.PI*2,e.flip+i*(Math.PI*2)/.62),e.yAbs<=c&&e.vy<0&&(e.air=!1,e.flip=0,e.sqV-=9+Math.min(8,-e.vy),vt.burstT(e.x,a+.05,e.z,34,1.4,{vz:e.speed*.5}),vt.burstT(e.x,a+.05,e.z,6,.8,{kind:1,size:.22,grav:.15,up:.5}),eo(e.x,e.z,1.6),Yn("splash"))):e.yAbs=c,e.downhill+=(Ye.clamp(-r*4,0,1)-e.downhill)*Math.min(1,i*4);let u=Math.max(0,r-e.lastSlope)/Math.max(i,.001);if(n&&!e.air&&u>.35&&e.lastSlope<-.1){for(e.splashCarry=(e.splashCarry||0)+u*i*36;e.splashCarry>=1;e.splashCarry--)vt.emitT(e.x+(Math.random()*2-1)*.55,a+.05,e.z+.2+Math.random()*.4,(Math.random()*2-1)*2.2,2.2+Math.random()*2.4,e.speed*(.6+Math.random()*.3),.07+Math.random()*.08,.6+Math.random()*.4,0);e.sqV-=u*i*25,(!e.splashRipple||Z.time-e.splashRipple>.4)&&(eo(e.x,e.z,1.4),e.splashRipple=Z.time,Yn("splash"))}if(e.pitch+=(Math.atan(s)*.9-e.pitch)*Math.min(1,i*6),e.lean+=(Ye.clamp(-e.xv*.22,-.45,.45)-e.lean)*Math.min(1,i*10),e.yaw+=(Ye.clamp(e.xv*.1,-.3,.3)-e.yaw)*Math.min(1,i*8),e.spinLeft>0){let f=Math.min(e.spinLeft,e.spinV*i);e.spin+=f,e.spinLeft-=f}else e.spin=0;e.sqV+=(-e.sq*90-e.sqV*9)*i,e.sq+=e.sqV*i,n?e.look=Math.max(0,e.look-i/.3):(e.lookT-=i,e.lookT<0?(e.look=Math.min(1,e.look+i/.55),e.lookT<-1.6&&(e.lookT=4.5)):e.look=Math.max(0,e.look-i/.55));let h=Ye.smoothstep(e.look,0,1)*Math.PI*.92;wt.map(e.x,e.yAbs,e.z,e.root.position),wt.quaternion(e.z,e.root.quaternion),e.tilt.rotation.set(-e.pitch+(e.air?-e.flip:0)+Math.sin(t*3.4)*.03*(n?1:.4),e.yaw+e.spin+h,e.lean+Math.sin(t*2.2)*.04,"YXZ");let d=1+e.sq*.25;if(e.squash.scale.set(1/Math.sqrt(d),d,1/Math.sqrt(d)),!e.air){let f=e.speed/7;for(e.wakeCarry+=(n?8+22*f+50*e.downhill+Math.abs(e.xv)*18:2)*i;e.wakeCarry>=1;e.wakeCarry--){let m=Math.random()<.5?-1:1;vt.emitT(e.x+m*(.25+Math.random()*.25),a+.04,e.z-.15-Math.random()*.3,m*(.5+Math.random()*1.2)-e.xv*.4,1+Math.random()*(1.6+2.2*e.downhill),e.speed*(.35+Math.random()*.3),.04+Math.random()*.07,.45+Math.random()*.4,0)}for(e.bowCarry=(e.bowCarry||0)+(n?6+18*f+24*e.downhill:0)*i;e.bowCarry>=1;e.bowCarry--){let m=Math.random()<.5?-1:1,x=Math.random()*.9;vt.emitT(e.x+m*(.42+Math.random()*.15),a+.08,e.z+.15+x*.3,m*(.9+Math.random()*1.1)-e.xv*.3,1.4+Math.random()*1.6,e.speed*(.55+Math.random()*.25),.04+Math.random()*.05,.4+Math.random()*.3,0)}for(e.foamCarry+=(n?1.5+3*f+5*e.downhill:.8)*i;e.foamCarry>=1;e.foamCarry--){let m=Math.random()<.5?-1:1;vt.emitT(e.x+m*(.32+Math.random()*.25),a+.05,e.z-.35-Math.random()*.6,m*.45,.2,e.speed*.75,.1+Math.random()*.12,.45+Math.random()*.3,1,.1)}if(!n)for(e.restBubbles=(e.restBubbles||0)+14*i;e.restBubbles>=1;e.restBubbles--){let m=Math.random()*Math.PI*2,x=.42+Math.random()*.28;vt.emitT(e.x+Math.cos(m)*x,a+.02,e.z+Math.sin(m)*x*.7,Math.cos(m)*.15,.25+Math.random()*.3,0,.07+Math.random()*.09,1+Math.random()*.8,0,-.03)}e.bobRipple-=i,e.bobRipple<0&&(eo(e.x,e.z,n?.35:.6),e.bobRipple=n?.45:1.2)}er.uPlayer.value.set(e.x,a,e.z),er.uPlayerMove.value.set(e.xv,e.speed/7,e.downhill),e.lastSlope=r,ze.fur.uTime.value=t,ze.fur.uCentre.value.copy(e.root.position),wt.frame(e.z,He),ze.fur.uUp.value.copy(He.U),document.body.classList.toggle("inDrum",n&&e.z>Ne.tunnelStart-.5),It&&P1(),n&&e.z>Ne.tunnelEnd-2&&M1()}function y1(i){let e=je;if(Z.guardT=Math.max(0,Z.guardT-i),Z.blastT>0&&(Z.blastT=Math.max(0,Z.blastT-i),Ms.clearBrushes&&Ms.clearBrushes(e.z-1,e.z+$t.blastReach)),Z.turboT>0)for(Z.turboT=Math.max(0,Z.turboT-i),(!e.spinLeft||e.spinLeft<.5)&&(e.spinV=Math.PI*2/.32,e.spinLeft=Math.PI*2),e.turboCarry=(e.turboCarry||0)+i*60;e.turboCarry>=1;e.turboCarry--){let t=Math.random()*Math.PI*2,n=gs(Ne,e.x,e.z,Z.time);vt.emitT(e.x+Math.cos(t)*.5,n+.1+Math.random()*.4,e.z+Math.sin(t)*.3,Math.cos(t)*2.2,.8+Math.random(),e.speed*.4,.08+Math.random()*.07,.4+Math.random()*.3,0)}Z.outT>=0&&(Z.outT+=i,Z.outT>=$t.outOfHearts&&s0()),tt("r2Shield").classList.toggle("on",Z.blastT>0||Z.turboT>0)}function Od(){if(!yt||Z.phase!=="running"||Z.paused||Z.blasts<=0||Z.blastT>0||Z.outT>=0)return!1;Z.blasts--,Z.blastT=$t.blastTime;let i=je,e=gs(Ne,i.x,i.z,Z.time);for(let t=0;t<46;t++){let n=Math.random()*Math.PI*2,s=Math.random()*.5;vt.emitT(i.x+Math.cos(n)*s*.6,e+.5+Math.sin(n)*s*.5,i.z+.4,Math.cos(n)*.9,.4+Math.random()*.8,i.speed+4+Math.random()*5,.16+Math.random()*.2,.9+Math.random()*.6,1,-.05)}return Ms.clearBrushes&&Ms.clearBrushes(i.z-1,i.z+$t.blastReach),ua("blastBtn"),Yn("gem"),nr(),!0}function Bd(){return!yt||Z.phase!=="running"||Z.paused||Z.turbos<=0||Z.turboT>0||Z.outT>=0?!1:(Z.turbos--,Z.turboT=$t.turboTime,ua("turboBtn"),Yn("swish"),nr(),!0)}function oa(i){(!yt||Z.phase!=="running")&&(i=!1),Z.paused=!!i,document.body.classList.toggle("paused",Z.paused),tt("pausePanel").hidden=!Z.paused,kt&&(Z.paused?kt.suspend?.():kt.resume?.()),Pd=performance.now(),Z.paused&&tt("resumeBtn").focus({preventScroll:!0})}function _1(){let i=tt("r2Hurt");i.classList.remove("go"),i.offsetWidth,i.classList.add("go")}function s0(){Z.outT=-1,Z.restarts++,tt("r2Toast").classList.remove("show"),Object.assign(Z,{hearts:$t.hearts,blasts:$t.blasts,turbos:$t.turbos,blastT:0,turboT:0,guardT:0}),Ud(),Z.phase="intro",document.body.classList.remove("running","inDrum"),nr()}yt&&(Ms.pop=i=>{vt.sparkle(i,22);for(let e=0;e<14;e++){let t=new w().randomDirection();vt.emit(i.x+t.x*.6,i.y+t.y*.6,i.z+t.z*.6,t.x,t.y+.5,t.z,.2+Math.random()*.2,.7,1,-.05)}});function M1(){Z.laps++;let i=tt("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),Ud(),Z.phase="running"}var to={off:new w(0,1,-6.4),look:new w(0,.5,5.97),fov:40},bd={off:new w(0,1.03,-3.58),look:new w(0,.89,6.42),fov:60};ht={snap:!0,x:0,y:0,tilt:0,shake:0};function b1(i){let e=je,t=Ye.smoothstep(e.z,-4,Ne.tunnelStart+3),n=to.off.clone().lerp(bd.off,t),s=to.look.clone().lerp(bd.look,t),r=Ye.lerp(to.fov,bd.fov,t),o=Rn(Ne,e.x,e.z)+.34,a=e.x*.55,l=o+(e.yAbs-o)*.35,c=0;for(let U=1;U<=6;U++)c+=Vl(Ne,e.x,e.z+U*1.2);c/=6;let u=Z.phase==="running"?c:0,h=ht.snap;ht.snap&&(ht.x=a,ht.y=l,ht.tilt=u,ht.snap=!1);let d=1-Math.exp(-i/.14);ht.x+=(a-ht.x)*d,ht.y+=(l-ht.y)*(1-Math.exp(-i/.12)),ht.tilt+=(u-ht.tilt)*(1-Math.exp(-i/.35));let f=ht.x+n.x,m=ht.y+n.y+ht.tilt*n.z*.6,x=e.z+n.z;wt.frame(e.z,He),(h||!ht.fT)&&(ht.fP=He.P.clone(),ht.fR=He.R.clone(),ht.fU=He.U.clone(),ht.fT=He.T.clone());let g=1-Math.exp(-i/.25);ht.fP.copy(He.P),ht.fT.lerp(He.T,g).normalize(),ht.fU.lerp(He.U,g),ht.fR.crossVectors(ht.fU,ht.fT).normalize(),ht.fU.crossVectors(ht.fT,ht.fR).normalize();let p=(U,T,R,I)=>I.copy(ht.fP).addScaledVector(ht.fR,U).addScaledVector(ht.fU,T).addScaledVector(ht.fT,R),v=p(f,m,n.z,new w),_=p(ht.x+s.x,ht.y+s.y+ht.tilt*s.z,s.z,new w);if(wt.frame(x,He),x>-.25&&x<Ne.tunnelEnd){let U=v.clone().sub(He.P),T=U.dot(He.R),R=U.dot(He.U)-(0+1.5),I=U.dot(He.T),E=Math.hypot(T,R),b=Ne.clearRadius-.4;E>b&&v.copy(He.P).addScaledVector(He.R,T/E*b).addScaledVector(He.U,0+1.5+R/E*b).addScaledVector(He.T,I)}cn.up.set(0,1,0).lerp(He.U,.75).normalize(),cn.position.copy(v),cn.lookAt(_);let y=cn.aspect;cn.fov=y>=.5?r:Ye.radToDeg(2*Math.atan(Math.tan(Ye.degToRad(r)/2)*.5/y)),cn.updateProjectionMatrix()}function E1(i){let e=Z.time,t=je.root.position,n=r=>r.obj.position.distanceTo(t)<.4+.42;for(let r of Ql)if(!(!r.live&&r.pop<0)){if(r.pop>=0){wd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*1.2*6.283+r.phase)*.08,r.q0?r.obj.quaternion.copy(r.q0).multiply(w1.setFromAxisAngle(S1,Math.sin(e*2-r.u*.9)*.5)):r.obj.rotation.y+=i*Ye.degToRad(120),yt&&Ed(r),Z.phase==="running"&&n(r)&&Sd(r)}for(let r of ec)if(!(!r.live&&r.pop<0)){if(r.pop>=0){wd(r,i);continue}if(r.spin+=i*Ye.degToRad(70),r.obj.position.y=r.home.y+Math.sin(e*.75*6.283+r.phase)*.1,r.obj.rotation.set(Math.sin(e*.9+r.phase)*.16,r.spin,Math.sin(e*.7+r.phase*1.3)*.12),yt&&Ed(r),Z.phase==="running"&&n(r)&&Sd(r),Math.random()<i*(1.2+10*Math.max(0,1-r.obj.position.distanceTo(t)/6))){let o=r.obj.position.clone().add(new w().randomDirection().multiplyScalar(.22));vt.emit(o.x,o.y,o.z,0,.1,0,.12+Math.random()*.1,.35,2,0)}}for(let r of tc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){wd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*.9*6.283+r.phase)*.09,r.turn.rotation.set(Math.sin(e*1.3+r.phase)*.12,Math.PI+Math.sin(e*.8+r.phase)*.45,Math.sin(e*1.1+r.phase*1.7)*.15),yt&&Ed(r),Z.phase==="running"&&n(r)&&Sd(r)}let s=ec.reduce((r,o)=>o.live?Math.max(r,1-Math.min(1,o.obj.position.distanceTo(t)/6)):r,0);for(let r of ze.gemMaterials||[])r.emissiveIntensity=.35+.6*s}var w1=new At,S1=new w(0,1,0);function Ed(i){let e=je.z-i.u,t=Ye.clamp((e-.6)/1,0,1);i.obj.scale.setScalar(1-t+.001),i.obj.visible=t<1}function wd(i,e){i.pop+=e;let t=Math.min(1,i.pop/.35);i.obj.position.lerp(je.root.position.clone().add(new w(0,yt?1:.6,0)),t),i.obj.scale.setScalar((1+(yt?.15:.6)*Math.sin(t*Math.PI))*(1-t)+.001),t>=1&&(i.pop=-1,i.obj.visible=!1)}function Sd(i){i.live=!1,i.pop=0,i.kind==="coin"?(Z.coins++,Z.collected.coins++,vt.sparkle(i.obj.position,7),Yn("coin")):i.kind==="sock"?(Z.socks++,Z.collected.socks=(Z.collected.socks||0)+1,vt.sparkle(i.obj.position,16),Yn("gem"),ua("sockPanel")):(Z.gems++,Z.collected.gems++,vt.sparkle(i.obj.position,18),Yn("gem"),ua("gemPill")),nr()}function nr(){yt&&(tt("hearts").innerHTML=Z.hearts>=$t.hearts?`${Z.hearts} <small>Full</small>`:String(Z.hearts),tt("blastCount").textContent=String(Z.blasts),tt("turboCount").textContent=String(Z.turbos),tt("blastBtn").disabled=Z.blasts<=0,tt("turboBtn").disabled=Z.turbos<=0),tt("coins").textContent=Z.coins.toLocaleString("en-US"),tt("gems").textContent=String(Z.gems),tt("sockCount").textContent=`${Math.min(5,Z.socks)}/5`,tt("sockBar").style.width=`${Math.min(5,Z.socks)*20}%`}function ua(i){let e=tt(i);e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}function io(){Z.phase==="intro"&&(Z.phase="running",Z.startedAt=Z.time,document.body.classList.add("running"),R1())}var T1=["banner","startPanel"].map(i=>tt(i)),na=tt("openingArt");function A1(){let i=Z.phase==="running"?Z.time-Z.startedAt:-1,e=i<0?0:Ye.smoothstep(i,0,.45);for(let t of T1)t.style.opacity=(1-e).toFixed(3),t.style.transform=`translateX(-50%) translateY(calc(var(--u) * ${(12*e).toFixed(2)}))`,t.style.visibility=e>=1?"hidden":"";if(tt("hint").classList.toggle("show",i>=.3&&i<3.8&&Z.laps===0),na){let t=Pn.art&&e<1&&na.complete&&na.naturalWidth>0&&document.body.classList.contains("ready");document.body.classList.toggle("openingArt",t),na.style.visibility=t?"visible":"hidden",na.style.opacity=(1-e).toFixed(3),tt("soundBtn").style.opacity=t?e.toFixed(3):""}if(yt){let t=i<0?0:Ye.smoothstep(i,.1,.55);document.body.classList.toggle("r2Play",t>0);let n=document.body.classList.contains("openingArt");tt("soundBtn").style.opacity=String(n?e*(1-t):1-t),tt("soundBtn").style.visibility=t>=1?"hidden":"";for(let s of["pauseBtn","blastBtn","turboBtn"]){let r=tt(s);r.style.opacity=t.toFixed(3),r.style.visibility=t>0?"":"hidden"}}}var kt=null,_s=null;function R1(){if(!(kt||jm))try{kt=new(window.AudioContext||window.webkitAudioContext),_s=kt.createGain(),_s.gain.value=Z.sound?.5:0,_s.connect(kt.destination);let i=kt.createBuffer(1,kt.sampleRate*2,kt.sampleRate),e=i.getChannelData(0);for(let r=0;r<e.length;r++)e[r]=Math.random()*2-1;let t=kt.createBufferSource();t.buffer=i,t.loop=!0;let n=kt.createBiquadFilter();n.type="lowpass",n.frequency.value=900;let s=kt.createGain();s.gain.value=.06,t.connect(n).connect(s).connect(_s),t.start()}catch{kt=null}}function Td(i,e,t,n,s="sine"){let r=kt.createOscillator(),o=kt.createGain();r.type=s,r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(_s),r.start(e),r.stop(e+t+.05)}function Yn(i){if(!kt||!Z.sound)return;let e=kt.currentTime;if(i==="coin")Td(1318.5,e,.12,.25,"triangle"),Td(1975.5,e+.06,.22,.2,"triangle");else if(i==="gem")[1567.98,2093,2637.02,3135.96].forEach((t,n)=>Td(t,e+n*.045,.5,.18));else if(i==="splash"||i==="swish"){let t=i==="splash"?.35:.18,n=kt.createBuffer(1,kt.sampleRate*t,kt.sampleRate),s=n.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=(Math.random()*2-1)*Math.pow(1-l/s.length,2);let r=kt.createBufferSource();r.buffer=n;let o=kt.createBiquadFilter();o.type="bandpass",o.frequency.value=i==="splash"?700:1800,o.Q.value=.8;let a=kt.createGain();a.gain.value=i==="splash"?.5:.18,r.connect(o).connect(a).connect(_s),r.start(e)}}var ti=null,Km=["left","middle","right"],Kl=[],ia=null;function Hd(i,e){if(!lc)return;let t=un.getBoundingClientRect();Kl.push({x:i.clientX-t.left,y:i.clientY-t.top,t:Z.time,down:e}),Kl.length>80&&Kl.shift()}function rc(i){lc&&(ia={text:i,t:Z.time})}un.addEventListener("pointerdown",i=>{i.target.closest("button")||yt&&Z.paused||(ti={x:i.clientX,y:i.clientY,t:performance.now(),used:!1},un.setPointerCapture?.(i.pointerId),Hd(i,!0))});un.addEventListener("pointermove",i=>{if(!ti||(Hd(i,!0),ti.used))return;let e=i.clientX-ti.x,t=i.clientY-ti.y,n=Math.max(24,un.clientWidth*.06);if(Math.abs(e)>n&&Math.abs(e)>Math.abs(t)){ti.used=!0,Z.phase==="intro"&&io();let s=je.lane;ca(e<0?-1:1),rc(`Swipe ${e<0?"\u2190":"\u2192"}  \xB7  ${s===je.lane?"edge lane":`lane ${Km[s]} \u2192 ${Km[je.lane]}`}`)}else t<-n&&Math.abs(t)>Math.abs(e)&&(ti.used=!0,Z.phase==="intro"&&io(),Nd(),rc("Swipe \u2191  \xB7  jump"))});un.addEventListener("pointerup",i=>{ti&&(Hd(i,!1),!ti.used&&performance.now()-ti.t<400&&(Z.phase==="intro"?(io(),rc("Tap  \xB7  start")):(Fd(),rc("Tap  \xB7  spin"))),ti=null)});window.addEventListener("keydown",i=>{if(Z.phase==="loading")return;let e=i.key;if(yt&&Z.phase==="running"){if(e==="p"||e==="P"||e==="Escape"){oa(!Z.paused),i.preventDefault();return}if(Z.paused)return;if(e==="b"||e==="B"){Od();return}if(e==="t"||e==="T"){Bd();return}}if(Z.phase==="intro"&&[" ","Enter","ArrowLeft","ArrowRight","ArrowUp","a","d","w"].includes(e)&&(io(),e===" "||e==="Enter")){i.preventDefault();return}e==="ArrowLeft"||e==="a"?ca(-1):e==="ArrowRight"||e==="d"?ca(1):e==="ArrowUp"||e==="w"?Nd():e===" "&&(i.preventDefault(),Fd())});function r0(){Z.sound=!Z.sound,tt("soundBtn").setAttribute("aria-pressed",String(!Z.sound)),tt("soundBtn").title=Z.sound?"Sound on":"Sound off",_s&&(_s.gain.value=Z.sound?.5:0),yt&&(tt("pauseSound").textContent=Z.sound?"Sound: On":"Sound: Off",tt("pauseSound").setAttribute("aria-pressed",String(Z.sound)))}tt("soundBtn").addEventListener("click",r0);if(yt){document.body.classList.add("r2"),tt("hint").after(tt("r2Hud").content.cloneNode(!0));for(let i of["pauseBtn","blastBtn","turboBtn","pausePanel","r2Toast","r2Hurt","r2Shield"])tt(i).hidden=!1;tt("pausePanel").hidden=!0,tt("blastBtn").addEventListener("click",i=>{i.currentTarget.blur(),Od()}),tt("turboBtn").addEventListener("click",i=>{i.currentTarget.blur(),Bd()}),tt("pauseBtn").addEventListener("click",i=>{i.currentTarget.blur(),oa(!0)}),tt("resumeBtn").addEventListener("click",()=>oa(!1)),tt("pauseSound").addEventListener("click",r0),tt("restartBtn").addEventListener("click",()=>{oa(!1),s0()})}var It=null;function C1(){let i=new ci(-1,1,1,-1,.1,500),e=new Ze;Rt.add(e);let t=[],n=[],s=0;for(let u=Ne.startZ-10;u<=Ne.tunnelEnd+8;u+=.2,s++){let h=wt.map(0,Rn(Ne,0,u),u);if(t.push(h.x,h.y,h.z,h.x,h.y-.45,h.z),s){let d=s*2;n.push(d-2,d-1,d,d-1,d+1,d)}}let r=new st;r.setAttribute("position",new Ke(t,3)),r.setIndex(n),e.add(new Be(r,new Pt({color:2063871,side:ft})));for(let u of[1.5+Ne.tunnelRadius,1.5-Ne.tunnelRadius]){let h=[];for(let d=Ne.tunnelStart;d<=Ne.tunnelEnd;d+=.5)h.push(wt.map(0,u,d));e.add(new Be(new Vs(new is(h),h.length*2,.05,6),new Pt({color:14721056})))}let o=1200,a=new Float32Array(o*3),l=new st;l.setAttribute("position",new ot(a,3)),l.setDrawRange(0,0);let c=new Bs(l,new Os({color:16719774,size:5,sizeAttenuation:!1}));c.frustumCulled=!1,e.add(c);for(let u of[ze.castle,Qs,ze.machinery,ze.sideMachinery,tr&&tr.root,aa&&aa.tunnel,ze.falls,ze.bubbles,...ze.drumMeshes||[],...ze.exitLight||[],...la.map(h=>h.g)])u&&(u.visible=!1);It={cam:i,g:e,dots:c,tp:a,n:0,N:o,yc:1,width:22,startY:je.root.position.y}}function P1(){let i=je.root.position;It.n>=It.N&&(It.tp.copyWithin(0,3),It.n=It.N-1),i.toArray(It.tp,It.n*3),It.n++,It.dots.geometry.attributes.position.needsUpdate=!0,It.dots.geometry.setDrawRange(0,It.n)}function I1(){let i=un.clientWidth,e=un.clientHeight,t=je.root.position,n=It.cam,s=It.width,r=s*e/i;return n.left=-s*.36,n.right=s*.64,n.top=r/2,n.bottom=-r/2,n.updateProjectionMatrix(),n.position.set(t.x-60,It.yc,t.z),n.up.set(0,1,0),n.lookAt(t.x,It.yc,t.z),{width:s,height:r,left:t.z+n.left}}var sa=tt("overlay"),et=sa.getContext("2d");function L1(){let i=un.clientWidth,e=un.clientHeight;(sa.width!==i||sa.height!==e)&&(sa.width=i,sa.height=e),et.clearRect(0,0,i,e),It&&U1(i,e),lc&&D1(i,e)}function jl(i,e,t,n,s=1,r="center"){et.font=`600 ${n}px Fredoka, system-ui, sans-serif`;let o=et.measureText(i).width,a=n*.6,l=r==="center"?e-o/2-a:e-a;et.globalAlpha=s*.82,et.fillStyle="#141c5c",et.beginPath(),et.roundRect(l,t-n*.95,o+a*2,n*1.6,n*.8),et.fill(),et.globalAlpha=s,et.fillStyle="#fff",et.textAlign=r==="center"?"center":"left",et.fillText(i,e,t+n*.1),et.globalAlpha=1}function D1(i,e){let t=Kl.filter(n=>Z.time-n.t<.5);if(t.length){et.lineCap="round",et.lineJoin="round";for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=Z.time-a.t;et.strokeStyle=`rgba(255,255,255,${Math.max(0,.85-l*1.6)})`,et.lineWidth=14*(1-l),et.beginPath(),et.moveTo(o.x,o.y),et.lineTo(a.x,a.y),et.stroke()}let n=t[t.length-1],s=Z.time-n.t;et.fillStyle=`rgba(255,255,255,${Math.max(0,.9-s*1.8)})`,et.strokeStyle=`rgba(255,79,184,${Math.max(0,.9-s*1.8)})`,et.lineWidth=3,et.beginPath(),et.arc(n.x,n.y,15,0,Math.PI*2),et.fill(),et.stroke()}ia&&Z.time-ia.t<1&&jl(ia.text,i/2,e*.86,Math.round(e*.024),Math.min(1,(1-(Z.time-ia.t))*3))}function U1(i,e){let t=It.frame,n=je.root.position,s=c=>(It.cam.top-(c-It.yc))/t.height*e;et.font=`500 ${Math.round(e*.022)}px Fredoka, system-ui, sans-serif`,et.textAlign="left";for(let c=-3;c<=6;c+=.5){let u=s(c);if(u<0||u>e)continue;let h=Math.abs(c-Math.round(c))<1e-6;et.strokeStyle=h?"rgba(40,30,110,0.45)":"rgba(40,30,110,0.18)",et.lineWidth=h?1.5:1,et.beginPath(),et.moveTo(0,u),et.lineTo(i,u),et.stroke(),h&&(et.fillStyle="rgba(30,20,90,0.85)",et.fillText(`${c>=0?"+":""}${c.toFixed(0)} m`,8,u-4))}let r=(n.z-t.left)/t.width*i,o=s(n.y);et.strokeStyle="#ff1f9e",et.setLineDash([6,5]),et.lineWidth=2,et.beginPath(),et.moveTo(r,o),et.lineTo(i*.9,o),et.stroke(),et.setLineDash([]);let a=wt.angles(je.z),l=Math.round(e*.028);jl(`height ${n.y>=0?"+":""}${n.y.toFixed(2)} m`,i*.9-4,o+l*.35,l,1,"left"),jl("SIDE VIEW (debug) \xB7 camera fixed in height \xB7 pink dots = the mascot's real path",i/2,l*1.5,l),jl(`tube pitch ${a.pitch>=0?"+":""}${a.pitch.toFixed(0)}\xB0  \xB7  bank ${a.bank>=0?"+":""}${a.bank.toFixed(0)}\xB0  \xB7  speed ${je.speed.toFixed(1)} m/s${je.air?"  \xB7  jumping":""}`,i/2,e-l*1.2,l)}function zd(){let i=un.clientWidth,e=un.clientHeight;Hi.setSize(i,e,!1),ni.setSize(i,e),ni.setPixelRatio(Bi),no.resolution.set(Math.round(i*.5),Math.round(e*.5)),cn.aspect=i/e,vt&&(vt.u.uScale.value=e*Bi*.5/Math.tan(Ye.degToRad(cn.fov)/2)),un.style.setProperty("--u",Math.min(e/537,i/269).toFixed(4)+"px")}new ResizeObserver(zd).observe(un);function oc(i){if(!(yt&&Z.paused)){Z.time+=i,yt&&y1(i),er.uTime.value=Z.time;for(let e of t0)e.uTime.value=Z.time;ze.bubbleU.uTime.value=Z.time,x1(i),E1(i);for(let e of la)e.angle+=e.speed*i,ic.setFromAxisAngle(e.axis,e.angle),nc.makeTranslation(e.centre.x,e.centre.y,e.centre.z).multiply(Qb.makeRotationFromQuaternion(ic)).multiply(new Ae().makeTranslation(-e.centre.x,-e.centre.y,-e.centre.z)),e.g.matrix.multiplyMatrices(nc,e.m0);aa.update(i,Z.time),tr.update(i,Z.time);for(let e of ze.rings)e.material.color.copy(e.userData.base).multiplyScalar(.8+.25*Math.sin(Z.time*2.4+e.userData.pulse));vt.update(i),b1(i),A1(),Jl&&Jl.update(i,Z.time,Z.phase)}}var Ad=60,Zl=0;function ac(){It?(It.frame=I1(),vt&&(vt.u.uScale.value=un.clientHeight*Bi/It.frame.height),Hi.render(Rt,It.cam)):(vt&&(vt.u.uScale.value=un.clientHeight*Bi*.5/Math.tan(Ye.degToRad(cn.fov)/2)),ni.render()),(It||lc)&&L1()}var Pd=performance.now();function o0(i){if(requestAnimationFrame(o0),Z.phase==="loading"||jm)return;let e=Math.min(.05,(i-Pd)/1e3);Pd=i,oc(e),ac(),Ad+=(1/Math.max(e,.001)-Ad)*.05,Zl=Ad<32?Zl+e:0,Zl>2.5&&(Zl=0,no.enabled?no.enabled=!1:Bi>.75&&(Bi=Math.max(.75,Bi*.8),Hi.setPixelRatio(Bi),zd()))}async function N1(){try{Ne=await(await fetch(Cd.layout)).json(),wt=xm(Ne),e1();let[e,t,n,s,r,o,a,l,c,u,h,d]=await Promise.all([...["castle","drum","mascot","roller","gem","sock","machinery","tower","gear","pipe","crown"].map(jb),new cs().loadAsync("ui/coin_face.png")]);vt=new sc(1400),cc(e.scene),Ld(e.scene,{saturation:1,brightness:1.06,glow:.35,grade:em,haze:[.3,14,45,[.86,.79,1]],shade:[.86,.26,.35]}),ze.castle=t1(e.scene,Ne.castle),l1(t),n1(),i1(),s1(),r1(),c1(s),aa=Mm({scene:Rt,mats:ze,track:{TR:wt,L:Ne,W:Jr}}),ze.machinery=aa.root,u1(a),tr=bm({scene:Rt,models:{tower:l,gear:c,pipe:u,crown:h},env:ze.env,gold:ze.gold,glowTexture:i0(),fallGeometry:n0,fallMaterial:ze.fallMat,fx:vt}),Z.decorClear=tr.clear,h1(),d1(r,d),p1(o),g1(n),gi&&!Rd&&(Jl=ta(Js(3045),()=>Xm({scene:Rt,env:ze.env,TR:wt,L:Ne,W:Jr,mascot:je,camera:cn,Particles:sc,fxScale:vt.u.uScale,waterU:er,castle:ze.castle,waterSheets:Qs.children,renderPass:ni.passes[0],bumpMascot:v1,drumMeshes:ze.drumMeshes,exitLight:ze.exitLight,r2:yt?Ms:null,bloomPass:no,outputPass:ni.passes[ni.passes.length-1],grade:Jm,bubbles:ze.bubbles,rollers:la,sideMachinery:ze.sideMachinery,fur:ze.fur,mascotModel:je.squash.children[0],setSideMachinery:f=>(Object.assign(ra,f),Dd(),Z.machineryInnerX),get rollerCandidate(){return Z.rollerCandidate},set rollerCandidate(f){Z.rollerCandidate=f}})),await Wm(Js(3046),Jl.loadExtras)),Rd&&C1(),zd(),Ud(),Z.phase="intro",nr(),oc(1/60),ac(),document.body.classList.add("ready"),tt("loading").hidden=!0,a0()}catch(i){console.error(i),tt("loadMsg").textContent="The washing machine could not load: "+(i&&i.message?i.message:i)+". Reload the page to try again.",l0(i)}}var a0,l0,F1=new Promise((i,e)=>{a0=i,l0=e});requestAnimationFrame(o0);N1();window.__bw={ready:F1,state:()=>({phase:Z.phase,time:+Z.time.toFixed(3),z:+je.z.toFixed(3),x:+je.x.toFixed(3),y:+je.yAbs.toFixed(3),world:je.root.position.toArray().map(i=>+i.toFixed(3)),path:Object.fromEntries(Object.entries(wt.angles(je.z)).map(([i,e])=>[i,+e.toFixed(1)])),cameraUp:cn.up.toArray().map(i=>+i.toFixed(3)),lane:je.lane,speed:+je.speed.toFixed(2),air:je.air,slope:+je.lastSlope.toFixed(3),pitchDeg:+Ye.radToDeg(je.pitch).toFixed(1),leanDeg:+Ye.radToDeg(je.lean).toFixed(1),coins:Z.coins,gems:Z.gems,socks:Z.socks,collected:{...Z.collected},laps:Z.laps,camera:cn.position.toArray().map(i=>+i.toFixed(3)),cameraPitchDeg:+Ye.radToDeg(Math.asin(cn.getWorldDirection(new w).y)).toFixed(2),particles:vt?vt.life.reduce((i,e)=>i+(e>0?1:0),0):0,repairedNormals:Z.repairedNormals,machineryInnerX:Z.machineryInnerX??null,decorClear:Z.decorClear??null,rollerCandidate:Z.rollerCandidate??null,...yt?{hearts:Z.hearts,blasts:Z.blasts,turbos:Z.turbos,paused:Z.paused,blastT:+Z.blastT.toFixed(2),turboT:+Z.turboT.toFixed(2),knocks:Z.knocks,restarts:Z.restarts,bumps:Z.bumps||0}:{}}),blast:()=>Od(),turbo:()=>Bd(),pause:i=>oa(i),hazards:()=>Ms.hazards?Ms.hazards():null,tap:()=>{Z.phase==="intro"?io():Fd()},swipe:i=>{Z.phase==="intro"&&io(),i==="left"?ca(-1):i==="right"?ca(1):i==="up"&&Nd()},advance:(i,e=30)=>{let t=Math.max(1,Math.round(i*e));for(let n=0;n<t;n++)oc(1/e);return ac(),window.__bw.state()},render:ac,lookBack:i=>{je.look=i,je.lookT=-.5},setBloom:i=>{no.enabled=!!i},setSideMachinery:i=>(Object.assign(ra,i),Dd(),Z.machineryInnerX),setDecor:(i,e,t)=>(t===null?pi[i].splice(e,1):pi[i][e]=Object.assign(pi[i][e]||{},t),Z.decorClear=tr.place(),Z.decorClear),getDecor:()=>JSON.parse(JSON.stringify(pi)),pick:(i,e)=>{let t=un.getBoundingClientRect(),n=new Cl;n.setFromCamera(new ae(i/t.width*2-1,-(e/t.height)*2+1),cn);let s=n.intersectObjects([ze.castle,tr.root,ze.sideMachinery].filter(Boolean),!0)[0];return s?{p:s.point.toArray().map(r=>+r.toFixed(2)),obj:s.object.name||s.object.parent?.name||""}:null},project:i=>{let e=new w(...i).project(cn),t=un.getBoundingClientRect();return[+((e.x+1)/2*t.width).toFixed(1),+((1-e.y)/2*t.height).toFixed(1)]},setFraming:i=>{i.off&&to.off.set(...i.off),i.look&&to.look.set(...i.look),i.fov&&(to.fov=i.fov),ht.snap=!0},clearanceTrace:(i,e=30)=>{let t=[],n=0+1.5,s=new w,r=o=>o>Ne.tunnelStart+.5&&o<Ne.tunnelEnd-.5;for(let o=0,a=Math.round(i*e);o<a;o++){oc(1/e);let l=je,c=r(l.z)?Math.hypot(l.x,l.yAbs-n)+.4:null,u=null;for(let h=l.z-9;h<=l.z+.5;h+=.05){wt.frame(h,He),s.copy(cn.position).sub(He.P);let d=Math.abs(s.dot(He.T));(!u||d<u.along)&&(u={along:d,u:h,r:Math.hypot(s.dot(He.R),s.dot(He.U)-n)})}t.push({t:+Z.time.toFixed(3),z:+l.z.toFixed(2),body:c&&+c.toFixed(3),camera:r(u.u)?+u.r.toFixed(3):null})}return t},debug:()=>({scene:Rt,water:Qs,mascot:je.root,particles:vt.points,renderer:Hi,composer:ni,camera:cn,track:wt,layout:Ne,world:Jr,mascotState:je})};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
