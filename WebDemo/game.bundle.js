var x0=Object.defineProperty;var y0=(i,e)=>{for(var t in e)x0(i,t,{get:e[t],enumerable:!0})};var ph="170";var _0=0,Yd=1,M0=2;var bp=1,b0=2,Ri=3,di=0,mn=1,lt=2,hi=0,Cr=1,vn=2,$d=3,Zd=4,on=5,Ns=100,E0=101,w0=102,S0=103,T0=104,mh=200,cn=201,A0=202,R0=203,Uo=204,Yt=205,C0=206,P0=207,I0=208,L0=209,U0=210,D0=211,N0=212,F0=213,H0=214,Kc=0,jc=1,Jc=2,Ur=3,Qc=4,eu=5,tu=6,nu=7,gh=0,O0=1,B0=2,rs=0,vh=1,xh=2,yh=3,_h=4,z0=5,Mh=6,$o=7,Kd="attached",k0="detached",Ep=300,Dr=301,Nr=302,iu=303,su=304,Ul=306,Hs=1e3,Pi=1001,Do=1002,gn=1003,bh=1004;var Tr=1005;var In=1006,To=1007;var ui=1008;var Ui=1009,wp=1010,Sp=1011,No=1012,Eh=1013,Os=1014,ii=1015,si=1016,wh=1017,Sh=1018,Fr=1020,Tp=35902,Ap=1021,Rp=1022,Xn=1023,Cp=1024,Pp=1025,Pr=1026,Hr=1027,Th=1028,Ah=1029,Ip=1030,Rh=1031;var Ch=1033,Za=33776,Ka=33777,ja=33778,Ja=33779,ru=35840,ou=35841,au=35842,lu=35843,cu=36196,uu=37492,hu=37496,du=37808,fu=37809,pu=37810,mu=37811,gu=37812,vu=37813,xu=37814,yu=37815,_u=37816,Mu=37817,bu=37818,Eu=37819,wu=37820,Su=37821,Qa=36492,Tu=36494,Au=36495,Lp=36283,Ru=36284,Cu=36285,Pu=36286;var Or=2300,Br=2301,pc=2302,jd=2400,Jd=2401,Qd=2402,V0=2500;var Up=0,Dl=1,Zo=2,G0=3200,W0=3201;var Ph=0,X0=1,ns="",At="srgb",yn="srgb-linear",Nl="linear",St="srgb";var ar=7680;var ef=519,q0=512,Y0=513,$0=514,Dp=515,Z0=516,K0=517,j0=518,J0=519,Iu=35044,zn=35048;var tf="300 es",Ii=2e3,el=2001,os=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,Ao=Math.PI/180,zr=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function Ih(i,e){return(i%e+e)%e}function Q0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eg(i,e,t){return i!==e?(t-i)/(e-i):0}function Ro(i,e,t){return(1-t)*i+t*e}function tg(i,e,t,n){return Ro(i,e,1-Math.exp(-t*n))}function ng(i,e=1){return e-Math.abs(Ih(i,e*2)-e)}function ig(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function og(i,e){return i+Math.random()*(e-i)}function ag(i){return i*(.5-Math.random())}function lg(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cg(i){return i*Ao}function ug(i){return i*zr}function hg(i){return(i&i-1)===0&&i!==0}function dg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ve={DEG2RAD:Ao,RAD2DEG:zr,generateUUID:qn,clamp:tn,euclideanModulo:Ih,mapLinear:Q0,inverseLerp:eg,lerp:Ro,damp:tg,pingpong:ng,smoothstep:ig,smootherstep:sg,randInt:rg,randFloat:og,randFloatSpread:ag,seededRandom:lg,degToRad:cg,radToDeg:ug,isPowerOfTwo:hg,ceilPowerOfTwo:dg,floorPowerOfTwo:fg,setQuaternionFromProperEuler:pg,normalize:Tt,denormalize:ni},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],_=s[4],y=s[7],C=s[2],T=s[5],A=s[8];return r[0]=o*x+a*v+l*C,r[3]=o*g+a*_+l*T,r[6]=o*m+a*y+l*A,r[1]=c*x+u*v+h*C,r[4]=c*g+u*_+h*T,r[7]=c*m+u*y+h*A,r[2]=d*x+f*v+p*C,r[5]=d*g+f*_+p*T,r[8]=d*m+f*y+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mc=new ut;function Np(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mg(){let i=Fo("canvas");return i.style.display="block",i}var sf={};function wo(i){i in sf||(sf[i]=!0,console.warn(i))}function gg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var gt={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(i.r=Ir(i.r),i.g=Ir(i.g),i.b=Ir(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ns?Nl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rf=[.64,.33,.3,.6,.15,.06],of=[.2126,.7152,.0722],af=[.3127,.329],lf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[yn]:{primaries:rf,whitePoint:af,transfer:Nl,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:rf,whitePoint:af,transfer:St,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});var lr,Lu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Fo("canvas")),lr.width=e.width,lr.height=e.height;let n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yg=0,tl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _g=0,ln=class i extends os{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=In,o=ui,a=Xn,l=Ui,c=i.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=qn(),this.name="",this.source=new tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ep;ln.DEFAULT_ANISOTROPY=1;var vt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,C=(m+1)/2,T=(u+d)/4,A=(h+x)/4,D=(p+g)/4;return _>y&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=D/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uu=class extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nl=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Du=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,m*v);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let y=a*v;if(l=l*g+d*y,c=c*g+f*y,u=u*g+p*y,h=h*g+x*y,g===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vc=new w,uf=new Mt,$t=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),ga.subVectors(this.max,fo),cr.subVectors(e.a,fo),ur.subVectors(e.b,fo),hr.subVectors(e.c,fo),Ki.subVectors(ur,cr),ji.subVectors(hr,ur),Rs.subVectors(cr,hr);let t=[0,-Ki.z,Ki.y,0,-ji.z,ji.y,0,-Rs.z,Rs.y,Ki.z,0,-Ki.x,ji.z,0,-ji.x,Rs.z,0,-Rs.x,-Ki.y,Ki.x,0,-ji.y,ji.x,0,-Rs.y,Rs.x,0];return!xc(t,cr,ur,hr,ga)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,cr,ur,hr,ga))?!1:(va.crossVectors(Ki,ji),t=[va.x,va.y,va.z],xc(t,cr,ur,hr,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bi=[new w,new w,new w,new w,new w,new w,new w,new w],Qn=new w,ma=new $t,cr=new w,ur=new w,hr=new w,Ki=new w,ji=new w,Rs=new w,fo=new w,ga=new w,va=new w,Cs=new w;function xc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cs.fromArray(i,r);let a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Mg=new $t,po=new w,yc=new w,On=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);let t=po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(yc)),this.expandByPoint(po.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new w,_c=new w,xa=new w,Ji=new w,Mc=new w,ya=new w,bc=new w,Bs=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_c.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(_c);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=Ji.dot(this.direction),l=-Ji.dot(xa),c=Ji.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_c).addScaledVector(xa,d),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){Mc.subVectors(t,e),ya.subVectors(n,e),bc.crossVectors(Mc,ya);let o=this.direction.dot(bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let l=a*this.direction.dot(ya.crossVectors(Ji,ya));if(l<0)return null;let c=a*this.direction.dot(Mc.cross(Ji));if(c<0||l+c>o)return null;let u=-a*Ji.dot(bc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,g)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,Eg)}lookAt(e,t,n){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Qi.crossVectors(n,Fn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Qi.crossVectors(n,Fn)),Qi.normalize(),_a.crossVectors(Fn,Qi),s[0]=Qi.x,s[4]=_a.x,s[8]=Fn.x,s[1]=Qi.y,s[5]=_a.y,s[9]=Fn.y,s[2]=Qi.z,s[6]=_a.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],_=n[7],y=n[11],C=n[15],T=s[0],A=s[4],D=s[8],E=s[12],M=s[1],S=s[5],F=s[9],P=s[13],U=s[2],H=s[6],I=s[10],z=s[14],O=s[3],W=s[7],X=s[11],ie=s[15];return r[0]=o*T+a*M+l*U+c*O,r[4]=o*A+a*S+l*H+c*W,r[8]=o*D+a*F+l*I+c*X,r[12]=o*E+a*P+l*z+c*ie,r[1]=u*T+h*M+d*U+f*O,r[5]=u*A+h*S+d*H+f*W,r[9]=u*D+h*F+d*I+f*X,r[13]=u*E+h*P+d*z+f*ie,r[2]=p*T+x*M+g*U+m*O,r[6]=p*A+x*S+g*H+m*W,r[10]=p*D+x*F+g*I+m*X,r[14]=p*E+x*P+g*z+m*ie,r[3]=v*T+_*M+y*U+C*O,r[7]=v*A+_*S+y*H+C*W,r[11]=v*D+_*F+y*I+C*X,r[15]=v*E+_*P+y*z+C*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=h*g*c-x*d*c+x*l*f-a*g*f-h*l*m+a*d*m,_=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,y=u*x*c-p*h*c+p*a*f-o*x*f-u*a*m+o*h*m,C=p*h*l-u*x*l-p*a*d+o*x*d+u*a*g-o*h*g,T=t*v+n*_+s*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=v*A,e[1]=(x*d*r-h*g*r-x*s*f+n*g*f+h*s*m-n*d*m)*A,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*m+n*l*m)*A,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*A,e[4]=_*A,e[5]=(u*g*r-p*d*r+p*s*f-t*g*f-u*s*m+t*d*m)*A,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=y*A,e[9]=(p*h*r-u*x*r-p*n*f+t*x*f+u*n*m-t*h*m)*A,e[10]=(o*x*r-p*a*r+p*n*c-t*x*c-o*n*m+t*a*m)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=C*A,e[13]=(u*x*s-p*h*s+p*n*d-t*x*d-u*n*g+t*h*g)*A,e[14]=(p*a*s-o*x*s-p*n*l+t*x*l+o*n*g-t*a*g)*A,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,x=o*u,g=o*h,m=a*h,v=l*c,_=l*u,y=l*h,C=n.x,T=n.y,A=n.z;return s[0]=(1-(x+m))*C,s[1]=(f+y)*C,s[2]=(p-_)*C,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+_)*A,s[9]=(g-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),a=dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let c=1/r,u=1/o,h=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ii){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(a===Ii)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===el)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ii){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,p,x;if(a===Ii)p=(o+r)*h,x=-2*h;else if(a===el)p=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new w,ei=new Te,bg=new w(0,0,0),Eg=new w(1,1,1),Qi=new w,_a=new w,Fn=new w,hf=new Te,df=new Mt,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return df.setFromEuler(this),this.setFromQuaternion(df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wg=0,ff=new w,fr=new Mt,wi=new Te,Ma=new w,mo=new w,Sg=new w,Tg=new Mt,pf=new w(1,0,0),mf=new w(0,1,0),gf=new w(0,0,1),vf={type:"added"},Ag={type:"removed"},pr={type:"childadded",child:null},Ec={type:"childremoved",child:null},zt=class i extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new Sn,n=new Mt,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new ut}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return ff.copy(e).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ma.copy(e):Ma.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(mo,Ma,this.up):wi.lookAt(Ma,mo,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(wi),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ag),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,Sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};zt.DEFAULT_UP=new w(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new w,Si=new w,wc=new w,Ti=new w,mr=new w,gr=new w,xf=new w,Sc=new w,Tc=new w,Ac=new w,Rc=new vt,Cc=new vt,Pc=new vt,is=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Si.subVectors(n,t),wc.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Si),l=ti.dot(wc),c=Si.dot(Si),u=Si.dot(wc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Pc,r.z),o}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Si.subVectors(e,t),ti.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ti.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;mr.subVectors(s,n),gr.subVectors(r,n),Sc.subVectors(e,n);let l=mr.dot(Sc),c=gr.dot(Sc);if(l<=0&&c<=0)return t.copy(n);Tc.subVectors(e,s);let u=mr.dot(Tc),h=gr.dot(Tc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(mr,o);Ac.subVectors(e,r);let f=mr.dot(Ac),p=gr.dot(Ac);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(gr,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return xf.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(xf,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Ih(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ic(o,r,e+1/3),this.g=Ic(o,r,e),this.b=Ic(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return gt.fromWorkingColorSpace(pn.copy(this),e),Math.round(tn(pn.r*255,0,255))*65536+Math.round(tn(pn.g*255,0,255))*256+Math.round(tn(pn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=At){gt.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(ba);let n=Ro(es.h,ba.h,t),s=Ro(es.s,ba.s,t),r=Ro(es.l,ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new pe;pe.NAMES=Fp;var Rg=0,Tn=class extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=qn(),this.name="",this.blending=Cr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=Yt,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yt&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},It=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new w,Ea=new re,it=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}};var il=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sl=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cg=0,Wn=new Te,Lc=new zt,vr=new w,Hn=new $t,go=new $t,an=new w,st=class i extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?sl:il)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Hn.min,go.min),Hn.expandByPoint(an),an.addVectors(Hn.max,go.max),Hn.expandByPoint(an)):(Hn.expandByPoint(go.min),Hn.expandByPoint(go.max))}Hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),an.add(vr)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new w,l[D]=new w;let c=new w,u=new w,h=new w,d=new re,f=new re,p=new re,x=new w,g=new w;function m(D,E,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(S),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(S),a[D].add(x),a[E].add(x),a[M].add(x),l[D].add(g),l[E].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,E=v.length;D<E;++D){let M=v[D],S=M.start,F=M.count;for(let P=S,U=S+F;P<U;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let _=new w,y=new w,C=new w,T=new w;function A(D){C.fromBufferAttribute(s,D),T.copy(C);let E=a[D];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(T,E);let S=y.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,S)}for(let D=0,E=v.length;D<E;++D){let M=v[D],S=M.start,F=M.count;for(let P=S,U=S+F;P<U;P+=3)A(e.getX(P+0)),A(e.getX(P+1)),A(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new it(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yf=new Te,Ps=new Bs,wa=new On,_f=new w,Sa=new w,Ta=new w,Aa=new w,Uc=new w,Ra=new w,Mf=new w,Ca=new w,Fe=class extends zt{constructor(e=new st,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Uc.fromBufferAttribute(h,e),o?Ra.addScaledVector(Uc,u):Ra.addScaledVector(Uc.sub(t),u))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(wa.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(wa,_f)===null||Ps.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(yf.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(yf),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,C=_;y<C;y+=3){let T=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);s=Pa(this,m,e,n,c,u,h,T,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);s=Pa(this,o,e,n,c,u,h,v,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,C=_;y<C;y+=3){let T=y,A=y+1,D=y+2;s=Pa(this,m,e,n,c,u,h,T,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,_=g+1,y=g+2;s=Pa(this,o,e,n,c,u,h,v,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Pg(i,e,t,n,s,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===di,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:i}}function Pa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Sa),i.getVertexPosition(l,Ta),i.getVertexPosition(c,Aa);let u=Pg(i,e,t,n,Sa,Ta,Aa,Mf);if(u){let h=new w;is.getBarycoord(Mf,Sa,Ta,Aa,h),s&&(u.uv=is.getInterpolatedAttribute(s,a,l,c,h,new re)),r&&(u.uv1=is.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(u.normal=is.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new w,materialIndex:0};is.getNormal(Sa,Ta,Aa,d.normal),u.face=d,u.barycoord=h}return u}var zs=class i extends st{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function p(x,g,m,v,_,y,C,T,A,D,E){let M=y/A,S=C/D,F=y/2,P=C/2,U=T/2,H=A+1,I=D+1,z=0,O=0,W=new w;for(let X=0;X<I;X++){let ie=X*S-P;for(let ye=0;ye<H;ye++){let ze=ye*M-F;W[x]=ze*v,W[g]=ie*_,W[m]=U,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[m]=T>0?1:-1,u.push(W.x,W.y,W.z),h.push(ye/A),h.push(1-X/D),z+=1}}for(let X=0;X<D;X++)for(let ie=0;ie<A;ie++){let ye=d+ie+H*X,ze=d+ie+H*(X+1),J=d+(ie+1)+H*(X+1),K=d+(ie+1)+H*X;l.push(ye,ze,K),l.push(ze,J,K),O+=6}a.addGroup(f,O,E),f+=O,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function kr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=kr(i[t]);for(let s in n)e[s]=n[s]}return e}function Ig(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var gs={clone:kr,merge:En},Lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends Tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lg,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},rl=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ts=new w,bf=new re,Ef=new re,Bt=class extends rl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,bf,Ef),t.subVectors(Ef,bf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xr=-90,yr=1,Nu=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(xr,yr,e,t);s.layers=this.layers,this.add(s);let r=new Bt(xr,yr,e,t);r.layers=this.layers,this.add(r);let o=new Bt(xr,yr,e,t);o.layers=this.layers,this.add(o);let a=new Bt(xr,yr,e,t);a.layers=this.layers,this.add(a);let l=new Bt(xr,yr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(xr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===el)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ol=class extends ln{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fu=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ol(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zs(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:hi});r.uniforms.tEquirect.value=t;let o=new Fe(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=In),new Nu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Dc=new w,Dg=new w,Ng=new ut,Ci=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dc.subVectors(n,t).cross(Dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ng.getNormalMatrix(e),s=this.coplanarPoint(Dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Is=new On,Ia=new w,Oo=class{constructor(e=new Ci,t=new Ci,n=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],x=s[10],g=s[11],m=s[12],v=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-m).normalize(),n[1].setComponents(l+r,d+c,g+f,y+m).normalize(),n[2].setComponents(l+o,d+u,g+p,y+v).normalize(),n[3].setComponents(l-o,d-u,g-p,y-v).normalize(),n[4].setComponents(l-a,d-h,g-x,y-_).normalize(),t===Ii)n[5].setComponents(l+a,d+h,g+x,y+_).normalize();else if(t===el)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ia.x=s.normal.x>0?e.max.x:e.min.x,Ia.y=s.normal.y>0?e.max.y:e.min.y,Ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Op(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ln=class i extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let v=m*d-o;for(let _=0;_<c;_++){let y=_*h-r;p.push(y,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let _=v+c*m,y=v+c*(m+1),C=v+1+c*(m+1),T=v+1+c*m;f.push(_,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Og=`#ifdef USE_ALPHAHASH
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
#endif`,Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,jg=`#ifdef USE_BUMPMAP
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ov=`#define PI 3.141592653589793
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
} // validated`,av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lv=`vec3 transformedNormal = objectNormal;
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
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wv=`#ifdef USE_GRADIENTMAP
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
}`,Sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
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
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
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
#endif`,Nv=`struct PhysicalMaterial {
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
}`,Fv=`
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qv=`#if defined( USE_POINTS_UV )
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
#endif`,Yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`#ifdef USE_MORPHTARGETS
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
#endif`,Qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
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
}`,Gx=`#if DEPTH_PACKING == 3200
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`uniform float scale;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Jx=`#define LAMBERT
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
}`,Qx=`#define LAMBERT
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
}`,ey=`#define MATCAP
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
}`,ty=`#define MATCAP
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
}`,ny=`#define NORMAL
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
}`,iy=`#define NORMAL
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
}`,sy=`#define PHONG
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
}`,ry=`#define PHONG
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
}`,oy=`#define STANDARD
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
}`,ay=`#define STANDARD
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
}`,ly=`#define TOON
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
}`,cy=`#define TOON
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
}`,uy=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,fy=`uniform vec3 color;
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
}`,py=`uniform float rotation;
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
}`,my=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Hg,alphahash_pars_fragment:Og,alphamap_fragment:Bg,alphamap_pars_fragment:zg,alphatest_fragment:kg,alphatest_pars_fragment:Vg,aomap_fragment:Gg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:$g,bsdfs:Zg,iridescence_fragment:Kg,bumpmap_pars_fragment:jg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:ev,clipping_planes_vertex:tv,color_fragment:nv,color_pars_fragment:iv,color_pars_vertex:sv,color_vertex:rv,common:ov,cube_uv_reflection_fragment:av,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:uv,emissivemap_fragment:hv,emissivemap_pars_fragment:dv,colorspace_fragment:fv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:vv,envmap_pars_vertex:xv,envmap_physical_pars_fragment:Cv,envmap_vertex:yv,fog_vertex:_v,fog_pars_vertex:Mv,fog_fragment:bv,fog_pars_fragment:Ev,gradientmap_pars_fragment:wv,lightmap_pars_fragment:Sv,lights_lambert_fragment:Tv,lights_lambert_pars_fragment:Av,lights_pars_begin:Rv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Lv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Dv,lights_physical_pars_fragment:Nv,lights_fragment_begin:Fv,lights_fragment_maps:Hv,lights_fragment_end:Ov,logdepthbuf_fragment:Bv,logdepthbuf_pars_fragment:zv,logdepthbuf_pars_vertex:kv,logdepthbuf_vertex:Vv,map_fragment:Gv,map_pars_fragment:Wv,map_particle_fragment:Xv,map_particle_pars_fragment:qv,metalnessmap_fragment:Yv,metalnessmap_pars_fragment:$v,morphinstance_vertex:Zv,morphcolor_vertex:Kv,morphnormal_vertex:jv,morphtarget_pars_vertex:Jv,morphtarget_vertex:Qv,normal_fragment_begin:ex,normal_fragment_maps:tx,normal_pars_fragment:nx,normal_pars_vertex:ix,normal_vertex:sx,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:lx,iridescence_pars_fragment:cx,opaque_fragment:ux,packing:hx,premultiplied_alpha_fragment:dx,project_vertex:fx,dithering_fragment:px,dithering_pars_fragment:mx,roughnessmap_fragment:gx,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:yx,shadowmap_vertex:_x,shadowmask_pars_fragment:Mx,skinbase_vertex:bx,skinning_pars_vertex:Ex,skinning_vertex:wx,skinnormal_vertex:Sx,specularmap_fragment:Tx,specularmap_pars_fragment:Ax,tonemapping_fragment:Rx,tonemapping_pars_fragment:Cx,transmission_fragment:Px,transmission_pars_fragment:Ix,uv_pars_fragment:Lx,uv_pars_vertex:Ux,uv_vertex:Dx,worldpos_vertex:Nx,background_vert:Fx,background_frag:Hx,backgroundCube_vert:Ox,backgroundCube_frag:Bx,cube_vert:zx,cube_frag:kx,depth_vert:Vx,depth_frag:Gx,distanceRGBA_vert:Wx,distanceRGBA_frag:Xx,equirect_vert:qx,equirect_frag:Yx,linedashed_vert:$x,linedashed_frag:Zx,meshbasic_vert:Kx,meshbasic_frag:jx,meshlambert_vert:Jx,meshlambert_frag:Qx,meshmatcap_vert:ey,meshmatcap_frag:ty,meshnormal_vert:ny,meshnormal_frag:iy,meshphong_vert:sy,meshphong_frag:ry,meshphysical_vert:oy,meshphysical_frag:ay,meshtoon_vert:ly,meshtoon_frag:cy,points_vert:uy,points_frag:hy,shadow_vert:dy,shadow_frag:fy,sprite_vert:py,sprite_frag:my},Ne={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ci={basic:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new pe(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new pe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:En([Ne.common,Ne.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:En([Ne.lights,Ne.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ci.physical={uniforms:En([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var La={r:0,b:0,g:0},Ls=new Sn,gy=new Te;function vy(i,e,t,n,s,r,o){let a=new pe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,y=p(v);y===null?m(a,l):y&&y.isColor&&(m(y,1),_=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,_){let y=p(_);y&&(y.isCubeTexture||y.mapping===Ul)?(u===void 0&&(u=new Fe(new zs(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:kr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ls.copy(_.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Ls)),u.material.toneMapped=gt.getTransfer(y.colorSpace)!==St,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fe(new Ln(2,2),new Qe({name:"BackgroundMaterial",uniforms:kr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=gt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,_){v.getRGB(La,Hp(i)),n.buffers.color.setClear(La.r,La.g,La.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:g}}function xy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,S,F,P,U){let H=!1,I=h(P,F,S);r!==I&&(r=I,c(r.object)),H=f(M,P,F,U),H&&p(M,P,F,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(M,S,F,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,S,F){let P=F.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let H=U[S.id];H===void 0&&(H={},U[S.id]=H);let I=H[P];return I===void 0&&(I=d(l()),H[P]=I),I}function d(M){let S=[],F=[],P=[];for(let U=0;U<t;U++)S[U]=0,F[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,S,F,P){let U=r.attributes,H=S.attributes,I=0,z=F.getAttributes();for(let O in z)if(z[O].location>=0){let X=U[O],ie=H[O];if(ie===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),X===void 0||X.attribute!==ie||ie&&X.data!==ie.data)return!0;I++}return r.attributesNum!==I||r.index!==P}function p(M,S,F,P){let U={},H=S.attributes,I=0,z=F.getAttributes();for(let O in z)if(z[O].location>=0){let X=H[O];X===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));let ie={};ie.attribute=X,X&&X.data&&(ie.data=X.data),U[O]=ie,I++}r.attributes=U,r.attributesNum=I,r.index=P}function x(){let M=r.newAttributes;for(let S=0,F=M.length;S<F;S++)M[S]=0}function g(M){m(M,0)}function m(M,S){let F=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;F[M]=1,P[M]===0&&(i.enableVertexAttribArray(M),P[M]=1),U[M]!==S&&(i.vertexAttribDivisor(M,S),U[M]=S)}function v(){let M=r.newAttributes,S=r.enabledAttributes;for(let F=0,P=S.length;F<P;F++)S[F]!==M[F]&&(i.disableVertexAttribArray(F),S[F]=0)}function _(M,S,F,P,U,H,I){I===!0?i.vertexAttribIPointer(M,S,F,U,H):i.vertexAttribPointer(M,S,F,P,U,H)}function y(M,S,F,P){x();let U=P.attributes,H=F.getAttributes(),I=S.defaultAttributeValues;for(let z in H){let O=H[z];if(O.location>=0){let W=U[z];if(W===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){let X=W.normalized,ie=W.itemSize,ye=e.get(W);if(ye===void 0)continue;let ze=ye.buffer,J=ye.type,K=ye.bytesPerElement,_e=J===i.INT||J===i.UNSIGNED_INT||W.gpuType===Eh;if(W.isInterleavedBufferAttribute){let he=W.data,me=he.stride,Me=W.offset;if(he.isInstancedInterleavedBuffer){for(let Ue=0;Ue<O.locationSize;Ue++)m(O.location+Ue,he.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<O.locationSize;Ue++)g(O.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ue=0;Ue<O.locationSize;Ue++)_(O.location+Ue,ie/O.locationSize,J,X,me*K,(Me+ie/O.locationSize*Ue)*K,_e)}else{if(W.isInstancedBufferAttribute){for(let he=0;he<O.locationSize;he++)m(O.location+he,W.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let he=0;he<O.locationSize;he++)g(O.location+he);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let he=0;he<O.locationSize;he++)_(O.location+he,ie/O.locationSize,J,X,ie*K,ie/O.locationSize*he*K,_e)}}else if(I!==void 0){let X=I[z];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(O.location,X);break;case 3:i.vertexAttrib3fv(O.location,X);break;case 4:i.vertexAttrib4fv(O.location,X);break;default:i.vertexAttrib1fv(O.location,X)}}}}v()}function C(){D();for(let M in n){let S=n[M];for(let F in S){let P=S[F];for(let U in P)u(P[U].object),delete P[U];delete S[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let S=n[M.id];for(let F in S){let P=S[F];for(let U in P)u(P[U].object),delete P[U];delete S[F]}delete n[M.id]}function A(M){for(let S in n){let F=n[S];if(F[M.id]===void 0)continue;let P=F[M.id];for(let U in P)u(P[U].object),delete P[U];delete F[M.id]}}function D(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function yy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _y(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let D=A===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ui&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ii&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function My(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ci,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,_=v*4,y=m.clippingState||null;l.value=y,y=u(p,d,_,f);for(let C=0;C!==_;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function by(i){let e=new WeakMap;function t(o,a){return a===iu?o.mapping=Dr:a===su&&(o.mapping=Nr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===iu||a===su)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var fi=class extends rl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ar=4,wf=[.125,.215,.35,.446,.526,.582],Fs=20,Nc=new fi,Sf=new pe,Fc=null,Hc=0,Oc=0,Bc=!1,Ds=(1+Math.sqrt(5))/2,_r=1/Ds,Tf=[new w(-Ds,_r,0),new w(Ds,_r,0),new w(-_r,0,Ds),new w(_r,0,Ds),new w(0,Ds,-_r),new w(0,Ds,_r),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Hc,Oc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:si,format:Xn,colorSpace:yn,depthBuffer:!1},s=Af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ey(r)),this._blurMaterial=wy(r,e,t)}return s}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,n,s){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Sf),u.toneMapping=rs,u.autoClear=!1;let f=new It({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),p=new Fe(new zs,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(Sf),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;Ua(s,v*_,m>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Dr||e.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tf[(s-r-1)%Tf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Fe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fs-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Fs;g>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fs}`);let m=[],v=0;for(let A=0;A<Fs;++A){let D=A/x,E=Math.exp(-D*D/2);m.push(E),A===0?v+=E:A<g&&(v+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let y=this._sizeLods[s],C=3*y*(s>_-Ar?s-_+Ar:0),T=4*(this._cubeSize-y);Ua(t,C,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Nc)}};function Ey(i){let e=[],t=[],n=[],s=i,r=i-Ar+1+wf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ar?l=wf[o-i+Ar-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*f),_=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,D=T>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(E,x*p*T),_.set(d,g*p*T);let M=[T,T,T,T,T,T];y.set(M,m*p*T)}let C=new st;C.setAttribute("position",new it(v,x)),C.setAttribute("uv",new it(_,g)),C.setAttribute("faceIndex",new it(y,m)),e.push(C),s>Ar&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Af(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wy(i,e,t){let n=new Float32Array(Fs),s=new w(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Rf(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Cf(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function Sy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===iu||l===su,u=l===Dr||l===Nr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Vr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Vr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ty(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&wo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ay(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){let C=v[_+0],T=v[_+1],A=v[_+2];d.push(C,T,T,A,A,C)}}else if(p!==void 0){let v=p.array;x=p.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let C=_+0,T=_+1,A=_+2;d.push(C,T,T,A,A,C)}}else return;let g=new(Np(d)?sl:il)(d,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ry(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function h(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*x[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Py(i,e,t){let n=new WeakMap,s=new vt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*C*4*h),A=new nl(T,y,C,h);A.type=ii,A.needsUpdate=!0;let D=_*4;for(let M=0;M<h;M++){let S=g[M],F=m[M],P=v[M],U=y*C*4*M;for(let H=0;H<S.count;H++){let I=H*D;f===!0&&(s.fromBufferAttribute(S,H),T[U+I+0]=s.x,T[U+I+1]=s.y,T[U+I+2]=s.z,T[U+I+3]=0),p===!0&&(s.fromBufferAttribute(F,H),T[U+I+4]=s.x,T[U+I+5]=s.y,T[U+I+6]=s.z,T[U+I+7]=0),x===!0&&(s.fromBufferAttribute(P,H),T[U+I+8]=s.x,T[U+I+9]=s.y,T[U+I+10]=s.z,T[U+I+11]=P.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new re(y,C)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Iy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var al=class extends ln{constructor(e,t,n,s,r,o,a,l,c,u=Pr){if(u!==Pr&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pr&&(n=Os),n===void 0&&u===Hr&&(n=Fr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bp=new ln,Pf=new al(1,1),zp=new nl,kp=new Du,Vp=new ol,If=[],Lf=[],Uf=new Float32Array(16),Df=new Float32Array(9),Nf=new Float32Array(4);function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=If[s];if(r===void 0&&(r=new Float32Array(s),If[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fl(i,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Nf.set(n),i.uniformMatrix2fv(this.addr,!1,Nf),sn(t,n)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Df.set(n),i.uniformMatrix3fv(this.addr,!1,Df),sn(t,n)}}function Oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Uf.set(n),i.uniformMatrix4fv(this.addr,!1,Uf),sn(t,n)}}function By(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pf.compareFunction=Dp,r=Pf):r=Bp,t.setTexture2D(e||r,s)}function $y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kp,s)}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vp,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zp,s)}function jy(i){switch(i){case 5126:return Ly;case 35664:return Uy;case 35665:return Dy;case 35666:return Ny;case 35674:return Fy;case 35675:return Hy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return zy;case 35668:case 35672:return ky;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Ky}}function Jy(i,e){i.uniform1fv(this.addr,e)}function Qy(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function e_(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function t_(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function n_(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i_(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s_(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r_(i,e){i.uniform1iv(this.addr,e)}function o_(i,e){i.uniform2iv(this.addr,e)}function a_(i,e){i.uniform3iv(this.addr,e)}function l_(i,e){i.uniform4iv(this.addr,e)}function c_(i,e){i.uniform1uiv(this.addr,e)}function u_(i,e){i.uniform2uiv(this.addr,e)}function h_(i,e){i.uniform3uiv(this.addr,e)}function d_(i,e){i.uniform4uiv(this.addr,e)}function f_(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bp,r[o])}function p_(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kp,r[o])}function m_(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vp,r[o])}function g_(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zp,r[o])}function v_(i){switch(i){case 5126:return Jy;case 35664:return Qy;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var Hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jy(t.type)}},Ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}},Bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function Ff(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){let n=i.name,s=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),o=zc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ff(t,c===void 0?new Hu(a,i,e):new Ou(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Bu(a),Ff(t,h)),t=h}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);x_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var y_=37297,__=0;function M_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Of=new ut;function b_(i){gt._getMatrix(Of,gt.workingColorSpace,i);let e=`mat3( ${Of.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Nl:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+M_(i.getShaderSource(e),o)}else return s}function E_(i,e){let t=b_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w_(i,e){let t;switch(e){case vh:t="Linear";break;case xh:t="Reinhard";break;case yh:t="Cineon";break;case _h:t="ACESFilmic";break;case Mh:t="AgX";break;case $o:t="Neutral";break;case z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Da=new w;function S_(){gt.getLuminanceCoefficients(Da);let i=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function A_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function So(i){return i!==""}function zf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(i){return i.replace(C_,I_)}var P_=new Map;function I_(i,e){let t=ft[e];if(t===void 0){let n=P_.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(i){return i.replace(L_,U_)}function U_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function D_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function N_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Dr:case Nr:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function H_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gh:e="ENVMAP_BLENDING_MULTIPLY";break;case O0:e="ENVMAP_BLENDING_MIX";break;case B0:e="ENVMAP_BLENDING_ADD";break}return e}function O_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function B_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=D_(t),c=N_(t),u=F_(t),h=H_(t),d=O_(t),f=T_(t),p=A_(r),x=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(So).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(So).join(`
`),m.length>0&&(m+=`
`)):(g=[Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),m=[Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?ft.tonemapping_pars_fragment:"",t.toneMapping!==rs?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=zu(o),o=zf(o,t),o=kf(o,t),a=zu(a),a=zf(a,t),a=kf(a,t),o=Vf(o),a=Vf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=v+g+o,y=v+m+a,C=Hf(s,s.VERTEX_SHADER,_),T=Hf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(S){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(T).trim(),H=!0,I=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,T);else{let z=Bf(s,C,"vertex"),O=Bf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+z+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||U==="")&&(I=!1);I&&(S.diagnostics={runnable:H,programLog:F,vertexShader:{log:P,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(C),s.deleteShader(T),D=new Lr(s,x),E=R_(s,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,y_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=__++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var z_=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vu(e),t.set(e,n)),n}},Vu=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function k_(i,e,t,n,s,r,o){let a=new Ho,l=new ku,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,S,F,P){let U=F.fog,H=P.geometry,I=E.isMeshStandardMaterial?F.environment:null,z=(E.isMeshStandardMaterial?t:e).get(E.envMap||I),O=z&&z.mapping===Ul?z.image.height:null,W=p[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let X=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=X!==void 0?X.length:0,ye=0;H.morphAttributes.position!==void 0&&(ye=1),H.morphAttributes.normal!==void 0&&(ye=2),H.morphAttributes.color!==void 0&&(ye=3);let ze,J,K,_e;if(W){let pt=ci[W];ze=pt.vertexShader,J=pt.fragmentShader}else ze=E.vertexShader,J=E.fragmentShader,l.update(E),K=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);let he=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Me=P.isInstancedMesh===!0,Ue=P.isBatchedMesh===!0,Re=!!E.map,te=!!E.matcap,oe=!!z,N=!!E.aoMap,we=!!E.lightMap,ne=!!E.bumpMap,ce=!!E.normalMap,ue=!!E.displacementMap,Ie=!!E.emissiveMap,Ee=!!E.metalnessMap,L=!!E.roughnessMap,b=E.anisotropy>0,B=E.clearcoat>0,V=E.dispersion>0,G=E.iridescence>0,Y=E.sheen>0,de=E.transmission>0,xe=b&&!!E.anisotropyMap,ge=B&&!!E.clearcoatMap,Pe=B&&!!E.clearcoatNormalMap,le=B&&!!E.clearcoatRoughnessMap,ae=G&&!!E.iridescenceMap,fe=G&&!!E.iridescenceThicknessMap,Se=Y&&!!E.sheenColorMap,be=Y&&!!E.sheenRoughnessMap,$e=!!E.specularMap,Ye=!!E.specularColorMap,at=!!E.specularIntensityMap,k=de&&!!E.transmissionMap,ve=de&&!!E.thicknessMap,j=!!E.gradientMap,se=!!E.alphaMap,De=E.alphaTest>0,He=!!E.alphaHash,et=!!E.extensions,Pt=rs;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Jt={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:J,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&P._colorsTexture!==null,instancing:Me,instancingColor:Me&&P.instanceColor!==null,instancingMorph:Me&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:yn,alphaToCoverage:!!E.alphaToCoverage,map:Re,matcap:te,envMap:oe,envMapMode:oe&&z.mapping,envMapCubeUVHeight:O,aoMap:N,lightMap:we,bumpMap:ne,normalMap:ce,displacementMap:d&&ue,emissiveMap:Ie,normalMapObjectSpace:ce&&E.normalMapType===X0,normalMapTangentSpace:ce&&E.normalMapType===Ph,metalnessMap:Ee,roughnessMap:L,anisotropy:b,anisotropyMap:xe,clearcoat:B,clearcoatMap:ge,clearcoatNormalMap:Pe,clearcoatRoughnessMap:le,dispersion:V,iridescence:G,iridescenceMap:ae,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:Se,sheenRoughnessMap:be,specularMap:$e,specularColorMap:Ye,specularIntensityMap:at,transmission:de,transmissionMap:k,thicknessMap:ve,gradientMap:j,opaque:E.transparent===!1&&E.blending===Cr&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:De,alphaHash:He,combine:E.combine,mapUv:Re&&x(E.map.channel),aoMapUv:N&&x(E.aoMap.channel),lightMapUv:we&&x(E.lightMap.channel),bumpMapUv:ne&&x(E.bumpMap.channel),normalMapUv:ce&&x(E.normalMap.channel),displacementMapUv:ue&&x(E.displacementMap.channel),emissiveMapUv:Ie&&x(E.emissiveMap.channel),metalnessMapUv:Ee&&x(E.metalnessMap.channel),roughnessMapUv:L&&x(E.roughnessMap.channel),anisotropyMapUv:xe&&x(E.anisotropyMap.channel),clearcoatMapUv:ge&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(E.sheenRoughnessMap.channel),specularMapUv:$e&&x(E.specularMap.channel),specularColorMapUv:Ye&&x(E.specularColorMap.channel),specularIntensityMapUv:at&&x(E.specularIntensityMap.channel),transmissionMapUv:k&&x(E.transmissionMap.channel),thicknessMapUv:ve&&x(E.thicknessMap.channel),alphaMapUv:se&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ce||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(Re||se),fog:!!U,useFog:E.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:me,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Re&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===St,decodeVideoTextureEmissive:Ie&&E.emissiveMap.isVideoTexture===!0&&gt.getTransfer(E.emissiveMap.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===lt,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:et&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&E.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function m(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let S in E.defines)M.push(S),M.push(E.defines[S]);return E.isRawShaderMaterial===!1&&(v(M,E),_(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let M=p[E.type],S;if(M){let F=ci[M];S=gs.clone(F.uniforms)}else S=E.uniforms;return S}function C(E,M){let S;for(let F=0,P=u.length;F<P;F++){let U=u[F];if(U.cacheKey===M){S=U,++S.usedTimes;break}}return S===void 0&&(S=new B_(i,M,E,r),u.push(S)),S}function T(E){if(--E.usedTimes===0){let M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:D}}function V_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function G_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,p,x,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||G_),n.length>1&&n.sort(d||Wf),s.length>1&&s.sort(d||Wf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function W_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Xf,i.set(n,[o])):s>=r.length?(o=new Xf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new pe};break;case"SpotLight":t={position:new w,direction:new w,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Y_=0;function $_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i){let e=new X_,t=q_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let s=new w,r=new Te,o=new Te;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,_=0,y=0,C=0,T=0,A=0;c.sort($_);for(let E=0,M=c.length;E<M;E++){let S=c[E],F=S.color,P=S.intensity,U=S.distance,H=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=F.r*P,h+=F.g*P,d+=F.b*P;else if(S.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(S.sh.coefficients[I],P);A++}else if(S.isDirectionalLight){let I=e.get(S);if(I.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let z=S.shadow,O=t.get(S);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=S.shadow.matrix,v++}n.directional[f]=I,f++}else if(S.isSpotLight){let I=e.get(S);I.position.setFromMatrixPosition(S.matrixWorld),I.color.copy(F).multiplyScalar(P),I.distance=U,I.coneCos=Math.cos(S.angle),I.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),I.decay=S.decay,n.spot[x]=I;let z=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,z.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=z.matrix,S.castShadow){let O=t.get(S);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=H,y++}x++}else if(S.isRectAreaLight){let I=e.get(S);I.color.copy(F).multiplyScalar(P),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=I,g++}else if(S.isPointLight){let I=e.get(S);if(I.color.copy(S.color).multiplyScalar(S.intensity),I.distance=S.distance,I.decay=S.decay,S.castShadow){let z=S.shadow,O=t.get(S);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=S.shadow.matrix,_++}n.point[p]=I,p++}else if(S.isHemisphereLight){let I=e.get(S);I.skyColor.copy(S.color).multiplyScalar(P),I.groundColor.copy(S.groundColor).multiplyScalar(P),n.hemi[m]=I,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==v||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,D.directionalLength=f,D.pointLength=p,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=v,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=A,n.version=Y_++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let _=c[m];if(_.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function qf(i){let e=new Z_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function K_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new qf(i),e.set(s,[a])):r>=o.length?(a=new qf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gu=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=G0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wu=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`;function Q_(i,e,t){let n=new Oo,s=new re,r=new re,o=new vt,a=new Gu({depthPacking:W0}),l=new Wu,c={},u=t.maxTextureSize,h={[di]:mn,[mn]:di,[lt]:lt},d=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:j_,fragmentShader:J_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new st;p.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bp;let m=this.type;this.render=function(T,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),F=i.state;F.setBlending(hi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let P=m!==Ri&&this.type===Ri,U=m===Ri&&this.type!==Ri;for(let H=0,I=T.length;H<I;H++){let z=T[H],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let W=O.getFrameExtents();if(s.multiply(W),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,O.mapSize.y=r.y)),O.map===null||P===!0||U===!0){let ie=this.type!==Ri?{minFilter:gn,magFilter:gn}:{};O.map!==null&&O.map.dispose(),O.map=new wn(s.x,s.y,ie),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let X=O.getViewportCount();for(let ie=0;ie<X;ie++){let ye=O.getViewport(ie);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),F.viewport(o),O.updateMatrices(z,ie),n=O.getFrustum(),y(A,D,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Ri&&v(O,D),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,M,S)};function v(T,A){let D=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,f,x,null)}function _(T,A,D,E){let M=null,S=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)M=S;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let F=M.uuid,P=A.uuid,U=c[F];U===void 0&&(U={},c[F]=U);let H=U[P];H===void 0&&(H=M.clone(),U[P]=H,A.addEventListener("dispose",C)),M=H}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Ri?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=i.properties.get(M);F.light=D}return M}function y(T,A,D,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let P=e.update(T),U=T.material;if(Array.isArray(U)){let H=P.groups;for(let I=0,z=H.length;I<z;I++){let O=H[I],W=U[O.materialIndex];if(W&&W.visible){let X=_(T,W,E,M);T.onBeforeShadow(i,T,A,D,P,X,O),i.renderBufferDirect(D,null,P,X,T,O),T.onAfterShadow(i,T,A,D,P,X,O)}}}else if(U.visible){let H=_(T,U,E,M);T.onBeforeShadow(i,T,A,D,P,H,null),i.renderBufferDirect(D,null,P,H,T,null),T.onAfterShadow(i,T,A,D,P,H,null)}}let F=T.children;for(let P=0,U=F.length;P<U;P++)y(F[P],A,D,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(let D in c){let E=c[D],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var eM={[Kc]:jc,[Jc]:tu,[Qc]:nu,[Ur]:eu,[jc]:Kc,[tu]:Jc,[nu]:Qc,[eu]:Ur};function tM(i,e){function t(){let k=!1,ve=new vt,j=null,se=new vt(0,0,0,0);return{setMask:function(De){j!==De&&!k&&(i.colorMask(De,De,De,De),j=De)},setLocked:function(De){k=De},setClear:function(De,He,et,Pt,Jt){Jt===!0&&(De*=Pt,He*=Pt,et*=Pt),ve.set(De,He,et,Pt),se.equals(ve)===!1&&(i.clearColor(De,He,et,Pt),se.copy(ve))},reset:function(){k=!1,j=null,se.set(-1,0,0,0)}}}function n(){let k=!1,ve=!1,j=null,se=null,De=null;return{setReversed:function(He){if(ve!==He){let et=e.get("EXT_clip_control");ve?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let Pt=De;De=null,this.setClear(Pt)}ve=He},getReversed:function(){return ve},setTest:function(He){He?he(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(He){j!==He&&!k&&(i.depthMask(He),j=He)},setFunc:function(He){if(ve&&(He=eM[He]),se!==He){switch(He){case Kc:i.depthFunc(i.NEVER);break;case jc:i.depthFunc(i.ALWAYS);break;case Jc:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case Qc:i.depthFunc(i.EQUAL);break;case eu:i.depthFunc(i.GEQUAL);break;case tu:i.depthFunc(i.GREATER);break;case nu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=He}},setLocked:function(He){k=He},setClear:function(He){De!==He&&(ve&&(He=1-He),i.clearDepth(He),De=He)},reset:function(){k=!1,j=null,se=null,De=null,ve=!1}}}function s(){let k=!1,ve=null,j=null,se=null,De=null,He=null,et=null,Pt=null,Jt=null;return{setTest:function(pt){k||(pt?he(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(pt){ve!==pt&&!k&&(i.stencilMask(pt),ve=pt)},setFunc:function(pt,Mn,jt){(j!==pt||se!==Mn||De!==jt)&&(i.stencilFunc(pt,Mn,jt),j=pt,se=Mn,De=jt)},setOp:function(pt,Mn,jt){(He!==pt||et!==Mn||Pt!==jt)&&(i.stencilOp(pt,Mn,jt),He=pt,et=Mn,Pt=jt)},setLocked:function(pt){k=pt},setClear:function(pt){Jt!==pt&&(i.clearStencil(pt),Jt=pt)},reset:function(){k=!1,ve=null,j=null,se=null,De=null,He=null,et=null,Pt=null,Jt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,_=null,y=null,C=null,T=null,A=new pe(0,0,0),D=0,E=!1,M=null,S=null,F=null,P=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=z>=2);let W=null,X={},ie=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),ze=new vt().fromArray(ie),J=new vt().fromArray(ye);function K(k,ve,j,se){let De=new Uint8Array(4),He=i.createTexture();i.bindTexture(k,He),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<j;et++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ve+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return He}let _e={};_e[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(Ur),ne(!1),ce(Yd),he(i.CULL_FACE),N(hi);function he(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function me(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Me(k,ve){return h[k]!==ve?(i.bindFramebuffer(k,ve),h[k]=ve,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ue(k,ve){let j=f,se=!1;if(k){j=d.get(ve),j===void 0&&(j=[],d.set(ve,j));let De=k.textures;if(j.length!==De.length||j[0]!==i.COLOR_ATTACHMENT0){for(let He=0,et=De.length;He<et;He++)j[He]=i.COLOR_ATTACHMENT0+He;j.length=De.length,se=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,se=!0);se&&i.drawBuffers(j)}function Re(k){return p!==k?(i.useProgram(k),p=k,!0):!1}let te={[Ns]:i.FUNC_ADD,[E0]:i.FUNC_SUBTRACT,[w0]:i.FUNC_REVERSE_SUBTRACT};te[S0]=i.MIN,te[T0]=i.MAX;let oe={[mh]:i.ZERO,[cn]:i.ONE,[A0]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[U0]:i.SRC_ALPHA_SATURATE,[I0]:i.DST_COLOR,[C0]:i.DST_ALPHA,[R0]:i.ONE_MINUS_SRC_COLOR,[Yt]:i.ONE_MINUS_SRC_ALPHA,[L0]:i.ONE_MINUS_DST_COLOR,[P0]:i.ONE_MINUS_DST_ALPHA,[D0]:i.CONSTANT_COLOR,[N0]:i.ONE_MINUS_CONSTANT_COLOR,[F0]:i.CONSTANT_ALPHA,[H0]:i.ONE_MINUS_CONSTANT_ALPHA};function N(k,ve,j,se,De,He,et,Pt,Jt,pt){if(k===hi){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(he(i.BLEND),x=!0),k!==on){if(k!==g||pt!==E){if((m!==Ns||y!==Ns)&&(i.blendEquation(i.FUNC_ADD),m=Ns,y=Ns),pt)switch(k){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.ONE,i.ONE);break;case $d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,_=null,C=null,T=null,A.set(0,0,0),D=0,g=k,E=pt}return}De=De||ve,He=He||j,et=et||se,(ve!==m||De!==y)&&(i.blendEquationSeparate(te[ve],te[De]),m=ve,y=De),(j!==v||se!==_||He!==C||et!==T)&&(i.blendFuncSeparate(oe[j],oe[se],oe[He],oe[et]),v=j,_=se,C=He,T=et),(Pt.equals(A)===!1||Jt!==D)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Jt),A.copy(Pt),D=Jt),g=k,E=!1}function we(k,ve){k.side===lt?me(i.CULL_FACE):he(i.CULL_FACE);let j=k.side===mn;ve&&(j=!j),ne(j),k.blending===Cr&&k.transparent===!1?N(hi):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let se=k.stencilWrite;a.setTest(se),se&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function ce(k){k!==_0?(he(i.CULL_FACE),k!==S&&(k===Yd?i.cullFace(i.BACK):k===M0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),S=k}function ue(k){k!==F&&(I&&i.lineWidth(k),F=k)}function Ie(k,ve,j){k?(he(i.POLYGON_OFFSET_FILL),(P!==ve||U!==j)&&(i.polygonOffset(ve,j),P=ve,U=j)):me(i.POLYGON_OFFSET_FILL)}function Ee(k){k?he(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+H-1),W!==k&&(i.activeTexture(k),W=k)}function b(k,ve,j){j===void 0&&(W===null?j=i.TEXTURE0+H-1:j=W);let se=X[j];se===void 0&&(se={type:void 0,texture:void 0},X[j]=se),(se.type!==k||se.texture!==ve)&&(W!==j&&(i.activeTexture(j),W=j),i.bindTexture(k,ve||_e[k]),se.type=k,se.texture=ve)}function B(){let k=X[W];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function V(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(k){ze.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ze.copy(k))}function be(k){J.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function $e(k,ve){let j=c.get(ve);j===void 0&&(j=new WeakMap,c.set(ve,j));let se=j.get(k);se===void 0&&(se=i.getUniformBlockIndex(ve,k.name),j.set(k,se))}function Ye(k,ve){let se=c.get(ve).get(k);l.get(ve)!==se&&(i.uniformBlockBinding(ve,se,k.__bindingPointIndex),l.set(ve,se))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,X={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,v=null,_=null,y=null,C=null,T=null,A=new pe(0,0,0),D=0,E=!1,M=null,S=null,F=null,P=null,U=null,ze.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:me,bindFramebuffer:Me,drawBuffers:Ue,useProgram:Re,setBlending:N,setMaterial:we,setFlipSided:ne,setCullFace:ce,setLineWidth:ue,setPolygonOffset:Ie,setScissorTest:Ee,activeTexture:L,bindTexture:b,unbindTexture:B,compressedTexImage2D:V,compressedTexImage3D:G,texImage2D:ae,texImage3D:fe,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:Pe,texStorage3D:le,texSubImage2D:Y,texSubImage3D:de,compressedTexSubImage2D:xe,compressedTexSubImage3D:ge,scissor:Se,viewport:be,reset:at}}function Yf(i,e,t,n){let s=nM(n);switch(t){case Ap:return i*e;case Cp:return i*e;case Pp:return i*e*2;case Th:return i*e/s.components*s.byteLength;case Ah:return i*e/s.components*s.byteLength;case Ip:return i*e*2/s.components*s.byteLength;case Rh:return i*e*2/s.components*s.byteLength;case Rp:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case Ch:return i*e*4/s.components*s.byteLength;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ou:case lu:return Math.max(i,16)*Math.max(e,8)/4;case ru:case au:return Math.max(i,8)*Math.max(e,8)/2;case cu:case uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Su:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qa:case Tu:case Au:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lp:case Ru:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cu:case Pu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nM(i){switch(i){case Ui:case wp:return{byteLength:1,components:1};case No:case Sp:case si:return{byteLength:2,components:1};case wh:case Sh:return{byteLength:2,components:4};case Os:case Eh:case ii:return{byteLength:4,components:1};case Tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function iM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,b){return f?new OffscreenCanvas(L,b):Fo("canvas")}function x(L,b,B){let V=1,G=Ee(L);if((G.width>B||G.height>B)&&(V=B/Math.max(G.width,G.height)),V<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Y=Math.floor(V*G.width),de=Math.floor(V*G.height);h===void 0&&(h=p(Y,de));let xe=b?p(Y,de):h;return xe.width=Y,xe.height=de,xe.getContext("2d").drawImage(L,0,0,Y,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+Y+"x"+de+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,b,B,V,G=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=b;if(b===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),b===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),b===i.RGBA){let de=G?Nl:gt.getTransfer(V);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=de===St?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(L,b){let B;return L?b===null||b===Os||b===Fr?B=i.DEPTH24_STENCIL8:b===ii?B=i.DEPTH32F_STENCIL8:b===No&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Os||b===Fr?B=i.DEPTH_COMPONENT24:b===ii?B=i.DEPTH_COMPONENT32F:b===No&&(B=i.DEPTH_COMPONENT16),B}function C(L,b){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==gn&&L.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function T(L){let b=L.target;b.removeEventListener("dispose",T),D(b),b.isVideoTexture&&u.delete(b)}function A(L){let b=L.target;b.removeEventListener("dispose",A),M(b)}function D(L){let b=n.get(L);if(b.__webglInit===void 0)return;let B=L.source,V=d.get(B);if(V){let G=V[b.__cacheKey];G.usedTimes--,G.usedTimes===0&&E(L),Object.keys(V).length===0&&d.delete(B)}n.remove(L)}function E(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let B=L.source,V=d.get(B);delete V[b.__cacheKey],o.memory.textures--}function M(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(b.__webglFramebuffer[V]))for(let G=0;G<b.__webglFramebuffer[V].length;G++)i.deleteFramebuffer(b.__webglFramebuffer[V][G]);else i.deleteFramebuffer(b.__webglFramebuffer[V]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[V])}else{if(Array.isArray(b.__webglFramebuffer))for(let V=0;V<b.__webglFramebuffer.length;V++)i.deleteFramebuffer(b.__webglFramebuffer[V]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let V=0;V<b.__webglColorRenderbuffer.length;V++)b.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[V]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=L.textures;for(let V=0,G=B.length;V<G;V++){let Y=n.get(B[V]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[V])}n.remove(L)}let S=0;function F(){S=0}function P(){let L=S;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),S+=1,L}function U(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function H(L,b){let B=n.get(L);if(L.isVideoTexture&&ue(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){let V=L.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,L,b);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function I(L,b){let B=n.get(L);if(L.version>0&&B.__version!==L.version){J(B,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function z(L,b){let B=n.get(L);if(L.version>0&&B.__version!==L.version){J(B,L,b);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function O(L,b){let B=n.get(L);if(L.version>0&&B.__version!==L.version){K(B,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}let W={[Hs]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},X={[gn]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},ie={[q0]:i.NEVER,[J0]:i.ALWAYS,[Y0]:i.LESS,[Dp]:i.LEQUAL,[$0]:i.EQUAL,[j0]:i.GEQUAL,[Z0]:i.GREATER,[K0]:i.NOTEQUAL};function ye(L,b){if(b.type===ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===To||b.magFilter===Tr||b.magFilter===ui||b.minFilter===In||b.minFilter===To||b.minFilter===Tr||b.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,W[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,W[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,W[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,X[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gn||b.minFilter!==Tr&&b.minFilter!==ui||b.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ze(L,b){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",T));let V=b.source,G=d.get(V);G===void 0&&(G={},d.set(V,G));let Y=U(b);if(Y!==L.__cacheKey){G[Y]===void 0&&(G[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),G[Y].usedTimes++;let de=G[L.__cacheKey];de!==void 0&&(G[L.__cacheKey].usedTimes--,de.usedTimes===0&&E(b)),L.__cacheKey=Y,L.__webglTexture=G[Y].texture}return B}function J(L,b,B){let V=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(V=i.TEXTURE_3D);let G=ze(L,b),Y=b.source;t.bindTexture(V,L.__webglTexture,i.TEXTURE0+B);let de=n.get(Y);if(Y.version!==de.__version||G===!0){t.activeTexture(i.TEXTURE0+B);let xe=gt.getPrimaries(gt.workingColorSpace),ge=b.colorSpace===ns?null:gt.getPrimaries(b.colorSpace),Pe=b.colorSpace===ns||xe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let le=x(b.image,!1,s.maxTextureSize);le=Ie(b,le);let ae=r.convert(b.format,b.colorSpace),fe=r.convert(b.type),Se=_(b.internalFormat,ae,fe,b.colorSpace,b.isVideoTexture);ye(V,b);let be,$e=b.mipmaps,Ye=b.isVideoTexture!==!0,at=de.__version===void 0||G===!0,k=Y.dataReady,ve=C(b,le);if(b.isDepthTexture)Se=y(b.format===Hr,b.type),at&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Se,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Se,le.width,le.height,0,ae,fe,null));else if(b.isDataTexture)if($e.length>0){Ye&&at&&t.texStorage2D(i.TEXTURE_2D,ve,Se,$e[0].width,$e[0].height);for(let j=0,se=$e.length;j<se;j++)be=$e[j],Ye?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,be.width,be.height,ae,fe,be.data):t.texImage2D(i.TEXTURE_2D,j,Se,be.width,be.height,0,ae,fe,be.data);b.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(i.TEXTURE_2D,ve,Se,le.width,le.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,ae,fe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Se,le.width,le.height,0,ae,fe,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Se,$e[0].width,$e[0].height,le.depth);for(let j=0,se=$e.length;j<se;j++)if(be=$e[j],b.format!==Xn)if(ae!==null)if(Ye){if(k)if(b.layerUpdates.size>0){let De=Yf(be.width,be.height,b.format,b.type);for(let He of b.layerUpdates){let et=be.data.subarray(He*De/be.data.BYTES_PER_ELEMENT,(He+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,He,be.width,be.height,1,ae,et)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,le.depth,ae,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Se,be.width,be.height,le.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,le.depth,ae,fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Se,be.width,be.height,le.depth,0,ae,fe,be.data)}else{Ye&&at&&t.texStorage2D(i.TEXTURE_2D,ve,Se,$e[0].width,$e[0].height);for(let j=0,se=$e.length;j<se;j++)be=$e[j],b.format!==Xn?ae!==null?Ye?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,be.width,be.height,ae,be.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,be.width,be.height,ae,fe,be.data):t.texImage2D(i.TEXTURE_2D,j,Se,be.width,be.height,0,ae,fe,be.data)}else if(b.isDataArrayTexture)if(Ye){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Se,le.width,le.height,le.depth),k)if(b.layerUpdates.size>0){let j=Yf(le.width,le.height,b.format,b.type);for(let se of b.layerUpdates){let De=le.data.subarray(se*j/le.data.BYTES_PER_ELEMENT,(se+1)*j/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,ae,fe,De)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ae,fe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,ae,fe,le.data);else if(b.isData3DTexture)Ye?(at&&t.texStorage3D(i.TEXTURE_3D,ve,Se,le.width,le.height,le.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ae,fe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,ae,fe,le.data);else if(b.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,Se,le.width,le.height);else{let j=le.width,se=le.height;for(let De=0;De<ve;De++)t.texImage2D(i.TEXTURE_2D,De,Se,j,se,0,ae,fe,null),j>>=1,se>>=1}}else if($e.length>0){if(Ye&&at){let j=Ee($e[0]);t.texStorage2D(i.TEXTURE_2D,ve,Se,j.width,j.height)}for(let j=0,se=$e.length;j<se;j++)be=$e[j],Ye?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ae,fe,be):t.texImage2D(i.TEXTURE_2D,j,Se,ae,fe,be);b.generateMipmaps=!1}else if(Ye){if(at){let j=Ee(le);t.texStorage2D(i.TEXTURE_2D,ve,Se,j.width,j.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,fe,le)}else t.texImage2D(i.TEXTURE_2D,0,Se,ae,fe,le);g(b)&&m(V),de.__version=Y.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function K(L,b,B){if(b.image.length!==6)return;let V=ze(L,b),G=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+B);let Y=n.get(G);if(G.version!==Y.__version||V===!0){t.activeTexture(i.TEXTURE0+B);let de=gt.getPrimaries(gt.workingColorSpace),xe=b.colorSpace===ns?null:gt.getPrimaries(b.colorSpace),ge=b.colorSpace===ns||de===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,ae=[];for(let se=0;se<6;se++)!Pe&&!le?ae[se]=x(b.image[se],!0,s.maxCubemapSize):ae[se]=le?b.image[se].image:b.image[se],ae[se]=Ie(b,ae[se]);let fe=ae[0],Se=r.convert(b.format,b.colorSpace),be=r.convert(b.type),$e=_(b.internalFormat,Se,be,b.colorSpace),Ye=b.isVideoTexture!==!0,at=Y.__version===void 0||V===!0,k=G.dataReady,ve=C(b,fe);ye(i.TEXTURE_CUBE_MAP,b);let j;if(Pe){Ye&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,fe.width,fe.height);for(let se=0;se<6;se++){j=ae[se].mipmaps;for(let De=0;De<j.length;De++){let He=j[De];b.format!==Xn?Se!==null?Ye?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,He.width,He.height,Se,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,$e,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,He.width,He.height,Se,be,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,$e,He.width,He.height,0,Se,be,He.data)}}}else{if(j=b.mipmaps,Ye&&at){j.length>0&&ve++;let se=Ee(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,se.width,se.height)}for(let se=0;se<6;se++)if(le){Ye?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ae[se].width,ae[se].height,Se,be,ae[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,ae[se].width,ae[se].height,0,Se,be,ae[se].data);for(let De=0;De<j.length;De++){let et=j[De].image[se].image;Ye?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,et.width,et.height,Se,be,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,$e,et.width,et.height,0,Se,be,et.data)}}else{Ye?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se,be,ae[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Se,be,ae[se]);for(let De=0;De<j.length;De++){let He=j[De];Ye?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,Se,be,He.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,$e,Se,be,He.image[se])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),Y.__version=G.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function _e(L,b,B,V,G,Y){let de=r.convert(B.format,B.colorSpace),xe=r.convert(B.type),ge=_(B.internalFormat,de,xe,B.colorSpace),Pe=n.get(b),le=n.get(B);if(le.__renderTarget=b,!Pe.__hasExternalTextures){let ae=Math.max(1,b.width>>Y),fe=Math.max(1,b.height>>Y);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,Y,ge,ae,fe,b.depth,0,de,xe,null):t.texImage2D(G,Y,ge,ae,fe,0,de,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ce(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,G,le.__webglTexture,0,ne(b)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,G,le.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(L,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let V=b.depthTexture,G=V&&V.isDepthTexture?V.type:null,Y=y(b.stencilBuffer,G),de=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=ne(b);ce(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,Y,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,L)}else{let V=b.textures;for(let G=0;G<V.length;G++){let Y=V[G],de=r.convert(Y.format,Y.colorSpace),xe=r.convert(Y.type),ge=_(Y.internalFormat,de,xe,Y.colorSpace),Pe=ne(b);B&&ce(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,b.width,b.height):ce(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ge,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ge,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(b.depthTexture);V.__renderTarget=b,(!V.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);let G=V.__webglTexture,Y=ne(b);if(b.depthTexture.format===Pr)ce(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(b.depthTexture.format===Hr)ce(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Me(L){let b=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let V=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),V){let G=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,V.removeEventListener("dispose",G)};V.addEventListener("dispose",G),b.__depthDisposeCallback=G}b.__boundDepthTexture=V}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");me(b.__webglFramebuffer,L)}else if(B){b.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[V]),b.__webglDepthbuffer[V]===void 0)b.__webglDepthbuffer[V]=i.createRenderbuffer(),he(b.__webglDepthbuffer[V],L,!1);else{let G=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),he(b.__webglDepthbuffer,L,!1);else{let V=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,G)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(L,b,B){let V=n.get(L);b!==void 0&&_e(V.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Me(L)}function Re(L){let b=L.texture,B=n.get(L),V=n.get(b);L.addEventListener("dispose",A);let G=L.textures,Y=L.isWebGLCubeRenderTarget===!0,de=G.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=b.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let ge=0;ge<b.mipmaps.length;ge++)B.__webglFramebuffer[xe][ge]=i.createFramebuffer()}else B.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)B.__webglFramebuffer[xe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(de)for(let xe=0,ge=G.length;xe<ge;xe++){let Pe=n.get(G[xe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ce(L)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<G.length;xe++){let ge=G[xe];B.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);let Pe=r.convert(ge.format,ge.colorSpace),le=r.convert(ge.type),ae=_(ge.internalFormat,Pe,le,ge.colorSpace,L.isXRRenderTarget===!0),fe=ne(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ae,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),he(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ye(i.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)_e(B.__webglFramebuffer[xe][ge],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ge);else _e(B.__webglFramebuffer[xe],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let xe=0,ge=G.length;xe<ge;xe++){let Pe=G[xe],le=n.get(Pe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),ye(i.TEXTURE_2D,Pe),_e(B.__webglFramebuffer,L,Pe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),g(Pe)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,V.__webglTexture),ye(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)_e(B.__webglFramebuffer[ge],L,b,i.COLOR_ATTACHMENT0,xe,ge);else _e(B.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,xe,0);g(b)&&m(xe),t.unbindTexture()}L.depthBuffer&&Me(L)}function te(L){let b=L.textures;for(let B=0,V=b.length;B<V;B++){let G=b[B];if(g(G)){let Y=v(L),de=n.get(G).__webglTexture;t.bindTexture(Y,de),m(Y),t.unbindTexture()}}}let oe=[],N=[];function we(L){if(L.samples>0){if(ce(L)===!1){let b=L.textures,B=L.width,V=L.height,G=i.COLOR_BUFFER_BIT,Y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(L),xe=b.length>1;if(xe)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);let Pe=n.get(b[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,G,i.NEAREST),l===!0&&(oe.length=0,N.length=0,oe.push(i.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(oe.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);let Pe=n.get(b[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ne(L){return Math.min(s.maxSamples,L.samples)}function ce(L){let b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(L){let b=o.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Ie(L,b){let B=L.colorSpace,V=L.format,G=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==yn&&B!==ns&&(gt.getTransfer(B)===St?(V!==Xn||G!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Ee(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Ue,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ce}function sM(i,e){function t(n,s=ns){let r,o=gt.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wp)return i.BYTE;if(n===Sp)return i.SHORT;if(n===No)return i.UNSIGNED_SHORT;if(n===Eh)return i.INT;if(n===Os)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Ap)return i.ALPHA;if(n===Rp)return i.RGB;if(n===Xn)return i.RGBA;if(n===Cp)return i.LUMINANCE;if(n===Pp)return i.LUMINANCE_ALPHA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===Hr)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===Ah)return i.RED_INTEGER;if(n===Ip)return i.RG;if(n===Rh)return i.RG_INTEGER;if(n===Ch)return i.RGBA_INTEGER;if(n===Za||n===Ka||n===ja||n===Ja)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ru||n===ou||n===au||n===lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cu||n===uu||n===hu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cu||n===uu)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===du||n===fu||n===pu||n===mu||n===gu||n===vu||n===xu||n===yu||n===_u||n===Mu||n===bu||n===Eu||n===wu||n===Su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===du)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Su)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===Tu||n===Au)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lp||n===Ru||n===Cu||n===Pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xu=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rM={type:"move"},Co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`,qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qe({vertexShader:oM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yu=class extends os{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=new qu,g=t.getContextAttributes(),m=null,v=null,_=[],y=[],C=new re,T=null,A=new Bt;A.viewport=new vt;let D=new Bt;D.viewport=new vt;let E=[A,D],M=new Xu,S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=_[J];return K===void 0&&(K=new Co,_[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=_[J];return K===void 0&&(K=new Co,_[J]=K),K.getGripSpace()},this.getHand=function(J){let K=_[J];return K===void 0&&(K=new Co,_[J]=K),K.getHandSpace()};function P(J){let K=y.indexOf(J.inputSource);if(K===-1)return;let _e=_[K];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let J=0;J<_.length;J++){let K=y[J];K!==null&&(y[J]=null,_[J].disconnect(K))}S=null,F=null,x.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,v=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new wn(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,_e=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Hr:Pr,_e=g.stencil?Fr:Os);let me={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new wn(d.textureWidth,d.textureHeight,{format:Xn,type:Ui,depthTexture:new al(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(J){for(let K=0;K<J.removed.length;K++){let _e=J.removed[K],he=y.indexOf(_e);he>=0&&(y[he]=null,_[he].disconnect(_e))}for(let K=0;K<J.added.length;K++){let _e=J.added[K],he=y.indexOf(_e);if(he===-1){for(let Me=0;Me<_.length;Me++)if(Me>=y.length){y.push(_e),he=Me;break}else if(y[Me]===null){y[Me]=_e,he=Me;break}if(he===-1)break}let me=_[he];me&&me.connect(_e)}}let I=new w,z=new w;function O(J,K,_e){I.setFromMatrixPosition(K.matrixWorld),z.setFromMatrixPosition(_e.matrixWorld);let he=I.distanceTo(z),me=K.projectionMatrix.elements,Me=_e.projectionMatrix.elements,Ue=me[14]/(me[10]-1),Re=me[14]/(me[10]+1),te=(me[9]+1)/me[5],oe=(me[9]-1)/me[5],N=(me[8]-1)/me[0],we=(Me[8]+1)/Me[0],ne=Ue*N,ce=Ue*we,ue=he/(-N+we),Ie=ue*-N;if(K.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ie),J.translateZ(ue),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),me[10]===-1)J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ee=Ue+ue,L=Re+ue,b=ne-Ie,B=ce+(he-Ie),V=te*Re/L*Ee,G=oe*Re/L*Ee;J.projectionMatrix.makePerspective(b,B,V,G,Ee,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function W(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let K=J.near,_e=J.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),M.near=D.near=A.near=K,M.far=D.far=A.far=_e,(S!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,F=M.far),A.layers.mask=J.layers.mask|2,D.layers.mask=J.layers.mask|4,M.layers.mask=A.layers.mask|D.layers.mask;let he=J.parent,me=M.cameras;W(M,he);for(let Me=0;Me<me.length;Me++)W(me[Me],he);me.length===2?O(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),X(J,M,he)};function X(J,K,_e){_e===null?J.matrix.copy(K.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(K.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ie=null;function ye(J,K){if(u=K.getViewerPose(c||o),p=K,u!==null){let _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let he=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let Me=0;Me<_e.length;Me++){let Ue=_e[Me],Re=null;if(f!==null)Re=f.getViewport(Ue);else{let oe=h.getViewSubImage(d,Ue);Re=oe.viewport,Me===0&&(e.setRenderTargetTextures(v,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(v))}let te=E[Me];te===void 0&&(te=new Bt,te.layers.enable(Me),te.viewport=new vt,E[Me]=te),te.matrix.fromArray(Ue.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ue.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Re.x,Re.y,Re.width,Re.height),Me===0&&(M.matrix.copy(te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(te)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){let Me=h.getDepthInformation(_e[0]);Me&&Me.isValid&&Me.texture&&x.init(e,Me,s.renderState)}}for(let _e=0;_e<_.length;_e++){let he=y[_e],me=_[_e];he!==null&&me!==void 0&&me.update(he,K,c||o)}ie&&ie(J,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let ze=new Op;ze.setAnimationLoop(ye),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}},Us=new Sn,lM=new Te;function cM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Hp(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,Us.copy(y),Us.x*=-1,Us.y*=-1,Us.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Us)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(p(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",g));let C=_.program;n.updateUBOMapping(v,C);let T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){let _=h();v.__bindingPointIndex=_;let y=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=y.length;T<A;T++){let D=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,M=D.length;E<M;E++){let S=D[E];if(f(S,T,E,C)===!0){let F=S.__offset,P=Array.isArray(S.value)?S.value:[S.value],U=0;for(let H=0;H<P.length;H++){let I=P[H],z=x(I);typeof I=="number"||typeof I=="boolean"?(S.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,F+U,S.__data)):I.isMatrix3?(S.__data[0]=I.elements[0],S.__data[1]=I.elements[1],S.__data[2]=I.elements[2],S.__data[3]=0,S.__data[4]=I.elements[3],S.__data[5]=I.elements[4],S.__data[6]=I.elements[5],S.__data[7]=0,S.__data[8]=I.elements[6],S.__data[9]=I.elements[7],S.__data[10]=I.elements[8],S.__data[11]=0):(I.toArray(S.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,y,C){let T=v.value,A=_+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let D=C[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return C[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function p(v){let _=v.uniforms,y=0,C=16;for(let A=0,D=_.length;A<D;A++){let E=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,S=E.length;M<S;M++){let F=E[M],P=Array.isArray(F.value)?F.value:[F.value];for(let U=0,H=P.length;U<H;U++){let I=P[U],z=x(I),O=y%C,W=O%z.boundary,X=O+W;y+=W,X!==0&&C-X<z.storage&&(y+=C-X),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=z.storage}}}let T=y%C;return T>0&&(y+=C-T),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ll=class{constructor(e={}){let{canvas:t=mg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=rs,this.toneMappingExposure=1;let y=this,C=!1,T=0,A=0,D=null,E=-1,M=null,S=new vt,F=new vt,P=null,U=new pe(0),H=0,I=t.width,z=t.height,O=1,W=null,X=null,ie=new vt(0,0,I,z),ye=new vt(0,0,I,z),ze=!1,J=new Oo,K=!1,_e=!1,he=new Te,me=new Te,Me=new w,Ue=new vt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function oe(){return D===null?O:1}let N=n;function we(R,q){return t.getContext(R,q)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ph}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",He,!1),N===null){let q="webgl2";if(N=we(q,R),N===null)throw we(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,ce,ue,Ie,Ee,L,b,B,V,G,Y,de,xe,ge,Pe,le,ae,fe,Se,be,$e,Ye,at,k;function ve(){ne=new Ty(N),ne.init(),Ye=new sM(N,ne),ce=new _y(N,ne,e,Ye),ue=new tM(N,ne),ce.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),Ie=new Cy(N),Ee=new V_,L=new iM(N,ne,ue,Ee,ce,Ye,Ie),b=new by(y),B=new Sy(y),V=new Fg(N),at=new xy(N,V),G=new Ay(N,V,Ie,at),Y=new Iy(N,G,V,Ie),Se=new Py(N,ce,L),le=new My(Ee),de=new k_(y,b,B,ne,ce,at,le),xe=new cM(y,Ee),ge=new W_,Pe=new K_(ne),fe=new vy(y,b,B,ue,Y,f,l),ae=new Q_(y,Y,ce),k=new uM(N,Ie,ce,ue),be=new yy(N,ne,Ie),$e=new Ry(N,ne,Ie),Ie.programs=de.programs,y.capabilities=ce,y.extensions=ne,y.properties=Ee,y.renderLists=ge,y.shadowMap=ae,y.state=ue,y.info=Ie}ve();let j=new Yu(y,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(I,z,!1))},this.getSize=function(R){return R.set(I,z)},this.setSize=function(R,q,ee=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,z=q,t.width=Math.floor(R*O),t.height=Math.floor(q*O),ee===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*O,z*O).floor()},this.setDrawingBufferSize=function(R,q,ee){I=R,z=q,O=ee,t.width=Math.floor(R*ee),t.height=Math.floor(q*ee),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,q,ee,Q){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,q,ee,Q),ue.viewport(S.copy(ie).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,q,ee,Q){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,q,ee,Q),ue.scissor(F.copy(ye).multiplyScalar(O).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){ue.setScissorTest(ze=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(R=!0,q=!0,ee=!0){let Q=0;if(R){let $=!1;if(D!==null){let Ae=D.texture.format;$=Ae===Ch||Ae===Rh||Ae===Ah}if($){let Ae=D.texture.type,Be=Ae===Ui||Ae===Os||Ae===No||Ae===Fr||Ae===wh||Ae===Sh,Ge=fe.getClearColor(),We=fe.getClearAlpha(),rt=Ge.r,ct=Ge.g,Xe=Ge.b;Be?(p[0]=rt,p[1]=ct,p[2]=Xe,p[3]=We,N.clearBufferuiv(N.COLOR,0,p)):(x[0]=rt,x[1]=ct,x[2]=Xe,x[3]=We,N.clearBufferiv(N.COLOR,0,x))}else Q|=N.COLOR_BUFFER_BIT}q&&(Q|=N.DEPTH_BUFFER_BIT),ee&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",He,!1),ge.dispose(),Pe.dispose(),Ee.dispose(),b.dispose(),B.dispose(),Y.dispose(),at.dispose(),k.dispose(),de.dispose(),j.dispose(),j.removeEventListener("sessionstart",Xi),j.removeEventListener("sessionend",As),ai.stop()};function se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=Ie.autoReset,q=ae.enabled,ee=ae.autoUpdate,Q=ae.needsUpdate,$=ae.type;ve(),Ie.autoReset=R,ae.enabled=q,ae.autoUpdate=ee,ae.needsUpdate=Q,ae.type=$}function He(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function et(R){let q=R.target;q.removeEventListener("dispose",et),Pt(q)}function Pt(R){Jt(R),Ee.remove(R)}function Jt(R){let q=Ee.get(R).programs;q!==void 0&&(q.forEach(function(ee){de.releaseProgram(ee)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ee,Q,$,Ae){q===null&&(q=Re);let Be=$.isMesh&&$.matrixWorld.determinant()<0,Ge=Yi(R,q,ee,Q,$);ue.setMaterial(Q,Be);let We=ee.index,rt=1;if(Q.wireframe===!0){if(We=G.getWireframeAttribute(ee),We===void 0)return;rt=2}let ct=ee.drawRange,Xe=ee.attributes.position,_t=ct.start*rt,Dt=(ct.start+ct.count)*rt;Ae!==null&&(_t=Math.max(_t,Ae.start*rt),Dt=Math.min(Dt,(Ae.start+Ae.count)*rt)),We!==null?(_t=Math.max(_t,0),Dt=Math.min(Dt,We.count)):Xe!=null&&(_t=Math.max(_t,0),Dt=Math.min(Dt,Xe.count));let Ht=Dt-_t;if(Ht<0||Ht===1/0)return;at.setup($,Q,Ge,ee,We);let Pn,Et=be;if(We!==null&&(Pn=V.get(We),Et=$e,Et.setIndex(Pn)),$.isMesh)Q.wireframe===!0?(ue.setLineWidth(Q.wireframeLinewidth*oe()),Et.setMode(N.LINES)):Et.setMode(N.TRIANGLES);else if($.isLine){let qe=Q.linewidth;qe===void 0&&(qe=1),ue.setLineWidth(qe*oe()),$.isLineSegments?Et.setMode(N.LINES):$.isLineLoop?Et.setMode(N.LINE_LOOP):Et.setMode(N.LINE_STRIP)}else $.isPoints?Et.setMode(N.POINTS):$.isSprite&&Et.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Et.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let qe=$._multiDrawStarts,Mi=$._multiDrawCounts,wt=$._multiDrawCount,Jn=We?V.get(We).bytesPerElement:1,or=Ee.get(Q).currentProgram.getUniforms();for(let Nn=0;Nn<wt;Nn++)or.setValue(N,"_gl_DrawID",Nn),Et.render(qe[Nn]/Jn,Mi[Nn])}else if($.isInstancedMesh)Et.renderInstances(_t,Ht,$.count);else if(ee.isInstancedBufferGeometry){let qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Mi=Math.min(ee.instanceCount,qe);Et.renderInstances(_t,Ht,Mi)}else Et.render(_t,Ht)};function pt(R,q,ee){R.transparent===!0&&R.side===lt&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,Ce(R,q,ee),R.side=di,R.needsUpdate=!0,Ce(R,q,ee),R.side=lt):Ce(R,q,ee)}this.compile=function(R,q,ee=null){ee===null&&(ee=R),m=Pe.get(ee),m.init(q),_.push(m),ee.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),R!==ee&&R.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let Q=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){let Ge=Ae[Be];pt(Ge,ee,$),Q.add(Ge)}else pt(Ae,ee,$),Q.add(Ae)}),_.pop(),m=null,Q},this.compileAsync=function(R,q,ee=null){let Q=this.compile(R,q,ee);return new Promise($=>{function Ae(){if(Q.forEach(function(Be){Ee.get(Be).currentProgram.isReady()&&Q.delete(Be)}),Q.size===0){$(R);return}setTimeout(Ae,10)}ne.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function jt(R){Mn&&Mn(R)}function Xi(){ai.stop()}function As(){ai.start()}let ai=new Op;ai.setAnimationLoop(jt),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(R){Mn=R,j.setAnimationLoop(R),R===null?ai.stop():ai.start()},j.addEventListener("sessionstart",Xi),j.addEventListener("sessionend",As),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(q),q=j.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,q,D),m=Pe.get(R,_.length),m.init(q),_.push(m),me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(me),_e=this.localClippingEnabled,K=le.init(this.clippingPlanes,_e),g=ge.get(R,v.length),g.init(),v.push(g),j.enabled===!0&&j.isPresenting===!0){let Ae=y.xr.getDepthSensingMesh();Ae!==null&&rr(Ae,q,-1/0,y.sortObjects)}rr(R,q,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,X),te=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,te&&fe.addToRenderList(g,R),this.info.render.frame++,K===!0&&le.beginShadows();let ee=m.state.shadowsArray;ae.render(ee,R,q),K===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=g.opaque,$=g.transmissive;if(m.setupLights(),q.isArrayCamera){let Ae=q.cameras;if($.length>0)for(let Be=0,Ge=Ae.length;Be<Ge;Be++){let We=Ae[Be];lo(Q,$,R,We)}te&&fe.render(R);for(let Be=0,Ge=Ae.length;Be<Ge;Be++){let We=Ae[Be];ao(g,R,We,We.viewport)}}else $.length>0&&lo(Q,$,R,q),te&&fe.render(R),ao(g,R,q);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(y,R,q),at.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],K===!0&&le.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function rr(R,q,ee,Q){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){Q&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);let Be=Y.update(R),Ge=R.material;Ge.visible&&g.push(R,Be,Ge,ee,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){let Be=Y.update(R),Ge=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ue.copy(Be.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(Ge)){let We=Be.groups;for(let rt=0,ct=We.length;rt<ct;rt++){let Xe=We[rt],_t=Ge[Xe.materialIndex];_t&&_t.visible&&g.push(R,Be,_t,ee,Ue.z,Xe)}}else Ge.visible&&g.push(R,Be,Ge,ee,Ue.z,null)}}let Ae=R.children;for(let Be=0,Ge=Ae.length;Be<Ge;Be++)rr(Ae[Be],q,ee,Q)}function ao(R,q,ee,Q){let $=R.opaque,Ae=R.transmissive,Be=R.transparent;m.setupLightsView(ee),K===!0&&le.setGlobalState(y.clippingPlanes,ee),Q&&ue.viewport(S.copy(Q)),$.length>0&&qi($,q,ee),Ae.length>0&&qi(Ae,q,ee),Be.length>0&&qi(Be,q,ee),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function lo(R,q,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new wn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?si:Ui,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let Ae=m.state.transmissionRenderTarget[Q.id],Be=Q.viewport||S;Ae.setSize(Be.z,Be.w);let Ge=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(U),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),te&&fe.render(ee);let We=y.toneMapping;y.toneMapping=rs;let rt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),K===!0&&le.setGlobalState(y.clippingPlanes,Q),qi(R,ee,Q),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Xe=0,_t=q.length;Xe<_t;Xe++){let Dt=q[Xe],Ht=Dt.object,Pn=Dt.geometry,Et=Dt.material,qe=Dt.group;if(Et.side===lt&&Ht.layers.test(Q.layers)){let Mi=Et.side;Et.side=mn,Et.needsUpdate=!0,co(Ht,ee,Q,Pn,Et,qe),Et.side=Mi,Et.needsUpdate=!0,ct=!0}}ct===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}y.setRenderTarget(Ge),y.setClearColor(U,H),rt!==void 0&&(Q.viewport=rt),y.toneMapping=We}function qi(R,q,ee){let Q=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ae=R.length;$<Ae;$++){let Be=R[$],Ge=Be.object,We=Be.geometry,rt=Q===null?Be.material:Q,ct=Be.group;Ge.layers.test(ee.layers)&&co(Ge,q,ee,We,rt,ct)}}function co(R,q,ee,Q,$,Ae){R.onBeforeRender(y,q,ee,Q,$,Ae),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(y,q,ee,Q,R,Ae),$.transparent===!0&&$.side===lt&&$.forceSinglePass===!1?($.side=mn,$.needsUpdate=!0,y.renderBufferDirect(ee,q,Q,$,R,Ae),$.side=di,$.needsUpdate=!0,y.renderBufferDirect(ee,q,Q,$,R,Ae),$.side=lt):y.renderBufferDirect(ee,q,Q,$,R,Ae),R.onAfterRender(y,q,ee,Q,$,Ae)}function Ce(R,q,ee){q.isScene!==!0&&(q=Re);let Q=Ee.get(R),$=m.state.lights,Ae=m.state.shadowsArray,Be=$.state.version,Ge=de.getParameters(R,$.state,Ae,q,ee),We=de.getProgramCacheKey(Ge),rt=Q.programs;Q.environment=R.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(R.isMeshStandardMaterial?B:b).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",et),rt=new Map,Q.programs=rt);let ct=rt.get(We);if(ct!==void 0){if(Q.currentProgram===ct&&Q.lightsStateVersion===Be)return en(R,Ge),ct}else Ge.uniforms=de.getUniforms(R),R.onBeforeCompile(Ge,y),ct=de.acquireProgram(Ge,We),rt.set(We,ct),Q.uniforms=Ge.uniforms;let Xe=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=le.uniform),en(R,Ge),Q.needsLights=Ft(R),Q.lightsStateVersion=Be,Q.needsLights&&(Xe.ambientLightColor.value=$.state.ambient,Xe.lightProbe.value=$.state.probe,Xe.directionalLights.value=$.state.directional,Xe.directionalLightShadows.value=$.state.directionalShadow,Xe.spotLights.value=$.state.spot,Xe.spotLightShadows.value=$.state.spotShadow,Xe.rectAreaLights.value=$.state.rectArea,Xe.ltc_1.value=$.state.rectAreaLTC1,Xe.ltc_2.value=$.state.rectAreaLTC2,Xe.pointLights.value=$.state.point,Xe.pointLightShadows.value=$.state.pointShadow,Xe.hemisphereLights.value=$.state.hemi,Xe.directionalShadowMap.value=$.state.directionalShadowMap,Xe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xe.spotShadowMap.value=$.state.spotShadowMap,Xe.spotLightMatrix.value=$.state.spotLightMatrix,Xe.spotLightMap.value=$.state.spotLightMap,Xe.pointShadowMap.value=$.state.pointShadowMap,Xe.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=ct,Q.uniformsList=null,ct}function Je(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=Lr.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function en(R,q){let ee=Ee.get(R);ee.outputColorSpace=q.outputColorSpace,ee.batching=q.batching,ee.batchingColor=q.batchingColor,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.instancingMorph=q.instancingMorph,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function Yi(R,q,ee,Q,$){q.isScene!==!0&&(q=Re),L.resetTextureUnits();let Ae=q.fog,Be=Q.isMeshStandardMaterial?q.environment:null,Ge=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:yn,We=(Q.isMeshStandardMaterial?B:b).get(Q.envMap||Be),rt=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ct=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xe=!!ee.morphAttributes.position,_t=!!ee.morphAttributes.normal,Dt=!!ee.morphAttributes.color,Ht=rs;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ht=y.toneMapping);let Pn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Et=Pn!==void 0?Pn.length:0,qe=Ee.get(Q),Mi=m.state.lights;if(K===!0&&(_e===!0||R!==M)){let Gn=R===M&&Q.id===E;le.setState(Q,R,Gn)}let wt=!1;Q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Mi.state.version||qe.outputColorSpace!==Ge||$.isBatchedMesh&&qe.batching===!1||!$.isBatchedMesh&&qe.batching===!0||$.isBatchedMesh&&qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&qe.instancingMorph===!1&&$.morphTexture!==null||qe.envMap!==We||Q.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==le.numPlanes||qe.numIntersection!==le.numIntersection)||qe.vertexAlphas!==rt||qe.vertexTangents!==ct||qe.morphTargets!==Xe||qe.morphNormals!==_t||qe.morphColors!==Dt||qe.toneMapping!==Ht||qe.morphTargetsCount!==Et)&&(wt=!0):(wt=!0,qe.__version=Q.version);let Jn=qe.currentProgram;wt===!0&&(Jn=Ce(Q,q,$));let or=!1,Nn=!1,uo=!1,Ot=Jn.getUniforms(),li=qe.uniforms;if(ue.useProgram(Jn.program)&&(or=!0,Nn=!0,uo=!0),Q.id!==E&&(E=Q.id,Nn=!0),or||M!==R){ue.buffers.depth.getReversed()?(he.copy(R.projectionMatrix),vg(he),xg(he),Ot.setValue(N,"projectionMatrix",he)):Ot.setValue(N,"projectionMatrix",R.projectionMatrix),Ot.setValue(N,"viewMatrix",R.matrixWorldInverse);let $i=Ot.map.cameraPosition;$i!==void 0&&$i.setValue(N,Me.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&Ot.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ot.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Nn=!0,uo=!0)}if($.isSkinnedMesh){Ot.setOptional(N,$,"bindMatrix"),Ot.setOptional(N,$,"bindMatrixInverse");let Gn=$.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ot.setValue(N,"boneTexture",Gn.boneTexture,L))}$.isBatchedMesh&&(Ot.setOptional(N,$,"batchingTexture"),Ot.setValue(N,"batchingTexture",$._matricesTexture,L),Ot.setOptional(N,$,"batchingIdTexture"),Ot.setValue(N,"batchingIdTexture",$._indirectTexture,L),Ot.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(N,"batchingColorTexture",$._colorsTexture,L));let ho=ee.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0)&&Se.update($,ee,Jn),(Nn||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,Ot.setValue(N,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(li.envMap.value=We,li.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(li.envMapIntensity.value=q.environmentIntensity),Nn&&(Ot.setValue(N,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&Cn(li,uo),Ae&&Q.fog===!0&&xe.refreshFogUniforms(li,Ae),xe.refreshMaterialUniforms(li,Q,O,z,m.state.transmissionRenderTarget[R.id]),Lr.upload(N,Je(qe),li,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Lr.upload(N,Je(qe),li,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ot.setValue(N,"center",$.center),Ot.setValue(N,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(N,"normalMatrix",$.normalMatrix),Ot.setValue(N,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Gn=Q.uniformsGroups;for(let $i=0,Zi=Gn.length;$i<Zi;$i++){let qd=Gn[$i];k.update(qd,Jn),k.bind(qd,Jn)}}return Jn}function Cn(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ft(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,q,ee){Ee.get(R.texture).__webglTexture=q,Ee.get(R.depthTexture).__webglTexture=ee;let Q=Ee.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ee===void 0,Q.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){let ee=Ee.get(R);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ee=0){D=R,T=q,A=ee;let Q=!0,$=null,Ae=!1,Be=!1;if(R){let We=Ee.get(R);if(We.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(We.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(We.__hasExternalTextures)L.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Xe=R.depthTexture;if(We.__boundDepthTexture!==Xe){if(Xe!==null&&Ee.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}let rt=R.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Be=!0);let ct=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ct[q])?$=ct[q][ee]:$=ct[q],Ae=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?$=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(ct)?$=ct[ee]:$=ct,S.copy(R.viewport),F.copy(R.scissor),P=R.scissorTest}else S.copy(ie).multiplyScalar(O).floor(),F.copy(ye).multiplyScalar(O).floor(),P=ze;if(ue.bindFramebuffer(N.FRAMEBUFFER,$)&&Q&&ue.drawBuffers(R,$),ue.viewport(S),ue.scissor(F),ue.setScissorTest(P),Ae){let We=Ee.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,We.__webglTexture,ee)}else if(Be){let We=Ee.get(R.texture),rt=q||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,ee||0,rt)}E=-1},this.readRenderTargetPixels=function(R,q,ee,Q,$,Ae,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){ue.bindFramebuffer(N.FRAMEBUFFER,Ge);try{let We=R.texture,rt=We.format,ct=We.type;if(!ce.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-Q&&ee>=0&&ee<=R.height-$&&N.readPixels(q,ee,Q,$,Ye.convert(rt),Ye.convert(ct),Ae)}finally{let We=D!==null?Ee.get(D).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,q,ee,Q,$,Ae,Be){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){let We=R.texture,rt=We.format,ct=We.type;if(!ce.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-Q&&ee>=0&&ee<=R.height-$){ue.bindFramebuffer(N.FRAMEBUFFER,Ge);let Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,Ae.byteLength,N.STREAM_READ),N.readPixels(q,ee,Q,$,Ye.convert(rt),Ye.convert(ct),0);let _t=D!==null?Ee.get(D).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,_t);let Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gg(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ae),N.deleteBuffer(Xe),N.deleteSync(Dt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,ee=0){R.isTexture!==!0&&(wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);let Q=Math.pow(2,-ee),$=Math.floor(R.image.width*Q),Ae=Math.floor(R.image.height*Q),Be=q!==null?q.x:0,Ge=q!==null?q.y:0;L.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,ee,0,0,Be,Ge,$,Ae),ue.unbindTexture()},this.copyTextureToTexture=function(R,q,ee=null,Q=null,$=0){R.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],q=arguments[2],$=arguments[3]||0,ee=null);let Ae,Be,Ge,We,rt,ct,Xe,_t,Dt,Ht=R.isCompressedTexture?R.mipmaps[$]:R.image;ee!==null?(Ae=ee.max.x-ee.min.x,Be=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,We=ee.min.x,rt=ee.min.y,ct=ee.isBox3?ee.min.z:0):(Ae=Ht.width,Be=Ht.height,Ge=Ht.depth||1,We=0,rt=0,ct=0),Q!==null?(Xe=Q.x,_t=Q.y,Dt=Q.z):(Xe=0,_t=0,Dt=0);let Pn=Ye.convert(q.format),Et=Ye.convert(q.type),qe;q.isData3DTexture?(L.setTexture3D(q,0),qe=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),qe=N.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),qe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);let Mi=N.getParameter(N.UNPACK_ROW_LENGTH),wt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=N.getParameter(N.UNPACK_SKIP_PIXELS),or=N.getParameter(N.UNPACK_SKIP_ROWS),Nn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ct);let uo=R.isDataArrayTexture||R.isData3DTexture,Ot=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let li=Ee.get(R),ho=Ee.get(q),Gn=Ee.get(li.__renderTarget),$i=Ee.get(ho.__renderTarget);ue.bindFramebuffer(N.READ_FRAMEBUFFER,Gn.__webglFramebuffer),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Zi=0;Zi<Ge;Zi++)uo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(R).__webglTexture,$,ct+Zi),R.isDepthTexture?(Ot&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(q).__webglTexture,$,Dt+Zi),N.blitFramebuffer(We,rt,Ae,Be,Xe,_t,Ae,Be,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ot?N.copyTexSubImage3D(qe,$,Xe,_t,Dt+Zi,We,rt,Ae,Be):N.copyTexSubImage2D(qe,$,Xe,_t,Dt+Zi,We,rt,Ae,Be);ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ot?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(qe,$,Xe,_t,Dt,Ae,Be,Ge,Pn,Et,Ht.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(qe,$,Xe,_t,Dt,Ae,Be,Ge,Pn,Ht.data):N.texSubImage3D(qe,$,Xe,_t,Dt,Ae,Be,Ge,Pn,Et,Ht):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,Xe,_t,Ae,Be,Pn,Et,Ht.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,Xe,_t,Ht.width,Ht.height,Pn,Ht.data):N.texSubImage2D(N.TEXTURE_2D,$,Xe,_t,Ae,Be,Pn,Et,Ht);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,or),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nn),$===0&&q.generateMipmaps&&N.generateMipmap(qe),ue.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ee=null,Q=null,$=0){return R.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],q=arguments[3],$=arguments[4]||0),wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ee,Q,$)},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),ue.unbindTexture()},this.resetState=function(){T=0,A=0,D=null,ue.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Bo=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new w,ks=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Di=class extends Tn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,vo=new w,br=new w,Er=new w,wr=new re,xo=new re,Gp=new Te,Na=new w,yo=new w,Fa=new w,$f=new re,kc=new re,Zf=new re,as=class extends zt{constructor(e=new Di){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gr(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new ks(n,3,0,!1)),Mr.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ha(Na.set(-.5,-.5,0),Er,o,br,s,r),Ha(yo.set(.5,-.5,0),Er,o,br,s,r),Ha(Fa.set(.5,.5,0),Er,o,br,s,r),$f.set(0,0),kc.set(1,0),Zf.set(1,1);let a=e.ray.intersectTriangle(Na,yo,Fa,!1,vo);if(a===null&&(Ha(yo.set(-.5,.5,0),Er,o,br,s,r),kc.set(0,1),a=e.ray.intersectTriangle(Na,Fa,yo,!1,vo),a===null))return;let l=e.ray.origin.distanceTo(vo);l<e.near||l>e.far||t.push({distance:l,point:vo.clone(),uv:is.getInterpolation(vo,Na,yo,Fa,$f,kc,Zf,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ha(i,e,t,n,s,r){wr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xo.x=r*wr.x-s*wr.y,xo.y=s*wr.x+r*wr.y):xo.copy(wr),i.copy(e),i.x+=xo.x,i.y+=xo.y,i.applyMatrix4(Gp)}var Oa=new w,Kf=new w,cl=class extends zt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Oa.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Oa);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Oa.setFromMatrixPosition(e.matrixWorld),Kf.setFromMatrixPosition(this.matrixWorld);let n=Oa.distanceTo(Kf)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},jf=new w,Jf=new vt,Qf=new vt,hM=new w,ep=new Te,Ba=new w,Vc=new On,tp=new Te,Gc=new Bs,ul=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kd,this.bindMatrix=new Te,this.bindMatrixInverse=new Te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(s),e.ray.intersectsSphere(Vc)!==!1&&(tp.copy(s).invert(),Gc.copy(e.ray).applyMatrix4(tp),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===k0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Jf.fromBufferAttribute(s.attributes.skinIndex,e),Qf.fromBufferAttribute(s.attributes.skinWeight,e),jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Qf.getComponent(r);if(o!==0){let a=Jf.getComponent(r);ep.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(hM.copy(jf).applyMatrix4(ep),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},zo=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},hl=class extends ln{constructor(e=null,t=1,n=1,s,r,o,a,l,c=gn,u=gn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},np=new Te,dM=new Te,dl=class i{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:dM;np.multiplyMatrices(a,t[r]),np.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new hl(t,e,e,Xn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zo),this.bones.push(o),this.boneInverses.push(new Te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Rt=class extends it{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new Te,ip=new Te,za=[],sp=new $t,fM=new Te,_o=new Fe,Mo=new On,Gt=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),sp.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(sp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Mo.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),ip.multiplyMatrices(n,Sr),_o.matrixWorld=ip,_o.raycast(e,za);for(let o=0,a=za.length;o<a;o++){let l=za[o];l.instanceId=r,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hl(new Float32Array(s*this.count),s,this.count,Th,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ko=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fl=new w,pl=new w,rp=new Te,bo=new Bs,ka=new On,Wc=new w,op=new w,Wr=class extends zt{constructor(e=new st,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fl.fromBufferAttribute(t,s-1),pl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;rp.copy(s).invert(),bo.copy(e.ray).applyMatrix4(rp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=u.getX(x),v=u.getX(x+1),_=Va(this,e,bo,l,m,v);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=Va(this,e,bo,l,x,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=Va(this,e,bo,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=Va(this,e,bo,l,p-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Va(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(fl.fromBufferAttribute(o,s),pl.fromBufferAttribute(o,r),t.distanceSqToSegment(fl,pl,Wc,op)>n)return;Wc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Wc);if(!(l<e.near||l>e.far))return{distance:l,point:op.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ap=new w,lp=new w,ml=class extends Wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ap.fromBufferAttribute(t,s),lp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ap.distanceTo(lp);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},gl=class extends Wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vs=class extends Tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cp=new Te,$u=new Bs,Ga=new On,Wa=new w,Gs=class extends zt{constructor(e=new st,t=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;cp.copy(s).invert(),$u.copy(e.ray).applyMatrix4(cp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);Wa.fromBufferAttribute(h,g),up(Wa,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Wa.fromBufferAttribute(h,p),up(Wa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function up(i,e,t,n,s,r,o){let a=$u.distanceSqToPoint(i);if(a<t){let l=new w;$u.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var pi=class extends ln{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,s=[],r=[],o=[],a=new w,l=new Te;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(tn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(tn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vo=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zu=class extends Vo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Xa=new w,Xc=new Uh,qc=new Uh,Yc=new Uh,ls=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Xa.subVectors(s[0],s[1]).add(s[0]),c=Xa);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Xc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),qc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),Yc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),qc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Yc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Xc.calc(l),qc.calc(l),Yc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function pM(i,e){let t=1-i;return t*t*e}function mM(i,e){return 2*(1-i)*i*e}function gM(i,e){return i*i*e}function Po(i,e,t,n){return pM(i,e)+mM(i,t)+gM(i,n)}function vM(i,e){let t=1-i;return t*t*t*e}function xM(i,e){let t=1-i;return 3*t*t*i*e}function yM(i,e){return 3*(1-i)*i*i*e}function _M(i,e){return i*i*i*e}function Io(i,e,t,n,s){return vM(i,e)+xM(i,t)+yM(i,n)+_M(i,s)}var vl=class extends Yn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ku=class extends Yn{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y),Io(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xl=class extends Yn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ju=class extends Yn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends Yn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Yn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y),Po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(hp(a,l.x,c.x,u.x,h.x),hp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},bl=Object.freeze({__proto__:null,ArcCurve:Zu,CatmullRomCurve3:ls,CubicBezierCurve:vl,CubicBezierCurve3:Ku,EllipseCurve:Vo,LineCurve:xl,LineCurve3:ju,QuadraticBezierCurve:yl,QuadraticBezierCurve3:_l,SplineCurve:Ml}),Ju=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new bl[s.type]().fromJSON(s))}return this}},Xr=class extends Ju{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new xl(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new yl(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new vl(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ml(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Vo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qr=class i extends st{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=tn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new w,d=new re,f=new w,p=new w,x=new w,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=t;v++){let _=n+v*u*s,y=Math.sin(_),C=Math.cos(_);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*C,o.push(h.x,h.y,h.z),d.x=v/t,d.y=T/(e.length-1),a.push(d.x,d.y);let A=l[3*T+0]*y,D=l[3*T+1],E=l[3*T+0]*C;c.push(A,D,E)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,C=y,T=y+e.length,A=y+e.length+1,D=y+1;r.push(C,T,D),r.push(A,D,T)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Yr=class i extends st{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new w,u=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xn=class i extends st{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],g=n/2,m=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function v(){let y=new w,C=new w,T=0,A=(t-e)/n;for(let D=0;D<=r;D++){let E=[],M=D/r,S=M*(t-e)+e;for(let F=0;F<=s;F++){let P=F/s,U=P*l+a,H=Math.sin(U),I=Math.cos(U);C.x=S*H,C.y=-M*n+g,C.z=S*I,h.push(C.x,C.y,C.z),y.set(H,A,I).normalize(),d.push(y.x,y.y,y.z),f.push(P,1-M),E.push(p++)}x.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){let M=x[E][D],S=x[E+1][D],F=x[E+1][D+1],P=x[E][D+1];(e>0||E!==0)&&(u.push(M,S,P),T+=3),(t>0||E!==r-1)&&(u.push(S,F,P),T+=3)}c.addGroup(m,T,0),m+=T}function _(y){let C=p,T=new re,A=new w,D=0,E=y===!0?e:t,M=y===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let S=p;for(let F=0;F<=s;F++){let U=F/s*l+a,H=Math.cos(U),I=Math.sin(U);A.x=E*I,A.y=g*M,A.z=E*H,h.push(A.x,A.y,A.z),d.push(0,M,0),T.x=H*.5+.5,T.y=I*.5*M+.5,f.push(T.x,T.y),p++}for(let F=0;F<s;F++){let P=C+F,U=S+F;y===!0?u.push(U,U+1,P):u.push(U+1,U,P),D+=3}c.addGroup(m,D,y===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qu=class i extends st{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new w,y=new w,C=new w;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],C),l(_,y,C,v)}function l(v,_,y,C){let T=C+1,A=[];for(let D=0;D<=T;D++){A[D]=[];let E=v.clone().lerp(y,D/T),M=_.clone().lerp(y,D/T),S=T-D;for(let F=0;F<=S;F++)F===0&&D===T?A[D][F]=E:A[D][F]=E.clone().lerp(M,F/S)}for(let D=0;D<T;D++)for(let E=0;E<2*(T-D)-1;E++){let M=Math.floor(E/2);E%2===0?(d(A[D][M+1]),d(A[D+1][M]),d(A[D][M])):(d(A[D][M+1]),d(A[D+1][M+1]),d(A[D+1][M]))}}function c(v){let _=new w;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){let v=new w;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=g(v)/2/Math.PI+.5,C=m(v)/Math.PI+.5;o.push(y,1-C)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],C=o[v+4],T=Math.max(_,y,C),A=Math.min(_,y,C);T>.9&&A<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function p(){let v=new w,_=new w,y=new w,C=new w,T=new re,A=new re,D=new re;for(let E=0,M=0;E<r.length;E+=9,M+=6){v.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),C.copy(v).add(_).add(y).divideScalar(3);let S=g(C);x(T,M+0,v,S),x(A,M+2,_,S),x(D,M+4,y,S)}}function x(v,_,y,C){C<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var cs=class extends Xr{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xr().fromJSON(s))}return this}},MM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Wp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=TM(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let p=t;p<s;p+=t)h=i[p],d=i[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Go(r,o,t,a,l,f,0),o}};function Wp(i,e,t,n,s){let r,o;if(s===HM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=dp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=dp(r,i[r],i[r+1],o);return o&&Hl(o,o.next)&&(Xo(o),o=o.next),o}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hl(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Go(i,e,t,n,s,r,o){if(!i)return;!o&&r&&IM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?EM(i,n,s,r):bM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Xo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=wM(Ws(i),e,t),Go(i,e,t,n,s,r,2)):o===2&&SM(i,e,t,n,s,r):Go(Ws(i),e,t,n,s,r,1);break}}}function bM(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Rr(s,a,r,l,o,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function EM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=eh(f,p,e,t,n),v=eh(x,g,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Rr(a,u,l,h,c,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Rr(a,u,l,h,c,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&Rr(a,u,l,h,c,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Rr(a,u,l,h,c,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function wM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Hl(s,r)&&Xp(s,n,n.next,r)&&Wo(s,r)&&Wo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Xo(n),Xo(n.next),n=i=r),n=n.next}while(n!==i);return Ws(n)}function SM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DM(o,a)){let l=qp(o,a);o=Ws(o,o.next),l=Ws(l,l.next),Go(o,e,t,n,s,r,0),Go(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function TM(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Wp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(UM(c));for(s.sort(AM),r=0;r<s.length;r++)t=RM(s[r],t);return t}function AM(i,e){return i.x-e.x}function RM(i,e){let t=CM(i,e);if(!t)return e;let n=qp(t,i);return Ws(n,n.next),Ws(t,t.next)}function CM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Rr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Wo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&PM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function PM(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function IM(i,e,t,n){let s=i;do s.z===0&&(s.z=eh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,LM(s)}function LM(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function eh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function UM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Rr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function DM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!NM(i,e)&&(Wo(i,e)&&Wo(e,i)&&FM(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Hl(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hl(i,e){return i.x===e.x&&i.y===e.y}function Xp(i,e,t,n){let s=Ya(Vt(i,e,t)),r=Ya(Vt(i,e,n)),o=Ya(Vt(t,n,i)),a=Ya(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&qa(i,t,e)||r===0&&qa(i,n,e)||o===0&&qa(t,i,n)||a===0&&qa(t,e,n))}function qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ya(i){return i>0?1:i<0?-1:0}function NM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wo(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function FM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qp(i,e){let t=new th(i.i,i.x,i.y),n=new th(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dp(i,e,t,n){let s=new th(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function th(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function HM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Lo=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];fp(e),pp(n,e);let o=e.length;t.forEach(fp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,pp(n,t[l]);let a=MM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function fp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Xs=class i extends st{constructor(e=new cs([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:OM,_,y=!1,C,T,A,D;m&&(_=m.getSpacedPoints(u),y=!0,d=!1,C=m.computeFrenetFrames(u,!1),T=new w,A=new w,D=new w),d||(g=0,f=0,p=0,x=0);let E=a.extractPoints(c),M=E.shape,S=E.holes;if(!Lo.isClockWise(M)){M=M.reverse();for(let te=0,oe=S.length;te<oe;te++){let N=S[te];Lo.isClockWise(N)&&(S[te]=N.reverse())}}let P=Lo.triangulateShape(M,S),U=M;for(let te=0,oe=S.length;te<oe;te++){let N=S[te];M=M.concat(N)}function H(te,oe,N){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(oe,N)}let I=M.length,z=P.length;function O(te,oe,N){let we,ne,ce,ue=te.x-oe.x,Ie=te.y-oe.y,Ee=N.x-te.x,L=N.y-te.y,b=ue*ue+Ie*Ie,B=ue*L-Ie*Ee;if(Math.abs(B)>Number.EPSILON){let V=Math.sqrt(b),G=Math.sqrt(Ee*Ee+L*L),Y=oe.x-Ie/V,de=oe.y+ue/V,xe=N.x-L/G,ge=N.y+Ee/G,Pe=((xe-Y)*L-(ge-de)*Ee)/(ue*L-Ie*Ee);we=Y+ue*Pe-te.x,ne=de+Ie*Pe-te.y;let le=we*we+ne*ne;if(le<=2)return new re(we,ne);ce=Math.sqrt(le/2)}else{let V=!1;ue>Number.EPSILON?Ee>Number.EPSILON&&(V=!0):ue<-Number.EPSILON?Ee<-Number.EPSILON&&(V=!0):Math.sign(Ie)===Math.sign(L)&&(V=!0),V?(we=-Ie,ne=ue,ce=Math.sqrt(b)):(we=ue,ne=Ie,ce=Math.sqrt(b/2))}return new re(we/ce,ne/ce)}let W=[];for(let te=0,oe=U.length,N=oe-1,we=te+1;te<oe;te++,N++,we++)N===oe&&(N=0),we===oe&&(we=0),W[te]=O(U[te],U[N],U[we]);let X=[],ie,ye=W.concat();for(let te=0,oe=S.length;te<oe;te++){let N=S[te];ie=[];for(let we=0,ne=N.length,ce=ne-1,ue=we+1;we<ne;we++,ce++,ue++)ce===ne&&(ce=0),ue===ne&&(ue=0),ie[we]=O(N[we],N[ce],N[ue]);X.push(ie),ye=ye.concat(ie)}for(let te=0;te<g;te++){let oe=te/g,N=f*Math.cos(oe*Math.PI/2),we=p*Math.sin(oe*Math.PI/2)+x;for(let ne=0,ce=U.length;ne<ce;ne++){let ue=H(U[ne],W[ne],we);he(ue.x,ue.y,-N)}for(let ne=0,ce=S.length;ne<ce;ne++){let ue=S[ne];ie=X[ne];for(let Ie=0,Ee=ue.length;Ie<Ee;Ie++){let L=H(ue[Ie],ie[Ie],we);he(L.x,L.y,-N)}}}let ze=p+x;for(let te=0;te<I;te++){let oe=d?H(M[te],ye[te],ze):M[te];y?(A.copy(C.normals[0]).multiplyScalar(oe.x),T.copy(C.binormals[0]).multiplyScalar(oe.y),D.copy(_[0]).add(A).add(T),he(D.x,D.y,D.z)):he(oe.x,oe.y,0)}for(let te=1;te<=u;te++)for(let oe=0;oe<I;oe++){let N=d?H(M[oe],ye[oe],ze):M[oe];y?(A.copy(C.normals[te]).multiplyScalar(N.x),T.copy(C.binormals[te]).multiplyScalar(N.y),D.copy(_[te]).add(A).add(T),he(D.x,D.y,D.z)):he(N.x,N.y,h/u*te)}for(let te=g-1;te>=0;te--){let oe=te/g,N=f*Math.cos(oe*Math.PI/2),we=p*Math.sin(oe*Math.PI/2)+x;for(let ne=0,ce=U.length;ne<ce;ne++){let ue=H(U[ne],W[ne],we);he(ue.x,ue.y,h+N)}for(let ne=0,ce=S.length;ne<ce;ne++){let ue=S[ne];ie=X[ne];for(let Ie=0,Ee=ue.length;Ie<Ee;Ie++){let L=H(ue[Ie],ie[Ie],we);y?he(L.x,L.y+_[u-1].y,_[u-1].x+N):he(L.x,L.y,h+N)}}}J(),K();function J(){let te=s.length/3;if(d){let oe=0,N=I*oe;for(let we=0;we<z;we++){let ne=P[we];me(ne[2]+N,ne[1]+N,ne[0]+N)}oe=u+g*2,N=I*oe;for(let we=0;we<z;we++){let ne=P[we];me(ne[0]+N,ne[1]+N,ne[2]+N)}}else{for(let oe=0;oe<z;oe++){let N=P[oe];me(N[2],N[1],N[0])}for(let oe=0;oe<z;oe++){let N=P[oe];me(N[0]+I*u,N[1]+I*u,N[2]+I*u)}}n.addGroup(te,s.length/3-te,0)}function K(){let te=s.length/3,oe=0;_e(U,oe),oe+=U.length;for(let N=0,we=S.length;N<we;N++){let ne=S[N];_e(ne,oe),oe+=ne.length}n.addGroup(te,s.length/3-te,1)}function _e(te,oe){let N=te.length;for(;--N>=0;){let we=N,ne=N-1;ne<0&&(ne=te.length-1);for(let ce=0,ue=u+g*2;ce<ue;ce++){let Ie=I*ce,Ee=I*(ce+1),L=oe+we+Ie,b=oe+ne+Ie,B=oe+ne+Ee,V=oe+we+Ee;Me(L,b,B,V)}}}function he(te,oe,N){l.push(te),l.push(oe),l.push(N)}function me(te,oe,N){Ue(te),Ue(oe),Ue(N);let we=s.length/3,ne=v.generateTopUV(n,s,we-3,we-2,we-1);Re(ne[0]),Re(ne[1]),Re(ne[2])}function Me(te,oe,N,we){Ue(te),Ue(oe),Ue(we),Ue(oe),Ue(N),Ue(we);let ne=s.length/3,ce=v.generateSideWallUV(n,s,ne-6,ne-3,ne-2,ne-1);Re(ce[0]),Re(ce[1]),Re(ce[3]),Re(ce[1]),Re(ce[2]),Re(ce[3])}function Ue(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function Re(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return BM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new bl[s.type]().fromJSON(s)),new i(n,e.options)}},OM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-h),new re(d,1-p),new re(x,1-m)]:[new re(a,1-l),new re(u,1-h),new re(f,1-p),new re(g,1-m)]}};function BM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var us=class i extends Qu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var qs=class i extends st{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new w,p=new re;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let v=m+g,_=v,y=v+n+1,C=v+n+2,T=v+1;a.push(_,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var rn=class i extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new w,d=new w,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],_=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){let T=C/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(T+y,1-_),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let _=u[m][v+1],y=u[m][v],C=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&f.push(_,y,T),(m!==n-1||l<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wt=class i extends st{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,v=(s+1)*f+p;o.push(x,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ys=class i extends st{constructor(e=new _l(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,l=new w,c=new re,u=new w,h=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),v(),m()}function g(_){u=e.getPointAt(_/t,u);let y=o.normals[_],C=o.binormals[_];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,D=Math.sin(A),E=-Math.cos(A);l.x=E*y.x+D*C.x,l.y=E*y.y+D*C.y,l.z=E*y.z+D*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let C=(s+1)*(_-1)+(y-1),T=(s+1)*_+(y-1),A=(s+1)*_+y,D=(s+1)*(_-1)+y;p.push(C,T,D),p.push(T,A,D)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new bl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var El=class extends Qe{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ht=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends ht{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wl=class extends Tn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $a(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function mp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Yp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var hs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nh=class extends hs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jd,endingEnd:jd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jd:r=e,a=2*t-n;break;case Qd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jd:o=e,l=2*n-t;break;case Qd:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let C=0;C!==a;++C)r[C]=m*o[u+C]+v*o[c+C]+_*o[l+C]+y*o[h+C];return r}},ih=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},sh=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&zM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Br;var ds=class extends $n{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Or;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends $n{};Sl.prototype.ValueTypeName="color";var Ni=class extends $n{};Ni.prototype.ValueTypeName="number";var rh=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Mt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fi=class extends $n{InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends $n{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Or;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends $n{};Hi.prototype.ValueTypeName="vector";var Tl=class{constructor(e="",t=-1,n=[],s=V0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(GM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=kM(l);l=mp(l,1,u),c=mp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ni(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,p,x){if(f.length!==0){let g=[],m=[];Yp(f,g,m,p),g.length!==0&&x.push(new h(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(let x in f){let g=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){let _=d[p];g.push(_.time),m.push(_.morphTarget===x?1:0)}s.push(new Ni(".morphTargetInfluence["+x+"]",g,m))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Hi,f+".position",d,"pos",s),n(Fi,f+".quaternion",d,"rot",s),n(Hi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function VM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ni;case"vector":case"vector2":case"vector3":case"vector4":return Hi;case"color":return Sl;case"quaternion":return Fi;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function GM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=VM(i.type);if(i.times===void 0){let t=[],n=[];Yp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ss={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},oh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},WM=new oh,Oi=class{constructor(e){this.manager=e!==void 0?e:WM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},ah=class extends Error{constructor(e,t){super(e),this.response=t}},qo=class extends Oi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ss.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ai[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){v();function v(){h.read().then(({done:_,value:y})=>{if(_)m.close();else{x+=y.byteLength;let C=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,A=u.length;T<A;T++){let D=u[T];D.onProgress&&D.onProgress(C)}m.enqueue(y),v()}},_=>{m.error(_)})}}});return new Response(g)}else throw new ah(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ss.add(e,c);let u=Ai[e];delete Ai[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var lh=class extends Oi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ss.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fo("img");function l(){u(),ss.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ps=class extends Oi{constructor(e){super(e)}load(e,t,n,s){let r=new ln,o=new lh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},$r=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Al=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$c=new Te,gp=new w,vp=new w,Yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(gp),vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vp),t.updateMatrixWorld(),$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ch=class extends Yo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=zr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Rl=class extends $r{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xp=new Te,Eo=new w,Zc=new w,uh=class extends Yo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eo),Zc.copy(n.position),Zc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zc),n.updateMatrixWorld(),s.makeTranslation(-Eo.x,-Eo.y,-Eo.z),xp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xp)}},Cl=class extends $r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hh=class extends Yo{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ms=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},An=class extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Pl=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ss.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ss.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ss.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ss.add(e,l),r.manager.itemStart(e)}};var Il=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=yp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function yp(){return performance.now()}var Dh="\\[\\]\\.:\\/",XM=new RegExp("["+Dh+"]","g"),Nh="[^"+Dh+"]",qM="[^"+Dh.replace("\\.","")+"]",YM=/((?:WC+[\/:])*)/.source.replace("WC",Nh),$M=/(WCOD+)?/.source.replace("WCOD",qM),ZM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),KM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),jM=new RegExp("^"+YM+$M+ZM+KM+"$"),JM=["material","materials","bones","map"],dh=class{constructor(e,t,n){let s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(e){let t=jM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);JM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=dh;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uE=new Float32Array(1);var _p=new Te,Ll=class{constructor(e,t,n=0,s=1/0){this.ray=new Bs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _p.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_p),this}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(Mp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,n,t);return n.sort(Mp),n}};function Mp(i,e){return i.distance-e.distance}function fh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)fh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);function Fh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new st,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=$p(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=$p(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function $p(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new it(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Hh(i,e){if(e===Up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Zo||e===Dl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Zo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var xs=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ms.extractUrlBase(e);o=ms.resolveURL(c,this.path)}else o=ms.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qp){try{o[xt.KHR_BINARY_GLTF]=new rd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new Vh;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new od(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new ad;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new ld;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function QM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kh=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],yn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $s(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cl(u),c.distance=h;break;case"spot":c=new Rl(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Vh=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],yn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],yn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],yn),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],yn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ed=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},td=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},nd=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},id=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},sd=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let x=new Te,g=new w,m=new Mt,v=new w(1,1,1),_=new Gt(p.geometry,p.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(g,m,v));for(let y in l)if(y==="_COLOR_0"){let C=l[y];_.instanceColor=new Rt(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);zt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Qp="glTF",Ko=12,Zp={JSON:1313821514,BIN:5130562},rd=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ko,r=new DataView(e,Ko),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Zp.JSON){let c=new Uint8Array(e,Ko+o,a);this.content=n.decode(c)}else if(l===Zp.BIN){let c=Ko+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},od=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=ud[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=ud[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Kr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let x=f.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}h(f)},a,c,yn,d)})})}},ad=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ld=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},Ol=class extends hs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,x=p-c,g=-2*f+3*d,m=f-d,v=1-g,_=m-d+h;for(let y=0;y!==a;y++){let C=o[x+y+a],T=o[x+y+l]*u,A=o[p+y+a],D=o[p+y]*u;r[y]=v*C+_*T+g*A+m*D}return r}},eb=new Mt,cd=class extends Ol{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return eb.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kp={9728:gn,9729:In,9984:bh,9985:To,9986:Tr,9987:ui},jp={33071:Pi,33648:Do,10497:Hs},Oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tb={CUBICSPLINE:void 0,LINEAR:Br,STEP:Or},Bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),i.DefaultMaterial}function Zs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ib(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function sb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rb(i){let e,t=i.extensions&&i.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zh(t.attributes):e=i.indices+":"+zh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+zh(i.targets[n]);return e}function zh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ob(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ab=new Te,dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ps(this.options.manager):this.textureLoader=new Pl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Zs(r,a,s),Bi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ms.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Oh[s.type],a=Kr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new it(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Oh[s.type],c=Kr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==h){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(v);_||(x=new c(a,m*f,s.count*f/u),_=new Gr(x,f/u),t.cache.add(v,_)),g=new ks(_,l,d%f/u,p)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),g=new it(x,l,p);if(s.sparse!==void 0){let m=Oh.SCALAR,v=Kr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new v(o[1],_,s.sparse.count*m),T=new c(o[2],y,s.sparse.count*l);a!==null&&(g=new it(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,D=C.length;A<D;A++){let E=C[A];if(g.setX(E,T[A*l]),l>=2&&g.setY(E,T[A*l+1]),l>=3&&g.setZ(E,T[A*l+2]),l>=4&&g.setW(E,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Kp[d.magFilter]||In,u.minFilter=Kp[d.minFilter]||ui,u.wrapS=jp[d.wrapS]||Hs,u.wrapT=jp[d.wrapT]||Hs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==In,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new ln(x);g.needsUpdate=!0,d(g)}),t.load(ms.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Bi(h,o),h.userData.mimeType=o.mimeType||ob(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Vs,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ko,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ht}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let h=s[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],yn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=lt);let u=r.alphaMode||Bh.OPAQUE;if(u===Bh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Bh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==It&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==It&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==It){let h=r.emissiveFactor;a.emissive=new pe().setRGB(h[0],h[1],h[2],yn)}return r.emissiveTexture!==void 0&&o!==It&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Bi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Zs(s,h,r),h})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=rb(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Jp(new st,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?nb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let x=u[f],g=o[f],m,v=c[f];if(g.mode===Zn.TRIANGLES||g.mode===Zn.TRIANGLE_STRIP||g.mode===Zn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ul(x,v):new Fe(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Zn.TRIANGLE_STRIP?m.geometry=Hh(m.geometry,Dl):g.mode===Zn.TRIANGLE_FAN&&(m.geometry=Hh(m.geometry,Zo));else if(g.mode===Zn.LINES)m=new ml(x,v);else if(g.mode===Zn.LINE_STRIP)m=new Wr(x,v);else if(g.mode===Zn.LINE_LOOP)m=new gl(x,v);else if(g.mode===Zn.POINTS)m=new Gs(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&sb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Bi(m,r),g.extensions&&Zs(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Zs(s,h[0],r),h[0];let d=new Ze;r.extensions&&Zs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Ve.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Te;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dl(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],x=h[3],g=h[4],m=[];for(let v=0,_=d.length;v<_;v++){let y=d[v],C=f[v],T=p[v],A=x[v],D=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let E=n._createAnimationTracks(y,C,T,A,D);if(E)for(let M=0;M<E.length;M++)m.push(E[M])}return new Tl(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ab)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new zo:c.length>1?u=new Ze:c.length===1?u=c[0]:u=new zt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Bi(u,r),r.extensions&&Zs(n,u,r),r.matrix!==void 0){let h=new Te;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),Bi(r,n),n.extensions&&Zs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Tn||d instanceof ln)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];vs[r.path]===vs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(vs[r.path]){case vs.weights:c=Ni;break;case vs.rotation:c=Fi;break;case vs.position:case vs.scale:c=Hi;break;default:switch(n.itemSize){case 1:c=Ni;break;case 2:case 3:default:c=Hi;break}break}let u=s.interpolation!==void 0?tb[s.interpolation]:Br,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+vs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Fi?cd:Ol;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lb(i,e,t){let n=e.attributes,s=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){let u=hd(Kr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,l=new w;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=hd(Kr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Jp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=ud[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return gt.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Bi(i,e),lb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ib(i,e.targets,t):i})}var Bl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cb=new fi(-1,1,1,-1,0,1),fd=class extends st{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},ub=new fd,ys=class{constructor(e){this._mesh=new Fe(ub,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var jr=class extends kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Qe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gs.clone(e.uniforms),this.material=new Qe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jo=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zl=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jr(Bl),this.copyPass.material.blending=hi,this.clock=new Il}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jo!==void 0&&(o instanceof jo?n=!0:o instanceof zl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vl=class extends kn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var em={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Jr=class i extends kn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new wn(r,o,{type:si});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new wn(r,o,{type:si});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=em;this.highPassUniforms=gs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Bl;this.copyUniforms=gs.clone(u.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:vn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new It,this.fsQuad=new ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Qe({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Qe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Jr.BlurDirectionX=new re(1,0);Jr.BlurDirectionY=new re(0,1);var tm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gl=class extends kn{constructor(){super();let e=tm;this.uniforms=gs.clone(e.uniforms),this.material=new El({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$o&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jo=new w;function Kn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Jo.copy(e),Jo[n]=0,Jo.normalize();let c=.5*o/(o+a),u=1-Jo.angleTo(i)/l;return Math.sign(Jo[t])===1?u*c:a/(o+a)+c+c*(1-u)}var gi=class extends zs{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,l=new w,c=new w(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new w,x=.5/s;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Kn(p,l,"z","y",r,n),d[m+1]=1-Kn(p,l,"y","z",r,t);break;case 1:p.set(-1,0,0),d[m+0]=1-Kn(p,l,"z","y",r,n),d[m+1]=1-Kn(p,l,"y","z",r,t);break;case 2:p.set(0,1,0),d[m+0]=1-Kn(p,l,"x","z",r,e),d[m+1]=Kn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Kn(p,l,"x","z",r,e),d[m+1]=1-Kn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-Kn(p,l,"x","y",r,e),d[m+1]=1-Kn(p,l,"y","x",r,t);break;case 5:p.set(0,0,-1),d[m+0]=Kn(p,l,"x","y",r,e),d[m+1]=1-Kn(p,l,"y","x",r,t);break}}};var to={};y0(to,{AXIS_H:()=>vi,BODY_R:()=>Wl,CRUISE:()=>Ms,FLOAT_H:()=>Qr,GRAVITY:()=>vd,HEIGHT_GLSL:()=>ql,HILLS:()=>Xt,JUMP_V:()=>gd,LANE:()=>pd,LAYOUT_LANE:()=>md,SLIDE:()=>qt,SWELL:()=>Qo,WATER:()=>_s,baseHeight:()=>Un,clamp01:()=>Ks,hills:()=>nm,laneX:()=>Dn,slopeAt:()=>Xl,smoothstep:()=>eo,surface:()=>zi,waves:()=>im});var _s=0,vi=1.5,pd=.7,md=.85,Qr=.34,Wl=.4,Ms=7,gd=6.2,vd=17,qt={half:1.1,moat:-.6,crown:.1},Xt=[[-16.7,0],[-11.8,-.5],[-5.6,.36],[-1,0]],Qo={amp:.1,wavelength:7.4},Ks=i=>Math.min(1,Math.max(0,i)),eo=(i,e,t)=>{let n=Ks((t-i)/(e-i));return n*n*(3-2*n)},Dn=i=>(1-i)*.7;function nm(i){if(i<=Xt[0][0]||i>=Xt[Xt.length-1][0])return 0;for(let e=0;e<Xt.length-1;e++){let[t,n]=Xt[e],[s,r]=Xt[e+1];if(i<s)return n+(r-n)*eo(t,s,i)}return 0}function Un(i,e,t){let n=Ks((i.tunnelStart-t)*.5),s=Math.abs(e),r=qt.crown*Ks(1-s*s/(qt.half*qt.half)),o=eo(qt.half,qt.half+.55,s),a=n*((r+nm(t))*(1-o)+qt.moat*o),l=Ks((t-i.tunnelStart)*.5)*Ks((i.tunnelEnd-t)*.5),c=l*Qo.amp*Math.sin((t-i.tunnelStart)*2*Math.PI/Qo.wavelength),u=Math.sqrt(Math.max(.01,i.tunnelRadius*i.tunnelRadius-1.5*1.5)),h=Ks((s-(u-.45))/.45);return 0+a+c+l*.45*h*h}function im(i,e,t){return .06*Math.sin(e*.9-t*3.1+i*.35)+.035*Math.sin(e*2.3-t*5.3-i*1.1+1.7)+.02*Math.sin(e*4.7-t*7.9+i*2.3+.4)+.012*Math.sin(i*6+t*4+e*.5)}var zi=(i,e,t,n)=>Un(i,e,t)+im(e,t,n),Xl=(i,e,t)=>(Un(i,e,t+.25)-Un(i,e,t-.25))/.5,ql=`
uniform vec4 uTunnel;   // start z, end z, radius, axis height
uniform float uTime;
float bwSmooth(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float bwHills(float z) {
  if (z <= ${Xt[0][0].toFixed(3)} || z >= ${Xt[3][0].toFixed(3)}) return 0.0;
  if (z < ${Xt[1][0].toFixed(3)}) return mix(${Xt[0][1].toFixed(3)}, ${Xt[1][1].toFixed(3)}, bwSmooth(${Xt[0][0].toFixed(3)}, ${Xt[1][0].toFixed(3)}, z));
  if (z < ${Xt[2][0].toFixed(3)}) return mix(${Xt[1][1].toFixed(3)}, ${Xt[2][1].toFixed(3)}, bwSmooth(${Xt[1][0].toFixed(3)}, ${Xt[2][0].toFixed(3)}, z));
  return mix(${Xt[2][1].toFixed(3)}, ${Xt[3][1].toFixed(3)}, bwSmooth(${Xt[2][0].toFixed(3)}, ${Xt[3][0].toFixed(3)}, z));
}
float bwBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = ${qt.crown.toFixed(3)} * clamp(1.0 - ax * ax / ${(qt.half*qt.half).toFixed(3)}, 0.0, 1.0);
  float edge = bwSmooth(${qt.half.toFixed(3)}, ${(qt.half+.55).toFixed(3)}, ax);
  float slide = before * mix(crown + bwHills(xz.y), ${qt.moat.toFixed(3)}, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * ${Qo.amp.toFixed(3)} * sin((xz.y - uTunnel.x) * ${(2*Math.PI/Qo.wavelength).toFixed(5)});
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
`;var Vn=`
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
`,sm=`
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
`,rm=`
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
`,om=i=>`
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
`,am=`
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
`;var js=8,lm=`
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
`,cm=`
${ql}
${lm}
uniform vec4 uRipples[${js}];   // x, u, start time, strength (track coordinates)
// Each vertex knows its track position (sideways x, along u) and the path frame there, so the sheet
// follows the 3D path: it climbs, drops and banks with the bent drum (track.js).
attribute vec2 aTrack;
attribute vec3 aP, aR, aU, aT;
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;
float rippleHeight(vec2 xz) {
  float h = 0.0;
  for (int i = 0; i < ${js}; i++) {
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
`,um=`
${ql}
${Vn}
${lm}
uniform vec4 uRipples[${js}];
uniform float uFlow;        // current speed (m/s)
uniform float uSlideHalf;   // half width of the raised slide
uniform vec3 uDeep, uShallow, uTurq, uGlow, uSky, uPink, uGold, uRingA, uRingB, uFog, uSunDir;
uniform vec3 uRings;        // first ring u, spacing, count
uniform float uOpen;        // the Screen 3 opening look on the slide (opening.js); 0 = the original water
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;

float ripples(vec2 xz) {
  float f = 0.0;
  for (int i = 0; i < ${js}; i++) {
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
`,hm=`
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
`,dm=`
${Vn}
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
`;var $E=`
${Vn}
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
`,fm=`
varying vec3 vDir;
void main() { vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }
`,pm=`
uniform vec3 uTop, uMid, uHorizon, uBottom;
varying vec3 vDir;
void main() {
  float y = vDir.y;
  vec3 c = y > 0.0 ? mix(uHorizon, mix(uMid, uTop, smoothstep(0.25, 0.9, y)), smoothstep(0.0, 0.25, y)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.3, y));
  gl_FragColor = vec4(c, 1.0);
}
`,mm=`
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
`,gm=`
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
`,vm=`
attribute float size; attribute float alpha; attribute float kind;
uniform float uScale;
varying float vAlpha; varying float vKind;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  vAlpha = alpha; vKind = kind;
  gl_Position = projectionMatrix * mv;
}
`,xm=`
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
`,ym={uniforms:{tDiffuse:{value:null},uSat:{value:1.32},uContrast:{value:1.12},uVignette:{value:.18},uOpen:{value:0},uOpenExposure:{value:.9},uOpenVibrance:{value:.35},uOpenDepth:{value:.16}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},_m=`
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Mm=`
${Vn}
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
`;var Yl=(i,e,t,n,s)=>eo(e,t,i)*(1-eo(n,s,i));function Em(i,e={}){let t=i.tunnelStart+(e.straight||0),n=P=>.27*Yl(P,t+5,t+8,t+11,t+13.5)-.34*Yl(P,t+14.5,t+17.5,t+21,t+24),s=P=>.055*Yl(P,t+6,t+9,t+12,t+15)-.06*Yl(P,t+18,t+21,t+26,t+29),r=P=>Math.atan(7*7*s(P)/9.81),o=i.startZ-34,a=i.tunnelEnd+14,l=.05,c=Math.ceil((a-o)/l)+1,u=new Float64Array(c*3),h=new Float64Array(c*3),d=new Float64Array(c*3),f=new Float64Array(c*3),p=new Float64Array(c*3),x=0,g=0,m=o,v=0,_=(P,U)=>{let H=n(P);return[Math.cos(H)*Math.sin(U),Math.sin(H),Math.cos(H)*Math.cos(U)]};for(let P=0;P<c;P++){let U=o+P*l,H=P*3,I=n(U),z=r(U),O=_(U,v),W=[Math.cos(v),0,-Math.sin(v)],X=[O[1]*W[2]-O[2]*W[1],O[2]*W[0]-O[0]*W[2],O[0]*W[1]-O[1]*W[0]],ie=Math.cos(z),ye=Math.sin(z);u[H]=x,u[H+1]=g,u[H+2]=m,f[H]=O[0],f[H+1]=O[1],f[H+2]=O[2];for(let K=0;K<3;K++)h[H+K]=W[K]*ie-X[K]*ye,d[H+K]=X[K]*ie+W[K]*ye;p[H]=I,p[H+1]=v,p[H+2]=z;let ze=v+s(U+l*.5)*l*.5,J=_(U+l*.5,ze);x+=J[0]*l,g+=J[1]*l,m+=J[2]*l,v+=s(U+l*.5)*l}let y=P=>{let U=Math.min(c-1.0001,Math.max(0,(P-o)/l)),H=Math.floor(U);return[H,U-H]},C=(P,U,H,I)=>{let z=U*3;return I.x=P[z]+(P[z+3]-P[z])*H,I.y=P[z+1]+(P[z+4]-P[z+1])*H,I.z=P[z+2]+(P[z+5]-P[z+2])*H,I};function T(P,U={P:new w,R:new w,U:new w,T:new w}){let[H,I]=y(P);C(u,H,I,U.P),C(h,H,I,U.R).normalize(),C(d,H,I,U.U).normalize(),C(f,H,I,U.T).normalize();let z=P-o<0?P-o:P-(o+(c-1)*l);return(P<o||P>o+(c-1)*l)&&U.P.addScaledVector(U.T,z),U}let A={P:new w,R:new w,U:new w,T:new w};function D(P,U,H,I=new w){return T(H,A),I.copy(A.P).addScaledVector(A.R,P).addScaledVector(A.U,U)}function E(P,U,H,I,z=new w){return T(I,A),z.set(0,0,0).addScaledVector(A.R,P).addScaledVector(A.U,U).addScaledVector(A.T,H)}function M(P,U=new Mt){return T(P,A),U.setFromRotationMatrix(new Te().makeBasis(A.R,A.U,A.T))}function S(P,U=new Te){let H=P.elements[14];T(H,A);let I=new Te().makeBasis(A.R,A.U,A.T).setPosition(A.P);return U.multiplyMatrices(I,new Te().makeTranslation(0,0,-H)).multiply(P)}function F(P){let[U,H]=y(P),I=U*3,z=180/Math.PI;return{pitch:(p[I]+(p[I+3]-p[I])*H)*z,heading:(p[I+1]+(p[I+4]-p[I+1])*H)*z,bank:(p[I+2]+(p[I+5]-p[I+2])*H)*z}}return{u0:o,u1:a,frame:T,map:D,dir:E,quaternion:M,mapMatrix:S,angles:F,pitch:n,turn:s,bankOf:r}}function Tm({scene:i,mats:e,track:t}){let n=new Ze;n.name="scenery",i.add(n);let s=[],r=e.env,o=e.gold,a=new ht({color:15903035,metalness:1,roughness:.3,envMap:r,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),l=new ht({color:2381823,metalness:.35,roughness:.26,envMap:r,envMapIntensity:1.2}),c=new ht({color:1521336,metalness:.3,roughness:.3,envMap:r,envMapIntensity:1}),u=new ht({color:1343628,metalness:.3,roughness:.25,envMap:r,envMapIntensity:1}),h=new ht({color:16178356,metalness:.25,roughness:.35,envMap:r,envMapIntensity:.9}),d=Sm(16740296),f=Sm(16773370),p=new It({color:new pe(2.4,2.05,1.35)}),x=(E,M=n)=>(M.add(E),E),g=(E,M,S,F)=>{let P=new Fe(E,M);return S&&P.position.set(...S),x(P,F)},m=(E,M,S=n)=>{let F=new Ze;return F.position.set(...E),F.quaternion.setFromUnitVectors(new w(0,0,1),new w(...M).normalize()),x(F,S)},v=(E,M,S,F,P,U=0,H=0)=>{let I=new Gt(new rn(F,10,8),P,S),z=new Te;for(let O=0;O<S;O++){let W=H+O/S*Math.PI*2;I.setMatrixAt(O,z.makeTranslation(Math.cos(W)*M,Math.sin(W)*M,U))}return x(I,E)},_=(E,M,S,F,P,U=0)=>{let H=db(),I=new Gt(H,P,S),z=new Te,O=new Mt,W=new w;for(let X=0;X<S;X++){let ie=X/S*Math.PI*2,ye=F*(.8+.4*ea(X*7.1));O.setFromEuler(new Sn(ea(X)*6,ea(X+3)*6,ea(X+9)*6)),W.set(ye,ye,ye),I.setMatrixAt(X,z.compose(new w(Math.cos(ie)*M,Math.sin(ie)*M,U+(ea(X+5)-.5)*F),O,W))}return x(I,E)},y=new Map;function C(E,M,S){let F=`${E}|${M}|${S}`;if(y.has(F))return y.get(F);let P=new cs,U=E*.8,H=Math.PI*2/M;for(let O=0;O<M;O++){let W=O*H;[[U,W],[E*.97,W+H*.1],[E,W+H*.22],[E,W+H*.34],[E*.97,W+H*.46],[U,W+H*.56]].forEach(([ie,ye],ze)=>{let J=Math.cos(ye)*ie,K=Math.sin(ye)*ie;O===0&&ze===0?P.moveTo(J,K):P.lineTo(J,K)})}P.closePath();let I=new Xr;I.absarc(0,0,E*.42,0,Math.PI*2,!0),P.holes.push(I);let z=new Xs(P,{depth:S,bevelEnabled:!0,bevelThickness:S*.35,bevelSize:E*.05,bevelSegments:3,curveSegments:6});return z.translate(0,0,-S/2),y.set(F,z),z}{let M=m([-2.25,-.3,-10],[.94,.05,-.34]),S=x(new Ze,M);g(new Wt(1.3,.24,20,72),o,null,S),g(new Wt(1.3-.32,.1,12,64),a,null,S);let F=new Gt(new gi(.26,.2,.5,2,.05),a,28),P=new Te,U=new Mt;for(let I=0;I<28;I++){let z=I/28*Math.PI*2;U.setFromAxisAngle(new w(0,0,1),z),F.setMatrixAt(I,P.compose(new w(Math.cos(z)*(1.3+.2),Math.sin(z)*(1.3+.2),0),U,new w(1,1,1)))}x(F,S),g(new xn(1.3-.36,1.3-.36,.16,48),l,null,S).rotation.x=Math.PI/2;for(let I=0;I<6;I++){let z=g(new gi(.16,2.275,.12,2,.05),o,[0,0,.12],S);z.rotation.z=I/6*Math.PI}g(new xn(.32,.36,.4,32),o,null,S).rotation.x=Math.PI/2,g(new rn(.2,20,14),l,[0,0,.24],S),v(S,1.3-.08,18,.05,p,.24),v(S,1.3-.08,18,.05,p,-.24,.17),_(S,1.3+.42,22,.17,d,-.15),s.push({obj:S,axis:new w(0,0,1),speed:-.55});let H=g(new xn(.22,.22,1.2,24),a,null,M);H.rotation.x=Math.PI/2,H.position.z=-.6,g(new Wt(.3,.06,10,28),c,[0,0,-.35],M)}{let E=x(new Ze);E.position.set(2.05,-.55,-12),E.rotation.y=.3,g(new gi(1.3,1.1,1.4,4,.2),h,null,E);for(let S of[-.25,.27])g(new gi(1.36,.12,1.46,2,.05),a,[0,S,0],E);g(new Wt(.3,.07,10,32),o,[0,.02,-.72],E),g(new Yr(.26,32),l,[0,.02,-.71],E).rotation.y=Math.PI,v(E,.3,10,.035,p,-.77);let M=x(new Ze,E);M.position.y=.6,M.rotation.x=Math.PI/2,_(M,.45,9,.2,d),_(M,.15,4,.18,f)}for(let E of[1,-1]){let M=[[E*2.9,-.7,-12.5],[E*2.5,.25,-10.8],[E*2.75,.55,-7.5],[E*2.45,1.15,-4.6],[E*2.9,1.5,-2.2]],S=new ls(M.map(F=>new w(...F)));g(new Ys(S,60,.1,14),o);for(let F=.08;F<1;F+=.16){let P=S.getPoint(F),U=S.getTangent(F);g(new Wt(.12,.045,8,20),c,[P.x,P.y,P.z]).quaternion.setFromUnitVectors(new w(0,0,1),U)}}let T=new Ze;T.name="tunnelDecor",i.add(T);let A=[],D=null;if(t){let{TR:E,L:M,W:S}=t,F=[[0,1.25,2.1],[.2,1.6,2.3]],P=M.tunnelRadius*.955,U=2.3,H=new Wt(P,.06,8,112),I=new Wt(P,.17,8,112),z=new rn(.055,8,6),O=0;for(let ne=M.tunnelStart+1.4;ne<M.tunnelEnd-.8;ne+=U,O++){let ce=new pe(...F[O%2]),ue=new It({color:ce.clone()}),Ie=new Fe(H,ue);Ie.matrixAutoUpdate=!1,E.mapMatrix(new Te().makeTranslation(0,S.WATER+S.AXIS_H,ne),Ie.matrix),T.add(Ie);let Ee=new It({color:new pe(0,.22,.42),transparent:!0,blending:vn,depthWrite:!1}),L=new Fe(I,Ee);L.matrixAutoUpdate=!1,L.matrix.copy(Ie.matrix),L.renderOrder=3,T.add(L);let b=new Gt(z,new It({color:new pe(2.4,2.8,2.9)}),28),B=new Te,V=new Te;for(let G=0;G<28;G++){let Y=G/28*Math.PI*2;V.makeTranslation(Math.cos(Y)*P,S.WATER+S.AXIS_H+Math.sin(Y)*P,ne+.08),E.mapMatrix(V,B),b.setMatrixAt(G,B)}b.frustumCulled=!1,T.add(b),A.push({mat:ue,base:ce,haloMat:Ee,haloBase:Ee.color.clone(),u:ne})}let W=[-10,15,65,90,115,165,190].map(ne=>Ve.degToRad(ne)),X=[];for(let ne=M.tunnelStart+1.4+U/2;ne<M.tunnelEnd-1.5;ne+=U)X.push(ne);let ie=X.length*W.length,ye=M.tunnelRadius*.92,ze=new It({map:hb(),color:16777215,alphaTest:.5,side:lt}),J=new Gt(new Ln(.62,.34),ze,ie),K=new Gt(new gi(.72,.44,.06,2,.04),o,ie),_e=new Te,he=new Te,me=new Te,Me=new Te,Ue=new w,Re=new w(0,0,1),te=new w,oe=[],N=0;for(let ne of X)for(let ce of W)Ue.set(Math.sin(ce),-Math.cos(ce),0),te.set(-Math.cos(ce),-Math.sin(ce),0),_e.makeBasis(Ue,Re,te).setPosition(Math.cos(ce)*ye,S.WATER+S.AXIS_H+Math.sin(ce)*ye,ne),E.mapMatrix(_e,me),J.setMatrixAt(N,me),he.multiplyMatrices(_e,Me.makeTranslation(0,0,-.04)),E.mapMatrix(he,me),K.setMatrixAt(N,me),J.setColorAt(N,new pe(1,1,1)),oe.push(ne),N++;J.frustumCulled=K.frustumCulled=!1,T.add(K,J),D={mesh:J,u:oe,c:new pe};let we=0;for(let ne=M.tunnelStart+3;ne<M.tunnelEnd-2;ne+=4.6,we++)for(let ce of[1,-1]){let ue=ce*(.62+.12*(we%2)),Ie=ce*Math.cos(ue*ce)*(M.tunnelRadius-.12),Ee=S.WATER+S.AXIS_H+Math.sin(Math.abs(ue))*(M.tunnelRadius-.12),L=new Ze;L.matrixAutoUpdate=!1;let b=new w(-Ie,S.WATER+S.AXIS_H-Ee,0).normalize(),B=new Te().compose(new w(Ie,Ee,ne),new Mt().setFromUnitVectors(new w(0,0,1),b),new w(1,1,1));E.mapMatrix(B,L.matrix),T.add(L);let V=.34+.08*((we+(ce>0?1:0))%2),G=new Ze;L.add(G);let Y=g(C(V,Math.round(V*26),V*.3),o,null,G),de=g(new xn(V*.4,V*.4,V*.3,24),(we+ce)%2?u:l,null,Y);de.rotation.x=Math.PI/2,g(new rn(V*.15,14,10),o,[0,0,V*.18],Y),v(Y,V*.62,6,V*.06,p,V*.18),s.push({obj:Y,axis:new w(0,0,1),speed:ce*(.8+.2*(we%3))})}}return{root:n,tunnel:T,update(E,M){for(let S of A){let F=wm(S.u,M);S.mat.color.copy(S.base).multiplyScalar(.75+.4*F),S.haloMat.color.copy(S.haloBase).multiplyScalar(.6+.8*F)}if(D){for(let S=0;S<D.u.length;S++)D.mesh.setColorAt(S,D.c.setScalar(1.15+.6*wm(D.u[S]+1.15,M)));D.mesh.instanceColor.needsUpdate=!0}for(let S of s)S.obj.rotateOnAxis(S.axis,S.speed*E)}}}function wm(i,e){let t=.5+.5*Math.sin(i*.55-e*2.6);return t*t}function hb(){let i=document.createElement("canvas");i.width=256,i.height=140;let e=i.getContext("2d"),t=(r,o,a,l,c)=>{e.beginPath(),e.moveTo(r+c,o),e.arcTo(r+a,o,r+a,o+l,c),e.arcTo(r+a,o+l,r,o+l,c),e.arcTo(r,o+l,r,o,c),e.arcTo(r,o,r+a,o,c),e.closePath()};t(4,4,248,132,26),e.fillStyle="#d61c9a",e.fill();let n=e.createLinearGradient(0,14,0,126);n.addColorStop(0,"#ff9be2"),n.addColorStop(.5,"#ff5cc8"),n.addColorStop(1,"#f23cb4"),t(14,14,228,112,18),e.fillStyle=n,e.fill(),e.fillStyle="rgba(255, 236, 250, 0.92)";for(let r=0;r<7;r++)t(36+r*28,34,12,72,6),e.fill();let s=new pi(i);return s.colorSpace=At,s.anisotropy=4,s}function Sm(i){let e=new ht({color:i,roughness:.95,metalness:0,emissive:i,emissiveIntensity:.18});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.0);
        totalEmissiveRadiance += diffuseColor.rgb * rim * 0.55; }`)},e}var xd=null;function db(){if(xd)return xd;let i=new us(1,3),e=i.attributes.position,t=new w;for(let n=0;n<e.count;n++){t.fromBufferAttribute(e,n);let s=1+.16*Math.sin(t.x*9.1+t.y*4.3)*Math.sin(t.y*7.7+t.z*5.9)+.08*Math.sin(t.z*17+t.x*13);t.multiplyScalar(s),e.setXYZ(n,t.x,t.y,t.z)}return i.computeVertexNormals(),xd=i,i}function ea(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}var fb=2.6,xi={towers:[{at:[3,1.2,-2],height:5.9,yaw:180},{at:[-3,1.2,-2],height:5.9,yaw:0}],gears:[{at:[1.72,1.05,-1.7],dir:[-.2,.05,-.98],d:.8,spin:.9},{at:[2,.45,-2.4],dir:[-.25,.1,-.96],d:.92,spin:-.75},{at:[1.53,.26,-3.1],dir:[-.1,.1,-.99],d:.56,spin:1.2},{at:[-1.66,1,-1.7],dir:[.2,.05,-.98],d:.76,spin:-.9},{at:[-2,.5,-2.5],dir:[.25,.1,-.96],d:.96,spin:.7},{at:[-1.53,.23,-3.2],dir:[.1,.1,-.99],d:.55,spin:-1.2},{at:[2.05,3.15,-2.6],dir:[-.3,0,-.95],d:1.1,spin:-.7}],pipes:[{onTower:0,lift:.3,anchor:"down",size:.95,rot:[0,-135,0],pour:!0},{onTower:1,lift:.3,anchor:"down",size:.95,rot:[0,-45,0],pour:!0}],crowns:[{at:[0,4.72,2.12],width:2.1,rot:[0,180,0]}]};function Am({scene:i,models:e,env:t,gold:n,glowTexture:s,fallGeometry:r,fallMaterial:o,fx:a}){let l=new Ze;l.name="entranceDecor",i.add(l);let c={value:0},u=new ht({color:2381823,metalness:.35,roughness:.26,envMap:t,envMapIntensity:1.2}),h=[],d=[],f=[],p=(S,F,P={})=>{let U=new ht({map:S.map,metalnessMap:S.metalnessMap,roughnessMap:S.roughnessMap,normalMap:S.normalMap,metalness:1,roughness:1,envMap:t,envMapIntensity:P.envI??1.1,emissive:16777215,emissiveMap:S.map,emissiveIntensity:P.glow??.2,side:lt});return P.fluid&&(U.onBeforeCompile=H=>{H.uniforms.uFluidTime=c,H.vertexShader=H.vertexShader.replace("void main() {",`varying vec3 vFluidP;
void main() {
  vFluidP = position;`),H.fragmentShader=H.fragmentShader.replace("void main() {",`varying vec3 vFluidP;
uniform float uFluidTime;
${Vn}
void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+am)}),U.customProgramCacheKey=()=>"decor:"+F,U},x=(S,F,P)=>{let U=null;S.scene.traverse(I=>{I.isMesh&&(U=U||p(I.material,F,P),I.material=U)}),S.scene.updateMatrixWorld(!0);let H=new $t().setFromObject(S.scene);return{scene:S.scene,box:H,size:H.getSize(new w),centre:H.getCenter(new w),mat:U}},g={tower:x(e.tower,"tower",{fluid:!0,glow:.18}),gear:x(e.gear,"gear",{glow:.22}),pipe:x(e.pipe,"pipe",{glow:.2}),crown:x(e.crown,"crown",{glow:.25})},m=(S,F,P)=>{let U=S.scene.clone();return U.scale.setScalar(F),U.position.copy(P).multiplyScalar(-F),U},v=(S,F)=>{let P=new w(...F),U=new w,H=new w,I=-1/0,z=0,O=[];S.scene.traverse(W=>{if(!W.isMesh)return;let X=W.geometry.attributes.position;for(let ie=0;ie<X.count;ie+=3){U.fromBufferAttribute(X,ie).applyMatrix4(W.matrixWorld);let ye=U.dot(P);O.push(U.clone(),ye),I=Math.max(I,ye)}});for(let W=0;W<O.length;W+=2)O[W+1]>I-.04&&(H.add(O[W]),z++);return H.divideScalar(Math.max(1,z))},_={down:v(g.pipe,[0,-1,0]),side:v(g.pipe,[-1,0,0]),centre:g.pipe.centre},y=(()=>{let S=new w,F=-1/0,P=0,U=0,H=0,I=g.tower.box,z=I.max.x-I.min.x;return g.tower.scene.traverse(O=>{if(!O.isMesh)return;let W=O.geometry.attributes.position;for(let X=0;X<W.count;X++)S.fromBufferAttribute(W,X).applyMatrix4(O.matrixWorld),S.x>I.max.x-z*.16&&S.y<I.min.y+(I.max.y-I.min.y)*.55&&(F=Math.max(F,S.y));for(let X=0;X<W.count;X++)S.fromBufferAttribute(W,X).applyMatrix4(O.matrixWorld),S.x>I.max.x-z*.16&&Math.abs(S.y-F)<.02&&(P+=S.x,U+=S.z,H++)}),new w(P/Math.max(1,H),F,U/Math.max(1,H))})(),C=S=>S.map(F=>Ve.degToRad(F)),T={towers:[],gears:[],pipes:[],crowns:[]},A=[];function D(){for(let S of Object.values(T))for(let F of S)l.remove(F);for(let S of A)l.remove(S);for(let S of Object.keys(T))T[S]=[];A.length=0,h.length=0,d.length=0;for(let S of xi.towers){let F=g.tower,P=S.height/F.size.y,U=new Ze;if(U.position.set(...S.at),U.rotation.y=Ve.degToRad(S.yaw),U.add(m(F,P,new w(F.centre.x,F.box.min.y,F.centre.z))),s){let H=new as(new Di({map:s,color:new pe(.25,.75,1.6),transparent:!0,opacity:.55,blending:vn,depthWrite:!1}));H.position.set(0,S.height*.57,0),H.scale.setScalar(S.height*.42),H.renderOrder=3,U.add(H),d.push({sp:H,phase:d.length*1.7})}if(S.at[1]>-.4&&n){let H=F.size.x*P*.36,I=S.at[1]+.75,z=new Fe(new xn(H,H*1.12,I,32),n);z.position.y=-I/2,U.add(z);for(let O of[-.12,-I*.55]){let W=new Fe(new Wt(H*1.03,.07,10,40),u);W.rotation.x=Math.PI/2,W.position.y=O,U.add(W)}}U.updateMatrixWorld(!0),U.userData.stubTop=y.clone().sub(new w(F.centre.x,F.box.min.y,F.centre.z)).multiplyScalar(P).applyMatrix4(U.matrixWorld),l.add(U),T.towers.push(U)}for(let S of xi.gears){let F=g.gear,P=S.d/Math.max(F.size.x,F.size.y),U=new Ze;U.position.set(...S.at),U.quaternion.setFromUnitVectors(new w(0,0,1),new w(...S.dir).normalize());let H=new Ze;H.rotation.z=S.at[0]*7.3,H.add(m(F,P,F.centre)),U.add(H),h.push({obj:H,speed:S.spin}),l.add(U),T.gears.push(U)}for(let S of xi.pipes){let F=g.pipe,P=S.size/Math.max(F.size.x,F.size.y,F.size.z),U=_[S.anchor||"centre"],H=S.onTower!==void 0?T.towers[S.onTower].userData.stubTop.clone():new w(...S.at),I=new Ze;if(S.lift&&n){let z=S.size*.16,O=new Fe(new xn(z,z,S.lift+.1,20),n);O.position.copy(H).add(new w(0,(S.lift-.1)/2,0)),l.add(O),A.push(O),H.y+=S.lift}if(I.position.copy(H),I.rotation.set(...C(S.rot)),S.mirror&&(I.scale.x=-1),I.add(m(F,P,U)),l.add(I),T.pipes.push(I),S.pour&&r&&o){I.updateMatrixWorld(!0);let z=S.anchor==="side"?"down":"side",O=_[z].clone().sub(U).multiplyScalar(P).applyMatrix4(I.matrixWorld),W=new w(...z==="side"?[-1,0,0]:[0,-1,0]).applyQuaternion(I.getWorldQuaternion(new Mt));W.y=0,W.lengthSq()<1e-4&&W.set(Math.sign(H.x)||1,0,0),W.normalize();let X=Math.max(.3,O.y+.62),ie=z==="side"?.55:.15,ye=S.size*.36,ze=new Fe(r(ie,X,ye,ye*1.5),o);ze.position.copy(O),ze.lookAt(O.clone().add(W)),ze.renderOrder=2,l.add(ze),A.push(ze);let J=O.clone().addScaledVector(W,ie);if(J.y=-.6,a){let K=xi.pipes.indexOf(S);f[K]?f[K].pos.copy(J):(f[K]={pos:J,rate:14,kind:1,spread:.25,up:1.1,size:.34},a.addSource(f[K]))}}}for(let S of xi.crowns){let F=g.crown,P=S.width/F.size.x,U=new Ze;U.position.set(...S.at),U.rotation.set(...C(S.rot)),U.add(m(F,P,F.centre)),l.add(U),T.crowns.push(U)}return l.updateMatrixWorld(!0),E()}function E(S=3.9){let F={},P=new w;for(let[U,H]of Object.entries(T)){let I=1/0;for(let z of H)z.traverse(O=>{if(!O.isMesh)return;let W=O.geometry.attributes.position;for(let X=0;X<W.count;X+=5)P.fromBufferAttribute(W,X).applyMatrix4(O.matrixWorld),P.z<S&&P.y<fb&&(I=Math.min(I,Math.abs(P.x)))});F[U]=Number.isFinite(I)?+I.toFixed(2):null}return F}let M=D();return{root:l,clear:M,place:D,update(S,F){c.value=F;for(let P of h)P.obj.rotation.z+=P.speed*S;for(let P of d)P.sp.material.opacity=.42+.16*Math.sin(F*2.3+P.phase)}}}var Cm=typeof window<"u"&&!window.__BW_CLASSIC__&&!/[?&]classic(=|&|$)/.test(location.search)&&!!(window.__BW_PHASE_A__||/[?&]phase-?a(=|&|$)/i.test(location.search)),Pm={wallHue:305,wallSat:.32,wallDim:.14,goldHue:36,goldSoften:.18,hotSoften:.2,glowAbove:3.3,glowZ:1.2,glowSize:[4.5,3.2,8],glowColor:[1,.86,.98],glowMix:.35,glowAdd:.06},yd={hotHue:300,hotSoften:.22,goldHue:34,goldSoften:.3},Im={stone:[.62,.38,.66],glow:[.95,.8,.95],glowMix:.55,glowReach:3.6},_d={deep:[.03,.4,.88],light:[.3,.75,1],icyMix:.85,crackScale:[4.4,2.2],crack:1,crackW:.11,collarR:.5,collarW:.7,edgeFoam:1,sparkle:2,skyCut:.6},$l=typeof window<"u"&&window.__BW_PHASE_A_TUNE__||{};Object.assign(Pm,$l.castle||{});Object.assign(yd,$l.tower||{});Object.assign(Im,$l.wall||{});Object.assign(_d,$l.water||{});var Ut=i=>(+i).toFixed(4),Rm=i=>`vec2(${i.map(Ut).join(", ")})`,Js=i=>`vec3(${i.map(Ut).join(", ")})`,pb=`
vec3 paRgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 paHsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function Lm({scene:i,castle:e,waterSheets:t,axisY:n,tunnelStart:s}){let r={castleMaterials:0,towerMeshes:0,wallFacing:!1,waterSheet:!1},o=null,a=null;if(i.traverse(c=>{if(!(!c.isMesh||!c.material||!c.material.customProgramCacheKey||c.material.customProgramCacheKey()!=="decor:tower")){if(!a){o=c.material;let u=yd,h=o.onBeforeCompile;a=o.clone(),a.onBeforeCompile=(d,f)=>{h.call(o,d,f),d.fragmentShader=d.fragmentShader.replace("void main() {",`${pb}
vec3 paTower(vec3 lin) {
  vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = paRgb2hsv(c); float h = hsv.x * 360.0;
  float hot = smoothstep(295.0, 312.0, h) * smoothstep(0.45, 0.7, hsv.y);
  hsv.x = mix(hsv.x, ${Ut(u.hotHue/360)}, hot * 0.5); hsv.y *= 1.0 - ${Ut(u.hotSoften)} * hot; hsv.z *= 1.0 - 0.05 * hot;
  float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
  hsv.x = mix(hsv.x, ${Ut(u.goldHue/360)}, gold * 0.4); hsv.y *= 1.0 - ${Ut(u.goldSoften)} * gold;
  return pow(paHsv2rgb(hsv), vec3(2.2));
}
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  diffuseColor.rgb = paTower(diffuseColor.rgb);   // Phase A`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = paTower(totalEmissiveRadiance);   // Phase A`)},a.customProgramCacheKey=()=>"decor:tower|phaseA:"+JSON.stringify(yd)}c.material=a,r.towerMeshes++}}),i.traverse(c=>{if(r.wallFacing||!c.isMesh||!c.material||!c.material.uniforms||!c.material.uniforms.uWall)return;let u=Im,h=c.material.clone();h.fragmentShader=`uniform vec3 uWall, uShade; varying vec2 vP;
      void main() {   // Phase A (?phaseA)
        float r = length(vP);
        vec3 c = mix(${Js(u.stone)}, ${Js(u.glow)}, (1.0 - smoothstep(2.95, ${Ut(u.glowReach)}, r)) * ${Ut(u.glowMix)});
        c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);
        c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));   // the thin dark line right at the ring stays
        float a = 1.0 - smoothstep(3.55, 3.92, r);                 // fades into the castle's own wall, as before
        gl_FragColor = vec4(c * a, a);
      }`,c.material=h,r.wallFacing=!0}),e){let c=Pm,u=`
      { // Phase A (?phaseA): the approved castle's pink-lavender stone, softer peach gold, calmer pink, and a soft glow
        vec3 c = pow(max(diffuseColor.rgb, 0.0), vec3(1.0 / 2.2));
        vec3 hsv = bwRgb2hsv(c);
        float h = hsv.x * 360.0;
        float lav = smoothstep(215.0, 245.0, h) * (1.0 - smoothstep(330.0, 345.0, h));
        float pale = max(lav, 1.0 - smoothstep(0.04, 0.09, hsv.y)) * (1.0 - smoothstep(0.22, 0.42, hsv.y)) * smoothstep(0.45, 0.75, hsv.z);
        hsv.x = mix(hsv.x, ${Ut(c.wallHue/360)}, pale * 0.75);
        hsv.y = mix(hsv.y, max(hsv.y, ${Ut(c.wallSat)}), pale);
        hsv.z *= 1.0 - ${Ut(c.wallDim)} * pale;
        float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
        hsv.x = mix(hsv.x, ${Ut(c.goldHue/360)}, gold * 0.4);
        hsv.y *= 1.0 - ${Ut(c.goldSoften)} * gold;
        hsv.z *= 1.0 - 0.06 * gold;
        float hot = smoothstep(300.0, 318.0, h) * smoothstep(0.55, 0.8, hsv.y);
        hsv.y *= 1.0 - ${Ut(c.hotSoften)} * hot;
        c = bwHsv2rgb(hsv);
        vec3 dg = (vShadeP - vec3(0.0, ${Ut(n+c.glowAbove)}, ${Ut(c.glowZ)})) / ${Js(c.glowSize)};
        float glowK = exp(-dot(dg, dg));
        c = mix(c, ${Js(c.glowColor)}, glowK * ${Ut(c.glowMix)}) + ${Js(c.glowColor)} * glowK * ${Ut(c.glowAdd)};
        diffuseColor.rgb = pow(c, vec3(2.2));
      }`;e.traverse(h=>{if(!h.isMesh||!h.material||!h.material.onBeforeCompile)return;let d=h.material,f=d.onBeforeCompile,p=d.customProgramCacheKey.bind(d),x=d.clone();x.onBeforeCompile=(g,m)=>{f.call(d,g,m),g.fragmentShader.includes("bwRgb2hsv")&&g.fragmentShader.includes("vShadeP")&&(g.fragmentShader=g.fragmentShader.replace("#include <color_fragment>",u+`
#include <color_fragment>`))},x.customProgramCacheKey=()=>p()+"|phaseA-castle:"+JSON.stringify(c),h.material=x,r.castleMaterials++})}let l=(t||[]).find(c=>(c.geometry.computeBoundingBox(),c.geometry.boundingBox.min.z<s-5));if(l){let c=l.material,u=c.fragmentShader,h=`  float bubbleShade = 0.0;
`,d=`    col += (vec3(0.55, 0.92, 1.0) * lines * 0.3 + vec3(0.75, 0.95, 1.0) * caustic * 0.3 * (1.0 - moat)) * openK;
  }`,f="  vec3 foamCol = vec3(0.9, 0.97, 1.0) * (0.92 + 0.18 * NdotL);";if([h,d,f].every(p=>u.split(p).length===2)){let p=c.clone();p.uniforms=c.uniforms,p.fragmentShader=u.replace(h,h+`  float paSlide = 0.0;   // Phase A
`).replace(d,d.replace(/\n  }$/,"")+`
`+mb(_d)+`
  }`).replace(f,`  lit -= env * fresnel * 0.28 * (1.0 - inDrum * 0.6) * ${Ut(_d.skyCut)} * paSlide;   // Phase A: less pale sky on the slide
`+f),l.material=p,r.waterSheet=!0}}return r}var mb=i=>`
    { // Phase A (?phaseA): icy cyan water, a bold white crackle web, a thicker white foam collar and more sparkles
      float slideK = openK * (1.0 - moat);
      paSlide = slideK;
      vec3 icy = mix(${Js(i.deep)}, ${Js(i.light)}, clamp(0.3 + crest * 0.4 + hollow * 0.3, 0.0, 1.0));
      col = mix(col, icy, ${Ut(i.icyMix)} * slideK);
      vec2 iw = bwVoronoi((xz + warp * 0.35) * ${Rm(i.crackScale)} - vec2(0.0, flowT * 0.55) + 11.0);
      vec2 iw2 = bwVoronoi((xz + warp * 0.25) * ${Rm(i.crackScale)} * 2.0 - vec2(0.0, flowT * 0.6) + 23.0);
      float crack = 1.0 - smoothstep(0.015, ${Ut(i.crackW)}, iw.y - iw.x);
      float crack2 = (1.0 - smoothstep(0.01, ${Ut(i.crackW*.66)}, iw2.y - iw2.x)) * 0.6;
      col = mix(col, vec3(0.93, 0.99, 1.0), clamp(max(crack, crack2) * (0.55 + 0.45 * patchy) * ${Ut(i.crack)}, 0.0, 1.0) * slideK);
      float collar = exp(-pow(max(0.0, rM - ${Ut(i.collarR)}) / ${Ut(i.collarW)}, 2.0));
      foam = max(foam, smoothstep(0.3, 0.75, collar * (0.75 + 0.5 * stream)) * openK);
      foam = max(foam, edgeBand * smoothstep(0.35, 0.7, stream) * ${Ut(i.edgeFoam)} * openK);
      vec2 sp2 = xz * vec2(11.0, 6.0) - vec2(0.0, flowT * 0.35), sc2 = floor(sp2);
      float sh2 = bwHash(sc2 + 57.3);
      float star2 = 1.0 - smoothstep(0.0, 0.035, length((fract(sp2) - 0.5) * vec2(0.09, 0.17)));
      glint += step(0.93, sh2) * star2 * pow(max(0.0, sin(t * (4.0 + sh2 * 5.0) + sh2 * 60.0)), 4.0) * ${Ut(i.sparkle)} * slideK;
    }`;var _n={ringColours:[[.16,.8,1],[.25,.45,1],[1,.45,.85],[.72,.56,1],[.75,.95,1]],ringGlow:.6,ringFar:{from:5,to:16,white:.6,bright:.9,keep:1},wallDeep:[[.01,.035,.26],[.1,.26,.8]],swirl:{radius:1.93,rowStep:.3,around:72,from:4,to:176,strength:1.3,white:1,blue:.3,bands:1.7,twist:.35,far:1},water:{azure:[.1,.4,.95],azureMix:.35,foam:.75},foam:{count:96,bright:1.12,cells:2.6,zones:[{w:.3,dx:[-.8,.8],du:[-.7,-.15],r:[.2,.36],sink:.4,drift:.4,out:.25},{w:.34,side:[.5,1],du:[-.5,.4],r:[.28,.5],sink:.12,drift:.4,out:.25},{w:.16,dx:[-.95,.95],du:[-1.45,-.8],r:[.15,.3],sink:.5,drift:.5,out:.2},{w:.2,ring:[.42,.56],r:[.12,.22],sink:.2,drift:.3,out:.15}],life:[.6,1.25]},spray:{rate:110,size:[.07,.15]},whirl:{ahead:14,radius:1.9,strength:1.25,exitFade:[7,2]},camera:{lookY:1.1},bubbles:{count:32,du:[-2.6,13],x:[.38,1.55],h:[.35,2.5],r:[.05,.28],flow:1.6,film:1.7},sparkles:{rate:34,du:[3,15],r:[.2,1.7]},brush:{pink:[1,.34,.72],white:[1,.92,.98],royal:[.1,.2,.9],deep:[.05,.1,.55],tufts:26,core:.45},gem:{color:[.7,.45,1],emissive:[.62,.36,1]}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round3,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(_n,i)}function Um({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,soap:a,round4:l=!1}){let c=t.tunnelStart,u=t.tunnelEnd,h=n.WATER+n.AXIS_H,d=Md(15930),f={},p=()=>Ve.smoothstep(s.z,c-.9,c+.4);return f.foam=gb({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:d,inside:p,big:l?1.3:1}),f.swirl=yb({scene:i,TR:e,TS:c,TE:u,axisH:h,updaters:r,time:o,inside:p,mascot:s}),a&&(f.bubbles=bb({scene:i,TR:e,W:n,L:t,mascot:s,updaters:r,time:o,rnd:d,soap:a,inside:p,axisH:h})),l&&(f.whirl=Eb({scene:i,TR:e,TE:u,axisH:h,mascot:s,updaters:r,time:o,inside:p})),f}function gb({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:a,inside:l,big:c=1}){let u=_n.foam,h=u.count,d=new us(1,4),f=new An;f.setAttribute("position",d.attributes.position),f.setAttribute("normal",d.attributes.normal);let p=new Rt(new Float32Array(h*4),4).setUsage(zn),x=new Rt(new Float32Array(h),1);f.setAttribute("aBlob",p),f.setAttribute("aSeed",x),f.instanceCount=h;let g={uTime:o,uBright:{value:u.bright},uCells:{value:u.cells},uKey:{value:new w(.35,.85,-.42).normalize()}},m=new Qe({uniforms:g,vertexShader:vb,fragmentShader:xb}),v=new Fe(f,m);v.frustumCulled=!1,v.name="r3Foam",v.visible=!1,v.renderOrder=2,i.add(v);let _=u.zones.reduce((E,M)=>E+M.w,0),y=E=>E[0]+a()*(E[1]-E[0]),C=[],T=(E,M)=>{let S=a()*_,F=u.zones[0];for(let P of u.zones){if(S<P.w){F=P;break}S-=P.w}if(E.z=F,E.r=y(F.r)*(F.side?c:1),E.life=y(u.life),E.age=M?a()*E.life:0,F.ring){let P=Ve.degToRad(-200+a()*220),U=y(F.ring);E.dx=Math.cos(P)*U,E.du=Math.sin(P)*U*.8}else F.side?(E.dx=(a()<.5?-1:1)*y(F.side),E.du=y(F.du)):(E.dx=y(F.dx),E.du=y(F.du));E.out=Math.sign(E.dx||1)*F.out*(.5+a())};for(let E=0;E<h;E++){let M={};T(M,!0),C.push(M),x.array[E]=a()}let A=new w,D=null;return r.push((E,M)=>{let S=l();if(v.visible=S>0,!v.visible){D=null;return}D===null&&(D=s.x),D+=(s.x-D)*(1-Math.exp(-E/.12));let F=p.array;for(let P=0;P<h;P++){let U=C[P];U.age+=E,U.age>=U.life&&T(U,!1),U.du-=U.z.drift*E,U.dx+=U.out*E;let H=U.age/U.life,I=Math.pow(Math.sin(Math.PI*Math.min(1,H*1.2+.08)),.55)*S,z=D+U.dx,O=s.z+U.du,W=U.r*I;e.map(z,n.surface(t,z,O,M)-U.z.sink*U.r+W*.25,O,A),F[P*4]=A.x,F[P*4+1]=A.y,F[P*4+2]=A.z,F[P*4+3]=Math.max(W,1e-4)}p.needsUpdate=!0}),{heaps:h,trianglesEach:d.attributes.position.count/3}}var vb=`
${Vn}
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
`,xb=`
${Vn}
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
`;function yb({scene:i,TR:e,TS:t,TE:n,axisH:s,updaters:r,time:o,inside:a,mascot:l}){let c=_n.swirl,u=Math.ceil((n+4-(t+.2))/c.rowStep)+1,h=c.around+1,d=new Float32Array(u*h*3),f=new Float32Array(u*h*2),p=[],x=new w;for(let y=0;y<u;y++){let C=t+.2+y*c.rowStep;for(let T=0;T<h;T++){let A=Ve.degToRad(c.from+(c.to-c.from)*T/c.around);if(e.map(Math.cos(A)*c.radius,s+Math.sin(A)*c.radius,C,x),d.set([x.x,x.y,x.z],(y*h+T)*3),f.set([A,C],(y*h+T)*2),T<c.around&&y<u-1){let D=y*h+T;p.push(D,D+1,D+h,D+1,D+h+1,D+h)}}}let g=new st;g.setAttribute("position",new it(d,3)),g.setAttribute("aAU",new it(f,2)),g.setIndex(p),g.computeBoundingSphere();let m={uTime:o,uStrength:{value:c.strength},uEnds:{value:new re(t,n+4)},uFade:{value:0},uMix:{value:new re(c.white,c.blue)},uBands:{value:new re(c.bands,c.twist)},uFar:{value:c.far}},v=new Qe({uniforms:m,vertexShader:_b,fragmentShader:Mb,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt,side:lt}),_=new Fe(g,v);return _.name="r3Swirl",_.renderOrder=3,_.visible=!1,_.frustumCulled=!1,i.add(_),r.push(()=>{let y=a();_.visible=y>0,m.uFade.value=y}),{triangles:p.length/3}}var _b=`
attribute vec2 aAU;
varying vec2 vAU; varying float vDepth;
void main() {
  vAU = aAU;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,Mb=`
${Vn}
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
`;function bb({scene:i,TR:e,W:t,L:n,mascot:s,updaters:r,time:o,rnd:a,soap:l,inside:c,axisH:u}){let h=_n.bubbles,d=h.count,f=new rn(1,26,16),p=new An;p.index=f.index,p.setAttribute("position",f.attributes.position),p.setAttribute("normal",f.attributes.normal);let x=new Rt(new Float32Array(d*4),4).setUsage(zn),g=new Float32Array(d*4);for(let E=0;E<d;E++)g.set([a()*6.28,0,.05,0],E*4);p.setAttribute("inst",x),p.setAttribute("motion",new Rt(g,4)),p.instanceCount=d;let m={uTime:o,uMotion:{value:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:.04},uFilm:{value:h.film}},v=new Qe({uniforms:m,vertexShader:l.vertex,fragmentShader:l.fragment,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt}),_=new Fe(p,v);_.frustumCulled=!1,_.renderOrder=7,_.name="r3Bubbles",_.visible=!1,i.add(_);let y=E=>E[0]+a()*(E[1]-E[0]),C=[],T=(E,M)=>{E.u=s.z+(M?y(h.du):h.du[1]-a()*2),E.x=(a()<.5?-1:1)*y(h.x),E.h=y(h.h),E.h>u+.6&&(E.x*=.8),E.r=h.r[0]+Math.pow(a(),1.8)*(h.r[1]-h.r[0])};for(let E=0;E<d;E++){let M={};T(M,!0),C.push(M)}let A=new w,D=!1;return r.push(E=>{let M=c();if(_.visible=M>0,!_.visible){D=!1;return}if(!D){for(let F of C)T(F,!0);D=!0}m.uAvoid.value.copy(s.root.position);let S=x.array;for(let F=0;F<d;F++){let P=C[F];P.u+=h.flow*E,P.u<s.z+h.du[0]&&T(P,!1),e.map(P.x,P.h,P.u,A),S[F*4]=A.x,S[F*4+1]=A.y,S[F*4+2]=A.z,S[F*4+3]=P.r*M}x.needsUpdate=!0}),{count:d}}function Eb({scene:i,TR:e,TE:t,axisH:n,mascot:s,updaters:r,time:o,inside:a}){let l=_n.whirl,c={uTime:o,uFade:{value:0},uStrength:{value:l.strength}},u=new Qe({uniforms:c,vertexShader:wb,fragmentShader:Sb,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt,side:lt}),h=new Fe(new Yr(1,96),u);h.name="r3Whirlpool",h.renderOrder=1,h.visible=!1,h.frustumCulled=!1,i.add(h);let d={P:new w,R:new w,U:new w,T:new w},f=new Te;return r.push(()=>{let p=s.z+l.ahead,x=a()*(1-Ve.smoothstep(p,t-l.exitFade[0],t-l.exitFade[1]));h.visible=x>.001,c.uFade.value=x,h.visible&&(e.frame(Math.min(p,t-.5),d),h.position.copy(d.P).addScaledVector(d.U,n),f.makeBasis(d.R,d.U,d.T.clone().negate()),h.quaternion.setFromRotationMatrix(f),h.scale.setScalar(l.radius))}),{ahead:l.ahead,radius:l.radius}}var wb="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Sb=`
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
`;function Md(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var dn={straight:4,emerge:[7.5,11,1.6],lining:{radius:2,from:-56,to:236,rowStep:.25,around:96,deep:[.005,.012,.14],mid:[.02,.065,.46],cyan:[.05,.48,.92],spacing:1.15,streaks:.4,line:.7,far:.25},rings:{radius:1.93,tube:.045,glow:[.2,.75,1.25],every:1.15},gold:{radius:1.97,tube:.085,every:3,color:[1,.72,.28]},grade:{contrast:1.2,saturation:1.15,exposure:.84,pivot:.5},crown:{petals:32,radius:[.44,.72],height:[.55,1.05],width:[.3,.5],life:[.5,.95],flare:.55,curl:.35,alpha:1.6},water:{middle:[.03,.5,.82],side:[.015,.15,.55],mix:.75,crest:.3,froth:.9,churn:.95},pompom:{count:320,rim:48,radius:.92,depth:.5,cap:80,size:.115,long:1.25,glow:.28,sheen:.32,strands:.35,right:[[.42,[[.1,.2,.86],[.13,.25,.95]]],[.58,[[1,.95,.98]]],[.78,[[1,.5,.8],[1,.42,.76]]],[9,[[1,.95,.98],[1,.86,.94]]]],left:[[.4,[[1,.36,.74]]],[.62,[[1,.95,.98],[1,.86,.94]]],[9,[[1,.4,.76],[1,.32,.7]]]]}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round4,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(dn,i)}function Dm({scene:i,TR:e,L:t,W:n,updaters:s,time:r,env:o,mascot:a,hide:l=[]}){let c=t.tunnelStart,u=t.tunnelEnd,h=n.WATER+n.AXIS_H;for(let f of l)f&&(f.visible=!1);let d={hidden:l.filter(Boolean).length};return d.lining=Tb({scene:i,TR:e,TS:c,TE:u,axisH:h,time:r}),d.rings=Cb({scene:i,TR:e,TS:c,TE:u,axisH:h,env:o,time:r}),a&&(d.crown=Lb({scene:i,TR:e,L:t,W:n,mascot:a,updaters:s,time:r,TS:c})),d}function Tb({scene:i,TR:e,TS:t,TE:n,axisH:s,time:r}){let o=dn.lining,a=t-.4,l=n+4,c=Math.ceil((l-a)/o.rowStep)+1,u=o.around+1,h=new Float32Array(c*u*3),d=new Float32Array(c*u*2),f=[],p=new w;for(let _=0;_<c;_++){let y=a+_*o.rowStep;for(let C=0;C<u;C++){let T=Ve.degToRad(o.from+(o.to-o.from)*C/o.around);if(e.map(Math.cos(T)*o.radius,s+Math.sin(T)*o.radius,y,p),h.set([p.x,p.y,p.z],(_*u+C)*3),d.set([T,y],(_*u+C)*2),C<o.around&&_<c-1){let A=_*u+C;f.push(A,A+u,A+1,A+1,A+u,A+u+1)}}}let x=new st;x.setAttribute("position",new it(h,3)),x.setAttribute("aAU",new it(d,2)),x.setIndex(f),x.computeBoundingSphere();let g={uTime:r,uDeep:{value:new pe(...o.deep)},uMid:{value:new pe(...o.mid)},uCyan:{value:new pe(...o.cyan)},uSpacing:{value:o.spacing},uStreaks:{value:o.streaks},uStart:{value:t},uLine:{value:o.line},uFar:{value:o.far}},m=new Qe({uniforms:g,vertexShader:Ab,fragmentShader:Rb,side:lt}),v=new Fe(x,m);return v.name="r4Lining",v.frustumCulled=!1,i.add(v),{triangles:f.length/3,rows:c,cols:u}}var Ab=`
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`,Rb=`
${Vn}
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
`;function Cb({scene:i,TR:e,TS:t,TE:n,axisH:s,env:r,time:o}){let a=dn.rings,l=dn.gold,c=dn.lining,u=[];for(let T=t+.4;T<n+3.5;T+=a.every)u.push(T);let h=new Te,d=(T,A)=>e.mapMatrix(new Te().makeTranslation(0,s,T),A),f=new Wt(a.radius,a.tube,8,128),p={uTime:o,uGlow:{value:new pe(...a.glow)}},x=new Qe({uniforms:p,vertexShader:Pb,fragmentShader:Ib}),g=new Gt(f,x,u.length),m=new Float32Array(u.length);u.forEach((T,A)=>{d(T,h),g.setMatrixAt(A,h),m[A]=T}),f.setAttribute("aU",new Rt(m,1)),g.name="r4GlowRings",g.frustumCulled=!1,i.add(g);let v=u.filter((T,A)=>A%l.every===1).map(T=>T+.3),_=new Wt(l.radius,l.tube,10,128),y=new ht({color:new pe(...l.color),metalness:1,roughness:.22,envMap:r||null,envMapIntensity:1.4,emissive:new pe(.55,.32,.05),emissiveIntensity:.6}),C=new Gt(_,y,v.length);return v.forEach((T,A)=>{d(T,h),C.setMatrixAt(A,h)}),C.name="r4GoldRings",C.frustumCulled=!1,i.add(C),{glow:u.length,gold:v.length,trianglesEach:[f.index.count/3,_.index.count/3]}}var Pb=`
attribute float aU; uniform float uTime; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  vWave = 0.75 + 0.25 * sin(aU * 0.9 - uTime * 3.0);
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Ib=`
uniform vec3 uGlow; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  float face = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  vec3 col = mix(uGlow * 0.6, uGlow * 1.5 + vec3(0.2), pow(face, 3.0) * 0.6) * vWave;
  gl_FragColor = vec4(col, 1.0);
}
`;function Lb({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,TS:a}){let l=dn.crown,c=l.petals,u=Ub(1220),h=new Ln(1,1,4,10);h.translate(0,.5,0);let d=new An;d.index=h.index,d.setAttribute("position",h.attributes.position),d.setAttribute("uv",h.attributes.uv);let f=new Rt(new Float32Array(c*4),4).setUsage(zn),p=new Rt(new Float32Array(c*2),2).setUsage(zn);d.setAttribute("aPetal",f),d.setAttribute("aState",p),d.instanceCount=c;let x={uTime:o,uCentre:{value:new w},uR:{value:new w(1,0,0)},uU:{value:new w(0,1,0)},uT:{value:new w(0,0,1)},uFlare:{value:l.flare},uCurl:{value:l.curl},uFade:{value:0},uAlpha:{value:l.alpha}},g=new Qe({uniforms:x,vertexShader:Db,fragmentShader:Nb,transparent:!0,depthWrite:!1,side:lt,blending:on,blendSrc:cn,blendDst:Yt}),m=new Fe(d,g);m.name="r4SplashCrown",m.frustumCulled=!1,m.renderOrder=6,m.visible=!1,i.add(m);let v=A=>A[0]+u()*(A[1]-A[0]),_=new Float32Array(c),y=new Float32Array(c),C=(A,D)=>{f.array.set([u()*Math.PI*2,v(l.radius),v(l.height),v(l.width)],A*4),_[A]=v(l.life),y[A]=D?u()*_[A]:0,p.array[A*2+1]=u()};for(let A=0;A<c;A++)C(A,!0);let T={P:new w,R:new w,U:new w,T:new w};return r.push((A,D)=>{let E=Ve.smoothstep(s.z,a-.9,a+.4)*(s.air?.25:1);if(m.visible=E>.01,x.uFade.value=E,!m.visible)return;e.frame(s.z,T);let M=n.surface(t,s.x,s.z,D);x.uCentre.value.copy(T.P).addScaledVector(T.R,s.x).addScaledVector(T.U,M),x.uR.value.copy(T.R),x.uU.value.copy(T.U),x.uT.value.copy(T.T);for(let S=0;S<c;S++)y[S]+=A*(.8+.4*Math.min(1.5,s.speed/n.CRUISE)),y[S]>=_[S]&&C(S,!1),p.array[S*2]=y[S]/_[S];p.needsUpdate=!0,f.needsUpdate=!0}),{petals:c}}function Ub(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Db=`
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
  vec2 p = d * reach + tg * across * wid * spread;
  float h = up * hgt * rise - 0.04 - pow(up, 4.0) * uCurl * 0.5 * k;      // the lip droops as it falls
  vec3 w = uCentre + uR * p.x + uT * (p.y * 0.85) + uU * h;
  vUv = vec2(across + 0.5, up); vAge = k; vSeed = aState.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`,Nb=`
${Vn}
uniform float uTime, uFade, uAlpha; varying vec2 vUv; varying float vAge; varying float vSeed;
void main() {
  float x = vUv.x, y = vUv.y;
  float ragged = bwNoise(vec2(x * 9.0 + vSeed * 17.0, uTime * 2.0 + vSeed * 5.0));
  float top = 1.0 - smoothstep(0.72 + 0.2 * ragged, 1.0, y);              // a broken, frothy lip
  float sides = smoothstep(0.0, 0.22, x) * smoothstep(0.0, 0.22, 1.0 - x);
  float body = top * sides;
  if (body < 0.01) discard;
  float rim = smoothstep(0.55, 0.9, y) * top + (1.0 - smoothstep(0.0, 0.35, min(x, 1.0 - x))) * 0.5;
  float streak = smoothstep(0.55, 0.85, bwNoise(vec2(x * 14.0, y * 3.0 - uTime * 3.0 + vSeed * 9.0)));
  vec3 water = vec3(0.35, 0.85, 1.0), white = vec3(1.0, 1.0, 1.04);
  vec3 col = mix(water, white, clamp(rim * 0.9 + streak * 0.4 + y * 0.25, 0.0, 1.0));
  float a = clamp(body * (0.32 + 0.55 * rim + 0.2 * streak) * uAlpha, 0.0, 0.95) * (1.0 - smoothstep(0.75, 1.0, vAge)) * uFade;
  gl_FragColor = vec4(col * a, a);
}
`;var Fb={ringStep:.85,ringIn:2,ringOut:2.5,hazards:[[6,1],[6.7,-1],[16.6,-1],[18.8,1],[26,1],[26.7,-1]],deco:[[11.2,1,52],[21.8,-1,50],[31.5,1,55]],brushR:1,brushX:1.62,brushY:.9,turnIn:24,spin:2.2,bubbles:46,cluster:.03,showAhead:18,showBehind:6},Zl={ringColours:[[1,.36,.8],[.62,.42,1],[.16,.88,1],[.95,.45,.95],[1,.74,.26]],sparkle:.955,bubbles:22,bubbleAngle:[28,152],bubbleR:[1.5,1.95],bubbleMax:.3,clearOut:1.15,hazardWarn:[7.5,3],hazardWidth:.34,hazardMix:.8,grade:{vibrance:.25,knee:.62,roll:1.6},bloom:.22,wallDeep:[[.1,.08,.46],[.58,.38,.98]],brushBlue:[.62,.66,1],brushBlueMix:.45,brushPink:[1,.5,.82]};async function Om({scene:i,TR:e,L:t,W:n,camera:s,updaters:r,mascot:o,bump:a,brushBytes:l,waterSheets:c,soap:u,loaderParse:h,drumMeshes:d,round2:f}){let p=f?Zl:null,x=f&&f.hooks||{},g=f&&f.round3?_n:null,m=f&&f.round4?dn:null,v={rings:0,brushes:0,bubbles:0,panelsHidden:0,waterCopy:!1},_=Fb,y=t.tunnelStart,C=t.tunnelEnd,T=n.WATER+n.AXIS_H,A={value:0},D={P:new w,R:new w,U:new w,T:new w};{let I=[];for(let K=y+.6;K<C-.6+(p?4.4:0);K+=_.ringStep)I.push(K);let z=new qs(_.ringIn,_.ringOut,112,1),O=new Qe({uniforms:{uTime:A,uIn:{value:_.ringIn},uOut:{value:_.ringOut},uSpark:{value:p?p.sparkle:.9}},vertexShader:zb,fragmentShader:g?kb(g):zm,transparent:!0,depthWrite:!1,blending:vn,side:lt}),W=new Gt(z,O,I.length),X=p?(g||p).ringColours.map(K=>new pe(...K)):[new pe(.5,.22,1),new pe(1,.3,.78),new pe(.12,.85,1),new pe(.45,.65,1)],ie=new Te,ye=new Float32Array(I.length);I.forEach((K,_e)=>{e.mapMatrix(new Te().makeTranslation(0,T,K),ie),W.setMatrixAt(_e,ie),W.setColorAt(_e,X[_e%X.length]),ye[_e]=K}),z.setAttribute("aU",new Rt(ye,1)),W.frustumCulled=!1,W.renderOrder=3,W.name="s4Rings",i.add(W),v.rings=I.length;let ze=i.getObjectByName("tunnelDecor"),J=0;if(ze&&ze.traverse(K=>{if(!K.isInstancedMesh)return;let _e=K.geometry.parameters||{};K.geometry.type==="PlaneGeometry"&&Math.abs(_e.width-.62)<.001&&(K.visible=!1,v.panelsHidden++,J=K.count)}),ze&&J&&ze.traverse(K=>{K.isInstancedMesh&&K.visible&&K.count===J&&K.material&&K.material.metalness===1&&(K.visible=!1,v.panelsHidden++)}),p&&ze){let K=new Map,_e=0;ze.traverse(he=>{if(!he.isMesh||he.isInstancedMesh||!he.material||he.material.metalness<.9)return;let me={};if(he.material.color.getHSL(me),!(me.h<.06||me.h>.18)){if(!K.has(he.material)){let Me=he.material.clone();Me.emissive=new pe(1,.68,.18),Me.emissiveIntensity=.45,Me.roughness=Math.min(Me.roughness,.3),K.set(he.material,Me)}he.material=K.get(he.material),_e++}}),v.goldGlow=_e}}let E=new Map;for(let I of d||[]){let z=I.material;if(!E.has(z)){let O=z.clone(),W=z.onBeforeCompile,X=z.customProgramCacheKey.bind(z);O.onBeforeCompile=(ie,ye)=>{W.call(z,ie,ye),ie.fragmentShader=ie.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            vec3 deep = mix(vec3(${(p?(g||p).wallDeep[0]:[.06,.08,.42]).map(ze=>ze.toFixed(3)).join(", ")}), vec3(${(p?(g||p).wallDeep[1]:[.42,.36,.95]).map(ze=>ze.toFixed(3)).join(", ")}), smoothstep(0.05, 0.75, l));
            diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.5, 0.55, 0.95), deep, 0.55); }`)},O.customProgramCacheKey=()=>X()+"|s4-deep"+(g?"3":p?"2":""),E.set(z,O)}I.material=E.get(z)}v.drumMaterialsTinted=E.size;let M=[];if(l){let I=await h(l),z=null;I.scene.traverse(Re=>{Re.isMesh&&!z&&(z=Re)});let O=z.geometry,W=O.attributes.position,X=O.attributes.color,ie=O.index.array,ye=[],ze=new pe;for(let Re=0;Re<ie.length;Re+=3){let te=ie[Re],oe=ie[Re+1],N=ie[Re+2],we=(W.getX(te)+W.getX(oe)+W.getX(N))/3,ne=(W.getY(te)+W.getY(oe)+W.getY(N))/3,ce=Math.hypot(we,ne);ze.setRGB((X.getX(te)+X.getX(oe)+X.getX(N))/3,(X.getY(te)+X.getY(oe)+X.getY(N))/3,(X.getZ(te)+X.getZ(oe)+X.getZ(N))/3);let ue={};ze.getHSL(ue);let Ie=ue.h>.07&&ue.h<.17&&ue.s>.35||ue.h>.66&&ue.h<.84&&ue.s<.45&&ue.l>.55;ce>.96||ne<-.58&&Ie||ne<-.86||ye.push(te,oe,N)}let J=Bb(O,ye,_.cluster);p&&Vb(J,2,.6),v.brushTriangles=J.index.count/3,v.brushTrianglesDelivered=ie.length/3;let K=new ht({vertexColors:!0,roughness:.7,metalness:.15,side:lt}),_e=p?`
  totalEmissiveRadiance += vec3(1.0, 0.88, 0.97) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.5) * 0.4;`:"";p&&(K.roughness=.85);let he=p?`{ vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
        diffuseColor.rgb = mix(c, vec3(${p.brushBlue.join(", ")}) * (0.6 + 0.6 * dot(c, vec3(0.333))), blue * ${p.brushBlueMix}); }`:"";K.onBeforeCompile=Re=>{Re.fragmentShader=Re.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+he).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+_e)},K.customProgramCacheKey=()=>"s4:brush"+(p?"2":""),g&&Nm(K,!1,_e);let me=new ht({color:16762194,metalness:1,roughness:.2,emissive:4860416,emissiveIntensity:.5}),Me=K.clone();Me.onBeforeCompile=Re=>{Re.fragmentShader=Re.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          diffuseColor.rgb = mix(c, vec3(${p?p.brushPink.join(", "):"1.0, 0.42, 0.78"}) * (${p?"0.62 + 0.6":"0.5 + 0.7"} * dot(c, vec3(0.333))), blue * 0.92); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+_e)},Me.customProgramCacheKey=()=>"s4:brushPink"+(p?"2":""),g&&Nm(Me,!0,_e);let Ue=(Re,te,oe,N)=>{e.frame(Re,D);let we=new Ze,ne,ce;if(N)ne=te*_.brushX,ce=_.brushY;else{let Y=Ve.degToRad(oe),de=1.95;ne=te*Math.cos(Y)*de,ce=T+Math.sin(Y)*de}we.position.copy(D.P).addScaledVector(D.R,ne).addScaledVector(D.U,ce);let ue=D.T.clone().negate(),Ie=D.R.clone().multiplyScalar(-te),Ee=ue.multiplyScalar(Math.cos(Ve.degToRad(_.turnIn))).addScaledVector(Ie,Math.sin(Ve.degToRad(_.turnIn))).normalize(),L=new Te().lookAt(new w,Ee.clone().negate(),D.U);we.quaternion.setFromRotationMatrix(L);let b=new Fe(J,te>0?Me:K);b.scale.setScalar(_.brushR/.95);let B=new Ze;B.add(b),we.add(B),m&&(B.add(Hb(te>0,b.scale.x)),b.visible=!1);let V=new Fe(new xn(.09,.09,1.1,16),me);V.rotation.x=Math.PI/2,V.position.z=-.75,we.add(V),we.name="s4Brush",i.add(we);let G={holder:we,spinner:B,u:Re,side:te,hazard:N,hit:!1,dir:te*(N?1:.6),base:we.position.clone(),out:D.R.clone().multiplyScalar(te),cleared:!1,clear:0,bonk:0};return M.push(G),G};for(let[Re,te]of _.hazards)Ue(Re,te,0,!0);for(let[Re,te,oe]of _.deco)Ue(Re,te,oe,!1);v.brushes=M.length,v.hazards=_.hazards.length}let S=[];x.clearBrushes=(I,z)=>{let O=0;for(let W of M)W.hazard&&!W.cleared&&W.u>=I&&W.u<=z&&(W.cleared=!0,O++,x.pop&&x.pop(W.holder.position));return O},x.hazards=()=>M.filter(I=>I.hazard).map(I=>({u:I.u,side:I.side,cleared:I.cleared})),r.push((I,z,O)=>{A.value=z;for(let X of M){let ie=X.u-o.z;X.holder.visible=o.z>y-14&&ie<_.showAhead&&ie>-_.showBehind,X.cleared&&o.z>X.u+_.showBehind&&(X.cleared=!1);let ye=X.cleared?1:0,ze=m?Ve.smoothstep(ie,m.emerge[0],m.emerge[1])*m.emerge[2]:0;if(X.clear!==ye||m){X.clear!==ye&&(X.clear=X.holder.visible?Ve.clamp(X.clear+Math.sign(ye-X.clear)*I/.35,0,1):ye);let J=X.clear*X.clear*(3-2*X.clear);X.holder.position.copy(X.base).addScaledVector(X.out,J*(p?p.clearOut:0)+ze)}X.bonk=Math.max(0,X.bonk-I),X.holder.visible&&(X.spinner.rotation.z+=_.spin*X.dir*I*(1-.7*X.clear+5*X.bonk))}if(P&&P.forEach((X,ie)=>{let ye=F[ie];X.z=ye.cleared?0:1}),O!=="running")return;let W=o;for(let X of M)if(X.hazard){if(Math.abs(W.z-X.u)>1.25){W.z>X.u+1.5&&(X.hit=!1);continue}if(!(X.hit||X.cleared||W.air&&W.yAbs-n.surface(t,W.x,W.z,z)>2.2)&&X.side*W.x>.33){X.hit=!0;let ie=a(X.side);S.push({t:+z.toFixed(2),u:X.u,side:X.side,lane:W.lane,knocked:ie!==!1}),ie===!1&&(X.bonk=.5)}}}),v.hits=S;let F=M.filter(I=>I.hazard),P=p?F.map(I=>new vt(I.u,n.laneX(I.side>0?0:2),1,0)):null;for(;P&&P.length<6;)P.push(new vt(-999,0,0,0));if(u){let I=p?p.bubbles:_.bubbles,z=Bm(23307),O=new rn(1,26,16),W=new An;W.index=O.index,W.setAttribute("position",O.attributes.position),W.setAttribute("normal",O.attributes.normal);let X=new Float32Array(I*4),ie=new Float32Array(I*4),ye=new w;for(let _e=0;_e<I;_e++){let he=y+1.5+z()*(C-y-3),me=Ve.degToRad(-10+z()*200),Me=1.05+z()*.85;p&&(me=Ve.degToRad(p.bubbleAngle[0]+(me/Math.PI*180+10)/200*(p.bubbleAngle[1]-p.bubbleAngle[0])),Me=p.bubbleR[0]+(Me-1.05)/.85*(p.bubbleR[1]-p.bubbleR[0])),e.map(Math.cos(me)*Me,T+Math.sin(me)*Me,he,ye);let Ue=.06+Math.pow(z(),2.2)*.42;X.set([ye.x,ye.y,ye.z,p?.05+(Ue-.06)*(p.bubbleMax-.05)/.42:Ue],_e*4),ie.set([z()*6.28,z()<.3?.08:0,.04,0],_e*4)}W.setAttribute("inst",new Rt(X,4)),W.setAttribute("motion",new Rt(ie,4)),W.instanceCount=I;let ze={uTime:A,uMotion:{value:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:.035},uFilm:{value:1.3}},J=new Qe({uniforms:ze,vertexShader:u.vertex,fragmentShader:u.fragment,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt}),K=new Fe(W,J);K.frustumCulled=!1,K.renderOrder=5,K.name="s4Bubbles",i.add(K),r.push(()=>{ze.uAvoid.value.copy(o.root.position)}),v.bubbles=I}let U=(c||[]).find(I=>(I.geometry.computeBoundingBox(),I.geometry.boundingBox.min.z>y-5)),H="  vec3 lit = col * (0.8 + 0.3 * NdotL);";if(U&&U.material.fragmentShader.includes(H)){let I=U.material,z=I.clone();z.uniforms=I.uniforms,p&&(I.uniforms.uS4Haz={value:P},I.uniforms.uS4Warn={value:new w(...p.hazardWarn,p.hazardWidth)},z.polygonOffset=!0,z.polygonOffsetFactor=-1,z.polygonOffsetUnits=-4),z.fragmentShader=(p?`uniform vec4 uS4Haz[6]; uniform vec3 uS4Warn;
`:"")+I.fragmentShader.replace(H,p?g?Fm.replace(H,Yb()+(m?qb():"")+H):Fm:`  if (inDrum > 0.0) {   // Screen 4 tunnel look (?s3=tunnel)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float collar = exp(-pow(max(0.0, rM - 0.42) / 0.42, 2.0));
    float behindM = clamp(-toM.y / 3.2, 0.0, 1.0);
    float trailV = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.95)) / 0.17, 2.0)) * step(toM.y, 0.2) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    foam = max(foam, smoothstep(0.28, 0.72, (collar + trailV * 0.85) * (0.7 + 0.6 * st)) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.55), 0.35 * inDrum);
  }
`+H),p&&(z.fragmentShader=z.fragmentShader.replace(Hm,$b+Hm)),U.material=z,v.waterCopy=!0,p&&(v.warnShader=z.fragmentShader.includes("a brush's warning"))}return p&&(v.round2=Gb({scene:i,round2:f,mascot:o,updaters:r,time:A,TS:y})),g&&(v.round3=Um({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:A,soap:u,round4:!!m})),m&&(v.round4=Dm({scene:i,TR:e,L:t,W:n,updaters:r,time:A,env:f.env,mascot:o,hide:[i.getObjectByName("s4Rings"),i.getObjectByName("r3Swirl"),...d||[]]})),v}var bs={uR3Pink:{value:new pe},uR3White:{value:new pe},uR3Royal:{value:new pe},uR3Deep:{value:new pe},uR3Tufts:{value:26},uR3Core:{value:.45}},ta=null,bd={};function Hb(i,e){let t=dn.pompom;if(!ta){ta=new rn(1,10,8);let x=ta.attributes.position,g=new w;for(let m=0;m<x.count;m++){g.fromBufferAttribute(x,m);let v=1+.16*Math.sin(g.x*7.1+g.y*3.3)*Math.sin(g.z*5.7-g.y*4.1);g.multiplyScalar(v),x.setXYZ(m,g.x,g.y,g.z)}ta.computeVertexNormals()}let n=i?"L":"R";if(!bd[n]){let x=new ht({color:16777215,roughness:.92,metalness:0});x.onBeforeCompile=g=>{g.vertexShader=`varying vec3 vTuft;
`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vTuft = position;`),g.fragmentShader=`varying vec3 vTuft;
`+g.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  { float ang = atan(vTuft.z, vTuft.x);
    float strand = 0.5 + 0.5 * sin(ang * 14.0 + vTuft.y * 3.0) * sin(ang * 23.0 - vTuft.y * 5.0 + 1.3);
    diffuseColor.rgb *= 1.0 - ${t.strands.toFixed(3)} * (1.0 - strand) * smoothstep(-0.6, 0.6, vTuft.y); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${t.glow.toFixed(3)} + vec3(1.0, 0.92, 0.98) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.0) * ${t.sheen.toFixed(3)};`)},x.customProgramCacheKey=()=>"s4:tuft4b",bd[n]=x}let s=t.count+t.rim,r=new Gt(ta,bd[n],s),o=new Te,a=new Mt,l=new w,c=new w,u=new pe,h=new w,d=Bm(i?1953:1954),f=Math.PI*(3-Math.sqrt(5)),p=x=>{let g=i?t.left:t.right;x+=(d()-.5)*.06;for(let m of g)if(x<=m[0])return m[1][Math.floor(d()*m[1].length)];return g[g.length-1][1][0]};for(let x=0;x<s;x++){let g,m;if(x<t.count){let _=(x+.5)/t.count;g=Math.acos(1-_*(1-Math.cos(Ve.degToRad(t.cap)))),m=x*f}else g=Ve.degToRad(t.cap+4+d()*10),m=(x-t.count)/t.rim*Math.PI*2+d()*.2;h.set(Math.sin(g)*Math.cos(m),Math.sin(g)*Math.sin(m),Math.cos(g)),c.set(h.x*t.radius,h.y*t.radius,h.z*t.radius*t.depth-t.radius*t.depth*.35),a.setFromUnitVectors(new w(0,1,0),h);let v=t.size*(.8+d()*.4)*(x<t.count?1:1.15);l.set(v,v*t.long,v),o.compose(c,a,l),r.setMatrixAt(x,o),u.setRGB(...p(g/Ve.degToRad(t.cap))).multiplyScalar(.9+d()*.18),r.setColorAt(x,u)}return r.scale.setScalar(e),r.name="r4PomPom",r.frustumCulled=!1,r}var Ob=`float r3h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float r3n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(r3h(i), r3h(i + vec2(1, 0)), f.x), mix(r3h(i + vec2(0, 1)), r3h(i + vec2(1, 1)), f.x), f.y); }
`;function Nm(i,e,t){let n=_n.brush;bs.uR3Pink.value.setRGB(...n.pink),bs.uR3White.value.setRGB(...n.white),bs.uR3Royal.value.setRGB(...n.royal),bs.uR3Deep.value.setRGB(...n.deep),bs.uR3Tufts.value=n.tufts,bs.uR3Core.value=n.core,typeof window<"u"&&(window.__bwR3=Object.assign(window.__bwR3||{},{brushU:bs,ROUND3:_n})),i.onBeforeCompile=s=>{Object.assign(s.uniforms,bs),s.vertexShader=`varying vec3 vR3Obj;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vR3Obj = position;`),s.fragmentShader=`varying vec3 vR3Obj; uniform vec3 uR3Pink, uR3White, uR3Royal, uR3Deep; uniform float uR3Tufts, uR3Core;
`+Ob+s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+t)},i.customProgramCacheKey=()=>"s4:brush3"+(e?"L":"R")}function Bb(i,e,t){let n=i.attributes.position,s=i.attributes.color,r=new Map,o=[],a=new Map,l=p=>{if(a.has(p))return a.get(p);let x=Math.floor(n.getX(p)/t)+","+Math.floor(n.getY(p)/t)+","+Math.floor(n.getZ(p)/t),g=r.get(x);g===void 0&&(g=o.length,r.set(x,g),o.push([0,0,0,0,0,0,0]));let m=o[g];return m[0]+=n.getX(p),m[1]+=n.getY(p),m[2]+=n.getZ(p),s&&(m[3]+=s.getX(p),m[4]+=s.getY(p),m[5]+=s.getZ(p)),m[6]++,a.set(p,g),g},c=[];for(let p=0;p<e.length;p+=3){let x=l(e[p]),g=l(e[p+1]),m=l(e[p+2]);x!==g&&g!==m&&x!==m&&c.push(x,g,m)}let u=o.length,h=new Float32Array(u*3),d=new Float32Array(u*3);o.forEach((p,x)=>{h.set([p[0]/p[6],p[1]/p[6],p[2]/p[6]],x*3),d.set([p[3]/p[6],p[4]/p[6],p[5]/p[6]],x*3)});let f=new st;return f.setAttribute("position",new it(h,3)),s&&f.setAttribute("color",new it(d,3)),f.setIndex(c),f.computeVertexNormals(),f.computeBoundingSphere(),f}function Bm(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var zb=`
attribute float aU;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
void main() {
  vR = length(position.xy); vA = atan(position.y, position.x); vU = aU;
  vC = instanceColor;
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,zm=`
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
`;function kb(i){let e=i.ringFar;return zm.replace("float fade = 1.0 - 0.45 * smoothstep(6.0, 26.0, vDepth);",`float fade = 1.0 - ${(.45*(1-e.keep)).toFixed(3)} * smoothstep(6.0, 26.0, vDepth);`).replace("gl_FragColor = vec4(col, 1.0);",`float far = smoothstep(${e.from.toFixed(2)}, ${e.to.toFixed(2)}, vDepth);
  col = mix(col * ${i.ringGlow.toFixed(3)}, vec3(0.85, 0.95, 1.0) * (core + glow) * wave * ${e.bright.toFixed(3)}, far * ${e.white.toFixed(3)});
  gl_FragColor = vec4(col, 1.0);`)}function Vb(i,e,t){let n=i.attributes.color,s=i.index.array,r=n.count,o=Array.from({length:r},()=>new Set);for(let l=0;l<s.length;l+=3){let c=s[l],u=s[l+1],h=s[l+2];o[c].add(u).add(h),o[u].add(c).add(h),o[h].add(c).add(u)}let a=Float32Array.from(n.array);for(let l=0;l<e;l++){let c=new Float32Array(a.length);for(let u=0;u<r;u++){let h=0,d=0,f=0,p=0;for(let x of o[u])h+=a[x*3],d+=a[x*3+1],f+=a[x*3+2],p++;if(!p){c.set(a.subarray(u*3,u*3+3),u*3);continue}c[u*3]=a[u*3]*(1-t)+h/p*t,c[u*3+1]=a[u*3+1]*(1-t)+d/p*t,c[u*3+2]=a[u*3+2]*(1-t)+f/p*t}a=c}n.array.set(a),n.needsUpdate=!0}function Gb({round2:i,mascot:e,updaters:t,time:n,TS:s}){let r={exit:!1,grade:!1},{exitLight:o,grade:a,bloomPass:l}=i;o&&o[0]&&(o[0].material=new Qe({uniforms:{uTime:n},vertexShader:Wb,fragmentShader:Xb}),o[1]&&o[1].material.color.setRGB(.12,.16,.3),r.exit=!0);let c=Zl.grade;a&&a.material.fragmentShader.includes("if (uOpen > 0.0) {")&&(a.uniforms.uS4Grade={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS4Grade;").replace("if (uOpen > 0.0) {",`if (uS4Grade > 0.0) {   // ?s3=round2: inside the drum, rich and never washed out
        vec3 g = c.rgb;
        float lg = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float mx = max(g.r, max(g.g, g.b)), mn = min(g.r, min(g.g, g.b));
        float sat = (mx - mn) / max(mx, 1e-4);
        g = max(mix(vec3(lg), g, 1.0 + ${c.vibrance.toFixed(3)} * (1.0 - sat) * smoothstep(0.05, 0.35, lg)), 0.0);
        float l2 = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float kn = l2 > ${c.knee.toFixed(3)} ? ${c.knee.toFixed(3)} + (l2 - ${c.knee.toFixed(3)}) / (1.0 + (l2 - ${c.knee.toFixed(3)}) * ${c.roll.toFixed(3)}) : l2;
        g *= kn / max(l2, 1e-4);
        c.rgb = mix(c.rgb, g, uS4Grade);${i.round4?`
        { vec3 h = c.rgb * ${dn.grade.exposure.toFixed(3)};   // ?s3=round4: richer and less pastel inside the drum
          float lh = dot(h, vec3(0.2126, 0.7152, 0.0722));
          h = mix(vec3(lh), h, ${dn.grade.saturation.toFixed(3)});
          h = (h - ${dn.grade.pivot.toFixed(3)}) * ${dn.grade.contrast.toFixed(3)} + ${dn.grade.pivot.toFixed(3)};
          c.rgb = mix(c.rgb, max(h, 0.0), uS4Grade); }`:""}
      }
      if (uOpen > 0.0) {`),a.material.needsUpdate=!0,r.grade=!0);let u=l?l.strength:0;return t.push(()=>{let h=Ve.smoothstep(e.z,s-.5,s+2.5);r.grade&&(a.uniforms.uS4Grade.value=h),l&&(l.strength=u+(Zl.bloom-u)*h)}),r}var Wb="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Xb=`
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
`,Fm=`  float s4Haz = 0.0;
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
`,Hm="  float dist = length(cameraPosition - vWorld);",qb=()=>{let i=dn.water;return`  if (inDrum > 0.0) {   // ?s3=round4
    col -= mix(uGlow, vec3(1.0), 0.35) * caustic * (0.5 + 0.4 * crest) * (1.0 - moat * 0.6) * inDrum;
    vec2 toM4 = xz - uPlayer.xz; float rM4 = length(toM4 * vec2(1.0, 0.8));
    float centreW = 1.0 - smoothstep(0.25, 1.35, abs(xz.x));
    col = mix(col, mix(vec3(${i.side.join(", ")}), vec3(${i.middle.join(", ")}), centreW), ${i.mix.toFixed(3)} * inDrum);
    float roll = sin(xz.y * 2.4 - flowT * 1.15 + bwNoise(xz * vec2(1.5, 0.5)) * 3.0);
    float crestR = smoothstep(0.55, 1.0, roll);
    col += vec3(0.25, 0.8, 1.0) * crestR * ${i.crest.toFixed(3)} * inDrum;
    float st1 = bwFbm(vec2(xz.x * 5.0, xz.y * 0.7 - flowT * 0.55));
    float st2 = bwFbm(vec2(xz.x * 9.0 + 3.0, xz.y * 1.2 - flowT * 0.7));
    float froth = smoothstep(0.58, 0.78, st1) * 0.7 + smoothstep(0.62, 0.8, st2) * 0.4;
    float nearM = exp(-pow(max(0.0, rM4 - 0.4) / 1.5, 2.0));
    float churn = smoothstep(0.32, 0.72, bwFbm(xz * vec2(3.0, 1.6) - vec2(0.0, flowT * 0.5))) * nearM;
    float f4 = clamp(froth * (0.3 + 0.7 * crestR) * ${i.froth.toFixed(3)} + churn * ${i.churn.toFixed(3)}, 0.0, 1.0);
    foam = mix(foam, max(f4, foam * 0.25), inDrum) * (1.0 - s4Haz);
  }
`},Yb=()=>{let i=_n.water;return`  if (inDrum > 0.0) {   // ?s3=round3
    col = mix(col, vec3(${i.azure.join(", ")}), ${i.azureMix.toFixed(3)} * inDrum);
    vec2 b3 = bwVoronoi(xz * vec2(5.5, 3.8) - vec2(0.0, flowT * 0.42));
    float patch3 = smoothstep(0.42, 0.72, bwFbm(xz * vec2(1.7, 0.75) - vec2(0.0, flowT * 0.35)));
    float near3 = exp(-pow(max(0.0, length(xz - uPlayer.xz) - 0.5) / 1.8, 2.0));
    float lace3 = 1.0 - smoothstep(0.02, 0.11, b3.y - b3.x);
    foam = max(foam, clamp(lace3 * patch3 * (0.45 + 0.55 * near3) + smoothstep(0.62, 0.9, patch3) * near3 * 0.6, 0.0, 1.0) * ${i.foam.toFixed(3)} * inDrum * (1.0 - s4Haz));
  }
`},$b=`  lit = mix(lit, vec3(1.0, 0.12, 0.5) * (0.85 + 0.25 * NdotL), clamp(s4Haz * 1.7, 0.0, 1.0) * ${Zl.hazardMix.toFixed(2)});   // ?s3=round2: a brush's warning
`;var Zb=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),ki=typeof window>"u"||Zb?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),ot=Object.fromEntries(["castle","entrance","machinery","brush","bubbles"].map(i=>[i,ki.includes(i)||ki.includes("all")]));ot.edges=ki.includes("edges");ot.cine=ki.includes("cine");ot.tunnel=ki.includes("tunnel");ot.paint=ki.includes("paint");ot.round2=ki.includes("round2");ot.round3=ki.includes("round3");ot.round4=ki.includes("round4");ot.round4&&(ot.round3=!0);ot.round3&&(ot.round2=!0);ot.round2&&(ot.paint=!ot.round3,ot.tunnel=!0);if(ot.round3)for(let i of["castle","entrance","machinery","brush","bubbles","edges","cine"])ot[i]=!0;ot.paint&&(ot.castle=!0,ot.edges=!0);var Gm=Object.values(ot).some(Boolean),wd={castle:"models/s3_castle.glb",entrance:"models/s3_entrance.glb",machinery:"models/s3_machinery.glb",brush:"models/s3_brush.glb"},yi={castle:{scale:10,archCentreY:-.27,front:2.75,glow:.32,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},pink:{hue:292,mix:.45,sat:.62},cyan:{sat:.55,val:1.06,glow:.55}},entrance:{holeRadius:2.05,holeCentre:[-.01,-.29],z:2.6,glow:.25,envI:1.25,gold:{hue:43,sat:.92,val:1.08,metal:.6}},machinery:{scale:1.66,at:[-2.73,.4,-7],yaw:180,glow:.3,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},cyan:{sat:.6,val:1.06,glow:.5}},brush:{scale:1.2,at:[2.32,.165,-7],yaw:180,glow:.22,rough:.72,metal:.15,envI:1},bubbles:{extra:[[475,526,14,79,0,.02],[428,478,13,15,.06,.03],[522,612,11,20,0,.02]],centreAlpha:.035}},no={brush:{scale:1.51,at:[2.62,.23,-4.9]},film:1.4,edge:{profile:[[-.08,-.05],[0,.07],[.1,.13],[.22,.1],[.3,-.02],[.33,-.8]],alpha:.45,foam:1}},Wm={far:2.35,towers:-1.5,brush:-4.9,machinery:-6.5,groundBelow:.35,tear:1.35,cutZ:-14,fadeFrom:-12,fadeTo:-6},Qs={up:.099,forward:.818,pitch:.3,fov:1.0375,blend:.9},Es=typeof window<"u"&&window.__BW_S3_TUNE__||{};for(let i of Object.keys(Es))yi[i]&&(yi[i]={...yi[i],...Es[i]});Es.edges&&Object.assign(no,Es.edges);Es.cine&&Object.assign(Qs,Es.cine);Es.paint&&Object.assign(Wm,Es.paint);ot.edges&&(yi.brush={...yi.brush,...no.brush});var na={};for(let i of Object.keys(wd))ot[i]&&(na[i]=Xm(wd[i]));ot.tunnel&&(na.brushT=na.brush||Xm(wd.brush));async function Xm(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}async function qm({scene:i,env:e,axisY:t,tunnelStart:n,oldCastle:s,sideMachinery:r,staticBubbles:o,camera:a,updaters:l,mascot:c,L:u,W:h,renderPass:d,rollers:f,grade:p,bloomPass:x,outputPass:g,waterSheets:m,TR:v,bumpMascot:_,drumMeshes:y,exitLight:C,r2:T}){let A={},D=new xs,E=async U=>{let H=await na[U];return H?D.parseAsync(H,""):null},M=U=>{U&&(U.visible=!1)},S=(U,H)=>{let I=null;return U&&U.children.forEach(z=>z.traverse(O=>{!I&&O.isMesh&&O.material&&O.material.customProgramCacheKey&&O.material.customProgramCacheKey()===H&&(I=z)})),I};if(ot.castle){let U=await E("castle");if(!U)A.castle="not found";else{let H=yi.castle,I=H.scale,z=new Ze;z.name="s3Castle",z.rotation.y=Math.PI,z.scale.setScalar(I),z.position.set(0,t-H.archCentreY*I,H.front+.236*I),U.scene.traverse(O=>{O.isMesh&&(O.material=Ed(O.material,e,"castle",H))}),z.add(U.scene),i.add(z),M(s),i.traverse(O=>{O.isMesh&&O.material&&O.material.uniforms&&O.material.uniforms.uWall&&M(O)}),M(S(i.getObjectByName("entranceDecor"),"decor:crown")),A.castle={scale:I,...Vm(z,t,n)}}}if(ot.entrance){let U=await E("entrance");if(!U)A.entrance="not found";else{let H=yi.entrance,I=H.holeRadius/.52,z=new Ze;z.name="s3Entrance",z.rotation.y=Math.PI,z.scale.setScalar(I),z.position.set(H.holeCentre[0]*I,t-H.holeCentre[1]*I,H.z),U.scene.traverse(O=>{O.isMesh&&(O.material=Ed(O.material,e,"entrance",H))}),z.add(U.scene),i.add(z),M(i.getObjectByName("washerDoor")),A.entrance={scale:+I.toFixed(3),...Vm(z,t,n)}}}let F=(U,H,I)=>{let z=new Ze;z.rotation.y=Ve.degToRad(H.yaw),z.scale.setScalar(H.scale),z.position.set(...H.at),U.scene.traverse(W=>{W.isMesh&&(W.material=I(W.material))}),z.add(U.scene),i.add(z);let O=km(z,n);for(let W=0;W<40&&O<1.18;W++)z.position.x+=.03*Math.sign(z.position.x),O=km(z,n);return{holder:z,lane:+O.toFixed(2),at:z.position.toArray().map(W=>+W.toFixed(2))}};if(ot.machinery){let U=await E("machinery");if(!U)A.machinery="not found";else{let H=yi.machinery,I=F(U,H,O=>Ed(O,e,"machinery",H));I.holder.name="s3Machinery";let z=i.getObjectByName("scenery");if(z)for(let O of z.children)O.position.distanceTo(new w(-2.25,-.3,-10))<.01&&M(O);A.machinery={scale:H.scale,at:I.at,nearestToLanes:I.lane}}}if(ot.brush){let U=await E("brush");if(!U)A.brush="not found";else{let H=yi.brush,I=F(U,H,O=>{let W=new ht({vertexColors:!0,roughness:H.rough,metalness:H.metal,envMap:e,envMapIntensity:H.envI,side:lt});return W.onBeforeCompile=X=>{X.fragmentShader=X.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${(+H.glow).toFixed(3)};`)},W.customProgramCacheKey=()=>"s3:brush:"+JSON.stringify(H),W});I.holder.name="s3Brush",M(r);let z=i.getObjectByName("scenery");if(z)for(let O of z.children)O.position.distanceTo(new w(2.05,-.55,-12))<.01&&M(O);A.brush={scale:H.scale,at:I.at,nearestToLanes:I.lane,spins:!1}}}let P=ot.cine&&d?t1({camera:a,renderPass:d,updaters:l}):null;if(P&&(A.cine={...Qs}),ot.bubbles&&o&&(A.bubbles=Kb({scene:i,staticBubbles:o,camera:P||a,updaters:l,mascot:c})),ot.edges&&u&&h&&(A.edges=Jb({scene:i,L:u,W:h,env:e,updaters:l})),ot.tunnel&&v&&_&&(A.tunnel=await Om({scene:i,TR:v,L:u,W:h,camera:a,updaters:l,mascot:c,bump:_,brushBytes:await na.brushT,waterSheets:m,soap:{vertex:Ym,fragment:$m},loaderParse:U=>D.parseAsync(U.slice(0),""),drumMeshes:y,round2:ot.round2?{exitLight:C,grade:p,bloomPass:x,hooks:T,round3:ot.round3,round4:ot.round4,env:e}:null})),ot.paint&&p&&g&&(A.paint=await n1({scene:i,camera:a,updaters:l,tunnelStart:n,sideMachinery:r,staticBubbles:o,rollers:f,grade:p,bloomPass:x,outputPass:g,waterSheets:m,L:u,W:h})),ot.edges&&a){let U=[];i.traverse(I=>{/^s3(Castle|Entrance|Machinery|Brush|IcyEdge|Bubbles)/.test(I.name)&&U.push(I)});let H=!1;l.push(()=>{let I=a.position.z,z=H?I>n:I>n+1.5;if(z!==H){H=z;for(let O of U)O.visible=!H}}),A.hiddenInTunnel=U.length}return A}function km(i,e){i.updateMatrixWorld(!0);let t=1/0,n=new w;return i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.attributes.position;for(let o=0;o<r.count;o+=2)n.fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld),n.z<e&&n.y<2.6&&(t=Math.min(t,Math.abs(n.x)))}),t}function Kb({scene:i,staticBubbles:e,camera:t,updaters:n,mascot:s}){let r=yi.bubbles,o=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,a={uTime:{value:0},uMotion:{value:o?0:1},uAvoid:{value:new w(0,-99,0)},uCentreAlpha:{value:r.centreAlpha},uFilm:{value:ot.edges?no.film:1}},l=new Qe({uniforms:a,vertexShader:Ym,fragmentShader:$m,transparent:!0,depthWrite:!1,depthTest:!0,blending:on,blendSrc:cn,blendDst:Yt}),c=new rn(1,40,24),u=(v,_)=>{let y=new An;return y.index=c.index,y.setAttribute("position",c.attributes.position),y.setAttribute("normal",c.attributes.normal),y.setAttribute("inst",v),y.setAttribute("motion",_),y},h=v=>{let _=new Fe(v,l);return _.frustumCulled=!1,_.renderOrder=5,_.name="s3Bubbles",i.add(_),_},d=e.geometry,f=h(u(d.attributes.inst,d.attributes.motion)),p=r.extra.length,x=u(new Rt(new Float32Array(p*4),4),new Rt(new Float32Array(p*4),4));x.instanceCount=0,h(x);let g=new Bt(40,.5,.1,200),m=!1;return n.push((v,_,y)=>{if(a.uTime.value=_,s&&a.uAvoid.value.copy(s.root.position),e.visible=!1,f.geometry.instanceCount=d.instanceCount,m||y!=="intro")return;m=!0,g.fov=t.aspect>=.5?t.fov:Ve.radToDeg(2*Math.atan(Math.tan(Ve.degToRad(t.fov)/2)*t.aspect/.5)),g.position.copy(t.position),g.quaternion.copy(t.quaternion),g.updateProjectionMatrix(),g.updateMatrixWorld(!0);let C=g.getWorldDirection(new w),T=new w,A=x.attributes.inst,D=x.attributes.motion,E=M=>1076/(2*M*Math.tan(Ve.degToRad(g.fov)/2));r.extra.forEach(([M,S,F,P,U,H],I)=>{T.set(M/538*2-1,1-S/1076*2,.5).unproject(g).sub(g.position).normalize();let z=g.position.clone().addScaledVector(T,F/T.dot(C));A.setXYZW(I,z.x,z.y,z.z,P/E(F)),D.setXYZW(I,1.7+I*2.3,U,H,0)}),x.instanceCount=p,A.needsUpdate=D.needsUpdate=!0}),{spheres:!0,extra:p,reducedMotion:o}}var Ym=`
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
`,$m=`
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
`;function Vm(i,e,t){i.updateMatrixWorld(!0);let n=1/0,s=1/0,r=new w;return i.traverse(o=>{if(!o.isMesh)return;let a=o.geometry.attributes.position;for(let l=0;l<a.count;l++)r.fromBufferAttribute(a,l).applyMatrix4(o.matrixWorld),s=Math.min(s,r.z),r.y>-.2&&r.z<t+30&&(n=Math.min(n,Math.hypot(r.x,r.y-e)))}),{nearestToAxis:+n.toFixed(2),frontZ:+s.toFixed(2)}}function Ed(i,e,t,n){let s=new ht({map:i.map,metalnessMap:i.metalnessMap,roughnessMap:i.roughnessMap,normalMap:i.normalMap||null,metalness:1,roughness:1,envMap:e,envMapIntensity:n.envI,emissive:16777215,emissiveMap:i.map,emissiveIntensity:n.glow,side:lt}),r=n.gold||{},o=n.pink||null,a=n.cyan||null,l=u=>(+u).toFixed(4),c=`
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
      return smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y); }`:""}`;return s.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("void main() {",`${jb}
${c}
float s3Gold = 0.0;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  s3Gold = s3GoldMask(diffuseColor.rgb);
  diffuseColor.rgb = s3Grade(diffuseColor.rgb);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
  metalnessFactor *= mix(1.0, ${l(r.metal??1)}, s3Gold);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = s3Grade(totalEmissiveRadiance)${a?` * (1.0 + ${l(a.glow)} * s3CyanMask(totalEmissiveRadiance))`:""};`)},s.customProgramCacheKey=()=>"s3:"+t+":"+JSON.stringify(n),s}var jb=`
vec3 s3Rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 s3Hsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function Jb({scene:i,L:e,W:t,env:n,updaters:s}){let r={wallsHidden:0,railsHidden:0},o=e.startZ-24,a=-.6;i.traverse(d=>{if(!d.isMesh||d.isInstancedMesh||!d.material||!d.material.color)return;let f=d.material.color.getHex(),p=d.geometry;p.boundingBox||p.computeBoundingBox();let x=p.boundingBox;x.max.z-x.min.z>20&&x.min.z<o+1&&Math.abs((x.min.x+x.max.x)/2)<1.8&&(f===15128831||f===9425663?(d.visible=!1,r.wallsHidden++):p.type==="TubeGeometry"&&(d.visible=!1,r.railsHidden++))});let l={uTime:{value:0},uAlpha:{value:no.edge.alpha},uFoam:{value:no.edge.foam}},c=new Qe({uniforms:l,vertexShader:Qb,fragmentShader:e1,transparent:!0,depthWrite:!1,side:lt,blending:on,blendSrc:cn,blendDst:Yt}),u=no.edge.profile,h=u.length;for(let d of[-1,1]){let f=[],p=[],x=[],g=0;for(let _=o;_<=a+1e-6;_+=.25,g++){let y=t.baseHeight(e,d*t.SLIDE.half,_);u.forEach(([C,T],A)=>{f.push(d*(t.SLIDE.half+C),y+T,_),p.push(A/(h-1))})}for(let _=0;_<g-1;_++)for(let y=0;y<h-1;y++){let C=_*h+y,T=C+h;x.push(C,T,C+1,T,T+1,C+1)}let m=new st;m.setAttribute("position",new je(f,3)),m.setAttribute("across",new je(p,1)),m.setIndex(x),m.computeVertexNormals();let v=new Fe(m,c);v.renderOrder=2,v.name="s3IcyEdge",i.add(v)}return s.push((d,f)=>{l.uTime.value=f}),r.icyEdges=2,r}var Qb=`
attribute float across;
varying vec3 vW; varying vec3 vN; varying float vAcross;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vAcross = across;
  gl_Position = projectionMatrix * viewMatrix * w; }
`,e1=`
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
`;function t1({camera:i,renderPass:e,updaters:t}){let n=new Bt(i.fov,i.aspect,i.near,i.far),s=new w,r=new Mt,o=new w(1,0,0),a=null;return t.push((l,c,u)=>{u==="running"&&a===null&&(a=c);let h=a===null?0:c-a,d=u==="intro"?1:a===null?0:1-Ve.smoothstep(h,0,Qs.blend);if(d<=0){e.camera!==i&&(e.camera=i);return}i.getWorldDirection(s),s.y=0,s.normalize(),n.position.copy(i.position).addScaledVector(s,Qs.forward*d),n.position.y+=Qs.up*d,n.quaternion.copy(i.quaternion).multiply(r.setFromAxisAngle(o,-Ve.degToRad(Qs.pitch)*d)),n.fov=i.fov*(1+(Qs.fov-1)*d),n.aspect=i.aspect,n.near=i.near,n.far=i.far,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),e.camera=n}),n}async function n1({scene:i,camera:e,updaters:t,tunnelStart:n,sideMachinery:s,staticBubbles:r,rollers:o,grade:a,bloomPass:l,outputPass:c,waterSheets:u,L:h,W:d}){let f=Wm,p=await new ps().loadAsync("ui/s3_paint_backdrop.png");p.colorSpace=At,p.anisotropy=4;let x=[i.getObjectByName("entranceDecor"),i.getObjectByName("scenery"),s,r,...(o||[]).filter(me=>me.centre.z<n).map(me=>me.g)].filter(Boolean);for(let me of x)me.visible=!1;let g=48,m=96,v=-40,_=578,y=-80,C=1156,T=(g+1)*(m+1),A=new Float32Array(T*3),D=new Float32Array(T*2),E=[];for(let me=0;me<=m;me++)for(let Me=0;Me<=g;Me++){let Ue=me*(g+1)+Me;D[Ue*2]=v+(_-v)*Me/g,D[Ue*2+1]=y+(C-y)*me/m}for(let me=0;me<m;me++)for(let Me=0;Me<g;Me++){let Ue=me*(g+1)+Me,Re=Ue+g+1;E.push(Ue,Re,Ue+1,Ue+1,Re,Re+1)}let M=new st;M.setAttribute("position",new it(A,3)),M.setAttribute("stage",new it(D,2)),M.setIndex(E);let S={map:{value:p},uFade:{value:1},uBanner:{value:0},uPanel:{value:0}},F=new Qe({uniforms:S,vertexShader:i1,fragmentShader:s1,transparent:!0,depthWrite:!0,depthTest:!0,blending:on,blendSrc:Uo,blendDst:Yt,blendSrcAlpha:mh,blendDstAlpha:Yt}),P=new Fe(M,F);P.name="s3Paint",P.frustumCulled=!1,P.renderOrder=-1,P.visible=!1,i.add(P),a.uniforms.uS3Paint={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS3Paint;").replace("gl_FragColor = max(c, 0.0);",`{ vec4 s3o = texture2D(tDiffuse, vUv); c.rgb = mix(c.rgb, s3o.rgb, clamp(1.0 - s3o.a, 0.0, 1.0) * uS3Paint); c.a = s3o.a; }
      gl_FragColor = max(c, 0.0);`),a.material.needsUpdate=!0,c.uniforms.uS3Paint={value:0},c.material.fragmentShader=c.material.fragmentShader.replace("uniform sampler2D tDiffuse;",`uniform sampler2D tDiffuse;
		uniform float uS3Paint;`).replace("gl_FragColor = texture2D( tDiffuse, vUv );","vec4 s3o = texture2D( tDiffuse, vUv ); gl_FragColor = s3o;").replace("// color space",`gl_FragColor.rgb = mix( gl_FragColor.rgb, s3o.rgb, clamp( 1.0 - s3o.a, 0.0, 1.0 ) * uS3Paint ); gl_FragColor.a = 1.0;
			// color space`),c.material.needsUpdate=!0;let U={uPaintCut:{value:0},uPaintZ:{value:f.cutZ}},H=(u||[]).find(me=>(me.geometry.computeBoundingBox(),me.geometry.boundingBox.min.z<n-5)),I=!1;if(H&&H.material.fragmentShader.includes("  vec2 xz = vTrack;")){let me=H.material,Me=me.clone();Me.uniforms={...me.uniforms,...U},Me.fragmentShader=`uniform float uPaintCut; uniform float uPaintZ;
`+me.fragmentShader.replace("  vec2 xz = vTrack;",`  vec2 xz = vTrack;
  if (uPaintCut > 0.5 && abs(xz.x) > uSlideHalf + 0.62 && xz.y > uPaintZ && xz.y < uTunnel.x) discard;`),H.material=Me,I=!0}let z=a.material.fragmentShader.includes("uS3Paint")&&c.material.fragmentShader.includes("s3o.rgb"),O=new Bt(40,.5,.1,200),W=new w,X=new w,ie=(me,Me,Ue)=>{let Re=Math.min(1,Math.max(0,(Ue-me)/(Me-me)));return Re*Re*(3-2*Re)},ye=(me,Me,Ue)=>{let Re=N=>{let we=me.y+Me.y*N,ne=me.z+Me.z*N;return we<d.baseHeight(h,0,Math.min(ne,n-.5))-f.groundBelow},te=.3,oe=null;for(let N=.3;N<=Ue;N+=.25){if(Re(N)){oe=N;break}te=N}if(oe===null)return Ue;for(let N=0;N<20;N++){let we=(te+oe)/2;Re(we)?oe=we:te=we}return oe},ze=new Float32Array(T),J=0,K=!1,_e=null,he=null;return t.push((me,Me,Ue)=>{if(!K&&Ue==="intro"){K=!0,O.fov=e.aspect>=.5?e.fov:Ve.radToDeg(2*Math.atan(Math.tan(Ve.degToRad(e.fov)/2)*e.aspect/.5)),O.position.copy(e.position),O.quaternion.copy(e.quaternion),O.updateProjectionMatrix(),O.updateMatrixWorld(!0);let N=O.position,we=ce=>(ce-N.z)/Math.max(W.z,1e-4);for(let ce=0;ce<T;ce++){let ue=D[ce*2],Ie=D[ce*2+1];W.set(ue/538*2-1,1-Ie/1076*2,.5).unproject(O).sub(N).normalize();let Ee=1-ie(.8,1.3,((ue-52)/120)**2+((Ie-582)/135)**2),L=ie(368,410,ue)*ie(395,430,Ie)*(1-ie(780,820,Ie)),b=Math.min(1,1-ie(60,95,ue)+ie(445,480,ue))*ie(50,80,Ie)*(1-ie(430,470,Ie))*(1-Math.max(Ee,L)),B=Math.max(.05,1-Math.max(Ee,L,b)),G=1/((Ee/we(f.brush)+L/we(f.machinery)+b/we(f.towers)+B/we(f.far))/(Ee+L+b+B)),Y=Math.max(Ee,L,b);W.y<-1e-4&&(G=G*Y+Math.min(G,ye(N,W,G))*(1-Y)),X.copy(N).addScaledVector(W,G),ze[ce]=G,A[ce*3]=X.x,A[ce*3+1]=X.y,A[ce*3+2]=X.z}let ne=[];for(let ce=0;ce<m;ce++)for(let ue=0;ue<g;ue++){let Ie=ce*(g+1)+ue,Ee=Ie+g+1,L=[Ie,Ie+1,Ee,Ee+1].map(b=>ze[b]);Math.max(...L)/Math.min(...L)<f.tear&&ne.push(Ie,Ee,Ie+1,Ie+1,Ee,Ee+1)}M.setIndex(ne),J=E.length/6-ne.length/6,M.attributes.position.needsUpdate=!0,M.computeBoundingSphere(),P.visible=!0}Ue==="running"&&_e===null&&(_e=Me);let Re=_e===null?-1:Me-_e,te=Re<0?0:ie(0,.45,Re);S.uBanner.value=te,S.uPanel.value=te,S.uFade.value=1-ie(f.fadeFrom,f.fadeTo,e.position.z);let oe=K&&S.uFade.value>.001&&e.position.z<n;P.visible=oe,F.depthWrite=S.uFade.value>.999,a.uniforms.uS3Paint.value=c.uniforms.uS3Paint.value=oe?1:0,U.uPaintCut.value=oe?1:0,l&&(oe?he===null&&(he=l.enabled,l.enabled=!1):he!==null&&(l.enabled=he,he=null))}),{grid:[g,m],hidden:x.length,passesPatched:z,moatCut:I,depths:{...f},get tornCells(){return J}}}var i1=`
attribute vec2 stage;
varying vec2 vStage;
void main() { vStage = stage; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,s1=`
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
`;var _i=!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)));function er(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Kl={1:"models/roller_candidate_1.glb",2:"models/roller_candidate_2.glb"},sa=typeof window>"u"?null:String(window.__BW_ROLLER__||(location.search.match(/[?&]roller=(\d)/)||[])[1]||"")||null,Zm=r1()&&Kl[sa]?o1(Kl[sa]):null;function r1(){return!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)))}async function o1(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}var a1={at:[-2.7,null,-6.4],yaw:-50,length:2.7,spin:-1.4,feetY:.4};function ra(i,e){let t=Math.random;Math.random=i;try{return e()}finally{Math.random=t}}async function Qm(i,e){let t=Math.random;Math.random=i;try{return await e()}finally{Math.random=t}}var ia=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function e0(i){let{scene:e,env:t,TR:n,L:s,W:r,mascot:o,camera:a,Particles:l,fxScale:c,waterU:u,grade:h,bubbles:d,rollers:f,sideMachinery:p,setSideMachinery:x,fur:g,mascotModel:m}=i,v=er(377827),_=new Ze;_.name="openingLook",e.add(_);let y=r.WATER+r.AXIS_H,C=s.tunnelStart,T=[],A=new ht({color:16762194,metalness:1,roughness:.17,envMap:t,envMapIntensity:1.55,emissive:4860416,emissiveIntensity:.45}),D=new ht({color:15242798,metalness:1,roughness:.26,envMap:t,envMapIntensity:1.35,emissive:3808256,emissiveIntensity:.5}),E=new ht({color:2759290,metalness:.1,roughness:.34,envMap:t,envMapIntensity:.9,emissive:1181247,emissiveIntensity:.5,side:lt});if(Rn.portal){let b=new Ze;b.name="washerDoor",b.position.set(0,y,0),_.add(b);let B=k=>(k.rotateX(Math.PI/2),k),V=new Fe(new Wt(2.74,.25,28,140),A);V.position.z=2.72,b.add(V);let G=new Fe(new Wt(3.02,.075,14,140),D);G.position.z=2.62,b.add(G);let Y=new Fe(new Wt(2.5,.06,12,140),D);Y.position.z=2.98,b.add(Y);let de=new Gt(new rn(.075,14,10),D,28),xe=new Te;for(let k=0;k<28;k++){let ve=k/28*Math.PI*2;de.setMatrixAt(k,xe.makeTranslation(Math.cos(ve)*2.76,Math.sin(ve)*2.76,2.47))}b.add(de);let ge=[[2.56,3.02],[2.47,3.12],[2.5,3.24],[2.41,3.36],[2.44,3.48],[2.35,3.6],[2.37,3.7],[2.27,3.8],[2.24,3.88]],Pe=B(new qr(ge.map(([k,ve])=>new re(k,ve)),140));b.add(new Fe(Pe,E));let le=[new pe(.08,1,1.9),new pe(.4,1.35,2.1),new pe(.08,1,1.9)],ae=[];[[2.43,3.15],[2.39,3.4],[2.31,3.64]].forEach(([k,ve],j)=>{let se=new It({color:le[j].clone()}),De=new Fe(new Wt(k,.022,8,140),se);De.position.z=ve,b.add(De),ae.push({mat:se,base:le[j],u:ve})});let fe=new Qe({uniforms:{uColor:{value:new pe(.25,.95,1.6)},uGain:{value:1}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uGain; varying vec2 vP; void main() { float r = length(vP); float k = exp(-pow((r - 2.26) / 0.04, 2.0)); gl_FragColor = vec4(uColor * k * uGain, 1.0); }",transparent:!0,blending:vn,depthWrite:!1,side:lt}),Se=new Fe(new qs(2.2,2.34,140,1),fe);Se.position.z=3.87,Se.renderOrder=3,b.add(Se);let be=new Qe({uniforms:{uWall:{value:new pe(.66,.56,.93)},uShade:{value:new pe(.2,.13,.45)}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uWall, uShade; varying vec2 vP;
        void main() {
          float r = length(vP);
          float shade = 1.0 - smoothstep(2.95, 3.35, r);                 // soft shadow next to the gold ring
          vec3 c = mix(uWall, uShade, shade * 0.55);
          c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);               // a little lighter toward the top
          c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));      // a dark outline right at the ring
          float a = 1.0 - smoothstep(3.55, 3.92, r);                     // fades into the castle's own wall
          gl_FragColor = vec4(c * a, a);
        }`,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt,side:lt}),$e=new Fe(new qs(2.93,3.92,160,1),be);$e.position.z=.86,$e.renderOrder=1,b.add($e);let Ye=new Di({map:p1(),color:new pe(2.2,2,1.6),transparent:!0,blending:vn,depthWrite:!1}),at=[];for(let k=0;k<7;k++){let ve=.35+k*.36+v()*.2,j=new as(Ye.clone());j.position.set(Math.cos(ve)*2.9,Math.sin(ve)*2.9,2.45),j.renderOrder=4,b.add(j),at.push({sp:j,ph:v()*6.28,rate:1.3+v()*1.4})}T.push((k,ve)=>{for(let j of ae)j.mat.color.copy(j.base).multiplyScalar(.82+.25*Math.sin(ve*2.6-j.u*2.2));fe.uniforms.uGain.value=.8+.2*Math.sin(ve*1.7);for(let j of at){let se=Math.pow(Math.max(0,Math.sin(ve*j.rate+j.ph)),8);j.sp.scale.setScalar(.05+.42*se),j.sp.material.opacity=se}})}let M=new l(700);M.u.uScale=c;let S=new Qe({uniforms:{uTime:{value:0}},vertexShader:h1,fragmentShader:d1}),F=64,P=new Gt(f1(v),S,F);P.frustumCulled=!1,P.name="mascotFoam",_.add(P);let U=[];for(let b=0;b<F;b++){let B=b>=40,V=B?Math.PI+(v()<.5?-1:1)*(.55+v()*1.15):b/40*Math.PI*2+v()*.12;!B&&Math.abs((V-Math.PI+Math.PI*3)%(Math.PI*2)-Math.PI)<.6&&(V=Math.PI+(v()<.5?-1:1)*(.6+v()*.7));let G=B?.6+Math.pow(v(),.8)*.45:.42+v()*.08;U.push({a:V,r:G,s:B?.03+v()*.04:.055+v()*.05,ph:v()*6.28,spin:v()*6.28,outer:B,drift:v()})}let H=new Mt,I=new Sn,z=new w,O=new w,W=new Te,X={P:new w,R:new w,U:new w,T:new w},ie=o.x,ye={side:0,wall:0,puff:0,bow:0},ze=b=>1-ia(C-3.5,C-.8,b),J=(b,B)=>{let V=o,G=b-V.x,Y=B-V.z,de=V.speed/r.CRUISE,xe=V.downhill||0,ge=Math.hypot(G,Y*.85),Pe=ia(-.3,.5,Y),le=Math.exp(-(((ge-.6)/.17)**2))*(.06+.06*de+.05*xe)*(.55+.75*Pe),ae=-Math.exp(-ge*ge*9)*.04,fe=Math.min(1,Math.max(0,-Y/(2.4+2.6*de))),Se=.6+fe*(.8+.7*de),be=Math.exp(-(((Math.abs(G-V.xv*.12*fe)-Se)/.15)**2))*(Y<=0?1:0)*(1-fe)*(.02+.07*de);return le+ae+be},K=(b,B,V)=>r.surface(s,b,B,V)+J(b,B);T.push((b,B,V)=>{let G=o,Y=V==="running",de=Rn.foam?ze(G.z):0,xe=r.surface(s,G.x,G.z,B)+r.FLOAT_H,ge=Math.max(0,G.yAbs-xe),Pe=de*(1-ia(.08,.45,ge)),le=Math.min(1.4,G.speed/r.CRUISE);ie+=(G.x-ie)*Math.min(1,b*5);for(let ae=0;ae<F;ae++){let fe=U[ae],Se=Y?(B*(1.1+1.4*fe.drift)+fe.drift)%1:0,be=Se*le*(fe.outer?.9:.5),Ye=(fe.outer?ie:G.x)+Math.sin(fe.a)*fe.r*(1+.25*le*Se),at=G.z+Math.cos(fe.a)*fe.r*.85-be,k=K(Ye,at,B),ve=Math.sin(B*2.3+fe.ph)*.015,j=Y?Math.sin(Math.PI*Math.min(1,Se*1.05))*.6+.4:1,se=fe.s*Pe*j*(Y?fe.outer?.5:.9:1)*(1+.12*Math.sin(B*1.7+fe.ph));n.frame(at,X),O.copy(X.P).addScaledVector(X.R,Ye).addScaledVector(X.U,k+.01+se*.3+ve),I.set(fe.spin+B*.4,fe.ph+B*.3,0),H.setFromEuler(I),z.set(se*1.25,se*.8,se*1.25),P.setMatrixAt(ae,W.compose(O,H,z))}if(P.instanceMatrix.needsUpdate=!0,S.uniforms.uTime.value=B,P.visible=Pe>.001,Pe>.01&&!G.air){for(ye.side+=(Y?20+30*le:16)*Pe*b;ye.side>=1;ye.side--){let ae=v()<.5?-1:1,fe=(v()-.5)*1.4,Se=G.x+ae*(.44+v()*.14),be=G.z+fe*.35,$e=r.surface(s,Se,be,B);M.emitT(Se,$e+.04,be,ae*(.4+v()*.7),1+v()*1.3,G.speed*.6+(v()-.5)*.5,.03+v()*.045,.45+v()*.35,0)}for(ye.puff+=(Y?6:7)*Pe*b;ye.puff>=1;ye.puff--){let ae=Math.PI+(v()-.5)*2.6,fe=.5+v()*.35,Se=G.x+Math.sin(ae)*fe,be=G.z+Math.cos(ae)*fe*.85,$e=r.surface(s,Se,be,B);M.emitT(Se,$e+.03,be,Math.sin(ae)*.12,.12+v()*.12,G.speed*.8,.12+v()*.12,.6+v()*.5,1,.08)}}if(Rn.foam)for(ye.wall+=30*b;ye.wall>=1;ye.wall--){let ae=Math.min(C-1.2,G.z-2+v()*18);if(ze(ae)<.5)continue;let fe=v()<.5?-1:1,Se=fe*(r.SLIDE.half-.04),be=r.surface(s,Se,ae,B);M.emitT(Se,be+.05,ae,-fe*(.2+v()*.5),.8+v()*1.2,1.5+v()*2,.035+v()*.04,.4+v()*.3,0),v()<.25&&M.emitT(Se-fe*.08,be+.03,ae,-fe*.1,.1,2,.1+v()*.08,.5+v()*.4,1,.05)}M.update(b)}),u&&(u.uOpen.value=Rn.foam?1:0);let _e={uTime:{value:0},uAvoid:{value:new w(0,-99,0)}},he=new Qe({vertexShader:c1,fragmentShader:u1,uniforms:_e,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt}),me=b=>{let B=new Ln(2,2),V=new An;V.index=B.index,V.attributes.position=B.attributes.position,V.attributes.uv=B.attributes.uv,V.setAttribute("inst",new Rt(new Float32Array(b*4),4).setUsage(zn)),V.setAttribute("motion",new Rt(new Float32Array(b*4),4)),V.instanceCount=0;let G=new Fe(V,he);return G.frustumCulled=!1,G.renderOrder=5,_.add(G),G},Me=null,Ue=!1,Re=new Bt(40,.5,.1,200),te=[];if(Rn.bubbles&&d){let b=d.geometry.attributes.inst,B=d.geometry.attributes.phase;for(let V=0;V<b.count;V++)b.getZ(V)>C-.5||(te.push([b.getX(V),b.getY(V),b.getZ(V),b.getW(V),B.getX(V)]),b.setW(V,0));b.needsUpdate=!0,Me=me(te.length+jm.length)}let oe=64,N=Rn.bubbles?me(oe):null,we=[];for(let b=0;b<oe;b++)we.push({a:Math.PI+(v()-.5)*3.8,r:.5+Math.pow(v(),1.3)*.7,s:.012+Math.pow(v(),2.2)*.04,ph:v()*6.28});let ne=20,ce=Rn.foam?me(ne):null,ue=[];for(let b=0;b<ne;b++){let B=b<9,V=B?9:11,G=B?b:b-9,Y=B?1.35:1.75,de=Math.PI+((G+.5)/V*2-1)*Y+(v()-.5)*.15;ue.push({a:de,r:B?.47+v()*.05:.6+v()*.08,s:B?.1+v()*.07:.05+v()*.045,lift:B?.22+v()*.3:.25+v()*.2,ph:v()*6.28,drift:v(),inner:B})}if(T.push((b,B,V)=>{if(_e.uTime.value=B,_e.uAvoid.value.copy(o.root.position),Me&&!Ue&&V==="intro"){Ue=!0;let G=a.aspect;Re.fov=G>=.5?a.fov:Ve.radToDeg(2*Math.atan(Math.tan(Ve.degToRad(a.fov)/2)*G/.5)),Re.position.copy(a.position),Re.quaternion.copy(a.quaternion),Re.updateProjectionMatrix(),Re.updateMatrixWorld(!0);let Y=Re.getWorldDirection(new w),de=new w,xe=Me.geometry.attributes.inst,ge=Me.geometry.attributes.motion,Pe=0;for(let ae of te)xe.setXYZW(Pe,ae[0],ae[1],ae[2],ae[3]),ge.setXYZW(Pe,ae[4],0,.02,0),Pe++;let le=ae=>1076/(2*ae*Math.tan(Ve.degToRad(Re.fov)/2));for(let[ae,fe,Se,be,$e,Ye]of jm){de.set(ae/538*2-1,1-fe/1076*2,.5).unproject(Re).sub(Re.position).normalize();let at=Re.position.clone().addScaledVector(de,Se/de.dot(Y));xe.setXYZW(Pe,at.x,at.y,at.z,be/le(Se)),ge.setXYZW(Pe,v()*6.28,$e,Ye,0),Pe++}Me.geometry.instanceCount=Pe,xe.needsUpdate=ge.needsUpdate=!0}if(N){let G=o,Y=ze(G.z)*(G.air?0:1),de=N.geometry.attributes.inst,xe=N.geometry.attributes.motion;for(let ge=0;ge<oe;ge++){let Pe=we[ge],le=V==="running"?(B*.9+Pe.ph)%1*(G.speed/r.CRUISE):0,ae=ie+Math.sin(Pe.a)*Pe.r,fe=G.z+Math.cos(Pe.a)*Pe.r*.85-le*1.2,Se=K(ae,fe,B);n.frame(fe,X),O.copy(X.P).addScaledVector(X.R,ae).addScaledVector(X.U,Se+Pe.s*.9),de.setXYZW(ge,O.x,O.y,O.z,Pe.s*Y),xe.setXYZW(ge,Pe.ph,0,0,-1)}N.geometry.instanceCount=oe,de.needsUpdate=!0,xe.needsUpdate=!0}if(ce){let G=o,Y=V==="running",de=Math.min(1.4,G.speed/r.CRUISE),xe=Math.max(0,G.yAbs-(r.surface(s,G.x,G.z,B)+r.FLOAT_H)),ge=ze(G.z)*(1-ia(.06,.35,xe)),Pe=ce.geometry.attributes.inst,le=ce.geometry.attributes.motion;for(let ae=0;ae<ne;ae++){let fe=ue[ae],Se=Y?(B*(.7+.6*fe.drift)+fe.drift)%1:0,be=Se*de*(fe.inner?.35:.6),$e=Y?.55+.45*Math.sin(Math.PI*Math.min(1,Se*1.1)):1,Ye=fe.inner?G.x:ie,at=1+.06*Math.sin(B*2.1+fe.ph),k=Ye+Math.sin(fe.a)*fe.r*(1+.15*de*Se),ve=G.z+Math.cos(fe.a)*fe.r*.85-be,j=fe.s*ge*$e*at;n.frame(ve,X),O.copy(X.P).addScaledVector(X.R,k).addScaledVector(X.U,K(k,ve,B)+j*fe.lift),Pe.setXYZW(ae,O.x,O.y,O.z,j),le.setXYZW(ae,fe.ph,0,0,1)}ce.geometry.instanceCount=ne,ce.renderOrder=6,Pe.needsUpdate=!0,le.needsUpdate=!0}}),Rn.brushes){if(x){let B={...Sd.machinery,at:[...Sd.machinery.at]},V=x(B);for(let G=0;G<20&&!(V>=Jm);G++)B.at[0]+=.03,V=x(B);i.machineryInnerX=V}p&&p.traverse(B=>{B.isMesh&&(B.material=L(B.material,"machinery","face",B.geometry))}),f.filter(B=>B.centre.z<C).forEach((B,V)=>{let G=null;B.g.traverse(de=>{de.isMesh&&(!G||de.geometry.attributes.position.count>G.geometry.attributes.position.count)&&(G=de)}),G&&(G.material=L(G.material,"roller"+V,"roller",G.geometry));let Y=Sd.rollers[V];Y&&Y.hide?B.g.visible=!1:Y&&Ie(B,Y)})}function Ie(b,B){let V=new $t,G=new w,Y=new w,de=b.g.children[0];b.g.remove(de),de.updateMatrixWorld(!0),V.setFromObject(de),V.getSize(G),V.getCenter(Y),b.g.add(de);let xe=B.d/Math.max(G.x,G.z),ge=new w(...B.axis).normalize(),Pe=n.map(B.at[0],B.at[1],B.at[2]);b.m0=new Te().compose(Pe,new Mt().setFromUnitVectors(new w(0,1,0),ge),new w(xe,xe,xe)).multiply(new Te().makeTranslation(-Y.x,-Y.y,-Y.z)),b.centre=Pe,b.axis=ge}if(Rn.slide&&e.traverse(b=>{if(b.isMesh&&b.material&&b.material.isMeshStandardMaterial&&b.material.color.getHex()===15128831){let B=b.material.clone();B.color.set(9425663),B.roughness=.16,B.metalness=.1,B.envMapIntensity=1.35,B.emissive.set(1929176),B.emissiveIntensity=.35,b.material=B}}),Rn.mascot&&m){let b=new w(...Km.stretch);m.scale.multiply(b),m.position.multiply(b),g&&(g.uSpike.value=Km.spike)}h&&(h.uniforms.uOpen.value=0),T.push(()=>{if(!h)return;let b=a.position.z;h.uniforms.uOpen.value=Rn.light?1-ia(-6,1.2,b):0});async function Ee(){if(Gm&&(window.__bwS3=await qm({scene:e,env:t,axisY:y,tunnelStart:C,oldCastle:i.castle,sideMachinery:p,staticBubbles:Me,camera:a,updaters:T,mascot:o,L:s,W:r,renderPass:i.renderPass,rollers:f,grade:h,bloomPass:i.bloomPass,outputPass:i.outputPass,waterSheets:i.waterSheets,TR:n,bumpMascot:i.bumpMascot,drumMeshes:i.drumMeshes,exitLight:i.exitLight,r2:i.r2})),!Zm)return;let b=await Zm;if(!b){i.rollerCandidate={file:Kl[sa],error:"not found"};return}let B=await new xs().parseAsync(b,""),V=null;B.scene.traverse(Ce=>{Ce.isMesh&&!V&&(V=Ce)});let G=V.geometry,Y=G.attributes.position,de=G.index.array,xe=de.length/3,ge=Ce=>`${Math.round(Y.getX(Ce)*1e4)},${Math.round(Y.getY(Ce)*1e4)},${Math.round(Y.getZ(Ce)*1e4)}`,Pe=new Map,le=new Int32Array(Y.count);for(let Ce=0;Ce<Y.count;Ce++){let Je=ge(Ce);Pe.has(Je)||Pe.set(Je,Pe.size),le[Ce]=Pe.get(Je)}let ae=new Int32Array(Pe.size).map((Ce,Je)=>Je),fe=Ce=>{for(;ae[Ce]!==Ce;)Ce=ae[Ce]=ae[ae[Ce]];return Ce};for(let Ce=0;Ce<xe;Ce++){let Je=fe(le[de[Ce*3]]);ae[fe(le[de[Ce*3+1]])]=Je,ae[fe(le[de[Ce*3+2]])]=Je}let Se=new Map;for(let Ce=0;Ce<xe;Ce++){let Je=fe(le[de[Ce*3]]);Se.has(Je)||Se.set(Je,[]),Se.get(Je).push(de[Ce*3],de[Ce*3+1],de[Ce*3+2])}let be=[...Se.values()].sort((Ce,Je)=>Je.length-Ce.length),$e=(()=>{let Ce=V.material.metalnessMap;if(!Ce||!Ce.image)return null;let Je=document.createElement("canvas");Je.width=Ce.image.width,Je.height=Ce.image.height;let en=Je.getContext("2d");en.drawImage(Ce.image,0,0);let Yi=en.getImageData(0,0,Je.width,Je.height).data,Cn=G.attributes.uv;return(Ft,R,q)=>{let ee=(Cn.getX(Ft)+Cn.getX(R)+Cn.getX(q))/3,Q=(Cn.getY(Ft)+Cn.getY(R)+Cn.getY(q))/3;Ce.flipY&&(Q=1-Q);let $=Math.min(Je.width-1,Math.max(0,Math.floor(ee*Je.width))),Ae=Math.min(Je.height-1,Math.max(0,Math.floor(Q*Je.height)));return Yi[(Ae*Je.width+$)*4+2]/255}})(),Ye=0;if($e){let Ce=be[0],Je=Ft=>(Y.getZ(Ce[Ft])+Y.getZ(Ce[Ft+1])+Y.getZ(Ce[Ft+2]))/3,en=[];for(let Ft=0;Ft<Ce.length;Ft+=3)$e(Ce[Ft],Ce[Ft+1],Ce[Ft+2])<.5&&en.push(Je(Ft));en.sort((Ft,R)=>Ft-R);let Yi=en[Math.floor(en.length*.02)],Cn=en[Math.floor(en.length*.98)];for(let Ft=0;Ft<Ce.length;Ft+=3)$e(Ce[Ft],Ce[Ft+1],Ce[Ft+2])>.5&&(Je(Ft)<Yi||Je(Ft)>Cn)&&Ye++}let at=Ce=>{let Je=new st;for(let en of Object.keys(G.attributes))Je.setAttribute(en,G.attributes[en]);return Je.setIndex(Ce),Je.computeBoundingBox(),Je.computeBoundingSphere(),Je},k=at(be[0]),ve=be.length>1?at(be.slice(1).flat()):null,j=!!ve&&Ye<10,se=k.boundingBox,De=new w((se.min.x+se.max.x)/2,(se.min.y+se.max.y)/2,0);G.computeBoundingBox();let He=G.boundingBox,et=He.getSize(new w),Pt=V.material,Jt=new ht({map:Pt.map,metalnessMap:Pt.metalnessMap,roughnessMap:Pt.roughnessMap,normalMap:Pt.normalMap||null,metalness:1,roughness:1,envMap:t,envMapIntensity:1.15,emissive:16777215,emissiveMap:Pt.map,emissiveIntensity:.2,side:lt});Jt.customProgramCacheKey=()=>"opening:rollerCandidate";let pt=a1,Mn=pt.length/et.z,jt=new Ze;jt.name="rollerCandidate"+sa;let Xi=new Ze;Xi.scale.setScalar(Mn),jt.add(Xi);let As=new Ze;As.position.copy(De),Xi.add(As);let ai=new Fe(k,Jt);if(ai.position.copy(De).negate(),As.add(ai),ve){let Ce=new Fe(ve,Jt);Xi.add(Ce)}_.add(jt);let rr=()=>{let Ce=pt.length/et.z;Xi.scale.setScalar(Ce),jt.position.set(pt.at[0],pt.feetY-He.min.y*Ce,pt.at[2]),jt.rotation.y=Ve.degToRad(pt.yaw)};rr();let ao=()=>{jt.updateMatrixWorld(!0);let Ce=1/0,Je=new w;return jt.traverse(en=>{if(!en.isMesh)return;let Yi=en.geometry.attributes.position;for(let Cn=0;Cn<Yi.count;Cn+=3)Je.fromBufferAttribute(Yi,Cn).applyMatrix4(en.matrixWorld),Je.z<C&&Je.y<2.6&&(Ce=Math.min(Ce,Math.abs(Je.x)))}),Ce},lo=()=>{let Ce=ao();for(let Je=0;Je<30&&Ce<Jm;Je++)jt.position.x+=.04*Math.sign(jt.position.x||-1),Ce=ao();return Ce},qi=lo();window.__bwRoller=Ce=>(Object.assign(pt,Ce),rr(),qi=lo(),i.rollerCandidate={...i.rollerCandidate,at:jt.position.toArray().map(Je=>+Je.toFixed(2)),nearestToLanes:+qi.toFixed(2)},i.rollerCandidate);let co=f.filter(Ce=>Ce.centre.z<C);co[1]&&(co[1].g.visible=!1),i.rollerCandidate={file:Kl[sa],pieces:Se.size,drumTris:be[0].length/3,bracketTris:ve?ve.index.count/3:0,fusedGoldTris:Ye,spinnable:j,scale:+Mn.toFixed(3),diameter:+(Math.max(et.x,et.y)*Mn).toFixed(2),length:pt.length,at:jt.position.toArray().map(Ce=>+Ce.toFixed(2)),nearestToLanes:+qi.toFixed(2)},j&&T.push(Ce=>{As.rotation.z+=pt.spin*Ce})}return Cm&&(window.__bwPhaseA=Lm({scene:e,castle:i.castle,waterSheets:i.waterSheets,axisY:y,tunnelStart:C})),{root:_,loadExtras:Ee,update(b,B,V){for(let G of T)G(b,B,V)}};function L(b,B,V,G){let Y=b.clone(),de=b.onBeforeCompile,xe=b.customProgramCacheKey.bind(b),ge=V==="face";ge&&(Y.envMapIntensity=1.4,Y.emissiveIntensity=.15),G.computeBoundingBox();let Pe=G.boundingBox,le=Pe.getCenter(new w),ae=Pe.getSize(new w),fe=ge?Math.max(ae.x,ae.y)*.5:Math.max(ae.x,ae.z)*.5;return Y.onBeforeCompile=(Se,be)=>{de.call(b,Se,be),Se.vertexShader=Se.vertexShader.replace("void main() {",`varying vec3 vFibreP;
void main() {
  vFibreP = position;`),Se.fragmentShader=Se.fragmentShader.replace("void main() {",`varying vec3 vFibreP;
${l1}
void main() {`);let $e=ge?"#include <emissivemap_fragment>":"#include <alphamap_fragment>",Ye=`(vFibreP - vec3(${le.x.toFixed(4)}, ${le.y.toFixed(4)}, ${le.z.toFixed(4)})) / ${fe.toFixed(4)}`,at=ge?"vec3(atan(q.y, q.x) * 160.0, length(q.xy) * 9.0, q.z * 30.0)":"vec3(atan(q.z, q.x) * 150.0, q.y * 120.0, length(q.xz) * 8.0)";Se.fragmentShader=Se.fragmentShader.replace($e,`${$e}
        { vec3 cc = diffuseColor.rgb;
          float mx = max(cc.r, max(cc.g, cc.b));
          float soft = ${ge?"(1.0 - smoothstep(0.3, 0.6, metalnessFactor))":"1.0"} * smoothstep(0.04, 0.2, mx);
          vec3 q = ${Ye};
          vec3 fc = ${at};
          float strand = fibreNoise(fc) * 0.65 + fibreNoise(fc * vec3(2.1, 1.7, 1.0) + 7.3) * 0.35;
          float f = mix(0.74, 1.18, smoothstep(0.2, 0.8, strand));
          diffuseColor.rgb *= mix(1.0, f, soft * 0.85);
          ${ge?"totalEmissiveRadiance *= mix(1.0, f, soft);":""} }`)},Y.customProgramCacheKey=()=>xe()+"|fibre:"+B,Y}}var Rn={portal:_i,foam:_i,bubbles:_i,brushes:_i,slide:_i,mascot:_i,light:_i,art:_i};if(typeof window<"u"&&Array.isArray(window.__BW_OPENING_OFF__))for(let i of window.__BW_OPENING_OFF__)Rn[i]=!1;ot.round3&&(Rn.art=!1);var Km={stretch:[.95,1.07,.95],spike:1},jm=[[512,655,7.5,30,0,.03],[36,815,5.4,52,0,.03],[503,848,5.2,46,0,.03],[165,592,13,26,0,.04],[92,470,15,20,0,.04],[120,700,9,14,.12,.05],[420,720,9,12,.1,.05],[205,440,22,8,.15,.06],[345,430,22,9,.12,.06],[372,540,18,10,.1,.05],[160,520,18,9,.14,.05],[60,640,9,16,.08,.04],[250,400,26,6,.1,.05],[300,395,26,5,.12,.05],[24,560,12,22,0,.03]],Jm=1.18,Sd={machinery:{at:[2.9,.92,-9.7],yaw:.1,height:3.1},rollers:[{hide:!0},{at:[-2.7,1.1,-5.8],axis:[.12,1,.25],d:1.35}]},l1=`
float fibreHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float fibreNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(fibreHash(i), fibreHash(i + vec3(1, 0, 0)), f.x), mix(fibreHash(i + vec3(0, 1, 0)), fibreHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(fibreHash(i + vec3(0, 0, 1)), fibreHash(i + vec3(1, 0, 1)), f.x), mix(fibreHash(i + vec3(0, 1, 1)), fibreHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
`,c1=`
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
`,u1=`
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
`,h1=`
varying vec3 vN; varying vec3 vW;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,d1=`
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
`;function f1(i){let e=new us(1,4),t=e.attributes.position,n=new w,s=4+i()*2,r=5+i()*2;for(let o=0;o<t.count;o++){n.fromBufferAttribute(t,o);let a=1+.1*Math.sin(n.x*s+n.y*3.1)*Math.sin(n.y*r+n.z*3.7)+.035*Math.sin(n.z*9+n.x*7);n.multiplyScalar(a),t.setXYZ(o,n.x,n.y,n.z)}return e.computeVertexNormals(),e}function p1(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.moveTo(32,2),e.lineTo(35,29),e.lineTo(62,32),e.lineTo(35,35),e.lineTo(32,62),e.lineTo(29,35),e.lineTo(2,32),e.lineTo(29,29),e.closePath(),e.fill();let n=new pi(i);return n.colorSpace=At,n}var n0={radius:.3,half:.05,bright:[1,.78,.26],field:[.96,.6,.12],edge:[.95,.52,.08],metalness:.75,roughness:.26,glow:.3};function Td(i="high"){let e=n0,t=i==="high",n=[[0,.03],[.188,.03],[.2,.038],[.214,.044],[.228,.038],[.237,.034],[.248,.047],[.266,.052],[.287,.047],[.299,.032]],s=[...n,...n.slice().reverse().map(([d,f])=>[d,-f])].map(([d,f])=>new re(d,f));s.reverse();let r=new qr(s,t?56:28).toNonIndexed();r.rotateX(Math.PI/2),t0(r,(d,f,p)=>{let x=Math.hypot(d,f);return Math.abs(p)<.034&&x>.29?e.edge:x<.196?e.field:e.bright});let o=[],a={depth:.004,bevelEnabled:!0,bevelThickness:.008,bevelSize:.007,bevelSegments:t?3:1,curveSegments:t?14:6},l=new cs;l.moveTo(0,.03),l.bezierCurveTo(.058,.03,.084,-.008,.084,-.042),l.bezierCurveTo(.084,-.076,.06,-.094,.036,-.09),l.bezierCurveTo(.016,-.087,.009,-.1,0,-.1),l.bezierCurveTo(-.009,-.1,-.016,-.087,-.036,-.09),l.bezierCurveTo(-.06,-.094,-.084,-.076,-.084,-.042),l.bezierCurveTo(-.084,-.008,-.058,.03,0,.03),o.push(new Xs(l,a));for(let[d,f,p,x,g]of[[-.106,.04,.03,.04,.5],[-.039,.093,.031,.042,.14],[.039,.093,.031,.042,-.14],[.106,.04,.03,.04,-.5]]){let m=new cs;m.absellipse(0,0,p,x,0,Math.PI*2,!1,0);let v=new Xs(m,a);v.rotateZ(g),v.translate(d,f,0),o.push(v)}let c=Fh(o.map(d=>(d.deleteAttribute("uv"),d.index?d.toNonIndexed():d)));c.translate(0,-.005,.03+a.bevelThickness-.002),t0(c,()=>e.bright);let u=c.clone();u.rotateY(Math.PI),r.deleteAttribute("uv");let h=Fh([r,c,u]);return h.computeBoundingSphere(),h}function t0(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3);for(let s=0;s<t.count;s++)n.set(e(t.getX(s),t.getY(s),t.getZ(s)),s*3);i.setAttribute("color",new it(n,3))}function i0(i){let e=n0,t=new ht({vertexColors:!0,metalness:e.metalness,roughness:e.roughness,envMap:i,envMapIntensity:1.35});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${e.glow.toFixed(3)} + vec3(1.0, 0.9, 0.55) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.35;`)},t.customProgramCacheKey=()=>"pawCoin",t}var yt=!!ot.round2,Kt={hearts:5,hurtGuard:1,outOfHearts:1.4,blasts:3,blastTime:3,blastReach:13,turbos:3,turboTime:2.5,turboSpeed:1.45,coinH:.7,sockH:.88,gemH:.85,coinLines:[[1,4.4,5],[0,10.8,3],[1,16.8,2],[2,18.6,3],[1,23.4,5],[0,29.8,3]],coinStep:1,socks:[[1,9.6],[0,14],[2,21.8],[1,28.6],[0,33]],gems:[[1,15.6],[0,34.2]]},Ts={},Gi=!!ot.round3,m1=!!ot.round4;Gi&&Object.assign(Kt,{coinLines:[[1,4,3,1,.7,0],[2,10.1,1,1,.55,0],[0,11.2,3,1.4,.92,.18],[1,15,3,1,.72,0],[2,18.4,3,1,.7,0],[1,23.4,5,1,.7,0],[0,29.8,3,1,.7,0]],socks:[[1,7.6],[2,12.1],[2,21.8],[1,28.6],[0,33]],gems:[[0,14.6],[0,34.2]],gemH:1});var g1=Gi?Md(15931):null,o0=!!window.__BW_TEST__,Ud=!!window.__BW_SIDE__||/[?&]side(=|&|$)/.test(location.search),dc=!!window.__BW_TOUCHES__||/[?&]touches(=|&|$)/.test(location.search);Ud&&document.body.classList.add("side");var nt=i=>document.getElementById(i),ws=i=>new w(i[0],i[1],i[2]),Zt=i=>new pe(i),hn=nt("stage"),v1=nt("view"),Wi=new ll({canvas:v1,antialias:!1,powerPreference:"high-performance"});Wi.toneMapping=$o;Wi.toneMappingExposure=1.05;var Vi=Math.min(window.devicePixelRatio||1,1.6);Wi.setPixelRatio(Vi);var Ct=new Bo,un=new Bt(55,.5,.1,200),oi=new kl(Wi);oi.addPass(new Vl(Ct,un));var ro=new Jr(new re(256,512),.32,.45,.97);oi.addPass(ro);var a0=new jr(ym);oi.addPass(a0);oi.addPass(new Gl);Ct.add(new Al(16771583,7252223,1.1));var Fd=new $s(16773862,1.7);Fd.position.set(-3,6,-4);Ct.add(Fd);var x1=Fd.position.clone().normalize(),l0=new $s(13625599,1.3);l0.position.set(2,7,12);Ct.add(l0);var Dd={layout:"models/layout.json",castle:"models/castle.glb",drum:"models/drum.glb",mascot:"models/mascot.glb",roller:"models/roller.glb",gem:"models/gem.glb",sock:"models/sock.glb",machinery:"models/machinery.glb",tower:"models/tower.glb",gear:"models/gear.glb",pipe:"models/pipe.glb",crown:"models/crown.glb"},c0={};function y1(){let i=0,e=0;for(let n of Object.values(c0))i+=n.loaded,e+=n.total||n.loaded;let t=e>0?Math.round(i/e*100):0;nt("loadBar").style.width=t+"%",nt("loadPct").textContent=t+"%"}var _1=new xs;async function s0(i,e){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);let n=+t.headers.get("content-length")||0,s=t.body.getReader(),r=[],o=0;for(;;){let{done:c,value:u}=await s.read();if(c)break;r.push(u),o+=u.length,c0[e]={loaded:o,total:Math.max(n,o)},y1()}let a=new Uint8Array(o),l=0;for(let c of r)a.set(c,l),l+=c.length;return a}var M1=window.__BW_MODEL_FORMAT__==="json";async function b1(i){let e;try{if(M1)throw new Error("json");e=await s0(Dd[i],i)}catch{let t=JSON.parse(new TextDecoder().decode(await s0(Dd[i]+".json",i))),n=atob(t.data);e=new Uint8Array(n.length);for(let s=0;s<n.length;s++)e[s]=n.charCodeAt(s)}return _1.parseAsync(e.buffer,"")}var Le,bt,Oe={P:new w,R:new w,U:new w,T:new w},Z={phase:"loading",time:0,coins:1280,gems:36,socks:0,sound:!0,collected:{coins:0,gems:0},laps:0};yt&&Object.assign(Z,{hearts:Kt.hearts,blasts:Kt.blasts,turbos:Kt.turbos,paused:!1,blastT:0,turboT:0,guardT:0,outT:-1,knocks:0,restarts:0});var ke={};function E1(i,e={}){let t=new It({map:i.map||null,color:16777215,vertexColors:!!e.vertexColors,side:lt}),n=e.saturation??1.15,s=e.brightness??1,r=e.glow??0,o=e.haze,a=e.shade;t.onBeforeCompile=c=>{a&&(c.vertexShader=c.vertexShader.replace("void main() {",`varying vec3 vShadeN; varying vec3 vShadeP;
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
`+e.afterColor)),(e.grade||e.afterColor)&&(c.fragmentShader=c.fragmentShader.replace("void main() {",`${sm}
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
      ${o?`diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${o[3].map(u=>u.toFixed(3)).join(", ")}), ${o[0].toFixed(3)} * smoothstep(${o[1].toFixed(2)}, ${o[2].toFixed(2)}, vHazeDepth));`:""}`)};let l="baked:"+JSON.stringify([n,s,r,e.lift??0,o||0,a||0,e.grade||"",e.afterColor||""]);return t.customProgramCacheKey=()=>l,t}var tr,nr,Ke,mt,dt,ha,ir,nc=null,ic=[],sc=[],rc=[],da=[],u0=[],oc=new Te,w1=new Te,ac=new Mt;function S1(){let i=new Fe(new rn(170,32,16),new Qe({vertexShader:fm,fragmentShader:pm,side:mn,depthWrite:!1,uniforms:{uTop:{value:Zt(12759295)},uMid:{value:Zt(15128319)},uHorizon:{value:Zt(16445183)},uBottom:{value:Zt(9420031)}}}));i.renderOrder=-10,Ct.add(i);let e=new Bo,t=i.clone();t.material=i.material.clone(),t.material.uniforms={uTop:{value:Zt(7299008)},uMid:{value:Zt(10127064)},uHorizon:{value:Zt(14072048)},uBottom:{value:Zt(2306159)}},e.add(t);for(let[s,r,o]of[[[0,60,10],[90,50],[3.2,3,3.2]],[[-70,25,20],[40,60],[2.6,1.6,2.4]],[[70,20,10],[40,60],[1.4,2.4,3]],[[0,18,-80],[70,30],[2,1.9,2.2]],[[0,10,85],[60,25],[1.6,2,2.8]]]){let a=new Fe(new Ln(...r),new It({color:new pe(...o),side:lt}));a.position.set(...s),a.lookAt(0,0,0),e.add(a)}let n=new Vr(Wi);ke.env=n.fromScene(e,.02,.1,400).texture,ke.gold=new ht({color:16760645,metalness:1,roughness:.22,envMap:ke.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.35})}function fc(i){let e=0;return i.traverse(t=>{if(!t.isMesh)return;t.geometry.attributes.normal||(t.geometry.computeVertexNormals(),e+=1e6);let n=t.geometry.attributes.normal,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){let o=n.getX(r),a=n.getY(r),l=n.getZ(r),c=Math.hypot(o,a,l);c>1e-4?(o/=c,a/=c,l/=c):(o=0,a=1,l=0,e++),s[r*3]=o,s[r*3+1]=a,s[r*3+2]=l}t.geometry.setAttribute("normal",new it(s,3))}),e}function T1(i,e){let t=new Ze;return t.matrixAutoUpdate=!1,t.matrix.fromArray(e),t.add(i),Ct.add(t),t}function Hd(i,e,t){i.traverse(n=>{n.isMesh&&(n.material=E1(n.material,{...e,...t?t(n):{},vertexColors:!!n.geometry.attributes.color}),n.frustumCulled=!0)})}function A1(){let i=[];for(let r=0;r<=10;r++)i.push(-30+(30-3.2)*Math.pow(r/10,.55));for(let r=1;r<40;r++)i.push(-3.2+6.4*(r/40));for(let r=10;r>=0;r--)i.push(30-(30-3.2)*Math.pow(r/10,.55));let e=(r,o,a,l)=>{let c=Math.ceil((a-o)/l)+1,u=c*r.length,h=new Float32Array(u*3),d=new Float32Array(u*2),f=new Float32Array(u*3),p=new Float32Array(u*3),x=new Float32Array(u*3),g=new Float32Array(u*3),m=[];for(let _=0;_<c;_++){let y=o+(a-o)*_/(c-1);bt.frame(y,Oe);for(let C=0;C<r.length;C++){let T=_*r.length+C,A=r[C];d[T*2]=A,d[T*2+1]=y,Oe.P.toArray(f,T*3),Oe.R.toArray(p,T*3),Oe.U.toArray(x,T*3),Oe.T.toArray(g,T*3),h[T*3]=Oe.P.x+Oe.R.x*A,h[T*3+1]=Oe.P.y+Oe.R.y*A,h[T*3+2]=Oe.P.z+Oe.R.z*A}}for(let _=0;_<c-1;_++)for(let y=0;y<r.length-1;y++){let C=_*r.length+y,T=C+r.length;m.push(C,T,C+1,T,T+1,C+1)}let v=new st;v.setAttribute("position",new it(h,3)),v.setAttribute("aTrack",new it(d,2));for(let[_,y]of[["aP",f],["aR",p],["aU",x],["aT",g]])v.setAttribute(_,new it(y,3));return v.setIndex(m),v.computeBoundingSphere(),v.boundingSphere.radius+=3,v},t=[];for(let r=0;r<js;r++)t.push(new vt(0,0,-99,0));nr={uTime:{value:0},uTunnel:{value:new vt(Le.tunnelStart,Le.tunnelEnd,Le.tunnelRadius,Le.axisHeight)},uRipples:{value:t},uPlayer:{value:new w},uPlayerMove:{value:new w},uFlow:{value:9},uSlideHalf:{value:qt.half},uDeep:{value:Zt(407256)},uShallow:{value:Zt(2071551)},uTurq:{value:Zt(4123384)},uGlow:{value:Zt(10154751)},uSky:{value:Zt(11126015)},uPink:{value:Zt(16751584)},uGold:{value:Zt(16763994)},uRingA:{value:Zt(16767091)},uRingB:{value:Zt(9234175)},uFog:{value:Zt(13421823)},uSunDir:{value:x1},uRings:{value:new w(Le.tunnelStart+.25,Le.segmentLength-Math.max(.02,Le.segmentLength*.005),4)},uOpen:{value:0}};let n=new Qe({vertexShader:cm,fragmentShader:um,uniforms:nr}),s=[];for(let r=0;r<=28;r++)s.push(-2.1+4.2*(r/28));tr=new Ze,tr.add(new Fe(e(i,Le.startZ-30,Le.tunnelStart+2.5,.3),n)),tr.add(new Fe(e(s,Le.tunnelStart-.5,Le.tunnelEnd+6,.25),n)),Ct.add(tr)}function R1(){let i=new ht({color:3107839,metalness:.2,roughness:.12,envMap:ke.env,envMapIntensity:1.6,emissive:666266,emissiveIntensity:.5}),e=new ht({color:15128831,metalness:.15,roughness:.32,envMap:ke.env,envMapIntensity:1,side:lt}),t=new ht({color:15903035,metalness:1,roughness:.3,envMap:ke.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),n=Le.startZ-24,s=-.6,r=.62,o=Math.floor((s-n)/r)+1,a=new Gt(new gi(.22,.26,.5,2,.06),t,o*2),l=new Gt(new rn(.055,12,8),i,o*2),c=[[-.06,-.06],[.04,.1],[.14,.2],[.26,.2],[.34,.08],[.36,-.8]],u=0;for(let h of[-1,1]){let d=[],f=[],p=[],x=0;for(let v=n;v<=s+1e-6;v+=.25,x++){let _=Un(Le,h*qt.half,v);for(let[y,C]of c)d.push(h*(qt.half+y),_+C,v);p.push(new w(h*(qt.half+.2),_+.26,v))}let g=c.length;for(let v=0;v<x-1;v++)for(let _=0;_<g-1;_++){let y=v*g+_,C=y+g;f.push(y,C,y+1,C,C+1,y+1)}let m=new st;m.setAttribute("position",new je(d,3)),m.setIndex(f),m.computeVertexNormals(),Ct.add(new Fe(m,e)),Ct.add(new Fe(new Ys(new ls(p),p.length*2,.1,14),ke.gold));for(let v=0;v<o;v++,u++){let _=n+v*r,y=Un(Le,h*qt.half,_),C=(Un(Le,h*qt.half,_+.2)-Un(Le,h*qt.half,_-.2))/.4;ac.setFromAxisAngle(new w(1,0,0),-Math.atan(C)),a.setMatrixAt(u,oc.compose(new w(h*(qt.half+.36),y+.1,_),ac,new w(1,1,1))),l.setMatrixAt(u,oc.makeTranslation(h*(qt.half+.48),y+.1,_))}}Ct.add(a,l)}function h0(i,e,t,n,s=12,r=26){let a=[0],l=new w;for(let m=1;m<=200;m++){let v=m/200,_=new w(0,-e*v*v,i*v);a.push(a[m-1]+_.distanceTo(l)),l=_}let c=a[200],u=[],h=[],d=[],f=[],p=[],x=0;for(let m=0;m<=r;m++){let v=m/r,_=v*c;for(;x<199&&a[x+1]<_;)x++;let y=(x+Math.min(1,Math.max(0,(_-a[x])/Math.max(1e-6,a[x+1]-a[x]))))/200,C=new w(0,-e*y*y,i*y),T=new w(0,-2*e*y,i).normalize(),A=new w(0,T.z,-T.y),D=t+(n-t)*v,E=D*.5,M=D*.35;for(let S=0;S<=s;S++){let F=Math.PI*S/s,P=-Math.cos(F),U=Math.sin(F),H=C.clone().add(new w(P*E,0,0)).addScaledVector(A,U*M),I=new w(P/E,0,0).addScaledVector(A,U/M).normalize();u.push(H.x,H.y,H.z),h.push(I.x,I.y,I.z),d.push(S/s,_),f.push(v)}}for(let m=0;m<r;m++)for(let v=0;v<s;v++){let _=m*(s+1)+v,y=_+s+1;p.push(_,_+1,y,y,_+1,y+1)}let g=new st;return g.setAttribute("position",new je(u,3)),g.setAttribute("normal",new je(h,3)),g.setAttribute("uv",new je(d,2)),g.setAttribute("progress",new je(f,1)),g.setIndex(p),g}function C1(){let i={uTime:{value:0},uLipSpeed:{value:1.2},uStreakLen:{value:.35},uDeep:{value:Zt(21247)},uBright:{value:Zt(4250623)},uSky:{value:Zt(14268671)},uPink:{value:Zt(16751078)}};u0.push(i);let e=new Ze;Ct.add(e),ke.falls=e;let t=new Qe({vertexShader:hm,fragmentShader:dm,uniforms:i,transparent:!0,depthWrite:!1,side:lt});ke.fallMat=t;let n=(r,o,a,l)=>{let c=o.clone().sub(r),u=r.y-o.y;c.y=0;let h=new Fe(h0(Math.max(.02,c.length()),Math.max(.05,u),a,l),t);h.position.copy(r),h.lookAt(r.clone().add(c.lengthSq()>1e-6?c.normalize():new w(0,0,-1))),h.renderOrder=2,e.add(h)},s=(r,o,a)=>{let l=o.clone().sub(r),c=l.length(),u=new Fe(new xn(a,a,c,16),ke.gold);u.position.copy(r).add(o).multiplyScalar(.5),u.quaternion.setFromUnitVectors(new w(0,1,0),l.normalize()),e.add(u)};for(let r of Le.waterfalls){let o=ws(r.lip),a=ws(r.basin),l=ws(r.overflow),c=ws(r.landing),u=ws(r.tower),h=r.width,d=h*.42;n(o,a.clone().add(new w(0,-.02,0)),h*.7,h*.85),n(l,c,h*.9,h*1.15),s(o.clone().add(new w(0,d*.45,0)),u.clone().add(new w(0,d*.45,.3)),d);let f=new Fe(new xn(r.basinRadius,r.basinRadius*.8,.18,24),ke.gold);f.position.copy(a).add(new w(0,-.1,0)),e.add(f);let p=new Fe(new Wt(r.basinRadius,.07,8,32),ke.gold);p.position.copy(a),p.rotation.x=Math.PI/2,e.add(p),s(a.clone().add(new w(0,-.12,0)),ws(r.basinTower).add(new w(0,-.12,.3)),.08),dt.addSource({pos:c.clone().setY(-.6),rate:22,kind:1,spread:h*.5,up:1.6,size:.55}),dt.addSource({pos:c.clone().setY(-.6),rate:30,kind:0,spread:h*.4,up:2.4,size:.12}),dt.addSource({pos:a.clone(),rate:10,kind:1,spread:h*.3,up:.9,size:.35})}}function P1(){let i=new Wt(Le.tunnelRadius*.965,.075,8,72),e=[],t=Le.segmentLength-Math.max(.02,Le.segmentLength*.005);for(let s=0;s<3;s++)e.push(Le.tunnelStart+s*t+.25);e.push(Le.tunnelEnd-.25),e.forEach((s,r)=>{let o=new Fe(i,new It({color:r%2===0?new pe(2.6,2,.95):new pe(1.4,2.2,2.9)}));o.matrixAutoUpdate=!1,bt.mapMatrix(new Te().makeTranslation(0,0+1.5,s),o.matrix),o.userData.pulse=r*.9,o.userData.base=o.material.color.clone(),Ct.add(o),ke.rings=ke.rings||[],ke.rings.push(o)});let n=(s,r,o,a)=>{let l=new Fe(new Ln(r,r),o);return l.matrixAutoUpdate=!1,l.renderOrder=a,bt.mapMatrix(new Te().makeTranslation(0,0+1.5,Le.tunnelEnd+s).multiply(new Te().makeRotationY(Math.PI)),l.matrix),Ct.add(l),l};ke.exitLight=[n(4.5,16,new It({map:I1(),toneMapped:!1}),0)],ke.exitLight[1]=n(1.5,7,new It({map:d0(),color:new pe(.9,1.1,1.4),transparent:!0,blending:vn,depthWrite:!1}),3)}function I1(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=e.createRadialGradient(256,256,0,256,256,256);t.addColorStop(0,"#ffffff"),t.addColorStop(.22,"#f4fbff"),t.addColorStop(.45,"#bfe9ff"),t.addColorStop(.7,"#d9c4ff"),t.addColorStop(1,"#ffc6ec"),e.fillStyle=t,e.fillRect(0,0,512,512),e.globalCompositeOperation="lighter";for(let s=0;s<18;s++){let r=s/18*Math.PI*2+s%2*.09,o=.05+s%3*.025,a=e.createRadialGradient(256,256,30,256,256,256);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(256,256),e.arc(256,256,256,r-o,r+o),e.closePath(),e.fill()}let n=new pi(i);return n.colorSpace=At,n}function d0(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new pi(i);return n.colorSpace=At,n}var L1=[{at:[2.55,2.25,-3.4],axis:[-.3,.05,-.95],d:1.8,spin:110},{at:[-2.45,1.3,-5],axis:[.3,.05,-.95],d:1.8,spin:-95}];function U1(i){Hd(i.scene,{saturation:1.25,brightness:1.1,glow:.9,lift:.08,haze:[.45,6,32,[.78,.86,1]],shade:[.88,.22,.25]}),i.scene.updateMatrixWorld(!0);let e=[];i.scene.traverse(o=>{o.isMesh&&e.push(o)});let t=new Te,n=new Te,s=new w,r=new w;ke.drumMeshes=[];for(let o of Le.drumSegments){t.fromArray(o);for(let a of e){n.multiplyMatrices(t,a.matrixWorld);let l=a.geometry,c=l.attributes.position,u=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)s.fromBufferAttribute(c,f).applyMatrix4(n),bt.map(s.x,s.y,s.z,r),u[f*3]=r.x,u[f*3+1]=r.y,u[f*3+2]=r.z;let h=new st;h.setAttribute("position",new it(u,3));for(let f of["uv","color"])l.attributes[f]&&h.setAttribute(f,l.attributes[f]);h.setIndex(l.index),h.computeVertexNormals(),h.computeBoundingSphere();let d=new Fe(h,a.material);Ct.add(d),ke.drumMeshes.push(d)}}}function D1(i){let e=i.scene;fc(e),Hd(e,{saturation:1.25,brightness:1.08,shade:[.8,.38,.45]},r=>{if(!/Bristles/.test(r.material.name))return{};let o=r.geometry.attributes.position,a=0;for(let l=0;l<o.count;l++)a=Math.max(a,Math.hypot(o.getX(l),o.getZ(l)));return{afterColor:om(a)}});for(let r of Le.rollers){if(r.centre[2]<Le.tunnelStart)continue;let o=new Ze;o.matrixAutoUpdate=!1,o.add(e.clone()),Ct.add(o),yt&&(o.visible=!1);let a=ws(r.centre);da.push({g:o,m0:bt.mapMatrix(new Te().fromArray(r.matrix)),centre:bt.map(a.x,a.y,a.z),axis:bt.dir(r.axis[0],r.axis[1],r.axis[2],a.z).normalize(),speed:Ve.degToRad(r.spin),angle:0})}let t=new $t().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w);for(let r of L1){let o=r.d/Math.max(n.x,n.z),a=new w(...r.axis).normalize(),l=bt.map(r.at[0],r.at[1],r.at[2]),c=new Te().compose(l,new Mt().setFromUnitVectors(new w(0,1,0),a),new w(o,o,o)).multiply(new Te().makeTranslation(-s.x,-s.y,-s.z)),u=new Ze;u.matrixAutoUpdate=!1,u.add(e.clone()),Ct.add(u),da.push({g:u,m0:c,centre:l,axis:a,speed:Ve.degToRad(r.spin),angle:Math.random()*6})}}var ca={at:[2.7,1.05,-8],yaw:.08,height:2.8};function N1(i){let e=i.scene;e.traverse(o=>{if(!o.isMesh)return;let a=o.material;o.material=new ht({map:a.map,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,normalMap:a.normalMap,metalness:1,roughness:1,envMap:ke.env,envMapIntensity:1.05,emissive:16777215,emissiveMap:a.map,emissiveIntensity:.2,side:lt})});let t=new $t().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w);ke.sideMachineryModel={model:e,size:n,centre:s};let r=new Ze;r.name="sideMachinery",r.add(e),Ct.add(r),ke.sideMachinery=r,Od()}function Od(){let{model:i,size:e,centre:t}=ke.sideMachineryModel,n=ke.sideMachinery,s=ca.height/e.y;i.scale.setScalar(s),i.position.copy(t).multiplyScalar(-s),n.position.set(...ca.at),n.rotation.y=Math.PI+ca.yaw,n.updateMatrixWorld(!0);let r=1/0,o=new w;i.traverse(a=>{if(!a.isMesh)return;let l=a.geometry.attributes.position;for(let c=0;c<l.count;c+=7)o.fromBufferAttribute(l,c).applyMatrix4(a.matrixWorld),o.y<1.4&&(r=Math.min(r,Math.abs(o.x)))}),Z.machineryInnerX=+r.toFixed(2)}function F1(){let i=new Ln(2,2),e=new An;e.index=i.index,e.attributes.position=i.attributes.position,e.attributes.uv=i.attributes.uv;let t=(r,o,a,l)=>[...bt.map(r,o,a).toArray(),l],n=Le.bubbles.map(r=>t(r.pos[0],r.pos[1],r.pos[2],r.size*.5));for(let r of[[.72,.42,-17.9,.24],[-.82,.3,-17.6,.3],[-1.2,1.05,-16.4,.2],[-2.05,1.55,-13.6,.55],[-1.75,.55,-14.4,.3],[1.9,1.75,-12.6,.24],[-2.4,2.6,-10.2,.4],[1.4,.15,-15.6,.22]])n.push(t(...r));for(let r=0;r<30;r++){let o=Le.startZ+2+Math.random()*(Le.tunnelEnd-Le.startZ-2),a=o>Le.tunnelStart,l=(Math.random()*2-1)*(a?1.6:4.5),c=(a?1:.8)+Math.random()*2.2,u=.06+Math.random()*.2;yt&&a&&(l=Math.sign(l||1)*(1.35+Math.abs(l)*.3),c=2.1+(c-1)*.45,u*=.6),n.push(t(l,c,o,u))}e.setAttribute("inst",new Rt(new Float32Array(n.flat()),4)),e.setAttribute("phase",new Rt(new Float32Array(n.map(()=>Math.random()*6.28)),1)),e.instanceCount=n.length,ke.bubbleU={uTime:{value:0}};let s=new Fe(e,new Qe({vertexShader:mm,fragmentShader:gm,uniforms:ke.bubbleU,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt}));s.frustumCulled=!1,s.renderOrder=5,Ct.add(s),ke.bubbles=s}function H1(i,e){e.colorSpace=At;let t=new ht({map:e,color:16777215,metalness:.6,roughness:.3,envMap:ke.env,emissive:9067008,emissiveMap:e,emissiveIntensity:1.25}),n=new ht({color:16761418,metalness:1,roughness:.25,envMap:ke.env,envMapIntensity:1.3,emissive:8014336,emissiveIntensity:.8}),s=new xn(.3,.3,.08,36);s.rotateX(Math.PI/2);let r=[n,t,t],o=yt?ra(er(39484),()=>({hi:Td("high"),lo:Td("low"),mat:i0(ke.env)})):null,a=(v,_)=>{let y=v.z;v=bt.map(v.x,v.y,v.z);let C=o?ra(er(39485+ic.length),()=>{let T=new cl;return T.addLevel(new Fe(o.hi,o.mat),0),T.addLevel(new Fe(o.lo,o.mat),9),T}):new Fe(s,r);C.position.copy(v),Ct.add(C),ic.push({obj:C,home:v.clone(),kind:"coin",live:!0,pop:-1,phase:Math.random()*6,compose:_,u:y,q0:yt?bt.quaternion(y,new Mt):null})},l=v=>ws(v).multiply(new w(.7/.85,1,1)),c=Le.tunnelStart,u=Le.screen4Z+11,h=(v,_,y)=>new w(v,Un(Le,v,y)+_,y);if(yt){for(let v of Le.coins3)v[2]<c&&a(l(v),!0);for(let[v,_,y,C,T,A]of Kt.coinLines)for(let D=0;D<y;D++){let E=Gi?T+A*Math.sin(Math.PI*D/Math.max(1,y-1)):Kt.coinH;a(h(Dn(v),E,_+D*(Gi?C:Kt.coinStep)))}}else{for(let v of Le.coins3)a(l(v),!0);for(let v of Le.coins4)a(l(v),!0);for(let v=0;v<6;v++)a(h(Dn(1),.65,c+2.5+v*1.6));for(let v=0;v<5;v++)a(h(Dn(2),.65+Math.sin(v/4*Math.PI)*.9,c+4+v*1.5));for(let v=0;v<5;v++)a(h(Dn(0),.65,u+v*1.3))}let d=i.scene;fc(d);let f=new $t().setFromObject(d),p=f.getSize(new w),x=f.getCenter(new w),g=.42/p.y;if(d.traverse(v=>{if(!v.isMesh)return;let _=v.material.map;v.material=new ht({map:_,metalness:0,roughness:.12,envMap:ke.env,envMapIntensity:1.6,emissive:16777215,emissiveMap:_,emissiveIntensity:.35,side:lt})}),ke.gemMaterials=[],d.traverse(v=>{v.isMesh&&ke.gemMaterials.push(v.material)}),Gi)for(let v of ke.gemMaterials)v.color.setRGB(..._n.gem.color),v.emissive.setRGB(..._n.gem.emissive);let m=(v,_)=>{let y=v.z;v=bt.map(v.x,v.y,v.z);let C=new Ze,T=d.clone(),A=g*(yt?1.2:1);T.scale.setScalar(A),T.position.copy(x).multiplyScalar(-A),C.add(T),C.position.copy(v),Ct.add(C),sc.push({obj:C,home:v.clone(),kind:"gem",live:!0,pop:-1,phase:Math.random()*6,spin:Math.random()*6,compose:_,u:y})};if(yt){for(let[v,_]of Kt.gems)m(h(Dn(v),Kt.gemH,_));return}m(l(Le.gem4),!0),m(h(Dn(1),1.7,Le.tunnelEnd-1.5)),m(h(Dn(0),1.35,c+10.5)),m(h(Dn(1),.7,c+12)),m(h(Dn(2),.7,u+1.5))}var jl={};function O1(i,e){if(!jl[i]){let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);i==="sock"?(r.addColorStop(0,"rgba(255,248,236,0.95)"),r.addColorStop(.42,"rgba(255,190,232,0.62)"),r.addColorStop(.7,"rgba(255,214,120,0.42)"),r.addColorStop(.78,"rgba(255,170,220,0.18)"),r.addColorStop(1,"rgba(255,160,220,0)")):(r.addColorStop(0,"rgba(255,170,250,0.8)"),r.addColorStop(.5,"rgba(210,90,255,0.35)"),r.addColorStop(1,"rgba(160,60,255,0)")),s.fillStyle=r,s.fillRect(0,0,128,128),jl[i]=new pi(n),jl[i].colorSpace=At}let t=new as(new Di({map:jl[i],transparent:!0,depthWrite:!1,blending:vn,opacity:i==="sock"?.7:.6}));return t.scale.setScalar(e),t.position.z=.32,t.renderOrder=4,t.name="r2Halo",t}function B1(i){let e=i.scene;e.traverse(l=>{l.isMesh&&(l.material=new wl({map:l.material.map,emissive:16777215,emissiveMap:l.material.map,emissiveIntensity:.32}))});let t=new $t().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w),r=(yt?.74:.62)/n.y,o=Le.tunnelStart,a=yt?Kt.socks.map(([l,c])=>[l,Kt.sockH,c]):[[1,.8,o+7.5],[0,.95,o+11.8],[2,1,o+15.6],[1,.85,o+21],[0,.9,o+26.4]];yt&&e.traverse(l=>{l.isMesh&&(l.material.emissiveIntensity=.42)});for(let[l,c,u]of a){let h=Dn(l),d=new Ze,f=new Ze,p=e.clone();p.scale.setScalar(r),p.position.copy(s).multiplyScalar(-r),f.add(p),f.rotation.y=Math.PI,d.add(f),bt.map(h,Un(Le,h,u)+c,u,d.position),bt.quaternion(u,d.quaternion),yt&&ra(er(20672+rc.length),()=>d.add(O1("sock",1.25))),Ct.add(d),rc.push({obj:d,turn:f,home:d.position.clone(),kind:"sock",live:!0,pop:-1,phase:Math.random()*6,u})}}var lc=class{constructor(e){this.n=e,this.next=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.size0=new Float32Array(e),this.kind=new Float32Array(e),this.grav=new Float32Array(e),this.sizeA=new Float32Array(e),this.alphaA=new Float32Array(e),this.fl=new Float32Array(e*6);let t=new st;this.posAttr=new it(this.p,3).setUsage(zn),this.sizeAttr=new it(this.sizeA,1).setUsage(zn),this.alphaAttr=new it(this.alphaA,1).setUsage(zn),this.kindAttr=new it(this.kind,1).setUsage(zn),t.setAttribute("position",this.posAttr),t.setAttribute("size",this.sizeAttr),t.setAttribute("alpha",this.alphaAttr),t.setAttribute("kind",this.kindAttr),this.u={uScale:{value:400}},this.points=new Gs(t,new Qe({vertexShader:vm,fragmentShader:xm,uniforms:this.u,transparent:!0,depthWrite:!1,blending:on,blendSrc:cn,blendDst:Yt})),this.points.frustumCulled=!1,this.points.renderOrder=6,this.sources=[],Ct.add(this.points)}emit(e,t,n,s,r,o,a,l,c,u=1,h=null){let d=this.next;this.next=(this.next+1)%this.n,this.p.set([e,t,n],d*3),this.v.set([s,r,o],d*3),this.life[d]=l,this.max[d]=l,this.size0[d]=a,this.kind[d]=c,this.grav[d]=u,h?this.fl.set(h,d*6):this.fl.fill(0,d*6,d*6+6)}emitT(e,t,n,s,r,o,a,l,c,u=1){bt.frame(n,Oe);let h=Un(Le,e,n),d=Oe.P.x+Oe.R.x*e+Oe.U.x*t,f=Oe.P.y+Oe.R.y*e+Oe.U.y*t,p=Oe.P.z+Oe.R.z*e+Oe.U.z*t;this.emit(d,f,p,Oe.R.x*s+Oe.U.x*r+Oe.T.x*o,Oe.R.y*s+Oe.U.y*r+Oe.T.y*o,Oe.R.z*s+Oe.U.z*r+Oe.T.z*o,a,l,c,u,[Oe.P.x+Oe.R.x*e+Oe.U.x*h,Oe.P.y+Oe.R.y*e+Oe.U.y*h,Oe.P.z+Oe.R.z*e+Oe.U.z*h,Oe.U.x,Oe.U.y,Oe.U.z])}burstT(e,t,n,s,r,o={}){for(let a=0;a<s;a++){let l=Math.random()*Math.PI*2,c=(.4+Math.random())*r,u=o.dir||0;this.emitT(e+Math.cos(l)*.25,t,n+Math.sin(l)*.25,Math.cos(l)*c*.9+u*r*.9,(1.2+Math.random()*1.6)*r*(o.up??1),Math.sin(l)*c*.9+(o.vz||0),(o.size||.11)*(.6+Math.random()*.8),.5+Math.random()*.5,o.kind??0,o.grav??1)}}sparkle(e,t){for(let n=0;n<t;n++){let s=new w().randomDirection().multiplyScalar(1+Math.random()*2.5);this.emit(e.x,e.y,e.z,s.x,s.y+.6,s.z,.16+Math.random()*.2,.45+Math.random()*.45,2,-.1)}}addSource(e){e.carry=0,this.sources.push(e)}update(e){for(let t of this.sources)for(t.carry+=t.rate*e;t.carry>=1;t.carry--){let n=Math.random()*Math.PI*2,s=Math.random()*t.spread;this.emit(t.pos.x+Math.cos(n)*s,t.pos.y+.05,t.pos.z+Math.sin(n)*s,Math.cos(n)*.6,t.up*(.5+Math.random()*.7),Math.sin(n)*.6,t.size*(.6+Math.random()*.8),.5+Math.random()*.6,t.kind,t.kind===1?.15:1,[t.pos.x,t.pos.y,t.pos.z,0,1,0])}for(let t=0;t<this.n;t++){if(this.life[t]<=0){this.alphaA[t]=0,this.sizeA[t]=0;continue}this.life[t]-=e;let n=t*3;this.v[n+1]-=9.81*this.grav[t]*e,this.kind[t]===1&&(this.v[n]*=1-e*2,this.v[n+2]*=1-e*2,this.v[n+1]*=1-e*3),this.p[n]+=this.v[n]*e,this.p[n+1]+=this.v[n+1]*e,this.p[n+2]+=this.v[n+2]*e;let s=1-this.life[t]/this.max[t];this.alphaA[t]=Math.min(1,s*8)*(1-s*s),this.sizeA[t]=this.size0[t]*(this.kind[t]===1?.7+s*1.2:this.kind[t]===2?Math.sin(Math.min(1,s*1.4)*Math.PI):1);let r=t*6,o=this.fl[r+3],a=this.fl[r+4],l=this.fl[r+5];this.kind[t]===0&&(o!==0||a!==0||l!==0)&&(this.p[n]-this.fl[r])*o+(this.p[n+1]-this.fl[r+1])*a+(this.p[n+2]-this.fl[r+2])*l<-.05&&this.v[n]*o+this.v[n+1]*a+this.v[n+2]*l<0&&(this.life[t]=0)}this.posAttr.needsUpdate=this.sizeAttr.needsUpdate=this.alphaAttr.needsUpdate=this.kindAttr.needsUpdate=!0}},Ad=0;function io(i,e,t){nr.uRipples.value[Ad].set(i,e,Z.time,t),Ad=(Ad+1)%js}var z1=1.04;function k1(i){let e=i.scene;Z.repairedNormals=fc(e);let t=new $t().setFromObject(e),n=t.getSize(new w),s=t.getCenter(new w),r=z1/n.x;e.position.copy(s).multiplyScalar(-r),e.scale.setScalar(r),ke.fur={uCentre:{value:new w},uUp:{value:new w(0,1,0)},uRadius:{value:n.y*r*.5},uKey:{value:new w(.35,.85,-.42).normalize()},uTime:{value:0},uSky:{value:new pe(1,.86,1)},uGround:{value:new pe(.55,.42,.95)},uRim:{value:new pe(1,.55,.88)},uTip:{value:new pe(1,.8,.96)},uSpike:{value:0}},e.traverse(c=>{c.isMesh&&(c.material=new Qe({uniforms:{map:{value:c.material.map},...ke.fur},vertexShader:_m,fragmentShader:Mm,side:lt}))});let o=new Ze;o.add(e);let a=new Ze;a.add(o);let l=new Ze;l.add(a),Ct.add(l),Ke={root:l,tilt:a,squash:o,height:n.y*r,lane:1,x:0,xv:0,z:Le.startZ,y:0,speed:0,air:!1,vy:0,yAbs:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0,look:0,lookT:2.5,lastSlope:0,downhill:0,wakeCarry:0,foamCarry:0,bobRipple:0}}function Bd(){let i=Ke;Object.assign(i,{lane:1,x:0,xv:0,z:Le.startZ,speed:0,air:!1,vy:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0}),i.yAbs=zi(Le,0,Le.startZ,Z.time)+.34;for(let e of[...ic,...sc,...rc])e.live=!0,e.pop=-1,e.obj.visible=!0,e.obj.scale.setScalar(1),e.obj.position.copy(e.home);Z.socks=0,Z.phase!=="loading"&&sr(),Lt&&(Lt.n=0),mt.snap=!0}function fa(i){if(Z.phase!=="running")return;let e=Math.max(0,Math.min(2,Ke.lane+i));if(e===Ke.lane){Ke.sqV+=2;return}Ke.lane=e;let t=Ke;dt.burstT(t.x,zi(Le,t.x,t.z,Z.time)+.05,t.z,16,1,{dir:Dn(e)>t.x?1:-1,vz:t.speed*.5}),io(t.x,t.z,1),Z.lastGesture={t:Z.time,lane:e},jn("swish")}function zd(){if(Z.phase!=="running"||Ke.air)return;Ke.air=!0,Ke.vy=6.2,Ke.flip=0,Ke.sqV+=6;let i=Ke;dt.burstT(i.x,i.yAbs-.34+.05,i.z,20,1.1,{vz:i.speed*.4}),io(i.x,i.z,1.2),jn("splash")}function kd(){Z.phase==="running"&&(Ke.spinV=Math.PI*2/.5,Ke.spinLeft=Math.PI*2,jn("swish"))}function V1(i){if(Z.phase!=="running")return!1;let e=Ke;if(yt){if(Z.turboT>0||Z.blastT>0||Z.guardT>0||Z.outT>=0)return dt.sparkle(e.root.position.clone().add(new w(i*.5,.4,0)),14),jn("swish"),!1;Z.hearts=Math.max(0,Z.hearts-1),Z.knocks++,Z.guardT=Kt.hurtGuard,sr(),pa("heartPill"),q1(),Z.hearts===0&&(Z.outT=0,nt("r2Toast").classList.add("show"))}e.lane=1,e.speed*=.55,e.sqV-=12;let t=zi(Le,e.x,e.z,Z.time);return dt.burstT(e.x,t+.1,e.z,40,1.6,{dir:-i,vz:e.speed*.3}),dt.burstT(e.x,t+.05,e.z,8,.9,{kind:1,size:.24,grav:.15,up:.6}),io(e.x,e.z,1.6),jn("splash"),Z.bumps=(Z.bumps||0)+1,!0}function G1(i){let e=Ke,t=Z.time,n=Z.phase==="running",s=Xl(Le,e.x,e.z),r=s+Math.tan(bt.pitch(e.z)),o=n?7*(1+Ve.clamp(-r*1.6,-.22,.4))*(yt&&Z.turboT>0?Kt.turboSpeed:1):0;e.speed+=(o-e.speed)*Math.min(1,i*(n?2.2:4)),e.z+=e.speed*i;{let f=11.11111111111111,p=f*i,x=1/(1+p+.48*p*p+.235*p*p*p),g=Dn(e.lane),m=e.x-g,v=(e.xv+f*m)*i;e.xv=(e.xv-f*v)*x,e.x=g+(m+v)*x}let a=zi(Le,e.x,e.z,t),l=Math.sin(t*1.7*Math.PI*2)*.05,c=a+.34+l;e.air?(e.vy-=17*i,e.yAbs+=e.vy*i,e.flip=Math.min(Math.PI*2,e.flip+i*(Math.PI*2)/.62),e.yAbs<=c&&e.vy<0&&(e.air=!1,e.flip=0,e.sqV-=9+Math.min(8,-e.vy),dt.burstT(e.x,a+.05,e.z,34,1.4,{vz:e.speed*.5}),dt.burstT(e.x,a+.05,e.z,6,.8,{kind:1,size:.22,grav:.15,up:.5}),io(e.x,e.z,1.6),jn("splash"))):e.yAbs=c,e.downhill+=(Ve.clamp(-r*4,0,1)-e.downhill)*Math.min(1,i*4);let u=Math.max(0,r-e.lastSlope)/Math.max(i,.001);if(n&&!e.air&&u>.35&&e.lastSlope<-.1){for(e.splashCarry=(e.splashCarry||0)+u*i*36;e.splashCarry>=1;e.splashCarry--)dt.emitT(e.x+(Math.random()*2-1)*.55,a+.05,e.z+.2+Math.random()*.4,(Math.random()*2-1)*2.2,2.2+Math.random()*2.4,e.speed*(.6+Math.random()*.3),.07+Math.random()*.08,.6+Math.random()*.4,0);e.sqV-=u*i*25,(!e.splashRipple||Z.time-e.splashRipple>.4)&&(io(e.x,e.z,1.4),e.splashRipple=Z.time,jn("splash"))}if(e.pitch+=(Math.atan(s)*.9-e.pitch)*Math.min(1,i*6),e.lean+=(Ve.clamp(-e.xv*.22,-.45,.45)-e.lean)*Math.min(1,i*10),e.yaw+=(Ve.clamp(e.xv*.1,-.3,.3)-e.yaw)*Math.min(1,i*8),e.spinLeft>0){let f=Math.min(e.spinLeft,e.spinV*i);e.spin+=f,e.spinLeft-=f}else e.spin=0;e.sqV+=(-e.sq*90-e.sqV*9)*i,e.sq+=e.sqV*i,n?e.look=Math.max(0,e.look-i/.3):(e.lookT-=i,e.lookT<0?(e.look=Math.min(1,e.look+i/.55),e.lookT<-1.6&&(e.lookT=4.5)):e.look=Math.max(0,e.look-i/.55));let h=Ve.smoothstep(e.look,0,1)*Math.PI*.92;bt.map(e.x,e.yAbs,e.z,e.root.position),bt.quaternion(e.z,e.root.quaternion),e.tilt.rotation.set(-e.pitch+(e.air?-e.flip:0)+Math.sin(t*3.4)*.03*(n?1:.4),e.yaw+e.spin+h,e.lean+Math.sin(t*2.2)*.04,"YXZ");let d=1+e.sq*.25;if(e.squash.scale.set(1/Math.sqrt(d),d,1/Math.sqrt(d)),!e.air){let f=e.speed/7;for(e.wakeCarry+=(n?8+22*f+50*e.downhill+Math.abs(e.xv)*18:2)*i;e.wakeCarry>=1;e.wakeCarry--){let p=Math.random()<.5?-1:1;dt.emitT(e.x+p*(.25+Math.random()*.25),a+.04,e.z-.15-Math.random()*.3,p*(.5+Math.random()*1.2)-e.xv*.4,1+Math.random()*(1.6+2.2*e.downhill),e.speed*(.35+Math.random()*.3),.04+Math.random()*.07,.45+Math.random()*.4,0)}for(e.bowCarry=(e.bowCarry||0)+(n?6+18*f+24*e.downhill:0)*i;e.bowCarry>=1;e.bowCarry--){let p=Math.random()<.5?-1:1,x=Math.random()*.9;dt.emitT(e.x+p*(.42+Math.random()*.15),a+.08,e.z+.15+x*.3,p*(.9+Math.random()*1.1)-e.xv*.3,1.4+Math.random()*1.6,e.speed*(.55+Math.random()*.25),.04+Math.random()*.05,.4+Math.random()*.3,0)}for(e.foamCarry+=(n?1.5+3*f+5*e.downhill:.8)*i;e.foamCarry>=1;e.foamCarry--){let p=Math.random()<.5?-1:1;dt.emitT(e.x+p*(.32+Math.random()*.25),a+.05,e.z-.35-Math.random()*.6,p*.45,.2,e.speed*.75,.1+Math.random()*.12,.45+Math.random()*.3,1,.1)}if(!n)for(e.restBubbles=(e.restBubbles||0)+14*i;e.restBubbles>=1;e.restBubbles--){let p=Math.random()*Math.PI*2,x=.42+Math.random()*.28;dt.emitT(e.x+Math.cos(p)*x,a+.02,e.z+Math.sin(p)*x*.7,Math.cos(p)*.15,.25+Math.random()*.3,0,.07+Math.random()*.09,1+Math.random()*.8,0,-.03)}e.bobRipple-=i,e.bobRipple<0&&(io(e.x,e.z,n?.35:.6),e.bobRipple=n?.45:1.2)}nr.uPlayer.value.set(e.x,a,e.z),nr.uPlayerMove.value.set(e.xv,e.speed/7,e.downhill),e.lastSlope=r,ke.fur.uTime.value=t,ke.fur.uCentre.value.copy(e.root.position),bt.frame(e.z,Oe),ke.fur.uUp.value.copy(Oe.U),document.body.classList.toggle("inDrum",n&&e.z>Le.tunnelStart-.5),Lt&&nE(),n&&e.z>Le.tunnelEnd-2&&Y1()}function W1(i){let e=Ke;if(Z.guardT=Math.max(0,Z.guardT-i),Z.blastT>0&&(Z.blastT=Math.max(0,Z.blastT-i),Ts.clearBrushes&&Ts.clearBrushes(e.z-1,e.z+Kt.blastReach)),Z.turboT>0)for(Z.turboT=Math.max(0,Z.turboT-i),(!e.spinLeft||e.spinLeft<.5)&&(e.spinV=Math.PI*2/.32,e.spinLeft=Math.PI*2),e.turboCarry=(e.turboCarry||0)+i*60;e.turboCarry>=1;e.turboCarry--){let t=Math.random()*Math.PI*2,n=zi(Le,e.x,e.z,Z.time);dt.emitT(e.x+Math.cos(t)*.5,n+.1+Math.random()*.4,e.z+Math.sin(t)*.3,Math.cos(t)*2.2,.8+Math.random(),e.speed*.4,.08+Math.random()*.07,.4+Math.random()*.3,0)}Z.outT>=0&&(Z.outT+=i,Z.outT>=Kt.outOfHearts&&f0()),nt("r2Shield").classList.toggle("on",Z.blastT>0||Z.turboT>0)}function X1(i){let e=Ke,t=g1;if(Z.phase!=="running"||e.z<Le.tunnelStart-.3)return;let n=_n.spray,s=zi(Le,e.x,e.z,Z.time);if(!e.air)for(e.r3Spray=(e.r3Spray||0)+n.rate*i;e.r3Spray>=1;e.r3Spray--){let o=t()<.5?-1:1,a=t();dt.emitT(e.x+o*(.38+t()*.3),s+.05,e.z-.25+a*.5,o*(.4+t()*1.4)-e.xv*.3,1.6+t()*2.2,e.speed*(.45+t()*.35),n.size[0]+t()*(n.size[1]-n.size[0]),.45+t()*.35,3,.9)}let r=_n.sparkles;for(e.r3Spark=(e.r3Spark||0)+r.rate*i;e.r3Spark>=1;e.r3Spark--){let o=t()*Math.PI*2,a=r.r[0]+t()*(r.r[1]-r.r[0]),l=r.du[0]+t()*(r.du[1]-r.du[0]);bt.frame(e.z+l,Oe);let c=0+1.5+Math.sin(o)*a;if(c<.35)continue;let u=Oe.P.clone().addScaledVector(Oe.R,Math.cos(o)*a).addScaledVector(Oe.U,c);dt.emit(u.x,u.y,u.z,0,.05,0,.1+t()*.14,.5+t()*.5,2,0)}}function Vd(){if(!yt||Z.phase!=="running"||Z.paused||Z.blasts<=0||Z.blastT>0||Z.outT>=0)return!1;Z.blasts--,Z.blastT=Kt.blastTime;let i=Ke,e=zi(Le,i.x,i.z,Z.time);for(let t=0;t<46;t++){let n=Math.random()*Math.PI*2,s=Math.random()*.5;dt.emitT(i.x+Math.cos(n)*s*.6,e+.5+Math.sin(n)*s*.5,i.z+.4,Math.cos(n)*.9,.4+Math.random()*.8,i.speed+4+Math.random()*5,.16+Math.random()*.2,.9+Math.random()*.6,1,-.05)}return Ts.clearBrushes&&Ts.clearBrushes(i.z-1,i.z+Kt.blastReach),pa("blastBtn"),jn("gem"),sr(),!0}function Gd(){return!yt||Z.phase!=="running"||Z.paused||Z.turbos<=0||Z.turboT>0||Z.outT>=0?!1:(Z.turbos--,Z.turboT=Kt.turboTime,pa("turboBtn"),jn("swish"),sr(),!0)}function ua(i){(!yt||Z.phase!=="running")&&(i=!1),Z.paused=!!i,document.body.classList.toggle("paused",Z.paused),nt("pausePanel").hidden=!Z.paused,kt&&(Z.paused?kt.suspend?.():kt.resume?.()),Nd=performance.now(),Z.paused&&nt("resumeBtn").focus({preventScroll:!0})}function q1(){let i=nt("r2Hurt");i.classList.remove("go"),i.offsetWidth,i.classList.add("go")}function f0(){Z.outT=-1,Z.restarts++,nt("r2Toast").classList.remove("show"),Object.assign(Z,{hearts:Kt.hearts,blasts:Kt.blasts,turbos:Kt.turbos,blastT:0,turboT:0,guardT:0}),Bd(),Z.phase="intro",document.body.classList.remove("running","inDrum"),sr()}yt&&(Ts.pop=i=>{dt.sparkle(i,22);for(let e=0;e<14;e++){let t=new w().randomDirection();dt.emit(i.x+t.x*.6,i.y+t.y*.6,i.z+t.z*.6,t.x,t.y+.5,t.z,.2+Math.random()*.2,.7,1,-.05)}});function Y1(){Z.laps++;let i=nt("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),Bd(),Z.phase="running"}var so={off:new w(0,1,-6.4),look:new w(0,.5,5.97),fov:40},Ql={off:new w(0,1.03,-3.58),look:new w(0,.89,6.42),fov:60};Gi&&(Ql.look.y=_n.camera.lookY);mt={snap:!0,x:0,y:0,tilt:0,shake:0};function $1(i){let e=Ke,t=Ve.smoothstep(e.z,-4,Le.tunnelStart+3),n=so.off.clone().lerp(Ql.off,t),s=so.look.clone().lerp(Ql.look,t),r=Ve.lerp(so.fov,Ql.fov,t),o=Un(Le,e.x,e.z)+.34,a=e.x*.55,l=o+(e.yAbs-o)*.35,c=0;for(let C=1;C<=6;C++)c+=Xl(Le,e.x,e.z+C*1.2);c/=6;let u=Z.phase==="running"?c:0,h=mt.snap;mt.snap&&(mt.x=a,mt.y=l,mt.tilt=u,mt.snap=!1);let d=1-Math.exp(-i/.14);mt.x+=(a-mt.x)*d,mt.y+=(l-mt.y)*(1-Math.exp(-i/.12)),mt.tilt+=(u-mt.tilt)*(1-Math.exp(-i/.35));let f=mt.x+n.x,p=mt.y+n.y+mt.tilt*n.z*.6,x=e.z+n.z;bt.frame(e.z,Oe),(h||!mt.fT)&&(mt.fP=Oe.P.clone(),mt.fR=Oe.R.clone(),mt.fU=Oe.U.clone(),mt.fT=Oe.T.clone());let g=1-Math.exp(-i/.25);mt.fP.copy(Oe.P),mt.fT.lerp(Oe.T,g).normalize(),mt.fU.lerp(Oe.U,g),mt.fR.crossVectors(mt.fU,mt.fT).normalize(),mt.fU.crossVectors(mt.fT,mt.fR).normalize();let m=(C,T,A,D)=>D.copy(mt.fP).addScaledVector(mt.fR,C).addScaledVector(mt.fU,T).addScaledVector(mt.fT,A),v=m(f,p,n.z,new w),_=m(mt.x+s.x,mt.y+s.y+mt.tilt*s.z,s.z,new w);if(bt.frame(x,Oe),x>-.25&&x<Le.tunnelEnd){let C=v.clone().sub(Oe.P),T=C.dot(Oe.R),A=C.dot(Oe.U)-(0+1.5),D=C.dot(Oe.T),E=Math.hypot(T,A),M=Le.clearRadius-.4;E>M&&v.copy(Oe.P).addScaledVector(Oe.R,T/E*M).addScaledVector(Oe.U,0+1.5+A/E*M).addScaledVector(Oe.T,D)}un.up.set(0,1,0).lerp(Oe.U,.75).normalize(),un.position.copy(v),un.lookAt(_);let y=un.aspect;un.fov=y>=.5?r:Ve.radToDeg(2*Math.atan(Math.tan(Ve.degToRad(r)/2)*.5/y)),un.updateProjectionMatrix()}function Z1(i){let e=Z.time,t=Ke.root.position,n=r=>r.obj.position.distanceTo(t)<.4+.42;for(let r of ic)if(!(!r.live&&r.pop<0)){if(r.pop>=0){Cd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*1.2*6.283+r.phase)*.08,r.q0?r.obj.quaternion.copy(r.q0).multiply(K1.setFromAxisAngle(j1,Math.sin(e*2-r.u*.9)*.5)):r.obj.rotation.y+=i*Ve.degToRad(120),yt&&Rd(r),Z.phase==="running"&&n(r)&&Pd(r)}for(let r of sc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){Cd(r,i);continue}if(r.spin+=i*Ve.degToRad(70),r.obj.position.y=r.home.y+Math.sin(e*.75*6.283+r.phase)*.1,r.obj.rotation.set(Math.sin(e*.9+r.phase)*.16,r.spin,Math.sin(e*.7+r.phase*1.3)*.12),yt&&Rd(r),Z.phase==="running"&&n(r)&&Pd(r),Math.random()<i*(1.2+10*Math.max(0,1-r.obj.position.distanceTo(t)/6))){let o=r.obj.position.clone().add(new w().randomDirection().multiplyScalar(.22));dt.emit(o.x,o.y,o.z,0,.1,0,.12+Math.random()*.1,.35,2,0)}}for(let r of rc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){Cd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*.9*6.283+r.phase)*.09,r.turn.rotation.set(Math.sin(e*1.3+r.phase)*.12,Math.PI+Math.sin(e*.8+r.phase)*.45,Math.sin(e*1.1+r.phase*1.7)*.15),yt&&Rd(r),Z.phase==="running"&&n(r)&&Pd(r)}let s=sc.reduce((r,o)=>o.live?Math.max(r,1-Math.min(1,o.obj.position.distanceTo(t)/6)):r,0);for(let r of ke.gemMaterials||[])r.emissiveIntensity=.35+.6*s}var K1=new Mt,j1=new w(0,1,0);function Rd(i){let e=Ke.z-i.u,t=Ve.clamp((e-.6)/1,0,1);i.obj.scale.setScalar(1-t+.001),i.obj.visible=t<1}function Cd(i,e){i.pop+=e;let t=Math.min(1,i.pop/.35);i.obj.position.lerp(Ke.root.position.clone().add(new w(0,yt?1:.6,0)),t),i.obj.scale.setScalar((1+(yt?.15:.6)*Math.sin(t*Math.PI))*(1-t)+.001),t>=1&&(i.pop=-1,i.obj.visible=!1)}function Pd(i){i.live=!1,i.pop=0,i.kind==="coin"?(Z.coins++,Z.collected.coins++,dt.sparkle(i.obj.position,7),jn("coin")):i.kind==="sock"?(Z.socks++,Z.collected.socks=(Z.collected.socks||0)+1,dt.sparkle(i.obj.position,16),jn("gem"),pa("sockPanel")):(Z.gems++,Z.collected.gems++,dt.sparkle(i.obj.position,18),jn("gem"),pa("gemPill")),sr()}function sr(){yt&&(nt("hearts").innerHTML=Z.hearts>=Kt.hearts?`${Z.hearts} <small>Full</small>`:String(Z.hearts),nt("blastCount").textContent=String(Z.blasts),nt("turboCount").textContent=String(Z.turbos),nt("blastBtn").disabled=Z.blasts<=0,nt("turboBtn").disabled=Z.turbos<=0),nt("coins").textContent=Z.coins.toLocaleString("en-US"),nt("gems").textContent=String(Z.gems),nt("sockCount").textContent=`${Math.min(5,Z.socks)}/5`,nt("sockBar").style.width=`${Math.min(5,Z.socks)*20}%`}function pa(i){let e=nt(i);e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}function oo(){Z.phase==="intro"&&(Z.phase="running",Z.startedAt=Z.time,document.body.classList.add("running"),eE())}var J1=["banner","startPanel"].map(i=>nt(i)),oa=nt("openingArt");function Q1(){let i=Z.phase==="running"?Z.time-Z.startedAt:-1,e=i<0?0:Ve.smoothstep(i,0,.45);for(let t of J1)t.style.opacity=(1-e).toFixed(3),t.style.transform=`translateX(-50%) translateY(calc(var(--u) * ${(12*e).toFixed(2)}))`,t.style.visibility=e>=1?"hidden":"";if(nt("hint").classList.toggle("show",i>=.3&&i<3.8&&Z.laps===0),oa){let t=Rn.art&&e<1&&oa.complete&&oa.naturalWidth>0&&document.body.classList.contains("ready");document.body.classList.toggle("openingArt",t),oa.style.visibility=t?"visible":"hidden",oa.style.opacity=(1-e).toFixed(3),nt("soundBtn").style.opacity=t?e.toFixed(3):""}if(yt){let t=i<0?0:Ve.smoothstep(i,.1,.55);document.body.classList.toggle("r2Play",t>0);let n=document.body.classList.contains("openingArt");nt("soundBtn").style.opacity=String(n?e*(1-t):1-t),nt("soundBtn").style.visibility=t>=1?"hidden":"";for(let s of["pauseBtn","blastBtn","turboBtn"]){let r=nt(s);r.style.opacity=t.toFixed(3),r.style.visibility=t>0?"":"hidden"}}}var kt=null,Ss=null;function eE(){if(!(kt||o0))try{kt=new(window.AudioContext||window.webkitAudioContext),Ss=kt.createGain(),Ss.gain.value=Z.sound?.5:0,Ss.connect(kt.destination);let i=kt.createBuffer(1,kt.sampleRate*2,kt.sampleRate),e=i.getChannelData(0);for(let r=0;r<e.length;r++)e[r]=Math.random()*2-1;let t=kt.createBufferSource();t.buffer=i,t.loop=!0;let n=kt.createBiquadFilter();n.type="lowpass",n.frequency.value=900;let s=kt.createGain();s.gain.value=.06,t.connect(n).connect(s).connect(Ss),t.start()}catch{kt=null}}function Id(i,e,t,n,s="sine"){let r=kt.createOscillator(),o=kt.createGain();r.type=s,r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(Ss),r.start(e),r.stop(e+t+.05)}function jn(i){if(!kt||!Z.sound)return;let e=kt.currentTime;if(i==="coin")Id(1318.5,e,.12,.25,"triangle"),Id(1975.5,e+.06,.22,.2,"triangle");else if(i==="gem")[1567.98,2093,2637.02,3135.96].forEach((t,n)=>Id(t,e+n*.045,.5,.18));else if(i==="splash"||i==="swish"){let t=i==="splash"?.35:.18,n=kt.createBuffer(1,kt.sampleRate*t,kt.sampleRate),s=n.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=(Math.random()*2-1)*Math.pow(1-l/s.length,2);let r=kt.createBufferSource();r.buffer=n;let o=kt.createBiquadFilter();o.type="bandpass",o.frequency.value=i==="splash"?700:1800,o.Q.value=.8;let a=kt.createGain();a.gain.value=i==="splash"?.5:.18,r.connect(o).connect(a).connect(Ss),r.start(e)}}var ri=null,r0=["left","middle","right"],ec=[],aa=null;function Wd(i,e){if(!dc)return;let t=hn.getBoundingClientRect();ec.push({x:i.clientX-t.left,y:i.clientY-t.top,t:Z.time,down:e}),ec.length>80&&ec.shift()}function cc(i){dc&&(aa={text:i,t:Z.time})}hn.addEventListener("pointerdown",i=>{i.target.closest("button")||yt&&Z.paused||(ri={x:i.clientX,y:i.clientY,t:performance.now(),used:!1},hn.setPointerCapture?.(i.pointerId),Wd(i,!0))});hn.addEventListener("pointermove",i=>{if(!ri||(Wd(i,!0),ri.used))return;let e=i.clientX-ri.x,t=i.clientY-ri.y,n=Math.max(24,hn.clientWidth*.06);if(Math.abs(e)>n&&Math.abs(e)>Math.abs(t)){ri.used=!0,Z.phase==="intro"&&oo();let s=Ke.lane;fa(e<0?-1:1),cc(`Swipe ${e<0?"\u2190":"\u2192"}  \xB7  ${s===Ke.lane?"edge lane":`lane ${r0[s]} \u2192 ${r0[Ke.lane]}`}`)}else t<-n&&Math.abs(t)>Math.abs(e)&&(ri.used=!0,Z.phase==="intro"&&oo(),zd(),cc("Swipe \u2191  \xB7  jump"))});hn.addEventListener("pointerup",i=>{ri&&(Wd(i,!1),!ri.used&&performance.now()-ri.t<400&&(Z.phase==="intro"?(oo(),cc("Tap  \xB7  start")):(kd(),cc("Tap  \xB7  spin"))),ri=null)});window.addEventListener("keydown",i=>{if(Z.phase==="loading")return;let e=i.key;if(yt&&Z.phase==="running"){if(e==="p"||e==="P"||e==="Escape"){ua(!Z.paused),i.preventDefault();return}if(Z.paused)return;if(e==="b"||e==="B"){Vd();return}if(e==="t"||e==="T"){Gd();return}}if(Z.phase==="intro"&&[" ","Enter","ArrowLeft","ArrowRight","ArrowUp","a","d","w"].includes(e)&&(oo(),e===" "||e==="Enter")){i.preventDefault();return}e==="ArrowLeft"||e==="a"?fa(-1):e==="ArrowRight"||e==="d"?fa(1):e==="ArrowUp"||e==="w"?zd():e===" "&&(i.preventDefault(),kd())});function p0(){Z.sound=!Z.sound,nt("soundBtn").setAttribute("aria-pressed",String(!Z.sound)),nt("soundBtn").title=Z.sound?"Sound on":"Sound off",Ss&&(Ss.gain.value=Z.sound?.5:0),yt&&(nt("pauseSound").textContent=Z.sound?"Sound: On":"Sound: Off",nt("pauseSound").setAttribute("aria-pressed",String(Z.sound)))}nt("soundBtn").addEventListener("click",p0);if(yt){document.body.classList.add("r2"),nt("hint").after(nt("r2Hud").content.cloneNode(!0));for(let i of["pauseBtn","blastBtn","turboBtn","pausePanel","r2Toast","r2Hurt","r2Shield"])nt(i).hidden=!1;nt("pausePanel").hidden=!0,nt("blastBtn").addEventListener("click",i=>{i.currentTarget.blur(),Vd()}),nt("turboBtn").addEventListener("click",i=>{i.currentTarget.blur(),Gd()}),nt("pauseBtn").addEventListener("click",i=>{i.currentTarget.blur(),ua(!0)}),nt("resumeBtn").addEventListener("click",()=>ua(!1)),nt("pauseSound").addEventListener("click",p0),nt("restartBtn").addEventListener("click",()=>{ua(!1),f0()})}var Lt=null;function tE(){let i=new fi(-1,1,1,-1,.1,500),e=new Ze;Ct.add(e);let t=[],n=[],s=0;for(let u=Le.startZ-10;u<=Le.tunnelEnd+8;u+=.2,s++){let h=bt.map(0,Un(Le,0,u),u);if(t.push(h.x,h.y,h.z,h.x,h.y-.45,h.z),s){let d=s*2;n.push(d-2,d-1,d,d-1,d+1,d)}}let r=new st;r.setAttribute("position",new je(t,3)),r.setIndex(n),e.add(new Fe(r,new It({color:2063871,side:lt})));for(let u of[1.5+Le.tunnelRadius,1.5-Le.tunnelRadius]){let h=[];for(let d=Le.tunnelStart;d<=Le.tunnelEnd;d+=.5)h.push(bt.map(0,u,d));e.add(new Fe(new Ys(new ls(h),h.length*2,.05,6),new It({color:14721056})))}let o=1200,a=new Float32Array(o*3),l=new st;l.setAttribute("position",new it(a,3)),l.setDrawRange(0,0);let c=new Gs(l,new Vs({color:16719774,size:5,sizeAttenuation:!1}));c.frustumCulled=!1,e.add(c);for(let u of[ke.castle,tr,ke.machinery,ke.sideMachinery,ir&&ir.root,ha&&ha.tunnel,ke.falls,ke.bubbles,...ke.drumMeshes||[],...ke.exitLight||[],...da.map(h=>h.g)])u&&(u.visible=!1);Lt={cam:i,g:e,dots:c,tp:a,n:0,N:o,yc:1,width:22,startY:Ke.root.position.y}}function nE(){let i=Ke.root.position;Lt.n>=Lt.N&&(Lt.tp.copyWithin(0,3),Lt.n=Lt.N-1),i.toArray(Lt.tp,Lt.n*3),Lt.n++,Lt.dots.geometry.attributes.position.needsUpdate=!0,Lt.dots.geometry.setDrawRange(0,Lt.n)}function iE(){let i=hn.clientWidth,e=hn.clientHeight,t=Ke.root.position,n=Lt.cam,s=Lt.width,r=s*e/i;return n.left=-s*.36,n.right=s*.64,n.top=r/2,n.bottom=-r/2,n.updateProjectionMatrix(),n.position.set(t.x-60,Lt.yc,t.z),n.up.set(0,1,0),n.lookAt(t.x,Lt.yc,t.z),{width:s,height:r,left:t.z+n.left}}var la=nt("overlay"),tt=la.getContext("2d");function sE(){let i=hn.clientWidth,e=hn.clientHeight;(la.width!==i||la.height!==e)&&(la.width=i,la.height=e),tt.clearRect(0,0,i,e),Lt&&oE(i,e),dc&&rE(i,e)}function tc(i,e,t,n,s=1,r="center"){tt.font=`600 ${n}px Fredoka, system-ui, sans-serif`;let o=tt.measureText(i).width,a=n*.6,l=r==="center"?e-o/2-a:e-a;tt.globalAlpha=s*.82,tt.fillStyle="#141c5c",tt.beginPath(),tt.roundRect(l,t-n*.95,o+a*2,n*1.6,n*.8),tt.fill(),tt.globalAlpha=s,tt.fillStyle="#fff",tt.textAlign=r==="center"?"center":"left",tt.fillText(i,e,t+n*.1),tt.globalAlpha=1}function rE(i,e){let t=ec.filter(n=>Z.time-n.t<.5);if(t.length){tt.lineCap="round",tt.lineJoin="round";for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=Z.time-a.t;tt.strokeStyle=`rgba(255,255,255,${Math.max(0,.85-l*1.6)})`,tt.lineWidth=14*(1-l),tt.beginPath(),tt.moveTo(o.x,o.y),tt.lineTo(a.x,a.y),tt.stroke()}let n=t[t.length-1],s=Z.time-n.t;tt.fillStyle=`rgba(255,255,255,${Math.max(0,.9-s*1.8)})`,tt.strokeStyle=`rgba(255,79,184,${Math.max(0,.9-s*1.8)})`,tt.lineWidth=3,tt.beginPath(),tt.arc(n.x,n.y,15,0,Math.PI*2),tt.fill(),tt.stroke()}aa&&Z.time-aa.t<1&&tc(aa.text,i/2,e*.86,Math.round(e*.024),Math.min(1,(1-(Z.time-aa.t))*3))}function oE(i,e){let t=Lt.frame,n=Ke.root.position,s=c=>(Lt.cam.top-(c-Lt.yc))/t.height*e;tt.font=`500 ${Math.round(e*.022)}px Fredoka, system-ui, sans-serif`,tt.textAlign="left";for(let c=-3;c<=6;c+=.5){let u=s(c);if(u<0||u>e)continue;let h=Math.abs(c-Math.round(c))<1e-6;tt.strokeStyle=h?"rgba(40,30,110,0.45)":"rgba(40,30,110,0.18)",tt.lineWidth=h?1.5:1,tt.beginPath(),tt.moveTo(0,u),tt.lineTo(i,u),tt.stroke(),h&&(tt.fillStyle="rgba(30,20,90,0.85)",tt.fillText(`${c>=0?"+":""}${c.toFixed(0)} m`,8,u-4))}let r=(n.z-t.left)/t.width*i,o=s(n.y);tt.strokeStyle="#ff1f9e",tt.setLineDash([6,5]),tt.lineWidth=2,tt.beginPath(),tt.moveTo(r,o),tt.lineTo(i*.9,o),tt.stroke(),tt.setLineDash([]);let a=bt.angles(Ke.z),l=Math.round(e*.028);tc(`height ${n.y>=0?"+":""}${n.y.toFixed(2)} m`,i*.9-4,o+l*.35,l,1,"left"),tc("SIDE VIEW (debug) \xB7 camera fixed in height \xB7 pink dots = the mascot's real path",i/2,l*1.5,l),tc(`tube pitch ${a.pitch>=0?"+":""}${a.pitch.toFixed(0)}\xB0  \xB7  bank ${a.bank>=0?"+":""}${a.bank.toFixed(0)}\xB0  \xB7  speed ${Ke.speed.toFixed(1)} m/s${Ke.air?"  \xB7  jumping":""}`,i/2,e-l*1.2,l)}function Xd(){let i=hn.clientWidth,e=hn.clientHeight;Wi.setSize(i,e,!1),oi.setSize(i,e),oi.setPixelRatio(Vi),ro.resolution.set(Math.round(i*.5),Math.round(e*.5)),un.aspect=i/e,dt&&(dt.u.uScale.value=e*Vi*.5/Math.tan(Ve.degToRad(un.fov)/2)),hn.style.setProperty("--u",Math.min(e/537,i/269).toFixed(4)+"px")}new ResizeObserver(Xd).observe(hn);function uc(i){if(!(yt&&Z.paused)){Z.time+=i,yt&&W1(i),Gi&&X1(i),nr.uTime.value=Z.time;for(let e of u0)e.uTime.value=Z.time;ke.bubbleU.uTime.value=Z.time,G1(i),Z1(i);for(let e of da)e.angle+=e.speed*i,ac.setFromAxisAngle(e.axis,e.angle),oc.makeTranslation(e.centre.x,e.centre.y,e.centre.z).multiply(w1.makeRotationFromQuaternion(ac)).multiply(new Te().makeTranslation(-e.centre.x,-e.centre.y,-e.centre.z)),e.g.matrix.multiplyMatrices(oc,e.m0);ha.update(i,Z.time),ir.update(i,Z.time);for(let e of ke.rings)e.material.color.copy(e.userData.base).multiplyScalar(.8+.25*Math.sin(Z.time*2.4+e.userData.pulse));dt.update(i),$1(i),Q1(),nc&&nc.update(i,Z.time,Z.phase)}}var Ld=60,Jl=0;function hc(){Lt?(Lt.frame=iE(),dt&&(dt.u.uScale.value=hn.clientHeight*Vi/Lt.frame.height),Wi.render(Ct,Lt.cam)):(dt&&(dt.u.uScale.value=hn.clientHeight*Vi*.5/Math.tan(Ve.degToRad(un.fov)/2)),oi.render()),(Lt||dc)&&sE()}var Nd=performance.now();function m0(i){if(requestAnimationFrame(m0),Z.phase==="loading"||o0)return;let e=Math.min(.05,(i-Nd)/1e3);Nd=i,uc(e),hc(),Ld+=(1/Math.max(e,.001)-Ld)*.05,Jl=Ld<32?Jl+e:0,Jl>2.5&&(Jl=0,ro.enabled?ro.enabled=!1:Vi>.75&&(Vi=Math.max(.75,Vi*.8),Wi.setPixelRatio(Vi),Xd()))}async function aE(){try{Le=await(await fetch(Dd.layout)).json(),bt=Em(Le,m1?{straight:dn.straight}:{}),S1();let[e,t,n,s,r,o,a,l,c,u,h,d]=await Promise.all([...["castle","drum","mascot","roller","gem","sock","machinery","tower","gear","pipe","crown"].map(b1),new ps().loadAsync("ui/coin_face.png")]);dt=new lc(Gi?2200:1400),Gi&&(dt.points.material.fragmentShader=dt.points.material.fragmentShader.replace("if (vKind < 0.5) {",`if (vKind > 2.5) {
    float hl = 1.0 - smoothstep(0.0, 0.4, length(p - vec2(-0.3, -0.3)));
    a = (1.0 - smoothstep(0.7, 1.0, r)) * 0.85 + hl * 0.15;
    col = mix(vec3(0.8, 0.93, 1.0), vec3(1.25), clamp(hl + (1.0 - r) * 0.5, 0.0, 1.0));
  } else if (vKind < 0.5) {`),dt.points.material.needsUpdate=!0),fc(e.scene),Hd(e.scene,{saturation:1,brightness:1.06,glow:.35,grade:rm,haze:[.3,14,45,[.86,.79,1]],shade:[.86,.26,.35]}),ke.castle=T1(e.scene,Le.castle),U1(t),A1(),R1(),C1(),P1(),D1(s),ha=Tm({scene:Ct,mats:ke,track:{TR:bt,L:Le,W:to}}),ke.machinery=ha.root,N1(a),ir=Am({scene:Ct,models:{tower:l,gear:c,pipe:u,crown:h},env:ke.env,gold:ke.gold,glowTexture:d0(),fallGeometry:h0,fallMaterial:ke.fallMat,fx:dt}),Z.decorClear=ir.clear,F1(),H1(r,d),B1(o),k1(n),_i&&!Ud&&(nc=ra(er(3045),()=>e0({scene:Ct,env:ke.env,TR:bt,L:Le,W:to,mascot:Ke,camera:un,Particles:lc,fxScale:dt.u.uScale,waterU:nr,castle:ke.castle,waterSheets:tr.children,renderPass:oi.passes[0],bumpMascot:V1,drumMeshes:ke.drumMeshes,exitLight:ke.exitLight,r2:yt?Ts:null,bloomPass:ro,outputPass:oi.passes[oi.passes.length-1],grade:a0,bubbles:ke.bubbles,rollers:da,sideMachinery:ke.sideMachinery,fur:ke.fur,mascotModel:Ke.squash.children[0],setSideMachinery:f=>(Object.assign(ca,f),Od(),Z.machineryInnerX),get rollerCandidate(){return Z.rollerCandidate},set rollerCandidate(f){Z.rollerCandidate=f}})),await Qm(er(3046),nc.loadExtras)),Ud&&tE(),Xd(),Bd(),Z.phase="intro",sr(),uc(1/60),hc(),document.body.classList.add("ready"),nt("loading").hidden=!0,g0()}catch(i){console.error(i),nt("loadMsg").textContent="The washing machine could not load: "+(i&&i.message?i.message:i)+". Reload the page to try again.",v0(i)}}var g0,v0,lE=new Promise((i,e)=>{g0=i,v0=e});requestAnimationFrame(m0);aE();window.__bw={ready:lE,state:()=>({phase:Z.phase,time:+Z.time.toFixed(3),z:+Ke.z.toFixed(3),x:+Ke.x.toFixed(3),y:+Ke.yAbs.toFixed(3),world:Ke.root.position.toArray().map(i=>+i.toFixed(3)),path:Object.fromEntries(Object.entries(bt.angles(Ke.z)).map(([i,e])=>[i,+e.toFixed(1)])),cameraUp:un.up.toArray().map(i=>+i.toFixed(3)),lane:Ke.lane,speed:+Ke.speed.toFixed(2),air:Ke.air,slope:+Ke.lastSlope.toFixed(3),pitchDeg:+Ve.radToDeg(Ke.pitch).toFixed(1),leanDeg:+Ve.radToDeg(Ke.lean).toFixed(1),coins:Z.coins,gems:Z.gems,socks:Z.socks,collected:{...Z.collected},laps:Z.laps,camera:un.position.toArray().map(i=>+i.toFixed(3)),cameraPitchDeg:+Ve.radToDeg(Math.asin(un.getWorldDirection(new w).y)).toFixed(2),particles:dt?dt.life.reduce((i,e)=>i+(e>0?1:0),0):0,repairedNormals:Z.repairedNormals,machineryInnerX:Z.machineryInnerX??null,decorClear:Z.decorClear??null,rollerCandidate:Z.rollerCandidate??null,...yt?{hearts:Z.hearts,blasts:Z.blasts,turbos:Z.turbos,paused:Z.paused,blastT:+Z.blastT.toFixed(2),turboT:+Z.turboT.toFixed(2),knocks:Z.knocks,restarts:Z.restarts,bumps:Z.bumps||0}:{}}),blast:()=>Vd(),turbo:()=>Gd(),pause:i=>ua(i),hazards:()=>Ts.hazards?Ts.hazards():null,tap:()=>{Z.phase==="intro"?oo():kd()},swipe:i=>{Z.phase==="intro"&&oo(),i==="left"?fa(-1):i==="right"?fa(1):i==="up"&&zd()},advance:(i,e=30)=>{let t=Math.max(1,Math.round(i*e));for(let n=0;n<t;n++)uc(1/e);return hc(),window.__bw.state()},render:hc,lookBack:i=>{Ke.look=i,Ke.lookT=-.5},setBloom:i=>{ro.enabled=!!i},setSideMachinery:i=>(Object.assign(ca,i),Od(),Z.machineryInnerX),setDecor:(i,e,t)=>(t===null?xi[i].splice(e,1):xi[i][e]=Object.assign(xi[i][e]||{},t),Z.decorClear=ir.place(),Z.decorClear),getDecor:()=>JSON.parse(JSON.stringify(xi)),pick:(i,e)=>{let t=hn.getBoundingClientRect(),n=new Ll;n.setFromCamera(new re(i/t.width*2-1,-(e/t.height)*2+1),un);let s=n.intersectObjects([ke.castle,ir.root,ke.sideMachinery].filter(Boolean),!0)[0];return s?{p:s.point.toArray().map(r=>+r.toFixed(2)),obj:s.object.name||s.object.parent?.name||""}:null},project:i=>{let e=new w(...i).project(un),t=hn.getBoundingClientRect();return[+((e.x+1)/2*t.width).toFixed(1),+((1-e.y)/2*t.height).toFixed(1)]},setFraming:i=>{i.off&&so.off.set(...i.off),i.look&&so.look.set(...i.look),i.fov&&(so.fov=i.fov),mt.snap=!0},clearanceTrace:(i,e=30)=>{let t=[],n=0+1.5,s=new w,r=o=>o>Le.tunnelStart+.5&&o<Le.tunnelEnd-.5;for(let o=0,a=Math.round(i*e);o<a;o++){uc(1/e);let l=Ke,c=r(l.z)?Math.hypot(l.x,l.yAbs-n)+.4:null,u=null;for(let h=l.z-9;h<=l.z+.5;h+=.05){bt.frame(h,Oe),s.copy(un.position).sub(Oe.P);let d=Math.abs(s.dot(Oe.T));(!u||d<u.along)&&(u={along:d,u:h,r:Math.hypot(s.dot(Oe.R),s.dot(Oe.U)-n)})}t.push({t:+Z.time.toFixed(3),z:+l.z.toFixed(2),body:c&&+c.toFixed(3),camera:r(u.u)?+u.r.toFixed(3):null})}return t},debug:()=>({scene:Ct,water:tr,mascot:Ke.root,particles:dt.points,renderer:Wi,composer:oi,camera:un,track:bt,layout:Le,world:to,mascotState:Ke})};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
